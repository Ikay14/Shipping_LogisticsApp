import { env } from "./config/env";
import { prisma } from "./db/prisma";
import app from "./app";
import { logger } from "./utils/logger";

/**
 * Entry point for the Shipping Logistics API.
 *
 * Senior approach: Centralized logging, verified DB connectivity
 * before startup, and robust graceful shutdown.
 */
const start = async (): Promise<void> => {
  try {
    // Verify database connection before accepting traffic
    await prisma.$connect();
    logger.info("✅ Database connected successfully");

    const server = app.listen(env.PORT, () => {
      logger.info(`🚀 Server running on http://localhost:${env.PORT}`);
      logger.info(`📦 Environment: ${env.NODE_ENV}`);
    });

    /**
     * Graceful shutdown sequence.
     * Ensures all connections are drained and DB is disconnected
     * before process termination.
     */
    const shutdown = async (signal: string): Promise<void> => {
      logger.warn(`\n${signal} received. Shutting down gracefully...`);

      // Force exit after 10 seconds if graceful shutdown hangs
      const timeout = setTimeout(() => {
        logger.error("Graceful shutdown timed out. Forcing exit.");
        process.exit(1);
      }, 10000);

      server.close(async () => {
        clearTimeout(timeout);
        try {
          await prisma.$disconnect();
          logger.info("✅ Database disconnected. Process exiting.");
          process.exit(0);
        } catch (error) {
          logger.error("Error during DB disconnect:", error);
          process.exit(1);
        }
      });
    };

    process.on("SIGTERM", () => shutdown("SIGTERM"));
    process.on("SIGINT", () => shutdown("SIGINT"));
  } catch (error) {
    logger.error("❌ Failed to start server:", error);
    await prisma.$disconnect();
    process.exit(1);
  }
};

start();
