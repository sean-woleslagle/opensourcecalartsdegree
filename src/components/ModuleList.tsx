"use client";

import { useMemo, useState } from "react";
import type { Module } from "@/data/types";
import { ChecklistItem } from "./ChecklistItem";
import { useFocusMode } from "./FocusModeProvider";
import { useProgress } from "./ProgressProvider";

export function ModuleList({
  modules,
  upNextId,
  emptyLabel,
}: {
  modules: Module[];
  upNextId?: string | null;
  /** Shown when the current focus mode filters everything out. */
  emptyLabel?: string;
}) {
  const { ready, getStatus } = useProgress();
  const { filterModules, mode, label } = useFocusMode();
  const [showDismissed, setShowDismissed] = useState(false);
  const visible = filterModules(modules);

  const dismissedCount = useMemo(() => {
    let n = 0;
    for (const mod of visible) {
      for (const item of mod.items) {
        if (getStatus(item.id) === "dismissed") n += 1;
      }
    }
    return n;
  }, [visible, getStatus]);

  if (visible.length === 0) {
    const fallback =
      emptyLabel ??
      (mode === "all"
        ? "Nothing here yet."
        : `Nothing in this section for ${label} yet.`);
    return (
      <p className="rounded-md border border-dashed border-[var(--line)] bg-paper-deep/40 px-4 py-8 text-center text-sm text-muted">
        {fallback}
      </p>
    );
  }

  return (
    <div className="space-y-8">
      {dismissedCount > 0 && (
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted">
            {dismissedCount} dismissed
            {!showDismissed ? " · hidden from list" : ""}
          </p>
          <button
            type="button"
            className="min-h-9 rounded-md px-2.5 text-sm font-medium text-accent underline-offset-2 hover:underline"
            onClick={() => setShowDismissed((v) => !v)}
            aria-pressed={showDismissed}
          >
            {showDismissed ? "Hide dismissed" : "Show dismissed"}
          </button>
        </div>
      )}

      {visible.map((mod) => {
        const items = [...mod.items]
          .sort((a, b) => a.order - b.order)
          .filter(
            (item) =>
              showDismissed || getStatus(item.id) !== "dismissed",
          );
        if (items.length === 0) return null;
        return (
          <section key={mod.id} id={mod.id}>
            <h3
              className="font-display text-lg font-700 text-ink"
              style={{ fontWeight: 700 }}
            >
              {mod.title}
            </h3>
            {mod.blurb && (
              <p className="mt-1 max-w-prose text-sm text-muted">{mod.blurb}</p>
            )}
            <ul className={`mt-3 ${ready ? "" : "opacity-60"}`}>
              {items.map((item) => (
                <ChecklistItem
                  key={item.id}
                  item={item}
                  isUpNext={upNextId === item.id}
                />
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
