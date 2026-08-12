import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/majors', label: 'Majors' },
  { to: '/careers', label: 'Careers' },
  { to: '/activities', label: 'Activities' },
  { to: '/resources', label: 'Resources' },
]

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link to="/" className="nav-brand">
          🎓 Elevate
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
