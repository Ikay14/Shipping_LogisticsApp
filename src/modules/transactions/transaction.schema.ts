import { z } from "zod";
import {
  TransactionType,
  TransactionStatus,
  PaymentMethod,
} from "../../generated/prisma/client";

export const createTransactionSchema = z.object({
  body: z.object({
    userId: z.string({ error: "userId is required" }).uuid(),
    orderId: z.string({ error: "orderId is required" }).uuid(),
    shippingDockId: z.string({ error: "shippingDockId is required" }).uuid(),
    amount: z
      .number({ error: "amount is required" })
      .positive("amount must be positive"),
    currency: z
      .string()
      .length(3, "currency must be a 3-letter code")
      .default("NGN"),
    type: z.nativeEnum(TransactionType).default(TransactionType.PAYMENT),
    paymentMethod: z.nativeEnum(PaymentMethod).default(PaymentMethod.CASH),
    notes: z.string().max(500).optional(),
    metadata: z.record(z.string(), z.unknown()).optional(),
  }),
});

export const updateTransactionSchema = z.object({
  params: z.object({ id: z.string().uuid("id must be a valid UUID") }),
  body: z.object({
    status: z.enum(["PENDING", "COMPLETED", "FAILED", "REVERSED"]),
    notes: z.string().max(500).optional(),
    metadata: z.record(z.string(), z.unknown()).optional(),
  }),
});

export const idParamSchema = z.object({
  params: z.object({ id: z.string().uuid("id must be a valid UUID") }),
});

export const getTransactionsSchema = z.object({
  query: z.object({
    page: z.string().optional(),
    limit: z.string().optional(),
    userId: z.string().uuid().optional(),
    orderId: z.string().uuid().optional(),
    status: z.nativeEnum(TransactionStatus).optional(),
    type: z.nativeEnum(TransactionType).optional(),
  }),
});

export type CreateTransactionInput = z.infer<
  typeof createTransactionSchema
>["body"];
export type UpdateTransactionInput = z.infer<
  typeof updateTransactionSchema
>["body"];
export type GetTransactionsQuery = z.infer<
  typeof getTransactionsSchema
>["query"];
