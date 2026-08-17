"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { useAuthImage } from "@/components/auth/AuthImageProvider";
import { DEFAULT_AUTH_IMAGE } from "@/lib/auth-image";

export default function ForgotPasswordPage() {
  // Left-side photo — shared by all auth pages, set in Admin -> Site Settings -> Auth.
  const imageUrl = useAuthImage() || DEFAULT_AUTH_IMAGE;
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setError("");
    setEmailError("");
    setMessage("");

    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (!response.ok) {
        setEmailError(data.details?.email?.[0] || "");
        setError(data.error || "Unable to send a temporary password");
        return;
      }
      setMessage(data.message);
    } catch {
      setError("Unable to send the request. Please try again.");
    } finally {
      setSending(false);
    }
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
              <Mail className="h-9 w-9 text-primary" />

              <h1 className="mt-4 text-2xl font-bold text-foreground">Forgot your password?</h1>
              <p className="mt-2 text-sm text-text-muted">
                Enter the email used for your password account. We will send a unique temporary
                password.
              </p>

              {message ? (
                <div className="mt-6">
                  <p className="rounded-lg bg-emerald-50 p-4 text-sm text-emerald-800">{message}</p>
                  <Link
                    href="/login"
                    className="mt-5 inline-flex items-center gap-2 font-semibold text-primary"
                  >
                    <ArrowLeft className="h-4 w-4" /> Return to sign in
                  </Link>
                </div>
              ) : (
                <form onSubmit={submit} className="mt-6 space-y-4">
                  <label className="block text-sm font-medium text-foreground">
                    Email
                    <input
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                      autoComplete="email"
                      className="mt-1 w-full rounded-lg border border-border px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    {emailError && (
                      <span className="mt-1 block text-xs text-error">{emailError}</span>
                    )}
                  </label>
                  {error && <p className="text-sm text-error">{error}</p>}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {sending ? "Sending..." : "Send temporary password"}
                  </button>
                  <Link
                    href="/login"
                    className="flex items-center justify-center gap-2 text-sm text-text-muted hover:text-foreground"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back to sign in
                  </Link>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}