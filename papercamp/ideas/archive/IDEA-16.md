---
id: IDEA-16
title: Paper sheets and kraft boards
type: feat
status: done
created: 2026-11-16
updated: 2026-11-16
tags:
  - tokens
  - components
---

The phone draws its surfaces differently from folk-ui, and the desk
should look like the phone. On the phone a card is a sheet of the surface
tint (`bgSurface`) with a 1px `sketchStroke` outline, four slightly
different corner radii and a soft shadow; a list row is the same sheet at
a fixed minimum height, 8px from its neighbours; a list label is small
bold uppercase text in the soft ink with no box; run output sits on a
brown kraft board; and the page is a single cool paper ground with a
visible grain. folk-ui's `Card` and `Row` default to a parchment shade
with straight 12px corners, `SectionHeading` is a serif heading, the
chalkboard surface variant lives on, and there is no kraft or ground
token: the phone hardcodes `#C9B79C`, `#9C8B6F`, `#B5A185` and `#ECEAE3`.

**Tokens and the ground.** `colors` gains `kraft #C9B79C`, `kraftEdge
#9C8B6F`, `kraftDeep #B5A185` and `ground #ECEAE3`. `surface.ground` is
the ground colour under the phone's paper-noise grain at 0.3 (the PNG
from the phone ships in folk-ui as a data URI texture beside the
existing `paper`, `parchment` and `kraft` SVG noises), and `Layout`
accepts it as its background.

**Sheets.** `Card` defaults to the sheet: `bgSurface` fill, 1px
`sketchStroke` border, radii 18/14/20/13 (top-left, top-right,
bottom-right, bottom-left, fixed, not random), shadow `0 3px 6px` of
`sketchInk` at 0.08; the parchment shade stays reachable through
`texture="parchment"`. `Row surface="card"` is the same sheet with
`radii.md` corners, padding 10px 14px, min height 48px (56px when it has
a detail line) and the list's gap guidance becomes 8px. `SectionHeading`
gains `variant="label"`: `sm` bold uppercase, letter-spacing 0.4px,
`textSecondary`, padding 10px 4px 2px.

**Kraft instead of chalk.** `Card`, `Row` and `Island` take
`surface="kraft"`: `canvas300` fill, 1px border of `sketchInk` at 0.3,
`radii.md`, for run output and logs. The `chalkboard` surface variant is
removed from every component; the `chalkboard*` colour tokens stay for
the parked dark theme.

**Acceptance.** The showcase's card, row and section-label pages match
the phone's `KraftCard`, `ListRow` and `ListLabel` side by side on the
same screen width; no component accepts `surface="chalkboard"`.

### Phases
- [ ] Ground and kraft tokens
      `kraft`, `kraftEdge`, `kraftDeep`, `ground` in `tokens.ts`; the paper-noise PNG as a texture; `surface.ground`; `Layout` background accepts it. Token tests and build.
- [ ] Card and Row are sheets
      `Card` default sheet with the fixed uneven radii and shadow, parchment opt-in; `Row surface="card"` sheet with 48/56 min heights and 10/14 padding; showcase pages updated.
- [ ] Labels and kraft boards replace the chalkboard
      `SectionHeading variant="label"`; `surface="kraft"` on `Card`, `Row`, `Island`; delete the `chalkboard` surface variant and its styles from every component; showcase and README updated.

### Thread
- [x] 2026-11-16 [log] [agent] Superseded on 2026-11-16: the phone's look is built as a second client in paper-camp (paper-camp IDEA-337 to IDEA-339) with its own DOM port of the phone's primitives, and folk-ui keeps its current look for the first desk and the other sites. Closed without running.
