'use client'

import { useMemo, useState } from 'react'
import { workshops, workshopCategories } from '@/data/workshops'

export default function Mentorship() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return workshops.filter((w) => {
      const matchesCategory = category === 'All' || w.category === category
      const matchesQuery =
        q === '' ||
        w.title.toLowerCase().includes(q) ||
        w.description.toLowerCase().includes(q) ||
        w.youLearn.some((item) => item.toLowerCase().includes(q)) ||
        w.tags.some((tag) => tag.toLowerCase().includes(q))
      return matchesCategory && matchesQuery
    })
  }, [query, category])

  return (
    <div className="page container">
      <header className="page-header">
        <h1>Mentorship & workshops</h1>
        <p>
          Our workshops are designed to help students grow personally, academically, and
          professionally. Participants build self-confidence, keep pace with changing market
          demands, and develop skills that carry into a career.
        </p>
      </header>

      <div className="filters">
        <input
          type="search"
          className="search-input"
          placeholder="Search workshops or skills…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Search workshops"
        />
        <select
          className="select-input"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          aria-label="Filter by category"
        >
          <option value="All">All categories</option>
          {workshopCategories.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <p className="result-count">
        {filtered.length} {filtered.length === 1 ? 'workshop' : 'workshops'}
      </p>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <p style={{ margin: 0 }}>No workshops match that search.</p>
        </div>
      ) : (
        <div className="grid">
          {filtered.map((w) => (
            <article key={w.id} className="card">
              <span className="card-icon">{w.icon}</span>
              <h3>{w.title}</h3>
              <div className="tag-row">
                <span className="tag tag-accent">{w.category}</span>
              </div>
              <p>{w.description}</p>

              <div style={{ marginTop: 'auto', paddingTop: '0.5rem' }}>
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
                  What you’ll learn
                </p>
                <ul className="list-clean" style={{ fontSize: '0.88rem', marginBottom: '0.75rem' }}>
                  {w.youLearn.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="tag-row">
                  {w.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
