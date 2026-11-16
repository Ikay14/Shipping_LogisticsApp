import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { UserService } from "./user.service";
import type { GetUsersQuery } from "./user.schema";

export const UserController = {
  async getAll(req: Request, res: Response): Promise<void> {
    const result = await UserService.getAll(
      req.query as unknown as GetUsersQuery,
    );
    res.status(StatusCodes.OK).json({ success: true, ...result });
  },

  async getById(req: Request, res: Response): Promise<void> {
    const user = await UserService.getById(req.params.id);
    res.status(StatusCodes.OK).json({ success: true, data: user });
  },

  async updateRole(req: Request, res: Response): Promise<void> {
    const user = await UserService.updateRole(
      req.params.id,
      req.body.role,
      req.user!.userId,
    );
    res.status(StatusCodes.OK).json({ success: true, data: user });
  },

  async updateStatus(req: Request, res: Response): Promise<void> {
    const user = await UserService.updateStatus(
      req.params.id,
      req.body.isActive,
      req.user!.userId,
    );
    res.status(StatusCodes.OK).json({ success: true, data: user });
  },
};
