import Link from "next/link";
import { CLOUDINARY_CLOUD_NAME } from "@/lib/cloudinary-url";
import {
  ArrowRight,
  Award,
  Users,
  MapPin,
  Shield,
  Mountain,
  Quote,
  Compass,
  Leaf,
  Flag,
  Star,
  Globe,
  Smile,
  TrendingUp,
} from "lucide-react";

const CLOUDINARY_BASE = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/`;

const defaultContent = [
  {
    title: "Who We Are",
    description:
      "Mardi Treks is a premier trekking and tour agency based in Pokhara, Nepal. Founded by local trekking experts with a passion for the Himalayas, we specialize in guided trekking expeditions, cultural tours, and climbing adventures across Nepal's most stunning landscapes. Our team of certified guides brings decades of combined high-altitude experience, ensuring every journey is safe, memorable, and authentic.",
  },
  {
    title: "What Makes Us Different",
    description:
      "Unlike large, impersonal tour operators, we keep our groups small, our service personal, and our commitment to sustainable tourism unwavering. Every trek with Mardi Treks directly supports local communities — from fair wages for porters and guides to school contributions in mountain villages. We practice Leave No Trace principles, offset carbon where possible, and partner with eco-friendly lodges. When you trek with us, you're not just exploring the Himalayas — you're making a positive impact.",
  },
];

// Icons cycle per content block — a waypoint marker, not a fake sequence number
const blockIcons = [Compass, Leaf, Flag, Mountain];

const iconComponentMap: Record<string, React.ElementType> = {
  Award, Users, MapPin, Shield, Mountain, Star, Compass, Globe, Smile, TrendingUp,
};
const defaultIcon = Award;

const defaultStats = [
  { icon: "Award", label: "Years of Experience", value: "8+" },
  { icon: "Users", label: "Happy Trekkers", value: "2,500+" },
  { icon: "MapPin", label: "Regions Covered", value: "6+" },
  { icon: "Shield", label: "Certified Guides", value: "15+" },
];

export function AboutUsSection({
  enabled,
  heading,
  subheading,
  image,
  content,
  trekTitle,
  trekHeroImage,
  quote,
  stats,
  primaryCta,
  secondaryCta,
}: {
  enabled?: boolean;
  heading?: string | null;
  subheading?: string | null;
  image?: string | null;
  content?: { title: string; description: string }[] | null;
  trekTitle?: string | null;
  trekHeroImage?: string | null;
  quote?: string | null;
  stats?: { icon: string; label: string; value: string }[] | null;
  primaryCta?: { label: string; href: string } | null;
  secondaryCta?: { label: string; href: string } | null;
}) {
  if (enabled === false) return null;

  const resolvedContent = content && content.length > 0 ? content : defaultContent;
  const resolvedStats = stats && stats.length > 0 ? stats : defaultStats;
  // Use the selected trek's hero image as the background on the right side
  const resolvedImage = trekHeroImage
    ? `${CLOUDINARY_BASE}c_fill,w_1000,h_1200,q_auto,f_auto/${trekHeroImage}`
    : image
      ? `${CLOUDINARY_BASE}c_fill,w_1000,h_1200,q_auto,f_auto/${image}`
      : null;
  const resolvedHeading = heading || "Nepal's Premier Trekking & Adventure Company";
  const resolvedSubheading = subheading || "Who We Are";
  const resolvedTrekTitle = trekTitle || "Mardi Himal Trek";
  const resolvedQuote = quote || "We pour our local knowledge into every itinerary so you experience the real Nepal.";
  const resolvedPrimaryCta = primaryCta?.label ? primaryCta : { label: "Learn More About Us", href: "/about" };
  const resolvedSecondaryCta = secondaryCta?.label ? secondaryCta : { label: "Get in Touch", href: "/contact" };

  return (
    <section
      className="relative overflow-hidden bg-background py-12 sm:py-16"
      aria-labelledby="about-us-heading"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 50%, var(--color-primary) 0%, transparent 50%), radial-gradient(circle at 75% 50%, var(--color-secondary) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Eyebrow: label on the left, coordinates on the right */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
            <Compass className="h-4 w-4 text-primary" aria-hidden="true" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
            {resolvedSubheading}
          </span>
          <span className="h-px flex-1 bg-border" aria-hidden="true" />
          <span className="font-mono text-[11px] tracking-[0.08em] text-text-muted">
            28.2096° N, 83.9856° E — Pokhara, Nepal
          </span>
        </div>

        {/* Heading */}
        <div className="mt-8 max-w-3xl">
          <h2
            id="about-us-heading"
            className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[3.25rem] lg:leading-[1.1]"
            style={{ fontFamily: "'Fraunces', ui-serif, Georgia, serif" }}
          >
            {resolvedHeading}
          </h2>
          <div className="mt-5 h-px w-24 bg-primary/40" aria-hidden="true" />
        </div>

        {/* Content grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-14">
          {/* Left: trail-log style content blocks */}
          <div className="flex flex-col">
            <div className="space-y-0">
              {resolvedContent.map((block, i) => {
                const Icon = blockIcons[i % blockIcons.length];
                const isLast = i === resolvedContent.length - 1;
                return (
                  <div key={block.title} className="relative flex gap-5 pb-8">
                    {/* connecting trail line */}
                    {!isLast && (
                      <span
                        className="absolute left-[19px] top-10 bottom-0 w-px border-l border-dashed border-primary/25"
                        aria-hidden="true"
                      />
                    )}
                    <span className="relative z-10 flex h-10 w-10 min-w-10 items-center justify-center rounded-full border border-primary/20 bg-surface text-primary shadow-sm">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div className="rounded-2xl border border-border bg-surface p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] transition-all hover:border-primary/20 hover:shadow-[0_8px_30px_-8px_rgba(254,65,0,0.10)] sm:p-7">
                      <h3 className="text-lg font-semibold text-foreground">{block.title}</h3>
                      <p className="mt-3 text-base leading-relaxed text-text-muted">
                        {block.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-2 flex flex-wrap gap-3">
              <Link
                href={resolvedPrimaryCta.href}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl"
              >
                {resolvedPrimaryCta.label}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href={resolvedSecondaryCta.href}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-base font-semibold text-text transition-all hover:bg-surface-alt"
              >
                {resolvedSecondaryCta.label}
              </Link>
            </div>
          </div>

          {/* Right: photo as the literal card background — stats as a glass strip, quote as a pinned note */}
          <div
            className="relative min-h-[420px] overflow-hidden rounded-3xl border border-border bg-cover bg-center shadow-xl sm:min-h-[520px] lg:min-h-0"
            style={
              resolvedImage
                ? { backgroundImage: `url(${resolvedImage})` }
                : undefined
            }
            role="img"
            aria-label="Mardi Treks trekking adventure in Nepal"
          >
            {!resolvedImage && (
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" aria-hidden="true" />
            )}

            {/* legibility gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/25" aria-hidden="true" />

            {/* route pill, top-left */}
            <span className="absolute left-5 top-5 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm">
              <Mountain className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              {resolvedTrekTitle}
            </span>

            {/* quote, pinned like a note at the top-right corner */}
            <div className="absolute right-5 top-16 z-10 max-w-[210px] rotate-2 rounded-xl border border-white/10 bg-surface/95 p-4 shadow-lg backdrop-blur sm:right-6 sm:top-20">
              <Quote className="h-5 w-5 text-primary/60" aria-hidden="true" />
              <p className="mt-2 text-xs italic leading-relaxed text-foreground">
                &ldquo;{resolvedQuote}&rdquo;
              </p>
            </div>

            {/* stats strip — solid surface with theme-aligned styling */}
            <div className="absolute inset-x-4 bottom-4 z-10 grid grid-cols-2 gap-2 rounded-xl border border-border bg-surface p-3 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.12)] sm:inset-x-5 sm:bottom-5 sm:grid-cols-4 sm:gap-3 sm:p-4">
              {resolvedStats.map((item, i) => {
                const Icon = iconComponentMap[item.icon] || defaultIcon;
                const colors = ["text-primary", "text-secondary", "text-success", "text-primary"];
                return (
                  <div key={item.label} className="flex flex-col items-center rounded-lg px-2 py-1.5 text-center sm:px-3 sm:py-2">
                    <Icon className={`mb-1 h-4 w-4 ${colors[i % colors.length]}`} aria-hidden="true" />
                    <span className="text-sm font-bold text-foreground sm:text-base">{item.value}</span>
                    <span className="text-[10px] leading-tight text-text-muted">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}