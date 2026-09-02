# AGENTS.md

Next.js 16 (App Router) + React 19 + Tailwind v4 + TS strict. A standalone landing page that recreates the jiro.build "PayWay" fintech template, rebranded as the Indonesian PPOB e-wallet "Saku Sultan". Content is Indonesian (id).

## Commands

- `npm run dev` / `build` / `start`
- `npm run typecheck` — `tsc --noEmit`. **This is the only verification gate; there is NO `npm run lint` script.** Always run typecheck after changes (e.g. the `Pw*` components).
- Path alias `@/*` → `src/*`.

## Structure & conventions

- Sections live in `src/components/payway/PwXxx.tsx` (named exports, one section per file). Server components by default; add `"use client"` only when the component needs state/handlers. Wired in order in `src/app/page.tsx`.
- Global styles/design tokens (`--pw-*` CSS vars, keyframes, `.main-container`, `.pw-reveal/.pw-in`) live in `src/app/payway.css`. Prefix new section styles with this file; keep arbitrary Tailwind utility classes verbatim from source markup — do NOT tidy/normalize them.
- Reveal-on-scroll: use `<PwReveal>` from `@/components/payway/pw-reveal` (props: `className`, `delay` ms for stagger). It replaces framer-motion from the original; do not reintroduce framer-motion.
- Serif accent font uses `[font-family:var(--pw-font-serif)]` (add `italic` for italic).
- `src/lib/utils.ts` exports `cn()` (clsx + tailwind-merge).

## Conversion rules (HTML→React)

Follow `docs/research/components/_CONVENTIONS.md` — this is the shared source-of-truth for builders. Key points (note: its referenced `docs/research/jiro-payway/` paths are stale; actual paths are `docs/research/sections/NN-nama.html` and `docs/design-references/`):

- Keep `<img>` as plain `<img>` with alt; do NOT switch to `next/image`. Add `// eslint-disable-next-line @next/next/no-img-element` if lint protests.
- Videos: `autoPlay loop muted playsInline` + `<source src="/videos/payway/..." type="video/mp4" />`.
- Inline CDN urls / assets map to local via `docs/research/asset-manifest.json` (`/images/payway/...`, `/videos/payway/...`).
- Inline SVG → JSX (camelCase attrs). Embedded `<style>` → inline `<style>` at end of component or trivial Tailwind.

## Assets / recon

- Real-HTML reference per section: `docs/research/sections/NN-nama.html` (e.g. `00-hero.html`).
- Screenshots: `docs/design-references/sec-NN-nama.png`, plus `full-desktop-1440.png` / `full-mobile-390.png`.
- `scripts/*.cjs` are one-off Playwright recon/QA tools against the jiro.build source and a `localhost:3010` server. They are not part of build/test (Playwright is not a dependency here); treat as scratch, not as a required workflow.
- `docs/` and `scripts/` are excluded from `tsconfig.json`, so changes there are not typechecked.
