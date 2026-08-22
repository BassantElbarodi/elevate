'use client'

import { use, useMemo, useState } from 'react'
import { scholarshipTypes } from '@/data/scholarships'
import { getScholarships } from '@/lib/i18n/content'
import { getUI } from '@/lib/i18n/ui'
import {
  scholarshipTypes as arTypes,
  scholarshipLevels as arLevels,
} from '@/data/ar/facets'

export default function Scholarships({ params }) {
  const { lang } = use(params)
  const t = getUI(lang).scholarships
  const scholarships = getScholarships(lang)
  const label = (value, dict) => (lang === 'ar' ? (dict[value] ?? value) : value)

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
  }, [scholarships, query, type])

  return (
    <div className="page container">
      <header className="page-header">
        <h1>{t.title}</h1>
        <p>{t.intro}</p>
      </header>

      <p className="note">
        <strong>{t.deadlineLead}</strong> {t.deadlineNote}
      </p>

      <div className="filters">
        <input
          type="search"
          className="search-input"
          placeholder={t.searchPlaceholder}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label={t.searchLabel}
        />
        <select
          className="select-input"
          value={type}
          onChange={(event) => setType(event.target.value)}
          aria-label={t.filterLabel}
        >
          <option value="All">{getUI(lang).common.allTypes}</option>
          {scholarshipTypes.map((option) => (
            <option key={option} value={option}>
              {label(option, arTypes)}
            </option>
          ))}
        </select>
      </div>

      <p className="result-count">
        {filtered.length} {filtered.length === 1 ? t.one : t.many}
      </p>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <p style={{ margin: 0 }}>{t.empty}</p>
        </div>
      ) : (
        <div className="grid">
          {filtered.map((s) => (
            <article key={s.id} className="card">
              <span className="card-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <div className="tag-row">
                <span className="tag tag-accent">{label(s.type, arTypes)}</span>
                <span className="tag tag-success">{s.funding}</span>
              </div>
              <p>{s.description}</p>

              <dl style={{ margin: 0 }}>
                <div className="stat-row">
                  <dt>{t.level}</dt>
                  <dd>{label(s.level, arLevels)}</dd>
                </div>
                <div className="stat-row">
                  <dt>{t.where}</dt>
                  <dd>{s.institutions}</dd>
                </div>
              </dl>

              <div>
                <p className="section-label">{t.whoCanApply}</p>
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
                {t.officialPage}
              </a>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
