"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { createAuthor, updateAuthor } from "./actions";
import { ImageUpload, type ImageUploadHandle } from "@/components/admin/trek-sections/ImageUpload";
import { ArrowLeft, Save, Loader2 } from "lucide-react";
import Link from "next/link";

export function AuthorForm({ mode, author }: { mode: "create" | "edit"; author?: any }) {
  const router = useRouter();
  const [avatar, setAvatar] = useState(author?.avatar || "");
  const [saving, setSaving] = useState(false);
  const avatarRef = useRef<ImageUploadHandle>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setSaving(true);

    const avatarId = await avatarRef.current?.save() ?? null;

    const fd = new FormData(form);
    fd.set("avatar", avatarId || avatar);

    try {
      if (mode === "create") {
        await createAuthor(fd);
      } else if (author) {
        await updateAuthor(author.id, fd);
      }
    } catch {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 max-w-2xl space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <Link href="/admin/authors" className="mb-2 inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-700">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Authors
          </Link>
          <h1 className="text-lg font-bold text-slate-900">{mode === "create" ? "New Author" : "Edit Author"}</h1>
        </div>
        <button
          type="submit"
          disabled={saving}
          className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-teal-600 disabled:opacity-50"
        >
          {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
          {mode === "create" ? "Create Author" : "Save Changes"}
        </button>
      </div>

      {/* Details */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-sm font-bold text-slate-900 mb-5">Author Details</h2>
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1.5">Name *</label>
              <input name="name" defaultValue={author?.name || ""} required className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-100" />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1.5">Slug *</label>
              <input name="slug" defaultValue={author?.slug || ""} required className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-mono focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-100" placeholder="john-doe" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1.5">Role / Title</label>
            <input name="role" defaultValue={author?.role || ""} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-100" placeholder="Senior Trek Guide" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1.5">Avatar</label>
            <ImageUpload ref={avatarRef} value={avatar} onChange={setAvatar} label="Author Photo" folder="mardi-treks/authors" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1.5">Bio</label>
            <textarea name="bio" rows={5} defaultValue={author?.bio || ""} placeholder="Write about the author..." className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-100" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1.5">Social Links (JSON)</label>
            <textarea name="socialLinks" rows={3} defaultValue={author?.socialLinks || ""} placeholder='[{"platform": "facebook", "url": "https://facebook.com/..."}]' className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-mono focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-100" />
          </div>
        </div>
      </section>
    </form>
  );
}
