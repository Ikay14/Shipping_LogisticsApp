import { Router } from "express";
import { TransactionController } from "./transaction.controller";
import { authenticate } from "../../middlewares/authenticate";
import { authorize } from "../../middlewares/authorize";
import { validateRequest } from "../../middlewares/validateRequest";
import { UserRole } from "@prisma/client";
import {
  createTransactionSchema,
  updateTransactionSchema,
  idParamSchema,
} from "./transaction.schema";

const router = Router();

// All transaction routes require a valid session
router.use(authenticate);

/**
 * Public/Staff: View transactions
 */
router.get("/", TransactionController.getAll);
router.get(
  "/:id",
  validateRequest(idParamSchema),
  TransactionController.getById,
);

/**
 * Administrative/Financial: Manage transactions
 * Restricted to ADMIN and MANAGER roles
 */
router.post(
  "/",
  authorize([UserRole.ADMIN, UserRole.MANAGER]),
  validateRequest(createTransactionSchema),
  TransactionController.create,
);

router.patch(
  "/:id",
  authorize([UserRole.ADMIN, UserRole.MANAGER]),
  validateRequest(updateTransactionSchema),
  TransactionController.update,
);

router.delete(
  "/:id",
  authorize([UserRole.ADMIN]),
  validateRequest(idParamSchema),
  TransactionController.delete,
);

export default router;
