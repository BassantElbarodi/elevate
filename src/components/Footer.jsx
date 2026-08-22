import { getUI } from '@/lib/i18n/ui'

export default function Footer({ lang }) {
  const t = getUI(lang).footer

  return (
    <footer className="footer">
      <div className="container">
        {/* Footer renders on every route, so putting contact here is what
            makes it reachable from all pages rather than the home page only. */}
        <p className="footer-contact">
          <strong>{t.contact}</strong>
          <a href="mailto:elevate.eg.team@gmail.com">elevate.eg.team@gmail.com</a>
          <span>{t.location}</span>
        </p>
        <p style={{ margin: 0 }}>{t.disclaimer}</p>
      </div>
    </footer>
  )
}
