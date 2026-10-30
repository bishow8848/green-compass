import Link from "next/link";
import { CheckCircle2, XCircle } from "lucide-react";
import { AuthShell } from "@/components/auth/AuthShell";
import { Reveal } from "@/components/motion";

export default async function VerifyEmailPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; message?: string }>;
}) {
  // The verification link lands here as ?status=success, or with a ?message.
  const { status, message } = await searchParams;
  const isSuccess = status === "success";

  return (
    <AuthShell panelClassName="p-8 text-center sm:p-10 lg:p-12">
      {isSuccess ? (
        <>
          <Reveal as="span" from="pop" delay={0.25} className="mt-6 inline-flex">
            <CheckCircle2 className="mx-auto h-16 w-16 text-green-500" />
          </Reveal>
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
          <Reveal as="span" from="pop" delay={0.25} className="mt-6 inline-flex">
            <XCircle className="mx-auto h-16 w-16 text-red-500" />
          </Reveal>
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
    </AuthShell>
  );
}
