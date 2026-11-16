---
id: IDEA-18
title: A dark grey chalkboard
type: feat
status: planned
created: 2026-11-16
updated: 2026-11-16
tags:
  - tokens
  - components
---

The chalkboard comes in one colour. Its palette is fixed in
`src/styles/_tokens.scss` (`$color-chalkboard-bg #142e22`, `-surface
#1e3a2d`, `-light #264a3a`, the chalk, muted, accent, rose, border base
`rgb(200, 210, 195)` and the pass, fail and running fills) and mirrored
as constants in `src/tokens.ts`, and about twenty components compile
those greens into their chalkboard variants. No CSS custom property
carries them, so a consumer cannot ask for a different board without
forking the styles. paper-camp's second desk wants a dark grey board.

**The board's colours are custom properties.** `globals.scss` declares
`--pui-chalk-bg`, `--pui-chalk-surface`, `--pui-chalk-light`,
`--pui-chalk-text`, `--pui-chalk-chalk`, `--pui-chalk-muted`,
`--pui-chalk-muted-dim`, `--pui-chalk-accent`, `--pui-chalk-rose`,
`--pui-chalk-border-base` (an `r, g, b` triple, so the translucent
borders and rings stay `rgba(var(--pui-chalk-border-base), 0.2)` and so
on), `--pui-chalk-toggle-active`, and the six pass, fail and running
fills and texts, with today's greens as the values. Every chalkboard
rule in `src/components/**/*.module.scss`, `_surface.scss` and the
chalkboard texture tint reads the variables; the SCSS constants become
the defaults only. The `chalkboard*` entries in `tokens.ts` stay as the
green values and gain a `chalkGrey` object beside them.

**The grey board.** `[data-chalk="grey"]` on any ancestor switches the
whole set: bg `#232426`, surface `#2B2C2F`, light `#353639`, text
`#E8E4D9`, chalk `#DEDAD0`, muted `#A6A69F`, muted-dim `#6E6E68`, accent
`#B9C4AE`, rose `#E8A0A0`, border base `208, 208, 202`, toggle active
`#4A4C50`, pass fill `#2F4A3A`, fail fill `#523333`, running fill
`#4F4530` with the pass, fail and running texts unchanged. The
chalkboard noise texture loses its green colour matrix under the grey
board and tints with the surface instead. The showcase shows every
chalkboard component twice, green and grey, on one page.

**Acceptance.** Setting `data-chalk="grey"` on `<html>` in the showcase
turns every chalkboard surface, ring, switch, menu, code block and
skeleton dark grey with no green left; without it nothing changes from
today, and the built CSS contains each green hex only once, in the
variable defaults.

### Phases
- [x] Chalkboard colours become custom properties
      Declare the `--pui-chalk-*` variables with the green defaults in `globals.scss`; rewrite every chalkboard rule in the component styles, `_surface.scss` and the texture tint to read them; `tokens.ts` keeps the green constants; build and check the CSS for stray greens.
      run: 3m46s · 46 in · 9.2k out · sonnet-5-5 · sess:e69a2277-30bf-4aaa-8822-70c63b3eb974
- [ ] The grey board
      `[data-chalk="grey"]` overrides with the palette above; `chalkGrey` in `tokens.ts`; the showcase page with both boards; README theming note.
