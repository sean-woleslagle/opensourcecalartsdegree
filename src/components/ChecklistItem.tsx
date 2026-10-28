"use client";

import Link from "next/link";
import type { CurriculumItem } from "@/data/types";
import { useProgress } from "./ProgressProvider";

export function ChecklistItem({
  item,
  isUpNext,
}: {
  item: CurriculumItem;
  isUpNext?: boolean;
}) {
  const { getStatus, setDone, dismiss, undismiss } = useProgress();
  const status = getStatus(item.id);
  const done = status === "done";
  const dismissed = status === "dismissed";
  const inProgress = status === "in_progress";
  const reference = status === "reference";

  return (
    <li
      className={`group border-b border-[var(--line)] py-3.5 last:border-b-0 ${
        isUpNext && !dismissed && !reference
          ? "bg-[color-mix(in_oklab,var(--highlight)_28%,transparent)] -mx-2 rounded-md px-2"
          : ""
      } ${dismissed || reference ? "opacity-55" : ""} ${
        inProgress
          ? "bg-[color-mix(in_oklab,var(--highlight)_18%,transparent)] -mx-2 rounded-md px-2"
          : ""
      }`}
    >
      <div className="flex items-start gap-3">
        <button
          type="button"
          aria-pressed={done}
          aria-label={
            done
              ? `Mark incomplete: ${item.title}`
              : `Mark done: ${item.title}`
          }
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            void setDone(item.id, !done);
          }}
          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition ${
            done
              ? "animate-check border-accent bg-accent text-paper"
              : dismissed
                ? "border-ink-soft/25 bg-paper-deep/40"
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
          <Link
            href={`/item/${item.id}`}
            className="block rounded-md outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent -mx-1 px-1"
            aria-label={`Open details: ${item.title}`}
          >
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              {inProgress && (
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
                  In progress
                </span>
              )}
              {isUpNext && !dismissed && !reference && !inProgress && (
                <span className="up-next-pulse text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
                  Up next
                </span>
              )}
              {dismissed && (
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                  Dismissed
                </span>
              )}
              {reference && (
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                  Reference
                </span>
              )}
              <p
                className={`text-[15px] leading-snug sm:text-base ${
                  done || dismissed || reference
                    ? "text-muted line-through decoration-mist"
                    : "text-ink group-hover:text-accent"
                }`}
              >
                {item.title}
              </p>
            </div>

            {item.description && !dismissed && (
              <p
                className={`mt-1 max-w-prose text-sm leading-relaxed ${
                  done ? "text-muted" : "text-ink-soft"
                }`}
              >
                {item.description}
              </p>
            )}

            <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] uppercase tracking-wide text-muted">
              <span>{item.kind}</span>
              {item.supporting && <span>· supporting</span>}
              {item.optional && <span>· optional</span>}
              <span className="normal-case tracking-normal text-accent/80">
                · details
              </span>
            </div>
          </Link>

          {(item.url || item.findHint) && !dismissed && (
            <div className="mt-2 text-sm">
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent underline-offset-2 hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  Open resource
                </a>
              ) : (
                <p className="text-muted">
                  Find: <span className="text-ink-soft">{item.findHint}</span>
                </p>
              )}
            </div>
          )}

          <div className="mt-2.5 flex flex-wrap items-center gap-3">
            {dismissed ? (
              <button
                type="button"
                className="min-h-9 rounded-md px-2.5 text-sm font-medium text-accent underline-offset-2 hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  void undismiss(item.id);
                }}
              >
                Undo dismiss
              </button>
            ) : (
              <button
                type="button"
                className="min-h-9 rounded-md px-2.5 text-sm font-medium text-muted hover:bg-paper-deep hover:text-ink"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  void dismiss(item.id);
                }}
                aria-label={`Dismiss ${item.title}`}
              >
                Dismiss
              </button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}
