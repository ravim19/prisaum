# Prisaum Seva — Design System

A brand & UI design system for **Prisaum SEVA**, a *Special Education & Vocational Academy* —
a residential vocational-training school in Chennai, Tamil Nadu for young adults and children
with special needs. Run by the **Prisaum Empowerment Foundation** and recognised by the
Government of Tamil Nadu (Reg No: 908/2025).

> **Tagline:** *Where every ability finds opportunity.*
> **Mission:** vocational job skills + life & social skills, with dignity at the centre.

This system turns the brand on **prisaum.com** into reusable tokens, components and a
full website recreation, so any new page, deck or prototype stays on-brand.

---

## Sources used to build this system
- **Live website:** <https://www.prisaum.com> (HubSpot site) — primary source for brand,
  copy, imagery, programmes and structure.
- **GitHub:** <https://github.com/ravim19/prisaum> *(currently empty)*. The organisation also
  has <https://github.com/ravim19/quote-order-app> (an unrelated React/MongoDB scaffold) and
  <https://github.com/ravim19/app-builder> (empty). None contained brand styling — the
  identity was extracted from the live site, so explore **prisaum.com** itself for the richest
  reference.
- **Fonts:** Plus Jakarta Sans & IBM Plex Mono, imported from the
  [google/fonts](https://github.com/google/fonts) repository (OFL).

---

## Brand context
Prisaum SEVA serves people aged 12+ with intellectual disabilities, autism, mental-health
conditions, learning disabilities, slow learning abilities and Down syndrome. It blends
**vocational training** (baking, weaving, gardening, computers, printing, housekeeping,
eco-plate making, laundry, garment making) with **educational & therapeutic** support
(NIOS coaching, music & expressive-arts therapy, play therapy, occupational therapy, life
skills). Two Chennai campuses; the second is a residential hostel.

The audience is **parents, caregivers, volunteers and benefactors** — so the brand reads
warm, trustworthy and human, never clinical.

---

## CONTENT FUNDAMENTALS — how Prisaum writes
- **Voice:** warm, plain, reassuring, dignity-first. Speaks to parents and supporters, not
  specialists. Hope and capability over deficit or pity.
- **Pronouns:** first-person plural — *“we”*, *“our trainees / our staff”*. Addresses the
  reader directly with *“you”* in calls to action (*“Do you want to empower…?”*,
  *“Join us as a volunteer”*).
- **Casing:** Sentence case for body and most headings. The wordmark sets **SEVA** in caps;
  the strapline “Special **E**ducation & **V**ocational **A**cademy” highlights S-E-V-A.
  Eyebrows/labels are UPPERCASE with wide tracking.
- **Tone words:** *empower, opportunity, independence, dignity, life & social skills,
  vocational excellence, care, support, tailored, well-being.*
- **Sentence style:** medium-length, concrete, benefit-led. Lists conditions and programmes
  plainly. Avoids jargon; when a term is technical (NIOS, occupational therapy) it’s framed by
  its benefit.
- **Numbers & specifics:** real and grounded — “Age 12+”, “2 hours each week”, “Reg No:
  908/2025”, phone numbers. Set these in the mono face.
- **Emoji:** the live site uses a few inline contact glyphs (📍 ✆ ✉) in the footer; otherwise
  emoji are **not** part of the brand. Prefer Lucide icons in new work.
- **Examples of real copy:** *“Where every ability finds opportunity.”* · *“Boarding School
  with World-Class Infrastructure & Vocational Excellence.”* · *“We develop individual goals
  and work with our staff and professional artists.”* · *“Discover a renewed sense of purpose
  in life.”*

> ⚠️ The HubSpot theme ("Environmental" by MakeWebBetter) shipped with **placeholder filler**
> (environmental-activism quotes, stock benefactor names like “Goldie D. Taylor”). That text is
> **not** Prisaum's — ignore it and write genuine, mission-true copy.

---

## VISUAL FOUNDATIONS
**Colour.** The identity is built on a single natural hue — **leaf green** (`#7c9a55`, the
logomark figures) deepening to **forest green** (`#2d3f2f`, the logo background). Greens carry
the brand; surfaces are a **warm off-white** (`#faf9f5`) with stone neutrals that always keep a
faint warm undertone (never cold grey). A **marigold** accent (`#e3a02f`) — added by this
system to complement the green — warms up *Support / Donate / Volunteer* CTAs (culturally
resonant in India). A muted **brick red** (`#c0432f`) handles errors. Imagery skews warm and
natural (classrooms, crafts, gardens, daylight).

**Typography.** Display & UI in **Plus Jakarta Sans** — a friendly geometric-humanist sans that
echoes the rounded, approachable wordmark; headings are **extrabold** with slightly tight
tracking. Body is set at 17px, line-height 1.5–1.65 for easy reading. **IBM Plex Mono** is a
utility face for numbers, phone, fees and registration codes. Eyebrows are uppercase, bold,
wide-tracked, in primary green.

**Backgrounds.** Three modes: warm off-white (default), tinted **leaf panels** (`--green-50`)
for callouts and service blocks, and **forest-green sections** (`--green-900`) for the hero,
get-involved band and footer. Forest sections carry a soft radial leaf-green **glow** in one
corner — the only “gradient”, used sparingly. No busy patterns or heavy textures.

**Shape & depth.** Soft, friendly corners — cards at **16px**, pills for buttons/tags, inputs
at 8px. Shadows are **warm, forest-tinted and low** (`0 2px 14px rgba(45,63,47,.07)`), never
harsh black. Cards: white surface, 1px stone border, gentle shadow; interactive cards lift
~3–4px on hover.

**Borders & lines.** 1px stone hairlines for structure; dashed stone separators for soft
section breaks; leaf-green borders on tinted panels.

**Motion.** Gentle and calm — `200ms` with a soft ease-out, no bounce. Hover = lift + slightly
stronger shadow; buttons darken on hover and nudge down 1px on press. Respect reduced motion.

**States.** Buttons: hover darkens fill (primary → `--green-800`); press translateY(1px);
focus shows a 3px leaf-green ring (`--color-ring`). Links underline on hover. Inputs: border
goes leaf on hover, primary-green + ring on focus, brick on error.

**Layout.** Centered `1200px` container with 24px gutters; generous section padding
(`clamp(3.5rem, 8vw, 7rem)`). Sticky header with a forest utility bar above the main nav.

---

## ICONOGRAPHY
- **Brand spot icons.** The site uses small **flat PNG spot illustrations** in brand green
  (`vocational-guidance.png`, `vocational-training.png`, `certification.png`,
  `career-counseling.png`, 100×100). These are used in the *Vocational Services* row and are
  referenced from `prisaum.com/hubfs/…`.
- **UI icon set.** For interface chrome (nav, arrows, contact, social, programme glyphs) this
  system standardises on **[Lucide](https://lucide.dev)** — clean 2px line icons that suit the
  friendly, rounded type. Linked from CDN (`lucide@0.460.0`). *This is a substitution:* the
  live HubSpot theme used flat PNG spot icons plus Font Awesome social marks — see caveats.
- **Logomark.** Two figures (a caregiver lifting a learner) interlocking into an **infinity**
  shape, two-tone leaf green — symbolising care and limitless potential.
- **Emoji / Unicode.** Only the footer's 📍 ✆ ✉ contact glyphs appear on the live site;
  avoid emoji elsewhere — use Lucide instead.
- Never hand-draw replacement SVG illustrations; reference the brand's own assets or Lucide.

---

## What's in here (index / manifest)

**Root**
- `styles.css` — the single entry point consumers link. `@import`s the token + font layers only.
- `README.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter so this system can be used in Claude Code.

**Tokens** (`tokens/`, all reachable from `styles.css`)
- `fonts.css` — `@font-face` for Plus Jakarta Sans (variable) & IBM Plex Mono.
- `colors.css` — green / stone / marigold / brick scales + semantic aliases.
- `typography.css` — families, weights, type scale, line-heights, tracking.
- `spacing.css` — spacing, radii, shadows, layout, z-index, motion.
- `base.css` — light resets, element defaults, `.ps-eyebrow` / `.ps-mono` / `.ps-container`.

**Components** (`components/`) — React primitives, exported on `window.PrisaumSevaDesignSystem_*`
- `core/` — `Button`, `Tag`, `Card`, `Avatar`
- `forms/` — `Input` (input / textarea / select)
- `content/` — `SectionHeading`, `ProgramCard`, `StatCard`

**Foundations** (`foundations/`) — specimen cards for the Design System tab
(Colours, Type, Spacing, Brand).

**UI kits** (`ui_kits/`)
- `prisaum-website/` — interactive recreation of the prisaum.com homepage.

**Assets** (`assets/`)
- `fonts/` — Plus Jakarta Sans + IBM Plex Mono binaries (OFL licences included).
- `brand/` — a low-res logo-lockup reference capture (see caveats for the canonical asset).

---

## Caveats & open items (please help me make this perfect)
1. **Brand imagery is now self-hosted** in `assets/site/` (logo, hero, about photos, brand spot
   icons), pulled off the HubSpot CDN so the site no longer depends on HubSpot. The logo capture
   is ~300px wide — **please share the original vector logo (SVG) / high-res photos** so they can
   be swapped in at full quality.
2. **Exact brand colours were sampled from the logo image**, not from a brand sheet. The greens
   are close but may differ a few percent from your official values. **Confirm the official
   hex codes** (especially leaf `#7c9a55` and forest `#2d3f2f`) if you have them.
3. **Fonts are my best-match choice** (Plus Jakarta Sans + IBM Plex Mono). The live site's
   exact typefaces weren't extracted. **If you have a specified brand font, send it** and I'll
   swap it in.
4. **Marigold accent & Lucide icons are additions** to round out a complete UI system — tell me
   if you'd rather stay strictly green or use a different icon set.
5. **Programme page copy is strong starter content** I wrote around your real programmes. For
   the best ranking, send real specifics (what's actually taught, durations, certifications,
   photos) for each programme and I'll make every page authentic.
