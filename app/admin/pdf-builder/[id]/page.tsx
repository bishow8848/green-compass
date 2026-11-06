import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { SITE_URL } from "@/lib/seo";
import { packageFromTrip } from "@/lib/pdf-package";
import { slimRouteGeoJson } from "@/lib/route-geojson";
import { trekCardSelect } from "@/components/trek/TrekCard";
import { PdfBuilder, type CoverChoice, type SimilarTrek } from "../_builder/builder";
import type { PdfRoute } from "../_builder/document";

/**
 * Customizes one package as a PDF for one customer. Only reads the package:
 * what the admin changes here lives in the browser and goes into the PDF
 * alone (lib/pdf-package.ts).
 */
export default async function PdfBuilderPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const trip = await prisma.trek.findUnique({
    where: { id },
    select: {
      title: true,
      slug: true,
      heroImage: true,
      duration: true,
      difficulty: true,
      region: true,
      bestTime: true,
      maxAltitude: true,
      overview: true,
      inclusions: true,
      exclusions: true,
      addons: true,
      customSections: true,
      sectionData: true,
      sectionOrder: true,
      similarTrekIds: true,
      waypoints: true,
      geoJsonUrl: true,
      geoJsonData: true,
      staticMapImage: true,
      regionRef: { select: { name: true } },
      category: { select: { slug: true } },
      itinerary: {
        orderBy: { dayNumber: "asc" },
        select: { dayNumber: true, title: true, description: true, elevation: true, accommodation: true },
      },
      pricingTiers: { select: { groupSize: true, pricePerPerson: true } },
      faqs: { select: { question: true, answer: true } },
      galleryImages: { select: { imageId: true, alt: true } },
    },
  });
  if (!trip) notFound();

  const categorySlug = trip.category?.slug || "treks";

  // The trip page shows only the similar treks that are published.
  const similarIds = parseArray(trip.similarTrekIds).filter((value): value is string => typeof value === "string");
  const similarRows =
    similarIds.length > 0
      ? await prisma.trek.findMany({ where: { id: { in: similarIds }, status: "published" }, select: trekCardSelect })
      : [];
  const similarTreks: SimilarTrek[] = similarRows.map((trek) => ({
    trek,
    href: `${SITE_URL}/${trek.category?.slug || categorySlug}/${trek.slug}`,
  }));

  const waypoints = parseArray(trip.waypoints);
  const hasRoute = !!(trip.geoJsonUrl || trip.geoJsonData || trip.staticMapImage);
  const route: PdfRoute | null = hasRoute
    ? {
        geoJsonUrl: trip.geoJsonUrl || undefined,
        geoJsonData: slimRouteGeoJson(trip.geoJsonData),
        // Saved by the admin's map editor, in the shape the map reads.
        waypoints: waypoints.length > 0 ? (waypoints as PdfRoute["waypoints"]) : undefined,
        itinerary: trip.itinerary.length > 0 ? trip.itinerary.map(({ dayNumber, title, elevation }) => ({ dayNumber, title, elevation })) : undefined,
        staticFallbackImage: trip.staticMapImage || undefined,
      }
    : null;

  const coverChoices: CoverChoice[] = [];
  for (const image of [{ imageId: trip.heroImage, alt: "Hero photo" }, ...trip.galleryImages]) {
    if (image.imageId && !coverChoices.some((choice) => choice.id === image.imageId)) {
      coverChoices.push({ id: image.imageId, alt: image.alt || trip.title });
    }
  }

  return (
    <div>
      <Link href="/admin/pdf-builder" className="mb-4 inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-700">
        <ArrowLeft className="h-3.5 w-3.5" /> Back to PDF Builder
      </Link>
      <PdfBuilder
        original={packageFromTrip(trip, { hasRoute, hasSimilarTreks: similarTreks.length > 0 })}
        source={{ slug: trip.slug, pageUrl: `${SITE_URL}/${categorySlug}/${trip.slug}` }}
        siteUrl={SITE_URL}
        route={route}
        similarTreks={similarTreks}
        coverChoices={coverChoices}
      />
    </div>
  );
}

function parseArray(json: string | null): unknown[] {
  if (!json) return [];
  try {
    const value = JSON.parse(json);
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}
