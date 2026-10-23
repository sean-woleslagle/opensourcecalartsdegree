"use client";

import { useProgress } from "@/components/ProgressProvider";

export default function UnauthorizedPage() {
  const { signOut } = useProgress();

  return (
    <div className="mx-auto max-w-md pt-10">
      <h1
        className="font-display text-3xl font-800 tracking-tight text-ink"
        style={{ fontWeight: 800 }}
      >
        Not authorized
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
        This account isn’t authorized. Sign out and use your allowed account if
        you have access.
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
