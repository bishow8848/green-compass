"use client";

import { memo, type ReactNode, type Ref } from "react";
import { MapPin } from "lucide-react";
import { CLOUDINARY_CLOUD_NAME } from "@/lib/cloudinary-url";
import { elevationMetres, type PdfPackage, type PdfSection } from "@/lib/pdf-package";
import { AltitudeProfile } from "@/components/trek/AltitudeProfile";
import { TrekMapWrapper } from "@/components/map/TrekMapWrapper";
import { TrekCard, type TrekCardData } from "@/components/trek/TrekCard";

/** The trip's route map, as the trip page passes it to TrekMapWrapper. */
export interface PdfRoute {
  geoJsonUrl?: string;
  geoJsonData?: string | null;
  waypoints?: Array<{ lng: number; lat: number; label: string; description?: string; dayNumber?: number }>;
  itinerary?: Array<{ dayNumber: number; title: string; elevation?: string | null }>;
  staticFallbackImage?: string;
}

interface Props {
  pkg: PdfPackage;
  route: PdfRoute | null;
  similarTreks: Array<{ trek: TrekCardData; href: string }>;
  ref?: Ref<HTMLDivElement>;
}

/** Width of the PDF's content (CSS px), which fills an A4 page between its margins (lib/page-pdf.ts). */
export const DOCUMENT_WIDTH = 680;

const SECONDARY = { color: "var(--color-secondary)" };
const TEXT = { color: "var(--color-text)" };
const MUTED = { color: "var(--color-text-muted)" };
const PRIMARY = { color: "var(--color-primary)" };
const HEADER_CELL = { backgroundColor: "var(--color-surface-alt)" };

/**
 * The package as one customer's PDF: what the trip page's "Share as PDF"
 * prints, from the builder's edited copy. It must sit inside a .pdf-capture
 * container, which gives the shared parts (altitude profile, route map) their
 * paper look and is what lib/page-pdf.ts captures it in.
 */
export function PackageDocument({ pkg, route, similarTreks, ref }: Props) {
  const { customer } = pkg;
  const days = pkg.sections.find((section) => section.kind === "itinerary")?.days ?? [];

  const render = (section: PdfSection): ReactNode => {
    switch (section.kind) {
      case "facts": {
        const facts = section.facts.filter((fact) => fact.label.trim() || fact.value.trim());
        if (facts.length === 0) return null;
        return (
          <Section>
            <h2 className="mb-6 text-2xl font-bold" style={SECONDARY}>{section.heading}</h2>
            <div className="border border-border">
              {facts.map((fact, i) => (
                <div key={i} className={`grid grid-cols-[200px_1fr] ${i > 0 ? "border-t border-border" : ""}`}>
                  <span className="border-r border-border px-5 py-2.5 text-sm font-semibold" style={{ ...HEADER_CELL, ...SECONDARY }}>{fact.label}</span>
                  <span className="px-5 py-2.5 text-sm" style={TEXT}>{fact.value}</span>
                </div>
              ))}
            </div>
          </Section>
        );
      }

      case "overview":
        if (!hasText(section.content)) return null;
        return (
          <Section>
            <h2 className="mb-10 text-4xl font-bold" style={SECONDARY}>{section.heading}</h2>
            <RichText html={section.content} className="w-full text-base leading-relaxed [&_p:last-child]:mb-0" />
          </Section>
        );

      case "itinerary":
        if (section.days.length === 0) return null;
        return (
          <Section>
            <h2 className="mb-2 text-3xl font-bold" style={SECONDARY}>{section.heading}</h2>
            {section.description && <p className="mb-10 text-sm" style={MUTED}>{section.description}</p>}
            <div className="space-y-3">
              {section.days.map((day, i) => (
                <div key={day.id}>
                  <div className="pt-3.5 pb-1">
                    <span className="text-lg font-bold" style={PRIMARY}>Day {i + 1}:</span>
                    <h3 className="ml-1.5 inline text-lg leading-snug font-bold" style={{ color: "var(--color-foreground)" }}>{day.title}</h3>
                  </div>
                  <div className="mb-5 pt-1">
                    {hasText(day.description) ? (
                      <RichText html={day.description} className="text-sm leading-relaxed" />
                    ) : (
                      <p className="text-sm leading-relaxed" style={MUTED}>No description available</p>
                    )}
                    {(day.elevation || day.accommodation) && (
                      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-xs" style={MUTED}>
                        {day.elevation && <Dot>Elevation: {day.elevation}</Dot>}
                        {day.accommodation && <Dot>Accommodation: {day.accommodation}</Dot>}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        );

      case "altitude":
        if (!days.some((day) => elevationMetres(day.elevation) !== null)) return null;
        return (
          <Section>
            <AltitudeProfile
              itinerary={days.map((day, i) => ({
                dayNumber: i + 1,
                title: day.title,
                description: day.description,
                elevation: day.elevation,
                accommodation: day.accommodation,
              }))}
            />
          </Section>
        );

      case "inEx": {
        const included = hasText(section.inclusions);
        const excluded = hasText(section.exclusions);
        if (!included && !excluded) return null;
        return (
          <Section>
            <div className="mb-12">
              <h2 className="mb-3 text-3xl font-bold tracking-tight" style={SECONDARY}>{section.heading}</h2>
              {section.description && <p className="text-sm leading-relaxed" style={MUTED}>{section.description}</p>}
            </div>
            <div className="space-y-8">
              {included && (
                <div>
                  <h3 className="mb-3 text-lg font-bold tracking-tight" style={SECONDARY}>What&apos;s Included</h3>
                  <div
                    className="text-sm leading-relaxed [&_ul]:list-none [&_ul]:space-y-3.5 [&_li]:relative [&_li]:pl-6 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:font-bold [&_li]:before:text-emerald-500 [&_li]:before:content-['✓']"
                    style={TEXT}
                    dangerouslySetInnerHTML={{ __html: section.inclusions }}
                  />
                </div>
              )}
              {excluded && (
                <div>
                  <h3 className="mb-3 text-lg font-bold tracking-tight" style={SECONDARY}>What&apos;s Excluded</h3>
                  <div
                    className="text-sm leading-relaxed [&_ul]:list-none [&_ul]:space-y-3.5 [&_li]:relative [&_li]:pl-6 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:font-bold [&_li]:before:text-red-400 [&_li]:before:content-['✗']"
                    style={TEXT}
                    dangerouslySetInnerHTML={{ __html: section.exclusions }}
                  />
                </div>
              )}
            </div>
          </Section>
        );
      }

      case "pricing":
        if (section.tiers.length === 0) return null;
        return (
          <Section>
            <h2 className="mb-2 text-2xl font-bold" style={SECONDARY}>{section.heading}</h2>
            {section.description && <p className="mb-8 text-sm" style={MUTED}>{section.description}</p>}
            <div className="border border-border">
              <div className="grid grid-cols-[1fr_220px]" style={HEADER_CELL}>
                <span className="border-r border-border px-5 py-2.5 text-left text-sm font-semibold" style={SECONDARY}>Group Size</span>
                <span className="px-5 py-2.5 text-right text-sm font-semibold" style={SECONDARY}>Price Per Person</span>
              </div>
              {section.tiers.map((tier, i) => (
                <div key={i} className="grid grid-cols-[1fr_220px] border-t border-border">
                  <span className="border-r border-border px-5 py-2.5 text-sm" style={TEXT}>{tier.groupSize} pax</span>
                  <span className="px-5 py-2.5 text-right text-sm whitespace-nowrap" style={MUTED}>
                    <span className="text-slate-400 line-through">{dollars(Math.round(tier.pricePerPerson * 1.1))}</span>
                    &nbsp;
                    <span className="font-semibold" style={PRIMARY}>{dollars(tier.pricePerPerson)}</span>
                  </span>
                </div>
              ))}
            </div>
          </Section>
        );

      case "addons":
        if (section.items.length === 0) return null;
        return (
          <Section>
            <h2 className="mb-2 text-2xl font-bold" style={SECONDARY}>{section.heading}</h2>
            {section.description && <p className="mb-8 text-sm" style={MUTED}>{section.description}</p>}
            <div className="grid grid-cols-[170px_1fr_150px] border border-border">
              <div className="col-span-3 grid grid-cols-subgrid" style={HEADER_CELL}>
                <span className="border-r border-border px-5 py-2.5 text-sm font-semibold" style={SECONDARY}>Add-on</span>
                <span className="border-r border-border px-5 py-2.5 text-sm font-semibold" style={SECONDARY}>Description</span>
                <span className="px-5 py-2.5 text-right text-sm font-semibold" style={SECONDARY}>Price</span>
              </div>
              {section.items.map((addon, i) => (
                <div key={i} className="col-span-3 grid grid-cols-subgrid border-t border-border">
                  <span className="border-r border-border px-5 py-2.5 text-sm font-semibold" style={SECONDARY}>{addon.title}</span>
                  <span className="border-r border-border px-5 py-2.5 text-sm" style={MUTED}>{addon.description || "—"}</span>
                  <span className="px-5 py-2.5 text-right text-sm" style={MUTED}>
                    <span className="font-bold" style={PRIMARY}>{dollars(addon.pricePerUnit)}</span> / {addon.unit || "person"}
                  </span>
                </div>
              ))}
            </div>
          </Section>
        );

      case "map":
        if (!route) return null;
        return (
          <Section>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="mb-2 text-2xl font-bold" style={SECONDARY}>{section.heading}</h2>
                {section.description && <p className="text-sm" style={MUTED}>{section.description}</p>}
              </div>
              {/* With no route file, the map is the admin's static image, which has no pins. */}
              {route.waypoints && (route.geoJsonUrl || route.geoJsonData) && (
                <span
                  className="flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold"
                  style={{ borderColor: "var(--color-border)", color: "var(--color-primary)", backgroundColor: "var(--color-surface-alt)" }}
                >
                  <MapPin className="h-3.5 w-3.5" />
                  {route.waypoints.length} waypoints
                </span>
              )}
            </div>
            <div className="overflow-hidden rounded-3xl border" style={{ borderColor: "var(--color-border)" }}>
              <RouteMap route={route} />
            </div>
          </Section>
        );

      case "faqs":
        if (section.items.length === 0) return null;
        return (
          <Section>
            <h2 className="mb-2 text-2xl font-bold" style={SECONDARY}>{section.heading}</h2>
            {section.description ? <p className="mb-8 text-sm" style={MUTED}>{section.description}</p> : null}
            <div className="space-y-3">
              {section.items.map((faq, i) => (
                <div key={i}>
                  <p className="pt-3.5 pb-1 text-sm font-semibold" style={{ color: "var(--color-foreground)" }}>{faq.question}</p>
                  <p className="mb-5 pt-1 text-sm leading-relaxed whitespace-pre-line" style={TEXT}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </Section>
        );

      case "custom":
        if (!section.heading.trim() && !hasText(section.content)) return null;
        return (
          <Section>
            {section.heading.trim() && <h2 className="mb-4 text-2xl font-bold" style={SECONDARY}>{section.heading}</h2>}
            {hasText(section.content) && <RichText html={section.content} className="text-base leading-relaxed" />}
          </Section>
        );

      case "similarTreks":
        if (similarTreks.length === 0) return null;
        return (
          // Moves to the next page whole rather than be split (lib/page-pdf.ts).
          <Section keepTogether>
            <div className="mb-6 max-w-2xl">
              <h2 className="mb-3 text-3xl font-bold tracking-tight" style={SECONDARY}>{section.heading}</h2>
              {section.description && <p className="text-sm leading-relaxed" style={MUTED}>{section.description}</p>}
            </div>
            <div className="grid grid-cols-3 gap-6">
              {similarTreks.map(({ trek, href }) => (
                <TrekCard key={trek.id} trek={trek} href={href} />
              ))}
            </div>
          </Section>
        );
    }
  };

  return (
    <div ref={ref} className="bg-white" style={{ width: DOCUMENT_WIDTH, color: "var(--color-foreground)" }}>
      {pkg.title.trim() && <p className="pb-6 text-center font-serif text-5xl leading-tight" style={SECONDARY}>{pkg.title}</p>}

      {(customer.name.trim() || customer.dates.trim()) && (
        <div className="-mt-2 space-y-1 pb-6 text-center text-base" style={MUTED}>
          {customer.name.trim() && (
            <p>
              Prepared for <span className="font-semibold" style={SECONDARY}>{customer.name}</span>
            </p>
          )}
          {customer.dates.trim() && (
            <p>
              Travel dates: <span className="font-semibold" style={SECONDARY}>{customer.dates}</span>
            </p>
          )}
        </div>
      )}

      {pkg.coverImage && (
        <div className="relative aspect-video w-full overflow-hidden">
          <img
            src={`https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_1600,q_auto,f_auto/${pkg.coverImage}`}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      )}

      {customer.note.trim() && (
        <Section>
          <p className="border-l-4 pl-5 text-base leading-relaxed whitespace-pre-line" style={{ ...TEXT, borderColor: "var(--color-primary)" }}>
            {customer.note}
          </p>
        </Section>
      )}

      {pkg.sections.map((section) => (section.visible ? <div key={section.id}>{render(section)}</div> : null))}
    </div>
  );
}

/** A section with the spacing the trip page's sections get on paper (.pdf-capture in globals.css). */
function Section({ children, keepTogether }: { children: ReactNode; keepTogether?: boolean }) {
  return (
    <section className="py-6" data-pdf-keep={keepTogether ? "" : undefined}>
      {children}
    </section>
  );
}

function RichText({ html, className }: { html: string; className: string }) {
  return <div className={`rich-text ${className}`} style={TEXT} dangerouslySetInnerHTML={{ __html: html }} />;
}

function Dot({ children }: { children: ReactNode }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className="h-1 w-1 rounded-full" style={{ backgroundColor: "var(--color-primary-light)" }} />
      {children}
    </span>
  );
}

/**
 * The live map, kept out of the document's re-renders: its route never
 * changes here, and every keystroke in the editor re-renders the document.
 */
const RouteMap = memo(function RouteMap({ route }: { route: PdfRoute }) {
  return <TrekMapWrapper {...route} />;
});

/** "$1,200", the same in every browser locale. */
function dollars(amount: number): string {
  return `$${(amount || 0).toLocaleString("en-US")}`;
}

/** Whether rich text has anything to show: an empty editor still holds "<p></p>". */
function hasText(html: string): boolean {
  return /<img\b/i.test(html) || html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim().length > 0;
}
