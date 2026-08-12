# Elevate

An education website that helps students plan their academic path — explore majors, trace where
they lead as careers, and find study resources.

Built with React 19, Vite, and React Router.

## Running it

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:5173.

Other commands:

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload           |
| `npm run build`   | Build the production site into `dist/`         |
| `npm run preview` | Serve the built site locally to check it       |
| `npm run lint`    | Lint the source with oxlint                    |

## How it's organised

```
src/
  main.jsx            App entry — mounts the router
  App.jsx             Layout shell and all route definitions
  index.css           Design tokens and every style in the app
  data/
    majors.js         The 41 majors (Egyptian faculties)
    careers.js        The 57 career paths (Egyptian routes and pay)
    activities.js     The 29 Egyptian activities and volunteering options
    resources.js      The 18 study resources
  components/
    NavBar.jsx        Top navigation
    Footer.jsx        Site footer
  pages/
    Home.jsx          Landing page
    Majors.jsx        Searchable major list
    MajorDetail.jsx   One major, plus the careers it leads to
    Careers.jsx       Searchable career list
    CareerDetail.jsx  One career, plus the majors that lead there
    Activities.jsx    Searchable activities and volunteering list
    Resources.jsx     Searchable resource list
    NotFound.jsx      404 page
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
artwork itself and defined as `--brand-*` custom properties at the top of `src/index.css`:

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
artwork, with Nunito for body and UI. Both load from Google Fonts in `index.html`.

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

There's one stylesheet, `src/index.css`. Colours, spacing, and radii are CSS custom properties at
the top, and there's a dark theme that follows the operating system setting. The dark theme is
derived only from the four brand colours — violet becomes the surface family and periwinkle carries
interface text — so no off-brand hues were invented.

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

`npm run build` produces a static `dist/` folder that can be hosted anywhere — GitHub Pages,
Netlify, Vercel.

Because the app uses client-side routing, the host has to serve `index.html` for unknown paths.
Without that, loading `/majors/biology` directly returns a 404 even though it works when you
navigate there from within the site. Netlify and Vercel handle this with a config file; GitHub Pages
needs a `404.html` copy of `index.html` as a workaround.
