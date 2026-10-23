# Open-Source CalArts Degree

Daily-driver web app for Sean’s independent open-source animation curriculum: Years with nested Terms, checklist progress, magic-link sync via Supabase, deploy on Vercel.

## Access control

The app is **login-gated**. Unauthenticated visitors only see the magic-link sign-in screen — no curriculum, years, checklists, or progress.

After sign-in, only **`jacx92@gmail.com`** (case-insensitive) may use the app. Any other signed-in email gets a clear “Not authorized” page and cannot open curriculum routes.

Optional override: set `ALLOWED_EMAIL` in `.env.local` or Vercel (defaults to `jacx92@gmail.com`).

## What you get

- **Nav:** Year 1 (Terms 1–3) → Year 2 (Terms 4–5) → Year 3 (Terms 6–8)
- **Year 1 spine:** Perplexity animation-early; Grok Phases A–E as supporting/optional
- **No hard gates** — recommended order + “Up next”
- **Checkboxes only**; optional notes/link on feedback items
- **Track:** choose in Year 2+; highlights relevant items, never hides
- **PWA-friendly** (Add to Home Screen) for iPhone / iPad / desktop
- **Progress:** Supabase when signed in as the allowlisted email; `localStorage` is only a cache for that session (no anonymous Local browsing)

## Quick start (local)

```bash
npm install
cp .env.example .env.local   # Supabase env vars required to sign in
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you’ll be redirected to `/login` until authenticated.

## Supabase setup (Sean)

1. Create a project at [supabase.com](https://supabase.com).
2. **Authentication → Providers → Email:** enable magic link / OTP.
3. **Authentication → URL configuration:** add redirect URLs:
   - `http://localhost:3000/auth/callback`
   - `https://YOUR_VERCEL_DOMAIN/auth/callback`
4. Run the SQL in [`supabase/migrations/001_progress.sql`](supabase/migrations/001_progress.sql) (SQL Editor → New query → Run).
5. **Project Settings → API:** copy Project URL and `anon` `public` key into env:

| Variable | Where |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | `.env.local` and Vercel |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `.env.local` and Vercel |
| `ALLOWED_EMAIL` | Optional; defaults to `jacx92@gmail.com` |

Schema (RLS-scoped to `auth.uid()`):

- `progress(user_id, item_id, done, notes, updated_at)` PK `(user_id, item_id)`
- `prefs(user_id, primary_track, updated_at)` for primary specialty track A–H

## Vercel deploy

1. Import this repo into Vercel (Next.js defaults are fine).
2. Add the two `NEXT_PUBLIC_SUPABASE_*` env vars (and optionally `ALLOWED_EMAIL`).
3. Deploy. After the first production URL exists, add it to Supabase redirect URLs.

## Curriculum seeding

| Area | Status |
| --- | --- |
| Always-on foundations | Seeded (drawing, design, anim, story, context, production) |
| Terms 1–3 (Year 1) | Fully usable checklist from Perplexity weeks + Grok supporting modules |
| Terms 4–5 (Year 2) | Scaffolded real work items from synthesis (specialty, collab, hard briefs) |
| Terms 6–8 (Year 3) | Scaffolded (career branch, capstone, launch) — not empty shells |
| Track picker | Year 2+ UI; highlight via `trackTags` |

Curriculum lives in [`src/data/curriculum.ts`](src/data/curriculum.ts).

## Scripts

```bash
npm run dev      # local
npm run build    # production build
npm run start    # serve build
npm run lint
```

## Honest limits

This app tracks study; it does not grant a CalArts degree or employment.
