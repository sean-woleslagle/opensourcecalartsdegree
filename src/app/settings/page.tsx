"use client";

import Link from "next/link";
import { useFocusMode } from "@/components/FocusModeProvider";

export default function SettingsPage() {
  const {
    traditionalEnabled,
    setTraditionalEnabled,
    ready,
    label,
  } = useFocusMode();

  return (
    <div className="animate-rise pb-8">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
        <Link href="/" className="hover:text-ink">
          Home
        </Link>
        <span aria-hidden className="mx-1.5 text-mist">
          /
        </span>
        Settings
      </p>

      <h1
        className="mt-3 font-display text-3xl font-800 tracking-tight text-ink sm:text-4xl"
        style={{ fontWeight: 800 }}
      >
        Settings
      </h1>
      <p className="mt-2 max-w-md text-sm text-ink-soft sm:text-base">
        Choose how the Focus control works. You can change this anytime.
      </p>

      <section className="mt-8 border-t border-[var(--line)] pt-6">
        <h2
          className="font-display text-lg font-700 text-ink"
          style={{ fontWeight: 700 }}
        >
          Traditional work
        </h2>
        <p className="mt-1 max-w-md text-sm text-ink-soft">
          Drawing, boards, and other non-Blender checklist items. Turn this off
          to keep Focus on Blender only.
        </p>

        <label
          className={`mt-5 flex cursor-pointer items-start gap-3 ${
            ready ? "" : "opacity-60"
          }`}
        >
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 accent-[var(--accent)]"
            checked={traditionalEnabled}
            disabled={!ready}
            onChange={(e) => setTraditionalEnabled(e.target.checked)}
          />
          <span>
            <span className="block text-sm font-semibold text-ink">
              Show Traditional in Focus
            </span>
            <span className="mt-0.5 block text-sm text-ink-soft">
              {traditionalEnabled
                ? "Focus offers All, Blender, and Traditional. Default stays Blender."
                : "Focus stays on Blender only — Traditional stays hidden until you turn this on."}
            </span>
          </span>
        </label>

        <p className="mt-6 text-sm text-muted">
          Current focus:{" "}
          <span className="font-semibold text-ink-soft">{label}</span>
        </p>
      </section>
    </div>
  );
}
