import { Router } from "express";
import { UploadController } from "./upload.controller";
import { authenticate } from "../../middlewares/authenticate";
import { uploadLimiter } from "../../middlewares/rateLimiter";
import { upload } from "../../utils/upload";

const router = Router();

// General protection against unauthenticated spam uploads
router.use(authenticate);
router.use(uploadLimiter);

/**
 * POST /api/v1/uploads/single
 * Accepts query parameters: ?webp=true & ?docs=true
 */
router.post("/single", upload.single("file"), UploadController.uploadSingle);

/**
 * POST /api/v1/uploads/multiple
 * Accepts query parameters: ?webp=true & ?docs=true
 * Caps maximum concurrent file uploads to 10.
 */
router.post(
  "/multiple",
  upload.array("files", 10),
  UploadController.uploadMultiple,
);

export default router;
