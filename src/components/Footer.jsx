export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Footer renders on every route, so putting contact here is what
            makes it reachable from all pages rather than the home page only. */}
        <p className="footer-contact">
          <strong>Contact us</strong>
          <a href="mailto:Bassant.ashraf987@gmail.com">Bassant.ashraf987@gmail.com</a>
          <span>Cairo, Egypt</span>
        </p>
        <p style={{ margin: 0 }}>
          Elevate — a student project. Course, career, and salary details are sample data for
          demonstration and should be verified against official sources.
        </p>
      </div>
    </footer>
  )
}
