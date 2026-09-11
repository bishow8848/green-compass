import { PageLoading } from "@/components/loading/PageLoading";

// Lives in the (index) route group so it wraps only /about, not
// /about/team/[slug] — see app/(marketing)/blog/(index)/loading.tsx for why a
// loading boundary must never sit above a page that can call notFound().
export default function Loading() {
  return <PageLoading />;
}
