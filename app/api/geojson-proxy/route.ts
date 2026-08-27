import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { gunzip, inflate, inflateRaw } from "zlib";
import { apiRateLimit, checkRateLimit } from "@/lib/rate-limit";
import { getClientIp } from "@/lib/request-security";

/** Upper bound on a proxied response body. Route files are far smaller. */
const MAX_PROXY_BYTES = 5 * 1024 * 1024;

// Try all three decompression methods in order until one works
async function decompress(buffer: Buffer): Promise<Buffer> {
  for (const method of [gunzip, inflate, inflateRaw]) {
    try {
      return await new Promise<Buffer>((resolve, reject) => {
        method(buffer, (err: Error | null, result: Buffer) => {
          if (err) reject(err);
          else resolve(result);
        });
      });
    } catch {}
  }
  throw new Error("Could not decompress — not gzip, zlib, or deflate format");
}

export async function GET(req: NextRequest) {
  // Rate limiting — this endpoint can be abused as an open proxy.
  // Use the shared helper: it prefers x-real-ip, which the platform sets, over
  // the leftmost x-forwarded-for entry, which the caller can forge to get a
  // fresh rate-limit bucket on every request.
  const ip = getClientIp(req);
  const rateCheck = await checkRateLimit(apiRateLimit, ip);
  if (!rateCheck.success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": String(rateCheck.reset) } }
    );
  }
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "Missing url parameter" }, { status: 400 });
  }

  let requestedUrl: URL;
  try {
    requestedUrl = new URL(url);
  } catch {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  const allowedHosts = new Set(["geojson.io", "res.cloudinary.com"]);
  if (requestedUrl.protocol !== "https:" || !allowedHosts.has(requestedUrl.hostname)) {
    return NextResponse.json({ error: "URL host is not allowed" }, { status: 403 });
  }

  // ── Handle geojson.io share URLs ──────────────────────────────────
  // geojson.io encodes GeoJSON as base64 → deflate-compressed data in the URL
  if (url.includes("geojson.io") && url.includes("data=")) {
    try {
      const parsed = requestedUrl;
      let encoded = parsed.searchParams.get("data") || "";
      // Strip optional gz: prefix from geojson.io
      if (encoded.startsWith("gz:")) encoded = encoded.slice(3);
      // Decode base64url → standard base64 → buffer → inflate → string
      const base64 = encoded.replace(/-/g, "+").replace(/_/g, "/");
      const compressed = Buffer.from(base64, "base64");
      const decompressed = await decompress(compressed);
      const geoJson = decompressed.toString("utf-8");

      // Validate it's valid GeoJSON
      const parsed2 = JSON.parse(geoJson);
      if (!parsed2.type) throw new Error("Not a GeoJSON object");

      return new NextResponse(geoJson, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "X-Source": "geojson.io-decode",
        },
      });
    } catch (err: any) {
      // Don't echo the raw error: it is upstream/internal detail and only
      // helps someone probing what this endpoint can reach.
      console.error("[geojson-proxy] geojson.io decode failed:", err);
      return NextResponse.json({ error: "Failed to decode geojson.io data" }, { status: 502 });
    }
  }

  // ── Regular URL fetch ─────────────────────────────────────────────
  // Try the given URL first. If it fails (old Cloudinary image URL format),
  // also try the /raw/upload/ variant.
  const urlsToTry = [url];
  if (url.includes("/image/upload/")) {
    urlsToTry.push(url.replace("/image/upload/", "/raw/upload/"));
  }

  let lastError = "No URLs could be fetched";

  for (const tryUrl of urlsToTry) {
    try {
      const res = await fetch(tryUrl, {
        headers: { "User-Agent": "GreenCompassTreks/1.0" },
        // The host allowlist above is checked against the URL we were GIVEN.
        // Following redirects would hand that guarantee to the remote server —
        // an allowed host answering 302 to http://169.254.169.254/ would turn
        // this into an SSRF gadget. Refuse to follow instead.
        redirect: "manual",
        signal: AbortSignal.timeout(10_000),
      });

      if (res.status >= 300 && res.status < 400) {
        lastError = "Upstream redirected; refusing to follow";
        continue;
      }

      if (!res.ok) {
        lastError = `HTTP ${res.status}`;
        continue;
      }

      // Cap the body. Route files are a few hundred KB at most, and without a
      // limit any large file on an allowed host becomes a memory-exhaustion
      // lever against the server.
      const declaredLength = Number(res.headers.get("content-length") || 0);
      if (declaredLength > MAX_PROXY_BYTES) {
        lastError = "Response too large";
        continue;
      }
      const raw = Buffer.from(await res.arrayBuffer());
      if (raw.byteLength > MAX_PROXY_BYTES) {
        lastError = "Response too large";
        continue;
      }
      const text = raw.toString("utf-8");

      // Validate it's actually JSON
      try {
        JSON.parse(text);
      } catch {
        lastError = "Response is not valid GeoJSON";
        continue;
      }

      return new NextResponse(text, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    } catch (err: any) {
      console.error("[geojson-proxy] fetch failed:", err);
      lastError = "Upstream fetch failed";
      continue;
    }
  }

  return NextResponse.json({ error: lastError }, { status: 502 });
}
