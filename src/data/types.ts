export type Provenance = "both" | "grok" | "perplexity";

export type ItemKind = "resource" | "practice" | "project" | "prompt";

/**
 * Daily focus for filtering the checklist.
 * `both` = show in Blender and Traditional modes.
 * Legacy A–H specialty tracks are not used for filtering.
 */
export type FocusTag = "blender" | "traditional" | "both";

/** @deprecated Kept on data for history only — not used for UI filtering. */
export type TrackId =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H";

export interface ItemLink {
  label: string;
  url: string;
}

/** Richer fields for the item drill-down view (list keeps short `description`). */
export interface ItemDetailFields {
  /** Longer how-to / context (paragraphs). */
  detail?: string;
  /** Numbered session steps — what to do, in order. */
  steps?: string[];
  /** Success criteria / done-when checks. */
  criteria?: string;
  /** Extra named links beyond the primary `url`. */
  links?: ItemLink[];
}

export interface CurriculumItem extends ItemDetailFields {
  id: string;
  title: string;
  /** Short context so the checklist item is actionable without leaving the app. */
  description?: string;
  kind: ItemKind;
  /** Recommended sequence within the module (lower = earlier). */
  order: number;
  url?: string;
  /** Shown when URL is missing — search query or how to find it. */
  findHint?: string;
  provenance?: Provenance;
  /** Optional notes/link field (critique, Discord paste, review notes). */
  notesEnabled?: boolean;
  /** Optional / supporting practice beside the main term path. */
  supporting?: boolean;
  optional?: boolean;
  /** Daily focus tag; overrides module.focus when set. */
  focus?: FocusTag;
  /** @deprecated Not used for filtering — A–H specialty tracks retired. */
  trackTags?: TrackId[];
}

export interface Module {
  id: string;
  title: string;
  blurb?: string;
  /** Default focus for items in this module (items may override). */
  focus?: FocusTag;
  items: CurriculumItem[];
}

export interface Term {
  id: string;
  number: number;
  title: string;
  focus: string;
  modules: Module[];
}

export interface Year {
  id: string;
  number: 1 | 2 | 3;
  title: string;
  focus: string;
  termIds: string[];
}

export interface Track {
  id: TrackId;
  name: string;
  portfolioTarget: string;
}

/**
 * Soft landmark on the single roadmap (not Year/Term UI).
 * Course-centered path: each section is a course stage.
 * `formerTermId` kept optional for old redirects; prefer `stageId`.
 */
export interface RoadmapSection {
  id: string;
  title: string;
  blurb?: string;
  /** @deprecated Former term id (t1–t8) — redirects only. */
  formerTermId?: string;
  /** Course stage id for anchors (`?section=`). */
  stageId: string;
  /** Primary course row(s) for this stage. */
  courses: CurriculumItem[];
  /** CalArts support modules nested under the course. */
  modules: Module[];
  /** Pick-one group (e.g. Alive vs ToAnimate). */
  pickOne?: boolean;
}

/** Spine unit: owned/queued Blender course + nested CalArts support. */
export interface CourseStageDef {
  id: string;
  title: string;
  blurb?: string;
  order: number;
  focus?: FocusTag;
  courses: CurriculumItem[];
  /** Module ids from former terms, nested under this stage. */
  supportModuleIds: string[];
  /** When true, courses are alternatives — dismiss the unused one. */
  pickOne?: boolean;
}

export interface Program {
  title: string;
  shortTitle: string;
  tagline: string;
  /** @deprecated Nav is a single roadmap; kept for data/migration only. */
  years: Year[];
  /** Former term chunks — modules are remapped under courseStages. */
  terms: Term[];
  foundations: Module[];
  /** Reference shelf (Launch Pad, Secrets ebook) — header route, not main scroll. */
  reference: Module[];
  tracks: Track[];
}
