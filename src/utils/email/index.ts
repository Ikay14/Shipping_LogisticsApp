import { EmailProvider } from "./EmailProvider";
import { SmtpProvider } from "./SmtpProvider";
import { SendGridProvider } from "./SendGridProvider";
import { env } from "../../config/env";

/**
 * High-level EmailService that acts as a factory.
 * Decouples the application from specific email provider implementations.
 */
class EmailService {
  private provider: EmailProvider;

  constructor() {
    // Select provider based on environment setting
    if (env.EMAIL_PROVIDER === "sendgrid") {
      this.provider = new SendGridProvider();
    } else {
      this.provider = new SmtpProvider();
    }
  }

  private wrapHtml(content: string): string {
    return `
      <!DOCTYPE html>
      <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #2563eb;">Shipping Logistics</h2>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          ${content}
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p style="font-size: 0.8em; color: #777;">
            &copy; ${new Date().getFullYear()} Shipping Logistics. All rights reserved.
          </p>
        </div>
      </body>
      </html>
    `;
  }

  async sendWelcome(to: string, name: string): Promise<void> {
    const html = this.wrapHtml(`
      <p>Hello ${name},</p>
      <p>Welcome to <strong>Shipping Logistics</strong>! We're excited to have you on board.</p>
      <p>You can now start managing your shipments and tracking your orders with ease.</p>
    `);

    await this.provider.send({
      to,
      subject: "Welcome to Shipping Logistics!",
      html,
    });
  }

  async sendPasswordReset(
    to: string,
    name: string,
    token: string,
  ): Promise<void> {
    const resetUrl = `${env.APP_URL}/reset-password?token=${token}`;
    const html = this.wrapHtml(`
      <p>Hello ${name},</p>
      <p>You requested a password reset. Please click the link below to set a new password:</p>
      <p><a href="${resetUrl}" style="color: #2563eb; font-weight: bold;">Reset Password</a></p>
      <p>If you didn't request this, you can safely ignore this email.</p>
    `);

    await this.provider.send({
      to,
      subject: "Password Reset Request",
      html,
    });
  }

  async sendEmailVerification(
    to: string,
    name: string,
    token: string,
  ): Promise<void> {
    const verifyUrl = `${env.APP_URL}/verify-email?token=${token}`;
    const html = this.wrapHtml(`
      <p>Hello ${name},</p>
      <p>Thank you for signing up! Please verify your email address by clicking the button below:</p>
      <p><a href="${verifyUrl}" style="background-color: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">Verify Email</a></p>
      <p>This link will expire in 24 hours.</p>
    `);

    await this.provider.send({
      to,
      subject: "Verify Your Email Address",
      html,
    });
  }

  async sendPasswordChangedConfirmation(
    to: string,
    name: string,
  ): Promise<void> {
    const html = this.wrapHtml(`
      <p>Hello ${name},</p>
      <p>This is a confirmation that the password for your account has been successfully changed.</p>
      <p>If you did not perform this action, please contact our security team immediately.</p>
    `);

    await this.provider.send({
      to,
      subject: "Your Password Has Been Changed",
      html,
    });
  }

  async sendAccountLockedAlert(to: string, name: string): Promise<void> {
    const html = this.wrapHtml(`
      <p>Hello ${name},</p>
      <p>We've detected multiple failed login attempts on your account. For your security, the account has been temporarily locked.</p>
      <p>Please wait 15 minutes before trying again, or request a password reset if you've forgotten your credentials.</p>
    `);

    await this.provider.send({
      to,
      subject: "Security Alert: Your Account is Temporarily Locked",
      html,
    });
  }
}

export const emailService = new EmailService();
