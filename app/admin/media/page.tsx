import { prisma } from "@/lib/prisma";
import { ImageIcon, Upload } from "lucide-react";
import { AdminMediaClient } from "./client";

const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

type Usage = { type: string; label: string };
type UsedImageEntry = { key: string; url: string; name: string; usages: Usage[] };

/** Build a displayable URL from a stored value (Cloudinary public ID or full URL). */
function toImageUrl(value: string | null | undefined): string | null {
  if (!value) return null;
  if (/^https?:\/\//.test(value)) return value;
  if (!CLOUDINARY_CLOUD_NAME) return null;
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${value}`;
}

/** Derive a human-readable filename from a public ID or URL. */
function deriveName(value: string): string {
  const base = (value.split("/").pop() || value).split("?")[0];
  try {
    return decodeURIComponent(base);
  } catch {
    return base;
  }
}

/** Pull every <img src="…"> from rich-text HTML. */
function extractContentImages(html: string | null | undefined): string[] {
  if (!html) return [];
  const urls: string[] = [];
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/g;
  let match;
  while ((match = imgRegex.exec(html)) !== null) urls.push(match[1]);
  return urls;
}

function collectImage(
  map: Map<string, UsedImageEntry>,
  value: string | null | undefined,
  usage: Usage
) {
  if (!value) return;
  const url = toImageUrl(value);
  if (!url) return;
  const existing = map.get(url);
  if (existing) {
    if (!existing.usages.some((u) => u.type === usage.type && u.label === usage.label)) {
      existing.usages.push(usage);
    }
    return;
  }
  map.set(url, { key: url, url, name: deriveName(value), usages: [usage] });
}

const PER_PAGE = 6;

export const dynamic = "force-dynamic";

export default async function MediaPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; q?: string }>;
}) {
  const { page: pageParam, q } = await searchParams;
  const requestedPage = Math.max(1, parseInt(pageParam ?? "1", 10) || 1);
  const search = (q ?? "").trim();

  // Server-side pagination: only 6 files are fetched per page (skip/take),
  // so the backend never loads the whole library in one go.
  const totalFiles = await prisma.media.count();
  const totalPages = Math.max(1, Math.ceil(totalFiles / PER_PAGE));
  const currentPage = Math.min(Math.max(1, requestedPage), totalPages);

  const where = search
    ? {
        OR: [
          { filename: { contains: search, mode: "insensitive" as const } },
          { alt: { contains: search, mode: "insensitive" as const } },
        ],
      }
    : undefined;

  // ── Fetch the current page + aggregate every image used across the site ──
  const [totalImages, sizeAgg, media, blogPosts, treks, pages, categories, authors, teamMembers, siteSettings, homeSettings] =
    await Promise.all([
      prisma.media.count({ where: { mimeType: { startsWith: "image/" } } }),
      prisma.media.aggregate({ _sum: { filesize: true }, _avg: { width: true } }),
      prisma.media.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (currentPage - 1) * PER_PAGE,
        take: PER_PAGE,
      }),
      prisma.blogPost.findMany({
        select: { title: true, heroImage: true, ogImage: true, content: true },
      }),
      prisma.trek.findMany({
        select: {
          title: true,
          heroImage: true,
          staticMapImage: true,
          overview: true,
          galleryImages: { select: { imageId: true } },
        },
      }),
      prisma.page.findMany({
        select: { title: true, heroImage: true, ogImage: true, content: true },
      }),
      prisma.category.findMany({ select: { name: true, heroImage: true } }),
      prisma.author.findMany({ select: { name: true, avatar: true } }),
      prisma.teamMember.findMany({ select: { name: true, image: true } }),
      prisma.siteSetting.findMany({ select: { logo: true, authImage: true, defaultOgImage: true } }),
      prisma.homePageSettings.findMany({
        select: { heroImage: true, whyChooseUsBgImage: true, homeAboutImage: true },
      }),
    ]);

  const usedMap = new Map<string, UsedImageEntry>();

  for (const p of blogPosts) {
    collectImage(usedMap, p.heroImage, { type: "Blog Hero", label: p.title });
    collectImage(usedMap, p.ogImage, { type: "Blog OG", label: p.title });
    for (const src of extractContentImages(p.content)) {
      collectImage(usedMap, src, { type: "Blog Content", label: p.title });
    }
  }
  for (const t of treks) {
    collectImage(usedMap, t.heroImage, { type: "Trek Hero", label: t.title });
    collectImage(usedMap, t.staticMapImage, { type: "Trek Map", label: t.title });
    for (const src of extractContentImages(t.overview)) {
      collectImage(usedMap, src, { type: "Trek Content", label: t.title });
    }
    for (const g of t.galleryImages) {
      collectImage(usedMap, g.imageId, { type: "Trek Gallery", label: t.title });
    }
  }
  for (const p of pages) {
    collectImage(usedMap, p.heroImage, { type: "Page Hero", label: p.title });
    collectImage(usedMap, p.ogImage, { type: "Page OG", label: p.title });
    for (const src of extractContentImages(p.content)) {
      collectImage(usedMap, src, { type: "Page Content", label: p.title });
    }
  }
  for (const c of categories) collectImage(usedMap, c.heroImage, { type: "Category", label: c.name });
  for (const a of authors) collectImage(usedMap, a.avatar, { type: "Author", label: a.name });
  for (const m of teamMembers) collectImage(usedMap, m.image, { type: "Team", label: m.name });
  for (const s of siteSettings) {
    collectImage(usedMap, s.logo, { type: "Site", label: "Logo" });
    collectImage(usedMap, s.authImage, { type: "Site", label: "Auth Image" });
    collectImage(usedMap, s.defaultOgImage, { type: "Site", label: "Default OG" });
  }
  for (const h of homeSettings) {
    collectImage(usedMap, h.heroImage, { type: "Home", label: "Hero" });
    collectImage(usedMap, h.whyChooseUsBgImage, { type: "Home", label: "Why Choose Us BG" });
    collectImage(usedMap, h.homeAboutImage, { type: "Home", label: "About Image" });
  }

  const usedImages = [...usedMap.values()].sort((a, b) => a.name.localeCompare(b.name));

  const totalSize = sizeAgg._sum.filesize || 0;
  const formatSize = (bytes: number) => {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Media Library</h1>
          <p className="mt-1 text-sm text-slate-500">{totalFiles} files &middot; {formatSize(totalSize)}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-teal-50 p-2"><ImageIcon className="h-4 w-4 text-teal-600" /></div>
            <div>
              <p className="text-lg font-bold text-slate-900">{totalFiles}</p>
              <p className="text-xs text-slate-500">Total Files</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-blue-50 p-2">
              <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-lg font-bold text-slate-900">{totalImages}</p>
              <p className="text-xs text-slate-500">Images</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-amber-50 p-2">
              <svg className="h-4 w-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
              </svg>
            </div>
            <div>
              <p className="text-lg font-bold text-slate-900">{formatSize(totalSize)}</p>
              <p className="text-xs text-slate-500">Total Size</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-emerald-50 p-2">
              <svg className="h-4 w-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div>
              <p className="text-lg font-bold text-slate-900">{sizeAgg._avg.width ? `${Math.round(sizeAgg._avg.width)}px` : "—"}</p>
              <p className="text-xs text-slate-500">Avg. Width</p>
            </div>
          </div>
        </div>
      </div>

      {/* Media Client */}
      <AdminMediaClient
        media={JSON.parse(JSON.stringify(media))}
        totalFiles={totalFiles}
        usedImages={usedImages}
        currentPage={currentPage}
        totalPages={totalPages}
        search={search}
      />
    </div>
  );
}
