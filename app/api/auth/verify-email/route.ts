import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendWelcomeEmail } from "@/lib/email";
import { authRateLimit, checkRateLimit } from "@/lib/rate-limit";
import { getClientIp } from "@/lib/request-security";

export async function GET(request: NextRequest) {
  // Rate limit token verification attempts
  const ip = getClientIp(request);
  const rateCheck = await checkRateLimit(authRateLimit, ip);
  if (!rateCheck.success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": String(rateCheck.reset) } }
    );
  }
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("token");

    if (!token) {
      return NextResponse.redirect(
        new URL("/verify-email?status=error&message=Missing verification token", request.url)
      );
    }

    // Find the verification token
    const verificationToken = await prisma.verificationToken.findUnique({
      where: { token },
    });

    if (!verificationToken) {
      return NextResponse.redirect(
        new URL(
          "/verify-email?status=error&message=Invalid or expired verification link. Please sign up again.",
          request.url
        )
      );
    }

    // Check if token has expired
    if (new Date() > verificationToken.expires) {
      await prisma.verificationToken.delete({
        where: { token },
      });
      return NextResponse.redirect(
        new URL(
          "/verify-email?status=error&message=Verification link has expired. Please sign up again.",
          request.url
        )
      );
    }

    // Update user's emailVerified field
    const user = await prisma.user.update({
      where: { email: verificationToken.identifier },
      data: { emailVerified: new Date() },
    });

    if (!user) {
      return NextResponse.redirect(
        new URL(
          "/verify-email?status=error&message=Account not found. Please sign up again.",
          request.url
        )
      );
    }

    // Delete the used token
    await prisma.verificationToken.delete({
      where: { token },
    });

    // Send welcome email now that the user is verified
    sendWelcomeEmail({
      name: user.name || "there",
      email: user.email,
    }).catch((error) => console.error("Failed to send welcome email:", error));

    return NextResponse.redirect(
      new URL("/verify-email?status=success", request.url)
    );
  } catch (error) {
    console.error("Email verification error:", error);
    return NextResponse.redirect(
      new URL(
        "/verify-email?status=error&message=Something went wrong. Please try again.",
        request.url
      )
    );
  }
}
