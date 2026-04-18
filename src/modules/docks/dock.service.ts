import { prisma } from "../../db/prisma";
import { NotFoundError } from "../../errors/NotFoundError";
import { BadRequestError } from "../../errors/BadRequestError";
import { AuditService } from "../shared/service/AuditService";
import { DOCK_MESSAGES } from "../../constants/messages";
import type { CreateDockInput, UpdateDockInput } from "./dock.schema";
import {
  getPaginationOptions,
  formatPaginatedResult,
  PaginationInput,
} from "../../utils/pagination";

export const DockService = {
  async getAll(query: PaginationInput = {}) {
    const { page, limit, skip, take } = getPaginationOptions(query, 50);

    const [data, total] = await prisma.$transaction([
      prisma.shippingDock.findMany({
        orderBy: { createdAt: "desc" },
        skip,
        take,
        include: {
          manager: { select: { id: true, name: true, email: true } },
          _count: { select: { transactions: true } } as any,
        },
      }),
      prisma.shippingDock.count(),
    ]);

    return formatPaginatedResult(data, total, page, limit);
  },

  async getById(id: string) {
    const dock = await prisma.shippingDock.findUnique({
      where: { id },
      include: {
        manager: { select: { id: true, name: true, email: true } },
        transactions: {
          take: 20,
          orderBy: { createdAt: "desc" },
          include: {
            user: { select: { id: true, name: true } },
            order: { select: { id: true, trackingNumber: true, status: true } },
          },
        },
        _count: { select: { transactions: true } } as any,
      },
    });

    if (!dock) throw new NotFoundError(DOCK_MESSAGES.DOCK_NOT_FOUND);
    return dock;
  },

  /**
   * Creates a new dock with parallel validation for unique codes and manager existence.
   */
  async create(input: CreateDockInput, actorId?: string) {
    // Senior approach: Parallelize validation checks to minimize latency
    const checks: Promise<any>[] = [
      prisma.shippingDock.findUnique({ where: { code: input.code } }),
    ];

    if (input.managerId) {
      checks.push(prisma.user.findUnique({ where: { id: input.managerId } }));
    }

    const [existingCode, manager] = await Promise.all(checks);

    if (existingCode) {
      throw new BadRequestError(DOCK_MESSAGES.CODE_ALREADY_IN_USE);
    }
    if (input.managerId && !manager) {
      throw new BadRequestError(DOCK_MESSAGES.MANAGER_NOT_FOUND);
    }

    const dock = await prisma.shippingDock.create({
      data: input,
      include: { manager: { select: { name: true } } },
    });

    AuditService.log({
      userId: actorId,
      action: "DOCK_CREATED",
      entity: "shipping_dock",
      entityId: dock.id,
      metadata: { name: dock.name, code: dock.code },
    });

    return dock;
  },

  async update(id: string, input: UpdateDockInput, actorId?: string) {
    const existing = await prisma.shippingDock.findUnique({ where: { id } });
    if (!existing)
      throw new NotFoundError(`Shipping dock with id ${id} not found`);

    // Parallelize unique code check and manager lookup
    const checks: Promise<any>[] = [];
    if (input.code && input.code !== existing.code) {
      checks.push(
        prisma.shippingDock.findUnique({ where: { code: input.code } }),
      );
    } else {
      checks.push(Promise.resolve(null));
    }

    if (input.managerId && input.managerId !== existing.managerId) {
      checks.push(prisma.user.findUnique({ where: { id: input.managerId } }));
    }

    const [duplicate, manager] = await Promise.all(checks);

    if (duplicate) throw new BadRequestError(DOCK_MESSAGES.CODE_ALREADY_IN_USE);
    if (input.managerId && !manager)
      throw new BadRequestError(DOCK_MESSAGES.MANAGER_NOT_FOUND);

    const updated = await prisma.shippingDock.update({
      where: { id },
      data: input as any,
      include: { manager: { select: { name: true } } },
    });

    AuditService.log({
      userId: actorId,
      action: "DOCK_UPDATED",
      entity: "shipping_dock",
      entityId: id,
      metadata: {
        changes: Object.keys(input),
        statusChange: input.status
          ? { from: (existing as any).status, to: input.status }
          : undefined,
      },
    });

    return updated;
  },

  async delete(id: string, actorId?: string) {
    const existing = await prisma.shippingDock.findUnique({
      where: { id },
      include: { _count: { select: { transactions: true } } } as any,
    });

    if (!existing)
      throw new NotFoundError(`Shipping dock with id ${id} not found`);

    // Safety check: Cannot delete a dock with active associations
    const stats = existing as any;
    if (stats._count?.transactions > 0) {
      throw new BadRequestError(
        "Cannot delete a dock that has associated transactions. Deactivate it instead.",
      );
    }

    await prisma.shippingDock.delete({ where: { id } });

    AuditService.log({
      userId: actorId,
      action: "DOCK_DELETED",
      entity: "shipping_dock",
      entityId: id,
      metadata: { name: (existing as any).name, code: (existing as any).code },
    });
  },
};
