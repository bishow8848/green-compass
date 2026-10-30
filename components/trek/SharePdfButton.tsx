"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { FileDown, Loader2 } from "lucide-react";
import { downloadPagePdf, type PdfOptions } from "@/lib/page-pdf";

/**
 * Admin-only: saves this tour page as a PDF to send to a customer. The page
 * is statically cached for everyone, so who sees the button is decided here
 * in the browser.
 */
export function SharePdfButton(pdf: PdfOptions) {
  const { data: session } = useSession();
  const [status, setStatus] = useState<"idle" | "busy" | "failed">("idle");

  if ((session?.user as any)?.role !== "admin") return null;

  async function share() {
    setStatus("busy");
    try {
      await downloadPagePdf(pdf);
      setStatus("idle");
    } catch (error) {
      console.error("PDF export failed:", error);
      setStatus("failed");
    }
  }

  const busy = status === "busy";

  return (
    <>
      <button
        type="button"
        onClick={share}
        disabled={busy}
        className="fixed bottom-24 left-4 z-40 flex items-center gap-2 rounded-full bg-secondary px-4 py-2.5 text-sm font-semibold text-white shadow-lg ring-1 ring-white/10 transition-colors hover:bg-secondary-dark disabled:opacity-80 sm:bottom-6 sm:left-6"
      >
        {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <FileDown className="h-4 w-4" />}
        {status === "failed" ? "PDF failed — try again" : busy ? "Preparing PDF…" : "Share as PDF"}
      </button>

      {/* Covers the page while it is opened up and captured. */}
      {busy && (
        <div
          role="status"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-white/90 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 text-base font-medium text-secondary">
            <Loader2 className="h-5 w-5 animate-spin" />
            Preparing PDF…
          </div>
        </div>
      )}
    </>
  );
}
