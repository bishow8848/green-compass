import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

// Payment must always show realtime booking/transaction state — never cache the route.
export const dynamic = "force-dynamic";

export default function PaymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
