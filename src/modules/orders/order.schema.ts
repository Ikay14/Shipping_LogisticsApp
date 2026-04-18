import { z } from "zod";
import { OrderStatus, OrderPriority } from "../../generated/prisma/client";

export const createOrderSchema = z.object({
  body: z.object({
    recipientName: z
      .string({ required_error: "recipientName is required" })
      .min(2, "recipientName must be at least 2 characters"),
    recipientPhone: z
      .string({ required_error: "recipientPhone is required" })
      .min(5, "recipientPhone must be at least 5 characters"),
    amount: z
      .number({ required_error: "amount is required" })
      .positive("amount must be greater than 0"),
    taxAmount: z
      .number({ required_error: "taxAmount is required" })
      .min(0, "taxAmount cannot be negative"),
    shippingFee: z.number().min(0).optional().default(0),
    notes: z.string().max(1000).optional(),
    priority: z
      .nativeEnum(OrderPriority)
      .optional()
      .default(OrderPriority.STANDARD),
    originAddress: z
      .string({ required_error: "originAddress is required" })
      .min(5, "originAddress must be at least 5 characters"),
    destinationAddress: z
      .string({ required_error: "destinationAddress is required" })
      .min(5, "destinationAddress must be at least 5 characters"),
    weightKg: z.number().positive().optional(),
    volumetricWeight: z.number().positive().optional(),
    dimensions: z.string().optional(),
    estimatedDelivery: z.string().datetime().optional(),
    originDockId: z.string().uuid().optional(),
    destinationDockId: z.string().uuid().optional(),
  }),
});

export const updateOrderSchema = z.object({
  params: z.object({ id: z.string().uuid("id must be a valid UUID") }),
  body: z.object({
    recipientName: z.string().min(2).optional(),
    recipientPhone: z.string().min(5).optional(),
    amount: z.number().positive().optional(),
    taxAmount: z.number().min(0).optional(),
    shippingFee: z.number().min(0).optional(),
    notes: z.string().max(1000).optional(),
    priority: z.nativeEnum(OrderPriority).optional(),
    originAddress: z.string().min(5).optional(),
    destinationAddress: z.string().min(5).optional(),
    weightKg: z.number().positive().optional(),
    volumetricWeight: z.number().positive().optional(),
    dimensions: z.string().optional(),
    estimatedDelivery: z.string().datetime().optional(),
    actualDelivery: z.string().datetime().optional(),
    originDockId: z.string().uuid().optional(),
    destinationDockId: z.string().uuid().optional(),
  }),
});

export const updateStatusSchema = z.object({
  params: z.object({ id: z.string().uuid("id must be a valid UUID") }),
  body: z.object({
    status: z.nativeEnum(OrderStatus, { required_error: "status is required" }),
    notes: z.string().max(500).optional(),
  }),
});

export const getOrdersSchema = z.object({
  query: z.object({
    page: z.string().optional(),
    limit: z.string().optional(),
    status: z.nativeEnum(OrderStatus).optional(),
    priority: z.nativeEnum(OrderPriority).optional(),
    userId: z.string().uuid().optional(),
    search: z.string().optional(),
  }),
});

export type CreateOrderInput = z.infer<typeof createOrderSchema>["body"];
export type UpdateOrderInput = z.infer<typeof updateOrderSchema>["body"];
export type GetOrdersQuery = z.infer<typeof getOrdersSchema>["query"];
