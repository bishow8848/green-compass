import { ImageResponse } from "next/og";

export const alt = "Mardi Himal Trek in Nepal with Mardi Treks";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "linear-gradient(135deg, rgb(24, 50, 42), rgb(68, 104, 74))",
          color: "white",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <div
            style={{
              color: "rgb(245, 158, 11)",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Mardi Treks · Pokhara, Nepal
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              letterSpacing: -3,
              lineHeight: 1.05,
              marginTop: 28,
            }}
          >
            Mardi Himal Trek
          </div>
          <div style={{ fontSize: 38, marginTop: 24, opacity: 0.9 }}>
            Guided trekking in Nepal&apos;s Annapurna region
          </div>
        </div>
      </div>
    ),
    size
  );
}
