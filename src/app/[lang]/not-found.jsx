import Link from 'next/link'
import { getUI } from '@/lib/i18n/ui'
import { defaultLocale } from '@/lib/i18n/config'

// not-found renders outside the [lang] params, so there is no locale to read
// here. The middleware sends every bare path to a prefixed one, which means a
// reader arriving at a genuinely missing page is already inside a locale — but
// the component itself cannot see which, so it falls back to English rather
// than guessing.
export default function NotFound() {
  const t = getUI(defaultLocale).notFound

  return (
    <div className="page container" style={{ textAlign: 'center' }}>
      <h1>{t.title}</h1>
      <p style={{ color: 'var(--text-muted)' }}>{t.intro}</p>
      <div className="hero-actions">
        <Link href={`/${defaultLocale}`} className="btn btn-primary">
          {t.goHome}
        </Link>
        <Link href={`/${defaultLocale}/majors`} className="btn btn-secondary">
          {t.exploreMajors}
        </Link>
      </div>
    </div>
  )
}
