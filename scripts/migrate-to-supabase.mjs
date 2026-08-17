#!/usr/bin/env node
/**
 * One-time migration: old DB (Prisma Cloud / db.prisma.io) -> Supabase.
 *
 *  - Source: MIGRATE_SOURCE_URL   (old Prisma Cloud direct Postgres URL)
 *  - Target: DIRECT_DATABASE_URL  (Supabase direct connection, port 5432)
 *
 * PREREQUISITE: the schema must already exist in Supabase. Create it with:
 *     npx prisma migrate deploy
 *
 * What it does:
 *   1. Preflights both connections (so you see immediately if either is blocked).
 *   2. Copies every user table in the `public` schema (data only, parameterized,
 *      batched inserts — no string-built SQL).
 *   3. Disables triggers on the target during the load so FK order doesn't
 *      matter, then re-enables them.
 *   4. Resets identity/serial sequences to match the copied max values.
 *
 * Tables present in the source but missing in the target are skipped with a
 * warning (e.g. Payload's `payload_*` tables if their schema isn't created).
 */
import { config } from "dotenv";
config();
import pg from "pg";

const SOURCE = process.env.MIGRATE_SOURCE_URL;
const TARGET = process.env.DIRECT_DATABASE_URL;

if (!SOURCE || !TARGET) {
  console.error(
    "Missing MIGRATE_SOURCE_URL or DIRECT_DATABASE_URL in .env\n" +
      "  MIGRATE_SOURCE_URL = old Prisma Cloud DB\n" +
      "  DIRECT_DATABASE_URL = Supabase (must have a real password)"
  );
  process.exit(1);
}

const mask = (u) => u.replace(/:[^:@/]+@/, ":***@");
console.log("Source:", mask(SOURCE));
console.log("Target:", mask(TARGET));

const src = new pg.Client({ connectionString: SOURCE, connectionTimeoutMillis: 20000 });
const dst = new pg.Client({ connectionString: TARGET, connectionTimeoutMillis: 20000 });

// ---------- helpers ----------
async function query(client, text, params) {
  return (await client.query(text, params)).rows;
}

async function getPublicTables(client) {
  const rows = await query(
    client,
    `SELECT table_name
       FROM information_schema.tables
      WHERE table_schema = 'public' AND table_type = 'BASE TABLE'
      ORDER BY table_name`
  );
  return rows.map((r) => r.table_name);
}

async function tableExists(client, name) {
  const rows = await query(client, `SELECT to_regclass($1) AS t`, [`public.${name}`]);
  return Boolean(rows[0]?.t);
}

async function copyTable(t) {
  const cols = await query(
    src,
    `SELECT column_name
       FROM information_schema.columns
      WHERE table_schema = 'public' AND table_name = $1
        AND is_generated = 'NEVER'
      ORDER BY ordinal_position`,
    [t]
  ).then((r) => r.map((c) => c.column_name));

  if (cols.length === 0) {
    console.log(`  ${t}: no insertable columns, skipping`);
    return 0;
  }

  const colList = cols.map((c) => `"${c}"`).join(", ");
  const [{ n }] = await query(src, `SELECT COUNT(*)::int AS n FROM "public"."${t}"`);
  if (n === 0) {
    console.log(`  ${t}: 0 rows (nothing to copy)`);
    return 0;
  }

  await dst.query(`TRUNCATE TABLE "public"."${t}"`);
  const BATCH = 400;
  let offset = 0;
  while (offset < n) {
    const rows = await query(
      src,
      `SELECT ${colList} FROM "public"."${t}" ORDER BY ctid LIMIT ${BATCH} OFFSET ${offset}`
    );
    const params = [];
    const placeholders = rows
      .map((row, i) => {
        const base = i * cols.length;
        return "(" + cols.map((_, j) => `$${base + j + 1}`).join(", ") + ")";
      })
      .join(", ");
    for (const row of rows) for (const c of cols) params.push(row[c]);
    await dst.query(
      `INSERT INTO "public"."${t}" (${colList}) VALUES ${placeholders}`,
      params
    );
    offset += BATCH;
  }
  return n;
}

// ---------- preflight ----------
try {
  await src.connect();
  console.log("✅ Source connection OK");
} catch (err) {
  console.error("❌ Source connection FAILED:", err.message);
  console.error(
    "   The old DB must be reachable to copy data. If it is still restricted\n" +
      "   (planLimitReached) the migration cannot proceed until that is resolved\n" +
      "   or the data is exported another way."
  );
  process.exit(1);
}

try {
  await dst.connect();
  console.log("✅ Target connection OK");
} catch (err) {
  console.error("❌ Target connection FAILED:", err.message);
  console.error("   Check the real Supabase password is set in .env.");
  process.exit(1);
}

// ---------- copy ----------
const srcTables = await getPublicTables(src);
console.log(`\nFound ${srcTables.length} tables in source.`);

const presentInDst = [];
for (const t of srcTables) {
  if (await tableExists(dst, t)) {
    presentInDst.push(t);
  } else {
    console.warn(`  ⚠️  ${t} — not in target (create schema first), skipping`);
  }
}

console.log("\nDisabling triggers on target…");
for (const t of presentInDst) {
  await dst.query(`ALTER TABLE "public"."${t}" DISABLE TRIGGER ALL`);
}

let totalRows = 0;
for (const t of presentInDst) {
  const n = await copyTable(t);
  totalRows += n;
}

console.log("\nRe-enabling triggers…");
for (const t of presentInDst) {
  await dst.query(`ALTER TABLE "public"."${t}" ENABLE TRIGGER ALL`);
}

// ---------- sequences ----------
console.log("Resetting sequences…");
for (const t of presentInDst) {
  const seqCols = await query(
    dst,
    `SELECT column_name
       FROM information_schema.columns
      WHERE table_schema = 'public' AND table_name = $1
        AND (is_identity = 'YES' OR column_default LIKE 'nextval%')`,
    [t]
  );
  for (const { column_name } of seqCols) {
    await dst.query(
      `SELECT setval(
         pg_get_serial_sequence('public."${t}"', $1),
         COALESCE((SELECT MAX("${column_name}") FROM "public"."${t}"), 1)
       )`,
      [column_name]
    );
  }
}

await src.end();
await dst.end();
console.log(`\n✅ Done — ${totalRows} rows migrated across ${presentInDst.length} tables.`);
