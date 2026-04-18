import { DockStatus } from "../../../generated/prisma/client";

export interface DockEntity {
  id: string;
  name: string;
  code: string;
  status: DockStatus;
  location: string;
  address: string | null;
  capacity: number;
  description: string | null;
  managerId: string | null;
  createdAt: Date;
  updatedAt: Date;
}
