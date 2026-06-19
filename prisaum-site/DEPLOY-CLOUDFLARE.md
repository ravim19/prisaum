# Prisaum SEVA — hosting on Cloudflare Pages (step by step)

Cloudflare Pages is free, ad-free, fast in India, runs the `_redirects` file, and
serves clean URLs (`/about-us`, not `/about-us.html`) automatically. No build step —
your site is already plain HTML.

There are two ways in. **Method A (Direct Upload)** is the simplest — no Git, just
drag-and-drop. **Method B (Git)** auto-deploys whenever you change a file later.

---

## Before you start
Your files live inside the `prisaum-site/` folder. When you upload, you upload the
**contents** of that folder, so `index.html` is at the top level — NOT the outer folder.

---

## Method A — Direct Upload (easiest, recommended to start)

### 1. Create a Cloudflare account
Go to **dash.cloudflare.com** → Sign up (free) → verify your email.

### 2. Create a Pages project
1. In the left sidebar: **Workers & Pages** → **Create** → **Pages** tab → **Upload assets**.
2. Give it a project name, e.g. `prisaum-seva`.
3. Unzip the download, **open the `prisaum-site` folder**, select **everything inside it**
   (index.html, about-us.html, support.html, the `programs`, `assets`, `tokens` folders,
   the `.css` files, `_redirects`, `sitemap.xml`, `robots.txt`) and drag it all in.
   - ⚠️ Drag the **contents**, not the outer `prisaum-site` folder.
4. Click **Deploy site**.
5. After ~30 seconds you get a live URL like **`prisaum-seva.pages.dev`**. Open it — done. 🎉

### 3. Test it
- Click around: home, About, Support, a few programme pages.
- Check clean URLs: visit `prisaum-seva.pages.dev/about-us` (no `.html`) — it should load.

### 4. Connect your domain `prisaum.com` (when you're happy)
The smoothest route is to let Cloudflare manage your DNS:
1. In the dashboard: **Add a site** → enter `prisaum.com` → pick the **Free** plan.
2. Cloudflare scans your existing DNS records — review them, then it gives you **two
   nameservers** (like `xxx.ns.cloudflare.com`).
3. At your **domain registrar**, replace the current nameservers with Cloudflare's two.
   (This is the only step that touches your live domain. Propagation can take a few hours.)
4. Once the domain is **Active** in Cloudflare:
   - Go to **Workers & Pages → your project → Custom domains → Set up a custom domain**.
   - Add **`prisaum.com`** (apex) — Cloudflare auto-creates the DNS record.
   - Add **`www.prisaum.com`** too (so both resolve).

### 5. Force HTTPS + non-www (your chosen canonical)
1. **SSL/TLS → Edge Certificates → Always Use HTTPS: ON.** (Forces http → https.)
2. Redirect `www` → non-www: **Rules → Redirect Rules → Create rule**:
   - Name: `www to apex`
   - When: **Hostname** **equals** `www.prisaum.com`
   - Then: **Dynamic redirect** → Type **301** → Expression:
     `concat("https://prisaum.com", http.request.uri.path)`
   - Deploy.

That's the whole migration: HTTPS on, www folds to `prisaum.com`, clean URLs, old
HubSpot filler pages 301'd, old `#anchor` links forwarded.

### 6. Tell Google
- Make sure `sitemap.xml` and `robots.txt` are live at the root
  (`https://prisaum.com/sitemap.xml`).
- In **Google Search Console**: add the `prisaum.com` property, submit the sitemap,
  and run **URL Inspection** on a couple of pages.

---

## Method B — Git auto-deploy (nice for ongoing edits)
1. Put the **contents** of `prisaum-site/` into a GitHub repo (see GitHub steps if needed).
2. Cloudflare: **Workers & Pages → Create → Pages → Connect to Git** → pick the repo.
3. Build settings: **Framework preset: None**, **Build command: (leave empty)**,
   **Build output directory: `/`** → **Save and Deploy**.
4. From then on, every change you commit to GitHub auto-publishes. Custom domain + HTTPS
   steps are the same as Method A, steps 4–5.

---

## Notes & cleanup
- **Unused files:** `.htaccess` and `nginx-redirects.conf` are for other hosts — Cloudflare
  ignores them. Harmless to leave, or delete them. **Keep `_redirects`** (Cloudflare uses it).
- **Volunteer form:** still posts to a Formspree placeholder. Create a free endpoint at
  formspree.io and replace `https://formspree.io/f/mgobrjqe` in `index.html` and
  `support.html` so submissions reach your inbox.
- **Editing later:** change text directly in the `.html` files and re-upload (Method A) or
  commit (Method B). Colours/fonts live in `tokens/`.
