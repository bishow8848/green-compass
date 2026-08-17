import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { SITE_URL } from "@/lib/seo";
import { FixDeparturePageShell, buildFixDepartureConfig } from "../fix-departure-shell";

export const revalidate = 86400; // refreshed on-demand after CMS edits

/** Pre-render fix-departure pages for every published trek (static + indexable). */
export async function generateStaticParams() {
  const treks = await prisma.trek.findMany({
    where: { status: "published", categoryId: { not: null } },
    select: { slug: true, category: { select: { slug: true } } },
  });
  return treks.flatMap((trek) =>
    trek.category ? [{ category: trek.category.slug, slug: trek.slug }] : []
  );
}

/** Lightweight trek lookup for the per-trek fix-departure page. */
async function getTrek(slug: string, categorySlug: string) {
  return prisma.trek.findFirst({
    where: { slug, status: "published", category: { slug: categorySlug } },
    select: {
      id: true,
      title: true,
      slug: true,
      heroImage: true,
      price: true,
      fixedDepartureDays: true,
      customStartDates: true,
      category: { select: { slug: true } },
      pricingTiers: { select: { groupSize: true, pricePerPerson: true } },
    },
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category: catSlug, slug } = await params;
  const trek = await getTrek(slug, catSlug);
  if (!trek) return { title: "Page Not Found" };

  const config = buildFixDepartureConfig(trek);
  const hasData = config.weekdays.length > 0 || config.customDates.length > 0;
  const title = hasData ? `${trek.title} – Fix Departure` : "Fix Departure";
  return {
    title,
    description: `Guaranteed fixed departure dates for ${trek.title}. Pick your preferred date — every trip listed runs as scheduled.`,
    alternates: { canonical: `${SITE_URL}/${catSlug}/${slug}/fix-departure` },
    openGraph: {
      title: `${title} | Mardi Treks`,
      description: `Guaranteed fixed departure dates for ${trek.title}.`,
      type: "website",
      url: `${SITE_URL}/${catSlug}/${slug}/fix-departure`,
      images: trek.heroImage
        ? [{ url: `https://res.cloudinary.com/dk7ggjvlw/image/upload/c_fill,w_1200,h_630,q_auto,f_auto/${trek.heroImage}`, width: 1200, height: 630 }]
        : undefined,
    },
  };
}

export default async function FixDeparturePage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category: catSlug, slug } = await params;
  const trek = await getTrek(slug, catSlug);
  if (!trek) notFound();

  const config = buildFixDepartureConfig(trek);
  const hasData = config.weekdays.length > 0 || config.customDates.length > 0;

  return (
    <FixDeparturePageShell
      badge="Fixed Departure"
      title={`${trek.title} – Fix Departure`}
      description={`Guaranteed departures for ${trek.title}. Pick your preferred date — every trip listed below runs as scheduled.`}
      heroImage={trek.heroImage}
      treks={hasData ? [config] : []}
    />
  );
}
