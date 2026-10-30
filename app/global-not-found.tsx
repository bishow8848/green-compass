import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL } from "@/lib/seo";
import { MotionLink, MotionProvider, Stagger, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "404 - Page Not Found | Green Compass Treks",
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
        {/* This page has its own <html>, so it brings its own motion setup. */}
        <MotionProvider>
          <Stagger as="main" className="max-w-lg text-center">
            <StaggerItem as="p" className="text-sm font-semibold uppercase tracking-widest text-primary">
              Error 404
            </StaggerItem>
            <StaggerItem as="h1" className="mt-3 text-4xl font-bold text-foreground">
              This trail does not exist
            </StaggerItem>
            <StaggerItem as="p" className="mt-4 leading-7 text-text-muted">
              The page may have moved or the address may be incorrect. Explore
              our Mardi Himal and Annapurna region treks instead.
            </StaggerItem>
            <StaggerItem className="mt-8 flex flex-wrap justify-center gap-3">
              <MotionLink
                href="/"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white"
              >
                Return home
              </MotionLink>
              <MotionLink
                href="/treks"
                className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground"
              >
                Browse treks 
              </MotionLink>
            </StaggerItem>
          </Stagger>
        </MotionProvider>
      </body>
    </html>
  );
}
