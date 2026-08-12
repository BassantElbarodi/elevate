import { useMemo, useState } from 'react'
import { scholarships, scholarshipTypes } from '../data/scholarships'

export default function Scholarships() {
  const [query, setQuery] = useState('')
  const [type, setType] = useState('All')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return scholarships.filter((s) => {
      const matchesType = type === 'All' || s.type === type
      const matchesQuery =
        q === '' ||
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.level.toLowerCase().includes(q) ||
        s.institutions.toLowerCase().includes(q) ||
        s.tags.some((tag) => tag.toLowerCase().includes(q))
      return matchesType && matchesQuery
    })
  }, [query, type])

  return (
    <div className="page container">
      <header className="page-header">
        <h1>Scholarships</h1>
        <p>
          Funding Egyptian students can actually apply for — awards to study here at home, and
          fully funded routes abroad.
        </p>
      </header>

      <p className="note">
        <strong>Deadlines are not listed on purpose.</strong> They move every year and some
        programmes pause intake without notice, so a date printed here would be wrong more often
        than right. Open the official link and check the current round. Note too that most
        study-abroad awards need a completed degree — if you are still at school, the Egyptian
        undergraduate awards are the ones to look at first.
      </p>

      <div className="filters">
        <input
          type="search"
          className="search-input"
          placeholder="Search scholarships…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Search scholarships"
        />
        <select
          className="select-input"
          value={type}
          onChange={(event) => setType(event.target.value)}
          aria-label="Filter by type"
        >
          <option value="All">All types</option>
          {scholarshipTypes.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <p className="result-count">
        {filtered.length} {filtered.length === 1 ? 'scholarship' : 'scholarships'}
      </p>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <p style={{ margin: 0 }}>No scholarships match that search.</p>
        </div>
      ) : (
        <div className="grid">
          {filtered.map((s) => (
            <article key={s.id} className="card">
              <span className="card-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <div className="tag-row">
                <span className="tag tag-accent">{s.type}</span>
                <span className="tag tag-success">{s.funding}</span>
              </div>
              <p>{s.description}</p>

              <dl style={{ margin: 0 }}>
                <div className="stat-row">
                  <dt>Level</dt>
                  <dd>{s.level}</dd>
                </div>
                <div className="stat-row">
                  <dt>Where</dt>
                  <dd>{s.institutions}</dd>
                </div>
              </dl>

              <div>
                <p
                  style={{
                    margin: '0 0 0.4rem',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  Who can apply
                </p>
                <ul className="list-clean" style={{ fontSize: '0.88rem' }}>
                  {s.eligibility.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <a
                href={s.url}
                target="_blank"
                rel="noreferrer"
                style={{ marginTop: 'auto', paddingTop: '0.75rem', fontWeight: 600, fontSize: '0.9rem' }}
              >
                Official page →
              </a>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
