---
id: IDEA-14
title: Rebuild the showcase on func-ui's layout
type: feat
status: done
created: 2026-10-16
updated: 2026-10-16
tags:
  - showcase
  - layout
subject: Showcase
order: 1
---

func-ui and folk-ui are sibling libraries, but their showcases look like two
different products. func-ui's showcase (`func-ui/src/showcase.tsx`) is a single
page with two columns:

- **Left column.** A fixed panel holding an eyebrow ("func ui"), a three-word
  H1 ("Funky. Noisy. Cosy."), a vertical nav of lowercase section links with a
  "➭" prefix, and, at the bottom, a tagline and a text theme toggle.
- **Right column.** A frosted `Glass` sheet that scrolls through five
  sections: `welcome`, `components`, `lamp`, `tokens` and `docs`.
- **Backdrop.** `Backdrop` (glow plus grain) sits behind both columns.
- **Entries.** Every component is an `Entry`: an accent mono name, one
  sentence, a live demo at a fixed minimum height, and a stack of `Control`
  rows that switch props live.
- **Scroll motion.** While `#components` scrolls into view, the left column
  narrows from 50% to 33%.

The folk-ui showcase (`src/showcase/`) is a hash-routed site with five pages.
Its parts:

- a sticky top nav bar;
- a 4657-line `components.tsx`;
- a left category sidebar;
- a 560px chalkboard `DetailSidebar` that pushes the content aside;
- a floating `Island` holding the wobble and theme controls;
- a footer.

Component metadata lives in three unlinked places: `sectionDetails`,
`componentGroups`, and the JSX itself. As a result, the sidebar has 12
entries with no section behind them. Seven components are never shown:
CodeBlock, CommandLine, EmptyState, Icon, InlineCode, SketchBorder and
Swatch. Almost every heading carries inline `fontFamily`/`color` styles from
`lib/styles.ts` instead of the library's own `Text`, `PageTitle`,
`SectionHeading` and SCSS tokens. Nothing collapses below `lg`.

This idea replaces the folk showcase with func-ui's structure, section for
section, rendered in paper.

**The shell is a sheet of paper lying on a desk.**

| func-ui | folk-ui |
|---|---|
| Dark page with lava `Glow` and film `Grain` | A darker desk surface (kraft or canvas texture from `textureMap`) with the three blurred watercolor blobs from today's welcome hero, pushed off to the left the way func pushes its glow |
| Frosted `Glass` sheet on the right | A tall `Page` on parchment that scrolls, with a `SketchBorder` edge and the paper shadow token, as if laid on the desk |
| Left column on the backdrop | Left column directly on the desk, no card |

**The left column follows func-ui's order.**

- **Eyebrow:** "folk ui" as a `Label` in watercolor green.
- **H1:** "Rough. Warm. Folk." in the display font.
- **Nav:** `welcome · components · chalkboard · tokens · docs`, lowercase
  ghost `Button`s. The active one gets an ink-arrow prefix at full opacity and
  the others sit at 20%, as in func. The active section comes from an
  `IntersectionObserver` with func's `-35% 0px -60% 0px` margin, run on the
  sheet's scroll container.
- **Bottom block:**
  - the tagline;
  - text toggles `surface: paper / chalkboard` and `font: luminari / cormorant
    / cinzel / almendra`, which replace the `Island` and the welcome-page font
    picker;
  - `v{version}`, which replaces the footer.

**Sections inside the sheet.**

- **`#welcome`.** The first screen of the sheet:
  - top right: a random folk proverb and its source in `Caveat`;
  - centre: a ghost marquee reading "paper · ink · canvas · watercolor ·",
    5% opacity, 55s loop with masked edges, `aria-hidden`;
  - bottom right: "Welcome!", `@dendelion/folk-ui v{version}`, a primary
    "Explore components" `Button` and github / npm links.
- **`#components`.** `Entry`s grouped under category sub-headings. Inside
  each category they follow func's order wherever the two libraries share a
  component. Every library component gets an entry, including the 12 sidebar ghosts
  and the 7 that are never shown.
- **`#chalkboard`.** This section plays the part of func's `#lamp`: a second
  surface family. It holds the components that take `surface="chalkboard"`,
  shown on a chalkboard band. The `surface` toggle in the left column
  also flips the whole sheet, so `#components` no longer needs its
  per-demo `chalkboardTheme ? … : …` branches.
- **`#tokens`.** Colour (paper, ink, canvas and watercolor swatches),
  typography, spacing, radius, shadows and the texture grid.
  - All values are read from `src/tokens.ts` and `src/utils/textures.ts`,
    not copied by hand. This fixes today's duplicated and missing texture
    tiles.
  - The wobble and texture playground (`TextureSwatches`) moves here.
- **`#docs`.**
  - Install and app setup `CodeBlock`s: the Tailwind preset and the CSS
    import.
  - A "Foundations" list naming page, card, textures, watercolor, sketch and
    chalkboard, each with one line of description.

**Entry anatomy matches func's, made of library parts.**

- **`SectionBlock({id, title, lead})`:**
  - a `SectionHeading`;
  - a lead paragraph in `Text` at reduced opacity;
  - children spaced with `$space-*`.
- **`Entry({name, description, children})`:**
  - the name as a `Label` in watercolor green;
  - one `Text` sentence;
  - the demo in a fixed min-height row.
- **`Control({label, options, value, onChange})`:** a `Label` at 50% and a
  row of small ghost `Button isActive` options. This follows the
  minimal-components rule: no new pill component.

**One registry instead of three sources of truth.**

- Each entry is its own file, `src/showcase/entries/<name>.tsx`, following
  the one-component-per-file rule. The file owns its demo state with local
  `useState`, rather than func's 50 hooks at the top of the page.
- `src/showcase/lib/entries.ts` lists them in order with `{ id, name,
  description, section, category, props, Entry }`.
- The registry drives everything that needs a list of entries:
  - the `#components` and `#chalkboard` sections;
  - the observer ids;
  - the category sub-headings;
  - the props and code shown in the detail panel.
- `sectionDetails`, `componentGroups` and `componentList` are deleted.

**Where folk-ui differs from func-ui on purpose.**

- **Small screens.** Below `lg` the left column becomes a slim header with a
  `Drawer` nav (the library `Layout` already has one), and the sheet goes full
  width. func is desktop-only. Folk is used in mobile consumer repos, so it
  shouldn't be.
- **Deep links.** The URL hash is read and written to match the active
  section, so `/#tokens` links into the sheet's scroll container. func never
  updates the hash.
- **Width scrub without GSAP.** folk-ui has no `gsap` dependency. The 50%→33%
  scrub runs on a CSS `animation-timeline: scroll()` that fires when
  `#components` enters, with a JS observer fallback. It is off under
  `prefers-reduced-motion`. Chrome on the user's machine drops smooth
  scrolling, so the snap has to work without it.

**Deleted by the end.**

- Pages: `pages/welcome.tsx`, `components.tsx`, `layout.tsx`, `tokens.tsx`
  and `docs.tsx`. The `Layout` demo becomes an entry.
- Components: `nav.tsx`, `footer.tsx`, `component-section.tsx` and
  `component-sidebar.tsx`. `detail-sidebar.tsx` is kept and moved into the
  left column.
- Libs and context: `lib/styles.ts`, `lib/category-colors.ts` and
  `font-context.tsx`. The font becomes state on the shell, passed down
  through the `--paper-button-font` variable.

### Out of scope

- Changes to library components. If an entry exposes a gap, it becomes its
  own idea.
- A search or command palette.
- Per-component routes.

### Decisions

- **The chalkboard detail panel stays, but it moves to the left column**
  (decided 2026-10-16).
  - It is closed by default. Each `Entry` gets a "details →" link, and the
    panel opens from it.
  - The open panel slides over the left column, on top of the desk
    background, and covers the eyebrow, H1 and nav. The sheet does not move or
    narrow, so the 560px push and the duplicated `SIDEBAR_WIDTH` both go away.
  - The panel keeps what it has today: the selectable `PropTable` and the
    generated `CodeBlock`. While it is open it follows the active entry, as it
    does now.
  - It has a close control. Esc also closes it and puts the nav back.
  - The column is 33% wide after the scrub. When the panel opens, the column
    grows back to about 40% (420px at least) so the type column of the
    `PropTable` fits. It shrinks again on close.
  - Below `lg` the panel becomes a bottom `Drawer`.
- **`#components` has category sub-headings** (decided 2026-10-16). Typography,
  Basic, Form, Layout, Navigation, Sidebar & settings, Feedback, Charts and
  Overlay become small headings inside the section. The left nav stays at
  section level, as in func. The registry carries `category` on each entry.
- **The H1 is "Rough. Warm. Folk."** (decided 2026-10-16).

### Phases
- [x] Build the desk and sheet shell
      Desk backdrop with watercolor blobs, left column (eyebrow, H1, section
      nav with observer, bottom toggles and version), scrolling `Page` sheet
      with empty section stubs; old pages unmounted from the shell but not yet
      deleted.
      run: 6m55s · 112 in · 31.8k out · sonnet-5 · sess:db6b6d8e-c827-4f36-8cb6-cdb9bfc8fa0d
- [x] Add the entry kit and registry
      `SectionBlock`, `Entry`, `Control`, category sub-heading,
      `entries.ts` registry with `category` and `props`; port Button,
      IconButton and Stamp as the first three entry files.
      run: 5m35s · 62 in · 16.8k out · sonnet-5 · sess:5b5fac60-7c95-4623-893e-d127e195be5c
- [x] Port every component entry
      All remaining entries into `src/showcase/entries/`, func's order first,
      including the 12 sidebar ghosts and 7 never-shown components.
      run: 4m2s · 248 in · 133.4k out · sonnet-5 · sess:5b5fac60-7c95-4623-893e-d127e195be5c
- [x] Move the detail panel into the left column
      Closed by default; "details →" on each Entry; slides over the left
      column on the desk, column widens to ~40% while open; Esc/close restores
      nav; follows the active entry; bottom Drawer below `lg`.
      run: 7m52s · 98 in · 37.4k out · sonnet-5 · sess:ebe6f471-7cd2-48b1-a418-0aa83d6928a8
- [x] Add the chalkboard section and surface toggle
      `#chalkboard` family band; left-column `surface` toggle flips the sheet;
      no per-demo chalkboard branches.
      run: 13m34s · 226 in · 56.9k out · sonnet-5 · sess:5a90c5a7-9eb3-4d74-a356-741e63ff86d2
- [x] Write welcome, tokens and docs
      Marquee welcome; tokens read from `tokens.ts` / `textures.ts` with the
      texture playground; install and foundations docs.
      run: 5m4s · 82 in · 22.4k out · sonnet-5 · sess:398d4e57-3c32-4026-a1c6-56462860268e
- [x] Add motion, small screens and deep links, then delete the old showcase
      CSS scroll-timeline width scrub with fallback; `lg` header + Drawer;
      hash sync; remove the old pages, sidebars, footer, `lib/styles.ts`,
      `category-colors.ts` and `font-context.tsx`.
      run: 6m40s · 70 in · 35.8k out · sonnet-5 · sess:dd1f718e-5fe5-4dfd-a6ff-d24d6528dbc3
