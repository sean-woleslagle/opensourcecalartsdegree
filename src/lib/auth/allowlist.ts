/** Single-user allowlist. Override with ALLOWED_EMAIL (server) or NEXT_PUBLIC_ALLOWED_EMAIL. */
export const DEFAULT_ALLOWED_EMAIL = "jacx92@gmail.com";

export function getAllowedEmail(): string {
  const fromEnv =
    process.env.ALLOWED_EMAIL?.trim() ||
    process.env.NEXT_PUBLIC_ALLOWED_EMAIL?.trim();
  return (fromEnv || DEFAULT_ALLOWED_EMAIL).toLowerCase();
}

export function isEmailAllowed(email: string | null | undefined): boolean {
  if (!email) return false;
  return email.trim().toLowerCase() === getAllowedEmail();
}
