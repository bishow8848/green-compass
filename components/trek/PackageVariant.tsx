import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import {
  COMPLETE_PACKAGE_SUBTITLE,
  packageKind,
  packageKindLabel,
  type PackageKind,
} from "@/lib/package-variants";

/**
 * The two ways a trek or multi-day tour is sold — city to city, or a complete
 * package from arrival to departure (lib/package-variants.ts). No hooks, so
 * client components (the category listing) can render the label too.
 */

/** "City to city · Pokhara to Pokhara" / "Complete package · Arrival to departure". */
export function PackageLabel({
  slug,
  subtitle,
  className = "",
}: {
  slug: string;
  subtitle?: string | null;
  className?: string;
}) {
  const kind = packageKind({ slug, subtitle });
  if (!kind) return null;
  const detail = kind === "complete" ? COMPLETE_PACKAGE_SUBTITLE : subtitle;
  return (
    <p className={`text-xs font-medium ${className}`}>
      <span className="font-semibold">{packageKindLabel(kind)}</span>
      {detail ? <> · {detail}</> : null}
    </p>
  );
}

export type PackageOption = {
  kind: PackageKind;
  href: string;
  title: string;
  detail: string;
  duration: number;
  price: number;
};

function OptionBody({ option }: { option: PackageOption }) {
  return (
    <>
      <span className="block text-xs font-bold uppercase tracking-wider text-primary">{packageKindLabel(option.kind)}</span>
      <span className="mt-1 block text-base font-semibold text-secondary">{option.detail}</span>
      <span className="mt-2 block text-sm text-text-muted">
        {option.duration} days · from <span className="font-semibold text-foreground">${option.price.toLocaleString()}</span>
      </span>
    </>
  );
}

/**
 * Both versions side by side at the top of a trip page, the other one a
 * crawlable link — so a visitor picks the right product before reading on, and
 * Google sees the two pages as a deliberate pair rather than duplicates.
 */
export function PackageVariantSwitch({ current, other }: { current: PackageOption; other: PackageOption }) {
  const options = current.kind === "city" ? [current, other] : [other, current];
  return (
    <section id="package" aria-labelledby="package-heading" className="py-8 sm:py-10" data-pdf-hide="">
      <h2 id="package-heading" className="mb-2 text-2xl font-bold" style={{ color: "var(--color-secondary)" }}>
        Choose Your Package
      </h2>
      <p className="mb-6 text-sm" style={{ color: "var(--color-text-muted)" }}>
        The same itinerary on the trail, sold two ways: just the trip between two cities, or everything from your arrival in Nepal to your flight home.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {options.map((option) =>
          option === current ? (
            <div
              key={option.href}
              aria-current="page"
              className="relative rounded-2xl border-2 border-primary bg-primary/5 p-5"
            >
              <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-[11px] font-semibold text-white">
                <Check className="h-3 w-3" /> This page
              </span>
              <OptionBody option={option} />
            </div>
          ) : (
            <Link
              key={option.href}
              href={option.href}
              className="group relative rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-primary/50"
            >
              <OptionBody option={option} />
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                View {option.title}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          )
        )}
      </div>
    </section>
  );
}
