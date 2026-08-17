import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

// Booking pages are ISR-cached for 1 day so availability/prices refresh periodically.
export const revalidate = 86400;

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
