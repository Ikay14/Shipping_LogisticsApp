# Implementation Plan: `feat/order-transaction-state-machines`

## Goal
Fix order/transaction data integrity bugs, enforce valid status transition state machines, synchronize payment completion with order status, and enforce shipping dock lifecycle rules.

---

## 1. Fix Order Creation & Update Data Integrity

### Problems
- `OrderService.create` (`src/modules/orders/order.service.ts`, lines 174–196) drops `notes` and `volumetricWeight` even though `createOrderSchema` accepts them.
- `OrderController.create` (`src/modules/orders/order.controller.ts`, line 29) reads `req.body.userId`, which `createOrderSchema` strips out.
- `OrderService.update` (`src/modules/orders/order.service.ts`, lines 255–270) allows updating `amount`, `taxAmount`, or `shippingFee` without recalculating `totalAmount`, and skips dock existence/status validation.
- `generateTrackingNumber` uses `Math.random()` with no `P2002` collision retry.

### Steps
1. **`src/modules/orders/order.schema.ts` & `order.controller.ts`**:
   - Add optional `userId: z.string().uuid().optional()` to `createOrderSchema`.
   - In `OrderController.create`: only honor `input.userId` when `req.user!.role` is `ADMIN`, `MANAGER`, or `STAFF` (and verify target user exists & is active in `OrderService.create`); for `CUSTOMER`, always use `actorId`.
2. **`src/modules/orders/order.service.ts`**:
   - Persist `notes` and `volumetricWeight` in `OrderService.create`.
   - Use `crypto.randomInt(1000, 10000)` in `generateTrackingNumber()` and add a bounded retry loop if Prisma throws `P2002` on `trackingNumber`.
   - In `OrderService.update`:
     - Recompute `totalAmount = (input.amount ?? existing.amount) + (input.taxAmount ?? existing.taxAmount) + (input.shippingFee ?? existing.shippingFee)` whenever any monetary field changes (using `Decimal` or cents/integer arithmetic to avoid floating-point drift).
     - Validate `originDockId` / `destinationDockId` if updated (using a shared helper with `create`).

---

## 2. Enforce Order State Machine & Customer Cancellation

### Problem
`OrderService.updateStatus` (`src/modules/orders/order.service.ts`, lines 219–253) allows arbitrary transitions (e.g., `DELIVERED -> PENDING`, `CANCELLED -> SHIPPED`), never sets `actualDelivery` on `DELIVERED`, and gives customers no way to cancel their own `PENDING` order.

### Steps
1. **`src/modules/orders/order.service.ts`**:
   - Define an explicit transition map:
     - `PENDING` -> `["PAID", "CANCELLED"]`
     - `PAID` -> `["PROCESSING", "CANCELLED"]`
     - `PROCESSING` -> `["SHIPPED", "CANCELLED"]`
     - `SHIPPED` -> `["DELIVERED"]`
     - `DELIVERED` -> `[]` (terminal)
     - `CANCELLED` -> `[]` (terminal)
   - Reject invalid transitions with `BadRequestError(ORDER_MESSAGES.INVALID_STATUS)`.
   - Automatically set `actualDelivery: new Date()` when transitioning to `DELIVERED`.
   - Use `"ORDER_STATUS_CHANGED"` in `AuditService.log` (currently logs `"ORDER_UPDATED"`).
2. **Customer Cancellation Endpoint**:
   - Add `POST /api/v1/orders/:id/cancel` (authenticated): verify `order.userId === req.user!.userId` (or staff/admin) and `order.status === "PENDING"`, then transition to `CANCELLED` with `OrderHistory` + `AuditService` log.

---

## 3. Transaction Integrity & Order Payment Sync

### Problems
In `src/modules/transactions/transaction.service.ts`:
- `create` doesn't check `order.userId === input.userId` or validate amounts against `order.totalAmount`.
- `update` allows arbitrary `TransactionStatus` changes (e.g., `COMPLETED -> PENDING`, `REVERSED -> COMPLETED`) and never updates `Order.status` to `PAID` when a `PAYMENT` completes.

### Steps
1. **`src/modules/transactions/transaction.service.ts`**:
   - In `create`:
     - Select `userId`, `status`, `totalAmount` from `order`.
     - Reject if `order.userId !== input.userId` or `order.status === "CANCELLED"`.
     - For `TransactionType.PAYMENT`, reject if `order.status !== "PENDING"` or if a `COMPLETED` payment already exists; validate `Number(input.amount) === Number(order.totalAmount)` (or track partial payments if intended).
     - Use `crypto.randomBytes` / `crypto.randomInt` in `generateReference()` and handle `P2002` retries.
   - In `update`:
     - Enforce valid `TransactionStatus` transitions (`PENDING -> COMPLETED | FAILED`, `COMPLETED -> REVERSED`, terminal `FAILED` and `REVERSED`).
     - Wrap in `prisma.$transaction`: when a `PAYMENT` transaction transitions to `COMPLETED`, also update `order.status` from `PENDING` to `PAID` and insert an `OrderHistory` entry.

---

## 4. Dock Validation & Deletion Safeguards

### Steps
1. **`src/modules/orders/order.service.ts` (shared dock validator)**:
   - Require both `originDockId` and `destinationDockId` (when provided) to have `DockStatus.ACTIVE` (reject both `INACTIVE` and `MAINTENANCE`).
   - Reject if `originDockId && destinationDockId && originDockId === destinationDockId`.
2. **`src/modules/docks/dock.service.ts`**:
   - In `create` and `update`: validate that `managerId` references an active user with `role` in `[UserRole.ADMIN, UserRole.MANAGER]`.
   - In `delete`: include `_count: { select: { transactions: true, originOrders: true, destinationOrders: true } }` and reject deletion if any orders or transactions reference the dock.

---

## Verification Checklist
- [ ] Creating an order persists `notes` and `volumetricWeight`; updating `amount` updates `totalAmount`.
- [ ] Transitioning an order `DELIVERED -> PENDING` returns `400 Bad Request`; transitioning `SHIPPED -> DELIVERED` sets `actualDelivery`.
- [ ] Customer can cancel their own `PENDING` order via `POST /orders/:id/cancel`, but cannot cancel `SHIPPED` orders or another user's order.
- [ ] Completing a `PAYMENT` transaction atomically sets the associated `PENDING` order to `PAID` and creates an `OrderHistory` row.
- [ ] Assigning an `INACTIVE` dock to an order or deleting a dock linked to orders returns `400 Bad Request`.
