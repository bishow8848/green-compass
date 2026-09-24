import { PageLoading } from "@/components/loading/PageLoading";

// Lives in the (index) route group so it wraps only the /blog listing. A
// loading boundary above /blog/[slug] makes the response stream before the
// post is looked up, so notFound() could only answer "200 + noindex" (a soft
// 404) instead of a real 404. The same rule is why there is no app/loading.tsx.
export default function Loading() {
  return <PageLoading />;
}
