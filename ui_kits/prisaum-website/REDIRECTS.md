# Prisaum SEVA — HubSpot → self-hosted redirect map

A ready-to-host migration map built from your **actual live HubSpot URLs**
(fetched from prisaum.com). Use it so no existing ranking or backlink is lost when
you move off HubSpot.

Config files in this folder are ready to drop in:
- **`_redirects`** — Netlify / Cloudflare Pages
- **`.htaccess`** — Apache
- **`nginx-redirects.conf`** — Nginx
- **`programs/legacy-hash-redirect.js`** — forwards old `/programs#anchor` deep links

---

## 1. Your old HubSpot site had only 4 real pages
Everything else was an **anchor** on the single `/programs` page.

| Old live URL | Status | Action |
|---|---|---|
| `https://prisaum.com/` | Real page | **Keep** — home (unchanged) |
| `https://prisaum.com/about-us` | Real page | **Keep** — rebuilt as a real page (`about-us.html`) |
| `https://prisaum.com/programs` | Real page | **Keep** — now the programmes **hub** (same URL, richer content + links out) |
| `https://prisaum.com/support` | Real page | **Keep** — rebuilt as a real page (`support.html`) |

> These four URLs should **stay live** — redirecting them away would throw away
> rankings they already hold. `/about-us` and `/support` are now built as real pages
> (`about-us.html`, `support.html`).

## 2. The 15 programme pages are NET-NEW URLs
They didn't exist before, so **they need no redirects** — just add them to the
sitemap (already done) and submit it. New URLs:

```
/programs/baking-confectionery      /programs/nios-support
/programs/weaving                   /programs/music-arts-therapy
/programs/gardening-horticulture    /programs/play-therapy
/programs/computer-skills           /programs/recreational-learning
/programs/printing-merchandise      /programs/occupational-therapy
/programs/self-grooming-hygiene     /programs/life-skills-training
/programs/housekeeping
/programs/eco-friendly-plate-making
/programs/laundry-fabric-care
```

## 3. Old programme deep links → new pages (handled client-side)
Your old homepage linked to programme anchors like `/programs?hsLang=en#baking`.
A URL **fragment** (`#baking`) is never sent to the server, so a 301 can't match it.
`programs/legacy-hash-redirect.js` (loaded on the `/programs` hub) forwards them:

| Old deep link | New page |
|---|---|
| `/programs#baking` | `/programs/baking-confectionery` |
| `/programs#weaving` | `/programs/weaving` |
| `/programs#gardening` | `/programs/gardening-horticulture` |
| `/programs#computers` | `/programs/computer-skills` |
| `/programs#printing` | `/programs/printing-merchandise` |
| `/programs#housekeeping` | `/programs/housekeeping` |
| `/programs#platemaking` | `/programs/eco-friendly-plate-making` |
| `/programs#laundry` | `/programs/laundry-fabric-care` |
| `/programs#nios` | `/programs/nios-support` |
| `/programs#music-therapy` | `/programs/music-arts-therapy` |
| `/programs#play-therapy` | `/programs/play-therapy` |
| `/programs#occupational` | `/programs/occupational-therapy` |

## 4. Server-side 301s to add (host canonicalisation + HubSpot cleanup)

| From | To | Why |
|---|---|---|
| `http://…/*` | `https://prisaum.com/*` | Force HTTPS |
| `https://www.prisaum.com/*` | `https://prisaum.com/*` | One canonical host (non-www) |
| `*?hsLang=en` | same URL without the query | HubSpot language param creates duplicate URLs |
| `/people-detail-page` | `/` | HubSpot theme filler page — retire |

## 5. ✅ Canonical host decided: non-www (`https://prisaum.com`)
- Matches your existing HubSpot canonical, so it's the safest choice.
- Applied consistently across **every** page's `<link rel="canonical">`, Open Graph tags,
  `sitemap.xml`, `robots.txt`, the JSON-LD, and all three redirect configs (www → non-www).
- In **Google Search Console**, add both `prisaum.com` and `www.prisaum.com` properties and
  confirm non-www is the indexed version (the 301s above enforce it).

## 6. Go-live checklist
1. Canonical host is **non-www** (`https://prisaum.com`) and consistent everywhere.
2. Deploy the site; place `sitemap.xml`, `robots.txt` and your host's redirect file at the root.
3. Confirm clean URLs resolve (`/programs/baking-confectionery`, `/about-us`, `/support` with no `.html`).
4. Submit `sitemap.xml` in **Google Search Console**; use **URL Inspection** on a few new pages.
5. Watch the **Pages / Coverage** report for 404s and fix stragglers with a 301.
6. Keep `/`, `/about-us`, `/programs`, `/support` live — all four now exist as real pages.
