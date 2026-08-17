import Stripe from "stripe";

let _stripe: Stripe | null = null;

/** Lazily build the Stripe client so merely importing this module (e.g. during
 * `next build` page-data collection) never constructs a Stripe instance, which
 * would throw "Neither apiKey nor config.authenticator provided" when
 * STRIPE_SECRET_KEY is absent. */
function getStripe(): Stripe {
  if (!_stripe) {
    const apiKey = process.env.STRIPE_SECRET_KEY;
    if (!apiKey) {
      throw new Error(
        "STRIPE_SECRET_KEY is not set. Add it to your .env or environment before using Stripe."
      );
    }
    _stripe = new Stripe(apiKey, {
      apiVersion: "2025-02-24.acacia" as any,
      typescript: true, 
    });
  }
  return _stripe;
}

/**
 * The Stripe client, exposed for callers that reach into `stripe.*` directly.
 * It is a Proxy over a lazily-created singleton, so importing `@/lib/stripe`
 * never throws — Stripe is only instantiated on first actual use.
 */
export const stripe = new Proxy({} as Stripe, {
  get(_target, prop: string | symbol, receiver) {
    const client = getStripe();
    const value = (client as any)[prop];
    return typeof value === "function" ? value.bind(client) : value;
  },
});

export async function createPaymentIntent(
  amount: number,
  currency: string = "usd",
  metadata: Record<string, string> = {}
) {
  return getStripe().paymentIntents.create({
    amount: Math.round(amount * 100), // Convert to cents
    currency,
    metadata,
    automatic_payment_methods: {
      enabled: true,
    },
  });
}

export async function retrievePaymentIntent(id: string) {
  return getStripe().paymentIntents.retrieve(id);
}

export function constructWebhookEvent(
  payload: string,
  signature: string
) {
  return getStripe().webhooks.constructEvent(
    payload,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET!
  );
}
