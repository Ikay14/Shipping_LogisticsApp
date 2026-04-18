import { Router } from "express";
import { ActivityLogController } from "./activity-log.controller";
import { authenticate } from "../../middlewares/authenticate";

const router = Router();

router.use(authenticate);

router.get("/", ActivityLogController.getAll);
router.get("/me", ActivityLogController.getMyLogs);

export default router;
