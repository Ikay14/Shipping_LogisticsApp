import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ActivityLogService } from "./activity-log.service";

export const ActivityLogController = {
  async getAll(req: Request, res: Response): Promise<void> {
    const result = await ActivityLogService.getAll(req.query);
    res.status(StatusCodes.OK).json({ success: true, ...result });
  },

  async getMyLogs(req: Request, res: Response): Promise<void> {
    const result = await ActivityLogService.getByUser(
      req.user!.userId,
      req.query,
    );
    res.status(StatusCodes.OK).json({ success: true, ...result });
  },
};
