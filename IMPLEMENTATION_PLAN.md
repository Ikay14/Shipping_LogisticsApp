# Implementation Plan: `chore/tests-and-swagger-docs`

## Goal
Establish an automated unit & integration test suite and mount Swagger / OpenAPI documentation using the already-installed `swagger-ui-express` and `yamljs` packages.

---

## 1. Automated Testing Infrastructure

### Problem
`package.json` has no `test` script and there are zero unit or integration tests anywhere in the repository.

### Steps
1. **Install test devDependencies**:
   - Add `vitest` (or `jest` + `ts-jest` + `@types/jest`) and `supertest` + `@types/supertest`.
   - Add `"test"`, `"test:watch"`, and `"test:coverage"` scripts to `package.json`.
   - Ensure `tsconfig.json` excludes or cleanly handles test files (or add `tsconfig.test.json`).
2. **Test Setup (`tests/setup.ts`)**:
   - Provide mock/stubbed `env` defaults for `NODE_ENV=test` (`JWT_SECRET`, `DATABASE_URL`).
   - Mock external side effects (`emailService`, Firebase `bucket`) for fast deterministic unit/API tests, plus optional integration tests against a dedicated test PostgreSQL database.
3. **Priority Test Suites**:
   - `tests/unit/password.test.ts`: `PasswordUtils.validate`, `isCommon`, `hash`/`compare`.
   - `tests/unit/pagination.test.ts`: `getPaginationOptions` clamping (`page < 1`, `limit > maxLimit`) and `formatPaginatedResult`.
   - `tests/unit/sanitize.test.ts`: XSS stripping on nested objects/arrays in `req.body`, `req.query`, `req.params`.
   - `tests/integration/auth.test.ts`: Register, email verification, login, lockout after 5 failures, refresh token rotation & reuse rejection, 2FA setup/verify, logout.
   - `tests/integration/rbac-idor.test.ts`: Verify `CUSTOMER` vs `STAFF` vs `MANAGER` vs `ADMIN` permissions across `/orders`, `/docks`, `/transactions`, and `/activity-logs`.
   - `tests/integration/orders-transactions.test.ts`: Order lifecycle transitions, dock validation, transaction completion updating order status.

---

## 2. Mount Swagger / OpenAPI Documentation

### Problem
`swagger-ui-express`, `@types/swagger-ui-express`, `yamljs`, and `@types/yamljs` are already listed in `package.json`, and `ShippingLogistics.postman_collection.json` exists, but no OpenAPI spec or `/api-docs` route is mounted in `src/app.ts`.

### Steps
1. **Create `docs/openapi.yaml` (or `src/docs/openapi.yaml`)**:
   - Document `/health` and all `/api/v1/*` modules (`auth`, `orders`, `docks`, `transactions`, `activity-logs`, `uploads`) with request/response schemas, `bearerAuth` JWT security scheme, and error responses (`400`, `401`, `403`, `404`, `429`).
2. **Mount in `src/app.ts`**:
   - Load spec with `yamljs.load(...)` and serve via `swaggerUi.serve` / `swaggerUi.setup(swaggerSpec)` at `/api-docs` (optionally gated or disabled in `production` if desired).
   - Ensure `helmet` CSP headers allow Swagger UI assets on `/api-docs` (or configure CSP exception for `/api-docs`).

---

## Verification Checklist
- [ ] `npm test` runs all unit & integration tests and passes cleanly.
- [ ] `GET /api-docs` renders interactive Swagger UI with accurate schemas and Bearer auth support.
- [ ] `npm run build` (`tsc`) continues to pass with `tests/` excluded from `dist/` or compiling cleanly.
