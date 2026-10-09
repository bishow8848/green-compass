import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { invalidateCachePattern, cacheKeys } from "@/lib/redis";
import { submitToIndexNow } from "@/lib/indexnow";

/**
 * Drop every cached view of the blog so the next visit reads the database:
 * the Redis entries, then the pages Next has rendered from them.
 *
 * Pass the slugs that changed. Each post's own URL is revalidated by name as
 * well as through the layout, because a URL visited before its post went live
 * holds a cached 404, and that has to go the moment the post is published.
 */
export async function refreshBlogCaches(slugs: string[] = []): Promise<void> {
  await Promise.all([
    invalidateCachePattern(cacheKeys.pattern.blog),
    invalidateCachePattern(cacheKeys.pattern.home),
    invalidateCachePattern(cacheKeys.pattern.author),
  ]);
  revalidatePath("/", "layout");
  revalidatePath("/sitemap.xml");
  for (const slug of slugs) revalidatePath(`/blog/${slug}`);
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
