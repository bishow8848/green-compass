import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Plus, Pencil, ExternalLink, Users } from "lucide-react";
import { DeleteAuthorButton } from "./delete-button";

export const dynamic = "force-dynamic";

export default async function AuthorsPage() {
  const authors = await prisma.author.findMany({ orderBy: { name: "asc" } });

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-slate-900">Authors</h1>
          <p className="text-sm text-slate-500">Manage blog post authors</p>
        </div>
        <Link
          href="/admin/authors/new"
          className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-teal-600"
        >
          <Plus className="h-4 w-4" /> New Author
        </Link>
      </div>

      {authors.length === 0 ? (
        <div className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white py-16">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
            <Users className="h-6 w-6 text-slate-400" />
          </div>
          <p className="mt-4 text-sm font-semibold text-slate-700">No authors yet</p>
          <p className="mt-1 text-xs text-slate-500">Create your first author to get started.</p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Author</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Slug</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Role</th>
                <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {authors.map((author) => (
                <tr key={author.id} className="transition-colors hover:bg-slate-50/50">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      {author.avatar ? (
                        <img
                          src={`https://res.cloudinary.com/dk7ggjvlw/image/upload/c_fill,w_48,h_48,q_auto,f_auto/${author.avatar}`}
                          alt={author.name}
                          width={48}
                          height={48}
                          className="h-8 w-8 rounded-full object-cover"
                        />
                      ) : (
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-700">
                          {author.name.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <span className="text-sm font-medium text-slate-900">{author.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-500 font-mono">{author.slug}</td>
                  <td className="px-4 py-3 text-sm text-slate-500">{author.role || "—"}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Link
                        href={`/author/${author.slug}`}
                        target="_blank"
                        className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
                        title="View on site"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                      <Link
                        href={`/admin/authors/${author.id}`}
                        className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
                        title="Edit"
                      >
                        <Pencil className="h-4 w-4" />
                      </Link>
                      <DeleteAuthorButton id={author.id} name={author.name} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
