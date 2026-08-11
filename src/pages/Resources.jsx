import { useMemo, useState } from 'react'
import { resources, resourceTypes } from '../data/resources'

export default function Resources() {
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
  }, [query, type])

  return (
    <div className="page container">
      <header className="page-header">
        <h1>Resources & study tips</h1>
        <p>
          Free course libraries, funding leads, and study techniques that hold up — chosen because
          they work, not because they’re popular.
        </p>
      </header>

      <div className="filters">
        <input
          type="search"
          className="search-input"
          placeholder="Search resources…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Search resources"
        />
        <select
          className="select-input"
          value={type}
          onChange={(event) => setType(event.target.value)}
          aria-label="Filter by type"
        >
          <option value="All">All types</option>
          {resourceTypes.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <p className="result-count">
        {filtered.length} {filtered.length === 1 ? 'resource' : 'resources'}
      </p>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <p style={{ margin: 0 }}>No resources match that search.</p>
        </div>
      ) : (
        <div className="grid">
          {filtered.map((resource) => (
            <article key={resource.id} className="card">
              <div className="tag-row">
                <span className="tag tag-accent">{resource.type}</span>
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
                Visit resource →
              </a>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
