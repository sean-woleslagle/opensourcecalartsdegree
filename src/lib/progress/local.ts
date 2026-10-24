import {
  normalizeStatus,
  type LegacyProgressEntry,
  type ProgressEntry,
  type ProgressMap,
} from "./types";

const PROGRESS_KEY = "calarts-progress-v1";

function normalizeMap(raw: Record<string, LegacyProgressEntry>): ProgressMap {
  const map: ProgressMap = {};
  for (const [id, entry] of Object.entries(raw)) {
    if (!entry || typeof entry !== "object") continue;
    map[id] = {
      status: normalizeStatus(entry),
      notes: typeof entry.notes === "string" ? entry.notes : "",
      updatedAt:
        typeof entry.updatedAt === "string"
          ? entry.updatedAt
          : new Date(0).toISOString(),
    };
  }
  return map;
}

export function loadLocalProgress(): ProgressMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, LegacyProgressEntry>;
    return normalizeMap(parsed);
  } catch {
    return {};
  }
}

export function saveLocalProgress(map: ProgressMap) {
  if (typeof window === "undefined") return;
  // Persist status; include done for any older code paths reading the same key.
  const serializable: Record<
    string,
    ProgressEntry & { done: boolean }
  > = {};
  for (const [id, entry] of Object.entries(map)) {
    serializable[id] = {
      ...entry,
      done: entry.status === "done",
    };
  }
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(serializable));
}
