import React from "react";
import { CLOUDINARY_CLOUD_NAME } from "@/lib/cloudinary-url";
import { Clock, Gauge, Mountain, Calendar, Tag, MapPin } from "lucide-react";
import { Users, ArrowRight } from "lucide-react";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Star, ChevronDown, Search, X as XIcon } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { getCachedOrFetch, cacheKeys, CACHE_TTL } from "@/lib/redis";
import { TrekMapWrapper } from "@/components/map/TrekMapWrapper";
import { PricingCalculator } from "@/components/trek/PricingCalculator";
import { AltitudeProfile } from "@/components/trek/AltitudeProfile";
import { ReviewForm } from "@/components/trek/ReviewForm";
import { FixDepartureTable } from "@/components/trek/FixDepartureTable";
import { SectionNav } from "@/components/trek/SectionNav";
import GallerySection from "@/components/trek/GallerySection";
import { GalleryProvider } from "@/components/trek/GalleryContext";
import { ScrollToHash } from "@/components/trek/ScrollToHash";
import { ContactFormSection } from "@/components/home/ContactFormSection";
import { SearchBar } from "@/components/search/SearchBar";

import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { sanitizeRichText } from "@/lib/sanitize";
import { SITE_URL, brandedTitle, seoDescription, seoImageUrl, serializeJsonLd } from "@/lib/seo";

export const revalidate = 604800; // Trek detail cached 7 days; refreshed on-demand after CMS edits

async function getTrek(slug: string, categorySlug: string) {
  const cacheKey = cacheKeys.trek(`${categorySlug}:${slug}`);
  return getCachedOrFetch(
    cacheKey,
    async () => {
      const trek = await prisma.trek.findUnique({
        where: { slug, status: "published" },
        include: {
          itinerary: { orderBy: { dayNumber: "asc" } },
          pricingTiers: true,
          availableDates: true,
          faqs: true,
          reviews: { where: { approved: true } },
          category: true,
          galleryImages: true,
        },
      });
      if (!trek) return null;
      if (trek.category?.slug !== categorySlug) return null;
      return trek;
    },
    CACHE_TTL.MODERATE
  );
}

export async function generateStaticParams() {
  const treks = await prisma.trek.findMany({
    where: { status: "published", categoryId: { not: null } },
    select: { slug: true, category: { select: { slug: true } } },
  });
  return treks.flatMap((trek) =>
    trek.category ? [{ category: trek.category.slug, slug: trek.slug }] : []
  );
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }): Promise<Metadata> {
  const { category: catSlug, slug } = await params;
  const trek = await getTrek(slug, catSlug);
  if (!trek) return {};
  const title = trek.metaTitle || trek.title;
  const socialTitle = brandedTitle(title).absolute;
  const description = seoDescription(
    trek.metaDescription || trek.overview,
    `Plan the ${trek.title} with local Nepal trekking experts, including itinerary, difficulty, price and practical trip details.`
  );
  const trekImage = seoImageUrl(trek.heroImage);
  return {
    title: { absolute: socialTitle },
    description,
    keywords: trek.keywords || undefined,
    alternates: { canonical: `${SITE_URL}/${catSlug}/${slug}` },
    openGraph: {
      title: socialTitle,
      description,
      type: "article",
      url: `${SITE_URL}/${catSlug}/${slug}`,
      images: trekImage
        ? [{ url: trekImage, width: 1200, height: 630, alt: `${trek.title} in Nepal` }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: trekImage
        ? [trekImage]
        : undefined,
    },
  };
}

function parseElevation(elevation: string): number {
  const parsed = parseFloat(elevation.replace(/[,m\s]/g, ""));
  return isNaN(parsed) ? 0 : parsed;
}

function getMinPrice(tiers: any[]): number {
  if (!tiers || tiers.length === 0) return 0;
  return Math.min(...tiers.map((t: any) => t.pricePerPerson || 0));
}

function getMaxAltitude(itinerary: any[]): number {
  let max = 0;
  for (const day of itinerary) {
    if (day.elevation) {
      const val = parseElevation(day.elevation);
      if (val > max) max = val;
    }
  }
  return max;
}

function getAvgRating(reviews: any[]): number {
  if (!reviews.length) return 0;
  const approved = reviews.filter((r: any) => r.approved);
  if (!approved.length) return 0;
  return approved.reduce((a: number, r: any) => a + r.rating, 0) / approved.length;
}

export default async function ProductDetailPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category: catSlug, slug } = await params;
  const trek = await getTrek(slug, catSlug);
  if (!trek) notFound();

  // Normalize data
  const itinerary = trek.itinerary || [];
  const pricingTiers = trek.pricingTiers || [];
  const faqs = trek.faqs || [];
  const reviews = trek.reviews || [];
  const rawInclusions = (trek.inclusions as string) || "";
  const rawExclusions = (trek.exclusions as string) || "";
  // Detect legacy format (JSON array string like `["item1","item2"]`) vs new HTML content
  const isLegacyInclusions = rawInclusions.trim().startsWith("[") && rawInclusions.trim().endsWith("]");
  const isLegacyExclusions = rawExclusions.trim().startsWith("[") && rawExclusions.trim().endsWith("]");
  const inclusions = isLegacyInclusions ? JSON.parse(rawInclusions) : rawInclusions;
  const exclusions = isLegacyExclusions ? JSON.parse(rawExclusions) : rawExclusions;
  const waypoints = (typeof trek.waypoints === "string" ? JSON.parse(trek.waypoints) : trek.waypoints) || [];
  const addons = (typeof trek.addons === "string" ? JSON.parse(trek.addons) : trek.addons) || [];
  const customSections = (typeof trek.customSections === "string" ? JSON.parse(trek.customSections) : trek.customSections) || [];
  const sectionData: Record<string, { heading?: string; description?: string }> =
    typeof (trek as any).sectionData === "string" ? JSON.parse((trek as any).sectionData) : {};

  // Fix Departure — recurring weekly days + custom start dates
  const fixedDepartureDays: string[] = (() => {
    try {
      const v = JSON.parse((trek as any).fixedDepartureDays || "[]");
      return Array.isArray(v) ? v.filter((d: any) => typeof d === "string") : [];
    } catch {
      return [];
    }
  })();
  const customStartDates: string[] = (() => {
    try {
      const v = JSON.parse((trek as any).customStartDates || "[]");
      return Array.isArray(v) ? v.filter((d: any) => typeof d === "string") : [];
    } catch {
      return [];
    }
  })();

  // Section ordering — parse from saved data, fall back to default
  const savedSectionOrder: string[] = (trek as any).sectionOrder
    ? (() => { try { return JSON.parse((trek as any).sectionOrder); } catch { return []; } })()
    : [];
  // Map admin section IDs to client section IDs
  const clientSectionIds = ["overview", "itinerary", "altitude", "inEx", "pricing", "fixedDepartures", "addons", "map", "faqs", "reviews", "gallery", "contact"];
  const sectionOrderList = savedSectionOrder.length > 0
    ? savedSectionOrder
    : clientSectionIds;
  const sectionOrderMap: Record<string, number> = {};
  sectionOrderList.forEach((id, i) => { sectionOrderMap[id] = i; });

  const minPrice = getMinPrice(pricingTiers);
  const offerLowPrice = minPrice > 0 ? minPrice : trek.price;
  const offerHighPrice = Math.max(offerLowPrice, trek.price);
  const maxAltitude = trek.maxAltitude || getMaxAltitude(itinerary);
  const avgRating = getAvgRating(reviews);

  // Start independent reads together to avoid server-side request waterfalls.
  const homeSettingsPromise = getCachedOrFetch(
    cacheKeys.homeSettings,
    () => prisma.homePageSettings.findUnique({ where: { id: "home-settings" } }),
    CACHE_TTL.MODERATE
  );

  let similarTreksPromise: Promise<any[]> = Promise.resolve([]);
  const rawSimilarIds = (trek as any).similarTrekIds;
  if (rawSimilarIds) {
    try {
      const ids = JSON.parse(rawSimilarIds);
      if (Array.isArray(ids) && ids.length > 0) {
        similarTreksPromise = getCachedOrFetch(
          `treks:similar:${trek.id}`,
          () => prisma.trek.findMany({
            where: { id: { in: ids }, status: "published" },
            select: {
              id: true, title: true, slug: true, heroImage: true,
              difficulty: true, duration: true, price: true,
              category: { select: { slug: true } },
            },
          }),
          CACHE_TTL.MODERATE
        );
      }
    } catch {}
  }

  const [homeSettingsForContact, similarTreks] = await Promise.all([
    homeSettingsPromise,
    similarTreksPromise,
  ]);
  const contactHeading = (homeSettingsForContact as any)?.contactHeading || "Ready for Your Himalayan Adventure?";
  const contactDescription = (homeSettingsForContact as any)?.contactDescription || null;
  const contactInfoCards: { title: string; description: string }[] = (homeSettingsForContact as any)?.contactInfoCards
    ? JSON.parse((homeSettingsForContact as any).contactInfoCards)
    : [];

  const difficultyColorMap: Record<string, { badge: string; dot: string }> = {
    easy: { badge: "bg-[#EEF3E8] text-[#4C6B45]", dot: "bg-[#6B8E5F]" },
    moderate: { badge: "bg-[#FBF0DE] text-[#9A6A1F]", dot: "bg-[#DB8A3A]" },
    challenging: { badge: "bg-[#FBE7DD] text-[#A24E2E]", dot: "bg-[#C25B36]" },
    difficult: { badge: "bg-[#F8DEDE] text-[#9C3939]", dot: "bg-[#B23F3F]" },
    extreme: { badge: "bg-[#EBE1F2] text-[#6B4C8A]", dot: "bg-[#7E5AA3]" },
  };

  return (
    <GalleryProvider>
      {/* Product schema for Google — uses refined Product type */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd({
            "@context": "https://schema.org",
            "@type": "Product",
            "@id": `${SITE_URL}/${catSlug}/${slug}#product`,
            name: trek.title,
            description: trek.metaDescription || trek.overview?.replace(/<[^>]*>/g, "").slice(0, 300),
            image: [
              ...(trek.heroImage
                ? [`https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${trek.heroImage}`]
                : []),
              ...(trek.galleryImages || []).map(
                (g: any) => `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${g.imageId}`
              ),
            ],
            category: trek.category?.name || undefined,
            brand: {
              "@type": "Brand",
              name: "Green Compass Treks",
            },
            provider: {
              "@id": `${SITE_URL}/#organization`,
            },
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "USD",
              lowPrice: offerLowPrice,
              highPrice: offerHighPrice,
              offerCount: pricingTiers.length || 1,
              availability: "https://schema.org/InStock",
              url: `${SITE_URL}/${catSlug}/${slug}`,
            },
            ...(avgRating > 0
              ? {
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: avgRating.toFixed(1),
                    reviewCount: reviews.filter((r: any) => r.approved).length,
                    bestRating: "5",
                  },
                }
              : {}),
            ...(reviews.filter((r: any) => r.approved).length > 0
              ? {
                  review: reviews
                    .filter((r: any) => r.approved)
                    .slice(0, 10)
                    .map((r: any) => ({
                      "@type": "Review",
                      author: { "@type": "Person", name: r.author },
                      reviewRating: {
                        "@type": "Rating",
                        ratingValue: r.rating,
                        bestRating: "5",
                      },
                      reviewBody: r.text?.slice(0, 500),
                      datePublished: r.createdAt || undefined,
                    })),
                }
              : {}),
          }),
        }}
      />

      {/* BreadcrumbList schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: trek.category?.name || "Treks", item: `${SITE_URL}/${catSlug}` },
              { "@type": "ListItem", position: 3, name: trek.title, item: `${SITE_URL}/${catSlug}/${slug}` },
            ],
          }),
        }}
      />

      {/* TouristTrip schema for rich itinerary data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "@id": `${SITE_URL}/${catSlug}/${slug}#trip`,
            name: trek.title,
            description: trek.metaDescription || trek.overview?.replace(/<[^>]*>/g, "").slice(0, 200),
            url: `${SITE_URL}/${catSlug}/${slug}`,
            provider: {
              "@id": `${SITE_URL}/#organization`,
            },
            // Trip length as an ISO 8601 duration — the single most useful
            // property on a TouristTrip and the one that was missing, so "how
            // many days is X" queries had nothing structured to match against.
            ...(trek.duration ? { duration: `P${trek.duration}D` } : {}),
            ...(trek.region
              ? { arrivalLocation: { "@type": "Place", name: trek.region } }
              : {}),
            offers: {
              "@type": "Offer",
              price: offerLowPrice,
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: `${SITE_URL}/${catSlug}/${slug}`,
            },
            itinerary: itinerary?.map((day: any) => ({
              "@type": "Itinerary",
              name: `Day ${day.dayNumber}: ${day.title}`,
              description: day.description?.replace(/<[^>]*>/g, "").slice(0, 200),
            })),
          }),
        }}
      />

      {/* FAQPage schema for SEO */}
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq: any) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer?.slice(0, 500),
                },
              })),
            }),
          }}
        />
      )}

      {/* ================================================================
          HERO SECTION — Full-screen parallax with search
      ================================================================ */}
      <section id="hero" className="relative flex h-screen w-full items-center overflow-hidden">
        {/* Background image with parallax */}
        {trek.heroImage ? (
          <Image
            src={`https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_1920,q_auto,f_auto/${trek.heroImage}`}
            alt={`${trek.title} in Nepal`}
            fill
            sizes="100vw"
            preload
            className="hero-parallax object-cover"
          />
        ) : (
          <div className="hero-parallax absolute inset-0 bg-gradient-to-br from-secondary-dark via-primary-dark/30 to-gray-900" />
        )}
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(70, 55, 40, 0.45)", mixBlendMode: "multiply" as any }}
        />

        {/* Hero content — aligned with layout max-width */}
        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-screen-2xl px-3 sm:px-4 lg:px-6">
            <div style={{ maxWidth: "800px" }}>
              <Link
                href={`/${catSlug}`}
                className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                ← Back to {trek.category?.name || "All"}
              </Link>
              <h1
                className="font-serif text-5xl leading-tight sm:text-6xl md:text-7xl"
                style={{ color: "#ffffff", marginBottom: "1.5rem" }}
              >
                {trek.title}
              </h1>
              <p
                className="mb-6 text-lg sm:text-xl"
                style={{ color: "#e0e0e0" }}
              >
                {trek.overview ? trek.overview.replace(/<[^>]*>/g, "").slice(0, 120) : "A journey through the heart of the Himalayas."}
              </p>

              {/* Breadcrumbs */}
              <nav className="mb-6 flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                <Link href="/" className="transition-colors hover:text-white">Home</Link>
                <span>/</span>
                <Link href={`/${catSlug}`} className="transition-colors hover:text-white">{trek.category?.name || "All"}</Link>
                <span>/</span>
                <span style={{ color: "#ffffff" }}>{trek.title}</span>
              </nav>

              {/* Search bar with autocomplete — like the homepage */}
              <div style={{ maxWidth: "420px" }}>
                <SearchBar />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          CONTENT WRAPPER
      ================================================================ */}
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-4 lg:px-6 py-8 pb-24">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* ── MAIN CONTENT ── */}
          <div className="min-w-0 flex flex-col space-y-0 lg:col-span-2">
            {/* Pricing calculator at the top on mobile (hidden on desktop) */}
            <div className="lg:hidden mb-8">
              <PricingCalculator
                trekSlug={trek.slug}
                basePrice={trek.price}
                duration={trek.duration}
                pricingTiers={pricingTiers}
                addons={addons}
                maxGroupSize={trek.maxGroupSize}
              />
            </div>
            {/* Sections rendered in saved order */}
            {(() => {
              const sectionMap: Record<string, () => React.ReactNode> = {};
              sectionMap["overview"] = () => <section id="overview" className="py-10 sm:py-12">
  <h2
    className="mb-10 text-3xl font-bold sm:text-4xl"
    style={{ color: "var(--color-secondary)" }}
  >
    Trip Overview
  </h2>

  {/* Single unified stats grid */}
  <div
    className="mb-8 grid grid-cols-1 divide-y rounded-3xl border sm:grid-cols-3 sm:divide-x sm:divide-y-0 [&>*:nth-child(4)]:sm:border-t [&>*:nth-child(5)]:sm:border-t [&>*:nth-child(6)]:sm:border-t"
    style={{
      backgroundColor: "var(--color-surface-alt)",
      borderColor: "var(--color-border)",
    }}
  >
    <div className="flex items-center gap-4 p-6" style={{ borderColor: "var(--color-border)" }}>
      <Clock className="h-6 w-6 shrink-0" style={{ color: "var(--color-primary)" }} />
      <div>
        <span
          className="block text-xs font-semibold uppercase tracking-wider"
          style={{ color: "var(--color-primary)" }}
        >
          Duration
        </span>
        <span className="text-xl font-bold" style={{ color: "var(--color-secondary)" }}>
          {trek.duration} Days
        </span>
      </div>
    </div>

    <div className="flex items-center gap-4 p-6" style={{ borderColor: "var(--color-border)" }}>
      <Gauge className="h-6 w-6 shrink-0" style={{ color: "var(--color-primary)" }} />
      <div>
        <span
          className="block text-xs font-semibold uppercase tracking-wider"
          style={{ color: "var(--color-primary)" }}
        >
          Difficulty
        </span>
        <span className="text-xl font-bold" style={{ color: "var(--color-secondary)" }}>
          {trek.difficulty.charAt(0).toUpperCase() + trek.difficulty.slice(1)}
        </span>
      </div>
    </div>

    <div className="flex items-center gap-4 p-6" style={{ borderColor: "var(--color-border)" }}>
      <Mountain className="h-6 w-6 shrink-0" style={{ color: "var(--color-primary)" }} />
      <div>
        <span
          className="block text-xs font-semibold uppercase tracking-wider"
          style={{ color: "var(--color-primary)" }}
        >
          Max Altitude
        </span>
        <span className="text-xl font-bold" style={{ color: "var(--color-secondary)" }}>
          {maxAltitude > 0 ? `${maxAltitude.toLocaleString()}m` : "\u2014"}
        </span>
      </div>
    </div>

    <div className="flex items-center gap-4 p-6" style={{ borderColor: "var(--color-border)" }}>
      <Calendar className="h-6 w-6 shrink-0" style={{ color: "var(--color-primary)" }} />
      <div>
        <span
          className="block text-xs font-semibold uppercase tracking-wider"
          style={{ color: "var(--color-primary)" }}
        >
          Best Time
        </span>
        <span className="text-xl font-bold" style={{ color: "var(--color-secondary)" }}>
          {trek.bestTime || "\u2014"}
        </span>
      </div>
    </div>

    <div className="flex items-center gap-4 p-6" style={{ borderColor: "var(--color-border)" }}>
      <Tag className="h-6 w-6 shrink-0" style={{ color: "var(--color-primary)" }} />
      <div>
        <span
          className="block text-xs font-semibold uppercase tracking-wider"
          style={{ color: "var(--color-primary)" }}
        >
          Min Price
        </span>
        <span className="text-xl font-bold" style={{ color: "var(--color-secondary)" }}>
          {minPrice > 0 ? `$${minPrice.toLocaleString()}` : "\u2014"}
        </span>
      </div>
    </div>

    <div className="flex items-center gap-4 p-6" style={{ borderColor: "var(--color-border)" }}>
      <MapPin className="h-6 w-6 shrink-0" style={{ color: "var(--color-primary)" }} />
      <div>
        <span
          className="block text-xs font-semibold uppercase tracking-wider"
          style={{ color: "var(--color-primary)" }}
        >
          Region
        </span>
        <span className="text-xl font-bold" style={{ color: "var(--color-secondary)" }}>
          {trek.region || "\u2014"}
        </span>
      </div>
    </div>
  </div>

  {/* Overview description */}
  {trek.overview && (
    <div
      className="rich-text w-full text-base leading-relaxed [&_p:last-child]:mb-0"
      style={{ color: "var(--color-text)" }}
      dangerouslySetInnerHTML={{ __html: trek.overview }}
    />
  )}
              </section>;
              sectionMap["itinerary"] = () => itinerary.length > 0 ? <section id="itinerary" className="py-10 sm:py-12">
    <h2
      className="mb-2 text-2xl font-bold sm:text-3xl"
      style={{ color: "var(--color-secondary)" }}
    >
      {sectionData.itinerary?.heading || "Itinerary"}
    </h2>
    {sectionData.itinerary?.description && (
      <p className="mb-10 text-sm" style={{ color: "var(--color-text-muted)" }}>
        {sectionData.itinerary.description}
      </p>
    )}

    <div className="relative">
      {/* connecting line running behind the day markers */}
      <div
        className="absolute left-[19px] top-2 bottom-2 w-px"
        style={{ backgroundColor: "var(--color-border)" }}
        aria-hidden="true"
      />

      <div className="space-y-3">
        {itinerary.map((day: any, index: number) => (
          <details
            key={day.id ?? day.dayNumber}
            className="group relative rounded-2xl border transition-colors"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
            open={index === 0}
          >
            <summary
              className="flex cursor-pointer list-none items-start gap-4 rounded-2xl px-4 py-4 marker:content-none [&::-webkit-details-marker]:hidden"
            >
              {/* day marker */}
              <span
                className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-bold tabular-nums"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                  color: "var(--color-text-muted)",
                }}
              >
                <span className="group-open:hidden">{day.dayNumber}</span>
                <span
                  className="hidden h-2.5 w-2.5 rounded-full group-open:block"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />
              </span>

              <div className="flex-1 min-w-0 pt-1.5">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <span
                      className="text-[11px] font-semibold uppercase tracking-wide"
                      style={{ color: "var(--color-primary)" }}
                    >
                      Day {day.dayNumber}
                    </span>
                    <h3
                      className="text-base font-semibold leading-snug"
                      style={{ color: "var(--color-foreground)" }}
                    >
                      {day.title}
                    </h3>
                  </div>
                  <ChevronDown
                    className="mt-1 h-4 w-4 shrink-0 transition-transform duration-300 group-open:rotate-180"
                    style={{ color: "var(--color-text-muted)" }}
                  />
                </div>
              </div>
            </summary>

            <div
              className="ml-14 mr-4 mb-5 border-t pt-4"
              style={{ borderColor: "var(--color-border)" }}
            >
              {day.description ? (
                <div className="rich-text text-sm leading-relaxed" style={{ color: "var(--color-text)" }} dangerouslySetInnerHTML={{ __html: day.description }} />
              ) : (
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>No description available</p>
              )}
              {(day.elevation || day.accommodation) && (
                <div
                  className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {day.elevation && (
                    <span className="flex items-center gap-1.5">
                      <span
                        className="h-1 w-1 rounded-full"
                        style={{ backgroundColor: "var(--color-primary-light)" }}
                      />
                      Elevation: {day.elevation}
                    </span>
                  )}
                  {day.accommodation && (
                    <span className="flex items-center gap-1.5">
                      <span
                        className="h-1 w-1 rounded-full"
                        style={{ backgroundColor: "var(--color-primary-light)" }}
                      />
                      Accommodation: {day.accommodation}
                    </span>
                  )}
                </div>
              )}
            </div>
          </details>
        ))}
      </div>
    </div>
  </section> : null;
              sectionMap["altitude"] = () => itinerary.length > 0 ? <section id="altitude" className="py-10 sm:py-12"><AltitudeProfile itinerary={itinerary} /></section> : null;
sectionMap["inEx"] = () => {
  const hasInclusions = Array.isArray(inclusions) ? inclusions.length > 0 : (typeof inclusions === "string" && inclusions.trim().length > 0);
  const hasExclusions = Array.isArray(exclusions) ? exclusions.length > 0 : (typeof exclusions === "string" && exclusions.trim().length > 0);
  return (hasInclusions || hasExclusions) ? <section id="inEx" className="py-10 sm:py-12">
    <div className="mb-12">
      <h2
        className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl"
        style={{ color: "var(--color-secondary)" }}
      >
        {sectionData.inEx?.heading || "Inclusions & Exclusions"}
      </h2>
      {sectionData.inEx?.description && (
        <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
          {sectionData.inEx.description}
        </p>
      )}
    </div>

    <div className="space-y-8">
      {hasInclusions && (
        <div
          className="rounded-3xl border p-7 transition-shadow duration-300 hover:shadow-lg sm:p-9"
          style={{
            backgroundColor: "var(--color-surface-alt)",
            borderColor: "var(--color-border)",
          }}
        >
          <div className="mb-7 flex items-center gap-3">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: "color-mix(in srgb, var(--color-success) 15%, transparent)" }}
            >
              <Check className="h-4 w-4" strokeWidth={2.5} style={{ color: "var(--color-success)" }} />
            </span>
            <h3 className="text-base font-bold tracking-tight sm:text-lg" style={{ color: "var(--color-secondary)" }}>
              What&apos;s Included
            </h3>
          </div>

          {Array.isArray(inclusions) ? (
            <ul className="space-y-1">
              {inclusions.map((item, i) => (
                <li
                  key={i}
                  className="group/item flex items-start gap-3.5 rounded-xl px-3 py-3.5 transition-colors duration-200 hover:bg-black/[0.03] dark:hover:bg-white/[0.04]"
                >
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-hover/item:scale-110"
                    style={{ backgroundColor: "color-mix(in srgb, var(--color-success) 12%, transparent)" }}
                  >
                    <Check className="h-3 w-3" strokeWidth={3} style={{ color: "var(--color-success)" }} />
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: "var(--color-text)" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div
              className="text-sm leading-relaxed [&_ul]:space-y-3.5 [&_ul]:list-none [&_li]:relative [&_li]:pl-6 [&_li]:before:content-['✓'] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:text-emerald-500 [&_li]:before:font-bold"
              style={{ color: "var(--color-text)" }}
              dangerouslySetInnerHTML={{ __html: inclusions }}
            />
          )}
        </div>
      )}

      {hasExclusions && (
        <div
          className="rounded-3xl border p-7 transition-shadow duration-300 hover:shadow-lg sm:p-9"
          style={{
            backgroundColor: "var(--color-surface-alt)",
            borderColor: "var(--color-border)",
          }}
        >
          <div className="mb-7 flex items-center gap-3">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: "color-mix(in srgb, var(--color-error) 15%, transparent)" }}
            >
              <XIcon className="h-4 w-4" strokeWidth={2.5} style={{ color: "var(--color-error)" }} />
            </span>
            <h3 className="text-base font-bold tracking-tight sm:text-lg" style={{ color: "var(--color-secondary)" }}>
              What&apos;s Excluded
            </h3>
          </div>

          {Array.isArray(exclusions) ? (
            <ul className="space-y-1">
              {exclusions.map((item, i) => (
                <li
                  key={i}
                  className="group/item flex items-start gap-3.5 rounded-xl px-3 py-3.5 transition-colors duration-200 hover:bg-black/[0.03] dark:hover:bg-white/[0.04]"
                >
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-hover/item:scale-110"
                    style={{ backgroundColor: "color-mix(in srgb, var(--color-error) 12%, transparent)" }}
                  >
                    <XIcon className="h-3 w-3" strokeWidth={3} style={{ color: "var(--color-error)" }} />
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: "var(--color-text)" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div
              className="text-sm leading-relaxed [&_ul]:space-y-3.5 [&_ul]:list-none [&_li]:relative [&_li]:pl-6 [&_li]:before:content-['✗'] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:text-red-400 [&_li]:before:font-bold"
              style={{ color: "var(--color-text)" }}
              dangerouslySetInnerHTML={{ __html: exclusions }}
            />
          )}
        </div>
      )}
    </div>
  </section> : null;
};
             sectionMap["pricing"] = () => pricingTiers.length > 0 ? <section id="pricing" className="py-10 sm:py-12">
  <h2 className="mb-2 text-2xl font-bold" style={{ color: "var(--color-secondary)" }}>{sectionData.pricing?.heading || "Pricing"}</h2>
  <p className="mb-8 text-sm" style={{ color: "var(--color-text-muted)" }}>{sectionData.pricing?.description || "Per-person pricing based on group size."}</p>
  <div className="overflow-hidden rounded-2xl border" style={{ borderColor: "var(--color-border)" }}>
    <div className="hidden sm:grid sm:grid-cols-[1fr_auto_auto]" style={{ backgroundColor: "var(--color-surface-alt)" }}>
      <span className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-secondary)" }}>Group Size</span>
      <span className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-secondary)" }}>Price Per Person</span>
      <span className="w-28 px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-secondary)" }}></span>
    </div>
    {pricingTiers.map((tier: any, i: number) => (
      <div key={i} className="flex flex-col gap-2 border-t px-5 py-4 sm:grid sm:grid-cols-[1fr_auto_auto] sm:items-center sm:gap-0" style={{ borderColor: "var(--color-border)" }}>
        <div className="flex items-center justify-between sm:block">
          <span className="flex items-center gap-1.5 text-sm sm:gap-1.5" style={{ color: "var(--color-text)" }}>
            <Users className="h-3.5 w-3.5 shrink-0" style={{ color: "var(--color-primary)" }} />
            {tier.groupSize} pax
          </span>
          {/* Show price inline on mobile, move to own cell on desktop */}
          <span className="text-right text-sm sm:hidden" style={{ color: "var(--color-text-muted)" }}>
            <span className="text-slate-400 line-through">${(Math.round(tier.pricePerPerson * 1.1)).toLocaleString()}</span>
            &nbsp;
            <span className="font-semibold" style={{ color: "var(--color-primary)" }}>
              ${tier.pricePerPerson.toLocaleString()}
            </span>
          </span>
        </div>
        <div className="flex items-center justify-end sm:px-5">
          <span className="hidden whitespace-nowrap text-right text-sm sm:block" style={{ color: "var(--color-text-muted)" }}>
            <span className="text-slate-400 line-through">${(Math.round(tier.pricePerPerson * 1.1)).toLocaleString()}</span>
            &nbsp;
            <span className="font-semibold" style={{ color: "var(--color-primary)" }}>
              ${tier.pricePerPerson.toLocaleString()}
            </span>
          </span>
        </div>
        <div className="flex justify-end sm:pr-5">
          <a
            href={`/book/${slug}?travelers=${tier.groupSize.split('-').pop()?.trim() || tier.groupSize}`}
            className="inline-flex items-center gap-1 rounded-full px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            Book Now
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    ))}
  </div>
</section> : null;
sectionMap["fixedDepartures"] = () => (fixedDepartureDays.length > 0 || customStartDates.length > 0) ? (
  <section id="fixedDepartures" className="py-10 sm:py-12">
    <FixDepartureTable
      treks={[{
        id: trek.id,
        title: trek.title,
        slug: trek.slug,
        categorySlug: catSlug,
        heroImage: trek.heroImage,
        minPrice,
        pricingTiers,
        weekdays: fixedDepartureDays,
        customDates: customStartDates,
      }]}
      showSortFilter
      heading={sectionData.fixedDepartures?.heading || "Fix Departure"}
      description={sectionData.fixedDepartures?.description}
    />
  </section>
) : null;
sectionMap["addons"] = () => addons.length > 0 ? <section id="addons" className="py-10 sm:py-12">
  <h2 className="mb-2 text-2xl font-bold" style={{ color: "var(--color-secondary)" }}>{sectionData.addons?.heading || "Add-ons"}</h2>
  <p className="mb-8 text-sm" style={{ color: "var(--color-text-muted)" }}>{sectionData.addons?.description || "Optional extras to enhance your experience."}</p>
  <div className="overflow-hidden rounded-2xl border" style={{ borderColor: "var(--color-border)" }}>
    <div className="hidden sm:grid sm:grid-cols-[1fr_1.5fr_auto]" style={{ backgroundColor: "var(--color-surface-alt)" }}>
      <span className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-secondary)" }}>Add-on</span>
      <span className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-secondary)" }}>Description</span>
      <span className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-secondary)" }}>Price</span>
    </div>
    {addons.map((addon: any, i: number) => (
      <div key={i} className="flex flex-col gap-1.5 border-t px-5 py-4 sm:grid sm:grid-cols-[1fr_1.5fr_auto] sm:items-center sm:gap-0" style={{ borderColor: "var(--color-border)" }}>
        <div className="flex flex-wrap items-start justify-between gap-x-2 gap-y-1 sm:block sm:self-start sm:pt-1">
          <span className="text-sm font-semibold sm:px-5" style={{ color: "var(--color-secondary)" }}>{addon.title}</span>
          {/* Mobile: price shown inline after title */}
          <span className="text-right text-sm sm:hidden" style={{ color: "var(--color-text-muted)" }}>
            <span className="text-slate-400 line-through">${(Math.round((addon.pricePerUnit || 0) * 1.1)).toLocaleString()}</span>
            &nbsp;
            <span className="font-bold" style={{ color: "var(--color-primary)" }}>
              ${addon.pricePerUnit?.toLocaleString()}
            </span>
            <span className="font-normal" style={{ color: "var(--color-text-muted)" }}> / {addon.unit || "person"}</span>
          </span>
        </div>
        {/* Description column */}
        <div className="sm:px-5">
          <span className="text-sm" style={{ color: "var(--color-text-muted)" }}>{addon.description || "\u2014"}</span>
        </div>
        {/* Price column (desktop only) */}
        <div className="flex items-start justify-end whitespace-nowrap sm:px-5">
          <span className="hidden text-right text-sm sm:block" style={{ color: "var(--color-text-muted)" }}>
            <span className="text-slate-400 line-through">${(Math.round((addon.pricePerUnit || 0) * 1.1)).toLocaleString()}</span>
            &nbsp;
            <span className="font-bold" style={{ color: "var(--color-primary)" }}>
              ${addon.pricePerUnit?.toLocaleString()}
            </span>
            <span className="font-normal" style={{ color: "var(--color-text-muted)" }}> / {addon.unit || "person"}</span>
          </span>
        </div>
      </div>
    ))}
  </div>
</section> : null;
// With no route file uploaded, TrekMap shows the admin's static map image
// instead of the interactive map — waypoint pins aren't rendered on it.
const mapIsImageOnly = !trek.geoJsonUrl && !trek.geoJsonData && !!trek.staticMapImage;
sectionMap["map"] = () => <section id="map" className="py-10 sm:py-12">
  <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
    <div>
      <h2 className="mb-2 text-2xl font-bold" style={{ color: "var(--color-secondary)" }}>{sectionData.map?.heading || "Route Map"}</h2>
      <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>{sectionData.map?.description || "Explore the terrain map showing the trek route."}</p>
    </div>
    {waypoints?.length > 0 && !mapIsImageOnly && (
      <span
        className="flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold"
        style={{ borderColor: "var(--color-border)", color: "var(--color-primary)", backgroundColor: "var(--color-surface-alt)" }}
      >
        <MapPin className="h-3.5 w-3.5" />
        {waypoints.length} waypoints
      </span>
    )}
  </div>

  <div className="overflow-hidden rounded-3xl border" style={{ borderColor: "var(--color-border)" }}>
    <TrekMapWrapper
      geoJsonUrl={trek.geoJsonUrl || undefined}
      geoJsonData={trek.geoJsonData || null}
      waypoints={waypoints?.length > 0 ? waypoints : undefined}
      itinerary={itinerary?.length > 0 ? itinerary : undefined}
      staticFallbackImage={trek.staticMapImage || undefined}
    />
  </div>
</section>;
sectionMap["faqs"] = () => faqs.length > 0 ? (
  <FAQAccordion
    items={faqs.map((f: any) => ({ question: f.question, answer: f.answer }))}
    heading={sectionData.faqs?.heading || "Frequently Asked Questions"}
    description={sectionData.faqs?.description}
    id="faqs"
    contained={false}
    className="py-10 sm:py-12"
  />
) : null;

sectionMap["reviews"] = () => {
  const approvedReviews = reviews.filter((r: any) => r.approved);
  const ratingCounts = [5, 4, 3, 2, 1].map(
    (star) => approvedReviews.filter((r: any) => r.rating === star).length
  );
  const maxCount = Math.max(...ratingCounts, 1);

  return <section id="reviews" className="py-10 sm:py-12">
    <h2 className="mb-6 text-2xl font-bold" style={{ color: "var(--color-secondary)" }}>Guest Reviews</h2>

    {avgRating > 0 && (
      <div
        className="mb-8 grid grid-cols-1 gap-8 rounded-3xl border p-8 sm:grid-cols-[auto_1fr] sm:items-center"
        style={{ backgroundColor: "var(--color-surface-alt)", borderColor: "var(--color-border)" }}
      >
        <div className="flex flex-col items-center gap-2 sm:items-start sm:border-r sm:pr-8" style={{ borderColor: "var(--color-border)" }}>
          <span className="text-5xl font-bold leading-none" style={{ color: "var(--color-secondary)" }}>
            {avgRating.toFixed(1)}
          </span>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4"
                style={{
                  fill: i < Math.round(avgRating) ? "var(--color-warning)" : "var(--color-border)",
                  color: i < Math.round(avgRating) ? "var(--color-warning)" : "var(--color-border)",
                }}
              />
            ))}
          </div>
          <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            {approvedReviews.length} reviews
          </span>
        </div>

        <div className="space-y-1.5">
          {ratingCounts.map((count, idx) => {
            const star = 5 - idx;
            const pct = (count / maxCount) * 100;
            return (
              <div key={star} className="flex items-center gap-3">
                <span className="w-3 shrink-0 text-xs font-medium" style={{ color: "var(--color-text-muted)" }}>{star}</span>
                <Star className="h-3 w-3 shrink-0" style={{ fill: "var(--color-warning)", color: "var(--color-warning)" }} />
                <div className="h-1.5 flex-1 overflow-hidden rounded-full" style={{ backgroundColor: "var(--color-border)" }}>
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${pct}%`, backgroundColor: "var(--color-warning)" }}
                  />
                </div>
                <span className="w-6 shrink-0 text-right text-xs" style={{ color: "var(--color-text-muted)" }}>{count}</span>
              </div>
            );
          })}
        </div>
      </div>
    )}

    {approvedReviews.length > 0 && (
      <div className="grid gap-4 sm:grid-cols-2">
        {approvedReviews.map((review: any, i: number) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-2xl border p-5 pl-6"
            style={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-border)" }}
          >
            <span
              className="absolute left-0 top-0 h-full w-1"
              style={{ backgroundColor: "var(--color-primary)" }}
            />
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  style={{ backgroundColor: "var(--color-surface-alt)", color: "var(--color-primary)" }}
                >
                  {review.author?.charAt(0)?.toUpperCase() || "?"}
                </span>
                <span className="text-sm font-semibold" style={{ color: "var(--color-foreground)" }}>{review.author}</span>
              </div>
              <div className="flex shrink-0">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-3.5 w-3.5"
                    style={{
                      fill: j < review.rating ? "var(--color-warning)" : "var(--color-border)",
                      color: j < review.rating ? "var(--color-warning)" : "var(--color-border)",
                    }}
                  />
                ))}
              </div>
            </div>
            {review.heading && (
              <h3 className="mt-3 text-base font-semibold" style={{ color: "var(--color-foreground)" }}>
                {review.heading}
              </h3>
            )}
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--color-text)" }}>{review.text}</p>
          </div>
        ))}
      </div>
    )}

    <div className="mt-8">
      <ReviewForm trekId={trek.id} />
    </div>
  </section>;
};
sectionMap["gallery"] = () => trek.galleryImages?.length > 0 ? <GallerySection
                images={trek.galleryImages}
                heading={sectionData.gallery?.heading || "Gallery"}
                description={sectionData.gallery?.description}
                trekTitle={trek.title}
                className="py-10 sm:py-12"
              /> : null;

              // Add custom sections to the map (they have unique IDs from admin)
              for (const cs of customSections) {
                if (cs.id) {
                  sectionMap[cs.id] = () => (
                    <section className="py-8 sm:py-10">
                      <h2 className="mb-4 text-2xl font-bold" style={{ color: "var(--color-secondary)" }}>{cs.data?.heading || "Custom Section"}</h2>
                      {cs.data?.content && <div className="rich-text text-base leading-relaxed" style={{ color: "var(--color-text)" }} dangerouslySetInnerHTML={{ __html: cs.data.content }} />}
                    </section>
                  );
                }
              }

              // Build ordered sections list
              const ordered: React.ReactNode[] = [];
              const rendered = new Set<string>();

              // 1. Render sections in saved order (includes custom sections)
              for (const id of sectionOrderList) {
                if (sectionMap[id]) {
                  const node = sectionMap[id]();
                  if (node) {
                    ordered.push(<React.Fragment key={id}>{node}<hr className="border-t border-slate-200" /></React.Fragment>);
                    rendered.add(id);
                  }
                }
              }

              // 2. Render any remaining sections not in saved order
              for (const [id, renderFn] of Object.entries(sectionMap)) {
                if (!rendered.has(id)) {
                  const node = renderFn();
                  if (node) {
                    ordered.push(<React.Fragment key={id}>{node}<hr className="border-t border-slate-200" /></React.Fragment>);
                    rendered.add(id);
                  }
                }
              }

              // Ensure altitude section always comes right after the map section
              const mapIdx = ordered.findIndex((item) => (item as any)?.key === "map");
              const altIdx = ordered.findIndex((item) => (item as any)?.key === "altitude");
              if (mapIdx !== -1 && altIdx !== -1 && altIdx !== mapIdx + 1) {
                // Remove altitude from its current position
                const [altFragment] = ordered.splice(altIdx, 1);
                // Recalculate map index (may have shifted if altitude was before map)
                const newMapIdx = ordered.findIndex((item) => (item as any)?.key === "map");
                // Insert altitude right after map
                ordered.splice(newMapIdx + 1, 0, altFragment);
              }

              // 3. Render any custom sections without IDs (edge case)
              let customIdx = 0;
              for (const cs of customSections) {
                if (cs.id && rendered.has(cs.id)) continue;
                ordered.push(<React.Fragment key={cs.id || `custom-${customIdx++}`}>
                  <section className="py-8 sm:py-10">
                    <h2 className="mb-4 text-2xl font-bold" style={{ color: "var(--color-secondary)" }}>{cs.data?.heading || "Custom Section"}</h2>
                    {cs.data?.content && <div className="rich-text text-base leading-relaxed" style={{ color: "var(--color-text)" }} dangerouslySetInnerHTML={{ __html: cs.data.content }} />}
                  </section>
                  <hr className="border-t border-slate-200" />
                </React.Fragment>);
              }

              return ordered;
            })()}

            {/* Contact section — always present at the end of main content */}
            <div id="contact" className="[&>section]:!px-0 [&>section>div]:!px-0">
              <ContactFormSection
                heading={contactHeading}
                description={contactDescription}
                infoCards={contactInfoCards}
                className="py-10 sm:py-12"
              />
            </div>

            {/* Similar Treks section — shows treks selected by admin */}
            {similarTreks.length > 0 && (
              <section id="similar-treks" className="py-10 sm:py-12">
                <div className="mb-12 max-w-2xl">
                  <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl" style={{ color: "var(--color-secondary)" }}>
                    Similar Treks
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    You might also like these treks
                  </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {similarTreks.map((st) => {
                    const similarCatSlug = st.category?.slug || catSlug;
                    return (
                      <Link
                        key={st.id}
                        href={`/${similarCatSlug}/${st.slug}`}
                        className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-surface shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(234,88,12,0.25)]"
                      >
                        {st.heroImage ? (
                          <div className="relative aspect-[4/3] overflow-hidden">
                            <img
                              src={`https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_600,q_auto,f_auto/${st.heroImage}`}
                              alt={st.title}
                              width={600}
                              height={450}
                              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          </div>
                        ) : (
                          <div className="flex aspect-[4/3] items-center justify-center bg-surface">
                            <Mountain className="h-12 w-12 text-text-muted" />
                          </div>
                        )}
                        <div className="flex flex-1 flex-col p-6">
                          <div className="flex items-center gap-2 mb-4">
                            <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                              {st.difficulty}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
                            {st.title}
                          </h3>
                          <div className="mt-auto pt-6 flex items-end justify-between">
                            <div className="flex flex-col gap-1 text-xs text-text-muted font-medium">
                              <span className="flex items-center gap-1.5">
                                <Clock className="h-3.5 w-3.5" /> {st.duration} Days
                              </span>
                            </div>
                            <div className="flex flex-col items-end">
                              <span className="text-[10px] uppercase tracking-widest text-text-muted font-bold">From</span>
                              <span className="text-xl font-black text-foreground">${st.price.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}
          </div>
          {/* ── SIDEBAR ── */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <PricingCalculator
                trekSlug={trek.slug}
                basePrice={trek.price}
                duration={trek.duration}
                pricingTiers={pricingTiers}
                addons={addons}
                maxGroupSize={trek.maxGroupSize}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hero parallax animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: ".hero-parallax{animation:heroZoom 20s ease-out forwards}@keyframes heroZoom{0%{transform:scale(1)}100%{transform:scale(1.15)}}",
        }}
      />

      {/* Scroll to #itinerary / #reviews / #map etc. on load (App Router hash nav fix) */}
      <ScrollToHash />

      <SectionNav
        hasItinerary={itinerary.length > 0}
        hasInclusions={inclusions.length > 0 || exclusions.length > 0}
        hasPricing={pricingTiers.length > 0}
        hasFaqs={faqs.length > 0}
        hasFixedDepartures={fixedDepartureDays.length > 0 || customStartDates.length > 0}
        sectionOrder={sectionOrderList}
      />

    </GalleryProvider>
  );
}
