import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { AuthorForm } from "../author-form";

export default async function EditAuthorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const author = await prisma.author.findUnique({ where: { id } });
  if (!author) notFound();

  return (
    <div className="p-6">
      <AuthorForm mode="edit" author={author} />
    </div>
  );
}
