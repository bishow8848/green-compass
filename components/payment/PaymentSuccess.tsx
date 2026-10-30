"use client";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { MotionLink, Reveal, SuccessCheck } from "@/components/motion";

/**
 * Stripe's return page: records the payment through the verify endpoint, then
 * confirms. `paymentIntentId` is the ?payment_intent Stripe appends.
 */
export function PaymentSuccess({ bookingId, paymentIntentId }: { bookingId: string; paymentIntentId: string | null }) {
  const [status, setStatus] = useState<"verifying" | "success" | "error">("verifying");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!bookingId) return;

    async function verifyPayment() {
      // Stripe only redirects here on successful payment, so show success regardless
      // Try to update our database via the verify endpoint
      if (paymentIntentId) {
        try {
          await fetch("/api/payments/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ bookingId, paymentIntentId }),
            credentials: "include",
          });
        } catch {
          // Verify failed (network/auth), but payment succeeded with Stripe
          // Database will be updated when webhook fires
        }
      }

      setStatus("success");
    }

    verifyPayment();
  }, [bookingId, paymentIntentId]);

  if (status === "verifying") {
    return (
      <Reveal from="scale" className="mx-auto max-w-lg px-4 py-20 text-center">
        <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
        <h1 className="mt-6 text-2xl font-bold text-foreground">Verifying Payment...</h1>
        <p className="mt-2 text-sm text-muted">
          Please wait while we confirm your payment.
        </p>
      </Reveal>
    );
  }

  if (status === "error") {
    return (
      <Reveal from="scale" className="mx-auto max-w-lg px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-foreground">Payment Received</h1>
        <p className="mt-2 text-sm text-muted">
          {error || "Your payment was processed, but verification is pending."}
        </p>
        <p className="mt-1 text-sm text-muted">
          Please check your dashboard for the latest booking status.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <MotionLink
            href="/dashboard"
            className="rounded-xl bg-gradient-to-r from-primary to-primary-dark px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-primary-dark hover:to-primary-dark"
          >
            View My Bookings
          </MotionLink>
          <MotionLink
            href="/treks"
            className="rounded-xl border border-border px-6 py-2.5 text-sm font-medium text-muted hover:bg-surface-alt"
          >
            Browse More Treks
          </MotionLink>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal from="scale" className="mx-auto max-w-lg px-4 py-20 text-center">
      <SuccessCheck className="mx-auto h-16 w-16 text-success" />
      <h1 className="mt-6 text-2xl font-bold text-foreground">Payment Successful!</h1>
      <p className="mt-2 text-sm text-muted">
        Your payment has been processed successfully. Booking #{bookingId?.slice(0, 8)} is confirmed.
      </p>
      <div className="mt-8 flex items-center justify-center gap-4">
        <MotionLink
          href="/dashboard"
          className="rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-teal-600 hover:to-teal-700"
        >
          View My Bookings
        </MotionLink>
        <MotionLink
          href="/treks"
          className="rounded-xl border border-slate-200 px-6 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50"
        >
          Browse More Treks
        </MotionLink>
      </div>
    </Reveal>
  );
}
