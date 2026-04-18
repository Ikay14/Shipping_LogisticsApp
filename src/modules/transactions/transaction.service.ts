import { Prisma } from "@prisma/client";
import { prisma } from "../../db/prisma";
import { NotFoundError } from "../../errors/NotFoundError";
import { BadRequestError } from "../../errors/BadRequestError";
import { AuditService } from "../../services/AuditService";
import type {
  CreateTransactionInput,
  UpdateTransactionInput,
} from "./transaction.schema";

const generateReference = (): string => {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 7).toUpperCase();
  return `TXN-${timestamp}-${random}`;
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
  PaginationInput,
} from "../../utils/pagination";

export const TransactionService = {
  async getAll(query: PaginationInput = {}) {
    const { page, limit, skip, take } = getPaginationOptions(query, 50);

    const [data, total] = await prisma.$transaction([
      prisma.transaction.findMany({
        orderBy: { createdAt: "desc" },
        skip,
        take,
        include: TRANSACTION_INCLUDE,
      }),
      prisma.transaction.count(),
    ]);

    return formatPaginatedResult(data, total, page, limit);
  },

  async getById(id: string) {
    const transaction = await prisma.transaction.findUnique({
      where: { id },
      include: TRANSACTION_INCLUDE,
    });
    if (!transaction)
      throw new NotFoundError(`Transaction with id ${id} not found`);
    return transaction;
  },

  async create(input: CreateTransactionInput, actorId: string) {
    // Validate all related entities in parallel
    const [user, order, dock] = await Promise.all([
      prisma.user.findUnique({
        where: { id: input.userId },
        select: { id: true },
      }),
      prisma.order.findUnique({
        where: { id: input.orderId },
        select: { id: true },
      }),
      prisma.shippingDock.findUnique({
        where: { id: input.shippingDockId },
        select: { id: true },
      }),
    ]);

    if (!user) throw new BadRequestError(`User ${input.userId} not found`);
    if (!order) throw new BadRequestError(`Order ${input.orderId} not found`);
    if (!dock)
      throw new BadRequestError(
        `Shipping dock ${input.shippingDockId} not found`,
      );

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
    const existing = await prisma.transaction.findUnique({ where: { id } });
    if (!existing)
      throw new NotFoundError(`Transaction with id ${id} not found`);

    const updated = await prisma.transaction.update({
      where: { id },
      data: {
        ...input,
        metadata: input.metadata as Prisma.InputJsonValue | undefined,
      },
      include: TRANSACTION_INCLUDE,
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
