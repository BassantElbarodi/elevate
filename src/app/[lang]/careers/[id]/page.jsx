import Link from 'next/link'
import { careers, roadmapStages } from '@/data/careers'
import { getCareer, getMajor } from '@/lib/i18n/content'
import { locales } from '@/lib/i18n/config'
import { getUI } from '@/lib/i18n/ui'
import { fields as arFields, outlooks as arOutlooks, roadmapStages as arStages } from '@/data/ar/facets'

// Prerender every career page in every language at build time — the data is
// static, so there is no reason to render these on demand.
export function generateStaticParams() {
  return locales.flatMap((lang) => careers.map((item) => ({ lang, id: item.id })))
}

export async function generateMetadata({ params }) {
  const { lang, id } = await params
  const item = getCareer(id, lang)
  if (!item) return { title: 'Not found — Elevate' }
  return { title: `${item.title} — Elevate`, description: item.blurb }
}

export default async function CareerDetail({ params }) {
  const { lang, id } = await params
  const t = getUI(lang).careers
  const career = getCareer(id, lang)
  const label = (value, dict) => (lang === 'ar' ? (dict[value] ?? value) : value)

  if (!career) {
    return (
      <div className="page container">
        <h1>{getUI(lang).common.notFound}</h1>
        <Link href={`/${lang}/careers`} className="btn btn-primary">
          {t.backToAll}
        </Link>
      </div>
    )
  }

  const relatedMajors = career.majorIds.map((majorId) => getMajor(majorId, lang)).filter(Boolean)

  return (
    <div className="page container">
      <Link href={`/${lang}/careers`} className="back-link">
        {t.backToAll}
      </Link>

      <header className="page-header">
        <span className="card-icon">{career.icon}</span>
        <h1>{career.title}</h1>
        <p>{career.blurb}</p>
      </header>

      <div className="detail-grid">
        <div>
          <section className="panel">
            <h2>{t.about}</h2>
            <p style={{ marginBottom: 0 }}>{career.description}</p>
          </section>

          <section className="panel">
            <h2>{t.roadmap}</h2>
            {/* The whole route at a glance. It repeats the timeline below it
                verbatim, so it is hidden from screen readers rather than read
                out twice. */}
            <ol className="roadmap-track" aria-hidden="true">
              {career.roadmap.map((step) => (
                <li key={step.title} className="roadmap-stop" data-kind={step.kind}>
                  <span className="roadmap-stop-icon">{roadmapStages[step.kind].icon}</span>
                  <span className="roadmap-stop-when">{step.when}</span>
                </li>
              ))}
            </ol>

            <ol className="roadmap">
              {career.roadmap.map((step) => {
                const stage = roadmapStages[step.kind]
                const stageLabel = lang === 'ar' ? arStages[step.kind] : stage.label
                return (
                  <li key={step.title} className="roadmap-step" data-kind={step.kind}>
                    <span className="roadmap-marker">
                      <span aria-hidden="true">{stage.icon}</span>
                      <span className="sr-only">{stageLabel}</span>
                    </span>
                    <div className="roadmap-body">
                      <p className="roadmap-meta">
                        <span className="roadmap-when">{step.when}</span>
                        {step.kind === 'gate' ? (
                          <span className="tag tag-accent roadmap-gate">{t.requiredToPractise}</span>
                        ) : null}
                      </p>
                      <h3>{step.title}</h3>
                      <p>{step.detail}</p>
                    </div>
                  </li>
                )
              })}
            </ol>
            <p className="roadmap-caveat">
              {t.roadmapCaveat}{' '}
              <a href="https://tansik.digital.gov.eg/" target="_blank" rel="noreferrer">
                Tansik
              </a>{' '}
              {t.roadmapCaveatEnd}
            </p>
          </section>

          <section className="panel">
            <h2>{t.typicalDay}</h2>
            <ul className="list-clean">
              {career.dayToDay.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="panel">
            <h2>{t.majorsThatLeadHere}</h2>
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
                <dd>{label(career.field, arFields)}</dd>
              </div>
              <div className="stat-row">
                <dt>{t.education}</dt>
                <dd>{career.education}</dd>
              </div>
              <div className="stat-row">
                <dt>{t.startingPay}</dt>
                <dd>{career.salaryRange}</dd>
              </div>
              <div className="stat-row">
                <dt>{t.outlook}</dt>
                <dd>{label(career.outlook, arOutlooks)}</dd>
              </div>
            </dl>
            <p style={{ margin: '0.75rem 0 0', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              {t.payCaveat}
            </p>
          </section>

          <section className="panel">
            <h2>{t.keySkills}</h2>
            <div className="tag-row">
              {career.skills.map((skill) => (
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
