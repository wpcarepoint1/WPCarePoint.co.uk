# WPCarePoint.co.uk — Task 2.16 Reference-Inspired Studio Redesign & QA Report (`WPCP-P2.16-V01`)

**Prompt ID:** `WPCP-P2.16-V01`  
**Date:** `2026-11-28`  
**Stage / Task:** `Stage 2: Design & Development — Task 2.16: Reference-Inspired Agency Layout Redesign`  
**Primary Layout Reference:** `https://digital-agency-nexsas-nextjs.netlify.app` *(Layout, spacing, visual hierarchy & composition study only — zero copied brand, text, slogans, assets, or source code)*  
**Scope:** Local repository & local QA verification only (`Production deployment: NOT AUTHORISED`)  
**Stage 3 Launch Readiness Verdict:** **`NOT READY`**

---

## 1. Executive Summary

Task `2.16` completed a systematic studio-grade visual layout redesign across `WPCarePoint.co.uk` (`16` canonical routes + `404` error view) informed by inspecting `https://digital-agency-nexsas-nextjs.netlify.app` via Playwright (`1440×900` & `390×844`) for structural pacing, editorial typography scale, surface alternation, and interactive card craft—while retaining **100% original WPCarePoint copy (`en-GB`), brand colour palette (`#003b4f`, `#00749c`, `#00b2d4`, `#f7f9fa`, `#ffffff`), route structure, and genuine Fiverr gateway proof (`#64`)**.

All `16` static routes, `dist/404.html`, `16`-URL `sitemap.xml`, `npm run lint`, `npm run build` (`vite build && verify:build`), `npm run test:local-qa` (`112` Playwright viewport assertions + interactive/CLS/keyboard/Fiverr link audits), and desktop/mobile rendered screenshot self-audits passed cleanly. Production launch remains **`NOT READY`**.

---

## 2. Reference Site Analysis Summary (Design Principles Only)

Direct live Playwright inspection of `https://digital-agency-nexsas-nextjs.netlify.app` (`HTTP 200`, desktop `1440×900` + mid/footer scroll bands + mobile `390×844`) surfaced five core visual craft patterns adapted to WPCarePoint's teal/neutral identity:

1. **Floating Clean White Header Rail:** Top navigation inset slightly above a soft `#f7f9fa` studio canvas (`sticky top-0` container framing a rounded translucent white rail with crisp border separation), clearly anchoring 3 zones: Wordmark left, primary nav links centre, and one elevated circular-arrow primary action button right.
2. **Asymmetric Two-Tier Editorial Hero Composition:** Pairing high-scale tight-tracked display headlines (`Plus Jakarta Sans` weight `600`, `-0.03em` tracking) and a clean hairline `2×2` engineering ledger across the top tier with a multi-plate studio showcase strip beneath, eliminating cramped boxed checklists beside H1 copy.
3. **Disciplined Surface Alternation & Hairlined Eyebrows:** Intentional alternation between `#f7f9fa` soft neutral sections, pure `#ffffff` focal bands, and `#003b4f` deep-teal architectural sections (`bg-deep-teal-grid`), anchored by subtle horizontal rules beside monospace uppercase eyebrows (`SectionHeading.tsx`).
4. **Architectural Dark Process Cards (`.01`–`.04`):** Replacing flat borderless step lists with spacious dark translucent panels (`border-white/15 bg-white/[0.04]`) featuring bottom hairline metadata and large display step numerals (`.01`, `.02`, `.03`, `.04`).
5. **Tactile Action Controls & Zero-Slop Restraint:** Integrated circular directional arrow chips inside key `rounded-full` primary action buttons (`Get in Touch`, `Book a Consultation`), crisp card hover elevation (`wpc-studio-card`), sticky asymmetric FAQ & Ledger columns, and zero decorative pill badges over static headings or unverified claims.

*Strictly zero Nexsas wording, brand names, purple/pink accents, screenshots, illustrations, fabricated testimonials, or source code were copied.*

---

## 3. WPCarePoint Redesign Architecture & Visual System

- **Typography & Display Precision (`/index.html`, `/src/index.css`):** Added `Plus Jakarta Sans` weight `500` alongside `600`/`700`; refined H1/H2 tight architectural tracking (`-0.03em`) and line-height (`1.06–1.1`), enlarged `64px` subtle architectural grid texture (`bg-architectural-grid`, `bg-deep-teal-grid`), added `.wpc-studio-card` lift transitions and `.wpc-panel-enter` tab choreography, and preserved `@media (prefers-reduced-motion: reduce)` zero-motion fallbacks.
- **Colour Fidelity Preserved:** Kept WPCarePoint's verified UK brand palette exclusively (`#003b4f` deep teal ink & architectural bands/footer, `#00749c` primary brand teal, `#00b2d4` highlight accent on dark surfaces, `#f7f9fa` alternating studio surface, `#ffffff` clean surface, `#2e2e2e` body ink, `#6c757d` muted labels).
- **Interactive Controls (`Button.tsx`, `SectionHeading.tsx`, `FaqAccordion.tsx`, `PortfolioCard.tsx`):** Updated pill-radius interactive action controls with tactile elevation shadows while preserving crisp keyboard `:focus-visible` outlines and clean static metadata labels (zero decorative pill spam).

---

## 4. Homepage & Subpage Layout Improvements

| Surface | Structural & Visual Upgrades Applied | Preserved Governance Guardrails |
|---|---|---|
| **Global Shell (`SiteHeader`, `SiteFooter`, `CtaSection`, `App.tsx`)** | Floating glass-white header rail (`max-w-7xl mx-auto rounded-2xl`), circular arrow chip on `Get in Touch`, desktop hover/click `Services` mega-menu, elevated `CtaSection` UK correspondence dossier card (`contact@wpcarepoint.co.uk`, Nutfield `RH1 4HW`), and spacious `py-14 lg:py-16` dark-teal footer (`SiteFooter`) incl. `/site-map/`. | `0` forms, `0` analytics, active `aria-current="page"`, accessible `>=44px` mobile drawer targets. |
| **Homepage (`HeroSection`, `ServicesSections`, `TrustAndProcessSections`)** | Two-tier studio hero: `clamp(2.35rem, 4.4vw, 3.8rem)` H1 + `2×2` hairline `HERO_COMMITMENTS` ledger above a 3-plate studio showcase (`heroImageUrl` + `01 · Capabilities` + `02 · Official Proof`, all eager `decoding="sync"`); refined tabbed `#services-overview` workbench, centered `#website-care` plans with `#003b4f` accent bar on `Advanced Care`, sticky editorial `#why-wpcarepoint` ledger with `2xl` numerals, centered `#our-process` `.01`–`.04` dark studio cards, Fiverr `#portfolio-preview`/`#testimonials` dossier, and sticky `#faq`. | Fixed `min-h-[260px]` mobile aspect overflow bug caught at `390px` (`lg:min-h-[280px]`); `#care-emergency` / Quick Fix preserved; `"Enquire for Pricing"` intact; Fiverr links retain `target="_blank" rel="noopener noreferrer"`; zero `300+`/`2019`/fake scores. |
| **Dedicated Service Pages (`ServicePageHero`, `ServiceSections` — 11 Routes)** | Studio gradient hero canvas, hairline eyebrow rule, circular arrow CTA badge, framed `16/10` figure, elevated `#003b4f` header bar on `Advanced Care`, centered `.01`–`.04` dark-teal process cards, and oversized editorial numerals in `whyChoose` ledger. | All `11` routes (`1` root `/wordpress-speed-optimisation/` + `10` `/services/*/`) & `#care-emergency` / `#one-off-fixes` anchors verified cleanly. |
| **Services Hub (`/services/`), About (`/about/`), Contact (`/contact/`), Site Map (`/site-map/`), & `404`** | Unified gradient studio hero, circular arrow primary CTA, `wpc-studio-card` Bento grids & dossier panels, centered dark `.01`–`.04` / `.01`–`.03` architectural process cards, oversized ledger numerals, and clean `NotFoundPageView` framing. | Strict email-only `/contact/` (`0` `<form>` elements), copy email/outline fallbacks intact, `/site-map/` lists all `16` approved routes & excludes Legal/Blog, `404` preserves `noindex, nofollow` & zero canonical/og:url leaks. |

---

## 5. Files Modified / Created

- **Shell & UI Primitives:** `/index.html`, `/src/index.css`, `/src/App.tsx`, `/src/components/layout/SiteHeader.tsx`, `/src/components/layout/SiteFooter.tsx`, `/src/components/ui/Button.tsx`, `/src/components/ui/SectionHeading.tsx`, `/src/components/ui/FaqAccordion.tsx`, `/src/components/ui/PortfolioCard.tsx`, `/src/components/ui/CtaSection.tsx`, `/src/components/ui/NotFoundPageView.tsx`.
- **Homepage Sections:** `/src/components/sections/HeroSection.tsx`, `/src/components/sections/ServicesSections.tsx`, `/src/components/sections/TrustAndProcessSections.tsx`.
- **Subpage & Service Detail Views:** `/src/components/service-detail/ServicePageHero.tsx`, `/src/components/service-detail/ServiceSections.tsx`, `/src/components/services-hub/ServicesHubView.tsx`, `/src/components/about/AboutPageView.tsx`, `/src/components/contact/ContactPageView.tsx`, `/src/components/site-map/SiteMapPageView.tsx`.
- **Governance & Reporting:** `/TASK_2_16_REDESIGN_AND_QA_REPORT.md` *(created)*, `/PROJECT_STATUS.md` *(updated — Decision `#65`)*, `/PROMPT_REGISTER.md` *(updated)*.

---

## 6. Build & Performance Comparison (`Task 2.15` vs `Task 2.16`)

| Build Artifact | Task `2.15` Baseline | Task `2.16` Production Build | Delta |
|---|---|---|---|
| `dist/index.html` | `5.17 kB` (`gzip: 1.48 kB`) | `5.19 kB` (`gzip: 1.48 kB`) | `+0.02 kB` (`0.00 kB gzip`) |
| `dist/assets/index-*.css` | `42.29 kB` (`gzip: 8.23 kB`) | `50.48 kB` (`gzip: 9.34 kB`) | `+8.19 kB` (`+1.11 kB gzip`) |
| `dist/assets/index-*.js` | `531.05 kB` (`gzip: 152.76 kB`) | `542.38 kB` (`gzip: 154.30 kB`) | `+11.33 kB` (`+1.54 kB gzip`) |
| `dist/assets/AboutPageView-*.js` | `32.23 kB` (`gzip: 8.02 kB`) | `34.03 kB` (`gzip: 8.43 kB`) | `+1.80 kB` (`+0.41 kB gzip`) |
| `dist/assets/ServicesHubView-*.js` | `32.71 kB` (`gzip: 8.61 kB`) | `34.39 kB` (`gzip: 9.02 kB`) | `+1.68 kB` (`+0.41 kB gzip`) |
| `dist/assets/ContactPageView-*.js` | `29.89 kB` (`gzip: 7.42 kB`) | `31.58 kB` (`gzip: 7.81 kB`) | `+1.69 kB` (`+0.39 kB gzip`) |
| `dist/assets/DedicatedServicePage-*.js` | `45.03 kB` (`gzip: 7.29 kB`) | `46.85 kB` (`gzip: 7.74 kB`) | `+1.82 kB` (`+0.45 kB gzip`) |
| `dist/assets/SiteMapPageView-*.js` | `21.51 kB` (`gzip: 5.94 kB`) | `22.18 kB` (`gzip: 6.14 kB`) | `+0.67 kB` (`+0.20 kB gzip`) |
| `dist/assets/NotFoundPageView-*.js` | `4.89 kB` (`gzip: ~1.40 kB`) | `5.03 kB` (`gzip: 1.45 kB`) | `+0.14 kB` |
| `dist/assets/` Directory Total | `1.5M` | `1.5M` | `0.0M` *(zero bloat; CSS transitions only)* |

*Zero `motion/react` runtime imports, preserved route-based code splitting (`routeLoader.ts`), and `16`-route static pre-rendering (`vite.config.ts`) remain intact.*

---

## 7. QA & Visual Self-Audit Results (`PASSED`)

- **`npm run lint` (`tsc --noEmit`):** Passed with exit code `0`.
- **`npm run build` (`vite build && npm run verify:build`):** Passed (`1,690` modules transformed cleanly in `740ms`; `16` static routes, noindex `dist/404.html`, and `16`-URL `sitemap.xml` verified).
- **`npm run test:local-qa` (`scripts/qa-local-server.mjs`):**
  - `✅` **HTTP checks:** `16/16` canonical routes returned `HTTP 200` (`index, follow` + exact canonical); `6/6` unknown paths returned `HTTP 404` + `X-Robots-Tag: noindex, nofollow`; `/sitemap.xml` (`16` `<loc>` entries), `/robots.txt`, `/llms.txt`, and `/llms-full.txt` passed.
  - `✅` **Playwright `112`-Pair Matrix:** All `16` routes verified across `1440×900`, `1280×800`, `1024×768`, `768×1024`, `390×844`, `375×812`, and `320×640` with `0` horizontal overflow (caught & fixed initial `390px` `HeroSection` aspect/min-height overflow), `0` console/page/network errors, `0` broken images, and `0` unverified numeric/date claims.
  - `✅` **Interactive, Accessibility & Fiverr Link Checks:** Fiverr links (`fiverr.com/hdhiren` + `users/hdhiren/portfolio`) verified with `target="_blank" rel="noopener noreferrer"` on `/`, `/about/`, `/services/`; CLS `< 0.05`; keyboard `Tab` traversal passed; `404` DOM + SPA canonical round-trip passed; FAQ toggle passed; `/contact/` `0` `<form>` check passed; `/site-map/` `16`-route link audit passed; mobile drawer & `prefers-reduced-motion: reduce` passed.
- **Visual Rendered Inspection (`10` Desktop `1440×900` & Mobile `390×844` Captures):** Verified floating studio header spacing, asymmetric 2-tier hero balance, dark `.01`–`.04` step card contrast, interactive services workbench legibility, Fiverr dossier presentation, subpage consistency (`/services/`, `/about/`, `/contact/`), and mobile drawer legibility. Temporary screenshot artifacts deleted cleanly afterward.

---

## 8. Remaining Stage 3 Blockers & Readiness Verdict: **`NOT READY`**

Production release remains **`NOT READY`** pending existing Stage 3 governance and infrastructure gates:
1. Urgent live mail DNS audit (`MX` / `TXT` returning empty on `ns1/ns2.dns-parking.com` vs `contact@wpcarepoint.co.uk` — `VER-17` / `VER-18`).
2. `VER-04`–`VER-06` Legal/GDPR evidence & advisor sign-off (Data Controller role, numerical retention periods, ICO/VAT/registration completion, Google Fonts decision, legal review).
3. Hostinger hPanel plan purchase & technical verification (`VER-18`), rollback test, legacy `301`/`410` activation (including cleared Outcome A `/wordpress-security-emergency-support/` -> `/services/website-care-support/`), and formal Stage 3 sign-off.
