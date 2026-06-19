# Prisaum SEVA — deploy & maintenance guide

This folder (`prisaum-site/`) is a **complete, self-contained static website**.
Every page is **pre-rendered HTML** — the content is in the HTML itself (great for SEO),
and the only JavaScript is a tiny icon library (Lucide, from a CDN). Tabs, the dropdown
menu, the mobile menu and the FAQ all work with **no JavaScript**.

You can host it on any static host. Nothing here depends on HubSpot.

---

## What's in the folder
```
prisaum-site/
  index.html              ← Home
  about-us.html           ← /about-us
  support.html            ← /support
  programs/
    index.html            ← /programs (hub)
    baking-confectionery.html … (15 programme pages)
    legacy-hash-redirect.js  (forwards old /programs#anchor links)
  styles.css              ← design tokens + fonts (entry stylesheet)
  components.css          ← buttons, tags, cards, inputs
  site.css                ← page layout (header, hero, sections, footer)
  tokens/                 ← colour / type / spacing / font @font-face files
  assets/site/            ← logo + photos + spot icons  (replace these!)
  assets/fonts/           ← Plus Jakarta Sans + IBM Plex Mono (.ttf)
  sitemap.xml, robots.txt ← SEO; host at the site root
  _redirects / .htaccess / nginx-redirects.conf ← pick the one for your host
```

---

## 1. Test it locally (optional)
Because pages link to each other and load CSS/fonts, open it through a tiny local server
(not by double-clicking the file). Easiest options:
- VS Code → "Live Server" extension → right-click `index.html` → *Open with Live Server*.
- Or any static server, e.g. `npx serve prisaum-site` (if you have Node).

## 2. Host for testing (no DNS change — your live site stays untouched)
1. Go to **Netlify Drop** (app.netlify.com/drop) or **Cloudflare Pages**.
2. Drag the **`prisaum-site` folder** in.
3. You get a temporary URL like `prisaum-seva.netlify.app` — share and test it.
4. Your live prisaum.com is **not affected** at this stage.

## 3. Point your domain (only when you're happy)
1. In the host, add the custom domain **`prisaum.com`** (non-www is the canonical here).
2. The host gives you DNS records (A record / CNAME).
3. Update those at your **domain registrar**. *This* is the only step that changes the live site.
4. Make sure `sitemap.xml`, `robots.txt` and your host's redirect file sit at the site root.
5. In **Google Search Console**: add the property, submit `sitemap.xml`, and use *URL Inspection*
   on a few pages. (See `REDIRECTS.md` for the full HubSpot redirect map.)

## 4. Redirects (so old HubSpot links don't 404)
Use the file that matches your host (already filled in for **non-www** canonical):
- **Netlify / Cloudflare Pages** → `_redirects`
- **Apache** → `.htaccess`
- **Nginx** → `nginx-redirects.conf`
They force HTTPS + non-www, strip HubSpot's `?hsLang=` parameter, and retire theme filler pages.
Old programme deep links like `/programs#baking` are forwarded by `programs/legacy-hash-redirect.js`.

---

## 5. Maintaining the site

### Replace the images (do this first)
Drop your real files into **`assets/site/`**, keeping the **same filenames**:
| File | Used for |
|---|---|
| `logo-reversed.png` | header + footer logo (white version, on green) |
| `logo-color.png` | colour logo (schema/social) |
| `hero.png` | home hero + programme page heroes + social preview |
| `how-we-began.png`, `whom-we-serve.png`, `what-we-offer.png` | About section photos |
| `ic-guidance.png`, `ic-training.png`, `ic-cert.png`, `ic-career.png` | "Vocational Services" spot icons |
Same filename = it just works, no code change. (A real **SVG logo** is ideal — if you switch to
SVG, rename the references in `site.css`/pages or keep the `.png` filename.)

### Edit text
- **Programme pages** (titles, descriptions, FAQs): everything is plain HTML inside
  `programs/<slug>.html` — edit directly.
- **Home / About / Support**: edit the matching `.html` file.
- Headings are normal `<h1>/<h2>`, paragraphs are `<p>` — no build step, just save and re-upload.

### Add a new programme page
1. Copy an existing `programs/<slug>.html` to a new file, e.g. `programs/pottery.html`.
2. Edit the `<title>`, meta description, canonical, `<h1>`, content and FAQ.
3. Add a card link to it on `programs/index.html` (and the home page if you like).
4. Add its URL to `sitemap.xml`.

### Colours, fonts, spacing
All design tokens live in `tokens/*.css` (e.g. `--green-700`, `--font-sans`). Change once,
applies everywhere.

### Recommended: version control
Keep `prisaum-site/` in a **GitHub** repo. Connect it to Netlify or Cloudflare Pages and every
commit auto-deploys — clean history, easy rollbacks, no manual re-uploads.

---

## Notes
- **Forms:** the volunteer form on the home + support pages posts to a placeholder
  (`https://formspree.io/f/mgobrjqe`). Create a free Formspree (or Netlify Forms) endpoint
  and replace that URL — then submissions email you. No code/JS needed.
- **Icons** load from the Lucide CDN. If you ever need a fully offline site, they can be inlined
  as SVG — ask and it can be done.
- **www vs non-www:** this build is canonical **non-www** (`https://prisaum.com`), matching your
  existing HubSpot canonical. The redirect files enforce it.
