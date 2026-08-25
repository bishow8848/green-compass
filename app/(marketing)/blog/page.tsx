import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getCachedOrFetch, cacheKeys, CACHE_TTL } from "@/lib/redis";
import { SITE_URL, brandedTitle, seoDescription, seoImageUrl, serializeJsonLd } from "@/lib/seo";
import { PageHero } from "@/components/layout/PageHero";
import { BlogClient } from "./blog-client";
import { getPageContent, requirePageSection } from "@/lib/page-content";

// Blog listing is ISR-cached per URL (each ?page=N variant) for 1 day and
// refreshed on-demand after CMS edits (revalidatePath).
export const revalidate = 86400;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}): Promise<Metadata> {
  const pc = await getPageContent();
  const blog = requirePageSection<any>(pc, "blog");
  const seo = blog?.seo;

  // Validate CMS content — reject placeholder/test titles
  const rawTitle = seo?.title || "";
  const isValidTitle = rawTitle &&
    rawTitle.length > 2 &&
    !["dsaf", "adsf", "asdf", "test", "hello", "hi"].some((p) => rawTitle.toLowerCase().includes(p));
  const title = isValidTitle ? rawTitle : "Nepal Trekking Blog & Himalayan Travel Guides";
  const socialTitle = brandedTitle(title).absolute;
  const description = seoDescription(
    seo?.description,
    "Read practical Nepal trekking guides, Mardi Himal tips, itinerary advice and stories from the Himalayas."
  );
  const pageParams = await searchParams;
  const pageNumber = Math.max(1, parseInt(pageParams.page ?? "1", 10) || 1);
  const canonical = pageNumber > 1
    ? `${SITE_URL}/blog?page=${pageNumber}`
    : `${SITE_URL}/blog`;
  const heroImage = seoImageUrl(blog?.hero?.backgroundImage);

  return {
    title: { absolute: socialTitle },
    description,
    keywords: seo?.keywords || undefined,
    alternates: { canonical },
    openGraph: {
      title: socialTitle,
      description,
      url: canonical,
      siteName: "Mardi Treks",
      locale: "en_US",
      type: "website",
      images: heroImage
        ? [{ url: heroImage, width: 1200, height: 630, alt: "Nepal trekking and Himalayan travel guides" }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: heroImage ? [heroImage] : undefined,
    },
  };
}

const POSTS_PER_PAGE = 6;

async function getBlogPosts(page: number) {
  return getCachedOrFetch(
    cacheKeys.blogPostsPage(page),
    () =>
      prisma.blogPost.findMany({
        where: { status: "published" },
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
          tags: true,
          heroImage: true,
        },
      }),
    CACHE_TTL.DAILY
  );
}

async function getBlogPostsCount() {
  return getCachedOrFetch(
    cacheKeys.blogPostsCount,
    () => prisma.blogPost.count({ where: { status: "published" } }),
    CACHE_TTL.DAILY
  );
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const requestedPage = Math.max(1, parseInt(params.page ?? "1", 10) || 1);

  // Pagination is server-side: the database is queried with skip/take so only
  // POSTS_PER_PAGE posts are fetched per page — the backend never loads the
  // full collection. Page content, the published count, and the current page's
  // posts are fetched in parallel (each cached independently) so the first
  // load renders as fast as possible instead of making sequential round-trips.
  // Only an out-of-range ?page= triggers a second fetch for the clamped page.
  const [pc, total, postsForRequestedPage] = await Promise.all([
    getPageContent(),
    getBlogPostsCount(),
    getBlogPosts(requestedPage),
  ]);

  const totalPages = Math.max(1, Math.ceil(total / POSTS_PER_PAGE));
  const currentPage = Math.min(Math.max(1, requestedPage), totalPages);
  if (requestedPage > totalPages) {
    redirect(totalPages > 1 ? `/blog?page=${totalPages}` : "/blog");
  }
  const posts =
    currentPage === requestedPage
      ? postsForRequestedPage
      : await getBlogPosts(currentPage);

  const blog = requirePageSection<any>(pc, "blog");
  const hero = blog.hero || {};
  const blogDescription = seoDescription(
    blog.seo?.description,
    "Read practical Nepal trekking guides, Mardi Himal tips, itinerary advice and stories from the Himalayas."
  );
  const blogTitle = blog.seo?.title?.trim() || "Nepal Trekking Blog & Himalayan Travel Guides";
  const pageUrl = currentPage > 1 ? `${SITE_URL}/blog?page=${currentPage}` : `${SITE_URL}/blog`;

  const postsWithReadTime = posts.map((post) => {
    const wordCount = post.excerpt ? post.excerpt.split(/\s+/).length : 0;
    const readTimeMinutes = Math.max(1, Math.round(wordCount / 200));
    return {
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      author: post.author,
      authorSlug: post.authorSlug,
      heroImage: post.heroImage,
      date: (() => {
        const d = post.publishedDate;
        if (!d) return "TBD";
        const dateStr = typeof d === "string" ? d : d.toISOString();
        return dateStr.split("T")[0];
      })(),
      readTime: `${readTimeMinutes} min read`,
      tags: (() => {
        try {
          const parsed = JSON.parse(post.tags);
          return Array.isArray(parsed) ? parsed : [];
        } catch {
          return [];
        }
      })(),
    };
  });
  const postItems = posts.map((post, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: post.title,
    url: `${SITE_URL}/blog/${post.slug}`,
    ...(post.heroImage ? { image: seoImageUrl(post.heroImage) } : {}),
  }));

  return (
    <>
      {/* BreadcrumbList + CollectionPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                  { "@type": "ListItem", position: 2, name: "Blog", item: pageUrl },
                ],
              },
              {
                "@type": "CollectionPage",
                "@id": `${pageUrl}#collection`,
                url: pageUrl,
                name: blogTitle,
                description: blogDescription,
                mainEntity: { "@id": `${pageUrl}#items` },
                isPartOf: { "@id": `${SITE_URL}/#website` },
              },
              {
                "@type": "ItemList",
                "@id": `${pageUrl}#items`,
                name: "Latest Nepal trekking articles",
                numberOfItems: postItems.length,
                itemListElement: postItems,
              },
            ],
          }),
        }}
      />

      <PageHero
        heading={hero.heading || "Blog"}
        description={hero.description}
        backgroundImage={hero.backgroundImage}
        breadcrumbLabel="Blog"
      />

      {/* Posts */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
          <BlogClient
            posts={postsWithReadTime}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      </section>
    </>
  );
}
