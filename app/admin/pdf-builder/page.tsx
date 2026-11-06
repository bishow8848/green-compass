import Link from "next/link";
import { ArrowRight, FilePlus2 } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { PdfBuilderList } from "./client";

/** A blank PDF, and every package, each with a way into the builder to make a PDF of it for one customer. */
export default async function PdfBuilderListPage() {
  const packages = await prisma.trek.findMany({
    orderBy: { title: "asc" },
    // Only what the list shows: a trip's route JSON alone can be close to 1 MB.
    select: {
      id: true,
      title: true,
      subtitle: true,
      duration: true,
      status: true,
      heroImage: true,
      category: { select: { name: true } },
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">PDF Builder</h1>
        <p className="mt-1 text-sm text-slate-500">
          Make a package&apos;s PDF for one customer: customize what it says, then download it. The package itself never changes.
        </p>
      </div>
      <Link
        href="/admin/pdf-builder/blank"
        className="group flex items-center gap-4 rounded-2xl border-2 border-dashed border-slate-300 bg-white px-4 py-3.5 transition-colors hover:border-teal-300 hover:bg-teal-50"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
          <FilePlus2 className="h-5 w-5" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-semibold text-slate-900">Blank PDF</span>
          <span className="block text-xs text-slate-500">
            An empty page with the letterhead. Write whatever you want: a quote, a letter, a trip that isn&apos;t one of the packages.
          </span>
        </span>
        <span className="hidden shrink-0 items-center gap-1 text-xs font-semibold text-teal-700 sm:inline-flex">
          Start writing <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </Link>
      <PdfBuilderList packages={packages} />
    </div>
  );
}
