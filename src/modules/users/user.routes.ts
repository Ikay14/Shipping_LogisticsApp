import { Router } from "express";
import { UserController } from "./user.controller";
import { authenticate } from "../../middlewares/authenticate";
import { authorize } from "../../middlewares/authorize";
import { validateRequest } from "../../middlewares/validateRequest";
import { UserRole } from "../../generated/prisma/client";
import {
  getUsersSchema,
  userIdParamSchema,
  updateUserRoleSchema,
  updateUserStatusSchema,
} from "./user.schema";

const router = Router();

router.use(authenticate);

router.get(
  "/",
  authorize([UserRole.ADMIN, UserRole.MANAGER]),
  validateRequest(getUsersSchema),
  UserController.getAll,
);

router.get(
  "/:id",
  authorize([UserRole.ADMIN, UserRole.MANAGER]),
  validateRequest(userIdParamSchema),
  UserController.getById,
);

router.patch(
  "/:id/role",
  authorize([UserRole.ADMIN]),
  validateRequest(updateUserRoleSchema),
  UserController.updateRole,
);

router.patch(
  "/:id/status",
  authorize([UserRole.ADMIN]),
  validateRequest(updateUserStatusSchema),
  UserController.updateStatus,
);

export default router;
