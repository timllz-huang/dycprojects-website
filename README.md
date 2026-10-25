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
| Page section order | `src/app/**/page.jsx` |
| Navbar / footer | `src/components/navbar.jsx`, `src/components/footer.jsx` |
| Photos (Unsplash) | `src/lib/photos.js`, rendered by `src/components/photo.jsx` |
| Page sections (hero, services, FAQ, steps, CTA) | `src/components/sections.jsx` |
| Service page content | `src/data/cloud.js`, `software.js`, `devops.js` |
| Hero status cards, marquee, steps flow | `src/components/motion.jsx` |
| Credentials band (hidden until filled) | `proof` in `site.config.json` |
| Design tokens and motion CSS | `src/styles.css` |

## Folders

- `src/` — page and component source
- `tools/build.mjs` — static site generator
- `reference/` — the original Relume design export (tokens, screenshots, components). Source material only; blocked in `robots.txt`.

## Contact form

The form posts to [FormSubmit](https://formsubmit.co) and is delivered to the inbox set in `formMailTo`. The first submission triggers a one-time confirmation email that must be clicked before messages are delivered.

## Design system

- One typeface (Manrope), Tailwind default type scale, spacing limited to 2, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80 and 96px, flat backgrounds, Phosphor icons.
- Sentence case headings and no hyphens in copy.
- Motion: sections reveal on scroll (IntersectionObserver), cards rise from blur, hero status cards play a looping story, all paused off screen and disabled for reduced motion.
