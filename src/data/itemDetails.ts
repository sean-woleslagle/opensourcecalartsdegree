import type { CurriculumItem, ItemDetailFields } from "./types";

/**
 * Richer drill-down content keyed by curriculum item id.
 * List view keeps short `description`; detail page merges these fields.
 */
export const itemDetails: Record<string, ItemDetailFields> = {
  "f-drawing-drawabox": {
    detail: "Drawabox builds construction habits (boxes, forms, spatial thinking). It is one component of drawing time — not the whole art education. Its own 50% rule caps improvement-focused drills at half of drawing hours; keep the rest observational or playful.",
    steps: [
      "Open Lesson 0 and read the 50% rule summary.",
      "Complete the introductory construction exercises (boxes, organic forms) at a sustainable pace — do not binge the whole program before animating.",
      "Apply the same construction ideas to props, room corners, and simplified figures from life.",
      "Cap drill time at ~50% of drawing hours; spend the other half on gesture, observation, or play.",
      "When a construction habit sticks, mark done and keep Drawabox as an optional reference — do not block Term 1 animation on finishing every lesson.",
    ],
    criteria: "· You can explain the 50% rule and are applying construction to real subjects.\n· Drill time is capped; observational drawing is still happening weekly.",
    links: [
      { label: "Drawabox Lesson 0 / 50% rule", url: "https://drawabox.com/lesson/0/2/summary" },
    ],
  },
  "f-drawing-proko": {
    detail: "Use free lessons to test the instructor before buying anything. The paid Drawing Basics course is a one-time purchase with extra assignments — not guaranteed personal mentorship. Do not stack several overlapping fundamentals courses.",
    steps: [
      "Browse free Drawing Basics lessons and pick one topic you actually struggle with (form, values, or proportion).",
      "Complete 2–3 free lessons with the assignments — draw along, do not only watch.",
      "Decide: if free lessons already fix the gap, dismiss the paid course path and mark this done.",
      "Only if a demonstrated gap remains, consider the paid course — still finish its assignments before buying another fundamentals product.",
    ],
    criteria: "· You completed free lessons with drawings, not just watching.\n· You did not buy overlapping fundamentals courses \"just in case.\"",
    links: [
      { label: "Proko Drawing Basics", url: "https://www.proko.com/course/drawing-basics" },
    ],
  },
  "f-drawing-loa": {
    detail: "Timed gesture builds weight, balance, and line of action faster than finished figure drawings. Goal is readable energy — not pretty pages.",
    steps: [
      "Search for Line of Action (or an equivalent timed-gesture site) and set a session: 30–60s poses first, then a few longer ones.",
      "Do a short daily or near-daily session (even 10–15 minutes counts).",
      "Focus each page on weight and line of action; ignore polish.",
      "Once a week, pick 3 gestures and rebuild them as simple volumes.",
      "If SketchDaily covers the same habit, dismiss one of the two prompt sources.",
    ],
    criteria: "· You have a repeatable gesture habit.\n· Pages show weight/balance, not only outlines.",
  },
  "f-drawing-sketchdaily": {
    detail: "Optional alternate prompt source for variety. Pick Line of Action OR SketchDaily as your daily driver — do not run both as obligations.",
    steps: [
      "Try one SketchDaily (or r/SketchDaily) prompt session.",
      "Compare to Line of Action: keep the one you will actually open tomorrow.",
      "Dismiss the other prompt source so the checklist stays honest.",
    ],
    criteria: "· One prompt source is active; the alternate is dismissed (or you knowingly keep both as play).",
  },
  "f-drawing-loomis": {
    detail: "Figure construction books help when gesture alone is not giving volume. Use library or authorized editions — do not assume \"public domain PDFs\" are legal where you are.",
    steps: [
      "Borrow or buy an authorized Loomis (or similar) edition — library first.",
      "Assign one exercise (head construction or figure mannequin) and do it the same week.",
      "Apply the construction method to a life drawing or photo reference.",
      "Dismiss if Drawabox + gesture already cover volume for now.",
    ],
    criteria: "· You completed at least one assigned exercise from an authorized copy.\n· Or you dismissed this as optional for the current term.",
  },
  "f-drawing-observe-loop": {
    detail: "Connect drawing to animation: observe → key poses → volumes → animate → reconcile. The point is finding where drawings and motion disagree about weight.",
    steps: [
      "Watch someone lift a bag (or film yourself).",
      "Draw five key poses from the action.",
      "Rebuild torso/pelvis as simple volumes from another angle.",
      "Animate a simplified version of the lift (even a flour sack or box character).",
      "Note mismatches between drawings and animation; fix the worse of the two.",
    ],
    criteria: "· You have a short loop documenting observe → draw → animate → reconcile.\n· Notes name at least one weight/contact disagreement you fixed.",
  },
  "f-design-silhouettes": {
    detail: "Silhouette-first design forces shape language before interior detail. Push until personality reads in black.",
    steps: [
      "Pick one character idea and write a one-line personality.",
      "Draw 12 silhouettes — vary proportion, posture, and shape family.",
      "Circle the 3 that read personality without any interior lines.",
      "Discard cute-but-generic shapes; iterate until strangers can guess the vibe.",
    ],
    criteria: "· 12 silhouettes exist; 3 clear winners read personality in pure black.",
  },
  "f-design-variants": {
    detail: "Same narrative function, three personalities — keeps the silhouette family while changing attitude.",
    steps: [
      "Take one winning silhouette family.",
      "Design three personality variants that could play the same story role.",
      "Keep the silhouette kinship obvious; change posture, proportion accents, and details.",
      "Label each variant with a one-word want.",
    ],
    criteria: "· Three variants share a silhouette family but read as different people.",
  },
  "f-design-room": {
    detail: "Story through props: the absent occupant should be obvious from the space alone.",
    steps: [
      "Choose who lives there (job, habit, secret) without drawing them.",
      "Dress a room with props and wear patterns that only that person would leave.",
      "Remove anything generic; amplify 2–3 hero props.",
      "Show a cold reader — can they describe the occupant?",
    ],
    criteria: "· A cold reader can describe who lives there from the room alone.",
  },
  "f-design-grayscale": {
    detail: "If a sequence dies in grayscale, color was doing too much storytelling work. Fix value grouping and focal hierarchy.",
    steps: [
      "Take a sequence or still you care about and convert to grayscale.",
      "Mark the intended focal point; check if value contrast supports it.",
      "Regroup values into 3–4 clear masses; reduce midtone mush.",
      "Reintroduce color only after grayscale reads.",
    ],
    criteria: "· The redesigned version stays readable in grayscale.",
  },
  "f-design-turn-expr": {
    detail: "Design sheets lie until you pose them. Test turns and expressions against poses you actually animate.",
    steps: [
      "Build a simple turn + expression sheet for a character you will animate.",
      "Pose the character in 4 animation-friendly extremes.",
      "Note where the sheet breaks appeal or silhouette.",
      "Revise the sheet (or the design) to match what animation needs.",
    ],
    criteria: "· Sheet revised after real posing — not only pretty turnarounds.",
  },
  "f-anim-illusion": {
    detail: "The Illusion of Life is the classic 12 Principles reference. Borrow first; assign exercises — do not only read passively.",
    steps: [
      "Borrow or obtain the book; skim the Principles chapters.",
      "Pick one principle (e.g. anticipation or follow-through) and assign a 1–2 hour exercise the same week.",
      "Apply that principle to a current Term project (ball, walk, or acting shot).",
      "Keep notes of which principle fixed a clarity problem.",
    ],
    criteria: "· At least one principle turned into a concrete exercise, not just highlights.",
  },
  "f-anim-ask": {
    detail: "Williams is densest on timing charts, walks, and acting craft. Pair chapters with same-week exercises.",
    steps: [
      "Borrow or buy The Animator’s Survival Kit.",
      "Read one chapter tied to your current shot (walks, timing, or acting).",
      "Do the matching drill the same week (chart a bounce; film a walk; plan keys).",
      "Bring one chart or rough into your Blender graph editor workflow.",
    ],
    criteria: "· A chapter produced a same-week exercise you can point to.",
  },
  "f-anim-blender-fund": {
    detail: "Blender Studio Animation Fundamentals is the preferred low-cost animation spine: ball → character acting on free training rigs. Prefer this over stacking paid beginner courses.",
    steps: [
      "Open Animation Fundamentals and skim the path from ball to character.",
      "Complete the early ball / timing modules if Term 1 ball work needs structure.",
      "Download the linked training rigs when you reach posing / acting.",
      "Use this as your primary animation course — dismiss duplicate paid beginner stacks.",
    ],
    criteria: "· You know where the spine lives and have started (or scheduled) the modules that match your term.",
    links: [
      { label: "Blender Studio — Animation Fundamentals", url: "https://studio.blender.org/training/animation-fundamentals/" },
    ],
  },
  "f-anim-rigs": {
    detail: "Supplied training rigs let you practice acting without blocking on building a humanoid. Always credit them.",
    steps: [
      "Download a Blender Studio training / flour-sack style rig from the linked page.",
      "Open it, confirm controls work, and save a working copy with your naming.",
      "Pose a strong silhouette; credit the rig in your file notes.",
      "Use it for Term 1–3 acting practice instead of waiting on your own rig.",
    ],
    criteria: "· A supplied rig opens cleanly and is credited in your project notes.",
    links: [
      { label: "Blender Studio training rigs", url: "https://studio.blender.org/training/animation-fundamentals/5d69ab4dea6789db11ee65d1/" },
    ],
  },
  "f-anim-into": {
    detail: "Supporting alternate if Blender Studio is not clicking. Dismiss if you already have a primary animation course.",
    steps: [
      "Search Into Animation character foundations and preview one lesson.",
      "Only continue if it fills a gap your primary spine does not.",
      "Otherwise dismiss — one animation spine is enough.",
    ],
    criteria: "· Either actively using it for a gap, or dismissed as duplicate.",
  },
  "f-anim-mentor": {
    detail: "Paid workshops/programs only when free critique is not enough. Before paying, verify they review your actual work with specific notes and revise/resubmit.",
    steps: [
      "List what free critique (Discord/forum/peers) is failing to give you.",
      "Compare workshops vs longer program pages — note review frequency and format.",
      "Ask (or find answers to): Will they review my work? Drawovers? Revise/resubmit? Role match?",
      "Buy only if answers are yes for your gap; otherwise dismiss and invest in more revision cycles.",
    ],
    criteria: "· Decision logged: bought with clear review expectations, or dismissed.",
    links: [
      { label: "Animation Mentor workshops", url: "https://www.animationmentor.com/workshops/" },
      { label: "Animation Mentor program", url: "https://www.animationmentor.com/animation-program/" },
    ],
  },
  "f-story-glebas": {
    detail: "Directing the Story covers boards, staging, and visual causality. Assign exercises per chapter.",
    steps: [
      "Borrow Directing the Story.",
      "Read one chapter; assign a board exercise the same week (e.g. cause→effect panels).",
      "Apply one staging idea to your current boards or six-panel story.",
    ],
    criteria: "· One chapter → one exercise applied to current work.",
  },
  "f-story-framed": {
    detail: "Composition and cinematic framing for story artists — useful when boards feel flat.",
    steps: [
      "Borrow Framed Ink; study one framing/composition pattern.",
      "Redraw a weak board panel using that pattern.",
      "Check silhouette and value of the revised panel.",
    ],
    criteria: "· At least one panel improved by a specific framing idea from the book.",
  },
  "f-story-gurney": {
    detail: "Optional color/light reference when lookdev or lighting feels muddy. Borrow first.",
    steps: [
      "Borrow Color and Light when a lighting or value problem appears.",
      "Do one study: same subject under two lighting intents.",
      "Dismiss if value studies elsewhere already cover the gap this term.",
    ],
    criteria: "· Used for a concrete lighting problem, or dismissed as optional.",
  },
  "f-story-resolve": {
    detail: "DaVinci Resolve is the primary free edit + sound tool beside Blender’s compositor. Learn enough to cut an animatic and a final short.",
    steps: [
      "Download DaVinci Resolve (free) from Blackmagic.",
      "Import still boards or playblasts; cut a simple animatic with timing.",
      "Add one scratch sound bed or effect.",
      "Export a reviewable movie; note your delivery preset for later terms.",
    ],
    criteria: "· You can cut and export a short animatic or review reel without help.",
  },
  "f-story-drill-shots": {
    detail: "Forces shot economy: the same event in 1, 3, and 6 shots teaches what each cut buys.",
    steps: [
      "Pick a simple event (someone enters and finds a note).",
      "Board it in 1 shot, then 3, then 6.",
      "Note what each cut adds (emphasis, geography, emotion).",
      "Choose the leanest version that still reads for a current project.",
    ],
    criteria: "· Three versions exist with notes on what each cut buys.",
  },
  "f-context-calarts": {
    detail: "Reference for breadth of a character-animation education (history, culture, directing) — not a claim this path equals the degree.",
    steps: [
      "Open the CalArts learning-goals / program reference page.",
      "Skim categories of study beyond software (history, criticism, collaboration).",
      "Pick one breadth gap to cover via weekly film analysis this term.",
    ],
    criteria: "· You noted one breadth gap and tied it to a weekly analysis habit.",
    links: [
      { label: "CalArts character animation reference", url: "https://catalog.calarts.edu/programs/UvzOg8mt3npdQQJrTCkI" },
    ],
  },
  "f-context-weekly": {
    detail: "Weekly: analyze one sequence → diagram staging → try one technique the same week.",
    steps: [
      "Pick one short sequence (30–90s) from a film or short you admire.",
      "Diagram staging, eyelines, and cuts on paper or in notes.",
      "Steal one technique into a new exercise the same week.",
      "Paste a link or notes in the notes field.",
    ],
    criteria: "· A logged analysis exists with one technique tested in new work.",
  },
  "f-prod-naming": {
    detail: "Relative paths, version folders, and backups before a crash — not after. Everyone should deliver work another person can open.",
    steps: [
      "Create a project root with assets/, wip/, review/, final/ (or similar).",
      "Adopt a version naming pattern (shot_v001.blend) and relative paths.",
      "Set an automatic or weekly backup (cloud or external).",
      "Open last week’s file on a clean session to prove paths resolve.",
    ],
    criteria: "· A project reopens without missing links; backup plan exists.",
  },
  "f-prod-color": {
    detail: "Frame rate, color space, image sequences vs movies, review formats — keep a one-page checklist for your OS.",
    steps: [
      "Write a one-page delivery checklist: fps, resolution, color space, file type.",
      "Match Blender output settings to that checklist for the current term.",
      "Test one review export on your phone and a second device.",
    ],
    criteria: "· Checklist exists and a test export looks correct on two devices.",
  },
  "f-prod-pureref": {
    detail: "Keep reference organized per project. Notion/Obsidian fine for notes — pick one system and stick with it.",
    steps: [
      "Install PureRef (or choose an equivalent board tool).",
      "Build one board for your current term project.",
      "Park the board path next to your .blend / project notes.",
    ],
    criteria: "· Active project has a living reference board.",
  },
  "t1-nav": {
    detail: "Week 1 goal: prove you can navigate, transform, save, reopen, and render without help. Muscle memory beats watching another intro video.",
    steps: [
      "Create a new Blender file; add 2–3 simple objects and arrange them.",
      "Practice MMB orbit, Shift+MMB pan, scroll zoom until it feels automatic.",
      "Use Tab for Object/Edit; G/R/S with axis locks (X/Y/Z); try Shift+A, X, Shift+D.",
      "Save the file, quit Blender completely, reopen the file, and confirm nothing broke.",
      "Set a camera and lights if needed; render once (Eevee is fine) and save the image.",
      "Mark done only when you can repeat reopen + render without looking up the basics.",
    ],
    criteria: "· You independently create, save, reopen, and render a simple arrangement.",
  },
  "t1-cgcookie": {
    detail: "Pick ONE free beginner course. CG Cookie Blender Basics covers navigation, modeling, materials, lighting, rendering, and animation with a free account. The collections URL is a hub — find Blender Basics inside. If you already chose CG Boost, dismiss this item.",
    steps: [
      "Decide now: CG Cookie OR CG Boost — not both. If CG Boost is your pick, dismiss this item and open the CG Boost row instead.",
      "Create a free CG Cookie account and open the collections hub.",
      "Locate the free Blender Basics / beginner course (hub link is not always a deep link).",
      "Work session-by-session: navigation → modeling → materials → lighting → render → intro animation. Finish lessons; do the exercises.",
      "When the course is complete, mark this done and dismiss CG Boost (t1-cgboost) as the unused alternate.",
      "Next: t1-finish-course — build a different original prop with no tutorial open.",
    ],
    criteria: "· Free Blender Basics path finished.\n· The alternate beginner course (CG Boost) is dismissed.\n· You are ready for an original prop without step-by-step help.",
    links: [
      { label: "CG Cookie collections (find Blender Basics)", url: "https://www.cgcookie.com/collections" },
    ],
  },
  "t1-cgboost": {
    detail: "Pick ONE free beginner course. CG Boost Blender for Beginners is roughly a five-hour apple still-life path: interface, modeling, texturing, lighting, and rendering. Do not also finish a second identical beginner course. If you already chose CG Cookie, dismiss this item.",
    steps: [
      "Decide now: CG Boost OR CG Cookie — not both. If CG Cookie is your pick, dismiss this item and open the CG Cookie row instead.",
      "Open the free Blender for Beginners course page and start the apple still-life path.",
      "Complete the lessons covering interface, modeling, texturing, lighting, and rendering (~5 hours total — split across sessions).",
      "Follow along until you have a finished still-life render from the course.",
      "When finished, mark this done and dismiss CG Cookie (t1-cgcookie) as the unused alternate.",
      "Next: t1-finish-course — model a different simple prop with no step-by-step video open. Tutorials teach tools; original pieces teach judgment.",
    ],
    criteria: "· Free beginner course finished with a course render.\n· The alternate beginner course (CG Cookie) is dismissed.\n· You move on to an original prop — not a second identical beginner course.",
    links: [
      { label: "CG Boost — Blender for Beginners (free)", url: "https://www.cgboost.com/courses/free-blender-beginners-course" },
      { label: "CG Boost courses (lifetime / paid later)", url: "https://www.cgboost.com/courses" },
    ],
  },
  "t1-finish-course": {
    detail: "After onboarding, make a different small project without step-by-step help. Finishing three near-identical beginner courses feels safer than independent work — skip that trap.",
    steps: [
      "Confirm one beginner course is done and the alternate is dismissed.",
      "Choose a simple prop that is NOT the course subject (not the donut/apple/tutorial copy).",
      "Model it with reference images only — no step-by-step modeling video open.",
      "Apply basic materials and light; render a clean still.",
      "Save/reopen/render once more to prove the file is solid.",
    ],
    criteria: "· One original prop exists that you built without a tutorial script.\n· File reopens and renders cleanly.",
  },
  "t1-keyframes": {
    detail: "Needed before the bouncing-ball block: set keys, scrub the timeline, and read a simple F-curve.",
    steps: [
      "In a practice file, key location on an object at frames 1 and 20.",
      "Scrub and play; confirm interpolation.",
      "Open the Graph Editor; identify the F-curve and try easing a handle.",
      "Delete and redo keys until the workflow is automatic.",
    ],
    criteria: "· You can set keys, scrub, and adjust a basic F-curve without a tutorial open.",
  },
  "t1-guru": {
    detail: "Optional supporting modeling reps. Dismiss if CG Cookie/CG Boost already covered this ground.",
    steps: [
      "Only start if you want extra modeling muscle memory after your primary course.",
      "Do early donut parts only — stop before it becomes a second full beginner path.",
      "Otherwise dismiss this supporting item.",
    ],
    criteria: "· Early parts done as extra reps, or dismissed as duplicate.",
  },
  "t1-joey": {
    detail: "Optional interface muscle-memory playlists. Dismiss if your primary course is enough.",
    steps: [
      "Preview one Joey Carlino beginner playlist video.",
      "Use only for gaps (selection, modifiers, etc.).",
      "Dismiss if primary onboarding already covers navigation and modeling.",
    ],
    criteria: "· Used for a specific gap, or dismissed.",
  },
  "t1-phase-a": {
    detail: "Supporting Grok Phase A: daily transform drills until navigation is automatic. Do not block Term 1 animation on this.",
    steps: [
      "Schedule 30–60 min/day for a few days: MMB orbit, Tab modes, G/R/S.",
      "Practice Vertex/Edge/Face select (1/2/3), Shift+A, X, Shift+D.",
      "Stop once navigation is automatic — return to the animation-early spine.",
    ],
    criteria: "· Navigation feels automatic, or item dismissed as optional support.",
  },
  "t1-phase-b": {
    detail: "Supporting box-modeling set with live modifiers. Optional depth — do not delay ball/animatic work.",
    steps: [
      "Box-model 5–10 simple props (chair, mug, crate, robot) using Extrude/Inset/Loop Cut.",
      "Use Mirror/Subsurf/Bevel/Array/Solidify; keep modifiers live when useful; prefer quads.",
      "Finish one original prop after the set.",
      "Dismiss if Term 1 animation schedule is at risk.",
    ],
    criteria: "· Prop set + one original, or dismissed to protect Term 1 scope.",
  },
  "t1-baseline-draw": {
    detail: "Establish a before snapshot: people, tools, interiors, animals. You will compare later.",
    steps: [
      "Fill several pages with observational sketches (gesture + form).",
      "Date the pages; photograph or scan a selection.",
      "Keep them available for Term 1 sketchbook curation.",
    ],
    criteria: "· Dated baseline pages exist for later comparison.",
  },
  "t1-six-panel": {
    detail: "Clear objective, obstacle, and consequence with no dialogue. Must read to someone who did not hear your pitch.",
    steps: [
      "Write one sentence: who wants what, what blocks them, what changes.",
      "Board six silent panels — no dialogue crutches.",
      "Show a cold reader; revise panels that confuse causality.",
    ],
    criteria: "· Cold reader can retell objective, obstacle, and consequence.",
  },
  "t1-line-control": {
    detail: "Parallel to weeks 1–2 onboarding: ellipses, boxes, confident lines.",
    steps: [
      "Do timed ellipse and straight-line drills.",
      "Construct boxes in 1- and 2-point perspective.",
      "Keep sessions short and frequent beside Blender onboarding.",
    ],
    criteria: "· A week of drills shows steadier control than your baseline page.",
  },
  "t1-perspective": {
    detail: "Term 1 gate skill: construct a simple object or room corner in perspective — not eyeballing alone.",
    steps: [
      "Pick a simple object or room corner from life.",
      "Construct it with vanishing points / box method.",
      "Check proportions against the real subject.",
      "Keep the construction sheet for the Term 1 self-check.",
    ],
    criteria: "· A constructed perspective drawing exists you can explain.",
  },
  "t1-ball": {
    detail: "Week 3 spine: one clean bounce cycle. Be able to explain timing vs spacing while scrubbing.",
    steps: [
      "Set up a ball and ground plane; decide frame rate (24 fps is fine).",
      "Block contact and apex keys; refine spacing so the bounce reads.",
      "Use the Graph Editor to shape ease-in/out; avoid linear robotic motion.",
      "Scrub and narrate timing (when) vs spacing (where drawings land).",
      "Playblast a loop for review.",
    ],
    criteria: "· Clean bounce loop; you can explain timing vs spacing out loud.",
  },
  "t1-ball-var": {
    detail: "Same setup, three physical qualities. Arcs and silhouette should sell the change — not labels.",
    steps: [
      "Duplicate the ball file into light, heavy, and lively versions.",
      "Change spacing, squash/stretch, and settle — not just speed uniformly.",
      "Compare playblasts side by side; ask a viewer which is which without telling them.",
    ],
    criteria: "· Three distinct physical reads; a viewer can tell them apart.",
  },
  "t1-pendulum": {
    detail: "Pendulum or tail-like overlap with settling. Contact and arcs must read.",
    steps: [
      "Build a simple pendulum (or tail chain) with overlapping pivots.",
      "Animate a swing with drag and settle — not locked in sync.",
      "Check arcs with motion paths or onion skinning.",
      "Playblast; fix pops at contact or stop.",
    ],
    criteria: "· Overlap and settle read; arcs are clean.",
  },
  "t1-three-prop": {
    detail: "Three original props in one composed still or short turntable — value grouping first, then materials.",
    steps: [
      "Model three original props (no tutorial copies).",
      "Compose them in one frame; set value groups before fancy materials.",
      "Light for readability; render a still or short turntable.",
    ],
    criteria: "· Scene reads in grayscale; three props are original.",
  },
  "t1-pose-rig": {
    detail: "Use a supplied / flour-sack style rig. Strong silhouette and balance — no custom humanoid build required.",
    steps: [
      "Open a supplied rig (Blender Studio or flour sack).",
      "Pose a clear line of action with readable silhouette.",
      "Check balance (support foot / center of gravity).",
      "Save a pose library or stills of 3–5 strong poses.",
    ],
    criteria: "· Several poses read in silhouette with clear balance.",
  },
  "t1-weight": {
    detail: "Film yourself or use reference; analyze contact and change of support before keying.",
    steps: [
      "Film a weight shift or small jump (phone is enough).",
      "Mark contact frames and change-of-support in the reference.",
      "Block the same beats on a supplied rig.",
      "Polish only after contacts read.",
    ],
    criteria: "· Contacts and support changes match the reference analysis.",
  },
  "t1-board": {
    detail: "Staging and screen direction clear enough for an animatic. No dialogue dependency.",
    steps: [
      "Board 6–12 panels of a silent action.",
      "Check screen direction and staging clarity.",
      "Revise any panel that needs a verbal explanation.",
    ],
    criteria: "· Boards alone communicate the action.",
  },
  "t1-animatic": {
    detail: "Cut boards to time; add scratch sound. Unbriefed viewers should follow the action.",
    steps: [
      "Import boards into Resolve (or Blender VSE).",
      "Cut to intended timing; add scratch sound.",
      "Show a cold viewer; note confusion points.",
      "Adjust cuts before heavy animation polish.",
    ],
    criteria: "· Cold viewer follows the action from the animatic.",
  },
  "t1-critique": {
    detail: "Revision loop: intent → rough → notes → revise → package with naming and credits.",
    steps: [
      "Write the intent and intended audience response in notes.",
      "Gather specific critique (not \"looks great\").",
      "Revise the biggest clarity issue first.",
      "Package files with clear names and attribution for supplied assets.",
    ],
    criteria: "· Packaged delivery with credits; at least one revision from specific notes.",
  },
  "t1-external": {
    detail: "One outside review this term minimum. Paste specific notes (not \"looks great\").",
    steps: [
      "Post one piece to Discord/forum with a specific question.",
      "Collect concrete notes; paste them into this item’s notes field.",
      "List the first change you will test.",
    ],
    criteria: "· Specific external notes are pasted here.",
  },
  "t1-action-5s": {
    detail: "Term 1 wrap: readable 5–10s action with intentional contact and arcs. Weeks 13–16 revise weakest pieces then deliver.",
    steps: [
      "Choose a small action that uses Term 1 skills (ball physics, weight, or posed acting).",
      "Block → refine → playblast.",
      "Revise from feedback; keep scope tiny.",
      "Deliver a final playblast and file package.",
    ],
    criteria: "· 5–10s action reads; contacts/arcs intentional; files packaged.",
  },
  "t1-sketchbook": {
    detail: "Curate — not every page. Show gesture, form, and a before/after if you have one.",
    steps: [
      "Select best observational pages from the term.",
      "Include a baseline vs later comparison if possible.",
      "Photograph/scan and store with the Term 1 package.",
    ],
    criteria: "· Curated selection exists (not a dump of every page).",
  },
  "t1-three-props": {
    detail: "Independent models distinct from the onboarding course prop. Clean enough to reopen and render later.",
    steps: [
      "Model three simple props without step-by-step tutorials.",
      "Keep topology/materials tidy enough to reopen later.",
      "Render a turnaround or group still.",
    ],
    criteria: "· Three original props reopen and render cleanly.",
  },
  "t1-gate-check": {
    detail: "No hard gate — honest self-check. Term 1 does not require sculpt, UV, or humanoid rig builds.",
    steps: [
      "Check: create/save/reopen/render independently?",
      "Check: explain timing vs spacing on your ball?",
      "Check: readable action with contact/arcs?",
      "Check: simple object in perspective constructed?",
      "Check: revised from specific feedback?",
      "Note gaps in the notes field; plan Term 2 remedies — do not block yourself from continuing.",
    ],
    criteria: "· Gaps noted honestly; you know what to reinforce in Term 2.",
  },
  "t2-walk": {
    detail: "Contact, passing, and shift of support must read. Film reference; block extremes before polishing.",
    steps: [
      "Film or gather a walk reference; mark heel contacts and passing positions.",
      "Block extremes on a supplied/simple rig — pelvis and torso first.",
      "Add contact and passing keys; fix sliding feet.",
      "Polish only after weight transfer reads in playblast.",
    ],
    criteria: "· Walk shows clear weight transfer; feet do not skate.",
  },
  "t2-lift": {
    detail: "Pick one force interaction and sell effort through anticipation, contact, and settle — not just arm motion.",
    steps: [
      "Choose lift, push, pull, or jump; film reference.",
      "Block anticipation → contact → effort → settle.",
      "Check that the whole body participates, not only arms.",
      "Playblast; ask what the character is fighting against.",
    ],
    criteria: "· Effort reads in the whole body; force has a clear contact.",
  },
  "t2-torso": {
    detail: "Draw the mechanical relationships you are about to animate — pelvis drives, torso follows.",
    steps: [
      "Sketch pelvis/torso relationships from reference.",
      "Note balance lines for walk and lift.",
      "Keep sketches beside the Blender session.",
    ],
    criteria: "· Sketches exist that informed your mechanics shots.",
  },
  "t2-silhouette-poses": {
    detail: "Line of action and negative space first; polish later.",
    steps: [
      "On a supplied rig, pose 8 strong silhouettes.",
      "Flip to black silhouette check; discard weak ones.",
      "Save stills for the microfilm pose language.",
    ],
    criteria: "· 8 poses read in pure silhouette.",
  },
  "t2-char-packet": {
    detail: "Silhouette, turn, a few expressions — simple enough to animate. Test against poses.",
    steps: [
      "Design a simplified character (silhouette + turn).",
      "Add a few expressions tied to the microfilm emotion.",
      "Pose-test; revise anything that breaks in motion.",
    ],
    criteria: "· Packet is animatable and pose-tested.",
  },
  "t2-env-value": {
    detail: "One location in clear value groups so the microfilm stage reads in grayscale.",
    steps: [
      "Thumbnail the microfilm location in 3–4 values.",
      "Paint or block a value study of the stage.",
      "Confirm focal path for the central action.",
    ],
    criteria: "· Stage reads in grayscale with a clear focus.",
  },
  "t2-phase-d": {
    detail: "Supporting lookdev: Principled BSDF, three-point/HDRI, Eevee vs Cycles. Do not delay the microfilm.",
    steps: [
      "Texture and light an earlier prop.",
      "Set up three-point or HDRI; compare Eevee vs Cycles for review needs.",
      "Produce clean still renders; dismiss if film scope is at risk.",
    ],
    criteria: "· Clean stills with intentional light, or dismissed as optional.",
  },
  "t2-phase-c": {
    detail: "Supporting sculpt intro — DynTopo/Multires. Do not let sculpting delay the microfilm.",
    steps: [
      "Try a short head/creature sculpt session.",
      "Stop if it threatens Term 2 film time — dismiss this item.",
    ],
    criteria: "· Brief sculpt done, or dismissed to protect film scope.",
  },
  "t2-abbitt": {
    detail: "Supporting resource for sculpt/modeling depth. Dismiss if not needed.",
    steps: [
      "Search Grant Abbitt Blender videos for a specific gap.",
      "Watch only what unblocks you; otherwise dismiss.",
    ],
    criteria: "· Used for a gap, or dismissed.",
  },
  "t2-camera": {
    detail: "Lens/height choices that support the action; lighting enough for readability.",
    steps: [
      "Place camera for the microfilm stage; choose lens/height intentionally.",
      "Light for readability (three-point or HDRI).",
      "Playblast a blocked beat through the camera.",
    ],
    criteria: "· Camera and light support the action clearly.",
  },
  "t2-boards": {
    detail: "Lock story and timing before heavy animation polish. No complex dialogue dependency.",
    steps: [
      "Board the 15–30s microfilm (one location, one action).",
      "Cut an animatic with scratch timing.",
      "Freeze story before polishing animation.",
    ],
    criteria: "· Animatic locks story before polish.",
  },
  "t2-film": {
    detail: "15–30s finished microfilm. Technical polish cannot rescue unreadable action or story. Existing/supplied rig OK.",
    steps: [
      "Animate the central action to the locked animatic.",
      "Keep one location, one action, preferably one character.",
      "Light/render/comp enough for clarity — not feature-film polish.",
      "Export a reviewable final.",
    ],
    criteria: "· Finished 15–30s film; cold viewers can describe what happened and what the character wanted.",
  },
  "t2-sound": {
    detail: "Scratch dialogue optional; prioritize sync, ambience, and one clear sound idea.",
    steps: [
      "Import picture to Resolve or Blender.",
      "Add ambience + one intentional sound idea that sells the beat.",
      "Sync cuts; export with audio.",
    ],
    criteria: "· Sound pass supports the beat without clutter.",
  },
  "t2-review": {
    detail: "Ask: what happened, and what did the character want? Paste their words.",
    steps: [
      "Show the film to someone cold (no pitch).",
      "Ask what happened and what the character wanted.",
      "Paste their exact words into notes.",
    ],
    criteria: "· Cold-read notes are pasted here.",
  },
  "t2-revise": {
    detail: "One focused revision pass addressing the biggest clarity miss — then package.",
    steps: [
      "Pick the biggest clarity miss from cold-read notes.",
      "Revise only that (or the top two).",
      "Re-export and package files.",
    ],
    criteria: "· Revision addresses the stated clarity miss; package ready.",
  },
  "t3-thought": {
    detail: "Subtle shift of intention — eyes, breath, tiny timing changes. Lead with performance, not motion noise.",
    steps: [
      "Write the before/after thought in one sentence each.",
      "Act reference: small eye/head/breath changes only.",
      "Animate the thought-change; remove any motion that does not serve it.",
      "Playblast; confirm viewers catch the change.",
    ],
    criteria: "· Viewers catch the thought change without narration.",
  },
  "t3-emotion": {
    detail: "Same physical beats can mean different wants — pick a clear emotion and make it visible.",
    steps: [
      "Choose a physical action and a specific emotional intention.",
      "Film reference selling that emotion.",
      "Animate so the want is visible in timing and body attitude.",
    ],
    criteria: "· Emotion/want is readable without dialogue.",
  },
  "t3-prop-interact": {
    detail: "Character–prop interaction with weight and contact.",
    steps: [
      "Pick a prop interaction (pick up, open, use).",
      "Block contacts and handoffs carefully.",
      "Polish prop and character so weight matches.",
    ],
    criteria: "· Contacts sell weight; prop does not float.",
  },
  "t3-pantomime": {
    detail: "Listening / pantomime beat — reaction without dialogue.",
    steps: [
      "Design a listening or reaction beat.",
      "Animate response to an offscreen or silent stimulus.",
      "Check that intention is clear in stillness and micro-timing.",
    ],
    criteria: "· Listening/reaction beat reads cleanly.",
  },
  "t3-phase-e": {
    detail: "Supporting rigging intro (armatures/Rigify). Optional — do not block acting shots.",
    steps: [
      "Try a simple armature or Rigify on a basic mesh.",
      "Animate a ball→simple biped test if time allows.",
      "Dismiss if acting shots need the hours instead.",
    ],
    criteria: "· Basic rigging explored, or dismissed as optional.",
  },
  "t3-three-ways": {
    detail: "Same beat staged three ways — camera and continuity choices change meaning.",
    steps: [
      "Pick one acting beat.",
      "Stage it three different ways (lens, angle, cutting).",
      "Compare which best sells intention.",
    ],
    criteria: "· Three stagings exist; you can defend the best choice.",
  },
  "t3-continuity": {
    detail: "Eyelines, screen direction, and continuity across cuts.",
    steps: [
      "Board or shoot a multi-shot beat.",
      "Check eyelines and axis; fix crosses.",
      "Cut a continuity-safe version.",
    ],
    criteria: "· Continuity holds across cuts.",
  },
  "t3-misunderstand": {
    detail: "Build a beat where the audience briefly misunderstands, then clarifies — staging teaching tool.",
    steps: [
      "Design a mislead → clarify beat in boards.",
      "Animate or cut so the reveal lands.",
      "Verify cold viewers experience the misread then the truth.",
    ],
    criteria: "· Misunderstanding then clarity both land for a cold viewer.",
  },
  "t3-sampler-1": {
    detail: "First craft-range sampler across the full path — not a specialty track lock. Explore a role family with a small deliverable.",
    steps: [
      "Pick a craft area to sample (acting, boards, modeling, lighting, etc.).",
      "Define a tiny deliverable (1–3 days of work).",
      "Finish and note what you learned about fit.",
    ],
    criteria: "· Sampler deliverable finished with a short fit note.",
  },
  "t3-sampler-2": {
    detail: "Second sampler in a different craft area so you compare fit honestly.",
    steps: [
      "Pick a different craft area than sampler 1.",
      "Finish a tiny deliverable.",
      "Compare energy/fit notes between the two.",
    ],
    criteria: "· Second sampler done; comparison notes exist.",
  },
  "t3-job-map": {
    detail: "Map skills from real job posts to your evidence — no track lock required.",
    steps: [
      "Collect 2–3 role postings you might care about later.",
      "Build a matrix: requirement → evidence you have → gap → next assignment.",
      "Update as you finish Term 3 shots.",
    ],
    criteria: "· Living matrix exists with gaps tied to next work.",
  },
  "t3-overview": {
    detail: "Overview pass of modeling/surfacing/rigging/animation/lighting/real-time so vocabulary is not mysterious.",
    steps: [
      "Skim a short overview of each pipeline stage.",
      "Note which stages you have touched vs not.",
      "Schedule samplers to cover the biggest blind spots.",
    ],
    criteria: "· Blind spots listed; samplers planned or done.",
  },
  "t4-spec-1": {
    detail: "First craft-depth assignment — concrete shot/asset, not a vague specialty placeholder.",
    steps: [
      "Pick a craft-depth shot or asset tied to your Year 2 focus.",
      "Write success criteria in notes.",
      "Block → critique → revise once.",
      "Deliver a reviewable version.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t4-spec-2": {
    detail: "Second craft-depth piece stretching a different skill under finite scope.",
    steps: [
      "Choose a second craft-depth piece that stretches a different skill.",
      "Keep scope finite (days, not months).",
      "Finish with one revision pass.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t4-foundations": {
    detail: "Keep observation/drawing alive while Year 2 depth work runs.",
    steps: [
      "Keep weekly drawing/gesture alive beside specialty work.",
      "Log hours lightly; do not drop observation entirely.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t4-ref-analysis": {
    detail: "Professional benchmark analysis feeding the next assignment.",
    steps: [
      "Pick a professional benchmark in your craft.",
      "Shot-analyze timing, design, or lighting.",
      "List three steals for your next assignment.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t4-model-uv": {
    detail: "Production-minded model + clean UVs.",
    steps: [
      "Model a simple production-minded asset.",
      "Unwrap cleanly; check texel density.",
      "Export a turnaround with wire/UVs.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t4-rig-skin": {
    detail: "Simple rig + skin with deformation tests.",
    steps: [
      "Build or adapt a simple rig; skin with test deformations.",
      "Animate a short deformation test.",
      "Note failure cases.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t4-texture-look": {
    detail: "Texture/lookdev for readability under review lighting.",
    steps: [
      "Texture and lookdev the asset for readability.",
      "Render beauty + one diagnostic pass.",
      "Document shader/look choices.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t4-collab-seq": {
    detail: "Collaborative sequence where someone else depends on your files.",
    steps: [
      "Define a collaborative sequence/short/playable scene with ≥1 other person.",
      "Agree scope, naming, and delivery dates.",
      "Produce your share on schedule.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t4-handoff": {
    detail: "Handoff package another person can open cold.",
    steps: [
      "Package files so a partner can open them cold.",
      "Include README: versions, paths, how to review.",
      "Confirm partner opened the package.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t4-contrib": {
    detail: "Honest contribution breakdown.",
    steps: [
      "Write a contribution breakdown (what you owned).",
      "Attach stills/shots with credit notes.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t4-postmortem": {
    detail: "Process postmortem with one change to keep.",
    steps: [
      "List what worked, what slipped, and one process change.",
      "Share with your collaborator if possible.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t4-partner-used": {
    detail: "Proof a partner used your delivery.",
    steps: [
      "Verify ≥1 other person actually used your delivered files.",
      "Paste confirmation in notes.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t4-reliability": {
    detail: "Reliability self-audit: scope, comms, notes, usable files.",
    steps: [
      "Self-check: scope, communication, notes, usable delivery.",
      "Note one reliability fix for next collab.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t5-brief-1": {
    detail: "Hard brief 1 — constraints first.",
    steps: [
      "Take the first hard brief seriously — write constraints.",
      "Plan milestones; leave critique time.",
      "Deliver v1 for notes.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t5-brief-2": {
    detail: "Hard brief 2 — different skill pressure.",
    steps: [
      "Second hard brief; change the skill pressure.",
      "Document decisions as you go.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t5-brief-3": {
    detail: "Hard brief 3 — intentional complexity or polish.",
    steps: [
      "Third hard brief; push polish or complexity intentionally.",
      "Keep a decision log.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t5-decisions": {
    detail: "Written decision breakdown.",
    steps: [
      "Write a decision breakdown for one hard piece.",
      "Explain alternatives you rejected.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t5-rebuild": {
    detail: "Substantial rebuild after critique.",
    steps: [
      "Pick a piece that failed critique.",
      "Rebuild substantially — not a tiny polish.",
      "Compare before/after.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t5-benchmark": {
    detail: "Written professional benchmark analysis.",
    steps: [
      "Analyze a professional benchmark in writing.",
      "Map gaps to your next shots.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t5-external": {
    detail: "External craft review diagnosing the limiting problem.",
    steps: [
      "Get an external reviewer in your craft.",
      "Paste diagnosis: foundational / technical / presentational / polish.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t5-char-pipe": {
    detail: "Small-scale character pipeline pass.",
    steps: [
      "Run a character through model→texture→rig→animate at small scale.",
      "Note pipeline breaks.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t5-layout": {
    detail: "Sequence layout before polish.",
    steps: [
      "Layout a sequence: cameras, staging, continuity.",
      "Playblast layout before polish.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t5-facial": {
    detail: "Facial/secondary without killing body acting.",
    steps: [
      "Add facial or secondary animation to a shot.",
      "Keep primary body acting readable.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t5-dialogue": {
    detail: "Short dialogue or acting-to-audio.",
    steps: [
      "Animate a short dialogue or mouth-closed acting to audio.",
      "Focus on intention and listening.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t5-resolve": {
    detail: "Resolve edit/sound for Year 2 material.",
    steps: [
      "Edit Year 2 film/reel pieces in Resolve.",
      "Balance picture and sound for review.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t5-y2-milestone": {
    detail: "Year 2 milestone package.",
    steps: [
      "Package Year 2 milestone: character/performance or asset package.",
      "Write what “production-ready” means for you.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t6-pick": {
    detail: "Pick studio vs freelance concentration; dismiss unused path.",
    steps: [
      "Choose studio-style OR freelance-style concentration for Term 6.",
      "Dismiss the unused branch items you will skip.",
      "Note why in notes.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t6-assigned": {
    detail: "Assigned-brief discipline.",
    steps: [
      "Treat briefs as assigned: constraints, deadline, delivery format.",
      "Deliver on time in the asked format.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t6-versioned": {
    detail: "Versioned delivery habit.",
    steps: [
      "Use versioned deliveries (v001…).",
      "Keep a changelog for lead/director notes.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t6-lead-notes": {
    detail: "Lead-note revision practice.",
    steps: [
      "Practice receiving lead notes: paraphrase, prioritize, revise.",
      "Paste notes and your response plan.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t6-app-pkg": {
    detail: "Role-specific application package draft.",
    steps: [
      "Build a role-specific application package draft.",
      "Tailor order of work to the role.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t6-role-matrix": {
    detail: "Living target-role matrix from real postings.",
    steps: [
      "Update target-role matrix from live postings.",
      "Requirement → evidence → gap → next assignment.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t6-discovery": {
    detail: "Client discovery / intake.",
    steps: [
      "Run a client-discovery / brief intake (mock OK).",
      "Write scope and assumptions.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t6-style": {
    detail: "Style frames and approval milestones.",
    steps: [
      "Produce style frames / approval milestones.",
      "Define revision rounds up front.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t6-client": {
    detail: "Mock or real small client project.",
    steps: [
      "Complete a mock or real small client project.",
      "Document approvals and deliveries.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t6-freelance-kit": {
    detail: "Freelance deliverable templates.",
    steps: [
      "Assemble intake form, scope, estimate, revisions, payment schedule, change-request, rights, delivery checklist.",
      "Keep templates reusable.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t6-artstation-early": {
    detail: "Public presence with clear writeups.",
    steps: [
      "Publish or update an ArtStation/site presence with best current work.",
      "Write clear project descriptions.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t6-change": {
    detail: "Mid-project change-request simulation.",
    steps: [
      "Simulate a mid-project change request.",
      "Re-estimate; document impact; deliver revised scope.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t6-maya-bridge": {
    detail: "Optional Maya/pipeline bridge check.",
    steps: [
      "Optional: check Maya Indie eligibility / pipeline bridge needs.",
      "Dismiss if not relevant to your path.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
    links: [
      { label: "Maya Indie eligibility", url: "https://www.autodesk.com/campaigns/me-indie/maya-indie" },
    ],
  },
  "t7-pick": {
    detail: "Choose one capstone; dismiss unused options.",
    steps: [
      "Pick one capstone option; dismiss unused option rows.",
      "Confirm it supports your intended profession.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t7-opt-short": {
    detail: "Capstone option: short / acting sequence.",
    steps: [
      "If chosen: scoped short or polished acting sequence.",
      "Define length and success criteria.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t7-opt-boards": {
    detail: "Capstone option: boards + animatic.",
    steps: [
      "If chosen: boards + animatic as capstone.",
      "Define sequence count and pitch clarity.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t7-opt-asset": {
    detail: "Capstone option: character/environment package.",
    steps: [
      "If chosen: character/environment package.",
      "Define turnaround and presentation specs.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t7-opt-tech": {
    detail: "Capstone option: tech/playable/lighting/tool.",
    steps: [
      "If chosen: playable prototype / lighting sequence / documented tool.",
      "Define user and success demo.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t7-opt-client": {
    detail: "Capstone option: client case study.",
    steps: [
      "If chosen: commercial-service case study.",
      "Document brief → revisions → result.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t7-brief": {
    detail: "Capstone brief and audience.",
    steps: [
      "Write brief/audience for the capstone.",
      "Share for critique before heavy production.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t7-milestones": {
    detail: "Milestones and risks.",
    steps: [
      "Set milestones and risks.",
      "Revisit weekly; cut scope early if needed.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t7-assets": {
    detail: "Asset and licensing list.",
    steps: [
      "List assets and licensing.",
      "Keep attributions current.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t7-critique-log": {
    detail: "Ongoing critique log.",
    steps: [
      "Keep a critique log across the capstone.",
      "Record date, note, change made.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t7-deliver": {
    detail: "Capstone delivery.",
    steps: [
      "Deliver the capstone in reviewable form.",
      "Test links logged out.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t7-postmortem": {
    detail: "Capstone postmortem.",
    steps: [
      "Write postmortem: intent vs result, what to reuse.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t7-reel-plan": {
    detail: "Reel/portfolio order plan.",
    steps: [
      "Plan reel/portfolio order for the target role.",
      "Best relevant work first.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t7-artstation": {
    detail: "Portfolio site update.",
    steps: [
      "Update ArtStation/site with capstone + breakdowns.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t7-unreal": {
    detail: "Optional Unreal bridge.",
    steps: [
      "Optional Blender→Unreal bridge.",
      "Dismiss if not on your path; check license if you proceed.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
    links: [
      { label: "Unreal Engine license", url: "https://www.unrealengine.com/en-US/license" },
    ],
  },
  "t7-visdev": {
    detail: "Optional visdev package.",
    steps: [
      "Optional visdev/environments package.",
      "Dismiss if unused.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t8-portfolio": {
    detail: "Curated role-targeted portfolio.",
    steps: [
      "Curate portfolio for the target role — only best work.",
      "Remove weak or off-target pieces.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t8-resume": {
    detail: "Role-specific résumé/intro.",
    steps: [
      "Write role-specific résumé/intro.",
      "Match language to postings without inventing credits.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t8-reel": {
    detail: "Reel/presentation in the format asked.",
    steps: [
      "Cut reel/boards/stills/tools as the posting asks.",
      "Length is guidance — follow the posting.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t8-breakdown": {
    detail: "Breakdown + attribution.",
    steps: [
      "Write shot/asset breakdown + attribution.",
      "Clarify personal contributions.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t8-fresh": {
    detail: "Fresh unfamiliar brief.",
    steps: [
      "Take a fresh unfamiliar brief under time pressure.",
      "Deliver honest scope.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t8-outreach": {
    detail: "Outreach / application plan.",
    steps: [
      "Draft application or client-outreach plan.",
      "Track where you applied/contacted.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t8-continue": {
    detail: "Continuing development plan.",
    steps: [
      "Write a continuing-development plan for the next 3–6 months.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t8-reviewers": {
    detail: "Two-reviewer pass when possible.",
    steps: [
      "Get preferably two reviewers (craft + outsider clarity).",
      "Paste notes.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t8-app-practice": {
    detail: "Application practice dry run.",
    steps: [
      "Practice application flow: order of work, links, passwords logged out, discuss decisions.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
  },
  "t8-pixar": {
    detail: "Pixar Careers FAQ reference.",
    steps: [
      "Read Pixar Careers FAQ for reel/portfolio guidance.",
      "Note requirements that affect your package.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
    links: [
      { label: "Pixar Careers", url: "https://www.pixar.com/careers/" },
    ],
  },
  "t8-disney": {
    detail: "Disney Animation Careers FAQ reference.",
    steps: [
      "Read Disney Animation Careers FAQ.",
      "Note breakdown and format expectations.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
    links: [
      { label: "Disney Animation Careers", url: "https://www.disneyanimation.com/careers/" },
    ],
  },
  "t8-disney-interns": {
    detail: "Disney interns/apprentices eligibility reference.",
    steps: [
      "Read Interns & Apprentices pages for eligibility vs artistic bar.",
      "Do not assume eligibility.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
    links: [
      { label: "Disney Interns & Apprentices", url: "https://www.disneyanimation.com/interns-apprentices/" },
    ],
  },
  "t8-calarts": {
    detail: "CalArts program breadth reference.",
    steps: [
      "Skim CalArts BFA Character Animation as breadth reference — not equivalence.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
    links: [
      { label: "CalArts BFA Character Animation", url: "https://calarts.edu/academics/programs-and-degrees/bfa-character-animation" },
    ],
  },
  "t8-epic-techart": {
    detail: "Example tech-art evidence reference — verify live postings.",
    steps: [
      "If aiming tech art: study current role evidence expectations.",
      "Verify live postings — repost URLs go stale.",
    ],
    criteria: "· Steps completed (or item dismissed if it is an unused alternate/option).",
    links: [
      { label: "Example Epic tech-art posting (may be brittle)", url: "https://hitmarker.net/jobs/epic-games-tech-art-intern-4546139" },
    ],
  },
};

export function detailsFor(id: string): ItemDetailFields | undefined {
  return itemDetails[id];
}

/** Merge list item with detail enrichment (detail map wins on overlap). */
export function withDetails(item: CurriculumItem): CurriculumItem {
  const extra = itemDetails[item.id];
  if (!extra) return item;
  return {
    ...item,
    detail: extra.detail ?? item.detail,
    steps: extra.steps ?? item.steps,
    criteria: extra.criteria ?? item.criteria,
    links: extra.links ?? item.links,
  };
}
