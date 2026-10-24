import type { CurriculumItem, ItemDetailFields } from "./types";

/**
 * Richer drill-down content keyed by curriculum item id.
 * List view keeps short `description`; detail page merges these fields.
 */
export const itemDetails: Record<string, ItemDetailFields> = {
  "f-drawing-drawabox": {
    detail: "Drawabox builds construction habits (boxes, forms, spatial thinking). It is one part of drawing time — not your whole art education. Its own 50% rule caps drill time at half of drawing hours; keep the rest observational or playful.",
    steps: [
      "Open Lesson 0 and read the 50% rule summary.",
      "Complete the introductory construction exercises (boxes, organic forms) at a sustainable pace — do not binge the whole program before animating.",
      "Apply the same construction ideas to props, room corners, and simplified figures from life.",
      "Cap drill time at about half of drawing hours; spend the other half on gesture, observation, or play.",
      "When a construction habit sticks, mark done and keep Drawabox as an optional reference — do not block Term 1 animation on finishing every lesson.",
    ],
    criteria: "· You can explain the 50% rule and are applying construction to real subjects.\n· Drill time is capped; observational drawing is still happening weekly.",
    links: [
      { label: "Drawabox Lesson 0 / 50% rule", url: "https://drawabox.com/lesson/0/2/summary" },
    ],
  },
  "f-drawing-proko": {
    detail: "Use free lessons to test the instructor before buying anything. The paid Drawing Basics course is a one-time purchase with extra assignments — not guaranteed personal mentorship. Do not stack several overlapping beginner courses.",
    steps: [
      "Browse free Drawing Basics lessons and pick one topic you actually struggle with (form, values, or proportion).",
      "Complete 2–3 free lessons with the assignments — draw along, do not only watch.",
      "Decide: if free lessons already fix the gap, mark the paid course path dismissed and mark this done.",
      "Only if a real gap remains, consider the paid course — still finish its assignments before buying another fundamentals product.",
    ],
    criteria: "· You completed free lessons with drawings, not just watching.\n· You did not buy overlapping beginner courses “just in case.”",
    links: [
      { label: "Proko Drawing Basics", url: "https://www.proko.com/course/drawing-basics" },
    ],
  },
  "f-drawing-loa": {
    detail: "Timed gesture builds weight, balance, and a clear line through the pose faster than finished figure drawings. Goal is readable energy — not pretty pages.",
    steps: [
      "Open Line of Action (or an equivalent timed-gesture site) and set a session: 30–60 second poses first, then a few longer ones.",
      "Do a short daily or near-daily session (even 10–15 minutes counts).",
      "Focus each page on weight and the main line through the pose; ignore polish.",
      "Once a week, pick 3 gestures and rebuild them as simple volumes.",
      "If SketchDaily covers the same habit, mark one of the two prompt sources dismissed.",
    ],
    criteria: "· You have a repeatable gesture habit.\n· Pages show weight and balance, not only outlines.",
  },
  "f-drawing-sketchdaily": {
    detail: "Optional other prompt source for variety. Pick Line of Action OR SketchDaily as your daily habit — do not run both as obligations.",
    steps: [
      "Try one SketchDaily (or r/SketchDaily) prompt session.",
      "Compare to Line of Action: keep the one you will actually open tomorrow.",
      "Mark the other prompt source dismissed so the checklist stays honest.",
    ],
    criteria: "· One prompt source is active; the other is dismissed (or you knowingly keep both as play).",
  },
  "f-drawing-loomis": {
    detail: "Figure construction books help when gesture alone is not giving volume. Use a library or authorized edition — do not assume random “public domain PDFs” are legal where you are.",
    steps: [
      "Borrow or buy an authorized Loomis (or similar) edition — library first.",
      "Assign one exercise (head construction or figure mannequin) and do it the same week.",
      "Apply the construction method to a life drawing or photo reference.",
      "Mark this dismissed if Drawabox + gesture already cover volume for now.",
    ],
    criteria: "· You completed at least one assigned exercise from an authorized copy.\n· Or you marked this dismissed as optional for the current term.",
  },
  "f-drawing-observe-loop": {
    detail: "Connect drawing to animation: watch → draw key poses → rebuild as forms → animate → compare. The point is finding where drawings and motion disagree about weight.",
    steps: [
      "Watch someone lift a bag (or film yourself).",
      "Draw five key poses from the action.",
      "Rebuild torso and hips as simple forms from another angle.",
      "Animate a simplified version of the lift (even a flour sack or box character).",
      "Note mismatches between drawings and animation; fix the worse of the two.",
    ],
    criteria: "· You have a short loop documenting watch → draw → animate → compare.\n· Notes name at least one weight or contact disagreement you fixed.",
  },
  "f-design-silhouettes": {
    detail: "Silhouette-first design forces shape before interior detail. Push until personality reads in black.",
    steps: [
      "Pick one character idea and write a one-line personality.",
      "Draw 12 silhouettes — vary proportion, posture, and shape family.",
      "Circle the 3 that read personality without any interior lines.",
      "Discard cute-but-generic shapes; iterate until strangers can guess the vibe.",
    ],
    criteria: "· 12 silhouettes exist; 3 clear winners read personality in pure black.",
  },
  "f-design-variants": {
    detail: "Same story role, three personalities — keeps the silhouette family while changing attitude.",
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
    detail: "If a sequence falls apart in grayscale, color was doing too much storytelling work. Fix light/dark grouping and focus.",
    steps: [
      "Take a sequence or still you care about and convert to grayscale.",
      "Mark the intended focal point; check if contrast supports it.",
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
    detail: "The Illusion of Life is the classic 12 Principles reference. Borrow first; assign exercises — do not only read.",
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
      "Bring one chart or rough into your Blender Graph Editor workflow.",
    ],
    criteria: "· A chapter produced a same-week exercise you can point to.",
  },
  "f-anim-blender-fund": {
    detail: "Blender Studio Animation Fundamentals is the preferred free/low-cost main animation course: bouncing ball → character acting on free training characters. Prefer this over buying several beginner courses.",
    steps: [
      "Open Animation Fundamentals and skim the path from ball to character.",
      "Complete the early ball / timing modules if Term 1 ball work needs structure.",
      "Download the linked training characters when you reach posing / acting.",
      "Use this as your primary animation course — mark duplicate paid beginner courses dismissed.",
    ],
    criteria: "· You know where the main course lives and have started (or scheduled) the modules that match your term.",
    links: [
      { label: "Blender Studio — Animation Fundamentals", url: "https://studio.blender.org/training/animation-fundamentals/" },
    ],
  },
  "f-anim-rigs": {
    detail: "Free training characters let you practice acting without waiting to build a human character. Always credit them.",
    steps: [
      "Download a Blender Studio training / flour-sack style character from the linked page.",
      "Open it, confirm controls work, and save a working copy with your naming.",
      "Pose a strong silhouette; credit the character in your file notes.",
      "Use it for Term 1–3 acting practice instead of waiting on your own rig.",
    ],
    criteria: "· A free training character opens cleanly and is credited in your project notes.",
    links: [
      { label: "Blender Studio training rigs", url: "https://studio.blender.org/training/animation-fundamentals/5d69ab4dea6789db11ee65d1/" },
    ],
  },
  "f-anim-into": {
    detail: "Optional backup if Blender Studio is not clicking. Mark this dismissed if you already have a main animation course.",
    steps: [
      "Search Into Animation character foundations and preview one lesson.",
      "Only continue if it fills a gap your main course does not.",
      "Otherwise mark this dismissed — one main animation course is enough.",
    ],
    criteria: "· Either actively using it for a gap, or dismissed as duplicate.",
  },
  "f-anim-mentor": {
    detail: "Paid workshops/programs only when free critique is not enough. Before paying, verify they review your actual work with specific notes and revise/resubmit.",
    steps: [
      "List what free critique (Discord/forum/peers) is failing to give you.",
      "Compare workshops vs longer program pages — note review frequency and format.",
      "Ask (or find answers to): Will they review my work? Draw-overs? Revise/resubmit? Role match?",
      "Buy only if answers are yes for your gap; otherwise mark this dismissed and invest in more revision cycles.",
    ],
    criteria: "· Decision logged: bought with clear review expectations, or dismissed.",
    links: [
      { label: "Animation Mentor workshops", url: "https://www.animationmentor.com/workshops/" },
      { label: "Animation Mentor program", url: "https://www.animationmentor.com/animation-program/" },
    ],
  },
  "f-story-glebas": {
    detail: "Directing the Story covers boards, staging, and visual cause-and-effect. Assign exercises per chapter.",
    steps: [
      "Borrow Directing the Story.",
      "Read one chapter; assign a board exercise the same week (e.g. cause→effect panels).",
      "Apply one staging idea to your current boards or six-panel story.",
    ],
    criteria: "· A chapter produced a same-week board exercise.",
  },
  "f-story-framed": {
    detail: "Framed Ink teaches composition and camera framing for story artists.",
    steps: [
      "Borrow Framed Ink.",
      "Copy one framing exercise; apply it to a current board.",
    ],
    criteria: "· One framing exercise applied to your own boards.",
  },
  "f-story-gurney": {
    detail: "Color and Light for clearer light/dark and color relationships when lighting feels muddy. Borrow first.",
    steps: [
      "Borrow Color and Light.",
      "Use it for one concrete lighting or look problem.",
      "Mark this dismissed if not needed yet.",
    ],
    criteria: "· Used for a concrete lighting problem, or dismissed as optional.",
  },
  "f-story-resolve": {
    detail: "DaVinci Resolve is the free edit and sound tool. Learn enough to cut an animatic and a final short.",
    steps: [
      "Install Resolve.",
      "Cut one animatic from stills or boards.",
      "Later: cut a short with simple sound.",
    ],
    criteria: "· You can cut an animatic and export a review movie.",
  },
  "f-story-drill-shots": {
    detail: "Same event in 1 shot, then 3, then 6 — forces shot economy.",
    steps: [
      "Pick one simple event.",
      "Board or film it in 1, then 3, then 6 shots.",
      "Note what each extra cut buys you.",
    ],
    criteria: "· Three versions exist with notes on what each cut buys.",
  },
  "f-context-calarts": {
    detail: "CalArts learning-goals page as breadth reference — not a claim of degree equivalence.",
    steps: [
      "Skim the character animation learning goals.",
      "Note breadth areas you are under-covering.",
    ],
    criteria: "· Breadth gaps noted without claiming equivalence.",
    links: [
      { label: "CalArts learning goals reference", url: "https://catalog.calarts.edu/programs/UvzOg8mt3npdQQJrTCkI" },
    ],
  },
  "f-context-weekly": {
    detail: "Each week: watch one sequence, sketch staging/eyelines, try one technique.",
    steps: [
      "Pick one short sequence.",
      "Diagram staging and eyelines.",
      "Try one technique in a new exercise the same week.",
      "Save notes or a link here.",
    ],
    criteria: "· Weekly log entries exist with a same-week technique try.",
  },
  "f-prod-naming": {
    detail: "Naming, versions, backups, and project paths before a big project — not after a crash.",
    steps: [
      "Write a simple naming and version scheme.",
      "Use relative paths; set a backup plan.",
      "Test that a project folder opens cleanly on reopen.",
    ],
    criteria: "· Scheme written and used on at least one project.",
  },
  "f-prod-color": {
    detail: "One-page delivery checklist: frame rate, color space, image sequences vs movies, review formats.",
    steps: [
      "Write a one-page checklist for your OS and tools.",
      "Test one export against it on two devices if possible.",
    ],
    criteria: "· Checklist exists and a test export looks correct on two devices.",
  },
  "f-prod-pureref": {
    detail: "Keep reference images organized per project. Notion or Obsidian is fine for notes — pick one system.",
    steps: [
      "Install PureRef (or choose an equivalent board tool).",
      "Build one board for your current term project.",
      "Park the board path next to your .blend / project notes.",
    ],
    criteria: "· Active project has a living reference board.",
  },
  "t1-nav": {
    detail: "Week 1 goal: prove you can move around in Blender, transform objects, save, reopen, and render without help. Muscle memory beats watching another intro video.",
    steps: [
      "Open Blender and create a new file; add 2–3 simple objects and arrange them.",
      "Practice middle-mouse orbit, Shift+middle-mouse pan, and scroll zoom until it feels automatic.",
      "Use Tab for Object/Edit; G/R/S with axis locks (X/Y/Z); try Shift+A, X, Shift+D.",
      "Save the file, quit Blender completely, reopen the file, and confirm nothing broke.",
      "Set a camera and lights if needed; render once (Eevee is fine) and save the image.",
      "Mark done only when you can repeat reopen + render without looking up the basics.",
    ],
    criteria: "· You independently create, save, reopen, and render a simple arrangement.",
  },
  "t1-cgcookie": {
    detail: "Choose ONE free beginner course. CG Cookie Blender Basics covers navigation, modeling, materials, lighting, rendering, and a bit of animation with a free account. The collections URL is a hub — find Blender Basics inside. If you already chose CG Boost, mark this item dismissed.",
    steps: [
      "Decide now: CG Cookie OR CG Boost — not both. If CG Boost is your pick, mark this item dismissed and open the CG Boost row instead.",
      "Create a free CG Cookie account and open the collections hub.",
      "Locate the free Blender Basics / beginner course (the hub link is not always a deep link).",
      "Work session by session: navigation → modeling → materials → lighting → render → intro animation. Finish lessons; do the exercises.",
      "When the course is complete, mark this done and mark CG Boost dismissed as the unused alternate.",
      "Next: finish the “original prop” item — build a different object with no tutorial open.",
    ],
    criteria: "· Free Blender Basics course finished.\n· The other beginner course (CG Boost) is dismissed.\n· You are ready for an original prop without step-by-step help.",
    links: [
      { label: "CG Cookie collections (find Blender Basics)", url: "https://www.cgcookie.com/collections" },
    ],
  },
  "t1-cgboost": {
    detail: "Choose ONE free beginner course. CG Boost Blender for Beginners is roughly a five-hour apple still-life path: interface, modeling, texturing, lighting, and rendering. Do not also finish a second identical beginner course. If you already chose CG Cookie, mark this item dismissed.",
    steps: [
      "Decide now: CG Boost OR CG Cookie — not both. If CG Cookie is your pick, mark this item dismissed and open the CG Cookie row instead.",
      "Open the free Blender for Beginners course page and start the apple still-life path.",
      "Complete the lessons covering interface, modeling, texturing, lighting, and rendering (about 5 hours total — split across sessions).",
      "Follow along until you have a finished still-life render from the course.",
      "When finished, mark this done and mark CG Cookie dismissed as the unused alternate.",
      "Next: finish the “original prop” item — model a different simple object with no step-by-step video open.",
    ],
    criteria: "· Free beginner course finished with a course render.\n· The other beginner course (CG Cookie) is dismissed.\n· You move on to an original prop — not a second identical beginner course.",
    links: [
      { label: "CG Boost — Blender for Beginners (free)", url: "https://www.cgboost.com/courses/free-blender-beginners-course" },
      { label: "CG Boost courses (lifetime / paid later)", url: "https://www.cgboost.com/courses" },
    ],
  },
  "t1-finish-course": {
    detail: "After your beginner course, make a different small project without step-by-step help. Finishing three near-identical beginner courses feels safer than independent work — skip that trap.",
    steps: [
      "Confirm one beginner course is done and the other is dismissed.",
      "Choose a simple prop that is NOT the course subject (not the donut, apple, or tutorial copy).",
      "Model it with reference images only — no step-by-step modeling video open.",
      "Apply basic materials and light; render a clean still.",
      "Save, reopen, and render once more to prove the file is solid.",
    ],
    criteria: "· One original prop exists that you built without a tutorial script.\n· File reopens and renders cleanly.",
  },
  "t1-keyframes": {
    detail: "Needed before the bouncing-ball assignment: set keys, scrub the timeline, and read a simple motion curve.",
    steps: [
      "In a practice file, key location on an object at frames 1 and 20.",
      "Scrub and play; confirm interpolation.",
      "Open the Graph Editor; identify the F-curve and try easing a handle.",
      "Delete and redo keys until the workflow is automatic.",
    ],
    criteria: "· You can set keys, scrub, and adjust a basic F-curve without a tutorial open.",
  },
  "t1-guru": {
    detail: "Optional extra modeling practice. Mark this dismissed if CG Cookie or CG Boost already covered enough modeling.",
    steps: [
      "Only start if you want extra modeling muscle memory after your primary course.",
      "Do early donut parts only — stop before it becomes a second full beginner path.",
      "Otherwise mark this dismissed.",
    ],
    criteria: "· Early parts done as extra practice, or dismissed as duplicate.",
  },
  "t1-joey": {
    detail: "Optional interface practice playlists. Mark this dismissed if your primary course is enough.",
    steps: [
      "Preview one Joey Carlino beginner playlist video.",
      "Use only for gaps (selection, modifiers, etc.).",
      "Mark this dismissed if your main course already covers navigation and modeling.",
    ],
    criteria: "· Used for a specific gap, or dismissed.",
  },
  "t1-phase-a": {
    detail: "Optional daily transform drills until navigation is automatic. Do not delay Term 1 animation for this.",
    steps: [
      "Schedule 30–60 minutes a day for a few days: middle-mouse orbit, Tab modes, G/R/S.",
      "Practice Vertex/Edge/Face select (1/2/3), Shift+A, X, Shift+D.",
      "Stop once navigation is automatic — return to the bouncing-ball and storyboard work.",
    ],
    criteria: "· Navigation feels automatic, or item dismissed as optional support.",
  },
  "t1-phase-b": {
    detail: "Optional box-modeling set with live modifiers. Extra depth — do not delay ball or animatic work.",
    steps: [
      "Box-model 5–10 simple props (chair, mug, crate, robot) using Extrude, Inset, and Loop Cut.",
      "Use Mirror, Subdivision, Bevel, Array, Solidify; keep modifiers live when useful; prefer four-sided faces.",
      "Finish one original prop after the set.",
      "Mark this dismissed if Term 1 animation schedule is at risk.",
    ],
    criteria: "· Prop set plus one original, or dismissed to protect Term 1 scope.",
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
      "Show a cold reader; revise panels that confuse cause and effect.",
    ],
    criteria: "· Cold reader can retell objective, obstacle, and consequence.",
  },
  "t1-line-control": {
    detail: "Alongside weeks 1–2 of Blender learning: ellipses, boxes, confident lines.",
    steps: [
      "Do timed ellipse and straight-line drills.",
      "Construct boxes in 1- and 2-point perspective.",
      "Keep sessions short and frequent beside Blender learning.",
    ],
    criteria: "· A week of drills shows steadier control than your baseline page.",
  },
  "t1-perspective": {
    detail: "Term 1 self-check skill: construct a simple object or room corner in perspective — not eyeballing alone.",
    steps: [
      "Pick a simple object or room corner from life.",
      "Construct it with vanishing points / box method.",
      "Check proportions against the real subject.",
      "Keep the construction sheet for the Term 1 self-check.",
    ],
    criteria: "· A constructed perspective drawing exists you can explain.",
  },
  "t1-ball": {
    detail: "Week 3 focus: one clean bounce cycle. Be able to explain timing vs spacing while scrubbing.",
    steps: [
      "Open Blender; set up a ball and ground plane; decide frame rate (24 fps is fine).",
      "Block contact and apex keys; refine spacing so the bounce reads.",
      "Use the Graph Editor to shape ease-in/out; avoid linear robotic motion.",
      "Scrub and narrate timing (when) vs spacing (where the ball sits between keys).",
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
    detail: "Three original props in one composed still or short turntable — light/dark grouping first, then materials.",
    steps: [
      "Model three original props (no tutorial copies).",
      "Compose them in one frame; set light/dark groups before fancy materials.",
      "Light for readability; render a still or short turntable.",
    ],
    criteria: "· Scene reads in grayscale; three props are original.",
  },
  "t1-pose-rig": {
    detail: "Use a free training character or flour-sack style character. Strong silhouette and balance — no custom human character required.",
    steps: [
      "Open a free training character (Blender Studio or flour sack).",
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
      "Block the same beats on a free training character.",
      "Polish only after contacts read.",
    ],
    criteria: "· Contacts and support changes match the reference analysis.",
  },
  "t1-board": {
    detail: "Staging and screen direction clear enough for an animatic. No dialogue required.",
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
      "Import boards into Resolve (or Blender Video Sequencer).",
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
      "Gather specific critique (not “looks great”).",
      "Revise the biggest clarity issue first.",
      "Package files with clear names and attribution for free assets.",
    ],
    criteria: "· Packaged delivery with credits; at least one revision from specific notes.",
  },
  "t1-external": {
    detail: "One outside review this term minimum. Paste specific notes (not “looks great”).",
    steps: [
      "Post one piece to Discord/forum with a specific question.",
      "Collect concrete notes; paste them into this item’s notes field.",
      "List the first change you will test.",
    ],
    criteria: "· Specific external notes are pasted here.",
  },
  "t1-action-5s": {
    detail: "Term 1 wrap-up: readable 5–10s action with intentional contact and arcs. Weeks 13–16 revise weakest pieces then deliver.",
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
    detail: "Independent models distinct from the beginner-course prop. Clean enough to reopen and render later.",
    steps: [
      "Model three simple props without step-by-step tutorials.",
      "Keep topology/materials tidy enough to reopen later.",
      "Render a turnaround or group still.",
    ],
    criteria: "· Three original props reopen and render cleanly.",
  },
  "t1-gate-check": {
    detail: "Honest self-check — nothing locks you out of Term 2. Term 1 does not require sculpting, UVs, or building a custom human character.",
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
    detail: "Contact, passing, and weight shift must read. Film reference; block extremes before polishing.",
    steps: [
      "Film or gather a walk reference; mark heel contacts and passing positions.",
      "Block extremes on a free training or simple character — hips and torso first.",
      "Add contact and passing keys; fix sliding feet.",
      "Polish only after weight transfer reads in a playblast.",
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
    detail: "Draw the body mechanics you are about to animate — hips lead, torso follows.",
    steps: [
      "Sketch hip/torso relationships from reference.",
      "Note balance lines for walk and lift.",
      "Keep sketches beside the Blender session.",
    ],
    criteria: "· Sketches exist that informed your mechanics shots.",
  },
  "t2-silhouette-poses": {
    detail: "Clear line of action and negative space first; polish later.",
    steps: [
      "On a free training character, pose 8 strong silhouettes.",
      "Flip to a black silhouette check; discard weak ones.",
      "Save stills for the short film’s pose language.",
    ],
    criteria: "· 8 poses read in pure silhouette.",
  },
  "t2-char-packet": {
    detail: "Silhouette, turn, a few expressions — simple enough to animate. Test against poses.",
    steps: [
      "Design a simplified character (silhouette + turn).",
      "Add a few expressions tied to the short’s emotion.",
      "Pose-test; revise anything that breaks in motion.",
    ],
    criteria: "· Packet is animatable and pose-tested.",
  },
  "t2-env-value": {
    detail: "One location in clear light/dark groups so the short’s stage reads in grayscale.",
    steps: [
      "Thumbnail the short’s location in 3–4 values.",
      "Paint or block a value study of the stage.",
      "Confirm a clear path for the eye to the central action.",
    ],
    criteria: "· Stage reads in grayscale with a clear focus.",
  },
  "t2-phase-d": {
    detail: "Optional materials and lighting practice: Principled shader, three-point or HDRI, Eevee vs Cycles. Do not delay the short.",
    steps: [
      "Texture and light an earlier prop.",
      "Set up three-point lights or an HDRI; compare Eevee vs Cycles for review needs.",
      "Produce clean still renders; mark this dismissed if film scope is at risk.",
    ],
    criteria: "· Clean stills with intentional light, or dismissed as optional.",
  },
  "t2-phase-c": {
    detail: "Optional short sculpting intro. Do not let sculpting delay the short.",
    steps: [
      "Try a short head or creature sculpt session (DynTopo or Multires).",
      "Stop if it threatens Term 2 film time — mark this item dismissed.",
    ],
    criteria: "· Brief sculpt done, or dismissed to protect film scope.",
  },
  "t2-abbitt": {
    detail: "Optional videos for modeling or sculpt help. Mark this dismissed if not needed.",
    steps: [
      "Search Grant Abbitt Blender videos for a specific gap.",
      "Watch only what unblocks you; otherwise mark this dismissed.",
    ],
    criteria: "· Used for a gap, or dismissed.",
  },
  "t2-camera": {
    detail: "Lens and height choices that support the action; lighting enough for readability.",
    steps: [
      "Place the camera for the short’s stage; choose lens and height on purpose.",
      "Light for readability (three-point or HDRI).",
      "Playblast a blocked beat through the camera.",
    ],
    criteria: "· Camera and light support the action clearly.",
  },
  "t2-boards": {
    detail: "Lock story and timing before heavy animation polish. Do not depend on complex dialogue.",
    steps: [
      "Board the 15–30s short (one location, one action).",
      "Cut an animatic with scratch timing.",
      "Freeze story before polishing animation.",
    ],
    criteria: "· Animatic locks story before polish.",
  },
  "t2-film": {
    detail: "15–30 second finished short. Fancy polish cannot rescue unreadable action or story. A free training character is fine.",
    steps: [
      "Animate the central action to the locked animatic.",
      "Keep one location, one action, preferably one character.",
      "Light/render/comp enough for clarity — not feature-film polish.",
      "Export a reviewable final.",
    ],
    criteria: "· Finished 15–30s film; cold viewers can describe what happened and what the character wanted.",
  },
  "t2-sound": {
    detail: "Rough dialogue optional; prioritize sync, ambience, and one clear sound idea.",
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
    detail: "Subtle shift of intention — eyes, breath, tiny timing changes. Lead with performance, not busy motion.",
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
    detail: "Optional basic rigging intro (armatures / Rigify). Do not block acting shots.",
    steps: [
      "Try a simple armature or Rigify on a basic mesh.",
      "Animate a ball → simple biped test if time allows.",
      "Mark this dismissed if acting shots need the hours instead.",
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
    detail: "First short craft experiment — explore an area with a small deliverable. This is not locking a specialty forever.",
    steps: [
      "Pick a craft area to sample (acting, boards, modeling, lighting, etc.).",
      "Define a tiny deliverable (1–3 days of work).",
      "Finish and note what you learned about fit.",
    ],
    criteria: "· Experiment deliverable finished with a short fit note.",
  },
  "t3-sampler-2": {
    detail: "Second experiment in a different craft area so you compare fit honestly.",
    steps: [
      "Pick a different craft area than experiment 1.",
      "Finish a tiny deliverable.",
      "Compare energy/fit notes between the two.",
    ],
    criteria: "· Second experiment done; comparison notes exist.",
  },
  "t3-job-map": {
    detail: "Map skills from real job posts to your evidence — no locked specialty required.",
    steps: [
      "Collect 2–3 role postings you might care about later.",
      "Build a matrix: requirement → evidence you have → gap → next assignment.",
      "Update as you finish Term 3 shots.",
    ],
    criteria: "· Living matrix exists with gaps tied to next work.",
  },
  "t3-overview": {
    detail: "Light overview of modeling, surfacing, rigging, animation, lighting, and real-time so later terms are not mysterious.",
    steps: [
      "Skim a short overview of each pipeline stage.",
      "Note which stages you have touched vs not.",
      "Schedule experiments to cover the biggest blind spots.",
    ],
    criteria: "· Blind spots listed; experiments planned or done.",
  },
  "t4-spec-1": {
    detail: "Polished acting or mechanics shot on a free training character. Block → smooth curves → polish. Credit the character. If you need lessons, use Blender Studio Animation Fundamentals.",
    steps: [
      "Pick a clear intention and film or gather reference.",
      "Block extremes on a free training character; credit it in notes.",
      "Smooth curves, then polish weight and timing.",
      "Playblast a reviewable take; revise once from specific notes.",
    ],
    criteria: "· Shot shows weight, timing, and a clear want.\n· Character is credited; review playblast exists.",
  },
  "t4-spec-2": {
    detail: "Second deeper piece in a different craft area than #1 — asset, boards, or lighting — kept to about two weeks.",
    steps: [
      "Pick one: (a) character/prop with clean topology + simple materials + turn; (b) 2–3 board pages + animatic beat; (c) lighting mood study with pass breakdown.",
      "Write a one-line success check in notes.",
      "Finish with one revision pass; keep scope to about two weeks.",
    ],
    criteria: "· Deliverable finished in a different craft area than depth 1.\n· Scope stayed finite (days/weeks, not months).",
  },
  "t4-foundations": {
    detail: "Keep observation and drawing alive while deeper craft work runs.",
    steps: [
      "Set a weekly minimum for drawing or gesture (even short sessions).",
      "Keep weekly film/art analysis going.",
      "Log the minimum you actually kept in notes.",
    ],
    criteria: "· Notes show a weekly foundations minimum you actually kept.",
  },
  "t4-ref-analysis": {
    detail: "Before polish: break down reference for pose, timing, or camera and list what you will borrow.",
    steps: [
      "Gather stills or film strips of reference for depth 1.",
      "Note timing, arcs, or staging you will steal.",
      "Keep the breakdown beside your Blender session.",
    ],
    criteria: "· Written reference breakdown exists before polish.",
  },
  "t4-model-uv": {
    detail: "One character or hero prop: model → basic UVs → simple material. Topology clean enough for a bend test or turntable.",
    steps: [
      "Model a simple production-minded asset.",
      "Unwrap cleanly; check texel density roughly.",
      "Apply a simple material; export a turnaround with wire and shaded views.",
    ],
    criteria: "· Asset has clean-enough UVs and a wire + shaded turnaround.",
  },
  "t4-rig-skin": {
    detail: "Simple rig + weight painting with deformation tests on shoulders, hips, or fingers.",
    steps: [
      "Build or generate a simple armature / Rigify controls.",
      "Weight-paint; fix obvious errors on shoulders, hips, fingers.",
      "Pose deformation tests and note remaining failures.",
    ],
    criteria: "· Rig moves; deformation tests show fixed obvious weight errors.",
  },
  "t4-texture-look": {
    detail: "Texture and lookdev for readability under review lighting. Optional ArmorPaint / Material Maker if Blender shaders are not enough.",
    steps: [
      "Texture and lookdev the asset for readability.",
      "Render a beauty pass + one diagnostic pass.",
      "Document shader/look choices in notes.",
    ],
    criteria: "· Lookdev reads under review lighting; choices noted.",
  },
  "t4-collab-seq": {
    detail: "Collaborative sequence where someone else depends on your files.",
    steps: [
      "Define a shared shot, short, or tiny playable beat with at least one other person.",
      "Agree scope, naming, and delivery dates up front.",
      "Produce your share on schedule.",
    ],
    criteria: "· Shared piece exists with defined roles and a delivery date you met (or logged a miss).",
  },
  "t4-handoff": {
    detail: "Handoff package another person can open cold.",
    steps: [
      "Package files with relative paths and versioned folders.",
      "Include a README: how to open, controls, known issues.",
      "Confirm a partner opened the package without your machine.",
    ],
    criteria: "· Partner opened the package cold; README exists.",
  },
  "t4-contrib": {
    detail: "Honest contribution breakdown clear enough for a reel credit line.",
    steps: [
      "List what you authored vs free assets vs partner work.",
      "Attach stills or shots with credit notes.",
    ],
    criteria: "· Written contribution list matches what a reel credit would say.",
  },
  "t4-postmortem": {
    detail: "One-page postmortem: what broke, communication, notes, delivery pain.",
    steps: [
      "List what worked, what slipped, and one process change to keep.",
      "Share with your collaborator if possible.",
    ],
    criteria: "· One-page postmortem with at least one process change named.",
  },
  "t4-partner-used": {
    detail: "Proof at least one other person used your delivery.",
    steps: [
      "Have a partner open and use your delivered files.",
      "Paste their confirmation or notes about what failed.",
    ],
    criteria: "· Confirmation or failure notes from a partner are pasted here.",
  },
  "t4-reliability": {
    detail: "Self-check craft contribution AND reliability — deadlines, communication, usable files.",
    steps: [
      "Check: scope met, problems communicated early, notes addressed, files usable.",
      "Note any missed deadlines or silent blockers.",
      "Write one reliability fix for the next collab.",
    ],
    criteria: "· Honest reliability notes exist with one fix named.",
  },
  "t5-brief-1": {
    detail: "Two-character or overlapping-objectives acting. Free training characters are fine.",
    steps: [
      "Write the two wants that compete or overlap.",
      "Block listening and asymmetry before polish.",
      "Deliver a playblast for notes.",
    ],
    criteria: "· Both characters’ wants read; listening is visible.",
  },
  "t5-brief-2": {
    detail: "Either a boards revision with emotional transitions, or a model with hard deformation zones and proof poses.",
    steps: [
      "Pick boards path OR deformation path.",
      "If boards: revise staging after notes; show alternatives.",
      "If model: prove shoulders/hips/face bends with poses.",
    ],
    criteria: "· Chosen path delivered with clear before/after or proof poses.",
  },
  "t5-brief-3": {
    detail: "Pick one hard brief: multi-shot lighting continuity, modular environment with matching materials, or a tiny documented tool.",
    steps: [
      "Choose lighting continuity, modular environment, or tool/script.",
      "If lighting: keep mood consistent across 2+ shots; show pass breakdown.",
      "If environment: modular pieces with matching materials.",
      "If tool: another artist can run it with short docs.",
    ],
    criteria: "· One of the three options is finished and reviewable.",
  },
  "t5-decisions": {
    detail: "Written decision breakdown for one hard piece.",
    steps: [
      "Pick one hard piece.",
      "Explain reference, rejected alternatives, and what you would test next.",
    ],
    criteria: "· Decision write-up names rejected alternatives and next tests.",
  },
  "t5-rebuild": {
    detail: "Substantial rebuild after critique — not a tiny polish.",
    steps: [
      "Pick a piece that failed critique.",
      "Rebuild structure, staging, or topology from notes.",
      "Keep before/after for comparison.",
    ],
    criteria: "· Before/after shows a structural rebuild, not polish only.",
  },
  "t5-benchmark": {
    detail: "Written analysis of a professional benchmark.",
    steps: [
      "Pick one film shot, board sequence, model, or environment.",
      "Diagram what makes it work.",
      "List 3 techniques you can reuse.",
    ],
    criteria: "· Write-up exists with 3 transferable techniques.",
  },
  "t5-external": {
    detail: "Outside reviewer names the limiting problem for Term 6 to address.",
    steps: [
      "Get a reviewer relevant to your craft.",
      "Ask them to name the limiting problem: basics / technical / presentation / polish.",
      "Paste the diagnosis into notes.",
    ],
    criteria: "· Diagnosis pasted; Term 6 plan can target it.",
  },
  "t5-char-pipe": {
    detail: "One character end-to-end at junior scope: model → texture → rig → animate.",
    steps: [
      "Model and texture one character at a manageable scope.",
      "Rig enough for a short performance.",
      "Animate a short pass; note pipeline breaks.",
    ],
    criteria: "· Character is good enough for a short performance; breaks noted.",
  },
  "t5-layout": {
    detail: "Camera work and mood lighting with continuity across shots.",
    steps: [
      "Layout cameras and staging for a short sequence.",
      "Light for mood; keep continuity across shots.",
      "Playblast layout before heavy polish.",
    ],
    criteria: "· Layout playblast shows continuous cameras and mood.",
  },
  "t5-facial": {
    detail: "Eyes, lids, simple face controls, breathing/overlap — without killing body acting.",
    steps: [
      "Add facial or secondary motion to a shot.",
      "Keep primary body acting readable.",
      "Mark this dismissed if the Year 2 film already proves it.",
    ],
    criteria: "· Face/secondary supports the body acting, or item dismissed.",
  },
  "t5-dialogue": {
    detail: "Year 2 deliverable: dialogue short OR complete character + environment package.",
    steps: [
      "Choose film path or asset-package path.",
      "If film: animate a short dialogue or sustained performance to audio.",
      "If assets: finish character + environment package to reviewable quality.",
    ],
    criteria: "· Chosen Year 2 deliverable is reviewable end-to-end.",
  },
  "t5-resolve": {
    detail: "Sound design + final edit of the Year 2 piece in DaVinci Resolve.",
    steps: [
      "Import picture; balance music, ambience, and SFX.",
      "Cut the final Year 2 piece.",
      "Export a review movie (burned-in slate optional).",
    ],
    criteria: "· Final review movie with sound exists.",
  },
  "t5-y2-milestone": {
    detail: "Year 2 check-in: production-ready character + finished short with strong performance — or clear gaps for Year 3.",
    steps: [
      "List what is done vs missing for character and performance (or asset package).",
      "Name the top gaps for Year 3.",
    ],
    criteria: "· Status note lists done items and Year 3 gaps.",
  },
  "t6-pick": {
    detail: "Choose studio-style OR freelance-style practice for Term 6. Mark the unused path’s items dismissed so Up next stays honest.",
    steps: [
      "Choose studio-style OR freelance-style concentration.",
      "Mark the unused path’s items dismissed.",
      "Note why in notes.",
    ],
    criteria: "· One path chosen in notes; unused path items dismissed.",
  },
  "t6-assigned": {
    detail: "Work from assigned briefs with shot/asset continuity — not only self-chosen ideas.",
    steps: [
      "Invent a lead brief or use a partner’s notes.",
      "Keep continuity sheets across shots/assets.",
      "Deliver in the asked format.",
    ],
    criteria: "· Assigned-style brief delivered with continuity notes.",
  },
  "t6-versioned": {
    detail: "Versioned deliveries under revision, time, and tech constraints.",
    steps: [
      "Use versioned deliveries (v001…).",
      "Follow fixed windows and tech specs (resolution, frame rate, color).",
      "Keep a changelog for lead notes.",
    ],
    criteria: "· Versioned delivery + changelog exist for at least one round.",
  },
  "t6-lead-notes": {
    detail: "Practice receiving lead-style notes: paraphrase, prioritize, revise.",
    steps: [
      "Designate a lead (partner, mentor, or yourself with strict rules).",
      "Log notes → your response → what changed.",
    ],
    criteria: "· Notes log shows note → response → change.",
  },
  "t6-app-pkg": {
    detail: "Draft a role-specific application package following a real posting’s format.",
    steps: [
      "Pick a real posting format.",
      "Order best relevant work first; add contribution notes.",
      "Test links while logged out.",
    ],
    criteria: "· Draft package matches a real posting format; links tested logged out.",
  },
  "t6-role-matrix": {
    detail: "Living table from live job postings: requirement → evidence → gap → next assignment.",
    steps: [
      "Collect current postings for your target role.",
      "Build requirement → evidence → gap → next assignment.",
      "Refresh as postings change.",
    ],
    criteria: "· Matrix exists with gaps tied to next work.",
  },
  "t6-discovery": {
    detail: "Client discovery: intake questions, written scope, time/cost estimate. Templates are not universal legal advice.",
    steps: [
      "Write intake questions for a mock or real client.",
      "Write scope tied to deliverables.",
      "Add a time/cost estimate; note where real legal/accounting advice is needed.",
    ],
    criteria: "· Intake + scope + estimate document exists.",
  },
  "t6-style": {
    detail: "Style frames, approval milestones, and revision limits before change fees.",
    steps: [
      "Produce style frames or approval milestones.",
      "Define how many revision rounds are included.",
      "Write what triggers extra change fees.",
    ],
    criteria: "· Approval stages and revision limits are written down.",
  },
  "t6-client": {
    detail: "Mock or real small client project end-to-end.",
    steps: [
      "Run brief → approvals → delivery → archive.",
      "Prefer a real small favor/client if safe.",
      "Document approvals and deliveries.",
    ],
    criteria: "· End-to-end project archived with approval trail.",
  },
  "t6-freelance-kit": {
    detail: "Reusable freelance templates: intake, payment schedule, change requests, usage rights, final delivery.",
    steps: [
      "Draft an intake form.",
      "Draft payment schedule and change-request steps.",
      "Draft usage-rights and final-delivery checklists.",
      "Keep them in one reusable folder.",
    ],
    criteria: "· All five template types exist in one place.",
  },
  "t6-artstation-early": {
    detail: "Update ArtStation or a simple site with process and finished work. Personal work is also marketing.",
    steps: [
      "Publish or update best current work.",
      "Write clear project descriptions with process.",
      "Test public links while logged out.",
    ],
    criteria: "· Public page shows process + finished work; links work logged out.",
  },
  "t6-change": {
    detail: "Handle a mid-project change request without rebuilding everything blindly.",
    steps: [
      "Simulate a late source, changed brief, extra format, or out-of-scope ask.",
      "Re-estimate; document impact.",
      "Deliver the revised scope professionally.",
    ],
    criteria: "· Change logged with impact and revised delivery.",
  },
  "t6-maya-bridge": {
    detail: "Optional: only if target postings need Maya. Check Autodesk Indie eligibility — not an unrestricted discount.",
    steps: [
      "Skim Maya Indie eligibility for your situation.",
      "Note whether target postings actually need Maya.",
      "Mark this dismissed if not relevant.",
    ],
    criteria: "· Eligibility/need noted, or item dismissed.",
    links: [
      { label: "Maya Indie eligibility", url: "https://www.autodesk.com/campaigns/me-indie/maya-indie" },
    ],
  },
  "t7-pick": {
    detail: "Pick one capstone type as primary. Mark unused option rows dismissed so the checklist stays scannable.",
    steps: [
      "Choose one capstone option that supports the job you want.",
      "Mark unused option rows dismissed.",
      "Note the choice in notes.",
    ],
    criteria: "· Capstone type noted; unused options dismissed.",
  },
  "t7-opt-short": {
    detail: "If chosen: tightly scoped short or connected acting shots. Acting quality over set dressing. Mark dismissed if not chosen.",
    steps: [
      "Lock length and production limits in the brief.",
      "Prioritize acting over set dressing.",
      "If you chose another option, mark this dismissed.",
    ],
    criteria: "· Short/acting sequence underway with locked limits — or item dismissed.",
  },
  "t7-opt-boards": {
    detail: "If chosen: storyboard sequence + animatic with a different dramatic purpose than earlier boards. Mark dismissed if not chosen.",
    steps: [
      "Define sequence count and pitch clarity.",
      "Show alternatives and revisions.",
      "If you chose another option, mark this dismissed.",
    ],
    criteria: "· Boards + animatic progressing with revisions — or item dismissed.",
  },
  "t7-opt-asset": {
    detail: "If chosen: character or environment package with more than a beauty still. Mark dismissed if not chosen.",
    steps: [
      "Gather reference; build turns or blockout.",
      "Add materials and deformation or optimization proof.",
      "If you chose another option, mark this dismissed.",
    ],
    criteria: "· Package shows process + proof beyond a beauty still — or item dismissed.",
  },
  "t7-opt-tech": {
    detail: "If chosen: playable prototype, lighting sequence, or documented tool with a clear user demo. Mark dismissed if not chosen.",
    steps: [
      "Define the user and success demo.",
      "User-test or clearly demonstrate input/response.",
      "If you chose another option, mark this dismissed.",
    ],
    criteria: "· Demo or user test exists — or item dismissed.",
  },
  "t7-opt-client": {
    detail: "If chosen: commercial-service case study proving you can deliver reliably for someone else. Mark dismissed if not chosen.",
    steps: [
      "Document brief → constraints → revisions → result.",
      "If you chose another option, mark this dismissed.",
    ],
    criteria: "· Case study documents brief through result — or item dismissed.",
  },
  "t7-brief": {
    detail: "Who the capstone is for and what they should feel or understand.",
    steps: [
      "Write brief and audience.",
      "Confirm it supports the job you want.",
      "Share for critique before heavy production.",
    ],
    criteria: "· Brief/audience written and shared for early critique.",
  },
  "t7-milestones": {
    detail: "Schedule, dependencies, and top risks.",
    steps: [
      "Set milestones and risks (scope, tech, feedback access).",
      "Revisit weekly; cut scope early if needed.",
    ],
    criteria: "· Milestone list with risks exists and was revisited at least once.",
  },
  "t7-assets": {
    detail: "Asset and licensing list for free characters, music, fonts, references.",
    steps: [
      "List every external asset.",
      "Note permissions and attribution.",
      "Keep the list current through delivery.",
    ],
    criteria: "· Licensing list complete for all external assets used.",
  },
  "t7-critique-log": {
    detail: "Ongoing critique log: date, reviewer, notes, what you changed.",
    steps: [
      "Log each critique with date and reviewer.",
      "Record the change made.",
    ],
    criteria: "· Log shows multiple critique → change entries across the project.",
  },
  "t7-deliver": {
    detail: "Final capstone package matching the brief.",
    steps: [
      "Deliver in reviewable form.",
      "Include personal contribution list if anyone else helped.",
      "Test links logged out.",
    ],
    criteria: "· Final package matches the brief; links work logged out.",
  },
  "t7-postmortem": {
    detail: "What worked, what you would cut, what Term 8 launch still needs.",
    steps: [
      "Write intent vs result.",
      "List what to reuse and what Term 8 still needs.",
    ],
    criteria: "· Postmortem names Term 8 follow-ups.",
  },
  "t7-reel-plan": {
    detail: "Plan reel/boards/stills order for the target role. Follow the posting; quality over length.",
    steps: [
      "List pieces in intended order — best relevant work first.",
      "Note length guidance vs what the posting actually asks.",
    ],
    criteria: "· Written order plan exists for the target role.",
  },
  "t7-artstation": {
    detail: "Update ArtStation or personal site with capstone + breakdowns.",
    steps: [
      "Upload finals and process/breakdowns.",
      "Test links logged out.",
    ],
    criteria: "· Site shows capstone with process; links work logged out.",
  },
  "t7-unreal": {
    detail: "Optional Blender → Unreal practice. Check license terms before commercial use. Mark dismissed if not game-oriented.",
    steps: [
      "Export a simple asset (FBX/USD) into Unreal.",
      "Check real-time materials and license terms.",
      "Mark this dismissed if not on your path.",
    ],
    criteria: "· Bridge demo done with license noted, or item dismissed.",
    links: [
      { label: "Unreal Engine license", url: "https://www.unrealengine.com/en-US/license" },
    ],
  },
  "t7-visdev": {
    detail: "Optional color script / visdev frames if the capstone needs a world. Do not use this to avoid weak acting if acting is your lead craft.",
    steps: [
      "If needed: produce color script or mood frames for the capstone world.",
      "Mark this dismissed if unused.",
    ],
    criteria: "· Visdev frames support the capstone, or item dismissed.",
  },
  "t8-portfolio": {
    detail: "Curated portfolio for the target role — only work that supports it.",
    steps: [
      "Remove weak or off-target pieces.",
      "Show process where it clarifies what you made.",
    ],
    criteria: "· Portfolio contains only role-supporting work.",
  },
  "t8-resume": {
    detail: "Role-specific résumé / intro stating what you make and what you want next.",
    steps: [
      "Tailor language to the discipline without inventing credits.",
      "Write a short intro: what you make + what you want next.",
    ],
    criteria: "· Résumé/intro tailored to the target role.",
  },
  "t8-reel": {
    detail: "Reel, boards, stills, or tools in the format the posting asks for.",
    steps: [
      "Cut presentation for the posting’s format.",
      "Animators: performance first, include one quiet scene. Modelers: turns, wires, process. Tech: tools in use.",
    ],
    criteria: "· Presentation matches posting format and craft priorities.",
  },
  "t8-breakdown": {
    detail: "Shot/asset breakdown plus attribution for free characters and collaborators.",
    steps: [
      "Write shot or asset breakdown.",
      "Credit free characters and collaborators clearly.",
    ],
    criteria: "· Breakdown + attribution ready for applications.",
  },
  "t8-fresh": {
    detail: "Simulate a test: new unfamiliar brief, fixed time window, readable delivery.",
    steps: [
      "Take a fresh brief under time pressure.",
      "Deliver honest, readable scope — not perfect conditions.",
    ],
    criteria: "· Timed unfamiliar brief delivered.",
  },
  "t8-outreach": {
    detail: "Application or client-outreach plan matching your Term 6 path.",
    steps: [
      "List targets and materials per target.",
      "Set a weekly send cadence.",
      "Track where you applied or contacted.",
    ],
    criteria: "· Plan with targets + cadence exists; at least one send logged or scheduled.",
  },
  "t8-continue": {
    detail: "After launch: weakness named by the last outside review + next 90 days of practice.",
    steps: [
      "Name the weakness from the last external review.",
      "Write the next 90 days of practice.",
    ],
    criteria: "· 90-day plan tied to a named weakness.",
  },
  "t8-reviewers": {
    detail: "Prefer two reviewers: someone in your craft plus an outsider for clarity.",
    steps: [
      "Get a craft practitioner or instructor review.",
      "Get an outsider clarity/usability review.",
      "Paste notes here.",
    ],
    criteria: "· Notes from preferably two reviewers are pasted.",
  },
  "t8-app-practice": {
    detail: "Dry-run an application: order of work, links, passwords logged out, ready to discuss decisions.",
    steps: [
      "Assemble materials in posting order.",
      "Test links and passwords logged out.",
      "Practice discussing decisions and revisions out loud.",
    ],
    criteria: "· Checklist completed: order, links, discuss-ready.",
  },
  "t8-pixar": {
    detail: "Pixar Careers FAQ reference for reel/portfolio guidance.",
    steps: [
      "Read Pixar Careers FAQ for reel/portfolio guidance.",
      "Note requirements that affect your package.",
    ],
    criteria: "· Notes list requirements that change your package.",
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
    criteria: "· Notes list format/breakdown expectations.",
    links: [
      { label: "Disney Animation Careers", url: "https://www.disneyanimation.com/careers/" },
    ],
  },
  "t8-disney-interns": {
    detail: "Disney Interns & Apprentices eligibility is separate from the artistic bar.",
    steps: [
      "Read Interns & Apprentices pages for eligibility vs artistic bar.",
      "Do not assume eligibility.",
    ],
    criteria: "· Eligibility notes recorded before assuming you can apply.",
    links: [
      { label: "Disney Interns & Apprentices", url: "https://www.disneyanimation.com/interns-apprentices/" },
    ],
  },
  "t8-calarts": {
    detail: "CalArts BFA Character Animation as breadth reference — not degree equivalence.",
    steps: [
      "Skim the program page as a breadth self-check.",
      "Note gaps without claiming equivalence.",
    ],
    criteria: "· Breadth self-check notes exist (not an equivalence claim).",
    links: [
      { label: "CalArts BFA Character Animation", url: "https://calarts.edu/academics/programs-and-degrees/bfa-character-animation" },
    ],
  },
  "t8-epic-techart": {
    detail: "Example tech-art evidence reference — verify live postings; old URLs go stale.",
    steps: [
      "If aiming tech art: study current role evidence expectations.",
      "Verify live postings — do not trust stale repost URLs.",
    ],
    criteria: "· Current posting notes recorded, or item dismissed if not tech-art oriented.",
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
