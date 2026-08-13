'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { to: '/majors', label: 'Majors' },
  { to: '/careers', label: 'Careers' },
  { to: '/activities', label: 'Student Activities' },
  { to: '/mentorship', label: 'Mentorship' },
  { to: '/your-space', label: 'Your Space' },
  { to: '/scholarships', label: 'Scholarships' },
  { to: '/resources', label: 'Resources' },
  { to: '/about', label: 'About' },
]

export default function NavBar() {
  const pathname = usePathname()

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link href="/" className="nav-brand" aria-label="Elevate — home">
          {/* The gradient wordmark starts in a dark blue that drops to 2.34:1
              on the dark background, so dark mode gets a brightened variant
              rather than the same file. This is a plain <img> on purpose:
              next/image builds its own srcset and cannot art-direct on a
              media query, which is exactly what the theme swap needs. */}
          <picture>
            <source srcSet="/elevate-logo-reverse.png" media="(prefers-color-scheme: dark)" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/elevate-logo.png" alt="Elevate" className="nav-logo" />
          </picture>
        </Link>
        <div className="nav-links">
          {links.map((link) => {
            // Detail pages keep their section highlighted: /majors/biology
            // should still light up "Majors".
            const isActive = pathname === link.to || pathname.startsWith(`${link.to}/`)
            return (
              <Link
                key={link.to}
                href={link.to}
                className={isActive ? 'nav-link active' : 'nav-link'}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </Link>
            )
          })}
          {/* Sign in sits outside the section links because it is an action,
              not a place — and keeping it out stops it competing with the
              seven content sections. */}
          <Link
            href="/account"
            className={
              pathname.startsWith('/account') ? 'nav-link nav-signin active' : 'nav-link nav-signin'
            }
          >
            Sign in
          </Link>
        </div>
      </div>
    </nav>
  )
}
