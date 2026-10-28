import {
  orderedProgramItems,
  getTerm,
  itemIdsInTerm,
  program,
} from "@/data/curriculum";
import {
  itemMatchesFocus,
  type FocusMode,
} from "@/lib/focusMode";
import { isHandled, type ProgressMap } from "@/lib/progress/types";

function focusAllowedIds(mode: FocusMode): Set<string> | null {
  if (mode === "all") return null;
  const ids = new Set<string>();
  for (const mod of program.foundations) {
    for (const item of mod.items) {
      if (itemMatchesFocus(item, mode, mod)) ids.add(item.id);
    }
  }
  for (const term of program.terms) {
    for (const mod of term.modules) {
      for (const item of mod.items) {
        if (itemMatchesFocus(item, mode, mod)) ids.add(item.id);
      }
    }
  }
  return ids;
}

function isIncomplete(progress: ProgressMap, id: string): boolean {
  return !isHandled(progress[id]?.status);
}

export function findUpNextId(
  progress: ProgressMap,
  scope?: { termId?: string; itemIds?: string[]; focusMode?: FocusMode },
): string | null {
  const ordered = orderedProgramItems();
  let candidates = ordered;
  if (scope?.itemIds) {
    const set = new Set(scope.itemIds);
    candidates = ordered.filter((c) => set.has(c.id));
  } else if (scope?.termId) {
    const set = new Set(itemIdsInTerm(scope.termId));
    candidates = ordered.filter((c) => set.has(c.id));
  }

  const focusSet = focusAllowedIds(scope?.focusMode ?? "blender");
  if (focusSet) {
    candidates = candidates.filter((c) => focusSet.has(c.id));
  }

  for (const c of candidates) {
    if (isIncomplete(progress, c.id)) return c.id;
  }
  return null;
}

export function findUpNextTermId(
  progress: ProgressMap,
  focusMode: FocusMode = "blender",
): string | null {
  const focusSet = focusAllowedIds(focusMode);
  const terms = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `t${n}`);
  for (const termId of terms) {
    const term = getTerm(termId);
    if (!term) continue;
    let ids = itemIdsInTerm(termId);
    if (focusSet) ids = ids.filter((id) => focusSet.has(id));
    if (ids.length === 0) continue;
    if (ids.some((id) => isIncomplete(progress, id))) return termId;
  }
  return null;
}
