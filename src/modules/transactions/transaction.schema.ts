import { z } from "zod";
import {
  TransactionType,
  TransactionStatus,
  PaymentMethod,
} from "@prisma/client";

export const createTransactionSchema = z.object({
  body: z.object({
    userId: z.string({ required_error: "userId is required" }).uuid(),
    orderId: z.string({ required_error: "orderId is required" }).uuid(),
    shippingDockId: z
      .string({ required_error: "shippingDockId is required" })
      .uuid(),
    amount: z
      .number({ required_error: "amount is required" })
      .positive("amount must be positive"),
    currency: z
      .string()
      .length(3, "currency must be a 3-letter code")
      .default("NGN"),
    type: z.nativeEnum(TransactionType).default(TransactionType.PAYMENT),
    paymentMethod: z.nativeEnum(PaymentMethod).default(PaymentMethod.CASH),
    notes: z.string().max(500).optional(),
    metadata: z.record(z.unknown()).optional(),
  }),
});

export const updateTransactionSchema = z.object({
  params: z.object({ id: z.string().uuid("id must be a valid UUID") }),
  body: z.object({
    status: z.nativeEnum(TransactionStatus).optional(),
    notes: z.string().max(500).optional(),
    metadata: z.record(z.unknown()).optional(),
  }),
});

export const idParamSchema = z.object({
  params: z.object({ id: z.string().uuid("id must be a valid UUID") }),
});

export type CreateTransactionInput = z.infer<
  typeof createTransactionSchema
>["body"];
export type UpdateTransactionInput = z.infer<
  typeof updateTransactionSchema
>["body"];
