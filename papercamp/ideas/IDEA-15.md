---
id: IDEA-15
title: Every face comes from a variable
type: feat
status: review
created: 2026-11-16
updated: 2026-11-16
tags:
  - tokens
  - typography
---

folk-ui hardcodes its typefaces. `Cormorant Garamond` appears in eight
rules besides the 32 that read `--paper-font-default`, `Caveat` in 21,
`JetBrains Mono` in 18 and `Luminari` in four, so a consumer cannot change
the body, title or accent face without overriding component internals by
hashed class name, which is what paper-camp does today in
`src/app/styles/utilities.css`. The phone built its own `Hand` primitive
with an Appearance setting (body face, title face, text scale) and the
desk wants the same choice; it has to come from the library.

**Four variables, no families in components.** Every `font-family` in
`src/components/**/*.module.scss` and `globals.scss` reads one of
`--paper-font-default` (body), `--paper-font-title` (headings, the app
name, empty-state titles), `--paper-font-hand` (handwritten accents) and
`--paper-font-mono` (code, stamps), each with its current family as the
fallback so nothing changes for a consumer that sets none. `Text` gains
`face="title"` beside `serif`, `hand` and `mono`; `PageTitle`,
`SectionHeading`, `EmptyState` titles and `Stamp` take their face from the
variables. `fontFamily` in `tokens.ts` names the four variables with their
fallbacks, and the README's theming section documents them.

**The showcase proves it.** The showcase gets an Appearance switcher
(body face, title face, text scale on `<html>`) that only sets the four
variables and the root font size, with Cormorant, Kyiv Sans and Kyiv Serif
as the demo faces.

**Acceptance.** Setting the four variables on `:root` in the showcase
changes every component's face, and `grep -r "font-family:" src` finds no
family name outside the four fallbacks.

### Phases
- [x] Every face comes from a variable
      Replace each hardcoded family in `src/components/**/*.module.scss` and `globals.scss` with the matching variable and fallback; add `face="title"` to `Text`; `PageTitle`, `SectionHeading`, `EmptyState` and `Stamp` read the variables; `tokens.ts` `fontFamily` documents them. Build, check-types, lint.
      run: 1m15s · 22 in · 5.1k out · sonnet-5-5 · sess:6823e55e-22f9-4df4-9d3b-4ccf5f3f32e4
- [x] The showcase switches faces
      An Appearance switcher in the showcase that sets the four variables and the root size, with Cormorant, Kyiv Sans and Kyiv Serif as demo faces; the README theming section lists the variables.

### Thread
- [x] 2026-11-16 [log] [agent] Kept on 2026-11-16 while IDEA-16 and IDEA-17 were retired: paper-camp's second client (paper-camp IDEA-337) uses folk-ui for containers and controls and needs them to take the body face from a variable.
