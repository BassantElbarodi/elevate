'use client'

import { use, useMemo, useState } from 'react'
import { activityTypes } from '@/data/activities'
import { getActivities } from '@/lib/i18n/content'
import { getUI } from '@/lib/i18n/ui'
import { activityTypes as arTypes } from '@/data/ar/facets'

export default function Activities({ params }) {
  const { lang } = use(params)
  const t = getUI(lang).activities
  const activities = getActivities(lang)
  const label = (value, dict) => (lang === 'ar' ? (dict[value] ?? value) : value)

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
  }, [activities, query, type])

  return (
    <div className="page container">
      <header className="page-header">
        <h1>{t.title}</h1>
        <p>{t.intro}</p>
      </header>

      <p className="note">{t.note}</p>

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
          {activityTypes.map((option) => (
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
          {filtered.map((activity) => (
            <article key={activity.id} className="card">
              <span className="card-icon">{activity.icon}</span>
              <h3>{activity.title}</h3>
              <div className="tag-row">
                <span className="tag tag-accent">{label(activity.type, arTypes)}</span>
                <span className="tag tag-success">{activity.cost}</span>
              </div>
              <p>{activity.description}</p>

              <dl style={{ margin: 0 }}>
                <div className="stat-row">
                  <dt>{t.time}</dt>
                  <dd>{activity.commitment}</dd>
                </div>
              </dl>

              <div>
                <p className="section-label">{t.whatYouGain}</p>
                <div className="tag-row">
                  {activity.whatYouGain.map((gain) => (
                    <span key={gain} className="tag">
                      {gain}
                    </span>
                  ))}
                </div>
              </div>

              <p style={{ marginTop: 'auto', paddingTop: '0.75rem', fontSize: '0.88rem' }}>
                <strong style={{ color: 'var(--text)' }}>{t.gettingStarted} </strong>
                {activity.howToStart}
              </p>

              {activity.url && (
                <a
                  href={activity.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontWeight: 600, fontSize: '0.9rem' }}
                >
                  {t.visit} {activity.title} →
                </a>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
