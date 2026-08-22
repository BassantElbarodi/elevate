'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getUI } from '@/lib/i18n/ui'
import { QuickSettings } from './SettingsControls'

// Section paths are locale-free here and get the prefix at render time, so
// adding a language never means editing this list.
const sections = [
  { to: '/majors', key: 'majors' },
  { to: '/careers', key: 'careers' },
  { to: '/masters', key: 'masters' },
  { to: '/activities', key: 'activities' },
  { to: '/mentorship', key: 'mentorship' },
  { to: '/your-space', key: 'yourSpace' },
  { to: '/scholarships', key: 'scholarships' },
  { to: '/resources', key: 'resources' },
  { to: '/about', key: 'about' },
  { to: '/settings', key: 'settings' },
]

export default function NavBar({ lang }) {
  const pathname = usePathname()
  const t = getUI(lang).nav
  const prefix = `/${lang}`

  // Strip the locale before comparing, so /ar/majors still lights up Majors.
  const path = pathname.startsWith(prefix) ? pathname.slice(prefix.length) || '/' : pathname

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link href={prefix} className="nav-brand" aria-label={t.brandLabel}>
          {/* The gradient wordmark starts in a dark blue that drops to 2.34:1
              on the dark background, so dark mode gets a brightened variant
              rather than the same file.
              This was a <picture> with a prefers-color-scheme <source>, which
              only ever asked the operating system. Now that a reader can force
              dark on a light-set device, that markup would leave the dark logo
              unused and the wordmark invisible — so both files render and CSS
              picks, since CSS can see the data-theme attribute and a media
              query cannot. Plain <img> on purpose: next/image builds its own
              srcset and cannot art-direct on either signal. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/elevate-logo.png" alt="Elevate" className="nav-logo logo-light" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/elevate-logo-reverse.png" alt="" aria-hidden="true" className="nav-logo logo-dark" />
        </Link>
        <div className="nav-links">
          {sections.map((link) => {
            // Detail pages keep their section highlighted: /majors/biology
            // should still light up "Majors".
            const isActive = path === link.to || path.startsWith(`${link.to}/`)
            return (
              <Link
                key={link.to}
                href={`${prefix}${link.to}`}
                className={isActive ? 'nav-link active' : 'nav-link'}
                aria-current={isActive ? 'page' : undefined}
              >
                {t[link.key]}
              </Link>
            )
          })}
          {/* Sign in sits outside the section links because it is an action,
              not a place — and keeping it out stops it competing with the
              content sections. */}
          <Link
            href={`${prefix}/account`}
            className={
              path.startsWith('/account') ? 'nav-link nav-signin active' : 'nav-link nav-signin'
            }
          >
            {t.signIn}
          </Link>
        </div>
        <QuickSettings lang={lang} />
      </div>
    </nav>
  )
}
