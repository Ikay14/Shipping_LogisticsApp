import { Request, Response, NextFunction } from "express";
import { UserRole } from "../generated/prisma/client";
import { ForbiddenError } from "../errors/ForbiddenError";

/**
 * Authorization Middleware - Restricts access based on user roles.
 *
 * @param allowedRoles - An array of UserRole permitted to access the resource.
 * @returns An Express middleware function.
 */
export const authorize = (allowedRoles: UserRole[]) => {
  return (req: Request, _res: Response, next: NextFunction): void => {
    if (!req.user) {
      throw new ForbiddenError(
        "Identity not established. Please authenticate first.",
      );
    }

    const { role } = req.user;

    // Admin has superuser access to everything
    if (role === UserRole.ADMIN) {
      return next();
    }

    if (!allowedRoles.includes(role as UserRole)) {
      throw new ForbiddenError(
        `Access denied. Required roles: [${allowedRoles.join(", ")}]. Current role: ${role}`,
      );
    }

    next();
  };
};
