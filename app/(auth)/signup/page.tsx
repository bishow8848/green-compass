import Link from "next/link";
import { CheckCircle2, Mountain } from "lucide-react";
import { AuthShell } from "@/components/auth/AuthShell";
import { SignupFlow } from "@/components/auth/SignupFlow";
import { SignupForm } from "@/components/auth/SignupForm";
import { Reveal } from "@/components/motion";

export default function SignupPage() {
  return (
    <SignupFlow done={<VerificationMessage />}>
      <AuthShell>
        <div className="mb-8 text-center lg:hidden">
          <Mountain className="mx-auto h-9 w-9 text-primary" />
        </div>

        <h1 className="text-2xl font-bold text-foreground">Create an account</h1>
        <p className="mt-2 text-sm text-text-muted">
          Join us and start your Himalayan adventure
        </p>

        <SignupForm />

        <p className="mt-6 text-center text-sm text-text-muted">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-primary hover:text-primary-dark">
            Sign in
          </Link>
        </p>
      </AuthShell>
    </SignupFlow>
  );
}

/** The page shown in place of the form once the account exists. */
function VerificationMessage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md">
        <Reveal
          from="scale"
          className="rounded-3xl bg-white p-8 text-center sm:p-10"
          style={{ border: "1px solid var(--color-border)", boxShadow: "0 20px 60px rgba(0,0,0,0.06)" }}
        >
          <Mountain className="mx-auto h-9 w-9 text-primary" />
          <Reveal as="span" from="pop" delay={0.2} className="mt-6 inline-flex">
            <CheckCircle2 className="mx-auto h-16 w-16 text-green-500" />
          </Reveal>
          <h1 className="mt-4 text-2xl font-bold text-foreground">Account Created</h1>
          <p className="mt-4 text-sm leading-relaxed text-text-muted">
            We&apos;ve sent a verification email to your inbox. Please check your email and click the
            verification link to activate your account before signing in.
          </p>
          <div className="mt-6 rounded-lg bg-amber-50 p-4 text-left text-sm text-amber-800">
            <p className="font-medium">Didn&apos;t receive the email?</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Check your spam/junk folder</li>
              <li>Make sure you entered the correct email address</li>
              <li>The link expires in 24 hours</li>
            </ul>
          </div>
          <Link
            href="/login"
            className="mt-8 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Go to Sign In
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
