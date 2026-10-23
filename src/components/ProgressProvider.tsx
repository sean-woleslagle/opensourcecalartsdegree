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
import { createClient } from "@/lib/supabase/client";
import { supabaseConfigured } from "@/lib/supabase/config";
import {
  loadLocalPrefs,
  loadLocalProgress,
  saveLocalPrefs,
  saveLocalProgress,
} from "@/lib/progress/local";
import type { ProgressMap, PrefsState } from "@/lib/progress/types";
import type { TrackId } from "@/data/types";
import type { User } from "@supabase/supabase-js";

interface ProgressContextValue {
  ready: boolean;
  mode: "supabase" | "local";
  user: User | null;
  progress: ProgressMap;
  prefs: PrefsState;
  isDone: (itemId: string) => boolean;
  getNotes: (itemId: string) => string;
  setDone: (itemId: string, done: boolean) => Promise<void>;
  setNotes: (itemId: string, notes: string) => Promise<void>;
  setPrimaryTrack: (track: TrackId | null) => Promise<void>;
  signInWithMagicLink: (email: string) => Promise<{ error?: string }>;
  signOut: () => Promise<void>;
  doneCount: (ids: string[]) => number;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [progress, setProgress] = useState<ProgressMap>({});
  const [prefs, setPrefs] = useState<PrefsState>({ primaryTrack: null });
  const configured = supabaseConfigured();
  const mode: "supabase" | "local" = configured && user ? "supabase" : "local";

  useEffect(() => {
    let cancelled = false;
    const supabase = createClient();

    async function init() {
      const localProgress = loadLocalProgress();
      const localPrefs = loadLocalPrefs();
      if (!cancelled) {
        setProgress(localProgress);
        setPrefs(localPrefs);
      }

      if (!supabase) {
        if (!cancelled) setReady(true);
        return;
      }

      const {
        data: { user: u },
      } = await supabase.auth.getUser();
      if (cancelled) return;
      setUser(u);

      if (u) {
        const { data: rows } = await supabase
          .from("progress")
          .select("item_id, done, notes, updated_at")
          .eq("user_id", u.id);
        if (rows && !cancelled) {
          const map: ProgressMap = { ...localProgress };
          for (const row of rows) {
            map[row.item_id] = {
              done: row.done,
              notes: row.notes ?? "",
              updatedAt: row.updated_at,
            };
          }
          setProgress(map);
          saveLocalProgress(map);
        }
        const { data: prefRow } = await supabase
          .from("prefs")
          .select("primary_track")
          .eq("user_id", u.id)
          .maybeSingle();
        if (prefRow && !cancelled) {
          const next = {
            primaryTrack: (prefRow.primary_track as TrackId | null) ?? null,
          };
          setPrefs(next);
          saveLocalPrefs(next);
        }
      }

      if (!cancelled) setReady(true);

      const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
      });
      return () => sub.subscription.unsubscribe();
    }

    let unsub: (() => void) | undefined;
    init().then((cleanup) => {
      unsub = cleanup;
    });

    return () => {
      cancelled = true;
      unsub?.();
    };
  }, []);

  const persistRow = useCallback(
    async (itemId: string, done: boolean, notes: string) => {
      const updatedAt = new Date().toISOString();
      setProgress((prev) => {
        const next = {
          ...prev,
          [itemId]: { done, notes, updatedAt },
        };
        saveLocalProgress(next);
        return next;
      });

      const supabase = createClient();
      if (!supabase || !user) return;
      await supabase.from("progress").upsert(
        {
          user_id: user.id,
          item_id: itemId,
          done,
          notes: notes || null,
          updated_at: updatedAt,
        },
        { onConflict: "user_id,item_id" },
      );
    },
    [user],
  );

  const setDone = useCallback(
    async (itemId: string, done: boolean) => {
      const notes = progress[itemId]?.notes ?? "";
      await persistRow(itemId, done, notes);
    },
    [persistRow, progress],
  );

  const setNotes = useCallback(
    async (itemId: string, notes: string) => {
      const done = progress[itemId]?.done ?? false;
      await persistRow(itemId, done, notes);
    },
    [persistRow, progress],
  );

  const setPrimaryTrack = useCallback(
    async (track: TrackId | null) => {
      const next = { primaryTrack: track };
      setPrefs(next);
      saveLocalPrefs(next);
      const supabase = createClient();
      if (!supabase || !user) return;
      await supabase.from("prefs").upsert(
        {
          user_id: user.id,
          primary_track: track,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id" },
      );
    },
    [user],
  );

  const signInWithMagicLink = useCallback(async (email: string) => {
    const supabase = createClient();
    if (!supabase) {
      return {
        error:
          "Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.",
      };
    }
    const redirectTo = `${window.location.origin}/auth/callback`;
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: redirectTo },
    });
    return { error: error?.message };
  }, []);

  const signOut = useCallback(async () => {
    const supabase = createClient();
    if (supabase) await supabase.auth.signOut();
    setUser(null);
  }, []);

  const value = useMemo<ProgressContextValue>(
    () => ({
      ready,
      mode,
      user,
      progress,
      prefs,
      isDone: (id) => progress[id]?.done ?? false,
      getNotes: (id) => progress[id]?.notes ?? "",
      setDone,
      setNotes,
      setPrimaryTrack,
      signInWithMagicLink,
      signOut,
      doneCount: (ids) => ids.filter((id) => progress[id]?.done).length,
    }),
    [
      ready,
      mode,
      user,
      progress,
      prefs,
      setDone,
      setNotes,
      setPrimaryTrack,
      signInWithMagicLink,
      signOut,
    ],
  );

  return (
    <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
}
