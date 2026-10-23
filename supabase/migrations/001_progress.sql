-- Open-Source CalArts Degree — progress + optional track preference
-- Run in Supabase SQL Editor (or via supabase db push) after creating the project.

-- Progress rows: one per user per checklist item
create table if not exists public.progress (
  user_id uuid not null references auth.users (id) on delete cascade,
  item_id text not null,
  done boolean not null default false,
  notes text,
  updated_at timestamptz not null default now(),
  primary key (user_id, item_id)
);

create index if not exists progress_user_id_idx on public.progress (user_id);
create index if not exists progress_updated_at_idx on public.progress (updated_at desc);

alter table public.progress enable row level security;

create policy "Users read own progress"
  on public.progress for select
  using (auth.uid() = user_id);

create policy "Users insert own progress"
  on public.progress for insert
  with check (auth.uid() = user_id);

create policy "Users update own progress"
  on public.progress for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users delete own progress"
  on public.progress for delete
  using (auth.uid() = user_id);

-- Lightweight prefs (primary track). Single-user; still scoped by auth.uid().
create table if not exists public.prefs (
  user_id uuid primary key references auth.users (id) on delete cascade,
  primary_track text,
  updated_at timestamptz not null default now()
);

alter table public.prefs enable row level security;

create policy "Users read own prefs"
  on public.prefs for select
  using (auth.uid() = user_id);

create policy "Users upsert own prefs"
  on public.prefs for insert
  with check (auth.uid() = user_id);

create policy "Users update own prefs"
  on public.prefs for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
