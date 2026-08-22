'use client'

import { use, useMemo, useState } from 'react'
import { workshopCategories } from '@/data/workshops'
import { getWorkshops } from '@/lib/i18n/content'
import { getUI } from '@/lib/i18n/ui'
import { workshopCategories as arCategories } from '@/data/ar/facets'

export default function Mentorship({ params }) {
  const { lang } = use(params)
  const t = getUI(lang).mentorship
  const workshops = getWorkshops(lang)
  const label = (value, dict) => (lang === 'ar' ? (dict[value] ?? value) : value)

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
  }, [workshops, query, category])

  return (
    <div className="page container">
      <header className="page-header">
        <h1>{t.title}</h1>
        <p>{t.intro}</p>
      </header>

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
          {workshopCategories.map((option) => (
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
          {filtered.map((w) => (
            <article key={w.id} className="card">
              <span className="card-icon">{w.icon}</span>
              <h3>{w.title}</h3>
              <div className="tag-row">
                <span className="tag tag-accent">{label(w.category, arCategories)}</span>
              </div>
              <p>{w.description}</p>

              <div style={{ marginTop: 'auto', paddingTop: '0.5rem' }}>
                <p className="section-label">{t.youLearn}</p>
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
