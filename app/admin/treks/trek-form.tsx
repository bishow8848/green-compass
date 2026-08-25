"use client";

import { useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { createTrek, updateTrek, deleteTrek } from "./actions";
import { TrekSection } from "@/components/admin/trek-sections/types";
import { createDefaultSection } from "@/components/admin/trek-sections/types";
import { SectionRenderer } from "@/components/admin/trek-sections/SectionRenderer";
import type { ImageUploadHandle } from "@/components/admin/trek-sections/ImageUpload";
import type { RichTextEditorHandle } from "@/components/admin/RichTextEditor";
import { Plus, Save, Loader2, ArrowUp, ArrowDown } from "lucide-react";

// ─── Predefined section types the user can add ──────────────────────
const ADDABLE_SECTION_TYPES: { type: TrekSection["type"]; label: string; icon: string }[] = [
  { type: "overview", label: "Overview", icon: "📝" },
  { type: "itinerary", label: "Itinerary", icon: "🗺️" },
  { type: "inEx", label: "Inclusions & Exclusions", icon: "✅" },
  { type: "pricing", label: "Pricing Tiers", icon: "💰" },
  { type: "fixedDepartures", label: "Fix Departure", icon: "📅" },
  { type: "addons", label: "Add-ons", icon: "➕" },
  { type: "faqs", label: "FAQs", icon: "❓" },
  { type: "gallery", label: "Gallery", icon: "🖼️" },
  { type: "map", label: "Route Map (3D)", icon: "🗺️" },
  { type: "custom", label: "Custom Section", icon: "📄" },
];

// "Details" and "SEO" are mandatory sections — they must ALWAYS render at the
// very top of the Page Builder (Details first, SEO second), no matter what a
// previously-saved sectionOrder says. Pinning them here guarantees they never
// end up at the bottom when restoring an older or misordered save.
function pinMandatorySections(ordered: TrekSection[]): TrekSection[] {
  const details = ordered.filter((s) => s.type === "details");
  const seo = ordered.filter((s) => s.type === "seo");
  const rest = ordered.filter((s) => s.type !== "details" && s.type !== "seo");
  return [...details, ...seo, ...rest];
}

export function TrekForm({ mode, trek, categories }: { mode: "create" | "edit"; trek?: any; categories?: any[] }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [showAddMenu, setShowAddMenu] = useState(false);

  // ── Image upload refs (deferred Cloudinary upload on save) ────────
  // Cleared before each render to avoid accumulating duplicates from React 19 callback refs
  const imageUploadRefs = useRef(new Map<string, ImageUploadHandle>());
  const registerImageUpload = useCallback((key: string, handle: ImageUploadHandle) => {
    imageUploadRefs.current.set(key, handle);
  }, []);

  // ── RichTextEditor refs (deferred image upload) ───────────────────
  // Cleared before each render to avoid accumulating duplicates from React 19 callback refs
  const editorRefs = useRef(new Map<string, RichTextEditorHandle>());
  const registerRichTextEditor = useCallback((key: string, handle: RichTextEditorHandle) => {
    editorRefs.current.set(key, handle);
  }, []);

  // ── Sections state ────────────────────────────────────────────────
  const [sections, setSections] = useState<TrekSection[]>(() => {
    // Always include these default sections in order
    const defaults: TrekSection["type"][] = ["details", "seo", "overview", "map"];
    const existing = defaults.map((t) => createDefaultSection(t, trek));

    // Always include similarTreks section at the very end
    existing.push(createDefaultSection("similarTreks", trek));

    // Restore non-default sections from trek data if editing
    if (trek) {
      const extras: TrekSection["type"][] = [
        "itinerary", "inEx",
        "pricing", "addons", "faqs", "gallery", "fixedDepartures",
      ];
      for (const t of extras) {
        const def = createDefaultSection(t, trek);
        const hasData = (arr: any[]) => arr.length > 0;
        let shouldInclude = false;
        if (t === "itinerary") shouldInclude = hasData(def.data.items);
        else if (t === "inEx") shouldInclude = def.data.inclusions?.trim()?.length > 0 || def.data.exclusions?.trim()?.length > 0;
        else if (t === "pricing") shouldInclude = hasData(def.data.items);
        else if (t === "addons") shouldInclude = hasData(def.data.items);
        else if (t === "faqs") shouldInclude = hasData(def.data.items);
        else if (t === "gallery") shouldInclude = hasData(def.data.items);
        else if (t === "fixedDepartures") shouldInclude = hasData(def.data.weekdays) || hasData(def.data.customDates);
        if (shouldInclude) existing.push(def);
      }

      // Restore custom sections (stored as JSON in the trek)
      if ((trek as any).customSections) {
        try {
          const cs = JSON.parse((trek as any).customSections);
          if (Array.isArray(cs)) existing.push(...cs);
        } catch {}
      }

      // Apply saved sectionOrder if it exists
      const orderStr = (trek as any).sectionOrder;
      if (orderStr) {
        try {
          const order = JSON.parse(orderStr) as string[];
          if (Array.isArray(order) && order.length > 0) {
            const ordered: TrekSection[] = [];
            const idMap = new Map(existing.map((s) => [s.id, s]));
            for (const id of order) {
              const s = idMap.get(id);
              if (s) {
                ordered.push(s);
                idMap.delete(id);
              }
            }
            // Append any sections not in the order (e.g. newly added) — but
            // always keep "similarTreks" as the very last section.
            const leftovers = Array.from(idMap.values());
            const similarTreksSec = leftovers.find((s) => s.type === "similarTreks");
            const nonSimilar = leftovers.filter((s) => s.type !== "similarTreks");
            const similarIdx = ordered.findIndex((s) => s.type === "similarTreks");
            if (similarIdx >= 0) {
              ordered.splice(similarIdx, 0, ...nonSimilar);
            } else {
              ordered.push(...nonSimilar);
            }
            if (similarTreksSec && !ordered.some((s) => s.type === "similarTreks")) {
              ordered.push(similarTreksSec);
            }
            return pinMandatorySections(ordered);
          }
        } catch {}
      }
    }

    return existing;
  });

  // ── Section mutations ─────────────────────────────────────────────
  const updateSection = useCallback((id: string, data: any) => {
    setSections((prev) => prev.map((s) => (s.id === id ? { ...s, data } : s)));
  }, []);

  const toggleVisibility = useCallback((id: string) => {
    setSections((prev) => prev.map((s) => (s.id === id ? { ...s, visible: !s.visible } : s)));
  }, []);

  const removeSection = useCallback((id: string) => {
    setSections((prev) => prev.filter((s) => s.id !== id && s.type !== "details" && s.type !== "seo" && s.type !== "similarTreks"));
  }, []);

  const moveUp = useCallback((index: number) => {
    if (index === 0) return;
    setSections((prev) => {
      // Don't move above "details" (#1) or "seo" (#2)
      const above = prev[index - 1];
      if (above?.type === "details" || above?.type === "seo") return prev;
      // Don't move "similarTreks" — it's always the last section
      const current = prev[index];
      if (current?.type === "similarTreks") return prev;
      const next = [...prev];
      [next[index - 1], next[index]] = [next[index], next[index - 1]];
      return next;
    });
  }, []);

  const moveDown = useCallback((index: number) => {
    setSections((prev) => {
      if (index >= prev.length - 1) return prev;
      // Don't move "details", "seo", or "similarTreks" down
      const current = prev[index];
      if (current?.type === "details" || current?.type === "seo" || current?.type === "similarTreks") return prev;
      // Don't move a section into the position after "similarTreks" (it's always last)
      const below = prev[index + 1];
      if (below?.type === "similarTreks") return prev;
      const next = [...prev];
      [next[index], next[index + 1]] = [next[index + 1], next[index]];
      return next;
    });
  }, []);

  const addSection = useCallback((type: TrekSection["type"]) => {
    // Guard: never add a duplicate of a non-custom section that already exists.
    // (Custom sections may be added multiple times; the Add Section menu already
    // hides already-present single-instance sections like "fixedDepartures", so
    // this is only a safety net.)
    if (type !== "custom" && sections.some((s) => s.type === type)) {
      setShowAddMenu(false);
      return;
    }
    const section = createDefaultSection(type);
    // Insert after SEO (which should be at position 2)
    setSections((prev) => {
      const seoIdx = prev.findIndex((s) => s.type === "seo");
      const idx = seoIdx >= 0 ? seoIdx + 1 : prev.length;
      return [...prev.slice(0, idx), section, ...prev.slice(idx)];
    });
    setShowAddMenu(false);
  }, [sections]);

  // ── Submit ─────────────────────────────────────────────────────────
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    setError(null);

    // Upload any pending images to Cloudinary and capture returned IDs
    const imageResults = await Promise.allSettled(
      Array.from(imageUploadRefs.current, async ([key, handle]) => {
        const id = await handle.save();
        return { key, id, isEditor: false as const };
      })
    );
    const editorResults = await Promise.allSettled(
      Array.from(editorRefs.current, async ([key, handle]) => {
        const html = await handle.processPendingImages();
        return { key, id: html, isEditor: true as const };
      })
    );
    const uploadedMap: Record<string, string> = {};
    const editorResultMap: Record<string, string> = {};
    for (const result of [...imageResults, ...editorResults]) {
      if (result.status === "fulfilled") {
        const r = result.value;
        if (r.isEditor) {
          if (r.id) editorResultMap[r.key] = r.id;
        } else if (r.id) {
          uploadedMap[r.key] = r.id;
        }
      } else {
        console.error("Upload failed:", result.reason);
      }
    }

    // Helper: get editor-processed HTML for a section field (overview content, custom content)
    function editorContent(sectionType: string, field: string): string | undefined {
      const section = sections.find((s) => s.type === sectionType);
      if (!section) return undefined;
      return editorResultMap[`${section.id}.${field}`];
    }

    // Helper: get uploaded image ID for a section field, falling back to section data
    function img(sectionType: string, field: string): string {
      const section = sections.find((s) => s.type === sectionType);
      if (!section) return "";
      const key = `${section.id}.${field}`;
      return uploadedMap[key] || (section.data as any)?.[field] || "";
    }

    // Helper: get gallery items with uploaded image IDs applied
    function galleryItems(sectionType: string): any[] {
      const section = sections.find((s) => s.type === sectionType);
      if (!section) return [];
      const items = (section.data as any)?.items || [];
      return items.map((item: any, i: number) => ({
        ...item,
        imageId: uploadedMap[`${section.id}.gallery.${i}`] || item.imageId || "",
      }));
    }

    // Extract data from sections
    const details = sections.find((s) => s.type === "details")?.data || {};
    const overview = sections.find((s) => s.type === "overview")?.data || {};
    const itinerary = sections.find((s) => s.type === "itinerary")?.data || { items: [] };
    const inEx = sections.find((s) => s.type === "inEx")?.data || { items: [] };
    const pricing = sections.find((s) => s.type === "pricing")?.data || { items: [] };
    const addons = sections.find((s) => s.type === "addons")?.data || { items: [] };
    const faqs = sections.find((s) => s.type === "faqs")?.data || { items: [] };
    const rawGallery = sections.find((s) => s.type === "gallery")?.data || { items: [] };
    const gallery = { ...rawGallery, items: galleryItems("gallery") };
    const mapData = sections.find((s) => s.type === "map")?.data || {};
    const seo = sections.find((s) => s.type === "seo")?.data || {};
    const fixedDepartures = sections.find((s) => s.type === "fixedDepartures")?.data || { weekdays: [], customDates: [] };

    // Custom sections
    const customSections = sections.filter((s) => s.type === "custom");

    // ── Auto-calculate derived values ──────────────────────────────
    // Price: lowest pricePerPerson from pricing tiers
    const priceTiers = pricing.items || [];
    const minPrice = priceTiers.length > 0
      ? Math.min(...priceTiers.map((t: any) => t.pricePerPerson || 0))
      : 0;

    // Duration: number of itinerary days
    const duration = itinerary.items.length > 0 ? itinerary.items.length : 0;

    // Max altitude: highest elevation parsed from itinerary items
    let maxAltitude = overview.maxAltitude || 0;
    if (!overview.maxAltitude) {
      for (const day of itinerary.items) {
        if (day.elevation) {
          const parsed = parseFloat(day.elevation.replace(/[,m\s]/g, ""));
          if (!isNaN(parsed) && parsed > maxAltitude) maxAltitude = parsed;
        }
      }
    }

    const fd = new FormData();
    fd.set("title", details.title || "");
    fd.set("slug", details.slug || "");
    fd.set("categoryId", details.categoryId || "");
    fd.set("heroImage", img("details", "heroImage"));
    fd.set("price", String(minPrice));
    fd.set("duration", String(duration));
    fd.set("difficulty", details.difficulty || "moderate");
    fd.set("region", details.region || "");
    fd.set("regionId", details.regionId || "");
    fd.set("status", details.status || "draft");
    fd.set("bestTime", overview.bestTime || "");
    fd.set("maxAltitude", String(maxAltitude));
    fd.set("overview", editorContent("overview", "content") || overview.content || "");
    // Itinerary — override each day's description with editor-processed HTML
    const patchedItinerary = itinerary.items.map((item: any, i: number) => {
      const overviewSection = sections.find((s) => s.type === "overview");
      const section = sections.find((s) => s.type === "itinerary");
      const key = section ? `${section.id}.itinerary.${i}` : "";
      return {
        ...item,
        description: (key && editorResultMap[key]) || item.description || "",
      };
    });
    fd.set("itinerary", JSON.stringify(patchedItinerary));
    // Inclusions & Exclusions
    const inExSection = sections.find((s) => s.type === "inEx");
    const incHtml = inExSection ? (editorResultMap[`${inExSection.id}.inclusions`] || inEx.inclusions || "") : "";
    const excHtml = inExSection ? (editorResultMap[`${inExSection.id}.exclusions`] || inEx.exclusions || "") : "";
    fd.set("inclusions", incHtml);
    fd.set("exclusions", excHtml);
    fd.set("pricingTiers", JSON.stringify(pricing.items));
    fd.set("addons", JSON.stringify(addons.items));
    fd.set("faqs", JSON.stringify(faqs.items));
    fd.set("gallery", JSON.stringify(gallery.items));
    fd.set("metaTitle", seo.metaTitle || "");
    fd.set("metaDescription", seo.metaDescription || "");
    fd.set("keywords", seo.keywords || "");
    fd.set("tags", seo.tags || "");
    fd.set("centerLat", String(mapData.centerLat || 28.5));
    fd.set("centerLng", String(mapData.centerLng || 83.9));
    fd.set("zoom", String(mapData.zoom || 7));
    fd.set("pitch", String(mapData.pitch || 45));
    fd.set("geoJsonUrl", mapData.geoJsonUrl || "");
    fd.set("geoJsonData", mapData.geoJsonData || "");
    fd.set("staticMapImage", img("map", "staticMapImage"));
    // Waypoints come from itinerary items that have coordinates set
    const waypointsFromItinerary = (itinerary.items || [])
      .filter((d: any) => d.lat != null && d.lng != null)
      .map((d: any) => ({
        lng: d.lng,
        lat: d.lat,
        label: d.accommodation || `Day ${d.dayNumber}`,
        description: d.placeDescription || "",
        dayNumber: d.dayNumber,
      }));
    fd.set("waypoints", JSON.stringify(waypointsFromItinerary));
    // Similar Treks — selected trek IDs
    const similarTreksSection = sections.find((s) => s.type === "similarTreks");
    const similarTrekIds = similarTreksSection?.data?.trekIds || [];
    fd.set("similarTrekIds", JSON.stringify(similarTrekIds));
    // Fix Departure — recurring weekdays + custom start dates
    fd.set("fixedDepartureDays", JSON.stringify(fixedDepartures.weekdays || []));
    fd.set("customStartDates", JSON.stringify(fixedDepartures.customDates || []));
    // Section metadata (heading/description for each section)
    const sectionData: Record<string, { heading?: string; description?: string }> = {};
    const metaKeys: TrekSection["type"][] = ["itinerary", "inEx", "pricing", "addons", "faqs", "gallery", "map", "fixedDepartures"];
    for (const type of metaKeys) {
      const s = sections.find((sec) => sec.type === type);
      if (s?.data?.heading || s?.data?.description) {
        sectionData[type] = { heading: s.data.heading, description: s.data.description };
      }
    }
    fd.set("sectionData", JSON.stringify(sectionData));

    // Custom sections — override content with editor-processed HTML
    const patchedCustomSections = customSections.map((cs: any) => ({
      ...cs,
      data: {
        ...cs.data,
        content: editorResultMap[`${cs.id}.content`] || cs.data?.content || "",
      },
    }));
    fd.set("customSections", JSON.stringify(patchedCustomSections));

    // Section order — store ALL sections in their current order (including hidden)
    fd.set("sectionOrder", JSON.stringify(sections.map((s) => s.id)));

    try {
      if (mode === "create") {
        await createTrek(fd);
        // createTrek redirects, so markSaved won't be needed
      } else if (trek) {
        await updateTrek(trek.id, fd);
        // updateTrek redirects, so markSaved won't be needed
      }
      // handle.save() already uploaded images to Cloudinary — DB save succeeded
    } catch (err: any) {
      setError(err.message);
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-6">
      {error && (
        <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700">⚠️ {error}</div>
      )}

      {/* Reorderable Sections */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-bold text-slate-900">Page Builder</h2>
            <p className="text-xs text-slate-400">Drag or use arrows to reorder sections. Click 👁️ to hide.</p>
          </div>
          <div className="relative">
            <button type="button" onClick={() => setShowAddMenu(!showAddMenu)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:from-teal-600 hover:to-teal-700 hover:shadow-md">
              <Plus className="h-3.5 w-3.5" /> Add Section
            </button>
            {showAddMenu && (
              <div className="absolute right-0 top-full z-20 mt-1 w-52 rounded-xl border border-slate-200 bg-white py-1 shadow-lg">
                {ADDABLE_SECTION_TYPES
                  // "custom" is always offered (multiple custom sections allowed);
                  // every other section type is hidden once it's already present.
                  .filter((item) => item.type === "custom" || !sections.some((s) => s.type === item.type))
                  .map((item) => (
                  <button key={item.type} type="button" onClick={() => addSection(item.type)}
                    className="flex w-full items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                    <span>{item.icon}</span> {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {sections.map((section, i) => (
          <SectionRenderer
            key={section.id}
            section={section}
            index={i}
            total={sections.length}
            onChange={updateSection}
            onToggleVisibility={toggleVisibility}
            onRemove={removeSection}
            onMoveUp={moveUp}
            onMoveDown={moveDown}
            categories={categories}
            registerImageUpload={registerImageUpload}
            registerRichTextEditor={registerRichTextEditor}
          />
        ))}
      </div>

      {/* Submit */}
      <div className="sticky bottom-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg">
        <div className="flex-1">
          <p className="text-sm font-medium text-slate-900">Ready to publish?</p>
          <p className="text-xs text-slate-400">{sections.filter((s) => s.visible).length} sections visible</p>
        </div>
        <button type="button" onClick={() => router.push("/admin/treks")}
          className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50">
          Cancel
        </button>
        <button type="submit" disabled={saving}
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:from-teal-600 hover:to-teal-700 hover:shadow-md disabled:opacity-50">
          {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
          {saving ? "Saving..." : mode === "create" ? "Create Trek" : "Save Changes"}
        </button>
        {mode === "edit" && trek && (
          <button type="button"
            onClick={async () => { if (confirm("Delete this trek permanently?")) { await deleteTrek(trek.id); } }}
            className="rounded-xl border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50">
            🗑️ Delete
          </button>
        )}
      </div>
    </form>
  );
}
