"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPost, updatePost, deletePost } from "./actions";
import { RichTextEditor, type RichTextEditorHandle } from "@/components/admin/RichTextEditor";
import { ImageUpload, type ImageUploadHandle } from "@/components/admin/trek-sections/ImageUpload";
import { SeoAnalyzer } from "@/components/admin/SeoAnalyzer";

export function BlogForm({ mode, post, authors = [] }: { mode: "create" | "edit"; post?: any; authors?: { id: string; name: string; slug: string }[] }) {
  const router = useRouter();
  const [content, setContent] = useState(post?.content || "");
  const [heroImage, setHeroImage] = useState(post?.heroImage || "");
  const [selectedAuthor, setSelectedAuthor] = useState(post?.authorSlug || "");
  // Controlled so the SEO analyser can score them live as they are typed
  const [title, setTitle] = useState(post?.title || "");
  const [slug, setSlug] = useState(post?.slug || "");
  const [metaTitle, setMetaTitle] = useState(post?.metaTitle || "");
  const [metaDescription, setMetaDescription] = useState(post?.metaDescription || "");
  const [keywords, setKeywords] = useState(post?.keywords || "");
  const [saving, setSaving] = useState(false);
  const heroImageRef = useRef<ImageUploadHandle>(null);
  const editorRef = useRef<RichTextEditorHandle>(null);

  // The first keyword doubles as the focus keyword — it is what the post is
  // meant to rank for, and it persists in the existing `keywords` column.
  const focusKeyword = keywords.split(",")[0]?.trim() || "";
  const setFocusKeyword = (value: string) => {
    const rest = keywords.split(",").slice(1).map((k: string) => k.trim()).filter(Boolean);
    setKeywords([value.trim(), ...rest].filter(Boolean).join(", "));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setSaving(true);

    // Upload any pending images to Cloudinary before saving
    const [heroId, finalContent] = await Promise.all([
      heroImageRef.current?.save() ?? Promise.resolve(null),
      editorRef.current?.processPendingImages() ?? Promise.resolve(content),
    ]);

    const savedHero = heroId || heroImage;
    const fd = new FormData(form);
    fd.set("content", finalContent);
    fd.set("heroImage", savedHero);
    fd.set("ogImage", savedHero);
    try {
      if (mode === "create") {
        await createPost(fd);
      } else if (post) {
        await updatePost(post.id, fd);
      }
      // Images are already on Cloudinary — no cleanup needed
    } catch { setSaving(false); }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-6">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {/* Content */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-teal-600 text-lg">📝</div>
              <div>
                <h2 className="text-sm font-bold text-slate-900">Content</h2>
                <p className="text-xs text-slate-400">Blog post details and body</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5">Title *</label>
                <input name="title" value={title} onChange={(e) => setTitle(e.target.value)} required className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-100" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Slug *</label>
                  <input name="slug" value={slug} onChange={(e) => setSlug(e.target.value)} required className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-mono focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-100" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Author *</label>
                  <input type="hidden" name="authorSlug" value={selectedAuthor} />
                  <select
                    value={selectedAuthor}
                    onChange={(e) => setSelectedAuthor(e.target.value)}
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-100"
                  >
                    <option value="">Select an author...</option>
                    {authors.map((a) => (
                      <option key={a.id} value={a.slug}>{a.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5">Excerpt</label>
                <textarea name="excerpt" rows={2} defaultValue={post?.excerpt || ""} placeholder="Brief summary of the post..." className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-100" />
              </div>
              <div>
                <ImageUpload ref={heroImageRef} value={heroImage} onChange={setHeroImage} label="Hero Image" folder="mardi-treks/blog" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5">Body</label>
                <RichTextEditor ref={editorRef} content={content} onChange={setContent} placeholder="Write your blog post..." />
              </div>
              <SeoAnalyzer
                html={content}
                title={title}
                slug={slug}
                metaTitle={metaTitle}
                metaDescription={metaDescription}
                focusKeyword={focusKeyword}
                onFocusKeywordChange={setFocusKeyword}
                urlPrefix="/blog"
                minWords={600}
                focusKeywordHint="Saved as the first entry of the Keywords field."
              />
            </div>
          </section>
        </div>

        <div className="space-y-6">
          {/* Settings */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-600 text-lg">⚙️</div>
              <div>
                <h2 className="text-sm font-bold text-slate-900">Settings</h2>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5">Tags (JSON)</label>
                <input name="tags" defaultValue={post?.tags || "[]"} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-100" />
                <p className="mt-1 text-xs text-slate-400">e.g. [&quot;trekking&quot;, &quot;nepal&quot;, &quot;everest&quot;]</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5">Status</label>
                <select name="status" defaultValue={post?.status || "draft"} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-100">
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
            </div>
          </section>

          {/* SEO */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600 text-lg">🔍</div>
              <div>
                <h2 className="text-sm font-bold text-slate-900">SEO</h2>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5">Meta Title</label>
                <input name="metaTitle" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} placeholder={title || "Falls back to the post title"} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-100" />
                <p className="mt-1 text-[11px] text-slate-400">{metaTitle.length}/60 characters</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5">Meta Description</label>
                <textarea name="metaDescription" rows={3} value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-100" />
                <p className="mt-1 text-[11px] text-slate-400">{metaDescription.length}/160 characters</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5">Keywords</label>
                <input name="keywords" value={keywords} onChange={(e) => setKeywords(e.target.value)} placeholder="trekking, nepal, everest, guide" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-100" />
                <p className="mt-1 text-[11px] text-slate-400">The first keyword is used as the focus keyword.</p>
              </div>
            </div>
          </section>

          {/* Actions */}
          <div className="flex flex-col gap-2">
            <button type="submit" disabled={saving} className="w-full rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:from-teal-600 hover:to-teal-700 hover:shadow-md disabled:opacity-50">
              {saving ? "Saving..." : mode === "create" ? "Publish" : "Save"}
            </button>
            <button type="button" onClick={() => router.push("/admin/blog")} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50">Cancel</button>
            {mode === "edit" && post && (
              <button type="button" onClick={async () => { if (confirm("Delete this post?")) await deletePost(post.id); }} className="w-full rounded-xl border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50">Delete</button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
