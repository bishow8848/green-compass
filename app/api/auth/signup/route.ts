import { NextRequest, NextResponse, after } from "next/server";
import { hash } from "bcryptjs";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";
import { signUpSchema } from "@/lib/validations";
import { authRateLimit, checkRateLimit } from "@/lib/rate-limit";
import { sendVerificationEmail } from "@/lib/email";
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
        {
          status: 429,
          headers: {
            "Retry-After": String(rateCheck.reset),
            "X-RateLimit-Remaining": String(rateCheck.remaining),
          },
        }
      );
    }

    const body = await request.json();

    // Validate input
    const validated = signUpSchema.safeParse(body);
    if (!validated.success) {
      return NextResponse.json(
        { error: "Invalid input", details: validated.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, password } = validated.data;

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "An account with this email already exists" },
        { status: 409 }
      );
    }

    // Create user (unverified — emailVerified defaults to null)
    const passwordHash = await hash(password, 12);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
        role: "customer",
      },
    });

    // Generate a verification token (valid for 24 hours)
    const verificationToken = crypto.randomUUID();
    await prisma.verificationToken.create({
      data: {
        identifier: email,
        token: verificationToken,
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
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
        console.error("Failed to send verification email:", error);
      }
    });

    return NextResponse.json(
      {
        message: "Account created! Please check your email to verify your account before signing in.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
