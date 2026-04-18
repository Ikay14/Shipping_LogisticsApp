import { UserRole } from "../../../generated/prisma/client";

export interface UserEntity {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  role: UserRole;
  isActive: boolean;
  isEmailVerified: boolean;
  isTwoFactorEnabled: boolean;
  profileImageUrl: string | null;
  lastLoginAt: Date | null;
  currentLoginIp: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthResponse {
  user?: UserEntity;
  accessToken?: string;
  refreshToken?: string;
  mfaRequired?: boolean;
  mfaToken?: string;
}
