import { prisma } from "../../db/prisma";
import { NotFoundError } from "../../errors/NotFoundError";
import { BadRequestError } from "../../errors/BadRequestError";
import { AuditService } from "../../services/AuditService";
import { OrderStatus } from "@prisma/client";
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
  const random = Math.floor(1000 + Math.random() * 9000).toString();
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

export const OrderService = {
  async getAll(query: GetOrdersQuery) {
    const { page, limit, skip, take } = getPaginationOptions(
      { page: query.page, limit: query.limit },
      10,
    );

    const where = {
      ...(query.status && { status: query.status }),
      ...(query.priority && { priority: query.priority }),
      ...(query.userId && { userId: query.userId }),
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
    } as any;

    const [orders, total] = await Promise.all([
      prisma.order.findMany({
        where,
        skip,
        take,
        orderBy: { createdAt: "desc" },
        include: {
          user: { select: { id: true, name: true, email: true } },
          // Using any to bridge stale Prisma types
          ...({
            originDock: { select: { name: true } },
            destinationDock: { select: { name: true } },
          } as any),
        },
      }),
      prisma.order.count({ where }),
    ]);

    return formatPaginatedResult(orders, total, page, limit);
  },

  async getById(id: string) {
    const order = await prisma.order.findUnique({
      where: { id },
      include: {
        user: { select: { id: true, name: true, email: true, phone: true } },
        history: {
          orderBy: { createdAt: "desc" },
          include: { actor: { select: { name: true, role: true } } },
        } as any,
        transactions: {
          take: 20,
          orderBy: { createdAt: "desc" },
          include: {
            shippingDock: { select: { id: true, name: true, code: true } },
          },
        },
        // Bridge for recently added relations
        ...({
          originDock: { select: { name: true, code: true } },
          destinationDock: { select: { name: true, code: true } },
        } as any),
      },
    });

    if (!order) throw new NotFoundError(`Order with id ${id} not found`);
    return order;
  },

  async getByTrackingNumber(trackingNumber: string) {
    const order = await prisma.order.findUnique({
      where: { trackingNumber },
      include: {
        user: { select: { id: true, name: true, email: true, phone: true } },
        history: {
          orderBy: { createdAt: "desc" },
          include: { actor: { select: { name: true, role: true } } },
        } as any,
        ...({
          originDock: { select: { name: true, code: true } },
          destinationDock: { select: { name: true, code: true } },
        } as any),
      },
    });

    if (!order) throw new NotFoundError(ORDER_MESSAGES.ORDER_NOT_FOUND);
    return order;
  },

  async create(input: CreateOrderInput, userId: string, actorId: string) {
    const trackingNumber = generateTrackingNumber();
    const totalAmount =
      Number(input.amount) +
      Number(input.taxAmount) +
      Number(input.shippingFee ?? 0);

    if (input.originDockId || input.destinationDockId) {
      const checks: Promise<any>[] = [];
      if (input.originDockId)
        checks.push(
          prisma.shippingDock.findUnique({ where: { id: input.originDockId } }),
        );
      if (input.destinationDockId)
        checks.push(
          prisma.shippingDock.findUnique({
            where: { id: input.destinationDockId },
          }),
        );

      const docks = await Promise.all(checks);
      if (input.originDockId && !docks[0])
        throw new BadRequestError(ORDER_MESSAGES.ORIGIN_DOCK_NOT_FOUND);
      if (
        input.destinationDockId &&
        (input.originDockId ? !docks[1] : !docks[0])
      )
        throw new BadRequestError(ORDER_MESSAGES.DESTINATION_DOCK_NOT_FOUND);

      if (docks.some((d) => (d as any)?.status === "MAINTENANCE"))
        throw new BadRequestError(ORDER_MESSAGES.DOCK_MAINTENANCE);
    }

    return prisma.$transaction(async (tx) => {
      const order = await (tx as any).order.create({
        data: {
          trackingNumber,
          recipientName: input.recipientName,
          recipientPhone: input.recipientPhone,
          amount: input.amount as any,
          taxAmount: input.taxAmount as any,
          shippingFee: (input.shippingFee ?? 0) as any,
          totalAmount: totalAmount as any,
          originAddress: input.originAddress,
          destinationAddress: input.destinationAddress,
          status: "PENDING",
          priority: input.priority || "STANDARD",
          weightKg: input.weightKg as any,
          dimensions: input.dimensions,
          estimatedDelivery: input.estimatedDelivery
            ? new Date(input.estimatedDelivery)
            : null,
          originDockId: input.originDockId,
          destinationDockId: input.destinationDockId,
          userId: userId, // Correctly using the passed userId
        },
      });

      await (tx as any).orderHistory.create({
        data: {
          orderId: order.id,
          status: "PENDING",
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
  },

  async updateStatus(
    id: string,
    status: OrderStatus,
    actorId: string,
    notes?: string,
  ) {
    const existing = await prisma.order.findUnique({ where: { id } });
    if (!existing) throw new NotFoundError("Order not found");

    return prisma.$transaction(async (tx) => {
      const updated = await tx.order.update({
        where: { id },
        data: { status } as any,
      });

      await (tx as any).orderHistory.create({
        data: {
          orderId: id,
          status,
          actorId,
          notes: notes || `Status changed from ${existing.status} to ${status}`,
        },
      });

      AuditService.log({
        userId: actorId,
        action: "ORDER_UPDATED",
        entity: "order",
        entityId: id,
        metadata: { from: existing.status, to: status },
      });

      return updated;
    });
  },

  async update(id: string, input: UpdateOrderInput, actorId: string) {
    const existing = await prisma.order.findUnique({ where: { id } });
    if (!existing) throw new NotFoundError(`Order with id ${id} not found`);

    const updated = await prisma.order.update({
      where: { id },
      data: {
        ...input,
        estimatedDelivery: input.estimatedDelivery
          ? new Date(input.estimatedDelivery)
          : undefined,
        actualDelivery: input.actualDelivery
          ? new Date(input.actualDelivery)
          : undefined,
      } as any,
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
