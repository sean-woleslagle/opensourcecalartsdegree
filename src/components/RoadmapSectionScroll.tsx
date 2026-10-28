"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

/** Scrolls to a course stage when `?section=<stageId>` is present. */
export function RoadmapSectionScroll({ ready }: { ready: boolean }) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams.get("section");
    if (!section) return;
    // Prefer course stage ids; also accept legacy `tN` by falling through to id lookup.
    const el =
      document.getElementById(`section-${section}`) ??
      document.getElementById(section);
    if (!el) return;
    const t = window.setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => window.clearTimeout(t);
  }, [searchParams, ready]);

  return null;
}
