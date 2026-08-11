import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { careers, careerFields } from '../data/careers'

export default function Careers() {
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
  }, [query, field])

  return (
    <div className="page container">
      <header className="page-header">
        <h1>Career paths</h1>
        <p>
          Where different fields of study lead — what the work actually involves, and what you need
          to get in the door.
        </p>
      </header>

      <p className="note">
        Pay and outlook shown here are placeholder values for this project. Check the{' '}
        <a href="https://www.bls.gov/ooh/" target="_blank" rel="noreferrer">
          Occupational Outlook Handbook
        </a>{' '}
        or your country’s labour statistics agency for real figures.
      </p>

      <div className="filters">
        <input
          type="search"
          className="search-input"
          placeholder="Search careers or skills…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Search careers"
        />
        <select
          className="select-input"
          value={field}
          onChange={(event) => setField(event.target.value)}
          aria-label="Filter by field"
        >
          <option value="All">All fields</option>
          {careerFields.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <p className="result-count">
        {filtered.length} {filtered.length === 1 ? 'career' : 'careers'}
      </p>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <p style={{ margin: 0 }}>No careers match that search. Try a different term or field.</p>
        </div>
      ) : (
        <div className="grid">
          {filtered.map((career) => (
            <Link key={career.id} to={`/careers/${career.id}`} className="card">
              <span className="card-icon">{career.icon}</span>
              <h3>{career.title}</h3>
              <p>{career.blurb}</p>
              <div className="tag-row" style={{ marginTop: 'auto', paddingTop: '0.75rem' }}>
                <span className="tag tag-accent">{career.field}</span>
                <span className="tag tag-success">{career.outlook}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
