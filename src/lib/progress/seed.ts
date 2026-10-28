import type { ItemStatus, ProgressEntry, ProgressMap } from "./types";
import { normalizeStatus } from "./types";

/**
 * Bump when seed contents change so browsers re-apply.
 * v2: CG Cookie beginner is the done spine start (not Abbitt free YT).
 */
export const COURSE_PATH_SEED_KEY = "calarts-seed-course-path-v2";

/**
 * Force-overwrite these ids on seed (even if non-open).
 * Fixes wrong v1 statuses without wiping unrelated progress.
 */
export const COURSE_PATH_SEED_CORRECTIONS: Record<string, ItemStatus> = {
  // Was wrongly dismissed as unused beginner alt
  "t1-cgcookie": "done",
  // New spine starter (same course as t1-cgcookie)
  "course-cgcookie-beginner": "done",
  // Free YT playlist was wrongly seeded done as the starter
  "course-abbitt": "dismissed",
};

/**
 * Sean’s locked progress for the course-centered path.
 * Applied once on load for ids that are missing or still `open`
 * (does not overwrite done/dismissed/in_progress/reference already set),
 * except COURSE_PATH_SEED_CORRECTIONS which always win.
 */
export const COURSE_PATH_SEED: Record<string, ItemStatus> = {
  // Done — spine start + CORE
  "course-cgcookie-beginner": "done",
  "t1-cgcookie": "done",
  "course-core-mesh": "done",
  "course-core-sculpt": "done",

  // In progress — concurrent OK
  "course-characters": "in_progress",
  "course-pothead": "in_progress",

  // Reference shelf
  "ref-launch-pad": "reference",
  "ref-secrets-ebook": "reference",

  // Competing starters Sean did not take / not the path start
  "course-abbitt": "dismissed", // free Abbitt YT — not his beginner course
  "t1-cgboost": "dismissed",
  "t1-guru": "dismissed",
  "t1-joey": "dismissed",
  // Optional Abbitt YT extras (GameDev.tv HS is the Abbitt path, still queued open)
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
 * Corrections always overwrite; other seed ids only fill missing/open.
 */
export function applyCoursePathSeed(map: ProgressMap): {
  map: ProgressMap;
  changedIds: string[];
} {
  const next: ProgressMap = { ...map };
  const changedIds: string[] = [];

  for (const [id, status] of Object.entries(COURSE_PATH_SEED_CORRECTIONS)) {
    const current = normalizeStatus(next[id]);
    if (current === status) continue;
    next[id] = seedEntry(status);
    changedIds.push(id);
  }

  for (const [id, status] of Object.entries(COURSE_PATH_SEED)) {
    if (id in COURSE_PATH_SEED_CORRECTIONS) continue;
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
