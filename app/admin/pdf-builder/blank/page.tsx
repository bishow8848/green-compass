import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SITE_URL } from "@/lib/seo";
import { blankPackage } from "@/lib/pdf-package";
import { PdfBuilder } from "../_builder/builder";

/**
 * A PDF that starts empty, with the company letterhead, for anything that
 * isn't one package. Like a package's, nothing written here is saved.
 */
export default function BlankPdfPage() {
  return (
    <div>
      <Link href="/admin/pdf-builder" className="mb-4 inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-700">
        <ArrowLeft className="h-3.5 w-3.5" /> Back to PDF Builder
      </Link>
      <PdfBuilder original={blankPackage()} source={null} siteUrl={SITE_URL} route={null} similarTreks={[]} coverChoices={[]} />
    </div>
  );
}
