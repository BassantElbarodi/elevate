import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'

// Supabase auth tokens expire. This refreshes them on every request and writes
// the new cookies back, so a signed-in student stays signed in and Server
// Components always see a valid session.
export async function middleware(request) {
  let response = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          response = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          )
        },
      },
    },
  )

  // getUser() revalidates the token with Supabase. Do not swap this for
  // getSession(), which trusts the cookie without checking it.
  await supabase.auth.getUser()

  return response
}

export const config = {
  matcher: [
    // Everything except static assets and image files.
    '/((?!_next/static|_next/image|favicon.png|.*\\.(?:png|jpg|jpeg|gif|svg|webp)$).*)',
  ],
}
