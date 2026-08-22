import { locales } from '@/lib/i18n/config'
import { getUI } from '@/lib/i18n/ui'

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }) {
  const { lang } = await params
  const t = getUI(lang).about
  return { title: `${t.title} — Elevate`, description: t.intro }
}

export default async function About({ params }) {
  const { lang } = await params
  const t = getUI(lang).about

  return (
    <div className="page container">
      <header className="page-header">
        <h1>{t.title}</h1>
        <p>{t.intro}</p>
      </header>

      <div className="detail-grid">
        <div>
          <section className="panel">
            <h2>{t.whyTitle}</h2>
            <p>{t.why1}</p>
            <p style={{ marginBottom: 0 }}>{t.why2}</p>
          </section>

          <section className="panel">
            <h2>{t.whoTitle}</h2>
            <p style={{ marginBottom: 0 }}>{t.who}</p>
          </section>

          <section className="panel" style={{ textAlign: 'center' }}>
            <p
              style={{
                margin: 0,
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.2rem, 2.6vw, 1.6rem)',
                color: 'var(--accent)',
              }}
            >
              {t.welcome}
            </p>
          </section>
        </div>

        <aside>
          <section className="panel">
            <h2>{t.missionTitle}</h2>
            <p style={{ marginBottom: 0 }}>{t.mission}</p>
          </section>

          <section className="panel">
            <h2>{t.visionTitle}</h2>
            <p style={{ marginBottom: 0 }}>{t.vision}</p>
          </section>
        </aside>
      </div>
    </div>
  )
}
