import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { AuthService, SecurityContext } from "./auth.service";
import { ProfileService } from "./profile.service";
import { BadRequestError } from "../../errors/BadRequestError";
import { DeviceUtils } from "../../utils/device";
import { AUTH_MESSAGES } from "../../constants/messages";
import type {
  RegisterInput,
  LoginInput,
  UpdateProfileInput,
  UpdateProfilePutInput,
  ForgotPasswordInput,
  ResetPasswordInput,
  ChangePasswordInput,
  RefreshTokenInput,
  Activate2FAInput,
  Verify2FALoginInput,
} from "./auth.schema";

/**
 * Utility to extract security metadata from an Express request.
 */
const getSecurityContext = (req: Request): SecurityContext => ({
  ipAddress:
    (req.headers["x-forwarded-for"] as string)?.split(",")[0].trim() ||
    req.socket.remoteAddress,
  device: DeviceUtils.parse(req.headers["user-agent"]),
});

/**
 * AuthController - Handling HTTP layer for Identity and Profile management.
 */
export const AuthController = {
  /**
   * POST /auth/register
   */
  async register(req: Request, res: Response): Promise<void> {
    const result = await AuthService.register(
      req.body as RegisterInput,
      getSecurityContext(req),
    );
    res.status(StatusCodes.CREATED).json({ success: true, data: result });
  },

  /**
   * POST /auth/login
   */
  async login(req: Request, res: Response): Promise<void> {
    const result = await AuthService.login(
      req.body as LoginInput,
      getSecurityContext(req),
    );
    res.status(StatusCodes.OK).json({ success: true, data: result });
  },

  /**
   * POST /auth/refresh
   * Exchanges a Refresh Token for a new pair of tokens (Access + Refresh).
   */
  async refresh(req: Request, res: Response): Promise<void> {
    const { refreshToken } = req.body as RefreshTokenInput;
    const result = await AuthService.refreshAccessToken(
      refreshToken,
      getSecurityContext(req),
    );
    res.status(StatusCodes.OK).json({ success: true, data: result });
  },

  /**
   * POST /auth/forgot-password
   */
  async forgotPassword(req: Request, res: Response): Promise<void> {
    await AuthService.forgotPassword(
      req.body as ForgotPasswordInput,
      getSecurityContext(req),
    );
    res.status(StatusCodes.OK).json({
      success: true,
      message: AUTH_MESSAGES.PASSWORD_RESET_EMAIL_SENT,
    });
  },

  /**
   * POST /auth/reset-password
   */
  async resetPassword(req: Request, res: Response): Promise<void> {
    await AuthService.resetPassword(
      req.body as ResetPasswordInput,
      getSecurityContext(req),
    );
    res.status(StatusCodes.OK).json({
      success: true,
      message: AUTH_MESSAGES.PASSWORD_RESET_SUCCESS,
    });
  },

  /**
   * POST /auth/verify-email
   */
  async verifyEmail(req: Request, res: Response): Promise<void> {
    const { token } = req.body;
    if (!token) throw new BadRequestError("Verification token is required");

    await AuthService.verifyEmail(token, getSecurityContext(req));
    res.status(StatusCodes.OK).json({
      success: true,
      message: AUTH_MESSAGES.EMAIL_VERIFICATION_SUCCESS,
    });
  },

  /**
   * POST /auth/resend-verification
   */
  async resendVerification(req: Request, res: Response): Promise<void> {
    const { email } = req.body;
    if (!email) throw new BadRequestError("Email is required");

    await AuthService.resendVerification(email, getSecurityContext(req));
    res.status(StatusCodes.OK).json({
      success: true,
      message: AUTH_MESSAGES.VERIFICATION_EMAIL_RESENT,
    });
  },

  /**
   * POST /auth/change-password
   */
  async changePassword(req: Request, res: Response): Promise<void> {
    const data = req.body as ChangePasswordInput;
    await ProfileService.updateProfile(req.user!.userId, {
      currentPassword: data.currentPassword,
      newPassword: data.newPassword,
    });
    res.status(StatusCodes.OK).json({
      success: true,
      message: AUTH_MESSAGES.PASSWORD_CHANGE_SUCCESS,
    });
  },

  /**
   * POST /auth/2fa/setup
   */
  async setup2FA(req: Request, res: Response): Promise<void> {
    const result = await AuthService.setup2FA(req.user!.userId);
    res.status(StatusCodes.OK).json({ success: true, data: result });
  },

  /**
   * POST /auth/2fa/activate
   */
  async activate2FA(req: Request, res: Response): Promise<void> {
    const { code } = req.body as Activate2FAInput;
    await AuthService.activate2FA(req.user!.userId, code);
    res.status(StatusCodes.OK).json({
      success: true,
      message: AUTH_MESSAGES.MFA_VERIFICATION_SUCCESS,
    });
  },

  /**
   * POST /auth/2fa/verify
   */
  async verify2FALogin(req: Request, res: Response): Promise<void> {
    const { mfaToken, code } = req.body as Verify2FALoginInput;
    const result = await AuthService.verify2FALogin(
      mfaToken,
      code,
      getSecurityContext(req),
    );
    res.status(StatusCodes.OK).json({ success: true, data: result });
  },

  /**
   * POST /auth/logout
   */
  async logout(req: Request, res: Response): Promise<void> {
    const { refreshToken } = req.body;
    // Attempt to revoke the refresh token if provided
    if (refreshToken) {
      await AuthService.logout(refreshToken, getSecurityContext(req));
    }

    res.status(StatusCodes.OK).json({
      success: true,
      message: AUTH_MESSAGES.LOGOUT_SUCCESS,
    });
  },

  /**
   * GET /auth/me
   */
  async getProfile(req: Request, res: Response): Promise<void> {
    const user = await ProfileService.getProfile(req.user!.userId);
    res.status(StatusCodes.OK).json({ success: true, data: user });
  },

  /**
   * PATCH /auth/profile
   */
  async updateProfile(req: Request, res: Response): Promise<void> {
    const result = await ProfileService.updateProfile(
      req.user!.userId,
      req.body as UpdateProfileInput,
    );
    res.status(StatusCodes.OK).json({ success: true, data: result });
  },

  /**
   * PUT /auth/profile
   */
  async updateProfilePut(req: Request, res: Response): Promise<void> {
    const result = await ProfileService.updateProfile(
      req.user!.userId,
      req.body as UpdateProfilePutInput,
    );
    res.status(StatusCodes.OK).json({ success: true, data: result });
  },

  /**
   * POST /auth/avatar
   */
  async uploadAvatar(req: Request, res: Response): Promise<void> {
    if (!req.file) {
      throw new BadRequestError("Image file is required");
    }

    const publicUrl = await ProfileService.updateAvatar(
      req.user!.userId,
      req.file,
    );
    res.status(StatusCodes.OK).json({
      success: true,
      message: AUTH_MESSAGES.AVATAR_UPDATED,
      data: { url: publicUrl },
    });
  },
};
