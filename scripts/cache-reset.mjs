#!/usr/bin/env node
/**
 * Redis cache management for this site.
 *
 *   npm run cache:reset               # clear THIS site's Redis cache
 *   npm run cache:reset -- --dry-run  # show what would be cleared, change nothing
 *   npm run cache:reset:all           # flush the whole Upstash instance (asks to confirm)
 *
 * Every site that shares an Upstash account stores its entries under a
 * per-site namespace so one Redis instance can serve several sites without
 * them reading each other's data:
 *
 *   mardi:cache:v2:<site-key>:*
 *
 * The site key resolves exactly like lib/redis.ts (REDIS_CACHE_NAMESPACE
 * override -> NEXT_PUBLIC_SITE_URL -> SITE_URL -> greencompasstreks.com default), so
 * this tool always clears the same namespace the running site reads from.
 *
 * Not touched on purpose:
 *   - Rate-limit keys (ratelimit:*) — they're transient, per-instance, and
 *     shared across sites; they expire on their own.
 *   - Next.js Data Cache entries — those live outside Redis (Next's own
 *     cache / Vercel), not under this namespace.
 */
import { config } from "dotenv";
config();
import { createInterface } from "node:readline/promises";
import { Redis } from "@upstash/redis";
import clc from "cli-color";

const FLUSH_ALL = process.argv.includes("--all");
const DRY_RUN = process.argv.includes("--dry-run");

// cli-color in this version ships no .dim(); keep muted lines unstyled.
const dim = (s) => s;

// ---- Resolve the per-site namespace (mirrors lib/redis.ts) ----
function resolveCacheSiteKey() {
  const override = process.env.REDIS_CACHE_NAMESPACE;
  if (override) {
    return override
      .trim()
      .replace(/^:+|:+$/g, "")
      .replace(/[^a-zA-Z0-9._-]/g, "_");
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "https://greencompasstreks.com";
  try {
    return (
      new URL(siteUrl).hostname.replace(/^www\./, "").toLowerCase() || "default"
    );
  } catch {
    return "default";
  }
}

const url = process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN;

if (!url || !token) {
  console.error(
    clc.red(
      "Missing UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN in .env\n" +
        "Add them (see the .env template) and re-run."
    )
  );
  process.exit(1);
}

const redis = new Redis({ url, token });
const SITE_KEY = resolveCacheSiteKey();
const CACHE_NAMESPACE = `mardi:cache:v2:${SITE_KEY}:`;

// ---- Helpers ----
async function scanAll(pattern) {
  // SCAN (not KEYS) so a large dataset never blocks the instance.
  const keys = [];
  let cursor = 0;
  do {
    const [nextCursor, batch] = await redis.scan(cursor, {
      match: pattern,
      count: 200,
    });
    cursor = Number(nextCursor);
    keys.push(...batch);
  } while (cursor !== 0);
  return keys;
}

async function confirm(promptText) {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  const answer = await rl.question(clc.yellow(promptText));
  rl.close();
  return /^(y|yes)$/i.test(answer.trim());
}

function printPreview(keys) {
  const preview = keys.slice(0, 15);
  for (const k of preview) console.log(dim(`   ${k}`));
  if (keys.length > preview.length) {
    console.log(dim(`   … and ${keys.length - preview.length} more`));
  }
}

// ---- Header ----
console.log(
  clc.bold.cyan(
    `cache:reset — ${FLUSH_ALL ? "flush whole Upstash instance" : `clear site cache (${SITE_KEY})`}`
  )
);
console.log(dim(`  redis:      ${url}`));
if (FLUSH_ALL) {
  console.log(dim("  scope:      ENTIRE Upstash instance (every site!)"));
} else {
  console.log(dim(`  namespace:  ${CACHE_NAMESPACE}*`));
}
console.log(dim(DRY_RUN ? "  mode:       --dry-run (no changes)" : "  mode:       live"));

// ---- Flush the whole instance ----
if (FLUSH_ALL) {
  let total = 0;
  try {
    total = Number(await redis.dbsize());
  } catch {
    console.error(clc.red("\nCould not read instance size — is the token valid?"));
    process.exit(1);
  }
  console.log(`\n${clc.bold(`Keys in this Upstash instance: ${total}`)}`);

  if (DRY_RUN) {
    console.log(dim("  (dry-run — nothing was flushed)"));
    process.exit(0);
  }

  if (total > 0) {
    const ok = await confirm(
      `\nThis PERMANENTLY deletes all ${total} keys for EVERY site on this Upstash instance.\nType "yes" to continue: `
    );
    if (!ok) {
      console.log(clc.yellow("Aborted — no changes made."));
      process.exit(0);
    }
  }

  const reply = await redis.flushall();
  console.log(clc.green(`\nFlushed the whole Upstash instance (${total} keys). Reply: ${JSON.stringify(reply)}`));
  process.exit(0);
}

// ---- Clear this site's namespace ----
const keys = await scanAll(`${CACHE_NAMESPACE}*`);
console.log(
  `\n${clc.bold(`Keys under ${CACHE_NAMESPACE}*: ${keys.length}`)}`
);
if (keys.length > 0) printPreview(keys);

if (DRY_RUN) {
  console.log(dim("\n(dry-run — nothing was deleted)"));
  process.exit(0);
}

if (keys.length === 0) {
  console.log(clc.yellow("\nNo site cache keys found — nothing to clear."));
  process.exit(0);
}

// Delete in batches to keep each DEL request small.
for (let i = 0; i < keys.length; i += 500) {
  await redis.del(...keys.slice(i, i + 500));
}
console.log(clc.green(`\nDeleted ${keys.length} cache key(s) for "${SITE_KEY}".`));
