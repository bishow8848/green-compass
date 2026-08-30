import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

import { Products } from "./collections/Products";
import { Categories } from "./collections/Categories";
import { BlogPosts } from "./collections/BlogPosts";
import { Pages } from "./collections/Pages";
import { Media } from "./collections/Media";
import { PayloadUsers } from "./collections/PayloadUsers";
import { Settings } from "./globals/Settings";

export default buildConfig({
  // Server URL for admin panel and API
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || "https://greencompasstreks.com",

  // Secret for authentication (required by Payload)
  secret: process.env.PAYLOAD_SECRET || "dev-payload-secret-change-in-production",

  // Admin configuration
  admin: {
    user: "payload-users",
    meta: {
      titleSuffix: " | Green Compass Treks CMS",
    },
  },

  // Database adapter — shared PostgreSQL with Prisma.
  // node-postgres defaults to max: 10, which on top of Prisma's own pool is
  // enough to exhaust the Supabase pooler on its own. The CMS is low-traffic
  // (admins only), so it gets a small pool and short idle timeout.
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "",
      max: Math.max(1, Number(process.env.PAYLOAD_POOL_MAX ?? 3)),
      idleTimeoutMillis: 10_000,
      connectionTimeoutMillis: 10_000,
    },
  }),

  // Rich text editor
  editor: lexicalEditor(),

  // Collections
  collections: [PayloadUsers, Products, Categories, BlogPosts, Pages, Media],

  // Globals
  globals: [Settings],

  // Plugins (none yet)
  graphQL: {
    disable: true,
  },
});
