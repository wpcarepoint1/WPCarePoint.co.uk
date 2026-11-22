# WPCarePoint.co.uk Rebuild — Project Status

**Last Updated:** 2026-11-22  
**Current Stage:** Stage 1 — Discovery, Verification & Planning Blueprint  
**Current Task:** Task 1.5 — Functionality & User Journey Strategy (`IN PROGRESS`)  
**Implementation Status:** **HOLD / NOT STARTED** (Stage 2 development, package installation, DNS changes, hosting migration, and deployment remain blocked pending explicit owner approval.)

---

## 1. Stage & Task Progress

| Stage / Task | Status | Notes |
|---|---|---|
| Stage 1, Task 1.1: Technology, Architecture & SEO Discovery Audit | **COMPLETED** | Read-only audit of live `https://wpcarepoint.co.uk/`, workspace codebase, DNS, HTTP headers, and Wayback Machine history. |
| Stage 1, Task 1.2: Business Verification & Website Blueprint | **COMPLETED (REVIEWED)** | Blueprint reviewed by owner on 2026-11-22 with formal conditions and page-count correction. |
| Stage 1, Task 1.3: Verification Alignment, Corrected Sitemap, Individual URL Migration Map & Cloudflare Feasibility | **SUBMITTED FOR OWNER REVIEW** | Addresses owner conditions, establishes 23-page sitemap, maps historical URL groups, assesses Cloudflare feasibility, and initiates `PROJECT_STATUS.md`. Final GSC/VER items remain open. |
| Stage 1, Task 1.4: Design & UX Strategy | **COMPLETED (APPROVED WITH FINAL DECISIONS)** | Strategy approved with owner decisions on Care Plan CTA routing, Quick Fix compact banner, image asset inspection & WebP/AVIF rules, Contact Form privacy/launch blocker, FAQPage 1:1 parity, and server-side contact safeguards. |
| Stage 1, Task 1.5: Functionality & User Journey Strategy | **IN PROGRESS** | Planning-only specification for navigation behaviour, contact workflows, enquiry validation, CTA destinations, maintenance/emergency flows, mobile interactions, accessibility, error states, and dependencies. |
| Stage 1, Task 1.6: Search Console Audit & Final Redirect/410 List | **PENDING** | Blocked on Google Search Console access/export from owner. |
| Stage 1, Task 1.7: Verified Copy & Legal Content Finalisation | **PENDING** | Blocked on official email, approved pricing/inclusions, verified portfolio/proof, and legal entity/data controller details. |
| Stage 2: Implementation, Asset Optimisation & Edge Setup | **NOT STARTED (BLOCKED)** | Must NOT begin without explicit owner approval after Stage 1 sign-off. |

---

## 2. Confirmed Owner Decisions

1. **Primary Business Focus:** Prioritise **WordPress Design & Development** and **WooCommerce Development & Support** as core specialisations.
2. **Supporting Capabilities:** Retain all **10 existing broader digital services** at their current `/services/*` capabilities as supporting pillars (`Website Development`, `E-commerce Website Development`, `Custom Web Solutions and Integrations`, `AI-Powered Website Development`, `Branding and Brand Identity`, `Search Engine Optimisation (SEO)`, `Generative Engine Optimisation (GEO)`, `AI Search Optimisation for ChatGPT, Gemini and Claude`, `Digital Marketing and Online Growth`, `AI Automation and Business Process Automation`).
3. **Target Market & Language:** Focus exclusively on **English (UK) — `en-GB`**. Remove the **Welsh (`cy`)** language toggle unless a clear business requirement is identified later.
4. **Official Contact Policy:** Do **NOT** use `wpcarepoint@gmail.com` or `contact@wpcarepoint.co.uk` as the confirmed official enquiry email. Use **`[OFFICIAL EMAIL PENDING]`** in all planning specs until supplied.
5. **Maintenance Pricing Baseline (Internal Planning Only):** Retain historical baseline figures (`Quick Fix: £65 one-time`; `Essential Care: £55/£49/£45`; `Advanced Care: £89/£85/£79`; `Elite Care: £179/£169/£159`) strictly for **internal planning**. Do NOT publish yet and do NOT use current live prices (`£59 / £119 / £229`).
6. **Strict Anti-Fabrication & Proof Removal Rule:** Remove all unverified numbers, ratings, performance metrics, demo case studies (`Atelier Lumière UK`, `The Cavendish Clinic`), and synthetic `localStorage` view counters (`useServiceViews.ts`). Do not invent any reviews, project counts, founding dates, SLAs, or legal details.
7. **Legal Pages Planned:** Keep `/privacy-policy`, `/cookie-policy`, and `/terms-and-conditions` in the sitemap; flag all missing legal details until verified.
8. **Preferred Architecture for Feasibility Planning:** **Cloudflare Pages + Workers** is approved *solely for technical planning and feasibility assessment* — NOT approved for migration, DNS changes, or deployment.
9. **URL Migration Discipline:** Map every historical URL individually. Apply `301` redirects only where a genuine relevant replacement page exists; never bulk-redirect unrelated URLs to `/`; separate confirmed casino spam URLs for `410 Gone` handling after GSC verification.
10. **Project Tracking:** Create and maintain `PROJECT_STATUS.md` in the project root without marking unverified items as completed or approved.
11. **Header & Brand Surface System (Task 1.4):** Clean white header (`#ffffff`) with `#003b4f` navigation text and `#00749c` primary CTA; keep footer and selected feature bands in dark teal (`#003b4f`).
12. **Light-First Theme (Task 1.4):** Remove the light/dark mode toggle; enforce a consistent light-first branded palette (`#ffffff`, `#f7f9fa`, `#2e2e2e`, `#6c757d`, `#00749c`, `#003b4f`, `#00b2d4`).
13. **Care Plans Presentation (Task 1.4):** Retain `Essential`, `Advanced`, and `Elite` layout using `"Enquire for Pricing"` CTAs; do not publish prices, package inclusions, VAT details, contract terms, or SLA commitments until separately approved.
14. **Portfolio & Homepage Section Rules (Task 1.4):** Keep `/wordpress-projects-portfolio` in the planned sitemap, but do NOT publish it or show it in primary nav/footer until genuine projects are verified. Keep Homepage Portfolio (conditional) and UK FAQ as separate sections; use `"Our Working Principles"` and `"Planned Migration & Controlled Launch"` (never "zero-downtime"); treat UK GDPR, PECR, and WCAG 2.2 AA as design/implementation requirements, never certified/guaranteed claims.
15. **Contact Form & Concise Footer (Task 1.4):** Dual-intent enquiry form (`New Website / WooCommerce Projects` vs `Maintenance / Urgent Support`) with NO Calendly/Cal.com integration and NO unapproved `24–48 hour` response commitment. Keep footer concise with 4 logical link groups (do not force all 23 pages into the footer).
16. **Care Plans Destinations & Quick Fix Banner (Task 1.4 Final):** Header `"Care Plans"` -> `/wordpress-maintenance-support`; Homepage `"Explore Maintenance Plans"` -> `/#care-plans`; Individual plan CTAs (`Essential`, `Advanced`, `Elite`) -> `/contact?intent=maintenance&plan=essential|advanced|elite`. Keep compact banner below cards (`"Need a One-Off WordPress Fix?"` / CTA: `"Enquire About a Quick Fix"`). No prices, inclusions, VAT, contract terms, or unverified SLA claims until approved.
17. **Images & Responsive Media Standard (Task 1.4 Final):** `hero_agency_studio_1795213974094.jpg` (`1376x768`) and `service_speed_engineering_1795213974447.jpg` (`1200x896`) inspected — both are AI-generated studio photos containing garbled monitor/UI text and unverified London office/team visuals (owner approval or non-fabricated replacement required; do not fabricate new office/team photos). Stage 2 media spec requires WebP/AVIF conversion, responsive `srcset`/`sizes`, explicit `width`/`height`, eager hero loading (`fetchPriority="high"`), and lazy below-the-fold loading.
18. **Contact Form Privacy & Launch Blocker (Task 1.4 Final):** Clear privacy notice + visible `/privacy-policy` link required on form; marketing consent must NEVER be mandatory for service enquiries (if offered, use a separate optional, unchecked checkbox). Incomplete `/privacy-policy`, missing data controller details, or unverified lawful basis remains a hard **launch blocker** for the public form.
19. **Schema Parity & Form Safeguards (Task 1.4 Final):** `FAQPage` JSON-LD must match visible FAQ text exactly without promising Google FAQ rich results. Planned contact architecture must include server-side validation, duplicate submission protection, spam prevention, and accurate success/error feedback.

---

## 3. Unverified Information & Outstanding Owner Questions

| ID | Category | Item | Current Status |
|---|---|---|---|
| VER-01 | Contact | Official business enquiry email address | `PENDING` (`[OFFICIAL EMAIL PENDING]`) |
| VER-02 | Contact | Business phone / WhatsApp number (publish or omit) | `PENDING` |
| VER-03 | Location | Robert Denholm House, Bletchingley Road, Nutfield `RH1 4HW` permission to publish | `DO NOT PUBLISH UNTIL CONFIRMED` |
| VER-04 | Legal | Registered legal entity name / sole trader / Ltd status | `PENDING` |
| VER-05 | Legal | Companies House number (if Ltd) & VAT registration / treatment | `PENDING` |
| VER-06 | Legal | ICO Data Protection registration number & GDPR contact details | `PENDING` |
| VER-07 | Pricing | Approval to publish `£55/£49/£45`, `£89/£85/£79`, `£179/£169/£159`, `Quick Fix (£65)` | `HISTORICAL REFERENCE ONLY — NOT APPROVED FOR PUBLICATION` |
| VER-08 | Pricing | Exact VAT status (inclusive, exclusive, or not VAT-registered) | `PENDING` |
| VER-09 | SLA / Scope | Actual support hours, response time targets (no 24/7 or `< 30 mins` claims), backup frequency/tool/residency, included monthly engineering hours, and Quick Fix boundaries | `PENDING` |
| VER-10 | Project Pricing | Indicative starting prices on 10 supporting pages (`From £1,450`, etc.) & WooCommerce build pricing | `PENDING VERIFICATION` |
| VER-11 | Proof | Actual agency founding year (replace unverified `since 2019` / `2024-01-15`) | `PENDING` |
| VER-12 | Proof | Real completed project count & verifiable client reviews/platforms | `PENDING` |
| VER-13 | Portfolio | 3–5 real WordPress / WooCommerce projects (or decision to launch without portfolio page initially) | `PENDING` |
| VER-14 | Leadership | Real founder/team names & roles for `/about` (and historical `/leadership/` disposition) | `PENDING` |
| VER-15 | SEO / GSC | Google Search Console property access & export of indexed / historical URLs (especially `/blog/*` spam vs legacy WP posts) | `PENDING` |
| VER-16 | Blog Strategy | Decision on whether to restore/rewrite any of the 86 pre-hack WordPress blog articles or retire `/blog/*` cleanly | `PENDING` |
| VER-17 | Email Provider | Choice & account access for transactional email API (e.g. Resend / Postmark / Brevo) for Cloudflare Worker `/api/contact` | `PENDING FEASIBILITY REVIEW` |
| VER-18 | Brand & Repo | Confirm GitHub repository location (`main` branch workflow) & domain registrar access for future cut-over planning | `PENDING` |
| VER-19 | Visual Assets | Approve or choose non-fabricated replacement for inspected AI-generated `hero_agency_studio_1795213974094.jpg` and `service_speed_engineering_1795213974447.jpg` (contain garbled UI text / non-agency office visuals) | `PENDING OWNER DECISION` |

---

## 4. Corrected Sitemap Summary (23 Active Pages — Overlap Resolved)

Earlier drafts cited "20 pages" while listing 25 due to overlaps across Core, WordPress, and Supporting pages. The overlap-free structure is **23 active pages** (plus 1 optional future conditional section):

- **Core Pages (`5`):** `/` (Home), `/services` (Services Hub), `/wordpress-projects-portfolio` (Portfolio — planned in sitemap, **unpublished & hidden from nav/footer until real projects verified**), `/about` (About & Agency Governance), `/contact` (Dual-Intent Enquiry & Consultation — consolidates `/contact` + `/book-a-consultation`).
- **Primary WordPress & WooCommerce Pages (`5`):** `/wordpress-design-development` (includes Redesign), `/woocommerce-development`, `/wordpress-maintenance-support`, `/wordpress-speed-optimisation`, `/wordpress-security-emergency-support` (consolidates Security + Hacked Site Repair). *(WordPress SEO is integrated cleanly with `/services/search-engine-optimisation` to avoid cannibalisation.)*
- **Existing Supporting Digital Service Pages (`10`):** `/services/website-development` (Non-WP / Bespoke React & Next.js focus), `/services/ecommerce-website-development` (Broader / Headless / Multi-channel commerce focus), `/services/custom-web-solutions-integrations`, `/services/ai-powered-website-development`, `/services/branding-brand-identity`, `/services/search-engine-optimisation`, `/services/generative-engine-optimisation`, `/services/ai-search-optimisation`, `/services/digital-marketing-online-growth`, `/services/ai-automation-business-process-automation`.
- **Legal Pages (`3`):** `/privacy-policy`, `/cookie-policy`, `/terms-and-conditions` *(draft placeholders/missing entity details marked for verification before publication).*

---

## 5. Known Technical & SEO Risks

1. **Silent Lead Loss Bug (Live Production — Critical):** In `src/components/ContactSection.tsx` (lines 48–87), static GitHub Pages returns 404/405 for `POST /api/contact`, falls back to `https://formsubmit.co/ajax/wpcarepoint@gmail.com` inside an empty `catch {}`, and always displays a fake confirmation screen even when delivery fails or FormSubmit is unactivated.
2. **Zero Outbound Email Implementation on Backend:** `server.ts` (`POST /api/contact`, lines 596–626) only returns a JSON receipt (`WPC-...`); it contains no SMTP or HTTP transactional email provider integration.
3. **Production vs Workspace Drift:** Live `wpcarepoint.co.uk` (deployed `2026-11-21`) still serves the `hreflang="en-gb"` bug pointing `/services/*` back to `/` and lacks `Content-Language` headers. Local workspace contains fixes not yet deployed (and no git remote is linked in the local workspace).
4. **Live Unverified Claims & Wrong Pricing:** Live site currently publishes `£59 / £119 / £229`, `wpcarepoint@gmail.com`, `Atelier Lumière UK`, `The Cavendish Clinic`, `900+`, `4.9/5`, `98/100`, `since 2019`, and `useServiceViews.ts` fake `localStorage` counters.
5. **Cloudflare Pages `_redirects` & `wrangler.jsonc` Soft-404 Hazard:** Cloudflare Pages `_redirects` does not support `HTTP 410 Gone`, and current `wrangler.jsonc` sets `"not_found_handling": "single-page-application"`, which would serve `HTTP 200` `index.html` instead of `410` or `404`. Custom Cloudflare Worker / Pages Function routing is required.
6. **Historical Casino Spam Footprint:** Wayback Machine CDX recorded **~639+ post-hack casino/gambling `/blog/*` URLs** (July–August 2026) mixed alongside **86 pre-hack WordPress blog posts**, **18 category archives**, **24 tag archives**, and **15 non-blog core URLs**. Exact live Google index impact requires Search Console inspection.
7. **Unoptimised Media & Unused Code Bloat:** Four JPEGs in `src/assets/images/` total ~3.31 MB (`709–868 KB` each); live bundle JS is `~560 KB`; orphaned `SiteRecover` components/routes remain in the repository; `deploy.yml` creates a soft-404 `dist/404.html`.

---

## 6. Recommended Next Action

1. Review **Stage 1, Task 1.5: Functionality & User Journey Strategy** and confirm the remaining functional/asset choices (`VER-19` image decision, email delivery provider choice, emergency triage fields, and duplicate-submission cooldown preference).
2. Provide **Google Search Console export/access** (or URL coverage list) to unblock **Task 1.6** (`/blog/*` spam vs legacy WP post `410`/`301` finalisation).
3. Supply **VER-01 through VER-18** confirmations (official email, data controller/Privacy Policy details, approved care plan pricing/inclusions, and real portfolio/proof) prior to Task 1.7 copy finalisation and any Stage 2 approval.

---

## 7. Files Created or Modified

- **Created:** `/PROJECT_STATUS.md` (Stage 1 tracking document).
- **Updated:** `/PROJECT_STATUS.md` (marked Task 1.4 `COMPLETED`, recorded final Task 1.4 owner decisions & image inspection results, and opened **Task 1.5: Functionality & User Journey Strategy** as `IN PROGRESS`).
- **Modified Application Files:** None. (All website source files, routes, CSS, configs, packages, DNS, and live deployments remain untouched.)
