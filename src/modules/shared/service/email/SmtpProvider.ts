import nodemailer, { Transporter } from "nodemailer";
import { EmailProvider, EmailOptions } from "./EmailProvider";
import { env } from "../../../../config/env";

/**
 * Nodemailer / SMTP implementation of the EmailProvider.
 */
export class SmtpProvider implements EmailProvider {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: env.SMTP_PORT,
      secure: env.SMTP_SECURE,
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASS,
      },
    });
  }

  async send(options: EmailOptions): Promise<void> {
    await this.transporter.sendMail({
      from: `"${env.EMAIL_FROM_NAME}" <${env.EMAIL_FROM_ADDRESS}>`,
      ...options,
    });
  }
}
