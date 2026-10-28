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
              className={`inline-flex shrink-0 items-center justify-center rounded-sm p-1.5 text-ink-soft hover:text-ink ${
                pathname === "/settings" ? "text-ink" : ""
              }`}
            >
              <svg
                aria-hidden
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <span className="sr-only">Settings</span>
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
