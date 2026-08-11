import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page container" style={{ textAlign: 'center' }}>
      <h1>Page not found</h1>
      <p style={{ color: 'var(--text-muted)' }}>
        That page doesn’t exist. Try starting from one of the sections below.
      </p>
      <div className="hero-actions">
        <Link to="/" className="btn btn-primary">
          Go home
        </Link>
        <Link to="/majors" className="btn btn-secondary">
          Explore majors
        </Link>
      </div>
    </div>
  )
}
