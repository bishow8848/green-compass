import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "404 - Page Not Found | Mardi Treks",
  description: "The requested page could not be found.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-background px-4">
        <main className="max-w-lg text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Error 404
          </p>
          <h1 className="mt-3 text-4xl font-bold text-foreground">
            This trail does not exist
          </h1>
          <p className="mt-4 leading-7 text-text-muted">
            The page may have moved or the address may be incorrect. Explore
            our Mardi Himal and Annapurna region treks instead.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white"
            >
              Return home
            </Link>
            <Link
              href="/treks"
              className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground"
            >
              Browse treks 
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
