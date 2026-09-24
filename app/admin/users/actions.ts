"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { sendEmail, escapeHtml, EMAIL_NOTIFICATIONS_FROM, TEAM_INBOX } from "@/lib/resend";

export async function updateUserRole(id: string, role: string) {
  const session = await auth();
  if (!session || (session.user as any).role !== "admin") throw new Error("Unauthorized");

  await prisma.user.update({
    where: { id },
    data: { role },
  });

  revalidatePath("/admin/users");
}

export async function deleteUser(id: string) {
  const session = await auth();
  if (!session || (session.user as any).role !== "admin") throw new Error("Unauthorized");

  await prisma.user.delete({ where: { id } });
  revalidatePath("/admin/users");
}

export async function sendBulkEmail(formData: FormData) {
  const session = await auth();
  if (!session || (session.user as any).role !== "admin") throw new Error("Unauthorized");

  const subject = (formData.get("subject") as string)?.trim();
  const html = (formData.get("html") as string)?.trim();
  const recipientIds = JSON.parse((formData.get("recipientIds") as string) || "[]");

  if (!subject || !html) throw new Error("Subject and message are required");
  if (recipientIds.length === 0) throw new Error("No recipients selected");

  const users = await prisma.user.findMany({
    where: { id: { in: recipientIds }, email: { not: "" } },
    select: { id: true, name: true, email: true },
  });

  if (users.length === 0) throw new Error("No users with email addresses found");

  const siteName = "Green Compass Treks";
  const results = { sent: 0, failed: 0, errors: [] as string[] };

  const footer = `
    <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0 16px;" />
    <p style="font-size:12px;color:#64748b;">
      You received this email because you are registered with ${siteName}.
      <br/>${siteName} &mdash; Nepal
    </p>`;

  for (const user of users) {
    const userName = user.name || "there";
    const personalizedSubject = subject.replaceAll("{name}", userName);
    const personalizedHtml = html.replaceAll("{name}", userName);

    try {
      await sendEmail({
        to: user.email!,
        subject: personalizedSubject,
        html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;">${personalizedHtml}${footer}</div>`,
        // One summary copy goes to the team inbox below instead of one per user.
        copyToTeam: false,
      });
      results.sent++;
    } catch (err: any) {
      results.failed++;
      results.errors.push(`Failed to send to ${user.email}: ${err.message}`);
    }
  }

  try {
    await sendEmail({
      from: EMAIL_NOTIFICATIONS_FROM,
      to: TEAM_INBOX,
      subject: `[Copy] Bulk email "${subject}" → ${results.sent} of ${users.length} users`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto 16px;padding:12px 16px;border-radius:8px;background:#f1f5f9;border:1px solid #e2e8f0;font-size:13px;line-height:1.6;color:#334155;">
          <strong>Copy of a bulk email</strong><br />
          Sent: ${results.sent} · Failed: ${results.failed}<br />
          To: ${users.map((u) => escapeHtml(u.email!)).join(", ")}
          ${results.errors.length ? `<br /><span style="color:#b91c1c;">${results.errors.map(escapeHtml).join("<br />")}</span>` : ""}
        </div>
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">${html}${footer}</div>
      `,
    });
  } catch (err) {
    console.error("Failed to copy bulk email to team inbox:", err);
  }

  revalidatePath("/admin/users");
  return results;
}
