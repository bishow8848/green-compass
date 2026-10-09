import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/seo";

// The site-wide social card. Pages without an image of their own point at it
// through DEFAULT_OG_IMAGE, so it speaks for the whole brand, not one trek.
export const alt = DEFAULT_OG_IMAGE.alt;
export const size = { width: DEFAULT_OG_IMAGE.width, height: DEFAULT_OG_IMAGE.height };
export const contentType = "image/png";

const logo = await readFile(join(process.cwd(), "public/icon-512.png"));
const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, rgb(18, 42, 34), rgb(52, 92, 66))",
          color: "white",
          display: "flex",
          height: "100%",
          padding: "0 80px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            background: "white",
            borderRadius: 56,
            display: "flex",
            flexShrink: 0,
            height: 250,
            justifyContent: "center",
            width: 250,
          }}
        >
          <img src={logoSrc} width={196} height={196} alt="" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginLeft: 64 }}>
          <div
            style={{
              color: "rgb(245, 158, 11)",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 5,
              textTransform: "uppercase",
            }}
          >
            Pokhara · Nepal
          </div>
          <div style={{ fontSize: 74, fontWeight: 800, letterSpacing: -2, lineHeight: 1.04, marginTop: 18 }}>
            {SITE_NAME}
          </div>
          <div style={{ fontSize: 34, marginTop: 22, opacity: 0.92 }}>
            Guided trekking & tours in the Himalaya
          </div>
          <div style={{ fontSize: 25, marginTop: 30, opacity: 0.7 }}>
            Annapurna · Everest · Langtang · Manaslu · Mustang
          </div>
        </div>
      </div>
    ),
    size
  );
}
