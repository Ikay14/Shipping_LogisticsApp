-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "destinationDockId" TEXT,
ADD COLUMN     "originDockId" TEXT,
ADD COLUMN     "volumetricWeight" DECIMAL(8,3);

-- CreateTable
CREATE TABLE "order_history" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "status" "OrderStatus" NOT NULL,
    "notes" TEXT,
    "actorId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "order_history_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "order_history_orderId_idx" ON "order_history"("orderId");

-- CreateIndex
CREATE INDEX "order_history_createdAt_idx" ON "order_history"("createdAt");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_originDockId_fkey" FOREIGN KEY ("originDockId") REFERENCES "shipping_docks"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_destinationDockId_fkey" FOREIGN KEY ("destinationDockId") REFERENCES "shipping_docks"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_history" ADD CONSTRAINT "order_history_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_history" ADD CONSTRAINT "order_history_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
