# Implementation Plan: `fix/upload-security-and-avatar-cleanup`

## Goal
Harden file upload validation (eliminate SVG stored-XSS and MIME-spoofing risks, restrict document uploads) and clean up orphaned avatar files in Firebase Cloud Storage.

---

## 1. Restrict Allowed Image Types & Validate File Contents

### Problem
In `src/utils/upload.ts`:
- `file.mimetype.startsWith("image/")` (line 95) permits `image/svg+xml`, which can embed `<script>` tags and execute JS if served directly from Firebase Storage without WebP conversion.
- `fileFilter` trusts the client-supplied `Content-Type` (`file.mimetype`) and `path.extname(file.originalname)` without inspecting file magic bytes.
- `allowDocs = req.query?.docs === "true" || req.body?.docs === "true"` (line 93) lets any authenticated caller bypass image-only restrictions on any `upload` route (including `/auth/avatar`) via `?docs=true`.

### Steps
1. **`src/utils/upload.ts`**:
   - Replace `file.mimetype.startsWith("image/")` with an explicit allowlist of raster image MIME types: `["image/jpeg", "image/png", "image/webp", "image/gif"]` (explicitly excluding `image/svg+xml`).
   - Add a buffer magic-byte / signature check (or verify image buffers with `sharp(file.buffer).metadata()` before uploading, and check `%PDF-` / ZIP/OLE signatures for documents) so spoofed MIME types are rejected.
   - Separate Multer configurations (`imageUpload` vs `documentUpload`) instead of toggling `allowDocs` from user-controlled `req.query.docs` / `req.body.docs`.
   - Derive safe extensions from the validated MIME type rather than `path.extname(file.originalname)`.
2. **`src/modules/auth/auth.routes.ts` & `src/modules/shared/routes/upload.routes.ts`**:
   - Use `imageUpload.single("avatar")` on `POST /api/v1/auth/avatar` so documents can never be uploaded as avatars.
   - Restrict document upload routes on `/api/v1/uploads` (e.g., separate `/uploads/documents` route or enforce `authorize(...)` / explicit route-level options) and validate query flags (`?webp=true`).
   - Audit `UploadController` (`src/modules/shared/controller/upload.controller.ts`) to record an audit log entry (`MEDIA_UPLOADED`) with `req.user!.userId`.

---

## 2. Clean Up Replaced Avatars in Firebase Storage

### Problem
`ProfileService.updateAvatar` (`src/modules/auth/profile.service.ts`, lines 103–128) uploads a new avatar and overwrites `user.profileImageUrl` in PostgreSQL without deleting the previous file, leaking storage objects.

### Steps
1. **`src/modules/auth/profile.service.ts`**:
   - Capture `const previousAvatarUrl = user.profileImageUrl;` before updating the user.
   - After `prisma.user.update` succeeds, if `previousAvatarUrl` exists, call `await StorageService.deleteFile(previousAvatarUrl)` (non-fatal if missing, logged as warning).
   - Remove the stale `"Mock implementation..."` JSDoc comment on `updateAvatar`.
2. **`src/utils/upload.ts` (`StorageService.deleteFile`)**:
   - Ensure `deleteFile` handles `ignoreNotFound: true` on `bucket.file(decodedPath).delete({ ignoreNotFound: true })` and validates the URL belongs to the configured `bucket.name` before attempting deletion.

---

## Verification Checklist
- [ ] Uploading an `.svg` file (with `image/svg+xml`) to `/auth/avatar` or `/uploads/single` is rejected with `400 Bad Request`.
- [ ] Uploading a renamed text/script file with `Content-Type: image/png` fails magic-byte / `sharp` validation.
- [ ] Calling `POST /auth/avatar?docs=true` with a PDF is rejected.
- [ ] Replacing a user's avatar deletes the old Firebase Storage object and stores the new WebP URL.
