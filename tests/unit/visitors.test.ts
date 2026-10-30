import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// An in-memory stand-in for the Redis commands lib/visitors.ts uses. A
// HyperLogLog is approximate; a Set gives the exact count it estimates.
const fake = vi.hoisted(() => {
  const logs = new Map<string, Set<string>>();
  const hashes = new Map<string, Record<string, number>>();
  const strings = new Map<string, string>();
  const sorted = new Map<string, Map<string, number>>();
  const zset = (key: string) => sorted.get(key) ?? sorted.set(key, new Map()).get(key)!;
  const inRange = (key: string, min: number) => [...zset(key)].filter(([, score]) => score >= min).map(([member]) => member);

  const pipeline = () => {
    const ops: Array<() => unknown> = [];
    const chain = {
      zadd: (key: string, { score, member }: { score: number; member: string }) => (ops.push(() => zset(key).set(member, score)), chain),
      zremrangebyscore: (key: string, min: number, max: number) =>
        (ops.push(() => {
          for (const [member, score] of zset(key)) if (score >= min && score <= max) zset(key).delete(member);
        }),
        chain),
      zcount: (key: string, min: number) => (ops.push(() => inRange(key, min).length), chain),
      zrange: (key: string, min: number) => (ops.push(() => inRange(key, min)), chain),
      set: (key: string, value: string) => (ops.push(() => strings.set(key, value)), chain),
      pfadd: (key: string, id: string) => (ops.push(() => (logs.get(key) ?? logs.set(key, new Set()).get(key)!).add(id)), chain),
      pfcount: (...keys: string[]) => (ops.push(() => new Set(keys.flatMap((key) => [...(logs.get(key) ?? [])])).size), chain),
      hincrby: (key: string, field: string, by: number) =>
        (ops.push(() => {
          const hash = hashes.get(key) ?? hashes.set(key, {}).get(key)!;
          return (hash[field] = (hash[field] ?? 0) + by);
        }),
        chain),
      hgetall: (key: string) => (ops.push(() => hashes.get(key) ?? null), chain),
      hmget: (key: string, ...fields: string[]) =>
        (ops.push(() => Object.fromEntries(fields.map((field) => [field, hashes.get(key)?.[field] ?? null]))), chain),
      expire: () => (ops.push(() => 1), chain),
      exec: async () => ops.map((op) => op()),
    };
    return chain;
  };

  return {
    clear: () => [logs, hashes, strings, sorted].forEach((map) => map.clear()),
    redis: {
      pipeline,
      mget: async (...keys: string[]) => keys.map((key) => strings.get(key) ?? null),
    },
  };
});

vi.mock("@/lib/redis", () => ({
  redis: fake.redis,
  CACHE_SITE_KEY: "test",
  tryRedis: async (_label: string, run: () => Promise<unknown>) => ({ ok: true, value: await run() }),
}));

import {
  browserOf, liveVisitors, nepalDays, recordVisit, referringSite, sourceOf, systemOf, visitorReport, type PageView,
} from "@/lib/visitors";

/** A time in Nepal (UTC+5:45) on the given day, at the given hour. */
const nepal = (day: string, hour = 12) => new Date(Date.parse(`${day}T00:00:00Z`) + (hour * 60 - 345) * 60_000);
const A = "a".repeat(32);
const B = "b".repeat(32);
const C = "c".repeat(32);

/** The first page of a visit. */
const landing = (path = "/", extra: Partial<PageView> & Partial<NonNullable<PageView["visit"]>> = {}): PageView => ({
  path,
  country: extra.country ?? "NP",
  device: extra.device ?? "mobile",
  visit: {
    browser: extra.browser ?? "chrome",
    system: extra.system ?? "android",
    returning: extra.returning ?? false,
    source: extra.source ?? "search",
    referrer: extra.referrer ?? "google.com",
  },
});
/** A later page of a visit. */
const page = (path: string, engaged = false): PageView => ({ path, country: "NP", device: "mobile", engaged });

describe("visitor report", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    fake.clear();
  });
  afterEach(() => vi.useRealTimers());

  it("turns the day over at midnight in Nepal, not UTC", () => {
    expect(nepalDays(1, Date.parse("2026-10-29T18:14:00Z"))).toEqual(["2026-10-29"]);
    expect(nepalDays(1, Date.parse("2026-10-29T18:15:00Z"))).toEqual(["2026-10-30"]);
    expect(nepalDays(3, Date.parse("2026-11-01T06:15:00Z"))).toEqual(["2026-11-01", "2026-10-31", "2026-10-30"]);
  });

  it("counts a returning visitor once per range, and every visit and page", async () => {
    vi.setSystemTime(nepal("2026-10-10"));
    await recordVisit(A, landing()); // 19 days back: only in the 28-day range
    vi.setSystemTime(nepal("2026-10-25"));
    await recordVisit(A, landing());
    await recordVisit(B, landing("/contact"));
    vi.setSystemTime(nepal("2026-10-29"));
    await recordVisit(A, landing());
    await recordVisit(A, page("/climbing", true));

    const report = (await visitorReport())!;
    expect(report.ranges.map(({ days, current }) => ({ days, ...current }))).toEqual([
      { days: 1, visitors: 1, visits: 1, pageViews: 2, engaged: 1 },
      { days: 7, visitors: 2, visits: 3, pageViews: 4, engaged: 1 },
      { days: 14, visitors: 2, visits: 3, pageViews: 4, engaged: 1 },
      { days: 28, visitors: 2, visits: 4, pageViews: 5, engaged: 1 },
    ]);
    expect(report.countingSince).toBe("2026-10-10");
    expect(report.ranges[1]).toMatchObject({ from: "2026-10-23", to: "2026-10-29" });
  });

  it("compares today with yesterday up to the same hour, and longer ranges with the days before", async () => {
    vi.setSystemTime(nepal("2026-10-21", 9)); // 8 days back: the previous 7 days
    await recordVisit(C, landing());
    vi.setSystemTime(nepal("2026-10-28", 1));
    await recordVisit(B, landing());
    vi.setSystemTime(nepal("2026-10-28", 20)); // yesterday, but later than it is now
    await recordVisit(C, landing());
    vi.setSystemTime(nepal("2026-10-29", 1));
    await recordVisit(A, landing());
    vi.setSystemTime(nepal("2026-10-29", 3));
    await recordVisit(A, page("/"));
    await recordVisit(B, landing());

    const [today, week] = (await visitorReport())!.ranges;
    expect(today.series.map(({ at, visitors, pageViews }) => [at, visitors, pageViews])).toEqual([
      ["00", 0, 0],
      ["01", 1, 1],
      ["02", 0, 0],
      ["03", 2, 2],
    ]);
    expect(today.previousSeries.map(({ at, visitors }) => [at, visitors])).toEqual([
      ["00", 0],
      ["01", 1],
      ["02", 0],
      ["03", 0],
    ]);
    expect(today.previous).toEqual({ visitors: 1, visits: 1, pageViews: 1, engaged: 0 });
    expect(week.series).toHaveLength(7);
    expect(week.previousSeries).toHaveLength(7);
    expect(week.previous).toMatchObject({ visitors: 1, visits: 1 });
    expect(week.previousSeries.at(-1)).toMatchObject({ at: "2026-10-22", visitors: 0 });
    expect(week.previousSeries.at(-2)).toMatchObject({ at: "2026-10-21", visitors: 1 });
  });

  it("splits each visit back into channel, device, browser, system, visitor and country", async () => {
    vi.setSystemTime(nepal("2026-10-29"));
    const countries = ["NP", "NP", "NP", "US", "US", "GB", "IN", "DE", "FR", "AU", "CN", "JP", "BR"];
    for (const [i, country] of countries.entries()) {
      await recordVisit(
        String(i).padStart(32, "0"),
        landing(i % 3 ? "/climbing" : "/", {
          country,
          device: i % 2 ? "desktop" : "mobile",
          browser: i % 2 ? "edge" : "safari",
          system: i % 2 ? "windows" : "ios",
          returning: i < 4,
          source: i % 4 ? "direct" : "ai",
          referrer: i % 4 ? "" : "chatgpt.com",
        })
      );
    }

    const [today] = (await visitorReport())!.ranges;
    const counts = (list: Array<{ key: string; count: number }>) => Object.fromEntries(list.map((c) => [c.key, c.count]));
    expect(today.devices).toEqual([
      { key: "desktop", count: 6 },
      { key: "mobile", count: 7 },
      { key: "tablet", count: 0 },
    ]);
    expect(counts(today.browsers)).toEqual({ chrome: 0, safari: 7, edge: 6, firefox: 0, samsung: 0, other: 0 });
    expect(counts(today.systems)).toMatchObject({ ios: 7, windows: 6, android: 0 });
    expect(today.visitorTypes).toEqual([
      { key: "new", count: 9 },
      { key: "returning", count: 4 },
    ]);
    expect(today.sources).toEqual([
      { key: "search", count: 0 },
      { key: "direct", count: 9 },
      { key: "social", count: 0 },
      { key: "ai", count: 4 },
      { key: "other", count: 0 },
    ]);
    expect(today.referrers).toEqual([{ key: "chatgpt.com", count: 4 }]);
    expect(today.pages).toEqual([
      { key: "/climbing", count: 8 },
      { key: "/", count: 5 },
    ]);
    expect(today.entryPages).toEqual(today.pages);
    expect(today.countries).toHaveLength(9);
    expect(today.countries.slice(0, 2)).toEqual([
      { key: "NP", count: 3 },
      { key: "US", count: 2 },
    ]);
    expect(today.countries[8]).toEqual({ key: "other", count: 2 });
  });

  it("maps page views onto weekdays and hours", async () => {
    vi.setSystemTime(nepal("2026-10-27", 14)); // a Tuesday
    await recordVisit(A, landing());
    await recordVisit(A, page("/contact", true));
    vi.setSystemTime(nepal("2026-10-29", 9)); // a Thursday

    const [today, week] = (await visitorReport())!.ranges;
    expect(today.heatmap.days).toBe(7);
    expect(today.heatmap.cells[1][14]).toBe(2);
    expect(week.heatmap.cells.flat().reduce((a, b) => a + b, 0)).toBe(2);
  });

  it("lists every page, not only the top ten", async () => {
    vi.setSystemTime(nepal("2026-10-29"));
    await recordVisit(A, landing());
    for (let i = 0; i < 12; i++) await recordVisit(A, page(`/blog/post-${i}`));

    const [today] = (await visitorReport())!.ranges;
    expect(today.pages).toHaveLength(13);
  });

  it("has no start date to report once the counts reach back past the longest range", async () => {
    vi.setSystemTime(nepal("2026-10-02"));
    await recordVisit(A, landing());
    vi.setSystemTime(nepal("2026-10-29"));

    expect((await visitorReport())?.countingSince).toBeNull();
  });
});

describe("live visitors", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    fake.clear();
  });
  afterEach(() => vi.useRealTimers());

  it("shows who was heard from in the last five minutes, where, and what they are reading", async () => {
    vi.setSystemTime(nepal("2026-10-29", 10));
    await recordVisit(A, landing("/", { country: "US", device: "desktop" }));
    await recordVisit(B, landing("/climbing", { country: "NP" }));
    vi.advanceTimersByTime(4 * 60_000);
    await recordVisit(A); // a ping keeps A on the site
    await recordVisit(C, landing("/climbing", { country: "NP" }));
    vi.advanceTimersByTime(2 * 60_000); // B was last heard from 6 minutes ago

    const live = (await liveVisitors())!;
    expect(live.active).toBe(2);
    expect(live.pages).toEqual([
      { key: "/", count: 1 },
      { key: "/climbing", count: 1 },
    ]);
    expect(live.devices).toEqual([
      { key: "desktop", count: 1 },
      { key: "mobile", count: 1 },
      { key: "tablet", count: 0 },
    ]);
    expect(live.minutes).toHaveLength(30);
    expect(live.minutes.slice(-7)).toEqual([2, 0, 0, 0, 1, 0, 0]);
  });
});

describe("where visits come from", () => {
  it.each([
    ["", "direct"],
    ["greencompasstreks.com", "direct"],
    ["www.greencompasstreks.com", "direct"],
    ["www.google.com", "search"],
    ["www.google.co.uk", "search"],
    ["www.google.com.np", "search"],
    ["com.google.android.googlequicksearchbox", "search"],
    ["search.brave.com", "search"],
    ["r.search.yahoo.com", "search"],
    ["duckduckgo.com", "search"],
    ["mail.google.com", "other"],
    ["accounts.google.com", "other"],
    ["gemini.google.com", "ai"],
    ["chatgpt.com", "ai"],
    ["com.openai.chatgpt", "ai"],
    ["www.perplexity.ai", "ai"],
    ["l.facebook.com", "social"],
    ["com.facebook.katana", "social"],
    ["t.co", "social"],
    ["m.youtube.com", "social"],
    ["www.tripadvisor.com", "other"],
    ["notgoogle.example", "other"],
    // Tagged links' utm_source, a name rather than a host.
    ["chatgpt", "ai"],
    ["facebook", "social"],
    ["google", "search"],
    ["newsletter", "other"],
  ])("%s is %s", (from, source) => {
    expect(sourceOf(from, "greencompasstreks.com")).toBe(source);
  });

  it("names the site a referrer stands for", () => {
    expect(referringSite("www.Google.com")).toBe("google.com");
    expect(referringSite("m.facebook.com")).toBe("facebook.com");
    expect(referringSite("l.facebook.com")).toBe("facebook.com");
    expect(referringSite("com.google.android.googlequicksearchbox")).toBe("google.com");
    expect(referringSite("t.co")).toBe("t.co");
    expect(referringSite("chatgpt")).toBe("chatgpt");
  });
});

describe("browsers and systems", () => {
  const ua = {
    chromeWindows: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",
    edge: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36 Edg/141.0.0.0",
    safariIphone: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1",
    chromeIphone: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/141.0 Mobile/15E148 Safari/604.1",
    samsung: "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/26.0 Chrome/122.0.0.0 Mobile Safari/537.36",
    firefoxMac: "Mozilla/5.0 (Macintosh; Intel Mac OS X 14.5; rv:131.0) Gecko/20100101 Firefox/131.0",
    ipadDesktop: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15",
  };

  it("tells the browser apart, asking for those that also say Chrome first", () => {
    expect(browserOf(ua.chromeWindows)).toBe("chrome");
    expect(browserOf(ua.edge)).toBe("edge");
    expect(browserOf(ua.safariIphone)).toBe("safari");
    expect(browserOf(ua.chromeIphone)).toBe("chrome");
    expect(browserOf(ua.samsung)).toBe("samsung");
    expect(browserOf(ua.firefoxMac)).toBe("firefox");
  });

  it("tells the system apart, an iPad asking for desktop sites included", () => {
    expect(systemOf(ua.chromeWindows, "desktop")).toBe("windows");
    expect(systemOf(ua.safariIphone, "mobile")).toBe("ios");
    expect(systemOf(ua.samsung, "mobile")).toBe("android");
    expect(systemOf(ua.firefoxMac, "desktop")).toBe("macos");
    expect(systemOf(ua.ipadDesktop, "tablet")).toBe("ios");
  });
});
