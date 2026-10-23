export type Provenance = "both" | "grok" | "perplexity";

export type ItemKind = "resource" | "practice" | "project" | "prompt";

/** Specialty tracks A–H from curriculum synthesis (choose ~Term 3–4 / Year 2). */
export type TrackId =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H";

export interface CurriculumItem {
  id: string;
  title: string;
  kind: ItemKind;
  /** Recommended sequence within the module (lower = earlier). */
  order: number;
  url?: string;
  /** Shown when URL is missing — search query or how to find it. */
  findHint?: string;
  provenance?: Provenance;
  /** Optional notes/link field (critique, Discord paste, review notes). */
  notesEnabled?: boolean;
  /** Grok phases melded as supporting / optional beside the Perplexity spine. */
  supporting?: boolean;
  optional?: boolean;
  /** Track IDs this item is especially relevant to (highlight after choice). */
  trackTags?: TrackId[];
}

export interface Module {
  id: string;
  title: string;
  blurb?: string;
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

export interface Program {
  title: string;
  shortTitle: string;
  tagline: string;
  years: Year[];
  terms: Term[];
  foundations: Module[];
  tracks: Track[];
}
