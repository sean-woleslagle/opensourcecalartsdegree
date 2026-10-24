export type ItemStatus = "open" | "done" | "dismissed";

export interface ProgressRow {
  item_id: string;
  /** Legacy; prefer `status`. Kept in sync when status is done. */
  done: boolean;
  status?: ItemStatus | null;
  notes: string | null;
  updated_at: string;
}

export interface ProgressEntry {
  status: ItemStatus;
  notes: string;
  updatedAt: string;
}

export type ProgressMap = Record<string, ProgressEntry>;

/** Raw shape that may exist in LocalStorage from before status existed. */
export type LegacyProgressEntry = {
  status?: ItemStatus;
  done?: boolean;
  notes?: string;
  updatedAt?: string;
};

export function normalizeStatus(
  raw: LegacyProgressEntry | ProgressEntry | null | undefined,
): ItemStatus {
  if (!raw) return "open";
  if (raw.status === "open" || raw.status === "done" || raw.status === "dismissed") {
    return raw.status;
  }
  if ("done" in raw && raw.done === true) return "done";
  return "open";
}

export function isHandled(status: ItemStatus | undefined): boolean {
  return status === "done" || status === "dismissed";
}

export function entryFromRow(row: ProgressRow): ProgressEntry {
  return {
    status: normalizeStatus({ status: row.status ?? undefined, done: row.done }),
    notes: row.notes ?? "",
    updatedAt: row.updated_at,
  };
}
