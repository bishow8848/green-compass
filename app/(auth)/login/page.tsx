import Link from "next/link";
import { Mountain } from "lucide-react";
import { AuthShell } from "@/components/auth/AuthShell";
import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <AuthShell>
      <div className="mb-8 text-center lg:hidden">
        <Mountain className="mx-auto h-9 w-9 text-primary" />
      </div>

      <h1 className="text-2xl font-bold text-foreground">Welcome back</h1>
      <p className="mt-2 text-sm text-text-muted">
        Sign in to manage your bookings and account
      </p>

      <LoginForm />

      <p className="mt-6 text-center text-sm text-text-muted">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="font-medium text-primary hover:text-primary-dark">
          Sign up
        </Link>
      </p>
    </AuthShell>
  );
}
