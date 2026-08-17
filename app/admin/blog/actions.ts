"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { invalidateCachePattern, cacheKeys } from "@/lib/redis";
import { deleteFile } from "@/lib/cloudinary";

async function invalidateBlogCache(slug?: string) {
  await Promise.all([
    invalidateCachePattern(cacheKeys.pattern.blog),
    invalidateCachePattern(cacheKeys.pattern.home),
  ]);
  revalidatePath("/", "layout");
  if (slug) {
    revalidatePath(`/blog/${slug}`, "page");
  }
}

export async function createPost(formData: FormData) {
  const session = await auth();
  if (!session || (session.user as any).role !== "admin") throw new Error("Unauthorized");

  // Resolve author name from authorSlug
  const authorSlug = formData.get("authorSlug") as string || null;
  let authorName = formData.get("author") as string || "";
  if (authorSlug) {
    const author = await prisma.author.findUnique({ where: { slug: authorSlug }, select: { name: true } });
    if (author) authorName = author.name;
  }

  await prisma.blogPost.create({
    data: {
      title: formData.get("title") as string,
      slug: formData.get("slug") as string,
      author: authorName,
      authorSlug,
      excerpt: formData.get("excerpt") as string || "",
      content: formData.get("content") as string || "",
      heroImage: formData.get("heroImage") as string || null,
      tags: formData.get("tags") as string || "[]",
      status: formData.get("status") as string || "draft",
      metaTitle: formData.get("metaTitle") as string || null,
      metaDescription: formData.get("metaDescription") as string || null,
      keywords: formData.get("keywords") as string || null,
      ogImage: formData.get("ogImage") as string || null,
      faqs: formData.get("faqs") as string || "[]",
      publishedDate: new Date(),
    },
  });
  await invalidateBlogCache(formData.get("slug") as string || undefined);
  redirect("/admin/blog");
}

export async function updatePost(id: string, formData: FormData) {
  const session = await auth();
  if (!session || (session.user as any).role !== "admin") throw new Error("Unauthorized");

  // Fetch current post to compare images and detect publish transitions
  const currentPost = await prisma.blogPost.findUnique({
    where: { id },
    select: { heroImage: true, ogImage: true, status: true, faqs: true },
  });

  const newHeroImage = formData.get("heroImage") as string || null;
  const newOgImage = formData.get("ogImage") as string || null;
  const newStatus = formData.get("status") as string || "draft";
  // When a post is being published (or re-published after being set back to
  // draft), stamp the published date with the actual publish day rather than
  // the day it was originally drafted.
  const isBeingPublished =
    currentPost?.status !== "published" && newStatus === "published";

  // Delete old heroImage if changed
  if (currentPost?.heroImage && currentPost.heroImage !== newHeroImage) {
    deleteFile(currentPost.heroImage).catch(() => {});
  }
  // Delete old ogImage if changed
  if (currentPost?.ogImage && currentPost.ogImage !== newOgImage) {
    deleteFile(currentPost.ogImage).catch(() => {});
  }

  // Resolve author name from authorSlug
  const authorSlug = formData.get("authorSlug") as string || null;
  let authorName = formData.get("author") as string || "";
  if (authorSlug) {
    const author = await prisma.author.findUnique({ where: { slug: authorSlug }, select: { name: true } });
    if (author) authorName = author.name;
  }

  await prisma.blogPost.update({
    where: { id },
    data: {
      title: formData.get("title") as string,
      slug: formData.get("slug") as string,
      author: authorName,
      authorSlug,
      excerpt: formData.get("excerpt") as string || "",
      content: formData.get("content") as string || "",
      heroImage: newHeroImage,
      tags: formData.get("tags") as string || "[]",
      status: newStatus,
      metaTitle: formData.get("metaTitle") as string || null,
      metaDescription: formData.get("metaDescription") as string || null,
      keywords: formData.get("keywords") as string || null,
      ogImage: newOgImage,
      // The admin form no longer edits the legacy faqs field (FAQs now live in
      // the rich text content as inline FAQ blocks). Preserve the existing
      // value when the form omits it, so older posts keep their FAQs.
      faqs: (formData.get("faqs") as string | null) || currentPost?.faqs || "[]",
      ...(isBeingPublished ? { publishedDate: new Date() } : {}),
    },
  });
  await invalidateBlogCache(formData.get("slug") as string || undefined);
  redirect("/admin/blog");
}

export async function deletePost(id: string) {
  const session = await auth();
  if (!session || (session.user as any).role !== "admin") throw new Error("Unauthorized");

  const post = await prisma.blogPost.findUnique({
    where: { id },
    select: { heroImage: true, ogImage: true },
  });

  // Delete Cloudinary images
  if (post) {
    const imagesToDelete = [post.heroImage, post.ogImage].filter(Boolean) as string[];
    await Promise.allSettled(imagesToDelete.map((pubId) => deleteFile(pubId)));
  }

  await prisma.blogPost.delete({ where: { id } });
  await invalidateBlogCache();
  revalidatePath("/blog");
  revalidatePath("/", "layout");
  redirect("/admin/blog");
}
