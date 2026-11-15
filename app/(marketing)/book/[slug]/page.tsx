import { notFound, permanentRedirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getLegacyRedirectMap } from "@/lib/legacy-redirects";
import { BookingForm, type BookingTrek, type SelectedAddon } from "@/components/booking/BookingForm";

export default async function BookingPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ travelers?: string; addons?: string; startDate?: string }>;
}) {
  const [{ slug }, query] = await Promise.all([params, searchParams]);

  // Only trips on sale can be booked.
  const trek = await prisma.trek.findUnique({
    where: { slug, status: "published" },
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
  if (!trek) {
    // A booking link to a retired trip (a "-package" page, for one) goes to the
    // booking page of the trip that replaced it, with the same choices.
    const moved = Object.entries(await getLegacyRedirectMap()).find(([oldPath]) => oldPath.split("/").pop() === slug.toLowerCase());
    const newSlug = moved?.[1].newPath.split("/").pop();
    if (newSlug && newSlug !== slug) {
      const qs = new URLSearchParams(Object.entries(query).filter((e): e is [string, string] => typeof e[1] === "string")).toString();
      permanentRedirect(`/book/${newSlug}${qs ? `?${qs}` : ""}`);
    }
    notFound();
  }

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
