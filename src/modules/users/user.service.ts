import { Prisma, UserRole } from "../../generated/prisma/client";
import { prisma } from "../../db/prisma";
import { NotFoundError } from "../../errors/NotFoundError";
import { BadRequestError } from "../../errors/BadRequestError";
import { AuditService } from "../shared/service/AuditService";
import { emailService } from "../shared/service/email/index";
import { logger } from "../../utils/logger";
import {
  getPaginationOptions,
  formatPaginatedResult,
} from "../../utils/pagination";
import type { GetUsersQuery } from "./user.schema";

const SAFE_USER_SELECT = {
  id: true,
  name: true,
  email: true,
  phone: true,
  role: true,
  isActive: true,
  isEmailVerified: true,
  isTwoFactorEnabled: true,
  profileImageUrl: true,
  lastLoginAt: true,
  currentLoginIp: true,
  createdAt: true,
  updatedAt: true,
} satisfies Prisma.UserSelect;

export const UserService = {
  async getAll(query: GetUsersQuery = {}) {
    const { page, limit, skip, take } = getPaginationOptions(query, 20);

    const where: Prisma.UserWhereInput = {
      ...(query.role && { role: query.role }),
      ...(query.isActive !== undefined && { isActive: query.isActive }),
      ...(query.search && {
        OR: [
          { name: { contains: query.search, mode: "insensitive" } },
          { email: { contains: query.search, mode: "insensitive" } },
          { phone: { contains: query.search } },
        ],
      }),
    };

    const [users, total] = await prisma.$transaction([
      prisma.user.findMany({
        where,
        skip,
        take,
        orderBy: { createdAt: "desc" },
        select: SAFE_USER_SELECT,
      }),
      prisma.user.count({ where }),
    ]);

    return formatPaginatedResult(users, total, page, limit);
  },

  async getById(id: string) {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        ...SAFE_USER_SELECT,
        _count: {
          select: {
            orders: true,
            transactions: true,
            managedDocks: true,
          },
        },
      },
    });

    if (!user) throw new NotFoundError(`User with id ${id} not found`);
    return user;
  },

  async updateRole(id: string, role: UserRole, actorId: string) {
    if (id === actorId) {
      throw new BadRequestError("You cannot change your own role");
    }

    const existing = await prisma.user.findUnique({ where: { id } });
    if (!existing) throw new NotFoundError(`User with id ${id} not found`);

    if (existing.role === UserRole.ADMIN && role !== UserRole.ADMIN) {
      const adminCount = await prisma.user.count({
        where: { role: UserRole.ADMIN, isActive: true },
      });
      if (adminCount <= 1) {
        throw new BadRequestError("Cannot demote the last active admin");
      }
    }

    const updated = await prisma.user.update({
      where: { id },
      data: { role },
      select: SAFE_USER_SELECT,
    });

    AuditService.log({
      userId: actorId,
      action: "USER_ROLE_UPDATED",
      entity: "user",
      entityId: id,
      metadata: { from: existing.role, to: role },
    });

    return updated;
  },

  async updateStatus(id: string, isActive: boolean, actorId: string) {
    if (id === actorId && !isActive) {
      throw new BadRequestError("You cannot deactivate your own account");
    }

    const existing = await prisma.user.findUnique({ where: { id } });
    if (!existing) throw new NotFoundError(`User with id ${id} not found`);

    const updated = await prisma.$transaction(async (tx) => {
      const user = await tx.user.update({
        where: { id },
        data: { isActive },
        select: SAFE_USER_SELECT,
      });

      if (!isActive) {
        await tx.userToken.deleteMany({
          where: { userId: id, type: "REFRESH_TOKEN" },
        });
      }

      return user;
    });

    AuditService.log({
      userId: actorId,
      action: isActive ? "USER_ACTIVATED" : "USER_DEACTIVATED",
      entity: "user",
      entityId: id,
      metadata: { from: existing.isActive, to: isActive },
    });

    if (!isActive) {
      emailService
        .sendAccountDeactivated(existing.email, existing.name)
        .catch((err) => logger.error("Deactivation email failed:", err));
    }

    return updated;
  },
};
