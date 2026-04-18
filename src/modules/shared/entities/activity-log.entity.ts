import { Prisma } from "../../../generated/prisma/client";

export interface ActivityLogEntity {
  id: string;
  userId: string | null;
  action: string;
  entity: string | null;
  entityId: string | null;
  ipAddress: string | null;
  userAgent: string | null;
  statusCode: number | null;
  metadata: Prisma.JsonValue | null;
  createdAt: Date;
}
