import { randomBytes } from "crypto";
import { hash } from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendTemporaryPasswordEmail } from "@/lib/email";
import { authRateLimit, checkRateLimit } from "@/lib/rate-limit";
import { forgotPasswordSchema } from "@/lib/validations";
import { getClientIp, hasTrustedOrigin } from "@/lib/request-security";

const GENERIC_RESPONSE = {
  success: true,
  message:
    "If a password account exists for that email, a temporary password has been sent.",
};

export async function POST(request: NextRequest) {
  if (!hasTrustedOrigin(request)) {
    return NextResponse.json({ error: "Invalid request origin" }, { status: 403 });
  }

  const rateCheck = await checkRateLimit(authRateLimit, getClientIp(request));
  if (!rateCheck.success) {
    return NextResponse.json({ error: "Too many attempts. Please try again later." }, { status: 429 });
  }

  const parsed = forgotPasswordSchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid email", details: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const user = await prisma.user.findUnique({
    where: { email: parsed.data.email },
    select: {
      id: true,
      name: true,
      email: true,
      passwordHash: true,
      mustChangePassword: true,
    },
  });

  // Keep the response indistinguishable for unknown and Google-only accounts.
  if (!user?.passwordHash) {
    return NextResponse.json(GENERIC_RESPONSE);
  }

  const temporaryPassword = randomBytes(18).toString("base64url");
  const newPasswordHash = await hash(temporaryPassword, 12);
  const previousPasswordHash = user.passwordHash;
  const previousMustChangePassword = user.mustChangePassword;

  await prisma.user.update({
    where: { id: user.id },
    data: { passwordHash: newPasswordHash, mustChangePassword: true },
  });

  try {
    await sendTemporaryPasswordEmail({
      name: user.name || "there",
      email: user.email,
      temporaryPassword,
    });
  } catch (error) {
    // Avoid locking the user out if SMTP fails. The conditional restore also
    // avoids overwriting a newer password change made concurrently.
    await prisma.user.updateMany({
      where: { id: user.id, passwordHash: newPasswordHash },
      data: {
        passwordHash: previousPasswordHash,
        mustChangePassword: previousMustChangePassword,
      },
    });
    console.error("Failed to send temporary password email:", error);
    return NextResponse.json(
      { error: "Unable to send the email right now. Please try again later." },
      { status: 503 }
    );
  }

  return NextResponse.json(GENERIC_RESPONSE);
}
