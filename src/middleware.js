import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import { locales, defaultLocale, isLocale } from '@/lib/i18n/config'

// Every page lives under a /en or /ar prefix so both language versions can be
// prerendered. A request without one is sent to the reader's preferred
// language: the cookie the settings toggle writes, falling back to the
// browser's Accept-Language, falling back to English.
function preferredLocale(request) {
  const saved = request.cookies.get('elevate-lang')?.value
  if (isLocale(saved)) return saved

  const header = request.headers.get('accept-language') ?? ''
  const wanted = header
    .split(',')
    .map((part) => part.split(';')[0].trim().slice(0, 2).toLowerCase())
    .find((code) => locales.includes(code))

  return wanted ?? defaultLocale
}

function localeRedirect(request) {
  const { pathname } = request.nextUrl
  const first = pathname.split('/')[1]
  if (isLocale(first)) return null

  const url = request.nextUrl.clone()
  url.pathname = `/${preferredLocale(request)}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(url)
}

// Supabase auth tokens expire. This refreshes them on every request and writes
// the new cookies back, so a signed-in student stays signed in and Server
// Components always see a valid session.
export async function middleware(request) {
  // Language routing runs first and short-circuits: there is no point
  // refreshing a session for a request that is about to be redirected.
  const redirect = localeRedirect(request)
  if (redirect) return redirect

  let response = NextResponse.next({ request })

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // Without credentials, creating a client throws — and because this runs on
  // every route, that would turn a missing environment variable into a 500 on
  // all 108 pages, static content included. Accounts are one feature; the rest
  // of the site does not depend on them, so degrade instead of collapsing.
  if (!url || !key) {
    return response
  }

  const supabase = createServerClient(
    url,
    key,
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
