"use client";

import type { Module } from "@/data/types";
import { ChecklistItem } from "./ChecklistItem";
import { useProgress } from "./ProgressProvider";

export function ModuleList({
  modules,
  upNextId,
}: {
  modules: Module[];
  upNextId?: string | null;
}) {
  const { ready } = useProgress();

  return (
    <div className="space-y-8">
      {modules.map((mod) => {
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
