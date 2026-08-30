import "dotenv/config";
import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";

/**
 * Applies SEED_ADMIN_EMAIL / SEED_ADMIN_PASSWORD from .env to the real admin
 * account. Those vars are otherwise inert — nothing else in the codebase reads
 * them — so editing .env alone never changed the credentials you log in with.
 */
const email = process.env.SEED_ADMIN_EMAIL?.trim();
const password = process.env.SEED_ADMIN_PASSWORD;

if (!email || !password) {
  throw new Error("SEED_ADMIN_EMAIL and SEED_ADMIN_PASSWORD must be set in .env");
}

const existingAdmin = await prisma.user.findFirst({
  where: { role: "admin" },
  orderBy: { createdAt: "asc" },
});

const passwordHash = await hash(password, 12);

const admin = existingAdmin
  ? await prisma.user.update({
      where: { id: existingAdmin.id },
      // Admins are created by hand, so mark the address verified — the login
      // path rejects users whose emailVerified is null.
      data: { email, passwordHash, emailVerified: new Date() },
    })
  : await prisma.user.create({
      data: { email, passwordHash, name: "Admin", role: "admin", emailVerified: new Date() },
    });

console.log(`${existingAdmin ? "Updated" : "Created"} admin: ${admin.email} (id ${admin.id})`);
await prisma.$disconnect();
