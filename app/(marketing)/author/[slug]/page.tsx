import type { Metadata } from "next";
import { CLOUDINARY_CLOUD_NAME } from "@/lib/cloudinary-url";
import Link from "next/link";
import { notFound } from "next/navigation";
import { redirect } from "next/navigation";
import { ExternalLink, Mountain } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import { Pagination } from "@/components/ui/Pagination";
import { PageHero } from "@/components/layout/PageHero";
import { getPageContent, requirePageSection } from "@/lib/page-content";
import { prisma } from "@/lib/prisma";
import { getCachedOrFetch, CACHE_TTL } from "@/lib/redis";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, brandedTitle, seoDescription, serializeJsonLd } from "@/lib/seo";

// Author bio is cached for 7 days and refreshed on-demand after CMS edits (revalidatePath)
export const revalidate = 604800;

export async function generateStaticParams() {
  const authors = await prisma.author.findMany({ select: { slug: true } });
  return authors.map((a) => ({ slug: a.slug }));
}

const POSTS_PER_PAGE = 12;

function parsePage(page?: string) {
  return Math.max(1, parseInt(page ?? "1", 10) || 1);
}

function parseTags(tags: string): string[] {
  try {
    const parsed = JSON.parse(tags);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pageNumber = parsePage((await searchParams).page);
  const author = await prisma.author.findUnique({
    where: { slug },
    select: { name: true, role: true, bio: true, avatar: true },
  });
  if (!author) return {};

  const avatarUrl = author.avatar
    ? `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_300,h_300,q_auto,f_auto/${author.avatar}`
    : undefined;

  const canonical = pageNumber > 1
    ? `${SITE_URL}/author/${slug}?page=${pageNumber}`
    : `${SITE_URL}/author/${slug}`;
  const title = brandedTitle(`${author.name} – ${author.role || "Author"}`).absolute;
  const description = seoDescription(
    author.bio,
    `Nepal trekking guides and travel articles by ${author.name}${author.role ? `, ${author.role}` : ""} at ${SITE_NAME}.`
  );

  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "profile",
      images: avatarUrl ? [{ url: avatarUrl, width: 300, height: 300, alt: author.name }] : [DEFAULT_OG_IMAGE],
    },
    twitter: {
      // A square avatar suits the small card; the branded fallback is 1200×630.
      card: avatarUrl ? "summary" : "summary_large_image",
      title,
      description,
    },
  };
}

export default async function AuthorPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { slug } = await params;
  const requestedPage = parsePage((await searchParams).page);

  const getPosts = (page: number) =>
    getCachedOrFetch(
      `author:posts:${slug}:page:${page}`,
      () => prisma.blogPost.findMany({
        where: { authorSlug: slug, status: "published" },
        orderBy: { publishedDate: "desc" },
        skip: (page - 1) * POSTS_PER_PAGE,
        take: POSTS_PER_PAGE,
        select: {
          slug: true,
          title: true,
          excerpt: true,
          author: true,
          authorSlug: true,
          publishedDate: true,
          heroImage: true,
          tags: true,
        },
      }),
      CACHE_TTL.YEARLY
    );

  // Just the publish dates of every post give the count and latest date;
  // only the current page's cards are fetched in full.
  const [author, summary, posts, pageContent] = await Promise.all([
    getCachedOrFetch(
      `author:${slug}`,
      () => prisma.author.findUnique({ where: { slug } }),
      CACHE_TTL.YEARLY
    ),
    getCachedOrFetch(
      `author:dates:${slug}`,
      () => prisma.blogPost.findMany({
        where: { authorSlug: slug, status: "published" },
        orderBy: { publishedDate: "desc" },
        select: { publishedDate: true },
      }),
      CACHE_TTL.YEARLY
    ),
    getPosts(requestedPage),
    getPageContent(),
  ]);

  if (!author) notFound();

  // Reuse the blog page's banner photo so the two headers match.
  const blogHero = requirePageSection<any>(pageContent, "blog")?.hero;

  const total = summary.length;
  const totalPages = Math.max(1, Math.ceil(total / POSTS_PER_PAGE));
  if (requestedPage > totalPages) {
    redirect(totalPages > 1 ? `/author/${slug}?page=${totalPages}` : `/author/${slug}`);
  }

  const avatarUrl = author.avatar
    ? `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_300,h_300,q_auto,f_auto/${author.avatar}`
    : null;

  const socialLinks: { platform: string; url: string }[] = (() => {
    try { return JSON.parse(author.socialLinks || "[]"); }
    catch { return []; }
  })();
  const profileUrls = socialLinks.map((link) => link.url).filter((url) => /^https?:\/\//i.test(url || ""));

  // Some posts carry future dates, so skip those when picking the latest one.
  const now = Date.now();
  const latest = summary.find((row) => new Date(row.publishedDate).getTime() <= now)?.publishedDate;

  const firstShown = total === 0 ? 0 : (requestedPage - 1) * POSTS_PER_PAGE + 1;
  const lastShown = Math.min(requestedPage * POSTS_PER_PAGE, total);

  return (
    <>
      {/* ProfilePage + Person make this page the one entity every article
          byline points at (E-E-A-T); the breadcrumb gives a readable trail. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ProfilePage",
                "@id": `${SITE_URL}/author/${slug}#profile`,
                url: `${SITE_URL}/author/${slug}`,
                name: `${author.name} – ${author.role || "Author"}`,
                isPartOf: { "@id": `${SITE_URL}/#website` },
                mainEntity: {
                  "@type": "Person",
                  "@id": `${SITE_URL}/author/${slug}#person`,
                  name: author.name,
                  url: `${SITE_URL}/author/${slug}`,
                  ...(author.role ? { jobTitle: author.role } : {}),
                  ...(author.bio ? { description: seoDescription(author.bio, author.name, 300) } : {}),
                  ...(avatarUrl ? { image: avatarUrl } : {}),
                  worksFor: { "@id": `${SITE_URL}/#organization` },
                  ...(profileUrls.length > 0 ? { sameAs: profileUrls } : {}),
                },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                  { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
                  { "@type": "ListItem", position: 3, name: author.name, item: `${SITE_URL}/author/${slug}` },
                ],
              },
            ],
          }),
        }}
      />

      {/* ── Banner (same header as /blog) ── */}
      <PageHero
        heading={author.name}
        description={author.role}
        backgroundImage={blogHero?.backgroundImage}
        breadcrumbLabel={author.name}
        searchAuthorSlug={slug}
      />

      {/* ── About ── */}
      <section className="bg-background pt-16 sm:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={author.name}
                width={64}
                height={64}
                className="h-16 w-16 flex-shrink-0 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary text-3xl font-bold text-white">
                {author.name.charAt(0).toUpperCase()}
              </div>
            )}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-secondary-dark sm:text-3xl">About {author.name}</h2>
              <div className="mt-1.5 flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                  {total} {total === 1 ? "article" : "articles"}
                </span>
                {latest && (
                  <span className="rounded-full bg-surface-alt px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-text-muted">
                    Latest {new Date(latest).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                  </span>
                )}
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-surface-alt px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-text-muted transition-colors hover:text-primary"
                  >
                    {link.platform} <ExternalLink className="h-3 w-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {author.bio && (
            <div
              className="mt-6 max-w-4xl space-y-4 text-base leading-relaxed text-text-muted sm:text-lg [&_a]:text-primary [&_a]:underline"
              dangerouslySetInnerHTML={{ __html: author.bio }}
            />
          )}
        </div>
      </section>

      {/* ── Articles ── */}
      <section id="articles" className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-secondary-dark sm:text-3xl">
            Articles by {author.name}
          </h2>
          {total > 0 && (
            <p className="mt-2 text-base text-text-muted">
              Showing {firstShown}–{lastShown} of {total} {total === 1 ? "article" : "articles"}
            </p>
          )}

          {posts.length === 0 ? (
            <div className="mt-10 flex flex-col items-center rounded-3xl border border-border/60 bg-surface p-12 text-center">
              <Mountain className="h-12 w-12 text-text-muted/40" />
              <p className="mt-4 text-sm font-medium text-text-muted">No posts yet</p>
              <p className="mt-1 text-xs text-text-muted/60">This author hasn&apos;t published any posts yet.</p>
            </div>
          ) : (
            <>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => {
                  const wordCount = post.excerpt ? post.excerpt.split(/\s+/).length : 0;
                  return (
                    <BlogCard
                      key={post.slug}
                      slug={post.slug}
                      title={post.title}
                      excerpt={post.excerpt}
                      heroImage={post.heroImage}
                      tags={parseTags(post.tags)}
                      date={new Date(post.publishedDate).toISOString().split("T")[0]}
                      readTime={`${Math.max(1, Math.round(wordCount / 200))} min read`}
                      author={post.author}
                      authorSlug={post.authorSlug}
                    />
                  );
                })}
              </div>
              <Pagination currentPage={requestedPage} totalPages={totalPages} basePath={`/author/${slug}`} />
            </>
          )}
        </div>
      </section>
    </>
  );
}
