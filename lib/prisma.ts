import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// WHATWG URL parsing (used both here and by pg-connection-string, which
// @prisma/adapter-pg relies on) rejects connection strings whose password
// contains reserved characters like '/', '#', '?' or '@' unless they're
// percent-encoded. Vercel env values often include such passwords, which made
// `new URL(value)` throw ERR_INVALID_URL and break `next build` during page
// data collection. Percent-encode just the password portion so the string is a
// valid URL — pg decodes it back to the original password on connect.
function encodePasswordInConnectionString(value: string): string {
  try {
    // Already valid (includes already-encoded passwords) — leave it untouched
    // to avoid double-encoding.
    new URL(value);
    return value;
  } catch {
    // fall through and encode the password below
  }

  const schemeEnd = value.indexOf("://");
  const at = value.lastIndexOf("@");
  if (schemeEnd === -1 || at === -1 || at < schemeEnd) {
    return value;
  }

  const userinfo = value.slice(schemeEnd + 3, at);
  const colon = userinfo.indexOf(":");
  if (colon === -1) {
    return value;
  }

  const user = userinfo.slice(0, colon);
  const password = userinfo.slice(colon + 1);
  return (
    value.slice(0, schemeEnd + 3) +
    user +
    ":" +
    encodeURIComponent(password) +
    value.slice(at)
  );
}

// Vercel env values are stored verbatim. Connection strings are usually copied
// from a .env file where they're wrapped in quotes (e.g.
// DIRECT_DATABASE_URL="postgresql://...") — but unlike .env parsers, Vercel does
// NOT strip those quotes, and a leading quote makes `new URL()` throw
// ERR_INVALID_URL. Worse, pasting such a line often loses one of the quotes
// (observed on Vercel: a lone leading `"` with no closing quote), which also
// makes pg mis-parse the host as "base". Trim whitespace and strip ANY leading
// or trailing quote characters — not just matching pairs.
function stripSurroundingQuotes(value: string): string {
  return value.trim().replace(/^["']+/, "").replace(/["']+$/, "");
}

function normalizeDirectDatabaseUrl(value: string, sourceLabel: string): string {
  const cleaned = stripSurroundingQuotes(value).trim();
  try {
    const url = new URL(encodePasswordInConnectionString(cleaned));
    const sslMode = url.searchParams.get("sslmode");
    // Managed Postgres (e.g. Supabase) requires TLS but presents a cert chain node's
    // default CA bundle doesn't fully trust. pg-connection-string currently treats
    // require/prefer/verify-ca as strict verify-full, so we enable libpq-compat
    // semantics: sslmode=require = "encrypt without CA verification".
    if (sslMode && sslMode !== "verify-full") {
      url.searchParams.set("sslmode", "require");
      url.searchParams.set("uselibpqcompat", "true");
    }
    return url.toString();
  } catch {
    // Safety net: never let a malformed env value crash `next build` during page
    // data collection (ERR_INVALID_URL). WHATWG URL parsing is stricter than what
    // libpq/pg accept, so pass the cleaned string through untouched — pg parses it
    // tolerantly when the client actually connects. The env value should still be
    // corrected on the host, but a bad value must not take the build down.
    console.warn(
      `[prisma] ${sourceLabel} could not be parsed as a valid URL (ERR_INVALID_URL). ` +
        `Passing it through unchanged so the build can proceed. Please verify this ` +
        `value on the host — connections may fail until it is corrected.`
    );
    return cleaned;
  }
}

function createPrismaClient() {
  // Treat blank/whitespace-only values as unset so they fall through to the
  // next candidate instead of reaching new URL() as an empty string.
  const rawDirectUrl = process.env.DIRECT_DATABASE_URL?.trim();
  const directUrl = rawDirectUrl ? stripSurroundingQuotes(rawDirectUrl) : undefined;
  const rawDatabaseUrl = process.env.DATABASE_URL?.trim();
  const databaseUrl = rawDatabaseUrl ? stripSurroundingQuotes(rawDatabaseUrl) : undefined;

  // `next build` is not a serverless runtime and must not be sized like one.
  // Next prerenders up to `staticGenerationMaxConcurrency` pages (default 8) at
  // once per build worker, and each trek page fans out ~8 statements (Prisma
  // issues one query per `include`d relation) on top of the layout's. That
  // leaves ~60 acquisitions queued behind a serverless-sized pool of 2 — and
  // node-postgres counts queue wait against connectionTimeoutMillis, so the
  // waiters fail with "timeout exceeded when trying to connect" and the export
  // aborts mid-build. Build workers are few (bounded by CPU count) and the
  // transaction pooler has no session-slot cap, so a larger, more patient pool
  // is safe here. NEXT_PHASE is set before the static workers are forked and
  // they inherit process.env, so this is visible inside every prerender worker.
  const isBuildPhase = process.env.NEXT_PHASE === "phase-production-build";

  // Cap the connection pool per PrismaClient. A small pool is the recommended
  // pattern for serverless runtimes. Overridable via PRISMA_POOL_MAX.
  const poolMax = Math.max(
    1,
    Number(process.env.PRISMA_POOL_MAX ?? (isBuildPhase ? 10 : 2))
  );

  const isPlainPostgres = (u?: string): u is string =>
    !!u && (u.startsWith("postgres://") || u.startsWith("postgresql://"));

  // Prefer the TRANSACTION-mode pooler (DATABASE_URL, port 6543 + pgbouncer=true)
  // for the runtime Prisma client. Supabase's SESSION-mode pooler
  // (DIRECT_DATABASE_URL, port 5432) caps total clients at pool_size (15) and
  // throws EMAXCONNSESSION ("max clients reached in session mode") under
  // serverless concurrency, because every instance/worker opens its own pool
  // and each pooled connection occupies a session slot until released. The
  // transaction pooler has no such cap — connections are returned after each
  // transaction — and interactive $transaction (BEGIN/COMMIT) works over it
  // with @prisma/adapter-pg. DIRECT_DATABASE_URL is used only as a fallback,
  // and Accelerate (prisma+postgres://) only when no plain Postgres URL exists.
  const runtimeUrl = isPlainPostgres(databaseUrl) ? databaseUrl : directUrl;
  const runtimeSource = isPlainPostgres(databaseUrl) ? "DATABASE_URL" : "DIRECT_DATABASE_URL";

  if (isPlainPostgres(runtimeUrl)) {
    return new PrismaClient({
      adapter: new PrismaPg({
        connectionString: normalizeDirectDatabaseUrl(runtimeUrl, runtimeSource),
        max: poolMax,
        // Fail fast instead of queueing forever when the pool is saturated, so
        // a burst of requests surfaces a fast error rather than piling up and
        // tripping Prisma's "connection terminated" path. Prerendering queues
        // far deeper than any single request, has no user waiting on it, and
        // runs cross-region (build in iad1, database in ap-northeast-2), so the
        // build gets a patient budget rather than a dead page.
        connectionTimeoutMillis: isBuildPhase ? 60_000 : 10_000,
        // Release idle connections quickly. Every idle client still occupies a
        // slot on the Supabase pooler, and serverless instances go idle between
        // bursts — holding them for 30s is what turns a traffic spike into
        // EMAXCONNSESSION. A build reuses the one pool continuously, where
        // recycling that eagerly just pays the cross-region reconnect again.
        idleTimeoutMillis: isBuildPhase ? 60_000 : 10_000,
      }),
      // Heavy writes (e.g. updateTrek: ~530 child rows ≈ 9.8s) exceed Prisma's
      // default interactive transaction timeout (5000ms) → P2028. These match
      // the verified working values from the Supabase connection investigation.
      transactionOptions: {
        maxWait: 10_000,
        timeout: 30_000,
      },
    });
  }

  if (!databaseUrl) {
    throw new Error("DATABASE_URL environment variable is required");
  }
  return new PrismaClient({ accelerateUrl: databaseUrl });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

// Cache on globalThis in EVERY environment, not just development. In dev this
// stops HMR from leaking a new pool per reload; in production it stops the same
// process from ending up with several PrismaClients when this module is
// instantiated by more than one bundle (the proxy runs in its own bundle from
// the app server, and each extra client means another pool of connections).
globalForPrisma.prisma = prisma;
