# DYC Projects website — dycprojects.com.au

Static marketing site for DYC Projects Pty Ltd, hosted on GitHub Pages.

## How it works

- Pages are React components (from the Relume export) that are **pre-rendered to static HTML** at build time, so every page is fast and fully crawlable, then hydrated in the browser so menus and tabs work.
- The built site lives at the **repository root** (`index.html`, `services/…/index.html`, `contact/`, `privacy/`, `assets/`). GitHub Pages serves it straight from `main` / root.
- All business details (phone, email, address, ABN, page titles and descriptions) live in **`site.config.json`**. Change them there and rebuild — never edit the generated HTML.

## Editing

```bash
npm install          # first time only
npm run build        # regenerates all pages, sitemap.xml, robots.txt, llms.txt, 404.html
```

| What | Where |
|---|---|
| Business details, SEO titles/descriptions | `site.config.json` |
| The six services (home grid, services page, contact dropdown) | `src/lib/services.js` |
| Page section order | `src/app/**/page.js` |
| Section content | `src/components/<page>/*.jsx` |
| Navbar / footer | `src/components/navbar-02.jsx`, `src/components/footer-03.jsx` |
| Illustrations used in image slots | `src/components/visual.jsx` (swap for real photos with an `<img>`) |
| Design tokens | `src/styles.css` (from `reference/react/globals.css`) |

## Folders

- `src/` — page and component source
- `tools/build.mjs` — static site generator
- `reference/` — the original Relume design export (tokens, screenshots, components). Source material only; blocked in `robots.txt`.

## Contact form

The form posts to [FormSubmit](https://formsubmit.co) and is delivered to the inbox set in `formMailTo`. The first submission triggers a one-time confirmation email that must be clicked before messages are delivered.
