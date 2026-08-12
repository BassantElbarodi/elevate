import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="page container" style={{ textAlign: 'center' }}>
      <h1>Page not found</h1>
      <p style={{ color: 'var(--text-muted)' }}>
        That page doesn’t exist. Try starting from one of the sections below.
      </p>
      <div className="hero-actions">
        <Link href="/" className="btn btn-primary">
          Go home
        </Link>
        <Link href="/majors" className="btn btn-secondary">
          Explore majors
        </Link>
      </div>
    </div>
  )
}
