import {
  TransactionType,
  TransactionStatus,
  PaymentMethod,
} from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { Prisma } from "@prisma/client";

export interface TransactionEntity {
  id: string;
  reference: string;
  userId: string;
  orderId: string;
  shippingDockId: string;
  amount: Decimal;
  currency: string;
  type: TransactionType;
  status: TransactionStatus;
  paymentMethod: PaymentMethod;
  notes: string | null;
  metadata: Prisma.JsonValue | null;
  createdAt: Date;
  updatedAt: Date;
}
