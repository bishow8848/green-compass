import { NextRequest, NextResponse } from "next/server";
import { compare, hash } from "bcryptjs";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { authRateLimit, checkRateLimit } from "@/lib/rate-limit";
import { changePasswordSchema } from "@/lib/validations";
import {
  getClientIp,
  hasTrustedOrigin,
  rateLimitIdentifier,
} from "@/lib/request-security";

export async function POST(request: NextRequest) {
  if (!hasTrustedOrigin(request)) {
    return NextResponse.json({ error: "Invalid request origin" }, { status: 403 });
  }

  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const rateCheck = await checkRateLimit(
    authRateLimit,
    rateLimitIdentifier(getClientIp(request), session.user.id)
  );
  if (!rateCheck.success) {
    return NextResponse.json({ error: "Too many attempts" }, { status: 429 });
  }

  const parsed = changePasswordSchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid password", details: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { passwordHash: true },
  });
  if (!user?.passwordHash || !(await compare(parsed.data.currentPassword, user.passwordHash))) {
    return NextResponse.json({ error: "Current password is incorrect" }, { status: 400 });
  }

  await prisma.user.update({
    where: { id: session.user.id },
    data: {
      passwordHash: await hash(parsed.data.newPassword, 12),
      mustChangePassword: false,
    },
  });

  return NextResponse.json({ success: true });
}
