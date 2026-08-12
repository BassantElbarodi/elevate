import { createBrowserClient } from '@supabase/ssr'

// Client used inside components that run in the browser ('use client').
// The anon key is public by design — it identifies the project, it does not
// grant access. Row Level Security decides what any given user may read.
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  )
}
