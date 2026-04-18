import jwt, { Secret, SignOptions } from "jsonwebtoken";
import { env } from "../config/env";

export interface TokenPayload {
  id: string; // Alias for userId common in JWT implementations
  userId: string;
  name: string;
  role: string;
  type?: "access" | "refresh";
}

/**
 * Signs an Access Token (short-lived).
 */
export const signToken = (payload: TokenPayload): string => {
  const options: SignOptions = {
    expiresIn: env.JWT_ACCESS_EXPIRES as any,
  };
  return jwt.sign(
    { ...payload, type: "access" },
    env.JWT_SECRET as Secret,
    options,
  );
};

/**
 * Signs a Refresh Token (long-lived).
 */
export const signRefreshToken = (payload: TokenPayload): string => {
  const options: SignOptions = {
    expiresIn: env.JWT_REFRESH_EXPIRES as any,
  };
  return jwt.sign(
    { ...payload, type: "refresh" },
    env.JWT_SECRET as Secret,
    options,
  );
};

/**
 * Verifies a JWT and returns the payload.
 */
export const verifyToken = (token: string): TokenPayload => {
  return jwt.verify(token, env.JWT_SECRET as Secret) as TokenPayload;
};
