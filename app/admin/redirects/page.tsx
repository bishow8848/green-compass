import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { ArrowRightLeft, Eye, Link2, RefreshCcw } from "lucide-react";
import { RedirectsForm } from "./redirects-form";

export default async function AdminRedirectsPage() {
  const redirects = await prisma.legacyRedirect.findMany({
    orderBy: { updatedAt: "desc" },
  });

  const activeCount = redirects.filter((r) => r.active).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Legacy Redirects</h1>
          <p className="mt-1 text-sm text-slate-500">
            Map old site URLs to their new destinations so visitors and search engines land on the right page.
          </p>
        </div>
        <Link
          href="/"
          target="_blank"
          className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 shadow-sm transition-all hover:bg-slate-50 hover:text-teal-600"
        >
          <Eye className="h-4 w-4" /> View Site
        </Link>
      </div>

      {/* Stat cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Total Redirects", value: redirects.length, icon: Link2, color: "bg-teal-50 text-teal-600" },
          { label: "Active", value: activeCount, icon: RefreshCcw, color: "bg-emerald-50 text-emerald-600" },
          { label: "Permanent (308)", value: redirects.filter((r) => r.permanent).length, icon: ArrowRightLeft, color: "bg-amber-50 text-amber-600" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className={`rounded-lg p-2 ${s.color}`}>
                <s.icon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-lg font-bold text-slate-900">{s.value}</p>
                <p className="text-xs text-slate-500">{s.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <RedirectsForm redirects={JSON.parse(JSON.stringify(redirects))} />
    </div>
  );
}
