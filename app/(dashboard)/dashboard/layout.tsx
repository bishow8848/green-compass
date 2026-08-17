import type { Metadata } from "next";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Customer Dashboard",
  robots: {
    index: false,
    follow: false,
  },
};

// Dashboard shows live booking/user data — never cache the route.
export const dynamic = "force-dynamic";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { mustChangePassword: true },
  });
  if (!user) redirect("/login");
  if (user.mustChangePassword) redirect("/change-password");

  return children;
}
