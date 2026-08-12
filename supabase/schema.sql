-- Elevate — student profiles
--
-- Run this once in the Supabase dashboard: SQL Editor -> New query -> paste -> Run.
--
-- The important part is Row Level Security. Without it, a Supabase table is
-- readable by anyone holding the anon key — which is public by design, since it
-- ships in the browser. RLS is what actually protects the data, so it is
-- enabled here before any policy is written.

-- 1. The profile table. One row per signed-in user.
--    `id` points at Supabase's own auth.users table, and cascades on delete so
--    that deleting an account removes the profile with it.
create table if not exists public.profiles (
  id            uuid primary key references auth.users on delete cascade,
  full_name     text not null,
  age           integer,
  academic_year text,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

-- Age sanity check. Not security — just stops obvious typos like 200.
alter table public.profiles
  drop constraint if exists profiles_age_range;
alter table public.profiles
  add constraint profiles_age_range check (age is null or (age >= 10 and age <= 100));

-- 2. Turn RLS on. Until a policy below grants access, nothing is readable.
alter table public.profiles enable row level security;

-- 3. Policies: a student may only ever touch their own row.
--    auth.uid() is the id of whoever is making the request.
drop policy if exists "Users can read their own profile" on public.profiles;
create policy "Users can read their own profile"
  on public.profiles for select
  using (auth.uid() = id);

drop policy if exists "Users can create their own profile" on public.profiles;
create policy "Users can create their own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

drop policy if exists "Users can update their own profile" on public.profiles;
create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- Note there is deliberately no delete policy and no "anyone can read"
-- policy. Add one only if you decide profiles should be public, and think
-- carefully first: these are students, some of them minors.

-- 4. Keep updated_at honest.
create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_touch_updated_at on public.profiles;
create trigger profiles_touch_updated_at
  before update on public.profiles
  for each row execute function public.touch_updated_at();
