export type ItemStatus =
  | "open"
  | "done"
  | "dismissed"
  | "in_progress"
  | "reference";

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

const KNOWN_STATUSES: ItemStatus[] = [
  "open",
  "done",
  "dismissed",
  "in_progress",
  "reference",
];

export function normalizeStatus(
  raw: LegacyProgressEntry | ProgressEntry | null | undefined,
): ItemStatus {
  if (!raw) return "open";
  if (raw.status && KNOWN_STATUSES.includes(raw.status)) {
    return raw.status;
  }
  if ("done" in raw && raw.done === true) return "done";
  return "open";
}

/**
 * Done, dismissed (skipped on purpose), or reference (off main path) —
 * counts for progress meters.
 */
export function isHandled(status: ItemStatus | undefined): boolean {
  return (
    status === "done" || status === "dismissed" || status === "reference"
  );
}

/** Still on the active path (not finished, skipped, or reference-only). */
export function isIncomplete(status: ItemStatus | undefined): boolean {
  return status === "open" || status === "in_progress" || !status;
}

export function entryFromRow(row: ProgressRow): ProgressEntry {
  return {
    status: normalizeStatus({ status: row.status ?? undefined, done: row.done }),
    notes: row.notes ?? "",
    updatedAt: row.updated_at,
  };
}
