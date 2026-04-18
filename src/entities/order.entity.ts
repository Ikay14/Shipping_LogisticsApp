import { OrderStatus, OrderPriority } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export interface OrderEntity {
  id: string;
  trackingNumber: string;
  userId: string;
  amount: Decimal;
  taxAmount: Decimal;
  shippingFee: Decimal;
  totalAmount: Decimal;
  notes: string | null;
  status: OrderStatus;
  priority: OrderPriority;
  originAddress: string;
  destinationAddress: string;
  recipientName: string;
  recipientPhone: string;
  weightKg: Decimal | null;
  dimensions: string | null;
  estimatedDelivery: Date | null;
  actualDelivery: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
