import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { StorageService } from "../../../utils/upload";
import { BadRequestError } from "../../../errors/BadRequestError";

export const UploadController = {
  /**
   * Single file upload.
   * Expects 'webp' query parameter to apply dynamic image compression.
   */
  async uploadSingle(req: Request, res: Response): Promise<void> {
    if (!req.file) {
      throw new BadRequestError("File is required");
    }

    const convertToWebP = req.query.webp === "true";
    const result = await StorageService.uploadFile(
      req.file,
      "uploads",
      convertToWebP,
    );

    res.status(StatusCodes.OK).json({
      success: true,
      message: "File uploaded successfully",
      data: result,
    });
  },

  /**
   * Multiple file upload.
   * Leverages Promise.all for fast, concurrent blob streaming to Firebase.
   */
  async uploadMultiple(req: Request, res: Response): Promise<void> {
    const files = req.files as Express.Multer.File[];
    if (!files || files.length === 0) {
      throw new BadRequestError("At least one file is required");
    }

    const convertToWebP = req.query.webp === "true";

    // Concurrent push
    const results = await Promise.all(
      files.map((file) =>
        StorageService.uploadFile(file, "uploads/batch", convertToWebP),
      ),
    );

    res.status(StatusCodes.OK).json({
      success: true,
      message: `${files.length} files uploaded successfully`,
      data: results,
    });
  },
};
