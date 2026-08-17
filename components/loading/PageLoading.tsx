import { LoadingLogo } from "@/components/LoadingLogo";
import { Fakts } from "@/components/loading/Fakts";

/**
 * Loading screen shown while a route's server data is being fetched or
 * regenerated (ISR) — covers both first visits during streaming and
 * client-side navigations. Reuses the existing LoadingLogo + Fakts pieces.
 */
export function PageLoading() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-md flex-col items-center justify-center gap-8 px-4 py-16">
      <div className="flex flex-col items-center gap-4">
        <LoadingLogo />
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-bounce rounded-full bg-primary/50 [animation-delay:-0.3s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-primary/50 [animation-delay:-0.15s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-primary/50" />
        </div>
      </div>
      <Fakts />
    </div>
  );
}
