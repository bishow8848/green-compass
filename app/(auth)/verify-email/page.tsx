"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { Mountain, CheckCircle2, XCircle } from "lucide-react";
import { useAuthImage } from "@/components/auth/AuthImageProvider";
import { DEFAULT_AUTH_IMAGE } from "@/lib/auth-image";

function VerifyEmailContent() {
  // Left-side photo — shared by all auth pages, set in Admin -> Site Settings -> Auth.
  const imageUrl = useAuthImage() || DEFAULT_AUTH_IMAGE;
  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  const message = searchParams.get("message");

  const isSuccess = status === "success";

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-4xl">
        <div
          className="overflow-hidden rounded-3xl bg-white"
          style={{ border: "1px solid var(--color-border)", boxShadow: "0 20px 60px rgba(0,0,0,0.06)" }}
        >
          <div className="grid gap-0 lg:grid-cols-2">
            {/* Left — bright photo, no overlay, no copy */}
            <div
              className="hidden bg-cover bg-center lg:block"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />

            {/* Right — status content */}
            <div className="p-8 text-center sm:p-10 lg:p-12">

              {isSuccess ? (
                <>
                  <CheckCircle2 className="mx-auto mt-6 h-16 w-16 text-green-500" />
                  <h1 className="mt-4 text-2xl font-bold text-foreground">Email verified</h1>
                  <p className="mt-2 text-sm text-text-muted">
                    Your email has been successfully verified. You can now sign in to your account
                    and start exploring the Himalayas.
                  </p>
                  <Link
                    href="/login"
                    className="mt-8 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                  >
                    Sign In
                  </Link>
                </>
              ) : (
                <>
                  <XCircle className="mx-auto mt-6 h-16 w-16 text-red-500" />
                  <h1 className="mt-4 text-2xl font-bold text-foreground">Verification failed</h1>
                  <p className="mt-2 text-sm text-text-muted">
                    {message || "Something went wrong. Please try signing up again."}
                  </p>
                  <Link
                    href="/signup"
                    className="mt-8 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                  >
                    Sign Up Again
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-background">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      }
    >
      <VerifyEmailContent />
    </Suspense>
  );
}