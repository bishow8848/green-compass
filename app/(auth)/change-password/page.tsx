import { Lock } from "lucide-react";
import { AuthShell } from "@/components/auth/AuthShell";
import { ChangePasswordForm } from "@/components/auth/ChangePasswordForm";

export default function ChangePasswordPage() {
  return (
    <AuthShell as="main">
      <Lock className="h-9 w-9 text-primary" />
      <h1 className="mt-4 text-2xl font-bold text-foreground">Choose a new password</h1>
      <p className="mt-2 text-sm text-text-muted">
        Your emailed password was temporary. Change it before opening your dashboard.
      </p>
      <ChangePasswordForm />
    </AuthShell>
  );
}
