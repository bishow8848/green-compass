import { FixDepartureTable, type FixDepartureTrek } from "@/components/trek/FixDepartureTable";
import { CLOUDINARY_CLOUD_NAME } from "@/lib/cloudinary-url";
import { CalendarDays } from "lucide-react";
import { KenBurns, Stagger, StaggerItem } from "@/components/motion";

function parseJsonArray(val: string | null | undefined): any[] {
  if (!val) return [];
  try {
    const arr = JSON.parse(val);
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

/** Build a FixDepartureTrek config from a prisma trek row (needs pricingTiers + category). */
export function buildFixDepartureConfig(t: any): FixDepartureTrek {
  const weekdays = parseJsonArray(t.fixedDepartureDays).filter((d) => typeof d === "string");
  const customDates = parseJsonArray(t.customStartDates).filter((d) => typeof d === "string");
  const tiers = t.pricingTiers || [];
  const minPrice =
    tiers.length > 0
      ? Math.min(...tiers.map((x: any) => x.pricePerPerson || 0))
      : t.price || 0;
  return {
    id: t.id,
    title: t.title,
    slug: t.slug,
    categorySlug: t.category?.slug || "treks",
    heroImage: t.heroImage || null,
    minPrice,
    pricingTiers: tiers,
    weekdays,
    customDates,
  };
}

/** Shared page shell (hero + table) used by the per-trek fix-departure pages. */
export function FixDeparturePageShell({
  badge = "Fixed Departure",
  title = "Fix Departure",
  description = "Guaranteed departures with confirmed start dates. Pick your preferred date — every trip listed below runs as scheduled.",
  heroImage,
  treks,
}: {
  badge?: string;
  title?: string;
  description?: string;
  /** Cloudinary public ID of the trek's hero image (rendered as the hero background). */
  heroImage?: string | null;
  treks: FixDepartureTrek[];
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative flex min-h-[320px] items-end overflow-hidden bg-gradient-to-br from-secondary-dark via-primary-dark/30 to-gray-900">
        {heroImage ? (
          <KenBurns>
            <img
              src={`https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_1600,q_auto,f_auto/${heroImage}`}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          </KenBurns>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-dark via-primary-dark/30 to-gray-900" />
        )}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(70, 55, 40, 0.45)", mixBlendMode: "multiply" as any }}
        />
        <Stagger className="relative z-10 mx-auto w-full max-w-screen-2xl px-4 pb-12 sm:px-6 lg:px-8">
          <StaggerItem as="span" from="left" className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
            <CalendarDays className="h-3.5 w-3.5" /> {badge}
          </StaggerItem>
          <StaggerItem as="h1" className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            {title}
          </StaggerItem>
          <StaggerItem as="p" className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {description}
          </StaggerItem>
        </Stagger>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-screen-2xl px-3 py-10 sm:px-4 lg:px-6">
        <FixDepartureTable treks={treks} />
      </div>
    </div>
  );
}
