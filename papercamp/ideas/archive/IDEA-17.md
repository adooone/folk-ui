---
id: IDEA-17
title: Mono stamps, kraft buttons, island
type: feat
status: done
created: 2026-11-16
updated: 2026-11-16
tags:
  - components
needs:
  - IDEA-16
---

Three controls carry most of the difference between the phone and the
desk. The phone's stamp is a JetBrains Mono bold 11px uppercase pill with
a 1px accent border and a wash fill; folk-ui's `Stamp` is Caveat text in
an SVG wobble blob. The phone's primary button is a kraft slab with ink
lettering and its secondary an ink-outlined sheet; folk-ui's `Button` is
a blob background with a green wash. The phone's tabs live in a floating
kraft island with icons and labels; folk-ui has no navigation island.

**Stamp.** Mono bold 11px, uppercase, letter-spacing 0.6px, padding 3px
9px, `radii.full`, 1px border in the variant's accent, the variant's wash
as fill, text in the accent's dark shade. The five meanings the phone
names (`running`, `done`, `failed`, `parked`, `idle`) map onto `info`,
`success`, `error`, `warning`, `neutral`. The wobble SVG and the pencil
ring go; `size` scales the font only.

**Button.** `primary`: `kraft` fill, 1.5px `kraftEdge` border,
`radii.md`, padding 10px 18px, shadow `0 2px 3px` of `kraft` at 0.25,
label in the body face bold with `sketchInk`, letter-spacing 0.3px.
`secondary`: `bgElevated` fill, 1.5px `sketchInk` border. `ghost`:
transparent, `textSecondary`, padding 6px 10px. `danger` keeps its rose
text on the secondary shape. Pressed: opacity 0.85 and 1px down; the blob
background and hover ring go. `small` keeps today's padding scale.

**NavIsland.** A new component: a pill 64px tall, `radii` 32px, `kraft`
fill, 1px border of `sketchInk` at 0.18, shadow `0 8px 14px` of
`sketchInk` at 0.18, max width 420px, padding 6px, 4px between tabs. Each
tab is icon over `xs` bold label, flex 1, `canvas700` ink and `sketchInk`
when active on a white pill at 0.55. `floating` docks it 20px above the
bottom edge, centred, over the page; without it the island sits inline
for a header. Keyboard: arrow keys move, Enter selects, `aria-current`
on the active tab.

**Acceptance.** Showcase stamps, buttons and the island match the phone's
`Stamp`, `Button` and `BottomBar` side by side; the island is reachable
by keyboard.

### Phases
- [ ] Stamp is a mono pill
      Rewrite `stamp.tsx` and `stamp.module.scss` as the pill (mono face variable, border, wash, no SVG); map the five meanings; update stamp tests and the showcase page.
- [ ] Button is a kraft slab
      Rewrite `button.module.scss` variants as slab, outlined and ghost; remove the blob and hover ring; keep sizes; tests and showcase.
- [ ] NavIsland
      `src/components/nav-island/` with `tabs`, `current`, `onSelect`, `floating`; keyboard handling; exported from the component index and `src/index.ts`; tests and showcase page.

### Thread
- [x] 2026-11-16 [log] [agent] Superseded on 2026-11-16: the phone's look is built as a second client in paper-camp (paper-camp IDEA-337 to IDEA-339) with its own DOM port of the phone's primitives, and folk-ui keeps its current look for the first desk and the other sites. Closed without running.
