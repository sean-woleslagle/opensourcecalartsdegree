"use client";

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
  const { ready } = useProgress();
  const { filterModules, mode, label } = useFocusMode();
  const visible = filterModules(modules);

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
      {visible.map((mod) => {
        const items = [...mod.items].sort((a, b) => a.order - b.order);
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
