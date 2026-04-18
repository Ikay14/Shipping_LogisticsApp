import "dotenv/config";
import { defineConfig } from "prisma/config";

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, DATABASE_URL: ENV_URL } = process.env;

// Construct DATABASE_URL if not provided, respecting user preference for separate variables
let databaseUrl = ENV_URL;
if (!databaseUrl && DB_HOST) {
  const userPass = DB_USER ? `${DB_USER}${DB_PASSWORD ? `:${DB_PASSWORD}` : ""}@` : "";
  databaseUrl = `postgresql://${userPass}${DB_HOST}:${DB_PORT || 5432}/${DB_NAME}?schema=public`;
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: databaseUrl,
  },
});
