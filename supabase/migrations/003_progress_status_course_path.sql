-- Extend checklist status for course-centered path:
-- open | done | dismissed | in_progress | reference

alter table public.progress
  drop constraint if exists progress_status_check;

alter table public.progress
  add constraint progress_status_check
  check (status in ('open', 'done', 'dismissed', 'in_progress', 'reference'));

-- Keep legacy `done` boolean aligned (only status=done → done true).
create or replace function public.progress_sync_status_done()
returns trigger
language plpgsql
as $$
begin
  if tg_op = 'INSERT' then
    if new.status is null or new.status = '' then
      new.status := case when coalesce(new.done, false) then 'done' else 'open' end;
    end if;
    new.done := (new.status = 'done');
    return new;
  end if;

  if new.status is distinct from old.status then
    new.done := (new.status = 'done');
  elsif new.done is distinct from old.done then
    if new.done then
      new.status := 'done';
    elsif old.status = 'done' then
      new.status := 'open';
    end if;
  end if;
  return new;
end;
$$;
