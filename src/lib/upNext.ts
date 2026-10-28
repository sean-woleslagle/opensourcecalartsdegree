import {
  orderedProgramItems,
  orderedRoadmapItems,
  itemIdsInTerm,
  program,
  roadmapModules,
} from "@/data/curriculum";
import {
  itemMatchesFocus,
  type FocusMode,
} from "@/lib/focusMode";
import {
  isIncomplete,
  type ProgressMap,
} from "@/lib/progress/types";

function focusAllowedIds(
  mode: FocusMode,
  scope: "roadmap" | "all" = "all",
): Set<string> | null {
  if (mode === "all") return null;
  const ids = new Set<string>();
  const modules =
    scope === "roadmap"
      ? roadmapModules()
      : [
          ...roadmapModules(),
          ...program.foundations,
          ...program.reference,
        ];
  for (const mod of modules) {
    for (const item of mod.items) {
      if (itemMatchesFocus(item, mode, mod)) ids.add(item.id);
    }
  }
  return ids;
}

function stillTodo(progress: ProgressMap, id: string): boolean {
  return isIncomplete(progress[id]?.status);
}

export function findUpNextId(
  progress: ProgressMap,
  scope?: {
    termId?: string;
    itemIds?: string[];
    focusMode?: FocusMode;
    /** Default true for home: skip Foundations / Reference on the main path. */
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

  // Prefer an in-progress course so concurrent work stays visible.
  for (const c of candidates) {
    if (progress[c.id]?.status === "in_progress") return c.id;
  }
  for (const c of candidates) {
    if (stillTodo(progress, c.id)) return c.id;
  }
  return null;
}

/** First incomplete course stage id under Focus — for scroll anchors. */
export function findUpNextSectionId(
  progress: ProgressMap,
  focusMode: FocusMode = "blender",
): string | null {
  const focusSet = focusAllowedIds(focusMode, "roadmap");
  for (const row of orderedRoadmapItems()) {
    if (focusSet && !focusSet.has(row.id)) continue;
    if (stillTodo(progress, row.id)) return row.stageId;
  }
  return null;
}
