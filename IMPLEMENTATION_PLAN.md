# Implementation Plan: `fix/zod-v4-and-typescript-fixes`

## Goal
Resolve Zod v4 API mismatches, eliminate unsafe `as any` casts against Prisma types, and fix environment/database pool startup and shutdown edge cases so `npm run build` (`tsc`) passes cleanly with `strict: true`.

---

## 1. Fix Zod v4 Validation Middleware & Schemas

### Problem
`package.json` depends on `"zod": "^4.3.6"`, while parts of the codebase still use Zod v3 APIs:
- `src/middlewares/validateRequest.ts` imports `AnyZodObject` and reads `error.errors` (in Zod v4, `ZodError` exposes `error.issues`, and `AnyZodObject` was removed/changed).
- `src/modules/auth/auth.schema.ts` and `src/modules/orders/order.schema.ts` pass `{ required_error: "..." }` (Zod v3), whereas `src/modules/docks/dock.schema.ts` and `src/modules/transactions/transaction.schema.ts` use `{ error: "..." }` (Zod v4).

### Steps
1. **`src/middlewares/validateRequest.ts`**:
   - Replace `AnyZodObject` with `z.ZodObject<any>` (or `z.ZodType` with `parseAsync`).
   - Update `error.errors.map(...)` to `error.issues.map(...)`.
   - Ensure `result` typing handles `body`, `query`, and `params` safely without `any` errors.
2. **`src/modules/auth/auth.schema.ts` & `src/modules/orders/order.schema.ts`**:
   - Standardize error options to Zod v4 syntax (`{ error: "..." }` instead of `{ required_error: "..." }`).
   - Verify `z.nativeEnum(...)` vs `z.enum(...)` compatibility in Zod v4 across `order.schema.ts`, `dock.schema.ts`, and `transaction.schema.ts`.

---

## 2. Remove Stale `as any` Casts

### Problem
Multiple services wrap Prisma queries and fields in `as any` casts left over from an older generated Prisma client, hiding real type errors.

### Steps
1. Run `npm run db:generate` (`prisma generate`) to ensure `src/generated/prisma` is current.
2. Audit and remove `as any` workarounds in:
   - `src/modules/auth/auth.service.ts` (`prisma.user as any`, `(user as any).isTwoFactorEnabled`, `(user as any).twoFactorSecret`, `data as any`)
   - `src/modules/auth/profile.service.ts` (`...({ isTwoFactorEnabled: true, ... } as any)`)
   - `src/modules/orders/order.service.ts` (`where as any`, `originDock`/`destinationDock` `as any`, `tx as any`, `history` `as any`, `data as any`)
   - `src/modules/docks/dock.service.ts` (`_count as any`, `data: input as any`)
   - `src/modules/shared/service/AuditService.ts` (`prisma as any`)
   - `src/middlewares/activityLogger.ts` (`prisma as any`, `metadata as any`)
3. Also check `src/utils/jwt.ts` (`expiresIn` cast) and `src/utils/device.ts` (`@ts-ignore` on `new UAParser(userAgent)`).

---

## 3. Environment & Database Pool Hardening

### Steps
1. **`src/config/env.ts`**:
   - Line 72: `SMTP_PORT: z.string().transform(Number).optional()` turns an empty string `SMTP_PORT=""` into `0`. Preprocess empty strings to `undefined` and validate a valid port integer (`1`–`65535`).
   - Validate `PORT` as a positive port integer as well.
   - Replace `( _env.data as any )[secret]` with typed indexing.
2. **`src/db/prisma.ts` & `src/server.ts`**:
   - Pass `ssl` configuration to `new Pool({ connectionString: env.DATABASE_URL, ssl: env.DB_SSL ? { rejectUnauthorized: false } : undefined })` (or configurable CA) so `DB_SSL=true` actually takes effect.
   - Export `pool` from `src/db/prisma.ts` and call `await pool.end()` alongside `await prisma.$disconnect()` inside `shutdown()` in `src/server.ts`.

---

## Verification Checklist
- [ ] Run `npm install` and `npm run db:generate`.
- [ ] Run `npm run build` (`tsc`) and confirm zero errors or warnings (`noUnusedLocals`, `noUnusedParameters`, `strict: true`).
- [ ] Boot server with `.env` having empty `SMTP_PORT=` and verify `env.SMTP_PORT` is `undefined` rather than `0`.
- [ ] Trigger `SIGINT`/`SIGTERM` and verify both Prisma and `pg` Pool close cleanly.
