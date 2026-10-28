"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  coerceFocusMode,
  DEFAULT_FOCUS_MODE,
  DEFAULT_TRADITIONAL_ENABLED,
  filterItemIdsByFocus,
  filterModulesByFocus,
  focusModeLabel,
  focusModeOptions,
  itemMatchesFocus,
  loadFocusMode,
  loadTraditionalEnabled,
  saveFocusMode,
  saveTraditionalEnabled,
  type FocusMode,
} from "@/lib/focusMode";
import type { CurriculumItem, Module } from "@/data/types";

interface FocusModeContextValue {
  mode: FocusMode;
  ready: boolean;
  setMode: (mode: FocusMode) => void;
  traditionalEnabled: boolean;
  setTraditionalEnabled: (enabled: boolean) => void;
  availableModes: ReturnType<typeof focusModeOptions>;
  label: string;
  filterModules: (modules: Module[]) => Module[];
  filterItemIds: (modules: Module[]) => string[];
  matches: (item: CurriculumItem, module?: Pick<Module, "focus"> | null) => boolean;
}

const FocusModeContext = createContext<FocusModeContextValue | null>(null);

export function FocusModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<FocusMode>(DEFAULT_FOCUS_MODE);
  const [traditionalEnabled, setTraditionalEnabledState] = useState(
    DEFAULT_TRADITIONAL_ENABLED,
  );
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const enabled = loadTraditionalEnabled();
    const stored = loadFocusMode();
    const nextMode = coerceFocusMode(stored, enabled);
    setTraditionalEnabledState(enabled);
    setModeState(nextMode);
    if (nextMode !== stored) {
      saveFocusMode(nextMode);
    }
    setReady(true);
  }, []);

  const setMode = useCallback(
    (next: FocusMode) => {
      const coerced = coerceFocusMode(next, traditionalEnabled);
      setModeState(coerced);
      saveFocusMode(coerced);
    },
    [traditionalEnabled],
  );

  const setTraditionalEnabled = useCallback((enabled: boolean) => {
    setTraditionalEnabledState(enabled);
    saveTraditionalEnabled(enabled);
    setModeState((prev) => {
      const coerced = coerceFocusMode(prev, enabled);
      saveFocusMode(coerced);
      return coerced;
    });
  }, []);

  const value = useMemo<FocusModeContextValue>(
    () => ({
      mode,
      ready,
      setMode,
      traditionalEnabled,
      setTraditionalEnabled,
      availableModes: focusModeOptions(traditionalEnabled),
      label: focusModeLabel(mode),
      filterModules: (modules) => filterModulesByFocus(modules, mode),
      filterItemIds: (modules) => filterItemIdsByFocus(modules, mode),
      matches: (item, module) => itemMatchesFocus(item, mode, module),
    }),
    [mode, ready, setMode, traditionalEnabled, setTraditionalEnabled],
  );

  return (
    <FocusModeContext.Provider value={value}>
      {children}
    </FocusModeContext.Provider>
  );
}

export function useFocusMode() {
  const ctx = useContext(FocusModeContext);
  if (!ctx) {
    throw new Error("useFocusMode must be used within FocusModeProvider");
  }
  return ctx;
}
