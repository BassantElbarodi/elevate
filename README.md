# Elevate

An education website that helps students plan their academic path — explore majors, trace where
they lead as careers, and find study resources.

**Live:** https://elevate-psi-eosin.vercel.app

Built with Next.js 16 (App Router) and React 19, deployable free on Vercel.

## Stack notes

Routing is file-based: a folder under `src/app/` with a `page.jsx` becomes a URL. The six list
pages carry `'use client'` because they hold search and filter state; everything else renders on
the server. Both detail routes use `generateStaticParams`, so all 41 major and 57 career pages are
prerendered at build time — 108 static pages in total, which is why the site can be hosted free.

Fonts load through `next/font`, which self-hosts them and reserves the right space while they load.

Two configuration points worth knowing. `@/` is an alias for `src/`, set in `jsconfig.json`. And
oxlint's `react/only-export-components` rule is switched off: it is a Vite fast-refresh rule, while
the App Router *requires* non-component exports from page files (`metadata`, `generateStaticParams`,
`generateMetadata`), so it only produced false positives.

The nav logo is a plain `<img>` rather than `next/image` on purpose — the dark-mode swap needs
`<picture>` with a media query, which `next/image` cannot art-direct.

## Running it

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:3000.

Other commands:

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload           |
| `npm run build`   | Build the production site into `.next/`        |
| `npm run start`   | Serve the production build locally             |
| `npm run lint`    | Lint the source with oxlint                    |

## How it's organised

```
src/
  app/                Next.js App Router — one folder per route
    layout.jsx        Shell: fonts, metadata, nav and footer
    globals.css       Design tokens and every style in the app
    page.jsx          Home
    majors/           List page, plus [id]/ for each major
    careers/          List page, plus [id]/ for each career
    activities/ mentorship/ scholarships/ resources/ about/
    not-found.jsx     404
  data/
    majors.js         The 41 majors (Egyptian faculties)
    careers.js        The 57 career paths (Egyptian routes and pay)
    activities.js     The 29 Egyptian activities and volunteering options
    workshops.js      The 13 Elevate mentorship workshops
    wellbeing.js      The 3 Your Space wellbeing topics
    scholarships.js   The 12 scholarships open to Egyptians
    resources.js      The 18 study resources
  components/
    NavBar.jsx        Top navigation
    Footer.jsx        Site footer
```

### Adding content

All content lives in `src/data/` — you don't need to touch any components to add to the site.

To add a major, append an object to the list in `src/data/majors.js`. To add a career, do the same
in `src/data/careers.js`. The category and field filter dropdowns build themselves from whatever
values you use, so a new category appears automatically.

You can append anywhere in either list — the browse pages sort by category (majors) and field
(careers) at the bottom of each file, so a new entry lands beside its group without you having to
insert it in the right position. If you introduce a brand new category or field, add it to
`categoryOrder` / `fieldOrder` to place it; anything not listed sorts to the end.

Majors and careers link to each other in both directions on the site, but you only write that link
once. **`careers.js` owns it**, through each career's `majorIds` array. Major pages derive their
list by asking which careers point at them (`getCareersForMajor`), so majors don't carry a matching
list of their own and the two can't drift out of sync.

So to connect a career to a major, add the major's id to that career's `majorIds`. That's the whole
step. Every id must exist in `majors.js` — if one doesn't match, that link is silently skipped
rather than crashing the page, so check the spelling first if an expected link isn't showing up.

### Brand

The site follows the Elevate script-wordmark identity. The palette is sampled from the
artwork itself and defined as `--brand-*` custom properties at the top of `src/app/globals.css`:

| Colour | Hex | Role |
| ------ | --- | ---- |
| Lilac | `#F9DBFF` | Page background |
| Blue | `#1B4FA9` | Gradient start — links, buttons, the readable end |
| Orchid | `#C66FDC` | Gradient end — decorative, and the dark-mode accent |

The wordmark is a blue-to-orchid gradient. **Orchid is never used for text on a light
background** — it measures 2.48:1 on lilac, well under the 4.5:1 minimum — so it is limited to
fills, rules and the logo. Blue carries text at 6.06:1 on lilac, and body copy uses a deeper
indigo ink. The second tag style pairs an orchid tint with deep orchid ink (6.28:1).

Dark mode inverts which end of the gradient works: brand blue drops to 2.34:1 on the dark ground,
so orchid becomes the accent and the blue end is only used in the brightened logo variant.

Typography is Playfair Display for the two largest headings, echoing the serif tagline in the logo
artwork, with Nunito for body and UI. Both load via `next/font` in `src/app/layout.jsx`.

Logo files live in `public/`:

- `elevate-logo.png` — the script wordmark, for light backgrounds
- `elevate-logo-reverse.png` — brightened variant, because the gradient's blue end disappears on dark
- `favicon.png` — the script capital E on a lilac tile

These are raster, cut from the supplied artwork with the background removed to transparency. That
is a downgrade from the previous vector logo: they cannot be recoloured or scaled past their source
resolution (431x172), which is ample for the 28px nav but not for print or a large hero. If a
vector version of the wordmark exists, swapping it in would be a straight improvement.

Note the supplied artwork also carries a **"Nourished Path"** mark in the corner. That is a
different brand name and is deliberately excluded from the logo — two brand names in one mark reads
as confusing. If it needs crediting, the footer is the place.

### Styling

There's one stylesheet, `src/app/globals.css`. Colours, spacing, and radii are CSS custom properties at
the top, and there's a dark theme that follows the operating system setting. The dark theme is
derived only from the brand hues — the blue end becomes the surface family and lilac carries
interface text — so no off-brand colours were invented.

One gotcha: `.page`, `.hero`, and `.nav-inner` are used together with `.container`, so they set
`padding-block` rather than the `padding` shorthand. Using the shorthand there would reset the
container's horizontal padding and push content flush against the screen edge.

## Data: Egypt

The dataset targets the **Egyptian** system, compiled August 2026.

Majors use Egyptian public-university faculties, their real durations (4 years for most, 5 for
engineering, pharmacy, dentistry and veterinary medicine, 5–6 plus an internship year for medicine),
and the Thanaweya Amma branch each one requires — Science (علمي علوم), Maths (علمي رياضة), or
Literature (أدبي). Medicine, Dentistry, Pharmacy, Physical Therapy and Veterinary Medicine are
listed as majors because in Egypt they are entered **directly** from Thanaweya Amma, not after a
science degree.

Careers use Egyptian entry routes, including the professional syndicates that actually gate
practice — Engineers, Medical, Pharmacists, Veterinary, and the Bar Association.

Student activities and volunteering are Egypt-based too. Named organisations — Baheya, Resala, the
Egyptian Red Crescent, the Egyptian Food Bank, 57357, Misr El Kheir, Enactus, AIESEC, ECPC and NTI —
were checked against their own pages, and every link was confirmed to load in a real browser. Note
that a few of these sites return 403 to command-line tools while working fine for real visitors, so
don't assume a link is dead just because a script says so. Links are stored without `utm_*` or
`fbclid` tracking parameters.

Scholarships cover both Egyptian awards (Sawiris Distinction, AUC, Nile University, Zewail City,
AMIDEAST) and fully funded routes abroad that Egypt is eligible for (Fulbright, Chevening, DAAD,
Erasmus Mundus, MEXT, Türkiye Bursları, Stipendium Hungaricum). **No deadlines are stored**, by
design — they change annually and a stale date is worse than no date, so every entry links to the
official page instead. Where sources disagree on a requirement, the data says to check the official
page rather than repeating a number: Chevening's work-experience threshold is stated as both two
and five years across secondary sources, so neither is printed here.

Your Space (`wellbeing.js`) covers fear of failure, burnout and future anxiety. Two things about
that page are deliberate and should not be quietly dropped: it states plainly that these are peer
support sessions rather than therapy, and it carries Egypt's national mental health line, **16328**
— free, confidential, 24/7, run by the Ministry of Health. A student in real difficulty may land
there first, and should not have to go looking for help.

Mentorship is the one dataset that is not external: `workshops.js` describes what Elevate itself
offers, across soft skills, Microsoft skills, technical learning, and creative sessions. The source
research was written throughout for "young women"; it is stored here addressed to students
generally, so it matches the About page and the rest of the site. If Elevate is in fact a
women-focused programme, this is the file to change — along with the About page and the meta
description, so the site says so consistently rather than in one section only.

### What the numbers mean, and what they don't

`tansik` is the public-university minimum from the **2024/25** round. It moves every year; the
current figures are on the [official Tansik portal](https://tansik.digital.gov.eg/).

`salaryRange` is an **approximate starting monthly gross in EGP** for a fresh graduate in the formal
private sector. Read it as a band, not a quote.

This is the weakest data in the project and it is worth being honest about why. **Egypt has no
per-occupation pay series equivalent to the US BLS handbook.** [CAPMAS](https://www.capmas.gov.eg/)
publishes wages by economic activity rather than by job title, so no official source gives a figure
for "civil engineer" the way the BLS does. The bands here are therefore compiled from job-market
aggregators and sector reporting, cross-checked against CAPMAS averages — they are directional, not
authoritative. They also age fast against EGP inflation, and public-sector pay generally sits below
them while multinationals and USD-paying employers sit above.

If you need a defensible figure for a specific role, check current listings on Wuzzuf or Bayt and
cite the date you looked.

### Sources

- [Tansik](https://tansik.digital.gov.eg/) — official admission portal and minimum scores
- [CAPMAS](https://www.capmas.gov.eg/) — employment, wages, and unemployment statistics
- [Ahram Online](https://english.ahram.org.eg/) — reporting on 2024/25 Tansik cut-offs
- [ITIDA](https://itida.gov.eg/) and [NTI](https://www.nti.sci.eg/) — ICT sector growth, free training
- [Egyptian Knowledge Bank](https://www.ekb.eg/) — national digital library

Course lists remain generic to each subject — check them against the specific faculty's catalogue
before presenting them as that faculty's curriculum.

## Deploying

The site is built for **Vercel**, which is free for a project like this on the Hobby plan and
requires no configuration — Vercel made Next.js, so it detects everything.

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) and deploy. No build settings to change.

Two things to know about the free tier. Hobby is **non-commercial only** under Vercel's terms, so
it covers a student project but not a revenue-generating one. And if you ever exceed a limit,
Vercel pauses the project rather than charging you — there is no surprise bill.

Because every page is prerendered, the deep links that needed a workaround under the old static
build (`/majors/biology` and friends) now just work.

### If sign-in doesn't work on the live site

Accounts need two environment variables set in **Vercel → Settings → Environment Variables**, ticked
for Production and Preview:

| Name | Value |
| ---- | ----- |
| `NEXT_PUBLIC_SUPABASE_URL` | your project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | the `sb_publishable_…` key |

They only apply to **new** builds, so redeploy afterwards — adding them does not update the
deployment already running. If `/account` says "Profiles aren't set up yet", this is why.

Then add the live URL to **Supabase → Authentication → URL Configuration**, as both the Site URL
and a Redirect URL, or sign-in will be rejected.
