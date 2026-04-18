import bcrypt from "bcryptjs";
import crypto from "crypto";

const SALT_ROUNDS = 12;

/**
 * Reusable password Zod regex validators.
 * Import these into auth.schema.ts.
 */
export const PASSWORD_RULES = {
  minLength: 8,
  maxLength: 128,
  uppercase: /[A-Z]/,
  lowercase: /[a-z]/,
  number: /[0-9]/,
  special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/,
} as const;

/**
 * List of commonly-used passwords to reject.
 * Extend as needed.
 */
const COMMON_PASSWORDS = new Set([
  "password",
  "Password1",
  "Password1!",
  "12345678",
  "123456789",
  "qwerty123",
  "Qwerty123!",
  "iloveyou",
  "admin123",
  "Admin123!",
  "letmein",
  "welcome1",
  "monkey123",
  "dragon123",
  "master123",
]);

export const PasswordUtils = {
  /**
   * Hashes a plain-text password using bcrypt with 12 salt rounds.
   */
  async hash(password: string): Promise<string> {
    return bcrypt.hash(password, SALT_ROUNDS);
  },

  /**
   * Securely compares a plain-text password against a bcrypt hash.
   * Always runs the comparison (no early exit) to prevent timing attacks.
   */
  async compare(plain: string, hash: string): Promise<boolean> {
    return bcrypt.compare(plain, hash);
  },

  /**
   * Returns true if the password is in the common password blocklist.
   */
  isCommon(password: string): boolean {
    return COMMON_PASSWORDS.has(password);
  },

  /**
   * Returns a list of failed password rules.
   * Empty array = password is valid.
   */
  validate(password: string): string[] {
    const errors: string[] = [];
    if (password.length < PASSWORD_RULES.minLength)
      errors.push(`Must be at least ${PASSWORD_RULES.minLength} characters`);
    if (password.length > PASSWORD_RULES.maxLength)
      errors.push(`Must be at most ${PASSWORD_RULES.maxLength} characters`);
    if (!PASSWORD_RULES.uppercase.test(password))
      errors.push("Must contain at least one uppercase letter (A-Z)");
    if (!PASSWORD_RULES.lowercase.test(password))
      errors.push("Must contain at least one lowercase letter (a-z)");
    if (!PASSWORD_RULES.number.test(password))
      errors.push("Must contain at least one number (0-9)");
    if (!PASSWORD_RULES.special.test(password))
      errors.push("Must contain at least one special character (!@#$%^&*)");
    if (PasswordUtils.isCommon(password))
      errors.push("Password is too common. Please choose a stronger password.");
    return errors;
  },

  /**
   * Generates a secure, random hex token for recovery or verification.
   * Uses Node.js crypto module for high entropy.
   */
  generateRandomToken(): string {
    return crypto.randomBytes(32).toString("hex");
  },
};
