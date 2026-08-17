import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const post = await prisma.blogPost.findUnique({
  where: { id: "cmsef0fit00014wfjpudo4nz6" },
  select: { id: true, title: true, slug: true, status: true, faqs: true, content: true },
});
console.log("TITLE:", post?.title);
console.log("SLUG:", post?.slug);
console.log("STATUS:", post?.status);
console.log("FAQS:", post?.faqs);
console.log("CONTENT_HAS_INLINE_FAQ_BLOCKS:", post?.content?.includes("data-faq"));
console.log("CONTENT_LEN:", post?.content?.length);
