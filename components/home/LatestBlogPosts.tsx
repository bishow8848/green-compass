import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { getCachedOrFetch, cacheKeys, CACHE_TTL } from "@/lib/redis";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, seoImageUrl } from "@/lib/seo";
import { BlogCard } from "@/components/blog/BlogCard";

export async function LatestBlogPosts({
  heading,
  description,
}: {
  heading?: string | null;
  description?: string | null;
}) {
  const posts = await getCachedOrFetch(
    cacheKeys.latestBlogPosts,
    () => prisma.blogPost.findMany({
      where: { status: "published" },
      orderBy: { publishedDate: "desc" },
      take: 3,
      select: {
        slug: true,
        title: true,
        excerpt: true,
        author: true,
        publishedDate: true,
        heroImage: true,
        tags: true,
      },
    }),
    CACHE_TTL.DAILY
  );

  if (posts.length === 0) {
    return null;
  }

  const postsWithMeta = posts.map((post) => {
    const wordCount = post.excerpt ? post.excerpt.split(/\s+/).length : 0;
    const readTimeMinutes = Math.max(1, Math.round(wordCount / 200));
    const dateStr = post.publishedDate
      ? (typeof post.publishedDate === "string"
          ? post.publishedDate
          : post.publishedDate.toISOString())
      : new Date().toISOString();
    return {
      ...post,
      date: dateStr.split("T")[0],
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

  return (
    <>
      {/* This section is a teaser: the articles themselves live at /blog/<slug>,
          and each of those pages already emits its own BlogPosting. Emitting a
          second, detached BlogPosting per post here — with no url or
          mainEntityOfPage — told Google that three full articles were the main
          content of the HOMEPAGE, which both misattributes the articles and
          competes with the homepage's own WebPage entity. An ItemList of links
          is the correct markup for a "latest posts" strip, and it matches what
          /blog already publishes. */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "@id": `${SITE_URL}/#latest-posts`,
          name: heading || "Latest from Our Blog",
          numberOfItems: postsWithMeta.length,
          itemListElement: postsWithMeta.map((post, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: post.title,
            url: `${SITE_URL}/blog/${post.slug}`,
            ...(post.heroImage ? { image: seoImageUrl(post.heroImage) } : {}),
          })),
        }}
      />

      <section className="bg-background py-16 sm:py-24" aria-labelledby="latest-blog-posts-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center">
            <h2
              id="latest-blog-posts-heading"
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              {heading || "Latest from Our Blog"}
            </h2>
            <p className="mt-3 text-lg text-text-muted">
              {description || "Trekking tips, destination guides, and stories from the Himalayas"}
            </p>
          </div>

          {/* Blog card grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {postsWithMeta.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                heroImage={post.heroImage}
                tags={post.tags}
                date={post.date}
                readTime={post.readTime}
              />
            ))}
          </div>

          {/* View all CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-primary-dark"
            >
              View All Articles
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
