"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath, updateTag } from "next/cache";
import { auth } from "@/lib/auth";
import { invalidateCache, cacheKeys, nextCacheTag } from "@/lib/redis";
import { deleteFile } from "@/lib/cloudinary";

interface RegionInput {
  id?: string;
  name: string;
  categoryId: string;
}

export async function updateNavigationSettings(formData: FormData) {
  const session = await auth();
  if (!session || (session.user as any).role !== "admin") throw new Error("Unauthorized");

  const navigation = JSON.parse((formData.get("navigation") as string) || "[]");
  const categoryDropdownTreks = JSON.parse((formData.get("categoryDropdownTreks") as string) || "{}");
  const logo = (formData.get("logo") as string) || null;
  const previousLogo = (formData.get("previousLogo") as string) || null;

  const topBarContent = (formData.get("topBarContent") as string) || null;

  // If the logo changed, delete the old one from Cloudinary
  if (previousLogo && previousLogo !== logo) {
    try {
      await deleteFile(previousLogo);
    } catch (err) {
      console.error("Failed to delete old logo from Cloudinary:", err);
    }
  }

  await prisma.siteSetting.upsert({
    where: { id: "site-settings" },
    update: {
      logo,
      topBarContent,
      navigation: navigation.length > 0 ? JSON.stringify(navigation) : null,
      categoryDropdownTreks: Object.keys(categoryDropdownTreks).length > 0
        ? JSON.stringify(categoryDropdownTreks)
        : null,
    },
    create: {
      id: "site-settings",
      siteName: "Green Compass Treks",
      logo,
      topBarContent,
      navigation: navigation.length > 0 ? JSON.stringify(navigation) : null,
      categoryDropdownTreks: Object.keys(categoryDropdownTreks).length > 0
        ? JSON.stringify(categoryDropdownTreks)
        : null,
    },
  });

  // Drop the layout caches this save invalidates so the root layout refetches
  // them. Do NOT write the new values in directly: the root layout reads the
  // whole site-settings row (siteName, contact details, socialLinks, …) and
  // seeding the key with only the fields edited here would serve a truncated
  // row until the TTL expired. Invalidate only these two keys — NOT the full
  // layout:* pattern, which would also evict the untouched categories cache.
  await invalidateCache(cacheKeys.siteSettings);
  await invalidateCache(cacheKeys.dropdownTreks);
  updateTag(nextCacheTag(cacheKeys.siteSettings));
  updateTag(nextCacheTag(cacheKeys.dropdownTreks));

  // Categories themselves didn't change, so skip category:* invalidation.
  revalidatePath("/", "layout");
  revalidatePath("/admin/navigation");
}

export async function saveCategoryRegions(regions: RegionInput[]) {
  const session = await auth();
  if (!session || (session.user as any).role !== "admin") throw new Error("Unauthorized");

  // Get existing region IDs for the affected categories
  const categoryIds = [...new Set(regions.map((r) => r.categoryId))];

  // Delete regions that are no longer in the list
  const incomingIds = regions.filter((r) => r.id).map((r) => r.id!);
  await prisma.categoryRegion.deleteMany({
    where: {
      categoryId: { in: categoryIds },
      id: { notIn: incomingIds },
    },
  });

  // Upsert regions
  for (let i = 0; i < regions.length; i++) {
    const r = regions[i];
    if (r.id) {
      await prisma.categoryRegion.update({
        where: { id: r.id },
        data: { name: r.name, slug: r.name.toLowerCase().replace(/\s+/g, "-"), sortOrder: i },
      });
    } else {
      await prisma.categoryRegion.create({
        data: {
          name: r.name,
          slug: r.name.toLowerCase().replace(/\s+/g, "-"),
          categoryId: r.categoryId,
          sortOrder: i,
        },
      });
    }
  }

  // Only the regions cache is stale — invalidate that single key instead of the
  // full layout:* pattern (which would wipe site-settings unnecessarily).
  await invalidateCache(cacheKeys.allRegions);
  updateTag(nextCacheTag(cacheKeys.allRegions));
  revalidatePath("/admin/navigation");
  revalidatePath("/");
}
