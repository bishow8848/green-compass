import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";
import { compare } from "bcryptjs";
import { sendWelcomeEmail } from "./email";

class EmailNotVerifiedError extends CredentialsSignin {
  code = "email_not_verified";
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    newUser: "/signup",
  },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        });

        if (!user || !user.passwordHash) return null;

        const isValid = await compare(
          credentials.password as string,
          user.passwordHash
        );

        if (!isValid) return null;

        // Require email verification for credential login
        if (!user.emailVerified) {
          throw new EmailNotVerifiedError();
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
          role: user.role,
        };
      },
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  events: {
    // A guest booking provisions the account with a temporary password and
    // mustChangePassword = true, which the dashboard layout enforces by
    // redirecting to /change-password. Signing in with Google proves ownership
    // of the address without that password ever being used, so the forced
    // change is meaningless — it just traps the user on a form asking for a
    // password they were never required to learn. Clear the flag instead.
    async signIn({ user, account }) {
      // Google is an OIDC provider in Auth.js v5 (account.type === "oidc"),
      // so match "not the credentials provider" rather than a single type
      // string — that also covers any federated provider added later.
      if (!account || account.type === "credentials" || !user.id) return;
      await prisma.user.updateMany({
        where: { id: user.id, mustChangePassword: true },
        data: { mustChangePassword: false },
      });
    },
    async createUser({ user }) {
      if (!user.email) return;
      sendWelcomeEmail({
        name: user.name || "there",
        email: user.email,
      }).catch((error) => console.error("Failed to send Google signup welcome email:", error));
    },
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role || "customer";
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        (session.user as any).role = token.role as string;
      }
      return session;
    },
  },
});
