"use client";

import { useEffect, useState } from "react";
import type { CurriculumItem } from "@/data/types";
import { useProgress } from "./ProgressProvider";
import type { ItemStatus } from "@/lib/progress/types";

export function ItemDetailActions({ item }: { item: CurriculumItem }) {
  const {
    getStatus,
    getNotes,
    setStatus,
    setDone,
    dismiss,
    undismiss,
    setNotes,
  } = useProgress();
  const status = getStatus(item.id);
  const done = status === "done";
  const dismissed = status === "dismissed";
  const inProgress = status === "in_progress";
  const reference = status === "reference";
  const notes = getNotes(item.id);
  const [draft, setDraft] = useState(notes);
  const showNotes = Boolean(item.notesEnabled) || Boolean(notes) || true;

  useEffect(() => {
    setDraft(notes);
  }, [notes]);

  function setTo(next: ItemStatus) {
    void setStatus(item.id, next);
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          aria-pressed={done}
          onClick={() => void setDone(item.id, !done)}
          className={`inline-flex min-h-11 items-center gap-2 rounded-md border-2 px-3.5 text-sm font-semibold transition ${
            done
              ? "border-accent bg-accent text-paper"
              : "border-ink-soft/35 bg-paper text-ink hover:border-accent"
          }`}
        >
          <span
            className={`flex h-5 w-5 items-center justify-center rounded border-2 ${
              done ? "border-paper/80" : "border-ink-soft/40"
            }`}
            aria-hidden
          >
            {done ? (
              <svg width="12" height="12" viewBox="0 0 14 14">
                <path
                  d="M3 7.5 5.8 10.2 11 3.8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : null}
          </span>
          {done ? "Done" : "Mark done"}
        </button>

        <button
          type="button"
          aria-pressed={inProgress}
          onClick={() => setTo(inProgress ? "open" : "in_progress")}
          className={`inline-flex min-h-11 items-center rounded-md px-3.5 text-sm font-medium transition ${
            inProgress
              ? "bg-highlight text-ink"
              : "text-muted hover:bg-paper-deep hover:text-ink"
          }`}
        >
          {inProgress ? "In progress" : "Mark in progress"}
        </button>

        <button
          type="button"
          aria-pressed={reference}
          onClick={() => setTo(reference ? "open" : "reference")}
          className={`inline-flex min-h-11 items-center rounded-md px-3.5 text-sm font-medium transition ${
            reference
              ? "bg-paper-deep text-ink"
              : "text-muted hover:bg-paper-deep hover:text-ink"
          }`}
        >
          {reference ? "On reference shelf" : "Mark reference"}
        </button>

        {dismissed ? (
          <button
            type="button"
            className="min-h-11 rounded-md px-3.5 text-sm font-medium text-accent underline-offset-2 hover:underline"
            onClick={() => void undismiss(item.id)}
          >
            Undo dismiss
          </button>
        ) : (
          <button
            type="button"
            className="min-h-11 rounded-md px-3.5 text-sm font-medium text-muted hover:bg-paper-deep hover:text-ink"
            onClick={() => void dismiss(item.id)}
          >
            Dismiss
          </button>
        )}
      </div>

      {dismissed && (
        <p className="text-sm text-muted">
          Dismissed — hidden from lists unless you show dismissed items.
        </p>
      )}
      {inProgress && (
        <p className="text-sm text-muted">
          In progress — shows as active on the course roadmap.
        </p>
      )}
      {reference && (
        <p className="text-sm text-muted">
          Reference — treated as off the main path (see Reference in the
          header).
        </p>
      )}

      {!dismissed && showNotes && (
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Notes / link
          </span>
          <textarea
            value={draft}
            rows={3}
            placeholder="Paste Discord/forum notes, a deliverable link, or session notes…"
            className="mt-1.5 w-full resize-y rounded-md border border-[var(--line)] bg-paper/80 px-3 py-2.5 text-sm text-ink placeholder:text-muted/70 focus:border-accent focus:outline-none"
            onChange={(e) => setDraft(e.target.value)}
            onBlur={() => {
              if (draft !== notes) void setNotes(item.id, draft);
            }}
          />
        </label>
      )}
    </div>
  );
}
