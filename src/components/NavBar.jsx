import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/majors', label: 'Majors' },
  { to: '/careers', label: 'Careers' },
  { to: '/activities', label: 'Student Activities' },
  { to: '/mentorship', label: 'Mentorship' },
  { to: '/scholarships', label: 'Scholarships' },
  { to: '/resources', label: 'Resources' },
  { to: '/about', label: 'About' },
]

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link to="/" className="nav-brand" aria-label="Elevate — home">
          {/* The gradient wordmark starts in a dark blue that drops to 2.34:1
              on the dark background, so dark mode gets a brightened variant
              rather than the same file. */}
          <picture>
            <source srcSet="/elevate-logo-reverse.png" media="(prefers-color-scheme: dark)" />
            <img src="/elevate-logo.png" alt="Elevate" className="nav-logo" />
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
