import winston from "winston";
import { env } from "../config/env";

/**
 * Custom log formats for better readability in dev and structured JSON in prod.
 */
const formats = [
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.errors({ stack: true }),
];

const developmentFormat = winston.format.combine(
  ...formats,
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info: any) => `${info.timestamp} ${info.level}: ${info.message}`,
  ),
);

const productionFormat = winston.format.combine(
  ...formats,
  winston.format.json(),
);

/**
 * Winston Logger instance.
 * Transports:
 * - Console: All levels
 * - File (error.log): Errors only (for persistent records)
 */
export const logger = winston.createLogger({
  level: env.NODE_ENV === "development" ? "debug" : "info",
  levels: winston.config.npm.levels,
  format: env.NODE_ENV === "development" ? developmentFormat : productionFormat,
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    }),
    new winston.transports.File({
      filename: "logs/combined.log",
      maxsize: 10485760, // 10MB
      maxFiles: 10,
    }),
  ],
  exitOnError: false,
});

/**
 * Stream for Morgan integration.
 */
export const logStream = {
  write: (message: string) => {
    logger.info(message.trim());
  },
};
