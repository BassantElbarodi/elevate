# PathFinder

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
    majors.js         The 20 majors
    careers.js        The 37 career paths
    resources.js      The 12 study resources
  components/
    NavBar.jsx        Top navigation
    Footer.jsx        Site footer
  pages/
    Home.jsx          Landing page
    Majors.jsx        Searchable major list
    MajorDetail.jsx   One major, plus the careers it leads to
    Careers.jsx       Searchable career list
    CareerDetail.jsx  One career, plus the majors that lead there
    Resources.jsx     Searchable resource list
    NotFound.jsx      404 page
```

### Adding content

All content lives in `src/data/` — you don't need to touch any components to add to the site.

To add a major, append an object to the `majors` array in `src/data/majors.js`. To add a career, do
the same in `src/data/careers.js`. The category and field filter dropdowns build themselves from
whatever values you use, so a new category appears automatically.

Majors and careers link to each other in both directions on the site, but you only write that link
once. **`careers.js` owns it**, through each career's `majorIds` array. Major pages derive their
list by asking which careers point at them (`getCareersForMajor`), so majors don't carry a matching
list of their own and the two can't drift out of sync.

So to connect a career to a major, add the major's id to that career's `majorIds`. That's the whole
step. Every id must exist in `majors.js` — if one doesn't match, that link is silently skipped
rather than crashing the page, so check the spelling first if an expected link isn't showing up.

### Styling

There's one stylesheet, `src/index.css`. Colours, spacing, and radii are CSS custom properties at
the top, and there's a dark theme that follows the operating system setting. Changing `--accent`
reskins the whole site.

One gotcha: `.page` and `.hero` are used together with `.container`, so they set `padding-block`
rather than the `padding` shorthand. Using the shorthand there would reset the container's
horizontal padding and push content flush against the screen edge.

## Before you submit this

The dataset is sample content written to demonstrate the site, not researched fact. In particular
**the pay bands and job outlooks in `src/data/careers.js` are placeholders** — the file says so in a
comment, and the careers page shows a note to that effect.

Replace them with real, cited figures before presenting this as an information source:

- US — [Occupational Outlook Handbook](https://www.bls.gov/ooh/) (Bureau of Labor Statistics)
- elsewhere — your own country's labour statistics agency

The same goes for course lists and prerequisites: check them against a real course catalogue for
whichever institution you're writing about.

## Deploying

`npm run build` produces a static `dist/` folder that can be hosted anywhere — GitHub Pages,
Netlify, Vercel.

Because the app uses client-side routing, the host has to serve `index.html` for unknown paths.
Without that, loading `/majors/biology` directly returns a 404 even though it works when you
navigate there from within the site. Netlify and Vercel handle this with a config file; GitHub Pages
needs a `404.html` copy of `index.html` as a workaround.
