import { auth } from "@/lib/auth";
import { verifyEmailConnection } from "@/lib/crm-email";
import { NextResponse } from "next/server";

export async function POST() {
  const session = await auth();
  if (!session || (session.user as { role?: string } | undefined)?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const connection = await verifyEmailConnection();
    return NextResponse.json({ success: true, connection });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Email connection check failed";
    return NextResponse.json({ success: false, error: message }, { status: 503 });
  }
}
