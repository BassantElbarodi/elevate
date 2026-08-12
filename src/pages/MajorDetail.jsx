import { Link, useParams } from 'react-router-dom'
import { getMajor } from '../data/majors'
import { getCareersForMajor } from '../data/careers'

export default function MajorDetail() {
  const { id } = useParams()
  const major = getMajor(id)

  if (!major) {
    return (
      <div className="page container">
        <h1>Major not found</h1>
        <p>We don’t have a page for “{id}”.</p>
        <Link to="/majors" className="btn btn-primary">
          Back to all majors
        </Link>
      </div>
    )
  }

  const relatedCareers = getCareersForMajor(major.id)

  return (
    <div className="page container">
      <Link to="/majors" className="back-link">
        ← All majors
      </Link>

      <header className="page-header">
        <span className="card-icon">{major.icon}</span>
        <h1>{major.name}</h1>
        <p>{major.blurb}</p>
      </header>

      <div className="detail-grid">
        <div>
          <section className="panel">
            <h2>What you’ll study</h2>
            <p style={{ marginBottom: 0 }}>{major.description}</p>
          </section>

          <section className="panel">
            <h2>Core courses</h2>
            <ul className="list-clean">
              {major.coreCourses.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </section>

          <section className="panel">
            <h2>Before you start</h2>
            <ul className="list-clean">
              {major.prerequisites.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="panel">
            <h2>Where it can lead</h2>
            {relatedCareers.length === 0 ? (
              <p style={{ marginBottom: 0, color: 'var(--text-muted)' }}>
                No career paths linked yet.
              </p>
            ) : (
              <div className="grid" style={{ gridTemplateColumns: '1fr' }}>
                {relatedCareers.map((career) => (
                  <Link
                    key={career.id}
                    to={`/careers/${career.id}`}
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
            )}
          </section>
        </div>

        <aside>
          <section className="panel">
            <h2>At a glance</h2>
            <dl style={{ margin: 0 }}>
              <div className="stat-row">
                <dt>Category</dt>
                <dd>{major.category}</dd>
              </div>
              <div className="stat-row">
                <dt>Typical length</dt>
                <dd>{major.typicalLength}</dd>
              </div>
              <div className="stat-row">
                <dt>Maths intensity</dt>
                <dd>{major.mathIntensity}</dd>
              </div>
            </dl>
          </section>

          <section className="panel">
            <h2>Skills you build</h2>
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
