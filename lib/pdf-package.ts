import { createDefaultSection } from "@/components/admin/trek-sections/types";

/**
 * A trip as the admin PDF builder (app/admin/pdf-builder) edits it for one
 * customer. It is built from the saved trip on the server, and every edit
 * stays in the admin's browser: nothing here is ever written back to the
 * trip, and the builder puts the saved content back once the PDF is made.
 *
 * Sections, their order and what shows by default follow the trip page's
 * own "Share as PDF" (app/(marketing)/[category]/[slug]/page.tsx).
 */

export interface PdfDay {
  /** Keeps a day's rich text editor with it when days are moved. */
  id: string;
  title: string;
  /** Rich text HTML. */
  description: string;
  elevation: string;
  accommodation: string;
}

export interface PdfFact {
  label: string;
  value: string;
}

export interface PdfTier {
  groupSize: string;
  pricePerPerson: number;
}

export interface PdfAddon {
  title: string;
  description: string;
  unit: string;
  pricePerUnit: number;
}

export interface PdfFaq {
  question: string;
  answer: string;
}

interface SectionBase {
  /** The trip page's section id ("overview", "pricing"...) or a custom section's own. */
  id: string;
  visible: boolean;
  heading: string;
  description: string;
}

export type PdfSection =
  | (SectionBase & { kind: "facts"; facts: PdfFact[] })
  | (SectionBase & { kind: "overview"; content: string })
  | (SectionBase & { kind: "itinerary"; days: PdfDay[] })
  // Drawn from the itinerary's elevations, under a heading of its own.
  | (SectionBase & { kind: "altitude" })
  | (SectionBase & { kind: "inEx"; inclusions: string; exclusions: string })
  | (SectionBase & { kind: "pricing"; tiers: PdfTier[] })
  | (SectionBase & { kind: "addons"; items: PdfAddon[] })
  // The trip's own route, which the builder doesn't change.
  | (SectionBase & { kind: "map" })
  | (SectionBase & { kind: "faqs"; items: PdfFaq[] })
  | (SectionBase & { kind: "custom"; content: string })
  // The trip's own similar treks.
  | (SectionBase & { kind: "similarTreks" });

export type PdfSectionKind = PdfSection["kind"];

export interface PdfPackage {
  title: string;
  /** Cloudinary public ID of the photo under the title; "" for none. */
  coverImage: string;
  /** Who the PDF is for. Each line shows only when filled in. */
  customer: { name: string; dates: string; note: string };
  sections: PdfSection[];
}

/** Heading of the custom section scripts/apply-blog-content.mts writes (GUIDES_HEADING in scripts/blog-content/build.ts), which the PDF leaves out. */
export const GUIDES_HEADING = "Trekking Guides & Articles";

const SECTION_LABELS: Record<PdfSectionKind, string> = {
  facts: "Trip facts",
  overview: "Overview",
  itinerary: "Itinerary",
  altitude: "Altitude profile",
  inEx: "Inclusions & exclusions",
  pricing: "Pricing",
  addons: "Add-ons",
  map: "Route map",
  faqs: "FAQs",
  custom: "Custom section",
  similarTreks: "Similar treks",
};

export function sectionLabel(section: PdfSection): string {
  return section.kind === "custom" ? section.heading.trim() || SECTION_LABELS.custom : SECTION_LABELS[section.kind];
}

/** The trip page's sections in the order it shows them when none is saved. */
const DEFAULT_ORDER = ["overview", "itinerary", "altitude", "inEx", "pricing", "fixedDepartures", "addons", "map", "faqs", "reviews", "gallery", "contact"];

/** What the builder needs of a trip: the row with its itinerary, pricing tiers, FAQs and region. */
export interface TripForPdf {
  title: string;
  heroImage: string | null;
  duration: number;
  difficulty: string;
  region: string | null;
  regionRef?: { name: string } | null;
  bestTime: string | null;
  maxAltitude: number | null;
  overview: string;
  inclusions: string;
  exclusions: string;
  addons: string | null;
  customSections: string | null;
  sectionData: string | null;
  sectionOrder: string | null;
  itinerary: { dayNumber: number; title: string; description: string; elevation: string | null; accommodation: string | null }[];
  pricingTiers: { groupSize: string; pricePerPerson: number }[];
  faqs: { question: string; answer: string }[];
}

export function packageFromTrip(
  trip: TripForPdf,
  { hasRoute, hasSimilarTreks }: { hasRoute: boolean; hasSimilarTreks: boolean }
): PdfPackage {
  const meta = (type: Parameters<typeof createDefaultSection>[0]) => createDefaultSection(type, trip).data;
  const itinerary = meta("itinerary");
  const inEx = meta("inEx");
  const pricing = meta("pricing");
  const addons = meta("addons");
  const faqs = meta("faqs");
  const map = meta("map");

  const days: PdfDay[] = itinerary.items.map((day: any, i: number) => ({
    id: `day-${i}`,
    title: day.title,
    description: day.description,
    elevation: day.elevation,
    accommodation: day.accommodation,
  }));
  const tiers: PdfTier[] = pricing.items;
  const addonItems: PdfAddon[] = (addons.items as any[]).map((addon) => ({
    title: addon.title || "",
    description: addon.description || "",
    unit: addon.unit || "",
    pricePerUnit: addon.pricePerUnit || 0,
  }));
  const faqItems: PdfFaq[] = faqs.items;

  const sections = new Map<string, PdfSection>();
  const add = (section: PdfSection) => sections.set(section.id, section);
  add({
    id: "overview",
    kind: "overview",
    visible: !!trip.overview.trim(),
    heading: "Trip Overview",
    description: "",
    content: trip.overview,
  });
  add({ id: "itinerary", kind: "itinerary", visible: days.length > 0, heading: itinerary.heading, description: itinerary.description, days });
  add({ id: "altitude", kind: "altitude", visible: days.some((day) => elevationMetres(day.elevation) !== null), heading: "", description: "" });
  add({
    id: "inEx",
    kind: "inEx",
    visible: !!(inEx.inclusions.trim() || inEx.exclusions.trim()),
    heading: inEx.heading,
    description: inEx.description,
    inclusions: inEx.inclusions,
    exclusions: inEx.exclusions,
  });
  add({
    id: "pricing",
    kind: "pricing",
    visible: tiers.length > 0,
    heading: pricing.heading,
    description: pricing.description || "Per-person pricing based on group size.",
    tiers,
  });
  add({
    id: "addons",
    kind: "addons",
    visible: addonItems.length > 0,
    heading: addons.heading,
    description: addons.description || "Optional extras to enhance your experience.",
    items: addonItems,
  });
  if (hasRoute) {
    add({
      id: "map",
      kind: "map",
      visible: true,
      heading: map.heading,
      description: map.description || "Explore the terrain map showing the trek route.",
    });
  }
  add({ id: "faqs", kind: "faqs", visible: faqItems.length > 0, heading: faqs.heading, description: faqs.description, items: faqItems });
  for (const custom of parseArray(trip.customSections)) {
    if (!custom?.id) continue;
    const heading = String(custom.data?.heading ?? "");
    add({
      id: String(custom.id),
      kind: "custom",
      visible: heading !== GUIDES_HEADING,
      heading,
      description: "",
      content: String(custom.data?.content ?? ""),
    });
  }

  // The trip page's order: as saved, then whatever the order leaves out, with
  // the altitude profile always right after the map.
  const saved = parseArray(trip.sectionOrder).filter((id): id is string => typeof id === "string");
  const ordered: PdfSection[] = [];
  for (const id of [...(saved.length > 0 ? saved : DEFAULT_ORDER), ...sections.keys()]) {
    const section = sections.get(id);
    if (section && !ordered.includes(section)) ordered.push(section);
  }
  const altitude = ordered.findIndex((section) => section.kind === "altitude");
  const mapAt = ordered.findIndex((section) => section.kind === "map");
  if (altitude !== -1 && mapAt !== -1 && altitude !== mapAt + 1) {
    const [moved] = ordered.splice(altitude, 1);
    ordered.splice(ordered.findIndex((section) => section.kind === "map") + 1, 0, moved);
  }

  const maxAltitude = trip.maxAltitude || Math.max(0, ...days.map((day) => elevationMetres(day.elevation) ?? 0));
  const facts: PdfFact[] = [
    { label: "Duration", value: `${trip.duration} ${trip.duration === 1 ? "Day" : "Days"}` },
    { label: "Difficulty", value: capitalise(trip.difficulty) },
    { label: "Max Altitude", value: maxAltitude > 0 ? `${maxAltitude.toLocaleString("en-US")}m` : "" },
    { label: "Best Time", value: trip.bestTime || "" },
    { label: "Region", value: trip.regionRef?.name || capitalise(trip.region || "") },
  ].filter((fact) => fact.value);

  return {
    title: trip.title,
    coverImage: trip.heroImage || "",
    customer: { name: "", dates: "", note: "" },
    sections: [
      // The trip page's PDF leaves its stats out; the builder offers them.
      { id: "facts", kind: "facts", visible: false, heading: "Trip Facts", description: "", facts },
      ...ordered,
      ...(hasSimilarTreks
        ? [{ id: "similarTreks", kind: "similarTreks", visible: true, heading: "Similar Treks", description: "You might also like these treks" } as const]
        : []),
    ],
  };
}

/** A blank custom section to write something just for this customer. */
export function newCustomSection(): PdfSection {
  return { id: uniqueId("pdf-custom"), kind: "custom", visible: true, heading: "", description: "", content: "" };
}

export function newDay(): PdfDay {
  return { id: uniqueId("day"), title: "", description: "", elevation: "", accommodation: "" };
}

function uniqueId(prefix: string): string {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
}

/**
 * A PDF with nothing in it but the letterhead and one section to write in,
 * for anything that isn't one package: a quote, a letter, a custom trip.
 */
export function blankPackage(): PdfPackage {
  return { title: "", coverImage: "", customer: { name: "", dates: "", note: "" }, sections: [newCustomSection()] };
}

/**
 * "<name>-<customer-name>.pdf": `name` is the trip's slug, or a blank PDF's
 * title. Each part is left out when empty.
 */
export function pdfFileName(name: string, customerName: string): string {
  return `${[slugify(name), slugify(customerName)].filter(Boolean).join("-") || "green-compass-treks"}.pdf`;
}

function slugify(text: string): string {
  return text
    .normalize("NFKD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** The altitude profile's reading of an elevation: "1,400 m" is 1400, and anything else isn't a number. */
export function elevationMetres(elevation: string): number | null {
  const cleaned = elevation.replace(/,/g, "").replace(/m/gi, "").trim();
  if (!cleaned) return null;
  const metres = Number(cleaned);
  return Number.isNaN(metres) ? null : metres;
}

function capitalise(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function parseArray(json: string | null | undefined): any[] {
  if (!json) return [];
  try {
    const value = JSON.parse(json);
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}
