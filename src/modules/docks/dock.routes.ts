import { Router } from "express";
import { DockController } from "./dock.controller";
import { authenticate } from "../../middlewares/authenticate";
import { authorize } from "../../middlewares/authorize";
import { validateRequest } from "../../middlewares/validateRequest";
import { UserRole } from "../../generated/prisma/client";
import {
  createDockSchema,
  updateDockSchema,
  idParamSchema,
} from "./dock.schema";

const router = Router();

// All dock routes require a valid session
router.use(authenticate);

/**
 * Public/Staff: View docks
 */
router.get("/", DockController.getAll);
router.get("/:id", validateRequest(idParamSchema), DockController.getById);

/**
 * Administrative: Manage docks
 * Restricted to ADMIN and MANAGER roles
 */
router.post(
  "/",
  authorize([UserRole.ADMIN, UserRole.MANAGER]),
  validateRequest(createDockSchema),
  DockController.create,
);

router.patch(
  "/:id",
  authorize([UserRole.ADMIN, UserRole.MANAGER]),
  validateRequest(updateDockSchema),
  DockController.update,
);

router.delete(
  "/:id",
  authorize([UserRole.ADMIN, UserRole.MANAGER]),
  validateRequest(idParamSchema),
  DockController.delete,
);

export default router;
