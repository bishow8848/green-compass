import { redis, tryRedis, CACHE_SITE_KEY } from "@/lib/redis";

/**
 * Visitor counts for the admin Visitors page, kept in Redis.
 *
 * Each browser holds an anonymous random ID (components/layout/VisitorTracker.tsx)
 * and reports every page it shows, then pings while the page stays open. Per
 * Nepal day, the IDs go into a HyperLogLog, which counts distinct members in
 * at most 12KB without storing them, and page views into a counter. Visitors
 * over several days are the count of those days' logs together, so someone
 * who came back on three days counts once. Who is on the site now is a sorted
 * set of IDs scored by when each was last heard from.
 *
 * The keys sit outside the page cache's namespace, so clearing the cache
 * (npm run cache:reset) leaves them alone.
 */

const PREFIX = `mardi:visitors:${CACHE_SITE_KEY}:`;
const ACTIVE = `${PREFIX}active`;
/** Someone counts as on the site for this long after their last page view or ping. */
export const ACTIVE_WINDOW_MS = 5 * 60_000;
/** Days of counts kept: the longest summary, and a week to spare. */
const KEEP_DAYS = 35;
/** The summaries on the Visitors page: the days ending today. */
export const RANGES = [1, 7, 14, 28] as const;

const visitorsKey = (day: string) => `${PREFIX}day:${day}:visitors`;
const viewsKey = (day: string) => `${PREFIX}day:${day}:views`;

/** YYYY-MM-DD in Nepal, where the business runs and its day starts. */
const nepalDate = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kathmandu" });

/**
 * Today and the days before it in Nepal, newest first. Nepal has no daylight
 * saving, so every day there is 24 hours long.
 */
export function nepalDays(count: number, now = Date.now()): string[] {
  return Array.from({ length: count }, (_, i) => nepalDate.format(now - i * 86_400_000));
}

/** A page view, or a ping from a page still open (which only keeps them active). */
export async function recordVisit(id: string, kind: "view" | "ping"): Promise<void> {
  const now = Date.now();
  await tryRedis("record visit", () => {
    const pipeline = redis.pipeline().zadd(ACTIVE, { score: now, member: id });
    if (kind === "view") {
      const [today] = nepalDays(1, now);
      pipeline
        .zremrangebyscore(ACTIVE, 0, now - ACTIVE_WINDOW_MS)
        .pfadd(visitorsKey(today), id)
        .incr(viewsKey(today))
        .expire(visitorsKey(today), KEEP_DAYS * 86_400)
        .expire(viewsKey(today), KEEP_DAYS * 86_400);
    }
    return pipeline.exec();
  });
}

/** How many visitors were on the site in the last ACTIVE_WINDOW_MS; null if Redis can't be reached. */
export async function activeVisitors(): Promise<number | null> {
  const result = await tryRedis("count active visitors", () =>
    redis.zcount(ACTIVE, Date.now() - ACTIVE_WINDOW_MS, "+inf")
  );
  return result.ok ? result.value : null;
}

export interface VisitorRange {
  days: (typeof RANGES)[number];
  visitors: number;
  pageViews: number;
}

export interface VisitorSummary {
  ranges: VisitorRange[];
  /** The first day with any visits, when that is recent enough to cut the longer ranges short. */
  countingSince: string | null;
}

/** Visitors and page views for each of RANGES; null if Redis can't be reached. */
export async function visitorSummary(): Promise<VisitorSummary | null> {
  const days = nepalDays(Math.max(...RANGES));
  const result = await tryRedis("read visitor summary", () => {
    const pipeline = redis.pipeline();
    for (const count of RANGES) {
      const [first, ...rest] = days.slice(0, count).map(visitorsKey);
      pipeline.pfcount(first, ...rest);
    }
    const [first, ...rest] = days.map(viewsKey);
    pipeline.mget(first, ...rest);
    return pipeline.exec<unknown[]>();
  });
  if (!result.ok) return null;

  const uniques = result.value.slice(0, RANGES.length).map(Number);
  const views = (result.value[RANGES.length] as unknown[]).map((value) => Number(value ?? 0));
  const ranges = RANGES.map((count, i) => ({
    days: count,
    visitors: uniques[i],
    pageViews: views.slice(0, count).reduce((sum, n) => sum + n, 0),
  }));

  const oldestCounted = views.findLastIndex((n) => n > 0);
  return {
    ranges,
    countingSince: oldestCounted >= 0 && oldestCounted < days.length - 1 ? days[oldestCounted] : null,
  };
}
