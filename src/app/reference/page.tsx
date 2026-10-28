"use client";

import { program } from "@/data/curriculum";
import { ModuleList } from "@/components/ModuleList";
import { ProgressMeter } from "@/components/ProgressMeter";
import { useFocusMode } from "@/components/FocusModeProvider";
import { useProgress } from "@/components/ProgressProvider";
import { findUpNextId } from "@/lib/upNext";

export default function ReferencePage() {
  const { handledCount, progress } = useProgress();
  const { filterItemIds, mode, label } = useFocusMode();
  const ids = filterItemIds(program.reference);
  const upNextId = findUpNextId(progress, {
    itemIds: ids,
    focusMode: mode,
    roadmapOnly: false,
  });

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
        Shelf · not on the main roadmap
      </p>
      <h1
        className="mt-2 font-display text-3xl font-800 tracking-tight text-ink sm:text-4xl"
        style={{ fontWeight: 800 }}
      >
        Reference
      </h1>
      <p className="mt-2 max-w-prose text-ink-soft">
        Launch Pad and the Blender Secrets ebook — refreshers off the main
        course path. Mark items reference (or done) as you use them.
      </p>
      <div className="mt-6">
        <ProgressMeter
          done={handledCount(ids)}
          total={ids.length}
          label={mode === "all" ? "Reference" : `${label} reference`}
        />
      </div>
      <div className="mt-10">
        <ModuleList
          modules={program.reference}
          upNextId={upNextId}
          emptyLabel={`Nothing on the reference shelf for ${label} yet.`}
        />
      </div>
    </div>
  );
}
