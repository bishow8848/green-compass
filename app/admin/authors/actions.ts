"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { invalidateCachePattern, cacheKeys } from "@/lib/redis";
import { deleteFile } from "@/lib/cloudinary";

export async function createAuthor(formData: FormData) {
  const session = await auth();
  if (!session || (session.user as any).role !== "admin") throw new Error("Unauthorized");

  await prisma.author.create({
    data: {
      name: formData.get("name") as string,
      slug: formData.get("slug") as string,
      bio: formData.get("bio") as string || null,
      avatar: formData.get("avatar") as string || null,
      role: formData.get("role") as string || null,
      socialLinks: formData.get("socialLinks") as string || null,
    },
  });

  await invalidateCachePattern(cacheKeys.pattern.blog);
  await invalidateCachePattern(cacheKeys.pattern.author);
  revalidatePath("/", "layout");
  redirect("/admin/authors");
}

export async function updateAuthor(id: string, formData: FormData) {
  const session = await auth();
  if (!session || (session.user as any).role !== "admin") throw new Error("Unauthorized");

  const currentAuthor = await prisma.author.findUnique({
    where: { id },
    select: { avatar: true },
  });

  const newAvatar = formData.get("avatar") as string || null;

  if (currentAuthor?.avatar && currentAuthor.avatar !== newAvatar) {
    deleteFile(currentAuthor.avatar).catch(() => {});
  }

  await prisma.author.update({
    where: { id },
    data: {
      name: formData.get("name") as string,
      slug: formData.get("slug") as string,
      bio: formData.get("bio") as string || null,
      avatar: newAvatar,
      role: formData.get("role") as string || null,
      socialLinks: formData.get("socialLinks") as string || null,
    },
  });

  await invalidateCachePattern(cacheKeys.pattern.blog);
  await invalidateCachePattern(cacheKeys.pattern.author);
  revalidatePath("/", "layout");
  redirect("/admin/authors");
}

export async function deleteAuthor(id: string) {
  const session = await auth();
  if (!session || (session.user as any).role !== "admin") throw new Error("Unauthorized");

  const author = await prisma.author.findUnique({
    where: { id },
    select: { avatar: true, slug: true },
  });

  if (author?.avatar) {
    deleteFile(author.avatar).catch(() => {});
  }

  // Unlink blog posts that reference this author
  await prisma.blogPost.updateMany({
    where: { authorSlug: author?.slug },
    data: { authorSlug: null },
  });

  await prisma.author.delete({ where: { id } });

  await invalidateCachePattern(cacheKeys.pattern.blog);
  await invalidateCachePattern(cacheKeys.pattern.author);
  revalidatePath("/", "layout");
  revalidatePath("/blog");
  redirect("/admin/authors");
}
