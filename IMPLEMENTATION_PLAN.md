# Implementation Plan: `fix/auth-session-and-2fa-hardening`

## Goal
Close authentication, session management, registration, password-change, and 2FA loopholes across `src/middlewares/authenticate.ts`, `src/utils/jwt.ts`, `src/modules/auth/*`.

---

## 1. Enforce Token Type & Account Status on Every Request / Refresh

### Problem
- `src/middlewares/authenticate.ts` calls `verifyToken(token)` without checking `payload.type === "access"`, allowing refresh tokens to be used directly as access tokens (both use the same `JWT_SECRET` in `src/utils/jwt.ts`).
- Neither `authenticate.ts` nor `AuthService.refreshAccessToken` (`src/modules/auth/auth.service.ts`) checks `user.isActive`, so deactivated accounts continue functioning.

### Steps
1. **`src/utils/jwt.ts` & `src/config/env.ts`**:
   - Support an optional `JWT_REFRESH_SECRET` (falling back or required separately in production) or keep distinct signing/verification helpers `verifyAccessToken` / `verifyRefreshToken` that strictly validate `payload.type === "access"` and `payload.type === "refresh"`.
2. **`src/middlewares/authenticate.ts`**:
   - Use `verifyAccessToken(token)` so `type: "refresh"` tokens are rejected with `UnauthenticatedError`.
   - Query `prisma.user.findUnique({ where: { id: payload.userId }, select: { id: true, role: true, isActive: true } })` (or check a lightweight cache) to reject deactivated users (`!user || !user.isActive`) and ensure `req.user.role` reflects current DB role.
3. **`src/modules/auth/auth.service.ts` (`refreshAccessToken`)**:
   - Check `if (!userToken.user.isActive)` and `if (!userToken.user.isEmailVerified)` before rotating and issuing a new session; delete the token if inactive.
   - Wrap token rotation (`delete` old + `create` new) inside `prisma.$transaction` so a concurrent refresh cannot reuse the same token.

---

## 2. Fix Registration Duplicate-Check Bug & Email Verification Bypass

### Problem
In `src/modules/auth/auth.service.ts`:
- Lines 81–85: `OR: [{ email: data.email }, { phone: data.phone ?? undefined }]` passes `{ phone: undefined }` when `phone` is omitted. Prisma strips `undefined`, producing `{}` inside `OR`, which matches any existing user in the table.
- Lines 142–148: `register()` issues active `accessToken` and `refreshToken` immediately, bypassing `login()`'s `if (!user.isEmailVerified)` check.

### Steps
1. **Build `OR` conditions dynamically**:
   ```ts
   const orConditions: Prisma.UserWhereInput[] = [{ email: data.email }];
   if (data.phone) orConditions.push({ phone: data.phone });
   ```
   Also normalize `email` (`toLowerCase().trim()`) in `auth.schema.ts` / `auth.service.ts`.
2. **Enforce verification policy consistently**:
   - Do **not** call `_issueSession` in `register()`. Return `{ user }` (and a message prompting email verification) so users must verify their email before logging in.
   - Update `AuthResponse` type in `src/modules/shared/entities/user.entity.ts` if tokens become optional on registration.

---

## 3. Harden 2FA Setup & Verification

### Problem
In `src/modules/auth/auth.service.ts`:
- `setup2FA` (lines 321–343) overwrites `twoFactorSecret` and sets `isTwoFactorEnabled: false` even if 2FA is already active, allowing an attacker with a stolen access token to silently disable 2FA.
- `verify2FALogin` (lines 252–290) does not check `AuditService.isAccountLocked(user.id)` or `user.isActive`, and does not delete/expire `mfaToken` after repeated failures.

### Steps
1. **`setup2FA`**:
   - If `user.isTwoFactorEnabled` is already `true`, reject with `BadRequestError` (or require explicit `disable2FA` / re-authentication with current password + current TOTP code first).
2. **Add `POST /auth/2fa/disable`**:
   - Require `currentPassword` and valid 6-digit TOTP `code` before clearing `twoFactorSecret` and setting `isTwoFactorEnabled: false`, then revoke all active `REFRESH_TOKEN`s.
3. **`verify2FALogin`**:
   - Check `AuditService.isAccountLocked(user.id)`, `!user.isActive`, and `!user.isEmailVerified` before verifying the TOTP code.
   - On invalid code, record failure via `AuditService.recordLoginAttempt` (contributing to the 5-attempt lockout) and consider deleting `mfaToken` on lockout so a single `mfaToken` cannot be brute-forced across IPs.

---

## 4. Fix Password Change, Profile Update, Verification & Logout Endpoints

### Steps
1. **`src/modules/auth/profile.service.ts` (`updateProfile`)**:
   - Explicitly construct the Prisma update payload instead of `{ ...updateData }` so `currentPassword` is never passed to `prisma.user.update` when `newPassword` is absent.
   - When `newPassword` is changed, wrap the update and `prisma.userToken.deleteMany({ where: { userId, type: "REFRESH_TOKEN" } })` in `prisma.$transaction`, and emit `"PASSWORD_RESET_COMPLETED"` / password-changed email confirmation.
2. **`src/modules/auth/auth.schema.ts` & `auth.routes.ts`**:
   - Add Zod schemas `verifyEmailSchema` (`token: z.string().min(1)`), `resendVerificationSchema` (`email: z.string().email()`), and `logoutSchema` (`refreshToken: z.string().min(1).optional()` or required) and wire them via `validateRequest` in `auth.routes.ts`.
3. **`src/modules/auth/auth.controller.ts` & `auth.service.ts` (`logout`)**:
   - Pass `req.user!.userId` into `AuthService.logout(refreshToken, req.user!.userId, context)`.
   - Only delete the token if `userToken.userId === userId`.
   - Log action `"LOGOUT"` (currently logs `"LOGIN_FAILURE"` on line 438).
   - Optionally support `POST /auth/logout-all` to revoke all `REFRESH_TOKEN` rows for the user.

---

## Verification Checklist
- [ ] Presenting a refresh token as `Authorization: Bearer <refreshToken>` returns `401 Unauthorized`.
- [ ] Deactivating a user blocks both access-token requests and `/auth/refresh`.
- [ ] Registering two users sequentially without `phone` succeeds (no false duplicate match), and neither receives tokens until `/verify-email` is completed.
- [ ] Calling `/2fa/setup` when 2FA is already enabled fails unless disabled properly with password + TOTP.
- [ ] Changing password via `/change-password` or `/profile` invalidates all existing refresh tokens.
- [ ] `POST /auth/logout` logs `"LOGOUT"` and cannot revoke another user's refresh token.
