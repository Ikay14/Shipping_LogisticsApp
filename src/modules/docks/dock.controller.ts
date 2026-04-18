import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { DockService } from "./dock.service";
import type { CreateDockInput, UpdateDockInput } from "./dock.schema";

export const DockController = {
  async getAll(req: Request, res: Response): Promise<void> {
    const result = await DockService.getAll(req.query);
    res.status(StatusCodes.OK).json({ success: true, ...result });
  },

  async getById(req: Request, res: Response): Promise<void> {
    const dock = await DockService.getById(req.params.id);
    res.status(StatusCodes.OK).json({ success: true, data: dock });
  },

  async create(req: Request, res: Response): Promise<void> {
    const dock = await DockService.create(
      req.body as CreateDockInput,
      req.user?.id,
    );
    res.status(StatusCodes.CREATED).json({ success: true, data: dock });
  },

  async update(req: Request, res: Response): Promise<void> {
    const dock = await DockService.update(
      req.params.id,
      req.body as UpdateDockInput,
      req.user?.id,
    );
    res.status(StatusCodes.OK).json({ success: true, data: dock });
  },

  async delete(req: Request, res: Response): Promise<void> {
    await DockService.delete(req.params.id, req.user?.id);
    res
      .status(StatusCodes.OK)
      .json({ success: true, message: "Shipping dock deleted successfully" });
  },
};
