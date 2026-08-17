"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  ImageIcon, Trash2, Upload, X, Search, Check, Loader2, Grid3X3,
  List as ListIcon, ChevronLeft, ChevronRight,
} from "lucide-react";
import { deleteMedia, uploadMedia, updateMediaAlt } from "./actions";
import { formatDate } from "@/lib/utils";

type Usage = { type: string; label: string };
type UsedImage = { key: string; url: string; name: string; usages: Usage[] };

/** Compact pagination page list with ellipses, e.g. [1, "…", 4, 5, 6, "…", 12]. */
function getPageNumbers(current: number, total: number): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | "…")[] = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  if (start > 2) pages.push("…");
  for (let i = start; i <= end; i++) pages.push(i);
  if (end < total - 1) pages.push("…");
  pages.push(total);
  return pages;
}

export function AdminMediaClient({
  media,
  totalFiles,
  usedImages,
  currentPage,
  totalPages,
  search,
}: {
  media: any[];
  totalFiles: number;
  usedImages: UsedImage[];
  currentPage: number;
  totalPages: number;
  search: string;
}) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [searchInput, setSearchInput] = useState(search);
  const [previousSearch, setPreviousSearch] = useState(search);
  const [uploading, setUploading] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeTab, setActiveTab] = useState<"library" | "used">("library");
  const [preview, setPreview] = useState<any>(null);
  const [usedPreview, setUsedPreview] = useState<UsedImage | null>(null);
  const [editingAlt, setEditingAlt] = useState<string | null>(null);
  const [altValue, setAltValue] = useState("");

  // Keep the search box in sync when the server-side ?q= changes (search/pagination).
  if (previousSearch !== search) {
    setPreviousSearch(search);
    setSearchInput(search);
  }

  // Client-side filter for the "Used on Website" tab (its list is fully passed in).
  const filteredUsed = usedImages.filter((img) => {
    const q = searchInput.toLowerCase();
    return (
      img.name.toLowerCase().includes(q) ||
      img.usages.some(
        (u) => u.type.toLowerCase().includes(q) || u.label.toLowerCase().includes(q)
      )
    );
  });

  function goToPage(page: number) {
    const params = new URLSearchParams();
    if (search) params.set("q", search);
    if (page > 1) params.set("page", String(page));
    const qs = params.toString();
    router.push(qs ? `/admin/media?${qs}` : "/admin/media");
  }

  function submitSearch() {
    const trimmed = searchInput.trim();
    const params = new URLSearchParams();
    if (trimmed) params.set("q", trimmed);
    const qs = params.toString();
    router.push(qs ? `/admin/media?${qs}` : "/admin/media");
  }

  function clearSearch() {
    setSearchInput("");
    if (activeTab !== "library") return;
    const params = new URLSearchParams();
    if (currentPage > 1) params.set("page", String(currentPage));
    const qs = params.toString();
    router.push(qs ? `/admin/media?${qs}` : "/admin/media");
  }

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const fd = new FormData();
    fd.set("file", file);
    try {
      await uploadMedia(fd);
      router.refresh();
    } catch (err) {
      console.error(err);
    }
    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  async function handleDelete(id: string) {
    await deleteMedia(id);
    setPreview(null);
    router.refresh();
  }

  async function handleSaveAlt(id: string) {
    await updateMediaAlt(id, altValue);
    setEditingAlt(null);
    router.refresh();
  }

  const formatSize = (bytes: number) => {
    if (!bytes || bytes === 0) return "—";
    const k = 1024;
    const sizes = ["B", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
  };

  return (
    <>
      {/* View tabs */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-100 p-1">
          <button
            onClick={() => setActiveTab("library")}
            className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition-colors ${
              activeTab === "library"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            Library ({totalFiles})
          </button>
          <button
            onClick={() => setActiveTab("used")}
            className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition-colors ${
              activeTab === "used"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            Used on Website ({usedImages.length})
          </button>
        </div>
        <p className="text-xs text-slate-400">
          {activeTab === "library"
            ? "Files uploaded to the media library"
            : "Images referenced across blog posts, treks, pages, categories, authors & settings"}
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-3">
        {activeTab === "library" && (
          <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white p-0.5 shadow-sm">
            <button
              onClick={() => setViewMode("grid")}
              className={`rounded-md p-1.5 transition-colors ${viewMode === "grid" ? "bg-teal-50 text-teal-600" : "text-slate-400 hover:text-slate-600"}`}
            >
              <Grid3X3 className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`rounded-md p-1.5 transition-colors ${viewMode === "list" ? "bg-teal-50 text-teal-600" : "text-slate-400 hover:text-slate-600"}`}
            >
              <ListIcon className="h-4 w-4" />
            </button>
          </div>
        )}

        <div className="relative flex-1 max-w-xs">
          <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && activeTab === "library") submitSearch();
            }}
            placeholder={activeTab === "library" ? "Search files..." : "Search images or where they're used..."}
            className="w-full rounded-lg border border-slate-200 py-1.5 pl-8 pr-8 text-xs placeholder-slate-400 focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-100"
          />
          {searchInput && (
            <button
              onClick={clearSearch}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-0.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
              aria-label="Clear search"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {activeTab === "library" && (
          <div className="ml-auto">
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleUpload}
              className="hidden"
              accept="image/*,video/*,.pdf,.doc,.docx"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:from-teal-600 hover:to-teal-700 hover:shadow-md disabled:opacity-50"
            >
              {uploading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Upload className="h-4 w-4" />
              )}
              {uploading ? "Uploading..." : "Upload"}
            </button>
          </div>
        )}
      </div>

      {/* Used on Website Grid */}
      {activeTab === "used" ? (
        filteredUsed.length === 0 ? (
          <div className="flex flex-col items-center px-5 py-16 text-center rounded-2xl border border-slate-200 bg-white">
            <ImageIcon className="h-12 w-12 text-slate-300" />
            <p className="mt-4 text-sm font-medium text-slate-600">No matching images</p>
            <p className="mt-1 text-xs text-slate-400">
              {searchInput ? "Try a different search." : "No images are currently used on the website."}
            </p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredUsed.map((img) => (
              <div
                key={img.key}
                className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                onClick={() => setUsedPreview(img)}
              >
                <div className="aspect-square bg-slate-100">
                  <img
                    src={img.url}
                    alt={img.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-3">
                  <p className="truncate text-xs font-medium text-slate-900" title={img.name}>
                    {img.name}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {img.usages.slice(0, 3).map((u, i) => (
                      <span
                        key={`${img.key}-${i}`}
                        className="rounded-md bg-teal-50 px-1.5 py-0.5 text-[10px] font-medium text-teal-700"
                      >
                        {u.type}
                      </span>
                    ))}
                    {img.usages.length > 3 && (
                      <span className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-500">
                        +{img.usages.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      ) : media.length === 0 ? (
        <div className="flex flex-col items-center px-5 py-16 text-center rounded-2xl border border-slate-200 bg-white">
          <ImageIcon className="h-12 w-12 text-slate-300" />
          <p className="mt-4 text-sm font-medium text-slate-600">No media found</p>
          <p className="mt-1 text-xs text-slate-400">
            {search ? "Try a different search." : "Upload images to get started."}
          </p>
        </div>
      ) : viewMode === "grid" ? (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {media.map((file) => (
            <div
              key={file.id}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              onClick={() => setPreview(file)}
            >
              {file.url ? (
                <div className="aspect-square bg-slate-100">
                  {file.mimeType?.startsWith("video/") ? (
                    <video src={file.url} className="h-full w-full object-cover" />
                  ) : (
                    <img
                      src={file.url}
                      alt={file.alt || ""}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  )}
                </div>
              ) : (
                <div className="flex aspect-square items-center justify-center bg-slate-100">
                  <ImageIcon className="h-12 w-12 text-slate-300" />
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-3 pt-8 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="truncate text-xs font-medium text-white drop-shadow-sm">{file.filename}</p>
                {file.width && file.height && (
                  <p className="text-[10px] text-white/80">{file.width} &times; {file.height}</p>
                )}
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); handleDelete(file.id); }}
                className="absolute right-2 top-2 rounded-lg bg-white/90 p-1.5 text-red-500 opacity-0 shadow-sm backdrop-blur transition-all hover:bg-white group-hover:opacity-100"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
              {file.mimeType?.startsWith("image/") && (
                <div className="absolute left-2 top-2 rounded-lg bg-black/50 px-1.5 py-0.5 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {file.width}&times;{file.height}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        /* List View */
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">File</th>
                  <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">Alt Text</th>
                  <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">Size</th>
                  <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">Dimensions</th>
                  <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">Type</th>
                  <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">Uploaded</th>
                  <th className="px-4 py-3 text-right text-[11px] font-semibold uppercase tracking-wider text-slate-500">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {media.map((file) => (
                  <tr key={file.id} className="transition-colors hover:bg-slate-50/50 group">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                          {file.url ? (
                            <img src={file.url} alt="" width={40} height={40} className="h-full w-full object-cover" loading="lazy" />
                          ) : (
                            <div className="flex h-full items-center justify-center">
                              <ImageIcon className="h-5 w-5 text-slate-300" />
                            </div>
                          )}
                        </div>
                        <span className="text-sm font-medium text-slate-900 truncate max-w-[200px]">{file.filename}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      {editingAlt === file.id ? (
                        <div className="flex items-center gap-1">
                          <input
                            type="text"
                            value={altValue}
                            onChange={(e) => setAltValue(e.target.value)}
                            className="w-28 rounded border border-slate-200 px-1.5 py-0.5 text-xs"
                            autoFocus
                          />
                          <button onClick={() => handleSaveAlt(file.id)} className="text-teal-600 hover:text-teal-700">
                            <Check className="h-3.5 w-3.5" />
                          </button>
                          <button onClick={() => setEditingAlt(null)} className="text-slate-400 hover:text-slate-600">
                            <X className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => { setEditingAlt(file.id); setAltValue(file.alt || ""); }}
                          className="text-xs text-slate-500 hover:text-teal-600"
                        >
                          {file.alt || <span className="italic text-slate-300">Add alt text</span>}
                        </button>
                      )}
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-500">{formatSize(file.filesize)}</td>
                    <td className="px-4 py-3 text-xs text-slate-500">
                      {file.width && file.height ? `${file.width}×${file.height}` : "—"}
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-[11px] text-slate-500 font-mono">{file.mimeType?.split("/").pop() || "—"}</span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-xs text-slate-500">
                      {formatDate(file.createdAt)}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                        <button
                          onClick={() => setPreview(file)}
                          className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-blue-600"
                          title="Preview"
                        >
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDelete(file.id)}
                          className="rounded-lg p-1.5 text-slate-400 hover:bg-red-50 hover:text-red-500"
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Pagination */}
      {activeTab === "library" && totalPages > 1 && (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <p className="text-xs text-slate-500">
            Page <span className="font-semibold text-slate-700">{currentPage}</span> of {totalPages}
            <span className="mx-1.5 text-slate-300">·</span>
            {totalFiles} files
          </p>
          <div className="flex items-center gap-1">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage <= 1}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              Prev
            </button>
            <div className="flex items-center gap-0.5">
              {getPageNumbers(currentPage, totalPages).map((p, i) =>
                p === "…" ? (
                  <span key={`ellipsis-${i}`} className="px-1 text-xs text-slate-400">…</span>
                ) : (
                  <button
                    key={p}
                    onClick={() => goToPage(p)}
                    className={`h-7 min-w-7 rounded-lg px-2 text-xs font-semibold transition-colors ${
                      p === currentPage
                        ? "bg-teal-600 text-white shadow-sm"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {p}
                  </button>
                )
              )}
            </div>
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage >= totalPages}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Preview Modal */}
      {preview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setPreview(null)}>
          <div className="mx-4 max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3">
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-slate-900">{preview.filename}</p>
                <p className="text-xs text-slate-400">
                  {preview.width && preview.height ? `${preview.width}×${preview.height} · ` : ""}
                  {formatSize(preview.filesize)} · {preview.mimeType}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => { handleDelete(preview.id); }}
                  className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50"
                >
                  Delete
                </button>
                <button
                  onClick={() => { navigator.clipboard.writeText(preview.url); }}
                  className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50"
                >
                  Copy URL
                </button>
                <button onClick={() => setPreview(null)} className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100">
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center bg-slate-100 p-4">
              {preview.mimeType?.startsWith("video/") ? (
                <video src={preview.url} controls className="max-h-[60vh] max-w-full rounded-lg" />
              ) : (
                <img src={preview.url} alt={preview.alt || ""} width={800} height={600} className="max-h-[60vh] max-w-full rounded-lg object-contain" />
              )}
            </div>
            {preview.alt && (
              <div className="border-t border-slate-200 px-5 py-3">
                <p className="text-xs text-slate-500">
                  <span className="font-medium text-slate-700">Alt:</span> {preview.alt}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Used Image Preview Modal */}
      {usedPreview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setUsedPreview(null)}
        >
          <div
            className="mx-4 max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3">
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-slate-900">{usedPreview.name}</p>
                <p className="text-xs text-slate-400">
                  Used in {usedPreview.usages.length} place{usedPreview.usages.length > 1 ? "s" : ""} on the website
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => { navigator.clipboard.writeText(usedPreview.url); }}
                  className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50"
                >
                  Copy URL
                </button>
                <button onClick={() => setUsedPreview(null)} className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100">
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center bg-slate-100 p-4">
              <img
                src={usedPreview.url}
                alt={usedPreview.name}
                width={800}
                height={600}
                className="max-h-[50vh] max-w-full rounded-lg object-contain"
              />
            </div>
            <div className="border-t border-slate-200 px-5 py-4">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Where it&apos;s used
              </p>
              <ul className="max-h-40 space-y-1.5 overflow-y-auto pr-1">
                {usedPreview.usages.map((u, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                    <span className="mt-0.5 shrink-0 rounded-md bg-teal-50 px-1.5 py-0.5 font-medium text-teal-700">
                      {u.type}
                    </span>
                    <span className="leading-relaxed">{u.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
