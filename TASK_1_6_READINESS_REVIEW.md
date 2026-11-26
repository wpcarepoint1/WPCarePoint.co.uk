# WPCarePoint.co.uk — Pre-Production & Stage 3 Launch Readiness Register

**Latest Audit Prompt ID:** `WPCP-P2.6-V01` (`Version 1.0`, `2026-11-26`)  
**Brand & Approved Direction:** **WPCarePoint** (`https://wpcarepoint.co.uk/`) — *Web Development, eCommerce & AI Solutions Agency* (*"Building, improving and supporting digital businesses."*, Decision `#33`)  
**Stage 2 Frontend Status (`WPCP-P2.1`–`WPCP-P2.5`):** **`COMPLETED LOCALLY (15 Public Routes QA Verified)`**  
**Stage 3 Launch Readiness Status:** **`NOT READY`** *(Multiple hard owner-input, legal/compliance, email-delivery, hosting/architecture, and legacy-redirect blockers remain unresolved)*  
**Authorisation Boundary:** Local audit, evidence organisation, documentation updates, and provisional redirect mapping only. **Zero production deployment, DNS, Cloudflare, hosting, email DNS, contact form, or redirect code changes executed.**

---

## Part A: Stage 3 Verification & Evidence Register (`VER-04` through `VER-18`) — `WPCP-P2.6-V01` (`2026-11-26`)

*(Baseline cross-check context: `VER-01` `contact@wpcarepoint.co.uk` owner-provided for email-only enquiries pending `VER-17` & legal alignment; `VER-02` confirmed Email-only channel now — no phone/WhatsApp/call centre; `VER-03` `Robert Denholm House, Bletchingley Road, Nutfield RH1 4HW, United Kingdom` owner-approved for `/contact/` via Decision `#39`; `VER-19` initial 2 AI images replaced across Tasks `2.1`–`2.4`, though `public/` stale assets and JPEG sizes remain to optimise pre-launch; `VER-20` `13/13` capabilities **`OWNER-CONFIRMED`** via Decision `#35`, not portfolio-verified.)*

| ID | Requirement | Current Status | Evidence Currently Available | Evidence Source / Project File | Missing Information | Exact Owner Action Required | Blocks Launch? | Dependencies / Related Decisions |
|---|---|---|---|---|---|---|---|---|
| **`VER-04`** | Legal Entity Name / Sole Trader vs Ltd Status & UK GDPR Data Controller Identity | **`BLOCKED`** *(Owner Input & Legal Review Required)* | Stated missing across governance docs; Nutfield `RH1 4HW` approved only for `/contact/` (`Decision #39`); `contact@wpcarepoint.co.uk` owner-provided (`Decision #37`) | `/PROJECT_STATUS.md` (`VER-04`, Decisions `#24`, `#37`, `#39`); `/OWNER_DECISION_PACK.md` (`Sec. 4`); `/src/data/contactPageData.ts` | Registered business/entity legal name, trading structure (Sole Trader / Partnership / Ltd / LLP), and named Data Controller for Privacy Policy & Terms | Confirm exact UK legal trading name, entity structure, and named Data Controller details | **YES** *(Blocks Legal pages & live `/contact` form)* | Decisions `#7`, `#18`, `#24`, `#37`, `#39`; `VER-05`, `VER-06` |
| **`VER-05`** | Companies House Number (if Ltd/LLP) & UK VAT Registration / Price Treatment | **`BLOCKED`** *(Owner Input Required)* | No company number or VAT number/status recorded anywhere in repo or legal/decision packs; pricing stays `"Enquire for Pricing"` | `/PROJECT_STATUS.md` (`VER-05`); `/OWNER_DECISION_PACK.md` (`Sec. 4`); `/src/data/dedicatedServicePagesData.ts` | Confirmation of whether entity is incorporated (Companies House # + registered office) and VAT status (registered + VAT # vs below threshold / exempt) | Confirm Companies House registration number (or confirm non-Ltd/sole trader) and VAT status/inclusive-vs-exclusive rule | **YES** *(Blocks `/terms-and-conditions`, `/privacy-policy`, and any published `£` pricing)* | Decisions `#5`, `#7`, `#13`, `#24`; `VER-04`, `VER-07`, `VER-08`, `VER-10` |
| **`VER-06`** | ICO Data Protection Registration, UK GDPR Lawful Basis, PECR & Enquiry/Analytics Retention Policy | **`BLOCKED`** *(Owner Input & Technical Privacy Gate)* | Module `#24` (`Privacy & Consent Centre`) and analytics tracking (`GA4`/`PostHog`) strictly locked `OFF`; zero tracking scripts exist in `/index.html` or `src/`; no `/privacy-policy` or `/cookie-policy` routes exist | `/PROJECT_STATUS.md` (`VER-06`, Decisions `#18`, `#24`, `#44`); `/index.html`; `/src/App.tsx`; `/TASK_1_6_ANALYTICS_MCP_BI_ARCHITECTURE.md` | ICO fee-payer registration number/exemption check, lawful basis for enquiry handling, retention schedules (enquiries/backups/logs), and consent mechanism if analytics added | Confirm ICO registration status, approve data retention durations, confirm processor list (Cloudflare, Resend/Postmark), and review drafted legal policies before publishing | **YES** *(Blocks Legal pages, live `/contact` form & any analytics)* | Decisions `#18`, `#24`, `#44`; `VER-04`, `VER-05`, `VER-17` |
| **`VER-07`** | Care Plan Pricing Publication (`Essential`, `Advanced`, `Elite`, `Quick Fix`) vs `"Enquire for Pricing"` | **`OWNER INPUT REQUIRED`** *(Safely Gated Today)* | Current frontend uses `"Enquire for Pricing"` cleanly (`homepageData.ts`, `dedicatedServicePagesData.ts`); historical internal baseline `£65 / £55 / £89 / £179` (`Decision #5`); **CRITICAL LEAK:** stale `/public/llms.txt` & `/public/llms-full.txt` + unused `src/components/ContactSection.tsx` still contain unapproved `£59 / £119 / £229` | `/PROJECT_STATUS.md` (`Decision #5`, `#13`, `VER-07`); `/src/data/dedicatedServicePagesData.ts`; `/public/llms.txt` (lines `19–22`) | Owner choice to keep `"Enquire for Pricing"` at Stage 3 launch OR approve exact `£` figures + inclusions + billing terms | Confirm keeping `"Enquire for Pricing"` OR provide verified Care Plan/Quick Fix pricing & scope; regenerate stale `/public/llms*.txt` before Stage 3 | **CONDITIONAL** *(Non-blocking only if keeping `"Enquire for Pricing"` AND stale `/public/llms*.txt` purged)* | Decisions `#5`, `#13`, `#16`; `VER-05`, `VER-08`, `VER-09` |
| **`VER-08`** | Exact VAT Status on Published Fees | **`OWNER INPUT REQUIRED`** *(Depends on `VER-05`/`VER-07`)* | No `£` prices published on active 15 UI routes; VAT status unrecorded | `/PROJECT_STATUS.md` (`VER-08`); `/OWNER_DECISION_PACK.md` (`Sec. 5C`) | Whether quoted project/care fees will state `+ VAT` or `VAT-inclusive` or `not VAT-registered` | Supply VAT applicability alongside `VER-05` & `VER-07`/`VER-10` | **CONDITIONAL** *(Mandatory before publishing any `£` figure)* | `VER-05`, `VER-07`, `VER-10` |
| **`VER-09`** | Real Support Hours, Response Windows, Backup Frequency/Residency & Quick Fix Boundaries | **`OWNER INPUT REQUIRED`** *(Safely Gated Today)* | Active 15 routes avoid `24/7` & `< 30 mins` claims (`homepageData.ts`, `dedicatedServicePagesData.ts`); **LEAK:** `/public/llms.txt` line `20–22, 37` & unused `agencyData.ts` / `ContactSection.tsx` still cite `24/7`, `30-min SLA`, `08:30–18:00`, `daily/hourly backups` | `/PROJECT_STATUS.md` (`VER-09`); `/src/data/homepageData.ts`; `/public/llms.txt`; `/public/llms-full.txt` | Verified UK operating hours, honest non-guaranteed target response times, backup tooling/frequency/region, included care hours, and Quick Fix exclusions | Confirm true operating hours, honest response targets, backup specs, and Quick Fix scope boundaries (or explicitly approve generic non-SLA wording + regenerate `/public/llms*.txt`) | **CONDITIONAL** *(Must cleanse stale `/public/llms*.txt` before launch even if generic)* | Decisions `#6`, `#13`; `VER-07` |
| **`VER-10`** | Indicative Project Starting Prices (`/services/*`) & WooCommerce Pricing | **`OWNER INPUT REQUIRED`** *(Safely Gated Today)* | Active 15 routes omit `From £1,450` etc.; **LEAK:** `/public/llms.txt` (lines `8–17`), `/public/llms-full.txt`, and unused `src/data/servicePagesData.ts` still state `From £1,450`–`£2,400` | `/PROJECT_STATUS.md` (`VER-10`); `/public/llms.txt`; `/src/data/servicePagesData.ts` (unimported) | Approval to use quote/scope-on-enquiry everywhere OR verified starting prices | Confirm quote-on-enquiry at Stage 3 launch (and purge stale `/public/llms*.txt` + unused files) OR supply verified `£` bands | **CONDITIONAL** *(Non-blocking once `/public/llms*.txt` regenerated)* | Decisions `#6`, `#13`; `VER-05`, `VER-08` |
| **`VER-11`** | Actual Agency Founding Year | **`OWNER INPUT REQUIRED`** *(Omitted in Active UI)* | Active 15 routes (`AboutPageView.tsx`, `index.html` JSON-LD, `routeSeo.ts`) omit `"2019"` cleanly; **LEAK:** `/public/llms.txt` line `3` & `/public/llms-full.txt` still claim `"since 2019"` / `"Founded: 2019"` | `/PROJECT_STATUS.md` (`VER-11`, `WPCP-P2.3-V01`); `/src/components/about/AboutPageView.tsx`; `/public/llms.txt` | True founding/incorporation year or owner approval to omit founding year permanently | Supply verified founding year OR approve omitting it and updating `/public/llms*.txt` | **NO** *(UI clean; stale `/public/llms*.txt` cleanup required)* | Decision `#6` |
| **`VER-12`** | Real Completed Project Count, Client Reviews & Permission to Publish | **`OWNER INPUT REQUIRED`** *(Omitted in Active UI)* | Active 15 routes omit `900+`, `4.9/5`, and fabricated reviews; **LEAK:** `/public/llms-full.txt` line `17` & unused `src/data/agencyData.ts` / `useServiceViews.ts` still contain `900+`, `4.9/5`, `Atelier Lumière UK`, `The Cavendish Clinic` | `/PROJECT_STATUS.md` (`VER-12`, Decision `#6`); `/public/llms-full.txt`; `/src/hooks/useServiceViews.ts` | Genuine verified client testimonials with attribution permission, or explicit confirmation to launch without testimonials/metrics | Provide verified client reviews + written permission to publish (or confirm launching without reviews and delete/replace stale `/public/llms*.txt`) | **NO** *(Non-blocking for core launch once stale files cleaned)* | Decision `#6`, `#14`; `VER-13` |
| **`VER-13`** | Recovered Legacy Portfolio Projects, Screenshots & Publication Permission (`/wordpress-projects-portfolio`) | **`EVIDENCE REQUIRED`** *(Recovery Queue Active)* | `/wordpress-projects-portfolio` is NOT published or linked in navigation (`Decision #14`); `PortfolioCard` on `/` uses clean honest editorial scope card; zero fabricated case studies exist in active UI | `/TASK_1_6_PORTFOLIO_BLOG_AND_ADMIN_PLAN.md`; `/src/data/homepageData.ts`; `/src/components/layout/SiteHeader.tsx` | Real historical project list, domains/sectors, deliverables, non-fabricated screenshots/assets, client approval/anonymisation, and unrecoverable log | Compile any surviving historical project records + screenshots (or formally defer `/wordpress-projects-portfolio` to post-launch) | **NO** *(Remains excluded/`noindex` until verified per Decision `#14`)* | Decisions `#6`, `#14`, `#38`, `#52` |
| **`VER-14`** | Real Founder / Leadership Team Bios (`/about/` & `/leadership/` URL Disposition) | **`OWNER INPUT REQUIRED`** | `/about/` (`AboutPageView.tsx`) presents honest practice values/process without invented team bios; `/leadership/` does not exist as a route | `/PROJECT_STATUS.md` (`VER-14`); `/src/components/about/AboutPageView.tsx`; `/TASK_1_6_FINAL_SITEMAP_ARCHITECTURE.md` | Founder/team names, roles, and explicit `301` vs `410` decision for legacy `/leadership/` Wayback URL | Supply verified leadership names/roles (or confirm agency-level `/about/` without personal bios and confirm `/leadership/` -> `/about/` `301` vs `410`) | **NO** *(Blocks `/leadership/` final redirect rule only)* | Decisions `#6`, `#9`; `VER-18` |
| **`VER-15`** | Original GSC `Performance > Pages` Export (`Pages.csv`) & Core URL Inspection | **`DEFERRED BY OWNER`** *(Blocks Final Migration Matrix Verification)* | `/gsc_performance_pages_reconstructed_56.csv` (`56` rows, `435` Imp, `Clicks`/`CTR`/`Position = Unavailable`), `305` `Indexed Pages` (`2026-11-16`), and `766` Wayback paths preserved; `Not Indexed Pages` = `SKIPPED BY OWNER`; `Links` = `No Data` | `/TASK_1_6_VER_15_GSC_VERIFICATION_REPORT.md`; `/TASK_1_6_PROVISIONAL_RECONCILIATION.md`; `/gsc_performance_pages_reconstructed_56.csv`; `/public/assets/aistudio/Paste_November_23__2026_-_7_51PM_72c06835` | Original `Pages.csv` (to resolve `54` vs `56` discrepancy & `16` `/rgc/*` anomaly), live GSC URL Inspection for `/`, `/wordpress-maintenance-support/`, `/wordpress-security-emergency-support/` | Per Decision `#36`, do NOT request repeatedly — revisit ONLY before locking final Edge `301`/`410` rules at Stage 3 migration gate or if core de-indexation inspection is needed | **YES (FOR FINAL `301`/`410` LOCK)** | Decisions `#9`, `#25`, `#28`, `#32`, `#36`; `VER-18` |
| **`VER-16`** | Pre-Hack Blog Library Recovery (`86` WB Posts / `17` Indexed / `28` CSV `/blog/*`) | **`EVIDENCE REQUIRED`** *(Not Started — MDX Architecture Defined)* | Scope quantified (`86` pre-hack WB posts, `17` in `305` Indexed, `28` in `56` CSV); `12`-field MDX schema & GitHub PR review workflow documented in `Decision #52`; zero `/blog/*` routes exist locally | `/TASK_1_6_PORTFOLIO_BLOG_AND_ADMIN_PLAN.md`; `/TASK_1_6_NO_CMS_INITIAL_MVP_ARCHITECTURE.md`; `/TASK_1_6_PROVISIONAL_RECONCILIATION.md` | Wayback HTML extractions / owner backups for the `86` pre-hack posts, editorial audit decisions (`Recover` vs `301` vs `410`), duplicate/malformed resolutions (`#5`/`#13`, `#9`/`#12`), and MDX route build (if launching blog at Stage 3) | Provide any local blog backups or approve Wayback extraction batch + decide whether recovered `/blog/*` launches at Stage 3 OR posts hold for post-launch Wave 2 | **CONDITIONAL** *(Blocks Stage 3 if `17` indexed pre-hack blog URLs must go live at cut-over rather than deferred)* | Decisions `#25`, `#28`, `#38`, `#51`, `#52`; `VER-15`, `VER-18` |
| **`VER-17`** | Transactional Email Provider (`Resend` / `Postmark`) Account, `SPF`/`DKIM`/`DMARC` DNS & Form Backend | **`BLOCKED`** *(Owner Account/DNS & Technical Implementation Required)* | Provider choice recorded (`Resend` primary / `Postmark` fallback); current `/contact/` safely operates Email-only (`contact@wpcarepoint.co.uk` copy/mailto, zero active form); **`server.ts` `/api/contact` is mock receipt only (zero SMTP/Resend)** and unused `ContactSection.tsx` still contains broken FormSubmit fallback | `/PROJECT_STATUS.md` (`Decisions #21–#23`, `VER-17`); `/server.ts` (`lines 596–626`); `/src/components/contact/ContactPageView.tsx`; `/src/components/ContactSection.tsx` | Active Resend/Postmark accounts, verified `wpcarepoint.co.uk` domain DKIM/SPF/DMARC DNS records, Cloudflare Turnstile site/secret keys, Worker endpoint implementation, and inbox delivery test | Provision Resend/Postmark + verify domain DNS (`SPF`/`DKIM`/`DMARC`) OR explicitly confirm **Stage 3 launches `/contact/` Email-only** (keeping interactive form disabled) | **YES (FOR LIVE CONTACT FORM)** *(NO if owner approves Email-only launch)* | Decisions `#18`, `#21`, `#22`, `#23`, `#37`; `VER-01`, `VER-04`–`VER-06`, `VER-18` |
| **`VER-18`** | GitHub Repository Access, Cloudflare/DNS Control, Hosting Compatibility (`12`-Pt Check) & Legacy Redirect Approval | **`BLOCKED`** *(Owner Access, Technical Validation & Decision Required)* | Local workspace has **NO `.git` repository (`fatal: not a git repository`)**; conflicting deploy configs exist (`/.github/workflows/deploy.yml` targets GitHub Pages + `dist/404.html`; `/wrangler.jsonc` sets SPA fallback; `/vercel.json` points to `/index.html`; `server.ts` is Express); `public/sitemap.xml` is stale (`2026-11-21`, wrong slugs) | `git status`; `/.github/workflows/deploy.yml`; `/wrangler.jsonc`; `/vercel.json`; `/public/CNAME`; `/public/sitemap.xml`; `/TASK_1_6_NO_CMS_INITIAL_MVP_ARCHITECTURE.md` (`Sec. 5`) | Canonical GitHub repo URL/permissions, domain registrar + Cloudflare zone access, answers to `12`-point cPanel check, Hosting choice (`Approach A/B/C`), Decision `#52` Vite-vs-Next.js sign-off, and final approved `301`/`410` rule set | Supply GitHub repo access + Cloudflare/hosting specs, confirm hosting & runtime choice (`Decision #52`), and approve final URL migration rules prior to Stage 3 | **YES** *(Hard Stage 3 Deployment Gate)* | Decisions `#8`, `#9`, `#29`, `#34`, `#40`, `#52`; `VER-15`, `VER-16`, `VER-17` |

---

## Part B: Owner Input Collection Sheet (Pre-Stage 3 Checklist)

Reply directly against each numbered section (leave any intentionally deferred item marked *"Hold / Keep Gated"*). **Do not fabricate placeholder values.**

### 1. Legal Entity, Controller, Companies House & VAT (`VER-04`, `VER-05`)
- [ ] **Registered Legal Entity Name:** ______________________ *(e.g. `WPCarePoint Ltd` or Owner Full Name trading as `WPCarePoint`)*
- [ ] **Business Structure:** `[ ] Private Limited Company (Ltd)` `[ ] Sole Trader` `[ ] LLP / Partnership`
- [ ] **Companies House Number (if Ltd/LLP):** ______________________
- [ ] **Official Data Controller Name / Contact:** `contact@wpcarepoint.co.uk` / ______________________
- [ ] **Confirm Registered Office vs Correspondence Address (`RH1 4HW`):** ______________________
- [ ] **VAT Status:** `[ ] Not VAT Registered` `[ ] VAT Registered — Number: GB _______________`

### 2. ICO Registration, UK GDPR & Privacy Governance (`VER-06`)
- [ ] **ICO Data Protection Registration Number (or confirm exemption):** ______________________
- [ ] **Preferred Retention Duration for Client Enquiry Emails / Logs:** ______________________
- [ ] **Analytics at Launch:** `[ ] Keep Analytics & Cookies strictly OFF at initial launch (Recommended while privacy setup completes)` `[ ] Implement Privacy Consent Banner + GA4 before launch`

### 3. Commercial Pricing, VAT Display & Service Terms (`VER-07`, `VER-08`, `VER-10`)
- [ ] **Care Plans at Launch (`Essential`, `Advanced`, `Elite`):** `[ ] Keep "Enquire for Pricing" (current UI)` `[ ] Publish verified £ figures: ______________`
- [ ] **One-Off Quick Fix:** `[ ] Keep "Enquire About a Quick Fix"` `[ ] Publish verified £ figure: ______________`
- [ ] **Project Starting Prices (`From £...`):** `[ ] Keep scope-based enquiry wording (no £ prices)` `[ ] Supply verified starting £ figures`
- [ ] **If publishing any `£` prices, confirm display rule:** `[ ] Exclusive of VAT (+ VAT)` `[ ] Inclusive of VAT` `[ ] No VAT charged`

### 4. Support Operating Hours, Response Expectations & Boundaries (`VER-09`)
- [ ] **Standard UK Working Hours (e.g. `Mon–Fri, 09:00–17:30 UK`):** ______________________
- [ ] **Honest Target Response Expectation (no `24/7` or `<30m` guarantees unless contracted):** ______________________
- [ ] **Backup Method / Storage Region / Frequency (if stated on Care page):** ______________________
- [ ] **Quick Fix Inclusions & Explicit Exclusions:** ______________________

### 5. Founding Year, Reviews & Proof (`VER-11`, `VER-12`)
- [ ] **Actual Founding / Trading Start Year (confirm `"2019"` or supply real year, or choose *"Omit founding date"*):** ______________________
- [ ] **Genuine Verified Client Reviews + Written Permission to Publish:** `[ ] None ready — launch without testimonials` `[ ] Attached / Provided`

### 6. Portfolio & Blog Recovery (`VER-13`, `VER-16`)
- [ ] **Portfolio Projects (`/wordpress-projects-portfolio`):** `[ ] Keep hidden/excluded at Stage 3 launch until compiled` `[ ] Supply 3–5 verified projects + screenshots + client permissions`
- [ ] **86 Pre-Hack Blog Posts (`/blog/*`):** `[ ] Authorise Wayback extraction + editorial audit queue before Stage 3` `[ ] Launch core pages first, recover `/blog/*` in Wave 2` *(note: check SEO risk to `17` indexed posts)*

### 7. Email Infrastructure & Contact Mode (`VER-17`)
- [ ] **Contact Page Mode at Stage 3 Launch:** `[ ] Keep Email-Only (`contact@wpcarepoint.co.uk` — zero live form)` `[ ] Enable interactive `/contact` form (requires Resend/Postmark + DNS + Privacy Policy)`
- [ ] **Primary / Fallback Transactional Provider Status (`Resend` / `Postmark`):** ______________________
- [ ] **Ability to Add `SPF`, `DKIM`, `DMARC` TXT/CNAME Records on `wpcarepoint.co.uk` DNS:** `[ ] Yes (via Cloudflare)` `[ ] Need assistance`

### 8. GitHub, Cloudflare, Hosting & Decision #52 (`VER-18`, `Decision #52`)
- [ ] **Canonical GitHub Repo URL & Branch:** ______________________
- [ ] **Cloudflare Account / Zone Access (`wpcarepoint.co.uk`):** `[ ] Active & Owner-Controlled` `[ ] Pending Setup`
- [ ] **Existing cPanel Shared Hosting Provider & `12`-Point Specs (or confirm moving away from cPanel):** ______________________
- [ ] **Stage 3 Runtime Choice (`Decision #52` Review):** `[ ] Option 1: Launch current verified 15-route Prerendered Vite SPA + Cloudflare Pages/Worker` `[ ] Option 2: Migrate codebase to Next.js App Router + MDX before Stage 3 launch`
- [ ] **Route Alignment for High-Impression Legacy Slugs (`/wordpress-maintenance-support/`, `/wordpress-security-emergency-support/`, `/wordpress-design-development`, `/woocommerce-development`):** `[ ] Build dedicated pages (22-page baseline)` `[ ] Map via single-hop 301 to Stage 2 `/services/*` equivalents`

### 9. Legacy URL Redirect Approval (`VER-15` / `VER-18`)
- [ ] **Approval to run targeted live GSC URL Inspection on `/`, `/wordpress-maintenance-support/`, `/wordpress-security-emergency-support/`**
- [ ] **Confirmation on `/wordpress-seo-speed-optimization/` (`301 -> /wordpress-speed-optimisation/`), `/services/generative-engine-optimisation/` (`301 -> /services/ai-search-optimisation/`), and `/rgc/*` (`16` anomalous rows — confirm never served on `wpcarepoint.co.uk`)**

---

## Part C: `Decision #52` Architecture & Hosting Readiness Review

### 1. Current Local Implementation vs `Decision #52` Matrix

| Dimension | `Decision #52` Direction (`2026-11-23`) | Current Local Build (`WPCP-P2.5-V01`, `2026-11-26`) | Compatibility Assessment |
|---|---|---|---|
| **Core UI Stack** | React + TypeScript + Tailwind CSS + reusable components | **React 19 + TypeScript + Tailwind CSS v4 + custom modular components** | **FULLY COMPATIBLE** |
| **No-CMS / No-DB Rule** | No Payload, no WordPress CMS, no Directus, no PostgreSQL, no Admin Dashboard, no SaaS/MCP | **100% Static TypeScript data files + zero DB / CMS / Admin / SaaS / MCP** | **FULLY COMPATIBLE** |
| **Framework & Routing** | **`Next.js` (App Router)** + `Next.js Metadata API` | **`Vite 8` + `React` client router + build-time static prerender (`vite.config.ts`) + `Express` (`server.ts`) + `routeSeo.ts`** | **DIVERGENCE — Owner Confirmation Required** |
| **Blog (`MDX`) & Portfolio** | Git-based `MDX` (`/blog/*` with `12` frontmatter fields + GitHub PR workflow) + structured Portfolio | **Not yet implemented locally** (Zero `/blog/*` or `/wordpress-projects-portfolio` routes built; data-only `VER-13`/`VER-16` pending) | **REQUIRES BUILD IF LAUNCHING BLOG/PORTFOLIO IN STAGE 3** |
| **SEO / Metadata / Schema** | Native per-route `<title>`, `<meta>`, canonical, `hreflang`, `@graph` JSON-LD, dynamic `sitemap.xml` | **Per-route static HTML emitted for all `15` routes** (`dist/<route>/index.html`) + `routeSeo.ts` SPA sync; **GAP:** `/public/sitemap.xml` & `/public/llms*.txt` are stale (`2026-11-21`) | **CORE METADATA COMPATIBLE; `sitemap.xml` & `llms*.txt` REGENERATION REQUIRED** |
| **Hosting & Edge Security** | `GitHub` + `Cloudflare` CDN/WAF/Workers + compatible hosting (`Approaches A / B / C`) | **No `.git` linked**; `wrangler.jsonc` sets SPA fallback (`200` Soft-404 hazard); `.github/workflows/deploy.yml` copies `404.html`; `vite.config.ts` copies `~17 MB` `src/assets/images/` (including unused JPEGs) | **TECHNICAL REMEDIATION REQUIRED BEFORE STAGE 3** |

### 2. Detailed Readiness Assessment (`Decision #52`)
1. **What Is Already Compatible:**
   - The completed **15-route React 19 + TypeScript + Tailwind CSS v4** visual architecture, clean `en-GB` brand tokens, non-fabricated scope copy, email-only contact UX, single-script JSON-LD (`wpc-route-jsonld`), zero tracking scripts, and build-time prerendered HTML output (`dist/`) already uphold every substantive No-CMS, SEO, anti-fabrication, and privacy rule of `Decision #52`.
2. **What Requires Technical Validation:**
   - Hosting compatibility (`12`-point check if cPanel is still considered vs **Approach B: Cloudflare Pages + Cloudflare Worker**).
   - Edge Worker / Pages Function routing replacing `wrangler.jsonc` `"not_found_handling": "single-page-application"` so invalid/spam URLs return true `HTTP 410` / `404` instead of `200`.
   - Image weight & bundle hygiene: `src/assets/images/` currently holds `23` JPEGs (`~17 MB` copied wholesale into `dist/src/assets/images/` by `vite.config.ts`), including unused/rejected JPEGs (`hero_agency_studio_*`, `service_speed_engineering_*`, `case_study_*`), unused `@google/genai` in `package.json`, unused legacy components (`ContactSection.tsx`, `ServiceLandingPage.tsx`, `ArchiveRedirectsPanel.tsx`), and internal `SiteRecover` diagnostic endpoints in `server.ts`.
   - Regenerating `/public/sitemap.xml` (only verified `HTTP 200` routes, trailing-slash canonicals) and purging/regenerating stale `/public/llms.txt` & `/public/llms-full.txt` (`wpcarepoint@gmail.com`, `since 2019`, `£59/£119/£229`, retired slugs).
3. **What Requires an Owner Decision:**
   - **Runtime Choice:** Confirm whether **Initial Launch (Stage 3)** will deploy the **completed 15-route prerendered Vite SPA** (amending `Decision #52`'s framework label from `Next.js` to `Vite + React 19 Static Prerender` for Release 1) **OR** require migrating the codebase to **Next.js App Router** before launch.
   - **Sitemap Scope Choice:** Confirm whether the missing `22`-page WordPress routes (`/wordpress-design-development`, `/woocommerce-development`, `/wordpress-maintenance-support`, `/wordpress-security-emergency-support`) and recovered `/blog/*` MDX pipeline are built prior to Stage 3 OR whether legacy WordPress URLs map cleanly via `301` to the `15` implemented routes.
4. **Can the Existing Prerendered Vite SPA Meet Documented Launch Requirements?**
   - **Yes — for the 15 static public agency/service/contact routes (deployed via Cloudflare Pages + Cloudflare Worker — Approach B).** Each of the `15` routes already builds a standalone `index.html` with route-specific `<title>`, `<meta>`, `<link rel="canonical">`, `hreflang`, semantic `<div id="root">` SSR fallback markup, and single `@graph` JSON-LD, paired with smooth React hydration.
   - *Limitation:* It does **not** currently include an `MDX` blog compiler/listing (`/blog/*`), Legal pages (`VER-04`–`VER-06` gated), dynamic build-time `sitemap.xml` generation, or live Cloudflare Worker `/api/contact` + `301`/`410` edge routing.
5. **Is a Next.js Migration Required by Current Approved Requirements?**
   - **Strictly per `Decision #52` text (`"Next.js + React + TypeScript + MDX + Metadata API"`), yes — unless the owner explicitly accepts the completed prerendered Vite SPA for Initial Launch.** Functionally, Next.js is **not technically required** just to serve static marketing pages cleanly on Cloudflare Pages if Vite prerendering + an MDX plugin (or Next.js static export later) meets `en-GB` SEO/HTML requirements; however, **Next.js App Router natively solves** static `sitemap.xml` generation, native `@next/mdx` collections, `next/image` WebP/AVIF optimisation, and eliminates any future framework rewrite when moving toward `Releases 2–4`.
6. **Risks, Costs & Rework Implications:**
   - **Option 1 — Retain Prerendered Vite SPA for Stage 3 (`Low Short-Term Rework / Moderate Blog Rework`):** Fast path once hosting (`Approach B`), Legal pages, `sitemap.xml`/`llms.txt` cleanup, image WebP compression, and Cloudflare Worker (`301`/`410`/optional `/api/contact`) are done. *Risk:* Adding the `12`-field MDX blog + `next-level` dynamic routing later requires custom Vite MDX tooling or an eventual Next.js port; `Decision #52` wording must be formally updated by owner note.
   - **Option 2 — Migrate to Next.js Static Export (`output: 'export'`) Before Stage 3 (`Moderate Rework / Cleanest Long-Term Decision #52 Alignment`):** Reuses `100%` of React components, Tailwind v4 styles, and typed data files (`src/data/*.ts`), replaces custom `vite.config.ts` regex-HTML prerendering and `App.tsx` manual `pushState` router with App Router + `Metadata API` + native MDX blog + `sitemap.ts`, and aligns cleanly with `Decision #52` without extra hosting cost on Cloudflare Pages. *Risk:* Adds migration/QA cycle time before Stage 3 launch (`0` runtime Express server needed on Cloudflare Pages).

---

## Part D: Email & Contact-Form Readiness (`VER-17`)

1. **Approved Email Provider Status:**
   - **Selected in Planning (`Decision #21`):** **Resend** (primary) + **Postmark** (fallback). **Operational Status:** **`NOT PROVISIONED / NOT VERIFIED`**. Zero API integration exists in the repository; `server.ts` (`/api/contact`, lines `596–626`) returns only an in-memory receipt (`WPC-...`) with zero outbound mail, and unused `src/components/ContactSection.tsx` still retains a broken FormSubmit fallback to `wpcarepoint@gmail.com` (must stay unmounted/purged).
2. **Sender-Domain & DNS Requirements (`wpcarepoint.co.uk`):**
   - Verified sending domain / subdomain (e.g., `contact@wpcarepoint.co.uk` or dedicated transactional subdomain such as `mail.wpcarepoint.co.uk` mapped safely via Resend/Postmark while keeping receiving MX intact on Google Workspace/Zoho/hosting mail for `contact@wpcarepoint.co.uk`).
   - Confirmed inbound mailbox routing & forwarding verification so replies to `contact@wpcarepoint.co.uk` reach the owner reliably.
3. **`SPF`, `DKIM` & `DMARC` Evidence Needed:**
   - DNS `TXT` **SPF** record including authorised sender(s) cleanly (`-all` or `~all`, single SPF record — no multiple `v=spf1` records).
   - Provider-issued **DKIM** `TXT`/`CNAME` public-key records verified active in Resend & Postmark dashboards.
   - Valid **`_dmarc.wpcarepoint.co.uk`** `TXT` policy (`v=DMARC1; p=quarantine` or `p=none` initially with `rua=` aggregate monitoring during warm-up).
4. **Contact-Form Implementation Dependencies (`Decisions #22`, `#23`):**
   - Server-side **Cloudflare Worker / Pages Function** `POST /api/contact` route (never client-only `FormSubmit` or static `POST` to Pages).
   - **Cloudflare Turnstile** site key + server-side token verification prior to accepting requests or sending auto-acknowledgements.
   - Dual-intent payload validation (`New Project` vs `Maintenance` with mandatory 4-option `Issue Type`: `Ongoing Care Plan Enquiry`, `One-Off Quick Fix`, `Site Down or Error`, `Suspected Malware or Hack`), `http://`/`https://` website URL validation, HTML/text context encoding without altering user text, `Idempotency-Key` + Durable Object / Worker rate-limiting (never KV alone), and accurate `HTTP 201` accepted-for-delivery vs error handling.
5. **Privacy & Data-Handling Requirements (`Decisions #18`, `#24`):**
   - Live `/privacy-policy` published and linked inside the form with verified **Legal Entity / Data Controller (`VER-04`)**, **Companies House/VAT (`VER-05`)**, **ICO / Retention (`VER-06`)**, and listed sub-processors (Cloudflare, Resend/Postmark).
   - Optional, unchecked marketing consent only if ever offered (never bundled/required).
6. **Required Testing Before Enabling a Live Form:**
   - Local + staging `POST /api/contact` integration test (Turnstile pass/fail, `400` validation errors, duplicate submission idempotency, Resend primary + Postmark fallback failover, internal receipt email + non-marketing visitor confirmation delivery check in real controlled test mailbox — **never test against real customer addresses**).
   - **Current Safe Rule Preserved:** Keep `/contact/` strictly **Email-only (`contact@wpcarepoint.co.uk` `mailto:` + copy button + copy brief outline)** until all above gates pass.

---

## Part F: Stage 3 Launch Readiness Summary (`WPCP-P2.6-V01`)

- **Overall Stage 3 Launch Readiness Status:** **`NOT READY`**

| Category | Current Readiness Details |
|---|---|
| **Verified / Ready Locally** | All `15` public frontend routes built, `en-GB` brand/copy/anti-fabrication compliant (`Enquire for Pricing`, `RH1 4HW`, `contact@wpcarepoint.co.uk`, zero `2019`/`24/7`/fake portfolio), `vite build` + `tsc --noEmit` passing (`0` errors), `105` Playwright viewport checks (`1440px`–`320px`) passing, zero tracking scripts active. |
| **Owner-Input Blockers** | `VER-04` (Legal Entity/Controller), `VER-05` (Companies House/VAT), `VER-06` (ICO/GDPR retention), `VER-18` (GitHub repo, Cloudflare/hosting specs & `12`-pt check), `VER-07`–`VER-12`/`VER-14` confirmation (pricing/SLAs/founding date/reviews/leadership or explicit omission), `VER-13`/`VER-16` recovery decisions, and final `301`/`410` approval. |
| **Technical Blockers** | No linked `.git` repository; `wrangler.jsonc` SPA soft-`404` (`200` on missing routes); no Cloudflare Worker for `301`/`410`/true `404`; stale `/public/sitemap.xml` (`2026-11-21`, outdated slugs); stale `/public/llms.txt` & `/public/llms-full.txt` exposing `wpcarepoint@gmail.com`, `2019`, `£59/£119/£229`; unused/unoptimised `~17 MB` JPEGs (`src/assets/images/`); unused `server.ts` diagnostic routes & legacy `ContactSection.tsx`/`servicePagesData.ts` files on disk; no `VER-17` Resend/Postmark backend. |
| **Legal / Compliance Blockers** | `/privacy-policy`, `/cookie-policy`, and `/terms-and-conditions` cannot be published (`VER-04`–`VER-06`); public `/contact` form must remain disabled (`VER-04`–`VER-06` + `VER-17`); analytics & cookies remain locked `OFF` (`Decision #44`). |
| **Architecture Decision Blockers** | Resolve `Decision #52` Vite-Prerender-for-MVP vs Next.js App Router migration before Stage 3; confirm Hosting Approach (`B: Cloudflare Pages + Worker` vs `C: Node VPS` vs verified static `A: cPanel`); resolve `15` implemented routes vs `22`-page WordPress core routes (`/wordpress-maintenance-support/`, `/wordpress-security-emergency-support/`, etc.). |
| **Redirect & Recovery Blockers** | `183` reconstructed impressions across `/`, `/wordpress-maintenance-support/`, `/wordpress-security-emergency-support/` absent from `305` Indexed (`2026-11-16`); `16` `/rgc/*` medical rows (`25` Imp) unresolved (`VER-15`); `86` pre-hack blog posts (`17` indexed) & `24` tags / `19` categories pending recovery/disposition; `258` (`9` root-level) casino spam URLs require strict allowlist + `HTTP 410` Edge rules. |
| **Items Safe to Proceed Independently (Local Only)** | Purging/regenerating stale `/public/sitemap.xml`, `/public/llms.txt`, `/public/llms-full.txt` to match the `15` verified routes & removing unapproved legacy claims; removing unused `@google/genai`, rejected JPEGs (`hero_agency_studio_*`, `service_speed_engineering_*`), unused `ContactSection.tsx`/`useServiceViews.ts`/`servicePagesData.ts`; converting active images to WebP/AVIF with `width`/`height`; drafting Worker `301`/`410` design rules (without deploying). |
| **Recommended Next Owner Action** | Complete **Part B (Owner Input Collection Sheet)** — prioritising **Section 1–2 (`VER-04`–`VER-06` Legal/GDPR)**, **Section 7 (Confirm Email-only Stage 3 launch vs `VER-17`)**, and **Section 8 (`VER-18` GitHub repo + Cloudflare access + `Decision #52` Vite-vs-Next.js + core WordPress route choice)** so technical cleanup & pre-deployment work can proceed safely. |

---

*Preserved Historical Task 1.6 Readiness Review (`2026-11-23`) retained verbatim below for audit traceability:*

# Task 1.6 — Final Owner Approval Readiness Review

**Review Date:** 2026-11-23  
**Brand & Approved Direction:** **WPCarePoint** (`https://wpcarepoint.co.uk/`) — *Web Development, eCommerce & AI Solutions Agency* (*"Building, improving and supporting digital businesses."*, Decision `#33`)  
**Task 1.6 Verdict:** **`NOT READY`** *(Planning documentation drafted, but critical evidence, owner decisions, capability confirmations, and legal/contact blockers remain unresolved)*  
**Stage 2 Status:** **`NOT STARTED — BLOCKED`** *(Cannot begin until Task 1.6 blockers are resolved and explicit owner sign-off is granted)*

**Governance Guardrails Preserved:**
- Owner Decisions **`#1–#33`** remain strictly unchanged.
- `/gsc_performance_pages_reconstructed_56.csv` (`56` rows, `435` Impressions, `Clicks`/`CTR`/`Position` = `Unavailable`) remains verbatim.
- `Not Indexed Pages` remains permanently **`SKIPPED BY OWNER`** (Decision `#32`); `Links` remains **`No Data`**.
- `VER-15` remains **`BLOCKED`**; zero irreversible `301` or `410` rules are locked.
- Zero application code (`src/*`, `server.ts`, `index.html`, `wrangler.jsonc`, `package.json`), DNS records, or live production assets were modified.

---

## 1. Executive Verdict: `NOT READY`

Although all core Task 1.6 planning, audit, capability, SEO/GEO/AIO, and proposed sitemap documents are now drafted, **Task 1.6 is `NOT READY` for final owner completion sign-off, and Stage 2 is `NOT READY` to start**. Treating documentation existence as completion would violate Decisions `#6`, `#9`, `#18`, `#24`, `#28`, `#31`, `#32`, and `#33` by forcing unverified capabilities, incomplete legal compliance, unresolved repo SEO defects, and unverified URL migration rules into production build scope.

---

## 2. Task 1.6 Completion Checklist (Completed vs Incomplete)

| Area | Status | Evidence / File Reference | Assessment |
|---|---|---|---|
| **1. Hybrid Digital Agency Brand & 5-Category Architecture** | **COMPLETED (Drafted)** | `PROJECT_STATUS.md` (Decision `#33`), `/TASK_1_6_HYBRID_AGENCY_ARCHITECTURE.md` | Aligned cleanly to 5 Primary Service Categories while retaining WordPress & WooCommerce equity. |
| **2. Final Proposed Sitemap & 10-Column URL Matrix (`23`-page baseline)** | **COMPLETED (Proposed — Approval Pending)** | `/TASK_1_6_FINAL_SITEMAP_ARCHITECTURE.md` | Covers `/`, `/services`, 5 categories, WP vs Custom & WooCommerce vs Custom boundaries, UX, nav/4-group footer, breadcrumbs, schema, `en-GB`/`GBP`, and conflict register. |
| **3. `305` `Indexed Pages` & `766` Wayback Baselines** | **COMPLETED** | `/public/assets/aistudio/Paste_November_23__2026_-_7_51PM_72c06835` (`2026-11-16`), Wayback CDX `766` paths | Owner confirmed `305` `Indexed Pages` provenance (`719 -> 975 -> 305`); raw-file header limitation documented. |
| **4. Reconstructed 56-Row Performance Import & Provisional 3-Way Reconciliation** | **COMPLETED (Provisional Only)** | `/gsc_performance_pages_reconstructed_56.csv`, `/TASK_1_6_PROVISIONAL_RECONCILIATION.md` | All `56` rows preserved verbatim (`14/56` in `305` Indexed, `35/56` in `766` Wayback, `54` vs `56` discrepancy logged). |
| **5. `VER-20` Delivery Capability Verification Audit** | **AUDIT COMPLETED (`0/13 VERIFIED`)** | `/TASK_1_6_VER_20_CAPABILITY_REPORT.md` | Audit finished (`6` `OWNER CONFIRMATION REQUIRED`, `4` `NOT VERIFIED`, `3` `FUTURE CAPABILITY`), but **owner confirmations remain pending**. |
| **6. SEO / GEO / AIO Overlap Review** | **REVIEW COMPLETED (Decision Pending)** | `/TASK_1_6_SEO_GEO_AIO_REVIEW.md` | Option A (`3` pages) vs Option B (`2` pages) analysed; **Option B recommended**, awaiting owner vote & Decision `#2` amendment. |
| **7. `VER-15` Original GSC Verification (`Pages.csv`)** | **`BLOCKED` (Missing Evidence)** | `/TASK_1_6_VER_15_GSC_VERIFICATION_REPORT.md` | Original `Pages.csv` is **NOT FOUND** in workspace; `Clicks`/`CTR`/`Position`, `54` vs `56`, `16` `/rgc/*`, and core de-indexation remain unresolved. |
| **8. Final Evidence-Verified URL Migration Matrix (`Preserve`/`Recover`/`301`/`410`)** | **INCOMPLETE / BLOCKED** | `/TASK_1_6_FINAL_SITEMAP_ARCHITECTURE.md` (`Section 4`) | Cannot lock final `301`/`410` targets (including `86` pre-hack posts, `24` tags, `19` categories, `/wordpress-seo-speed-optimization/`, `9` root-level casino pages) while `VER-15` is `BLOCKED`. |
| **9. Legal, Data Controller, Official Email & Contact Readiness (`VER-01`–`VER-06`, `VER-17`)** | **INCOMPLETE / BLOCKED** | `PROJECT_STATUS.md` (`Section 3`) | `[OFFICIAL EMAIL PENDING]`, legal entity, Companies House/VAT, ICO, `RH1 4HW` consent, and Resend/Postmark DNS verification are all pending. |

---

## 3. Comprehensive Assessment Across All 9 Required Risk & Blocker Areas

### 1. Completed Task 1.6 Requirements
- Owner Decisions **`#1–#33`** documented and preserved (including `#32` `Not Indexed Pages = SKIPPED BY OWNER` and `#33` Hybrid Digital Agency positioning).
- `305` confirmed `Indexed Pages` (`2026-11-16`) and `766` normalised Wayback paths reconciled against all `56` reconstructed ChatGPT Performance rows (`435` Imp).
- Full `23`-page Hybrid Digital Agency sitemap, `5`-category taxonomy, Homepage/Nav/4-group Footer/Conversion/Schema/`en-GB` rules, `VER-20` 13-capability audit, `VER-15` verification audit, and SEO/GEO/AIO Option A/B comparison all documented without modifying application code.

### 2. Remaining Owner Decisions (Outstanding Owner Decision List)
1. **SEO / GEO / AIO Option A vs Option B:** Approve consolidating GEO + AIO into `/services/ai-search-optimisation` (**Option B**, amending Decision `#2` from `23` to `22` pages) OR retain 3 separate pages (**Option A**), plus launch vs `noindex` hold choice (`/TASK_1_6_SEO_GEO_AIO_REVIEW.md`, `Section 7`).
2. **`VER-20` Capability Confirmations (`6` Questions):** Confirm real delivery ownership (solo/team/partner) for `WordPress`, `WooCommerce`, `React`, generic `API integration`, `Website migration`, and `Technical SEO`, and decide whether `Next.js`, `Payment gateways`, `Custom non-WP eCommerce`, `AI integration`, and `Workflow automation` are held unpublished/`noindex` as Phase 2 expansion (`/TASK_1_6_VER_20_CAPABILITY_REPORT.md`, `Section 4`).
3. **Final Target for `/wordpress-seo-speed-optimization/` (`2` Imp):** Confirm `301` target (`/wordpress-speed-optimisation` vs `/services/search-engine-optimisation`) once `Pages.csv`/`Queries.csv` (`VER-15`) is checked.
4. **Pre-Hack Blog Recovery vs Removal (`VER-16`, `86` WB posts / `28` CSV slugs):** Decide whether valuable UK buyer-intent posts (e.g., `#4`, `#5`, `#6`, `#8`, `#11`, `#15`, `#16`, `#33`, `#41`, `#42`) are recovered into `/guides/`, mapped `301` to service pages, or retired `410`, and resolve malformed pairs (`#5` vs `#13`, `#9` vs `#12`) and off-topic `#29`.
5. **Portfolio Launch Mode (`VER-13`):** Supply `3–5` genuine projects or confirm launching with `/wordpress-projects-portfolio` unpublished and excluded from nav/footer.
6. **Optional Commercial/Proof Decisions (`VER-02`, `VER-07`–`VER-12`, `VER-14`):** Confirm phone/WhatsApp visibility, care-plan pricing publication vs keeping `"Enquire for Pricing"`, VAT status, support hours/backup/Quick Fix scope, starting prices, founding year, and founder/team details (or confirm omitting unverified figures/prices at initial launch).

### 3. Unresolved Technical Risks (Live Site & Workspace Repo)
1. **Silent Lead Loss Bug (`src/components/ContactSection.tsx` lines `48–87`):** Static production `POST /api/contact` fails `404`/`405` on GitHub Pages, falls back silently to unverified `wpcarepoint@gmail.com` FormSubmit inside `catch {}`, and displays fake success.
2. **Zero Outbound Email Backend (`server.ts` lines `596–626`):** `POST /api/contact` only generates a JSON receipt; Resend/Postmark wiring and `SPF`/`DKIM`/`DMARC` DNS verification (`VER-17`) do not exist yet.
3. **Cloudflare Pages SPA Soft-404 Hazard (`wrangler.jsonc` line `9`):** `"not_found_handling": "single-page-application"` returns `HTTP 200` `index.html` for missing/spam URLs; a custom Cloudflare Worker / Pages Function allowlist is required to enforce true `HTTP 410 Gone`, single-hop `301`, and `404` responses (note also `_redirects` cannot emit `410`).
4. **Live vs Workspace Drift & Repo SEO Defects:** Live site (`2026-11-21`) serves broken `hreflang="en-gb"` pointing `/services/*` back to `/`; repo lacks a linked git remote (`VER-18`), carries ~`3.31 MB` unoptimised JPEGs (`VER-19` rejected), `~560 KB` bundle, unused `@google/genai`, orphaned `SiteRecover` routes, and unverified schema/marketing claims (`£59/£119/£229`, `since 2019`, `900+`, `useServiceViews.ts`, `Atelier Lumière UK`, `The Cavendish Clinic`).

### 4. SEO and Migration Risks (`VER-15` `BLOCKED`)
1. **Core Money Pages Absent from `305` `Indexed Pages` (`2026-11-16`):** `/` (`10` Imp), `/wordpress-maintenance-support/` (`98` Imp), and `/wordpress-security-emergency-support/` (`75` Imp) represent **`183 / 435` (`42.1%`)** of reconstructed impressions yet are missing from the `305` `Indexed Pages` snapshot.
2. **`16` Unrelated `/rgc/*` URLs (`25` Imp):** `0/16` exist in `305` Indexed or `766` Wayback — unresolved ChatGPT context cross-contamination vs real hosting bleed.
3. **`54` vs `56` Row Discrepancy & Missing GSC Metrics:** `Clicks`, `CTR`, and `Position` are `Unavailable`; `Links = No Data`; locking `301`/`410` rules from reconstructed data risks losing UK ranking equity or creating wrong redirects.
4. **Root-Level Casino Spam Outside `/blog/`:** `9` root-level casino pages in `305` Indexed (including `#45 /fatpirate-promo-code-review-2026-uk-bonus-payments-mobile-guide/` present in both `305` & `56` CSV) mean Edge `410` rules cannot target `/blog/*` alone — a strict canonical-route allowlist plus verified spam list/pattern handling is mandatory.

### 5. Legal and Contact Blockers (Hard Launch Gates)
- **`VER-01`:** Official business email unresolved (`[OFFICIAL EMAIL PENDING]`; `wpcarepoint@gmail.com` and `contact@wpcarepoint.co.uk` disallowed).
- **`VER-03`:** Permission to publish `Robert Denholm House, Bletchingley Road, Nutfield RH1 4HW` unconfirmed (`DO NOT PUBLISH`).
- **`VER-04`, `VER-05`, `VER-06`:** Legal entity name / sole trader vs Ltd, Companies House number, VAT registration status, ICO Data Protection registration number, and GDPR data-controller notice all missing.
- **Impact (Decisions `#18` & `#24`):** `/privacy-policy`, `/cookie-policy`, and `/terms-and-conditions` must remain unpublished/`noindex`, and the public `/contact` enquiry form **cannot be activated** until verified Privacy & Data Controller details plus `VER-01` & `VER-17` are supplied.

### 6. Capability Verification Blockers (`VER-20`)
- **`0 / 13` capabilities verified** today.
- **`6` `OWNER CONFIRMATION REQUIRED`:** WordPress, WooCommerce, React, generic API integration, Website migration, Technical SEO.
- **`4` `NOT VERIFIED`:** Next.js, Payment gateway integration, GEO, AIO.
- **`3` `FUTURE CAPABILITY`:** Custom non-WordPress eCommerce, AI integration (`@google/genai` unused), Workflow/process automation.
- Without owner verification and explicit scope confirmation, publishing `/services/website-development` (claiming Next.js), `/services/ecommerce-website-development`, `/services/ai-powered-website-development`, `/services/ai-automation-business-process-automation`, `/services/generative-engine-optimisation`, or `/services/ai-search-optimisation` with unverified claims violates Decision `#6` and Decision `#33`.

### 7. Sitemap and URL Conflicts
- **Decision `#2` (`10` `/services/*`, `23` pages) vs SEO/GEO/AIO Option B (`9` `/services/*`, `22` pages):** Pending owner vote.
- **Core URL preservation vs `305` absence:** `/`, `/wordpress-maintenance-support/`, `/wordpress-security-emergency-support/`.
- **`/wordpress-seo-speed-optimization/` (`2` Imp):** Split target conflict between `/wordpress-speed-optimisation` and `/services/search-engine-optimisation`.
- **Blog/Taxonomy/Legacy Conflicts:** `#5` vs `#13` duplicate themes URL, `#9` vs `#12` Elementor overlap, `#29` off-topic domain post, `24` tags (Decision `#28` prohibits blind bulk `410`), `19` categories, `/page/3|4|6/` pagination, and `15` legacy core slugs (`/wordpress-services/`, `/book-a-consultation/`, `/contact-us/`, `/about-us/`, `/leadership/`, `/site-map/`, `/wordpress-hacked-site-repair/`, `/wordpress-speed-optimization/`).

### 8. Missing Evidence Summary
1. Original GSC **`Pages.csv`** (`Performance → Search results → Pages` — exact headers, date range, rows, `Clicks`, `Impressions`, `CTR`, `Position`), plus `Queries.csv` / `Countries.csv` if available (`VER-15`).
2. Live GSC **URL Inspection** results for `/`, `/wordpress-maintenance-support/`, and `/wordpress-security-emergency-support/` (`Not Indexed Pages` remains `SKIPPED BY OWNER`).
3. Verified **Legal / Entity / Email / Address / Email Provider DNS** records (`VER-01`, `VER-03`–`VER-06`, `VER-17`).
4. Verified **Delivery Capability & Proof** records (`VER-07`–`VER-14`, `VER-20`), plus GitHub repo remote & registrar access plan (`VER-18`).

### 9. Exact Requirements for Stage 2 Approval (Stage 2 Prerequisites)
Stage 2 (`Design & Development`) **must remain `NOT STARTED — BLOCKED`** until **all** of the following prerequisites are satisfied:
1. **`VER-15` Unblocked & Final Migration Matrix Locked:** Original `Pages.csv` verified against `/gsc_performance_pages_reconstructed_56.csv`, `54` vs `56` and `16` `/rgc/*` resolved, live URL Inspection confirmed for core pages, and an evidence-backed URL Migration Matrix (`Preserve`, `Recover`, single-hop `301`, verified `410`, allowlist rules) approved.
2. **Owner Architecture & Capability Decisions Locked (`VER-20` + Option A/B):** Option A vs Option B decided, every active page's honest scope confirmed, and unverified/future pages assigned to unpublished/`noindex` or Phase 2 hold.
3. **Minimum Contact & Legal Launch Blockers Verified (or Explicitly Gated):** `VER-01`, `VER-04`–`VER-06`, `VER-03` (`RH1 4HW` publish/omit), and `VER-17` (Resend/Postmark DNS & account) resolved so `/privacy-policy` and `/contact` can be safely engineered (or explicit owner confirmation to keep `/contact` form disabled in initial build).
4. **GitHub Repo & Cut-Over Access Confirmed (`VER-18`):** Staging/deploy workflow (`main` branch, Cloudflare Pages + Worker target) confirmed before editing production codebase.
5. **Explicit Owner Sign-Off on Task 1.6:** Written owner approval closing Stage 1, Task 1.6 and authorising Stage 2 start.

---

## 4. Compact Reference Summaries

### Final Proposed Sitemap Reference
- **Authoritative Spec:** `/TASK_1_6_FINAL_SITEMAP_ARCHITECTURE.md` (`Section 3`: `23`-page baseline across `5` Core/Governance, `5` Primary WordPress/WooCommerce, `10` Supporting Hybrid `/services/*`, and `3` Legal pages).
- **Effective Launch Footprint Pending Decisions:** **`22` pages** if **Option B** (`GEO + AIO` merge) is approved with Legal verified (and Portfolio hidden until `VER-13`), **`19` pages** while Legal pages remain unpublished/`noindex` and Portfolio is hidden, or fewer if Categories 2 (Custom eCommerce) / 3 (AI & Automation) / 5 (`ai-search-optimisation`) are held for Phase 2 under `VER-20`.

### URL Migration Readiness Summary
- **Readiness Status:** **`NOT READY — BLOCKED ON VER-15`** (`~35%` provisional mapping complete; `0%` final `301`/`410` locked).
- **Safe Today:** Canonical destinations for `/`, `/wordpress-design-development`, `/wordpress-maintenance-support`, `/wordpress-security-emergency-support`, `/wordpress-speed-optimisation`, `/woocommerce-development`, `/services`, `/about`, `/contact` are structurally defined.
- **Blocked Today:** Final `301`/`410`/`Recover` rules for `86` pre-hack posts, `28` CSV blog slugs, `24` tags, `19` categories, `/wordpress-seo-speed-optimization/`, `16` `/rgc/*` URLs, `54` vs `56` variance, and exact Edge allowlist + `410` rules for the `258` (`9` root-level) casino spam URLs.

### Legal & Verification Readiness Summary
- **Readiness Status:** **`NOT READY (0/6 Core Legal/Contact Gates Cleared; 0/13 Capabilities Verified)`**.
- **Hard Launch Gate Active:** `/contact` interactive form **MUST stay disabled**, and `/privacy-policy`, `/cookie-policy`, `/terms-and-conditions` **MUST remain unpublished / `noindex` and excluded from `sitemap.xml`** until `VER-01`, `VER-04`, `VER-05`, `VER-06`, and `VER-17` are verified.

---

## 5. Final Recommendation

- **Task 1.6 Final Completion Sign-Off:** **`NOT READY`**
- **Stage 2 Commencement:** **`NOT READY`** (**`NOT STARTED — BLOCKED`**)
- **Immediate Next Step:** Complete the **3 Priority Unblock Inputs** (`VER-15` original `Pages.csv` + core URL Inspection, `VER-20`/Option A-B owner answers, and `VER-01`/`VER-03`–`VER-06`/`VER-17` minimum legal/contact details) so Task 1.6 can be finalised and cleanly submitted for Stage 2 approval.
