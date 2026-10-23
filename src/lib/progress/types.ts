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
