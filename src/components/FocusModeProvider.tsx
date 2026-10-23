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
  filterItemIdsByFocus,
  filterModulesByFocus,
  focusModeLabel,
  itemMatchesFocus,
  loadFocusMode,
  saveFocusMode,
  type FocusMode,
} from "@/lib/focusMode";
import type { CurriculumItem, Module } from "@/data/types";

interface FocusModeContextValue {
  mode: FocusMode;
  ready: boolean;
  setMode: (mode: FocusMode) => void;
  label: string;
  filterModules: (modules: Module[]) => Module[];
  filterItemIds: (modules: Module[]) => string[];
  matches: (item: CurriculumItem, module?: Pick<Module, "focus"> | null) => boolean;
}

const FocusModeContext = createContext<FocusModeContextValue | null>(null);

export function FocusModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<FocusMode>("all");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setModeState(loadFocusMode());
    setReady(true);
  }, []);

  const setMode = useCallback((next: FocusMode) => {
    setModeState(next);
    saveFocusMode(next);
  }, []);

  const value = useMemo<FocusModeContextValue>(
    () => ({
      mode,
      ready,
      setMode,
      label: focusModeLabel(mode),
      filterModules: (modules) => filterModulesByFocus(modules, mode),
      filterItemIds: (modules) => filterItemIdsByFocus(modules, mode),
      matches: (item, module) => itemMatchesFocus(item, mode, module),
    }),
    [mode, ready, setMode],
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
