import { describe, it, expect, vi } from "vitest";
import type { Request, Response, NextFunction } from "express";
import { authorize } from "../../src/middlewares/authorize";
import { UserRole } from "../../src/generated/prisma/client";
import { ForbiddenError } from "../../src/errors/ForbiddenError";

describe("authorize middleware", () => {
  it("allows ADMIN as superuser regardless of allowedRoles", () => {
    const mw = authorize([UserRole.STAFF]);
    const req = { user: { role: UserRole.ADMIN } } as unknown as Request;
    const next = vi.fn() as unknown as NextFunction;

    mw(req, {} as Response, next);
    expect(next).toHaveBeenCalledOnce();
  });

  it("blocks disallowed roles with ForbiddenError", () => {
    const mw = authorize([UserRole.ADMIN, UserRole.MANAGER]);
    const req = { user: { role: UserRole.CUSTOMER } } as unknown as Request;
    const next = vi.fn() as unknown as NextFunction;

    expect(() => mw(req, {} as Response, next)).toThrow(ForbiddenError);
  });
});
