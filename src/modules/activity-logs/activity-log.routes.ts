import { Router } from "express";
import { ActivityLogController } from "./activity-log.controller";
import { authenticate } from "../../middlewares/authenticate";
import { authorize } from "../../middlewares/authorize";
import { validateRequest } from "../../middlewares/validateRequest";
import { UserRole } from "../../generated/prisma/client";
import {
  getActivityLogsSchema,
  getMyActivityLogsSchema,
} from "./activity-log.schema";

const router = Router();

router.use(authenticate);

router.get(
  "/",
  authorize([UserRole.ADMIN, UserRole.MANAGER]),
  validateRequest(getActivityLogsSchema),
  ActivityLogController.getAll,
);
router.get(
  "/me",
  validateRequest(getMyActivityLogsSchema),
  ActivityLogController.getMyLogs,
);

export default router;
