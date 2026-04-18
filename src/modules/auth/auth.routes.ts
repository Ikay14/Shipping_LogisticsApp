import { Router } from "express";
import { AuthController } from "./auth.controller";
import { authenticate } from "../../middlewares/authenticate";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  registerSchema,
  loginSchema,
  updateProfileSchema,
  updateProfilePutSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  changePasswordSchema,
  refreshTokenSchema,
  activate2FASchema,
  verify2FALoginSchema,
} from "./auth.schema";
import {
  authLimiter,
  uploadLimiter,
  strictLimiter,
} from "../../middlewares/rateLimiter";
import { upload } from "../../utils/upload";

const router = Router();

router.post(
  "/register",
  authLimiter,
  validateRequest(registerSchema),
  AuthController.register,
);

router.post(
  "/login",
  authLimiter,
  validateRequest(loginSchema),
  AuthController.login,
);

router.post(
  "/refresh",
  strictLimiter,
  validateRequest(refreshTokenSchema),
  AuthController.refresh,
);

// MFA completion
router.post(
  "/2fa/verify",
  authLimiter,
  validateRequest(verify2FALoginSchema),
  AuthController.verify2FALogin,
);

// Identity recovery and verification
router.post(
  "/forgot-password",
  strictLimiter,
  validateRequest(forgotPasswordSchema),
  AuthController.forgotPassword,
);

router.post(
  "/reset-password",
  strictLimiter,
  validateRequest(resetPasswordSchema),
  AuthController.resetPassword,
);

router.post("/verify-email", strictLimiter, AuthController.verifyEmail);

router.post(
  "/resend-verification",
  strictLimiter,
  AuthController.resendVerification,
);

router.use(authenticate);

router.post("/logout", AuthController.logout);

router.get("/me", AuthController.getProfile);

// 2FA Management
router.post("/2fa/setup", strictLimiter, AuthController.setup2FA);
router.post(
  "/2fa/activate",
  strictLimiter,
  validateRequest(activate2FASchema),
  AuthController.activate2FA,
);

// Profile updates
router.patch(
  "/profile",
  validateRequest(updateProfileSchema),
  AuthController.updateProfile,
);

router.put(
  "/profile",
  validateRequest(updateProfilePutSchema),
  AuthController.updateProfilePut,
);

router.post(
  "/change-password",
  strictLimiter,
  validateRequest(changePasswordSchema),
  AuthController.changePassword,
);

router.post(
  "/avatar",
  uploadLimiter,
  upload.single("avatar"),
  AuthController.uploadAvatar,
);

export default router;
