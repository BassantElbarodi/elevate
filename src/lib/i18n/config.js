// Language is part of the URL rather than a cookie, on purpose. Reading a
// cookie in a Server Component opts the whole route out of static rendering,
// and this site's 153 prerendered pages are the reason it hosts for free.
// A `[lang]` segment keeps every page static — there are simply two of each.
export const locales = ['en', 'ar']

export const defaultLocale = 'en'

export const localeNames = {
  en: 'English',
  ar: 'العربية',
}

// Arabic is right-to-left; the <html dir> attribute drives the CSS logical
// properties the stylesheet already uses, so most of the layout flips for free.
export const localeDir = {
  en: 'ltr',
  ar: 'rtl',
}

export const isLocale = (value) => locales.includes(value)

// Swap the locale segment of a path, keeping the rest — used by the language
// toggle so switching keeps you on the page you were reading.
export const withLocale = (pathname, locale) => {
  const segments = pathname.split('/').filter(Boolean)
  if (isLocale(segments[0])) {
    segments[0] = locale
  } else {
    segments.unshift(locale)
  }
  return `/${segments.join('/')}`
}
