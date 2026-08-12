'use client'

import { useMemo, useState } from 'react'
import { activities, activityTypes } from '@/data/activities'

export default function Activities() {
  const [query, setQuery] = useState('')
  const [type, setType] = useState('All')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return activities.filter((activity) => {
      const matchesType = type === 'All' || activity.type === type
      const matchesQuery =
        q === '' ||
        activity.title.toLowerCase().includes(q) ||
        activity.description.toLowerCase().includes(q) ||
        activity.whatYouGain.some((gain) => gain.toLowerCase().includes(q)) ||
        activity.tags.some((tag) => tag.toLowerCase().includes(q))
      return matchesType && matchesQuery
    })
  }, [query, type])

  return (
    <div className="page container">
      <header className="page-header">
        <h1>Student activities & volunteering</h1>
        <p>
          What you do outside class shapes your path as much as your grades — it is how you test a
          career before committing to it, and how you build the things a transcript can’t show.
        </p>
      </header>

      <p className="note">
        Egypt-based, compiled in 2026. Named organisations were checked against their own
        volunteering pages, but intake opens and closes between campaigns — confirm directly before
        counting on a placement. Depth beats breadth: two things you stuck with say more than eight
        you tried once.
      </p>

      <div className="filters">
        <input
          type="search"
          className="search-input"
          placeholder="Search activities or skills…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Search activities"
        />
        <select
          className="select-input"
          value={type}
          onChange={(event) => setType(event.target.value)}
          aria-label="Filter by type"
        >
          <option value="All">All types</option>
          {activityTypes.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <p className="result-count">
        {filtered.length} {filtered.length === 1 ? 'activity' : 'activities'}
      </p>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <p style={{ margin: 0 }}>No activities match that search. Try a different term or type.</p>
        </div>
      ) : (
        <div className="grid">
          {filtered.map((activity) => (
            <article key={activity.id} className="card">
              <span className="card-icon">{activity.icon}</span>
              <h3>{activity.title}</h3>
              <div className="tag-row">
                <span className="tag tag-accent">{activity.type}</span>
                <span className="tag tag-success">{activity.cost}</span>
              </div>
              <p>{activity.description}</p>

              <dl style={{ margin: 0 }}>
                <div className="stat-row">
                  <dt>Time</dt>
                  <dd>{activity.commitment}</dd>
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
                  What you gain
                </p>
                <div className="tag-row">
                  {activity.whatYouGain.map((gain) => (
                    <span key={gain} className="tag">
                      {gain}
                    </span>
                  ))}
                </div>
              </div>

              <p style={{ marginTop: 'auto', paddingTop: '0.75rem', fontSize: '0.88rem' }}>
                <strong style={{ color: 'var(--text)' }}>Getting started: </strong>
                {activity.howToStart}
              </p>

              {activity.url && (
                <a
                  href={activity.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontWeight: 600, fontSize: '0.9rem' }}
                >
                  Visit {activity.title} →
                </a>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
