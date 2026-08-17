"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";
import { useAuthImage } from "@/components/auth/AuthImageProvider";
import { DEFAULT_AUTH_IMAGE } from "@/lib/auth-image";

export default function ChangePasswordPage() {
  // Left-side photo — shared by all auth pages, set in Admin -> Site Settings -> Auth.
  const imageUrl = useAuthImage() || DEFAULT_AUTH_IMAGE;
  const router = useRouter();
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{
    currentPassword?: string[];
    newPassword?: string[];
  }>({});
  const [saving, setSaving] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError("");
    setFieldErrors({});
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/auth/change-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        currentPassword: form.get("currentPassword"),
        newPassword: form.get("newPassword"),
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      if (data.details && typeof data.details === "object") {
        setFieldErrors(data.details);
      }
      setError(
        data.details
          ? "Please correct the highlighted password fields."
          : typeof data.error === "string"
          ? data.error
          : "Unable to change your password"
      );
      setSaving(false);
      return;
    }
    router.replace("/dashboard");
    router.refresh();
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
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

            {/* Right — form */}
            <div className="p-8 sm:p-10 lg:p-12">
              <Lock className="h-9 w-9 text-primary" />
              <h1 className="mt-4 text-2xl font-bold text-foreground">Choose a new password</h1>
              <p className="mt-2 text-sm text-text-muted">
                Your emailed password was temporary. Change it before opening your dashboard.
              </p>
              <form onSubmit={submit} className="mt-6 space-y-4">
                <label className="block text-sm font-medium text-foreground">
                  Temporary password
                  <input
                    name="currentPassword"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="mt-1 w-full rounded-lg border border-border px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  {fieldErrors.currentPassword?.map((message) => (
                    <span key={message} className="mt-1 block text-xs text-error">
                      {message}
                    </span>
                  ))}
                </label>
                <label className="block text-sm font-medium text-foreground">
                  New password
                  <input
                    name="newPassword"
                    type="password"
                    required
                    minLength={10}
                    autoComplete="new-password"
                    className="mt-1 w-full rounded-lg border border-border px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <span className="mt-1 block text-xs text-text-muted">
                    Use at least 10 characters, including uppercase, lowercase, and a number.
                  </span>
                  {fieldErrors.newPassword?.map((message) => (
                    <span key={message} className="mt-1 block text-xs text-error">
                      {message}
                    </span>
                  ))}
                </label>
                {error && <p className="text-sm text-error">{error}</p>}
                <button
                  type="submit"
                  disabled={saving}
                  className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {saving ? "Saving..." : "Change password"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}