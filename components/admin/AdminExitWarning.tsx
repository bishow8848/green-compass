"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const WARNING_PATHS = [
  "/admin/treks",
  "/admin/blog",
  "/admin/page-manager",
  "/admin/pages",
] as const;

function shouldWarnBeforeExit(pathname: string | null) {
  return Boolean(
    pathname &&
      WARNING_PATHS.some(
        (path) => pathname === path || pathname.startsWith(`${path}/`),
      ),
  );
}

export function AdminExitWarning() {
  const pathname = usePathname();

  useEffect(() => {
    if (!shouldWarnBeforeExit(pathname)) return;

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "Information might not be saved.";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [pathname]);

  return null;
}
