import { Request, Response, NextFunction } from "express";
import { verifyAccessToken, TokenPayload } from "../utils/jwt";
import { UnauthenticatedError } from "../errors/UnauthenticatedError";
import { prisma } from "../db/prisma";

// Extend Express Request to carry user payload
declare global {
  namespace Express {
    interface Request {
      user?: TokenPayload;
    }
  }
}

export const authenticate = async (
  req: Request,
  _res: Response,
  next: NextFunction,
): Promise<void> => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("No token provided");
  }

  const token = authHeader.split(" ")[1];

  let payload: TokenPayload;
  try {
    payload = verifyAccessToken(token);
  } catch {
    throw new UnauthenticatedError("Invalid or expired token");
  }

  const user = await prisma.user.findUnique({
    where: { id: payload.userId },
    select: { id: true, name: true, role: true, isActive: true },
  });

  if (!user || !user.isActive) {
    throw new UnauthenticatedError("Account is inactive or no longer exists");
  }

  req.user = {
    ...payload,
    id: user.id,
    userId: user.id,
    name: user.name,
    role: user.role,
  };
  next();
};
