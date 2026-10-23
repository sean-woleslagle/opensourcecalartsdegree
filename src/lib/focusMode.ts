import type { CurriculumItem, FocusTag, Module } from "@/data/types";

/** UI selection — `all` shows every item regardless of tag. */
export type FocusMode = "all" | "blender" | "traditional";

export const FOCUS_MODE_KEY = "calarts-focus-mode-v1";

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
  if (typeof window === "undefined") return "all";
  try {
    const raw = localStorage.getItem(FOCUS_MODE_KEY);
    if (isFocusMode(raw)) return raw;
  } catch {
    /* ignore */
  }
  return "all";
}

export function saveFocusMode(mode: FocusMode) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(FOCUS_MODE_KEY, mode);
  } catch {
    /* ignore */
  }
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
