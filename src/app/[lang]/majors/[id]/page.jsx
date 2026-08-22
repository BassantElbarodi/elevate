import Link from 'next/link'
import { majors } from '@/data/majors'
import { getMajor, getCareers, getMasters } from '@/lib/i18n/content'
import { locales } from '@/lib/i18n/config'
import { getUI } from '@/lib/i18n/ui'
import { categories as arCategories, mathIntensity as arMaths } from '@/data/ar/facets'

export function generateStaticParams() {
  return locales.flatMap((lang) => majors.map((item) => ({ lang, id: item.id })))
}

export async function generateMetadata({ params }) {
  const { lang, id } = await params
  const item = getMajor(id, lang)
  if (!item) return { title: 'Not found — Elevate' }
  return { title: `${item.name} — Elevate`, description: item.blurb }
}

export default async function MajorDetail({ params }) {
  const { lang, id } = await params
  const t = getUI(lang).majors
  const major = getMajor(id, lang)
  const label = (value, dict) => (lang === 'ar' ? (dict[value] ?? value) : value)

  if (!major) {
    return (
      <div className="page container">
        <h1>{getUI(lang).common.notFound}</h1>
        <Link href={`/${lang}/majors`} className="btn btn-primary">
          {t.backToAll}
        </Link>
      </div>
    )
  }

  const relatedCareers = getCareers(lang).filter((c) => c.majorIds.includes(major.id))
  const relatedMasters = getMasters(lang).filter((m) => m.majorIds.includes(major.id))

  return (
    <div className="page container">
      <Link href={`/${lang}/majors`} className="back-link">
        {t.backToAll}
      </Link>

      <header className="page-header">
        <span className="card-icon">{major.icon}</span>
        <h1>{major.name}</h1>
        <p>{major.blurb}</p>
      </header>

      <div className="detail-grid">
        <div>
          <section className="panel">
            <h2>{t.whatYouStudy}</h2>
            <p style={{ marginBottom: 0 }}>{major.description}</p>
          </section>

          <section className="panel">
            <h2>{t.curriculum}</h2>
            <ol className="curriculum">
              {major.curriculum.map((stage) => (
                <li key={stage.years} className="curriculum-stage">
                  <p className="curriculum-head">
                    <span className="curriculum-years">{stage.years}</span>
                    <span className="curriculum-label">{stage.stage}</span>
                  </p>
                  <ul className="curriculum-subjects">
                    {stage.subjects.map((subject) => (
                      <li key={subject}>{subject}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
            <p className="curriculum-caveat">{t.curriculumCaveat}</p>
          </section>

          <section className="panel">
            <h2>{t.postgraduate}</h2>
            {relatedMasters.length === 0 ? (
              <p style={{ marginBottom: 0, color: 'var(--text-muted)' }}>{t.noPostgraduate}</p>
            ) : (
              <div className="tag-row">
                {relatedMasters.map((entry) => (
                  <Link
                    key={entry.id}
                    href={`/${lang}/masters/${entry.id}`}
                    className="tag tag-accent"
                  >
                    {entry.icon} {entry.title}
                  </Link>
                ))}
              </div>
            )}
          </section>

          <section className="panel">
            <h2>{t.beforeYouStart}</h2>
            <ul className="list-clean">
              {major.prerequisites.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="panel">
            <h2>{t.whereItLeads}</h2>
            <div className="grid" style={{ gridTemplateColumns: '1fr' }}>
              {relatedCareers.map((career) => (
                <Link
                  key={career.id}
                  href={`/${lang}/careers/${career.id}`}
                  className="card"
                  style={{ boxShadow: 'none' }}
                >
                  <h3>
                    {career.icon} {career.title}
                  </h3>
                  <p>{career.blurb}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <aside>
          <section className="panel">
            <h2>{t.atAGlance}</h2>
            <dl style={{ margin: 0 }}>
              <div className="stat-row">
                <dt>{t.category}</dt>
                <dd>{label(major.category, arCategories)}</dd>
              </div>
              <div className="stat-row">
                <dt>{t.length}</dt>
                <dd>{major.typicalLength}</dd>
              </div>
              <div className="stat-row">
                <dt>{t.maths}</dt>
                <dd>{label(major.mathIntensity, arMaths)}</dd>
              </div>
              {major.tansik ? (
                <div className="stat-row">
                  <dt>{t.tansik}</dt>
                  <dd>{major.tansik}</dd>
                </div>
              ) : null}
            </dl>
          </section>

          <section className="panel">
            <h2>{t.skills}</h2>
            <div className="tag-row">
              {major.skills.map((skill) => (
                <span key={skill} className="tag tag-accent">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  )
}
