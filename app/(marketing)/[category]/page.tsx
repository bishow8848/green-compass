import type { Metadata } from "next";
import { CLOUDINARY_CLOUD_NAME } from "@/lib/cloudinary-url";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getCachedOrFetch, cacheKeys, CACHE_TTL } from "@/lib/redis";
import { SITE_URL, seoImageUrl } from "@/lib/seo";
import { CategoryClient } from "./category-client";
import { SearchBar } from "@/components/search/SearchBar";
import { sanitizeRichText } from "@/lib/sanitize";
import { Calendar, Clock, Mountain } from "lucide-react";

// Category listing is cached for 1 day and refreshed on-demand after CMS edits (revalidatePath)
export const revalidate = 86400;

export async function generateStaticParams() {
  return prisma.category.findMany({
    where: { status: "published" },
    select: { slug: true },
  }).then((categories) => categories.map(({ slug }) => ({ category: slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const cat = await getCachedOrFetch(
    cacheKeys.categoryBySlug(slug),
    () => prisma.category.findUnique({ where: { slug } }),
    CACHE_TTL.MODERATE
  );
  if (!cat) {
    const page = await getCachedOrFetch(
      cacheKeys.pageBySlug(slug),
      () => prisma.page.findFirst({ where: { slug, status: "published" } }),
      CACHE_TTL.MODERATE
    );
    if (!page) return { title: "Page Not Found" };

    const pageTitle = page.metaTitle || page.title;
    const pageSocialTitle = /\|\s*Mardi Treks\s*$/i.test(pageTitle)
      ? pageTitle
      : `${pageTitle} | Mardi Treks`;
    const pageImage = seoImageUrl(page.ogImage || page.heroImage);
    return {
      title: /\|\s*Mardi Treks\s*$/i.test(pageTitle)
        ? { absolute: pageTitle }
        : pageTitle,
      description: page.metaDescription || undefined,
      alternates: { canonical: `${SITE_URL}/${page.slug}` },
      openGraph: {
        title: pageSocialTitle,
        description: page.metaDescription || undefined,
        url: `${SITE_URL}/${page.slug}`,
        images: pageImage ? [{ url: pageImage, width: 1200, height: 630 }] : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title: pageSocialTitle,
        description: page.metaDescription || undefined,
        images: pageImage ? [pageImage] : undefined,
      },
    };
  }

  const title = cat.metaTitle || cat.name;
  const socialTitle = /\|\s*Mardi Treks\s*$/i.test(title)
    ? title
    : `${title} | Mardi Treks`;
  return {
    title: /\|\s*Mardi Treks\s*$/i.test(title)
      ? { absolute: title }
      : title,
    description:
      cat.metaDescription ||
      `Browse our ${cat.name.toLowerCase()} packages across Nepal.`,
    alternates: { canonical: `${SITE_URL}/${slug}` },
    openGraph: {
      title: socialTitle,
      description:
        cat.metaDescription ||
        `Browse our ${cat.name.toLowerCase()} packages across Nepal.`,
      url: `${SITE_URL}/${slug}`,
      siteName: "Mardi Treks",
      locale: "en_US",
      type: "website",
      images: seoImageUrl(cat.heroImage) ? [{ url: seoImageUrl(cat.heroImage)!, width: 1200, height: 630, alt: cat.name }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: cat.metaDescription || `Browse our ${cat.name.toLowerCase()} packages across Nepal.`,
      images: seoImageUrl(cat.heroImage) ? [seoImageUrl(cat.heroImage)!] : undefined,
    },
  };
}

export default async function CategoryListingPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: catSlug } = await params;

  const category = await getCachedOrFetch(
    cacheKeys.categoryBySlug(catSlug),
    () => prisma.category.findUnique({ where: { slug: catSlug } }),
    CACHE_TTL.MODERATE
  );
  if (!category) {
    const page = await getCachedOrFetch(
      cacheKeys.pageBySlug(catSlug),
      () => prisma.page.findFirst({ where: { slug: catSlug, status: "published" } }),
      CACHE_TTL.MODERATE
    );
    if (!page) notFound();

    const [latestPosts, homeSettings] = await Promise.all([
      getCachedOrFetch(
        cacheKeys.blogPosts,
        () => prisma.blogPost.findMany({
          where: { status: "published" },
          orderBy: { publishedDate: "desc" },
          take: 3,
          select: {
            slug: true,
            title: true,
            excerpt: true,
            publishedDate: true,
            heroImage: true,
          },
        }),
        CACHE_TTL.MODERATE
      ),
      getCachedOrFetch(
        cacheKeys.homeFeaturedSelection,
        () => prisma.homePageSettings.findUnique({
          where: { id: "home-settings" },
          select: { featuredSectionTrekIds: true },
        }),
        CACHE_TTL.MODERATE
      ),
    ]);

    const featuredIds: string[] = (() => {
      try {
        const parsed = JSON.parse(homeSettings?.featuredSectionTrekIds || "[]");
        return Array.isArray(parsed) ? parsed.slice(0, 3) : [];
      } catch {
        return [];
      }
    })();

    const featuredTreks = featuredIds.length > 0
      ? await getCachedOrFetch(
          `featured:section:${catSlug}`,
          () => prisma.trek.findMany({
            where: { id: { in: featuredIds }, status: "published" },
            select: {
              id: true,
              slug: true,
              title: true,
              heroImage: true,
              duration: true,
              category: { select: { slug: true } },
            },
          }),
          CACHE_TTL.MODERATE
        )
      : [];

    const heroImageUrl = seoImageUrl(page.heroImage, "c_fill,w_1600,q_auto,f_auto");

    return (
      <>
        <section className="relative isolate flex min-h-[clamp(460px,72vh,760px)] flex-col overflow-hidden">
          {heroImageUrl ? (
            <Image
              src={heroImageUrl}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-secondary-dark via-primary-dark/20 to-gray-900" />
          )}
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/5 via-black/35 to-black/90" />
          <div className="relative z-10 mt-auto w-full">
            <div className="mx-auto max-w-screen-2xl px-4 pb-[clamp(48px,7vw,84px)] sm:px-6 lg:px-8">
              <h1 className="max-w-4xl text-[clamp(36px,5.5vw,64px)] font-bold leading-[1.06] tracking-tight text-white">
                {page.title}
              </h1>
              {page.heroDescription && (
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                  {page.heroDescription}
                </p>
              )}
              <nav aria-label="Breadcrumb" className="mb-3 mt-7 flex items-center gap-2 text-sm text-white/60">
                <Link href="/" className="hover:text-white">Home</Link>
                <span>/</span>
                <span className="truncate text-white/85">{page.title}</span>
              </nav>
              <div className="w-full max-w-xl">
                <SearchBar />
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-screen-2xl px-4 py-12 pb-24 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <article
              className="prose-custom rich-text lg:col-span-2"
              dangerouslySetInnerHTML={{ __html: sanitizeRichText(page.content) }}
            />

            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              {latestPosts.length > 0 && (
                <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
                  <div className="border-b border-border bg-surface-alt px-5 py-4">
                    <h2 className="text-xs font-black uppercase tracking-[0.2em] text-foreground">
                      Latest Articles
                    </h2>
                  </div>
                  <div className="divide-y divide-border">
                    {latestPosts.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group flex gap-3 px-5 py-4 transition-colors hover:bg-surface-alt"
                      >
                        {post.heroImage ? (
                          <Image
                            src={`https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_160,h_120,q_auto,f_auto/${post.heroImage}`}
                            alt=""
                            width={80}
                            height={64}
                            className="h-16 w-20 shrink-0 rounded-lg object-cover"
                          />
                        ) : (
                          <div className="flex h-16 w-20 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                            <Mountain className="h-5 w-5 text-primary" />
                          </div>
                        )}
                        <div className="min-w-0">
                          <p className="line-clamp-2 text-sm font-semibold leading-snug text-foreground group-hover:text-primary">
                            {post.title}
                          </p>
                          <p className="mt-1 flex items-center gap-1 text-[11px] text-text-muted">
                            <Calendar className="h-3 w-3" />
                            {new Date(post.publishedDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {featuredTreks.length > 0 && (
                <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
                  <div className="border-b border-border bg-surface-alt px-5 py-4">
                    <h2 className="text-xs font-black uppercase tracking-[0.2em] text-foreground">
                      Featured Treks
                    </h2>
                  </div>
                  <div className="divide-y divide-border">
                    {featuredTreks.map((trek) => (
                      <Link
                        key={trek.id}
                        href={`/${trek.category?.slug || "treks"}/${trek.slug}`}
                        className="group flex gap-3 px-5 py-4 transition-colors hover:bg-surface-alt"
                      >
                        {trek.heroImage ? (
                          <Image
                            src={`https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_160,h_120,q_auto,f_auto/${trek.heroImage}`}
                            alt=""
                            width={80}
                            height={64}
                            className="h-16 w-20 shrink-0 rounded-lg object-cover"
                          />
                        ) : (
                          <div className="flex h-16 w-20 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                            <Mountain className="h-5 w-5 text-primary" />
                          </div>
                        )}
                        <div className="min-w-0">
                          <p className="line-clamp-2 text-sm font-semibold leading-snug text-foreground group-hover:text-primary">
                            {trek.title}
                          </p>
                          <p className="mt-1 flex items-center gap-1 text-[11px] text-text-muted">
                            <Clock className="h-3 w-3" />
                            {trek.duration} days
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </>
    );
  }

  // Fetch all published treks for this category once — filtering happens
  // client-side in <CategoryClient> so this route never reads searchParams and
  // can be statically revalidated every 1 day (revalidate = 86400).
  const allTreks = await getCachedOrFetch(
    cacheKeys.categoryTreksAll(category.id),
    () => prisma.trek.findMany({
      where: { status: "published", categoryId: category.id },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        slug: true,
        heroImage: true,
        difficulty: true,
        duration: true,
        price: true,
        region: true,
        reviews: { where: { approved: true }, select: { rating: true } },
      },
    }),
    CACHE_TTL.MODERATE
  );

  const avgRating = (reviews: { rating: number }[]) => {
    if (!reviews.length) return null;
    return reviews.reduce((a, r) => a + r.rating, 0) / reviews.length;
  };

  const treks = allTreks.map((t) => ({
    id: t.id,
    title: t.title,
    slug: t.slug,
    heroImage: t.heroImage,
    difficulty: t.difficulty,
    duration: t.duration,
    price: t.price,
    region: t.region,
    avgRating: (() => {
      const avg = avgRating(t.reviews);
      return avg !== null ? Math.round(avg * 10) / 10 : null;
    })(),
  }));

  const regionCounts: Record<string, number> = {};
  const difficultyCounts: Record<string, number> = {};
  for (const t of allTreks) {
    if (t.region) regionCounts[t.region] = (regionCounts[t.region] || 0) + 1;
    difficultyCounts[t.difficulty] = (difficultyCounts[t.difficulty] || 0) + 1;
  }

  const regions = Object.entries(regionCounts).map(([value, count]) => ({
    value,
    label: value.charAt(0).toUpperCase() + value.slice(1),
    count,
  }));

  const difficulties = Object.entries(difficultyCounts).map(([value, count]) => ({
    value,
    label: value.charAt(0).toUpperCase() + value.slice(1),
    count,
  }));

  const durations = [
    { value: "1-7", label: "1-7 Days" },
    { value: "8-12", label: "8-12 Days" },
    { value: "13-16", label: "13-16 Days" },
    { value: "17+", label: "17+ Days" },
  ];

  const priceRanges = [
    { value: "0-999", label: "Under $1,000" },
    { value: "1000-1499", label: "$1,000 – $1,499" },
    { value: "1500-1999", label: "$1,500 – $1,999" },
    { value: "2000+", label: "$2,000+" },
  ];

  const ratingOptions = [
    { value: "5", label: "5 stars" },
    { value: "4", label: "4 stars & up" },
    { value: "3", label: "3 stars & up" },
    { value: "2", label: "2 stars & up" },
    { value: "1", label: "1 star & up" },
  ];

  return (
    <>
      {/* BreadcrumbList + CollectionPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                  { "@type": "ListItem", position: 2, name: category.name, item: `${SITE_URL}/${catSlug}` },
                ],
              },
              {
                "@type": "CollectionPage",
                "@id": `${SITE_URL}/${catSlug}#collection`,
                name: category.name,
                description: category.metaDescription || `Browse our ${category.name.toLowerCase()} packages across Nepal.`,
                isPartOf: { "@id": `${SITE_URL}/#website` },
              },
            ],
          }),
        }}
      />

      {/* ===== Hero ===== */}
      <section className="border-b border-border bg-background py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {category.name}
          </h1>
          <nav aria-label="Breadcrumb" className="mb-3 mt-6 flex items-center justify-center gap-2 text-sm text-text-muted">
            <Link href="/" className="transition-colors hover:text-primary">Home</Link>
            <span>/</span>
            <span className="text-foreground">{category.name}</span>
          </nav>
          <div className="mx-auto max-w-xl">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* ===== Main Content ===== */}
      <section className="bg-background py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <CategoryClient
            catSlug={catSlug}
            treks={treks}
            regions={regions}
            difficulties={difficulties}
            durations={durations}
            priceRanges={priceRanges}
            ratingOptions={ratingOptions}
          />
        </div>
      </section>
    </>
  );
}
