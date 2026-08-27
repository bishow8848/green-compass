import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const isDevelopment = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "base-uri 'self'",
              "object-src 'none'",
              "frame-ancestors 'none'",
              "form-action 'self'",
              `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ""} https://js.stripe.com https://va.vercel-scripts.com`,
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https://res.cloudinary.com https://*.mapbox.com https://server.arcgisonline.com https://s3.amazonaws.com",
              "font-src 'self' data:",
              "worker-src 'self' blob:",
              "connect-src 'self' https://*.upstash.io https://*.prisma.io https://*.sentry.io https://api.mapbox.com https://events.mapbox.com https://api.stripe.com https://server.arcgisonline.com https://s3.amazonaws.com",
              "frame-src https://js.stripe.com https://hooks.stripe.com https://www.google.com",
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com", pathname: "/**" },
      { protocol: "https", hostname: "*.mapbox.com", pathname: "/**" },
      { protocol: "https", hostname: "server.arcgisonline.com", pathname: "/**" },
    ],
  },
  experimental: {
    globalNotFound: true,
    serverActions: { bodySizeLimit: "2mb" },
    // 147 prerendered pages all read from a Supabase pooler on the other side
    // of the planet from the build machine. A single transient connection blip
    // otherwise aborts the whole export ("Export encountered an error on ...,
    // exiting the build"), throwing away every page already generated. Retry
    // the individual page instead of failing the build on the first hiccup.
    staticGenerationRetryCount: 1,
  },
};

export default withPayload(nextConfig);
