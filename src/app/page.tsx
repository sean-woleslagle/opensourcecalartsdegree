"use client";

import { Suspense } from "react";
import Link from "next/link";
import {
  program,
  roadmapModules,
  roadmapSections,
} from "@/data/curriculum";
import { ModuleList } from "@/components/ModuleList";
import { ProgressMeter } from "@/components/ProgressMeter";
import { RoadmapSectionScroll } from "@/components/RoadmapSectionScroll";
import { useFocusMode } from "@/components/FocusModeProvider";
import { useProgress } from "@/components/ProgressProvider";
import { findUpNextId, findUpNextSectionId } from "@/lib/upNext";
import { itemMatchesFocus } from "@/lib/focusMode";
import { isHandled } from "@/lib/progress/types";

export default function HomePage() {
  const { progress, handledCount, ready } = useProgress();
  const { mode, label, filterItemIds } = useFocusMode();
  const sections = roadmapSections();
  const roadmapIds = filterItemIds(roadmapModules());
  const upNextId = findUpNextId(progress, {
    focusMode: mode,
    roadmapOnly: true,
  });
  const upNextSectionId = findUpNextSectionId(progress, mode);
  const upNextItem = roadmapModules()
    .flatMap((m) => m.items)
    .find((i) => i.id === upNextId);
  const hasCurriculumProgress = roadmapModules().some((m) =>
    m.items.some(
      (item) =>
        itemMatchesFocus(item, mode, m) &&
        isHandled(progress[item.id]?.status),
    ),
  );
  const primaryHref = upNextSectionId
    ? `/?section=${upNextSectionId}`
    : "/?section=t1";
  const primaryLabel = hasCurriculumProgress ? "Continue" : "Start roadmap";

  return (
    <div>
      <Suspense fallback={null}>
        <RoadmapSectionScroll ready={ready} />
      </Suspense>
      <section className="relative overflow-hidden pb-8 pt-6 sm:pb-10 sm:pt-10">
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
          done={handledCount(roadmapIds)}
          total={roadmapIds.length}
          label={mode === "all" ? "Roadmap" : `${label} focus`}
        />
      </section>

      <p className="mb-6 text-xs text-muted">
        Recommended order — skip ahead anytime. Mark unused alternate paths as
        dismissed so Up next stays honest.
      </p>

      <div className="space-y-12">
        {sections.map((section, idx) => {
          const sectionIds = filterItemIds(section.modules);
          if (sectionIds.length === 0) return null;
          const done = handledCount(sectionIds);
          const isUpNextSection = upNextSectionId === section.formerTermId;
          return (
            <section
              key={section.id}
              id={section.id}
              className="animate-rise scroll-mt-20"
              style={{ animationDelay: `${0.04 * idx}s` }}
            >
              <div className="mb-4 flex items-baseline justify-between gap-3 border-b border-[var(--line)] pb-3">
                <div>
                  <h2
                    className="font-display text-xl font-700 tracking-tight text-ink sm:text-2xl"
                    style={{ fontWeight: 700 }}
                  >
                    {section.title}
                    {isUpNextSection && ready && upNextId && (
                      <span className="ml-2 align-middle text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
                        Up next
                      </span>
                    )}
                  </h2>
                  {section.blurb && (
                    <p className="mt-1 max-w-prose text-sm text-muted">
                      {section.blurb}
                    </p>
                  )}
                </div>
                <span className="shrink-0 text-sm tabular-nums text-muted">
                  {ready ? `${done}/${sectionIds.length}` : "—"}
                </span>
              </div>
              <ModuleList
                modules={section.modules}
                upNextId={upNextId}
                emptyLabel={`Nothing in this section for ${label} yet.`}
              />
            </section>
          );
        })}
      </div>
    </div>
  );
}
