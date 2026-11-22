# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with Next.js 15 (App Router), React 19, Tailwind CSS v4, and Motion (Framer Motion). Originally scaffolded via Google AI Studio. Dark/light theme with animated page transitions and timeline-based content sections.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build (standalone output)
- `npm run lint` — ESLint (flat config, eslint-config-next)
- `npm run clean` — clear `.next` cache

No test framework is configured.

## Architecture

**Routing:** Next.js App Router under `app/[locale]/` (next-intl, locales `en` and `es`) with six pages — home (`/`), plus five section pages in CV order (`/education`, `/research`, `/work-experience`, `/teaching`, `/publications`). Each section page calls `buildTimelineItems(t, keys)` from `lib/timeline-items.ts` and renders the result with the `<Timeline>` component.

**Content:** All text lives in `messages/en.json` and `messages/es.json` (same keys in both; next-intl fails on missing keys). Each item has `title`, `subtitle`, `date`, `brief` and `details`. `details` is rendered with `t.rich`, so it can contain link tags such as `<meckup>…</meckup>`, defined in `lib/rich-links.tsx`. Site content mirrors the CV in `cv/CV_Fuquen_Nov_2026_Academia.tex`; supervisors appear by name and title only (no emails on the site).

**CV:** The LaTeX CV lives in `cv/`. The downloadable copy is `public/CV_David_Fuquen.pdf` (`CV_PATH` in `lib/rich-links.tsx`); re-copy it from `cv/CV_Fuquen_Nov_2026_Academia.pdf` after recompiling. Link it with a plain `<a download>`, not the i18n `Link`, which would add a locale prefix.

**Theming:** Custom `ThemeProvider` (not next-themes) in `components/theme-provider.tsx` manages dark/light mode via CSS class toggling on `<html>`. Theme CSS variables are defined in `app/globals.css` using Tailwind v4's `@theme` directive. The default theme is `dark`, hardcoded on the `<html>` element in `app/layout.tsx`.

**Styling stack:** Tailwind CSS v4 via `@tailwindcss/postcss` (not the older `tailwindcss` PostCSS plugin). The `cn()` utility in `lib/utils.ts` merges classes with `clsx` + `tailwind-merge`.

**Animations:** Uses the `motion` package (Framer Motion rebrand) — imported as `motion/react`. The home page uses staggered reveal animations; the `Timeline` component uses `layoutId` for shared-layout expand/collapse transitions.

**Path aliases:** `@/*` maps to the project root (configured in `tsconfig.json`).

## Key Conventions

- The `motion` package is imported from `motion/react`, not `framer-motion`.
- Tailwind v4 config lives in `app/globals.css` (no `tailwind.config.ts`). Custom colors are defined as CSS custom properties mapped via `@theme`.
- ESLint ignores errors during `next build` (`ignoreDuringBuilds: true` in `next.config.ts`).
- Build output is `standalone` mode (for container/Cloud Run deployment).
- Remote images from `picsum.photos` are allowed in `next.config.ts`.
