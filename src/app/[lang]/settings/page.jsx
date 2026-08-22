import { SettingsPanels } from '@/components/SettingsControls'
import { locales } from '@/lib/i18n/config'
import { getUI } from '@/lib/i18n/ui'

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }) {
  const { lang } = await params
  const t = getUI(lang).settings
  return { title: `${t.title} — Elevate`, description: t.intro }
}

export default async function SettingsPage({ params }) {
  const { lang } = await params
  const t = getUI(lang).settings

  return (
    <div className="page container">
      <header className="page-header">
        <h1>{t.title}</h1>
        <p>{t.intro}</p>
      </header>

      <div className="settings-layout">
        <SettingsPanels lang={lang} />
      </div>
    </div>
  )
}
