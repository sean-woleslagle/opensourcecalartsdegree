"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FocusModeToggle } from "./FocusModeToggle";
import { useProgress } from "./ProgressProvider";

export function AppHeader() {
  const pathname = usePathname();
  const { user, signOut, ready, authorized } = useProgress();
  const isHome = pathname === "/";
  const isAuthShell =
    pathname === "/login" || pathname === "/unauthorized";
  const allowed = authorized;
  const showFocus = allowed && !isAuthShell;

  return (
    <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[color-mix(in_oklab,var(--paper)_88%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-2 px-4 py-3 sm:gap-3 sm:px-6">
        {isAuthShell || !allowed ? (
          <span
            className="font-display text-sm font-700 tracking-tight text-ink sm:text-base"
            style={{ fontWeight: 700 }}
          >
            CalArts Degree
          </span>
        ) : (
          <Link
            href="/"
            className="shrink-0 font-display text-sm font-700 tracking-tight text-ink sm:text-base"
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
        )}

        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 text-xs text-muted sm:gap-3 sm:text-sm">
          {showFocus && <FocusModeToggle />}
          {showFocus && (
            <Link
              href="/settings"
              aria-label="Settings"
              title="Settings"
              className={`inline-flex shrink-0 items-center gap-1.5 rounded-sm px-1.5 py-1 text-ink-soft hover:text-ink ${
                pathname === "/settings" ? "text-ink" : ""
              }`}
            >
              <svg
                aria-hidden
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.6.86 1 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
              </svg>
              <span className="hidden sm:inline">Settings</span>
            </Link>
          )}
          {ready && user && allowed && (
            <button
              type="button"
              onClick={() => void signOut()}
              className="shrink-0 rounded-sm px-2 py-1 text-ink-soft underline-offset-2 hover:underline"
            >
              Sign out
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
