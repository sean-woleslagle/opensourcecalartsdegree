import type { TrackId } from "@/data/types";

export interface ProgressRow {
  item_id: string;
  done: boolean;
  notes: string | null;
  updated_at: string;
}

export type ProgressMap = Record<
  string,
  { done: boolean; notes: string; updatedAt: string }
>;

export interface PrefsState {
  primaryTrack: TrackId | null;
}
