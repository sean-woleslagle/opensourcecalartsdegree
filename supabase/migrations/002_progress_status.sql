-- Checklist item status: open | done | dismissed
-- Dismissed = skipped on purpose (counts as handled for progress; not incomplete).

alter table public.progress
  add column if not exists status text;

-- Back-compat: done:true → done; missing/null status → open (unless done)
update public.progress
set status = case when done then 'done' else 'open' end
where status is null
   or status not in ('open', 'done', 'dismissed');

alter table public.progress
  alter column status set default 'open';

alter table public.progress
  alter column status set not null;

alter table public.progress
  drop constraint if exists progress_status_check;

alter table public.progress
  add constraint progress_status_check
  check (status in ('open', 'done', 'dismissed'));

-- Keep legacy `done` boolean aligned when status changes (and vice versa for old clients).
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

  -- UPDATE: status wins when it changes; otherwise legacy done toggle maps to open/done
  if new.status is distinct from old.status then
    new.done := (new.status = 'done');
  elsif new.done is distinct from old.done then
    if new.done then
      new.status := 'done';
    elsif old.status = 'done' then
      new.status := 'open';
    end if;
    -- dismissed + done=false from a legacy client: leave status dismissed
  end if;
  return new;
end;
$$;

drop trigger if exists progress_sync_status_done_trg on public.progress;

create trigger progress_sync_status_done_trg
  before insert or update on public.progress
  for each row
  execute function public.progress_sync_status_done();
