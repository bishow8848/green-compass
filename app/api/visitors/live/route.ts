import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { liveVisitors } from "@/lib/visitors";

/** The admin Visitors page's live panel: who is on the site now. */
export async function GET() {
  const session = await auth();
  if ((session?.user as { role?: string } | undefined)?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json({ live: await liveVisitors() }, { headers: { "Cache-Control": "no-store" } });
}
