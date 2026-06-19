---
name: prisaum-design
description: Use this skill to generate well-branded interfaces and assets for Prisaum SEVA (a special-education & vocational academy in Chennai), either for production or throwaway prototypes/mocks/decks. Contains essential design guidelines, colours, type, fonts, assets, and UI-kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and
create static HTML files for the user to view. If working on production code, you can copy
assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or
design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_
production code, depending on the need.

## Where things live
- `styles.css` — link this one file to get every token + webfont.
- `tokens/` — colours, typography, spacing, fonts, base resets (CSS custom properties).
- `components/` — React primitives (`Button`, `Tag`, `Card`, `Avatar`, `Input`,
  `SectionHeading`, `ProgramCard`, `StatCard`), exposed on `window.PrisaumSevaDesignSystem_*`
  after loading the compiled `_ds_bundle.js`.
- `foundations/` — specimen cards showing the colour, type, spacing and brand foundations.
- `ui_kits/prisaum-website/` — a full interactive recreation of prisaum.com to copy patterns from.
- `assets/fonts/` — Plus Jakarta Sans + IBM Plex Mono (OFL).

## Brand in one breath
Warm, dignity-first special-education academy. **Leaf green `#7c9a55` → forest green `#2d3f2f`**
on warm off-white `#faf9f5`, with a marigold `#e3a02f` support accent. **Plus Jakarta Sans**
(extrabold headings) + **IBM Plex Mono** (numbers). Soft 16px cards, pill buttons, low warm
shadows, calm 200ms motion. Voice: warm, plain, “we / you”, hopeful — *“Where every ability
finds opportunity.”*

## Caveats
Brand colours/fonts are best-match samples and the self-hosted logo is a ~300px capture — ask
the user for official hex codes, the vector logo (SVG) and any specified brand font before
shipping production work. Site imagery is self-hosted under `assets/site` (migrated off HubSpot).
