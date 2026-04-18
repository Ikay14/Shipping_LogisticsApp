import { OrderStatus, OrderPriority, Prisma } from "../../../generated/prisma/client";

export interface OrderEntity {
  id: string;
  trackingNumber: string;
  userId: string;
  amount: Prisma.Decimal;
  taxAmount: Prisma.Decimal;
  shippingFee: Prisma.Decimal;
  totalAmount: Prisma.Decimal;
  notes: string | null;
  status: OrderStatus;
  priority: OrderPriority;
  originAddress: string;
  destinationAddress: string;
  recipientName: string;
  recipientPhone: string;
  weightKg: Prisma.Decimal | null;
  dimensions: string | null;
  estimatedDelivery: Date | null;
  actualDelivery: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
