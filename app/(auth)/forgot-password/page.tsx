import { Mail } from "lucide-react";
import { AuthShell } from "@/components/auth/AuthShell";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <AuthShell as="main">
      <Mail className="h-9 w-9 text-primary" />

      <h1 className="mt-4 text-2xl font-bold text-foreground">Forgot your password?</h1>
      <p className="mt-2 text-sm text-text-muted">
        Enter the email used for your password account. We will send a unique temporary
        password.
      </p>

      <ForgotPasswordForm />
    </AuthShell>
  );
}
