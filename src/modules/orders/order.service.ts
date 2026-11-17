import crypto from "crypto";
import { prisma } from "../../db/prisma";
import { NotFoundError } from "../../errors/NotFoundError";
import { BadRequestError } from "../../errors/BadRequestError";
import { ForbiddenError } from "../../errors/ForbiddenError";
import { AuditService } from "../shared/service/AuditService";
import {
  DockStatus,
  OrderStatus,
  Prisma,
  UserRole,
} from "../../generated/prisma/client";
import { ORDER_MESSAGES } from "../../constants/messages";
import {
  getPaginationOptions,
  formatPaginatedResult,
} from "../../utils/pagination";
import type {
  CreateOrderInput,
  UpdateOrderInput,
  GetOrdersQuery,
} from "./order.schema";

/**
 * Luhn-like algorithm for generating error-resistant tracking numbers.
 * SL-XXXX-XXXX-C where C is the checksum.
 */
const generateTrackingNumber = (): string => {
  const prefix = "SL";
  const timestamp = Date.now().toString(10).slice(-8);
  const random = crypto.randomInt(1000, 10000).toString();
  const base = `${timestamp}${random}`;

  let sum = 0;
  for (let i = 0; i < base.length; i++) {
    let digit = parseInt(base[i], 10);
    if (i % 2 === 0) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
  }
  const checksum = (10 - (sum % 10)) % 10;

  return `${prefix}-${base.slice(0, 4)}-${base.slice(4, 8)}-${base.slice(8)}${checksum}`;
};

const VALID_ORDER_TRANSITIONS: Record<OrderStatus, OrderStatus[]> = {
  [OrderStatus.PENDING]: [OrderStatus.PAID, OrderStatus.CANCELLED],
  [OrderStatus.PAID]: [OrderStatus.PROCESSING, OrderStatus.CANCELLED],
  [OrderStatus.PROCESSING]: [OrderStatus.SHIPPED, OrderStatus.CANCELLED],
  [OrderStatus.SHIPPED]: [OrderStatus.DELIVERED],
  [OrderStatus.DELIVERED]: [],
  [OrderStatus.CANCELLED]: [],
};

const validateDocks = async (
  originDockId?: string | null,
  destinationDockId?: string | null,
): Promise<void> => {
  if (originDockId && destinationDockId && originDockId === destinationDockId) {
    throw new BadRequestError(
      "Origin dock and destination dock cannot be the same",
    );
  }

  const [originDock, destinationDock] = await Promise.all([
    originDockId
      ? prisma.shippingDock.findUnique({ where: { id: originDockId } })
      : null,
    destinationDockId
      ? prisma.shippingDock.findUnique({ where: { id: destinationDockId } })
      : null,
  ]);

  if (originDockId && !originDock) {
    throw new BadRequestError(ORDER_MESSAGES.ORIGIN_DOCK_NOT_FOUND);
  }
  if (destinationDockId && !destinationDock) {
    throw new BadRequestError(ORDER_MESSAGES.DESTINATION_DOCK_NOT_FOUND);
  }

  for (const dock of [originDock, destinationDock]) {
    if (!dock) continue;
    if (dock.status === DockStatus.MAINTENANCE) {
      throw new BadRequestError(ORDER_MESSAGES.DOCK_MAINTENANCE);
    }
    if (dock.status !== DockStatus.ACTIVE) {
      throw new BadRequestError(
        `Dock ${dock.code} is currently ${dock.status.toLowerCase()} and cannot accept orders.`,
      );
    }
  }
};

export interface OrderActor {
  userId: string;
  role: UserRole;
}

export const OrderService = {
  async getAll(query: GetOrdersQuery, actor?: OrderActor) {
    const { page, limit, skip, take } = getPaginationOptions(
      { page: query.page, limit: query.limit },
      10,
    );

    const effectiveUserId =
      actor?.role === UserRole.CUSTOMER ? actor.userId : query.userId;

    const where: Prisma.OrderWhereInput = {
      ...(query.status && { status: query.status }),
      ...(query.priority && { priority: query.priority }),
      ...(effectiveUserId && { userId: effectiveUserId }),
      ...(query.search && {
        OR: [
          {
            trackingNumber: {
              contains: query.search,
              mode: "insensitive" as const,
            },
          },
          {
            recipientName: {
              contains: query.search,
              mode: "insensitive" as const,
            },
          },
          { recipientPhone: { contains: query.search } },
        ],
      }),
    };

    const [orders, total] = await Promise.all([
      prisma.order.findMany({
        where,
        skip,
        take,
        orderBy: { createdAt: "desc" },
        include: {
          user: { select: { id: true, name: true, email: true } },
          originDock: { select: { name: true } },
          destinationDock: { select: { name: true } },
        },
      }),
      prisma.order.count({ where }),
    ]);

    return formatPaginatedResult(orders, total, page, limit);
  },

  async getById(id: string, actor?: OrderActor) {
    const order = await prisma.order.findUnique({
      where: { id },
      include: {
        user: { select: { id: true, name: true, email: true, phone: true } },
        history: {
          orderBy: { createdAt: "desc" },
          include: { actor: { select: { name: true, role: true } } },
        },
        transactions: {
          take: 20,
          orderBy: { createdAt: "desc" },
          include: {
            shippingDock: { select: { id: true, name: true, code: true } },
          },
        },
        originDock: { select: { name: true, code: true } },
        destinationDock: { select: { name: true, code: true } },
      },
    });

    if (!order) throw new NotFoundError(`Order with id ${id} not found`);
    if (actor?.role === UserRole.CUSTOMER && order.userId !== actor.userId) {
      throw new ForbiddenError("You do not have permission to view this order");
    }
    return order;
  },

  async getByTrackingNumber(trackingNumber: string, actor?: OrderActor) {
    const order = await prisma.order.findUnique({
      where: { trackingNumber },
      include: {
        user: { select: { id: true, name: true, email: true, phone: true } },
        history: {
          orderBy: { createdAt: "desc" },
          include: { actor: { select: { name: true, role: true } } },
        },
        originDock: { select: { name: true, code: true } },
        destinationDock: { select: { name: true, code: true } },
      },
    });

    if (!order) throw new NotFoundError(ORDER_MESSAGES.ORDER_NOT_FOUND);
    if (actor?.role === UserRole.CUSTOMER && order.userId !== actor.userId) {
      throw new ForbiddenError("You do not have permission to view this order");
    }
    return order;
  },

  async create(input: CreateOrderInput, userId: string, actorId: string) {
    if (userId !== actorId) {
      const targetUser = await prisma.user.findUnique({
        where: { id: userId },
        select: { id: true, isActive: true },
      });
      if (!targetUser || !targetUser.isActive) {
        throw new BadRequestError("Target user not found or inactive");
      }
    }

    await validateDocks(input.originDockId, input.destinationDockId);

    const totalAmount =
      Math.round(
        (Number(input.amount) +
          Number(input.taxAmount) +
          Number(input.shippingFee ?? 0)) *
          100,
      ) / 100;

    for (let attempt = 0; attempt < 3; attempt++) {
      const trackingNumber = generateTrackingNumber();
      try {
        return await prisma.$transaction(async (tx) => {
          const order = await (tx as any).order.create({
            data: {
              trackingNumber,
              recipientName: input.recipientName,
              recipientPhone: input.recipientPhone,
              amount: input.amount as any,
              taxAmount: input.taxAmount as any,
              shippingFee: (input.shippingFee ?? 0) as any,
              totalAmount: totalAmount as any,
              notes: input.notes,
              originAddress: input.originAddress,
              destinationAddress: input.destinationAddress,
              status: OrderStatus.PENDING,
              priority: input.priority || "STANDARD",
              weightKg: input.weightKg as any,
              volumetricWeight: input.volumetricWeight as any,
              dimensions: input.dimensions,
              estimatedDelivery: input.estimatedDelivery
                ? new Date(input.estimatedDelivery)
                : null,
              originDockId: input.originDockId,
              destinationDockId: input.destinationDockId,
              userId,
            },
          });

          await (tx as any).orderHistory.create({
            data: {
              orderId: order.id,
              status: OrderStatus.PENDING,
              actorId,
              notes: "Initial order placement.",
            },
          });

          AuditService.log({
            userId: actorId,
            action: "ORDER_CREATED",
            entity: "order",
            entityId: order.id,
            metadata: { trackingNumber, totalAmount },
          });

          return order;
        });
      } catch (err) {
        if (
          err instanceof Prisma.PrismaClientKnownRequestError &&
          err.code === "P2002" &&
          attempt < 2
        ) {
          continue;
        }
        throw err;
      }
    }

    throw new BadRequestError("Failed to generate unique tracking number");
  },

  async updateStatus(
    id: string,
    status: OrderStatus,
    actorId: string,
    notes?: string,
  ) {
    const existing = await prisma.order.findUnique({ where: { id } });
    if (!existing) throw new NotFoundError("Order not found");

    const allowedNext = VALID_ORDER_TRANSITIONS[existing.status] ?? [];
    if (!allowedNext.includes(status)) {
      throw new BadRequestError(
        `${ORDER_MESSAGES.INVALID_STATUS}: cannot transition from ${existing.status} to ${status}`,
      );
    }

    return prisma.$transaction(async (tx) => {
      const updated = await tx.order.update({
        where: { id },
        data: {
          status,
          ...(status === OrderStatus.DELIVERED && {
            actualDelivery: new Date(),
          }),
        },
      });

      await tx.orderHistory.create({
        data: {
          orderId: id,
          status,
          actorId,
          notes: notes || `Status changed from ${existing.status} to ${status}`,
        },
      });

      AuditService.log({
        userId: actorId,
        action: "ORDER_STATUS_CHANGED",
        entity: "order",
        entityId: id,
        metadata: { from: existing.status, to: status },
      });

      return updated;
    });
  },

  async cancel(
    id: string,
    actor: { userId: string; role: UserRole },
  ) {
    const existing = await prisma.order.findUnique({ where: { id } });
    if (!existing) throw new NotFoundError(ORDER_MESSAGES.ORDER_NOT_FOUND);

    const isPrivileged =
      actor.role === UserRole.ADMIN || actor.role === UserRole.MANAGER;
    if (!isPrivileged && existing.userId !== actor.userId) {
      throw new ForbiddenError(
        "You do not have permission to cancel this order",
      );
    }

    if (existing.status !== OrderStatus.PENDING) {
      throw new BadRequestError("Only pending orders can be cancelled.");
    }

    return this.updateStatus(
      id,
      OrderStatus.CANCELLED,
      actor.userId,
      "Order cancelled by user.",
    );
  },

  async update(id: string, input: UpdateOrderInput, actorId: string) {
    const existing = await prisma.order.findUnique({ where: { id } });
    if (!existing) throw new NotFoundError(`Order with id ${id} not found`);

    if (
      input.originDockId !== undefined ||
      input.destinationDockId !== undefined
    ) {
      await validateDocks(
        input.originDockId ?? existing.originDockId,
        input.destinationDockId ?? existing.destinationDockId,
      );
    }

    const amountChanged =
      input.amount !== undefined ||
      input.taxAmount !== undefined ||
      input.shippingFee !== undefined;

    const totalAmount = amountChanged
      ? Math.round(
          (Number(input.amount ?? existing.amount) +
            Number(input.taxAmount ?? existing.taxAmount) +
            Number(input.shippingFee ?? existing.shippingFee)) *
            100,
        ) / 100
      : undefined;

    const updated = await prisma.order.update({
      where: { id },
      data: {
        ...input,
        ...(totalAmount !== undefined && { totalAmount }),
        estimatedDelivery: input.estimatedDelivery
          ? new Date(input.estimatedDelivery)
          : undefined,
        actualDelivery: input.actualDelivery
          ? new Date(input.actualDelivery)
          : undefined,
      },
    });

    AuditService.log({
      userId: actorId,
      action: "ORDER_UPDATED",
      entity: "order",
      entityId: id,
      metadata: { changes: Object.keys(input) },
    });

    return updated;
  },

  async delete(id: string, actorId: string) {
    const existing = await prisma.order.findUnique({ where: { id } });
    if (!existing) throw new NotFoundError(`Order with id ${id} not found`);

    if (existing.status !== "PENDING" && existing.status !== "CANCELLED") {
      throw new BadRequestError(
        "Only pending or cancelled orders can be deleted.",
      );
    }

    await prisma.order.delete({ where: { id } });

    AuditService.log({
      userId: actorId,
      action: "ORDER_DELETED",
      entity: "order",
      entityId: id,
      metadata: { trackingNumber: existing.trackingNumber },
    });
  },
};
