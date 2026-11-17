import { z } from "zod";
import { PasswordUtils } from "../../utils/password";

/**
 * Validation for user registration.
 * Includes strict password complexity requirements.
 */
export const registerSchema = z.object({
  body: z.object({
    name: z
      .string({ required_error: "Name is required" })
      .min(3, "Name must be at least 3 characters")
      .max(60, "Name must be at most 60 characters"),
    email: z
      .string({ required_error: "Email is required" })
      .email("Invalid email address"),
    phone: z.string().optional(),
    password: z
      .string({ required_error: "Password is required" })
      .superRefine((val, ctx) => {
        const errors = PasswordUtils.validate(val);
        errors.forEach((err) =>
          ctx.addIssue({ code: z.ZodIssueCode.custom, message: err }),
        );
      }),
  }),
});

/**
 * Validation for login.
 */
export const loginSchema = z.object({
  body: z.object({
    email: z
      .string({ required_error: "Email is required" })
      .email("Invalid email address"),
    password: z.string({ required_error: "Password is required" }),
  }),
});

/**
 * Validation for profile updates.
 */
export const updateProfileSchema = z.object({
  body: z.object({
    name: z.string().min(3).max(60).optional(),
    phone: z.string().optional(),
    currentPassword: z.string().optional(),
    newPassword: z
      .string()
      .superRefine((val, ctx) => {
        if (!val) return;
        const errors = PasswordUtils.validate(val);
        errors.forEach((err) =>
          ctx.addIssue({ code: z.ZodIssueCode.custom, message: err }),
        );
      })
      .optional(),
  }),
});

/**
 * Validation for password reset request.
 */
export const forgotPasswordSchema = z.object({
  body: z.object({
    email: z.string({ required_error: "Email is required" }).email(),
  }),
});

/**
 * Validation for performing a password reset.
 */
export const resetPasswordSchema = z.object({
  body: z.object({
    token: z.string({ required_error: "Token is required" }),
    newPassword: z
      .string({ required_error: "New password is required" })
      .superRefine((val, ctx) => {
        const errors = PasswordUtils.validate(val);
        errors.forEach((err) =>
          ctx.addIssue({ code: z.ZodIssueCode.custom, message: err }),
        );
      }),
  }),
});

/**
 * Validation for resending a reset token.
 */
export const resendResetSchema = z.object({
  body: z.object({
    email: z.string({ required_error: "Email is required" }).email(),
  }),
});

/**
 * Validation for updating profile via PUT (Full resource update).
 */
export const updateProfilePutSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required" }).min(2),
    phone: z.string().optional(),
  }),
});

/**
 * Validation for changing password while logged in.
 */
export const changePasswordSchema = z.object({
  body: z.object({
    currentPassword: z.string({
      required_error: "Current password is required",
    }),
    newPassword: z
      .string({ required_error: "New password is required" })
      .superRefine((val, ctx) => {
        const errors = PasswordUtils.validate(val);
        errors.forEach((err) =>
          ctx.addIssue({ code: z.ZodIssueCode.custom, message: err }),
        );
      }),
  }),
});

/**
 * Validation for refreshing an access token.
 */
export const refreshTokenSchema = z.object({
  body: z.object({
    refreshToken: z.string({ required_error: "Refresh token is required" }),
  }),
});

/**
 * Validation for 2FA activation.
 */
export const activate2FASchema = z.object({
  body: z.object({
    code: z.string().length(6, "Verification code must be 6 digits"),
  }),
});

/**
 * Validation for 2FA login verification.
 */
export const verify2FALoginSchema = z.object({
  body: z.object({
    mfaToken: z.string({ required_error: "MFA session token is required" }),
    code: z.string().length(6, "Verification code must be 6 digits"),
  }),
});

export const disable2FASchema = z.object({
  body: z.object({
    currentPassword: z.string({
      required_error: "Current password is required",
    }),
    code: z.string().length(6, "Verification code must be 6 digits"),
  }),
});

export const verifyEmailSchema = z.object({
  body: z.object({
    token: z.string({ required_error: "Verification token is required" }).min(1),
  }),
});

export const resendVerificationSchema = z.object({
  body: z.object({
    email: z
      .string({ required_error: "Email is required" })
      .email("Invalid email address"),
  }),
});

export const logoutSchema = z.object({
  body: z.object({
    refreshToken: z.string().min(1).optional(),
  }),
});

export type RegisterInput = z.infer<typeof registerSchema>["body"];
export type LoginInput = z.infer<typeof loginSchema>["body"];
export type UpdateProfileInput = z.infer<typeof updateProfileSchema>["body"];
export type UpdateProfilePutInput = z.infer<
  typeof updateProfilePutSchema
>["body"];
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>["body"];
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>["body"];
export type ChangePasswordInput = z.infer<typeof changePasswordSchema>["body"];
export type RefreshTokenInput = z.infer<typeof refreshTokenSchema>["body"];
export type Activate2FAInput = z.infer<typeof activate2FASchema>["body"];
export type Verify2FALoginInput = z.infer<typeof verify2FALoginSchema>["body"];
export type Disable2FAInput = z.infer<typeof disable2FASchema>["body"];
export type Verify2FAInput = { code: string };
export type EmailActionInput = { email: string };

export interface UserEntity {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  role: string;
  isActive: boolean;
  isEmailVerified: boolean;
  profileImageUrl: string | null;
  isTwoFactorEnabled: boolean;
  lastLoginAt: Date | null;
  currentLoginIp: string | null;
  createdAt: Date;
  updatedAt: Date;
}
