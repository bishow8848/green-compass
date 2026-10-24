import { PaymentSuccess } from "@/components/payment/PaymentSuccess";

export default async function PaymentSuccessPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ payment_intent?: string }>;
}) {
  const [{ id }, query] = await Promise.all([params, searchParams]);
  return <PaymentSuccess bookingId={id} paymentIntentId={query.payment_intent ?? null} />;
}
