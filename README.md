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
    [lang]/           Every route lives under /en or /ar
      layout.jsx      Shell: fonts, metadata, nav and footer, html lang/dir
      settings/       Language and appearance preferences
    globals.css       Design tokens and every style in the app
    page.jsx          Home
    majors/           List page, plus [id]/ for each major
    careers/          List page, plus [id]/ for each career
    masters/          List page, plus [id]/ for each postgraduate route
    activities/ mentorship/ scholarships/ resources/ about/
    not-found.jsx     404
  data/
    majors.js         The 41 majors (Egyptian faculties and curricula)
    careers.js        The 57 career paths (Egyptian routes, roadmaps, and pay)
    masters.js        The 43 postgraduate routes (Egypt and funded abroad)
    activities.js     The 29 Egyptian activities and volunteering options
    workshops.js      The 13 Elevate mentorship workshops
    wellbeing.js      The 3 Your Space wellbeing topics
    scholarships.js   The 12 scholarships open to Egyptians
    resources.js      The 18 study resources
  components/
    NavBar.jsx        Top navigation
    Footer.jsx        Site footer
    SettingsControls.jsx  Language and theme switches
  lib/
    i18n/config.js    Locales, direction, path helpers
    i18n/ui.js        Every interface string, en and ar
    i18n/content.js   Merges English data with its Arabic translation
    theme.js          Read/apply the light-dark-system preference
  data/ar/            Arabic translation of every dataset, plus vocab.js
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

`masters.js` works the same way and owns its own link: each postgraduate route lists the majors it
follows from, and major pages derive **Where this leads after graduation** from that. So majors
carry no list of their own for either relationship.

So to connect a career or a postgraduate route to a major, add the major's id to that entry's
`majorIds`. That's the whole step. Every id must exist in `majors.js` — if one doesn't match, that link is silently skipped
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

## Arabic and appearance

The site is fully bilingual. **Language is part of the URL** — `/en/majors/medicine`,
`/ar/majors/medicine` — rather than a cookie, and that is a deliberate trade. Reading a cookie in a
Server Component opts the whole route out of static rendering, and 300+ prerendered pages is the
reason this hosts free. A `[lang]` segment keeps every page static; there are simply two of each.
Middleware sends a bare path to the reader's preferred language, from the cookie the toggle writes,
then `Accept-Language`, then English.

Arabic lays the site out right to left. The stylesheet uses **logical properties**
(`padding-inline-start`, `inset-inline-start`, `border-inline-start`) rather than physical ones, so
`dir="rtl"` on `<html>` flips the layout without a second stylesheet — including the career roadmap
spine and the curriculum timeline. Arabic also switches to **Cairo**, because Nunito and Playfair
have no Arabic glyphs and would silently fall back to whatever the device has.

### Where the translation lives

Interface strings are in `src/lib/i18n/ui.js`. Content is translated beside its own data in
`src/data/ar/`, keyed by the same ids, and merged in `src/lib/i18n/content.js`. The merge is
**field-level and falls back to English**, so a half-translated entry renders rather than throwing —
which is what lets Arabic be extended without touching any component.

`src/data/ar/vocab.js` holds the terms that repeat: 656 course names, year and stage labels,
prerequisites, 271 skill tags, degree durations, roadmap timings and salary bands. Those are
translated once and merged in, so "Graduation Project" reads identically in all 30 majors that
teach it, and a reviewer fixing a term fixes it everywhere. Per-entry files then carry only the
prose that is genuinely unique.

Numbers in Arabic use Arabic-Indic digits (٥ سنوات, ٧–١٤ ألف جنيه) and "EGP" becomes جنيه. Proper
nouns keep the form a student would actually search for: Coursera, Fulbright, Figma and Excel stay
in Latin, while Egyptian institutions get their real names — التنسيق, نقابة المهندسين, بنك المعرفة
المصري, الزمالة المصرية.

One wrinkle worth knowing if you touch the account pages: a **Server Action is not a route**, so it
cannot read the locale from the URL the way a page can. The auth and profile forms therefore carry
the locale in a hidden `lang` field, which the actions in `account/actions.js` use both to pick the
language of a validation message and to redirect back to the right page. The value is checked with
`isLocale` before it reaches the dictionary, so a tampered field falls back to English rather than
indexing into nothing.

### Appearance

Three states, not two: **light, dark, and match system**, defaulting to system. Two states cannot
express "keep following the OS", which is why the toggle is not a boolean. The choice is stored in
`localStorage` and applied by a tiny inline script in `<head>` before first paint, so a reader who
chose dark never sees a white flash.

The palette is written out twice in `globals.css` — once under `prefers-color-scheme` guarded as
`:root:not([data-theme='light'])`, once under `:root[data-theme='dark']`. That duplication is
deliberate: an explicit choice has to beat the media query **in both directions**, and plain CSS
cannot share a declaration block between a media query and an attribute selector. Change one block,
change the other.

One consequence worth knowing: the logo used to be a `<picture>` with a `prefers-color-scheme`
source, which only ever asked the operating system. Now that a reader can force dark on a light-set
device, that markup would have left the wordmark invisible — so both files render and CSS picks,
because CSS can see `data-theme` and a media query cannot.

### Major curricula

Every major carries a `curriculum`: its subjects grouped by year rather than listed flat, so a
student can see *when* each one arrives. Each stage is `{ years, stage, subjects }` — `years` is
the timing label, `stage` names the phase in the terms the faculty itself uses. 41 majors, 164
stages, 803 subjects, rendered as **What you study, year by year** on the major page.

The phases follow the real shape of each route rather than a fixed template: Engineering opens with
the preparatory year before the department is chosen, Medicine runs preclinical → paraclinical →
clinical → internship, Education ends in a school practicum, and most four-year degrees close on a
graduation project.

**Course names are the Egyptian ones, and this is the part most worth protecting.** An imported
syllabus reads as plausible while quietly misinforming. Law is the clearest case: it previously
listed contract, tort and property — a common-law curriculum — where Egyptian faculties teach the
civil-code tradition, with Roman Law and Islamic Sharia in the first year, the Civil Code strands
across years two and three, and Personal Status Law later. Tort is not a separate Egyptian course
at all. Criminology and Sociology had the same problem and were rewritten too. If you add a major,
check its list against a real Egyptian faculty catalogue rather than against what the subject looks
like elsewhere.

Names are English throughout, matching the rest of the dataset. The page prints a caveat under the
timeline saying this is a representative curriculum rather than one faculty's timetable.

### Master's and postgraduate

`masters.js` covers what comes after the bachelor: 43 routes across the Egyptian diploma → master's
→ doctorate ladder, the professional and clinical qualifications beside it, and funded study
abroad. Entries carry `{ route, length, entry, whatItUnlocks, funding, majorIds }`, and the list
page filters by field and by `route` — *In Egypt*, *Abroad*, or *Egypt or abroad*.

Four entries are the generic Egyptian ladder rather than a subject: the **postgraduate diploma**,
which many students don't know is usually required before a master's; the **معيد track**, where the
faculty appoints its top graduates and funds them through to a doctorate while they teach; the
**doctorate**; and **funded master's abroad**, which explains the application timeline rather than
repeating award details. The rest are subject-specific, and **every one of the 41 majors resolves
to at least one of them** — worth re-checking with a coverage script if you add a major.

Funding is deliberately thin here. Awards change yearly and `scholarships.js` already carries them
with links to official pages, so entries describe how the route is typically paid for and send the
reader there rather than duplicating a table that will go stale.

Two things to keep true when editing. The tone stays honest about when a postgraduate degree is
*not* worth it — software, security practice, design and journalism all hire on demonstrated work,
and the entries say so plainly rather than selling every qualification equally. And where a route
is genuinely gated (the Egyptian Fellowship's entrance exam, Syndicate registration before an
engineering master's, supervised hours before clinical psychology), the gate belongs in `entry`.

### Career roadmaps

Every career carries a `roadmap`: five ordered steps from school to established practice, each one
`{ when, title, detail }`. They render as a numbered timeline under **How to get there** on the
career page, which is what the About page has always promised.

`when` is a short timing label — `School`, `Years 1–5`, `Graduation`, `Years 3+` — not a promise.
Faculties differ, people arrive sideways, and Tansik requirements move every year, so the page
prints a caveat under the timeline saying exactly that and links to the official portal.

`kind` is what type of step it is, one of the six in `roadmapStages` at the bottom of the file:
`school`, `study`, `build`, `gate`, `work`, `grow`. Each kind owns an icon and a label, and the two
travel together deliberately — the timeline tells steps apart by icon and by colour, and colour
alone does not survive a colour-blind reader.

**`gate` is the one to get right.** It means a registration, licence or exam series you cannot
legally practise without — Engineers Syndicate, the Bar Association, the امتياز year, the actuarial
exams. It does not mean a certification that merely helps: CCNA, the CFA and CompTIA are all
`build` or `grow`, because you can work without them. Gate steps get a heavier ring and the words
*Required to practise* beside them, so this distinction is visible rather than implied. 24 of the
285 steps are gates, across 21 careers; the other 36 careers have no gate at all, which is itself
worth seeing at a glance.

### How the roadmap renders

Two views of the same five steps, following established roadmap conventions rather than anything
invented here — the subway-map pattern (a stop per milestone, icons at each stop) and the customer
journey pattern (a horizontal path with directional connectors):

- **Route at a glance** — a horizontal track of five stops with icons and timing labels, connected
  by a rule in the brand gradient. It repeats the timeline underneath verbatim, so it carries
  `aria-hidden="true"` rather than being read out twice.
- **The timeline** — the same five steps vertically with the detail, each marked by its stage icon.

Both are pure CSS over the existing tokens; the stage icons are emoji, matching how `icon` already
works on majors and careers. There is no artwork to maintain and nothing to re-export if the
palette changes. The track scrolls sideways rather than crushing its labels, though at the longest
label in the dataset (`Postgraduate`) it still fits a 375px screen without scrolling.

Two things to keep true when editing one. The roadmap has to agree with that career's `education`
field, because the two are read side by side on the page. And where a route is genuinely gated —
Engineers Syndicate registration, the Bar Association, the امتياز year, the actuarial exams — the
gate belongs in the roadmap as its own step rather than being folded into a sentence, since that is
the part a student cannot plan around without knowing.

Arabic terms are written the way the rest of the dataset writes them: English first, Arabic in
parentheses after it — `The Maths branch (علمي رياضة)`. Starting a sentence with the Arabic run
puts the following full stop in a bidirectional sandwich, and where it lands then depends on the
renderer. Keeping the Arabic mid-sentence avoids the question entirely.

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

Curricula are representative of the Egyptian route for each subject, not a transcription of one
faculty's catalogue. Course names and the year a subject falls in vary between faculties and
universities, so check the catalogue of the specific faculty before presenting a list as theirs.

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
