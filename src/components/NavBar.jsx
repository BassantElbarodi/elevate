import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/majors', label: 'Majors' },
  { to: '/careers', label: 'Careers' },
  { to: '/activities', label: 'Student Activities' },
  { to: '/resources', label: 'Resources' },
]

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link to="/" className="nav-brand" aria-label="Elevate — home">
          {/* The wordmark is violet on light and cream on dark, so the two
              variants are swapped by media query rather than recoloured. */}
          <picture>
            <source srcSet="/elevate-logo-reverse.svg" media="(prefers-color-scheme: dark)" />
            <img src="/elevate-logo.svg" alt="Elevate" className="nav-logo" />
          </picture>
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
