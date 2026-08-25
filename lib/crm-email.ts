import { prisma } from "./prisma";
import { sendEmail, getResend, EMAIL_FROM } from "./resend";

export async function verifyEmailConnection() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("Resend is not fully configured (RESEND_API_KEY missing)");
  }
  const { error } = await getResend().domains.list();
  if (error) {
    throw new Error(`Resend API check failed: ${error.message}`);
  }
  return { provider: "resend", from: EMAIL_FROM };
}

export type SendEmailToContactParams = {
  contactId: string;
  subject: string;
  body: string; // HTML
  fromEmail?: string;
  replyToMessageId?: string; // For threading replies
};

/**
 * Send an email to a CRM contact and auto-log it.
 * The contact's email address is resolved from the database.
 */
export async function sendEmailToContact({
  contactId,
  subject,
  body,
  fromEmail,
  replyToMessageId,
}: SendEmailToContactParams & { replyToMessageId?: string }) {
  const contact = await prisma.crmContact.findUnique({
    where: { id: contactId },
    select: { name: true, email: true },
  });

  if (!contact) throw new Error(`Contact ${contactId} not found`);
  if (!contact.email) throw new Error(`Contact ${contactId} has no email address`);

  const from = fromEmail || EMAIL_FROM;

  // Generate a unique Message-ID
  const generatedMessageId = `<crm-${Date.now()}-${Math.random().toString(36).slice(2)}@greencompasstreks.com>`;

  // Determine threadId: if replying, use the parent's threadId; otherwise new thread
  let threadId: string | null = null;
  if (replyToMessageId) {
    const parentEmail = await prisma.crmEmailLog.findFirst({
      where: { messageId: replyToMessageId, contactId },
      select: { threadId: true },
    });
    threadId = parentEmail?.threadId || generatedMessageId;
  } else {
    threadId = generatedMessageId;
  }

  let actualMessageId: string | undefined;

  try {
    const headers: Record<string, string> = { "Message-ID": generatedMessageId };
    if (replyToMessageId) {
      headers["In-Reply-To"] = replyToMessageId;
      headers["References"] = replyToMessageId;
    }
    const { id } = await sendEmail({
      to: contact.email,
      subject,
      html: body,
      from,
      headers,
    });
    actualMessageId = id || generatedMessageId;
  } catch (error) {
    // Log the failed attempt
    await prisma.crmEmailLog.create({
      data: {
        contactId,
        direction: "sent",
        subject,
        body,
        fromEmail: from,
        toEmail: contact.email,
        messageId: generatedMessageId,
        threadId,
        status: "failed",
        sentAt: new Date(),
      },
    });
    throw error;
  }

  // Auto-log the successful send
  await prisma.crmEmailLog.create({
    data: {
      contactId,
      direction: "sent",
      subject,
      body,
      fromEmail: from,
      toEmail: contact.email,
      messageId: actualMessageId,
      threadId,
      status: "sent",
      sentAt: new Date(),
    },
  });

  return { messageId: actualMessageId, threadId, to: contact.email, contactName: contact.name };
}

/**
 * Send an email to an arbitrary address (not necessarily a CRM contact)
 * and optionally log it to a contact.
 */
export async function sendEmailAndLog({
  to,
  subject,
  body,
  contactId,
  fromEmail,
}: {
  to: string;
  subject: string;
  body: string;
  contactId?: string;
  fromEmail?: string;
}) {
  const from = fromEmail || EMAIL_FROM;
  let messageId: string | undefined;

  try {
    const { id } = await sendEmail({
      to,
      subject,
      html: body,
      from,
    });
    messageId = id ?? undefined;
  } catch (error) {
    if (contactId) {
      await prisma.crmEmailLog.create({
        data: {
          contactId,
          direction: "sent",
          subject,
          body,
          fromEmail: from,
          toEmail: to,
          status: "failed",
          sentAt: new Date(),
        },
      });
    }
    throw error;
  }

  if (contactId) {
    await prisma.crmEmailLog.create({
      data: {
        contactId,
        direction: "sent",
        subject,
        body,
        fromEmail: from,
        toEmail: to,
        status: "sent",
        sentAt: new Date(),
      },
    });
  }

  return { messageId };
}

/**
 * Log an incoming email (called from webhook or IMAP fetcher).
 */
export async function logIncomingEmail({
  contactId,
  subject,
  body,
  fromEmail,
  toEmail,
}: {
  contactId: string;
  subject: string;
  body: string;
  fromEmail: string;
  toEmail: string;
}) {
  return prisma.crmEmailLog.create({
    data: {
      contactId,
      direction: "received",
      subject,
      body,
      fromEmail,
      toEmail,
      status: "sent",
      sentAt: new Date(),
    },
  });
}
