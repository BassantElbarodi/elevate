'use client'

import { use, useMemo, useState } from 'react'
import Link from 'next/link'
import { masterFields, masterRoutes } from '@/data/masters'
import { getMasters } from '@/lib/i18n/content'
import { getUI } from '@/lib/i18n/ui'
import { fields as arFields, routes as arRoutes } from '@/data/ar/facets'

export default function Masters({ params }) {
  const { lang } = use(params)
  const t = getUI(lang).masters
  const masters = getMasters(lang)
  const label = (value, dict) => (lang === 'ar' ? (dict[value] ?? value) : value)

  const [query, setQuery] = useState('')
  const [field, setField] = useState('All')
  const [route, setRoute] = useState('All')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return masters.filter((entry) => {
      const matchesField = field === 'All' || entry.field === field
      const matchesRoute = route === 'All' || entry.route === route
      const matchesQuery =
        q === '' ||
        entry.title.toLowerCase().includes(q) ||
        entry.blurb.toLowerCase().includes(q) ||
        entry.entry.toLowerCase().includes(q)
      return matchesField && matchesRoute && matchesQuery
    })
  }, [masters, query, field, route])

  return (
    <div className="page container">
      <header className="page-header">
        <h1>{t.title}</h1>
        <p>{t.intro}</p>
      </header>

      <p className="note">
        {t.note} <Link href={`/${lang}/scholarships`}>{getUI(lang).nav.scholarships}</Link>{' '}
        {t.noteEnd}
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
          {masterFields.map((option) => (
            <option key={option} value={option}>
              {label(option, arFields)}
            </option>
          ))}
        </select>
        <select
          className="select-input"
          value={route}
          onChange={(event) => setRoute(event.target.value)}
          aria-label={t.routeLabel}
        >
          <option value="All">{t.anyRoute}</option>
          {masterRoutes.map((option) => (
            <option key={option} value={option}>
              {label(option, arRoutes)}
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
          {filtered.map((entry) => (
            <Link key={entry.id} href={`/${lang}/masters/${entry.id}`} className="card">
              <span className="card-icon">{entry.icon}</span>
              <h3>{entry.title}</h3>
              <p>{entry.blurb}</p>
              <div className="tag-row" style={{ marginTop: 'auto', paddingTop: '0.75rem' }}>
                <span className="tag tag-accent">{label(entry.field, arFields)}</span>
                <span className="tag tag-success">{entry.length}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
