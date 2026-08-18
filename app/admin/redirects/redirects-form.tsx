"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Plus,
  Trash2,
  Pencil,
  X,
  Check,
  ArrowRight,
  Link2,
  RefreshCcw,
  ExternalLink,
} from "lucide-react";
import { createRedirect, updateRedirect, deleteRedirect } from "./actions";
import { normalizeLegacyPath } from "@/lib/legacy-redirect-path";

export interface RedirectRow {
  id: string;
  oldPath: string;
  newPath: string;
  permanent: boolean;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

interface RedirectFormState {
  oldPath: string;
  newPath: string;
  permanent: boolean;
  active: boolean;
}

const EMPTY_STATE: RedirectFormState = {
  oldPath: "",
  newPath: "",
  permanent: true,
  active: true,
};

export function RedirectsForm({ redirects }: { redirects: RedirectRow[] }) {
  const router = useRouter();
  const [addForm, setAddForm] = useState<RedirectFormState>(EMPTY_STATE);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<RedirectFormState>(EMPTY_STATE);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  function validate(f: RedirectFormState): string | null {
    const oldPath = normalizeLegacyPath(f.oldPath);
    if (!oldPath || oldPath === "/") return "Old URL must be a non-root path like /abc";
    if (!f.newPath.trim()) return "New URL is required";
    if (!f.newPath.trim().startsWith("/")) return "New URL must start with / (e.g. /treks/abc)";
    if (oldPath === normalizeLegacyPath(f.newPath)) return "Old URL and New URL cannot be the same";
    return null;
  }

  async function handleAdd() {
    const err = validate(addForm);
    if (err) return setError(err);
    setError(null);
    setBusy(true);
    try {
      const fd = new FormData();
      fd.set("oldPath", addForm.oldPath);
      fd.set("newPath", addForm.newPath);
      fd.set("permanent", addForm.permanent ? "on" : "off");
      fd.set("active", addForm.active ? "on" : "off");
      await createRedirect(fd);
      setAddForm(EMPTY_STATE);
      router.refresh();
    } catch (e: any) {
      setError(e?.message || "Failed to create redirect");
    } finally {
      setBusy(false);
    }
  }

  function startEdit(row: RedirectRow) {
    setEditingId(row.id);
    setEditForm({
      oldPath: row.oldPath,
      newPath: row.newPath,
      permanent: row.permanent,
      active: row.active,
    });
    setError(null);
  }

  function cancelEdit() {
    setEditingId(null);
    setEditForm(EMPTY_STATE);
    setError(null);
  }

  async function handleSaveEdit(id: string) {
    const err = validate(editForm);
    if (err) return setError(err);
    setError(null);
    setBusy(true);
    try {
      const fd = new FormData();
      fd.set("oldPath", editForm.oldPath);
      fd.set("newPath", editForm.newPath);
      fd.set("permanent", editForm.permanent ? "on" : "off");
      fd.set("active", editForm.active ? "on" : "off");
      await updateRedirect(id, fd);
      setEditingId(null);
      setEditForm(EMPTY_STATE);
      router.refresh();
    } catch (e: any) {
      setError(e?.message || "Failed to update redirect");
    } finally {
      setBusy(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this redirect?")) return;
    setBusy(true);
    try {
      await deleteRedirect(id);
      router.refresh();
    } catch (e: any) {
      setError(e?.message || "Failed to delete redirect");
    } finally {
      setBusy(false);
    }
  }

  const inputCls =
    "w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-100";
  const labelCls = "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500";

  return (
    <div className="space-y-6">
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* ── Add Redirect ── */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="flex items-center gap-2 text-sm font-bold text-slate-900">
          <Plus className="h-4 w-4 text-teal-600" /> Add Redirect
        </h2>
        <p className="mt-1 text-xs text-slate-500">
          Example: old URL <code className="rounded bg-slate-100 px-1 font-mono">/abc</code> →
          new URL <code className="rounded bg-slate-100 px-1 font-mono">/treks/abc</code>
        </p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelCls}>Old URL</label>
            <input
              className={inputCls}
              placeholder="/abc"
              value={addForm.oldPath}
              onChange={(e) => setAddForm({ ...addForm, oldPath: e.target.value })}
            />
          </div>
          <div>
            <label className={labelCls}>New URL</label>
            <input
              className={inputCls}
              placeholder="/treks/abc"
              value={addForm.newPath}
              onChange={(e) => setAddForm({ ...addForm, newPath: e.target.value })}
            />
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
            <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
              <input
                type="checkbox"
                checked={addForm.permanent}
                onChange={(e) => setAddForm({ ...addForm, permanent: e.target.checked })}
                className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-100"
              />
              Permanent (308)
            </label>
            <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
              <input
                type="checkbox"
                checked={addForm.active}
                onChange={(e) => setAddForm({ ...addForm, active: e.target.checked })}
                className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-100"
              />
              Active
            </label>
          </div>
          <button
            onClick={handleAdd}
            disabled={busy}
            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:from-teal-600 hover:to-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Plus className="h-4 w-4" /> Add Redirect
          </button>
        </div>
      </div>

      {/* ── Redirect List ── */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 px-5 py-4">
          <h2 className="text-sm font-bold text-slate-900">
            Existing Redirects{" "}
            <span className="ml-1 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-500">
              {redirects.length}
            </span>
          </h2>
        </div>

        {redirects.length === 0 ? (
          <div className="px-5 py-12 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50">
              <Link2 className="h-6 w-6 text-slate-300" />
            </div>
            <p className="text-sm font-medium text-slate-700">No redirects yet</p>
            <p className="mt-1 text-xs text-slate-500">Add your first legacy URL mapping above.</p>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                <th className="px-5 py-3">Old URL</th>
                <th className="px-5 py-3">New URL</th>
                <th className="px-5 py-3">Type</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {redirects.map((row) => {
                const isEditing = editingId === row.id;
                const f = isEditing ? editForm : row;
                return (
                  <tr key={row.id} className="group hover:bg-slate-50/50">
                    <td className="px-5 py-4">
                      {isEditing ? (
                        <input
                          className={`${inputCls} font-mono text-xs`}
                          value={editForm.oldPath}
                          onChange={(e) => setEditForm({ ...editForm, oldPath: e.target.value })}
                        />
                      ) : (
                        <code className="rounded bg-slate-100 px-2 py-0.5 font-mono text-xs font-semibold text-slate-700">
                          {row.oldPath}
                        </code>
                      )}
                    </td>
                    <td className="px-5 py-4">
                      {isEditing ? (
                        <input
                          className={`${inputCls} font-mono text-xs`}
                          value={editForm.newPath}
                          onChange={(e) => setEditForm({ ...editForm, newPath: e.target.value })}
                        />
                      ) : (
                        <div className="flex items-center gap-1.5">
                          <code className="rounded bg-teal-50 px-2 py-0.5 font-mono text-xs font-semibold text-teal-700">
                            {row.newPath}
                          </code>
                          <a
                            href={row.newPath}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded p-1 text-slate-300 transition-colors hover:bg-slate-100 hover:text-slate-500"
                            title="Open destination"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      )}
                    </td>
                    <td className="px-5 py-4">
                      {isEditing ? (
                        <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
                          <input
                            type="checkbox"
                            checked={editForm.permanent}
                            onChange={(e) => setEditForm({ ...editForm, permanent: e.target.checked })}
                            className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-100"
                          />
                          Permanent
                        </label>
                      ) : (
                        <span
                          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                            row.permanent ? "bg-amber-50 text-amber-700" : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          <RefreshCcw className="h-3 w-3" />
                          {row.permanent ? "308" : "307"}
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-4">
                      {isEditing ? (
                        <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
                          <input
                            type="checkbox"
                            checked={editForm.active}
                            onChange={(e) => setEditForm({ ...editForm, active: e.target.checked })}
                            className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-100"
                          />
                          Active
                        </label>
                      ) : (
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                            row.active ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-400"
                          }`}
                        >
                          {row.active ? "Active" : "Inactive"}
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-4 text-right">
                      {isEditing ? (
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => handleSaveEdit(row.id)}
                            disabled={busy}
                            className="rounded-lg bg-teal-600 p-2 text-white transition-colors hover:bg-teal-700 disabled:opacity-60"
                            title="Save"
                          >
                            <Check className="h-4 w-4" />
                          </button>
                          <button
                            onClick={cancelEdit}
                            disabled={busy}
                            className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 disabled:opacity-60"
                            title="Cancel"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center justify-end gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                          <button
                            onClick={() => startEdit(row)}
                            className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
                            title="Edit"
                          >
                            <Pencil className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(row.id)}
                            className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-red-50 hover:text-red-500"
                            title="Delete"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      <div className="flex items-start gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-500">
        <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0" />
        <p>
          Permanent redirects send a <span className="font-mono font-semibold text-slate-600">308</span> status
          (search engines update their index); temporary ones send{" "}
          <span className="font-mono font-semibold text-slate-600">307</span>. Changes take effect immediately and
          are applied by the site's redirect proxy before pages load.
        </p>
      </div>
    </div>
  );
}
