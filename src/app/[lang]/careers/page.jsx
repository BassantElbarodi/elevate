'use client'

import { use, useMemo, useState } from 'react'
import Link from 'next/link'
import { careerFields } from '@/data/careers'
import { getCareers } from '@/lib/i18n/content'
import { getUI } from '@/lib/i18n/ui'
import { fields as arFields, outlooks as arOutlooks } from '@/data/ar/facets'

export default function Careers({ params }) {
  // Client components receive params as a promise; use() unwraps it.
  const { lang } = use(params)
  const t = getUI(lang).careers
  const careers = getCareers(lang)
  const label = (value, dict) => (lang === 'ar' ? (dict[value] ?? value) : value)

  const [query, setQuery] = useState('')
  const [field, setField] = useState('All')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return careers.filter((career) => {
      const matchesField = field === 'All' || career.field === field
      const matchesQuery =
        q === '' ||
        career.title.toLowerCase().includes(q) ||
        career.blurb.toLowerCase().includes(q) ||
        career.skills.some((skill) => skill.toLowerCase().includes(q))
      return matchesField && matchesQuery
    })
  }, [careers, query, field])

  return (
    <div className="page container">
      <header className="page-header">
        <h1>{t.title}</h1>
        <p>{t.intro}</p>
      </header>

      <p className="note">
        {t.payNote}{' '}
        <a href="https://www.capmas.gov.eg/" target="_blank" rel="noreferrer">
          CAPMAS
        </a>{' '}
        {t.payNoteEnd}
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
          value={field}
          onChange={(event) => setField(event.target.value)}
          aria-label={t.filterLabel}
        >
          <option value="All">{getUI(lang).common.allFields}</option>
          {careerFields.map((option) => (
            <option key={option} value={option}>
              {label(option, arFields)}
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
          {filtered.map((career) => (
            <Link key={career.id} href={`/${lang}/careers/${career.id}`} className="card">
              <span className="card-icon">{career.icon}</span>
              <h3>{career.title}</h3>
              <p>{career.blurb}</p>
              <div className="tag-row" style={{ marginTop: 'auto', paddingTop: '0.75rem' }}>
                <span className="tag tag-accent">{label(career.field, arFields)}</span>
                <span className="tag tag-success">{label(career.outlook, arOutlooks)}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
