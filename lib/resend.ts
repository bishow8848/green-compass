import { Resend } from "resend";

// Shared Resend client. Resend is a stateless HTTP API, so a single
// module-level instance is safe and fast on serverless — there is no
// persistent socket to manage (unlike SMTP/nodemailer).
let client: Resend | null = null;

export function getResend(): Resend {
  if (!client) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error(
        "RESEND_API_KEY is not configured. Add it to your environment variables."
      );
    }
    client = new Resend(apiKey);
  }
  return client;
}

/**
 * The "From" address used for all outbound email.
 *
 * Set RESEND_FROM in your environment once your domain is verified in Resend,
 * e.g. "Green Compass Treks <noreply@greencompasstreks.com>". Until a domain is verified,
 * Resend only allows its test sender (onboarding@resend.dev) and only to the
 * account owner's email address.
 */
export const EMAIL_FROM =
  process.env.RESEND_FROM || "Green Compass Treks <onboarding@resend.dev>";

/**
 * Sender for INTERNAL notifications (contact form, booking alerts, fix-departure).
 *
 * Deliberately a DIFFERENT address from the inbox that receives them. When a
 * message's From and To are the same mailbox but it arrives from an external
 * relay (Resend/SES rather than the domain's own MX), receiving providers
 * routinely treat it as spoofed self-mail and junk or drop it silently — which
 * is why customer-facing mail from this domain was delivering fine while the
 * copies addressed to the team's own inbox never showed up.
 *
 * Set RESEND_NOTIFICATIONS_FROM to any address on the domain verified in Resend.
 */
export const EMAIL_NOTIFICATIONS_FROM =
  process.env.RESEND_NOTIFICATIONS_FROM || EMAIL_FROM;

type SendEmailArgs = {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
  replyTo?: string;
  headers?: Record<string, string>;
};

/**
 * Low-level send helper used by every email module. Throws on failure so
 * callers can log/retry. Returns the Resend message id when available.
 */
export async function sendEmail({
  to,
  subject,
  html,
  from = EMAIL_FROM,
  replyTo,
  headers,
}: SendEmailArgs): Promise<{ id: string | null }> {
  const { data, error } = await getResend().emails.send({
    from,
    to: Array.isArray(to) ? to : [to],
    subject,
    html,
    ...(replyTo ? { replyTo } : {}),
    ...(headers ? { headers } : {}),
  });

  if (error) {
    throw new Error(`Resend failed to send email: ${error.message}`);
  }

  return { id: data?.id ?? null };
}
