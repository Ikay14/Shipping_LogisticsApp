import { TOTP, generateSecret, generateURI, verify } from "otplib";
import QRCode from "qrcode";
import { Prisma } from "../../generated/prisma/client";
import { prisma } from "../../db/prisma";
import {
  signToken,
  signRefreshToken,
  verifyRefreshToken,
} from "../../utils/jwt";
import { BadRequestError } from "../../errors/BadRequestError";
import { UnauthenticatedError } from "../../errors/UnauthenticatedError";
import { ForbiddenError } from "../../errors/ForbiddenError";
import { UserEntity, AuthResponse } from "../shared/entities";
import { PasswordUtils } from "../../utils/password";
import { emailService } from "../shared/service/email/index";
import { AuditService } from "../shared/service/AuditService";
import { DeviceInfo } from "../../utils/device";
import { AUTH_MESSAGES } from "../../constants/messages";
import { TokenExpiration } from "../../config/auth.config";
import type {
  RegisterInput,
  LoginInput,
  ForgotPasswordInput,
  ResetPasswordInput,
} from "./auth.schema";

/**
 * Interface for request-level metadata used in security auditing.
 */
export interface SecurityContext {
  ipAddress?: string;
  device?: DeviceInfo;
}

const SAFE_USER_SELECT = {
  id: true,
  name: true,
  email: true,
  phone: true,
  role: true,
  isActive: true,
  isEmailVerified: true,
  isTwoFactorEnabled: true,
  profileImageUrl: true,
  lastLoginAt: true,
  currentLoginIp: true,
  createdAt: true,
  updatedAt: true,
};

/**
 * AuthService - Handles core identity and access management.
 */
export const AuthService = {
  /**
   * Helper to issue a full session (Access + Refresh tokens).
   */
  async _issueSession(
    userId: string,
    name: string,
    role: string,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const accessToken = signToken({ id: userId, userId, name, role });
    const refreshToken = signRefreshToken({ id: userId, userId, name, role });

    // Persist refresh token for revocation and rotation support
    await prisma.userToken.create({
      data: {
        token: refreshToken,
        userId,
        type: "REFRESH_TOKEN",
        expiresAt: TokenExpiration.refreshToken(),
      },
    });

    return { accessToken, refreshToken };
  },

  /**
   * Registers a new user and starts a session.
   */
  async register(
    data: RegisterInput,
    context: SecurityContext,
  ): Promise<AuthResponse> {
    const normalizedEmail = data.email.toLowerCase().trim();
    const orConditions: Prisma.UserWhereInput[] = [{ email: normalizedEmail }];
    if (data.phone) {
      orConditions.push({ phone: data.phone.trim() });
    }

    const existingUser = await prisma.user.findFirst({
      where: { OR: orConditions },
    });

    if (existingUser) {
      AuditService.log({
        action: "LOGIN_FAILURE",
        entity: "auth",
        ipAddress: context.ipAddress,
        device: context.device,
        metadata: {
          reason: "Duplicate registration attempt",
          email: normalizedEmail,
        },
      });
      throw new BadRequestError(AUTH_MESSAGES.IDENTIFIER_ALREADY_EXISTS);
    }

    const hashedPassword = await PasswordUtils.hash(data.password);

    const user = await (prisma.user as any).create({
      data: {
        name: data.name,
        email: normalizedEmail,
        phone: data.phone?.trim(),
        passwordHash: hashedPassword,
      },
      select: SAFE_USER_SELECT,
    });

    const verifyToken = PasswordUtils.generateRandomToken();

    await Promise.all([
      AuditService.log({
        userId: user.id,
        action: "USER_REGISTERED",
        entity: "user",
        ipAddress: context.ipAddress,
        device: context.device,
        metadata: { type: "registration" },
      }),

      prisma.userToken.create({
        data: {
          token: verifyToken,
          userId: user.id,
          type: "EMAIL_VERIFICATION",
          expiresAt: TokenExpiration.emailVerification(),
        },
      }),
    ]);

    emailService.sendWelcome(user.email, user.name).catch(console.error);
    emailService
      .sendEmailVerification(user.email, user.name, verifyToken)
      .catch(console.error);

    return {
      user: user as unknown as UserEntity,
    };
  },

  /**
   * Authenticates a user with account lockout and session tracking.
   * If 2FA is enabled, it returns a challenge token instead of a full session.
   */
  async login(
    data: LoginInput,
    context: SecurityContext,
  ): Promise<AuthResponse> {
    const normalizedEmail = data.email.toLowerCase().trim();
    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    // Protection against timing attacks and account brute-forcing
    if (user && (await AuditService.isAccountLocked(user.id))) {
      AuditService.log({
        userId: user.id,
        action: "ACCOUNT_LOCKED",
        entity: "auth",
        ipAddress: context.ipAddress,
        device: context.device,
      });
      emailService
        .sendAccountLockedAlert(user.email, user.name)
        .catch(console.error);
      throw new ForbiddenError(AUTH_MESSAGES.ACCOUNT_LOCKED);
    }

    const dummyHash =
      "$2b$12$L7p6V2jWnC5A9vB4zR7yO.fXk8gK2m5P9q3S1t0rU4i8nV7w6x5y";
    const isPasswordValid = await PasswordUtils.compare(
      data.password,
      user ? user.passwordHash : dummyHash,
    );

    if (!user || !isPasswordValid) {
      if (user) {
        await AuditService.recordLoginAttempt({
          userId: user.id,
          isSuccessful: false,
          ipAddress: context.ipAddress,
          device: context.device,
          errorMessage: AUTH_MESSAGES.INVALID_CREDENTIALS,
        });
      }
      throw new UnauthenticatedError(AUTH_MESSAGES.INVALID_CREDENTIALS);
    }

    if (!user.isActive) {
      throw new UnauthenticatedError(AUTH_MESSAGES.ACCOUNT_INACTIVE);
    }

    if (!user.isEmailVerified) {
      throw new ForbiddenError(AUTH_MESSAGES.EMAIL_NOT_VERIFIED);
    }

    if ((user as any).isTwoFactorEnabled) {
      const mfaToken = PasswordUtils.generateRandomToken();

      await prisma.userToken.create({
        data: {
          token: mfaToken,
          userId: user.id,
          type: "MFA_SESSION",
          expiresAt: TokenExpiration.mfaSession(),
        },
      });

      return {
        mfaRequired: true,
        mfaToken,
      };
    }

    const [session] = await Promise.all([
      this._issueSession(user.id, user.name, user.role),
      prisma.user.update({
        where: { id: user.id },
        data: {
          lastLoginAt: new Date(),
          currentLoginIp: context.ipAddress,
        } as any,
      }),
      AuditService.recordLoginAttempt({
        userId: user.id,
        isSuccessful: true,
        ipAddress: context.ipAddress,
        device: context.device,
      }),
    ]);

    const { passwordHash, ...safeUser } = user;
    return {
      user: safeUser as unknown as UserEntity,
      accessToken: session.accessToken,
      refreshToken: session.refreshToken,
    };
  },

  /**
   * Finalizes the login process by verifying the MFA code.
   */
  async verify2FALogin(
    mfaToken: string,
    code: string,
    context: SecurityContext,
  ): Promise<AuthResponse> {
    const userToken = await prisma.userToken.findUnique({
      where: { token: mfaToken },
      include: { user: true },
    });

    if (
      !userToken ||
      userToken.type !== "MFA_SESSION" ||
      userToken.expiresAt < new Date()
    ) {
      throw new UnauthenticatedError(AUTH_MESSAGES.SESSION_INVALID);
    }

    const { user } = userToken;

    if (!user.isActive) {
      throw new UnauthenticatedError(AUTH_MESSAGES.ACCOUNT_INACTIVE);
    }

    if (!user.isEmailVerified) {
      throw new ForbiddenError(AUTH_MESSAGES.EMAIL_NOT_VERIFIED);
    }

    if (await AuditService.isAccountLocked(user.id)) {
      await prisma.userToken.delete({ where: { id: userToken.id } });
      throw new ForbiddenError(AUTH_MESSAGES.ACCOUNT_LOCKED);
    }

    if (!(user as any).twoFactorSecret) {
      throw new BadRequestError(AUTH_MESSAGES.MFA_NOT_CONFIGURED);
    }

    const isValid = verify({
      token: code,
      secret: (user as any).twoFactorSecret,
    });

    if (!isValid) {
      await AuditService.recordLoginAttempt({
        userId: user.id,
        isSuccessful: false,
        ipAddress: context.ipAddress,
        device: context.device,
        errorMessage: AUTH_MESSAGES.MFA_INVALID,
      });
      if (await AuditService.isAccountLocked(user.id)) {
        await prisma.userToken.delete({ where: { id: userToken.id } });
      }
      throw new UnauthenticatedError(AUTH_MESSAGES.MFA_INVALID);
    }

    const [session] = await Promise.all([
      this._issueSession(user.id, user.name, user.role),
      prisma.userToken.delete({ where: { id: userToken.id } }),
      prisma.user.update({
        where: { id: user.id },
        data: {
          lastLoginAt: new Date(),
          currentLoginIp: context.ipAddress,
        } as any,
      }),
      AuditService.recordLoginAttempt({
        userId: user.id,
        isSuccessful: true,
        ipAddress: context.ipAddress,
        device: context.device,
      }),
    ]);

    const { passwordHash, ...safeUser } = user;
    return {
      user: safeUser as unknown as UserEntity,
      accessToken: session.accessToken,
      refreshToken: session.refreshToken,
    };
  },

  /**
   * Starts the 2FA setup process for an authenticated user.
   */
  async setup2FA(userId: string): Promise<{ secret: string; qrCode: string }> {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new BadRequestError(AUTH_MESSAGES.USER_NOT_FOUND);
    if ((user as any).isTwoFactorEnabled) {
      throw new BadRequestError(
        "2FA is already enabled. Disable it first before reconfiguring.",
      );
    }

    const secret = generateSecret();
    const otpauth = generateURI({
      label: user.email,
      issuer: "Shipping Logistics",
      secret: secret,
    });
    const qrCode = await QRCode.toDataURL(otpauth);

    // Save secret temporarily (we don't enable it yet)
    await (prisma.user as any).update({
      where: { id: userId },
      data: {
        twoFactorSecret: secret,
        isTwoFactorEnabled: false,
      },
    });

    return { secret, qrCode };
  },

  /**
   * Activates 2FA after verifying the user's first code.
   */
  async activate2FA(userId: string, code: string): Promise<void> {
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user || !(user as any).twoFactorSecret) {
      throw new BadRequestError(AUTH_MESSAGES.MFA_SETUP_NOT_INITIATED);
    }

    const isValid = verify({
      token: code,
      secret: (user as any).twoFactorSecret,
    });

    if (!isValid) {
      throw new BadRequestError(AUTH_MESSAGES.MFA_INVALID);
    }

    await (prisma.user as any).update({
      where: { id: userId },
      data: { isTwoFactorEnabled: true },
    });

    AuditService.log({
      userId,
      action: "2FA_ENABLED",
      entity: "auth",
      metadata: { detail: "2FA Activated" },
    });
  },

  /**
   * Disables 2FA after verifying current password and TOTP code, and revokes sessions.
   */
  async disable2FA(
    userId: string,
    currentPassword: string,
    code: string,
    context: SecurityContext,
  ): Promise<void> {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new BadRequestError(AUTH_MESSAGES.USER_NOT_FOUND);

    if (!(user as any).isTwoFactorEnabled || !(user as any).twoFactorSecret) {
      throw new BadRequestError(AUTH_MESSAGES.MFA_NOT_ENABLED);
    }

    const isPasswordValid = await PasswordUtils.compare(
      currentPassword,
      user.passwordHash,
    );
    if (!isPasswordValid) {
      throw new BadRequestError(AUTH_MESSAGES.CURRENT_PASSWORD_INCORRECT);
    }

    const isCodeValid = verify({
      token: code,
      secret: (user as any).twoFactorSecret,
    });
    if (!isCodeValid) {
      throw new BadRequestError(AUTH_MESSAGES.MFA_INVALID);
    }

    await prisma.$transaction([
      prisma.user.update({
        where: { id: userId },
        data: {
          isTwoFactorEnabled: false,
          twoFactorSecret: null,
        },
      }),
      prisma.userToken.deleteMany({
        where: { userId, type: "REFRESH_TOKEN" },
      }),
    ]);

    AuditService.log({
      userId,
      action: "PROFILE_UPDATED",
      entity: "auth",
      ipAddress: context.ipAddress,
      device: context.device,
      metadata: { detail: "2FA Disabled" },
    });
  },

  /**
   * Refreshes an access token using a valid refresh token.
   * Implements Token Rotation for maximum security.
   */
  async refreshAccessToken(
    token: string,
    context: SecurityContext,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    try {
      verifyRefreshToken(token);

      const userToken = await prisma.userToken.findUnique({
        where: { token },
        include: { user: true },
      });

      if (
        !userToken ||
        userToken.type !== "REFRESH_TOKEN" ||
        userToken.expiresAt < new Date()
      ) {
        throw new UnauthenticatedError(AUTH_MESSAGES.REFRESH_TOKEN_INVALID);
      }

      if (!userToken.user.isActive || !userToken.user.isEmailVerified) {
        await prisma.userToken.delete({ where: { id: userToken.id } });
        throw new UnauthenticatedError(AUTH_MESSAGES.ACCOUNT_INACTIVE);
      }

      const newAccessToken = signToken({
        id: userToken.user.id,
        userId: userToken.user.id,
        name: userToken.user.name,
        role: userToken.user.role,
      });
      const newRefreshToken = signRefreshToken({
        id: userToken.user.id,
        userId: userToken.user.id,
        name: userToken.user.name,
        role: userToken.user.role,
      });

      // Atomic rotation: revoke old and persist new
      await prisma.$transaction([
        prisma.userToken.delete({ where: { id: userToken.id } }),
        prisma.userToken.create({
          data: {
            token: newRefreshToken,
            userId: userToken.user.id,
            type: "REFRESH_TOKEN",
            expiresAt: TokenExpiration.refreshToken(),
          },
        }),
      ]);

      AuditService.log({
        userId: userToken.userId,
        action: "LOGIN_SUCCESS",
        entity: "auth",
        ipAddress: context.ipAddress,
        device: context.device,
        metadata: { detail: "Token refreshed" },
      });

      return { accessToken: newAccessToken, refreshToken: newRefreshToken };
    } catch (error) {
      throw new UnauthenticatedError(AUTH_MESSAGES.SESSION_INVALID);
    }
  },

  /**
   * Revokes a refresh token (Logout) if owned by the authenticated user.
   */
  async logout(
    token: string,
    userId: string,
    context: SecurityContext,
  ): Promise<void> {
    const userToken = await prisma.userToken.findUnique({ where: { token } });
    if (
      !userToken ||
      userToken.type !== "REFRESH_TOKEN" ||
      userToken.userId !== userId
    ) {
      return;
    }

    await prisma.userToken.delete({ where: { id: userToken.id } });

    AuditService.log({
      userId: userToken.userId,
      action: "LOGOUT",
      entity: "auth",
      ipAddress: context.ipAddress,
      device: context.device,
      metadata: { detail: "Manual logout" },
    });
  },

  /**
   * Revokes all refresh tokens for the authenticated user.
   */
  async logoutAll(userId: string, context: SecurityContext): Promise<void> {
    await prisma.userToken.deleteMany({
      where: { userId, type: "REFRESH_TOKEN" },
    });

    AuditService.log({
      userId,
      action: "LOGOUT",
      entity: "auth",
      ipAddress: context.ipAddress,
      device: context.device,
      metadata: { detail: "Logout from all devices" },
    });
  },

  /**
   * Requests a password reset token.
   */
  async forgotPassword(
    data: ForgotPasswordInput,
    context: SecurityContext,
  ): Promise<void> {
    const user = await prisma.user.findUnique({ where: { email: data.email } });
    if (!user) return;

    await prisma.userToken.deleteMany({
      where: { userId: user.id, type: "PASSWORD_RESET" },
    });

    const resetToken = PasswordUtils.generateRandomToken();
    const expiresAt = TokenExpiration.passwordReset();

    await prisma.userToken.create({
      data: {
        token: resetToken,
        userId: user.id,
        type: "PASSWORD_RESET",
        expiresAt,
      },
    });

    AuditService.log({
      userId: user.id,
      action: "PASSWORD_RESET_REQUESTED",
      entity: "auth",
      ipAddress: context.ipAddress,
      device: context.device,
    });

    emailService
      .sendPasswordReset(user.email, user.name, resetToken)
      .catch(console.error);
  },

  /**
   * Performs the password reset and kills all active sessions.
   */
  async resetPassword(
    data: ResetPasswordInput,
    context: SecurityContext,
  ): Promise<void> {
    const userToken = await prisma.userToken.findUnique({
      where: { token: data.token },
      include: { user: true },
    });

    if (
      !userToken ||
      userToken.type !== "PASSWORD_RESET" ||
      userToken.expiresAt < new Date()
    ) {
      throw new BadRequestError(AUTH_MESSAGES.INVALID_RESET_TOKEN);
    }

    const hashedPassword = await PasswordUtils.hash(data.newPassword);

    await prisma.$transaction([
      prisma.user.update({
        where: { id: userToken.userId },
        data: { passwordHash: hashedPassword },
      }),
      // Kill all active sessions for this user on security event
      prisma.userToken.deleteMany({
        where: { userId: userToken.userId, type: "REFRESH_TOKEN" },
      }),
      prisma.userToken.delete({ where: { id: userToken.id } }),
    ]);

    AuditService.log({
      userId: userToken.userId,
      action: "PASSWORD_RESET_COMPLETED",
      entity: "auth",
      ipAddress: context.ipAddress,
      device: context.device,
    });

    emailService
      .sendPasswordChangedConfirmation(
        userToken.user.email,
        userToken.user.name,
      )
      .catch(console.error);
  },

  /**
   * Verifies a user's email address.
   */
  async verifyEmail(token: string, context: SecurityContext): Promise<void> {
    const userToken = await prisma.userToken.findUnique({
      where: { token },
      include: { user: true },
    });

    if (
      !userToken ||
      userToken.type !== "EMAIL_VERIFICATION" ||
      userToken.expiresAt < new Date()
    ) {
      throw new BadRequestError(AUTH_MESSAGES.INVALID_VERIFICATION_TOKEN);
    }

    await prisma.$transaction([
      prisma.user.update({
        where: { id: userToken.userId },
        data: { isEmailVerified: true },
      }),
      prisma.userToken.delete({ where: { id: userToken.id } }),
    ]);

    AuditService.log({
      userId: userToken.userId,
      action: "PROFILE_UPDATED",
      entity: "user",
      ipAddress: context.ipAddress,
      device: context.device,
      metadata: { detail: "Email verified" },
    });
  },

  /**
   * Resends the verification email.
   */
  async resendVerification(
    email: string,
    _context: SecurityContext,
  ): Promise<void> {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || user.isEmailVerified) return;

    await prisma.userToken.deleteMany({
      where: { userId: user.id, type: "EMAIL_VERIFICATION" },
    });

    const verifyToken = PasswordUtils.generateRandomToken();
    await prisma.userToken.create({
      data: {
        token: verifyToken,
        userId: user.id,
        type: "EMAIL_VERIFICATION",
        expiresAt: TokenExpiration.emailVerification(),
      },
    });

    emailService
      .sendEmailVerification(user.email, user.name, verifyToken)
      .catch(console.error);
  },
};
