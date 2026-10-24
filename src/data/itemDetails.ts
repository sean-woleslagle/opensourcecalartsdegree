import type { ItemDetailFields } from "./types";

/**
 * Drill-down content for curriculum checklist items.
 * Keys match CurriculumItem.id values in curriculum.ts.
 */
export const itemDetails: Record<string, ItemDetailFields> = {
  // ——— Foundations: Observation & drawing ———
  "f-drawing-drawabox": {
    detail:
      "Treat Drawabox as a habit primer, not a multi-month detour. Lesson 0 and the 50% rule exist so drills do not eat your whole drawing week — keep the other half observational or playful. Construction (boxes, organic forms) should show up in how you block animation volumes later. Common pitfall: finishing Lesson after Lesson before you ever key a bounce.",
    criteria:
      "Done when: you can explain the 50% rule in your own words · you have construction warmups in a recent sketch session · you are animating in parallel, not waiting to “finish” Drawabox",
  },
  "f-drawing-proko": {
    detail:
      "Use free Proko lessons to fill a specific gap (gesture, landmarks, simple forms) rather than collecting another fundamentals course. Watch one lesson, then redraw from life or photo the same day. Paid Drawing Basics only helps if free lessons still leave the same mistake repeating for weeks.",
    criteria:
      "Done when: at least one free lesson is paired with same-week drawings · you can name the gap it addressed · you have not stacked a second paid basics course on top without evidence",
  },
  "f-drawing-loa": {
    detail:
      "Timed gesture sessions train decision speed under pressure — the same muscle animation needs. Set short intervals (30–120s), chase weight and balance, and stop polishing. If pages look “pretty,” shorten the timer. Missed days happen; restart with five minutes rather than waiting for a perfect block.",
    criteria:
      "Done when: you have a near-daily gesture habit logged for ≥2 weeks · recent pages show clear line of action / weight · finishes are rare and intentional, not the default",
  },
  "f-drawing-sketchdaily": {
    detail:
      "Use SketchDaily only if you need prompt variety beyond Line of Action. One prompt source is enough — dismissing this item is correct when LoA already covers the habit. Prefer quick reads of character or story over elaborate illustrations.",
    criteria:
      "Done when: either you run SketchDaily as your prompt source for a stretch, or you dismiss it because LoA already owns the gesture habit",
  },
  "f-drawing-loomis": {
    detail:
      "Figure books sharpen proportion and construction language you will reuse in poses and model sheets. Borrow or buy authorized editions; do not assume random PDFs are legal where you live. Assign one construction exercise per chapter instead of passive flipping.",
    criteria:
      "Done when: you have worked from an authorized/library copy · at least one chapter produced a concrete construction sheet · you know how those constructions map to animation volumes",
  },
  "f-drawing-observe-loop": {
    detail:
      "Close the loop between seeing and moving: observe a real action, draw keys, rebuild as volumes, change angle, then animate a simplified version. Compare where drawings and the pass disagree about weight or contact — that disagreement is the lesson. Keep the subject ordinary (lifting a bag, sitting down) so analysis stays honest.",
    criteria:
      "Done when: one full loop is documented (observe → keys → volumes → animate → notes) · you wrote where drawing and animation disagreed · the next session adjusts based on that note",
  },

  // ——— Foundations: Design ———
  "f-design-silhouettes": {
    detail:
      "Fill a page with twelve silhouettes of one character idea before detailing faces. Push big shape relationships until personality reads at thumbnail size. Throw out pretty-but-vague shapes; keep the ones a stranger can describe in one sentence.",
    criteria:
      "Done when: 12 silhouettes exist for one idea · at least 3 read personality without interiors · you can name what shape language each winner uses",
  },
  "f-design-variants": {
    detail:
      "Take one winning silhouette family and design three personality variants that keep the same narrative job. Change proportion, posture, and graphic accents — not costumes alone. The family should still feel related at a glance.",
    criteria:
      "Done when: three variants share a silhouette family · each sells a different personality · narrative function stays constant across the set",
  },
  "f-design-room": {
    detail:
      "Design a room that reveals an absent occupant through props, wear, and arrangement. Avoid labeling with photos of the person; let objects and value hierarchy tell the story. This trains the same storytelling muscle used in set dressing and boards.",
    criteria:
      "Done when: a cold viewer can infer who lives there · story comes from props/layout, not a portrait · value groups keep the focal props readable",
  },
  "f-design-grayscale": {
    detail:
      "Strip a sequence or key frames to grayscale and fix readability with value groups before trusting color. If the focal character or action dies without hue, color was carrying structure it should not. Re-group lights and darks, then restore color as support.",
    criteria:
      "Done when: a grayscale pass still shows subject and action · you can point to value groups that create hierarchy · color revisions follow the value fix, not the reverse",
  },
  "f-design-turn-expr": {
    detail:
      "Build a turn and expression sheet, then test it against poses you actually animate. When a pose breaks appeal or silhouette, revise the sheet — sheets that never meet motion become wallpaper. Prefer fewer expressions that work in motion over a dense unused grid.",
    criteria:
      "Done when: turn + expression sheet exists · ≥1 animated pose exposed a design problem · the sheet was revised to match what animation needs",
  },

  // ——— Foundations: Animation ———
  "f-anim-illusion": {
    detail:
      "Use Illusion of Life as a principles reference, not a novel to finish once. After a chapter, assign a short exercise (squash/stretch ball, anticipation lift, staging thumbnail) the same week. Mark the principle you are testing in your notes so reading stays active.",
    criteria:
      "Done when: you have borrowed or bought the book · ≥1 principle has a paired exercise logged · notes name which principle each exercise targeted",
  },
  "f-anim-ask": {
    detail:
      "Williams is densest on timing charts, walks, and acting craft. Pair each chapter you open with a concrete pass the same week — a walk cycle, a timing chart redraw, or a listening beat. Avoid binge-reading without keys in the graph.",
    criteria:
      "Done when: at least one chapter is paired with same-week animation · you can scrub a pass and point to timing/spacing choices the book informed",
  },
  "f-anim-blender-fund": {
    detail:
      "Prefer Blender Studio Animation Fundamentals as the low-cost spine: ball work into character acting on free training rigs. Finish modules with your own takes, not only tutorial mirrors. Do not stack three paid beginner courses on top of this path.",
    criteria:
      "Done when: you are working through the Fundamentals path · at least one original take exists beyond copying demos · supplied-rig acting is unblocked by modeling detours",
    links: [
      {
        label: "Blender Studio training rigs",
        url: "https://studio.blender.org/training/animation-fundamentals/5d69ab4dea6789db11ee65d1/",
      },
    ],
  },
  "f-anim-rigs": {
    detail:
      "Download and credit Blender Studio (or similar) training rigs so acting practice starts now. Building a humanoid is a later craft — blocking animation on a missing rig is the classic stall. Keep a short attribution note in every project README.",
    criteria:
      "Done when: a supplied rig opens and poses in your Blender · credits are written where you save shots · you have posed or blocked at least one beat without waiting on a custom biped",
  },
  "f-anim-into": {
    detail:
      "Into Animation is an optional alternate if the Blender Studio spine is not clicking. Pick one primary animation course and dismiss the rest so practice hours stay concentrated. Supporting material should fill a gap, not multiply unfinished playlists.",
    criteria:
      "Done when: either Into Animation is actively filling a gap, or you dismiss it because a primary spine already covers foundations",
  },
  "f-anim-mentor": {
    detail:
      "Consider paid workshops or a longer program only when free critique is not moving your work. Ask how often they review your shots, whether you get drawovers, and if revise/resubmit is built in. Compare workshop vs program cost against that feedback quality — not brand prestige.",
    criteria:
      "Done when: you either enroll with clear critique expectations written down, or dismiss after deciding free review channels are enough for now",
    links: [
      {
        label: "Animation Mentor program",
        url: "https://www.animationmentor.com/animation-program/",
      },
    ],
  },

  // ——— Foundations: Story ———
  "f-story-glebas": {
    detail:
      "Directing the Story trains boards, staging, and visual causality. Read a chapter, then board a tiny beat that applies one idea (clarity of want, staging for read, cause→effect). Passive highlighting without boards wastes the book.",
    criteria:
      "Done when: ≥1 chapter produced a boarded exercise · you can point to a staging choice Glebas informed · notes live next to the boards, not only in the book",
  },
  "f-story-framed": {
    detail:
      "Framed Ink is for composition and cinematic framing — thumbnail with value masses before line detail. Use it when boards feel flat or camera choices feel accidental. One composition study per sitting beats skimming the whole book.",
    criteria:
      "Done when: ≥1 composition study applies a Framed Ink idea · thumbnails show value masses before polish · a recent board page reflects clearer framing",
  },
  "f-story-gurney": {
    detail:
      "Color and Light helps when lookdev or lighting feels muddy. Borrow first; open it for a specific problem (value keys, color relationships under one light) rather than as a cover-to-cover course. Apply one idea to a current still or sequence.",
    criteria:
      "Done when: you used the book against a real muddy lighting/lookdev problem · one before/after still shows the fix · or you dismiss until that problem appears",
  },
  "f-story-resolve": {
    detail:
      "Install DaVinci Resolve and learn enough to cut an animatic and a final short: import boards or movies, trim, add scratch sound, export a reviewable file. Blender’s compositor can help, but Resolve is the primary free edit/sound path here. Save a reusable project template.",
    criteria:
      "Done when: Resolve opens a project you created · you can cut picture + simple sound and export · one animatic or short review movie exists from that workflow",
  },
  "f-story-drill-shots": {
    detail:
      "Tell the same event three ways: one continuous shot, three shots, and six shots. Force shot economy — note what each cut buys (clarity, emotion, rhythm) and what it costs. Prefer a silent everyday action so staging, not dialogue, carries meaning.",
    criteria:
      "Done when: 1-shot, 3-shot, and 6-shot versions exist · notes say what each cut pattern buys · you pick a preferred pattern for a real project beat",
  },

  // ——— Foundations: Context ———
  "f-context-calarts": {
    detail:
      "Skim the CalArts character-animation learning goals as a breadth checklist (history, culture, directing), not as proof this path equals a degree. Use gaps you notice to pick weekly analysis topics. Revisit once a term as your work deepens.",
    criteria:
      "Done when: you have read the learning-goals page · one gap informed a weekly analysis or practice choice · you treat it as reference, not equivalence",
  },
  "f-context-weekly": {
    detail:
      "Each week pick one short sequence, diagram staging and eyelines, then steal one technique into a new exercise the same week. Analysis without a try-it pass becomes passive cinephile hours. Keep notes or a link so the habit is visible in the app.",
    criteria:
      "Done when: a recent week has analysis notes + a same-week technique test · diagram shows staging/eyelines · the technique appears in a concrete exercise",
  },

  // ——— Foundations: Production ———
  "f-prod-naming": {
    detail:
      "Before a big project, decide naming, version folders, relative paths, and backups. Crash recovery should not be improvisation. Keep a one-page convention you actually follow — perfect schemes you abandon are worse than simple ones you keep.",
    criteria:
      "Done when: naming + version + backup rules are written · a current project follows them · you can reopen the project from a fresh folder without broken links",
  },
  "f-prod-color": {
    detail:
      "Write a one-page delivery checklist for your OS: frame rate, color space, image sequence vs movie, review format. Match what partners or applications expect. Update it when a delivery fails for a tech reason.",
    criteria:
      "Done when: a one-page checklist exists · at least one delivery used it · fps/color/format choices are explicit, not guessed at export",
  },
  "f-prod-pureref": {
    detail:
      "Keep reference on a PureRef (or equivalent) board per active project so screenshots do not scatter. Pair with one notes system (Notion or Obsidian) and stick with it. Rebuilding reference mid-shot kills momentum.",
    criteria:
      "Done when: the current project has an organized ref board · notes live in one chosen system · you can find a reference in under a minute while scrubbing",
  },

  // ——— Term 1: Onboarding ———
  "t1-nav": {
    detail:
      "Prove the basics cold: orbit/pan/zoom, Object/Edit mode, G/R/S with axis locks, save, reopen, and render once without a tutorial open. Navigation anxiety blocks every later exercise. If reopen or render fails, fix that before modeling more props.",
    criteria:
      "Done when: you reopen yesterday’s file without help · one render completes from your machine · MMB orbit and G/R/S with locks feel automatic",
  },
  "t1-cgcookie": {
    detail:
      "Pick either CG Cookie Blender Basics or CG Boost — not both. The collections hub is not a deep link; find a free beginner Blender course and finish it. Dismiss this item if you chose CG Boost so Up next stays honest.",
    criteria:
      "Done when: you finished CG Cookie beginner content as your one path, or dismissed after choosing CG Boost",
  },
  "t1-cgboost": {
    detail:
      "CG Boost’s free beginners course (~5 hr apple still life) covers interface through render. Use it as the single onboarding spine if you prefer it over CG Cookie. Do not also grind a second identical beginner course — original props teach judgment tutorials cannot.",
    criteria:
      "Done when: the free beginners course is finished as your one path, or dismissed after choosing CG Cookie",
  },
  "t1-finish-course": {
    detail:
      "After the beginner course, model a different simple prop with no step-by-step video open. Tutorials teach tools; original pieces teach judgment about proportion, topology enough for a still, and when to stop. Keep scope tiny so you finish.",
    criteria:
      "Done when: one original prop exists distinct from the course project · it opens and renders cleanly · no tutorial video was open while modeling it",
  },
  "t1-keyframes": {
    detail:
      "Set keys, scrub the timeline, and read a simple F-curve before bouncing balls. Know how to insert/delete keys, change interpolation, and spot accidental stepped tangents. Graph literacy prevents “mystery motion” later.",
    criteria:
      "Done when: you can set keys and scrub confidently · you can point to a curve and explain what it does · this is done before the ball block",
  },
  "t1-guru": {
    detail:
      "Early Blender Guru donut parts are optional modeling reps only. Dismiss if CG Cookie/CG Boost already covered the same ground. Do not let the donut become a second full beginner course that delays animation.",
    criteria:
      "Done when: early donut parts helped a specific gap, or the item is dismissed as redundant",
  },
  "t1-joey": {
    detail:
      "Joey Carlino beginner playlists can build interface muscle memory if your primary course left gaps. Dismiss when navigation already feels automatic. Supporting playlists should not multiply unfinished watchlists.",
    criteria:
      "Done when: playlists filled a nav gap, or dismissed because the primary course was enough",
  },
  "t1-phase-a": {
    detail:
      "Optional Grok Phase A: 30–60 minutes a day of transforms until navigation is automatic — vertex/edge/face select, Shift+A / X / Shift+D. Do not block Term 1 gates on this; use it when onboarding still feels clumsy.",
    criteria:
      "Done when: daily transform drills made nav automatic, or dismissed because Term 1 onboarding already stuck",
  },
  "t1-phase-b": {
    detail:
      "Optional Grok Phase B: box-model 5–10 simple props with Mirror, Subsurf, Bevel, Array, Solidify. Prefer quads; keep modifiers live when useful. Finish one original prop after the set so the phase ends in judgment, not only copies.",
    criteria:
      "Done when: a small prop set exists with those modifiers used intentionally · one original prop follows · or dismissed without delaying animation-early work",
  },
  "t1-baseline-draw": {
    detail:
      "Draw people, tools, interiors, and animals as a before snapshot. You will compare later terms against these pages — polish is less important than honest observation. Date the pages so progress is visible.",
    criteria:
      "Done when: a dated baseline set exists · subjects include people and objects/space · you can reopen them for later comparison",
  },
  "t1-six-panel": {
    detail:
      "Board six silent panels with a clear objective, obstacle, and consequence. No dialogue crutches — a stranger should follow the story from images alone. Thumbnail first; polish last.",
    criteria:
      "Done when: six panels show objective / obstacle / consequence · a cold reader follows without your pitch · no essential info lives only in dialogue",
  },
  "t1-line-control": {
    detail:
      "Drill ellipses, boxes in perspective, and confident strokes alongside Blender onboarding. Line control transfers to clearer silhouettes and cleaner model sheets. Short daily sets beat rare marathon pages.",
    criteria:
      "Done when: recent pages show ellipse/box drills · lines look intentional more often than sketchy-by-accident · drills ran parallel to weeks 1–2 onboarding",
  },
  "t1-perspective": {
    detail:
      "Construct a simple object or room corner in perspective without eyeballing alone. Use vanishing points and measured relationships so Term 1 self-check on spatial thinking is honest. Take a photo of a real corner and rebuild it.",
    criteria:
      "Done when: one constructed object/corner exists with clear VP logic · you can explain the construction · it was not pure freehand guesswork",
  },
  "t1-ball": {
    detail:
      "Animate one clean bounce cycle and practice saying timing vs spacing out loud while scrubbing. Contact and arcs must read; fancy materials do not. If you cannot explain the curves, the shot is not done.",
    criteria:
      "Done when: a clean bounce cycle plays · you can explain timing vs spacing while scrubbing · contact and arcs read without labels",
  },
  "t1-ball-var": {
    detail:
      "Keep the same setup and sell light, heavy, and lively through arcs, spacing, and silhouette — not text on screen. Compare the three takes side by side. The physical quality should be obvious to a muted viewer.",
    criteria:
      "Done when: three variations play from the same setup · muted viewers can tell light/heavy/lively apart · changes live in motion, not labels",
  },
  "t1-pendulum": {
    detail:
      "Animate a pendulum or tail-like overlap with settling after the drive stops. Overlap and follow-through teach drag that characters need later. Watch contact and arcs as carefully as on the ball.",
    criteria:
      "Done when: overlap and settle read clearly · arcs are clean · the pass stops when energy is spent, not abruptly",
  },
  "t1-three-prop": {
    detail:
      "Build three original props into one composed still or short turntable. Solve value grouping before materials so composition holds in grayscale. Keep topology simple enough to reopen later.",
    criteria:
      "Done when: three original props sit in one composition · value groups read in grayscale · file reopens and renders cleanly",
  },
  "t1-pose-rig": {
    detail:
      "Pose a supplied or flour-sack style rig for balance and line of action. Strong silhouette beats facial detail. No custom humanoid build is required — acting practice comes first.",
    criteria:
      "Done when: ≥1 strong posed silhouette exists on a supplied/flour-sack rig · balance and line of action read · credits for the rig are noted",
  },
  "t1-weight": {
    detail:
      "Film yourself or pull video reference for a weight shift or jump. Analyze contact and change of support before keying. Reference first prevents floaty blocking that polish cannot rescue.",
    criteria:
      "Done when: reference is filmed or gathered · contact/support notes exist before keys · a blocked pass reflects those notes",
  },
  "t1-board": {
    detail:
      "Board 6–12 panels of silent action with clear staging and screen direction. Continuity should survive an animatic cut. Avoid dialogue dependency — pictures carry the beat.",
    criteria:
      "Done when: 6–12 panels exist · staging/screen direction are clear · the set is ready to time in an animatic",
  },
  "t1-animatic": {
    detail:
      "Cut boards to time and add scratch sound. Unbriefed viewers should follow the action from the animatic alone. Fix story timing here — not after heavy animation polish.",
    criteria:
      "Done when: timed animatic with scratch sound exports · a cold viewer follows the action · major story fixes happened at this stage",
  },
  "t1-critique": {
    detail:
      "Run intent → rough → notes → revise → package. Name files clearly and credit supplied assets. Vague “looks cool” feedback does not count — capture specific notes you can act on.",
    criteria:
      "Done when: a revision from specific notes is done · package has clear naming · attribution for supplied assets is present",
  },
  "t1-external": {
    detail:
      "Get at least one outside review this term (Discord, forum, mentor). Paste specific notes into the item — not a thumbs-up. Outside eyes catch story and motion issues you have stopped seeing.",
    criteria:
      "Done when: one outside review is logged with concrete notes · you can point to a change those notes caused",
  },
  "t1-action-5s": {
    detail:
      "Deliver a 5–10 second animated action as Term 1 wrap. Readable contact and arcs matter more than set dressing. Use weeks 13–16 to revise weakest pieces, then ship this wrap instead of starting something new.",
    criteria:
      "Done when: 5–10s action plays with intentional contact/arcs · weakest prior pieces were revised first · package is reopenable",
  },
  "t1-sketchbook": {
    detail:
      "Curate observational pages — not every sketch. Show gesture, form, and a before/after if you have baseline drawings. Curation trains the same taste you need for a portfolio later.",
    criteria:
      "Done when: a curated selection exists · gesture and form are both represented · before/after is included if baseline pages exist",
  },
  "t1-three-props": {
    detail:
      "Model three simple props with no step-by-step tutorial open, distinct from the onboarding course prop. They should reopen and render later — throwaway files teach bad habits. Keep scope small enough to finish all three.",
    criteria:
      "Done when: three independent props exist · none are tutorial copies · each reopens and renders",
  },
  "t1-gate-check": {
    detail:
      "Self-check (no hard gate): create/save/reopen/render; explain timing vs spacing; show readable action with contact/arcs; construct a simple object in perspective; revise from specific feedback. Note gaps honestly. Sculpt/UV/humanoid rig are not required.",
    criteria:
      "Done when: each self-check question has a yes/no + evidence note · gaps are listed for Term 2 · you did not invent extra requirements like custom rigs",
  },

  // ——— Term 2 ———
  "t2-walk": {
    detail:
      "Block a walk with clear weight transfer: contact, passing, and shift of support. Film reference and block extremes before polishing feet slides. A pretty cycle with floaty hips fails the brief.",
    criteria:
      "Done when: contact/passing/support shift read · reference informed blocking · polish did not start before extremes worked",
  },
  "t2-lift": {
    detail:
      "Pick one force interaction (lift, push, pull, or jump) and sell effort through anticipation, contact, and settle — not only moving arms. The whole body commits. Mute the shot and confirm effort still reads.",
    criteria:
      "Done when: one force interaction is clear muted · anticipation/contact/settle are intentional · arms alone are not carrying the effort",
  },
  "t2-torso": {
    detail:
      "Sketch torso/pelvis/joint/balance relationships you are about to animate. Pelvis drives; torso follows. Drawing the mechanics first reduces floaty hips in the walk and lift passes.",
    criteria:
      "Done when: sketches show pelvis/torso relationship · balance notes exist · drawings informed at least one mechanics shot",
  },
  "t2-silhouette-poses": {
    detail:
      "Pose eight strong silhouettes on a supplied rig before polishing detail. Line of action and negative space first. Weak silhouettes do not become strong through facial tweaks.",
    criteria:
      "Done when: 8 silhouette poses exist · line of action reads on each · negative space supports the read",
  },
  "t2-char-packet": {
    detail:
      "Build a simplified character packet: silhouette, turn, a few expressions — simple enough to animate. Test against poses, not only pretty turns. Complexity that breaks in motion is the wrong complexity.",
    criteria:
      "Done when: silhouette + turn + expressions exist · design was tested against real poses · scope stays animatable",
  },
  "t2-env-value": {
    detail:
      "Paint or design one location in clear value groups so the microfilm stage reads in grayscale. Focal path for the eye should survive without color. This becomes the lighting target for the stage.",
    criteria:
      "Done when: one location value study exists · grayscale read is clear · microfilm stage can follow those groups",
  },
  "t2-phase-d": {
    detail:
      "Optional Grok Phase D: Principled BSDF, three-point or HDRI, and knowing when Eevee vs Cycles is enough for review. Texture and light earlier props; produce clean stills. Do not gold-plate renders while the microfilm story is unclear.",
    criteria:
      "Done when: clean stills show intentional light · you can say when Eevee vs Cycles is enough · or dismissed if film scope is at risk",
  },
  "t2-phase-c": {
    detail:
      "Optional sculpt intro (DynTopo/Multires) on a head or creature. Dismiss immediately if sculpting delays the microfilm. Term 2’s gate feel is readable story and action — not a sculpt demo.",
    criteria:
      "Done when: a small sculpt experiment finished without delaying the film, or the item is dismissed to protect scope",
  },
  "t2-abbitt": {
    detail:
      "Grant Abbitt videos are supporting depth for modeling/sculpt if Phase C is active. Dismiss when not needed this term. Do not open a new long playlist mid-microfilm crunch.",
    criteria:
      "Done when: videos helped a specific modeling/sculpt gap, or dismissed",
  },
  "t2-camera": {
    detail:
      "Set camera lens and height to support the microfilm action; light with three-point or HDRI enough for readability. Fancy lighting that hides the performance fails the brief. Lock camera choices after the animatic when possible.",
    criteria:
      "Done when: camera supports the action · lighting keeps the character readable · choices match the locked animatic intent",
  },
  "t2-boards": {
    detail:
      "Board and animatic the microfilm before heavy animation polish. One location, one central action, preferably one character. Fix story timing here — polish cannot rescue an unreadable beat.",
    criteria:
      "Done when: boards + timed animatic exist · story/timing are locked enough to animate · no complex dialogue dependency",
  },
  "t2-film": {
    detail:
      "Finish a 15–30s microfilm: one location, one central action, preferably one character. Supplied rigs are fine. Technical polish cannot rescue unclear want or action — cold viewers must describe what happened and what the character wanted.",
    criteria:
      "Done when: 15–30s film is cut · want and action read to a cold viewer · polish did not substitute for clarity",
  },
  "t2-sound": {
    detail:
      "Add an intro sound pass in Resolve or Blender: sync, ambience, and one clear sound idea that sells the beat. Scratch dialogue is optional. Sound should clarify timing, not decorate a muddy cut.",
    criteria:
      "Done when: picture has a basic sound pass · sync and ambience support the beat · one intentional sound idea is clear",
  },
  "t2-review": {
    detail:
      "Show the film to someone cold. Ask only: what happened, and what did the character want? Paste their words — not your interpretation. Mismatch between their read and your intent is the revision map.",
    criteria:
      "Done when: cold-read notes are pasted in their words · you know the biggest clarity miss · ego did not rewrite their answer",
  },
  "t2-revise": {
    detail:
      "One focused revision pass on the biggest clarity miss from the cold read, then package. Resist polishing everything; fix the miss that broke the story. Ship the revised cut.",
    criteria:
      "Done when: revision targets the named clarity miss · package is updated · you can point before/after on that miss",
  },

  // ——— Term 3 ———
  "t3-thought": {
    detail:
      "Animate a quiet thought-change: eyes, breath, tiny timing shifts. Lead with performance, not motion noise. If you need big gestures to sell the change, the acting is underspecified — clarify the before/after intention first.",
    criteria:
      "Done when: before/after intention is clear · change reads with small motion · a muted viewer notices the thought shift",
  },
  "t3-emotion": {
    detail:
      "Take a physical action and load it with a clear emotional intention. Same beats can mean different wants — pick one and make it visible in timing, eyes, and body attitude. Reference yourself or a friend.",
    criteria:
      "Done when: emotion is nameable in one word · physical beats support that emotion · muted playback still sells the feeling",
  },
  "t3-prop-interact": {
    detail:
      "Animate character–prop interaction where weight and contact matter. Hands and eyelines sell ownership of the object. Floating props or dead hands fail even if the body acts well.",
    criteria:
      "Done when: contact and weight with the prop read · hands/eyelines show ownership · the prop affects the character’s balance or timing",
  },
  "t3-pantomime": {
    detail:
      "Film acting reference for a pantomime, listening, or reaction beat. Listening often reveals more than dialogue delivery. Use the reference to block intention before polishing fingers.",
    criteria:
      "Done when: reference is filmed or gathered · a listening/reaction beat is blocked from it · intention is clearer than gesture noise",
  },
  "t3-phase-e": {
    detail:
      "Optional Grok Phase E: armatures, Rigify, ball→simple biped. Start with a simple prop armature before a full biped. Dismiss if acting shots are the priority — do not stall performance work on a half-built rig.",
    criteria:
      "Done when: a simple armature experiment finished usefully, or dismissed to protect acting priorities",
  },
  "t3-three-ways": {
    detail:
      "Stage the same story beat three ways: change camera, staging, or cut pattern while keeping the beat identical. Note which version reads fastest to a cold viewer. Steal the winner for later boards.",
    criteria:
      "Done when: three versions of one beat exist · notes compare read speed/clarity · a preferred version is chosen with a reason",
  },
  "t3-continuity": {
    detail:
      "Study screen direction, eyelines, and cutting on action. Paste diagrams or links into notes. Apply one continuity fix to a current board or animatic the same week.",
    criteria:
      "Done when: notes cover screen direction/eyelines/cutting · one applied fix exists in a current piece",
  },
  "t3-misunderstand": {
    detail:
      "Board a misunderstanding with no dialogue — setup and payoff must be visual. Causality should be obvious in the panels alone. Optional, but excellent for story craft.",
    criteria:
      "Done when: boards show a misunderstanding without dialogue · setup/payoff are clear to a cold reader · or dismissed intentionally",
  },
  "t3-sampler-1": {
    detail:
      "Spend about a week on a short piece outside your comfort zone — modeled prop with materials, 6-panel board, lighting mood study, or tiny tool/script. The point is range, not mastery. Pick something you have not led with yet.",
    criteria:
      "Done when: a ~1-week sampler is finished · craft family differs from your usual lead · you logged what was hard",
  },
  "t3-sampler-2": {
    detail:
      "Second sampler in a different craft family than sampler 1 on purpose. Log what felt natural vs forced — that note feeds Year 2 depth choices. Avoid repeating the same comfort zone with a new title.",
    criteria:
      "Done when: sampler 2 is a different family than #1 · notes compare natural vs forced · both samplers are packageable",
  },
  "t3-job-map": {
    detail:
      "Write craft strengths, interests, and 2–3 reference portfolios. This is not a locked specialty track — it maps where you want Year 2 depth and which skills repeat in work you admire. Keep it honest and short.",
    criteria:
      "Done when: strengths/interests are written · 2–3 reference portfolios are linked · Year 2 depth targets are named",
  },
  "t3-overview": {
    detail:
      "Optional shallow survey: one afternoon each on modeling, surfacing, rigging, lighting, and real-time so later terms are not mysterious. Notes only — no deep projects. Dismiss if time is better spent finishing acting shots.",
    criteria:
      "Done when: brief notes exist across the survey topics, or dismissed without guilt",
  },

  // ——— Term 4 ———
  "t4-spec-1": {
    detail:
      "Polish an acting or mechanics shot on a supplied rig: blocking → spline → polish. Show weight, timing, and clear intention. Credit the rig. Prefer Blender Studio Animation Fundamentals if you still need an instruction spine.",
    criteria:
      "Done when: blocking→spline→polish is complete · intention and weight read · rig is credited",
    links: [
      {
        label: "Blender Studio Animation Fundamentals",
        url: "https://studio.blender.org/training/animation-fundamentals/",
      },
    ],
  },
  "t4-spec-2": {
    detail:
      "Second craft-depth piece in a different family: character/prop with clean topology + simple materials + turn; or board pages + animatic beat; or lighting mood study with pass breakdown. Keep scope to about two weeks.",
    criteria:
      "Done when: piece is a different family than craft depth 1 · scope stayed ~2 weeks · deliverable matches the chosen option’s proof (turn / animatic / passes)",
  },
  "t4-foundations": {
    detail:
      "Keep drawing and weekly film analysis alive while depth work gets interesting. Log a weekly minimum you actually kept — aspirational schedules you ignore do not count. Foundations compound; skipping them shows up in Year 3 reels.",
    criteria:
      "Done when: a weekly minimum is written · you met it for most weeks this term · drawing + analysis both appear in the log",
  },
  "t4-ref-analysis": {
    detail:
      "Before polishing craft depth 1, break down reference: stills or film strips with notes on timing, arcs, and staging you will steal. Polish without a theft plan usually means guessing. Keep the board next to the shot.",
    criteria:
      "Done when: reference breakdown exists before polish · notes name specific steals · the shot reflects at least one of them",
  },
  "t4-model-uv": {
    detail:
      "Take one character or hero prop through model → basic UVs → simple material. Topology should survive a deformation or turntable test. Show wire + shaded. High-to-low not required yet.",
    criteria:
      "Done when: model + basic UVs + simple material exist · wire and shaded are shown · deformation or turntable proof passes",
  },
  "t4-rig-skin": {
    detail:
      "Generate or build controls (Rigify or simple armature) and fix obvious weight errors on shoulders, hips, and fingers. Deformation test poses are required — a rest pose beauty still is not a rig proof.",
    criteria:
      "Done when: controls work · major weight errors are fixed · deformation test poses are recorded",
  },
  "t4-texture-look": {
    detail:
      "Lookdev pass with Principled plus maps or procedurals to match your craft-depth piece. Optional ArmorPaint / Material Maker if Blender shaders are not enough. Match style intent — stylized or realistic — on purpose.",
    criteria:
      "Done when: lookdev matches the piece’s style intent · materials hold in a turn or lit still · tools used are noted",
  },
  "t4-collab-seq": {
    detail:
      "Collaborate on a shared shot, short, or tiny playable beat. Define roles up front. The educational win is handoff and communication, not only the final frames. Keep scope small enough that both people finish.",
    criteria:
      "Done when: shared piece exists with defined roles · both parties contributed · scope completed without silent abandonment",
  },
  "t4-handoff": {
    detail:
      "Package with relative paths, versioned zip/folder, and a README: how to open, controls, known issues. Partner should not need your machine or undocumented plugins. Broken links are a failed handoff even if your renders look fine.",
    criteria:
      "Done when: versioned package + README exist · relative paths work on another machine · known issues are listed",
  },
  "t4-contrib": {
    detail:
      "Write what you authored vs supplied assets vs partner work, clear enough for a reel credit line. Fuzzy credits cause portfolio pain later. Keep it short and accurate.",
    criteria:
      "Done when: contribution breakdown is written · supplied assets and partners are named · credit line is reel-ready",
  },
  "t4-postmortem": {
    detail:
      "One-page postmortem: scope, communication, notes received, delivery pain, what you would change. Honesty beats performance. Use it to set Term 5 habits.",
    criteria:
      "Done when: one-page postmortem exists · it names what broke and what you’d change · it is dated",
  },
  "t4-partner-used": {
    detail:
      "Confirm at least one other person opened and used your delivered files. Paste their confirmation or notes about failures. This test catches path and dependency issues polished renders hide.",
    criteria:
      "Done when: partner confirmation/notes are pasted · any open failures are listed · fixes followed if needed",
  },
  "t4-reliability": {
    detail:
      "Check artistic contribution and reliability: scope met, problems communicated, notes addressed. Note missed deadlines or silent blockers. Term 4’s soft gate is trustworthiness as much as craft.",
    criteria:
      "Done when: reliability notes are honest · missed communication is listed if any · notes from partners were addressed or explained",
  },

  // ——— Term 5 ———
  "t5-brief-1": {
    detail:
      "Hard brief: two-character or overlapping-objectives acting — asymmetry, listening, competing wants. Supplied rigs OK. If animation is not your lead craft, still do a smaller two-character blocking pass so the problem is felt.",
    criteria:
      "Done when: two characters or competing wants read · listening/asymmetry is visible · blocking quality matches your craft lead this term",
  },
  "t5-brief-2": {
    detail:
      "Pick one hard path: board sequence with emotional transitions and staging alternatives after notes, or a model with tough deformation zones (shoulders, hips, face) and proof poses. Either way, difficulty should expose a real weakness.",
    criteria:
      "Done when: chosen hard path is finished · notes or proof poses show the hard part was faced · alternatives/revisions exist if boards were chosen",
  },
  "t5-brief-3": {
    detail:
      "Pick one: mood continuity across ≥2 shots with pass breakdown; modular kit environment with material consistency; or a small tool/script another artist can run with docs. Depth over novelty.",
    criteria:
      "Done when: chosen option’s proof is present (passes / kit consistency / runnable tool + docs) · scope stayed finishable",
  },
  "t5-decisions": {
    detail:
      "Write a decision breakdown for one hard piece: references, rejected alternatives, and what you would test next. Reviewers care about judgment, not only frames. Keep it one to two pages.",
    criteria:
      "Done when: decisions are written · rejected alternatives are named · next tests are listed",
  },
  "t5-rebuild": {
    detail:
      "Substantially rebuild at least one piece after critique — structure, staging, or topology, not a polish pass. Keep before/after. Comfort-zone polishing does not count as a rebuild.",
    criteria:
      "Done when: before/after exists · change is structural · critique notes drove the rebuild",
  },
  "t5-benchmark": {
    detail:
      "Analyze one professional film shot, board sequence, model, or environment. Diagram what makes it work and list three transferable techniques. Then steal one into a current piece the same term.",
    criteria:
      "Done when: written analysis + diagram exist · 3 transferable techniques are listed · ≥1 is applied this term",
  },
  "t5-external": {
    detail:
      "Get a role-relevant external reviewer to name the limiting problem: foundational, technical, presentational, or polish. Term 6 should address that diagnosis. Paste their words.",
    criteria:
      "Done when: reviewer named a limiting category · notes are pasted · Term 6 plan references that diagnosis",
  },
  "t5-char-pipe": {
    detail:
      "Run one character end-to-end at junior scope: model → texture → rig → animate. Milestone is production-ready enough for a short performance, not a film-quality hero. Cut scope ruthlessly to finish the pipe.",
    criteria:
      "Done when: all pipe stages exist on one character · a short performance is possible on the rig · known limits are documented",
  },
  "t5-layout": {
    detail:
      "Layout and light a short sequence with continuity across shots. Export polished Eevee or Cycles review movies. Mood should support the action without crushing readability.",
    criteria:
      "Done when: multi-shot layout/lighting exists · continuity holds · review movies export cleanly",
  },
  "t5-facial": {
    detail:
      "Optional facial/secondary pass: eyes, lids, simple face controls, breathing/overlap. Expand Phase E ideas. Dismiss if the Year 2 film already proves enough face/secondary work.",
    criteria:
      "Done when: facial/secondary pass improves a shot, or dismissed because the film already proves it",
  },
  "t5-dialogue": {
    detail:
      "Year 2 film: dialogue or sustained performance short — or a complete character + environment package if film scope is wrong for your craft lead. Finish beats start; abandoned epics do not.",
    criteria:
      "Done when: either a finished performance short or a complete asset package exists · contribution/credits are clear",
  },
  "t5-resolve": {
    detail:
      "Sound design and final edit in DaVinci Resolve for the Year 2 piece. Music, ambience, SFX; export a review movie (burn-in slate optional). Treat picture lock seriously before mixing forever.",
    criteria:
      "Done when: final cut with sound exports · review movie is shareable · edit supports the performance/story",
  },
  "t5-y2-milestone": {
    detail:
      "Write Year 2 milestone status: production-ready character + finished short with strong performance — what is done vs gaps for Year 3. Honest gaps become Term 6–7 fuel.",
    criteria:
      "Done when: status note lists done vs gaps · gaps are specific enough to schedule · date is recorded",
  },

  // ——— Term 6 ———
  "t6-pick": {
    detail:
      "Choose studio vs independent/freelance concentration and note it. Run one path seriously; dismiss items on the other so Up next stays honest. You can still browse both — dismissing is about focus, not forbidden knowledge.",
    criteria:
      "Done when: concentration is written · the unused path’s items are dismissed or clearly deprioritized · weekly plan matches the chosen path",
  },
  "t6-assigned": {
    detail:
      "Work from assigned briefs with shot/asset continuity — not only self-chosen ideas. Invent a lead brief or use a partner’s notes; keep continuity sheets. Studio muscles are built by constraints.",
    criteria:
      "Done when: work follows an assigned brief · continuity notes exist · delivery matches the brief constraints",
  },
  "t6-versioned": {
    detail:
      "Practice versioned deliveries under revision, time, and tech constraints (res, fps, color). Missing a window once to practice recovery is useful — then do not make it a habit. Naming should make versions obvious.",
    criteria:
      "Done when: ≥1 delivery met a fixed window and tech spec · versions are clearly named · recovery from a miss was practiced or unnecessary",
  },
  "t6-lead-notes": {
    detail:
      "Designate a lead (partner, mentor, or self-with-rules). Log notes → your response → what changed. Learning to respond without defensiveness is part of the brief.",
    criteria:
      "Done when: notes log exists · responses and changes are recorded · tone stays professional in the log",
  },
  "t6-app-pkg": {
    detail:
      "Draft a role-specific application package: best relevant work first, contribution/breakdown, links tested logged out. Follow a real posting’s format. Pretty sites that break logged-out fail the draft.",
    criteria:
      "Done when: package matches a real posting’s format · links work logged out · breakdown/credits are included",
  },
  "t6-role-matrix": {
    detail:
      "Build a table from live job postings: requirement → evidence in your work → gap → next assignment. Refresh each term — postings change. This keeps practice tied to evidence, not vibes.",
    criteria:
      "Done when: matrix exists for ≥1 target role · gaps map to next assignments · table was updated this term",
  },
  "t6-discovery": {
    detail:
      "Write discovery/client brief work: intake questions, scope tied to deliverables, and a time/cost estimate. Seek real legal/accounting advice when needed — templates are not universal law. Clarity prevents resentment later.",
    criteria:
      "Done when: intake + written scope + estimate exist · deliverables are explicit · assumptions are listed",
  },
  "t6-style": {
    detail:
      "Define style frames, approval milestones, and how many revision rounds are included before change-order pricing. Ambiguous revision limits cause free-work spirals. Put limits in writing before production.",
    criteria:
      "Done when: style frames exist · approval stages are written · revision limits are explicit",
  },
  "t6-client": {
    detail:
      "Run a mock or real small client project end-to-end: brief → approvals → delivery → archive. Prefer a real small favor/client if safe. Archive like you will need the files in a year.",
    criteria:
      "Done when: end-to-end delivery happened · approvals are logged · archive is reopenable",
  },
  "t6-freelance-kit": {
    detail:
      "Build templates: intake form, payment schedule, change-request procedure, usage-rights checklist, final-delivery checklist. Reuse them; do not reinvent per job. Keep language plain.",
    criteria:
      "Done when: all listed templates exist · you used ≥1 on a real or mock job · files are findable in your system",
  },
  "t6-artstation-early": {
    detail:
      "Update ArtStation or a simple site with process + finished work. Sharing process early is marketing for independent work. Dead links and missing credits undermine trust.",
    criteria:
      "Done when: public page shows process + finishes · links work · credits/attribution are present",
  },
  "t6-change": {
    detail:
      "Handle a mid-project change request: late source, changed brief, extra format, or out-of-scope ask. Respond professionally without rebuilding everything blindly. Log the ask, impact, and agreement.",
    criteria:
      "Done when: change is logged · impact/scope response is written · delivery reflects the agreed change without silent full rebuilds",
  },
  "t6-maya-bridge": {
    detail:
      "Optional skim of Maya Indie eligibility and basic graph/rig familiarity if target postings need Maya. Check Autodesk Indie rules — it is not an unrestricted discount. Dismiss if your targets stay Blender-first.",
    criteria:
      "Done when: eligibility notes are written and a minimal familiarity pass is done, or dismissed as not needed",
  },

  // ——— Term 7 ———
  "t7-pick": {
    detail:
      "Pick one capstone type and dismiss unused option rows so the checklist stays scannable. Capstone must support your intended profession — an animator’s capstone is not all-term scenery. Write the choice in notes.",
    criteria:
      "Done when: capstone type is noted · unused options are dismissed · choice matches intended profession",
  },
  "t7-opt-short": {
    detail:
      "Tightly scoped short or connected acting shots with production limits locked in the brief. Acting quality over set dressing. Dismiss if this is not your chosen capstone.",
    criteria:
      "Done when: scoped short/acting sequence is delivered to brief, or item dismissed as unused",
  },
  "t7-opt-boards": {
    detail:
      "Storyboard sequence + animatic with a different dramatic purpose than prior boards; show alternatives/revisions. Dismiss if not chosen. Clarity of story beats craft ornament.",
    criteria:
      "Done when: boards + animatic + alternatives/revisions exist, or dismissed",
  },
  "t7-opt-asset": {
    detail:
      "Character or environment package with reference, turns/blockout, materials, and deformation or optimization proof — not only a beauty still. Dismiss if not chosen.",
    criteria:
      "Done when: package includes proof beyond beauty stills, or dismissed",
  },
  "t7-opt-tech": {
    detail:
      "Playable prototype, lighting sequence, or documented tool with user testing or clear input/response demo — not only a turntable movie. Dismiss if not chosen.",
    criteria:
      "Done when: demo proves interaction or documented use, or dismissed",
  },
  "t7-opt-client": {
    detail:
      "Commercial-service case study: brief, constraints, revisions, result — evidence you can make something reliably for someone else. Dismiss if not chosen.",
    criteria:
      "Done when: case study docs + result exist, or dismissed",
  },
  "t7-brief": {
    detail:
      "Write brief + audience: who it is for and what they should feel or understand. Capstone must support intended profession. Vague audiences produce vague cuts.",
    criteria:
      "Done when: audience and intended response are written · brief matches the chosen capstone type",
  },
  "t7-milestones": {
    detail:
      "Schedule milestones, dependencies, and top risks (scope, tech, feedback access). Risks you refuse to name still arrive — write them down and plan mitigations.",
    criteria:
      "Done when: milestones exist · top risks are listed with mitigations · dates are realistic for your hours",
  },
  "t7-assets": {
    detail:
      "List supplied rigs, music, fonts, references — permissions and attribution. Missing licenses block public posting and applications. Keep the list updated as assets enter the project.",
    criteria:
      "Done when: asset/licensing list is complete · permissions are noted · attribution text is ready",
  },
  "t7-critique-log": {
    detail:
      "Keep a critique log: date, reviewer, notes, what you changed. Required revision loop, not optional vibes. Empty logs mean you skipped the educational core of the capstone.",
    criteria:
      "Done when: log has dated entries · changes map to notes · at least one revision cycle is visible",
  },
  "t7-deliver": {
    detail:
      "Final package matches the brief. Include personal contribution list if anyone else helped. “Done” means reopenable, credited, and reviewable — not only rendered once on your machine.",
    criteria:
      "Done when: deliverable matches brief · package opens cleanly · contributions/credits are included",
  },
  "t7-postmortem": {
    detail:
      "Postmortem: what worked, what you’d cut, what Term 8 launch still needs. Be specific enough that next week’s plan writes itself.",
    criteria:
      "Done when: postmortem is written · launch gaps for Term 8 are named · cuts you would make are honest",
  },
  "t7-reel-plan": {
    detail:
      "Plan reel/boards/stills for the target role. ~1–3 minutes is studio guidance, not universal — submit the format the posting asks for. Quality over length; lead with strongest relevant work.",
    criteria:
      "Done when: ordered plan exists for target role · length/format matches intended postings · weakest pieces are cut from the plan",
  },
  "t7-artstation": {
    detail:
      "Update ArtStation or personal site with process + breakdowns alongside finals. Test links logged out. Process posts that explain decisions help reviewers trust authorship.",
    criteria:
      "Done when: site is updated · process/breakdowns appear · links work logged out",
  },
  "t7-unreal": {
    detail:
      "Optional Blender→Unreal bridge (FBX/USD, real-time materials) for game-oriented work. Read Unreal license terms before commercial use. Dismiss if not game-oriented.",
    criteria:
      "Done when: a small bridge test works and license notes are read, or dismissed",
  },
  "t7-visdev": {
    detail:
      "Optional color script / visdev frames for the capstone world. Useful when the world matters; a distraction if weak acting is the lead problem. Keep it supporting the brief.",
    criteria:
      "Done when: visdev supports the capstone without stealing acting/primary craft time, or dismissed",
  },

  // ——— Term 8 ———
  "t8-portfolio": {
    detail:
      "Curate a role-specific portfolio — not every assignment. Show process where it clarifies authorship. Cutting work is part of the craft; volume without relevance hurts.",
    criteria:
      "Done when: portfolio only includes role-supporting work · process appears where authorship needs clarity · order leads with strongest relevant piece",
  },
  "t8-resume": {
    detail:
      "Write a role-specific résumé/intro: what you make and what you want next. Tailor to the discipline. Generic creative résumés get skimmed past.",
    criteria:
      "Done when: résumé/intro is tailored · target role is clear · length fits common one-page expectations unless a posting says otherwise",
  },
  "t8-reel": {
    detail:
      "Deliver reel/boards/stills/tools as appropriate: performance first for animators (include one quiet scene); turns/wires/process for modelers; tools in use for tech. Match the role, not a generic showreel template.",
    criteria:
      "Done when: materials match target role · strongest relevant work leads · credits/breakdowns are ready",
  },
  "t8-breakdown": {
    detail:
      "Write shot/asset breakdown and credit supplied rigs and collaborators. Matches common studio application expectations. Fuzzy authorship is a red flag.",
    criteria:
      "Done when: breakdown is complete · supplied assets and collaborators are credited · it matches the reel/portfolio pieces",
  },
  "t8-fresh": {
    detail:
      "Complete a fresh unfamiliar brief under a fixed time window — simulate a test. Deliver readable work without perfect conditions. The skill is clarity under constraint.",
    criteria:
      "Done when: brief + time window were set · delivery happened inside the window · work is readable despite imperfect polish",
  },
  "t8-outreach": {
    detail:
      "Write an application or client-outreach plan: targets, materials per target, weekly send cadence. Match your Term 6 studio vs freelance path. Plans without send dates are wishes.",
    criteria:
      "Done when: target list + materials map + cadence exist · plan matches Term 6 path · first sends are scheduled",
  },
  "t8-continue": {
    detail:
      "Continuing-development plan: the weakness the last external review named, and the next 90 days of practice. Launch is not the end of training — it is a checkpoint.",
    criteria:
      "Done when: named weakness + 90-day practice plan exist · plan is specific enough to schedule weekly",
  },
  "t8-reviewers": {
    detail:
      "Prefer two reviewers: a specialty practitioner and an outsider for clarity/usability. Paste notes. They need not say anything about degree equivalence — clarity and craft diagnosis matter.",
    criteria:
      "Done when: notes from practitioner and outsider are pasted · you listed actions from each · disagreements between them are noted",
  },
  "t8-app-practice": {
    detail:
      "Run an application practice checklist: relevant work first; contributions clear; links/passwords tested logged out; follow the posting; ready to discuss decisions/revisions. Rehearse answers out loud once.",
    criteria:
      "Done when: checklist is completed against a real posting · logged-out link test passed · decision/revision talking points are written",
  },
  "t8-pixar": {
    detail:
      "Read Pixar Careers FAQ for reel length guidance and role-specific application notes. Formats change — verify on the live page when you apply. Use it as a checklist against your package.",
    criteria:
      "Done when: FAQ is read · notes affect your package order/format · date of reading is logged",
  },
  "t8-disney": {
    detail:
      "Read Disney Animation Careers FAQ for portfolio, reel, résumé, and shot breakdown expectations. Compare against your materials and fix gaps before sending.",
    criteria:
      "Done when: FAQ is read · gaps vs your materials are listed · at least one gap is fixed",
  },
  "t8-disney-interns": {
    detail:
      "Read Disney Interns & Apprentices eligibility before assuming you can apply. Artistic bar and eligibility are separate. Note deadlines and requirements that affect your timeline.",
    criteria:
      "Done when: eligibility page is read · applicable/not applicable is noted with reasons · deadlines affecting you are calendared",
  },
  "t8-calarts": {
    detail:
      "Use the CalArts BFA Character Animation page as a breadth reference for self-checks — not a claim this path equals the degree. Steal useful categories for continuing study; ignore status anxiety.",
    criteria:
      "Done when: page is skimmed · 1–2 breadth gaps inform your continuing plan · equivalence claims are avoided in your materials",
  },
  "t8-epic-techart": {
    detail:
      "If aiming technical art, study how tool/shader/procedural evidence differs from an acting reel. The example posting URL may go stale — search current Epic tech-art postings. Build evidence that matches the role family.",
    criteria:
      "Done when: you compared tech-art evidence needs to your portfolio · gaps are listed · brittle URLs were re-checked via search",
  },
};

export function detailsFor(id: string): ItemDetailFields | undefined {
  return itemDetails[id];
}
