"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { GripVertical, Trash2, Eye, EyeOff, ChevronUp, ChevronDown, Upload, Check, X } from "lucide-react";
import { TrekSection, DetailsData, OverviewData, ItineraryData, InExData, PricingData, AddonData, FaqsData, MapData, GalleryData, SeoData, CustomData, SimilarTreksData, FixedDeparturesData } from "./types";
import { ImageUpload, type ImageUploadHandle } from "./ImageUpload";
import type { RichTextEditorHandle } from "@/components/admin/RichTextEditor";
import { MapPreview } from "./MapPreview";
import { SeoAnalyzer } from "@/components/admin/SeoAnalyzer";
import dynamic from "next/dynamic";

const RichTextEditor = dynamic(
  () => import("@/components/admin/RichTextEditor").then((m) => ({ default: m.RichTextEditor })),
  { ssr: false }
);

// ─── Props ───────────────────────────────────────────────────────────
interface CategoryInfo {
  id: string;
  name: string;
  slug: string;
  icon?: string | null;
  regions?: { id: string; name: string; slug: string }[];
}

interface Props {
  section: TrekSection;
  index: number;
  total: number;
  onChange: (id: string, data: any) => void;
  onToggleVisibility: (id: string) => void;
  onRemove: (id: string) => void;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
  categories?: CategoryInfo[];
  /** Callback to register ImageUpload handles for deferred upload (key = sectionId.fieldName) */
  registerImageUpload?: (key: string, handle: ImageUploadHandle) => void;
  /** Callback to register RichTextEditor handles for deferred image upload */
  registerRichTextEditor?: (key: string, handle: RichTextEditorHandle) => void;
  /** Everything the SEO section needs to score the trek page as a whole */
  seoContext?: SeoContext;
}

/** Title, slug and the combined body HTML of every visible trek section. */
export interface SeoContext {
  title: string;
  slug: string;
  html: string;
  /** URL path the trek lives under, e.g. "/annapurna" */
  urlPrefix: string;
}

// ─── Section wrapper with controls ──────────────────────────────────
function SectionShell({ section, index, total, onToggleVisibility, onRemove, onMoveUp, onMoveDown, children }: Props & { children: React.ReactNode }) {
  const isLocked = section.type === "details" || section.type === "seo" || section.type === "similarTreks";
  const isDetails = section.type === "details";
  const isSeo = section.type === "seo";
  const isSimilarTreks = section.type === "similarTreks";
  return (
    <div className={`rounded-2xl border bg-white shadow-sm transition-all ${section.visible ? "border-slate-200" : "border-slate-100 bg-slate-50/50 opacity-60"}`}>
      {/* Header bar */}
      <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-2.5">
        <GripVertical className="h-4 w-4 shrink-0 text-slate-300 cursor-grab" />
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 min-w-[80px]">{section.label}</span>
        {isLocked && (
          <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-medium text-amber-600">Fixed</span>
        )}
        {section.type === "custom" && (
          <span className="rounded bg-violet-100 px-1.5 py-0.5 text-[10px] font-medium text-violet-600">Custom</span>
        )}
        <div className="ml-auto flex items-center gap-0.5">
          {!isLocked && (
            <button type="button" onClick={() => onMoveUp(index)} disabled={index === 0}
              className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 disabled:opacity-30">
              <ChevronUp className="h-3.5 w-3.5" />
            </button>
          )}
          {!isLocked && (
            <button type="button" onClick={() => onMoveDown(index)} disabled={index === total - 1}
              className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 disabled:opacity-30">
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
          )}
          <button type="button" onClick={() => onToggleVisibility(section.id)}
            className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600">
            {section.visible ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
          </button>
          {!isLocked && (
            <button type="button" onClick={() => onRemove(section.id)}
              className="rounded p-1 text-slate-400 hover:bg-red-50 hover:text-red-500">
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>
      {/* Body */}
      {section.visible && <div className="p-4">{children}</div>}
    </div>
  );
}

// ─── Field helper ───────────────────────────────────────────────────
function Field({ label, children, slim }: { label: string; children: React.ReactNode; slim?: boolean }) {
  return (
    <div className={slim ? "" : "space-y-1"}>
      <label className="block text-xs font-medium text-slate-500">{label}</label>
      {children}
    </div>
  );
}

// ─── Add button (dashed, inline) ────────────────────────────────────
function AddBtn({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button type="button" onClick={onClick}
      className="inline-flex items-center justify-center gap-1.5 w-full rounded-lg border-2 border-dashed border-slate-300 px-3 py-2 text-xs font-medium text-slate-500 transition-all hover:border-teal-300 hover:bg-teal-50 hover:text-teal-600">
      + {label}
    </button>
  );
}

// ═════════════════════════════════════════════════════════════════════
// SECTION RENDERERS
// ═════════════════════════════════════════════════════════════════════

// ─── Details ────────────────────────────────────────────────────────
function DetailsSection({ data, onChange, categories, registerImageUpload }: { data: DetailsData; onChange: (d: DetailsData) => void; categories?: CategoryInfo[]; registerImageUpload?: (key: string, h: ImageUploadHandle) => void }) {
  const set = (field: keyof DetailsData, value: any) => onChange({ ...data, [field]: value });

  // Compute available regions from the selected category's regions
  const selectedCategory = categories?.find((c) => c.id === data.categoryId);
  const allRegions = selectedCategory?.regions || [];
  // When category changes, reset region if the current regionId doesn't belong to the new category
  const regionValid = !data.regionId || allRegions.some((r) => r.id === data.regionId);
  if (data.regionId && !regionValid) {
    onChange({ ...data, regionId: "", region: "" });
  }
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <Field label="Title *"><input value={data.title} onChange={(e) => set("title", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" /></Field>
      <Field label="Slug *"><input value={data.slug} onChange={(e) => set("slug", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-mono" /></Field>
      <Field label="Category">
        <select value={data.categoryId || ""} onChange={(e) => set("categoryId", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm">
          <option value="">-- No category --</option>
          {(categories || []).map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.icon || "📁"} {cat.name}</option>
          ))}
        </select>
      </Field>
      <Field label="Difficulty">
        <select value={data.difficulty} onChange={(e) => set("difficulty", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm">
          {["easy", "moderate", "challenging", "difficult", "extreme"].map((d) => <option key={d} value={d}>{d.charAt(0).toUpperCase()+d.slice(1)}</option>)}
        </select>
      </Field>
      <Field label="Region">
        <select value={data.regionId} onChange={(e) => {
          const selectedRegion = allRegions.find((r) => r.id === e.target.value);
          set("regionId", e.target.value);
          set("region", selectedRegion?.name || "");
        }} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm">
          <option value="">Select a region...</option>
          {allRegions.map((r) => <option key={r.id} value={r.id}>{r.name}</option>)}
        </select>
        {data.regionId && (
          <p className="mt-1 text-xs text-slate-400">Region: {data.region}</p>
        )}
      </Field>
      <Field label="Status">
        <select value={data.status} onChange={(e) => set("status", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm">
          <option value="draft">Draft</option><option value="published">Published</option><option value="archived">Archived</option>
        </select>
      </Field>
      <div className="sm:col-span-2">
        <ImageUpload ref={registerImageUpload ? (el) => { if (el) registerImageUpload("heroImage", el); } : undefined} value={data.heroImage} onChange={(id) => set("heroImage", id)} label="Hero Image" />
      </div>
    </div>
  );
}

// ─── Overview ───────────────────────────────────────────────────────
function OverviewSection({ data, onChange, registerRichTextEditor }: { data: OverviewData; onChange: (d: OverviewData) => void; registerRichTextEditor?: (key: string, h: RichTextEditorHandle) => void }) {
  const set = (field: string, val: any) => onChange({ ...data, [field]: val });
  return (
    <div className="space-y-4">
      <RichTextEditor ref={registerRichTextEditor ? (el) => { if (el) registerRichTextEditor("content", el); } : undefined} content={data.content} onChange={(html) => set("content", html)} placeholder="Describe the trek..." />

      {/* Overview Stats Boxes */}
      <div className="rounded-lg border border-slate-200 bg-slate-50/50 p-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Overview Stats (shown in boxes)</p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Field label="Best Time *">
            <input value={data.bestTime || ""} onChange={(e) => set("bestTime", e.target.value)}
              placeholder="e.g. Mar-May, Sep-Nov"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
          </Field>
          <Field label="Max Altitude">
            <div className="relative">
              <input type="number" value={data.maxAltitude || ""} onChange={(e) => set("maxAltitude", parseFloat(e.target.value) || 0)}
                placeholder="Auto-calculated from itinerary elevation"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">m</span>
            </div>
            <p className="mt-1 text-[10px] text-slate-400">Auto-calculated from itinerary elevation data on save. Override manually if needed.</p>
          </Field>
          <div className="rounded-md bg-slate-100 px-3 py-2 sm:col-span-2">
            <p className="text-xs text-slate-500">
              <span className="font-semibold">Note:</span> Duration, difficulty, min price, and region are taken from the
              Details section and pricing tiers. Review stats will be auto-calculated on save.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Itinerary ──────────────────────────────────────────────────────
function ItinerarySection({ data, onChange, registerRichTextEditor }: { data: ItineraryData; onChange: (d: ItineraryData) => void; registerRichTextEditor?: (key: string, h: RichTextEditorHandle) => void }) {
  const set = (field: string, val: any) => onChange({ ...data, [field]: val });
  const items = data.items;
  const updateItem = (i: number, updates: Record<string, any>) => {
    const next = items.map((item, idx) => idx === i ? { ...item, ...updates } : item);
    onChange({ ...data, items: next });
  };
  const remove = (i: number) => onChange({ ...data, items: items.filter((_, idx) => idx !== i) });
  const add = () => onChange({ ...data, items: [...items, { dayNumber: items.length + 1, title: "", description: "", elevation: "", accommodation: "", placeDescription: "", lat: undefined, lng: undefined }] });

  function parseCoord(raw: string) {
    const comma = raw.lastIndexOf(",");
    if (comma >= 0) {
      const first = parseFloat(raw.slice(0, comma).trim());
      const second = parseFloat(raw.slice(comma + 1).trim());
      return { lat: !isNaN(first) ? first : undefined, lng: !isNaN(second) ? second : undefined };
    }
    const val = parseFloat(raw.trim());
    return { lat: !isNaN(val) ? val : undefined, lng: undefined };
  }

  return (
    <div className="space-y-3">
      <Field label="Section Heading">
        <input value={data.heading || ""} onChange={(e) => set("heading", e.target.value)} placeholder="e.g. Itinerary" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
      </Field>
      <Field label="Section Description (optional)">
        <textarea rows={2} value={data.description || ""} onChange={(e) => set("description", e.target.value)} placeholder="A brief description about the itinerary..." className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
      </Field>
      {items.length === 0 && <p className="text-xs text-slate-400 text-center py-2">No itinerary days yet.</p>}
      {items.map((item, i) => (
        <div key={i} className="rounded-lg border border-slate-200 bg-slate-50/50 p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="rounded bg-teal-100 px-2 py-0.5 text-[11px] font-bold text-teal-700">Day {item.dayNumber || i + 1}</span>
            <button type="button" onClick={() => remove(i)} className="rounded p-1 text-slate-400 hover:bg-red-50 hover:text-red-500"><Trash2 className="h-3.5 w-3.5" /></button>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <input type="number" value={item.dayNumber || i + 1} onChange={(e) => updateItem(i, { dayNumber: parseInt(e.target.value) || i + 1 })} className="rounded border border-slate-200 px-2 py-1.5 text-sm" />
            <input value={item.title} onChange={(e) => updateItem(i, { title: e.target.value })} placeholder="Title" className="rounded border border-slate-200 px-2 py-1.5 text-sm" />
            <div className="col-span-2">
              <RichTextEditor ref={registerRichTextEditor ? (el) => { if (el) registerRichTextEditor(`itinerary.${i}`, el); } : undefined} content={item.description} onChange={(html) => updateItem(i, { description: html })} placeholder="Describe the day's trek..." hideStatusBar />
            </div>
            <input value={item.elevation} onChange={(e) => updateItem(i, { elevation: e.target.value })} placeholder="Elevation (e.g. 2,800m)" className="rounded border border-slate-200 px-2 py-1.5 text-sm" />
            <input value={item.accommodation} onChange={(e) => updateItem(i, { accommodation: e.target.value })} placeholder="Accommodation" className="rounded border border-slate-200 px-2 py-1.5 text-sm" />
            <input value={item.placeDescription || ""} onChange={(e) => updateItem(i, { placeDescription: e.target.value })} placeholder="Place description (e.g. Gateway to the Khumbu)" className="col-span-2 rounded border border-slate-200 px-2 py-1.5 text-sm" />
            <div className="col-span-2 border-t border-slate-100 pt-2">
              <p className="mb-1.5 text-[11px] font-medium text-slate-400">Route Coordinates (for map waypoint)</p>
              <input
                defaultValue={item.lat != null && item.lng != null ? item.lat + ", " + item.lng : item.lat != null ? String(item.lat) : item.lng != null ? String(item.lng) : ""}
                onBlur={(e) => {
                  const { lat, lng } = parseCoord(e.target.value);
                  updateItem(i, { lat, lng });
                  e.target.value = lat != null && lng != null ? lat + ", " + lng : lat != null ? String(lat) : lng != null ? String(lng) : "";
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    (e.target as HTMLInputElement).blur();
                  }
                }}
                placeholder="27.7044, 85.3587"
                className="w-full rounded border border-slate-200 px-2 py-1.5 text-sm font-mono"
              />
            </div>
          </div>
        </div>
      ))}
      <AddBtn onClick={add} label="Add day" />
    </div>
  );
}

// ─── Inclusions & Exclusions ──────────────────────────────────────
function InExSection({ data, onChange, registerRichTextEditor }: { data: InExData; onChange: (d: InExData) => void; registerRichTextEditor?: (key: string, h: RichTextEditorHandle) => void }) {
  const set = (field: string, val: any) => onChange({ ...data, [field]: val });

  return (
    <div className="space-y-4">
      <Field label="Section Heading">
        <input value={data.heading || ""} onChange={(e) => set("heading", e.target.value)} placeholder="e.g. Inclusions & Exclusions" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
      </Field>
      <Field label="Section Description (optional)">
        <textarea rows={2} value={data.description || ""} onChange={(e) => set("description", e.target.value)} placeholder="A brief description..." className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
      </Field>

      {/* Inclusions — Rich Text */}
      <div>
        <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-emerald-700"><Check className="h-3 w-3" /> What&apos;s Included</label>
        <RichTextEditor
          ref={registerRichTextEditor ? (el) => { if (el) registerRichTextEditor("inclusions", el); } : undefined}
          content={data.inclusions}
          onChange={(html) => set("inclusions", html)}
          placeholder="Describe what's included. You can use formatting, lists, images, etc."
          hideStatusBar
        />
      </div>

      <div className="border-t border-slate-100" />

      {/* Exclusions — Rich Text */}
      <div>
        <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-red-600"><X className="h-3 w-3" /> What&apos;s Excluded</label>
        <RichTextEditor
          ref={registerRichTextEditor ? (el) => { if (el) registerRichTextEditor("exclusions", el); } : undefined}
          content={data.exclusions}
          onChange={(html) => set("exclusions", html)}
          placeholder="Describe what's excluded. You can use formatting, lists, images, etc."
          hideStatusBar
        />
      </div>
    </div>
  );
}

// ─── Pricing Tiers ──────────────────────────────────────────────────
function PricingSection({ data, onChange }: { data: PricingData; onChange: (d: PricingData) => void }) {
  const set = (field: string, val: any) => onChange({ ...data, [field]: val });
  const items = data.items;
  const update = (i: number, field: string, val: any) => onChange({ ...data, items: items.map((item, idx) => idx === i ? { ...item, [field]: val } : item) });
  const remove = (i: number) => onChange({ ...data, items: items.filter((_, idx) => idx !== i) });
  const add = () => onChange({ ...data, items: [...items, { groupSize: "", pricePerPerson: 0 }] });

  return (
    <div className="space-y-3">
      <Field label="Section Heading">
        <input value={data.heading || ""} onChange={(e) => set("heading", e.target.value)} placeholder="e.g. Pricing" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
      </Field>
      <Field label="Section Description (optional)">
        <textarea rows={2} value={data.description || ""} onChange={(e) => set("description", e.target.value)} placeholder="A brief description about the pricing..." className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
      </Field>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-2 rounded-lg border border-slate-200 bg-slate-50/50 p-2.5">
            <input value={item.groupSize} onChange={(e) => update(i, "groupSize", e.target.value)} placeholder="e.g. 1-2 people" className="flex-1 rounded border border-slate-200 px-2 py-1.5 text-sm" />
            <div className="relative w-32"><span className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
              <input type="number" value={item.pricePerPerson} onChange={(e) => update(i, "pricePerPerson", parseFloat(e.target.value) || 0)} className="w-full rounded border border-slate-200 py-1.5 pl-6 pr-2 text-sm" /></div>
            <button type="button" onClick={() => remove(i)} className="rounded p-1 text-slate-400 hover:bg-red-50 hover:text-red-500"><Trash2 className="h-3.5 w-3.5" /></button>
          </div>
        ))}
        <AddBtn onClick={add} label="Add pricing tier" />
      </div>
    </div>
  );
}

// ─── Add-ons ───────────────────────────────────────────────────────
function AddonSection({ data, onChange }: { data: AddonData; onChange: (d: AddonData) => void }) {
  const set = (field: string, val: any) => onChange({ ...data, [field]: val });
  const items = data.items || [];
  const update = (i: number, field: string, val: any) => onChange({ ...data, items: items.map((item, idx) => idx === i ? { ...item, [field]: val } : item) });
  const remove = (i: number) => onChange({ ...data, items: items.filter((_, idx) => idx !== i) });
  const add = () => onChange({ ...data, items: [...items, { title: "", description: "", unit: "", pricePerUnit: 0 }] });

  return (
    <div className="space-y-3">
      <Field label="Section Heading">
        <input value={data.heading || ""} onChange={(e) => set("heading", e.target.value)} placeholder="e.g. Add-ons" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
      </Field>
      <Field label="Section Description (optional)">
        <textarea rows={2} value={data.description || ""} onChange={(e) => set("description", e.target.value)} placeholder="A brief description about the add-ons..." className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
      </Field>
      {items.length === 0 && <p className="text-xs text-slate-400 text-center py-2">No add-ons yet.</p>}
      {items.map((item, i) => (
        <div key={i} className="rounded-lg border border-slate-200 bg-slate-50/50 p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-medium text-slate-400">Add-on {i + 1}</span>
            <button type="button" onClick={() => remove(i)} className="rounded p-1 text-slate-400 hover:bg-red-50 hover:text-red-500"><Trash2 className="h-3.5 w-3.5" /></button>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <input value={item.title} onChange={(e) => update(i, "title", e.target.value)} placeholder="Title (e.g. Extra Hotel Night)" className="rounded border border-slate-200 px-2 py-1.5 text-sm" />
            <div className="flex gap-2">
              <input value={item.unit} onChange={(e) => update(i, "unit", e.target.value)} placeholder="e.g. person, room, kg, night" className="rounded border border-slate-200 px-2 py-1.5 text-sm" />
              <div className="relative flex-1">
                <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
                <input type="number" value={item.pricePerUnit} onChange={(e) => update(i, "pricePerUnit", parseFloat(e.target.value) || 0)} className="w-full rounded border border-slate-200 py-1.5 pl-5 pr-2 text-sm" placeholder="Price" />
              </div>
            </div>
            <textarea rows={2} value={item.description} onChange={(e) => update(i, "description", e.target.value)} placeholder="Description (e.g. Extra night at teahouse with meals)" className="col-span-2 rounded border border-slate-200 px-2 py-1.5 text-sm" />
          </div>
        </div>
      ))}
      <AddBtn onClick={add} label="Add add-on" />
    </div>
  );
}

// ─── Gallery ───────────────────────────────────────────────────────
function GallerySection({ data, onChange, registerImageUpload }: { data: GalleryData; onChange: (d: GalleryData) => void; registerImageUpload?: (key: string, h: ImageUploadHandle) => void }) {
  const set = (field: string, val: any) => onChange({ ...data, [field]: val });
  const items = data.items || [];
  const update = (i: number, field: string, val: any) => onChange({ ...data, items: items.map((item, idx) => idx === i ? { ...item, [field]: val } : item) });
  const remove = (i: number) => onChange({ ...data, items: items.filter((_, idx) => idx !== i) });
  const add = () => onChange({ ...data, items: [...items, { imageId: "", alt: "", caption: "" }] });

  return (
    <div className="space-y-3">
      <Field label="Section Heading">
        <input value={data.heading || ""} onChange={(e) => set("heading", e.target.value)} placeholder="e.g. Gallery" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
      </Field>
      <Field label="Section Description (optional)">
        <textarea rows={2} value={data.description || ""} onChange={(e) => set("description", e.target.value)} placeholder="A brief description about the gallery..." className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
      </Field>
      {items.length === 0 && <p className="text-xs text-slate-400 text-center py-2">No gallery images yet.</p>}
      {items.map((item, i) => (
        <div key={i} className="rounded-lg border border-slate-200 bg-slate-50/50 p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-medium text-slate-400">Image {i + 1}</span>
            <button type="button" onClick={() => remove(i)} className="rounded p-1 text-slate-400 hover:bg-red-50 hover:text-red-500"><Trash2 className="h-3.5 w-3.5" /></button>
          </div>
          <div className="space-y-2">
            <ImageUpload ref={registerImageUpload ? (el) => { if (el) registerImageUpload(`gallery.${i}`, el); } : undefined} value={item.imageId} onChange={(id) => update(i, "imageId", id)} label="Photo" />
            <input value={item.alt} onChange={(e) => update(i, "alt", e.target.value)} placeholder="Alt text (descriptive, for accessibility & SEO)" className="w-full rounded border border-slate-200 px-2 py-1.5 text-sm" />
            <input value={item.caption} onChange={(e) => update(i, "caption", e.target.value)} placeholder="Caption (optional, shown below image)" className="w-full rounded border border-slate-200 px-2 py-1.5 text-sm" />
          </div>
        </div>
      ))}
      <AddBtn onClick={add} label="Add image" />
    </div>
  );
}

// ─── FAQs ───────────────────────────────────────────────────────────
function FaqsSection({ data, onChange }: { data: FaqsData; onChange: (d: FaqsData) => void }) {
  const set = (field: string, val: any) => onChange({ ...data, [field]: val });
  const items = data.items;
  const update = (i: number, field: string, val: string) => onChange({ ...data, items: items.map((item, idx) => idx === i ? { ...item, [field]: val } : item) });
  const remove = (i: number) => onChange({ ...data, items: items.filter((_, idx) => idx !== i) });
  const add = () => onChange({ ...data, items: [...items, { question: "", answer: "" }] });

  return (
    <div className="space-y-3">
      <Field label="Section Heading">
        <input value={data.heading || ""} onChange={(e) => set("heading", e.target.value)} placeholder="e.g. Frequently Asked Questions" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
      </Field>
      <Field label="Section Description (optional)">
        <textarea rows={2} value={data.description || ""} onChange={(e) => set("description", e.target.value)} placeholder="A brief description about the FAQs..." className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
      </Field>
      {items.map((item, i) => (
        <div key={i} className="rounded-lg border border-slate-200 bg-slate-50/50 p-3">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-medium text-slate-400">Q{i + 1}</span>
            <button type="button" onClick={() => remove(i)} className="rounded p-1 text-slate-400 hover:bg-red-50 hover:text-red-500"><Trash2 className="h-3 w-3" /></button>
          </div>
          <div className="space-y-1.5">
            <input value={item.question} onChange={(e) => update(i, "question", e.target.value)} placeholder="Question" className="w-full rounded border border-slate-200 px-2 py-1.5 text-sm" />
            <textarea rows={2} value={item.answer} onChange={(e) => update(i, "answer", e.target.value)} placeholder="Answer" className="w-full rounded border border-slate-200 px-2 py-1.5 text-sm" />
          </div>
        </div>
      ))}
      <AddBtn onClick={add} label="Add FAQ" />
    </div>
  );
}

// ─── Map ────────────────────────────────────────────────────────────
function MapSection({ data, onChange, registerImageUpload }: { data: MapData; onChange: (d: MapData) => void; registerImageUpload?: (key: string, h: ImageUploadHandle) => void }) {
  const set = (field: keyof MapData, value: any) => onChange({ ...data, [field]: value });
  const setMeta = (field: string, val: any) => onChange({ ...data, [field]: val });
  const hasRouteFile = !!data.geoJsonUrl || !!data.geoJsonData;

  return (
    <div className="space-y-3">
      <Field label="Section Heading">
        <input value={data.heading || ""} onChange={(e) => setMeta("heading", e.target.value)} placeholder="e.g. Route Map" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
      </Field>
      <Field label="Section Description (optional)">
        <textarea rows={2} value={data.description || ""} onChange={(e) => setMeta("description", e.target.value)} placeholder="A brief description about the map..." className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
      </Field>
      <MapPreview centerLat={data.centerLat} centerLng={data.centerLng} zoom={data.zoom} pitch={data.pitch} geoJsonData={data.geoJsonData} />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Field label="Center Lat" slim><input type="number" step="any" value={data.centerLat} onChange={(e) => set("centerLat", parseFloat(e.target.value) || 0)} className="w-full rounded border border-slate-200 px-2 py-1.5 text-sm" /></Field>
        <Field label="Center Lng" slim><input type="number" step="any" value={data.centerLng} onChange={(e) => set("centerLng", parseFloat(e.target.value) || 0)} className="w-full rounded border border-slate-200 px-2 py-1.5 text-sm" /></Field>
        <Field label="Zoom" slim><input type="number" step="0.1" value={data.zoom} onChange={(e) => set("zoom", parseFloat(e.target.value) || 5)} className="w-full rounded border border-slate-200 px-2 py-1.5 text-sm" /></Field>
        <Field label="Pitch" slim><input type="number" step="1" value={data.pitch} onChange={(e) => set("pitch", parseFloat(e.target.value) || 45)} className="w-full rounded border border-slate-200 px-2 py-1.5 text-sm" /></Field>
      </div>
      {/* GeoJSON route upload */}
      <div className="rounded-lg border border-slate-200 bg-slate-50/50 p-3">
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-medium text-slate-500">Actual Trek Route (GeoJSON)</label>
          <span className="text-[10px] text-slate-400">If empty, the map image below is shown instead</span>
        </div>
        <p className="text-xs text-amber-600 mb-1">⚠️ If you see &quot;not valid GeoJSON&quot; on the map, click Remove and re-upload your file.</p>
        <GeoJsonUpload
          value={data.geoJsonUrl || ""}
          hasData={!!data.geoJsonUrl || !!data.geoJsonData}
          onChange={(url) => {
            set("geoJsonUrl", url);
            if (!url) set("geoJsonData", null);
          }}
          onContentChange={(content) => set("geoJsonData", content)}
        />
      </div>
      <ImageUpload
        ref={registerImageUpload ? (el) => { if (el) registerImageUpload("staticMapImage", el); } : undefined}
        value={data.staticMapImage || ""}
        onChange={(id) => set("staticMapImage", id)}
        label="Map Image (used when no route file is uploaded, and for SEO/no-JavaScript)"
      />
      {!hasRouteFile && data.staticMapImage ? (
        <p className="rounded-lg border border-teal-200 bg-teal-50 px-3 py-2 text-xs text-teal-700">
          🖼️ No route file uploaded — visitors will see this image instead of the interactive map.
        </p>
      ) : null}
      {!hasRouteFile && !data.staticMapImage ? (
        <p className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-700">
          ⚠️ No route file and no map image. Upload either one, or the map will render without a route.
        </p>
      ) : null}

      <div className="rounded-lg border border-slate-200 bg-slate-50/50 p-3">
        <p className="text-xs text-slate-500">
          <span className="font-semibold">Waypoints:</span> Set coordinates (latitude/longitude) per day in the <strong>Itinerary</strong> section. Days with coordinates will appear as waypoints on the map.
        </p>
      </div>
    </div>
  );
}

// ─── SEO ────────────────────────────────────────────────────────────
function SeoSection({ data, onChange, context }: { data: SeoData; onChange: (d: SeoData) => void; context?: SeoContext }) {
  const set = (field: keyof SeoData, value: any) => onChange({ ...data, [field]: value });

  // The first keyword doubles as the focus keyword the trek should rank for.
  const focusKeyword = (data.keywords || "").split(",")[0]?.trim() || "";
  const setFocusKeyword = (value: string) => {
    const rest = (data.keywords || "").split(",").slice(1).map((k) => k.trim()).filter(Boolean);
    set("keywords", [value.trim(), ...rest].filter(Boolean).join(", "));
  };

  return (
    <div className="space-y-3">
      <Field label="Meta Title">
        <input value={data.metaTitle} onChange={(e) => set("metaTitle", e.target.value)} placeholder={context?.title || "Falls back to the trek title"} className="w-full rounded border border-slate-200 px-2 py-1.5 text-sm" />
        <p className="mt-1 text-[11px] text-slate-400">{(data.metaTitle || "").length}/60 characters</p>
      </Field>
      <Field label="Meta Description">
        <textarea rows={3} value={data.metaDescription} onChange={(e) => set("metaDescription", e.target.value)} className="w-full rounded border border-slate-200 px-2 py-1.5 text-sm" />
        <p className="mt-1 text-[11px] text-slate-400">{(data.metaDescription || "").length}/160 characters</p>
      </Field>
      <Field label="Keywords">
        <input value={data.keywords} onChange={(e) => set("keywords", e.target.value)} placeholder="trekking, nepal, everest, himalaya" className="w-full rounded border border-slate-200 px-2 py-1.5 text-sm" />
        <p className="mt-1 text-[11px] text-slate-400">The first keyword is used as the focus keyword.</p>
      </Field>
      <Field label="Tags"><input value={data.tags || ""} onChange={(e) => set("tags", e.target.value)} placeholder="adventure, nepal, himalayas" className="w-full rounded border border-slate-200 px-2 py-1.5 text-sm" /></Field>
      <SeoAnalyzer
        html={context?.html || ""}
        title={context?.title || ""}
        slug={context?.slug || ""}
        metaTitle={data.metaTitle}
        metaDescription={data.metaDescription}
        focusKeyword={focusKeyword}
        onFocusKeywordChange={setFocusKeyword}
        urlPrefix={context?.urlPrefix || "/"}
        minWords={800}
        focusKeywordHint="Scores every visible section of this trek page together."
      />
    </div>
  );
}

// ─── Custom Section ─────────────────────────────────────────────────
function CustomSection({ data, onChange, registerRichTextEditor }: { data: CustomData; onChange: (d: CustomData) => void; registerRichTextEditor?: (key: string, h: RichTextEditorHandle) => void }) {
  const set = (field: string, val: any) => onChange({ ...data, [field]: val });
  return (
    <div className="space-y-3">
      <Field label="Heading"><input value={data.heading} onChange={(e) => set("heading", e.target.value)} placeholder="Section heading" className="w-full rounded border border-slate-200 px-2 py-1.5 text-sm" /></Field>
      <Field label="Content"><RichTextEditor ref={registerRichTextEditor ? (el) => { if (el) registerRichTextEditor("content", el); } : undefined} content={data.content} onChange={(html) => set("content", html)} placeholder="Write your section content..." /></Field>
    </div>
  );
}

// ─── GeoJSON Upload ──────────────────────────────────────────────────
function GeoJsonUpload({ value, onChange, onContentChange, hasData }: {
  value: string;
  onChange: (url: string) => void;
  onContentChange: (content: string | null) => void;
  hasData?: boolean;
}) {
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const publicIdRef = useRef<string | null>(null);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const fd = new FormData();
    fd.set("file", file);
    fd.set("folder", "mardi-treks/routes");
    try {
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (data.publicId) publicIdRef.current = data.publicId;
      if (data.url) onChange(data.url);
      if (data.content) onContentChange(data.content);
    } catch {}
    setUploading(false);
  }

  async function handleRemove() {
    const pid = publicIdRef.current;
    setDeleting(true);
    try {
      // Use the stored publicId if available (most reliable), otherwise fall back to URL parsing
      if (pid) {
        const res = await fetch(`/api/upload?publicId=${encodeURIComponent(pid)}`, { method: "DELETE" });
        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          console.error("Failed to delete from Cloudinary:", res.status, err);
        }
      } else if (value) {
        const res = await fetch(`/api/upload?url=${encodeURIComponent(value)}`, { method: "DELETE" });
        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          console.error("Failed to delete from Cloudinary:", res.status, err);
        }
      }
    } catch (e) {
      console.error("Network error deleting from Cloudinary:", e);
    }
    publicIdRef.current = null;
    setDeleting(false);
    // Clear form data
    onChange("");
    onContentChange(null);
  }

  return (
    <div className="space-y-2">
      {hasData ? (
        <div className="flex items-center gap-2 rounded-lg bg-teal-50 border border-teal-200 px-3 py-2">
          <span className="text-xs text-teal-700 truncate flex-1">✅ Route loaded</span>
          <button type="button" onClick={handleRemove} disabled={deleting}
            className="text-[11px] text-red-500 hover:text-red-700 font-medium">
            {deleting ? "Deleting..." : "Remove"}
          </button>
        </div>
      ) : (
        <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed border-slate-300 bg-white px-3 py-3 text-xs text-slate-500 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-600">
          <Upload className="h-4 w-4" />
          {uploading ? "Uploading..." : "Upload .gpx, .kml, .geojson or .json file"}
          <input type="file" accept=".gpx,.kml,.geojson,.json" className="hidden" onChange={handleFile} disabled={uploading} />
        </label>
      )}
      <div className="flex items-center gap-2">
        <span className="text-[10px] text-slate-400">Or paste URL:</span>
        <input type="text" value={value} onChange={(e) => onChange(e.target.value)}
          placeholder="https://example.com/route.geojson"
          className="flex-1 rounded border border-slate-200 px-2 py-1 text-xs font-mono" />
      </div>
    </div>
  );
}

// ─── Similar Treks ───────────────────────────────────────────────────
function SimilarTreksSection({ data, onChange }: { data: SimilarTreksData; onChange: (d: SimilarTreksData) => void }) {
  const [allTreks, setAllTreks] = useState<{ id: string; title: string }[]>([]);
  const [loading, setLoading] = useState(true);

  const set = (field: string, val: any) => onChange({ ...data, [field]: val });

  // Fetch all published treks for the dropdown selector
  useEffect(() => {
    async function fetchTreks() {
      try {
        const res = await fetch("/api/trek/list-all");
        const json = await res.json();
        if (Array.isArray(json)) {
          setAllTreks(json);
        }
      } catch (e) {
        console.error("Failed to fetch treks for similar treks selector:", e);
      }
      setLoading(false);
    }
    fetchTreks();
  }, []);

  const toggleTrek = (trekId: string) => {
    const ids = data.trekIds || [];
    const next = ids.includes(trekId)
      ? ids.filter((id) => id !== trekId)
      : [...ids, trekId];
    onChange({ ...data, trekIds: next });
  };

  return (
    <div className="space-y-3">
      <Field label="Section Heading">
        <input value={data.heading || ""} onChange={(e) => set("heading", e.target.value)} placeholder="e.g. Similar Treks" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
      </Field>
      <Field label="Section Description (optional)">
        <textarea rows={2} value={data.description || ""} onChange={(e) => set("description", e.target.value)} placeholder="e.g. You might also like these treks" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
      </Field>
      <div className="rounded-lg border border-slate-200 bg-slate-50/50 p-3">
        <p className="mb-2 text-xs font-semibold text-slate-500">Select similar treks to display:</p>
        {loading ? (
          <p className="text-xs text-slate-400">Loading treks...</p>
        ) : allTreks.length === 0 ? (
          <p className="text-xs text-slate-400">No treks available. Create some treks first.</p>
        ) : (
          <div className="max-h-60 space-y-1 overflow-y-auto">
            {allTreks.map((trek) => (
              <label key={trek.id} className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-slate-100">
                <input
                  type="checkbox"
                  checked={(data.trekIds || []).includes(trek.id)}
                  onChange={() => toggleTrek(trek.id)}
                  className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                />
                <span className="text-slate-700">{trek.title}</span>
              </label>
            ))}
          </div>
        )}
        {(data.trekIds || []).length > 0 && (
          <p className="mt-2 text-xs text-teal-600">{data.trekIds.length} trek(s) selected</p>
        )}
      </div>
    </div>
  );
}

// ─── Fix Departure ─────────────────────────────────────────────────
const WEEKDAY_OPTIONS = [
  { value: "sunday", label: "Sunday" },
  { value: "monday", label: "Monday" },
  { value: "tuesday", label: "Tuesday" },
  { value: "wednesday", label: "Wednesday" },
  { value: "thursday", label: "Thursday" },
  { value: "friday", label: "Friday" },
  { value: "saturday", label: "Saturday" },
];

function formatDateLabel(iso: string): string {
  try {
    return new Date(iso + "T00:00:00").toLocaleDateString("en-US", { weekday: "short", year: "numeric", month: "short", day: "numeric" });
  } catch {
    return iso;
  }
}

function FixedDeparturesSection({ data, onChange }: { data: FixedDeparturesData; onChange: (d: FixedDeparturesData) => void }) {
  const set = (field: string, val: any) => onChange({ ...data, [field]: val });
  const weekdays = data.weekdays || [];
  const customDates = data.customDates || [];
  const [newDate, setNewDate] = useState("");

  const toggleWeekday = (value: string) => {
    const next = weekdays.includes(value)
      ? weekdays.filter((d) => d !== value)
      : [...weekdays, value];
    set("weekdays", next);
  };

  const addCustomDate = () => {
    if (!newDate) return;
    if (customDates.includes(newDate)) return;
    set("customDates", [...customDates, newDate]);
    setNewDate("");
  };

  const removeCustomDate = (date: string) => {
    set("customDates", customDates.filter((d) => d !== date));
  };

  return (
    <div className="space-y-4">
      <Field label="Section Heading">
        <input value={data.heading || ""} onChange={(e) => set("heading", e.target.value)} placeholder="e.g. Fix Departure" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
      </Field>
      <Field label="Section Description (optional)">
        <textarea rows={2} value={data.description || ""} onChange={(e) => set("description", e.target.value)} placeholder="e.g. This trek runs every week on the selected days..." className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
      </Field>

      <div className="rounded-lg border border-slate-200 bg-slate-50/50 p-4">
        <p className="mb-1 text-xs font-semibold text-slate-500">Recurring weekly departure days</p>
        <p className="mb-3 text-xs text-slate-400">This trip runs every week on the selected day(s).</p>
        <div className="flex flex-wrap gap-2">
          {WEEKDAY_OPTIONS.map((day) => {
            const active = weekdays.includes(day.value);
            return (
              <button
                key={day.value}
                type="button"
                onClick={() => toggleWeekday(day.value)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  active
                    ? "border-teal-500 bg-teal-500 text-white shadow-sm"
                    : "border-slate-300 bg-white text-slate-600 hover:border-teal-300 hover:text-teal-600"
                }`}
              >
                {day.label}
              </button>
            );
          })}
        </div>
        {weekdays.length === 0 && customDates.length === 0 && (
          <p className="mt-3 text-[11px] text-amber-600">Select at least one day or add a custom date to enable Fix Departure.</p>
        )}
      </div>

      <div className="rounded-lg border border-slate-200 bg-slate-50/50 p-4">
        <p className="mb-1 text-xs font-semibold text-slate-500">Custom start dates</p>
        <p className="mb-3 text-xs text-slate-400">Add specific one-off start dates from the calendar. Multiple dates are allowed.</p>
        <div className="flex flex-wrap items-center gap-2">
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm"
          />
          <button
            type="button"
            onClick={addCustomDate}
            disabled={!newDate}
            className="rounded-lg bg-teal-600 px-3.5 py-1.5 text-xs font-semibold text-white transition-all hover:bg-teal-700 disabled:opacity-40"
          >
            + Add date
          </button>
        </div>
        {customDates.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {customDates.map((date) => (
              <span key={date} className="inline-flex items-center gap-1.5 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                {formatDateLabel(date)}
                <button type="button" onClick={() => removeCustomDate(date)} className="text-teal-500 hover:text-red-500">
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
          </div>
        )}
        {customDates.length === 0 && (
          <p className="mt-3 text-[11px] text-slate-400">No custom dates yet.</p>
        )}
      </div>
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════════
// MAIN RENDERER
// ═════════════════════════════════════════════════════════════════════
export function SectionRenderer(props: Props) {
  const { section, onChange, registerImageUpload, registerRichTextEditor } = props;
  const upd = (data: any) => onChange(section.id, data);

  // Wrap registration callbacks to prefix keys with section.id
  const registerKeyed = registerImageUpload
    ? (fieldKey: string, handle: ImageUploadHandle) => registerImageUpload(`${section.id}.${fieldKey}`, handle)
    : undefined;
  const registerEditorKeyed = registerRichTextEditor
    ? (fieldKey: string, handle: RichTextEditorHandle) => registerRichTextEditor(`${section.id}.${fieldKey}`, handle)
    : undefined;

  const content = (() => {
    switch (section.type) {
      case "details":    return <DetailsSection data={section.data} onChange={upd} categories={props.categories} registerImageUpload={registerKeyed} />;
      case "overview":   return <OverviewSection data={section.data} onChange={upd} registerRichTextEditor={registerEditorKeyed} />;
      case "itinerary":  return <ItinerarySection data={section.data} onChange={upd} registerRichTextEditor={registerEditorKeyed} />;
      case "inEx":       return <InExSection data={section.data} onChange={upd} registerRichTextEditor={registerEditorKeyed} />;
      case "pricing":    return <PricingSection data={section.data} onChange={upd} />;
      case "addons":     return <AddonSection data={section.data} onChange={upd} />;
      case "gallery":    return <GallerySection data={section.data} onChange={upd} registerImageUpload={registerKeyed} />;
      case "faqs":       return <FaqsSection data={section.data} onChange={upd} />;
      case "map":        return <MapSection data={section.data} onChange={upd} registerImageUpload={registerKeyed} />;
      case "seo":        return <SeoSection data={section.data} onChange={upd} context={props.seoContext} />;
      case "similarTreks": return <SimilarTreksSection data={section.data} onChange={upd} />;
      case "fixedDepartures": return <FixedDeparturesSection data={section.data} onChange={upd} />;
      case "custom":     return <CustomSection data={section.data} onChange={upd} registerRichTextEditor={registerEditorKeyed} />;
      default:           return <p className="text-xs text-slate-400">Unknown section type</p>;
    }
  })();

  return <SectionShell {...props}>{content}</SectionShell>;
}
