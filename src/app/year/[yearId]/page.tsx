"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  getYear,
  getTermsForYear,
  itemIdsInYear,
  itemIdsInTerm,
} from "@/data/curriculum";
import { ProgressMeter } from "@/components/ProgressMeter";
import { TrackPicker } from "@/components/TrackPicker";
import { useProgress } from "@/components/ProgressProvider";
import { findUpNextTermId } from "@/lib/upNext";

export default function YearPage() {
  const params = useParams<{ yearId: string }>();
  const year = getYear(params.yearId);
  const { doneCount, progress, ready } = useProgress();

  if (!year) {
    return (
      <p className="text-muted">
        Year not found.{" "}
        <Link href="/" className="text-accent underline">
          Home
        </Link>
      </p>
    );
  }

  const terms = getTermsForYear(year.id);
  const ids = itemIdsInYear(year.id);
  const upNextTermId = findUpNextTermId(progress);

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
        Year {year.number} of 3
      </p>
      <h1
        className="mt-2 font-display text-3xl font-800 tracking-tight text-ink sm:text-4xl"
        style={{ fontWeight: 800 }}
      >
        {year.title}
      </h1>
      <p className="mt-2 max-w-prose text-ink-soft">{year.focus}</p>

      <div className="mt-6">
        <ProgressMeter
          done={doneCount(ids)}
          total={ids.length}
          label="Year progress"
        />
      </div>

      {year.number >= 2 && (
        <div className="mt-8">
          <TrackPicker deferred={year.number === 2} />
        </div>
      )}

      {year.number === 1 && (
        <p className="mt-6 text-sm text-muted">
          Track choice is deferred until Year 2. Browse everything; recommended order stays visible.
        </p>
      )}

      <ol className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
        {terms.map((term) => {
          const tIds = itemIdsInTerm(term.id);
          const active = upNextTermId === term.id;
          return (
            <li key={term.id} className="py-5">
              <Link href={`/term/${term.id}`} className="group block">
                <div className="flex items-baseline justify-between gap-3">
                  <h2
                    className="font-display text-xl font-700 text-ink group-hover:text-accent"
                    style={{ fontWeight: 700 }}
                  >
                    <span className="text-muted">Term {term.number}</span>
                    <span className="mx-2 text-mist">·</span>
                    {term.title}
                    {active && ready && (
                      <span className="ml-2 align-middle text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
                        Up next
                      </span>
                    )}
                  </h2>
                  <span className="shrink-0 text-sm tabular-nums text-muted">
                    {ready ? `${doneCount(tIds)}/${tIds.length}` : "—"}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted">{term.focus}</p>
                <div className="mt-3">
                  <ProgressMeter
                    done={doneCount(tIds)}
                    total={tIds.length}
                    label="Term"
                  />
                </div>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
