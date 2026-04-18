import { API_MESSAGES } from "../constants/messages";

/**
 * Rate Limiting Configuration
 *
 * Centralized settings for request throttling across the application.
 */

const minutesToMs = (minutes: number) => minutes * 60 * 1000;
const hoursToMs = (hours: number) => hours * 60 * 60 * 1000;

const rateLimitResponse = (message: string) => ({
  success: false,
  message,
});

export const RATE_LIMIT_CONFIG = {
  // General API - 100 req / 15 min
  api: {
    windowMs: minutesToMs(15),
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: rateLimitResponse(API_MESSAGES.TOO_MANY_REQUESTS),
  },

  // Auth - 10 req / 15 min (Failed attempts only)
  auth: {
    windowMs: minutesToMs(15),
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    skipSuccessfulRequests: true,
    message: rateLimitResponse(API_MESSAGES.TOO_MANY_AUTH_ATTEMPTS),
  },

  // Strict (Verification/Reset) - 5 req / 1 hour
  strict: {
    windowMs: hoursToMs(1),
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    message: rateLimitResponse(API_MESSAGES.TOO_MANY_OPERATIONS),
  },

  // Upload - 20 uploads / 1 hour
  upload: {
    windowMs: hoursToMs(1),
    max: 20,
    standardHeaders: true,
    legacyHeaders: false,
    message: rateLimitResponse(API_MESSAGES.UPLOAD_LIMIT_REACHED),
  },
};
