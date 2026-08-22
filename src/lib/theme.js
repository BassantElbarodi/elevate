// Theme is stored on the device rather than the account, so it applies before
// any network request and works for signed-out readers. Three states, not two:
// "system" is the default and keeps following the OS setting as it changes,
// which a plain light/dark boolean cannot do.
export const THEME_KEY = 'elevate-theme'
export const themes = ['light', 'dark', 'system']

export function readTheme() {
  if (typeof window === 'undefined') return 'system'
  try {
    const saved = window.localStorage.getItem(THEME_KEY)
    return saved === 'light' || saved === 'dark' ? saved : 'system'
  } catch {
    // Private browsing can throw on localStorage access. Fall back rather
    // than taking the page down over a preference.
    return 'system'
  }
}

export function applyTheme(theme) {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  if (theme === 'light' || theme === 'dark') {
    root.setAttribute('data-theme', theme)
  } else {
    // No attribute means the prefers-color-scheme media query decides, which
    // is exactly what "match system" should do.
    root.removeAttribute('data-theme')
  }
  try {
    if (theme === 'system') {
      window.localStorage.removeItem(THEME_KEY)
    } else {
      window.localStorage.setItem(THEME_KEY, theme)
    }
  } catch {
    // Preference simply will not persist; the page still works.
  }
}
