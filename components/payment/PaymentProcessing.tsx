"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2, XCircle, ArrowLeft } from "lucide-react";
import * as m from "framer-motion/m";
import { MotionLink, Reveal, SuccessCheck } from "@/components/motion";

/** Waits for the payment opened in another window to confirm, polling the booking. */
export function PaymentProcessing({ bookingId }: { bookingId: string }) {
  const router = useRouter();
  const [status, setStatus] = useState<string>("PENDING");
  const [polls, setPolls] = useState(0);

  // Poll for payment status — check booking status directly
  useEffect(() => {
    if (!bookingId) return;

    const interval = setInterval(async () => {
      try {
        const res = await fetch(`/api/booking?id=${bookingId}`);
        if (res.ok) {
          const data = await res.json();
          setStatus(data.booking?.status || "PENDING");
          setPolls((p) => p + 1);
        }
      } catch {}
    }, 3000);

    return () => clearInterval(interval);
  }, [bookingId]);

  // Redirect when confirmed
  useEffect(() => {
    if (status === "CONFIRMED") {
      const timer = setTimeout(() => router.push(`/payment/${bookingId}/success`), 1500);
      return () => clearTimeout(timer);
    }
  }, [status, bookingId, router]);

  if (status === "CONFIRMED") {
    return (
      <Reveal from="scale" className="mx-auto max-w-lg px-4 py-20 text-center">
        <SuccessCheck className="mx-auto h-16 w-16 text-success" />
        <h1 className="mt-6 text-2xl font-bold text-foreground">Payment Confirmed!</h1>
        <p className="mt-2 text-sm text-muted">Redirecting to confirmation...</p>
      </Reveal>
    );
  }

  if (status === "FAILED" || status === "CANCELLED") {
    return (
      <Reveal from="scale" className="mx-auto max-w-lg px-4 py-20 text-center">
        <m.div
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-error/10"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, rotate: [0, -12, 12, -6, 6, 0] }}
          transition={{ duration: 0.5 }}
        >
          <XCircle className="h-8 w-8 text-error" />
        </m.div>
        <h1 className="mt-6 text-2xl font-bold text-foreground">Payment Failed</h1>
        <p className="mt-2 text-sm text-muted">Your payment was not completed. Please try again.</p>
        <MotionLink
          href={`/payment/${bookingId}`}
          className="mt-6 inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-primary-dark hover:to-primary-dark"
        >
          <ArrowLeft className="h-4 w-4" /> Try Again
        </MotionLink>
      </Reveal>
    );
  }

  return (
    <Reveal from="scale" className="mx-auto max-w-lg px-4 py-20 text-center">
      <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
      <h1 className="mt-6 text-2xl font-bold text-foreground">Processing Payment</h1>
      <p className="mt-2 text-sm text-muted">
        Please complete the payment in the opened window.
        {polls > 0 && ` Waiting for confirmation... (${polls})`}
      </p>
      {polls > 10 && (
        <MotionLink
          href={`/payment/${bookingId}`}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark"
        >
          <ArrowLeft className="h-4 w-4" /> Back to payment options
        </MotionLink>
      )}
    </Reveal>
  );
}
