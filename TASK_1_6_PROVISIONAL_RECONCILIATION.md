# Task 1.6 & Stage 3 Provisional URL Reconciliation and Legacy Redirect Decision Map (`WPCP-P2.13-V01`)

**Initial Reconciliation Date:** 2026-11-23  
**Latest Audit Update (`WPCP-P2.13-V01`):** 2026-11-28  
**Status:** `PROVISIONAL — /site-map/ IMPLEMENTED LOCALLY (16 ROUTES); 2026-02-15 WAYBACK SECURITY SNAPSHOT VERIFIED (OUTCOME A: 301 APPROVED FOR FUTURE IMPLEMENTATION); STAGE 3 PRODUCTION REDIRECTS REMAIN UNEXECUTED (VER-15 DEFERRED BY OWNER)`  
**Stage 3 Deployment Status:** `NOT READY — ZERO 301/410 REDIRECTS OR HOST CONFIG EDITS EXECUTED (FULL P2.13 PACKAGE IN /TASK_2_13_READINESS_AND_WAYBACK_REPORT.md)`  
**Decisions Preserved:** Confirmed Owner Decisions `#1–#63` preserved verbatim (`Not Indexed Pages`: `SKIPPED BY OWNER`; `Links`: `No Data`).

---

## `WPCP-P2.13-V01` Wayback Security Snapshot Verification Addendum (`2026-11-28`)

- **`/wordpress-security-emergency-support/` (`75` Imp) — Condition Cleared (`Outcome A: 301 APPROVED FOR FUTURE IMPLEMENTATION`):** Verified exact `2026-02-15` Wayback snapshot (`https://web.archive.org/web/20260215043121/https://wpcarepoint.co.uk/wordpress-security-emergency-support/`, `HTTP/2 200`, `507,356` bytes original HTML). Confirmed historical page covered UK emergency WordPress rescue, hacked-site/malware cleanup, database/plugin/theme fixes, security improvements, and no-contract one-time fixes — directly covered by `/services/website-care-support/` (while excluding banned `24/7`, `"within hours"`, `Schedule a Call`, `7+ Years`, `100k+ users`, `"full refund"` claims per `#58`). **Zero redirects implemented today**; future single-hop `301 -> /services/website-care-support/` remains Stage 3 gated pending Hostinger/Cloudflare setup (`VER-18`).

---

## `WPCP-P2.12-V01` Execution & Legacy Security Audit Addendum (`2026-11-27`)

*Preserves the `WPCP-P2.11-V01` addendum, Part E, and the `2026-11-23` 56-row matrix verbatim below while recording two verified `WPCP-P2.12-V01` updates:*

- **`/site-map/` Implemented Locally (`HTTP 200`, `16`th Canonical Route):** Built `SiteMapPageView.tsx` + `siteMapPageData.ts`, added subtle footer link, updated `App.tsx`, `server.ts`, `vite.config.ts`, `/public/sitemap.xml`, `/public/llms*.txt`, `verify-build-artifacts.mjs`, and `qa-local-server.mjs` (`16` routes verified via `verify:build` and `112` Playwright checks). Restores a URL indexed as recently as `2026-10-20` in the `305`-URL GSC dataset without publishing legal, blog, portfolio, or legacy URLs.
- **`/wordpress-security-emergency-support/` (`75` Imp) Read-Only Relevance Audit (`TASK_1_6_READINESS_REVIEW.md` `Part D10`):** Inspected `WEBSITE_CARE_SUPPORT_PAGE_DATA` (`/src/data/dedicatedServicePagesData.ts`, lines `1635–2049`), confirming explicit coverage for security hardening (`Capability 02`), malware/injected-spam cleanup & forensic hacked-site recovery (`FAQ wc-faq-5`), standalone non-retainer fixes (`#one-off-fixes`), and honest email emergency triage (`#care-emergency`). Because **zero raw legacy HTML copy** is saved in the local workspace, **Option A (`Single-Hop 301 -> /services/website-care-support/`) is recommended as safer than `Option B (410 Gone)`, strictly conditional on inspecting one `2026-02-15` Wayback HTML snapshot before Stage 3 Edge execution**. Zero `301` or `410` rules were implemented.

---

## `WPCP-P2.11-V01` Reconciled Owner Direction Addendum (`2026-11-27`)

*Preserves Part E (`WPCP-P2.6–P2.10`) and the `2026-11-23` 56-row reconciliation matrix verbatim below while recording the owner's confirmed Part B-2 / B-4 directions (all remaining strictly unexecuted / gated until Hostinger plan purchase & verification, Cloudflare verification, and explicit Stage 3 approval):*

- **Hosting Context Update (`#55`):** Current origin is **Namecheap Shared Hosting with cPanel**; planned future hosting is **Hostinger hPanel** (planned purchase next month). Hostinger redirect/Edge capability (`.htaccess` vs Cloudflare proxy/Rules/Worker) remains `UNVERIFIED`.
- **`/wordpress-maintenance-support/` (`98` Imp):** Owner selected single-hop **`301 -> /services/website-care-support/`** (gated on host compatibility & Stage 3 approval).
- **`/wordpress-security-emergency-support/` (`75` Imp):** Owner selected **`301 -> /services/website-care-support/` ONLY after confirming content relevance** (`Part D10` completed read-only; Option A `301` recommended conditional on `2026-02-15` Wayback HTML snapshot check).
- **`/wordpress-design-development/` (`0` Imp):** Owner selected single-hop **`301 -> /services/website-development/`**.
- **`/woocommerce-development/` (`0` Imp):** Owner selected single-hop **`301 -> /services/ecommerce-development/`**.
- **`/leadership/`:** Owner selected **`410 Gone`** *if no verified equivalent exists*.
- **`/site-map/`:** Owner approved creating a **useful HTML sitemap page** (`HTTP 200`; now implemented locally in `WPCP-P2.12-V01`, bringing active local routes to `16`).
- **Spam, Unknowns & Release 1 Scope (`#57`):** Core `15` routes + approved `/site-map/` (`16` total) for Release 1 (`Blog` and `Portfolio` remain Wave 2 outside the launch index); exact, verified spam URLs -> `410` (do **NOT** invent spam paths); unrelated unknown URLs -> `404`; **zero blanket homepage redirects**.

---

## Part E (`WPCP-P2.6-V01`): Provisional Legacy Redirect Decision Map & Conflict Audit (`2026-11-26`)

*(Governance Rules Applied: Zero invented destinations; zero bulk redirects to `/`; zero spam-to-service redirects; provisional proposals only — nothing implemented in Cloudflare, hosting, `.htaccess`, `vercel.json`, or app code.)*

### 1. Comprehensive Historical URL & URL-Group Redirect Map

| Historical URL / URL Group | Evidence Source | Proposed Action | Proposed Destination *(if supported)* | Reason for Proposed Action | GSC Clicks / Imp / Backlinks | Wayback Evidence | Confidence | Approval Required | Final Status |
|---|---|---|---|---|---|---|---|---|---|
| **`/` (Homepage)** | `56` CSV (`#1`); `766` WB; `index.html`; `App.tsx` | **`KEEP`** | `/` (`200` Canonical) | Primary agency homepage implemented locally; absent from `305` Indexed (`2026-11-16`) — requires URL Inspection | Clicks/Links: Unavailable; Reconstructed: `10` Imp (`#1`) | Present (`2026-01-13`) | **HIGH** *(Route)* / **MEDIUM** *(Indexation cause)* | Owner (`URL Inspection` check) | **KEEP (`200` Active Locally)** |
| **`/services/`, `/about/`, `/contact/`, `/services/website-development/`, `/services/custom-web-solutions-integrations/`, `/services/ai-powered-website-development/`, `/services/branding-brand-identity/`, `/services/digital-marketing-online-growth/`, `/services/search-engine-optimisation/`, `/services/ai-search-optimisation/`, `/wordpress-speed-optimisation/`** | `App.tsx`; `dist/`; `TASK_1_6_FINAL_SITEMAP_ARCHITECTURE.md` | **`KEEP`** | Self (`200` Trailing-Slash Canonical) | Implemented locally in Stage 2 (`WPCP-P2.1`–`P2.4`) with matching prerender HTML & JSON-LD; ensure non-trailing-slash resolves via single-hop `301` at Edge | `0` Imp in `56` CSV; `Links`: No Data | `/wordpress-speed-optimisation/` (`Decision #40`); `/services/*` (`2026-11-21` live) | **HIGH** | Owner (`Stage 3 Go-Live`) | **KEEP (`200` Active Locally)** |
| **`/wordpress-maintenance-support/`** | `56` CSV (`#2`); `766` WB; `TASK_1_6_FINAL_SITEMAP_ARCHITECTURE.md` (`#13`) | **`PENDING OWNER INPUT`** *(Recommend Single-Hop `301` -> `/services/website-care-support/` for lean Release 1 OR build Dedicated `200` page)* | `/services/website-care-support/` (`301` recommended) **OR** Self (`200` if built) | **Highest reconstructed impression URL (`98` Imp) & absent from `305` Indexed.** Stage 2 built `/services/website-care-support/` with full Essential/Advanced/Elite Care Plans & Quick Fix coverage (note Decision `#16` amendment required if consolidated via `301`). See full analysis in `/TASK_1_6_READINESS_REVIEW.md` (`Part A4`). | Clicks/Links: Unavailable; Reconstructed: **`98` Imp (`#2`)** | Present (`2026-02-15`) | **HIGH** *(Coverage Match)* / **MEDIUM** *(Drop Cause)* | **Owner + SEO Approval Mandatory** | **`PENDING OWNER INPUT`** |
| **`/wordpress-security-emergency-support/`** | `56` CSV (`#3`); `766` WB; `TASK_1_6_FINAL_SITEMAP_ARCHITECTURE.md` (`#15`) | **`PENDING OWNER INPUT`** *(Single-Hop `301` -> `/services/website-care-support/` OR Dedicated `200` Urgent Page)* | `/services/website-care-support/` (`301`) **OR** Self (`200` if urgent triage standalone approved) | **Second-highest reconstructed impression URL (`75` Imp) & absent from `305` Indexed.** Security hardening, malware cleanup & emergency triage are already inside `/services/website-care-support/` (`Capabilities 02/04` & `#care-safeguards`). Build `200` only if separate urgent funnel is explicitly desired. | Clicks/Links: Unavailable; Reconstructed: **`75` Imp (`#3`)** | Present (`2026-02-15`) | **HIGH** *(Topic Fit)* / **MEDIUM** *(Search Demand)* | **Owner + SEO Approval Mandatory** | **`PENDING OWNER INPUT`** |
| **`/wordpress-design-development/` & `/woocommerce-development/`** | `TASK_1_6_FINAL_SITEMAP_ARCHITECTURE.md` (`#6`, `#10`); `766` WB (`/wordpress-design-development` only; `0` WB hits for `/woocommerce-development/`) | **`PENDING OWNER INPUT`** *(Recommend Single-Hop `301` -> `/services/website-development/` & `/services/ecommerce-development/`)* | `/services/website-development/` & `/services/ecommerce-development/` (`301`) | `0` Imp in `56` CSV & `0` in `305` Indexed for both; `/woocommerce-development/` also has `0` Wayback history. Stage 2 `/services/website-development/` & `/services/ecommerce-development/` already cover both WordPress & WooCommerce HPOS fully without content duplication. | `0` Imp in `56` CSV; `Links`: No Data | `/wordpress-design-development` in `766` WB; `/woocommerce-development/` **`0` WB** | **HIGH** *(Consolidate)* | **Owner + SEO Approval** | **`PENDING OWNER INPUT`** |
| **`/wordpress-seo-speed-optimization/`** *(US spelling legacy)* | `56` CSV (`#27`); `766` WB; `OWNER_DECISION_PACK.md` (`Decision #40`) | **`301 REDIRECT`** *(Planned — Not Executed)* | **`/wordpress-speed-optimisation/`** | Owner accepted SEO recommendation (`Decision #40`); `/wordpress-speed-optimisation/` page is now built locally; single-hop `301` awaiting migration review & execution | Clicks/Links: Unavailable; Reconstructed: `2` Imp (`#27`) | Present (`2026-02-15`) | **HIGH** | Owner (`Final Edge Execution Sign-Off`) | **PROVISIONAL (`Decision #40` Target Agreed)** |
| **`/services/generative-engine-optimisation/`** *(and trailing-slash variant)* | `public/sitemap.xml`; `App.tsx` (`lines 27–28`); `OWNER_DECISION_PACK.md` (`Decision #34`) | **`301 REDIRECT`** *(Option B — Hold Unexecuted)* | **`/services/ai-search-optimisation/`** | Consolidated into `/services/ai-search-optimisation/` via Decision `#34`. Note: Decision `#34` explicitly prohibited deleting/redirecting permanently until migration checks complete | `0` Imp in `56` CSV; `0` in `305` Indexed | Live `2026-11-21` sitemap (`/public/sitemap.xml`) | **HIGH** | Owner (`Stage 3 Redirect Execution`) | **PROVISIONAL (`Option B` Target)** |
| **`/services/ecommerce-website-development/` & `/services/ai-automation-business-process-automation/`** | `public/sitemap.xml`; `public/llms.txt`; `App.tsx` (`lines 23–26`) | **`301 REDIRECT`** *(Edge Normalisation Needed)* | **`/services/ecommerce-development/`** & **`/services/ai-business-automation/`** | `2026-11-21` live `sitemap.xml` & `llms.txt` exposed longer slugs, while Stage 2 (`WPCP-P2.2-V02`) implemented shorter `/services/ecommerce-development/` & `/services/ai-business-automation/` (`App.tsx` only normalises client-side!) | `0` Imp in `56` CSV; `Links`: No Data | Live `2026-11-21` sitemap | **HIGH** | Owner + SEO Approval | **PROVISIONAL (`301` Edge Parity Required)** |
| **`/wordpress-services/`** | `305` Indexed (`line 62`, crawled `2026-09-23`); `56` CSV (`#19`); `766` WB | **`301 REDIRECT`** *(Provisional)* | **`/services/`** | Still indexed in `305` (`2026-09-23`) and present in reconstructed performance (`3` Imp); `/services/` Hub now built | Clicks/Links: Unavailable; Reconstructed: `3` Imp (`#19`) | Present (`2026-02-15`) | **HIGH** | Owner + SEO Approval | **PROVISIONAL** |
| **`/contact-us/` & `/book-a-consultation/`** | `56` CSV (`#44`, `#24`); `766` WB | **`301 REDIRECT`** *(Provisional)* | **`/contact/`** | Legacy contact & consultation slugs (`1` Imp + `2` Imp); `/contact/` page is built (email-only). Confirm alongside Calendly/booking exclusion (`Decision #15`) | Clicks/Links: Unavailable; Reconstructed: `1` + `2` Imp | Both present (`2026-02-15`) | **HIGH** | Owner Approval | **PROVISIONAL** |
| **`/about-us/`** | `766` WB; `TASK_1_6_FINAL_SITEMAP_ARCHITECTURE.md` (`#4`, `Sec. 4`) | **`301 REDIRECT`** *(Provisional)* | **`/about/`** | Direct canonical successor `/about/` is now built locally | `0` Imp in `56` CSV | Present in `766` WB | **HIGH** | Owner Approval | **PROVISIONAL** |
| **`/leadership/`** | `766` WB; `PROJECT_STATUS.md` (`VER-14`) | **`REVIEW REQUIRED`** | `/about/` (`301`) **OR** `410 GONE` | Depends on `VER-14` (`AboutPageView.tsx` omits personal leadership bios); no backlink data (`Links = No Data`) | `0` Imp in `56` CSV | Present in `766` WB | **LOW / MEDIUM** | Owner (`VER-14` Input) | **`NO DECISION`** |
| **`/site-map/`** | `305` Indexed (`line 27`, crawled `2026-10-20`); `766` WB | **`REVIEW REQUIRED`** | **`/services/`** (`301`) **OR** **`410 GONE`** | Still indexed in `305` (`2026-10-20`); an HTML sitemap page is NOT part of the `22`-page sitemap, whereas `/services/` acts as central navigation hub | `0` Imp in `56` CSV; `Links`: No Data | Present in `766` WB | **MEDIUM** | Owner + SEO Approval | **`NO DECISION`** |
| **`/wordpress-speed-optimization/`** & **`/wordpress-hacked-site-repair/`** | `766` WB; `TASK_1_6_FINAL_SITEMAP_ARCHITECTURE.md` (`Sec. 4`) | **`301 REDIRECT`** *(Provisional)* | `/wordpress-speed-optimisation/` & `/services/website-care-support/` *(or dedicated security URL if built)* | Legacy variant slugs from `766` WB baseline matching speed & emergency repair topics | `0` Imp in `56` CSV | Present in `766` WB | **MEDIUM** | Owner + SEO Approval | **PROVISIONAL** |
| **Core Valuable Pre-Hack Blog Posts (`86` WB total; `17` in `305`; `28` `/blog/*` rows in `56` CSV incl. `#4` `54` Imp, `#5` `40` Imp, `#6` `25` Imp, `#8` `19` Imp, `#11`, `#15`, `#16`, `#21`, `#23`, `#28`, `#33`, `#35`, `#39`, `#41`, `#42`)** | `766` WB (`86` pre-hack); `305` Indexed (`17` posts); `56` CSV (`28` rows = `213` Imp); `TASK_1_6_PORTFOLIO_BLOG_AND_ADMIN_PLAN.md` | **`CONTENT RECOVERY REQUIRED`** *(Preserve original `/blog/<slug>/` where recovered OR individual topic `301` OR `410`)* | Original `/blog/<slug>/` (`MDX`) once recovered; **never bulk-redirect to `/`** | Owner confirmed blog library recovery requirement (`Decision #38`, `#51`, `#52`); `17` posts remain indexed as of `2026-10-20` and carry `213` reconstructed Imp. No `/blog/*` files exist in codebase yet | Clicks/Links: Unavailable; Reconstructed: `213` Imp (`28` rows) | `86` pre-hack posts in `766` WB (`2026-02`–`03`) | **MEDIUM** *(Awaiting Wayback text audit & `VER-15`)* | **Owner Editorial & Scope Sign-Off (`VER-16`)** | **`CONTENT RECOVERY REQUIRED`** |
| **Malformed / Duplicate / Off-Topic Pre-Hack Blog Rows (`#13 /blog/https-wpcarepoint-co-uk-blog-free-wordpress-themes-to-build/`, `#9 /blog/error-best-top-elementor-themes-and-templates/`, `#29 /blog/buy-expired-domain-name/`, `#7`, `#34`)** | `56` CSV; `305` Indexed (`#13`, `#7`, `#34` indexed); `766` WB | **`REVIEW REQUIRED`** | `#13 ->` `/blog/free-wordpress-themes/` (if recovered) or `410`; `#29 ->` `410 GONE` | `#13` is a URL-in-slug duplicate of `#5`; `#9` overlaps `#12 /blog/elementor/`; `#29` (`buy-expired-domain-name`) is off-topic | Clicks/Links: Unavailable; Reconstructed: `#9` (`10`), `#13` (`4`), `#29` (`1`) | Present in `766` WB | **MEDIUM** | Owner (`VER-16` Audit) | **`REVIEW REQUIRED`** |
| **Historical `/blogs/` Hub** | `766` WB; `TASK_1_6_FINAL_SITEMAP_ARCHITECTURE.md` (`Sec. 4`) | **`CONTENT RECOVERY REQUIRED`** / **`301`** *(Conditional)* | `/blog/` *(only when recovered MDX blog launches)* **OR** `410` / hold | Cannot redirect `/blogs/` to `/blog/` while `/blog/` returns `404`/does not exist | `0` Imp in `56` CSV | Present in `766` WB | **MEDIUM** | Owner (`VER-16` Scope) | **`BLOCKED ON /blog/ LAUNCH`** |
| **Taxonomy (`19` `/blog/category/*` incl. `/blog/category/wordpress-seo/`, `24` `/blog/tag/*`)** | `766` WB (`19` cat, `24` tag); `305` Indexed (`/category/wordpress-seo/`) | **`REVIEW REQUIRED`** *(Decision `#28` prohibits blind bulk `410` on `24` tags)* | Recover core category archives if `/blog/` launches, else `410` per audit | Decision `#28` explicitly mandates individual historical/value review before assigning `301` or `410` | `0` Imp in `56` CSV; `Links`: No Data | Present in `766` WB | **LOW / MEDIUM** | Owner (`VER-16` Taxonomy Audit) | **`REVIEW REQUIRED`** |
| **Blog Pagination (`/blog/category/wordpress/page/3/`, `/page/4/`, `/page/6/`)** | `56` CSV (`#30` `page/3/` `1` Imp); `305` Indexed (`page/4/`, `page/6/`) | **`410 GONE`** *(Provisional)* | None (`HTTP 410`) | Deep paginated archive pages from compromised WordPress install | Reconstructed: `1` Imp (`#30`) | Partial (`page/4`, `page/6` in `305`) | **HIGH** | Owner Confirmation | **PROVISIONAL `410 GONE`** |
| **Confirmed Casino / Gambling & Injected Spam (`258` casino incl. `9` root-level `/fatpirate-*`, `/pinco-*`, `/pin-up-*`, `/olimp-*`, `/ronycasino-*` + `19` injected in `305`; `#20`, `#31`, `#36`, `#45` in `56` CSV; `622` post-hack `/blog/*` WB)** | `Paste_November_23...` (`305` Indexed); `56` CSV; `766` WB (`622` July–Aug 2026) | **`410 GONE`** *(Requires Strict Edge Allowlist + Pattern/List Rule)* | None (`HTTP 410`; **NEVER `301` to `/`**) | Confirmed post-hack gambling/malware injection (Decision `#28`). Note: `9` spam URLs sit at **root depth** (`/`), proving `/blog/*`-only rules are insufficient | Reconstructed: `5` Imp (`#20` `2`, `#31` `1`, `#36` `1`, `#45` `1`) | `622` post-hack WB paths | **HIGH** *(for confirmed `258` + `4` CSV; **`REVIEW REQUIRED` on `6` uncertain in `305`**)* | Owner (`Final Stage 3 Edge Worker Approval`) | **PROVISIONAL `410 GONE`** |
| **Anomalous `/rgc/*` Medical / Doctor URLs (`15` `/rgc/doctors/*` + `/rgc/about-us/` = `16` rows)** | `56` CSV (`#14, #17, #18, #25, #26, #46–#56`) | **`NO DECISION` (`REVIEW REQUIRED`)** | **None (`0` `301`/`410` assigned)** | **`0/16` in `305` Indexed (`2026-11-16`) and `0/16` in `766` Wayback.** Likely ChatGPT dataset cross-contamination rather than real `wpcarepoint.co.uk` URLs (Decision `#31` / `VER-15`) | Reconstructed: `25` Imp (`5.7%` of `435`); Original GSC: Unavailable | **`0 / 16` in `766` WB** | **HIGH (Contamination Hypothesis)** / **BLOCKED (`VER-15`)** | Owner (`Check `Pages.csv` if materially necessary or confirm non-ownership`) | **`NO DECISION` (`DO NOT REDIRECT`)** |

---

### 2. Redirect Chain, Loop & Infrastructure Conflict Audit (`WPCP-P2.6` – `WPCP-P2.8` Updated)

Direct codebase inspection verified **`5` concrete conflict hazards** affecting Stage 3 Edge routing (documented only — zero deployment config edits made in `P2.7`/`P2.8`):

1. **Cloudflare Pages SPA Soft-404 Conflict (`/wrangler.jsonc` line `9`):** `"not_found_handling": "single-page-application"` serves `dist/index.html` with **`HTTP 200`** on every spam/missing path (`258` casino spam URLs + `622` post-hack URLs), defeating `HTTP 410 Gone` and `404`.
2. **GitHub Pages `404.html` Overwrite Risk (`/.github/workflows/deploy.yml` — Fixed Safely in `WPCP-P2.9-V01`):** Removed `cp dist/index.html dist/404.html` and automatic `push` triggers from `.github/workflows/deploy.yml`, replacing them with `npm run lint` and `npm run verify:build` so Vite's dedicated noindex `dist/404.html` is preserved untouched. *(The GitHub Pages deployment target itself remains unconfirmed pending `VER-18`.)*
3. **Apache `.htaccess` SPA Rewrite Conflict (`/public/.htaccess` lines `1–9`):** Rewrites all non-file paths to `/index.html` (`200`), ineffective on Cloudflare/GitHub and harmful on Apache unless gated behind explicit `301`/`410`/`404` rules.
4. **Retired Slug `301` Gap (`/services/ecommerce-website-development`, `/services/ai-automation-business-process-automation`, `/services/generative-engine-optimisation`):** `WPCP-P2.7-V01` cleanly synced `/public/sitemap.xml`, `vite.config.ts`, and `App.tsx` (removing deprecated client aliases so unknown slugs render `404` locally). At Stage 3 Edge (`Cloudflare Worker`), any historically exposed `2026-11-21` sitemap slug must receive explicit owner-approved single-hop `301` redirects (`301` -> `/services/ecommerce-development/`, `/services/ai-business-automation/`, `/services/ai-search-optimisation/`).
5. **Single-Hop Edge Normalisation Requirement (`Decision #29`):** Trailing-slash normalisation (`/contact` -> `/contact/`), `http -> https`, `www -> apex`, and legacy `301` destinations must execute in **one single hop** inside the Cloudflare Worker / Edge layer so `/wordpress-seo-speed-optimization` -> `/wordpress-seo-speed-optimization/` -> `/wordpress-speed-optimisation/` two-hop chains cannot occur (and `410` spam lists must evaluate *before* trailing-slash rules).

---

*Preserved `2026-11-23` Provenance & Complete 56-Row Reconciliation Matrix retained verbatim below:*

# Task 1.6 Provisional URL Reconciliation (Reconstructed ChatGPT GSC Performance Data)

**Date:** 2026-11-23  
**Status:** `PROVISIONAL — PENDING ORIGINAL GSC EXPORT VERIFICATION`  
**Stage 2 Status:** `NOT STARTED — BLOCKED`  
**Decisions Preserved:** Confirmed Owner Decisions `#1–#32` unchanged (`Not Indexed Pages`: `SKIPPED BY OWNER`; `Links`: `No Data`).

---

## 1. Provenance, Discrepancy & Verification Caveats

- **Imported Workspace File:** `/gsc_performance_pages_reconstructed_56.csv` (`56` data rows; total `435` supplied impressions; `0` duplicate URLs).
- **Source Caveat:** Reconstructed from ChatGPT conversation history — **NOT** a verified original Google Search Console export.
- **Count Discrepancy:** Previously described by the owner as a **`54`-URL** dataset, whereas the reconstructed CSV contains **`56` rows (`+2` rows)**. No rows were removed; which two rows account for the discrepancy cannot be assumed without the original GSC export.
- **Unavailable Metrics:** `Clicks`, `CTR`, and `Position` are marked **`Unavailable`** across all `56` rows (`Verification_Status`: `Pending Original GSC Verification`).
- **Rule Applied:** No irreversible `301` or `410` decisions are finalised from this reconstructed file alone.

---

## 2. Three-Way Summary (`56` Reconstructed vs `305` Indexed Pages vs `766` Wayback)

| Group | Rows (`56`) | Total Impressions | In `305` Indexed (`2026-11-16`) | In `766` Wayback Baseline | Provisional Action (Hold Pending Original Export) |
|---|---:|---:|---:|---:|---|
| Core & Legacy Agency Service URLs (`/#`, WP Core, `/wordpress-services/`, `/book-a-consultation/`, `/contact-us/`, `/wordpress-seo-speed-optimization/`) | `7` | `191` | `1` (`/wordpress-services/`) | `7` | **Preserve** (`3` planned targets) / **Manual Review & Provisional `301`** (`4` legacy targets); verify why `/`, `/wordpress-maintenance-support/`, and `/wordpress-security-emergency-support/` are absent from `305` Indexed |
| Historical `/blog/*` WP Articles & Slugs | `28` | `213` | `12` | `28` | **Manual Review** (`Recover` to `/guides/` vs topic-matched `301` vs `410`); resolve malformed/duplicate pairs (`#5` vs `#13`, `#9` vs `#12`) and off-topic `#29` |
| Category Pagination (`/blog/category/wordpress/page/3/`) | `1` | `1` | `0` | `0` | **Manual Review** (Provisional `410` candidate consistent with `/page/4/`, `/page/6/`) |
| Casino / Gambling Spam (`#20`, `#31`, `#36`, `#45`) | `4` | `5` | `1` (`#45` root-level) | `0` | **Manual Review / Provisional `410`** (confirm `#45` & `8` other root-level casino URLs in `305` for Edge root allowlist/`410`) |
| Unrelated `/rgc/*` Medical / Doctor Profiles (`15` `/rgc/doctors/*` + `/rgc/about-us/`) | `16` | `25` | `0` | `0` | **Manual Review (Critical Anomaly)** — check original GSC export & server history to rule out ChatGPT context cross-contamination vs real hack/shared-hosting bleed |
| **Total** | **`56`** | **`435`** | **`14`** | **`35`** | **No final `301`/`410` applied until original export verified** |

---

## 3. Complete 56-Row Provisional Reconciliation Matrix

| # | URL | Imp | Clicks / CTR / Pos | In `305` Indexed (`Last crawled`) | In `766` Wayback (`First seen`) | Anomaly / Flag | Provisional Recommendation (Non-Final) |
|---:|---|---:|---|---|---|---|---|
| 1 | `/` | 10 | Unavailable | No | Yes (`2026-01-13`) | Core missing from `305` Indexed | **Preserve** (Live indexation check + Manual Review) |
| 2 | `/wordpress-maintenance-support/` | 98 | Unavailable | No | Yes (`2026-02-15`) | Highest-Imp core URL missing from `305` Indexed | **Preserve** (Live indexation check + Manual Review) |
| 3 | `/wordpress-security-emergency-support/` | 75 | Unavailable | No | Yes (`2026-02-15` -> `20260215043121`) | High-Imp core URL missing from `305` Indexed | **`Outcome A: 301 APPROVED FOR FUTURE IMPLEMENTATION -> /services/website-care-support/`** (`WPCP-P2.13-V01`, not yet executed) |
| 4 | `/blog/best-wordpress-starter-themes-developers/` | 54 | Unavailable | No | Yes (`2026-03-07`) | Pre-hack WP post (not in `305`) | **Manual Review** (`Recover` vs `301 -> /wordpress-design-development` vs `410`) |
| 5 | `/blog/free-wordpress-themes/` | 40 | Unavailable | No | Yes (`2026-02-15`) | Near-duplicate / parent of `#13` | **Manual Review** (`Recover` vs `301` vs `410`; pair with `#13`) |
| 6 | `/blog/drag-and-drop-page-builders-in-wordpress/` | 25 | Unavailable | Yes (`2026-09-02`) | Yes (`2026-02-15`) | Indexed pre-hack WP post | **Manual Review** (`Recover` vs `301 -> /wordpress-design-development` vs `410`) |
| 7 | `/blog/wordpress-present-date-and-time/` | 21 | Unavailable | Yes (`2026-10-20`) | Yes (`2026-02-15`) | Indexed pre-hack utility post | **Manual Review** (`Recover` vs `410` if trivial snippet) |
| 8 | `/blog/hiring-a-wordpress-developer-in-the-uk/` | 19 | Unavailable | Yes (`2026-10-20`) | Yes (`2026-02-15`) | Indexed UK buyer-intent WP post | **Manual Review** (Strong `Recover` or `301 -> /wordpress-design-development` candidate) |
| 9 | `/blog/error-best-top-elementor-themes-and-templates/` | 10 | Unavailable | No | Yes (`2026-02-15`) | Suspicious malformed `error-best-top-...` slug | **Manual Review** (Overlaps `#12`; verify historical content) |
| 10 | `/blog/best-lead-generation-plugins-for-wordpress/` | 6 | Unavailable | No | Yes (`2026-02-15`) | Pre-hack WP post | **Manual Review** (`Recover` vs `410`) |
| 11 | `/blog/niche-authority-building-on-wordpress-uk/` | 5 | Unavailable | Yes (`2026-09-12`) | Yes (`2026-02-15`) | Indexed UK SEO/WP post | **Manual Review** (`Recover` vs `301 -> /services/search-engine-optimisation`) |
| 12 | `/blog/elementor/` | 4 | Unavailable | No | Yes (`2026-02-15`) | Short tag/slug overlap with `#9` | **Manual Review** (`Recover` vs `301` vs `410`) |
| 13 | `/blog/https-wpcarepoint-co-uk-blog-free-wordpress-themes-to-build/` | 4 | Unavailable | Yes (`2026-10-20`) | Yes (`2026-03-08`) | Malformed URL-in-slug duplicate of `#5` | **Manual Review** (Provisional `301 -> #5` target or `410`) |
| 14 | `/rgc/doctors/dr-umme-hasina-rumki/` | 4 | Unavailable | No | No | **Unrelated `/rgc/` anomaly** | **Manual Review** (Verify original GSC export / contamination) |
| 15 | `/blog/emergency-wordpress-support-agency-for-uk/` | 3 | Unavailable | No | Yes (`2026-02-15`) | UK buyer-intent post | **Manual Review** (`Recover` vs `301 -> /wordpress-security-emergency-support`) |
| 16 | `/blog/wordpress-speed-optimization-service/` | 3 | Unavailable | No | Yes (`2026-03-08`) | UK speed buyer-intent post | **Manual Review** (`Recover` vs `301 -> /wordpress-speed-optimisation`) |
| 17 | `/rgc/doctors/dr-anisur-rahman-khan/` | 3 | Unavailable | No | No | **Unrelated `/rgc/` anomaly** | **Manual Review** (Verify original GSC export / contamination) |
| 18 | `/rgc/doctors/dr-atiqul-haque/` | 3 | Unavailable | No | No | **Unrelated `/rgc/` anomaly** | **Manual Review** (Verify original GSC export / contamination) |
| 19 | `/wordpress-services/` | 3 | Unavailable | Yes (`2026-09-23`) | Yes (`2026-02-15`) | Indexed legacy hub URL | **Manual Review** (Provisional `301 -> /services` candidate) |
| 20 | `/blog/best-online-crypto-casinos-comprehensive-ranking-and-comparison/` | 2 | Unavailable | No | No | **Casino spam** (not in `305` / `766`) | **Manual Review / Provisional `410`** (Confirm in original GSC) |
| 21 | `/blog/best-wordpress-agency-to-build-your-website/` | 2 | Unavailable | No | Yes (`2026-03-08`) | Agency commercial post | **Manual Review** (`Recover` vs `301 -> /wordpress-design-development`) |
| 22 | `/blog/top-free-wordpress-plugins/` | 2 | Unavailable | No | Yes (`2026-03-08`) | Pre-hack WP post | **Manual Review** (`Recover` vs `410`) |
| 23 | `/blog/wordpress-design/` | 2 | Unavailable | Yes (`2026-08-28`) | Yes (`2026-02-15`) | Indexed WP design post | **Manual Review** (`Recover` vs `301 -> /wordpress-design-development`) |
| 24 | `/book-a-consultation/` | 2 | Unavailable | No | Yes (`2026-02-15`) | Legacy consultation page | **Manual Review** (Provisional `301 -> /contact` candidate) |
| 25 | `/rgc/doctors/dr-major-tanvir-ahmed/` | 2 | Unavailable | No | No | **Unrelated `/rgc/` anomaly** | **Manual Review** (Verify original GSC export / contamination) |
| 26 | `/rgc/doctors/prof-dr-md-arif-hayat-khan-pathan/` | 2 | Unavailable | No | No | **Unrelated `/rgc/` anomaly** | **Manual Review** (Verify original GSC export / contamination) |
| 27 | `/wordpress-seo-speed-optimization/` | 2 | Unavailable | No | Yes (`2026-02-15`) | Combined SEO+Speed legacy slug | **Manual Review** (Provisional `301 -> /wordpress-speed-optimisation` or `/services/search-engine-optimisation`) |
| 28 | `/blog/best-wordpress-security-guide/` | 1 | Unavailable | Yes (`2026-10-20`) | Yes (`2026-03-07`) | Indexed WP security guide | **Manual Review** (`Recover` vs `301 -> /wordpress-security-emergency-support`) |
| 29 | `/blog/buy-expired-domain-name/` | 1 | Unavailable | No | Yes (`2026-02-15`) | Off-topic legacy post | **Manual Review** (Provisional `410` candidate) |
| 30 | `/blog/category/wordpress/page/3/` | 1 | Unavailable | No | No | Category pagination (`page/3`) | **Manual Review** (Provisional `410` candidate with `page/4`, `page/6`) |
| 31 | `/blog/deliberation-defines-progress-along-the-chicken-road-game/` | 1 | Unavailable | No | No | **Gambling spam (`chicken-road`)** | **Manual Review / Provisional `410`** (Confirm in original GSC) |
| 32 | `/blog/finding-your-saved-drafts-in-your-wordpress/` | 1 | Unavailable | No | Yes (`2026-02-15`) | Pre-hack WP tutorial | **Manual Review** (`Recover` vs `410`) |
| 33 | `/blog/hire-a-wordpress-website-management-agency/` | 1 | Unavailable | Yes (`2026-09-15`) | Yes (`2026-03-08`) | Indexed care-plan commercial post | **Manual Review** (`Recover` vs `301 -> /wordpress-maintenance-support`) |
| 34 | `/blog/how-to-create-a-blog-post-in-wordpress-2/` | 1 | Unavailable | Yes (`2026-07-29`) | Yes (`2026-02-15`) | Indexed WP tutorial (`-2` suffix) | **Manual Review** (`Recover` vs `410`) |
| 35 | `/blog/how-to-design-a-wordpress-website-from-scratch/` | 1 | Unavailable | No | Yes (`2026-02-15`) | Pre-hack WP guide | **Manual Review** (`Recover` vs `301 -> /wordpress-design-development`) |
| 36 | `/blog/okunites-v-atmosferu-vyigrysei-v-onlain-kazino-lucky-bear-vas/` | 1 | Unavailable | No | No | **Russian casino spam (`kazino`)** | **Manual Review / Provisional `410`** (Confirm in original GSC) |
| 37 | `/blog/reasons-to-build-your-website-on-wordpress/` | 1 | Unavailable | No | Yes (`2026-02-15`) | Pre-hack WP article | **Manual Review** (`Recover` vs `410`) |
| 38 | `/blog/restricted-pages-in-wordpress-by-user-role/` | 1 | Unavailable | No | Yes (`2026-02-15`) | Pre-hack WP tutorial | **Manual Review** (`Recover` vs `410`) |
| 39 | `/blog/website-optimization/` | 1 | Unavailable | Yes (`2026-10-20`) | Yes (`2026-02-15`) | Indexed optimisation post | **Manual Review** (`Recover` vs `301 -> /wordpress-speed-optimisation`) |
| 40 | `/blog/what-does-remove-archive-pages-mean-for-seo/` | 1 | Unavailable | No | Yes (`2026-02-15`) | Pre-hack WP SEO article | **Manual Review** (`Recover` vs `410`) |
| 41 | `/blog/why-hire-a-wordpress-bug-fix-agency/` | 1 | Unavailable | No | Yes (`2026-02-15`) | Bug-fix commercial post | **Manual Review** (`Recover` vs `301 -> /wordpress-maintenance-support`) |
| 42 | `/blog/wordpress-help-for-small-business/` | 1 | Unavailable | Yes (`2026-08-31`) | Yes (`2026-02-15`) | Indexed SMB WP post | **Manual Review** (`Recover` vs `301 -> /wordpress-maintenance-support`) |
| 43 | `/blog/wordpress-multilingual/` | 1 | Unavailable | Yes (`2026-08-14`) | Yes (`2026-02-15`) | Indexed WP multilingual post | **Manual Review** (`Recover` vs `410`) |
| 44 | `/contact-us/` | 1 | Unavailable | No | Yes (`2026-02-15`) | Legacy contact page | **Manual Review** (Provisional `301 -> /contact` once legal/form verified) |
| 45 | `/fatpirate-promo-code-review-2026-uk-bonus-payments-mobile-guide/` | 1 | Unavailable | Yes (`2026-10-20`) | No | **Root-level casino spam** (confirmed in `305`!) | **Provisional `410`** (Requires root-level Edge `410`/allowlist rule) |
| 46 | `/rgc/about-us/` | 1 | Unavailable | No | No | **Unrelated `/rgc/` anomaly** | **Manual Review** (Verify original GSC export / contamination) |
| 47 | `/rgc/doctors/dr-ershadul-haque-rahat/` | 1 | Unavailable | No | No | **Unrelated `/rgc/` anomaly** | **Manual Review** (Verify original GSC export / contamination) |
| 48 | `/rgc/doctors/dr-koushik-chowdhury/` | 1 | Unavailable | No | No | **Unrelated `/rgc/` anomaly** | **Manual Review** (Verify original GSC export / contamination) |
| 49 | `/rgc/doctors/dr-masud-rana/` | 1 | Unavailable | No | No | **Unrelated `/rgc/` anomaly** | **Manual Review** (Verify original GSC export / contamination) |
| 50 | `/rgc/doctors/dr-md-usha-al-sayed-ayon/` | 1 | Unavailable | No | No | **Unrelated `/rgc/` anomaly** | **Manual Review** (Verify original GSC export / contamination) |
| 51 | `/rgc/doctors/dr-mohammad-ibn-abdul-malek/` | 1 | Unavailable | No | No | **Unrelated `/rgc/` anomaly** | **Manual Review** (Verify original GSC export / contamination) |
| 52 | `/rgc/doctors/dr-nazmus-sakeb/` | 1 | Unavailable | No | No | **Unrelated `/rgc/` anomaly** | **Manual Review** (Verify original GSC export / contamination) |
| 53 | `/rgc/doctors/dr-parwas-mahtab/` | 1 | Unavailable | No | No | **Unrelated `/rgc/` anomaly** | **Manual Review** (Verify original GSC export / contamination) |
| 54 | `/rgc/doctors/dr-s-m-fahad/` | 1 | Unavailable | No | No | **Unrelated `/rgc/` anomaly** | **Manual Review** (Verify original GSC export / contamination) |
| 55 | `/rgc/doctors/dr-sumona-afroz/` | 1 | Unavailable | No | No | **Unrelated `/rgc/` anomaly** | **Manual Review** (Verify original GSC export / contamination) |
| 56 | `/rgc/doctors/dr-tanzin-huda/` | 1 | Unavailable | No | No | **Unrelated `/rgc/` anomaly** | **Manual Review** (Verify original GSC export / contamination) |
