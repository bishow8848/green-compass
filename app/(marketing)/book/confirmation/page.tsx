import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Booking received",
  robots: { index: false, follow: false },
};

export default async function GuestBookingConfirmation({
  searchParams,
}: {
  searchParams: Promise<{ booking?: string }>;
}) {
  const { booking } = await searchParams;

  return (
    <main className="mx-auto flex min-h-[60vh] max-w-2xl items-center px-6 py-20">
      <section className="w-full rounded-3xl border border-border bg-surface p-8 text-center shadow-sm">
        <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
        <h1 className="mt-5 text-3xl font-bold text-foreground">Booking received</h1>
        <p className="mt-3 text-text-muted">
          We sent the booking details and, for a new email address, customer account credentials
          to the lead traveler&apos;s email. Our team will review availability and contact you
          to confirm the next step.
        </p>
        {booking && (
          <p className="mt-5 text-sm text-text-muted">
            Reference: <strong className="text-foreground">{booking}</strong>
          </p>
        )}
        <Link
          href="/"
          className="mt-7 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-white"
        >
          Return home
        </Link>
      </section>
    </main>
  );
}
