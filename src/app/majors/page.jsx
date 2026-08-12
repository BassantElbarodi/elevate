'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { majors, majorCategories } from '@/data/majors'

export default function Majors() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return majors.filter((major) => {
      const matchesCategory = category === 'All' || major.category === category
      const matchesQuery =
        q === '' ||
        major.name.toLowerCase().includes(q) ||
        major.blurb.toLowerCase().includes(q) ||
        major.skills.some((skill) => skill.toLowerCase().includes(q))
      return matchesCategory && matchesQuery
    })
  }, [query, category])

  return (
    <div className="page container">
      <header className="page-header">
        <h1>Explore majors</h1>
        <p>
          What each subject actually covers, which Thanaweya Amma branch it needs, and where it can
          lead. Durations and faculty names follow the Egyptian public-university system.
        </p>
      </header>

      <p className="note">
        Tansik minimums shown on some majors are from the 2024/25 round and move every year. Check
        the current figures on the{' '}
        <a href="https://tansik.digital.gov.eg/" target="_blank" rel="noreferrer">
          official Tansik portal
        </a>{' '}
        before making decisions.
      </p>

      <div className="filters">
        <input
          type="search"
          className="search-input"
          placeholder="Search majors or skills…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Search majors"
        />
        <select
          className="select-input"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          aria-label="Filter by category"
        >
          <option value="All">All categories</option>
          {majorCategories.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <p className="result-count">
        {filtered.length} {filtered.length === 1 ? 'major' : 'majors'}
      </p>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <p style={{ margin: 0 }}>No majors match that search. Try a different term or category.</p>
        </div>
      ) : (
        <div className="grid">
          {filtered.map((major) => (
            <Link key={major.id} href={`/majors/${major.id}`} className="card">
              <span className="card-icon">{major.icon}</span>
              <h3>{major.name}</h3>
              <p>{major.blurb}</p>
              <div className="tag-row" style={{ marginTop: 'auto', paddingTop: '0.75rem' }}>
                <span className="tag tag-accent">{major.category}</span>
                <span className="tag">Maths: {major.mathIntensity}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
