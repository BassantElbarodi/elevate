import Link from 'next/link'
import { locales } from '@/lib/i18n/config'
import { getUI } from '@/lib/i18n/ui'
import { majors } from '@/data/majors'
import { careers } from '@/data/careers'
import { masters } from '@/data/masters'
import { activities } from '@/data/activities'
import { workshops } from '@/data/workshops'
import { scholarships } from '@/data/scholarships'
import { resources } from '@/data/resources'

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

// Only the icon and destination live here now — every string comes from the
// dictionary, keyed by the same name.
const features = [
  { key: 'majors', icon: '📚', to: '/majors' },
  { key: 'careers', icon: '🧭', to: '/careers' },
  { key: 'masters', icon: '🎓', to: '/masters' },
  { key: 'activities', icon: '🙌', to: '/activities' },
  { key: 'mentorship', icon: '🌟', to: '/mentorship' },
  { key: 'yourSpace', icon: '🌱', to: '/your-space' },
  { key: 'scholarships', icon: '🏅', to: '/scholarships' },
  { key: 'resources', icon: '🛠️', to: '/resources' },
]

export default async function Home({ params }) {
  const { lang } = await params
  const t = getUI(lang).home
  const prefix = `/${lang}`
  // Arabic uses its own comma; using the Latin one here looks wrong in a
  // right-to-left sentence.
  const separator = lang === 'ar' ? '، ' : ', '

  const counts = [
    [majors.length, t.countMajors],
    [careers.length, t.countCareers],
    [masters.length, t.countMasters],
    [activities.length, t.countActivities],
    [workshops.length, t.countWorkshops],
    [scholarships.length, t.countScholarships],
    [resources.length, t.countResources],
  ]

  return (
    <>
      <section className="hero container">
        <h1>{t.title}</h1>
        <p>{t.intro}</p>
        <div className="hero-actions">
          <Link href={`${prefix}/majors`} className="btn btn-primary">
            {t.exploreMajors}
          </Link>
          <Link href={`${prefix}/careers`} className="btn btn-secondary">
            {t.browseCareers}
          </Link>
        </div>
      </section>

      <section className="container">
        <div className="grid">
          {features.map((feature) => {
            const copy = t.features[feature.key]
            return (
              <Link key={feature.to} href={`${prefix}${feature.to}`} className="card">
                <span className="card-icon">{feature.icon}</span>
                <h3>{copy.title}</h3>
                <p>{copy.text}</p>
                <span style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem' }}>
                  {copy.cta} →
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="container section-gap">
        <div className="panel" style={{ textAlign: 'center' }}>
          <p style={{ margin: 0, color: 'var(--text-muted)' }}>
            {t.coverage}{' '}
            {counts.map(([count, label], index) => (
              <span key={label}>
                <strong style={{ color: 'var(--text)' }}>
                  {count} {label}
                </strong>
                {index < counts.length - 1 ? separator : '.'}
              </span>
            ))}
          </p>
        </div>
      </section>
    </>
  )
}
