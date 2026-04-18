import nodemailer, { Transporter } from "nodemailer";
import { env } from "../../../../config/env";

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

// Lazily create the transporter once (reused across calls)
let transporter: Transporter | null = null;

const getTransporter = (): Transporter => {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: env.SMTP_PORT,
      secure: env.SMTP_SECURE,
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASS,
      },
    });
  }
  return transporter;
};

// ─── HTML wrapper for consistent email branding ──────────────────────────────
const wrapHtml = (content: string): string => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 40px auto; background: #ffffff;
                 border-radius: 8px; padding: 32px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .header { border-bottom: 3px solid #2563eb; padding-bottom: 16px; margin-bottom: 24px; }
    .header h1 { color: #2563eb; margin: 0; font-size: 22px; }
    .footer { margin-top: 32px; padding-top: 16px; border-top: 1px solid #e5e7eb;
              font-size: 12px; color: #9ca3af; text-align: center; }
    .btn { display: inline-block; padding: 12px 24px; background: #2563eb; color: #ffffff;
           text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 16px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header"><h1>Shipping Logistics</h1></div>
    ${content}
    <div class="footer">
      &copy; ${new Date().getFullYear()} Shipping Logistics. All rights reserved.<br />
      This is an automated message — please do not reply.
    </div>
  </div>
</body>
</html>`;

// ─── Email Service ────────────────────────────────────────────────────────────
export const EmailService = {
  /**
   * Core send method — all other methods delegate here.
   */
  async send(options: EmailOptions): Promise<void> {
    await getTransporter().sendMail({
      from: `"${env.EMAIL_FROM_NAME}" <${env.EMAIL_FROM_ADDRESS}>`,
      ...options,
      html: wrapHtml(options.html),
    });
  },

  /**
   * Sent after successful registration.
   */
  async sendWelcome(to: string, name: string): Promise<void> {
    await EmailService.send({
      to,
      subject: "Welcome to Shipping Logistics! 🚀",
      html: `
        <h2>Welcome aboard, ${name}!</h2>
        <p>Your account has been successfully created. You can now log in and start managing your shipments.</p>
        <p>If you have any questions, feel free to reach out to our support team.</p>
      `,
    });
  },

  /**
   * Sent when a password reset is requested.
   */
  async sendPasswordReset(
    to: string,
    name: string,
    resetToken: string,
  ): Promise<void> {
    const resetUrl = `${env.APP_URL}/auth/reset-password?token=${resetToken}`;
    await EmailService.send({
      to,
      subject: "Password Reset Request",
      html: `
        <h2>Reset Your Password</h2>
        <p>Hello ${name},</p>
        <p>We received a request to reset your password. Click the button below to set a new one:</p>
        <a href="${resetUrl}" class="btn">Reset Password</a>
        <p style="margin-top:16px;color:#6b7280;font-size:13px;">
          This link expires in <strong>1 hour</strong>. If you did not request a password reset, you can safely ignore this email.
        </p>
      `,
    });
  },

  /**
   * Sent after an order is successfully created.
   */
  async sendOrderConfirmation(
    to: string,
    name: string,
    trackingNumber: string,
    destination: string,
  ): Promise<void> {
    await EmailService.send({
      to,
      subject: `Order Confirmed — Tracking #${trackingNumber}`,
      html: `
        <h2>Order Confirmed! 📦</h2>
        <p>Hello ${name},</p>
        <p>Your shipment has been confirmed and is being processed.</p>
        <table style="width:100%;border-collapse:collapse;margin-top:16px;">
          <tr>
            <td style="padding:8px;font-weight:bold;color:#374151;">Tracking Number</td>
            <td style="padding:8px;">${trackingNumber}</td>
          </tr>
          <tr style="background:#f9fafb;">
            <td style="padding:8px;font-weight:bold;color:#374151;">Destination</td>
            <td style="padding:8px;">${destination}</td>
          </tr>
        </table>
        <p style="margin-top:16px;">You can track your shipment at any time using your tracking number.</p>
      `,
    });
  },

  /**
   * Sent when a user's account is deactivated.
   */
  async sendAccountDeactivated(to: string, name: string): Promise<void> {
    await EmailService.send({
      to,
      subject: "Your Account Has Been Deactivated",
      html: `
        <h2>Account Deactivated</h2>
        <p>Hello ${name},</p>
        <p>Your account has been deactivated. If you believe this was a mistake, please contact support immediately.</p>
      `,
    });
  },
};
