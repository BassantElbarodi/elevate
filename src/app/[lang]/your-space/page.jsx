import { locales } from '@/lib/i18n/config'
import { getUI } from '@/lib/i18n/ui'
import { getWellbeing } from '@/lib/i18n/content'

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }) {
  const { lang } = await params
  const t = getUI(lang).yourSpace
  return { title: `${t.title} — Elevate`, description: t.intro }
}

export default async function YourSpacePage({ params }) {
  const { lang } = await params
  const t = getUI(lang).yourSpace
  const topics = getWellbeing(lang)

  return (
    <div className="page container">
      <header className="page-header">
        <h1>{t.title}</h1>
        <p>{t.intro}</p>
      </header>

      <p className="note">
        {t.helplineBefore}{' '}
        <a href="tel:16328">
          <strong>16328</strong>
        </a>{' '}
        {t.helplineAfter}
      </p>

      <div className="grid">
        {topics.map((topic) => (
          <article key={topic.id} className="card">
            <span className="card-icon">{topic.icon}</span>
            <div className="tag-row">
              <span className="tag tag-accent">{topic.code}</span>
            </div>
            <h3>{topic.title}</h3>
            <p style={{ fontStyle: 'italic' }}>{topic.tagline}</p>
            <p>{topic.description}</p>

            <div>
              <p className="section-label">{t.signs}</p>
              <div className="tag-row">
                {topic.signs.map((sign) => (
                  <span key={sign} className="tag">
                    {sign}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '0.75rem' }}>
              <p className="section-label">{t.sessions}</p>
              <ol className="list-clean" style={{ fontSize: '0.88rem', margin: 0 }}>
                {topic.sessions.map((session) => (
                  <li key={session}>{session}</li>
                ))}
              </ol>
            </div>
          </article>
        ))}
      </div>

      <section className="panel section-gap">
        <h2>{t.takeawayTitle}</h2>
        <p style={{ marginBottom: 0 }}>{t.takeaway}</p>
      </section>
    </div>
  )
}
