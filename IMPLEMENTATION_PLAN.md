# Implementation Plan: `fix/security-idor-and-rbac`

## Goal
Eliminate Broken Object-Level Authorization (IDOR) and missing Role-Based Access Control (RBAC) vulnerabilities across Activity Logs, Transactions, Orders, and Shipping Docks, and harden proxy IP resolution.

---

## 1. Activity Logs: Restrict Global Log Access

### Problem
In `src/modules/activity-logs/activity-log.routes.ts` (lines 7–10), `GET /api/v1/activity-logs` only requires `authenticate`. Any `CUSTOMER` can read the entire system's audit trail, including other users' `userId`, IP addresses, and `userAgent` strings.

### Steps
1. **`src/modules/activity-logs/activity-log.routes.ts`**:
   - Add `authorize([UserRole.ADMIN, UserRole.MANAGER])` to `GET /`.
   - Keep `GET /me` accessible to any authenticated user (already scoped to `req.user!.userId`).
   - Add Zod query validation (`page`, `limit`, optional `userId` UUID) via `validateRequest`.

---

## 2. Transactions: Enforce Ownership & Role Scoping

### Problem
In `src/modules/transactions/transaction.routes.ts` (lines 21–26), `GET /api/v1/transactions` and `GET /api/v1/transactions/:id` have no role restrictions and no `userId` filter—any `CUSTOMER` can view all financial transactions of all users.

### Steps
1. **`src/modules/transactions/transaction.controller.ts` & `transaction.service.ts`**:
   - Pass `req.user!` (`userId` and `role`) from `TransactionController.getAll` and `getById` to `TransactionService`.
   - In `TransactionService.getAll`: if `actor.role === UserRole.CUSTOMER`, force `where.userId = actor.userId` (ignoring any arbitrary `query.userId`). Allow `ADMIN`, `MANAGER`, and optionally `STAFF` (confirm policy) to query across users.
   - In `TransactionService.getById`: if `actor.role === UserRole.CUSTOMER` and `transaction.userId !== actor.userId`, throw `ForbiddenError` (or `NotFoundError` to prevent resource enumeration).
2. **`src/modules/transactions/transaction.schema.ts` & `transaction.routes.ts`**:
   - Add `getTransactionsSchema` for pagination/filtering (`orderId`, `status`, `type`) and attach `validateRequest(getTransactionsSchema)` to `GET /`.

---

## 3. Orders: Enforce Ownership Scoping & Validation

### Problem
In `src/modules/orders/order.routes.ts` (lines 22–26) and `src/modules/orders/order.service.ts`:
- `GET /api/v1/orders` lets any `CUSTOMER` list all orders and filter by any `userId`.
- `GET /api/v1/orders/:id` and `GET /api/v1/orders/track/:trackingNumber` return full order details, transactions, and owner PII (`user.email`, `user.phone`, `user.name`) to any authenticated user.
- `GET /:id` and `DELETE /:id` lack UUID param validation.

### Steps
1. **`src/modules/orders/order.controller.ts` & `order.service.ts`**:
   - Pass `req.user!` to `OrderService.getAll`, `getById`, and `getByTrackingNumber`.
   - In `getAll`: if `actor.role === UserRole.CUSTOMER`, force `where.userId = actor.userId`.
   - In `getById`: if `actor.role === UserRole.CUSTOMER` and `order.userId !== actor.userId`, throw `ForbiddenError` (or `NotFoundError`).
   - In `getByTrackingNumber`:
     - Decide whether tracking is owner/staff-only or public-summary:
     - If restricted to owner/staff: enforce `order.userId === actor.userId` for `CUSTOMER` roles.
     - If customers can track by tracking number without owning it, strip sensitive PII (`user.email`, `user.phone`, `recipientPhone`, `amount`/`taxAmount`) and return only shipment tracking status, `history`, and dock names.
2. **`src/modules/orders/order.schema.ts` & `order.routes.ts`**:
   - Add `orderIdParamSchema` (`params: { id: z.string().uuid() }`) and attach it to `GET /:id` and `DELETE /:id`.

---

## 4. Shipping Docks: Prevent Transaction Leak on `GET /docks/:id`

### Problem
`DockService.getById` (`src/modules/docks/dock.service.ts`, lines 33–52) returns the last 20 `transactions` (with user names, amounts, and order tracking numbers) to any authenticated user, including `CUSTOMER`s.

### Steps
1. **`src/modules/docks/dock.controller.ts` & `dock.service.ts`**:
   - Pass `req.user?.role` into `DockService.getById(id, role)`.
   - Only include `transactions` when `role` is `ADMIN`, `MANAGER`, or `STAFF`; omit `transactions` (and sensitive stats) for `CUSTOMER`.
   - Add query validation schema for `GET /api/v1/docks` pagination/status filtering.

---

## 5. Proxy Trust & IP Extraction

### Problem
`src/app.ts` does not configure `trust proxy`, yet `src/modules/auth/auth.controller.ts` (`getSecurityContext`) and `src/middlewares/activityLogger.ts` read `req.headers["x-forwarded-for"]` directly, allowing clients to spoof their logged IP address.

### Steps
1. **`src/app.ts` & `src/config/env.ts`**:
   - Add optional `TRUST_PROXY` env config (e.g., `"1"` or boolean/hop count in production) and call `app.set("trust proxy", env.TRUST_PROXY)` when enabled.
2. **`src/modules/auth/auth.controller.ts` & `src/middlewares/activityLogger.ts`**:
   - Replace manual `req.headers["x-forwarded-for"]` parsing with `req.ip` (which Express computes safely according to `trust proxy`).

---

## Verification Checklist
- [ ] `CUSTOMER` calling `GET /api/v1/activity-logs` receives `403 Forbidden`; `ADMIN`/`MANAGER` receives `200 OK`.
- [ ] `CUSTOMER` calling `GET /api/v1/transactions` only sees their own transactions; `GET /transactions/:id` for another user's transaction returns `403`/`404`.
- [ ] `CUSTOMER` calling `GET /api/v1/orders` only sees their own orders; `GET /orders/:id` and `/orders/track/:trackingNumber` for another user's order do not leak PII or financial data.
- [ ] `CUSTOMER` calling `GET /api/v1/docks/:id` does not receive other users' `transactions`.
- [ ] `GET /api/v1/orders/not-a-uuid` returns `400 Bad Request` via Zod validation instead of hitting Prisma.
