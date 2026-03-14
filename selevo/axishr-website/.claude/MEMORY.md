# Selevo Website — Claude Session Memory

> **Purpose:** This file tracks everything done to the codebase so Claude can resume without starting from scratch.

---

## Project Overview

| Property | Value |
|---|---|
| **Project name** | Selevo (formerly AxisHR) |
| **Repo path** | `F:/selevo/axishr-website` |
| **Framework** | Next.js 16.1.6 (App Router) |
| **Styling** | Tailwind CSS v4 + shadcn/ui (new-york) + radix-ui |
| **Fonts** | Merriweather (headings) · Plus Jakarta Sans (body) |
| **Primary color** | Deep teal `#0b6b62` / dark `#095950` |
| **Dev server** | `npm run dev` → `http://localhost:3000` |

---

## File Structure

```
app/
  layout.tsx              ← Root layout (Navbar + fonts, pt-[70.5px] offset)
  globals.css             ← Tailwind v4 theme + brand colors
  page.tsx                ← Home — HERO SECTION BUILT (see changelog)
  about/page.tsx          ← About (placeholder)
  contact/page.tsx        ← Contact (placeholder)
  why-selevo/page.tsx     ← Why Selevo (placeholder)
  platform/
    page.tsx              ← Platform overview (placeholder)
    [13 feature pages]    ← All placeholders

components/
  layout/Navbar.tsx       ← Main nav (client component, 470 lines)
  ui/button.tsx           ← shadcn Button
  ui/navigation-menu.tsx  ← radix NavigationMenu wrappers

lib/utils.ts              ← cn() utility
.claude/
  launch.json             ← Dev server config (port 3000)
  MEMORY.md               ← THIS FILE
```

---

## Design Tokens

| Token | Value |
|---|---|
| Primary teal | `#0b6b62` |
| Teal dark | `#095950` |
| Brand blue | `#0f76ee` |
| Brand green | `#14b816` |
| Purple 600 | `#7c3aed` |
| Heading font | `var(--font-merriweather)` |
| Body font | `var(--font-plus-jakarta)` |

---

## Platform Feature Pages (13)

All under `/platform/*` — all currently placeholders:

- `/platform/employee-management`
- `/platform/multi-branch-operations`
- `/platform/global-employment`
- `/platform/time-attendance`
- `/platform/leave-management`
- `/platform/payroll`
- `/platform/performance-management`
- `/platform/onboarding-offboarding`
- `/platform/reports-analytics`
- `/platform/compensation`
- `/platform/compliance-security`
- `/platform/claims-expenses`
- `/platform/employee-engagement`

---

## Navbar Structure

- **Left:** Logo ("S" icon + "selevo" text) → immediately followed by nav links (Why Selevo, Our Platform dropdown, About, Contact)
- **Right:** Sign in (outline pill) + Get a demo (teal solid pill)
- **Mobile:** Hamburger → full-width drawer with accordion for platform items
- **Accent line:** 2.5px teal strip below the nav bar

---

## Changelog

### 2026-03-11 — Session 1

**Changes made:**
1. **Navbar layout** — Moved navigation links from center to directly after the logo on the left side. Wrapped logo + nav in a single `flex items-center gap-6` div; CTAs remain right-aligned via `justify-between`.
2. **Teal color deepened** — Changed primary teal from `#0d9488` (teal-600, too bright) to `#0b6b62` (deeper/richer). Dark variant from `#0f766e` → `#095950`. Updated in:
   - `components/layout/Navbar.tsx` (TEAL / TEAL_DARK constants)
   - `app/globals.css` (`--color-brand-teal`, `--ring`, `--sidebar-ring`)
3. **Memory file created** — This file (`F:/selevo/axishr-website/.claude/MEMORY.md`)

**Status:** All pages still placeholder. Navbar is the only built component.

---

### 2026-03-11 — Session 2

**Changes made:**
1. **Hero section built** — `app/page.tsx` fully replaced with a two-column hero layout:
   - **Left column:** Large Merriweather heading ("People ops that truly works / **for your team.**") with teal color + `textShadow: 0 2px 28px rgba(11,107,98,0.30)` on the accent line. Subtitle paragraph + two CTAs: "Get a demo" (teal filled pill with teal box-shadow) and "Watch video" (play icon + text).
   - **Right column:** `<TreeInfographic />` — SVG-based hub-and-spoke org tree in teal/green. 6 HR module cards connected by dashed bezier curves:
     - Root: "Selevo HR / Central Hub" (teal filled)
     - Level 1: "Time & Leave", "People Ops", "Global Payroll"
     - Level 2: "Analytics", "Compliance"
   - Background: dot-grid pattern (`radial-gradient` 28px repeat) + right-side ambient teal glow
   - Review badges section skipped (user instruction — add later)

2. **Hero design reference:** Based on Glean-style layout. Accent text color = `#0b6b62`, shadow = `rgba(11,107,98,0.30)`.

**Status:**
- ✅ Navbar — complete
- ✅ Home hero section — complete (placeholder text, real infographic)
- ❌ All other pages still placeholder

---

### 2026-03-11 — Session 3

**Changes made:**
1. **Text shadow removed** — Removed `textShadow` from the teal "for your team." span in h1. Now pure color only.
2. **Button shadow on click only** — Removed permanent `boxShadow` from the "Get a demo" CTA. Added `.hero-demo-btn:active` rule in `globals.css` so shadow (`0 4px 22px rgba(11,107,98,0.45)`) only appears on press/click.
3. **Hero background glow reworked** — Replaced the mid-right floating blob with a full-section `radial-gradient(ellipse 75% 85% at 100% 0%, ...)` anchored at the upper-right corner (`at 100% 0%`). It starts at `rgba(11,107,98,0.13)` at the corner, fades to `0.05` at 45%, and is fully transparent at 70% — giving a clear, gradual spread across the hero.

---

### 2026-03-11 — Session 4

**Changes made:**
1. **Animated phrase** — Created `components/hero/AnimatedPhrase.tsx` (client component). Cycles infinitely through 3 phrases every 2.6s with fade-out + translateY(-10px) exit and fade-in enter (0.42s transition each):
   - "for your team."
   - "for your employees."
   - "for your companies."
2. **page.tsx updated** — Replaced the static `<span>` with `<AnimatedPhrase />`. Import added at top.

**File added:** `components/hero/AnimatedPhrase.tsx`

---

### 2026-03-11 — Session 5

**Changes made:**
1. **FeatureCarousel built** — Created `components/home/FeatureCarousel.tsx` (client component). Deep teal outer section wrapping a white rounded card:
   - **Left panel (5fr):** 4 clickable slide tabs — numbered (01–04), teal left-border + subtle teal bg on active, dividers between tabs
   - **Right panel (8fr):** Slide badge, Merriweather title, description, teal `CheckCircle2` bullet points
   - **Bottom:** 3px segmented progress bar — active segment fills teal
   - Auto-advances every 5 seconds; clicking any tab resets the timer
   - Content switches with `fadeInUp` CSS animation (defined in `globals.css`)
   - Eyebrow label: "WHAT MAKES SELEVO DIFFERENT"
2. **page.tsx updated** — `<FeatureCarousel />` inserted after hero `</section>`
3. **globals.css** — `@keyframes fadeInUp` + `.carousel-content-enter` class added
4. **launch.json fixed** — Name corrected to `"AxisHR Dev"`, `autoPort: false`, port 3000

**Files added:** `components/home/FeatureCarousel.tsx`

**Carousel slides:**
1. Multi-Branch Workforce Without Duplicate Records
2. One Data Flow From Attendance To Payroll
3. Governance Built Into Daily Work
4. Phased Rollout With Continuous Improvement

**Status:**
- ✅ Navbar — complete
- ✅ Home hero section — complete
- ✅ Feature carousel section — complete
- ❌ All other pages still placeholder

---

### 2026-03-11 — Session 6

**Changes made:**
1. **Carousel left tabs redesigned** — Replaced plain text rows with icon card buttons matching reference design:
   - Each tab is a `rounded-xl` card with `1.5px solid` border (teal when active, `#e2e8f0` when inactive)
   - Icon box (`w-10 h-10 rounded-lg`) left of text — teal-tinted bg when active, white with grey border when inactive
   - Bold `shortTitle` + muted `subtitle` text pair
   - Active card: teal border, teal icon, teal subtitle, subtle teal bg tint
   - Inactive card: grey border, grey icon, light bg (`#f8fafc`)
   - Icons used: `Building2`, `ArrowRightLeft`, `Shield`, `Layers`
   - Tabs stacked vertically with `gap-2` in `p-4` container

---

### 2026-03-11 — Session 7

**Changes made:**
1. **Carousel layout restructured** — Tabs moved from left sidebar to **top horizontal row**, separated from the white content card:
   - 4 tabs in a `grid grid-cols-2 lg:grid-cols-4` row above the card with `mb-5` gap
   - Tabs are glassmorphic on the teal bg: semi-transparent white bg, white border (brighter on active)
   - Active tab: brighter bg (`rgba(255,255,255,0.15)`), solid-ish border, white icon + text
   - Inactive tab: dim bg, dim border, muted icon + text
   - White card below contains only the content — two-column layout (title+desc left, bullets right)
2. **Animation slowed** — Added `.carousel-content-enter-slow` class with `0.6s cubic-bezier(0.22,1,0.36,1)` (smooth ease-out spring). Used in carousel content div.

---

### 2026-03-11 — Session 8

**Changes made:**
1. **Carousel background lightened** — Changed section background from solid deep teal (`#0b6b62`) to light teal-tinted white (`#f0faf9`).
2. **Halftone dot pattern added** — Two absolutely-positioned overlay `div`s added inside the carousel `<section>`:
   - Top-right corner: `radial-gradient(circle, rgba(11,107,98,0.28) 1.5px, transparent 1.5px)` at `18px 18px` grid, masked with `radial-gradient(ellipse 62% 65% at 100% 0%, black 0%, transparent 70%)`
   - Bottom-left corner: same dot pattern masked at `at 0% 100%`
   - Both use `WebkitMaskImage` + `maskImage` for cross-browser support
3. **Tabs restyled for light background** — Switched from glassmorphic white-on-dark to clean teal-on-light:
   - Active: white bg, teal `1.5px` border, teal icon, dark title, teal subtitle, subtle shadow
   - Inactive: semi-transparent white bg (`rgba(255,255,255,0.55)`), light teal border (`rgba(11,107,98,0.15)`)
4. **Eyebrow text updated** — Changed from white (`rgba(255,255,255,0.80)`) to teal (`#0b6b62` at 75% opacity) to match light background
5. **Card shadow updated** — Changed from dark shadow to teal-tinted shadow: `0 20px 60px rgba(11,107,98,0.10), 0 4px 20px rgba(0,0,0,0.06)`

---

*Updated automatically by Claude. Add new sessions below the last entry.*
