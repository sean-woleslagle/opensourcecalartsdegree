"use client";

import { useProgress } from "@/components/ProgressProvider";
import { DEFAULT_ALLOWED_EMAIL } from "@/lib/auth/allowlist";

export default function UnauthorizedPage() {
  const { user, signOut } = useProgress();

  return (
    <div className="mx-auto max-w-md pt-10">
      <h1
        className="font-display text-3xl font-800 tracking-tight text-ink"
        style={{ fontWeight: 800 }}
      >
        Not authorized
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
        This app is private.{" "}
        {user?.email ? (
          <>
            Signed in as <strong>{user.email}</strong>, which is not on the
            allowlist.
          </>
        ) : (
          <>Your account is not on the allowlist.</>
        )}{" "}
        Only <code className="text-xs">{DEFAULT_ALLOWED_EMAIL}</code> can use the
        curriculum.
      </p>
      <button
        type="button"
        onClick={() => void signOut()}
        className="mt-8 w-full rounded-md bg-ink px-4 py-2.5 text-sm font-semibold text-paper transition hover:bg-ink-soft"
      >
        Sign out
      </button>
    </div>
  );
}
