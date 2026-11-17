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

/**
 * Verifies an Access Token and ensures its token type is 'access'.
 */
export const verifyAccessToken = (token: string): TokenPayload => {
  const payload = verifyToken(token);
  if (payload.type !== "access") {
    throw new Error("Invalid access token type");
  }
  return payload;
};

/**
 * Verifies a Refresh Token and ensures its token type is 'refresh'.
 */
export const verifyRefreshToken = (token: string): TokenPayload => {
  const payload = verifyToken(token);
  if (payload.type !== "refresh") {
    throw new Error("Invalid refresh token type");
  }
  return payload;
};
