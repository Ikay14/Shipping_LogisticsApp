import rateLimit from "express-rate-limit";
import { RATE_LIMIT_CONFIG } from "../config/rateLimit.config";

/**
 * Throttling middleware for various API segments.
 * Logic and calculations are now offloaded to RATE_LIMIT_CONFIG for maintainability.
 */

export const apiLimiter = rateLimit(RATE_LIMIT_CONFIG.api);
export const authLimiter = rateLimit(RATE_LIMIT_CONFIG.auth);
export const strictLimiter = rateLimit(RATE_LIMIT_CONFIG.strict);
export const uploadLimiter = rateLimit(RATE_LIMIT_CONFIG.upload);
