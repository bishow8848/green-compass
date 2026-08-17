import { config } from "dotenv";
config();
import pg from "pg";

function normalize(url) {
  const u = new URL(url);
  const ssl = u.searchParams.get("sslmode");
  if (["prefer", "require", "verify-ca"].includes(ssl)) {
    u.searchParams.set("sslmode", "verify-full");
  }
  return u.toString();
}

const base = process.env.DATABASE_URL || process.env.DIRECT_DATABASE_URL;
const mask = (u) => u.replace(/:[^:@/]+@/, ":***@");

const variants = {
  asIs: base, // sslmode=require (no cert verification)
  verifyFull: normalize(base), // what lib/prisma.ts actually uses
};

console.log("Testing:", mask(base), "\n");

for (const [name, url] of Object.entries(variants)) {
  const client = new pg.Client({ connectionString: url, connectionTimeoutMillis: 15000 });
  try {
    await client.connect();
    const res = await client.query("SELECT 1 AS ok");
    console.log(`[${name}] SUCCESS:`, JSON.stringify(res.rows));
  } catch (err) {
    console.log(`[${name}] FAILED:`, err.message);
  } finally {
    await client.end().catch(() => {});
  }
}
