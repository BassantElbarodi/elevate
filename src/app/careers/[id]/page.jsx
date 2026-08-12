import Link from 'next/link'
import { getCareer, careers } from '@/data/careers'
import { getMajor } from '@/data/majors'

// Prerender every career page at build time — the data is static, so
// there is no reason to render these on demand.
export function generateStaticParams() {
  return careers.map((item) => ({ id: item.id }))
}

export async function generateMetadata({ params }) {
  const { id } = await params
  const item = getCareer(id)
  if (!item) return { title: 'Not found — Elevate' }
  return { title: `${item.title} — Elevate`, description: item.blurb }
}

export default async function CareerDetail({ params }) {
  const { id } = await params
  const career = getCareer(id)

  if (!career) {
    return (
      <div className="page container">
        <h1>Career not found</h1>
        <p>We don’t have a page for “{id}”.</p>
        <Link href="/careers" className="btn btn-primary">
          Back to all careers
        </Link>
      </div>
    )
  }

  const relatedMajors = career.majorIds.map(getMajor).filter(Boolean)

  return (
    <div className="page container">
      <Link href="/careers" className="back-link">
        ← All careers
      </Link>

      <header className="page-header">
        <span className="card-icon">{career.icon}</span>
        <h1>{career.title}</h1>
        <p>{career.blurb}</p>
      </header>

      <div className="detail-grid">
        <div>
          <section className="panel">
            <h2>About the role</h2>
            <p style={{ marginBottom: 0 }}>{career.description}</p>
          </section>

          <section className="panel">
            <h2>A typical day</h2>
            <ul className="list-clean">
              {career.dayToDay.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="panel">
            <h2>Majors that lead here</h2>
            {relatedMajors.length === 0 ? (
              <p style={{ marginBottom: 0, color: 'var(--text-muted)' }}>No majors linked yet.</p>
            ) : (
              <div className="grid" style={{ gridTemplateColumns: '1fr' }}>
                {relatedMajors.map((major) => (
                  <Link
                    key={major.id}
                    href={`/majors/${major.id}`}
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
            <h2>At a glance</h2>
            <dl style={{ margin: 0 }}>
              <div className="stat-row">
                <dt>Field</dt>
                <dd>{career.field}</dd>
              </div>
              <div className="stat-row">
                <dt>Education</dt>
                <dd>{career.education}</dd>
              </div>
              <div className="stat-row">
                <dt>Starting pay</dt>
                <dd>{career.salaryRange}</dd>
              </div>
              <div className="stat-row">
                <dt>Outlook</dt>
                <dd>{career.outlook}</dd>
              </div>
            </dl>
            <p style={{ margin: '0.75rem 0 0', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Approximate monthly gross for a fresh graduate in Egypt, 2026. Bands vary widely by
              employer and date quickly against inflation.
            </p>
          </section>

          <section className="panel">
            <h2>Key skills</h2>
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
