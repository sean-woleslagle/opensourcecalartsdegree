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
import {
  applyCoursePathSeed,
  hasCoursePathSeedRan,
  markCoursePathSeedRan,
} from "@/lib/progress/seed";
import {
  entryFromRow,
  isHandled,
  normalizeStatus,
  type ItemStatus,
  type ProgressMap,
  type ProgressRow,
} from "@/lib/progress/types";
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
  getStatus: (itemId: string) => ItemStatus;
  isDone: (itemId: string) => boolean;
  isDismissed: (itemId: string) => boolean;
  getNotes: (itemId: string) => string;
  setStatus: (itemId: string, status: ItemStatus) => Promise<void>;
  setDone: (itemId: string, done: boolean) => Promise<void>;
  dismiss: (itemId: string) => Promise<void>;
  undismiss: (itemId: string) => Promise<void>;
  setNotes: (itemId: string, notes: string) => Promise<void>;
  signInWithMagicLink: (email: string) => Promise<{ error?: string }>;
  signOut: () => Promise<void>;
  /** Done + dismissed (skipped on purpose) — Sean's "handled" progress. */
  handledCount: (ids: string[]) => number;
  /** @deprecated Use handledCount — same meaning for meters. */
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

        // Prefer status column; fall back if migration 002 not applied yet.
        let rows: ProgressRow[] | null = null;
        const withStatus = await supabase
          .from("progress")
          .select("item_id, done, status, notes, updated_at")
          .eq("user_id", u.id);
        if (withStatus.error) {
          const legacy = await supabase
            .from("progress")
            .select("item_id, done, notes, updated_at")
            .eq("user_id", u.id);
          rows = (legacy.data as ProgressRow[] | null) ?? null;
        } else {
          rows = (withStatus.data as ProgressRow[] | null) ?? null;
        }
        if (!cancelled) {
          let map: ProgressMap = { ...localProgress };
          if (rows) {
            for (const row of rows) {
              map[row.item_id] = entryFromRow(row);
            }
          }
          // One-time Sean course-path seed (done / in progress / reference / dismiss alts).
          if (!hasCoursePathSeedRan()) {
            const seeded = applyCoursePathSeed(map);
            map = seeded.map;
            markCoursePathSeedRan();
            saveLocalProgress(map);
            for (const id of seeded.changedIds) {
              const entry = map[id];
              if (!entry) continue;
              const base = {
                user_id: u.id,
                item_id: id,
                done: entry.status === "done",
                notes: entry.notes || null,
                updated_at: entry.updatedAt,
              };
              const { error } = await supabase.from("progress").upsert(
                { ...base, status: entry.status },
                { onConflict: "user_id,item_id" },
              );
              // Until migration 003, in_progress/reference may fail — local still holds them.
              if (error && entry.status !== "dismissed" && entry.status !== "in_progress" && entry.status !== "reference") {
                await supabase
                  .from("progress")
                  .upsert(base, { onConflict: "user_id,item_id" });
              }
            }
          } else {
            saveLocalProgress(map);
          }
          setProgress(map);
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
    async (itemId: string, status: ItemStatus, notes: string) => {
      if (!authorized || !user) return;

      const updatedAt = new Date().toISOString();
      setProgress((prev) => {
        const next = {
          ...prev,
          [itemId]: { status, notes, updatedAt },
        };
        saveLocalProgress(next);
        return next;
      });

      const supabase = createClient();
      if (!supabase) return;
      const base = {
        user_id: user.id,
        item_id: itemId,
        done: status === "done",
        notes: notes || null,
        updated_at: updatedAt,
      };
      const { error } = await supabase.from("progress").upsert(
        { ...base, status },
        { onConflict: "user_id,item_id" },
      );
      // Until migrations 002/003, new statuses may fail — localStorage remains source of truth.
      if (
        error &&
        status !== "dismissed" &&
        status !== "in_progress" &&
        status !== "reference"
      ) {
        await supabase
          .from("progress")
          .upsert(base, { onConflict: "user_id,item_id" });
      }
    },
    [authorized, user],
  );

  const setStatus = useCallback(
    async (itemId: string, status: ItemStatus) => {
      const notes = progress[itemId]?.notes ?? "";
      await persistRow(itemId, status, notes);
    },
    [persistRow, progress],
  );

  const setDone = useCallback(
    async (itemId: string, done: boolean) => {
      await setStatus(itemId, done ? "done" : "open");
    },
    [setStatus],
  );

  const dismiss = useCallback(
    async (itemId: string) => {
      await setStatus(itemId, "dismissed");
    },
    [setStatus],
  );

  const undismiss = useCallback(
    async (itemId: string) => {
      await setStatus(itemId, "open");
    },
    [setStatus],
  );

  const setNotes = useCallback(
    async (itemId: string, notes: string) => {
      const status = normalizeStatus(progress[itemId]);
      await persistRow(itemId, status, notes);
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

  const countHandled = useCallback(
    (ids: string[]) =>
      authorized
        ? ids.filter((id) => isHandled(progress[id]?.status)).length
        : 0,
    [authorized, progress],
  );

  const value = useMemo<ProgressContextValue>(
    () => ({
      ready,
      mode,
      user,
      authorized,
      progress: authorized ? progress : {},
      getStatus: (id) =>
        authorized ? normalizeStatus(progress[id]) : "open",
      isDone: (id) =>
        authorized ? progress[id]?.status === "done" : false,
      isDismissed: (id) =>
        authorized ? progress[id]?.status === "dismissed" : false,
      getNotes: (id) => (authorized ? (progress[id]?.notes ?? "") : ""),
      setStatus,
      setDone,
      dismiss,
      undismiss,
      setNotes,
      signInWithMagicLink,
      signOut,
      handledCount: countHandled,
      doneCount: countHandled,
    }),
    [
      ready,
      mode,
      user,
      authorized,
      progress,
      setStatus,
      setDone,
      dismiss,
      undismiss,
      setNotes,
      signInWithMagicLink,
      signOut,
      countHandled,
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
