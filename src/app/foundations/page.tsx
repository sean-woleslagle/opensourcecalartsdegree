"use client";

import { program } from "@/data/curriculum";
import { ModuleList } from "@/components/ModuleList";
import { ProgressMeter } from "@/components/ProgressMeter";
import { useFocusMode } from "@/components/FocusModeProvider";
import { useProgress } from "@/components/ProgressProvider";
import { findUpNextId } from "@/lib/upNext";

export default function FoundationsPage() {
  const { doneCount, progress } = useProgress();
  const { filterItemIds, mode, label } = useFocusMode();
  const ids = filterItemIds(program.foundations);
  const upNextId = findUpNextId(progress, {
    itemIds: ids,
    focusMode: mode,
  });

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
        Reference
      </p>
      <h1
        className="mt-2 font-display text-3xl font-800 tracking-tight text-ink sm:text-4xl"
        style={{ fontWeight: 800 }}
      >
        Foundational material
      </h1>
      <p className="mt-2 max-w-prose text-ink-soft">
        Sit beside the main path. Use as needed — weighting shifts as you go.
      </p>
      <div className="mt-6">
        <ProgressMeter
          done={doneCount(ids)}
          total={ids.length}
          label={
            mode === "all"
              ? "Foundational material"
              : `${label} foundational material`
          }
        />
      </div>
      <div className="mt-10">
        <ModuleList
          modules={program.foundations}
          upNextId={upNextId}
          emptyLabel={`Nothing in foundational material for ${label} yet.`}
        />
      </div>
    </div>
  );
}
