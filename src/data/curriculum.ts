import type { Program } from "./types";

/**
 * Structured curriculum for the daily-driver app.
 * Year 1 = Perplexity animation-early spine; Grok Phases A–E as supporting/optional.
 * Years 2–3 scaffolded from curriculum-synthesis.md (real work items, not empty shells).
 */
export const program: Program = {
  title: "Open-Source CalArts Degree",
  shortTitle: "CalArts Degree",
  tagline: "A 1–3 year independent animation path — Blender-first, checklist-driven.",
  years: [
    {
      id: "y1",
      number: 1,
      title: "Year 1",
      focus: "Animation-early Blender spine",
      termIds: ["t1", "t2", "t3"],
    },
    {
      id: "y2",
      number: 2,
      title: "Year 2",
      focus: "Craft depth + harder briefs across the full path",
      termIds: ["t4", "t5"],
    },
    {
      id: "y3",
      number: 3,
      title: "Year 3",
      focus: "Portfolio polish + career readiness",
      termIds: ["t6", "t7", "t8"],
    },
  ],
  tracks: [],
  foundations: [
    {
      id: "f-drawing",
      focus: "traditional",
      title: "Observation & drawing",
      blurb: "3–6 hrs/wk. Gesture → volume → animate → reconcile.",
      items: [
        {
          id: "f-drawing-drawabox",
          title: "Drawabox — Lesson 0 / 50% rule + construction",
          kind: "resource",
          order: 1,
          url: "https://drawabox.com/lesson/0/2/summary",
          provenance: "perplexity",
        },
        {
          id: "f-drawing-proko",
          title: "Proko — Drawing Basics (free lessons; paid optional)",
          kind: "resource",
          order: 2,
          url: "https://www.proko.com/course/drawing-basics",
          provenance: "both",
        },
        {
          id: "f-drawing-loa",
          title: "Line of Action — timed gesture sessions",
          kind: "practice",
          order: 3,
          findHint: 'Search "Line of Action gesture drawing"',
          provenance: "both",
        },
        {
          id: "f-drawing-sketchdaily",
          title: "SketchDaily — daily prompt sketches",
          kind: "practice",
          order: 4,
          findHint: 'Search "SketchDaily" or Reddit r/SketchDaily',
          provenance: "grok",
          optional: true,
        },
        {
          id: "f-drawing-loomis",
          title: "Andrew Loomis / figure books (library or authorized editions)",
          kind: "resource",
          order: 5,
          findHint: "Use library / authorized editions — do not assume public-domain PDFs",
          provenance: "both",
          optional: true,
        },
      ],
    },
    {
      id: "f-design",
      focus: "traditional",
      title: "Design & visual communication",
      blurb: "Shape language, silhouette, value, color, composition in motion.",
      items: [
        {
          id: "f-design-silhouettes",
          title: "Brief: 12 silhouettes of one character idea",
          kind: "practice",
          order: 1,
          provenance: "perplexity",
        },
        {
          id: "f-design-variants",
          title: "Brief: 3 personality variants from one silhouette",
          kind: "practice",
          order: 2,
          provenance: "perplexity",
        },
        {
          id: "f-design-room",
          title: "Brief: room of an absent occupant (story through props)",
          kind: "practice",
          order: 3,
          provenance: "perplexity",
          optional: true,
        },
      ],
    },
    {
      id: "f-anim",
      focus: "both",
      title: "Animation & performance",
      blurb: "12 Principles; intention made visible.",
      items: [
        {
          id: "f-anim-illusion",
          focus: "both",
          title: "The Illusion of Life (Thomas & Johnston)",
          kind: "resource",
          order: 1,
          findHint: "Book — library or purchase",
          provenance: "both",
        },
        {
          id: "f-anim-ask",
          focus: "both",
          title: "The Animator’s Survival Kit (Williams)",
          kind: "resource",
          order: 2,
          findHint: "Book — library or purchase",
          provenance: "perplexity",
        },
        {
          id: "f-anim-blender-fund",
          focus: "blender",
          title: "Blender Studio — Animation Fundamentals",
          kind: "resource",
          order: 3,
          url: "https://studio.blender.org/training/animation-fundamentals/",
          provenance: "perplexity",
        },
        {
          id: "f-anim-rigs",
          focus: "blender",
          title: "Blender Studio — training / supplied rigs",
          kind: "resource",
          order: 4,
          url: "https://studio.blender.org/training/animation-fundamentals/5d69ab4dea6789db11ee65d1/",
          provenance: "perplexity",
        },
        {
          id: "f-anim-into",
          focus: "both",
          title: "Into Animation — character animation foundations",
          kind: "resource",
          order: 5,
          findHint: 'Search "Into Animation" character foundations',
          provenance: "grok",
          supporting: true,
          optional: true,
        },
      ],
    },
    {
      id: "f-story",
      focus: "both",
      title: "Story, cinematography & editing",
      items: [
        {
          id: "f-story-glebas",
          focus: "both",
          title: "Directing the Story (Glebas)",
          kind: "resource",
          order: 1,
          findHint: "Book",
          provenance: "perplexity",
        },
        {
          id: "f-story-framed",
          focus: "traditional",
          title: "Framed Ink (Mateu-Mestre)",
          kind: "resource",
          order: 2,
          findHint: "Book",
          provenance: "perplexity",
        },
        {
          id: "f-story-resolve",
          focus: "both",
          title: "DaVinci Resolve — edit / sound basics",
          kind: "resource",
          order: 3,
          findHint: 'Search "DaVinci Resolve download" (Blackmagic)',
          provenance: "both",
        },
      ],
    },
    {
      id: "f-context",
      focus: "both",
      title: "Artistic context & criticism",
      blurb: "Weekly: analyze one sequence → diagram staging → try one technique.",
      items: [
        {
          id: "f-context-calarts",
          title: "CalArts learning-goals reference (character animation)",
          kind: "resource",
          order: 1,
          url: "https://catalog.calarts.edu/programs/UvzOg8mt3npdQQJrTCkI",
          provenance: "perplexity",
        },
        {
          id: "f-context-weekly",
          title: "Weekly film/art analysis logged (notes or link)",
          kind: "prompt",
          order: 2,
          notesEnabled: true,
          provenance: "perplexity",
        },
      ],
    },
    {
      id: "f-prod",
      focus: "both",
      title: "Production & technical literacy",
      items: [
        {
          id: "f-prod-naming",
          title: "Establish naming, versions, backups, and project paths",
          kind: "practice",
          order: 1,
          provenance: "perplexity",
        },
        {
          id: "f-prod-color",
          title: "Color management + delivery specs checklist for your OS",
          kind: "practice",
          order: 2,
          provenance: "perplexity",
          optional: true,
        },
      ],
    },
  ],
  terms: [
    // ─── TERM 1 ───────────────────────────────────────────
    {
      id: "t1",
      number: 1,
      title: "Seeing, spatial thinking, first movement",
      focus:
        "Drawing fundamentals; perspective/form; Blender nav; keyframes; simple visual storytelling. Animation-early — no sculpt/UV/humanoid rig required.",
      modules: [
        {
          id: "t1-onboard",
          focus: "blender",
          title: "Blender onboarding (pick one beginner course)",
          blurb: "Perplexity weeks 1–2. Finish one course path, then original work.",
          items: [
            {
              id: "t1-nav",
              title: "Navigate, transform, save, reopen, and render once",
              kind: "practice",
              order: 1,
              provenance: "perplexity",
            },
            {
              id: "t1-cgcookie",
              title: "CG Cookie Blender Basics (free) — pick one beginner course",
              kind: "resource",
              order: 2,
              url: "https://www.cgcookie.com/collections",
              findHint: "Collections hub — find a free Blender Basics / beginner course",
              provenance: "both",
            },
            {
              id: "t1-cgboost",
              title: "CG Boost — Blender for Beginners (free)",
              kind: "resource",
              order: 3,
              url: "https://www.cgboost.com/courses/free-blender-beginners-course",
              provenance: "both",
            },
            {
              id: "t1-finish-course",
              title: "Finish one onboarding course + one original prop (not tutorial copy)",
              kind: "project",
              order: 4,
              provenance: "perplexity",
            },
            {
              id: "t1-guru",
              title: "Blender Guru donut (early parts only — optional)",
              kind: "resource",
              order: 5,
              findHint: 'YouTube search "Blender Guru donut"',
              provenance: "grok",
              supporting: true,
              optional: true,
            },
            {
              id: "t1-joey",
              title: "Joey Carlino beginner playlists (optional)",
              kind: "resource",
              order: 6,
              findHint: 'YouTube search "Joey Carlino Blender beginner"',
              provenance: "grok",
              supporting: true,
              optional: true,
            },
          ],
        },
        {
          id: "t1-grok-support",
          focus: "blender",
          title: "Supporting — Grok Phase A–B (nav + box modeling)",
          blurb: "Optional depth beside animation-early. Do not block Term 1 on these.",
          items: [
            {
              id: "t1-phase-a",
              title: "Phase A: 30–60 min/day transforms (MMB orbit, Tab, G/R/S)",
              kind: "practice",
              order: 1,
              provenance: "grok",
              supporting: true,
              optional: true,
            },
            {
              id: "t1-phase-b",
              title: "Phase B: 5–10 simple props with Mirror/Subsurf/Bevel/Array/Solidify",
              kind: "practice",
              order: 2,
              provenance: "grok",
              supporting: true,
              optional: true,
            },
          ],
        },
        {
          id: "t1-drawing",
          focus: "traditional",
          title: "Parallel foundation — drawing & story",
          items: [
            {
              id: "t1-baseline-draw",
              title: "Baseline observational drawings (gesture + form)",
              kind: "practice",
              order: 1,
              provenance: "perplexity",
            },
            {
              id: "t1-six-panel",
              title: "Six-panel silent story",
              kind: "project",
              order: 2,
              provenance: "perplexity",
              trackTags: ["B", "H"],
            },
            {
              id: "t1-line-control",
              title: "Line control & basic forms drills",
              kind: "practice",
              order: 3,
              provenance: "perplexity",
            },
          ],
        },
        {
          id: "t1-anim",
          focus: "blender",
          title: "First movement — ball, pendulum, props",
          items: [
            {
              id: "t1-ball",
              title: "Bouncing ball (timing vs spacing)",
              kind: "project",
              order: 1,
              provenance: "perplexity",
              trackTags: ["A", "F"],
            },
            {
              id: "t1-ball-var",
              title: "Ball variations: light / heavy / lively",
              kind: "project",
              order: 2,
              provenance: "perplexity",
              trackTags: ["A"],
            },
            {
              id: "t1-pendulum",
              title: "Pendulum / overlapping action",
              kind: "project",
              order: 3,
              provenance: "perplexity",
              trackTags: ["A"],
            },
            {
              id: "t1-three-prop",
              title: "Original three-prop scene (value + composition)",
              kind: "project",
              order: 4,
              provenance: "perplexity",
              trackTags: ["D", "E"],
            },
            {
              id: "t1-pose-rig",
              title: "Pose a supplied rig or flour sack (balance + line of action)",
              kind: "practice",
              order: 5,
              provenance: "perplexity",
              trackTags: ["A", "C"],
            },
            {
              id: "t1-weight",
              title: "Weight shift or jump with video reference",
              kind: "practice",
              order: 6,
              provenance: "perplexity",
              trackTags: ["A", "F"],
            },
          ],
        },
        {
          id: "t1-storyboard",
          focus: "both",
          title: "Boards → animatic → package",
          items: [
            {
              id: "t1-board",
              focus: "traditional",
              title: "Board a 6–12 panel silent action (staging + continuity)",
              kind: "project",
              order: 1,
              provenance: "perplexity",
              trackTags: ["B"],
            },
            {
              id: "t1-animatic",
              focus: "both",
              title: "Animatic with editing + simple sound",
              kind: "project",
              order: 2,
              provenance: "perplexity",
              trackTags: ["B", "H"],
            },
            {
              id: "t1-critique",
              focus: "both",
              title: "Critique, revise, package files + attribution",
              kind: "prompt",
              order: 3,
              notesEnabled: true,
              provenance: "perplexity",
            },
            {
              id: "t1-external",
              focus: "both",
              title: "Get outside eyes (Discord/forum) — paste notes or link",
              kind: "prompt",
              order: 4,
              notesEnabled: true,
              provenance: "perplexity",
            },
            {
              id: "t1-action-5s",
              focus: "blender",
              title: "5–10 second animated action (Term 1 wrap)",
              kind: "project",
              order: 5,
              provenance: "perplexity",
              trackTags: ["A", "H"],
            },
            {
              id: "t1-sketchbook",
              focus: "traditional",
              title: "Curated observational sketchbook selection",
              kind: "project",
              order: 6,
              provenance: "perplexity",
            },
            {
              id: "t1-three-props",
              focus: "blender",
              title: "Three simple props (no step-by-step tutorial)",
              kind: "project",
              order: 7,
              provenance: "perplexity",
              trackTags: ["C", "D"],
            },
          ],
        },
      ],
    },
    // ─── TERM 2 ───────────────────────────────────────────
    {
      id: "t2",
      number: 2,
      title: "Body mechanics, design, first microfilm",
      focus:
        "Locomotion, posing, materials/lighting/cameras, boards/animatics, intro sound. Deliver a 15–30s microfilm.",
      modules: [
        {
          id: "t2-mechanics",
          focus: "blender",
          title: "Body mechanics",
          items: [
            {
              id: "t2-walk",
              title: "Walk with clear weight transfer",
              kind: "project",
              order: 1,
              provenance: "perplexity",
              trackTags: ["A", "F"],
            },
            {
              id: "t2-lift",
              title: "Lift / push / pull / jump",
              kind: "project",
              order: 2,
              provenance: "perplexity",
              trackTags: ["A"],
            },
            {
              id: "t2-torso",
              focus: "traditional",
              title: "Study: torso / pelvis / joints / balance sketches",
              kind: "practice",
              order: 3,
              provenance: "perplexity",
            },
          ],
        },
        {
          id: "t2-design",
          focus: "both",
          title: "Design & look",
          items: [
            {
              id: "t2-char-packet",
              focus: "traditional",
              title: "Simplified character design packet",
              kind: "project",
              order: 1,
              provenance: "perplexity",
              trackTags: ["C", "B"],
            },
            {
              id: "t2-env-value",
              focus: "traditional",
              title: "Environment value study",
              kind: "practice",
              order: 2,
              provenance: "perplexity",
              trackTags: ["D", "E"],
            },
            {
              id: "t2-phase-d",
              focus: "blender",
              title: "Supporting — Grok Phase D: Principled BSDF, 3-point/HDRI, Eevee vs Cycles",
              kind: "practice",
              order: 3,
              provenance: "grok",
              supporting: true,
              optional: true,
              trackTags: ["E", "C"],
            },
            {
              id: "t2-phase-c",
              focus: "blender",
              title: "Supporting — Grok Phase C: sculpting intro (head/creature) — optional",
              kind: "practice",
              order: 4,
              provenance: "grok",
              supporting: true,
              optional: true,
              trackTags: ["C"],
            },
            {
              id: "t2-abbitt",
              focus: "blender",
              title: "Grant Abbitt modeling / sculpt videos (optional)",
              kind: "resource",
              order: 5,
              findHint: 'YouTube search "Grant Abbitt Blender"',
              provenance: "grok",
              supporting: true,
              optional: true,
            },
          ],
        },
        {
          id: "t2-microfilm",
          focus: "both",
          title: "Microfilm (15–30s)",
          blurb:
            "One location, one central action, preferably one character. Existing / supplied rig OK. Gate feel: unbriefed viewers describe what happened and what the character wanted.",
          items: [
            {
              id: "t2-boards",
              focus: "traditional",
              title: "Boards + animatic for the microfilm",
              kind: "project",
              order: 1,
              provenance: "perplexity",
              trackTags: ["B"],
            },
            {
              id: "t2-film",
              focus: "blender",
              title: "15–30s finished microfilm",
              kind: "project",
              order: 2,
              provenance: "perplexity",
              trackTags: ["A", "H", "E"],
            },
            {
              id: "t2-sound",
              focus: "both",
              title: "Intro sound pass in Resolve or Blender",
              kind: "practice",
              order: 3,
              provenance: "perplexity",
            },
            {
              id: "t2-review",
              focus: "both",
              title: "Show to someone cold — paste their read / notes",
              kind: "prompt",
              order: 4,
              notesEnabled: true,
              provenance: "perplexity",
            },
          ],
        },
      ],
    },
    // ─── TERM 3 ───────────────────────────────────────────
    {
      id: "t3",
      number: 3,
      title: "Acting, cinematography, craft range",
      focus:
        "Intention/beats, camera/continuity, and a broader craft sampler. Browse everything — no track to pick.",
      modules: [
        {
          id: "t3-acting",
          focus: "blender",
          title: "Acting & performance",
          items: [
            {
              id: "t3-thought",
              title: "Quiet thought-change shot",
              kind: "project",
              order: 1,
              provenance: "perplexity",
              trackTags: ["A"],
            },
            {
              id: "t3-emotion",
              title: "Physical action with emotional intention",
              kind: "project",
              order: 2,
              provenance: "perplexity",
              trackTags: ["A"],
            },
            {
              id: "t3-prop-interact",
              title: "Character–prop interaction",
              kind: "project",
              order: 3,
              provenance: "perplexity",
              trackTags: ["A", "C"],
            },
            {
              id: "t3-phase-e",
              title: "Supporting — Grok Phase E: armatures / Rigify / ball → simple biped",
              kind: "practice",
              order: 4,
              provenance: "grok",
              supporting: true,
              optional: true,
              trackTags: ["A", "F", "G"],
            },
          ],
        },
        {
          id: "t3-cinema",
          focus: "both",
          title: "Cinematography",
          items: [
            {
              id: "t3-three-ways",
              focus: "both",
              title: "Same beat staged three ways",
              kind: "project",
              order: 1,
              provenance: "perplexity",
              trackTags: ["B", "E"],
            },
            {
              id: "t3-continuity",
              focus: "both",
              title: "Camera / continuity study notes",
              kind: "practice",
              order: 2,
              notesEnabled: true,
              provenance: "perplexity",
              trackTags: ["B", "E"],
            },
          ],
        },
        {
          id: "t3-specialty",
          focus: "both",
          title: "Sample specialty + decide",
          items: [
            {
              id: "t3-sampler-1",
              title: "Specialty sampler 1 (short)",
              kind: "project",
              order: 1,
              provenance: "perplexity",
            },
            {
              id: "t3-sampler-2",
              title: "Specialty sampler 2 (different family)",
              kind: "project",
              order: 2,
              provenance: "perplexity",
            },
            {
              id: "t3-job-map",
              title:
                "Write primary job family + supporting area + reference portfolios + skill map",
              kind: "prompt",
              order: 3,
              notesEnabled: true,
              provenance: "perplexity",
            },
            {
              id: "t3-overview",
              focus: "blender",
              title: "Overview pass: modeling / surfacing / rigging / lighting / real-time",
              kind: "practice",
              order: 4,
              provenance: "perplexity",
              optional: true,
            },
          ],
        },
      ],
    },
    // ─── TERM 4 (Year 2) ──────────────────────────────────
    {
      id: "t4",
      number: 4,
      title: "Specialization I + first collaboration",
      focus: "~50% specialty / rest foundations + small collab. Someone else must use your files.",
      modules: [
        {
          id: "t4-specialty",
          focus: "both",
          title: "Specialty assignments",
          items: [
            {
              id: "t4-spec-1",
              title: "Specialty assignment 1 (role-relevant brief)",
              kind: "project",
              order: 1,
              provenance: "perplexity",
            },
            {
              id: "t4-spec-2",
              title: "Specialty assignment 2",
              kind: "project",
              order: 2,
              provenance: "perplexity",
            },
            {
              id: "t4-foundations",
              focus: "both",
              title: "Keep foundational material hours this term",
              kind: "prompt",
              order: 3,
              provenance: "perplexity",
            },
          ],
        },
        {
          id: "t4-collab",
          focus: "both",
          title: "Collaboration",
          blurb: "Single-user app: log the collab yourself — no built-in social.",
          items: [
            {
              id: "t4-collab-seq",
              title: "Collaborative sequence / short / playable scene",
              kind: "project",
              order: 1,
              provenance: "perplexity",
              trackTags: ["H", "F", "G"],
            },
            {
              id: "t4-handoff",
              focus: "both",
              title: "Handoff package (naming, versions, readme)",
              kind: "practice",
              order: 2,
              provenance: "perplexity",
              trackTags: ["G", "H"],
            },
            {
              id: "t4-contrib",
              title: "Contribution breakdown written",
              kind: "prompt",
              order: 3,
              notesEnabled: true,
              provenance: "perplexity",
            },
            {
              id: "t4-postmortem",
              title: "Postmortem (what broke, what you’d change)",
              kind: "prompt",
              order: 4,
              notesEnabled: true,
              provenance: "perplexity",
            },
            {
              id: "t4-partner-used",
              title: "Confirm ≥1 other person used your delivered files",
              kind: "prompt",
              order: 5,
              notesEnabled: true,
              provenance: "perplexity",
            },
          ],
        },
      ],
    },
    // ─── TERM 5 ───────────────────────────────────────────
    {
      id: "t5",
      number: 5,
      title: "Specialization II + difficult problems",
      focus: "Harder briefs, rebuild after critique, benchmark analysis.",
      modules: [
        {
          id: "t5-hard",
          focus: "both",
          title: "Harder specialty work",
          items: [
            {
              id: "t5-brief-1",
              title: "Hard specialty brief 1",
              kind: "project",
              order: 1,
              provenance: "perplexity",
            },
            {
              id: "t5-brief-2",
              title: "Hard specialty brief 2",
              kind: "project",
              order: 2,
              provenance: "perplexity",
            },
            {
              id: "t5-brief-3",
              title: "Hard specialty brief 3",
              kind: "project",
              order: 3,
              provenance: "perplexity",
            },
            {
              id: "t5-decisions",
              title: "Decision breakdown for one piece",
              kind: "prompt",
              order: 4,
              notesEnabled: true,
              provenance: "perplexity",
            },
            {
              id: "t5-rebuild",
              title: "Substantially rebuild ≥1 piece after critique",
              kind: "project",
              order: 5,
              notesEnabled: true,
              provenance: "perplexity",
            },
            {
              id: "t5-benchmark",
              title: "Written analysis of a professional benchmark",
              kind: "prompt",
              order: 6,
              notesEnabled: true,
              provenance: "perplexity",
            },
            {
              id: "t5-external",
              title: "Role-relevant external reviewer notes (limiting problem)",
              kind: "prompt",
              order: 7,
              notesEnabled: true,
              provenance: "perplexity",
            },
          ],
        },
        {
          id: "t5-pipeline",
          focus: "blender",
          title: "Pipeline deepening (Grok Year 2 overlay)",
          items: [
            {
              id: "t5-char-pipe",
              title: "Character model → texture → rig → animate pass",
              kind: "project",
              order: 1,
              provenance: "grok",
              supporting: true,
              optional: true,
              trackTags: ["A", "C", "F"],
            },
            {
              id: "t5-layout",
              title: "Layout / lighting pass on a short sequence",
              kind: "practice",
              order: 2,
              provenance: "grok",
              supporting: true,
              optional: true,
              trackTags: ["E", "D"],
            },
          ],
        },
      ],
    },
    // ─── TERM 6 ───────────────────────────────────────────
    {
      id: "t6",
      number: 6,
      title: "Production simulation + career prep",
      focus: "Studio concentration or independent/freelance. Both include a mid-project change request.",
      modules: [
        {
          id: "t6-branch",
          focus: "both",
          title: "Choose concentration",
          items: [
            {
              id: "t6-pick",
              title: "Pick studio vs independent/freelance concentration (note it)",
              kind: "prompt",
              order: 1,
              notesEnabled: true,
              provenance: "perplexity",
              trackTags: ["H"],
            },
          ],
        },
        {
          id: "t6-studio",
          focus: "both",
          title: "Studio concentration path",
          items: [
            {
              id: "t6-assigned",
              title: "Work from assigned briefs with shot/asset continuity",
              kind: "project",
              order: 1,
              provenance: "perplexity",
              optional: true,
            },
            {
              id: "t6-versioned",
              title: "Versioned deliveries under revision / time / tech constraints",
              kind: "practice",
              order: 2,
              provenance: "perplexity",
              optional: true,
            },
            {
              id: "t6-lead-notes",
              title: "Respond to director/lead-style notes (log them)",
              kind: "prompt",
              order: 3,
              notesEnabled: true,
              provenance: "perplexity",
              optional: true,
            },
            {
              id: "t6-app-pkg",
              title: "Role-specific application package draft",
              kind: "project",
              order: 4,
              provenance: "perplexity",
              optional: true,
            },
          ],
        },
        {
          id: "t6-freelance",
          focus: "both",
          title: "Independent / freelance concentration path",
          items: [
            {
              id: "t6-discovery",
              title: "Discovery / client brief + scope + estimates",
              kind: "project",
              order: 1,
              provenance: "perplexity",
              optional: true,
              trackTags: ["H"],
            },
            {
              id: "t6-style",
              title: "Style frames + approval stages + revision limits",
              kind: "practice",
              order: 2,
              provenance: "perplexity",
              optional: true,
              trackTags: ["H"],
            },
            {
              id: "t6-client",
              title: "Mock or real small client project",
              kind: "project",
              order: 3,
              provenance: "perplexity",
              optional: true,
              trackTags: ["H"],
            },
          ],
        },
        {
          id: "t6-shared",
          focus: "both",
          title: "Shared requirement",
          items: [
            {
              id: "t6-change",
              title: "Mid-project change request handled + logged",
              kind: "prompt",
              order: 1,
              notesEnabled: true,
              provenance: "perplexity",
            },
          ],
        },
      ],
    },
    // ─── TERM 7 ───────────────────────────────────────────
    {
      id: "t7",
      number: 7,
      title: "Capstone + portfolio development",
      focus: "Scoped capstone that supports your intended profession + docs.",
      modules: [
        {
          id: "t7-capstone",
          focus: "both",
          title: "Capstone",
          items: [
            {
              id: "t7-pick",
              title:
                "Pick capstone type (short / acting sequence / boards / asset package / tool / case study)",
              kind: "prompt",
              order: 1,
              notesEnabled: true,
              provenance: "perplexity",
            },
            {
              id: "t7-brief",
              title: "Docs: brief + audience",
              kind: "prompt",
              order: 2,
              notesEnabled: true,
              provenance: "perplexity",
            },
            {
              id: "t7-milestones",
              title: "Docs: milestones + risks",
              kind: "prompt",
              order: 3,
              notesEnabled: true,
              provenance: "perplexity",
            },
            {
              id: "t7-assets",
              title: "Docs: asset / licensing list",
              kind: "prompt",
              order: 4,
              notesEnabled: true,
              provenance: "perplexity",
            },
            {
              id: "t7-critique-log",
              title: "Critique log kept through the project",
              kind: "prompt",
              order: 5,
              notesEnabled: true,
              provenance: "perplexity",
            },
            {
              id: "t7-deliver",
              title: "Capstone deliverable complete",
              kind: "project",
              order: 6,
              provenance: "perplexity",
            },
            {
              id: "t7-postmortem",
              title: "Postmortem",
              kind: "prompt",
              order: 7,
              notesEnabled: true,
              provenance: "perplexity",
            },
          ],
        },
        {
          id: "t7-portfolio",
          focus: "both",
          title: "Portfolio in parallel",
          items: [
            {
              id: "t7-reel-plan",
              title: "Reel / boards / stills plan for target role (~1–3 min guidance)",
              kind: "practice",
              order: 1,
              provenance: "both",
            },
            {
              id: "t7-artstation",
              title: "ArtStation or personal site updated",
              kind: "practice",
              order: 2,
              findHint: 'Search "ArtStation" or set up a simple site',
              provenance: "grok",
              notesEnabled: true,
            },
          ],
        },
      ],
    },
    // ─── TERM 8 ───────────────────────────────────────────
    {
      id: "t8",
      number: 8,
      title: "External review, revision, professional launch",
      focus: "Curated portfolio, applications or outreach, continuing plan.",
      modules: [
        {
          id: "t8-launch",
          focus: "both",
          title: "Launch package",
          items: [
            {
              id: "t8-portfolio",
              title: "Curated portfolio (role-specific)",
              kind: "project",
              order: 1,
              provenance: "perplexity",
            },
            {
              id: "t8-resume",
              title: "Role-specific résumé / intro",
              kind: "practice",
              order: 2,
              provenance: "perplexity",
            },
            {
              id: "t8-reel",
              title: "Reel / boards / stills / tools as appropriate",
              kind: "project",
              order: 3,
              provenance: "perplexity",
            },
            {
              id: "t8-breakdown",
              title: "Breakdown + attribution",
              kind: "prompt",
              order: 4,
              notesEnabled: true,
              provenance: "perplexity",
            },
            {
              id: "t8-fresh",
              title: "Fresh unfamiliar brief completed under time",
              kind: "project",
              order: 5,
              provenance: "perplexity",
            },
            {
              id: "t8-outreach",
              title: "Application or client-outreach plan",
              kind: "prompt",
              order: 6,
              notesEnabled: true,
              provenance: "perplexity",
              trackTags: ["H"],
            },
            {
              id: "t8-continue",
              title: "Continuing-development plan",
              kind: "prompt",
              order: 7,
              notesEnabled: true,
              provenance: "perplexity",
            },
            {
              id: "t8-reviewers",
              title: "Two reviewers preferred — specialty + outsider (paste notes)",
              kind: "prompt",
              order: 8,
              notesEnabled: true,
              provenance: "perplexity",
            },
          ],
        },
        {
          id: "t8-refs",
          focus: "both",
          title: "Career references",
          items: [
            {
              id: "t8-pixar",
              title: "Pixar Careers FAQ",
              kind: "resource",
              order: 1,
              url: "https://www.pixar.com/careers/",
              provenance: "perplexity",
              optional: true,
            },
            {
              id: "t8-disney",
              title: "Disney Animation Careers FAQ",
              kind: "resource",
              order: 2,
              url: "https://www.disneyanimation.com/careers/",
              provenance: "perplexity",
              optional: true,
            },
            {
              id: "t8-calarts",
              title: "CalArts BFA Character Animation (reference, not equivalence)",
              kind: "resource",
              order: 3,
              url: "https://calarts.edu/academics/programs-and-degrees/bfa-character-animation",
              provenance: "perplexity",
              optional: true,
            },
          ],
        },
      ],
    },
  ],
};

export function getYear(yearId: string) {
  return program.years.find((y) => y.id === yearId);
}

export function getTerm(termId: string) {
  return program.terms.find((t) => t.id === termId);
}

export function getTermsForYear(yearId: string) {
  const year = getYear(yearId);
  if (!year) return [];
  return year.termIds
    .map((id) => getTerm(id))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));
}

export function allItems() {
  const items = [
    ...program.foundations.flatMap((m) => m.items),
    ...program.terms.flatMap((t) => t.modules.flatMap((m) => m.items)),
  ];
  return items;
}

export function itemIdsInTerm(termId: string) {
  const term = getTerm(termId);
  if (!term) return [];
  return term.modules.flatMap((m) => m.items.map((i) => i.id));
}

export function itemIdsInYear(yearId: string) {
  return getTermsForYear(yearId).flatMap((t) => itemIdsInTerm(t.id));
}

export function orderedProgramItems() {
  /** Recommended global order: T1→T8 spine first; foundational material as reference after. */
  const out: { id: string; termId?: string; orderKey: number }[] = [];
  let key = 0;
  for (const term of [...program.terms].sort((a, b) => a.number - b.number)) {
    for (const mod of term.modules) {
      for (const item of [...mod.items].sort((a, b) => a.order - b.order)) {
        out.push({ id: item.id, termId: term.id, orderKey: key++ });
      }
    }
  }
  for (const mod of program.foundations) {
    for (const item of [...mod.items].sort((a, b) => a.order - b.order)) {
      out.push({ id: item.id, orderKey: key++ });
    }
  }
  return out;
}
