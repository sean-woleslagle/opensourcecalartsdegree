import type { CourseStageDef, CurriculumItem } from "./types";

function course(
  partial: Omit<CurriculumItem, "kind" | "order" | "focus"> & {
    order?: number;
  },
): CurriculumItem {
  return {
    kind: "resource",
    order: partial.order ?? 1,
    focus: "blender",
    ...partial,
  };
}

/**
 * Sean’s Blender course spine (locked order).
 * CalArts modules nest under stages via supportModuleIds (ids from program.terms).
 */
export const COURSE_STAGE_DEFS: CourseStageDef[] = [
  {
    id: "abbitt",
    title: "Grant Abbitt — Blender basics",
    blurb:
      "Free YouTube playlist for Blender navigation and fundamentals. Done when you finished the playlist and can move around without a tutorial open.",
    order: 1,
    focus: "blender",
    courses: [
      course({
        id: "course-abbitt",
        title: "Grant Abbitt — Blender beginner playlist (YouTube)",
        description:
          "Work through the playlist. When finished, mark done — then use CalArts support below for drawing and first motion practice.",
        url: "https://www.youtube.com/watch?v=H3BcVxaRgVY&list=PL3GeP3YLZn5hhfaGRSmRia0OwPPMfJu0V",
        order: 1,
      }),
    ],
    supportModuleIds: ["t1-onboard", "t1-grok-support", "t1-drawing"],
  },
  {
    id: "core-mesh",
    title: "CORE — Mesh Modeling",
    blurb:
      "CG Cookie CORE fundamentals of mesh modeling. Build clean topology habits before heavier character work.",
    order: 2,
    focus: "blender",
    courses: [
      course({
        id: "course-core-mesh",
        title: "CORE Fundamentals — Mesh Modeling (CG Cookie)",
        description:
          "Finish the CORE mesh course. Pair with the CalArts modeling drills under this stage.",
        url: "https://cgcookie.com/courses/core-fundamentals-mesh-modeling",
        order: 1,
      }),
    ],
    supportModuleIds: ["t1-anim"],
  },
  {
    id: "core-sculpt",
    title: "CORE — Digital Sculpting",
    blurb:
      "CG Cookie CORE digital sculpting in Blender. Learn brushes and form — don’t stall your character course for perfect sculpt polish.",
    order: 3,
    focus: "blender",
    courses: [
      course({
        id: "course-core-sculpt",
        title: "CORE Fundamentals — Digital Sculpting (CG Cookie)",
        description:
          "Finish the CORE sculpt course. Optional CalArts sculpt practice sits under this stage.",
        url: "https://cgcookie.com/courses/core-fundamentals-of-digital-sculpting-blender",
        order: 1,
      }),
    ],
    // t2-phase-c lives inside t2-design; nest full design module here for sculpt/look adjacency
    supportModuleIds: ["t2-design"],
  },
  {
    id: "characters",
    title: "Master 3D Characters (CG Boost)",
    blurb:
      "Main character course — in progress. Pothead can run at the same time (hard-surface character).",
    order: 4,
    focus: "blender",
    courses: [
      course({
        id: "course-characters",
        title: "Master 3D Characters in Blender (CG Boost)",
        description:
          "Your primary character path. Work lessons in order; use CalArts body-mechanics support under this stage.",
        url: "https://academy.cgboost.com/courses/2626007",
        order: 1,
      }),
    ],
    supportModuleIds: ["t2-mechanics", "t1-storyboard"],
  },
  {
    id: "pothead",
    title: "Pothead — hard-surface character (CG Cookie)",
    blurb:
      "Concurrent with Master 3D Characters is OK. Hard-surface character project while you grow organic character skills.",
    order: 5,
    focus: "blender",
    courses: [
      course({
        id: "course-pothead",
        title: "Pothead — Create a Hard Surface Character (CG Cookie)",
        description:
          "In progress alongside Master 3D Characters. Finish the project character; mark done when the course project is complete.",
        url: "https://cgcookie.com/courses/pothead-create-a-hard-surface-character-in-blender",
        order: 1,
      }),
    ],
    supportModuleIds: [],
  },
  {
    id: "hs-cgboost",
    title: "Hard Surface — CG Boost",
    blurb: "Enrolled hard-surface course. Queue after characters / Pothead.",
    order: 6,
    focus: "blender",
    courses: [
      course({
        id: "course-hs-cgboost",
        title: "Hard Surface Modeling (CG Boost — enrolled)",
        description:
          "Open when Characters/Pothead are done or paused. Pair with pipeline/modeling CalArts support.",
        url: "https://academy.cgboost.com/courses/enrolled/1597003",
        order: 1,
      }),
    ],
    supportModuleIds: ["t4-pipeline-intro"],
  },
  {
    id: "hs-gamedev",
    title: "Hard Surface — GameDev.tv",
    blurb: "Second hard-surface pass after CG Boost HS.",
    order: 7,
    focus: "blender",
    courses: [
      course({
        id: "course-hs-gamedev",
        title: "Blender Hard Surface (GameDev.tv)",
        description:
          "Continue hard-surface craft. Mark done when the course project set is finished.",
        url: "https://gamedev.tv/courses/blender-hard-surface/view",
        order: 1,
      }),
    ],
    supportModuleIds: ["t4-specialty"],
  },
  {
    id: "secrets-character",
    title: "Blender Secrets — Character course",
    blurb: "Character course from Blender Secrets School.",
    order: 8,
    focus: "blender",
    courses: [
      course({
        id: "course-secrets-character",
        title: "Blender Secrets — Character course",
        description:
          "Work the character course. Use CalArts acting drills under this stage.",
        url: "https://blender-secrets-school.teachable.com/p/character?affcode=1618825_crtwigcy",
        order: 1,
      }),
    ],
    supportModuleIds: ["t3-acting"],
  },
  {
    id: "crossmind",
    title: "CrossMind — Animated Character",
    blurb: "Animated character project course after Secrets Character.",
    order: 9,
    focus: "blender",
    courses: [
      course({
        id: "course-crossmind",
        title: "CrossMind Studio — Animated Character",
        description:
          "Build and animate a character. Pair with cinematography CalArts support.",
        url: "https://crossmindstudio.gumroad.com/l/animatedcharacter",
        order: 1,
      }),
    ],
    supportModuleIds: ["t3-cinema"],
  },
  {
    id: "alive-toanimate",
    title: "Alive or ToAnimate (pick one)",
    blurb:
      "Pick one animation course later — mark the other dismissed. Keep both listed until you choose.",
    order: 10,
    focus: "blender",
    pickOne: true,
    courses: [
      course({
        id: "course-alive",
        title: "Alive — Animation Course in Blender (P2 Design)",
        description:
          "Pick Alive OR ToAnimate — not both. If you choose ToAnimate, mark this dismissed.",
        url: "https://www.p2design-academy.com/p/alive-animation-course-in-blender",
        order: 1,
      }),
      course({
        id: "course-toanimate",
        title: "ToAnimate — animation course",
        description:
          "Pick ToAnimate OR Alive — not both. If you choose Alive, mark this dismissed.",
        url: "https://www.toanimate.ca/toanimate",
        order: 2,
      }),
    ],
    supportModuleIds: ["t2-microfilm", "t3-specialty"],
  },
  {
    id: "facial",
    title: "Blender Studio — Facial Rigging",
    blurb: "Official Blender Studio facial rigging training.",
    order: 11,
    focus: "blender",
    courses: [
      course({
        id: "course-facial",
        title: "Facial Rigging (Blender Studio training)",
        description:
          "Work through facial rigging training. CalArts dialogue/facial support sits under this stage.",
        url: "https://studio.blender.org/training/facial-rigging/",
        order: 1,
      }),
    ],
    supportModuleIds: ["t5-pipeline", "t5-hard"],
  },
  {
    id: "cars",
    title: "CG Masters — 3D Cars",
    blurb: "Vehicle modeling / lookdev after character and facial work.",
    order: 12,
    focus: "blender",
    courses: [
      course({
        id: "course-cars",
        title: "3D Cars (CG Masters)",
        description:
          "Model and present cars in Blender. Use collaboration / handoff CalArts support as needed.",
        url: "https://cgmasters.gumroad.com/l/3d-cars",
        order: 1,
      }),
    ],
    supportModuleIds: ["t4-collab"],
  },
  {
    id: "environments",
    title: "CG Boost — Urban + 3D Environments",
    blurb: "Two environment courses on the same stage — do both when you reach this point.",
    order: 13,
    focus: "blender",
    courses: [
      course({
        id: "course-urban",
        title: "Master Urban Environments in Blender (CG Boost)",
        description:
          "Urban environment course. Pair with environment CalArts practice under this stage.",
        url: "https://www.cgboost.com/courses/master-urban-environments-in-blender",
        order: 1,
      }),
      course({
        id: "course-environments",
        title: "Master 3D Environments in Blender (CG Boost)",
        description:
          "Broader 3D environments course after or alongside Urban.",
        url: "https://www.cgboost.com/courses/master-3d-environments-in-blender",
        order: 2,
      }),
    ],
    supportModuleIds: ["t6-branch", "t6-studio", "t6-freelance", "t6-shared"],
  },
  {
    id: "storybook",
    title: "Magic Storybook — Grease Pencil",
    blurb:
      "Grease Pencil storybook course. Capstone and portfolio CalArts work nests here at the end of the spine.",
    order: 14,
    focus: "blender",
    courses: [
      course({
        id: "course-storybook",
        title: "Magic Storybook (CG Boost — Grease Pencil)",
        description:
          "Finish the Grease Pencil storybook course. Portfolio and launch checklists sit under this stage.",
        url: "https://www.cgboost.com/courses/magic-storybook",
        order: 1,
      }),
    ],
    supportModuleIds: [
      "t7-capstone",
      "t7-portfolio",
      "t8-launch",
      "t8-refs",
    ],
  },
];

/** Launch Pad + Blender Secrets ebook — Reference shelf only. */
export const REFERENCE_MODULE_ID = "ref-shelf";

export const REFERENCE_ITEMS: CurriculumItem[] = [
  course({
    id: "ref-launch-pad",
    title: "CG Boost Launch Pad (reference)",
    description:
      "Reference shelf — not on the main path. Revisit when you need a refresher, not as your beginner course.",
    url: "https://academy.cgboost.com/courses/554515",
    order: 1,
  }),
  course({
    id: "ref-secrets-ebook",
    title: "Blender Secrets ebook (reference)",
    description:
      "Reference shelf — tips encyclopedia. Use when stuck; don’t treat as a linear course on the main roadmap.",
    url: "https://blendersecrets.gumroad.com/l/IxofeY",
    order: 2,
  }),
];
