"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { invalidateLegacyRedirectsCache, normalizeLegacyPath } from "@/lib/legacy-redirects";

type RedirectPayload = {
  oldPath: string;
  newPath: string;
  permanent: boolean;
  active: boolean;
};

function parseAndValidate(formData: FormData): RedirectPayload {
  const oldPath = normalizeLegacyPath((formData.get("oldPath") as string) || "");
  const newPath = ((formData.get("newPath") as string) || "").trim();
  const permanent = formData.get("permanent") === "on";
  const active = formData.get("active") === "on";

  if (!oldPath || oldPath === "/") {
    throw new Error("Old URL must be a non-root path like /abc");
  }
  if (!newPath) {
    throw new Error("New URL is required");
  }
  if (!newPath.startsWith("/")) {
    throw new Error("New URL must start with / (e.g. /treks/abc)");
  }
  if (oldPath === normalizeLegacyPath(newPath)) {
    throw new Error("Old URL and New URL cannot be the same");
  }

  return { oldPath, newPath, permanent, active };
}

async function requireAdmin() {
  const session = await auth();
  if (!session || (session.user as any).role !== "admin") throw new Error("Unauthorized");
}

async function afterRedirectChange() {
  invalidateLegacyRedirectsCache();
  revalidatePath("/admin/redirects");
}

export async function createRedirect(formData: FormData) {
  await requireAdmin();
  const data = parseAndValidate(formData);
  await prisma.legacyRedirect.create({ data });
  await afterRedirectChange();
  redirect("/admin/redirects");
}

export async function updateRedirect(id: string, formData: FormData) {
  await requireAdmin();
  const data = parseAndValidate(formData);
  await prisma.legacyRedirect.update({ where: { id }, data });
  await afterRedirectChange();
  redirect("/admin/redirects");
}

export async function deleteRedirect(id: string) {
  await requireAdmin();
  await prisma.legacyRedirect.delete({ where: { id } });
  await afterRedirectChange();
  redirect("/admin/redirects");
}
