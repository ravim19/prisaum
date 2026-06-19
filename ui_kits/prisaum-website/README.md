# Prisaum Seva — Website UI Kit

An interactive, high-fidelity recreation of the **prisaum.com** homepage, rebuilt on the
Prisaum Seva design system. It composes the system's primitives (`Button`, `Tag`, `Card`,
`Input`, `SectionHeading`, `ProgramCard`, `StatCard`, `Avatar`) rather than re-implementing them.

## Run
Open `index.html`. It loads React (UMD), Babel, Lucide (icons, via CDN) and the compiled
design-system bundle `_ds_bundle.js`, then the section files.

## Files
| File | Purpose |
|---|---|
| `index.html` | Document shell + script loading |
| `data.js` | Real Prisaum content (programmes, services, images, admissions) |
| `Header.jsx` | Sticky nav: utility bar, logo, programs mega-dropdown, mobile menu |
| `Hero.jsx` | Forest-green hero with admissions panel, CTAs, impact stats |
| `About.jsx` | How We Began / Whom We Serve / What We Offer + Vocational Services row |
| `Programs.jsx` | Tabbed Vocational ↔ Educational & Therapeutic programme grids + certifications |
| `Volunteer.jsx` | "Get involved" band with a working volunteer-registration form (success state) |
| `Footer.jsx` | Reversed logo, sitemap, two-branch contact, social, copyright |
| `App.jsx` | Composition, smooth-scroll nav, responsive rules, mount |
| `programs/index.html` | **Crawlable programmes hub** — own URL, lists every programme, links to detail pages |
| `programs/program-content.js` | Full SEO content (copy, FAQ, related links) for all 15 programme pages |
| `programs/ProgramPage.jsx` | Reusable programme-page renderer: breadcrumb, hero, sections, FAQ, related, JSON-LD |
| `programs/<slug>.html` | **15 dedicated SEO pages** — one crawlable URL per programme (own title, meta, schema, FAQ) |
| `sitemap.xml` / `robots.txt` | Self-hosted SEO essentials — host at site root, submit sitemap in Search Console |
| `REDIRECTS.md` | HubSpot→self-hosted migration map (built from the real live URLs) |
| `_redirects` / `.htaccess` / `nginx-redirects.conf` | Ready-to-host 301 + clean-URL configs (Netlify / Apache / Nginx) |
| `programs/legacy-hash-redirect.js` | Forwards old `/programs#anchor` deep links to the new pages |

## SEO architecture (hybrid — single-page homepage + real sub-pages)
The homepage is a single, fast page that converts; the **programme detail pages are real,
separate, crawlable URLs** so the site can rank for many distinct searches. This is the
structure to mirror on the self-hosted site.

Each programme page ships with:
- **Its own `<title>`, `<meta name="description">`, `<link rel="canonical">` and Open Graph tags**
  (static in `<head>` — the SEO-critical part).
- **One `<h1>`** targeting a specific search intent (e.g. *"Baking & Confectionery Training for
  Special Needs"*), semantic `<h2>` sections, and a real `<details>` **FAQ**.
- **schema.org JSON-LD** injected on load: `Course` + `BreadcrumbList` + `FAQPage`
  (FAQ markup is eligible for rich results).
- **Breadcrumbs** and **internal links** (related programmes; homepage ↔ hub ↔ detail).

The homepage "View programme" / "Learn more" buttons and the "View all programmes" button are
real `<a href>` links to these pages — so crawlers can follow them. All 15 programmes now have
their own dedicated page.

### Production notes (self-hosted, migrating off HubSpot)
- Serve each `programs/<slug>.html` at a clean URL `/programs/<slug>` (drop the `.html` via your
  web server / static host config, e.g. Netlify/Nginx/Apache rewrites).
- Keep the JSON-LD **server-rendered** in the page head for best results (here it's JS-injected
  for the prototype). The static `<title>`/meta/canonical/OG tags are already in each page head.
- `sitemap.xml` and `robots.txt` ship in this folder — host them at the site root and submit the
  sitemap in **Google Search Console**.
- Link to the new pages from the homepage (already wired) and request indexing in Search Console.
- **Migrating off HubSpot:** for every old HubSpot URL you retire, add a **301 redirect** to the
  closest new URL (not a blanket redirect to the homepage). Keep the `prisaum.com` domain so
  existing link equity transfers.
- All imagery is **self-hosted** in `/assets/site` — no HubSpot CDN dependency remains.

## Interactions
- Programs mega-menu on hover (desktop) / hamburger menu (mobile).
- Programme tabs switch between Vocational and Therapeutic sets.
- Volunteer form validates required fields and shows a personalised success state.
- In-page anchor navigation scrolls smoothly with a sticky-header offset.

## Notes
- **Imagery is self-hosted** under `/assets/site` (logo, about photos, hero, brand spot icons),
  pulled off the HubSpot CDN during migration. Swap in higher-resolution originals when available.
- **Icons** use [Lucide](https://lucide.dev) via CDN as the UI icon set. The brand's own spot
  icons are used in the Vocational Services row.
- Leftover template filler from the old site (e.g. unrelated benefactor quotes) was
  intentionally **omitted** — only genuine Prisaum content is recreated.
