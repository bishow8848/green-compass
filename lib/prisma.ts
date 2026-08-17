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
  const rawAccelerateUrl = process.env.DATABASE_URL?.trim();
  const accelerateUrl = rawAccelerateUrl ? stripSurroundingQuotes(rawAccelerateUrl) : undefined;

  // Cap the connection pool per PrismaClient. Supabase's session pooler
  // (port 5432) limits total clients to pool_size (15 by default), and Next.js
  // builds spawn one worker per CPU — each worker gets its own pool. Without a
  // cap, concurrent prerendering easily exceeds the server's limit
  // (EMAXCONNSESSION). A small pool is also the recommended pattern for
  // serverless runtimes. Overridable via PRISMA_POOL_MAX.
  const poolMax = Math.max(1, Number(process.env.PRISMA_POOL_MAX ?? 2));

  // Prefer a direct Postgres connection whenever one is available. This is safe
  // on any Node runtime (Vercel, local dev) and keeps the app off the Prisma
  // Accelerate proxy and its account/plan limits. Accelerate
  // (prisma+postgres://) is used only as a fallback when no direct URL exists.
  const directConnectionString =
    directUrl ||
    (accelerateUrl?.startsWith("postgres://") || accelerateUrl?.startsWith("postgresql://")
      ? accelerateUrl
      : undefined);

  if (directConnectionString) {
    // Report which env var was used so the warning above names the right source.
    const directSource = directUrl ? "DIRECT_DATABASE_URL" : "DATABASE_URL";
    return new PrismaClient({
      adapter: new PrismaPg({
        connectionString: normalizeDirectDatabaseUrl(directConnectionString, directSource),
        max: poolMax,
      }),
    });
  }

  if (!accelerateUrl) {
    throw new Error("DATABASE_URL environment variable is required");
  }
  return new PrismaClient({ accelerateUrl });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
