"use client";

import { createContext, useContext } from "react";

// Left-side photo shared by every auth page. The server layout resolves the
// image from Site Settings and provides it through this context so client
// auth pages don't need to hardcode or re-fetch it.
const AuthImageContext = createContext<string>("");

export function AuthImageProvider({
  imageUrl,
  children,
}: {
  imageUrl: string;
  children: React.ReactNode;
}) {
  return <AuthImageContext.Provider value={imageUrl}>{children}</AuthImageContext.Provider>;
}

export function useAuthImage(): string {
  return useContext(AuthImageContext);
}
