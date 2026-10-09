import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus, Pencil, ExternalLink, FileText, TrendingUp, Users, CalendarClock } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { AdminBlogClient } from "./client";

export default async function AdminBlogPage() {
  // Only what the table shows — the article bodies are megabytes the list never reads.
  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: "desc" },
    select: { id: true, title: true, slug: true, excerpt: true, author: true, status: true, publishedDate: true },
  });

  // A post still "scheduled" after its time means the publish job has not run.
  // Flagged here, on the server, so the table renders the same after hydration.
  const now = new Date();
  const rows = posts.map((post) => ({
    ...post,
    overdue: post.status === "scheduled" && post.publishedDate.getTime() < now.getTime(),
  }));

  const stats = {
    total: posts.length,
    published: posts.filter((p) => p.status === "published").length,
    scheduled: posts.filter((p) => p.status === "scheduled").length,
    draft: posts.filter((p) => p.status === "draft").length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Blog Posts</h1>
          <p className="mt-1 text-sm text-slate-500">{posts.length} posts</p>
        </div>
        <Link
          href="/admin/blog/new"
          className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:from-teal-600 hover:to-teal-700 hover:shadow-md"
        >
          <Plus className="h-4 w-4" /> New Post
        </Link>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-teal-50 p-2"><FileText className="h-4 w-4 text-teal-600" /></div>
            <div>
              <p className="text-lg font-bold text-slate-900">{stats.total}</p>
              <p className="text-xs text-slate-500">Total Posts</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-emerald-50 p-2"><TrendingUp className="h-4 w-4 text-emerald-600" /></div>
            <div>
              <p className="text-lg font-bold text-slate-900">{stats.published}</p>
              <p className="text-xs text-slate-500">Published</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-sky-50 p-2"><CalendarClock className="h-4 w-4 text-sky-600" /></div>
            <div>
              <p className="text-lg font-bold text-slate-900">{stats.scheduled}</p>
              <p className="text-xs text-slate-500">Scheduled</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-amber-50 p-2"><Users className="h-4 w-4 text-amber-600" /></div>
            <div>
              <p className="text-lg font-bold text-slate-900">{stats.draft}</p>
              <p className="text-xs text-slate-500">Drafts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog List */}
      <AdminBlogClient posts={JSON.parse(JSON.stringify(rows))} />
    </div>
  );
}
