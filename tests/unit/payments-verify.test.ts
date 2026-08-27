import { describe, it, expect, vi, beforeEach } from "vitest";

process.env.STRIPE_SECRET_KEY = "sk_test_mock";

// ---- Mock @/lib/stripe ----
const mockPaymentIntents = vi.hoisted(() => ({
  retrieve: vi.fn(),
}));
vi.mock("@/lib/stripe", () => ({
  stripe: { paymentIntents: mockPaymentIntents },
}));

// ---- Mock @/lib/auth ----
vi.mock("@/lib/auth", () => ({ auth: vi.fn() }));

// ---- Mock @/lib/prisma ----
const mockPrisma = {
  booking: { findUnique: vi.fn(), update: vi.fn() },
  payment: { findFirst: vi.fn(), update: vi.fn() },
  $transaction: vi.fn((fn: any) => fn(mockPrisma)),
};
vi.mock("@/lib/prisma", () => ({ prisma: mockPrisma }));

// ---- Mock rate limit / redis / request-security ----
vi.mock("@/lib/rate-limit", () => ({
  paymentRateLimit: {},
  checkRateLimit: vi.fn().mockResolvedValue({ success: true }),
}));
vi.mock("@/lib/redis", () => ({
  invalidateCachePattern: vi.fn().mockResolvedValue(undefined),
  cacheKeys: { pattern: { home: "home:*" } },
}));
vi.mock("@/lib/request-security", () => ({
  getClientIp: vi.fn().mockReturnValue("127.0.0.1"),
}));

import { auth } from "@/lib/auth";
import { checkRateLimit } from "@/lib/rate-limit";

const { POST } = await import("@/app/api/payments/verify/route");

function req(body: Record<string, unknown>) {
  return { json: vi.fn().mockResolvedValue(body), headers: new Map() } as any;
}

/**
 * Regression tests for a payment-confirmation bypass.
 *
 * The route used to look the Payment row up by stripePaymentIntentId ALONE and
 * then apply the result to whatever bookingId the client sent. Because a user
 * can legitimately own several bookings, they could pair a cheap booking's
 * genuinely-succeeded intent with an expensive booking's id and have the
 * expensive one marked CONFIRMED without paying for it — and replay the same
 * intent across every other booking on the account.
 */
describe("POST /api/payments/verify — payment/booking binding", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (auth as any).mockResolvedValue({ user: { id: "user-123" } });
    (checkRateLimit as any).mockResolvedValue({ success: true });
    mockPaymentIntents.retrieve.mockResolvedValue({
      id: "pi_cheap",
      status: "succeeded",
      metadata: { bookingId: "booking-cheap" },
    });
    // The expensive booking the attacker wants confirmed. They really do own it.
    mockPrisma.booking.findUnique.mockResolvedValue({
      id: "booking-expensive",
      userId: "user-123",
      totalPrice: 5000,
    });
  });

  it("refuses an intent whose metadata names a different booking", async () => {
    const res = await POST(req({ bookingId: "booking-expensive", paymentIntentId: "pi_cheap" }));
    expect(res.status).toBe(403);
    expect(mockPrisma.booking.update).not.toHaveBeenCalled();
  });

  it("does not confirm a booking using another booking's payment row", async () => {
    // No metadata on the intent, so the metadata guard cannot catch it — the
    // bookingId-scoped payment lookup is what has to hold the line here.
    mockPaymentIntents.retrieve.mockResolvedValue({
      id: "pi_cheap",
      status: "succeeded",
      metadata: {},
    });
    // The scoped query finds nothing: the only row carrying pi_cheap belongs to
    // booking-cheap, not booking-expensive.
    mockPrisma.payment.findFirst.mockResolvedValue(null);

    const res = await POST(req({ bookingId: "booking-expensive", paymentIntentId: "pi_cheap" }));

    expect(mockPrisma.payment.findFirst).toHaveBeenCalledWith({
      where: { bookingId: "booking-expensive", stripePaymentIntentId: "pi_cheap" },
    });
    expect(res.status).toBe(404);
    expect(await res.json()).toMatchObject({ verified: false });
    expect(mockPrisma.booking.update).not.toHaveBeenCalled();
  });

  it("still confirms a booking paid by its own intent", async () => {
    mockPaymentIntents.retrieve.mockResolvedValue({
      id: "pi_own",
      status: "succeeded",
      metadata: { bookingId: "booking-expensive" },
    });
    mockPrisma.payment.findFirst.mockResolvedValue({
      id: "pay-1",
      bookingId: "booking-expensive",
      amount: 5000,
    });

    const res = await POST(req({ bookingId: "booking-expensive", paymentIntentId: "pi_own" }));

    expect(res.status).toBe(200);
    expect(await res.json()).toMatchObject({ verified: true, paymentStatus: "FULLY_PAID" });
    expect(mockPrisma.booking.update).toHaveBeenCalledWith({
      where: { id: "booking-expensive" },
      data: { status: "CONFIRMED", paymentStatus: "FULLY_PAID" },
    });
  });

  it("rejects an intent that has not succeeded", async () => {
    mockPaymentIntents.retrieve.mockResolvedValue({
      id: "pi_own",
      status: "requires_payment_method",
      metadata: { bookingId: "booking-expensive" },
    });
    const res = await POST(req({ bookingId: "booking-expensive", paymentIntentId: "pi_own" }));
    expect(await res.json()).toMatchObject({ verified: false });
    expect(mockPrisma.booking.update).not.toHaveBeenCalled();
  });
});
