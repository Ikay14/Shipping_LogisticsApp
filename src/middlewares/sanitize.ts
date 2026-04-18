import { Request, Response, NextFunction } from "express";
import xss from "xss";

/**
 * Recursively sanitizes all string values in a nested object/array
 * against XSS attacks using the xss library.
 * - Strips all HTML tags and dangerous attributes
 * - Trims leading/trailing whitespace from strings
 */
const sanitizeValue = (value: unknown): unknown => {
  if (typeof value === "string") {
    return xss(value.trim(), {
      whiteList: {}, // Allow NO HTML tags at all
      stripIgnoreTag: true,
      stripIgnoreTagBody: ["script", "style"],
    });
  }

  if (Array.isArray(value)) {
    return value.map(sanitizeValue);
  }

  if (value !== null && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([k, v]) => [
        k,
        sanitizeValue(v),
      ]),
    );
  }

  return value;
};

/**
 * Global XSS sanitization middleware.
 * Sanitizes req.body, req.query, and req.params.
 * MUST run AFTER express.json() and BEFORE routes.
 *
 * Protection against:
 * - Reflected XSS (query strings)
 * - Stored XSS (request bodies persisted to DB)
 * - DOM-based XSS via injected params
 *
 * Note: SQL Injection is handled at the ORM layer (Prisma uses
 * parameterized queries exclusively — raw SQL is never used).
 */
export const sanitize = (
  req: Request,
  _res: Response,
  next: NextFunction,
): void => {
  if (req.body) req.body = sanitizeValue(req.body) as typeof req.body;
  if (req.query) req.query = sanitizeValue(req.query) as typeof req.query;
  if (req.params) req.params = sanitizeValue(req.params) as typeof req.params;
  next();
};
