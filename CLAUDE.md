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

**Routing:** Next.js App Router with six pages — home (`/`), plus five section pages (`/work-experience`, `/education`, `/awards`, `/teaching`, `/publications`). All section pages share the same pattern: define a `TimelineItem[]` array and render it with the `<Timeline>` component.

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
- Content is currently placeholder (lorem ipsum) — all section data is hardcoded inline in each page file.
