import type { ProgressMap, PrefsState } from "./types";
import type { TrackId } from "@/data/types";

const PROGRESS_KEY = "calarts-progress-v1";
const PREFS_KEY = "calarts-prefs-v1";

export function loadLocalProgress(): ProgressMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as ProgressMap;
  } catch {
    return {};
  }
}

export function saveLocalProgress(map: ProgressMap) {
  if (typeof window === "undefined") return;
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(map));
}

export function loadLocalPrefs(): PrefsState {
  if (typeof window === "undefined") return { primaryTrack: null };
  try {
    const raw = localStorage.getItem(PREFS_KEY);
    if (!raw) return { primaryTrack: null };
    const parsed = JSON.parse(raw) as PrefsState;
    return { primaryTrack: (parsed.primaryTrack as TrackId | null) ?? null };
  } catch {
    return { primaryTrack: null };
  }
}

export function saveLocalPrefs(prefs: PrefsState) {
  if (typeof window === "undefined") return;
  localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
}
