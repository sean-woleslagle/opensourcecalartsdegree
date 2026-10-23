"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useProgress } from "./ProgressProvider";

export function AppHeader() {
  const pathname = usePathname();
  const { user, mode, signOut, ready } = useProgress();
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[color-mix(in_oklab,var(--paper)_88%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="font-display text-sm font-700 tracking-tight text-ink sm:text-base"
          style={{ fontWeight: 700 }}
        >
          {isHome ? (
            <span className="sr-only">Home</span>
          ) : (
            <span className="inline-flex items-center gap-1.5">
              <span aria-hidden className="text-accent">
                ←
              </span>
              CalArts Degree
            </span>
          )}
          {isHome && <span aria-hidden>CalArts Degree</span>}
        </Link>

        <div className="flex items-center gap-2 text-xs text-muted sm:text-sm">
          {ready && mode === "local" && (
            <span
              className="hidden rounded-sm bg-paper-deep px-2 py-1 sm:inline"
              title="Progress saved on this device until you sign in"
            >
              Local
            </span>
          )}
          {user ? (
            <button
              type="button"
              onClick={() => void signOut()}
              className="rounded-sm px-2 py-1 text-ink-soft underline-offset-2 hover:underline"
            >
              Sign out
            </button>
          ) : (
            <Link
              href="/login"
              className="rounded-sm bg-ink px-2.5 py-1.5 font-medium text-paper transition hover:bg-ink-soft"
            >
              Sign in
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
