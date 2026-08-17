/**
 * Generates static OG (Open Graph) and Twitter card images at build time.
 *
 * The generated PNG files live in `app/` so Next.js serves them as static
 * route handlers — no server‑side rendering involved.
 */

import { writeFile } from "node:fs/promises";
import sharp from "sharp";

const WIDTH = 1200;
const HEIGHT = 630;

function buildSvg(title: string, subtitle: string, tagline: string): string {
  return `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1a3028"/>
      <stop offset="100%" stop-color="#44684a"/>
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="rgba(0,0,0,0.12)"/>
  <text x="600" y="210" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-size="72" font-weight="bold" fill="#ffffff">${escapeXml(title)}</text>
  <text x="600" y="290" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-size="30" fill="#f59e0b">${escapeXml(subtitle)}</text>
  <text x="600" y="540" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-size="20" fill="#a0c0a0">${escapeXml(tagline)}</text>
</svg>`;
}

function escapeXml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

async function main() {
  console.log("🔨 Generating OG images...");

  const svg = buildSvg(
    "Mardi Treks",
    "✶ Trek & Tour in Nepal ✶",
    "Multi-Day Treks  •  Expert Guides  •  Best Price Guarantee",
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  await writeFile("app/opengraph-image.png", png);
  await writeFile("app/twitter-image.png", png);

  console.log(`✅ OG images generated (${(png.length / 1024).toFixed(1)} KiB each)`);
}

main().catch((err) => {
  console.error("❌ Failed to generate OG images:", err);
  process.exit(1);
});
