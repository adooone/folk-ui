---
id: IDEA-13
title: Small checkbox and row textures
type: feat
status: review
created: 2026-10-12
tags:
  - checkbox
  - row
subject: Components
order: 1
---

paper-camp is moving its sidebar filters (projects in view, statuses,
roadmap horizons) from full-width filled `SidebarItem`s to checkbox rows, and
its worklist header onto a darker paper than the rows under it. Neither fits
paper-ui as it is. `Checkbox` always sits in a 40px `.boxWrapper` around a
24px box, so a list of them stands 40px a row, taller than the 32px
`SidebarItem` it replaces. `Card` takes any paper through `texture`, `fill`
and `shade`, but `Row` takes none of them. Its `surface` is a fixed pick
(`card` is always parchment, `nestedCard` always canvas), so a row can't be
kraft, or any paper but those two.

**`Checkbox size="small"`.** A new `size?: 'medium' | 'small'` prop, default
`medium`, leaves today's checkbox unchanged. `small` makes `.boxWrapper` 24px,
the box 14px and the check icon 12px, and sets the label at `$font-size-sm`
with `$space-2` between box and label. The hover blob scales with the wrapper.
A small checkbox with a label fits a 26px row. The SketchBorder outline, the
focus ring, `indeterminate` and `surface="chalkboard"` all work at both
sizes.

**`Row` takes a texture, the same way `Card` does.** `RowProps` gains
`texture?: TextureProp`, `fill?: SurfaceFillKey` and `shade?: boolean`, with
`Card`'s types and semantics. `surface` keeps its meaning, the row's shape:
`none` is a ruled cell, and `card` and `nestedCard` are rows with their own
sketched paper edge. `resolveRowSurface` takes the surface's default paper
(`surface.card` or `surface.nestedCard` from `tokens.ts`) and lets the three
props override it: `texture` replaces the texture, `shade` replaces its shade,
and `fill` sets the palette colour while the grain stays, exactly as on
`Card`. `<Row surface="card" texture="kraft">` is a kraft row with the same
clip, radius and outline as a parchment card row, so it sits in a list of
them with matching edges. With no texture props a row renders exactly as it
does today. On `surface="none"` the three props are ignored, since a ruled
cell has no paper.

Both are public API. `CheckboxProps` and `RowProps` are exported from their
component `index.ts` and from the top-level `src/index.ts` barrel, and the
showcase gets a small-checkbox list and a list of card rows under a
`texture="kraft"` header row.

Ships as two `feat` commits on one branch: `feat(checkbox): Add a small
size` and `feat(row): Add texture, fill and shade`. Each keeps its own
changelog entry, and release-please cuts one minor version from both. Merging
the PR and then the release PR, which publishes to npm, is the maintainer's
step.

### Out of scope

A small size for `Radio` or `Switch`. Chalkboard rows.

### Phases
- [x] Add the small checkbox size
      `size` prop with the 24px wrapper, 14px box, 12px icon and sm label;
      exported types; showcase list.
      run: 2m46s · 74 in · 8k out · sonnet-5 · sess:11a75abc-730a-4dd9-a72e-b1c6b937c133
- [x] Give Row texture, fill and shade
      `Card`-shaped props layered over the surface's default paper in
      `resolveRowSurface`, ignored on `none`; unchanged rendering without them;
      exported; showcase kraft header over card rows.
      run: 3m55s · 64 in · 14.5k out · sonnet-5 · sess:11a75abc-730a-4dd9-a72e-b1c6b937c133
