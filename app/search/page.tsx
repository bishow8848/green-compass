import Link from "next/link";
import { CLOUDINARY_CLOUD_NAME } from "@/lib/cloudinary-url";
import Image from "next/image";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { SITE_URL } from "@/lib/seo";
import { NEPAL_TIME_ZONE } from "@/lib/blog-schedule";
import { Search, MapPin, Clock, ArrowLeft, Mountain, FileText, Calendar } from "lucide-react";
import { MotionLink, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SearchBar } from "@/components/search/SearchBar";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Search",
  description: "Search trekking packages and travel articles about Nepal. Find your perfect Himalayan adventure.",
  alternates: { canonical: `${SITE_URL}/search` },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Search | Green Compass Treks",
    description: "Search trekking packages and travel articles about Nepal.",
  },
};

function parseTags(tags: string): string[] {
  try {
    const parsed = JSON.parse(tags);
    return Array.isArray(parsed) ? parsed.filter((t): t is string => typeof t === "string") : [];
  } catch {
    return [];
  }
}

function plural(count: number, word: string): string {
  return `${count} ${word}${count === 1 ? "" : "s"}`;
}

/** Title matches above region/excerpt/tag-only ones, as in the search bar's
 *  suggestions. The sort is stable, so each group keeps the query's order. */
function titleMatchesFirst<T extends { title: string }>(rows: T[], qLower: string): T[] {
  const rank = (row: T) => Number(!row.title.toLowerCase().includes(qLower));
  return rows.sort((a, b) => rank(a) - rank(b));
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q?.trim() || "";

  let results: Array<{
    id: string;
    title: string;
    slug: string;
    region: string | null;
    difficulty: string;
    duration: number;
    price: number;
    heroImage?: string | null;
    category?: { slug: string } | null;
  }> = [];

  let articles: Array<{
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    heroImage: string | null;
    tags: string;
    publishedDate: Date;
  }> = [];

  if (query) {
    const qLower = query.toLowerCase();
    const [trekRows, postRows] = await Promise.all([
      prisma.trek.findMany({
        where: {
          status: "published",
          OR: [
            { title: { contains: qLower, mode: "insensitive" } },
            { region: { contains: qLower, mode: "insensitive" } },
          ],
        },
        select: {
          id: true,
          title: true,
          slug: true,
          region: true,
          difficulty: true,
          duration: true,
          price: true,
          heroImage: true,
          category: { select: { slug: true } },
        },
        orderBy: { title: "asc" },
        take: 50,
      }),
      prisma.blogPost.findMany({
        where: {
          status: "published",
          OR: [
            { title: { contains: qLower, mode: "insensitive" } },
            { excerpt: { contains: qLower, mode: "insensitive" } },
            { tags: { contains: qLower, mode: "insensitive" } },
          ],
        },
        select: {
          id: true,
          title: true,
          slug: true,
          excerpt: true,
          heroImage: true,
          tags: true,
          publishedDate: true,
        },
        orderBy: { publishedDate: "desc" },
        take: 30,
      }),
    ]);
    results = titleMatchesFirst(trekRows, qLower);
    articles = titleMatchesFirst(postRows, qLower);
  }

  const total = results.length + articles.length;
  const foundSummary = [
    results.length > 0 ? plural(results.length, "trek") : null,
    articles.length > 0 ? plural(articles.length, "article") : null,
  ]
    .filter(Boolean)
    .join(" and ");

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border bg-surface">
        <Stagger className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <StaggerItem from="left">
            <Link
              href="/"
              className="group mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-text-muted transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Home
            </Link>
          </StaggerItem>
          <StaggerItem className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Search className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">
                {query ? `Results for "${query}"` : "Search"}
              </h1>
              <p className="text-sm text-text-muted">
                {total > 0
                  ? `${foundSummary} found`
                  : query
                    ? "Nothing matched your search"
                    : "Find treks, regions and travel articles"}
              </p>
            </div>
          </StaggerItem>
          <StaggerItem className="mt-6 max-w-2xl">
            {/* Keyed on the query so the box shows the new term after each search. */}
            <SearchBar
              key={query}
              initialQuery={query}
              autoFocus={!query}
              placeholder="Search treks, regions or articles"
            />
          </StaggerItem>
        </Stagger>
      </section>

      {/* Results */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {total > 0 ? (
          <div className="space-y-12">
            {results.length > 0 && (
              <div>
                <h2 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-text-muted">
                  <Mountain className="h-4 w-4 text-primary" /> Treks
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {results.map((trek, i) => {
                    const categorySlug = trek.category?.slug || "treks";
                    return (
                      <Reveal key={trek.id} delay={(i % 3) * 0.07} className="h-full">
                        <MotionLink
                          href={`/${categorySlug}/${trek.slug}`}
                          lift={4}
                          press={0.98}
                          className="group block h-full overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-shadow hover:shadow-md"
                        >
                          {/* Image */}
                          <div className="aspect-[16/9] overflow-hidden bg-surface-alt">
                            {trek.heroImage ? (
                              <Image
                                src={`https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_600,q_auto,f_auto/${trek.heroImage}`}
                                alt={trek.title}
                                width={600}
                                height={338}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            ) : (
                              <div className="flex h-full items-center justify-center">
                                <Mountain className="h-12 w-12 text-text-muted" />
                              </div>
                            )}
                          </div>
                          {/* Info */}
                          <div className="p-4">
                            <div className="flex items-center gap-2">
                              {trek.region && (
                                <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary">
                                  {trek.region}
                                </span>
                              )}
                              <span className="inline-flex items-center rounded-full bg-surface-alt px-2.5 py-0.5 text-[11px] font-medium capitalize text-text-muted">
                                {trek.difficulty}
                              </span>
                            </div>
                            <h3 className="mt-2 text-base font-semibold text-foreground group-hover:text-primary">
                              {trek.title}
                            </h3>
                            <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                              <div className="flex items-center gap-3 text-xs text-text-muted">
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3.5 w-3.5" /> {trek.duration}d
                                </span>
                                {trek.region && (
                                  <span className="flex items-center gap-1">
                                    <MapPin className="h-3.5 w-3.5" /> {trek.region}
                                  </span>
                                )}
                              </div>
                              <span className="text-sm font-bold text-primary">
                                ${trek.price.toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </MotionLink>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            )}

            {articles.length > 0 && (
              <div>
                <h2 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-text-muted">
                  <FileText className="h-4 w-4 text-primary" /> Articles
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {articles.map((post, i) => {
                    const tags = parseTags(post.tags);
                    return (
                      <Reveal key={post.id} delay={(i % 3) * 0.07} className="h-full">
                        <MotionLink
                          href={`/blog/${post.slug}`}
                          lift={4}
                          press={0.98}
                          className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-shadow hover:shadow-md"
                        >
                          {/* Image */}
                          <div className="aspect-[16/9] overflow-hidden bg-surface-alt">
                            {post.heroImage ? (
                              <Image
                                src={`https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_600,q_auto,f_auto/${post.heroImage}`}
                                alt={post.title}
                                width={600}
                                height={338}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            ) : (
                              <div className="flex h-full items-center justify-center">
                                <FileText className="h-12 w-12 text-text-muted" />
                              </div>
                            )}
                          </div>
                          {/* Info */}
                          <div className="flex flex-1 flex-col p-4">
                            {tags.length > 0 && (
                              <div className="flex flex-wrap items-center gap-2">
                                {tags.slice(0, 2).map((tag) => (
                                  <span
                                    key={tag}
                                    className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                            <h3 className="mt-2 text-base font-semibold text-foreground group-hover:text-primary">
                              {post.title}
                            </h3>
                            <p className="mt-1.5 line-clamp-2 text-sm text-text-muted">{post.excerpt}</p>
                            <div className="mt-auto pt-3">
                              <div className="flex items-center gap-1 border-t border-border pt-3 text-xs text-text-muted">
                                <Calendar className="h-3.5 w-3.5" />
                                <time dateTime={post.publishedDate.toISOString()}>
                                  {post.publishedDate.toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                    timeZone: NEPAL_TIME_ZONE,
                                  })}
                                </time>
                              </div>
                            </div>
                          </div>
                        </MotionLink>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ) : query ? (
          /* No results state */
          <Reveal from="scale" className="flex flex-col items-center py-20 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-alt">
              <Search className="h-8 w-8 text-text-muted" />
            </div>
            <h2 className="mt-5 text-lg font-semibold text-foreground">No results found</h2>
            <p className="mt-2 text-sm text-text-muted">
              We couldn&apos;t find any treks or articles matching &ldquo;{query}&rdquo;. Try a different search term.
            </p>
            <MotionLink
              href="/"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark"
            >
              <ArrowLeft className="h-4 w-4" /> Go to Home
            </MotionLink>
          </Reveal>
        ) : (
          /* Initial state (no query) */
          <Reveal from="scale" className="flex flex-col items-center py-20 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-alt">
              <Search className="h-8 w-8 text-text-muted" />
            </div>
            <h2 className="mt-5 text-lg font-semibold text-foreground">Search for a trek or article</h2>
            <p className="mt-2 text-sm text-text-muted">
              Type a trek name, region or topic in the search box above.
            </p>
          </Reveal>
        )}
      </section>
    </main>
  );
}
