/**
 * Authentication Configuration
 *
 * Centralized settings for session management and token expiration timeframes.
 */

const minutesToMs = (minutes: number) => minutes * 60 * 1000;
const hoursToMs = (hours: number) => hours * 60 * 60 * 1000;
const daysToMs = (days: number) => days * 24 * hoursToMs(1);

export const TokenExpiration = {
  /** Refresh Token: Valid for 7 days */
  refreshToken: () => new Date(Date.now() + daysToMs(7)),

  /** Email Verification Token: Valid for 24 hours */
  emailVerification: () => new Date(Date.now() + hoursToMs(24)),

  /** MFA Challenge Session: Valid for 5 minutes */
  mfaSession: () => new Date(Date.now() + minutesToMs(5)),

  /** Password Reset Token: Valid for 1 hour */
  passwordReset: () => new Date(Date.now() + hoursToMs(1)),
};
