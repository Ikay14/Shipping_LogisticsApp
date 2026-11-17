import { prisma } from "../../db/prisma";
import { NotFoundError } from "../../errors/NotFoundError";
import { BadRequestError } from "../../errors/BadRequestError";
import { AuditService } from "../shared/service/AuditService";
import { PasswordUtils } from "../../utils/password";
import { emailService } from "../shared/service/email/index";
import type { UpdateProfileInput, UserEntity } from "./auth.schema";
import { StorageService } from "../../utils/upload";

export const ProfileService = {
  /**
   * Safe user retrieval with senior-grade field exclusion.
   */
  async getProfile(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        isActive: true,
        isEmailVerified: true,
        profileImageUrl: true,
        createdAt: true,
        updatedAt: true,
        ...({
          isTwoFactorEnabled: true,
          lastLoginAt: true,
          currentLoginIp: true,
        } as any),
      },
    });

    if (!user) throw new NotFoundError("User profile not found");
    return user as unknown as UserEntity;
  },

  /**
   * Dynamic profile update with transactional auditing.
   */
  async updateProfile(userId: string, updateData: UpdateProfileInput) {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundError("User not found");

    const data: {
      name?: string;
      phone?: string;
      passwordHash?: string;
    } = {};

    if (updateData.name !== undefined) data.name = updateData.name;
    if (updateData.phone !== undefined) data.phone = updateData.phone;

    let passwordChanged = false;

    // Handle password change if requested
    if (updateData.newPassword) {
      if (!updateData.currentPassword) {
        throw new BadRequestError(
          "Current password is required to set a new password",
        );
      }
      const isMatch = await PasswordUtils.compare(
        updateData.currentPassword,
        user.passwordHash,
      );
      if (!isMatch) throw new BadRequestError("Incorrect current password");

      data.passwordHash = await PasswordUtils.hash(updateData.newPassword);
      passwordChanged = true;
    }

    const userSelect = {
      id: true,
      name: true,
      email: true,
      phone: true,
      role: true,
      isActive: true,
      isEmailVerified: true,
      profileImageUrl: true,
      createdAt: true,
      updatedAt: true,
      ...({
        isTwoFactorEnabled: true,
        lastLoginAt: true,
        currentLoginIp: true,
      } as any),
    };

    const updatedUser = passwordChanged
      ? await prisma.$transaction(async (tx) => {
          const updated = await tx.user.update({
            where: { id: userId },
            data,
            select: userSelect,
          });
          await tx.userToken.deleteMany({
            where: { userId, type: "REFRESH_TOKEN" },
          });
          return updated;
        })
      : await prisma.user.update({
          where: { id: userId },
          data,
          select: userSelect,
        });

    AuditService.log({
      userId,
      action: passwordChanged ? "PASSWORD_RESET_COMPLETED" : "PROFILE_UPDATED",
      entity: "user",
      entityId: userId,
      metadata: { changes: Object.keys(updateData) },
    });

    if (passwordChanged) {
      emailService
        .sendPasswordChangedConfirmation(user.email, user.name)
        .catch(console.error);
    }

    return updatedUser as unknown as UserEntity;
  },

  /**
   * Update profile image/avatar and delete the previous asset from Firebase Storage.
   */
  async updateAvatar(userId: string, file: Express.Multer.File) {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundError("User not found");

    const previousAvatarUrl = user.profileImageUrl;

    // Upload to Firebase and automatically convert to WebP for optimal delivery
    const result = await StorageService.uploadFile(
      file,
      `avatars/${userId}`,
      true,
    );
    const publicUrl = result.url;

    await prisma.user.update({
      where: { id: userId },
      data: { profileImageUrl: publicUrl },
    });

    if (previousAvatarUrl) {
      await StorageService.deleteFile(previousAvatarUrl);
    }

    AuditService.log({
      userId,
      action: "AVATAR_UPDATED",
      entity: "user",
      entityId: userId,
    });

    return publicUrl;
  },
};
