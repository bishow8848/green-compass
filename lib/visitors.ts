import { redis, tryRedis, CACHE_SITE_KEY } from "@/lib/redis";

/**
 * Visitor analytics for the admin Visitors page, kept in Redis.
 *
 * Each browser holds an anonymous random ID (components/layout/VisitorTracker.tsx)
 * and reports every page it shows, then pings while the page stays open.
 *
 * - Per Nepal day, and per hour of it, the IDs go into HyperLogLogs, which
 *   count distinct members in at most 12KB without storing them. Visitors over
 *   several days are the count of those days' logs together, so someone who
 *   came back on three days counts once.
 * - A hash per day counts page views, visits and engaged visits by hour, views
 *   by page, visits by entry page and referring site (or a tagged link's
 *   source), and each visit once
 *   under a single field naming its device, browser, system, new or returning
 *   visitor, channel and country. One field per visit keeps the write to one
 *   command; the report splits them back apart.
 * - A hash per day counts page views by minute, for the live chart.
 * - Who is on the site now is a sorted set of IDs scored by when each was
 *   last heard from, and a short-lived key per visitor holds the page,
 *   country and device they were last seen on.
 *
 * The keys sit outside the page cache's namespace, so clearing the cache
 * (npm run cache:reset) leaves them alone.
 */

const PREFIX = `mardi:visitors:${CACHE_SITE_KEY}:`;
const ACTIVE = `${PREFIX}active`;
const activeKey = (id: string) => `${PREFIX}active:${id}`;
/** Someone counts as on the site for this long after their last page view or ping. */
export const ACTIVE_WINDOW_MS = 5 * 60_000;
const DAY_S = 86_400;
/** Two of the longest range, which is compared with the one before it, and a week to spare. */
const KEEP_DAYS = 63;
/** The ranges on the Visitors page: the days ending today. */
export const RANGES = [1, 7, 14, 28] as const;
export type RangeDays = (typeof RANGES)[number];
/** Minutes in the live chart. */
export const LIVE_MINUTES = 30;
const TOP = 10;
/** Pages listed, all of them in practice: a bound for the report's size. */
const ALL_PAGES = 500;
const TOP_COUNTRIES = 8;

export const DEVICES = ["desktop", "mobile", "tablet"] as const;
export const SOURCES = ["search", "direct", "social", "ai", "other"] as const;
export const BROWSERS = ["chrome", "safari", "edge", "firefox", "samsung", "other"] as const;
export const SYSTEMS = ["android", "ios", "windows", "macos", "linux", "other"] as const;
export const VISITOR_TYPES = ["new", "returning"] as const;
export type Device = (typeof DEVICES)[number];
export type Source = (typeof SOURCES)[number];
export type Browser = (typeof BROWSERS)[number];
export type System = (typeof SYSTEMS)[number];

const dayVisitorsKey = (day: string) => `${PREFIX}day:${day}:visitors`;
/** Only today's and yesterday's are read, so they are kept three days. */
const hourVisitorsKey = (day: string, hour: string) => `${PREFIX}day:${day}:visitors:${hour}`;
/**
 * Fields: views:<HH>, visits:<HH>, engaged:<HH>, page:<path>, entry:<path>,
 * ref:<site or tagged source>, and visit:<device>|<browser>|<system>|<new|returning>|<channel>|<CC>.
 */
const statsKey = (day: string) => `${PREFIX}day:${day}:stats`;
/** Fields: <HHMM>, page views in that minute. */
const minutesKey = (day: string) => `${PREFIX}day:${day}:minutes`;

/** YYYY-MM-DD in Nepal, where the business runs and its day starts. */
const nepalDate = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kathmandu" });
/** HH:MM in Nepal. */
const nepalTime = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kathmandu", hour: "2-digit", minute: "2-digit", hourCycle: "h23" });

/**
 * Today and the days before it in Nepal, newest first. Nepal has no daylight
 * saving, so every day there is 24 hours long.
 */
export function nepalDays(count: number, now = Date.now()): string[] {
  return Array.from({ length: count }, (_, i) => nepalDate.format(now - i * 86_400_000));
}

/** The day, hour and minute in Nepal at `time`. */
function nepalClock(time: number) {
  const [hour, minute] = nepalTime.format(time).split(":");
  return { day: nepalDate.format(time), hour, minute };
}

/**
 * Channels, by the host of the site that sent a visit and by the name a tagged
 * link may give instead (utm_source=facebook). AI assistants come first:
 * Gemini lives on google.com. Search is the engines' own pages, not Google's
 * mail or sign-in.
 */
const CHANNELS: Array<[Source, host: RegExp, name: RegExp]> = [
  [
    "ai",
    /(^|\.)(chatgpt\.com|openai\.com|perplexity\.ai|claude\.ai|gemini\.google\.com|copilot\.microsoft\.com|copilot\.com|deepseek\.com|grok\.com|meta\.ai|mistral\.ai)$/,
    /^(chatgpt|openai|perplexity|claude|gemini|copilot|deepseek|grok)$/,
  ],
  [
    "search",
    /^([a-z]{1,2}\.)?(search\.)?(google|bing|duckduckgo|yahoo|baidu|yandex|ecosia|naver|brave|startpage|qwant)\.[a-z]{2,3}(\.[a-z]{2})?$/,
    /^(google|bing|duckduckgo|yahoo|baidu|yandex|ecosia|naver|brave|startpage|qwant)$/,
  ],
  [
    "social",
    /(^|\.)(facebook\.com|fb\.com|messenger\.com|instagram\.com|t\.co|twitter\.com|x\.com|linkedin\.com|lnkd\.in|pinterest\.[a-z.]+|youtube\.com|reddit\.com|tiktok\.com|whatsapp\.com|threads\.net|t\.me|telegram\.org)$/,
    /^(facebook|fb|messenger|instagram|ig|twitter|x|linkedin|pinterest|youtube|reddit|tiktok|whatsapp|threads|telegram)$/,
  ],
];

/** Android apps give their package as the referrer's host. */
const APPS: Record<string, string> = {
  "com.google.android.googlequicksearchbox": "google.com",
  "com.google.android.gm": "mail.google.com",
  "com.openai.chatgpt": "chatgpt.com",
  "com.facebook.katana": "facebook.com",
  "com.facebook.orca": "messenger.com",
  "com.instagram.android": "instagram.com",
  "com.linkedin.android": "linkedin.com",
  "com.twitter.android": "x.com",
  "com.reddit.frontpage": "reddit.com",
  "com.whatsapp": "whatsapp.com",
  "org.telegram.messenger": "telegram.org",
};

/**
 * The site a referrer stands for, lower case: its host without www., m. and
 * the like, so m.facebook.com and l.facebook.com are both facebook.com, and an
 * Android app as its site.
 */
export function referringSite(host: string): string {
  const lower = host.toLowerCase();
  if (APPS[lower]) return APPS[lower];
  const bare = lower.replace(/^(www|m|l|lm|mobile|mbasic)\./, "");
  return bare.includes(".") ? bare : lower;
}

/**
 * Where a visit came from: `from` is the host that linked here, or what a
 * tagged link names as its source, a host or a name. None, or this site
 * itself, is direct.
 */
export function sourceOf(from: string, siteHost: string): Source {
  const site = referringSite(from);
  if (!site || site === referringSite(siteHost)) return "direct";
  const byHost = site.includes(".");
  return CHANNELS.find(([, host, name]) => (byHost ? host : name).test(site))?.[0] ?? "other";
}

/** The browser, from its user agent. Edge, Samsung and Opera also say Chrome, so they are asked first. */
export function browserOf(userAgent: string): Browser {
  if (/Edg(e|A|iOS)?\//.test(userAgent)) return "edge";
  if (/SamsungBrowser\//.test(userAgent)) return "samsung";
  if (/OPR\/|Opera|YaBrowser|UCBrowser/.test(userAgent)) return "other";
  if (/Firefox\/|FxiOS\//.test(userAgent)) return "firefox";
  if (/Chrome\/|CriOS\//.test(userAgent)) return "chrome";
  if (/Safari\//.test(userAgent)) return "safari";
  return "other";
}

/** The operating system; an iPad asking for desktop sites says Macintosh, so the device settles it. */
export function systemOf(userAgent: string, device: Device): System {
  if (/iPhone|iPad|iPod/.test(userAgent) || (device === "tablet" && /Macintosh/.test(userAgent))) return "ios";
  if (/Android/.test(userAgent)) return "android";
  if (/Windows/.test(userAgent)) return "windows";
  if (/Macintosh|Mac OS X/.test(userAgent)) return "macos";
  if (/Linux|CrOS/.test(userAgent)) return "linux";
  return "other";
}

export interface PageView {
  path: string;
  /** Two-letter country code, XX when unknown. */
  country: string;
  device: Device;
  /** The visit's second page: the visit didn't bounce. */
  engaged?: boolean;
  /** Only on the first page of a visit. */
  visit?: {
    browser: Browser;
    system: System;
    returning: boolean;
    source: Source;
    /** The referring site (referringSite), or the source a tagged link names; empty for a direct visit. */
    referrer: string;
  };
}

/** A page view, or with none, a ping from a page still open, which only keeps the visitor active. */
export async function recordVisit(id: string, view?: PageView): Promise<void> {
  const now = Date.now();
  if (!view) {
    await tryRedis("record ping", () =>
      redis.pipeline().zadd(ACTIVE, { score: now, member: id }).expire(activeKey(id), ACTIVE_WINDOW_MS / 1000).exec()
    );
    return;
  }

  const { day, hour, minute } = nepalClock(now);
  const stats = statsKey(day);
  const result = await tryRedis("record page view", () => {
    // First, so its result tells whether this is the hour's first view.
    const pipeline = redis.pipeline().hincrby(stats, `views:${hour}`, 1);
    pipeline
      .zadd(ACTIVE, { score: now, member: id })
      .set(activeKey(id), [view.path, view.country, view.device].join("|"), { ex: ACTIVE_WINDOW_MS / 1000 })
      .pfadd(dayVisitorsKey(day), id)
      .pfadd(hourVisitorsKey(day, hour), id)
      .hincrby(stats, `page:${view.path}`, 1)
      .hincrby(minutesKey(day), hour + minute, 1);
    if (view.engaged) pipeline.hincrby(stats, `engaged:${hour}`, 1);
    if (view.visit) {
      const { browser, system, returning, source, referrer } = view.visit;
      const visitor = returning ? "returning" : "new";
      pipeline
        .zremrangebyscore(ACTIVE, 0, now - ACTIVE_WINDOW_MS)
        .hincrby(stats, `visits:${hour}`, 1)
        .hincrby(stats, `entry:${view.path}`, 1)
        .hincrby(stats, `visit:${[view.device, browser, system, visitor, source, view.country].join("|")}`, 1);
      if (referrer) pipeline.hincrby(stats, `ref:${referrer}`, 1);
    }
    return pipeline.exec<unknown[]>();
  });

  // The day's keys get their expiry once an hour, on its first view, rather than on every view.
  if (result.ok && result.value[0] === 1) {
    await tryRedis("expire visitor counts", () =>
      redis
        .pipeline()
        .expire(stats, KEEP_DAYS * DAY_S)
        .expire(dayVisitorsKey(day), KEEP_DAYS * DAY_S)
        .expire(hourVisitorsKey(day, hour), 3 * DAY_S)
        .expire(minutesKey(day), 2 * DAY_S)
        .exec()
    );
  }
}

export interface Count {
  key: string;
  count: number;
}

export interface Live {
  /** Visitors heard from in the last ACTIVE_WINDOW_MS. */
  active: number;
  /** Page views in each of the last LIVE_MINUTES minutes, oldest first; the last is this minute so far. */
  minutes: number[];
  /** What the active visitors are looking at, where they are and on what. */
  pages: Count[];
  countries: Count[];
  devices: Count[];
}

/** Who is on the site now; null if Redis can't be reached. */
export async function liveVisitors(now = Date.now()): Promise<Live | null> {
  const stamps = Array.from({ length: LIVE_MINUTES }, (_, i) => nepalClock(now - (LIVE_MINUTES - 1 - i) * 60_000));
  const days = [...new Set(stamps.map((stamp) => stamp.day))];

  const first = await tryRedis("read live visitors", () => {
    const pipeline = redis
      .pipeline()
      .zcount(ACTIVE, now - ACTIVE_WINDOW_MS, "+inf")
      .zrange(ACTIVE, now - ACTIVE_WINDOW_MS, "+inf", { byScore: true, offset: 0, count: 500 });
    for (const day of days) {
      const [field, ...fields] = stamps.filter((stamp) => stamp.day === day).map((stamp) => stamp.hour + stamp.minute);
      pipeline.hmget(minutesKey(day), field, ...fields);
    }
    return pipeline.exec<unknown[]>();
  });
  if (!first.ok) return null;

  const [active, ids, ...minuteHashes] = first.value as [number, string[], ...Array<Record<string, unknown> | null>];
  const perMinute = new Map<string, number>();
  days.forEach((day, d) => {
    for (const [field, value] of Object.entries(minuteHashes[d] ?? {})) perMinute.set(day + field, Number(value) || 0);
  });

  const seen = ids.length
    ? await tryRedis("read live pages", () => redis.mget<Array<string | null>>(...ids.map(activeKey)))
    : { ok: true as const, value: [] };
  const pages = new Map<string, number>();
  const countries = new Map<string, number>();
  const devices = new Map<string, number>();
  for (const entry of seen.ok ? seen.value : []) {
    if (typeof entry !== "string") continue;
    const [path, country, device] = entry.split("|");
    pages.set(path, (pages.get(path) ?? 0) + 1);
    countries.set(country, (countries.get(country) ?? 0) + 1);
    devices.set(device, (devices.get(device) ?? 0) + 1);
  }
  const ranked = (counts: Map<string, number>) =>
    [...counts].map(([key, count]) => ({ key, count })).sort((a, b) => b.count - a.count);

  return {
    active: Number(active) || 0,
    minutes: stamps.map((stamp) => perMinute.get(stamp.day + stamp.hour + stamp.minute) ?? 0),
    pages: ranked(pages).slice(0, 6),
    countries: ranked(countries).slice(0, 6),
    devices: DEVICES.map((key) => ({ key, count: devices.get(key) ?? 0 })),
  };
}

/** A period's counts; pages per visit and bounce rate are worked out from them. */
export interface Totals {
  visitors: number;
  visits: number;
  pageViews: number;
  /** Visits that went on to a second page. */
  engaged: number;
}

export interface Point extends Totals {
  /** The hour (HH) for today, the day (YYYY-MM-DD) for longer ranges. */
  at: string;
}

export interface RangeReport {
  days: RangeDays;
  /** First and last day, YYYY-MM-DD. */
  from: string;
  to: string;
  current: Totals;
  /** The period before, the same length: for today, yesterday up to this hour. */
  previous: Totals;
  /** Hour by hour up to now for today, day by day otherwise; oldest first. */
  series: Point[];
  /** The previous period's points, lined up with series. */
  previousSeries: Point[];
  /** By page views. */
  pages: Count[];
  /** The page each visit started on, by visits. */
  entryPages: Count[];
  /** Referring sites and tagged links' sources, by visits. */
  referrers: Count[];
  /** These five in their fixed orders, so each keeps its colour. */
  sources: Count[];
  devices: Count[];
  browsers: Count[];
  systems: Count[];
  visitorTypes: Count[];
  /** By visits, country codes (XX: unknown), the rest folded into "other". */
  countries: Count[];
  /** Page views by weekday (Monday first) and hour, over the range, or the last week for today. */
  heatmap: { days: number; cells: number[][] };
}

export interface VisitorReport {
  generatedAt: number;
  ranges: RangeReport[];
  /** The first day with any visits, when that is recent enough to cut the longer ranges short. */
  countingSince: string | null;
}

/** Everything the Visitors page shows for each of RANGES; null if Redis can't be reached. */
export async function visitorReport(now = Date.now()): Promise<VisitorReport | null> {
  const longest = Math.max(...RANGES);
  const days = nepalDays(2 * longest, now);
  const hours = Array.from({ length: Number(nepalClock(now).hour) + 1 }, (_, h) => String(h).padStart(2, "0"));
  const union = (keys: string[]) => [keys[0], ...keys.slice(1)] as [string, ...string[]];

  const result = await tryRedis("read visitor report", () => {
    const pipeline = redis.pipeline();
    for (const count of RANGES) {
      pipeline.pfcount(...union(days.slice(0, count).map(dayVisitorsKey)));
      pipeline.pfcount(
        ...union(
          count === 1
            ? hours.map((hour) => hourVisitorsKey(days[1], hour))
            : days.slice(count, 2 * count).map(dayVisitorsKey)
        )
      );
    }
    for (const day of days) pipeline.pfcount(dayVisitorsKey(day));
    for (const day of days.slice(0, 2)) for (const hour of hours) pipeline.pfcount(hourVisitorsKey(day, hour));
    for (const day of days) pipeline.hgetall(statsKey(day));
    return pipeline.exec<unknown[]>();
  });
  if (!result.ok) return null;

  let next = 0;
  const take = (count: number) => result.value.slice(next, (next += count));
  const rangeVisitors = take(2 * RANGES.length).map(Number);
  const dayVisitors = take(days.length).map(Number);
  const hourVisitors = [take(hours.length).map(Number), take(hours.length).map(Number)];
  const dayStats = take(days.length).map(toCounts);

  /** A day's totals, or the part of it up to and including `hours`. */
  const dayTotals = (stats: Record<string, number>, visitors: number, upTo?: string[]): Totals => {
    const sum = (prefix: string) =>
      upTo ? upTo.reduce((total, hour) => total + (stats[`${prefix}:${hour}`] ?? 0), 0) : sumOf(stats, `${prefix}:`);
    return { visitors, visits: sum("visits"), pageViews: sum("views"), engaged: sum("engaged") };
  };
  const hourPoints = (d: number): Point[] =>
    hours.map((hour, h) => ({ at: hour, ...dayTotals(dayStats[d], hourVisitors[d][h], [hour]) }));
  const dayPoints = (from: number, count: number): Point[] =>
    days
      .slice(from, from + count)
      .map((day, i) => ({ at: day, ...dayTotals(dayStats[from + i], dayVisitors[from + i]) }))
      .reverse();

  const ranges = RANGES.map((count, r): RangeReport => {
    const stats = merge(dayStats.slice(0, count));
    const visits = ranked(stats, "visit:");
    const tally = <K extends string>(keys: readonly K[], part: number) =>
      keys.map((key) => ({ key, count: visits.reduce((sum, v) => (v.key.split("|")[part] === key ? sum + v.count : sum), 0) }));
    const countries = new Map<string, number>();
    for (const v of visits) {
      const country = v.key.split("|")[5] ?? "XX";
      countries.set(country, (countries.get(country) ?? 0) + v.count);
    }

    const heatDays = Math.max(count, 7);
    const cells = Array.from({ length: 7 }, () => Array<number>(24).fill(0));
    days.slice(0, heatDays).forEach((day, d) => {
      const weekday = (new Date(`${day}T00:00:00Z`).getUTCDay() + 6) % 7;
      for (let hour = 0; hour < 24; hour++) cells[weekday][hour] += dayStats[d][`views:${String(hour).padStart(2, "0")}`] ?? 0;
    });

    return {
      days: count,
      from: days[count - 1],
      to: days[0],
      current: dayTotals(stats, rangeVisitors[2 * r]),
      previous:
        count === 1
          ? dayTotals(dayStats[1], rangeVisitors[2 * r + 1], hours)
          : dayTotals(merge(dayStats.slice(count, 2 * count)), rangeVisitors[2 * r + 1]),
      series: count === 1 ? hourPoints(0) : dayPoints(0, count),
      previousSeries: count === 1 ? hourPoints(1) : dayPoints(count, count),
      pages: ranked(stats, "page:").slice(0, ALL_PAGES),
      entryPages: ranked(stats, "entry:").slice(0, ALL_PAGES),
      referrers: ranked(stats, "ref:").slice(0, TOP),
      sources: tally(SOURCES, 4),
      devices: tally(DEVICES, 0),
      browsers: tally(BROWSERS, 1),
      systems: tally(SYSTEMS, 2),
      visitorTypes: tally(VISITOR_TYPES, 3),
      countries: foldTail(
        [...countries].map(([key, n]) => ({ key, count: n })).sort((a, b) => b.count - a.count),
        TOP_COUNTRIES
      ),
      heatmap: { days: heatDays, cells },
    };
  });

  const recent = dayStats.slice(0, longest);
  const oldestCounted = recent.findLastIndex((stats) => sumOf(stats, "views:") > 0);
  return {
    generatedAt: now,
    ranges,
    countingSince: oldestCounted >= 0 && oldestCounted < longest - 1 ? days[oldestCounted] : null,
  };
}

/** A day's hash as numbers; a day with no visits has no hash. */
function toCounts(hash: unknown): Record<string, number> {
  if (!hash || typeof hash !== "object") return {};
  return Object.fromEntries(Object.entries(hash).map(([field, value]) => [field, Number(value) || 0]));
}

function merge(days: Array<Record<string, number>>): Record<string, number> {
  const total: Record<string, number> = {};
  for (const day of days) for (const [field, count] of Object.entries(day)) total[field] = (total[field] ?? 0) + count;
  return total;
}

function sumOf(stats: Record<string, number>, prefix: string): number {
  return Object.entries(stats).reduce((sum, [field, count]) => (field.startsWith(prefix) ? sum + count : sum), 0);
}

/** The fields under `prefix`, most first. */
function ranked(stats: Record<string, number>, prefix: string): Count[] {
  return Object.entries(stats)
    .filter(([field]) => field.startsWith(prefix))
    .map(([field, count]) => ({ key: field.slice(prefix.length), count }))
    .sort((a, b) => b.count - a.count);
}

/** The first `keep`, and the rest added up as "other". */
function foldTail(counts: Count[], keep: number): Count[] {
  if (counts.length <= keep + 1) return counts;
  const rest = counts.slice(keep).reduce((sum, { count }) => sum + count, 0);
  return [...counts.slice(0, keep), { key: "other", count: rest }];
}
