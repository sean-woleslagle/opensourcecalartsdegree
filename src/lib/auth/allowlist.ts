import "server-only";

/**
 * Single-user allowlist — server-only. Never import this module from client
 * components; the fallback address must not ship in browser bundles.
 * Prefer ALLOWED_EMAIL on Vercel / .env.local (not NEXT_PUBLIC_*).
 */
const FALLBACK_ALLOWED_EMAIL = "jacx92@gmail.com";

export function getAllowedEmail(): string {
  const fromEnv = process.env.ALLOWED_EMAIL?.trim();
  return (fromEnv || FALLBACK_ALLOWED_EMAIL).toLowerCase();
}

export function isEmailAllowed(email: string | null | undefined): boolean {
  if (!email) return false;
  return email.trim().toLowerCase() === getAllowedEmail();
}
