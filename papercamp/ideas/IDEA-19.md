---
id: IDEA-19
title: React 19 peer and a current toolchain
type: chore
status: review
created: 2026-11-16
updated: 2026-11-16
tags:
  - deps
---

folk-ui declares `react` and `react-dom` peers as `^18.0.0` and builds
with Vite 5.4, Vitest 2.1, Biome 1.9, framer-motion 12, tailwind-merge 2
and stylelint 17, while React is at 19.3 (the phone already runs 19.3),
Vite at 8, Vitest at 5, Biome at 2.6, framer-motion at 14, tailwind-merge
at 3 and stylelint at 18. paper-camp is about to build a second client
on folk-ui and should not write it against React 18 and then migrate; the
library moves first so the consumer can follow. Node 22 in CI already
satisfies every new major.

**Peers and toolchain, one release.** `peerDependencies` become
`react: ^18.0.0 || ^19.0.0` and `react-dom` the same, with React 19.3 as
the dev dependency the tests and the showcase run on. Vite 8 with
`@vitejs/plugin-react-swc` 4 and `vite-plugin-dts` 5; Vitest 5 with
jsdom 31; Biome 2.6 through `biome migrate`, keeping the current rules
(the migrated config is committed, no rule additions); framer-motion 14;
tailwind-merge 3; stylelint 18; sass-embedded and the commitlint,
postcss and autoprefixer minors. Tailwind stays on 3.4 and TypeScript on
5.9: Tailwind 4 rewrites the preset and every consumer's config, and
TypeScript 7 is the native compiler line; neither belongs in this pass.
`publint` and `pnpm run ci` stay green, and the built `dist/` keeps the
same exports and CSS entry so consumers see no change beyond the peer
range.

**Acceptance.** `pnpm run ci` passes; a React 19 app installs the package
with no peer warning; a React 18 app still installs it; the showcase runs
under Vite 8 with motion intact.

### Phases
- [x] React 19 peer and runtime
      Widen the peer ranges, move the dev dependency and `@types/react*` to 19.3, fix what the tests and showcase surface (ref handling, `act`), `pnpm run ci` green.
      run: 1m7s · 12 in · 1.6k out · sonnet-5-5 · sess:83015d2a-6bae-4d62-8ff3-13c8ad81e716
- [x] Vite 8, Vitest 5, Biome 2 and the library bumps
      Vite 8 with plugin-react-swc 4 and vite-plugin-dts 5, Vitest 5 with jsdom 31, `biome migrate` with the config committed, framer-motion 14, tailwind-merge 3, stylelint 18, sass-embedded and the minors; `publint` and `pnpm run ci` green; CHANGELOG entry as a feat.
