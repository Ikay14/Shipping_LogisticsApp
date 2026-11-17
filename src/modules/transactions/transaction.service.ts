import crypto from "crypto";
import {
  OrderStatus,
  Prisma,
  TransactionStatus,
  TransactionType,
  UserRole,
} from "../../generated/prisma/client";
import { prisma } from "../../db/prisma";
import { NotFoundError } from "../../errors/NotFoundError";
import { BadRequestError } from "../../errors/BadRequestError";
import { ForbiddenError } from "../../errors/ForbiddenError";
import { AuditService } from "../shared/service/AuditService";
import type {
  CreateTransactionInput,
  UpdateTransactionInput,
  GetTransactionsQuery,
} from "./transaction.schema";

const generateReference = (): string => {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = crypto.randomBytes(3).toString("hex").toUpperCase();
  return `TXN-${timestamp}-${random}`;
};

const VALID_TRANSACTION_TRANSITIONS: Record<
  TransactionStatus,
  TransactionStatus[]
> = {
  [TransactionStatus.PENDING]: [
    TransactionStatus.COMPLETED,
    TransactionStatus.FAILED,
  ],
  [TransactionStatus.COMPLETED]: [TransactionStatus.REVERSED],
  [TransactionStatus.FAILED]: [],
  [TransactionStatus.REVERSED]: [],
};

const TRANSACTION_INCLUDE = {
  user: { select: { id: true, name: true, email: true } },
  order: { select: { id: true, trackingNumber: true, status: true } },
  shippingDock: {
    select: { id: true, name: true, code: true, location: true },
  },
} satisfies Prisma.TransactionInclude;
import {
  getPaginationOptions,
  formatPaginatedResult,
} from "../../utils/pagination";

export interface TransactionActor {
  userId: string;
  role: UserRole;
}

export const TransactionService = {
  async getAll(query: GetTransactionsQuery = {}, actor?: TransactionActor) {
    const { page, limit, skip, take } = getPaginationOptions(query, 50);

    const isCustomer = actor?.role === UserRole.CUSTOMER;
    const where: Prisma.TransactionWhereInput = {
      ...(isCustomer
        ? { userId: actor.userId }
        : query.userId
          ? { userId: query.userId }
          : {}),
      ...(query.orderId && { orderId: query.orderId }),
      ...(query.status && { status: query.status }),
      ...(query.type && { type: query.type }),
    };

    const [data, total] = await prisma.$transaction([
      prisma.transaction.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip,
        take,
        include: TRANSACTION_INCLUDE,
      }),
      prisma.transaction.count({ where }),
    ]);

    return formatPaginatedResult(data, total, page, limit);
  },

  async getById(id: string, actor?: TransactionActor) {
    const transaction = await prisma.transaction.findUnique({
      where: { id },
      include: TRANSACTION_INCLUDE,
    });
    if (!transaction)
      throw new NotFoundError(`Transaction with id ${id} not found`);
    if (
      actor?.role === UserRole.CUSTOMER &&
      transaction.userId !== actor.userId
    ) {
      throw new ForbiddenError(
        "You do not have permission to view this transaction",
      );
    }
    return transaction;
  },

  async create(input: CreateTransactionInput, actorId: string) {
    // Validate all related entities in parallel
    const [user, order, dock] = await Promise.all([
      prisma.user.findUnique({
        where: { id: input.userId },
        select: { id: true, isActive: true },
      }),
      prisma.order.findUnique({
        where: { id: input.orderId },
        select: { id: true, userId: true, status: true, totalAmount: true },
      }),
      prisma.shippingDock.findUnique({
        where: { id: input.shippingDockId },
        select: { id: true, status: true },
      }),
    ]);

    if (!user || !user.isActive)
      throw new BadRequestError(`User ${input.userId} not found or inactive`);
    if (!order) throw new BadRequestError(`Order ${input.orderId} not found`);
    if (!dock)
      throw new BadRequestError(
        `Shipping dock ${input.shippingDockId} not found`,
      );
    if (order.userId !== input.userId) {
      throw new BadRequestError("Order does not belong to the specified user");
    }
    if (order.status === OrderStatus.CANCELLED) {
      throw new BadRequestError(
        "Cannot create a transaction for a cancelled order",
      );
    }

    if (input.type === TransactionType.PAYMENT) {
      if (order.status !== OrderStatus.PENDING) {
        throw new BadRequestError(
          `Order is already ${order.status} and cannot accept a new payment`,
        );
      }

      const existingCompletedPayment = await prisma.transaction.findFirst({
        where: {
          orderId: order.id,
          type: TransactionType.PAYMENT,
          status: TransactionStatus.COMPLETED,
        },
      });
      if (existingCompletedPayment) {
        throw new BadRequestError("Order already has a completed payment");
      }

      const expectedCents = Math.round(Number(order.totalAmount) * 100);
      const inputCents = Math.round(Number(input.amount) * 100);
      if (inputCents !== expectedCents) {
        throw new BadRequestError(
          `Payment amount (${input.amount}) must match order total (${order.totalAmount})`,
        );
      }
    }

    const reference = generateReference();
    const transaction = await prisma.transaction.create({
      data: {
        ...input,
        reference,
        metadata: input.metadata as Prisma.InputJsonValue | undefined,
      },
      include: TRANSACTION_INCLUDE,
    });

    await AuditService.log({
      userId: actorId,
      action: "TRANSACTION_CREATED",
      entity: "transaction",
      entityId: transaction.id,
      metadata: {
        reference,
        amount: transaction.amount,
        type: transaction.type,
      },
    });

    return transaction;
  },

  async update(id: string, input: UpdateTransactionInput, actorId: string) {
    const existing = await prisma.transaction.findUnique({
      where: { id },
      include: { order: { select: { id: true, status: true } } },
    });
    if (!existing)
      throw new NotFoundError(`Transaction with id ${id} not found`);

    const allowedNext = VALID_TRANSACTION_TRANSITIONS[existing.status] ?? [];
    if (input.status !== existing.status && !allowedNext.includes(input.status)) {
      throw new BadRequestError(
        `Invalid transaction status transition from ${existing.status} to ${input.status}`,
      );
    }

    const updated = await prisma.$transaction(async (tx) => {
      const txn = await tx.transaction.update({
        where: { id },
        data: {
          ...input,
          metadata: input.metadata as Prisma.InputJsonValue | undefined,
        },
        include: TRANSACTION_INCLUDE,
      });

      if (
        existing.type === TransactionType.PAYMENT &&
        input.status === TransactionStatus.COMPLETED &&
        existing.order.status === OrderStatus.PENDING
      ) {
        await tx.order.update({
          where: { id: existing.orderId },
          data: { status: OrderStatus.PAID },
        });
        await tx.orderHistory.create({
          data: {
            orderId: existing.orderId,
            status: OrderStatus.PAID,
            actorId,
            notes: `Payment completed (${existing.reference}).`,
          },
        });
      }

      return txn;
    });

    await AuditService.log({
      userId: actorId,
      action: "TRANSACTION_UPDATED",
      entity: "transaction",
      entityId: id,
      metadata: {
        reference: existing.reference,
        statusChange: input.status
          ? { from: existing.status, to: input.status }
          : undefined,
      },
    });

    return updated;
  },

  async delete(id: string, actorId: string) {
    const existing = await prisma.transaction.findUnique({ where: { id } });
    if (!existing)
      throw new NotFoundError(`Transaction with id ${id} not found`);

    if (existing.status === "COMPLETED") {
      throw new BadRequestError(
        "Cannot delete a completed transaction for audit safety. Reverse it instead.",
      );
    }

    await prisma.transaction.delete({ where: { id } });

    await AuditService.log({
      userId: actorId,
      action: "TRANSACTION_DELETED",
      entity: "transaction",
      entityId: id,
      metadata: { reference: existing.reference, amount: existing.amount },
    });
  },
};
