import { Router } from "express";
import { UploadController } from "../controller/upload.controller";
import { authenticate } from "../../../middlewares/authenticate";
import { uploadLimiter } from "../../../middlewares/rateLimiter";
import { upload, documentUpload } from "../../../utils/upload";

const router = Router();

// General protection against unauthenticated spam uploads
router.use(authenticate);
router.use(uploadLimiter);

/**
 * POST /api/v1/uploads/single
 * Accepts query parameter: ?webp=true (images only)
 */
router.post("/single", upload.single("file"), UploadController.uploadSingle);

/**
 * POST /api/v1/uploads/documents/single
 * Dedicated endpoint for PDF/Word/CSV documents
 */
router.post(
  "/documents/single",
  documentUpload.single("file"),
  UploadController.uploadSingle,
);

/**
 * POST /api/v1/uploads/multiple
 * Accepts query parameter: ?webp=true (images only)
 * Caps maximum concurrent file uploads to 10.
 */
router.post(
  "/multiple",
  upload.array("files", 10),
  UploadController.uploadMultiple,
);

export default router;
