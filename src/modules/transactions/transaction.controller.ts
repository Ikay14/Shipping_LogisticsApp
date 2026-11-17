import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { UserRole } from "../../generated/prisma/client";
import { TransactionService } from "./transaction.service";
import type {
  CreateTransactionInput,
  UpdateTransactionInput,
  GetTransactionsQuery,
} from "./transaction.schema";

export const TransactionController = {
  async getAll(req: Request, res: Response): Promise<void> {
    const actor = {
      userId: req.user!.userId,
      role: req.user!.role as UserRole,
    };
    const result = await TransactionService.getAll(
      req.query as unknown as GetTransactionsQuery,
      actor,
    );
    res.status(StatusCodes.OK).json({ success: true, ...result });
  },

  async getById(req: Request, res: Response): Promise<void> {
    const actor = {
      userId: req.user!.userId,
      role: req.user!.role as UserRole,
    };
    const transaction = await TransactionService.getById(req.params.id, actor);
    res.status(StatusCodes.OK).json({ success: true, data: transaction });
  },

  async create(req: Request, res: Response): Promise<void> {
    const actorId = req.user?.id;
    const transaction = await TransactionService.create(
      req.body as CreateTransactionInput,
      actorId!,
    );
    res.status(StatusCodes.CREATED).json({ success: true, data: transaction });
  },

  async update(req: Request, res: Response): Promise<void> {
    const actorId = req.user?.id;
    const transaction = await TransactionService.update(
      req.params.id,
      req.body as UpdateTransactionInput,
      actorId!,
    );
    res.status(StatusCodes.OK).json({ success: true, data: transaction });
  },

  async delete(req: Request, res: Response): Promise<void> {
    const actorId = req.user?.id;
    await TransactionService.delete(req.params.id, actorId!);
    res
      .status(StatusCodes.OK)
      .json({ success: true, message: "Transaction deleted successfully" });
  },
};
