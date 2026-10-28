import type { ItemStatus, ProgressEntry, ProgressMap } from "./types";
import { normalizeStatus } from "./types";

/** One-time local flag so Sean’s course-path seed runs once per browser. */
export const COURSE_PATH_SEED_KEY = "calarts-seed-course-path-v1";

/**
 * Sean’s locked progress for the course-centered path.
 * Applied once on load for ids that are missing or still `open`
 * (does not overwrite done/dismissed/in_progress/reference already set).
 */
export const COURSE_PATH_SEED: Record<string, ItemStatus> = {
  // Done — spine courses Sean finished
  "course-abbitt": "done",
  "course-core-mesh": "done",
  "course-core-sculpt": "done",

  // In progress — concurrent OK
  "course-characters": "in_progress",
  "course-pothead": "in_progress",

  // Reference shelf
  "ref-launch-pad": "reference",
  "ref-secrets-ebook": "reference",

  // Dismiss obsolete beginner pick-ones (Abbitt replaced these)
  "t1-cgcookie": "dismissed",
  "t1-cgboost": "dismissed",
  // Optional extras that duplicate beginner paths
  "t1-guru": "dismissed",
  "t1-joey": "dismissed",
  // Old optional Abbitt row — main path is course-abbitt now
  "t2-abbitt": "dismissed",
};

function seedEntry(status: ItemStatus): ProgressEntry {
  return {
    status,
    notes: "",
    updatedAt: new Date().toISOString(),
  };
}

/**
 * Merge seed into an existing progress map.
 * Never clobbers a non-open status the user (or prior sync) already set.
 */
export function applyCoursePathSeed(map: ProgressMap): {
  map: ProgressMap;
  changedIds: string[];
} {
  const next: ProgressMap = { ...map };
  const changedIds: string[] = [];

  for (const [id, status] of Object.entries(COURSE_PATH_SEED)) {
    const current = normalizeStatus(next[id]);
    if (current !== "open") continue;
    next[id] = seedEntry(status);
    changedIds.push(id);
  }

  return { map: next, changedIds };
}

export function hasCoursePathSeedRan(): boolean {
  if (typeof window === "undefined") return true;
  try {
    return localStorage.getItem(COURSE_PATH_SEED_KEY) === "1";
  } catch {
    return false;
  }
}

export function markCoursePathSeedRan() {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(COURSE_PATH_SEED_KEY, "1");
  } catch {
    /* ignore */
  }
}
