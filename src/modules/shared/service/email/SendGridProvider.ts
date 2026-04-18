import sgMail from "@sendgrid/mail";
import { EmailProvider, EmailOptions } from "./EmailProvider";
import { env } from "../../../../config/env";

/**
 * SendGrid implementation of the EmailProvider.
 */
export class SendGridProvider implements EmailProvider {
  constructor() {
    if (env.SENDGRID_API_KEY) {
      sgMail.setApiKey(env.SENDGRID_API_KEY);
    }
  }

  async send(options: EmailOptions): Promise<void> {
    await sgMail.send({
      to: options.to,
      from: {
        name: env.EMAIL_FROM_NAME,
        email: env.EMAIL_FROM_ADDRESS,
      },
      subject: options.subject,
      html: options.html,
      text: options.text,
    });
  }
}
