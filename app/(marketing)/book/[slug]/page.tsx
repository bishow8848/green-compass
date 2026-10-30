import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { BookingForm, type BookingTrek, type SelectedAddon } from "@/components/booking/BookingForm";

export default async function BookingPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ travelers?: string; addons?: string; startDate?: string }>;
}) {
  const [{ slug }, query] = await Promise.all([params, searchParams]);

  const trek = await prisma.trek.findUnique({
    where: { slug },
    select: {
      id: true,
      title: true,
      slug: true,
      price: true,
      duration: true,
      difficulty: true,
      maxGroupSize: true,
      addons: true,
      category: { select: { slug: true, name: true } },
      pricingTiers: { select: { groupSize: true, pricePerPerson: true } },
      availableDates: {
        select: { startDate: true, seatsLeft: true },
        orderBy: { startDate: "asc" },
      },
    },
  });
  if (!trek) notFound();

  // Choices carried over from the trek page's pricing calculator.
  let initialAddons: SelectedAddon[] = [];
  if (query.addons) {
    try {
      const parsed = JSON.parse(decodeURIComponent(query.addons));
      if (Array.isArray(parsed)) initialAddons = parsed;
    } catch {}
  }

  return (
    <BookingForm
      // Dates become ISO strings, the shape the form works with.
      trek={JSON.parse(JSON.stringify(trek)) as BookingTrek}
      initialTravelers={Math.min(Math.max(parseInt(query.travelers || "1") || 1, 1), 20)}
      initialStartDate={query.startDate || ""}
      initialAddons={initialAddons}
    />
  );
}
