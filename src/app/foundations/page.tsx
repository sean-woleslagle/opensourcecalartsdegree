"use client";

import { program } from "@/data/curriculum";
import { ModuleList } from "@/components/ModuleList";
import { ProgressMeter } from "@/components/ProgressMeter";
import { useProgress } from "@/components/ProgressProvider";
import { findUpNextId } from "@/lib/upNext";

export default function FoundationsPage() {
  const { doneCount, progress, prefs } = useProgress();
  const ids = program.foundations.flatMap((m) => m.items.map((i) => i.id));
  const upNextId = findUpNextId(progress, { itemIds: ids });

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
        Always-on
      </p>
      <h1
        className="mt-2 font-display text-3xl font-800 tracking-tight text-ink sm:text-4xl"
        style={{ fontWeight: 800 }}
      >
        Foundations
      </h1>
      <p className="mt-2 max-w-prose text-ink-soft">
        Sit beside every term. Weighting shifts after specialization — keep the cadence.
      </p>
      <div className="mt-6">
        <ProgressMeter
          done={doneCount(ids)}
          total={ids.length}
          label="Foundations"
        />
      </div>
      <div className="mt-10">
        <ModuleList
          modules={program.foundations}
          upNextId={upNextId}
          primaryTrack={prefs.primaryTrack}
        />
      </div>
    </div>
  );
}
