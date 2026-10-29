import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { activeVisitors } from "@/lib/visitors";

/** The admin Visitors page's live "Active now" count. */
export async function GET() {
  const session = await auth();
  if ((session?.user as { role?: string } | undefined)?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json({ active: await activeVisitors() }, { headers: { "Cache-Control": "no-store" } });
}
