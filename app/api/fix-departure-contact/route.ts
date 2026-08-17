import { NextRequest, NextResponse } from "next/server";
import { sendFixDepartureContactEmail } from "@/lib/email";
import { contactRateLimit, checkRateLimit } from "@/lib/rate-limit";
import { fixDepartureContactSchema } from "@/lib/validations";
import { getClientIp, hasTrustedOrigin } from "@/lib/request-security";

export async function POST(request: NextRequest) {
  try {
    if (!hasTrustedOrigin(request)) {
      return NextResponse.json({ error: "Invalid request origin" }, { status: 403 });
    }
    // Rate limiting by IP
    const ip = getClientIp(request);
    const rateCheck = await checkRateLimit(contactRateLimit, ip);
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

    // Validate with Zod schema
    const validated = fixDepartureContactSchema.safeParse(body);
    if (!validated.success) {
      return NextResponse.json(
        {
          error: "Invalid input",
          details: validated.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const { name, email, phone, numberOfPersons, trekTitle, startDate, note } = validated.data;

    await sendFixDepartureContactEmail({
      name,
      email,
      phone,
      numberOfPersons,
      trekTitle,
      startDate,
      note,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Fix departure contact error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}
