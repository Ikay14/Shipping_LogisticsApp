import { Request, Response, NextFunction } from "express";
import { verifyToken, TokenPayload } from "../utils/jwt";
import { UnauthenticatedError } from "../errors/UnauthenticatedError";

// Extend Express Request to carry user payload
declare global {
  namespace Express {
    interface Request {
      user?: TokenPayload;
    }
  }
}

export const authenticate = (
  req: Request,
  _res: Response,
  next: NextFunction,
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("No token provided");
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = verifyToken(token);
    req.user = payload;
    next();
  } catch {
    throw new UnauthenticatedError("Invalid or expired token");
  }
};
