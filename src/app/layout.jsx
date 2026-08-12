import { Playfair_Display, Nunito } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

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

export const metadata = {
  title: 'Elevate — Plan your academic path',
  description:
    'Elevate helps students explore majors, trace where they lead as careers, and find study resources.',
  icons: { icon: '/favicon.png' },
}

export const viewport = {
  themeColor: '#F9DBFF',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${nunito.variable}`}>
      <body>
        <div className="site-shell">
          <NavBar />
          <main className="site-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
