import { PaymentProcessing } from "@/components/payment/PaymentProcessing";

export default async function PaymentProcessingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <PaymentProcessing bookingId={id} />;
}
