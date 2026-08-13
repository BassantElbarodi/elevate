import { wellbeingTopics } from '@/data/wellbeing'

export const metadata = {
  title: 'Your Space — Elevate',
  description:
    'Support for the pressure that comes with studying: fear of failure, burnout, and anxiety about the future.',
}

export default function YourSpacePage() {
  return (
    <div className="page container">
      <header className="page-header">
        <h1>Your Space</h1>
        <p>
          The hard part of studying often isn’t the material. It’s the pressure around it — the fear
          of not being good enough, the exhaustion that sleep doesn’t fix, the worry about a future
          that keeps changing shape. This is a space for that.
        </p>
      </header>

      <p className="note">
        These are peer support sessions, not therapy, and nobody here is a doctor. If things feel
        heavier than that, Egypt’s national mental health line is{' '}
        <a href="tel:16328">
          <strong>16328</strong>
        </a>{' '}
        — free, confidential, and answered day or night. Reaching out early is not an overreaction.
      </p>

      <div className="grid">
        {wellbeingTopics.map((topic) => (
          <article key={topic.id} className="card">
            <span className="card-icon">{topic.icon}</span>
            <div className="tag-row">
              <span className="tag tag-accent">{topic.code}</span>
            </div>
            <h3>{topic.title}</h3>
            <p style={{ fontStyle: 'italic' }}>{topic.tagline}</p>
            <p>{topic.description}</p>

            <div>
              <p className="section-label">You might notice</p>
              <div className="tag-row">
                {topic.signs.map((sign) => (
                  <span key={sign} className="tag">
                    {sign}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '0.75rem' }}>
              <p className="section-label">These sessions will help you with</p>
              <ol className="list-clean" style={{ fontSize: '0.88rem', margin: 0 }}>
                {topic.sessions.map((session) => (
                  <li key={session}>{session}</li>
                ))}
              </ol>
            </div>
          </article>
        ))}
      </div>

      <section className="panel section-gap">
        <h2>If you take one thing from this page</h2>
        <p style={{ marginBottom: 0 }}>
          Struggling with any of this says nothing about how clever you are or how much you deserve
          your place. Academic pressure in Egypt is genuinely intense, and feeling crushed by it is a
          normal response to an abnormal amount of pressure — not a personal failing. Talking to
          someone early is what shortens it.
        </p>
      </section>
    </div>
  )
}
