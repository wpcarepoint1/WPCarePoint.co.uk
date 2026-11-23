# Task 1.6 — Owner Decision & Verification Pack (`WPCarePoint.co.uk`)

**Last Updated:** 2026-11-23  
**Brand & Positioning:** **WPCarePoint** — *Web Development, eCommerce & AI Solutions Agency* (*"Building, improving and supporting digital businesses."*, Decision `#33`)  
**Readiness Status (`/TASK_1_6_READINESS_REVIEW.md`):** **`IN PROGRESS — OWNER DECISIONS #34–#52 RECORDED (NO-CMS INITIAL LAUNCH CONFIRMED; LEGAL, EMAIL, HOSTING CHECK & MIGRATION DEFERRED/PENDING)`**  
**Task 1.6 Status:** `IN PROGRESS — LEGAL, EMAIL, PRIVACY TRACKING GATE, HOSTING CHECK & MIGRATION ITEMS DEFERRED / PENDING`  
**Stage 2 & Stage 3 Status:** **`NOT STARTED — BLOCKED`**

**Governance Guardrails Applied:**
- Preserves Confirmed Owner Decisions **`#1–#51`** verbatim and adds **`Decision #52`** (`2026-11-23`, `/TASK_1_6_NO_CMS_INITIAL_MVP_ARCHITECTURE.md`: **Owner-Confirmed No-CMS Next.js + React + TypeScript + Tailwind + MDX/Structured Content + Metadata API + GitHub + Cloudflare** initial launch direction, explicitly excluding any CMS, Custom Admin Dashboard, PostgreSQL, AI execution, SaaS, and MCP from Initial Launch).
- Maintains **`26` planned Future Admin Dashboard modules** (`#1–#26`) without adding a `27`th module for **Future Platform Releases (`Releases 2–4+`)**.
- Distinguishes clearly between **Owner-Confirmed Decisions (`#1–#52`)**, **Technical Recommendations** (`Hosting Approach B/C`, GitHub PR MDX workflow), **Proposed Architecture** (lightweight initial MVP vs future `Releases 2–4` stack awaiting later approval), **Deferred Capabilities**, and **Outstanding Dependencies**.
- Preserves `/gsc_performance_pages_reconstructed_56.csv` (`56` rows, `435` Impressions, `Clicks`/`CTR`/`Position` = `Unavailable`, `Pending Original GSC Verification`) unchanged.
- Preserves the **`305` `Indexed Pages`** (`2026-11-16`) and **`766` Wayback** baselines.
- Keeps **Legal & compliance implementation (`VER-04`–`VER-06`)**, **Email infrastructure (`VER-17`)**, **URL migration**, and **`VER-15` (`Pages.csv`) = `DEFERRED BY OWNER`**, **`Not Indexed Pages` = `SKIPPED BY OWNER`**, and **`Links` = `No Data`**.
- Implements **zero** redirects, **zero** production visitor tracking or AI/MCP connections, **zero** application code/database edits, and **zero** DNS or live site changes.

---

## How to Complete This Pack

Reply directly against the numbered sections below (short answers are fine). Until these decisions and verification files are supplied, Task 1.6 remains incomplete and Stage 2 remains **`NOT STARTED — BLOCKED`**.

---

## Section 1: SEO / GEO / AIO Architecture Decision (Option A vs Option B)

*(Reference: `/TASK_1_6_SEO_GEO_AIO_REVIEW.md`)*

Three Category 5 service pages currently overlap heavily in `/src/data/servicePagesData.ts` (lines `467–732`), have **0** entries in the `305` `Indexed Pages` (`2026-11-16`), **0** historical Wayback URLs, **0** impressions in the `56`-row reconstructed dataset, and are rated **`NOT VERIFIED`** for GEO (`#12`) and AIO (`#13`) under `VER-20`.

### Comparison of the Two Owner Options

| Criterion | **Option A: Keep Three Separate Pages** | **Option B: Consolidate into Two Pages** *(Recommended)* |
|---|---|---|
| **URL Impact** | Retains all 3 URLs:<br>1. `/services/search-engine-optimisation`<br>2. `/services/generative-engine-optimisation`<br>3. `/services/ai-search-optimisation` | Retains 2 canonical URLs:<br>1. `/services/search-engine-optimisation`<br>2. `/services/ai-search-optimisation` *(merged GEO + AIO; requires owner decision on `/services/generative-engine-optimisation`)* |
| **Page Count Impact** | Keeps Decision `#2` (`10` `/services/*` pages) and **`23` total planned pages** unchanged. | Amends Decision `#2` (`10 -> 9` `/services/*` pages), reducing total planned sitemap from **`23` to `22` pages**. |
| **Search Intent** | Splits Technical/On-page SEO, Entity/AI Overviews (GEO), and LLM crawler optimisation (AIO) into 3 buying intents that UK SME buyers rarely purchase separately. | Clean 2-intent split: **(1)** Google UK Technical, WordPress & Content SEO vs **(2)** Unified AI Search & Generative Engine Visibility (AI Overviews, ChatGPT, Gemini, Claude). |
| **Keyword Overlap** | **High risk.** `GEO`, `AIO`, `AI Search Optimisation`, and `AI Overviews SEO` compete against each other on a recovering domain with `Links = No Data`. | **Low / Controlled.** Traditional SEO owns crawl/technical/WordPress terms; the unified page concentrates all GEO + AIO + LLM citation terms on one canonical URL. |
| **Migration Implications** | Requires evaluating 2 separate unverified `/services/*` pages (`noindex` vs thin launch) plus resolving `/wordpress-seo-speed-optimization/` (`2` Imp). | Keeps `/services/search-engine-optimisation` untouched (`200`); evaluates a single-hop `301` (`generative-engine-optimisation -> ai-search-optimisation`) or clean `404`/`410` (if never externally linked/indexed, subject to `VER-15`); resolves `/wordpress-seo-speed-optimization/` after `VER-15`. |
| **Recommendation** | **Not recommended** at Stage 2 launch due to duplicated copy (`servicePagesData.ts`), zero GSC demand evidence, and two `NOT VERIFIED` £750 pages. | **Recommended (Subject to Owner Approval & `VER-20` Scope Rule):** Adopt Option B, amend Decision `#2`, and either frame `/services/ai-search-optimisation` conservatively around factual technical deliverables (Entity Schema, semantic HTML, `/llms.txt`, `robots.txt` bot governance — zero guarantees) or keep it `noindex` until verified client outcomes exist. |

### Owner Decision Recorded (`2026-11-23` — Decision `#34`): **`OPTION B APPROVED`**
- **Approved Model:** **Option B (Two Service Pages)** — Keep **SEO** (`/services/search-engine-optimisation`) as a separate service and combine **GEO** + **AIO** under **AI Search Optimisation**.
- **Preferred Canonical URL:** **`/services/ai-search-optimisation/`**
- **Sitemap Page Count Update:** Proposed sitemap updated from **`23` to `22` pages** (subject to architecture and migration checks).
- **Non-Execution & Migration Guardrails:**
  - Do **NOT** execute redirects or delete `/services/generative-engine-optimisation` yet.
  - **Legacy `/wordpress-seo-speed-optimization/` Decision (`Decision #40` — Owner Accepts SEO Recommendation):** Agreed target destination is a dedicated **WordPress Speed Optimisation** page at **`/wordpress-speed-optimisation/`** (covering WordPress performance, Core Web Vitals, loading speed, and relevant technical SEO improvements, while keeping **`/services/search-engine-optimisation/`** as the broader SEO service page in British English). Plan a single-hop `301` only **after** the destination page and URL migration evidence are reviewed — do **NOT** implement redirects yet.

*(Historical comparison retained in `/TASK_1_6_SEO_GEO_AIO_REVIEW.md`.)*

---

## Section 2: `VER-20` Delivery Capability Confirmation (`13` Capabilities)

*(Owner Confirmation Recorded `2026-11-23` — Decision `#35`)*

The owner explicitly confirms that **WPCarePoint can currently deliver all `13` listed capabilities** right now and is **open to accepting client projects** across every one of them:

| # | Capability | Previous Audit Status | Updated Status (`2026-11-23`) | Governance / Proof Qualification |
|---:|---|---|---|---|
| 1 | **WordPress Development** | `OWNER CONFIRMATION REQUIRED` | **`OWNER-CONFIRMED`** | Active commercial delivery capability (not independently audited or portfolio-verified). |
| 2 | **WooCommerce Development** | `OWNER CONFIRMATION REQUIRED` | **`OWNER-CONFIRMED`** | Active commercial delivery capability (do not invent case metrics until portfolio recovered). |
| 3 | **React Development** | `OWNER CONFIRMATION REQUIRED` | **`OWNER-CONFIRMED`** | Active commercial delivery capability (not independently audited or portfolio-verified). |
| 4 | **Next.js Development** | `NOT VERIFIED` | **`OWNER-CONFIRMED`** | Active commercial delivery capability (not classified as future-planned; omit fake case claims). |
| 5 | **Custom Non-WordPress eCommerce** | `FUTURE CAPABILITY` | **`OWNER-CONFIRMED`** | Active commercial delivery capability (reclassified from future-planned; not portfolio-verified). |
| 6 | **Payment Gateway Integration** | `NOT VERIFIED` | **`OWNER-CONFIRMED`** | Active commercial delivery capability (not independently audited or portfolio-verified). |
| 7 | **AI Integration** | `FUTURE CAPABILITY` | **`OWNER-CONFIRMED`** | Active commercial delivery capability (reclassified from future-planned; not portfolio-verified). |
| 8 | **Workflow and Business Process Automation** | `FUTURE CAPABILITY` | **`OWNER-CONFIRMED`** | Active commercial delivery capability (reclassified from future-planned; not portfolio-verified). |
| 9 | **API Integration** | `OWNER CONFIRMATION REQUIRED` | **`OWNER-CONFIRMED`** | Active commercial delivery capability (not independently audited or portfolio-verified). |
| 10 | **Website Migration** | `OWNER CONFIRMATION REQUIRED` | **`OWNER-CONFIRMED`** | Active commercial delivery capability (use factual controlled cut-over wording; no "zero-downtime"). |
| 11 | **Technical SEO** | `OWNER CONFIRMATION REQUIRED` | **`OWNER-CONFIRMED`** | Active commercial delivery capability (must still fix repo SEO bugs in Stage 2). |
| 12 | **Generative Engine Optimisation (GEO)** | `NOT VERIFIED` | **`OWNER-CONFIRMED`** *(Consolidated under `/services/ai-search-optimisation/`)* | Active commercial delivery capability (consolidated per Option B; no fabricated guarantees). |
| 13 | **AI Search Optimisation (AIO)** | `NOT VERIFIED` | **`OWNER-CONFIRMED`** *(Canonical `/services/ai-search-optimisation/`)* | Active commercial delivery capability (consolidated per Option B; not portfolio-verified). |

**Strict Governance Rule:** All `13` capabilities are recorded strictly as **`OWNER-CONFIRMED`** delivery capabilities (open for client work now and **NOT** classified as future-planned). They remain **non-audited / not independently portfolio-verified** until genuine recovered/new portfolio records (`VER-13`) and verified client proof (`VER-12`) are compiled. *(Also confirm delivery model `[in-house / partner]` for `/services/branding-brand-identity` and `/services/digital-marketing-online-growth`, or omit unverified case claims.)*

---

## Section 3: Google Search Console (`VER-15`) Evidence Status

*(Owner Instruction Recorded `2026-11-23` — Decision `#36`)*

- **Original `Performance > Pages` Export (`Pages.csv`):** **`DEFERRED BY OWNER`**.
  - Do **NOT** repeatedly request `Pages.csv` (or `Queries.csv`).
  - Revisit only when it becomes **materially necessary or mandatory** for a specific migration, redirect, indexing, or SEO decision (e.g., before locking final `301`/`410` targets for `/wordpress-seo-speed-optimization/`, `16` `/rgc/*`, or unresolved blog/spam edge cases).
- **Preserved Datasets & Classifications:**
  - `/gsc_performance_pages_reconstructed_56.csv` (`56` rows, `435` Imp, `Clicks`/`CTR`/`Position` = `Unavailable`) remains verbatim as **reconstructed ChatGPT conversation data** — **NEVER** treated as an original GSC export.
  - **`Not Indexed Pages`:** Permanently **`SKIPPED BY OWNER`** (Decision `#32`).
  - **`Links` Report:** **`No Data`**.
- **Remaining Targeted Check (Deferred Trigger / Migration Check):** Live GSC `URL Inspection` for `/`, `/wordpress-maintenance-support/`, and `/wordpress-security-emergency-support/` remains recommended when migration/indexation validation is executed.

---

## Section 4: Legal & Contact Verification (`VER-01`, `VER-03`–`VER-06`, `VER-17`)

*(Owner Partial Inputs Recorded `2026-11-23` — Decision `#37`; Hard Legal & Form Gates Still Active)*

| ID | Verification Item | Owner-Provided Data / Current Status (`2026-11-23`) | Remaining Requirements & Restrictions |
|---|---|---|---|
| **`VER-01`** | **Official Business Email** | **`contact@wpcarepoint.co.uk`** *(Owner-Provided Official Email)* | Recorded as owner-provided official email; pending functional delivery wiring (`VER-17`) & legal notice alignment. Do **NOT** use `wpcarepoint@gmail.com`. |
| **`VER-03`** | **Business Address (Contact Page)** | **`Robert Denholm House, Bletchingley Road, Nutfield RH1 4HW, United Kingdom`** (**`OWNER-APPROVED FOR CONTACT PAGE PUBLICATION` — Decision `#39`**) | Explicitly approved for public display on `/contact` (`WPCarePoint.co.uk` Contact Page). Legal entity/controller (`VER-04`–`VER-06`) still pending for Legal pages (`/privacy-policy`, `/cookie-policy`, `/terms-and-conditions`). |
| **`VER-02` (Channel)** | **Active & Planned Channels** | **Current Channel:** **`Email only`**.<br>**Future Plan:** Call centre for phone calls + Phone/WhatsApp support later. | **STRICT RESTRICTION:** Do **NOT** publish any phone number or WhatsApp contact as an active support channel, and do **NOT** claim a call centre is operational. |
| **`VER-04`** | **Legal Entity & Data Controller** | **`PENDING`** | Must still confirm exact UK legal entity name / sole trader / Ltd status & Data Controller identity. |
| **`VER-05`** | **Companies House & VAT** | **`PENDING`** | Must still confirm Companies House registration number (if Ltd/LLP) and VAT registration / price treatment. |
| **`VER-06`** | **ICO & UK GDPR Retention** | **`PENDING`** | Must still confirm ICO registration status/number, GDPR contact obligations, and enquiry data-retention policy. |
| **`VER-17`** | **Transactional Email Delivery & DNS** | **Provider Selected (`Resend` / `Postmark`) — Account & DNS `PENDING`** | Public `/contact` form **MUST remain disabled** until reliable email delivery (`SPF`/`DKIM`/`DMARC`, Turnstile, tested inbox delivery) & Privacy checks are complete. |

**Legal Publication Gate:** `/privacy-policy`, `/cookie-policy`, and `/terms-and-conditions` **MUST remain unpublished or `noindex`** (and excluded from `sitemap.xml`) until `VER-04`, `VER-05`, and `VER-06` are verified.

---

## Section 5: Portfolio & Blog Recovery, Stage 2 Admin Dashboard, & Commercial Proof

*(Owner Recovery & Admin Dashboard Decisions Recorded `2026-11-23` — Decision `#38`; Full Plan: `/TASK_1_6_PORTFOLIO_BLOG_AND_ADMIN_PLAN.md`)*

### A. Portfolio & Blog Library Recovery (Replacing Earlier "Permanent Removal" Assumption)
- Owner confirms the old site held a **substantial Portfolio and Blog library** that was lost when the legacy website became unavailable. Both are **recovery and rebuilding requirements**, NOT permanent removals.
- **Required Plan Summary (`/TASK_1_6_PORTFOLIO_BLOG_AND_ADMIN_PLAN.md`):**
  1. Collect historical portfolio projects, descriptions, screenshots, and images (owner backups + Wayback Machine).
  2. Recover existing blog articles and original URLs wherever possible (`86` pre-hack Wayback posts; `17` in `305` Indexed; `28` CSV `/blog/*` rows).
  3. Audit all historical content before republishing (accuracy, UK focus, remove spam/duplicates).
  4. Preserve valuable original URLs & SEO history where technically and legally appropriate (never bulk-redirect to `/`).
  5. Log unrecoverable items separately — **never** invent replacement project claims (`VER-13` / Decision `#6`).

### B. Dedicated WPCarePoint Admin Dashboard (`26` Modules), Development Roadmap (`P0–P7`), Technical Architecture & Future AI SaaS Strategy
- Retains **`26` proposed modules** (`#1–#26`: `22`-module baseline + `#23 AI Agent Connections & Permissions`, `#24 Privacy & Consent Centre`, `#25 Knowledge Base & Business Data Hub`, `#26 Workflow Automation Studio`) in `/TASK_1_6_ANALYTICS_MCP_BI_ARCHITECTURE.md` — **no 27th module added**.
- `/TASK_1_6_DEVELOPMENT_ROADMAP_AND_ARCHITECTURE.md`, `/TASK_1_6_ARCHITECTURE_AND_READINESS_REVIEW.md`, & `/TASK_1_6_FUTURE_AI_AGENCY_PLATFORM_STRATEGY.md` (`WPCP-P1.6-V05`, Decisions `#49–#51`) define:
  - **Owner-Confirmed Dual Business Model (`#49`):** Internal Agency Platform + Future Customer-Facing SaaS with strict multi-tenant isolation (**SaaS excluded from Initial Website MVP**).
  - **Owner-Confirmed Human Approval Policy (`#50`):** `5`-tier permission workflow (`Public Audit -> Verified Audit -> Read-Only Connected -> Authorised Staging -> Human-Approved Production`) + `9`-item pre-production approval package + SSRF/DNS-rebinding isolation for submitted customer URLs.
  - **Owner-Confirmed AI Platform & Regular Blog Strategy (`#51`):** `12` logical agent capabilities (not `12` separate infrastructures) + `7`-stage Regular Blog Publishing (`Draft -> AI Review -> Editorial Review -> Owner Approval -> Scheduled -> Published -> Performance Review`) integrated inside **`#3` + `#6` + `Content Intelligence Agent`** (`8` topics, verified-vs-estimate analytics, human-reviewed social/newsletter repurposing).
  - **Proposed Technical Architecture (Unapproved):** `P0–P7` priority, `Releases 1–4`, `MVP` strategy, CMS comparison (`Custom Next.js` vs `Payload v3` vs `Directus`), Multi-Region DB Federation, Backup/DR (`RPO`/`RTO`), `12`-layer QA, `9`-asset Portability, `14` SEO Quality Gates, and `2026–2030` R&D (robotics/physical devices non-MVP only).
- **No implementation authorised:** All features remain **`PLANNED ONLY`** (`NOT IMPLEMENTED`, zero stack pre-approval, tracking & AI connections locked `OFF`).

### C. Remaining Mandatory & Conditional Proof Items (`VER-07`–`VER-14`, `VER-18`, `VER-19`)

| ID | Item | Status (`2026-11-23`) | Remaining Owner Action / Launch Gate |
|---|---|---|---|
| **`VER-18`** | **GitHub Repo & Domain Access** | **`PENDING` (Mandatory Stage 2 Gate)** | Confirm canonical GitHub repository (`main` branch workflow) & registrar/Cloudflare access before Stage 2 deployment. |
| **`VER-19`** | **Visual Assets Replacement** | **`DECIDED FOR REPLACEMENT IN STAGE 2`** | Existing AI images rejected; replace with authentic recovered portfolio screenshots, editorial UI/WordPress mockups, or owner photography in Stage 2. |
| **`VER-07`** | **Care Plan Pricing Publication** | **`HISTORICAL BASELINE ONLY — NOT APPROVED`** | Confirm whether to publish `£65 / £55 / £89 / £179` baseline figures or keep `"Enquire for Pricing"` CTAs (Decision `#13`). |
| **`VER-08`** | **Exact VAT Treatment** | **`PENDING`** | Required if publishing any `£` figures (`VER-07`/`VER-10`). |
| **`VER-09`** | **Support Hours, SLAs & Backups** | **`PENDING`** | Confirm real UK operating hours, honest target response windows (no `24/7` or `< 30 mins`), backup tool/frequency/residency, and Quick Fix boundaries. |
| **`VER-10`** | **Project Starting Prices** | **`PENDING`** | Confirm `"From £..."` starting prices vs `"Quote on Scoping"`. |
| **`VER-11`** | **Actual Founding Year** | **`PENDING`** | Supply real founding year or continue omitting `"since 2019"`. |
| **`VER-12`** | **Project Count & Client Reviews** | **`PENDING`** | Supply genuine verified reviews/metrics only; confirm deletion of synthetic counters (`900+`, `4.9/5`, `useServiceViews.ts`). |
| **`VER-13`** | **Recovered Portfolio Projects** | **`PENDING RECOVERY`** | Compile recovered real projects + screenshots per `/TASK_1_6_PORTFOLIO_BLOG_AND_ADMIN_PLAN.md` (no fake claims). |
| **`VER-14`** | **Founder / Team Bio (`/about`)** | **`PENDING`** | Confirm real leadership/team profiles for `/about` & `/leadership/` URL disposition (`301` vs `410`). |

---

## Section 6: Technical Risk Evidence Register (Workspace & Live Site)

*All file paths and line numbers below were verified directly against the current workspace codebase (`2026-11-23`). Live production items not locally verifiable inside the workspace are explicitly referenced to recorded audit observations in `PROJECT_STATUS.md`.*

### Risk 1: `ContactSection.tsx` Silent Lead-Loss Bug & Unverified Form Fallback *(Critical)*
- **Exact Source File & Lines:** `/src/components/ContactSection.tsx` (lines `48–96`, `134–138`, `303–320`) and `/server.ts` (lines `596–626`).
- **Evidence Supporting the Finding:**
  - In `ContactSection.tsx` lines `48–61`, `handleSubmit` sends `POST /api/contact`. On static hosting (e.g. GitHub Pages or Cloudflare Pages without an active API Worker), `res.ok` fails (`404`/`405`), throwing `'Static host fallback'` (line `60`).
  - The outer `catch` block (lines `66–87`) calls `fetch('https://formsubmit.co/ajax/wpcarepoint@gmail.com', ...)` **without checking the HTTP response**, swallows any network/CORS/activation error in an empty inner `catch {}` (lines `83–85`), and **unconditionally executes `setSubmittedRef(...)` at line `86`**, rendering the green `"Logged"` confirmation view (lines `166–212`).
  - Meanwhile, in `server.ts` lines `596–626`, `POST /api/contact` validates `name` and `email` and returns `HTTP 201` with a generated reference (`WPC-...`), **but contains zero SMTP, Resend, or Postmark outbound delivery logic**.
  - `ContactSection.tsx` lines `303–320` also hardcode unapproved live prices (`£59/mo`, `£119/mo`, `£229/mo`), and lines `92`, `134–138` expose `wpcarepoint@gmail.com`.
- **Potential Impact:** Prospective UK leads receive a fake submission confirmation with a reference ID while **zero enquiry email is delivered or logged**, causing silent commercial lead loss and reputational damage.
- **Recommended Remediation (Stage 2):** Replace client-side FormSubmit fallback with a real Cloudflare Worker `POST /api/contact` endpoint integrated with **Resend** (primary) + **Postmark** (fallback), Turnstile verification, `Idempotency-Key` / Durable Objects duplicate protection, required `4`-option `Issue Type` (`Maintenance` intent), `HTTP 201` acceptance semantics, and honest error UI if delivery fails. Keep form **disabled** until `VER-01`, `VER-04`–`VER-06`, and `VER-17` are verified.
- **Owner Approval Required:** **Yes** — Owner must supply `VER-01` (email), `VER-04`–`VER-06` (privacy controller), and `VER-17` (Resend/Postmark account & DNS verification) and approve Stage 2 start.

### Risk 2: Cloudflare Pages `410` / `301` Limitations & SPA Soft-404 Hazard
- **Exact Source File & Lines:** `/wrangler.jsonc` (lines `7–10`), `/.github/workflows/deploy.yml` (lines `29–32`), `/public/.htaccess` (lines `1–9`), and `/server.ts` (lines `660–688`).
- **Evidence Supporting the Finding:**
  - `wrangler.jsonc` lines `7–10` configure `"assets": { "directory": "./dist", "not_found_handling": "single-page-application" }`. Under this setting, Cloudflare serves `dist/index.html` with `HTTP 200` for any non-existent path instead of `404` or `410`.
  - Standard Cloudflare Pages `_redirects` files do not support `HTTP 410 Gone` status codes, while `/public/.htaccess` (lines `1–9`) only works on Apache servers (ignored on Cloudflare and GitHub Pages).
  - Additionally, `.github/workflows/deploy.yml` lines `30–32` copy `dist/index.html` to `dist/404.html`, and `server.ts` lines `669–687` fall back to `dist/index.html` with `HTTP 200` for unmatched `app.get('*')` routes.
- **Potential Impact:** Hundreds of indexed casino spam URLs (`258` in `305` `Indexed Pages`, including `9` root-level slugs outside `/blog/`), removed legacy slugs, and mistyped paths return **`HTTP 200` Soft-404** instead of true `HTTP 410 Gone` or `404`, delaying Google de-indexation and diluting crawl budget.
- **Recommended Remediation (Stage 2):** Remove `"not_found_handling": "single-page-application"` in Stage 2 Cloudflare architecture and deploy a **Cloudflare Worker / Pages Function** enforcing: (a) a strict valid-route allowlist, (b) single-hop `http -> https`, `www -> apex`, and canonical `301` redirects, (c) verified `HTTP 410 Gone` for confirmed casino spam (including root-level spam) and permanently retired paths, and (d) genuine `HTTP 404` for unknown routes.
- **Owner Approval Required:** **Yes** — Technical architecture planned under Decision `#8`, but actual Worker implementation, `VER-15` final migration matrix, and DNS/Cloudflare deployment require explicit Stage 2 owner approval.

### Risk 3: Live vs Workspace SEO, `hreflang` & Language Compliance Drift
- **Exact Source File & Lines:** `/index.html` (lines `6`, `9–56`, `68–71`, `137`, `177`), `/vite.config.ts` (lines `180–196`), `/src/components/ServiceLandingPage.tsx` (lines `51–89`), `/server.ts` (lines `628–651`, `660–686`), and live URLs `https://wpcarepoint.co.uk/services/*` (recorded in `PROJECT_STATUS.md` Risk `#3`).
- **Evidence Supporting the Finding:**
  - Workspace `vite.config.ts` lines `180–195` now inject per-route `canonical` and `hreflang` URLs during static build (`dist/services/<slug>.html`), whereas `PROJECT_STATUS.md` records that the deployed live site (`2026-11-21`) still served `hreflang="en-gb"` pointing `/services/*` back to `/` (and no git remote exists in the local workspace: `git remote -v` returns `not a git repository`).
  - In workspace code, `ServiceLandingPage.tsx` lines `51–89` update `document.title`, `meta[name="description"]`, `link[rel="canonical"]`, and `og:url` on client-side route transitions, **but do not update `hreflang` `<link>` tags** after initial load.
  - Both `index.html` (lines `6`, `25–54`, `70`, `137`, `177`) and `server.ts` (lines `628–638`, `646–685`) still implement Welsh (`cy`) detection/alternates and `<meta http-equiv="Content-Language">`, conflicting with Decision `#3` (remove `cy` toggle) and Decision `#26` (clean `<html lang="en-GB">`, no `Content-Language` meta).
- **Potential Impact:** Google UK treated live `/services/*` pages with conflicting canonical/`hreflang` signals (`0/10` `/services/*` URLs present in `305` `Indexed Pages` on `2026-11-16`), while Welsh (`cy`) metadata creates unnecessary non-target language signals.
- **Recommended Remediation (Stage 2):** Remove Welsh (`cy`) toggle, `Content-Language` meta, and conflicting alternates; ensure every route renders clean self-referencing `en-GB` `canonical` + `hreflang`; link canonical GitHub repo (`VER-18`) for controlled deployment.
- **Owner Approval Required:** **Yes** — Policy already approved under Decisions `#3` and `#26`; code changes and live deployment require Stage 2 start approval + `VER-18`.

### Risk 4: Unverified Pricing, Demo Proof, Synthetic View Counters & Unverified Schema
- **Exact Source File & Lines:** `/src/data/agencyData.ts` (lines `328`, `494`, `502–536`), `/src/hooks/useServiceViews.ts` (lines `9–76`), `/src/App.tsx` (lines `19`, `98`), `/src/data/translations.ts` (lines `438`, `762`, `821`, `834`, `921`), `/index.html` (lines `162–256`), `/vite.config.ts` (lines `28`, `33`, `46`, `101–108`), and `/src/utils/wxrExport.ts` (lines `70–108`).
- **Evidence Supporting the Finding:**
  - Codebase currently embeds `wpcarepoint@gmail.com`, unconfirmed `RH1 4HW`, `foundingDate: "2019"`, `24/7` & `Under 30 minutes response`, fake `Atelier Lumière UK` and `The Cavendish Clinic` case studies, hardcoded fake `BASELINE_SERVICE_VIEWS` (`142`, `118`, `96`, ...) in `useServiceViews.ts`, and wrong care-plan pricing (`£59/£119/£229`).
- **Potential Impact:** Violates UK advertising accuracy/trust and Owner Decisions `#4`, `#5`, `#6`, `#13`, `#14`; damages B2B credibility upon buyer due diligence.
- **Recommended Remediation (Stage 2):** Purge all demo case studies, `useServiceViews.ts`, unverified `24/7` / `< 30 mins` / `since 2019` claims, and unapproved prices; enforce `"Enquire for Pricing"` + Quick Fix banner + verified factual copy only.
- **Owner Approval Required:** **Partial** — Removal is already mandated by Decisions `#4–#6`, `#13–#14`; publishing replacement genuine values requires `VER-01`, `VER-03`, `VER-07`–`VER-14` owner inputs.

### Risk 5: Unoptimised Media (`~3.2 MB`), Rejected AI Visuals (`VER-19`), Unused `@google/genai`, & Incomplete `sitemap.xml`
- **Exact Source File & Lines:** `/src/assets/images/` (`4` JPEGs: `693K`–`848K`, `~3.2 MB` total), `/package.json` (line `15`: `"@google/genai": "^2.4.0"`), `/public/sitemap.xml` (lines `10–68`), `/index.html` (lines `94`, `112`, `118`), and `/src/components/` (`ArchiveRedirectsPanel.tsx`, `DiagnosticsPanel.tsx`, `PlaybookPanel.tsx`, `RebuildZeroPanel.tsx`, `SupportTicketKit.tsx`).
- **Evidence Supporting the Finding:**
  - `ls -lh src/assets/images/` confirms `4` large unoptimised JPEGs (`693K`–`848K` each); Decision `#20` (`VER-19`) already rejected `hero_agency_studio_1795213974094.jpg` and `service_speed_engineering_1795213974447.jpg`.
  - `@google/genai` in `package.json` line `15` has **0** imports across `src/` and `server.ts`.
  - `public/sitemap.xml` lists all `10` `/services/*` URLs indiscriminately (including unverified/future capabilities and Option A/B overlap slugs) while missing core WordPress/WooCommerce canonicals (`/wordpress-design-development`, `/woocommerce-development`, `/wordpress-maintenance-support`, `/wordpress-speed-optimisation`, `/wordpress-security-emergency-support`, `/services`, `/about`, `/contact`).
- **Potential Impact:** Slow LCP/CLS performance on UK mobile, bloated bundle, wasted sitemap signals on unverified pages, and internal recovery/diagnostic tooling cluttering the public codebase.
- **Recommended Remediation (Stage 2):** Replace rejected JPEGs with WebP/AVIF + responsive `srcset`/`sizes` + `fetchPriority="high"` hero (Decisions `#20`, `#30`), remove unused `@google/genai` & orphaned recovery panels from public bundle, and generate dynamic `sitemap.xml` strictly from published, `HTTP 200`, verified canonical URLs (Decision `#26`).
- **Owner Approval Required:** **Yes** — Option A/B, `VER-20`, `VER-19` visuals, and Stage 2 sign-off required before implementation.

---

## Updated Progress Checklist to Complete Task 1.6 & Unlock Stage 2

1. **[x] Section 1 (`SEO/GEO/AIO` & Speed URL):** **APPROVED (`Option B` — Decision `#34` + Speed URL Decision `#40`)** — `/services/ai-search-optimisation/` canonical, `22`-page sitemap proposal, and dedicated `/wordpress-speed-optimisation/` agreed for `/wordpress-seo-speed-optimization/` while keeping `/services/search-engine-optimisation/` broader SEO (zero redirects executed; single-hop `301` planned only after destination page & migration evidence review).
2. **[x] Section 2 (`VER-20`):** **`OWNER-CONFIRMED`** across all **`13` capabilities** (open for work now; NOT portfolio-verified or future-planned).
3. **[x] Section 3 (`VER-15`):** **`DEFERRED BY OWNER`** — Do not repeatedly request `Pages.csv` (`Not Indexed Pages = SKIPPED BY OWNER`; `Links = No Data`; `56`-row CSV preserved).
4. **[~] Section 4 (`Legal, Privacy Gate & Contact`):** `contact@wpcarepoint.co.uk` provided (email-only; NO phone/WhatsApp/call centre claims) and `RH1 4HW` **approved for Contact Page publication** (`Decision #39`). **DEFERRED BY OWNER / HARD LAUNCH GATES:** `VER-04`–`VER-06` (Legal Entity/Companies House/ICO/retention), `VER-17` (Resend/Postmark email delivery & DNS), and Module `#24` privacy/consent implementation (keeps `/contact` form, Legal pages, GA4/PostHog tracking, session replay, and AI connections disabled until verified).
5. **[~] Section 5 (`No-CMS Initial Launch Decision #52, Future 26-Module AI Platform & Hosting Gate`):**
   - **`OWNER-CONFIRMED Decision #52` (`/TASK_1_6_NO_CMS_INITIAL_MVP_ARCHITECTURE.md`):** Initial `WPCarePoint.co.uk` launch is built **without any CMS** (`Next.js + React + TypeScript + Tailwind + reusable UI components + MDX blog + structured pages/portfolio + Next.js Metadata API + GitHub + Cloudflare + verified compatible hosting`). Explicitly **excludes** Payload CMS, WordPress, Directus, any CMS, Custom Admin Dashboard, PostgreSQL (unless documented need arises), AI execution, SaaS, and MCP from initial launch (superseding `OD-01`/`OD-02` initial-launch CMS proposals while preserving Decisions `#49–#51` and `26` Admin modules strictly for **Future Platform Releases**).
   - **AWAITING OWNER VERIFICATION / DECISION FOR INITIAL LAUNCH:**
     - **Hosting Compatibility (`12`-point cPanel check) & Approach Selection:** Verify unknown cPanel Shared Hosting specs (Node version, RAM/CPU, SSH, Passenger, static export, SSL, backups) and confirm **Approach B (`Static Next.js Export + Cloudflare Pages/Worker`)** vs **Approach C (`Dedicated Node.js Hosting / VPS`)** vs compatible static **Approach A (`cPanel`)** — do NOT purchase hosting or alter DNS yet.
     - **`VER-18`:** GitHub repository URL (`main` branch) & Cloudflare/Registrar access.
     - **`VER-13` / `VER-16` & `VER-07`–`VER-12`/`VER-14`:** Recovered portfolio/blog assets (or launch Portfolio `noindex`), and commercial proof choices.
     - **Future Platform (`Releases 2–4+`, Deferred Beyond Initial Launch):** Later owner approvals for `OD-01`–`OD-06` (`Payload v3` vs Custom Admin, Multi-Region/SaaS Tenant RLS, Backup `RPO`/`RTO`, `P3` Booking vs `#15`).
6. **[ ] Explicit Stage 1 Completion & Stage 2 Sign-Off:** Task 1.6 stays **`IN PROGRESS`**, Stage 2 stays **`NOT STARTED — BLOCKED`**, and Stage 3 stays **`NOT STARTED — BLOCKED`** until `cPanel` 12-point check / Hosting Approach (`A`/`B`/`C`), `VER-18`, deferred legal/privacy/contact/migration gates, and explicit owner Stage 2 start approval are completed (`Planned ≠ Designed ≠ Implemented ≠ Tested ≠ Production-Enabled`).
