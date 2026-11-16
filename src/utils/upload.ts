import multer from "multer";
import { bucket } from "../config/firebase";
import { BadRequestError } from "../errors/BadRequestError";
import crypto from "crypto";
import sharp from "sharp";

const IMAGE_MIME_EXT: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "image/gif": ".gif",
};

const DOC_MIME_EXT: Record<string, string> = {
  "application/pdf": ".pdf",
  "application/msword": ".doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    ".docx",
  "text/csv": ".csv",
};

const hasMagicBytes = (buffer: Buffer, mimetype: string): boolean => {
  if (buffer.length < 4) return false;
  if (mimetype === "application/pdf") {
    return buffer.subarray(0, 5).toString("ascii") === "%PDF-";
  }
  if (
    mimetype ===
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    // ZIP header PK\x03\x04
    return buffer[0] === 0x50 && buffer[1] === 0x4b && buffer[2] === 0x03 && buffer[3] === 0x04;
  }
  if (mimetype === "application/msword") {
    // OLE2 compound header D0 CF 11 E0
    return buffer[0] === 0xd0 && buffer[1] === 0xcf && buffer[2] === 0x11 && buffer[3] === 0xe0;
  }
  if (mimetype === "text/csv") {
    // Reject binary null bytes in CSV
    return !buffer.includes(0x00);
  }
  return false;
};

/**
 * Custom service for uploading files to Firebase Cloud Storage.
 * Standardizes file naming, metadata, and accessibility.
 */
export const StorageService = {
  /**
   * Uploads a file buffer to Firebase after verifying file contents.
   * @returns The public URL of the uploaded file.
   */
  async uploadFile(
    file: Express.Multer.File,
    folder: string = "general",
    convertToWebP: boolean = false,
  ): Promise<{ url: string; size: number }> {
    if (!bucket) {
      throw new Error("Firebase Storage bucket is not initialized");
    }

    let uploadBuffer = file.buffer;
    let mimeType = file.mimetype;
    let fileExtension = IMAGE_MIME_EXT[mimeType] ?? DOC_MIME_EXT[mimeType];

    if (!fileExtension) {
      throw new BadRequestError("Unsupported file type");
    }

    if (IMAGE_MIME_EXT[mimeType]) {
      // Verify actual image payload using sharp (blocks spoofed MIME/XSS payloads)
      try {
        await sharp(file.buffer).metadata();
      } catch {
        throw new BadRequestError("Invalid or corrupted image file");
      }

      if (convertToWebP && mimeType !== "image/webp") {
        uploadBuffer = await sharp(file.buffer).webp({ quality: 80 }).toBuffer();
        fileExtension = ".webp";
        mimeType = "image/webp";
      }
    } else if (!hasMagicBytes(file.buffer, mimeType)) {
      throw new BadRequestError("File contents do not match declared file type");
    }

    const fileName = `${folder}/${crypto.randomUUID()}${fileExtension}`;
    const blob = bucket.file(fileName);

    const blobStream = blob.createWriteStream({
      metadata: {
        contentType: mimeType,
      },
      resumable: false,
    });

    return new Promise((resolve, reject) => {
      blobStream.on("error", (err) => {
        reject(err);
      });

      blobStream.on("finish", async () => {
        const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket!.name}/o/${encodeURIComponent(fileName)}?alt=media`;
        resolve({ url: publicUrl, size: uploadBuffer.length });
      });

      blobStream.end(uploadBuffer);
    });
  },

  /**
   * Deletes a file from Firebase by its public URL or path.
   */
  async deleteFile(fileUrl: string): Promise<void> {
    if (!bucket) return;
    try {
      const expectedPrefix = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/`;
      if (!fileUrl.startsWith(expectedPrefix)) return;

      const pathPart = fileUrl.slice(expectedPrefix.length).split("?")[0];
      if (pathPart) {
        const decodedPath = decodeURIComponent(pathPart);
        await bucket.file(decodedPath).delete({ ignoreNotFound: true });
      }
    } catch (error) {
      console.warn("Failed to delete file from Firebase:", error);
    }
  },
};

const createUploadMiddleware = (allowDocs: boolean) =>
  multer({
    storage: multer.memoryStorage(),
    limits: {
      fileSize: 10 * 1024 * 1024, // 10MB max
    },
    fileFilter: (_req, file, cb) => {
      const isAllowedImage = Boolean(IMAGE_MIME_EXT[file.mimetype]);
      const isAllowedDoc = Boolean(DOC_MIME_EXT[file.mimetype]);

      if (isAllowedImage || (allowDocs && isAllowedDoc)) {
        return cb(null, true);
      }

      cb(
        new BadRequestError(
          "Invalid file type. " +
            (allowDocs
              ? "Only JPEG, PNG, WebP, GIF, PDF, Word, and CSV files are allowed."
              : "Only JPEG, PNG, WebP, and GIF images are allowed."),
        ),
      );
    },
  });

/** Image-only upload middleware (excludes SVG to prevent stored XSS). */
export const upload = createUploadMiddleware(false);

/** Document + image upload middleware for dedicated document endpoints. */
export const documentUpload = createUploadMiddleware(true);
