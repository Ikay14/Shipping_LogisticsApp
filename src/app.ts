import "express-async-errors";
import express, { Application, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import hpp from "hpp";
import { env } from "./config/env";
import { errorHandler } from "./middlewares/errorHandler";
import { notFound } from "./middlewares/notFound";
import { sanitize } from "./middlewares/sanitize";
import { apiLimiter } from "./middlewares/rateLimiter";
import { activityLogger } from "./middlewares/activityLogger";
import { prisma } from "./db/prisma";
import { logStream, logger } from "./utils/logger";
import { StatusCodes } from "http-status-codes";

import { authRoutes } from "./modules/auth";
import { orderRoutes } from "./modules/orders";
import { dockRoutes } from "./modules/docks";
import { transactionRoutes } from "./modules/transactions";
import { activityLogRoutes } from "./modules/activity-logs";
import { uploadRoutes } from "./modules/shared/index";

const app: Application = express();

if (env.TRUST_PROXY) {
  app.set("trust proxy", 1);
}

app.use(helmet()); // Set security HTTP headers
app.use(cors()); // Enable CORS
app.use(
  morgan(env.NODE_ENV === "development" ? "dev" : "combined", {
    stream: logStream,
  }),
); // Professional logging

app.use(express.json({ limit: "10kb" })); // Body parser, with limit to prevent DOS
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use(hpp()); // Prevent HTTP Parameter Pollution
app.use(sanitize); // Data sanitization against XSS
app.use(apiLimiter); // Rate limiting

app.use(activityLogger); // Audit trail for database mutations

const API_PREFIX = "/api/v1";

/**
 * Proactive Health Check.
 * Verifies system uptime and Database connectivity.
 */
app.get("/health", async (_req: Request, res: Response) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
    db: "CONNECTED",
  };
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.status(StatusCodes.OK).send(healthcheck);
  } catch (error) {
    healthcheck.message = (error as Error).message;
    healthcheck.db = "DISCONNECTED";
    logger.error("Health Check Failed:", error);
    res.status(StatusCodes.SERVICE_UNAVAILABLE).send(healthcheck);
  }
});

app.use(`${API_PREFIX}/auth`, authRoutes);
app.use(`${API_PREFIX}/orders`, orderRoutes);
app.use(`${API_PREFIX}/docks`, dockRoutes);
app.use(`${API_PREFIX}/transactions`, transactionRoutes);
app.use(`${API_PREFIX}/activity-logs`, activityLogRoutes);
app.use(`${API_PREFIX}/uploads`, uploadRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
