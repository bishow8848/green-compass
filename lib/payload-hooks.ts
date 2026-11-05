import { revalidatePath } from "next/cache";
import { invalidateCachePattern, cacheKeys } from "@/lib/redis";
import { revalidateBlogPages } from "@/lib/blog-publisher";

/**
 * Payload CMS hooks for cache invalidation.
 * These fire whenever content is created/updated/deleted via Payload.
 */

export async function invalidateTreksCache() {
  await Promise.all([
    invalidateCachePattern(cacheKeys.pattern.treks),
    invalidateCachePattern(cacheKeys.pattern.home),
    invalidateCachePattern(cacheKeys.pattern.category),
  ]);
  revalidatePath("/", "layout");
  revalidatePath("/sitemap.xml");
}

export async function invalidateBlogCache() {
  await Promise.all([
    invalidateCachePattern(cacheKeys.pattern.blog),
    invalidateCachePattern(cacheKeys.pattern.home),
  ]);
  // Was revalidatePath("/blog", "layout"), which matches no cache tag (they
  // carry the "(marketing)" route group) and so refreshed nothing.
  revalidateBlogPages();
}

export async function invalidateCategoryCache() {
  await Promise.all([
    invalidateCachePattern(cacheKeys.pattern.category),
    invalidateCachePattern(cacheKeys.pattern.layout),
    invalidateCachePattern(cacheKeys.pattern.treks),
    invalidateCachePattern(cacheKeys.pattern.home),
  ]);
  revalidatePath("/", "layout");
  revalidatePath("/sitemap.xml");
}

export async function invalidatePagesCache() {
  await Promise.all([
    invalidateCachePattern(cacheKeys.pattern.site),
    invalidateCachePattern(cacheKeys.pattern.home),
  ]);
  revalidatePath("/", "layout");
  revalidatePath("/sitemap.xml");
}

export async function invalidateSettingsCache() {
  await Promise.all([
    invalidateCachePattern(cacheKeys.pattern.layout),
    invalidateCachePattern(cacheKeys.pattern.site),
    invalidateCachePattern(cacheKeys.pattern.home),
  ]);
  revalidatePath("/", "layout");
  revalidatePath("/sitemap.xml");
}

export async function invalidateMediaCache() {
  // Media changes can affect any page — broad invalidation
  await Promise.all([
    invalidateCachePattern(cacheKeys.pattern.treks),
    invalidateCachePattern(cacheKeys.pattern.home),
    invalidateCachePattern(cacheKeys.pattern.category),
    invalidateCachePattern(cacheKeys.pattern.blog),
    invalidateCachePattern(cacheKeys.pattern.site),
  ]);
  revalidatePath("/", "layout");
  revalidatePath("/sitemap.xml");
}
