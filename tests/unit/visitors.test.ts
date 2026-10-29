import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// An in-memory stand-in for the few Redis commands lib/visitors.ts uses. A
// HyperLogLog is approximate; a Set gives the exact count it estimates.
const fake = vi.hoisted(() => {
  const logs = new Map<string, Set<string>>();
  const counters = new Map<string, number>();
  const sorted = new Map<string, Map<string, number>>();
  const zset = (key: string) => sorted.get(key) ?? sorted.set(key, new Map()).get(key)!;

  const pipeline = () => {
    const ops: Array<() => unknown> = [];
    const chain = {
      zadd: (key: string, { score, member }: { score: number; member: string }) => (ops.push(() => zset(key).set(member, score)), chain),
      zremrangebyscore: (key: string, min: number, max: number) =>
        (ops.push(() => {
          for (const [member, score] of zset(key)) if (score >= min && score <= max) zset(key).delete(member);
        }),
        chain),
      pfadd: (key: string, id: string) => (ops.push(() => (logs.get(key) ?? logs.set(key, new Set()).get(key)!).add(id)), chain),
      incr: (key: string) => (ops.push(() => counters.set(key, (counters.get(key) ?? 0) + 1)), chain),
      expire: () => (ops.push(() => 1), chain),
      pfcount: (...keys: string[]) => (ops.push(() => new Set(keys.flatMap((key) => [...(logs.get(key) ?? [])])).size), chain),
      mget: (...keys: string[]) => (ops.push(() => keys.map((key) => counters.get(key) ?? null)), chain),
      exec: async () => ops.map((op) => op()),
    };
    return chain;
  };

  return {
    logs,
    counters,
    sorted,
    redis: {
      pipeline,
      zcount: async (key: string, min: number) => [...zset(key).values()].filter((score) => score >= min).length,
    },
  };
});

vi.mock("@/lib/redis", () => ({
  redis: fake.redis,
  CACHE_SITE_KEY: "test",
  tryRedis: async (_label: string, run: () => Promise<unknown>) => ({ ok: true, value: await run() }),
}));

import { activeVisitors, nepalDays, recordVisit, visitorSummary } from "@/lib/visitors";

/** Noon in Nepal (06:15 UTC) on the given day. */
const nepalNoon = (day: string) => new Date(`${day}T06:15:00.000Z`);

describe("visitor counts", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    fake.logs.clear();
    fake.counters.clear();
    fake.sorted.clear();
  });
  afterEach(() => vi.useRealTimers());

  it("turns the day over at midnight in Nepal, not UTC", () => {
    expect(nepalDays(1, Date.parse("2026-10-29T18:14:00Z"))).toEqual(["2026-10-29"]);
    expect(nepalDays(1, Date.parse("2026-10-29T18:15:00Z"))).toEqual(["2026-10-30"]);
    expect(nepalDays(3, Date.parse("2026-11-01T06:15:00Z"))).toEqual(["2026-11-01", "2026-10-31", "2026-10-30"]);
  });

  it("counts a returning visitor once per range, and every page they view", async () => {
    vi.setSystemTime(nepalNoon("2026-10-10"));
    await recordVisit("a".repeat(32), "view"); // 19 days back: only in the 28-day range
    vi.setSystemTime(nepalNoon("2026-10-25"));
    await recordVisit("a".repeat(32), "view"); // 4 days back
    await recordVisit("b".repeat(32), "view");
    vi.setSystemTime(nepalNoon("2026-10-29"));
    await recordVisit("a".repeat(32), "view");
    await recordVisit("a".repeat(32), "view");

    const summary = await visitorSummary();
    expect(summary?.ranges).toEqual([
      { days: 1, visitors: 1, pageViews: 2 },
      { days: 7, visitors: 2, pageViews: 4 },
      { days: 14, visitors: 2, pageViews: 4 },
      { days: 28, visitors: 2, pageViews: 5 },
    ]);
    expect(summary?.countingSince).toBe("2026-10-10");
  });

  it("keeps someone active while their page pings, without counting a page view", async () => {
    vi.setSystemTime(nepalNoon("2026-10-29"));
    await recordVisit("a".repeat(32), "view");
    await recordVisit("b".repeat(32), "view");
    expect(await activeVisitors()).toBe(2);

    vi.advanceTimersByTime(4 * 60_000);
    await recordVisit("a".repeat(32), "ping");
    vi.advanceTimersByTime(2 * 60_000); // b was last heard from 6 minutes ago
    expect(await activeVisitors()).toBe(1);

    expect((await visitorSummary())?.ranges[0]).toEqual({ days: 1, visitors: 2, pageViews: 2 });
  });

  it("has no start date to report once the counts reach back past the longest range", async () => {
    vi.setSystemTime(nepalNoon("2026-10-02"));
    await recordVisit("a".repeat(32), "view");
    vi.setSystemTime(nepalNoon("2026-10-29"));

    expect((await visitorSummary())?.countingSince).toBeNull();
  });
});
