import {
  TransactionType,
  TransactionStatus,
  PaymentMethod,
  Prisma,
} from "../../../generated/prisma/client";

export interface TransactionEntity {
  id: string;
  reference: string;
  userId: string;
  orderId: string;
  shippingDockId: string;
  amount: Prisma.Decimal;
  currency: string;
  type: TransactionType;
  status: TransactionStatus;
  paymentMethod: PaymentMethod;
  notes: string | null;
  metadata: Prisma.JsonValue | null;
  createdAt: Date;
  updatedAt: Date;
}
