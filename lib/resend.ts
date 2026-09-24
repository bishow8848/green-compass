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

/**
 * The team inbox. Internal notifications are addressed here, and every other
 * email the site sends is copied here too (see sendEmail).
 *
 * The fallback has to be the real inbox. It used to be admin@greencompasstreks.com,
 * which is not a mailbox: whenever ADMIN_EMAIL was missing from the host's
 * environment, every booking alert and contact message went there, hard-bounced,
 * and put that address on Resend's suppression list — after which Resend stopped
 * attempting delivery altogether and simply marked each send "Suppressed".
 * Nothing surfaced any of it, because the API call itself keeps succeeding.
 */
export const TEAM_INBOX =
  process.env.ADMIN_EMAIL || process.env.SMTP_USER || "info@greencompasstreks.com";

export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

type SendEmailArgs = {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
  replyTo?: string;
  headers?: Record<string, string>;
  /**
   * Values (passwords, verification tokens) replaced with a placeholder in the
   * team inbox copy, so the shared inbox never holds working credentials.
   */
  secrets?: (string | null | undefined)[];
  /** Send a copy to TEAM_INBOX. Defaults to true. */
  copyToTeam?: boolean;
};

/** "Name <a@b.com>" → "a@b.com" */
function addressOf(value: string): string {
  return (value.match(/<([^>]+)>/)?.[1] ?? value).trim().toLowerCase();
}

/**
 * Low-level send helper used by every email module. Throws on failure so
 * callers can log/retry. Returns the Resend message id when available.
 *
 * Every email also goes to TEAM_INBOX as a separate copy, sent even when the
 * original fails so the team sees the failure and can follow up by hand.
 */
export async function sendEmail({
  to,
  subject,
  html,
  from = EMAIL_FROM,
  replyTo,
  headers,
  secrets = [],
  copyToTeam = true,
}: SendEmailArgs): Promise<{ id: string | null }> {
  const recipients = Array.isArray(to) ? to : [to];
  let result: { id: string | null } | null = null;
  let failure: unknown = null;

  try {
    const { data, error } = await getResend().emails.send({
      from,
      to: recipients,
      subject,
      html,
      ...(replyTo ? { replyTo } : {}),
      ...(headers ? { headers } : {}),
    });
    if (error) throw new Error(`Resend failed to send email: ${error.message}`);
    result = { id: data?.id ?? null };
  } catch (error) {
    failure = error;
  }

  const teamAlreadyReceives = recipients.some((r) => addressOf(r) === addressOf(TEAM_INBOX));
  if (copyToTeam && !teamAlreadyReceives) {
    await sendTeamCopy({ recipients, subject, html, secrets, failure, messageId: result?.id ?? null });
  }

  if (failure) throw failure;
  return result!;
}

async function sendTeamCopy({
  recipients,
  subject,
  html,
  secrets,
  failure,
  messageId,
}: {
  recipients: string[];
  subject: string;
  html: string;
  secrets: (string | null | undefined)[];
  failure: unknown;
  messageId: string | null;
}) {
  let body = html;
  for (const secret of secrets) {
    if (!secret) continue;
    for (const form of new Set([secret, escapeHtml(secret), encodeURIComponent(secret)])) {
      body = body.replaceAll(form, "[hidden in team copy]");
    }
  }

  const to = recipients.map(escapeHtml).join(", ");
  const status = failure
    ? `<strong style="color:#b91c1c;">NOT sent</strong> — ${escapeHtml(
        failure instanceof Error ? failure.message : String(failure)
      )}. Please contact the recipient directly.`
    : `<strong style="color:#047857;">Sent</strong>${messageId ? ` <span style="color:#64748b;">(Resend id ${escapeHtml(messageId)})</span>` : ""}`;

  try {
    const { error } = await getResend().emails.send({
      // Never from the team inbox itself: same-mailbox mail relayed through
      // Resend is what receiving servers junk as spoofed (see EMAIL_NOTIFICATIONS_FROM).
      from: EMAIL_NOTIFICATIONS_FROM,
      to: [TEAM_INBOX],
      // Replying to the copy writes straight to the original recipient.
      replyTo: recipients,
      subject: `${failure ? "[FAILED]" : "[Copy]"} ${subject} → ${recipients.join(", ")}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto 16px;padding:12px 16px;border-radius:8px;background:${failure ? "#fef2f2" : "#f1f5f9"};border:1px solid ${failure ? "#fecaca" : "#e2e8f0"};font-size:13px;line-height:1.6;color:#334155;">
          <strong>Copy of a website email</strong><br />
          To: ${to}<br />
          Status: ${status}
        </div>
        ${body}
      `,
    });
    if (error) console.error("Failed to copy email to team inbox:", error.message);
  } catch (error) {
    // The copy is best-effort; never let it mask the original send's outcome.
    console.error("Failed to copy email to team inbox:", error);
  }
}
