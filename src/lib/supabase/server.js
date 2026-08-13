import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

// Client for server components, server actions and route handlers.
// Sessions live in cookies, so the server needs its own client rather than
// reusing the browser one.
// True when the Supabase environment variables are present. Callers use this
// to show a clear "not configured" message instead of crashing the page.
export function isSupabaseConfigured() {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
}

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options)
            })
          } catch {
            // Server Components cannot set cookies. That is fine here because
            // middleware refreshes the session on every request, so the write
            // this call would have made has already happened there.
          }
        },
      },
    },
  )
}
