import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { resolveImageUrl } from "@/lib/auth-image";
import { AuthImageProvider } from "@/components/auth/AuthImageProvider";

export const metadata: Metadata = {
  title: {
    default: "Account",
    template: "%s | Green Compass Treks",
  },
  description: "Manage your Green Compass Treks account — sign in, sign up, and manage your bookings.",
  robots: {
    index: false,
    follow: false,
  },
};

// Auth pages (login/signup etc.) must never be cached — session-sensitive UI only.
export const dynamic = "force-dynamic";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Single left-side photo for ALL auth pages, configurable from
  // Admin -> Site Settings -> Auth.
  const settings = await prisma.siteSetting.findUnique({
    where: { id: "site-settings" },
    select: { authImage: true },
  });

  return (
    <AuthImageProvider imageUrl={resolveImageUrl(settings?.authImage)}>
      {children}
    </AuthImageProvider>
  );
}
