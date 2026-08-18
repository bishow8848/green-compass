import { NextResponse } from "next/server";
import { CLOUDINARY_CLOUD_NAME } from "@/lib/cloudinary-url";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const settings = await prisma.siteSetting.findUnique({
      where: { id: "site-settings" },
      select: { logo: true },
    });

    return NextResponse.json({
      logo: settings?.logo || null,
      url: settings?.logo
        ? `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${settings.logo}`
        : null,
    });
  } catch {
    return NextResponse.json({ logo: null, url: null });
  }
}
