import { Playfair_Display, Nunito, Cairo } from 'next/font/google'
import '../globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { locales, defaultLocale, localeDir, isLocale } from '@/lib/i18n/config'
import { getUI } from '@/lib/i18n/ui'

// next/font self-hosts the files and reserves the right space while they load,
// so there is no flash of fallback text the way the old <link> tags allowed.
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-nunito',
  display: 'swap',
})

// Nunito and Playfair have no Arabic glyphs, so Arabic text in them would fall
// back to whatever the device happens to have. Cairo is a proper Arabic face
// that also carries Latin, which keeps mixed strings — «الطب الشرعي (Forensic
// Medicine)» — in one typeface instead of two.
const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cairo',
  display: 'swap',
})

// Both language versions of every page are prerendered at build time, which is
// what keeps the site static and free to host.
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }) {
  const { lang } = await params
  const t = getUI(lang)
  return {
    title: lang === 'ar' ? 'إيليفيت — خطط لمسارك الدراسي' : 'Elevate — Plan your academic path',
    description: t.home.intro,
    icons: { icon: '/favicon.png' },
  }
}

export const viewport = {
  themeColor: '#F9DBFF',
}

// Runs before the first paint, so a reader who chose dark does not get a white
// flash on every navigation. It only sets the attribute — every colour still
// comes from the stylesheet. Kept deliberately tiny and dependency-free
// because it blocks rendering.
const themeScript = `(function(){try{var t=localStorage.getItem('elevate-theme');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t)}}catch(e){}})()`

export default async function RootLayout({ params, children }) {
  const { lang } = await params
  const locale = isLocale(lang) ? lang : defaultLocale

  return (
    <html
      lang={locale}
      dir={localeDir[locale]}
      className={`${playfair.variable} ${nunito.variable} ${cairo.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <div className="site-shell">
          <NavBar lang={locale} />
          <main className="site-main">{children}</main>
          <Footer lang={locale} />
        </div>
      </body>
    </html>
  )
}
