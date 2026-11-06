"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { flushSync } from "react-dom";
import { ExternalLink, FileDown, Info, Loader2, RotateCcw, Undo2, X } from "lucide-react";
import { downloadPagePdf } from "@/lib/page-pdf";
import { pdfLetterhead } from "@/lib/pdf-letterhead";
import { pdfFileName, type PdfPackage } from "@/lib/pdf-package";
import type { TrekCardData } from "@/components/trek/TrekCard";
import { DOCUMENT_WIDTH, PackageDocument, type PdfRoute } from "./document";
import { PdfEditor } from "./editor";

export interface CoverChoice {
  /** Cloudinary public ID. */
  id: string;
  alt: string;
}

export interface SimilarTrek {
  trek: TrekCardData;
  href: string;
}

interface Props {
  /** The package as saved, or a blank PDF. Edits are made to a copy, which is all the PDF is made from. */
  original: PdfPackage;
  /** The package the PDF is made of; null for a blank PDF. */
  source: { slug: string; pageUrl: string } | null;
  siteUrl: string;
  route: PdfRoute | null;
  similarTreks: SimilarTrek[];
  coverChoices: CoverChoice[];
}

/**
 * Edit a copy of the package (or a blank page), see it as the PDF, and save
 * the PDF. The copy lives only in this page's state — nothing is sent to the
 * server — and once the PDF is saved the editor goes back to where it
 * started, so one customer's changes never carry over to the next.
 */
export function PdfBuilder({ original, source, siteUrl, route, similarTreks, coverChoices }: Props) {
  const [draft, setDraft] = useState(original);
  // Bumped to remount the editor when the draft is replaced wholesale: the
  // rich text editors only read their content when they mount.
  const [version, setVersion] = useState(0);
  const [status, setStatus] = useState<"idle" | "busy" | "failed">("idle");
  const [capturing, setCapturing] = useState(false);
  // The edits behind the last PDF, to bring back if that PDF needs a fix.
  const [lastEdits, setLastEdits] = useState<PdfPackage | null>(null);
  const [savedNotice, setSavedNotice] = useState(false);
  const [view, setView] = useState<"edit" | "preview">("edit");
  const documentRef = useRef<HTMLDivElement>(null);

  const originalJson = useMemo(() => JSON.stringify(original), [original]);
  const edited = useMemo(() => JSON.stringify(draft) !== originalJson, [draft, originalJson]);

  // Closing or reloading the tab would throw away edits not yet in a PDF.
  useEffect(() => {
    if (!edited) return;
    const warn = (event: BeforeUnloadEvent) => event.preventDefault();
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [edited]);

  function replaceDraft(next: PdfPackage) {
    setDraft(next);
    setVersion((v) => v + 1);
  }

  function reset() {
    const question = source
      ? "Throw away your changes and go back to the package as it is saved?"
      : "Throw away what you have written and start again from a blank page?";
    if (edited && !window.confirm(question)) return;
    replaceDraft(original);
    setLastEdits(null);
    setSavedNotice(false);
  }

  async function download() {
    const root = documentRef.current;
    if (!root) return;
    setStatus("busy");
    setSavedNotice(false);
    // The preview is shown scaled down; the capture measures it at full size.
    flushSync(() => setCapturing(true));
    try {
      await downloadPagePdf(
        pdfLetterhead({
          fileName: pdfFileName(source?.slug ?? draft.title, draft.customer.name),
          title: draft.title.trim() || original.title,
          website: siteUrl,
        }),
        root
      );
      setLastEdits(edited ? draft : null);
      setSavedNotice(true);
      replaceDraft(original);
      setStatus("idle");
    } catch (error) {
      console.error("PDF export failed:", error);
      setStatus("failed");
    } finally {
      setCapturing(false);
    }
  }

  const busy = status === "busy";

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-2xl font-bold text-slate-900">{source ? "Customize PDF" : "Blank PDF"}</h1>
            {edited && (
              <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-[11px] font-medium text-amber-700">Edited</span>
            )}
          </div>
          <p className="mt-1 flex flex-wrap items-center gap-x-2 text-sm text-slate-500">
            {source ? (
              <>
                {original.title}
                <a href={source.pageUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-medium text-teal-600 hover:text-teal-700">
                  View page <ExternalLink className="h-3 w-3" />
                </a>
              </>
            ) : (
              "An empty page with the letterhead. Write whatever you want, in as many sections as you like."
            )}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={reset}
            disabled={!edited || busy}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 disabled:opacity-50"
          >
            <RotateCcw className="h-4 w-4" /> Reset
          </button>
          <button
            type="button"
            onClick={download}
            disabled={busy}
            className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md disabled:opacity-80"
          >
            {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <FileDown className="h-4 w-4" />}
            {status === "failed" ? "PDF failed — try again" : busy ? "Preparing PDF…" : "Download PDF"}
          </button>
        </div>
      </div>

      {savedNotice ? (
        <Notice tone="success" onClose={() => setSavedNotice(false)}>
          <span>
            {source
              ? `PDF saved. The editor is back to the package as it is saved${lastEdits ? ", and your changes are gone." : "."}`
              : "PDF saved. The page is blank again."}
          </span>
          {lastEdits && (
            <button
              type="button"
              onClick={() => {
                replaceDraft(lastEdits);
                setLastEdits(null);
                setSavedNotice(false);
              }}
              className="inline-flex items-center gap-1 font-semibold underline underline-offset-2"
            >
              <Undo2 className="h-3.5 w-3.5" /> {source ? "Bring back the changes from that PDF" : "Bring back what you wrote"}
            </button>
          )}
        </Notice>
      ) : (
        <Notice tone="info">
          {source
            ? "Changes made here go into the PDF only. The package on the site is never changed, and once the PDF is saved this page goes back to the package as it is saved."
            : "Nothing written here is saved anywhere: it goes into the PDF only, and once the PDF is saved the page starts blank again."}
        </Notice>
      )}

      {/* Below xl the editor and preview take turns. */}
      <div className="flex rounded-xl border border-slate-200 bg-white p-1 xl:hidden">
        {(["edit", "preview"] as const).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setView(option)}
            className={`flex-1 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              view === option ? "bg-teal-50 text-teal-700" : "text-slate-500 hover:text-slate-700"
            }`}
          >
            {option === "edit" ? "Edit" : "Preview"}
          </button>
        ))}
      </div>

      {/* grid-cols-1 is minmax(0, 1fr): without it the one column grows to
          the 680px document and the section names, past a phone's edge. */}
      <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div className={view === "edit" ? "" : "hidden xl:block"}>
          <PdfEditor key={version} draft={draft} edit={setDraft} coverChoices={coverChoices} similarTreks={similarTreks} />
        </div>

        {/* Shown while the PDF is made, which is captured from it. */}
        <div className={`${view === "preview" || capturing ? "" : "hidden xl:block"} xl:sticky xl:top-0`}>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
            <div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-white px-4 py-2.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Preview</span>
              <span className="text-[11px] text-slate-400">The logo, contact details and page numbers are added to every page.</span>
            </div>
            <div className="p-3 xl:max-h-[calc(100vh-11rem)] xl:overflow-y-auto">
              <ScaledToFit capturing={capturing}>
                <PackageDocument ref={documentRef} pkg={draft} route={route} similarTreks={similarTreks} />
              </ScaledToFit>
            </div>
          </div>
        </div>
      </div>

      {/* Covers the page while the PDF is made. */}
      {busy && (
        <div role="status" className="fixed inset-0 z-[70] flex items-center justify-center bg-white/90 backdrop-blur-sm">
          <div className="flex items-center gap-3 text-base font-medium text-secondary">
            <Loader2 className="h-5 w-5 animate-spin" />
            Preparing PDF…
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Shows the 680px document shrunk to the width it is given, as a sheet of
 * paper. The scale is a transform, which leaves the document's own layout —
 * and so its line breaks — exactly as the PDF will have them. While the PDF
 * is captured it is shown at full size, which the capture measures.
 */
function ScaledToFit({ capturing, children }: { capturing: boolean; children: ReactNode }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const [fit, setFit] = useState({ scale: 1, height: 0 });

  useLayoutEffect(() => {
    const frame = frameRef.current;
    const sheet = sheetRef.current;
    if (!frame || !sheet) return;
    const measure = () => setFit({ scale: Math.min(1, frame.clientWidth / DOCUMENT_WIDTH), height: sheet.offsetHeight });
    const observer = new ResizeObserver(measure);
    observer.observe(frame);
    observer.observe(sheet);
    measure();
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={frameRef} className="overflow-hidden" style={{ height: fit.height * fit.scale || undefined }}>
      <div
        ref={sheetRef}
        className="pdf-capture shadow-sm"
        style={{ width: DOCUMENT_WIDTH, transform: capturing ? "none" : `scale(${fit.scale})`, transformOrigin: "top left" }}
      >
        {children}
      </div>
    </div>
  );
}

function Notice({ tone, onClose, children }: { tone: "info" | "success"; onClose?: () => void; children: ReactNode }) {
  return (
    <div
      className={`flex items-start gap-2.5 rounded-xl border px-4 py-3 text-sm ${
        tone === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-slate-200 bg-white text-slate-600"
      }`}
    >
      <Info className="mt-0.5 h-4 w-4 shrink-0" />
      <div className="flex flex-1 flex-wrap items-center gap-x-3 gap-y-1">{children}</div>
      {onClose && (
        <button type="button" onClick={onClose} aria-label="Dismiss" className="rounded p-0.5 opacity-70 hover:opacity-100">
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
