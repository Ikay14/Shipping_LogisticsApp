export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

/**
 * Abstract interface for all email providers.
 * Allows switching between SMTP, SendGrid, Mailchimp, etc.
 */
export interface EmailProvider {
  send(options: EmailOptions): Promise<void>;
}
