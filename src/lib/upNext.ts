import { orderedProgramItems, getTerm, itemIdsInTerm } from "@/data/curriculum";
import type { ProgressMap } from "@/lib/progress/types";

export function findUpNextId(
  progress: ProgressMap,
  scope?: { termId?: string; itemIds?: string[] },
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

  for (const c of candidates) {
    if (!progress[c.id]?.done) return c.id;
  }
  return null;
}

export function findUpNextTermId(progress: ProgressMap): string | null {
  const terms = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `t${n}`);
  for (const termId of terms) {
    const term = getTerm(termId);
    if (!term) continue;
    const ids = itemIdsInTerm(termId);
    if (ids.some((id) => !progress[id]?.done)) return termId;
  }
  return null;
}
