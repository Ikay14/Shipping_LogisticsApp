import { prisma } from "../../db/prisma";
import {
  getPaginationOptions,
  formatPaginatedResult,
  PaginationInput,
} from "../../utils/pagination";

/**
 * ActivityLogService - Audit trail for administrative oversight.
 */
export const ActivityLogService = {
  /**
   * Get all activity logs. Optionally filter by userId.
   */
  async getAll(query: PaginationInput & { userId?: string } = {}) {
    const { page, limit, skip, take } = getPaginationOptions(query, 50);
    const where = query.userId ? { userId: query.userId } : undefined;

    const [data, total] = await prisma.$transaction([
      prisma.activityLog.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip,
        take,
        include: {
          user: { select: { id: true, name: true, email: true, role: true } },
        },
      }),
      prisma.activityLog.count({ where }),
    ]);

    return formatPaginatedResult(data, total, page, limit);
  },

  /**
   * Get logs for a specific user.
   */
  async getByUser(userId: string, query: PaginationInput = {}) {
    const { page, limit, skip, take } = getPaginationOptions(query, 50);

    const [data, total] = await prisma.$transaction([
      prisma.activityLog.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        skip,
        take,
      }),
      prisma.activityLog.count({ where: { userId } }),
    ]);

    return formatPaginatedResult(data, total, page, limit);
  },
};
