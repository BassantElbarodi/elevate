import Link from 'next/link'
import { masters } from '@/data/masters'
import { getMaster, getMajor } from '@/lib/i18n/content'
import { locales } from '@/lib/i18n/config'
import { getUI } from '@/lib/i18n/ui'
import { fields as arFields, routes as arRoutes } from '@/data/ar/facets'

export function generateStaticParams() {
  return locales.flatMap((lang) => masters.map((item) => ({ lang, id: item.id })))
}

export async function generateMetadata({ params }) {
  const { lang, id } = await params
  const item = getMaster(id, lang)
  if (!item) return { title: 'Not found — Elevate' }
  return { title: `${item.title} — Elevate`, description: item.blurb }
}

export default async function MasterDetail({ params }) {
  const { lang, id } = await params
  const t = getUI(lang).masters
  const entry = getMaster(id, lang)
  const label = (value, dict) => (lang === 'ar' ? (dict[value] ?? value) : value)

  if (!entry) {
    return (
      <div className="page container">
        <h1>{getUI(lang).common.notFound}</h1>
        <Link href={`/${lang}/masters`} className="btn btn-primary">
          {t.backToAll}
        </Link>
      </div>
    )
  }

  const relatedMajors = entry.majorIds.map((majorId) => getMajor(majorId, lang)).filter(Boolean)

  return (
    <div className="page container">
      <Link href={`/${lang}/masters`} className="back-link">
        {t.backToAll}
      </Link>

      <header className="page-header">
        <span className="card-icon">{entry.icon}</span>
        <h1>{entry.title}</h1>
        <p>{entry.blurb}</p>
      </header>

      <div className="detail-grid">
        <div>
          <section className="panel">
            <h2>{t.about}</h2>
            <p style={{ marginBottom: 0 }}>{entry.description}</p>
          </section>

          <section className="panel">
            <h2>{t.unlocks}</h2>
            <ul className="list-clean">
              {entry.whatItUnlocks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="panel">
            <h2>{t.funding}</h2>
            <p>{entry.funding}</p>
            <p style={{ marginBottom: 0 }}>
              <Link href={`/${lang}/scholarships`}>{t.browseScholarships}</Link>
            </p>
          </section>

          <section className="panel">
            <h2>{t.degreesThatLeadHere}</h2>
            {relatedMajors.length === 0 ? (
              <p style={{ marginBottom: 0, color: 'var(--text-muted)' }}>{t.noMajors}</p>
            ) : (
              <div className="grid" style={{ gridTemplateColumns: '1fr' }}>
                {relatedMajors.map((major) => (
                  <Link
                    key={major.id}
                    href={`/${lang}/majors/${major.id}`}
                    className="card"
                    style={{ boxShadow: 'none' }}
                  >
                    <h3>
                      {major.icon} {major.name}
                    </h3>
                    <p>{major.blurb}</p>
                  </Link>
                ))}
              </div>
            )}
          </section>
        </div>

        <aside>
          <section className="panel">
            <h2>{t.atAGlance}</h2>
            <dl style={{ margin: 0 }}>
              <div className="stat-row">
                <dt>{t.field}</dt>
                <dd>{label(entry.field, arFields)}</dd>
              </div>
              <div className="stat-row">
                <dt>{t.where}</dt>
                <dd>{label(entry.route, arRoutes)}</dd>
              </div>
              <div className="stat-row">
                <dt>{t.length}</dt>
                <dd>{entry.length}</dd>
              </div>
            </dl>
          </section>

          <section className="panel">
            <h2>{t.gettingIn}</h2>
            <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-muted)' }}>
              {entry.entry}
            </p>
          </section>

          <section className="panel">
            <h2>{t.beforeYouCommit}</h2>
            <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-muted)' }}>
              {t.commitCaveat}
            </p>
          </section>
        </aside>
      </div>
    </div>
  )
}
