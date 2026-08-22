'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { getUI } from '@/lib/i18n/ui'
import { locales, localeNames, withLocale } from '@/lib/i18n/config'
import { readTheme, applyTheme } from '@/lib/theme'

// The current theme is only knowable on the client, so the buttons render in a
// neutral state on the server and mark the active one after mount. Without
// this the server would guess, and the guess would be wrong half the time.
function useTheme() {
  const [theme, setTheme] = useState('system')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setTheme(readTheme())
    setReady(true)
  }, [])

  const choose = (next) => {
    applyTheme(next)
    setTheme(next)
  }

  return { theme, ready, choose }
}

function useLanguage(lang) {
  const router = useRouter()
  const pathname = usePathname()

  return (next) => {
    if (next === lang) return
    // The cookie is what the middleware reads for a bare "/" request later;
    // the navigation is what changes the page you are looking at now.
    document.cookie = `elevate-lang=${next}; path=/; max-age=31536000; samesite=lax`
    router.push(withLocale(pathname, next))
    router.refresh()
  }
}

/** Compact language + theme buttons for the header. */
export function QuickSettings({ lang }) {
  const t = getUI(lang).settings
  const { theme, ready, choose } = useTheme()
  const switchLanguage = useLanguage(lang)
  const other = locales.find((code) => code !== lang)

  // Cycles light → dark → system, which is quicker than opening the page for
  // the common case of just wanting the other one.
  const nextTheme = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'
  const icon = theme === 'light' ? '☀️' : theme === 'dark' ? '🌙' : '◐'

  return (
    <div className="quick-settings">
      <button
        type="button"
        className="quick-btn"
        onClick={() => switchLanguage(other)}
        title={t.toggleLanguage}
        aria-label={`${t.toggleLanguage} — ${localeNames[other]}`}
      >
        {localeNames[other]}
      </button>
      <button
        type="button"
        className="quick-btn quick-btn-icon"
        onClick={() => choose(nextTheme)}
        title={t.toggleTheme}
        aria-label={t.toggleTheme}
      >
        <span aria-hidden="true">{ready ? icon : '◐'}</span>
      </button>
    </div>
  )
}

/** Full controls for the settings page. */
export function SettingsPanels({ lang }) {
  const t = getUI(lang).settings
  const { theme, ready, choose } = useTheme()
  const switchLanguage = useLanguage(lang)

  const themeOptions = [
    { value: 'light', label: t.light, icon: '☀️' },
    { value: 'dark', label: t.dark, icon: '🌙' },
    { value: 'system', label: t.system, icon: '◐' },
  ]

  return (
    <>
      <section className="panel">
        <h2>{t.languageTitle}</h2>
        <p className="setting-help">{t.languageHelp}</p>
        <div className="choice-row" role="group" aria-label={t.languageTitle}>
          {locales.map((code) => (
            <button
              key={code}
              type="button"
              className="choice"
              aria-pressed={code === lang}
              onClick={() => switchLanguage(code)}
            >
              <span className="choice-label">{localeNames[code]}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="panel">
        <h2>{t.themeTitle}</h2>
        <p className="setting-help">{t.themeHelp}</p>
        <div className="choice-row" role="group" aria-label={t.themeTitle}>
          {themeOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              className="choice"
              aria-pressed={ready && theme === option.value}
              onClick={() => choose(option.value)}
            >
              <span aria-hidden="true">{option.icon}</span>
              <span className="choice-label">{option.label}</span>
            </button>
          ))}
        </div>
        <p className="setting-note">{t.storageNote}</p>
      </section>
    </>
  )
}
