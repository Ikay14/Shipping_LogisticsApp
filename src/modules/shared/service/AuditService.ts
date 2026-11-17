import { Prisma } from "../../../generated/prisma/client";
import { prisma } from "../../../db/prisma";
import { DeviceInfo } from "../../../utils/device";
import { logger } from "../../../utils/logger";

export type AuditEntity =
  | "user"
  | "order"
  | "shipping_dock"
  | "transaction"
  | "auth"
  | "security";

export type AuditAction =
  | "PASSWORD_RESET_REQUESTED"
  | "PASSWORD_RESET_COMPLETED"
  | "USER_REGISTERED"
  | "LOGIN_SUCCESS"
  | "LOGIN_FAILURE"
  | "LOGOUT"
  | "2FA_ENABLED"
  | "ACCOUNT_LOCKED"
  | "PROFILE_UPDATED"
  | "AVATAR_UPDATED"
  | "MEDIA_UPLOADED"
  | "ORDER_CREATED"
  | "ORDER_UPDATED"
  | "ORDER_DELETED"
  | "ORDER_STATUS_CHANGED"
  | "DOCK_CREATED"
  | "DOCK_UPDATED"
  | "DOCK_DELETED"
  | "SYSTEM_ALERT";

interface AuditLogOptions {
  userId?: string;
  action: AuditAction | string;
  entity?: AuditEntity | string;
  entityId?: string;
  ipAddress?: string;
  device?: DeviceInfo | any;
  statusCode?: number;
  metadata?: Prisma.InputJsonValue;
}

/**
 * AuditService - Explicit, domain-specific logging for critical business events.
 */
export const AuditService = {
  /**
   * Logs an entry to the ActivityLog table.
   * Fire-and-forget implementation using setImmediate.
   */
  log(options: AuditLogOptions): void {
    const { metadata, ...data } = options;

    setImmediate(async () => {
      try {
        await prisma.activityLog.create({
          data: {
            userId: data.userId ?? null,
            action: data.action,
            entity: data.entity ?? null,
            entityId: data.entityId ?? null,
            ipAddress: data.ipAddress ?? null,
            userAgent:
              data.device?.raw ??
              (typeof data.device === "string" ? data.device : null),
            statusCode: data.statusCode ?? null,
            metadata: {
              ...((metadata as Record<string, unknown>) || {}),
              device:
                data.device && typeof data.device === "object"
                  ? {
                      os: data.device.os,
                      browser: data.device.browser,
                      type: data.device.deviceType || data.device.type,
                    }
                  : undefined,
            } as Prisma.InputJsonValue,
          },
        });
      } catch (error) {
        logger.error("Failed to save audit log:", error);
      }
    });
  },

  /**
   * Specifically logs login attempts for security auditing.
   */
  async recordLoginAttempt(data: {
    userId: string;
    ipAddress?: string;
    device?: DeviceInfo | any;
    isSuccessful: boolean;
    errorMessage?: string;
    error?: string;
  }): Promise<void> {
    try {
      await prisma.loginHistory.create({
        data: {
          userId: data.userId,
          ipAddress: data.ipAddress ?? null,
          userAgent:
            data.device?.raw ??
            (typeof data.device === "string" ? data.device : null),
          isSuccessful: data.isSuccessful,
          errorMessage: data.errorMessage || data.error || null,
        },
      });
    } catch (error) {
      logger.error("Failed to record login attempt:", error);
    }
  },

  /**
   * Checks if a user should be locked out based on recent failures.
   */
  async isAccountLocked(userId: string): Promise<boolean> {
    const fifteenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000);
    const recentFailures = await prisma.loginHistory.count({
      where: {
        userId,
        isSuccessful: false,
        createdAt: { gte: fifteenMinutesAgo },
      },
    });

    return recentFailures >= 5;
  },
};
