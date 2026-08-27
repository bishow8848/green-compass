import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { paymentRateLimit, checkRateLimit } from "@/lib/rate-limit";
import { getClientIp } from "@/lib/request-security";
import { invalidateCachePattern, cacheKeys } from "@/lib/redis";

// Verify a payment after Stripe redirects back to the success page
// This handles cases where the webhook hasn't fired yet
export async function POST(request: NextRequest) {
  try {
    // Rate limiting by IP
    const ip = getClientIp(request);
    const rateCheck = await checkRateLimit(paymentRateLimit, ip);
    if (!rateCheck.success) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { bookingId, paymentIntentId } = await request.json();
    if (!bookingId || !paymentIntentId) {
      return NextResponse.json({ error: "Booking ID and Payment Intent ID required" }, { status: 400 });
    }

    // Retrieve the payment intent from Stripe to verify its status
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status !== "succeeded") {
      return NextResponse.json({
        verified: false,
        status: paymentIntent.status,
        message: `Payment is ${paymentIntent.status}, not yet succeeded`,
      });
    }

    // Find the booking and verify ownership
    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
    });

    if (!booking || booking.userId !== session.user.id) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }

    // The intent records the booking it was created for (see createPaymentIntent
    // in /api/payments/stripe). Checking it here means a succeeded intent can
    // only ever confirm the booking it was actually raised against.
    const intentBookingId = paymentIntent.metadata?.bookingId;
    if (intentBookingId && intentBookingId !== bookingId) {
      return NextResponse.json(
        { error: "Payment does not belong to this booking" },
        { status: 403 }
      );
    }

    // Update payment and booking status (idempotent — safe if webhook already did this).
    //
    // The payment MUST be matched on bookingId as well as the intent id. Looking
    // it up by intent id alone let a caller pair any booking they owned with a
    // succeeded intent belonging to a DIFFERENT booking: ownership passed, the
    // intent was genuinely "succeeded", and this route then marked the unrelated
    // booking CONFIRMED. One real payment could confirm every other booking on
    // the account. The webhook (PUT /api/payments/stripe) never had this hole
    // because it derives the booking from payment.bookingId instead of trusting
    // a client-supplied id.
    const payment = await prisma.payment.findFirst({
      where: { bookingId, stripePaymentIntentId: paymentIntentId },
    });

    if (!payment) {
      return NextResponse.json(
        { error: "Payment record not found", verified: false },
        { status: 404 }
      );
    }

    // Determine if this was an advance or full payment
    const isPartial = payment.amount < booking.totalPrice;
    const paymentStatus = isPartial ? "PARTIALLY_PAID" : "FULLY_PAID";

    await prisma.$transaction(async (tx) => {
      await tx.payment.update({
        where: { id: payment.id },
        data: { status: "SUCCEEDED" },
      });

      await tx.booking.update({
        where: { id: bookingId },
        data: {
          status: "CONFIRMED",
          paymentStatus,
        },
      });
    });

    // Invalidate homepage stats cache since payment/booking status changed
    await invalidateCachePattern(cacheKeys.pattern.home);

    return NextResponse.json({
      verified: true,
      status: "succeeded",
      paymentStatus,
    });
  } catch (error) {
    console.error("Payment verification error:", error);
    return NextResponse.json({ error: "Verification failed" }, { status: 500 });
  }
}
