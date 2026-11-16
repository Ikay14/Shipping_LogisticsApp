# Implementation Plan: `feat/admin-user-management-and-emails`

## Goal
Build an Admin User Management module (`/api/v1/users`), consolidate duplicate email services so order/account notifications work end-to-end, and scope `activityLogger` to mutating requests.

---

## 1. Admin User Management Module (`/api/v1/users`)

### Problem
`prisma/schema.prisma` defines `UserRole` (`ADMIN`, `MANAGER`, `STAFF`, `CUSTOMER`) and `isActive`, and `src/modules/shared/service/email/email.ts` has `sendAccountDeactivated`, yet there are no routes or services to list users, manage roles, or activate/deactivate accounts.

### Steps
1. **Create `src/modules/users/`**:
   - `user.schema.ts`:
     - `getUsersSchema` (`page`, `limit`, `role`, `isActive`, `search`)
     - `updateUserRoleSchema` (`params.id` UUID, `body.role` `UserRole`)
     - `updateUserStatusSchema` (`params.id` UUID, `body.isActive` boolean)
     - `userIdParamSchema` (`params.id` UUID)
   - `user.service.ts`:
     - `getAll(query)` using `getPaginationOptions` & `formatPaginatedResult`, selecting only safe user fields (never `passwordHash` or `twoFactorSecret`).
     - `getById(id)` returning safe user fields + summary counts (`_count` of orders/transactions).
     - `updateRole(id, role, actorId)`: prevent an admin from demoting themselves or removing the last `ADMIN`; write `AuditService.log`.
     - `updateStatus(id, isActive, actorId)`: prevent self-deactivation; when `isActive === false`, revoke all `REFRESH_TOKEN` rows for that user in `prisma.$transaction`, log via `AuditService.log`, and trigger `emailService.sendAccountDeactivated`.
   - `user.controller.ts` & `user.routes.ts` + `index.ts`:
     - Mount behind `authenticate`.
     - `GET /` & `GET /:id`: `authorize([UserRole.ADMIN, UserRole.MANAGER])`.
     - `PATCH /:id/role` & `PATCH /:id/status`: `authorize([UserRole.ADMIN])` (prevent privilege escalation by `MANAGER`).
2. **`src/app.ts`**:
   - Mount `app.use(`${API_PREFIX}/users`, userRoutes)`.

---

## 2. Consolidate Email Services & Wire Order/Account Emails

### Problem
Two email implementations exist:
- `src/modules/shared/service/email/index.ts` (uses the pluggable `EmailProvider` factory, used by `AuthService`).
- `src/modules/shared/service/email/email.ts` (hardcoded Nodemailer singleton, unused anywhere, containing `sendOrderConfirmation` and `sendAccountDeactivated`).

### Steps
1. **`src/modules/shared/service/email/index.ts`**:
   - Add `sendOrderConfirmation(to, name, trackingNumber, destination)` and `sendOrderStatusUpdate(to, name, trackingNumber, status)` using `this.provider.send(...)`.
   - Add `sendAccountDeactivated(to, name)` using `this.provider.send(...)`.
   - Escape user-supplied strings (`name`, `destination`, etc.) before interpolating into HTML email templates to prevent HTML injection in emails.
2. **Remove `src/modules/shared/service/email/email.ts`** once its methods are migrated.
3. **Trigger notifications**:
   - In `OrderService.create`: fetch user email/name and send `sendOrderConfirmation` (non-blocking `.catch(logger.error)`).
   - In `OrderService.updateStatus`: notify order owner on key transitions (`SHIPPED`, `DELIVERED`, `CANCELLED`).

---

## 3. Scope `activityLogger` Middleware to State Changes

### Problem
`src/middlewares/activityLogger.ts` is mounted globally (`app.use(activityLogger)`) and writes an `ActivityLog` row for every authenticated `GET` request too, despite its comment (`"Audit trail for database mutations"`), which will rapidly bloat `activity_logs`.

### Steps
1. **`src/middlewares/activityLogger.ts`**:
   - Skip read-only methods (`if (!["POST", "PUT", "PATCH", "DELETE"].includes(req.method)) return next();`).
   - Use `req.originalUrl` (stripped of query string) consistently when deriving `entity` and `action` so sub-router paths aren't misparsed.
   - Replace `console.error` calls in `AuthService` email `.catch(console.error)` with `logger.error`.

---

## Verification Checklist
- [ ] `ADMIN` can list users, change roles, and deactivate accounts via `/api/v1/users`; `CUSTOMER` and `MANAGER` cannot promote/demote roles.
- [ ] Deactivating a user revokes all their refresh tokens and sends the deactivation email via the configured `EMAIL_PROVIDER` (`smtp` or `sendgrid`).
- [ ] Creating an order triggers an order confirmation email without blocking the HTTP response.
- [ ] Authenticated `GET` requests no longer insert duplicate rows into `activity_logs`, while `POST`/`PATCH`/`PUT`/`DELETE` mutations are logged cleanly.
