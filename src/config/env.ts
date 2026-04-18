import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

/**
 * Construct DATABASE_URL programmatically if not provided.
 * This supports the user's preference for separate DB variables while
 * satisfying Prisma's requirement for a single connection string.
 */
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, DATABASE_URL } = process.env;
if (!DATABASE_URL && DB_HOST) {
  const userPass = DB_USER ? `${DB_USER}${DB_PASSWORD ? `:${DB_PASSWORD}` : ""}@` : "";
  process.env.DATABASE_URL = `postgresql://${userPass}${DB_HOST}:${DB_PORT || 5432}/${DB_NAME}?schema=public`;
}

/**
 * Handle Firebase naming inconsistencies.
 */
const firebaseEmail = process.env.FIREBASE_CLIENT_EMAIL || process.env.FIREBASE_EMAIL || process.env.FIREBASE_EMAIL_CLIENT;
if (firebaseEmail) {
  process.env.FIREBASE_CLIENT_EMAIL = firebaseEmail;
}

/**
 * Handle Email/SMTP naming inconsistencies.
 */
if (!process.env.SMTP_HOST && process.env.MAIL_HOST) {
  process.env.SMTP_HOST = process.env.MAIL_HOST;
}
if (!process.env.SMTP_PORT && process.env.MAIL_PORT) {
  process.env.SMTP_PORT = process.env.MAIL_PORT;
}
if (!process.env.SMTP_USER && process.env.MAIL_USERNAME) {
  process.env.SMTP_USER = process.env.MAIL_USERNAME;
}
if (!process.env.SMTP_PASS && process.env.MAIL_PASSWORD) {
  process.env.SMTP_PASS = process.env.MAIL_PASSWORD;
}
if (!process.env.SMTP_SECURE && process.env.MAIL_SECURE) {
  process.env.SMTP_SECURE = process.env.MAIL_SECURE;
}

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  PORT: z.string().default("3000"),
  APP_URL: z.string().url().default("http://localhost:3000"),

  DB_TYPE: z.string().default("postgres"),
  DB_HOST: z.string().default("localhost"),
  DB_PORT: z.string().default("5432"),
  DB_NAME: z.string().default("shipping_logistics"),
  DB_USER: z.string().optional(),
  DB_PASSWORD: z.string().optional(),
  DB_SSL: z.preprocess((v) => v === "true", z.boolean()).default(false),
  DATABASE_URL: z.string().url("Invalid DATABASE_URL format"),

  JWT_SECRET: z.string().min(32, "JWT_SECRET must be at least 32 characters"),
  JWT_ACCESS_EXPIRES: z.string().default("15m"),
  JWT_REFRESH_EXPIRES: z.string().default("7d"),

  EMAIL_PROVIDER: z.enum(["smtp", "sendgrid"]).default("smtp"),
  EMAIL_FROM_NAME: z.string().default("Shipping Logistics"),
  EMAIL_FROM_ADDRESS: z
    .string()
    .email()
    .default("no-reply@shippinglogistics.com"),

  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.string().transform(Number).optional(),
  SMTP_USER: z.string().optional(),
  SMTP_PASS: z.string().optional(),
  SMTP_SECURE: z.preprocess((v) => v === "true", z.boolean()).default(false),

  SENDGRID_API_KEY: z.string().optional(),

  FIREBASE_PROJECT_ID: z.string().optional(),
  FIREBASE_CLIENT_EMAIL: z.string().optional(),
  FIREBASE_PRIVATE_KEY: z.string().optional(),
  FIREBASE_STORAGE_BUCKET: z.string().optional(),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  // Only log field names, not values, to prevent accidental exposure in logs
  const missingFields = _env.error.issues.map((issue) => issue.path.join("."));
  console.error("❌ Missing or invalid environment variables:", missingFields);
  process.exit(1);
}

// Ensure critical secrets are present in production
if (_env.data.NODE_ENV === "production") {
  const secrets = [
    "JWT_SECRET",
    "DATABASE_URL",
    _env.data.EMAIL_PROVIDER === "sendgrid" ? "SENDGRID_API_KEY" : "SMTP_PASS",
  ];

  secrets.forEach((secret) => {
    if (!(_env.data as any)[secret]) {
      console.error(`❌ Critical secret ${secret} is missing in production!`);
      process.exit(1);
    }
  });
}

export const env = _env.data;
export type Env = typeof env;
