"use client";

import { program } from "@/data/curriculum";
import type { TrackId } from "@/data/types";
import { useProgress } from "./ProgressProvider";

export function TrackPicker({ deferred = false }: { deferred?: boolean }) {
  const { prefs, setPrimaryTrack } = useProgress();

  return (
    <section className="rounded-lg border border-[var(--line)] bg-paper/60 p-4 sm:p-5">
      <h2
        className="font-display text-base font-700 text-ink sm:text-lg"
        style={{ fontWeight: 700 }}
      >
        Primary track
      </h2>
      <p className="mt-1 text-sm text-muted">
        {deferred
          ? "Defer until Year 2 / around Term 3–4. Choosing highlights relevant items — nothing is hidden."
          : "One primary track. Track-relevant checklist items get a highlight; you can still browse everything."}
      </p>
      <div className="mt-3 flex flex-col gap-2">
        <label className="text-xs font-medium uppercase tracking-wide text-muted">
          Selection
          <select
            className="mt-1 w-full rounded-md border border-[var(--line)] bg-paper px-3 py-2 text-sm normal-case tracking-normal text-ink focus:border-accent focus:outline-none"
            value={prefs.primaryTrack ?? ""}
            onChange={(e) => {
              const v = e.target.value;
              void setPrimaryTrack(v ? (v as TrackId) : null);
            }}
          >
            <option value="">Not chosen yet</option>
            {program.tracks.map((t) => (
              <option key={t.id} value={t.id}>
                {t.id} — {t.name}
              </option>
            ))}
          </select>
        </label>
        {prefs.primaryTrack && (
          <p className="text-sm text-ink-soft">
            {
              program.tracks.find((t) => t.id === prefs.primaryTrack)
                ?.portfolioTarget
            }
          </p>
        )}
      </div>
    </section>
  );
}
