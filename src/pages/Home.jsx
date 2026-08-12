import { Link } from 'react-router-dom'
import { majors } from '../data/majors'
import { careers } from '../data/careers'
import { activities } from '../data/activities'
import { resources } from '../data/resources'

const features = [
  {
    icon: '📚',
    title: 'Explore majors',
    text: 'See what each subject actually covers, what you need going in, and how demanding it is.',
    to: '/majors',
    cta: 'Browse majors',
  },
  {
    icon: '🧭',
    title: 'Follow career paths',
    text: 'Trace where each field of study leads, what the work looks like day to day, and what it takes to get there.',
    to: '/careers',
    cta: 'Explore careers',
  },
  {
    icon: '🙌',
    title: 'Get involved',
    text: 'Volunteering, clubs, and competitions that test a career before you commit years to it.',
    to: '/activities',
    cta: 'See student activities',
  },
  {
    icon: '🛠️',
    title: 'Study smarter',
    text: 'Evidence-based study techniques, free course libraries, and funding leads in one place.',
    to: '/resources',
    cta: 'See resources',
  },
]

export default function Home() {
  return (
    <>
      <section className="hero container">
        <h1>Find the path that fits you</h1>
        <p>
          Choosing a major is easier when you know what the coursework involves and where it leads.
          Explore subjects, follow them through to real careers, and pick up study habits that hold
          up under pressure.
        </p>
        <div className="hero-actions">
          <Link to="/majors" className="btn btn-primary">
            Explore majors
          </Link>
          <Link to="/careers" className="btn btn-secondary">
            Browse careers
          </Link>
        </div>
      </section>

      <section className="container">
        <div className="grid">
          {features.map((feature) => (
            <Link key={feature.to} to={feature.to} className="card">
              <span className="card-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              <span style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem' }}>
                {feature.cta} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container section-gap">
        <div className="panel" style={{ textAlign: 'center' }}>
          <p style={{ margin: 0, color: 'var(--text-muted)' }}>
            Currently covering <strong style={{ color: 'var(--text)' }}>{majors.length} majors</strong>,{' '}
            <strong style={{ color: 'var(--text)' }}>{careers.length} career paths</strong>,{' '}
            <strong style={{ color: 'var(--text)' }}>{activities.length} student activities</strong>,{' '}
            and{' '}
            <strong style={{ color: 'var(--text)' }}>{resources.length} study resources</strong>.
          </p>
        </div>
      </section>
    </>
  )
}
