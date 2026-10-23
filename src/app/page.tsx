"use client";

import Link from "next/link";
import {
  program,
  getTermsForYear,
  allItems,
} from "@/data/curriculum";
import { ProgressMeter } from "@/components/ProgressMeter";
import { useFocusMode } from "@/components/FocusModeProvider";
import { useProgress } from "@/components/ProgressProvider";
import { findUpNextId, findUpNextTermId } from "@/lib/upNext";
import { itemMatchesFocus } from "@/lib/focusMode";

export default function HomePage() {
  const { progress, doneCount, ready } = useProgress();
  const { mode, label, filterItemIds } = useFocusMode();
  const foundationIds = filterItemIds(program.foundations);
  const allIds =
    mode === "all"
      ? allItems().map((i) => i.id)
      : [
          ...filterItemIds(program.foundations),
          ...program.terms.flatMap((t) => filterItemIds(t.modules)),
        ];
  const upNextTermId = findUpNextTermId(progress, mode);
  const upNextId = findUpNextId(progress, { focusMode: mode });
  const upNextItem = allItems().find((i) => i.id === upNextId);
  const primaryHref = upNextTermId ? `/term/${upNextTermId}` : "/term/t1";
  const hasCurriculumProgress = program.terms.some((t) =>
    t.modules.some((m) =>
      m.items.some(
        (item) =>
          itemMatchesFocus(item, mode, m) && progress[item.id]?.done,
      ),
    ),
  );
  const primaryLabel = hasCurriculumProgress ? "Continue" : "Start Term 1";

  return (
    <div>
      <section className="relative overflow-hidden pb-10 pt-6 sm:pb-14 sm:pt-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-10 h-56 w-56 rounded-full bg-[color-mix(in_oklab,var(--highlight)_45%,transparent)] blur-3xl"
        />
        <p
          className="animate-rise font-display text-4xl font-800 leading-[0.95] tracking-tight text-ink sm:text-5xl md:text-6xl"
          style={{ fontWeight: 800 }}
        >
          {program.title}
        </p>
        <p className="animate-rise-delay-1 mt-4 max-w-md text-base text-ink-soft sm:text-lg">
          {program.tagline}
        </p>
        <div className="animate-rise-delay-2 mt-6">
          <Link
            href={primaryHref}
            className="inline-flex items-center rounded-md bg-ink px-4 py-2.5 text-sm font-semibold transition hover:bg-ink-soft"
            style={{ color: "var(--paper)" }}
          >
            {primaryLabel}
          </Link>
        </div>
        {ready && upNextItem && (
          <p className="mt-5 max-w-lg text-sm text-muted">
            <span className="font-medium text-accent">Up next:</span>{" "}
            {upNextItem.title}
            {mode !== "all" && (
              <span className="text-muted"> ({label} focus)</span>
            )}
          </p>
        )}
      </section>

      <section className="mb-8">
        <ProgressMeter
          done={doneCount(allIds)}
          total={allIds.length}
          label={mode === "all" ? "Whole program" : `${label} focus`}
        />
      </section>

      <section className="space-y-3">
        <h2
          className="font-display text-sm font-700 uppercase tracking-[0.16em] text-muted"
          style={{ fontWeight: 700 }}
        >
          Years
        </h2>
        <ol className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {program.years.map((year, idx) => {
            const terms = getTermsForYear(year.id);
            const ids = filterItemIds(terms.flatMap((t) => t.modules));
            const done = doneCount(ids);
            return (
              <li
                key={year.id}
                className="animate-rise py-5"
                style={{ animationDelay: `${0.05 * idx}s` }}
              >
                <Link href={`/year/${year.id}`} className="block group">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3
                      className="font-display text-2xl font-700 text-ink group-hover:text-accent"
                      style={{ fontWeight: 700 }}
                    >
                      {year.title}
                    </h3>
                    <span className="text-sm tabular-nums text-muted">
                      {ready ? `${done}/${ids.length}` : "—"}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{year.focus}</p>
                  <p className="mt-2 text-sm text-ink-soft">
                    Terms {terms.map((t) => t.number).join(" · ")}
                    <span className="text-muted"> — nested inside</span>
                  </p>
                  <div className="mt-3">
                    <ProgressMeter done={done} total={ids.length} label="Year" />
                  </div>
                </Link>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {terms.map((t) => {
                    const tIds = filterItemIds(t.modules);
                    const tDone = doneCount(tIds);
                    const active = upNextTermId === t.id;
                    return (
                      <li key={t.id}>
                        <Link
                          href={`/term/${t.id}`}
                          className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition ${
                            active
                              ? "bg-highlight text-ink"
                              : "bg-paper-deep/80 text-ink-soft hover:bg-mist/60"
                          }`}
                        >
                          T{t.number}
                          <span className="tabular-nums opacity-70">
                            {ready ? `${tDone}/${tIds.length}` : ""}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="mt-10 border-t border-[var(--line)] pt-8">
        <Link href="/foundations" className="group block">
          <h2
            className="font-display text-xl font-700 text-ink group-hover:text-accent"
            style={{ fontWeight: 700 }}
          >
            Foundational material
          </h2>
          <p className="mt-1 text-sm text-muted">
            Drawing, design, animation, story, context, production — reference
            alongside the main path.
          </p>
          <div className="mt-3">
            <ProgressMeter
              done={doneCount(foundationIds)}
              total={foundationIds.length}
              label="Foundational material"
            />
          </div>
        </Link>
      </section>
    </div>
  );
}
