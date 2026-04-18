import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { OrderService } from "./order.service";
import type { CreateOrderInput, GetOrdersQuery } from "./order.schema";

export class OrderController {
  static async getAll(req: Request, res: Response) {
    const query = req.query as unknown as GetOrdersQuery;
    const result = await OrderService.getAll(query);
    return res.status(StatusCodes.OK).json({ success: true, ...result });
  }

  static async getById(req: Request, res: Response) {
    const { id } = req.params;
    const order = await OrderService.getById(id);
    return res.status(StatusCodes.OK).json({ success: true, data: order });
  }

  static async getByTrackingNumber(req: Request, res: Response) {
    const { trackingNumber } = req.params;
    const order = await OrderService.getByTrackingNumber(trackingNumber);
    return res.status(StatusCodes.OK).json({ success: true, data: order });
  }

  static async create(req: Request, res: Response) {
    const input = req.body as CreateOrderInput;
    // req.user is populated by authenticate middleware
    const actorId = (req as any).user.id;
    const userId = req.body.userId || actorId;

    const order = await OrderService.create(input, userId, actorId);
    return res.status(StatusCodes.CREATED).json({ success: true, data: order });
  }

  static async updateStatus(req: Request, res: Response) {
    const { id } = req.params;
    const { status, notes } = req.body;
    const actorId = (req as any).user.id;

    const order = await OrderService.updateStatus(id, status, actorId, notes);
    return res.status(StatusCodes.OK).json({ success: true, data: order });
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const input = req.body;
    const actorId = (req as any).user.id;

    const order = await OrderService.update(id, input, actorId);
    return res.status(StatusCodes.OK).json({ success: true, data: order });
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    const actorId = (req as any).user.id;

    await OrderService.delete(id, actorId);
    return res
      .status(StatusCodes.OK)
      .json({ success: true, message: "Order deleted" });
  }
}
