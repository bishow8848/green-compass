import { SITE_URL } from "@/lib/seo";
import { sendEmail } from "@/lib/resend";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Recipient for internal notifications (booking alerts, contact form messages).
const ADMIN_EMAIL =
  process.env.ADMIN_EMAIL || process.env.SMTP_USER || "admin@greencompasstreks.com";

export type TravelerInfo = {
  fullName: string;
  email: string;
  phone: string;
  nationality: string;
  emergencyContact?: string | null;
  age?: number | null;
};

export type AddonInfo = {
  title: string;
  qty: number;
  pricePerUnit: number;
};

export async function sendVerificationEmail({
  name,
  email,
  token,
}: {
  name: string;
  email: string;
  token: string;
}) {
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL ||
    (typeof window !== "undefined" ? window.location.origin : SITE_URL);
  const verificationUrl = `${baseUrl}/api/auth/verify-email?token=${token}`;

  await sendEmail({
    to: email,
    subject: "Verify your email address - Mardi Treks",
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;line-height:1.65;color:#334155;">
        <div style="text-align:center;padding:20px 0;">
          <h1 style="color:#0f766e;margin:0;">Mardi Treks</h1>
        </div>
        <h2 style="color:#0f766e;">Verify your email address</h2>
        <p>Hello ${escapeHtml(name)},</p>
        <p>Thank you for signing up with Mardi Treks! Please verify your email address by clicking the button below:</p>
        <div style="text-align:center;margin:30px 0;">
          <a href="${verificationUrl}" style="display:inline-block;padding:14px 32px;background-color:#0f766e;color:#ffffff;text-decoration:none;border-radius:8px;font-size:16px;font-weight:600;">
            Verify Email Address
          </a>
        </div>
        <p style="color:#64748b;font-size:14px;">Or copy and paste this link in your browser:</p>
        <p style="color:#64748b;font-size:14px;word-break:break-all;">${verificationUrl}</p>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />
        <p style="color:#64748b;font-size:13px;">This link will expire in 24 hours. If you did not create an account, you can safely ignore this email.</p>
        <p style="margin-top:28px;">Warm regards,<br /><strong>Mardi Treks Team</strong></p>
      </div>
    `,
  });
}

export async function sendWelcomeEmail({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  await sendEmail({
    to: email,
    subject: "Welcome to Mardi Treks",
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;line-height:1.65;color:#334155;">
        <h2 style="color:#0f766e;">Welcome to Mardi Treks, ${escapeHtml(name)}!</h2>
        <p>Thank you for creating your account. You can now explore our treks, submit bookings, and view your booking information from your dashboard.</p>
        <p>If you need help choosing a trek, simply reply to this email.</p>
        <p style="margin-top:28px;">Warm regards,<br /><strong>Mardi Treks</strong></p>
      </div>
    `,
  });
}

export async function sendBookingReceivedEmail({
  name,
  email,
  trekTitle,
  startDate,
  bookingId,
  temporaryAccount,
  linkedExistingAccount,
}: {
  name: string;
  email: string;
  trekTitle: string;
  startDate: string;
  bookingId: string;
  temporaryAccount?: { email: string; password: string };
  linkedExistingAccount?: boolean;
}) {
  await sendEmail({
    to: email,
    subject: `We received your ${trekTitle} booking request`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;line-height:1.65;color:#334155;">
        <h2 style="color:#0f766e;">Your booking request has been received</h2>
        <p>Hello ${escapeHtml(name)},</p>
        <p>Thank you for choosing Mardi Treks. Your booking details have been sent to our team successfully.</p>
        <div style="margin:20px 0;padding:16px;border-radius:10px;background:#f0fdfa;">
          <strong>${escapeHtml(trekTitle)}</strong><br />
          Preferred start date: ${escapeHtml(startDate)}<br />
          Reference: ${escapeHtml(bookingId)}
        </div>
        <p>We will review the details and respond within 24 hours. Your booking is pending until our team confirms it.</p>
        ${temporaryAccount ? `
          <div style="margin:20px 0;padding:16px;border-radius:10px;background:#fff7ed;border:1px solid #fed7aa;">
            <strong>Your customer account has been created</strong><br />
            Email: ${escapeHtml(temporaryAccount.email)}<br />
            Temporary password: <code style="font-weight:bold;">${escapeHtml(temporaryAccount.password)}</code><br />
            <span style="font-size:13px;">For security, you will be asked to choose a new password when you first sign in.</span>
          </div>
        ` : ""}
        ${linkedExistingAccount ? `
          <p>This booking was linked to your existing Mardi Treks account. Sign in with your current password to view it in your dashboard.</p>
        ` : ""}
        <p style="margin-top:28px;">Warm regards,<br /><strong>Mardi Treks</strong></p>
      </div>
    `,
  });
}

export async function sendTemporaryPasswordEmail({
  name,
  email,
  temporaryPassword,
}: {
  name: string;
  email: string;
  temporaryPassword: string;
}) {
  await sendEmail({
    to: email,
    subject: "Your temporary Mardi Treks password",
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;line-height:1.65;color:#334155;">
        <h2 style="color:#0f766e;">Temporary password requested</h2>
        <p>Hello ${escapeHtml(name)},</p>
        <p>Use the temporary password below to sign in to your Mardi Treks account:</p>
        <div style="margin:20px 0;padding:16px;border-radius:10px;background:#fff7ed;border:1px solid #fed7aa;">
          Email: ${escapeHtml(email)}<br />
          Temporary password: <code style="font-weight:bold;">${escapeHtml(temporaryPassword)}</code>
        </div>
        <p>You will be required to choose a new password immediately after signing in.</p>
        <p>If you did not request this, please contact Mardi Treks support.</p>
        <p style="margin-top:28px;">Warm regards,<br /><strong>Mardi Treks</strong></p>
      </div>
    `,
  });
}

export async function sendBookingNotification({
  customerName,
  customerEmail,
  trekTitle,
  startDate,
  travelers,
  groupSize,
  totalPrice,
  addons,
  specialRequests,
}: {
  customerName: string;
  customerEmail: string;
  trekTitle: string;
  startDate: string;
  travelers: TravelerInfo[];
  groupSize: number;
  totalPrice: number;
  addons?: AddonInfo[];
  specialRequests?: string | null;
}) {
  const addonsRows = addons && addons.length > 0
    ? addons.map((a) => `<tr><td style="padding:6px 8px;border-bottom:1px solid #eee;">${escapeHtml(a.title)} &times; ${a.qty}</td><td style="padding:6px 8px;border-bottom:1px solid #eee;text-align:right;">+$${(a.qty * a.pricePerUnit).toLocaleString()}</td></tr>`).join("")
    : "";

  const travelerRows = travelers.map((t, i) => `
    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:600;color:#1e293b;" colspan="2">Traveler ${i + 1}</td></tr>
    <tr><td style="padding:4px 8px;color:#64748b;width:120px;">Name</td><td style="padding:4px 8px;">${escapeHtml(t.fullName)}</td></tr>
    <tr><td style="padding:4px 8px;color:#64748b;">Email</td><td style="padding:4px 8px;">${escapeHtml(t.email)}</td></tr>
    <tr><td style="padding:4px 8px;color:#64748b;">Phone</td><td style="padding:4px 8px;">${escapeHtml(t.phone)}</td></tr>
    <tr><td style="padding:4px 8px;color:#64748b;">Nationality</td><td style="padding:4px 8px;">${escapeHtml(t.nationality)}</td></tr>
    <tr><td style="padding:4px 8px;color:#64748b;">Emergency Contact</td><td style="padding:4px 8px;">${t.emergencyContact ? escapeHtml(t.emergencyContact) : "N/A"}</td></tr>
    <tr><td style="padding:4px 8px;color:#64748b;">Age</td><td style="padding:4px 8px;">${t.age ?? "N/A"}</td></tr>
  `).join("");

  try {
    await sendEmail({
      to: ADMIN_EMAIL,
      subject: `[New Booking] ${trekTitle} - ${customerName}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#0d9488;">New Booking Received</h2>
          <table style="width:100%;border-collapse:collapse;margin-top:12px;">
            <tr><td style="padding:8px;font-weight:bold;color:#46576a;width:120px;">Customer</td><td style="padding:8px;">${escapeHtml(customerName)}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;color:#46576a;">Email</td><td style="padding:8px;">${escapeHtml(customerEmail)}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;color:#46576a;">Trek</td><td style="padding:8px;">${escapeHtml(trekTitle)}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;color:#46576a;">Start Date</td><td style="padding:8px;">${escapeHtml(startDate)}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;color:#46576a;">Travelers</td><td style="padding:8px;">${groupSize}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;color:#46576a;">Total Price</td><td style="padding:8px;"><strong>$${totalPrice.toLocaleString()}</strong></td></tr>
          </table>
          ${addonsRows ? `
          <h3 style="color:#0d9488;margin-top:20px;">Add-ons</h3>
          <table style="width:100%;border-collapse:collapse;">
            ${addonsRows}
          </table>
          ` : ""}
          ${specialRequests ? `
          <h3 style="color:#0d9488;margin-top:20px;">Special Requests</h3>
          <p style="color:#334155;background:#fef3c7;padding:12px;border-radius:8px;">${escapeHtml(specialRequests)}</p>
          ` : ""}
          <h3 style="color:#0d9488;margin-top:20px;">Traveler Details</h3>
          <table style="width:100%;border-collapse:collapse;">
            ${travelerRows}
          </table>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;" />
          <p style="font-size:12px;color:#64748b;">Sent from Mardi Treks booking system</p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Failed to send booking notification email:", error);
    throw error;
  }
}

export async function sendContactEmail({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    await sendEmail({
      replyTo: email,
      to: ADMIN_EMAIL,
      subject: `[Mardi Treks Contact] ${escapeHtml(subject)}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#fe4100;">New Contact Form Message</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px;font-weight:bold;color:#46576a;">Name</td><td style="padding:8px;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;color:#46576a;">Email</td><td style="padding:8px;">${escapeHtml(email)}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;color:#46576a;">Subject</td><td style="padding:8px;">${escapeHtml(subject)}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />
          <p style="color:#334155;line-height:1.6;">${escapeHtml(message)}</p>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />
          <p style="font-size:12px;color:#64748b;">Sent from Mardi Treks contact form</p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    throw error;
  }
}

export async function sendFixDepartureContactEmail({
  name,
  email,
  phone,
  numberOfPersons,
  trekTitle,
  startDate,
  note,
}: {
  name: string;
  email: string;
  phone: string;
  numberOfPersons: number;
  trekTitle: string;
  startDate: string;
  note?: string;
}) {
  try {
    await sendEmail({
      replyTo: email,
      to: ADMIN_EMAIL,
      subject: `[Mardi Treks Fix Departure] ${escapeHtml(trekTitle)} - ${escapeHtml(startDate)}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#fe4100;">New Fix Departure Interest</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px;font-weight:bold;color:#46576a;">Name</td><td style="padding:8px;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;color:#46576a;">Email</td><td style="padding:8px;">${escapeHtml(email)}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;color:#46576a;">Phone</td><td style="padding:8px;">${escapeHtml(phone)}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;color:#46576a;">Number of Persons</td><td style="padding:8px;">${numberOfPersons}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;color:#46576a;">Trek</td><td style="padding:8px;">${escapeHtml(trekTitle)}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;color:#46576a;">Start Date</td><td style="padding:8px;">${escapeHtml(startDate)}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />
          <p style="color:#334155;line-height:1.6;white-space:pre-wrap;">${escapeHtml(note || "")}</p>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />
          <p style="font-size:12px;color:#64748b;">Sent from the Fix Departure page</p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Failed to send fix departure contact email:", error);
    throw error;
  }
}
