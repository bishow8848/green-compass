import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { invalidateCachePattern, cacheKeys } from "@/lib/redis";
import { submitToIndexNow } from "@/lib/indexnow";

/**
 * Re-render the pages that list blog posts, and only those.
 *
 * Deliberately not `revalidatePath("/", "layout")`. The footer's "Latest
 * Blogs" list is on every page, and purging the whole site for it dropped the
 * cached copy of all ~220 trip pages each time a post was saved or went live
 * from the scheduler. The next visitor to each trip page, very
 * often Googlebot, then waited on a cold render (10–26 s measured in November
 * 2026) and, while crawling in parallel, got 500s. Pages not listed here pick
 * up the new footer links at their own time-based revalidation; a few-days-old
 * footer list costs nothing, a slow product page costs rankings.
 *
 * Patterns carry their route group, because Next derives the cache tag from
 * the route file path: "/(marketing)/blog" matches, "/blog" with a type does
 * not, and fails silently.
 */
export function revalidateBlogPages(slugs: string[] = []): void {
  revalidatePath("/"); // LatestBlogPosts
  revalidatePath("/(marketing)/blog", "layout"); // the index and every post's "Keep Reading"
  revalidatePath("/(marketing)/author/[slug]", "page");
  revalidatePath("/(marketing)/about/team/[slug]", "page");
  revalidatePath("/(marketing)/[category]", "page"); // category listings, not the trips beneath them
  revalidatePath("/sitemap.xml");
  // Each post's own URL by name too: one visited before it went live holds a
  // cached 404, and that has to go the moment the post is published.
  for (const slug of slugs) revalidatePath(`/blog/${slug}`);
}

/**
 * Drop every cached view of the blog so the next visit reads the database:
 * the Redis entries, then the pages Next has rendered from them.
 */
export async function refreshBlogCaches(slugs: string[] = []): Promise<void> {
  await Promise.all([
    invalidateCachePattern(cacheKeys.pattern.blog),
    invalidateCachePattern(cacheKeys.pattern.home),
    invalidateCachePattern(cacheKeys.pattern.author),
  ]);
  revalidateBlogPages(slugs);
}

export type PublishedPost = { slug: string; title: string; publishedDate: Date };

/**
 * Publish every scheduled post whose time has come.
 *
 * Safe to call at any moment and from any number of triggers at once: it only
 * ever acts on posts that are already due, and the status guard on the update
 * means a post is flipped exactly once however many callers race for it. With
 * nothing due it costs a single indexed read.
 */
export async function publishDuePosts(now: Date = new Date()): Promise<PublishedPost[]> {
  const due = await prisma.blogPost.findMany({
    where: { status: "scheduled", publishedDate: { lte: now } },
    orderBy: { publishedDate: "asc" },
    select: { id: true, slug: true, title: true, publishedDate: true },
  });
  if (due.length === 0) return [];

  await prisma.blogPost.updateMany({
    where: { id: { in: due.map((post) => post.id) }, status: "scheduled" },
    data: { status: "published" },
  });

  const slugs = due.map((post) => post.slug);
  await refreshBlogCaches(slugs);
  await submitToIndexNow([...slugs.map((slug) => `/blog/${slug}`), "/blog"]);

  return due.map(({ slug, title, publishedDate }) => ({ slug, title, publishedDate }));
}
