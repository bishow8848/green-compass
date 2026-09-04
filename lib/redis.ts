import { Redis } from "@upstash/redis";
import { unstable_cache } from "next/cache";

// Cache TTLs (seconds) — based on content type and update frequency
export const CACHE_TTL = {
  /** Rarely-changing layout data: categories, site settings, navigation */
  LAYOUT: 3600,           // 1 hour
  /** Moderately dynamic content: trek lists, blog posts, reviews */
  MODERATE: 1800,         // 30 minutes
  /** Frequently changing stats: booking counts, review counts */
  FREQUENT: 300,          // 5 minutes
  /** Page content from CMS (rarely changes after publish) */
  PAGE_CONTENT: 3600,     // 1 hour
  /** Default fallback */
  DEFAULT: 300,           // 5 minutes
  /** Content updated roughly once a day — blog & category listing pages */
  DAILY: 86400,           // 1 day
  /** Content updated roughly once a week — home, about, contact, detail pages */
  WEEKLY: 604800,         // 7 days
  /** 1 year — default TTL for all CMS-driven content; invalidated on-demand (revalidatePath) */
  YEARLY: 31536000,       // 1 year
} as const;

/**
 * Redis is an optimization, not a hard dependency — and an unreachable Upstash
 * must not be allowed to slow a page down, which is exactly what happens by
 * default: undici waits 10s before giving up on a connection, and the client
 * retries five times behind that, so a single cache key can cost a minute.
 * Two guards keep an outage cheap.
 *
 * 1. Every command carries its own abort signal, capping one attempt at
 *    REDIS_TIMEOUT_MS. The signal is passed as a factory so the client mints a
 *    fresh one per request — and, per its contract, rethrows immediately
 *    instead of retrying once a factory-supplied signal fires.
 * 2. A circuit breaker bypasses Redis entirely after repeated failures, so a
 *    sustained outage costs one timeout per cooldown window rather than one
 *    per cache key on every render.
 */
const REDIS_TIMEOUT_MS = Number(process.env.REDIS_TIMEOUT_MS) || 1000;
const BREAKER_FAILURE_THRESHOLD = 3;
const BREAKER_COOLDOWN_MS = 30_000;

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
  signal: () => AbortSignal.timeout(REDIS_TIMEOUT_MS),
  retry: { retries: 1 },
});

const isRedisConfigured = Boolean(
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
);

let consecutiveFailures = 0;
let breakerOpenUntil = 0;

function redisAvailable(): boolean {
  if (!isRedisConfigured) return false;
  if (breakerOpenUntil === 0) return true;
  if (Date.now() < breakerOpenUntil) return false;

  // Cooldown elapsed — let a single probe through. Priming the counter one
  // short of the threshold means one more failure re-opens the breaker for a
  // full window, while a success resets it.
  breakerOpenUntil = 0;
  consecutiveFailures = BREAKER_FAILURE_THRESHOLD - 1;
  return true;
}

/**
 * Run a Redis command behind the breaker. Never throws: a miss and a failure
 * are the same thing to every caller here, so both come back as `ok: false`.
 */
async function tryRedis<T>(
  label: string,
  run: () => Promise<T>
): Promise<{ ok: true; value: T } | { ok: false }> {
  if (!redisAvailable()) return { ok: false };

  try {
    const value = await run();
    consecutiveFailures = 0;
    return { ok: true, value };
  } catch (error) {
    consecutiveFailures += 1;
    console.error(`[redis] ${label} failed:`, error);
    if (consecutiveFailures >= BREAKER_FAILURE_THRESHOLD && breakerOpenUntil === 0) {
      breakerOpenUntil = Date.now() + BREAKER_COOLDOWN_MS;
      console.error(
        `[redis] ${consecutiveFailures} consecutive failures — bypassing Redis for ${Math.round(
          BREAKER_COOLDOWN_MS / 1000
        )}s`
      );
    }
    return { ok: false };
  }
}

/**
 * Cache isolation between sites that share the same Upstash instance.
 *
 * Two projects can legitimately point at the same Redis account (same
 * UPSTASH_REDIS_REST_URL/TOKEN) — if they also share the same key namespace
 * they read/write each other's entries, which caused stale/empty (null)
 * content to leak between sites. Give every site its own namespace:
 *
 *   mardi:cache:v2:<site-key>:
 *
 * The site key is derived from the canonical site URL host (www. normalized
 * away so the apex and www hosts share one namespace). Override it explicitly
 * with REDIS_CACHE_NAMESPACE when the URL alone isn't a unique enough
 * discriminator (e.g. two projects both defaulting to localhost locally).
 */
function resolveCacheSiteKey(): string {
  const override = process.env.REDIS_CACHE_NAMESPACE;
  if (override) {
    return override
      .trim()
      .replace(/^:+|:+$/g, "")
      .replace(/[^a-zA-Z0-9._-]/g, "_");
  }

  const siteUrl = process.env.SITE_URL || "https://greencompasstreks.com";
  try {
    const host = new URL(siteUrl).hostname.replace(/^www\./, "").toLowerCase();
    return host || "default";
  } catch {
    return "default";
  }
}

const CACHE_SITE_KEY = resolveCacheSiteKey();
const CACHE_NAMESPACE = `mardi:cache:v2:${CACHE_SITE_KEY}:`;
const NEXT_CACHE_TAG_NAMESPACE = `mardi-cache:${CACHE_SITE_KEY}:`;

/** The Next Data Cache tag paired with a Redis cache key. */
export function nextCacheTag(key: string): string {
  return `${NEXT_CACHE_TAG_NAMESPACE}${key}`;
}

function namespacedKey(key: string): string {
  return `${CACHE_NAMESPACE}${key}`;
}

type CacheEnvelope = {
  version: 1;
  payload: string;
};

/**
 * JSON normally turns Dates into strings and cannot encode bigint. Preserve
 * both so a Redis hit has the same runtime shape as the Prisma result it
 * replaces.
 */
function serializeCacheValue(value: unknown): string {
  return JSON.stringify(value, function (key, currentValue) {
    const originalValue = key === "" ? value : this[key];

    if (originalValue instanceof Date) {
      return { __mardiCacheType: "date", value: originalValue.toISOString() };
    }
    if (typeof originalValue === "bigint") {
      return { __mardiCacheType: "bigint", value: originalValue.toString() };
    }
    return currentValue;
  });
}

function deserializeCacheValue<T>(payload: string): T {
  return JSON.parse(payload, (_key, value) => {
    if (value?.__mardiCacheType === "date") {
      return new Date(value.value);
    }
    if (value?.__mardiCacheType === "bigint") {
      return BigInt(value.value);
    }
    return value;
  }) as T;
}

// Cache keys
export const cacheKeys = {
  // Treks
  treks: "treks:list",
  trek: (slug: string) => `trek:${slug}`,
  trekAvailability: (slug: string, date: string) =>
    `trek:${slug}:availability:${date}`,
  featuredTreks: "treks:featured",
  featuredSectionTreks: "treks:featured-section",
  /** Full search shape — MUST include `id` + `heroImage` (home & about pages
   *  resolve the About-Us section's selected trek from this). Keep ONLY
   *  consumers that need those fields on this key. */
  searchTreks: "treks:search",
  /** Lightweight trek list (id, title, slug, region, difficulty, duration,
   *  category) for PageHero search dropdowns and the admin similar-treks
   *  selector. Do NOT write to `searchTreks` with this shape — it would
   *  overwrite the full shape and break hero-image resolution. */
  treksListAll: "treks:list-all",

  // Blog
  blogPosts: "blog:list",
  blogPostsAll: "blog:list:all",
  blogPostsCount: "blog:count",
  blogPostsPage: (page: number) => `blog:list:page:${page}`,
  blogPost: (slug: string) => `blog:${slug}`,
  blogPostMeta: (slug: string) => `blog:${slug}:meta`,

  // Layout
  categories: "layout:categories",
  siteSettings: "layout:site-settings",
  dropdownTreks: "layout:dropdown-treks",
  allRegions: "layout:regions",

  // Footer — dedicated keys (distinct shapes from layout/siteSettings)
  footerLatestBlogs: "blog:footer-latest",
  footerSettings: "layout:footer-settings",

  // Homepage
  // Versioned so a previously poisoned full-settings entry cannot be reused
  // after deploying the shape-safe cache keys below.
  homeSettings: "home:settings:full-v2",
  // Partial home-settings shapes must use separate keys. Sharing the full-row
  // key with a select query can make Redis return an object missing fields
  // required by the homepage (for example, featured trek IDs).
  homeMetadata: "home:metadata",
  homeContactSettings: "home:contact-settings",
  homeFeaturedSelection: "home:featured-selection",
  latestReviews: "home:latest-reviews",
  topRatedTreks: "home:top-rated-treks",
  latestBlogPosts: "home:latest-blog-posts",
  homeSeo: "home:seo",
  whyChooseUs: "home:why-choose-us",

  // Category listing
  categoryBySlug: (slug: string) => `category:${slug}`,
  categoryTreksAll: (catId: string) => `category:${catId}:treks-all`,

  // Pages
  // v3 starts every consumer on the same parsed page-content shape. Earlier
  // entries could contain either that shape or the raw SiteSetting row.
  pageContent: "site:page-content:v3",
  pageBySlug: (slug: string) => `site:page:${slug}`,

  // Team
  teamMember: (slug: string) => `team:${slug}`,
  teamMembers: "team:list",

  // Pattern helpers for bulk invalidation
  pattern: {
    treks: "trek*",
    blog: "blog:*",
    layout: "layout:*",
    home: "home:*",
    category: "category:*",
    site: "site:*",
    team: "team:*",
    author: "author:*",
  },
};

const HOME_SETTINGS_CACHE_KEYS = new Set([
  cacheKeys.homeSettings,
  cacheKeys.homeMetadata,
  cacheKeys.homeContactSettings,
  cacheKeys.homeFeaturedSelection,
]);

export async function getCachedOrFetch<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttl = 300
): Promise<T> {
  // Upstash's REST client deliberately uses `no-store`. Keeping that request
  // inside Next's cache boundary allows public routes to remain ISR/static
  // while Redis remains the shared cache behind Next's regional Data Cache.
  const tags = Array.from(new Set([
    nextCacheTag(key),
    // All home-settings variants represent the same database row. The shared
    // tag lets a CMS save expire every shape, not only the full-row key.
    ...(HOME_SETTINGS_CACHE_KEYS.has(key) ? [nextCacheTag(cacheKeys.homeSettings)] : []),
  ]));

  return unstable_cache(
    async () => {
      const cached = await tryRedis(`read cache key "${key}"`, () =>
        redis.get<CacheEnvelope>(namespacedKey(key))
      );
      if (
        cached.ok &&
        cached.value?.version === 1 &&
        typeof cached.value.payload === "string"
      ) {
        return deserializeCacheValue<T>(cached.value.payload);
      }

      const value = await fetcher();
      await writeCache(key, value, ttl);
      return value;
    },
    ["mardi-redis-cache", key],
    { revalidate: ttl, tags }
  )();
}

/**
 * Write a value under the namespaced envelope `getCachedOrFetch` reads back.
 * Anything that writes with `redis.set`/`redis.setex` directly lands on an
 * un-namespaced key in a shape the reader rejects, so route writes through
 * here.
 */
async function writeCache(key: string, value: unknown, ttl: number): Promise<void> {
  const envelope: CacheEnvelope = {
    version: 1,
    payload: serializeCacheValue(value),
  };
  await tryRedis(`write cache key "${key}"`, () =>
    redis.set(namespacedKey(key), envelope, { ex: Math.max(1, Math.floor(ttl)) })
  );
}

export async function invalidateCache(key: string): Promise<void> {
  await tryRedis(`invalidate cache key "${key}"`, () =>
    redis.del(namespacedKey(key))
  );
}

export async function invalidateCachePattern(pattern: string): Promise<void> {
  await tryRedis(`invalidate cache pattern "${pattern}"`, async () => {
    // Use SCAN instead of KEYS to avoid blocking Redis on large datasets
    const keys: string[] = [];
    let cursor: number | string = 0;
    do {
      const scanResult = await redis.scan(cursor, {
        match: namespacedKey(pattern),
        count: 100,
      }) as [string, string[]];
      cursor = scanResult[0];
      keys.push(...scanResult[1]);
    } while (Number(cursor) !== 0);

    if (keys.length > 0) {
      await redis.del(...keys);
    }
  });
}
