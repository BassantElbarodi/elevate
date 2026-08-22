'use client'

import { use, useMemo, useState } from 'react'
import Link from 'next/link'
import { majorCategories } from '@/data/majors'
import { getMajors } from '@/lib/i18n/content'
import { getUI } from '@/lib/i18n/ui'
import { categories as arCategories } from '@/data/ar/facets'

export default function Majors({ params }) {
  const { lang } = use(params)
  const t = getUI(lang).majors
  const majors = getMajors(lang)
  const label = (value, dict) => (lang === 'ar' ? (dict[value] ?? value) : value)

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
  }, [majors, query, category])

  return (
    <div className="page container">
      <header className="page-header">
        <h1>{t.title}</h1>
        <p>{t.intro}</p>
      </header>

      <p className="note">
        {t.tansikNote}{' '}
        <a href="https://tansik.digital.gov.eg/" target="_blank" rel="noreferrer">
          {t.tansikNoteLink}
        </a>{' '}
        {t.tansikNoteEnd}
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
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          aria-label={t.filterLabel}
        >
          <option value="All">{getUI(lang).common.allCategories}</option>
          {majorCategories.map((option) => (
            <option key={option} value={option}>
              {label(option, arCategories)}
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
          {filtered.map((major) => (
            <Link key={major.id} href={`/${lang}/majors/${major.id}`} className="card">
              <span className="card-icon">{major.icon}</span>
              <h3>{major.name}</h3>
              <p>{major.blurb}</p>
              <div className="tag-row" style={{ marginTop: 'auto', paddingTop: '0.75rem' }}>
                <span className="tag tag-accent">{label(major.category, arCategories)}</span>
                <span className="tag tag-success">{major.typicalLength}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
