import { Request, Response, NextFunction } from "express";
import { Prisma } from "../generated/prisma/client";
import { prisma } from "../db/prisma";

/**
 * Activity Logger Middleware.
 *
 * Hooks into the response 'finish' event so logging is:
 * - Non-blocking: never delays the HTTP response
 * - Fire-and-forget: errors are silently swallowed
 * - Only fires for authenticated requests (req.user must be set)
 *
 * Logs: method + path, entity type, entity id, IP, user agent,
 * HTTP status code, and a sanitized metadata snapshot.
 */
const MUTATING_METHODS = new Set(["POST", "PUT", "PATCH", "DELETE"]);

export const activityLogger = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (!MUTATING_METHODS.has(req.method)) {
    next();
    return;
  }

  res.on("finish", () => {
    if (!req.user) return;

    const cleanPath = req.originalUrl.split("?")[0];
    // Derive entity name from URL: /api/v1/<entity>/...
    const segments = cleanPath.split("/").filter(Boolean);
    const entity = segments[2] ?? null; // e.g. 'orders', 'docks'
    const entityId = req.params.id ?? null;

    // Get client IP safely using Express req.ip (respects trust proxy)
    const ip = req.ip ?? req.socket.remoteAddress ?? null;

    // Safe metadata: only log keys, never values (privacy-safe)
    const bodyKeys =
      req.body && typeof req.body === "object"
        ? Object.keys(req.body as Record<string, unknown>)
        : [];

    setImmediate(async () => {
      try {
        await prisma.activityLog.create({
          data: {
            userId: req.user!.userId,
            action: `${req.method} ${req.path}`,
            entity,
            entityId,
            ipAddress: ip,
            userAgent: req.headers["user-agent"] ?? null,
            statusCode: res.statusCode,
            metadata: (bodyKeys.length > 0
              ? { bodyFields: bodyKeys }
              : {}) as Prisma.InputJsonValue,
          },
        });
      } catch {
        // Never let logging failures impact the main request flow
      }
    });
  });

  next();
};
