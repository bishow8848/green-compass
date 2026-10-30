import type { Metadata } from "next";

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

// The shared left-side photo (Admin -> Site Settings -> Auth) is fetched by
// <AuthShell>, which each auth page renders on the server.
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
