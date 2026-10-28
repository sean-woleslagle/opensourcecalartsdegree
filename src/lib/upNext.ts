import {
  orderedProgramItems,
  orderedRoadmapItems,
  itemIdsInTerm,
  program,
} from "@/data/curriculum";
import {
  itemMatchesFocus,
  type FocusMode,
} from "@/lib/focusMode";
import { isHandled, type ProgressMap } from "@/lib/progress/types";

function focusAllowedIds(
  mode: FocusMode,
  scope: "roadmap" | "all" = "all",
): Set<string> | null {
  if (mode === "all") return null;
  const ids = new Set<string>();
  const modules =
    scope === "roadmap"
      ? program.terms.flatMap((t) => t.modules)
      : [
          ...program.terms.flatMap((t) => t.modules),
          ...program.foundations,
        ];
  for (const mod of modules) {
    for (const item of mod.items) {
      if (itemMatchesFocus(item, mode, mod)) ids.add(item.id);
    }
  }
  return ids;
}

function isIncomplete(progress: ProgressMap, id: string): boolean {
  return !isHandled(progress[id]?.status);
}

export function findUpNextId(
  progress: ProgressMap,
  scope?: {
    termId?: string;
    itemIds?: string[];
    focusMode?: FocusMode;
    /** Default true for home: skip Foundations on the main path. */
    roadmapOnly?: boolean;
  },
): string | null {
  const roadmapOnly = scope?.roadmapOnly ?? false;
  const ordered = roadmapOnly ? orderedRoadmapItems() : orderedProgramItems();
  let candidates = ordered;
  if (scope?.itemIds) {
    const set = new Set(scope.itemIds);
    candidates = ordered.filter((c) => set.has(c.id));
  } else if (scope?.termId) {
    const set = new Set(itemIdsInTerm(scope.termId));
    candidates = ordered.filter((c) => set.has(c.id));
  }

  const focusSet = focusAllowedIds(
    scope?.focusMode ?? "blender",
    roadmapOnly ? "roadmap" : "all",
  );
  if (focusSet) {
    candidates = candidates.filter((c) => focusSet.has(c.id));
  }

  for (const c of candidates) {
    if (isIncomplete(progress, c.id)) return c.id;
  }
  return null;
}

/** First incomplete roadmap section (former term) under Focus — for scroll anchors. */
export function findUpNextSectionId(
  progress: ProgressMap,
  focusMode: FocusMode = "blender",
): string | null {
  const focusSet = focusAllowedIds(focusMode, "roadmap");
  for (const row of orderedRoadmapItems()) {
    if (focusSet && !focusSet.has(row.id)) continue;
    if (isIncomplete(progress, row.id)) return row.formerTermId;
  }
  return null;
}
