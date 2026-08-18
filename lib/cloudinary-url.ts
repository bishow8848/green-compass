// Shared Cloudinary URL helpers.
//
// NEXT_PUBLIC_* env vars are inlined by Next.js at build time. We resolve the
// cloud name once at module scope — module-scope evaluation is reliable in both
// server and client bundles — so pages never read `process.env` at render time.
// (Turbopack sometimes fails to inline `process.env.NEXT_PUBLIC_*` references
// used inline inside JSX, which throws "Cannot read properties of undefined
// (reading 'NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME')" at runtime.)
export const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dk7ggjvlw";

export const CLOUDINARY_BASE = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/`;
