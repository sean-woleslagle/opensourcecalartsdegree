"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

/** Scrolls to a soft roadmap section when `?section=tN` is present. */
export function RoadmapSectionScroll({ ready }: { ready: boolean }) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams.get("section");
    if (!section) return;
    const el = document.getElementById(`section-${section}`);
    if (!el) return;
    const t = window.setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => window.clearTimeout(t);
  }, [searchParams, ready]);

  return null;
}
