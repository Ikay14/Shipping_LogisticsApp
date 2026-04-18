import multer from "multer";
import { bucket } from "../config/firebase";
import { BadRequestError } from "../errors/BadRequestError";
import crypto from "crypto";
import path from "path";
import sharp from "sharp";

/**
 * Custom service for uploading files to Firebase Cloud Storage.
 * Standardizes file naming, metadata, and accessibility.
 */
export const StorageService = {
  /**
   * Uploads a file buffer to Firebase.
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
    let fileExtension = path.extname(file.originalname);
    let mimeType = file.mimetype;

    // High-performance image conversion if requested
    if (
      convertToWebP &&
      mimeType.startsWith("image/") &&
      mimeType !== "image/webp"
    ) {
      uploadBuffer = await sharp(file.buffer).webp({ quality: 80 }).toBuffer();
      fileExtension = ".webp";
      mimeType = "image/webp";
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
      const pathPart = fileUrl.split("/o/")[1]?.split("?")[0];
      if (pathPart) {
        const decodedPath = decodeURIComponent(pathPart);
        await bucket.file(decodedPath).delete();
      }
    } catch (error) {
      console.warn("Failed to delete file from Firebase:", error);
    }
  },
};

/**
 * Multer configuration for memory storage.
 * Evaluates inline request flags to process both Images and Secure Documents seamlessly.
 */
export const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // Expanded to 10MB to handle large PDFs
  },
  fileFilter: (req, file, cb) => {
    // Flags can be passed via Query String ?docs=true
    const allowDocs = req.query?.docs === "true" || req.body?.docs === "true";

    const isImage = file.mimetype.startsWith("image/");
    const isDoc =
      file.mimetype === "application/pdf" ||
      file.mimetype === "application/msword" ||
      file.mimetype ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      file.mimetype === "text/csv";

    if (isImage) {
      return cb(null, true);
    }

    if (allowDocs && isDoc) {
      return cb(null, true);
    }

    cb(
      new BadRequestError(
        "Invalid file type. " +
          (allowDocs
            ? "Only images and documents allowed."
            : "Only images are allowed."),
      ),
    );
  },
});
