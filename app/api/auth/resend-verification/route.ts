import { NextRequest, NextResponse, after } from "next/server";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";
import { sendVerificationEmail } from "@/lib/email";
import { authRateLimit, checkRateLimit } from "@/lib/rate-limit";
import { getClientIp, hasTrustedOrigin } from "@/lib/request-security";

// Give the post-response email send (after) enough time to complete the SMTP
// handshake + delivery. Prevents the platform from cutting it off too early.
export const maxDuration = 60;

export async function POST(request: NextRequest) {
  try {
    if (!hasTrustedOrigin(request)) {
      return NextResponse.json({ error: "Invalid request origin" }, { status: 403 });
    }

    // Rate limiting by IP
    const ip = getClientIp(request);
    const rateCheck = await checkRateLimit(authRateLimit, ip);
    if (!rateCheck.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Check if user exists and is not yet verified
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      // Don't reveal whether the email exists — just return success
      return NextResponse.json({ message: "If the account exists, a verification email has been sent." });
    }

    if (user.emailVerified) {
      return NextResponse.json({ error: "This email is already verified. Please sign in." }, { status: 400 });
    }

    // Delete any existing verification tokens for this email
    await prisma.verificationToken.deleteMany({
      where: { identifier: email },
    });

    // Generate a new verification token (valid for 24 hours)
    const verificationToken = crypto.randomUUID();
    await prisma.verificationToken.create({
      data: {
        identifier: email,
        token: verificationToken,
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      },
    });

    // Send verification email after the response is sent.
    // `after` keeps the serverless function alive until the task completes,
    // so the email reliably goes out immediately without blocking the client.
    after(async () => {
      try {
        await sendVerificationEmail({
          name: user.name || "there",
          email: user.email,
          token: verificationToken,
        });
      } catch (error) {
        console.error("Failed to resend verification email:", error);
      }
    });

    return NextResponse.json({ message: "Verification email sent!" });
  } catch (error) {
    console.error("Resend verification error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
