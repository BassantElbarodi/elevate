export default function About() {
  return (
    <div className="page container">
      <header className="page-header">
        <h1>About Elevate</h1>
        <p>
          At Elevate, we believe every student deserves the chance to rise and unlock their true
          potential.
        </p>
      </header>

      <div className="detail-grid">
        <div>
          <section className="panel">
            <h2>Why we exist</h2>
            <p>
              Too often, students feel lost or unsure of their academic path, overwhelmed by social
              pressures, or struggling with mental well-being. That’s when we step in.
            </p>
            <p style={{ marginBottom: 0 }}>
              We created Elevate to be a safe space where students can find clarity, build
              confidence, and grow together. Think of us as your guide, mentor, and supporter rolled
              into one. We offer personalised roadmaps to help you discover your passions, practical
              tools to support your studies, and a community that lifts you up when things get
              tough.
            </p>
          </section>

          <section className="panel">
            <h2>Who we’re here for</h2>
            <p style={{ marginBottom: 0 }}>
              Whether you’re struggling to choose a career path, looking for ways to manage stress,
              or just searching for a place to belong, Elevate is here to walk beside you. Together,
              let’s transform confusion into confidence, and challenges into opportunities.
            </p>
          </section>

          <section className="panel" style={{ textAlign: 'center' }}>
            <p
              style={{
                margin: 0,
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.2rem, 2.6vw, 1.6rem)',
                color: 'var(--accent)',
              }}
            >
              Welcome to Elevate — the place where students rise.
            </p>
          </section>
        </div>

        <aside>
          <section className="panel">
            <h2>Our mission</h2>
            <p style={{ marginBottom: 0 }}>
              To empower students’ growth, guide them, and help them rise — while supporting their
              well-being.
            </p>
          </section>

          <section className="panel">
            <h2>Our vision</h2>
            <p style={{ marginBottom: 0 }}>
              To create a world where every student feels supported, confident, and empowered to
              follow their unique path — academically, mentally, and socially. We envision a future
              where no student feels lost, and every journey is elevated with clarity, guidance, and
              community.
            </p>
          </section>
        </aside>
      </div>
    </div>
  )
}
