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
import { usePathname } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { supabaseConfigured } from "@/lib/supabase/config";
import { loadLocalProgress, saveLocalProgress } from "@/lib/progress/local";
import type { ProgressMap } from "@/lib/progress/types";
import type { User } from "@supabase/supabase-js";

/** Auth shell routes — allowlist is enforced server-side; never compare emails here. */
function isAuthShellPath(pathname: string | null): boolean {
  return pathname === "/login" || pathname === "/unauthorized";
}

interface ProgressContextValue {
  ready: boolean;
  mode: "supabase" | "none";
  user: User | null;
  authorized: boolean;
  progress: ProgressMap;
  isDone: (itemId: string) => boolean;
  getNotes: (itemId: string) => string;
  setDone: (itemId: string, done: boolean) => Promise<void>;
  setNotes: (itemId: string, notes: string) => Promise<void>;
  signInWithMagicLink: (email: string) => Promise<{ error?: string }>;
  signOut: () => Promise<void>;
  doneCount: (ids: string[]) => number;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [progress, setProgress] = useState<ProgressMap>({});
  const configured = supabaseConfigured();
  // Middleware / callback enforce the allowlist; client never sees the address.
  const authorized = Boolean(user) && !isAuthShellPath(pathname);
  const mode: "supabase" | "none" =
    configured && authorized ? "supabase" : "none";

  useEffect(() => {
    let cancelled = false;
    const supabase = createClient();

    async function init() {
      if (!supabase) {
        if (!cancelled) {
          setProgress({});
          setReady(true);
        }
        return;
      }

      const {
        data: { user: u },
      } = await supabase.auth.getUser();
      if (cancelled) return;
      setUser(u);

      // Only hydrate progress when middleware would allow curriculum (not auth shell).
      const onAuthShell =
        typeof window !== "undefined" &&
        isAuthShellPath(window.location.pathname);

      if (u && !onAuthShell) {
        const localProgress = loadLocalProgress();

        const { data: rows } = await supabase
          .from("progress")
          .select("item_id, done, notes, updated_at")
          .eq("user_id", u.id);
        if (!cancelled) {
          const map: ProgressMap = { ...localProgress };
          if (rows) {
            for (const row of rows) {
              map[row.item_id] = {
                done: row.done,
                notes: row.notes ?? "",
                updatedAt: row.updated_at,
              };
            }
          }
          setProgress(map);
          saveLocalProgress(map);
        }
      } else if (!cancelled) {
        setProgress({});
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
      if (!authorized || !user) return;

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
      if (!supabase) return;
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
    [authorized, user],
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
    setProgress({});
    if (typeof window !== "undefined") {
      window.location.assign("/login");
    }
  }, []);

  const value = useMemo<ProgressContextValue>(
    () => ({
      ready,
      mode,
      user,
      authorized,
      progress: authorized ? progress : {},
      isDone: (id) => (authorized ? (progress[id]?.done ?? false) : false),
      getNotes: (id) => (authorized ? (progress[id]?.notes ?? "") : ""),
      setDone,
      setNotes,
      signInWithMagicLink,
      signOut,
      doneCount: (ids) =>
        authorized ? ids.filter((id) => progress[id]?.done).length : 0,
    }),
    [
      ready,
      mode,
      user,
      authorized,
      progress,
      setDone,
      setNotes,
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
