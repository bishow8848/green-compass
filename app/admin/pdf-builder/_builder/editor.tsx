"use client";

import dynamic from "next/dynamic";
import { useState, type ReactNode } from "react";
import { ArrowDown, ArrowUp, Check, ChevronDown, Eye, EyeOff, ImageOff, Plus, Trash2, X } from "lucide-react";
import { CLOUDINARY_CLOUD_NAME } from "@/lib/cloudinary-url";
import { newCustomSection, newDay, sectionLabel, type PdfPackage, type PdfSection } from "@/lib/pdf-package";
import type { CoverChoice, SimilarTrek } from "./builder";

const RichTextEditor = dynamic(
  () => import("@/components/admin/RichTextEditor").then((m) => ({ default: m.RichTextEditor })),
  { ssr: false, loading: () => <div className="h-40 animate-pulse rounded-lg bg-slate-100" /> }
);

/** Every change is a recipe on the latest draft, so no edit works from a stale copy. */
type Edit = (recipe: (draft: PdfPackage) => PdfPackage) => void;
type ChangeAny = (recipe: (section: PdfSection) => PdfSection) => void;
type Change<K extends PdfSection["kind"]> = (recipe: (section: Extract<PdfSection, { kind: K }>) => Extract<PdfSection, { kind: K }>) => void;

const INPUT = "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-100";
const SMALL_INPUT = "w-full rounded border border-slate-200 bg-white px-2 py-1.5 text-sm focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-100";

interface Props {
  draft: PdfPackage;
  edit: Edit;
  coverChoices: CoverChoice[];
  similarTreks: SimilarTrek[];
}

/** The builder's form: who the PDF is for, its cover, and each section's content, order and visibility. */
export function PdfEditor({ draft, edit, coverChoices, similarTreks }: Props) {
  // One section open at a time keeps the form short, and only the open
  // section's rich text editors mounted. A blank PDF's one section starts
  // open, ready to write in.
  const [openId, setOpenId] = useState<string | null>(() => (draft.sections.length === 1 ? draft.sections[0].id : null));

  const setCustomer = (field: keyof PdfPackage["customer"], value: string) =>
    edit((d) => ({ ...d, customer: { ...d.customer, [field]: value } }));
  const changeSection = (id: string): ChangeAny => (recipe) =>
    edit((d) => ({ ...d, sections: d.sections.map((section) => (section.id === id ? recipe(section) : section)) }));

  function addSection() {
    const section = newCustomSection();
    edit((d) => {
      // Before the similar treks, which close the PDF.
      const similar = d.sections.findIndex((s) => s.kind === "similarTreks");
      const at = similar === -1 ? d.sections.length : similar;
      return { ...d, sections: [...d.sections.slice(0, at), section, ...d.sections.slice(at)] };
    });
    setOpenId(section.id);
  }

  return (
    <div className="space-y-4">
      <Panel title="Customer" hint="Shown under the title. Leave empty to leave out.">
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="Prepared for">
            <input value={draft.customer.name} onChange={(e) => setCustomer("name", e.target.value)} placeholder="e.g. Sarah Johnson" className={INPUT} />
          </Field>
          <Field label="Travel dates">
            <input value={draft.customer.dates} onChange={(e) => setCustomer("dates", e.target.value)} placeholder="e.g. 12 – 21 March 2027" className={INPUT} />
          </Field>
        </div>
        <Field label="Personal note (shown under the photo)">
          <textarea
            rows={3}
            value={draft.customer.note}
            onChange={(e) => setCustomer("note", e.target.value)}
            placeholder="e.g. Dear Sarah, here is the trip we talked about, with the extra rest day at Deurali…"
            className={INPUT}
          />
        </Field>
      </Panel>

      <Panel title={coverChoices.length > 0 ? "Title & photo" : "Title"}>
        <Field label="Title">
          <input value={draft.title} onChange={(e) => edit((d) => ({ ...d, title: e.target.value }))} placeholder="e.g. Your Everest Trip Quote" className={INPUT} />
        </Field>
        {/* A blank PDF has no photos of its own; pictures go in its sections' text. */}
        {coverChoices.length > 0 && (
        <Field label="Photo under the title">
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
            {coverChoices.map((choice) => (
              <CoverButton key={choice.id} selected={draft.coverImage === choice.id} onClick={() => edit((d) => ({ ...d, coverImage: choice.id }))} label={choice.alt}>
                <img
                  src={`https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_240,h_135,q_auto,f_auto/${choice.id}`}
                  alt={choice.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </CoverButton>
            ))}
            <CoverButton selected={!draft.coverImage} onClick={() => edit((d) => ({ ...d, coverImage: "" }))} label="No photo">
              <span className="flex h-full w-full flex-col items-center justify-center gap-1 bg-slate-50 text-[11px] text-slate-400">
                <ImageOff className="h-4 w-4" /> No photo
              </span>
            </CoverButton>
          </div>
        </Field>
        )}
      </Panel>

      <Panel title="Sections" hint="Click a section to edit it. The eye shows or leaves it out of the PDF; the arrows move it.">
        <div className="space-y-2">
          {draft.sections.map((section, index) => (
            <SectionRow
              key={section.id}
              section={section}
              open={openId === section.id}
              onToggleOpen={() => setOpenId(openId === section.id ? null : section.id)}
              onToggleVisible={() => changeSection(section.id)((s) => ({ ...s, visible: !s.visible }))}
              onMove={(by) => edit((d) => ({ ...d, sections: moved(d.sections, index, by) }))}
              canMoveUp={index > 0}
              canMoveDown={index < draft.sections.length - 1}
              onRemove={
                section.kind === "custom"
                  ? () => edit((d) => ({ ...d, sections: d.sections.filter((s) => s.id !== section.id) }))
                  : undefined
              }
            >
              <SectionFields section={section} change={changeSection(section.id)} similarTreks={similarTreks} />
            </SectionRow>
          ))}
        </div>
        <AddButton onClick={addSection} label="Add a section" />
      </Panel>
    </div>
  );
}

function SectionFields({ section, change, similarTreks }: { section: PdfSection; change: ChangeAny; similarTreks: SimilarTrek[] }) {
  const heading = (
    <Field label="Heading">
      <input
        value={section.heading}
        onChange={(e) => change((s) => ({ ...s, heading: e.target.value }))}
        placeholder={section.kind === "custom" ? "e.g. Your private extras" : undefined}
        className={INPUT}
      />
    </Field>
  );
  const description = (
    <Field label="Description (optional)">
      <textarea rows={2} value={section.description} onChange={(e) => change((s) => ({ ...s, description: e.target.value }))} className={INPUT} />
    </Field>
  );

  switch (section.kind) {
    case "facts":
      return (
        <>
          {heading}
          <FactsFields section={section} change={change as Change<"facts">} />
        </>
      );
    case "overview":
      return (
        <>
          {heading}
          <Field label="Text">
            <Rich content={section.content} onChange={(html) => change((s) => ({ ...s, content: html }))} />
          </Field>
        </>
      );
    case "itinerary":
      return (
        <>
          {heading}
          {description}
          <DaysFields section={section} change={change as Change<"itinerary">} />
        </>
      );
    case "altitude":
      return <Note>Drawn from the elevations in the itinerary. Change a day&apos;s elevation there to change the profile.</Note>;
    case "inEx":
      return (
        <>
          {heading}
          {description}
          <Field label={<span className="inline-flex items-center gap-1 text-emerald-700"><Check className="h-3 w-3" /> What&apos;s included</span>}>
            <Rich content={section.inclusions} onChange={(html) => change((s) => ({ ...s, inclusions: html }))} />
          </Field>
          <Field label={<span className="inline-flex items-center gap-1 text-red-600"><X className="h-3 w-3" /> What&apos;s excluded</span>}>
            <Rich content={section.exclusions} onChange={(html) => change((s) => ({ ...s, exclusions: html }))} />
          </Field>
        </>
      );
    case "pricing":
      return (
        <>
          {heading}
          {description}
          <TiersFields section={section} change={change as Change<"pricing">} />
        </>
      );
    case "addons":
      return (
        <>
          {heading}
          {description}
          <AddonsFields section={section} change={change as Change<"addons">} />
        </>
      );
    case "map":
      return (
        <>
          {heading}
          {description}
          <Note>The route on the map is the package&apos;s own.</Note>
        </>
      );
    case "faqs":
      return (
        <>
          {heading}
          {description}
          <FaqsFields section={section} change={change as Change<"faqs">} />
        </>
      );
    case "custom":
      return (
        <>
          {heading}
          <Field label="Text">
            <Rich content={section.content} onChange={(html) => change((s) => ({ ...s, content: html }))} />
          </Field>
        </>
      );
    case "similarTreks":
      return (
        <>
          {heading}
          {description}
          <Note>The package&apos;s own similar treks: {similarTreks.map(({ trek }) => trek.title).join(", ")}.</Note>
        </>
      );
  }
}

function FactsFields({ section, change }: { section: Extract<PdfSection, { kind: "facts" }>; change: Change<"facts"> }) {
  const setFacts = (recipe: (facts: typeof section.facts) => typeof section.facts) => change((s) => ({ ...s, facts: recipe(s.facts) }));
  return (
    <div className="space-y-2">
      {section.facts.map((fact, i) => (
        <div key={i} className="flex items-center gap-2">
          <input value={fact.label} onChange={(e) => setFacts((facts) => at(facts, i, { label: e.target.value }))} placeholder="Label" className={`${SMALL_INPUT} w-36! shrink-0`} />
          <input value={fact.value} onChange={(e) => setFacts((facts) => at(facts, i, { value: e.target.value }))} placeholder="Value" className={SMALL_INPUT} />
          <RemoveButton onClick={() => setFacts((facts) => without(facts, i))} />
        </div>
      ))}
      <AddButton onClick={() => setFacts((facts) => [...facts, { label: "", value: "" }])} label="Add a fact" />
    </div>
  );
}

function DaysFields({ section, change }: { section: Extract<PdfSection, { kind: "itinerary" }>; change: Change<"itinerary"> }) {
  const [openDay, setOpenDay] = useState<string | null>(null);
  const setDays = (recipe: (days: typeof section.days) => typeof section.days) => change((s) => ({ ...s, days: recipe(s.days) }));

  function addDay() {
    const day = newDay();
    setDays((days) => [...days, day]);
    setOpenDay(day.id);
  }

  return (
    <div className="space-y-2">
      <p className="text-xs font-medium text-slate-500">Days</p>
      {section.days.map((day, i) => (
        <div key={day.id} className="rounded-lg border border-slate-200 bg-slate-50/50">
          <div className="flex items-center gap-2 px-2.5 py-2">
            <button type="button" onClick={() => setOpenDay(openDay === day.id ? null : day.id)} className="flex min-w-0 flex-1 items-center gap-2 text-left">
              <span className="shrink-0 rounded bg-teal-100 px-2 py-0.5 text-[11px] font-bold text-teal-700">Day {i + 1}</span>
              <span className="truncate text-sm text-slate-700">{day.title || <span className="text-slate-400">Untitled day</span>}</span>
              <ChevronDown className={`ml-auto h-4 w-4 shrink-0 text-slate-400 transition-transform ${openDay === day.id ? "rotate-180" : ""}`} />
            </button>
            <MoveButtons onMove={(by) => setDays((days) => moved(days, i, by))} canMoveUp={i > 0} canMoveDown={i < section.days.length - 1} />
            <RemoveButton onClick={() => setDays((days) => without(days, i))} />
          </div>
          {openDay === day.id && (
            <div className="space-y-2 border-t border-slate-200 p-2.5">
              <input value={day.title} onChange={(e) => setDays((days) => at(days, i, { title: e.target.value }))} placeholder="Title" className={SMALL_INPUT} />
              <Rich content={day.description} onChange={(html) => setDays((days) => at(days, i, { description: html }))} />
              <div className="grid gap-2 sm:grid-cols-2">
                <input value={day.elevation} onChange={(e) => setDays((days) => at(days, i, { elevation: e.target.value }))} placeholder="Elevation (e.g. 2,800m)" className={SMALL_INPUT} />
                <input value={day.accommodation} onChange={(e) => setDays((days) => at(days, i, { accommodation: e.target.value }))} placeholder="Accommodation" className={SMALL_INPUT} />
              </div>
            </div>
          )}
        </div>
      ))}
      <AddButton onClick={addDay} label="Add a day" />
    </div>
  );
}

function TiersFields({ section, change }: { section: Extract<PdfSection, { kind: "pricing" }>; change: Change<"pricing"> }) {
  const setTiers = (recipe: (tiers: typeof section.tiers) => typeof section.tiers) => change((s) => ({ ...s, tiers: recipe(s.tiers) }));
  return (
    <div className="space-y-2">
      <p className="text-xs font-medium text-slate-500">Group size (pax) and price per person. The PDF also shows each price 10% higher, crossed out, as the page does.</p>
      {section.tiers.map((tier, i) => (
        <div key={i} className="flex items-center gap-2">
          <input value={tier.groupSize} onChange={(e) => setTiers((tiers) => at(tiers, i, { groupSize: e.target.value }))} placeholder="e.g. 1-2" className={SMALL_INPUT} />
          <Price value={tier.pricePerPerson} onChange={(price) => setTiers((tiers) => at(tiers, i, { pricePerPerson: price }))} />
          <RemoveButton onClick={() => setTiers((tiers) => without(tiers, i))} />
        </div>
      ))}
      <AddButton onClick={() => setTiers((tiers) => [...tiers, { groupSize: "", pricePerPerson: 0 }])} label="Add a price" />
    </div>
  );
}

function AddonsFields({ section, change }: { section: Extract<PdfSection, { kind: "addons" }>; change: Change<"addons"> }) {
  const setItems = (recipe: (items: typeof section.items) => typeof section.items) => change((s) => ({ ...s, items: recipe(s.items) }));
  return (
    <div className="space-y-2">
      {section.items.map((addon, i) => (
        <div key={i} className="space-y-2 rounded-lg border border-slate-200 bg-slate-50/50 p-2.5">
          <div className="flex items-center gap-2">
            <input value={addon.title} onChange={(e) => setItems((items) => at(items, i, { title: e.target.value }))} placeholder="Title (e.g. Porter)" className={SMALL_INPUT} />
            <RemoveButton onClick={() => setItems((items) => without(items, i))} />
          </div>
          <div className="flex items-center gap-2">
            <Price value={addon.pricePerUnit} onChange={(price) => setItems((items) => at(items, i, { pricePerUnit: price }))} />
            <span className="text-sm text-slate-400">per</span>
            <input value={addon.unit} onChange={(e) => setItems((items) => at(items, i, { unit: e.target.value }))} placeholder="person" className={SMALL_INPUT} />
          </div>
          <textarea rows={2} value={addon.description} onChange={(e) => setItems((items) => at(items, i, { description: e.target.value }))} placeholder="Description" className={SMALL_INPUT} />
        </div>
      ))}
      <AddButton onClick={() => setItems((items) => [...items, { title: "", description: "", unit: "", pricePerUnit: 0 }])} label="Add an add-on" />
    </div>
  );
}

function FaqsFields({ section, change }: { section: Extract<PdfSection, { kind: "faqs" }>; change: Change<"faqs"> }) {
  const setItems = (recipe: (items: typeof section.items) => typeof section.items) => change((s) => ({ ...s, items: recipe(s.items) }));
  return (
    <div className="space-y-2">
      {section.items.map((faq, i) => (
        <div key={i} className="space-y-2 rounded-lg border border-slate-200 bg-slate-50/50 p-2.5">
          <div className="flex items-center gap-2">
            <input value={faq.question} onChange={(e) => setItems((items) => at(items, i, { question: e.target.value }))} placeholder="Question" className={SMALL_INPUT} />
            <MoveButtons onMove={(by) => setItems((items) => moved(items, i, by))} canMoveUp={i > 0} canMoveDown={i < section.items.length - 1} />
            <RemoveButton onClick={() => setItems((items) => without(items, i))} />
          </div>
          <textarea rows={3} value={faq.answer} onChange={(e) => setItems((items) => at(items, i, { answer: e.target.value }))} placeholder="Answer" className={SMALL_INPUT} />
        </div>
      ))}
      <AddButton onClick={() => setItems((items) => [...items, { question: "", answer: "" }])} label="Add a question" />
    </div>
  );
}

/* ─── Pieces ───────────────────────────────────────────────────────── */

function SectionRow({
  section,
  open,
  onToggleOpen,
  onToggleVisible,
  onMove,
  canMoveUp,
  canMoveDown,
  onRemove,
  children,
}: {
  section: PdfSection;
  open: boolean;
  onToggleOpen: () => void;
  onToggleVisible: () => void;
  onMove: (by: -1 | 1) => void;
  canMoveUp: boolean;
  canMoveDown: boolean;
  onRemove?: () => void;
  children: ReactNode;
}) {
  const count = itemCount(section);
  return (
    <div className={`rounded-xl border ${section.visible ? "border-slate-200 bg-white" : "border-dashed border-slate-200 bg-slate-50/50"}`}>
      <div className="flex items-center gap-1.5 px-2.5 py-2">
        <button
          type="button"
          onClick={onToggleVisible}
          title={section.visible ? "In the PDF. Click to leave it out." : "Left out of the PDF. Click to put it in."}
          aria-label={section.visible ? `Leave ${sectionLabel(section)} out of the PDF` : `Put ${sectionLabel(section)} in the PDF`}
          className={`rounded-lg p-1.5 transition-colors ${section.visible ? "text-teal-600 hover:bg-teal-50" : "text-slate-400 hover:bg-slate-100"}`}
        >
          {section.visible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
        </button>
        <button type="button" onClick={onToggleOpen} aria-expanded={open} className="flex min-w-0 flex-1 items-center gap-2 py-0.5 text-left">
          <span className={`truncate text-sm font-medium ${section.visible ? "text-slate-800" : "text-slate-400"}`}>{sectionLabel(section)}</span>
          {count && <span className="shrink-0 text-xs text-slate-400">{count}</span>}
          {!section.visible && <span className="shrink-0 rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-500">Not in PDF</span>}
          <ChevronDown className={`ml-auto h-4 w-4 shrink-0 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
        <MoveButtons onMove={onMove} canMoveUp={canMoveUp} canMoveDown={canMoveDown} />
        {onRemove && <RemoveButton onClick={onRemove} />}
      </div>
      {open && <div className="space-y-3 border-t border-slate-100 p-3">{children}</div>}
    </div>
  );
}

function itemCount(section: PdfSection): string | null {
  const count = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;
  switch (section.kind) {
    case "facts":
      return count(section.facts.length, "fact", "facts");
    case "itinerary":
      return count(section.days.length, "day", "days");
    case "pricing":
      return count(section.tiers.length, "price", "prices");
    case "addons":
      return count(section.items.length, "add-on", "add-ons");
    case "faqs":
      return count(section.items.length, "question", "questions");
    default:
      return null;
  }
}

function Panel({ title, hint, children }: { title: string; hint?: string; children: ReactNode }) {
  return (
    <section className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div>
        <h2 className="text-sm font-semibold text-slate-900">{title}</h2>
        {hint && <p className="mt-0.5 text-xs text-slate-500">{hint}</p>}
      </div>
      {children}
    </section>
  );
}

/** A label over its field. Not a <label>: one around a rich text editor would click its toolbar's first button. */
function Field({ label, children }: { label: ReactNode; children: ReactNode }) {
  return (
    <div className="space-y-1">
      <span className="block text-xs font-medium text-slate-500">{label}</span>
      {children}
    </div>
  );
}

function Rich({ content, onChange }: { content: string; onChange: (html: string) => void }) {
  // keepRemovedImages: the package's saved content still uses an image taken out here.
  return <RichTextEditor content={content} onChange={onChange} hideStatusBar keepRemovedImages />;
}

function Price({ value, onChange }: { value: number; onChange: (price: number) => void }) {
  return (
    <div className="relative w-32 shrink-0">
      <span className="pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2 text-sm text-slate-400">$</span>
      <input
        type="number"
        min={0}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        aria-label="Price in US dollars"
        className={`${SMALL_INPUT} pl-6`}
      />
    </div>
  );
}

function CoverButton({ selected, onClick, label, children }: { selected: boolean; onClick: () => void; label: string; children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      aria-pressed={selected}
      className={`relative aspect-video overflow-hidden rounded-lg border-2 transition-colors ${selected ? "border-teal-500" : "border-transparent hover:border-slate-300"}`}
    >
      {children}
      {selected && (
        <span className="absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-teal-500 text-white shadow">
          <Check className="h-3 w-3" strokeWidth={3} />
        </span>
      )}
    </button>
  );
}

function MoveButtons({ onMove, canMoveUp, canMoveDown }: { onMove: (by: -1 | 1) => void; canMoveUp: boolean; canMoveDown: boolean }) {
  return (
    <span className="flex shrink-0 items-center">
      <button type="button" onClick={() => onMove(-1)} disabled={!canMoveUp} aria-label="Move up" className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 disabled:opacity-30">
        <ArrowUp className="h-3.5 w-3.5" />
      </button>
      <button type="button" onClick={() => onMove(1)} disabled={!canMoveDown} aria-label="Move down" className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 disabled:opacity-30">
        <ArrowDown className="h-3.5 w-3.5" />
      </button>
    </span>
  );
}

function RemoveButton({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} aria-label="Remove" className="shrink-0 rounded p-1 text-slate-400 hover:bg-red-50 hover:text-red-500">
      <Trash2 className="h-3.5 w-3.5" />
    </button>
  );
}

function AddButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-slate-300 px-3 py-2 text-xs font-medium text-slate-500 transition-all hover:border-teal-300 hover:bg-teal-50 hover:text-teal-600"
    >
      <Plus className="h-3.5 w-3.5" /> {label}
    </button>
  );
}

function Note({ children }: { children: ReactNode }) {
  return <p className="rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-500">{children}</p>;
}

/* ─── List helpers ─────────────────────────────────────────────────── */

function at<T>(items: T[], index: number, patch: Partial<T>): T[] {
  return items.map((item, i) => (i === index ? { ...item, ...patch } : item));
}

function without<T>(items: T[], index: number): T[] {
  return items.filter((_, i) => i !== index);
}

function moved<T>(items: T[], index: number, by: -1 | 1): T[] {
  const to = index + by;
  if (to < 0 || to >= items.length) return items;
  const next = items.slice();
  [next[index], next[to]] = [next[to], next[index]];
  return next;
}
