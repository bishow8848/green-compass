import { StripeCheckout } from "@/components/payment/StripeCheckout";

export default async function StripePaymentPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ clientSecret?: string }>;
}) {
  const [{ id }, query] = await Promise.all([params, searchParams]);
  return <StripeCheckout bookingId={id} initialClientSecret={query.clientSecret ?? null} />;
}
