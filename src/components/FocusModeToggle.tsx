"use client";

import type { FocusMode } from "@/lib/focusMode";
import { useFocusMode } from "./FocusModeProvider";

export function FocusModeToggle() {
  const { mode, setMode, ready, availableModes, traditionalEnabled } =
    useFocusMode();

  // Traditional off → only Blender; no All/Traditional to tempt a switch.
  if (!traditionalEnabled) {
    return (
      <div
        className="flex items-center gap-2"
        aria-label="Daily focus"
      >
        <span className="hidden text-[10px] font-semibold uppercase tracking-[0.14em] text-muted sm:inline">
          Focus
        </span>
        <span
          className={`rounded-md border border-[var(--line)] bg-ink px-2.5 py-1 text-[11px] font-semibold text-[var(--paper)] sm:text-xs ${
            ready ? "" : "opacity-60"
          }`}
        >
          Blender
        </span>
      </div>
    );
  }

  return (
    <div
      className="flex items-center gap-2"
      role="group"
      aria-label="Daily focus"
    >
      <span className="hidden text-[10px] font-semibold uppercase tracking-[0.14em] text-muted sm:inline">
        Focus
      </span>
      <div
        className={`inline-flex rounded-md border border-[var(--line)] bg-paper-deep/70 p-0.5 ${
          ready ? "" : "opacity-60"
        }`}
      >
        {availableModes.map((opt) => {
          const active = mode === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              disabled={!ready}
              aria-pressed={active}
              onClick={() => setMode(opt.value as FocusMode)}
              className={`rounded-sm px-2 py-1 text-[11px] font-semibold transition sm:px-2.5 sm:text-xs ${
                active
                  ? "bg-ink text-[var(--paper)]"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
