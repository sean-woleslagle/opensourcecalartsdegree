"use client";

import { useEffect, useState } from "react";
import type { CurriculumItem } from "@/data/types";
import { useProgress } from "./ProgressProvider";

export function ChecklistItem({
  item,
  isUpNext,
}: {
  item: CurriculumItem;
  isUpNext?: boolean;
}) {
  const { isDone, getNotes, setDone, setNotes } = useProgress();
  const done = isDone(item.id);
  const notes = getNotes(item.id);
  const [draft, setDraft] = useState(notes);
  const [showNotes, setShowNotes] = useState(
    Boolean(notes) || Boolean(item.notesEnabled),
  );

  useEffect(() => {
    setDraft(notes);
  }, [notes]);

  return (
    <li
      className={`group border-b border-[var(--line)] py-3.5 last:border-b-0 ${
        isUpNext
          ? "bg-[color-mix(in_oklab,var(--highlight)_28%,transparent)] -mx-2 rounded-md px-2"
          : ""
      }`}
    >
      <div className="flex items-start gap-3">
        <button
          type="button"
          aria-pressed={done}
          aria-label={
            done ? `Mark incomplete: ${item.title}` : `Mark done: ${item.title}`
          }
          onClick={() => void setDone(item.id, !done)}
          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition ${
            done
              ? "animate-check border-accent bg-accent text-paper"
              : "border-ink-soft/40 bg-paper hover:border-accent"
          }`}
        >
          {done ? (
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
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
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            {isUpNext && (
              <span className="up-next-pulse text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
                Up next
              </span>
            )}
            <p
              className={`text-[15px] leading-snug sm:text-base ${
                done ? "text-muted line-through decoration-mist" : "text-ink"
              }`}
            >
              {item.title}
            </p>
          </div>

          <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] uppercase tracking-wide text-muted">
            <span>{item.kind}</span>
            {item.supporting && <span>· supporting</span>}
            {item.optional && <span>· optional</span>}
          </div>

          {(item.url || item.findHint) && (
            <div className="mt-2 text-sm">
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent underline-offset-2 hover:underline"
                >
                  Open resource
                </a>
              ) : (
                <p className="text-muted">
                  Find: <span className="text-ink-soft">{item.findHint}</span>
                </p>
              )}
              {item.url && item.findHint && (
                <p className="mt-0.5 text-xs text-muted">{item.findHint}</p>
              )}
            </div>
          )}

          {(item.notesEnabled || notes || showNotes) && (
            <div className="mt-2.5">
              {!showNotes ? (
                <button
                  type="button"
                  className="text-xs text-muted underline-offset-2 hover:text-ink hover:underline"
                  onClick={() => setShowNotes(true)}
                >
                  Add notes / link
                </button>
              ) : (
                <label className="block">
                  <span className="sr-only">Notes or link for {item.title}</span>
                  <textarea
                    value={draft}
                    rows={2}
                    placeholder="Paste Discord/forum notes or a link…"
                    className="w-full resize-y rounded-md border border-[var(--line)] bg-paper/80 px-2.5 py-2 text-sm text-ink placeholder:text-muted/70 focus:border-accent focus:outline-none"
                    onChange={(e) => setDraft(e.target.value)}
                    onBlur={() => {
                      if (draft !== notes) void setNotes(item.id, draft);
                    }}
                  />
                </label>
              )}
            </div>
          )}
        </div>
      </div>
    </li>
  );
}
