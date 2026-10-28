import type { CurriculumItem, FocusTag, Module } from "@/data/types";

/** UI selection — `all` shows every item regardless of tag. */
export type FocusMode = "all" | "blender" | "traditional";

export const FOCUS_MODE_KEY = "calarts-focus-mode-v1";
export const TRADITIONAL_ENABLED_KEY = "calarts-traditional-enabled-v1";

/** Fresh installs / empty localStorage land on Blender. */
export const DEFAULT_FOCUS_MODE: FocusMode = "blender";

/**
 * When false, Focus control is Blender-only (no All / Traditional).
 * Fresh installs default to off so Sean stays Blender-only until he opts in.
 */
export const DEFAULT_TRADITIONAL_ENABLED = false;

export const FOCUS_MODE_OPTIONS: {
  value: FocusMode;
  label: string;
}[] = [
  { value: "all", label: "All" },
  { value: "blender", label: "Blender" },
  { value: "traditional", label: "Traditional" },
];

export function isFocusMode(value: unknown): value is FocusMode {
  return value === "all" || value === "blender" || value === "traditional";
}

export function loadFocusMode(): FocusMode {
  if (typeof window === "undefined") return DEFAULT_FOCUS_MODE;
  try {
    const raw = localStorage.getItem(FOCUS_MODE_KEY);
    if (isFocusMode(raw)) return raw;
  } catch {
    /* ignore */
  }
  return DEFAULT_FOCUS_MODE;
}

export function saveFocusMode(mode: FocusMode) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(FOCUS_MODE_KEY, mode);
  } catch {
    /* ignore */
  }
}

export function loadTraditionalEnabled(): boolean {
  if (typeof window === "undefined") return DEFAULT_TRADITIONAL_ENABLED;
  try {
    const raw = localStorage.getItem(TRADITIONAL_ENABLED_KEY);
    if (raw === "true") return true;
    if (raw === "false") return false;
  } catch {
    /* ignore */
  }
  return DEFAULT_TRADITIONAL_ENABLED;
}

export function saveTraditionalEnabled(enabled: boolean) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(TRADITIONAL_ENABLED_KEY, enabled ? "true" : "false");
  } catch {
    /* ignore */
  }
}

/** Focus options visible for the current Traditional setting. */
export function focusModeOptions(traditionalEnabled: boolean) {
  if (!traditionalEnabled) {
    return FOCUS_MODE_OPTIONS.filter((opt) => opt.value === "blender");
  }
  return FOCUS_MODE_OPTIONS;
}

/**
 * If Traditional is off, only Blender is valid — coerce All/Traditional away.
 */
export function coerceFocusMode(
  mode: FocusMode,
  traditionalEnabled: boolean,
): FocusMode {
  if (!traditionalEnabled && mode !== "blender") return "blender";
  return mode;
}

/** Resolve an item's focus tag (item override → module → both). */
export function resolveItemFocus(
  item: CurriculumItem,
  module?: Pick<Module, "focus"> | null,
): FocusTag {
  return item.focus ?? module?.focus ?? "both";
}

export function itemMatchesFocus(
  item: CurriculumItem,
  mode: FocusMode,
  module?: Pick<Module, "focus"> | null,
): boolean {
  if (mode === "all") return true;
  const tag = resolveItemFocus(item, module);
  return tag === "both" || tag === mode;
}

export function filterModulesByFocus(
  modules: Module[],
  mode: FocusMode,
): Module[] {
  if (mode === "all") return modules;
  return modules
    .map((mod) => ({
      ...mod,
      items: mod.items.filter((item) => itemMatchesFocus(item, mode, mod)),
    }))
    .filter((mod) => mod.items.length > 0);
}

export function filterItemIdsByFocus(
  modules: Module[],
  mode: FocusMode,
): string[] {
  return filterModulesByFocus(modules, mode).flatMap((m) =>
    m.items.map((i) => i.id),
  );
}

export function focusModeLabel(mode: FocusMode): string {
  if (mode === "blender") return "Blender";
  if (mode === "traditional") return "Traditional";
  return "All";
}
