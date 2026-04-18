import multer from "multer";
import { bucket } from "../config/firebase";
import { BadRequestError } from "../errors/BadRequestError";
import crypto from "crypto";
import path from "path";

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
  ): Promise<string> {
    if (!bucket) {
      throw new Error("Firebase Storage bucket is not initialized");
    }

    const fileExtension = path.extname(file.originalname);
    const fileName = `${folder}/${crypto.randomUUID()}${fileExtension}`;
    const blob = bucket.file(fileName);

    const blobStream = blob.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
      resumable: false,
    });

    return new Promise((resolve, reject) => {
      blobStream.on("error", (err) => {
        reject(err);
      });

      blobStream.on("finish", async () => {
        // In a real app with Firebase project set to pay-as-you-go,
        // you might use blob.makePublic() here if your bucket isn't public.
        // For simplicity, we construct the Firebase storage URL format.
        const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket!.name}/o/${encodeURIComponent(fileName)}?alt=media`;
        resolve(publicUrl);
      });

      blobStream.end(file.buffer);
    });
  },

  /**
   * Deletes a file from Firebase by its public URL or path.
   */
  async deleteFile(fileUrl: string): Promise<void> {
    if (!bucket) return;
    try {
      // Logic to extract path from URL and delete
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
 * We store files in RAM temporarily then stream to Firebase.
 */
export const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (_req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new BadRequestError("Only images are allowed"));
    }
  },
});
