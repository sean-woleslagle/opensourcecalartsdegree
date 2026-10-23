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
      focus: "Foundations + animation-early Blender spine",
      termIds: ["t1", "t2", "t3"],
    },
    {
      id: "y2",
      number: 2,
      title: "Year 2",
      focus: "Craft depth + choose / sample track",
      termIds: ["t4", "t5"],
    },
    {
      id: "y3",
      number: 3,
      title: "Year 3",
      focus: "Specialization + portfolio / career branch",
      termIds: ["t6", "t7", "t8"],
    },
  ],
  tracks: [
    {
      id: "A",
      name: "Character animation (film/TV)",
      portfolioTarget:
        "Strong shots: mechanics, pantomime, subtle thought-change, dialogue/sustained performance, interaction.",
    },
    {
      id: "B",
      name: "Storyboarding / visual storytelling",
      portfolioTarget:
        "2–3 sequences, ≥1 animatic, alternatives/revisions, concise pitch — no advanced sculpt prerequisite.",
    },
    {
      id: "C",
      name: "Character modeling & lookdev",
      portfolioTarget:
        "2–3 resolved characters: reference, turns, wire/UVs, materials, deformation tests.",
    },
    {
      id: "D",
      name: "Environment art",
      portfolioTarget:
        "2–3 coherent environments: reference, blockout, kits, materials, constraints.",
    },
    {
      id: "E",
      name: "Lighting & compositing",
      portfolioTarget:
        "Connected sequence or studies: moods, readability, continuity, pass breakdown.",
    },
    {
      id: "F",
      name: "Game / technical animation",
      portfolioTarget:
        "Playable or demonstrated system: input response, transitions, edge cases — not only loop movies.",
    },
    {
      id: "G",
      name: "Technical art & tools",
      portfolioTarget:
        "2–3 tools/systems with problem, use, reasoning, results, docs for another artist.",
    },
    {
      id: "H",
      name: "Independent creator / freelance generalist",
      portfolioTarget:
        "3 complete client-style case studies with brief, constraints, revisions, result.",
    },
  ],
  foundations: [
    {
      id: "f-drawing",
      title: "Always-on: Observation & drawing",
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
      title: "Always-on: Design & visual communication",
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
      title: "Always-on: Animation & performance",
      blurb: "12 Principles; intention made visible.",
      items: [
        {
          id: "f-anim-illusion",
          title: "The Illusion of Life (Thomas & Johnston)",
          kind: "resource",
          order: 1,
          findHint: "Book — library or purchase",
          provenance: "both",
        },
        {
          id: "f-anim-ask",
          title: "The Animator’s Survival Kit (Williams)",
          kind: "resource",
          order: 2,
          findHint: "Book — library or purchase",
          provenance: "perplexity",
        },
        {
          id: "f-anim-blender-fund",
          title: "Blender Studio — Animation Fundamentals",
          kind: "resource",
          order: 3,
          url: "https://studio.blender.org/training/animation-fundamentals/",
          provenance: "perplexity",
        },
        {
          id: "f-anim-rigs",
          title: "Blender Studio — training / supplied rigs",
          kind: "resource",
          order: 4,
          url: "https://studio.blender.org/training/animation-fundamentals/5d69ab4dea6789db11ee65d1/",
          provenance: "perplexity",
        },
        {
          id: "f-anim-into",
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
      title: "Always-on: Story, cinematography & editing",
      items: [
        {
          id: "f-story-glebas",
          title: "Directing the Story (Glebas)",
          kind: "resource",
          order: 1,
          findHint: "Book",
          provenance: "perplexity",
        },
        {
          id: "f-story-framed",
          title: "Framed Ink (Mateu-Mestre)",
          kind: "resource",
          order: 2,
          findHint: "Book",
          provenance: "perplexity",
        },
        {
          id: "f-story-resolve",
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
      title: "Always-on: Artistic context & criticism",
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
      title: "Always-on: Production & technical literacy",
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
          title: "Boards → animatic → package",
          items: [
            {
              id: "t1-board",
              title: "Board a 6–12 panel silent action (staging + continuity)",
              kind: "project",
              order: 1,
              provenance: "perplexity",
              trackTags: ["B"],
            },
            {
              id: "t1-animatic",
              title: "Animatic with editing + simple sound",
              kind: "project",
              order: 2,
              provenance: "perplexity",
              trackTags: ["B", "H"],
            },
            {
              id: "t1-critique",
              title: "Critique, revise, package files + attribution",
              kind: "prompt",
              order: 3,
              notesEnabled: true,
              provenance: "perplexity",
            },
            {
              id: "t1-external",
              title: "Get outside eyes (Discord/forum) — paste notes or link",
              kind: "prompt",
              order: 4,
              notesEnabled: true,
              provenance: "perplexity",
            },
            {
              id: "t1-action-5s",
              title: "5–10 second animated action (Term 1 wrap)",
              kind: "project",
              order: 5,
              provenance: "perplexity",
              trackTags: ["A", "H"],
            },
            {
              id: "t1-sketchbook",
              title: "Curated observational sketchbook selection",
              kind: "project",
              order: 6,
              provenance: "perplexity",
            },
            {
              id: "t1-three-props",
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
              title: "Study: torso / pelvis / joints / balance sketches",
              kind: "practice",
              order: 3,
              provenance: "perplexity",
            },
          ],
        },
        {
          id: "t2-design",
          title: "Design & look",
          items: [
            {
              id: "t2-char-packet",
              title: "Simplified character design packet",
              kind: "project",
              order: 1,
              provenance: "perplexity",
              trackTags: ["C", "B"],
            },
            {
              id: "t2-env-value",
              title: "Environment value study",
              kind: "practice",
              order: 2,
              provenance: "perplexity",
              trackTags: ["D", "E"],
            },
            {
              id: "t2-phase-d",
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
          title: "Microfilm (15–30s)",
          blurb:
            "One location, one central action, preferably one character. Existing / supplied rig OK. Gate feel: unbriefed viewers describe what happened and what the character wanted.",
          items: [
            {
              id: "t2-boards",
              title: "Boards + animatic for the microfilm",
              kind: "project",
              order: 1,
              provenance: "perplexity",
              trackTags: ["B"],
            },
            {
              id: "t2-film",
              title: "15–30s finished microfilm",
              kind: "project",
              order: 2,
              provenance: "perplexity",
              trackTags: ["A", "H", "E"],
            },
            {
              id: "t2-sound",
              title: "Intro sound pass in Resolve or Blender",
              kind: "practice",
              order: 3,
              provenance: "perplexity",
            },
            {
              id: "t2-review",
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
      title: "Acting, cinematography, choose specialty",
      focus:
        "Intention/beats, camera/continuity, specialty overview. End of Year 1: pick a primary track (still browsable). Track choice lives in Year 2 UI.",
      modules: [
        {
          id: "t3-acting",
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
          title: "Cinematography",
          items: [
            {
              id: "t3-three-ways",
              title: "Same beat staged three ways",
              kind: "project",
              order: 1,
              provenance: "perplexity",
              trackTags: ["B", "E"],
            },
            {
              id: "t3-continuity",
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
              title: "Keep always-on foundations hours this term",
              kind: "prompt",
              order: 3,
              provenance: "perplexity",
            },
          ],
        },
        {
          id: "t4-collab",
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
      title: "Production simulation + career branch",
      focus: "Studio concentration or independent/freelance. Both include a mid-project change request.",
      modules: [
        {
          id: "t6-branch",
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
  /** Recommended global order: foundations first (light), then T1→T8 module order. */
  const out: { id: string; termId?: string; orderKey: number }[] = [];
  let key = 0;
  for (const mod of program.foundations) {
    for (const item of [...mod.items].sort((a, b) => a.order - b.order)) {
      out.push({ id: item.id, orderKey: key++ });
    }
  }
  for (const term of [...program.terms].sort((a, b) => a.number - b.number)) {
    for (const mod of term.modules) {
      for (const item of [...mod.items].sort((a, b) => a.order - b.order)) {
        out.push({ id: item.id, termId: term.id, orderKey: key++ });
      }
    }
  }
  return out;
}
