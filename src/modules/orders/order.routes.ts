import { Router } from "express";
import { OrderController } from "./order.controller";
import { authenticate } from "../../middlewares/authenticate";
import { authorize } from "../../middlewares/authorize";
import { validateRequest } from "../../middlewares/validateRequest";
import { UserRole } from "../../generated/prisma/client";
import {
  createOrderSchema,
  updateOrderSchema,
  updateStatusSchema,
  getOrdersSchema,
} from "./order.schema";

const router = Router();

// All order routes require authentication
router.use(authenticate);

/**
 * Public/Staff: List and track orders
 */
router.get("/", validateRequest(getOrdersSchema), OrderController.getAll);

router.get("/track/:trackingNumber", OrderController.getByTrackingNumber);

router.get("/:id", OrderController.getById);

/**
 * CUSTOMER / STAFF: Create order & cancel pending order
 */
router.post("/", validateRequest(createOrderSchema), OrderController.create);
router.post("/:id/cancel", OrderController.cancel);

/**
 * Logistics Internal: Update parcel status
 * Restricted to STAFF, MANAGER, and ADMIN
 */
router.patch(
  "/:id/status",
  authorize([UserRole.ADMIN, UserRole.MANAGER, UserRole.STAFF]),
  validateRequest(updateStatusSchema),
  OrderController.updateStatus,
);

/**
 * Management: Update/Delete order details
 */
router.patch(
  "/:id",
  authorize([UserRole.ADMIN, UserRole.MANAGER]),
  validateRequest(updateOrderSchema),
  OrderController.update,
);

router.delete("/:id", authorize([UserRole.ADMIN]), OrderController.delete);

export default router;
