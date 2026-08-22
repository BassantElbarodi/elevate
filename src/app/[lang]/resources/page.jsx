'use client'

import { use, useMemo, useState } from 'react'
import { resourceTypes } from '@/data/resources'
import { getResources } from '@/lib/i18n/content'
import { getUI } from '@/lib/i18n/ui'
import { resourceTypes as arTypes } from '@/data/ar/facets'

export default function Resources({ params }) {
  const { lang } = use(params)
  const t = getUI(lang).resources
  const resources = getResources(lang)
  const label = (value, dict) => (lang === 'ar' ? (dict[value] ?? value) : value)

  const [query, setQuery] = useState('')
  const [type, setType] = useState('All')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return resources.filter((resource) => {
      const matchesType = type === 'All' || resource.type === type
      const matchesQuery =
        q === '' ||
        resource.title.toLowerCase().includes(q) ||
        resource.description.toLowerCase().includes(q) ||
        resource.tags.some((tag) => tag.toLowerCase().includes(q))
      return matchesType && matchesQuery
    })
  }, [resources, query, type])

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
          value={type}
          onChange={(event) => setType(event.target.value)}
          aria-label={t.filterLabel}
        >
          <option value="All">{getUI(lang).common.allTypes}</option>
          {resourceTypes.map((option) => (
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
          {filtered.map((resource) => (
            <article key={resource.id} className="card">
              <div className="tag-row">
                <span className="tag tag-accent">{label(resource.type, arTypes)}</span>
                <span className="tag tag-success">{resource.cost}</span>
              </div>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <div className="tag-row" style={{ marginTop: 'auto', paddingTop: '0.75rem' }}>
                {resource.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={resource.url}
                target="_blank"
                rel="noreferrer"
                style={{ fontWeight: 600, fontSize: '0.9rem' }}
              >
                {t.visit}
              </a>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
