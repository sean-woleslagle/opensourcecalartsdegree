"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { getTerm, program } from "@/data/curriculum";
import { ModuleList } from "@/components/ModuleList";
import { ProgressMeter } from "@/components/ProgressMeter";
import { useFocusMode } from "@/components/FocusModeProvider";
import { useProgress } from "@/components/ProgressProvider";
import { findUpNextId } from "@/lib/upNext";

export default function TermPage() {
  const params = useParams<{ termId: string }>();
  const term = getTerm(params.termId);
  const { handledCount, progress, ready } = useProgress();
  const { filterItemIds, mode, label } = useFocusMode();

  if (!term) {
    return (
      <p className="text-muted">
        Term not found.{" "}
        <Link href="/" className="text-accent underline">
          Home
        </Link>
      </p>
    );
  }

  const year = program.years.find((y) => y.termIds.includes(term.id));
  const ids = filterItemIds(term.modules);
  const upNextId = findUpNextId(progress, {
    termId: term.id,
    focusMode: mode,
  });
  const upNextModuleId = term.modules.find((m) =>
    m.items.some((i) => i.id === upNextId),
  )?.id;

  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
        {year && (
          <Link href={`/year/${year.id}`} className="hover:text-accent">
            {year.title}
          </Link>
        )}
        <span aria-hidden>·</span>
        <span>Term {term.number}</span>
      </div>
      <h1
        className="mt-2 font-display text-3xl font-800 tracking-tight text-ink sm:text-4xl"
        style={{ fontWeight: 800 }}
      >
        {term.title}
      </h1>
      <p className="mt-2 max-w-prose text-sm text-ink-soft sm:text-base">
        {term.focus}
      </p>
      <p className="mt-3 text-xs text-muted">
        Recommended order shown — skip ahead anytime. Mark unused alternate
        paths as dismissed so Up next stays honest.
      </p>

      <div className="mt-6">
        <ProgressMeter
          done={handledCount(ids)}
          total={ids.length}
          label={mode === "all" ? "Term progress" : `${label} in this term`}
        />
      </div>

      {ready && upNextId && upNextModuleId && (
        <p className="mt-4 text-sm text-muted">
          Scroll to{" "}
          <a
            href={`#${upNextModuleId}`}
            className="font-medium text-accent hover:underline"
          >
            up next
          </a>{" "}
          in the list below.
        </p>
      )}

      <div className="mt-10">
        <ModuleList
          modules={term.modules}
          upNextId={upNextId}
          emptyLabel={`Nothing in this term for ${label} yet.`}
        />
      </div>
    </div>
  );
}
