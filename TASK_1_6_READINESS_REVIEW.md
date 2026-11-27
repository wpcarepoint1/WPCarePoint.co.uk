# WPCarePoint.co.uk — Pre-Production, Governance Lock & Stage 3 Launch Readiness Register

**Latest Audit Prompt ID:** `WPCP-P2.11-V01` (`Version 1.0`, `2026-11-27`)  
**Brand & Approved Direction:** **WPCarePoint** (`https://wpcarepoint.co.uk/`) — *Web Development, eCommerce & AI Solutions Agency* (*"Building, improving and supporting digital businesses."*, Decision `#33`)  
**Stage 2 Local Implementation (`WPCP-P2.1`–`WPCP-P2.11`):** **`COMPLETED LOCALLY & RECONCILED IN GOVERNANCE (15 Public Routes + True HTTP 404 + Preserved Noindex dist/404.html + verify:build + 105-Pair QA Verified; Part B/C Owner Answers Reconciled; Hostinger hPanel Future Target & Gated Auto-Deploy Strategy Logged)`**  
**Stage 3 Launch Readiness Status:** **`NOT READY`** *(Decisions `#55–#60` recorded cleanly alongside preserved `#1–#54`: Hostinger plan not yet purchased/verified, `/.github/workflows/deploy.yml` still points to `github-pages` (`workflow_dispatch`-only), `/site-map/` HTML page unbuilt, Cloudflare proxy/DNS unverified, `/wordpress-security-emergency-support/` relevance check pending, and mandatory `VER-04`–`VER-06` Data Controller legal role, exact retention periods, ICO/VAT/registration completion, hosting log verification, and legal review remain unresolved)*  
**Authorisation Boundary:** Documentation reconciliation, repository/workflow inspection, and readiness assessment only. **Zero code changes, workflow trigger changes, `/site-map/` or legal page publication, Hostinger purchase/migration, DNS/Cloudflare changes, live redirects, credential storage, or production deploys executed.**

---

## Status Classification Key (Governance Standard)

- **`OWNER APPROVED`** — Explicitly approved in recorded project governance decisions (`#1–#54`).
- **`PREVIOUSLY APPROVED - GOVERNANCE RECORD UPDATE REQUIRED`** — Conveyed in approved Task `P2.7`/`P2.8` owner instructions prior to formal logging; now reconciled into `PROJECT_STATUS.md` Decisions `#53` & `#54`.
- **`EVIDENCE VERIFIED`** — Directly inspected and confirmed against workspace source, `vite.config.ts`, `server.ts`, CSV, Wayback, or `305` Indexed evidence.
- **`PENDING OWNER INPUT`** — Requires an explicit owner business, legal, commercial, or URL-scope answer.
- **`PENDING EXTERNAL ACCESS`** — Requires access/details outside the local workspace (GitHub repo, Cloudflare zone, DNS, hosting panel, live GSC URL Inspection).
- **`TECHNICALLY UNVERIFIED`** — Compatibility or live server behaviour cannot be verified locally without external specs/tests.
- **`NOT AUTHORISED`** — Explicitly prohibited until Stage 3 gates clear (live deploy, DNS edits, analytics, contact form, legal publishing).

---

## Part A: Reconciled Decision Register (`Decisions A & B` vs `#52`) — `WPCP-P2.8-V01`

| Decision Track | Historical Governance State (`2026-11-23` / `P2.6`) | Reconciled State (`2026-11-27`, `WPCP-P2.8-V01`) | Governance Classification | Impact on Release 1 Gates |
|---|---|---|---|---|
| **Decision A — Release 1 Runtime Architecture** | **Decision `#52` (`2026-11-23`):** Specified No-CMS **`Next.js` + `React` + `TypeScript` + `Tailwind CSS` + `MDX` + `Metadata API`**. Actual Stage 2 (`P2.1`–`P2.7`) built on preserved **`Vite 8 + React 19 + TypeScript + Tailwind CSS v4 + Express`**, leaving a Vite-vs-Next.js question in `P2.6`. | **Preserve Decision `#52` verbatim** as historical planning baseline; formally record **Decision `#53`**: **Retain `Vite 8 + React 19 + TypeScript + Tailwind CSS v4` + build-time static prerendered architecture (`dist/<route>/index.html`, `dist/404.html`, `dist/sitemap.xml`) for Release 1** unless a verified technical requirement makes it unsuitable (`No CMS / No DB / No Admin / No SaaS / No MCP` preserved). | **`PREVIOUSLY APPROVED - GOVERNANCE RECORD UPDATE REQUIRED`** *(in `P2.7`/`P2.8` prompts)* -> **Now Logged as `OWNER APPROVED` (`Decision #53`)** | Closes the Vite-vs-Next.js blocker for Release 1 static agency routes. Reassess Next.js later only if dynamic SSR or large-scale MDX blog requirements cannot be served cleanly by static Vite + Cloudflare Pages/Worker. |
| **Decision B — Release 1 Contact Mode & Analytics Lock** | **Decision `#44` (`2026-11-23`):** Analytics/tracking strictly **OFF** until privacy/legal approvals. **`VER-17` (`#21–#23`, `#37`):** Planned **Resend/Postmark + Turnstile + Worker `POST /api/contact`** form remained flagged in `P2.6` as needing confirmation (`Email-only` vs `Form`). | Formally record **Decision `#54`**: **Release 1 `/contact/` launches strictly Email-only (`contact@wpcarepoint.co.uk`)** with **NO contact form**, **NO Resend, Postmark, Turnstile, or Cloudflare Worker email backend** required, and **analytics/tracking strictly OFF** pending legal and privacy approvals (`#44`). | Analytics OFF: **`OWNER APPROVED`** (`#44`). Email-only / No `VER-17` backend in R1: **`PREVIOUSLY APPROVED - GOVERNANCE RECORD UPDATE REQUIRED`** -> **Now Logged as `OWNER APPROVED` (`Decision #54`)** | Removes Resend/Postmark API provisioning, Turnstile keys, and Worker `/api/contact` from Release 1 blockers (**`NOT AUTHORISED` / Out of Scope for R1**). Keeps direct inbox operational check for `contact@wpcarepoint.co.uk` as `PENDING OWNER INPUT`. |

---

## Part A1: Consolidated Gate Register (`VER-01` through `VER-20`)

*(Cross-check baselines: `VER-01` `contact@wpcarepoint.co.uk` owner-provided for Email-only enquiries; `VER-02` Email-only channel confirmed now — no phone/WhatsApp/call centre; `VER-03` `Robert Denholm House, Bletchingley Road, Nutfield RH1 4HW, United Kingdom` `OWNER APPROVED` for `/contact/` via Decision `#39`; `VER-19` `17` `.webp` + `1` compressed OG `.jpg` (`1.3M`) `EVIDENCE VERIFIED` in `P2.7`; `VER-20` `13/13` capabilities `OWNER APPROVED` via Decision `#35`, not portfolio-verified.)*

| ID | Gate Area | Current Status | Available Evidence | Missing Evidence / Owner Action | Blocks Release 1 Launch? |
|---|---|---|---|---|---|
| **`VER-04`** | **Legal Entity Name, Structure & UK GDPR Data Controller** | **`PENDING OWNER INPUT`** | `RH1 4HW` approved only for `/contact/` (`#39`); `contact@wpcarepoint.co.uk` owner-provided (`#37`); zero personal data captured via web form in Release 1 (`#54`). | Exact legal trading name, structure (Sole Trader vs Ltd vs LLP), and named Data Controller for legal notices & `/privacy-policy`. | **YES** *(Blocks Legal pages & UK statutory business disclosure; `NOT AUTHORISED` to publish legal pages until verified)* |
| **`VER-05`** | **Companies House Number & UK VAT Status** | **`PENDING OWNER INPUT`** | Zero Companies House or VAT numbers recorded; active UI cleanly uses `"Enquire for Pricing"` (`EVIDENCE VERIFIED`). | Confirmation of incorporation status (Companies House # + registered office if Ltd/LLP) and VAT registration status/number. | **YES** *(Blocks `/terms-and-conditions`, UK Ltd footer disclosures if incorporated, and any `£` pricing)* |
| **`VER-06`** | **ICO Registration, Lawful Basis, Retention & Cookie/PECR Scope** | **`PENDING OWNER INPUT`** *(Technical tracking OFF: `EVIDENCE VERIFIED`)* | `0` analytics/tracking scripts in `index.html`/`src/` (`EVIDENCE VERIFIED`); analytics locked OFF (`#44`, `#54`); no `/privacy-policy` or `/cookie-policy` published. | ICO registration/exemption check, data processing purposes, retention schedule for direct email enquiries/host logs, cookie audit for Cloudflare essential cookies, and approved sub-processor list. | **YES** *(Blocks `/privacy-policy`, `/cookie-policy`, and any future form or analytics activation)* |
| **`VER-07`** | **Care Plan Pricing (`Essential`/`Advanced`/`Elite`, `Quick Fix`)** | **`PENDING OWNER INPUT`** *(Safely Gated)* | UI shows `"Enquire for Pricing"` & `"Enquire About a Quick Fix"` cleanly; `public/llms*.txt` & `ContactSection.tsx` stale pricing purged in `P2.7` (`EVIDENCE VERIFIED`). | Confirm keeping `"Enquire for Pricing"` for Release 1 OR supply verified `£` pricing + inclusions + billing terms. | **NO** *(If keeping `"Enquire for Pricing"`)* |
| **`VER-08`** | **Exact VAT Rule on Published Fees** | **`PENDING OWNER INPUT`** | Zero `£` prices active on 15 UI routes (`EVIDENCE VERIFIED`). | VAT-inclusive vs `+ VAT` vs non-VAT rule (depends on `VER-05` if publishing fees). | **NO** *(Mandatory only before publishing `£` figures)* |
| **`VER-09`** | **Support Hours, Response Targets, Backups & Quick Fix Scope** | **`PENDING OWNER INPUT`** *(Safely Gated)* | Active routes state zero `24/7` or `< 30 mins` SLA guarantees (`EVIDENCE VERIFIED`). | Real UK working hours, honest target response windows, backup tool/residency, and Quick Fix boundaries (or confirm generic non-SLA copy). | **NO** *(If keeping honest non-SLA Release 1 copy)* |
| **`VER-10`** | **Project Starting Prices (`From £...`)** | **`PENDING OWNER INPUT`** *(Safely Gated)* | Zero `From £1,450` claims remain in UI or `public/llms*.txt` (`EVIDENCE VERIFIED`). | Confirm quote-on-enquiry everywhere in Release 1 OR provide verified starting bands. | **NO** *(If keeping quote-on-enquiry)* |
| **`VER-11`** | **Actual Founding Year** | **`PENDING OWNER INPUT`** *(Omitted)* | `"2019"` purged from active UI, schema, and `public/llms*.txt` (`EVIDENCE VERIFIED`). | Supply verified founding year OR approve permanent omission. | **NO** |
| **`VER-12`** | **Completed Project Count & Client Reviews** | **`PENDING OWNER INPUT`** *(Omitted)* | `900+`, `4.9/5`, `useServiceViews.ts`, and demo clients purged in `P2.7` (`EVIDENCE VERIFIED`). | Supply verified client testimonials + written permission OR confirm launch without reviews. | **NO** |
| **`VER-13`** | **Portfolio Recovery (`/wordpress-projects-portfolio`)** | **`PENDING OWNER INPUT`** *(Gated / Hidden)* | Portfolio excluded from Release 1 nav/sitemap; no fabricated case studies exist (`EVIDENCE VERIFIED`). | Supply verified historical project records/permissions OR confirm keeping Portfolio hidden for Wave 2. | **NO** *(Hidden/excluded per Decision `#14`)* |
| **`VER-14`** | **Leadership Bios (`/about/`) & `/leadership/` URL Disposition** | **`PENDING OWNER INPUT`** | Agency-level `/about/` active without unverified bios (`EVIDENCE VERIFIED`). | Confirm agency-level `/about/` AND choose `/leadership/` -> `/about/` `301` vs `410`/`404`. | **NO** *(Blocks `/leadership/` Edge rule only)* |
| **`VER-15`** | **Original GSC `Pages.csv` & Targeted URL Inspection** | **`DEFERRED BY OWNER`** (`#36`) | `/gsc_performance_pages_reconstructed_56.csv` (`56` rows, `435` Imp), `305` Indexed, `766` Wayback preserved; `Not Indexed` = `SKIPPED`; `Links` = `No Data`. | Do NOT repeatedly request `Pages.csv`; optional live URL Inspection recommended on `/`, `/wordpress-maintenance-support/`, `/wordpress-security-emergency-support/` before locking final `301`/`410` rules. | **CONDITIONAL** *(Required only to resolve final migration ambiguities if owner requests certainty)* |
| **`VER-16`** | **Pre-Hack Blog Recovery (`86` WB / `17` Indexed / `28` CSV)** | **`PENDING OWNER INPUT`** | Scope quantified; `0` `/blog/*` routes exist in Release 1 Vite build (`EVIDENCE VERIFIED`). | Decide Wave 1 (`15` core pages now, `/blog/*` in Wave 2 — review SEO impact on `17` indexed posts) vs hold Release 1 to recover `/blog/*`. | **CONDITIONAL** *(Depends on owner Release 1 vs Wave 2 decision)* |
| **`VER-17`** | **Email Mode (R1) vs `contact@wpcarepoint.co.uk` Inbox Check** | **`NOT AUTHORISED` / Out of Scope (Form Backend) & `PENDING OWNER INPUT` (Inbox Check)** | **Decision `#54` (Decision B):** `/contact/` is Email-only; Resend/Postmark/Turnstile/Worker API **not required for Release 1** (`EVIDENCE VERIFIED` on UI; `server.ts` mock stays dev-only). | Owner confirms incoming emails to `contact@wpcarepoint.co.uk` arrive reliably in working mailbox (DNS MX / forwarding test). | **YES (`contact@` Inbox Working)** / **NO (`Resend`/Form Deferred)** |
| **`VER-18`** | **GitHub Repo, Cloudflare/DNS, Hosting, `4` Legacy WP URLs & Edge `301`/`410`/`404`** | **`PENDING EXTERNAL ACCESS` & `PENDING OWNER INPUT`** | Local workspace has **no `.git`** (`NO_GIT_REPO`); `wrangler.jsonc` has `"single-page-application"` soft-`404`; `deploy.yml` overwrites `404.html`; Vite outputs static `dist/` compatible with Cloudflare Pages + Worker (`EVIDENCE VERIFIED`). | GitHub repo details, Cloudflare/DNS access, Hosting Approach (`B` vs `A`/`C`), decision on `4` legacy WP URLs, and approval of Edge `301`/`410`/`404` Worker rules. | **YES** *(Hard Stage 3 Launch Blocker)* |

---

## Part A2: Legal Verification Sheet (`VER-04`, `VER-05`, `VER-06` Classified Separately)

### Gate Classification Summary
- **`VER-04` (Legal Entity Name, Structure & Data Controller):** **`PENDING OWNER INPUT`** — Must clear before publishing legal pages or statutory UK trading disclosures (`NOT AUTHORISED` to publish unverified entity details).
- **`VER-05` (Companies House & VAT Registration Status):** **`PENDING OWNER INPUT`** — Must clear before publishing `/terms-and-conditions`, UK limited-company footer disclosures, or any `£` pricing (`VER-07`, `VER-08`, `VER-10`).
- **`VER-06` (ICO Registration, Processing Purposes, Retention, Privacy/Cookies & Sub-Processors):** **`PENDING OWNER INPUT`** *(Policy/Facts)* + **`EVIDENCE VERIFIED`** *(Technical zero-tracking check)* — Must clear before publishing `/privacy-policy` or `/cookie-policy`, or enabling any future form or analytics.

### 10-Point Legal Verification Matrix

| Gate | # | Required Information | Current Evidence | Missing Evidence | Owner Answer Required | Supporting Document Required | Publication Impact | Verification Status |
|---|---|---|---|---|---|---|---|---|
| **`VER-04`** | 1 | **Legal Entity Name & Legal Structure** | `WPCarePoint` brand name & Nutfield `RH1 4HW` (`/contact/` only per Decision `#39`); no legal suffix verified. | Registered trading name (`Ltd`, `LLP`, or `Owner Full Name t/a WPCarePoint`). | State exact legal entity name and trading status. | Company registration certificate or UTR/sole-trader trading confirmation (confirm details in writing — do not send secrets). | Blocks `/terms-and-conditions`, `/privacy-policy`, and statutory business-identity footer text. | **`PENDING OWNER INPUT`** |
| **`VER-04`** | 2 | **Sole Trader vs Limited Company Status** | Unconfirmed across all existing planning docs and UI (`EVIDENCE VERIFIED`). | Explicit selection between Sole Trader, Partnership, LLP, or Private Limited Company (`Ltd`). | Confirm legal form (`Sole Trader` vs `Ltd` vs `LLP`). | Written owner confirmation matching HMRC/Companies House records. | Determines mandatory UK Companies Act 2006 / Business Names disclosure format on site. | **`PENDING OWNER INPUT`** |
| **`VER-05`** | 3 | **Companies House Registration (if applicable)** | No Companies House number exists anywhere in workspace (`EVIDENCE VERIFIED`). | 8-character Companies House number + registered office address + country of registration (or N/A if Sole Trader). | Supply Companies House # & registered office (or confirm Sole Trader / non-incorporated). | Public Companies House company number / incorporation confirmation. | Mandatory under UK law on website footer/contact/legal pages if `Ltd`/`LLP`. | **`PENDING OWNER INPUT`** |
| **`VER-05`** | 4 | **VAT Registration Status** | All 15 active routes omit `£` pricing (`"Enquire for Pricing"` — `EVIDENCE VERIFIED`). | Whether VAT-registered (+ 9-digit `GB` VAT number) or below UK threshold / not VAT-registered. | Confirm `VAT Registered (GB...)` vs `Not VAT Registered`. | HMRC VAT registration certificate details if registered (and confirm inclusive/exclusive pricing rule for `VER-08`). | Blocks publishing any `£` Care Plan or service price and `/terms-and-conditions` billing clauses. | **`PENDING OWNER INPUT`** |
| **`VER-06`** | 5 | **ICO Registration or Exemption Check** | No ICO registration number recorded in workspace (`EVIDENCE VERIFIED`). | ICO Data Protection registration number (`ZA...`/`ZB...`/`C...`) OR documented ICO self-assessment exemption outcome. | Confirm ICO fee-payer reference number or formal exemption basis. | ICO register reference number or exemption self-assessment note. | Required governance evidence for `/privacy-policy` when handling client/enquiry business emails. | **`PENDING OWNER INPUT`** |
| **`VER-04`** | 6 | **Data Controller Identity** | `contact@wpcarepoint.co.uk` & `RH1 4HW` approved for `/contact/`, but controller legal identity is unconfirmed (`EVIDENCE VERIFIED`). | Exact legal person/company acting as UK GDPR Data Controller + dedicated privacy contact line. | Confirm Data Controller legal name and correspondence details. | Owner confirmation aligning with Items #1–#3. | Hard UK GDPR Art. 13 blocker for `/privacy-policy`. | **`PENDING OWNER INPUT`** |
| **`VER-06`** | 7 | **Purposes of Processing Personal Data** | Release 1 operates static pages + direct `mailto:` email only (Decision `#54`); no form DB or CRM ingestion exists (`EVIDENCE VERIFIED`). | Confirmed processing scope: direct B2B email enquiries, scoping proposals, and essential edge security/HTTP request logs. | Confirm Release 1 processes only direct email enquiries & operational server/CDN security logs (no marketing lists/tracking). | Written owner sign-off on email-only Release 1 data-flow scope. | Defines UK GDPR lawful basis (`Contract / Pre-contract steps` & `Legitimate Interests`) inside `/privacy-policy`. | **`PENDING OWNER INPUT`** |
| **`VER-06`** | 8 | **Data Retention Periods** | Zero retention durations invented per Decision `#44` (`EVIDENCE VERIFIED`). | Approved retention timelines for (a) non-converted enquiry emails, (b) active client correspondence/contracts, and (c) CDN/edge access/security logs. | Specify exact months/years to retain enquiry emails & client records (and deletion process). | Owner written retention schedule approval. | Required under UK GDPR Art. 13(2)(a) before publishing `/privacy-policy`. | **`PENDING OWNER INPUT`** |
| **`VER-06`** | 9 | **Privacy Policy & Cookie Requirements (PECR)** | `0` analytics (`GA4`/`PostHog`), `0` marketing pixels, and `0` third-party tracking scripts in `index.html`/`src/` (`EVIDENCE VERIFIED`); Decision `#54` locks tracking OFF. | Verification of strictly necessary edge security/CDN cookies only (e.g. Cloudflare security/bot mitigation if any) and owner approval of static Privacy/Cookie notices. | Confirm Release 1 runs zero non-essential cookies/analytics (`Analytics OFF`) and approve drafted `/privacy-policy` & `/cookie-policy` before publishing. | Final owner legal review of drafted `/privacy-policy` & `/cookie-policy` pages. | Legal pages remain **`NOT AUTHORISED`** (`unpublished / noindex`) until verified. | **`PENDING OWNER INPUT`** |
| **`VER-06`** | 10 | **Third-Party Processors & Hosting Providers** | Local build uses zero Resend/Postmark/Turnstile/GA4/PostHog (`EVIDENCE VERIFIED`); Cloudflare (`#8`) & GitHub planned; email mailbox host for `contact@wpcarepoint.co.uk` unknown. | Confirmed list of active Release 1 processors: (1) Domain/Edge CDN (`Cloudflare`), (2) Origin host (if `Approach A/C`), (3) Email mailbox provider (`Google Workspace` / `Zoho` / cPanel mail), (4) Source repo (`GitHub`). | Name the email mailbox host for `contact@wpcarepoint.co.uk` and confirm final hosting provider (`VER-18`). | Processor inventory confirmation (with UK/EEA transfer or UK IDTA/DPF awareness). | Must be accurately disclosed in `/privacy-policy` sub-processor section prior to publication. | **`PENDING OWNER INPUT`** |

---

## Part A3: `VER-18` Infrastructure & Compatibility Verification Checklist (`15` Items)

*Strict Security Boundary: Do **NOT** supply or paste passwords, API keys, tokens, or secrets into project files or chat.*

### 1. Repository / GitHub Readiness (`5` Questions)

| # | Question | Local Workspace Evidence (`EVIDENCE VERIFIED`) | Missing / Owner Action Required | Status |
|---|---|---|---|---|
| **G1** | **Where is the canonical GitHub repository?** | Local workspace contains **no `.git` directory** (`NO_GIT_REPO` verified). | Confirm exact GitHub organisation/account and repository URL/name. | **`PENDING EXTERNAL ACCESS`** |
| **G2** | **What is the production branch and deploy workflow?** | `/.github/workflows/deploy.yml` targets GitHub Pages (`actions/deploy-pages@v4`); `WPCP-P2.9-V01` removed the automatic `push` trigger (now `workflow_dispatch` manual-only) so builds never deploy automatically on push. | Confirm canonical GitHub production branch (`main`) and whether GitHub Actions or Cloudflare Pages Git integration deploys builds (retire/replace workflow if `Approach B`/`A` is chosen). | **`PENDING OWNER INPUT`** |
| **G3** | **Does the build require environment variables or production secrets?** | `vite.config.ts` and `src/` compile 100% static Release 1 routes with **zero runtime API keys, zero `VITE_*` secrets, and zero email/Turnstile secrets** (Decision `#54`; unused `@google/genai` in `package.json` is not imported by client routes). | Confirm Cloudflare Pages project settings / GitHub repo require zero runtime secrets for Release 1 (`NODE_VERSION=20+` build setting only). | **`EVIDENCE VERIFIED` (Zero R1 Secrets)** / **`PENDING OWNER INPUT`** (Repo check) |
| **G4** | **Are GitHub Pages workflow defaults compatible with `404` SEO rules?** | **Fixed Safely Locally (`WPCP-P2.9-V01`):** Removed `cp dist/index.html dist/404.html` overwrite from `/.github/workflows/deploy.yml` and added `npm run lint` + `npm run verify:build` so Vite's dedicated noindex `dist/404.html` is preserved untouched. *(GitHub Pages hosting target itself remains unconfirmed pending `VER-18`.)* | Confirm final hosting target (`VER-18`); if `Approach B` Cloudflare or `Approach A` cPanel is selected, retire `deploy.yml` GitHub Pages deploy job cleanly. | **`EVIDENCE VERIFIED` (Local `404` Safe)** / **`PENDING OWNER INPUT`** (Host) |
| **G5** | **Who holds repo write & branch-protection permissions?** | Unknown outside local workspace. | Owner confirms repository ownership, protected `main` branch rule, and PR review workflow. | **`PENDING EXTERNAL ACCESS`** |

### 2. Cloudflare Readiness (`5` Questions)

| # | Question | Local Workspace Evidence (`EVIDENCE VERIFIED`) | Missing / Owner Action Required | Status |
|---|---|---|---|---|
| **C1** | **Is `wpcarepoint.co.uk` active on an owner-controlled Cloudflare zone?** | Unknown locally; Decision `#8` planned Cloudflare solely as technical architecture. | Confirm Cloudflare account & zone ownership, active nameservers, and SSL/TLS mode (`Full (Strict)` target). | **`PENDING EXTERNAL ACCESS`** |
| **C2** | **Is current `/wrangler.jsonc` compatible with `404`/`410`/`301` SEO rules?** | **No (`SOFT-404 HAZARD VERIFIED`):** `/wrangler.jsonc` line `9` sets `"not_found_handling": "single-page-application"`, which forces Cloudflare to return `HTTP 200` `dist/index.html` on every invalid/spam path (`258` casino spam + `622` post-hack URLs). | Stage 3 requires switching assets handling (`404-page`) and pairing with a Cloudflare Worker / Pages Function (`.redirects` alone cannot emit `HTTP 410`). | **`EVIDENCE VERIFIED` (Requires Stage 3 Worker)** |
| **C3** | **Are Cloudflare DNS records cleanly configured for Email-only (`contact@wpcarepoint.co.uk`)?** | `/contact/` and schema expose `contact@wpcarepoint.co.uk` (`EVIDENCE VERIFIED`); zero live DNS records can be queried safely as authoritative mail config locally. | Confirm active `MX`, `SPF`, `DKIM`, and `DMARC` records remain intact for `contact@wpcarepoint.co.uk` and won't break during any DNS cut-over. | **`PENDING EXTERNAL ACCESS`** |
| **C4** | **Are Cloudflare caching, WAF, and `Web Analytics` settings aligned with Privacy Lock (`#44`/`#54`)?** | Local `dist/` ships zero analytics scripts (`EVIDENCE VERIFIED`). | Ensure Cloudflare Dashboard auto-injected `Web Analytics` stays **OFF** at launch and WAF/SSL rules preserve `/sitemap.xml`, `/robots.txt`, `/llms.txt`. | **`PENDING OWNER INPUT`** |
| **C5** | **Will staging/preview URLs (`*.pages.dev` / `workers.dev`) be protected from indexing?** | Local build only; Edge preview hostname headers are not configured yet (`wrangler.jsonc` lacks hostname header logic). | Approve Worker/Access rule applying `X-Robots-Tag: noindex, nofollow` (and optional Access login) on all non-canonical preview hostnames. | **`PENDING OWNER INPUT`** |

### 3. Hosting Readiness (`5` Questions — Approach B vs Existing cPanel Approach A vs Approach C)

| # | Question | Local Workspace Evidence (`EVIDENCE VERIFIED`) | Missing / Owner Action Required | Status |
|---|---|---|---|---|
| **H1** | **Does the Release 1 Vite build fit static Cloudflare Pages (`Approach B`) cleanly?** | **Yes (`EVIDENCE VERIFIED`):** `vite.config.ts` compiles all `15` approved routes to standalone trailing-slash `dist/<route>/index.html` directories + `dist/404.html` + `dist/sitemap.xml` + `1.3M` WebP/OG assets; local `server.ts` is not needed in production for Email-only Release 1. | Owner confirms **Approach B (`Cloudflare Pages + Cloudflare Worker`)** vs retaining existing **cPanel (`Approach A`)** vs **VPS (`Approach C`)**. | **`EVIDENCE VERIFIED` (Static Compatible)** / **`PENDING OWNER INPUT`** |
| **H2** | **What are the current cPanel Shared Hosting specs (`12`-point check from `Decision #52`)?** | Provider name, CloudLinux LVE limits, Node version, SSH access, Passenger support, and backup tooling are **completely unknown** locally (`TECHNICALLY UNVERIFIED`). | If keeping cPanel (or running parallel fallback during transition), supply cPanel provider name, AutoSSL status, SSH/Git availability, and backup status (never run heavy Node SSR on unverified cPanel). | **`TECHNICALLY UNVERIFIED`** / **`PENDING OWNER INPUT`** |
| **H3** | **Are existing `/public/.htaccess` and `/vercel.json` aligned with the hosting target?** | **No (`CONFLICT VERIFIED`):** `/public/.htaccess` rewrites every missing Apache path to `/index.html` (`200` Soft-404 if uploaded to cPanel unchanged); `/vercel.json` only rewrites `/services/:slug*`. | Remove or rewrite host-specific adapters during pre-deploy preparation once the final host (`Approach B` vs `A` vs `C`) is selected. | **`EVIDENCE VERIFIED` (Conflict Logged)** |
| **H4** | **Are domain registrar ownership & transfer/rollback plans ready before cut-over?** | `/public/CNAME` declares `wpcarepoint.co.uk`; current live hosting snapshot (`2026-11-21`) differs from local build (`EVIDENCE VERIFIED`). | Confirm domain registrar access, keep low DNS TTL ahead of cut-over, and preserve current host snapshot (`7–14` day rollback backup) prior to Stage 3 switch. | **`PENDING EXTERNAL ACCESS`** |
| **H5** | **Do `15` implemented Vite routes represent final Release 1 Hosting Scope?** | `vite.config.ts` & `public/sitemap.xml` emit `15` routes; `4` WordPress URLs from the earlier `22`-page plan and `86` pre-hack `/blog/*` posts are not built yet (`EVIDENCE VERIFIED`). | Confirm final Release 1 page footprint (`15` core/service routes vs adding standalone legacy WP pages vs Wave 2 `/blog/*`). | **`PENDING OWNER INPUT`** |

---

## Part A4: Four High-Impression / Core Legacy WordPress URLs Decision Matrix (`WPCP-P2.8-V01`)

*Evidence Rule Applied: `Clicks`, `CTR`, and `Position` are `Unavailable` because original `Pages.csv` (`VER-15`) is `DEFERRED BY OWNER`. Reconstructed impressions alone never trigger automatic page creation without evaluating Stage 2 route coverage, duplicate/cannibalisation risk, and buyer intent.*

| Legacy URL | Reconstructed GSC Impressions (`56` CSV) | In `305` Indexed (`2026-11-16`)? | In `766` Wayback Baseline? | Current Stage 2 Equivalent & Exact Coverage (`EVIDENCE VERIFIED`) | Options Considered | Evidence-Based SEO Recommendation | Approval Needed & Status |
|---|---|---|---|---|---|---|---|
| **`/wordpress-maintenance-support/`** | **`98` Imp** (`#2` overall in CSV; `Clicks/CTR/Pos`: `Unavailable`) | **No** (`0` matches in `evidence/...`) | **Yes** (`2026-02-15`) | **`/services/website-care-support/`** — Covers ongoing WordPress staging updates, encrypted off-site backups, uptime monitoring, `Essential`/`Advanced`/`Elite` Care Tiers (`Enquire for Pricing`), Quick Fix banner, and UK hosting coordination. *(Note: `Decision #16` originally pointed header `"Care Plans"` to `/wordpress-maintenance-support/`.)* | **Option 1 (`301`):** Single-hop `301` -> `/services/website-care-support/`.<br>**Option 2 (`200`):** Build dedicated `/wordpress-maintenance-support/` page & differentiate from `/services/website-care-support/`. | **Option 1 (`Single-Hop 301 -> /services/website-care-support/`) for lean Release 1**, paired with amending Decision `#16` target cleanly. `/services/website-care-support/` already mirrors the full WordPress care/maintenance intent (`"Website Care & WordPress Technical Support UK"`); cloning a second `200` care-plan page creates immediate keyword cannibalisation without distinct service tiers. *(Optional live GSC URL Inspection if owner wishes to confirm drop reason before cut-over.)* | **Owner + SEO Sign-Off** (`Decision #16` & `VER-18`) — **`PENDING OWNER INPUT`** |
| **`/wordpress-security-emergency-support/`** | **`75` Imp** (`#3` overall in CSV; `Clicks/CTR/Pos`: `Unavailable`) | **No** (`0` matches in `evidence/...`) | **Yes** (`2026-02-15`) | **`/services/website-care-support/`** (`Capabilities 02 & 04` + `#care-safeguards` — covers login/XML-RPC hardening, malware & spam cleanup, fatal PHP triage, snapshot preservation, and emergency email remediation without `24/7` SLA claims). | **Option 1 (`301`):** Single-hop `301` -> `/services/website-care-support/`.<br>**Option 2 (`200`):** Build dedicated `/wordpress-security-emergency-support/` focused strictly on urgent malware cleanup/hacked-site recovery & triage. | **Conditional:** Single-hop **`301` -> `/services/website-care-support/`** keeps Release 1 lean (`15` pages) and matches current copy safely; **however**, this URL carries the clearest distinct commercial intent (`urgent malware/hack repair` vs `recurring care retainer`, `75` Imp), so **Option 2 (`Dedicated 200 Page`)** is justified *only* if the owner wants a separate emergency-triage landing page before launch. | **Owner + SEO Sign-Off** (`VER-18`) — **`PENDING OWNER INPUT`** |
| **`/wordpress-design-development/`** | **`0` Imp** (`0` in `56` CSV; `Clicks/CTR/Pos`: `Unavailable`) | **No** (`0` matches in `evidence/...`) | **Yes** (Present in `766` WB baseline) | **`/services/website-development/`** — Leads explicitly with WordPress & React engineering (`Website Design & Development UK | WordPress & React Engineering`), Gutenberg block themes, zero page builders, and WP rebuilds/migrations (`WEBSITE_DEVELOPMENT_PAGE_DATA`). | **Option 1 (`301`):** Single-hop `301` -> `/services/website-development/`.<br>**Option 2 (`200`):** Split WordPress builds onto `/wordpress-design-development/` and keep React/Next.js on `/services/website-development/`. | **Option 1 (`Single-Hop 301 -> /services/website-development/`) Strongly Recommended.** With `0` CSV impressions and `0` indexed entries, keeping one comprehensive `/services/website-development/` hub (with dedicated WordPress Gutenberg section + React track) eliminates thin-content splitting while passing all historical Wayback/link equity in one hop. | **Owner + SEO Sign-Off** (`VER-18`) — **`PENDING OWNER INPUT`** |
| **`/woocommerce-development/`** | **`0` Imp** (`0` in `56` CSV; `Clicks/CTR/Pos`: `Unavailable`) | **No** (`0` matches in `evidence/...`) | **No** (`0` pre-hack WB hits per `TASK_1_6_FINAL_SITEMAP_ARCHITECTURE.md`) | **`/services/ecommerce-development/`** — Covers WooCommerce HPOS store builds, GBP (`£`), UK VAT rules, Stripe SCA, Royal Mail/DPD shipping, plus custom headless React/Next.js stores (`ECOMMERCE_DEVELOPMENT_PAGE_DATA`). | **Option 1 (`301` / Do Not Build):** Do not build standalone `/woocommerce-development/`; add defensive single-hop `301` -> `/services/ecommerce-development/` if ever requested.<br>**Option 2 (`200`):** Build separate `/woocommerce-development/` (`22`-page plan). | **Option 1 (`Do Not Build Standalone; Map 301 -> /services/ecommerce-development/` if hit) Strongly Recommended.** It has `0` GSC impressions, `0` indexed URLs, and `0` Wayback history — it existed purely as a planning proposal while Stage 2 `/services/ecommerce-development/` already delivers full WooCommerce HPOS authority. | **Owner + SEO Sign-Off** (`VER-18`) — **`PENDING OWNER INPUT`** |

---

## Part A5: Cloudflare Edge Response Matrix (`VER-18` Research — Zero Production Edits Made)

*(Research specification only — zero edits made to `/wrangler.jsonc`, `/_redirects`, `/_headers`, or Cloudflare dashboard.)*

### 1. Edge Behaviour Matrix

| URL / Request Group | Required HTTP Status & Headers | Exact Edge Target / Action | Current Local State vs Edge Gap |
|---|---|---|---|
| **Approved Release 1 Canonicals (`15` trailing-slash routes)** | **`HTTP 200 OK`** (`Content-Type: text/html; charset=utf-8`; keep clean `en-GB` SEO HTML, **zero** tracking scripts) | Serve static pre-rendered `dist/<route>/index.html` (`dist/index.html` for `/`). | Built cleanly in `vite.config.ts`; requires Cloudflare Worker/Assets routing to pass verified `200` routes cleanly. |
| **Scheme, Host & Trailing-Slash Variants** (`http://`, `www.`, `/contact` -> `/contact/`) | **`HTTP 301 Moved Permanently`** (`Location: https://wpcarepoint.co.uk/<canonical>/`) | Combine `http -> https` + `www -> apex` + legacy slug mapping + trailing slash into **one single hop** (`Decision #29`). | Static Pages alone can cause 2-hop chains (`www` -> apex -> slash -> target); Worker normalises in 1 hop. |
| **Unrecognised / Non-Existent Non-Spam URLs** (e.g., `/random-typo/`) | **`HTTP 404 Not Found`** + **`X-Robots-Tag: noindex, nofollow`** | Serve `dist/404.html` (`noindex, nofollow` body & meta) — **never** `index.html` with `200`. | Local Express (`server.ts`) enforces this (`P2.7`), but `/wrangler.jsonc` line `9` (`single-page-application`) currently breaks it in production (`200` Soft-404). |
| **Confirmed Casino / Gambling & Post-Hack Spam** (`258` indexed incl. `9` root-level `/fatpirate-*`, `/pinco-*`, `/pin-up-*`, `/olimp-*`, `/ronycasino-*` + `4` CSV `#20, #31, #36, #45` + `622` post-hack `/blog/*` + deep `/page/3\|4\|6/`) | **`HTTP 410 Gone`** *(Decision `#27`: `X-Robots-Tag` optional on genuine `410`; **NEVER** `301` to `/`)* | Match exact known spam/pagination paths & strict verified gambling-pattern rules **before** trailing-slash redirects so spam gets direct `410` (0 chains). | Cloudflare `_redirects` cannot return `410`; requires **Cloudflare Worker** exact/pattern rule ahead of static assets (`PENDING OWNER INPUT` on final rule list). |
| **Approved Legacy Single-Hop `301` Candidates** (`/wordpress-seo-speed-optimization/`, `/wordpress-speed-optimization/`, `/services/generative-engine-optimisation/`, `/services/ecommerce-website-development/`, `/services/ai-automation-business-process-automation/`, `/wordpress-services/`, `/contact-us/`, `/book-a-consultation/`, `/about-us/`, `/wordpress-hacked-site-repair/`, plus owner-approved targets for `4` WP URLs & `/leadership/`/`/site-map/`) | **`HTTP 301 Moved Permanently`** (Single-Hop to canonical trailing-slash target) | Execute exact `Map<oldPath, newCanonicalUrl>` lookup at Edge (matching with & without trailing slash identically -> 1 hop to `https://wpcarepoint.co.uk/.../`). | Currently only provisional in `/TASK_1_6_PROVISIONAL_RECONCILIATION.md` (`NOT AUTHORISED` until owner signs off final map). |
| **Unresolved Historical URLs & Anomalies** (`16` `/rgc/*` medical rows, `6` uncertain in `305`, `86` pre-hack posts / `24` tags / `19` categories while `/blog/` is deferred) | **`HTTP 404 Not Found`** + `X-Robots-Tag: noindex, nofollow` *(until audited/recovered)* | **Do NOT invent speculative redirects.** Serve safe reversible `404` (`No` bulk `301` to `/`, `No` premature `410` on recoverable `/blog/*` posts/tags per Decisions `#25`/`#28`). | Prevents irreversible `410` de-indexation of potentially recoverable blog URLs (`17` indexed) or misdirecting `/rgc/*`. |
| **Staging / Preview / `.pages.dev` / `.workers.dev` Hostnames** | **`HTTP 200`** (or Access gate) + **`X-Robots-Tag: noindex, nofollow`** | Worker checks `url.hostname !== 'wpcarepoint.co.uk'` -> injects `X-Robots-Tag: noindex, nofollow` on all preview responses (+ optional Cloudflare Access auth). | `_headers` file cannot conditionally match `Host` header; Worker hostname check guarantees preview environments never enter Google UK index. |
| **Analytics & Tracking** | **Disabled (`0` Scripts / `0` Beacons)** | Keep GA4, PostHog, pixels, and Cloudflare Dashboard Web Analytics auto-injection strictly **OFF** (`Decisions #44`, `#54`). | Verified clean (`0` tracking scripts) in local `index.html` and `src/`. |

### 2. Static Cloudflare Pages vs Cloudflare Worker Boundary, Verification & Rollback
- **What Static Cloudflare Pages Handles:** Serves compiled `dist/` HTML directories (`dist/<route>/index.html`), `/src/assets/images/*.webp` media, JS/CSS bundles, `robots.txt`, `sitemap.xml`, `llms.txt`, and static `404.html` *only* when `"not_found_handling": "404-page"` (replacing `"single-page-application"`). Static `_headers` handles `Cache-Control` and security headers; static `_redirects` supports basic `301`s only (cannot emit `410` and cannot run host-conditional `noindex`).
- **What Requires a Cloudflare Worker (or Pages Function Middleware) in Front of `ASSETS`:**
  1. Emitting **`HTTP 410 Gone`** for the `258`+ confirmed casino spam & root-level spam paths (`9` root slugs mean prefix-only `/blog/*` rules fail).
  2. Single-hop `http -> https` + `www -> apex` + legacy slug `301` + trailing-slash resolution (`Decision #29`).
  3. Hostname-conditional **`X-Robots-Tag: noindex, nofollow`** on `*.pages.dev` / staging hostnames.
  4. Guaranteeing `410` rules run **before** trailing-slash `301` normalisation (preventing 2-hop `/spam -> /spam/ -> 410` chains) and forcing an explicit `15`-route allowlist so unapproved paths return true `404` rather than SPA fallback.
- **Post-Deployment Verification Plan (Stage 3 Only — After Owner Approval):**
  - Run automated `curl -sI` matrix against all `15` canonical routes (`HTTP 200`), non-trailing-slash & `http`/`www` variants (`1`-hop `301` `Location`), approved legacy slugs (`1`-hop `301`), sample casino spam (`/fatpirate-promo-code-review-2026-uk-bonus-payments-mobile-guide/` -> `HTTP 410`), `/rgc/about-us/` (`HTTP 404` + `X-Robots-Tag: noindex, nofollow`), `.pages.dev` preview URL (`X-Robots-Tag: noindex, nofollow`), and `/sitemap.xml` / `/robots.txt`.
- **Rollback Plan (Stage 3 Only):**
  - Keep original origin host snapshot intact untouched (`7–14` day safety window); use Cloudflare immutable deployment rollback (instant 1-click revert on Pages deployment + `wrangler rollback` for Worker script) or DNS/route bypass if any unintended status/redirect defect surfaces.

---

## Part B: Prioritised Owner Input Sheet (`WPCP-P2.8-V01`)

### A. Previously Approved Decisions *(Confirmed — No Need to Re-Answer Unless Reversing)*
1. **Release 1 Runtime (`Decision #53` / Decision A):** Retain **`Vite 8 + React 19 + TypeScript + Tailwind CSS v4`** prerendered static `15`-route architecture for Release 1 (deferring Next.js unless a verified technical blocker arises). **`OWNER APPROVED`** *(reconciled `2026-11-27`)*.
2. **Release 1 Contact & Privacy Lock (`Decision #54` / Decision B + `#44`):** `/contact/` is **Email-only (`contact@wpcarepoint.co.uk`)**, **no contact form**, **no Resend/Postmark/Turnstile/Worker email backend**, and **analytics/tracking strictly OFF** until legal approvals clear. **`OWNER APPROVED`** *(reconciled `2026-11-27`)*.
3. **Brand, SEO & Address Baselines (`#33–#35`, `#39`, `#40`, `#52`):** Hybrid Digital Agency (`en-GB`, light-first, zero `cy` toggle), `Option B` (`/services/ai-search-optimisation/`), `/wordpress-speed-optimisation/` standalone target, `RH1 4HW` on `/contact/` (Email-only, no phone/WhatsApp/call centre), `VER-20` `13/13` capabilities (`OWNER-CONFIRMED`), `VER-15` `Pages.csv` (`DEFERRED BY OWNER`), and No-CMS/No-DB/No-Admin/No-SaaS MVP boundaries. **`OWNER APPROVED`**.

---

### B. Decisions Still Requiring Owner Input (`6` Areas)

1. **Hosting Approach Selection (`VER-18`):**
   - *Plain-English Question:* Which production hosting setup do you approve for Release 1 deployment once all launch gates clear?
   - *Why Needed:* Local build is static HTML + WebP (`dist/`); we need to remove conflicting `.htaccess`/`deploy.yml`/`wrangler.jsonc` SPA rules for one target host.
   - *Options:* **(1) Approach B (`Recommended`): Cloudflare Pages + Cloudflare Worker** (free/low-cost edge speed, zero origin server upkeep, clean `410`/`301`/`404` Worker control) | **(2) Approach A:** Existing cPanel static origin behind Cloudflare (requires `12`-point cPanel check) | **(3) Approach C:** Dedicated Node.js VPS.
   - *Consequence of Not Answering:* Stage 3 deployment target stays locked (`NOT READY`); conflicting deployment adapters remain unaligned.
   - *Status:* **`PENDING OWNER INPUT`**

2. **Four Legacy WordPress URLs & `/leadership/` + `/site-map/` Disposition (`VER-18`, `VER-14`):**
   - *Plain-English Question:* Should `/wordpress-maintenance-support/` (`98` Imp), `/wordpress-security-emergency-support/` (`75` Imp), `/wordpress-design-development/` (`0` Imp), and `/woocommerce-development/` (`0` Imp) map via single-hop `301` to existing Stage 2 `/services/*` pages, OR should any be built as dedicated `200` pages before launch? Also choose `301` vs `410` for `/leadership/` and `/site-map/`.
   - *Why Needed:* Stage 2 consolidated these topics cleanly inside `/services/website-care-support/`, `/services/website-development/`, and `/services/ecommerce-development/`.
   - *Recommendation:* Approve **single-hop `301`** for all 4 (or optionally build dedicated `200` `/wordpress-security-emergency-support/` *only* if you explicitly want a standalone emergency-triage page) + `/leadership/` -> `/about/` (`301`) & `/site-map/` -> `/services/` (`301`). *(Includes updating Decision `#16` Care Plans nav link.)*
   - *Consequence of Not Answering:* High-impression historical URLs (`98` + `75` Imp) cannot be mapped cleanly at Edge cut-over.
   - *Status:* **`PENDING OWNER INPUT`**

3. **Blog (`86` Posts / `17` Indexed) & Portfolio Release 1 Scope (`VER-13`, `VER-16`):**
   - *Plain-English Question:* Should Release 1 go live with the core `15` agency/service/contact pages while keeping Portfolio hidden and recovering `/blog/*` in Wave 2 — OR wait to recover the `17` indexed pre-hack blog posts before launch?
   - *Why Needed:* Zero `/blog/*` or `/wordpress-projects-portfolio` routes exist in the current local build.
   - *Recommendation:* Approve **Core `15` pages in Release 1 + Wave 2 Blog/Portfolio recovery** if speed-to-reopen matters most (keeping unresolved blog URLs at clean `404` temporarily rather than `410` so recovery stays open), OR supply/authorise Wayback extraction before launch if preserving the `17` indexed blog posts at cut-over is priority #1.
   - *Consequence of Not Answering:* Unclear whether `VER-16` blocks Release 1 launch.
   - *Status:* **`PENDING OWNER INPUT`**

4. **Edge Redirect & `410` Spam Rule Approval (`VER-18`):**
   - *Plain-English Question:* Do you approve enforcing our proposed Cloudflare Worker rule set at launch (`15` canonical `200` routes, single-hop `301`s for verified legacy URLs, `HTTP 410 Gone` for confirmed casino/gambling spam & deep pagination `/page/3|4|6/`, and reversible `404` for unresolved `/rgc/*` with zero speculative redirects)?
   - *Why Needed:* `9` casino spam URLs sit at root depth (`/fatpirate-...`) and `Decision #50` requires explicit human approval before Edge redirects/removals.
   - *Recommendation:* **Approve** strict allowlist + confirmed spam `410` + `404` on unverified `/rgc/*`.
   - *Consequence of Not Answering:* Live launch cannot replace `wrangler.jsonc` SPA Soft-404 behaviour (`HTTP 200` on spam URLs).
   - *Status:* **`PENDING OWNER INPUT`**

5. **Optional Commercial & Proof Claims (`VER-07`–`VER-12`, `VER-14`):**
   - *Plain-English Question:* For Release 1, do you confirm keeping `"Enquire for Pricing"` everywhere (no `£` figures, no SLA hour guarantees, no founding year `"2019"`, no fabricated testimonials/team bios), OR do you wish to provide verified commercial values now?
   - *Why Needed:* Ensures legal accuracy and zero unverified claims (`Decision #6`).
   - *Recommendation:* **Keep current `"Enquire for Pricing"` & omitted proof claims** for Release 1 (can add verified prices/reviews later once `VER-05` VAT clears).
   - *Consequence of Not Answering:* Minor — current UI already safely gates all unverified claims.
   - *Status:* **`PENDING OWNER INPUT`**

6. **Privacy Policy & Staging Indexing Rules (`VER-06`, `VER-18`):**
   - *Plain-English Question:* Do you approve drafting lightweight static-site UK GDPR Privacy & Cookie Policies tailored strictly to **Email-only enquiries + zero analytics (`analytics OFF`)**, plus enforcing `X-Robots-Tag: noindex, nofollow` on all staging/preview URLs?
   - *Why Needed:* Unblocks publishing `/privacy-policy/` and `/cookie-policy/` cleanly once entity/retention answers arrive in Part C.
   - *Recommendation:* **Approve** Email-only Privacy/Cookie drafting + mandatory preview `noindex`.
   - *Consequence of Not Answering:* Legal pages stay blocked and preview URLs remain at risk of accidental indexing.
   - *Status:* **`PENDING OWNER INPUT`**

---

### C. Evidence Still Required (`6` Areas — Do Not Paste Passwords, API Keys, or Secrets)

1. **Legal Entity, Companies House, VAT, ICO & Retention Details (`VER-04`, `VER-05`, `VER-06`):**
   - *Exact Input Needed:* Legal entity name, structure (Sole Trader vs Ltd/LLP), Companies House number & registered office (if Ltd/LLP), VAT status (+ VAT number if registered), ICO registration reference (or exemption confirmation), named Data Controller, enquiry retention period (e.g., months/years), and email mailbox host name (Google Workspace / Zoho / hosting mail).
   - *Why Needed:* Hard legal blocker for `/privacy-policy`, `/cookie-policy`, `/terms-and-conditions`, and statutory UK company disclosures.
   - *Status:* **`PENDING OWNER INPUT`**

2. **`contact@wpcarepoint.co.uk` Inbox Operational Verification (`VER-17`):**
   - *Exact Input Needed:* Written confirmation that you have tested sending/receiving mail to `contact@wpcarepoint.co.uk` and emails reach your working inbox reliably (and confirm mailbox provider for Privacy Policy sub-processor list). *(No Resend/Postmark/Turnstile setup needed for Release 1.)*
   - *Why Needed:* Ensures zero lost enquiries since `/contact/` is Email-only (`Decision #54`).
   - *Status:* **`PENDING OWNER INPUT`**

3. **GitHub Repository Details (`VER-18`):**
   - *Exact Input Needed:* Canonical GitHub repository URL, active production branch name (`main`), and confirmation of repo owner/deploy permissions.
   - *Why Needed:* Local workspace has zero `.git` history (`NO_GIT_REPO`).
   - *Status:* **`PENDING EXTERNAL ACCESS`**

4. **Cloudflare & DNS Zone Confirmation (`VER-18`):**
   - *Exact Input Needed:* Confirm owner-controlled Cloudflare account & active `wpcarepoint.co.uk` zone, current `SSL/TLS` mode, confirmation that mail `MX`/`SPF`/`DKIM`/`DMARC` DNS records are visible/intact, and authorisation for Stage 3 Worker deployment (when separately approved).
   - *Why Needed:* Required to replace `wrangler.jsonc` SPA soft-`404` and manage live DNS safely.
   - *Status:* **`PENDING EXTERNAL ACCESS`**

5. **Current Hosting Details & Rollback Readiness (`VER-18`):**
   - *Exact Input Needed:* Current cPanel host provider name and live backup snapshot confirmation (`12`-point cPanel check required *only* if choosing `Approach A` cPanel instead of `Approach B` Cloudflare Pages).
   - *Why Needed:* Ensures safe cut-over with a verified rollback fallback.
   - *Status:* **`PENDING OWNER INPUT`**

6. **Optional Content Recovery / Targeted GSC Inspection (`VER-13`, `VER-15`, `VER-16`):**
   - *Exact Input Needed:* (a) Any surviving portfolio project notes/screenshots + client permissions (`VER-13`), (b) local backups of `86` pre-hack blog posts or permission to run Wayback extraction if launching blog in Wave 1 (`VER-16`), and (c) optional live GSC URL Inspection screenshot/status for `/`, `/wordpress-maintenance-support/`, and `/wordpress-security-emergency-support/`. *(Do **NOT** fetch `Not Indexed Pages` or repeatedly chase `Pages.csv` per `#32`/`#36`.)*
   - *Status:* **`PENDING OWNER INPUT`**

---

## Part C: Release 1 Architecture Summary (`Decision #53` Reconciled)

- **Preserved History:** `Decision #52` (`2026-11-23`) originally specified `Next.js + MDX`.
- **Reconciled Release 1 Baseline (`Decision #53` / Decision A):** Retain completed **`Vite 8 + React 19 + TypeScript + Tailwind CSS v4`** build-time static prerendering (`15` routes -> `dist/<route>/index.html`, `dist/404.html`, `dist/sitemap.xml`, `1.3M` WebP assets) for **Release 1** unless a verified technical blocker makes it unsuitable.
- **Technical Suitability Check (`EVIDENCE VERIFIED`):**
  - **Fits Static Cloudflare Pages + Worker (`Approach B`):** `Yes` — all `15` Release 1 routes emit complete static `<title>`, `<meta>`, `canonical`, `hreflang`, `<div id="root">` SSR body, and single `<script id="wpc-route-jsonld">` JSON-LD without requiring Node Express (`server.ts`) in production.
  - **When Next.js Would Re-Enter Scope:** Only if future Wave 2+ introduces server-rendered dynamic pages (`SSR`/`ISR`), authenticated client portals, or complex MDX collections that cannot compile cleanly via static Vite plugins.

---

## Part D: Release 1 Contact & Email Summary (`Decision #54` Reconciled)

- **Active Release 1 Mode:** **Email-only (`/contact/` -> `contact@wpcarepoint.co.uk`)** + `RH1 4HW` correspondence address + copy-email & brief-outline helpers (`EVIDENCE VERIFIED`).
- **Deferred / Not Required for Release 1 (`NOT AUTHORISED` / Out of Scope):** Web contact form, `Resend` / `Postmark` transactional API integration, `Cloudflare Turnstile`, Worker `POST /api/contact`, and `server.ts` mock contact endpoint.
- **Active Mandatory Check:** Owner confirms `contact@wpcarepoint.co.uk` mailbox inbound delivery & mail DNS (`MX`/`SPF`/`DKIM`/`DMARC`) operate reliably (`VER-17` Operational Check — `PENDING OWNER INPUT`).

---

## Part D1: Owner Answer Discovery & Verification Register (`WPCP-P2.10-V01`)

*Inspection Outcome (`2026-11-27`): Inspected the workspace root, `/OWNER_DECISION_PACK.md`, `/PROJECT_STATUS.md`, `/PROMPT_REGISTER.md`, `/TASK_1_6_READINESS_REVIEW.md`, `/TASK_1_6_PROVISIONAL_RECONCILIATION.md`, `/README.md`, and `/evidence/*`. **Zero Part B (`6` Decisions) or Part C (`6` Evidence/Access) answers have been supplied yet.** All placeholder prompt wording in `WPCP-P2.10-V01` was strictly excluded from being treated as verified owner facts.*

### 1. Reconciled Baselines Confirmed Preserved (`#53`, `#54` & Scope Locks)

| Reconciled Baseline | Governance Status | Verified Code/Artifact Evidence | Impact on `WPCP-P2.10-V01` |
|---|---|---|---|
| **Decision `#53` (Decision A — Release 1 Vite 8 Static Architecture)** | **`OWNER APPROVED`** *(Preserves `#1–#52` verbatim)* | `vite.config.ts` compiles `15` trailing-slash routes (`dist/<route>/index.html`), `dist/sitemap.xml`, `dist/404.html` (`noindex, nofollow`, zero canonical/`hreflang`/`og:url`); `verify:build` & `test:local-qa` enforce artifact integrity. | Retained unchanged; zero Next.js migration started. |
| **Decision `#54` (Decision B — Email-only `/contact/` & Analytics OFF)** | **`OWNER APPROVED`** *(Preserves `#44` verbatim)* | Static scan of `index.html` & `src/` verified **`0` `<form>` elements**, **`0` analytics/pixel scripts**, and **`0` `document.cookie` / `localStorage` / `sessionStorage` usage**. | Retained unchanged; interactive contact form, Resend, Postmark, Turnstile, and Worker email backend remain **`NOT AUTHORISED` / Out of Scope for Release 1**. |

### 2. Part B (`6` Decisions) & Part C (`6` Evidence/Access) Audit Table

| Area & ID | Original Question / Requirement | Owner's Actual Answer | Supporting Evidence Supplied | Verification Result | Related Gate | Implementation Impact | Remaining Limitation |
|---|---|---|---|---|---|---|---|
| **Part B-1:** Hosting Approach Selection | Choose production target: **Approach B** (Cloudflare Pages + Worker) vs **Approach A** (cPanel + Cloudflare) vs **Approach C** (VPS). | **None supplied yet** | None (`wrangler.jsonc`, `.htaccess`, `vercel.json`, `CNAME`, `deploy.yml` remain unaligned locally) | **`PENDING OWNER INPUT`** | **`VER-18`** | Zero host-dependent config files edited or deleted. | Production deployment target & Stage 3 edge adapter remain blocked. |
| **Part B-2:** `4` Legacy WP URLs + `/leadership/` & `/site-map/` | Approve `301` vs standalone `200` pages for `/wordpress-maintenance-support/` (`98` Imp), `/wordpress-security-emergency-support/` (`75` Imp), `/wordpress-design-development/` (`0` Imp), `/woocommerce-development/` (`0` Imp), plus `/leadership/` & `/site-map/`. | **None supplied yet** | Reconstructed `56`-row CSV & `766` WB baselines preserved; Stage 2 `/services/*` coverage verified locally. | **`PENDING OWNER INPUT`** | **`VER-18`**, **`VER-14`**, **`#16`** | Zero new standalone WP routes built; `301` rules stay provisional proposals only. | High-impression legacy URLs & Decision `#16` Care Plans target remain unlocked. |
| **Part B-3:** Blog (`86`/`17` Indexed) & Portfolio R1 Scope | Launch Release 1 with core `15` pages (Portfolio hidden, `/blog/*` Wave 2) OR hold launch to recover `17` indexed blog posts. | **None supplied yet** | `0` `/blog/*` or portfolio files in Release 1 Vite build (`EVIDENCE VERIFIED`). | **`PENDING OWNER INPUT`** | **`VER-13`**, **`VER-16`** | Release 1 scope remains `15` implemented routes with Portfolio excluded from nav/sitemap. | Unresolved whether `VER-16` postpones Release 1 or defers `/blog/*` to Wave 2. |
| **Part B-4:** Edge `301` & `410` Spam Rules | Approve proposed Cloudflare Worker `200` allowlist, single-hop `301` pairs, `HTTP 410 Gone` for `258`+ casino spam & `/page/3\|4\|6/`, and reversible `404` for `/rgc/*`. | **None supplied yet** | `TASK_1_6_PROVISIONAL_RECONCILIATION.md` proposals verified (`#50` HITL gate). | **`PENDING OWNER INPUT`** | **`VER-18`**, **`#50`** | Zero Worker scripts deployed or live redirects activated. | Cannot execute production Edge `410`/`301`/`404` protection. |
| **Part B-5:** Commercial Pricing & Proof Claims | Confirm keeping `"Enquire for Pricing"` & omitting SLA windows, founding year (`"2019"`), reviews (`900+`, `4.9/5`), and team bios OR supply verified values. | **None supplied yet** | Active UI cleanly shows `"Enquire for Pricing"` with zero unverified claims (`EVIDENCE VERIFIED`). | **`PENDING OWNER INPUT`** | **`VER-07`–`VER-12`**, **`VER-14`** | Current safe non-SLA, non-priced UI copy preserved untouched. | Requires explicit R1 sign-off before go-live (non-blocking while gated). |
| **Part B-6:** Privacy/Cookie Scope & Staging `noindex` | Approve static Email-only (`Analytics OFF`) Privacy/Cookie notices + mandatory `X-Robots-Tag: noindex, nofollow` on preview hostnames. | **None supplied yet** | Zero analytics scripts verified in `index.html`/`src/`. | **`PENDING OWNER INPUT`** | **`VER-06`**, **`VER-18`** | Legal pages remain drafted only as blocked structural outlines below. | Preview hostname `noindex` & Legal approach remain unconfirmed. |
| **Part C-1:** Legal Entity, Companies House, VAT, ICO & Retention | Supply legal trading entity name, structure (`Sole Trader` vs `Ltd`/`LLP`), Companies House #, registered office, VAT status, ICO reg/exemption, named Data Controller, retention schedule, & mailbox host. | **None supplied yet** | Zero company/VAT/ICO/controller records exist in repo (`EVIDENCE VERIFIED`). | **`PENDING OWNER INPUT`** | **`VER-04`**, **`VER-05`**, **`VER-06`** | **`/privacy-policy/`, `/cookie-policy/`, `/terms-and-conditions/` NOT BUILT / NOT PUBLISHED (`NOT AUTHORISED`).** | Hard UK legal & GDPR publication blocker. |
| **Part C-2:** `contact@wpcarepoint.co.uk` Inbox Operational Check | Confirm inbound email delivery & working inbox receipt for `contact@wpcarepoint.co.uk` (and mailbox provider name). *(Form/Resend/Postmark/Turnstile = Out of Scope per `#54`.)* | **None supplied yet** | Live mail DNS cannot be treated as confirmed owner inbox test locally. | **`PENDING OWNER INPUT`** | **`VER-17` (Inbox Check)** | `/contact/` stays `mailto:contact@wpcarepoint.co.uk` + copy helpers; zero form UI added. | Risk of missed client enquiries at Stage 3 launch without tested mailbox receipt. |
| **Part C-3:** GitHub Repository Details | Provide canonical GitHub repository URL, `main` branch rule, and write/deploy permissions. | **None supplied yet** | Local workspace has no `.git` folder (`NO_GIT_REPO` verified). | **`PENDING EXTERNAL ACCESS`** | **`VER-18`** | Kept `deploy.yml` safe locally (`workflow_dispatch` manual-only; `verify:build` active). | Cannot connect source repo or configure CI deployment target. |
| **Part C-4:** Cloudflare Zone, DNS & SSL/TLS Confirmation | Confirm owner-controlled Cloudflare zone for `wpcarepoint.co.uk`, `SSL/TLS` mode, intact mail `MX`/`SPF`/`DKIM`/`DMARC` records, and Stage 3 Worker authorisation. | **None supplied yet** | None accessible locally. | **`PENDING EXTERNAL ACCESS`** | **`VER-18`** | Zero DNS, Cloudflare, or Worker edits made. | Cannot resolve `wrangler.jsonc` soft-`404` or protect email DNS on cut-over. |
| **Part C-5:** Current Hosting Specs & Rollback Backup | Supply current cPanel host name & live backup snapshot confirmation (`12`-pt check mandatory if `Approach A` chosen). | **None supplied yet** | None (`cPanel` LVE/Node/SSH/AutoSSL specs unknown). | **`TECHNICALLY UNVERIFIED`** / **`PENDING OWNER INPUT`** | **`VER-18`** | Preserved existing host-neutral build cleanly without touching `.htaccess`/`CNAME`. | Rollback snapshot & legacy origin compatibility remain unverified. |
| **Part C-6:** Optional Content Recovery / Targeted GSC Inspection | Supply portfolio projects/permissions, pre-hack blog archives/Wayback sign-off, or live GSC URL Inspection for `/`, `/wordpress-maintenance-support/`, `/wordpress-security-emergency-support/`. | **None supplied yet** | `305` Indexed, `766` WB, `56`-row CSV preserved (`VER-15` `Pages.csv` stays `DEFERRED BY OWNER` per `#36`). | **`PENDING OWNER INPUT`** | **`VER-13`**, **`VER-15`**, **`VER-16`** | Portfolio remains hidden; zero `/blog/*` routes added. | Optional indexation/recovery scope remains open for owner preference. |

---

## Part D2: Approved Legal Content Outlines & Exact Blocker List (`VER-04`–`VER-06`)

*Mandatory Governance Notice (`Decisions #6`, `#24`, `#44`, `#54`): The outlines below are **structural preparation drafts only — NOT legal advice**. **Zero placeholder routes (`/privacy-policy/`, `/cookie-policy/`, `/terms-and-conditions/`) were created or added to `App.tsx`, `vite.config.ts`, or `public/sitemap.xml`**, because missing verified owner facts prohibit publication (`NOT AUTHORISED`). Qualified UK legal/compliance review and explicit owner sign-off remain mandatory before publication.*

### 1. Code-Verified Technical Cookie & Data Audit (`EVIDENCE VERIFIED` on Local Build)
Direct static inspection across `/index.html` and `/src/**` confirmed:
- **Tracking / Analytics Scripts:** **`0`** (no Google Analytics, Tag Manager, PostHog, Plausible, or marketing pixels).
- **Browser Storage & Client Cookies:** **`0`** occurrences of `document.cookie`, `localStorage`, or `sessionStorage` in active frontend components (`useServiceViews.ts` removed in `P2.7`).
- **Web Forms:** **`0`** `<form>` elements rendered on active routes (`Decision #54` Email-only `/contact/`).
- **External Network Requests in Active HTML (`index.html` lines `57–60`):** Requests Google Fonts stylesheet/font binaries from **`https://fonts.googleapis.com`** and **`https://fonts.gstatic.com`** (meaning visitor IP/HTTP headers reach Google Fonts CDN unless fonts are self-hosted prior to Stage 3 — important accuracy check for UK GDPR disclosures).
- **Host / Edge Logs & Essential Cookies (Cannot Claim Zero Without Host Selection):** Once deployed behind Cloudflare (`Approach B`) or origin web hosting (`Approach A`/`C`), standard HTTP access/security logs and strictly necessary edge security cookies (e.g., Cloudflare DDoS/bot mitigation cookies) may operate outside frontend code. Do **NOT** claim *"no cookies or data ever exist"* without verifying the live host/CDN environment (`VER-06`).

### 2. Draft Structural Outlines & Missing Blockers Per Legal Page

| Planned Route (Unpublished) | Verified Facts Available Today | Exact Missing Facts Blocking Draft Completion | Required Sections Pending Owner + Legal Sign-Off |
|---|---|---|---|
| **`/privacy-policy/`** | Brand (`WPCarePoint`), email-only channel (`contact@wpcarepoint.co.uk`), correspondence address (`Robert Denholm House, Bletchingley Road, Nutfield RH1 4HW, United Kingdom`), zero contact forms (`#54`), zero analytics/tracking (`#44`, `#54`), Google Fonts request in `index.html`. | **1.** Legal entity name & trading form (`Sole Trader` vs `Ltd`/`LLP`).<br>**2.** Named UK GDPR Data Controller + registered office.<br>**3.** ICO registration reference (or exemption basis).<br>**4.** Exact retention durations (unconverted emails, client records, edge logs).<br>**5.** Confirmed mailbox provider (`VER-17`) + final hosting/CDN processor (`VER-18`) + UK/EEA transfer safeguards.<br>**6.** Decision on self-hosting fonts vs disclosing Google Fonts transfer. | 1. Who We Are & Data Controller (`VER-04`)<br>2. Scope (`B2B Email Enquiries Only` — no site forms/marketing trackers)<br>3. Personal Data Collected (direct email content, Google Fonts HTTP request, essential host/edge security logs)<br>4. Lawful Bases (`Art. 6(1)(b)` pre-contractual/contract; `Art. 6(1)(f)` legitimate interests)<br>5. Sub-Processors & International Transfers (`VER-06`/`VER-18`)<br>6. Retention Periods (`VER-06`)<br>7. UK GDPR Data Subject Rights & ICO Complaint Right<br>8. Effective Date & Legal Sign-Off |
| **`/cookie-policy/`** | Local app sets **`0` first-party JS cookies**, **`0` analytics cookies**, **`0` marketing pixels**, and **`0` `localStorage`/`sessionStorage` tracking keys** (`EVIDENCE VERIFIED`). | **1.** Final hosting/CDN choice (`Approach B` Cloudflare vs `A` cPanel vs `C` VPS) to document exact strictly necessary security/CDN cookies (`__cf_bm` / `cf_clearance` only if triggered) accurately.<br>**2.** Confirmation that Cloudflare Web Analytics / Zaraz stay **OFF** (`#44`/`#54`).<br>**3.** Entity/Controller identity (`VER-04`) for policy ownership. | 1. Policy Scope & UK PECR Basis<br>2. Statement of Zero Analytics, Advertising & Non-Essential Tracking (`Analytics OFF`)<br>3. Strictly Necessary / Edge Security Cookies Table (populated strictly from confirmed host/CDN behaviour)<br>4. Third-Party Font Requests Note (`fonts.googleapis.com` / `fonts.gstatic.com`)<br>5. Browser Controls & Contact Details (`VER-04`) |
| **`/terms-and-conditions/`** | Website operates purely informational marketing + Email-only enquiry initiation (`Decision #54`), `"Enquire for Pricing"`, zero online checkout/payments, zero `24/7` SLA claims (`EVIDENCE VERIFIED`). | **1.** Exact legal entity name & company/trading identity (`VER-04`).<br>**2.** Companies House number & country of registration (`England & Wales`, if `Ltd`/`LLP` — `VER-05`).<br>**3.** VAT status & invoicing/payment rules (`VER-05`/`VER-08`).<br>**4.** Scope boundaries distinguishing website use terms vs separate written client Statement of Work / Care Plan contract terms.<br>**5.** Governing law (`England & Wales`), liability caps, and IP ownership wording approved by owner/legal reviewer. | 1. Company / Business Identity & Contact (`VER-04`/`VER-05`)<br>2. Website Use & Informational Scope (no binding quote/SLA formed by site copy alone)<br>3. Separate Written Proposal / Client Agreement Precedence<br>4. Intellectual Property Rights<br>5. Acceptable Use & Security Disclaimers<br>6. Limitation of Liability (UK B2B statutory carve-outs)<br>7. Governing Law & Jurisdiction (`England & Wales`) |

---

## Part D3: Host-Neutral Conditional Action Matrix & Legacy URL Hold Notice (`WPCP-P2.10-V01`)

- **Host-Dependent Configs Audited & Verified Untouched (`EVIDENCE VERIFIED`):**
  - `/wrangler.jsonc` (`"not_found_handling": "single-page-application"`) — **NOT modified**; still requires switch to `"404-page"` + Worker routing **only** if `Approach B` Cloudflare Pages + Worker is approved.
  - `/public/.htaccess` (Apache SPA fallback to `/index.html`) — **NOT modified**; must be removed (if `Approach B`) or rewritten cleanly with Apache `301`/`410`/`404` rules **only** if `Approach A` cPanel is confirmed.
  - `/vercel.json` (`rewrites /services/:slug*`) — **NOT modified**; retire unless Vercel is chosen.
  - `/public/CNAME` (`wpcarepoint.co.uk`) & `/.github/workflows/deploy.yml` (`actions/deploy-pages@v4`, already `workflow_dispatch`-gated & `verify:build`-protected in `P2.9`) — **NOT modified** in `P2.10`.
- **Legacy URL & Redirect Hold (`VER-18`, `VER-14`, `VER-16`):**
  - Because Part B-2, B-3, and B-4 received **zero** owner answers, **zero** `301` or `410` rules were coded or deployed, **zero** new routes were built for `/wordpress-maintenance-support/`, `/wordpress-security-emergency-support/`, `/wordpress-design-development/`, or `/woocommerce-development/`, and `/TASK_1_6_PROVISIONAL_RECONCILIATION.md` remains strictly provisional (`NOT AUTHORISED`).

---

## Part D4: Stage 3 Pre-Launch Technical Preparation Checklist (`15` Gates)

| # | Technical Preparation Gate | Current Stage 2 / Pre-Launch Status | Evidence / Blocker Detail |
|---:|---|---|---|
| **1** | **GitHub Repository Ownership & Access** | **`PENDING EXTERNAL ACCESS`** | Local workspace has no `.git` (`NO_GIT_REPO`); repo URL, team permissions & branch protection unknown (`G1`, `G5`). |
| **2** | **Branch Strategy & CI/Deploy Workflow** | **`EVIDENCE VERIFIED` (Local Guard) / `PENDING OWNER INPUT` (Host)** | `deploy.yml` auto-push removed & `npm run lint` + `verify:build` active (`P2.9`); target host deploy job awaits `Approach B`/`A`/`C` decision (`G2`). |
| **3** | **Local Build, Prerender & QA Verification (`#53`)** | **`EVIDENCE VERIFIED`** | `npm run lint`, `npm run build` (`vite build && verify:build`), and `npm run test:local-qa` (`15` routes `200`, `404` `noindex`, `105` Playwright checks) passing locally. |
| **4** | **Hosting Target Selection & Compatibility** | **`PENDING OWNER INPUT`** | Choose `Approach B` Cloudflare Pages + Worker vs `Approach A` cPanel (`12`-pt check `TECHNICALLY UNVERIFIED`) vs `Approach C` VPS (`H1`, `H2`). |
| **5** | **Environment Variables & Zero-Secret Hygiene** | **`EVIDENCE VERIFIED`** | Zero runtime API keys, zero `VITE_*` secrets, and zero Form/Resend/Turnstile keys needed for Release 1 (`#54`, `G3`); production project env settings check pending repo/host setup. |
| **6** | **HTTPS, Canonical Host (`apex` vs `www`) & Trailing-Slash Normalisation** | **`PENDING EXTERNAL ACCESS`** | Local HTML enforces `https://wpcarepoint.co.uk/<route>/`; live `http -> https`, `www -> apex`, and single-hop `/` Edge normalisation require Stage 3 Edge deployment (`#29`). |
| **7** | **True `404` & Confirmed Spam `410 Gone` Enforcement** | **`EVIDENCE VERIFIED` (Local `404`) / `PENDING OWNER INPUT` (Edge `410`)** | Local `server.ts` & `dist/404.html` verified (`P2.9`); production `wrangler.jsonc` (`single-page-application`) & `.htaccess` SPA fallback still override `404`/`410` until host Worker/rules are authorised. |
| **8** | **Owner-Approved Single-Hop `301` Legacy Redirect Map** | **`PENDING OWNER INPUT`** | `4` WP core URLs, `/leadership/`, `/site-map/`, retired `2026-11-21` slugs, and `/wordpress-seo-speed-optimization/` (`#40`) remain provisional pending owner + SEO sign-off. |
| **9** | **`sitemap.xml`, `robots.txt` & `llms*.txt` Parity** | **`EVIDENCE VERIFIED` (Local Static Files)** | All match the `15` canonical trailing-slash `200` routes (`dist/404.html` excluded); staging hostnames still require `X-Robots-Tag: noindex, nofollow` at Edge (`C5`). |
| **10** | **Legal Pages & Mandatory `VER-04`–`VER-06` Disclosure Gates** | **`PENDING OWNER INPUT` (`NOT AUTHORISED`)** | Outlines prepared cleanly (`Part D2`); zero legal routes published until entity, Companies House/VAT, ICO, retention, processors & legal sign-off clear. |
| **11** | **`contact@wpcarepoint.co.uk` Inbox & Mail DNS (`MX`/`SPF`/`DKIM`/`DMARC`)** | **`PENDING OWNER INPUT` & `PENDING EXTERNAL ACCESS`** | `/contact/` UI (`Email-only`) verified locally; owner inbox receipt test & live Cloudflare mail DNS verification remain pending (`VER-17`, `C3`). |
| **12** | **Zero Analytics / Cookie / PECR Compliance Lock (`#44`, `#54`)** | **`EVIDENCE VERIFIED` (Local) / `PENDING OWNER INPUT` (Cloudflare)** | `0` analytics/cookie/localStorage scripts in local `index.html`/`src/`; Cloudflare Web Analytics auto-injection must remain confirmed **OFF** at Edge (`C4`); Google Fonts external request noted in `Part D2`. |
| **13** | **Origin Backup & Pre-Cut-Over Rollback Snapshot** | **`PENDING EXTERNAL ACCESS`** | Live origin snapshot, low-TTL DNS prep, and `7–14` day rollback confirmation not yet verified (`H4`). |
| **14** | **Post-Deploy Live `curl` Verification Matrix Plan** | **`EVIDENCE VERIFIED` (Plan Ready — Stage 3 Only)** | `curl -sI` verification plan covering `15 × 200`, single-hop `301`s, `410` spam paths, `404` `noindex`, preview `noindex`, and `sitemap.xml`/`robots.txt` (`Part A5`) awaits Stage 3 go-live. |
| **15** | **Search Console Sitemap Resubmission & Post-Launch Monitoring Plan** | **`PENDING OWNER INPUT` (Stage 3 Only)** | Planned after production verification (`VER-15` `Pages.csv` stays `DEFERRED BY OWNER`; optional URL Inspection on `/`, `/wordpress-maintenance-support/`, `/wordpress-security-emergency-support/`). |

---

## Part D5: Reconciled Owner Decisions (`Part B` + `Auto-Deploy`) & Owner Evidence Statements (`Part C` — `WPCP-P2.11-V01`)

*Historical Traceability Note: Parts `D1–D4` above preserve the pre-interview `WPCP-P2.10-V01` (`0/12`) workspace snapshot verbatim. Parts `D5–D9` record the `WPCP-P2.11-V01` (`2026-11-27`) owner interview decisions and owner-provided statements, explicitly distinguishing **`Owner Statement`** from **`Verified Documentary / Technical Evidence`**.*

### 1. Reconciled Part B Decisions (`#55–#60`)

| Area | Reconciled Owner Decision (`2026-11-27`) | Verification & Implementation Constraint | Status |
|---|---|---|---|
| **Part B-1: Hosting Direction** | Current origin: **Namecheap Shared Hosting with cPanel**. Future preferred hosting: **Hostinger hPanel** (owner plans to purchase Hostinger next month). Replaces prior cPanel/Apache target assumptions (`Decision #55`). | Do **NOT** assume Hostinger supports the existing deployment method, `.htaccess`, Node, SSH, FTP, or Git deploy before inspecting the purchased plan. Zero purchase or migration authorised now. | **`OWNER APPROVED DIRECTION — PLAN UNPURCHASED / UNVERIFIED`** |
| **Part B-2: Legacy URLs & `/site-map/`** | `/wordpress-maintenance-support/` -> `301` `/services/website-care-support/`; `/wordpress-security-emergency-support/` -> `301` `/services/website-care-support/` *(conditional on confirming content relevance)*; `/wordpress-design-development/` -> `301` `/services/website-development/`; `/woocommerce-development/` -> `301` `/services/ecommerce-development/`; `/leadership/` -> `410` if no verified equivalent exists; `/site-map/` -> create a useful HTML sitemap page (`Decision #56`). | Production redirect rules remain gated by evidence, Hostinger/Cloudflare compatibility, and explicit Stage 3 approval. `/site-map/` HTML page is not yet implemented locally. | **`OWNER APPROVED DIRECTION — EXECUTION GATED`** |
| **Part B-3: Release Scope** | **15 core routes for Release 1.** Blog and Portfolio are **Wave 2** and must stay outside the launch index until genuine content is recovered and approved (`Decision #57`). | Matches active 15-route Vite build (`verify:build` verified). Zero `/blog/*` or portfolio URLs in Release 1 sitemap. | **`OWNER APPROVED & MATCHED LOCALLY`** |
| **Part B-4: Spam, `404` & `noindex`** | Exact verified spam URLs -> `410`; unrelated unknown URLs -> `404`; **zero blanket homepage redirects**; do not invent spam paths; preserve staging access protection/`noindex` safeguards where applicable (`Decision #57`). | Local Express & `dist/404.html` enforce `404` + `noindex`; production Edge `410`/`404` rules stay gated on Hostinger + Cloudflare verification. | **`OWNER APPROVED DIRECTION — EDGE EXECUTION GATED`** |
| **Part B-5: Pricing & Claims** | Retain `"Enquire for Pricing"`; prohibit unverified project counts, ratings, testimonials, awards, guarantees, founding year, or `24/7` claims; **Fiverr review claims require current evidence and permission** (`Decision #58`). | Verified compliant across all `15` active local routes (`0` fake claims, `"Enquire for Pricing"` active). | **`OWNER APPROVED & VERIFIED LOCALLY`** |
| **Part B-6: Privacy & Contact** | Email-only contact (`contact@wpcarepoint.co.uk`); zero contact forms or tracking tools active per code inspection; account for Google Fonts external request; verify hosting logs & retention with provider; legal review mandatory before publication (`Decision #58`). | Static scan confirmed `0` `<form>`, `0` analytics, `0` `document.cookie`/`localStorage`, and external `fonts.googleapis.com` / `fonts.gstatic.com` requests. Legal pages remain unpublished/`NOT AUTHORISED`. | **`OWNER APPROVED PRINCIPLES — LEGAL GATES BLOCKED`** |
| **Auto-Deploy Strategy (`#60`)** | Owner selected **YES** for GitHub automatic deployment: pushes to GitHub `main` trigger automated build & tests; production deploy proceeds automatically *only after* hosting, security, verification, and rollback gates clear (`Decision #60`). | Failed build/deploy must never replace last known-good release; rollback must be documented & tested; never assume FTP/SSH/Git before Hostinger check; never store/request secrets; **NOT permission to enable push-to-production today**. | **`OWNER APPROVED STRATEGY — IMPLEMENTATION GATED`** |

### 2. Reconciled Part C Owner Statements (`21` Items — Statements Only, NOT Independent Documentary Proof)

| # | Item | Owner-Provided Statement (`2026-11-27`) | Verification Classification | Remaining Documentary / Technical Action |
|---:|---|---|---|---|
| **C-1** | Business structure | **Sole Trader** | **`OWNER STATEMENT ONLY`** | Confirm statutory Sole Trader disclosure wording (`Owner Full Name t/a WPCarePoint UK`). |
| **C-2** | Legal business name | **`WPCarePoint UK`** | **`OWNER STATEMENT ONLY`** | Reconcile with final UK GDPR Data Controller identity & trading disclosures (`VER-04`). |
| **C-3** | Business reg / Companies House | Described as **`"on process"`** *(note: Companies House # normally applies to Ltd/LLP, not Sole Traders)* | **`UNVERIFIED / IN PROCESS`** | Clarify whether sole trader registration (HMRC/UTR) or future Ltd incorporation is intended; provide proof once completed (`VER-05`). |
| **C-4** | VAT registration | Described as **`"on process"`** | **`UNVERIFIED / IN PROCESS`** | Supply VAT registration confirmation / `GB` number once complete (`VER-05`); keep `"Enquire for Pricing"` (`VER-07`/`VER-08`). |
| **C-5** | ICO registration | Owner is **`unsure`** | **`UNVERIFIED / PENDING`** | Complete ICO fee-payer self-assessment or locate ICO registration reference (`VER-06`). |
| **C-6** | Data Controller / Processor role | **`Unresolved`** *(operational control & website security alone do not establish legal UK GDPR role)* | **`UNRESOLVED LEGAL BLOCKER`** | Obtain qualified UK GDPR assessment naming the exact legal Data Controller & processing capacity (`VER-04`/`VER-06`). |
| **C-7** | Contact channel | Currently **Email-only**; calls & WhatsApp planned for later | **`OWNER STATEMENT` + `CODE VERIFIED`** | Keep phone/WhatsApp unpublished (`VER-02`). |
| **C-8** | Data retention | Client names, email addresses & messages retained **during ongoing work**; **no exact retention period established** | **`OWNER STATEMENT — INCOMPLETE FOR UK GDPR`** | Define explicit numerical retention schedules (enquiries, client files, server logs) before publishing `/privacy-policy/` (`VER-06`). |
| **C-9** | Current hosting provider | **`Namecheap`** *(Shared Hosting with cPanel)* | **`OWNER STATEMENT ONLY`** | Preserve untouched until rollback-safe Hostinger migration plan is verified (`VER-18`). |
| **C-10** | Future hosting provider | **`Hostinger`** *(hPanel, planned purchase next month)* | **`OWNER DECISION / UNPURCHASED`** | Inspect actual Hostinger plan features & deployment compatibility once selected/purchased (`VER-18`). |
| **C-11** | Current email provider | **`Namecheap Private Email`** | **`OWNER STATEMENT ONLY`** | Document as sub-processor in Privacy draft; preserve mail DNS intact (`VER-06`/`VER-17`). |
| **C-12** | `contact@wpcarepoint.co.uk` inbox | Owner confirms inbox can **receive and reply** to emails | **`OWNER STATEMENT CONFIRMED`** | Keep `contact@wpcarepoint.co.uk` on `/contact/`; do not add forms (`#54`). |
| **C-13** | Google Fonts external request | Requests **`fonts.googleapis.com`** & **`fonts.gstatic.com`** | **`EVIDENCE VERIFIED (CODE)`** | Account for IP/header transfer in Privacy/Cookie policy OR evaluate self-hosting fonts cleanly before launch (`VER-06`). |
| **C-14** | Analytics & marketing tools | Planned for future; **none currently active** | **`OWNER STATEMENT` + `CODE VERIFIED`** | Keep `analytics OFF` (`#44`/`#54`); confirm Cloudflare Web Analytics stays OFF (`VER-06`). |
| **C-15** | GitHub repository | **`https://github.com/wpcarepoint1/WPCarePoint.co.uk/`** | **`OWNER STATEMENT` (`NO_GIT_DIR` LOCALLY)** | Local container has no `.git` directory; link/sync via approved repo permissions (`VER-18`). |
| **C-16** | Active branch | **`main`** | **`OWNER STATEMENT` (`UNVERIFIED IN CONTAINER`)** | Verify branch protection rules & PR checks on GitHub `main` (`VER-18`). |
| **C-17** | Current DNS & nameservers | **`Namecheap`**, per owner | **`OWNER STATEMENT — TECHNICALLY UNVERIFIED`** | Run read-only DNS/NS lookup and confirm nameserver authority before any Cloudflare/Hostinger change (`VER-18`). |
| **C-18** | Cloudflare SSL/TLS | Owner reports active | **`OWNER STATEMENT — PROXY & DNS UNVERIFIED`** | Reconcile with C-17 (if nameservers are Namecheap, verify how Cloudflare SSL/TLS/proxy operates — CNAME vs full zone) without modifying live records (`VER-18`). |
| **C-19** | `MX`, `SPF`, `DKIM`, `DMARC` | Owner reports configured | **`OWNER STATEMENT — PROTECTED (DO NOT MODIFY)`** | Verify exact live records read-only prior to DNS/host updates; strictly never break Namecheap Private Email DNS (`VER-17`). |
| **C-20** | Current website backup | Owner confirms complete backup is available | **`OWNER STATEMENT ONLY`** | Verify backup restorability & off-host copy prior to any Stage 3 cut-over (`VER-18`). |
| **C-21** | Staging environment | Owner **does not want to delay the live site for staging** | **`RISK ACCEPTANCE / PREFERENCE ONLY`** | Explicitly NOT technical proof that direct production deploys are safe; mandatory CI gates + tested rollback remain required (`#60`). |

---

## Part D6: GitHub Workflow Inspection (`/.github/workflows/deploy.yml`) & Outdated Assumption Audit

### 1. Actual Inspected Behaviour of `/.github/workflows/deploy.yml` (`49` Lines)
Direct inspection confirmed on `2026-11-27`:
- **Trigger (`lines 5–6`):** **`workflow_dispatch:` only** — automatic `push`-triggered deployment is **disabled**.
- **Permissions (`lines 8–11`):** `contents: read`, `pages: write`, `id-token: write`.
- **Build Job (`lines 18–38`):** Checks out code (`actions/checkout@v4`), sets up Node `20` (`actions/setup-node@v4`), runs `npm install && npm run lint && npm run build` (where `npm run build` executes `vite build && npm run verify:build`), runs `npm run verify:build` + `touch dist/.nojekyll`, configures Pages (`actions/configure-pages@v5`), and uploads `./dist` (`actions/upload-pages-artifact@v3`).
- **Deploy Job (`lines 39–48`):** Deploys artifact to **`github-pages`** environment using **`actions/deploy-pages@v4`**.

### 2. Outdated Assumptions & Discrepancies Identified (Documentation Reconciled)
1. **cPanel / Apache Assumption Outdated:** Prior readiness sections (`Part A3 H2/H3`, `Part B-1`, `Part C-5`, `OWNER_DECISION_PACK.md`) framed `Approach A` as remaining on an unknown generic cPanel host vs `Approach B` Cloudflare Pages. Current origin is now verified by owner statement as **Namecheap Shared Hosting with cPanel**, and future preferred target is **Hostinger hPanel** (planned next month).
2. **`deploy.yml` Target Discrepancy:** Current workflow deploys `./dist` to **GitHub Pages** (`deploy-pages@v4`), NOT to Namecheap cPanel or Hostinger hPanel. It MUST NOT have `on: push` enabled until retargeted cleanly to a verified Hostinger deployment mechanism (or confirmed hosting pipeline) with all gates passing.
3. **Unaligned Host Config Files Remaining Untouched (`VER-18`):** `/wrangler.jsonc` (`single-page-application` SPA mode), `/public/.htaccess` (Apache catch-all `/index.html` Soft-404 rewrite), `/vercel.json`, and `/public/CNAME` reflect prior/unaligned targets and remain unmodified until Hostinger hPanel plan capabilities + Cloudflare proxy status are confirmed.
4. **Cloudflare vs Namecheap Nameserver Ambiguity (`C-17` vs `C-18`):** Owner stated both *Namecheap DNS/nameservers* and *Cloudflare SSL/TLS active*; this requires read-only technical verification to establish whether traffic is proxied through Cloudflare or served directly from Namecheap origin.
5. **Local `.git` Absence & Unbuilt `/site-map/`:** Workspace container lacks a `.git` folder (`NO_GIT_DIR`), and approved `/site-map/` HTML sitemap page (`Part B-2`) is not yet built in `src/` (stays scheduled for next authorised implementation task).

---

## Part D7: Hostinger hPanel Deployment Readiness & Automatic Deployment Gate Checklist (`WPCP-P2.11-V01`)

| # | Readiness & Auto-Deploy Gate | Current Status | Verification / Implementation Requirement Before Stage 3 |
|---:|---|---|---|
| **1** | **Hostinger Plan Purchase & Capability Verification** | **`PENDING PURCHASE & CHECK`** | Owner plans purchase next month; inspect actual Hostinger hPanel plan for supported deployment options (Git/SSH/FTPS/hPanel API), `.htaccess` support (`301`/`410`/`404`), Node/static serving, SSL, and backup tools — **never assume capabilities beforehand**. |
| **2** | **Static Build Compatibility (`dist/` Parity)** | **`EVIDENCE VERIFIED` (Local) / `UNVERIFIED` (Hostinger)** | Vite outputs self-contained static HTML directories (`dist/<route>/index.html`), `dist/404.html`, `dist/sitemap.xml`, and `1.3M` WebP assets (`#53`). Confirm how Hostinger `public_html` serves `/route/index.html` and custom `ErrorDocument 404` / `410` directives without Apache Soft-404 overrides. |
| **3** | **Secure GitHub-to-Hostinger Deployment Method** | **`BLOCKED / NOT CONFIGURED`** | Current `deploy.yml` uses `actions/deploy-pages@v4`. Once Hostinger capabilities are verified, design an encrypted, atomic GitHub Actions -> Hostinger release workflow **without** storing credentials in code or guessing FTP/SSH/Git transport beforehand. |
| **4** | **Secret Management & Credential Hygiene** | **`EVIDENCE VERIFIED` (Zero Secrets in Repo) / `GATED` (CI Secrets)** | Release 1 build needs zero runtime `VITE_*` secrets (`#54`). Any future Hostinger deploy secrets must reside strictly in **GitHub Actions Encrypted Secrets** (environment-scoped), never in project files, logs, or chat. |
| **5** | **CI Build, Lint, Artifact & Regression Test Gates** | **`EVIDENCE VERIFIED` (Local Scripts) / `GATED` (Auto-Deploy)** | Mandatory CI pipeline before any future deploy step: `npm ci`/`install`, `npm run lint`, `npm run build` (`vite build && verify:build`), and headless QA checks. **Failed build/test steps MUST abort deployment and preserve last known-good release.** |
| **6** | **Backup, Staging Risk & Tested Rollback Procedure** | **`OWNER BACKUP STATEMENT` / `ROLLBACK UNTESTED`** | Owner confirms Namecheap backup exists (`C-20`) and accepts not waiting for a staging server (`C-21`). Before enabling auto-deploy, document & test an atomic rollback procedure (release-folder symlink/atomic swap or instant verified archive restore) so failed deploys never overwrite live production silently. |
| **7** | **DNS, Nameserver & Cloudflare Proxy/SSL Verification** | **`TECHNICALLY UNVERIFIED`** | Reconcile Namecheap nameservers (`C-17`) vs Cloudflare SSL/TLS (`C-18`), verify SSL mode (`Full (Strict)`), confirm whether Cloudflare or Hostinger handles `301`/`410`/`404` rules cleanly, and inspect `/wordpress-security-emergency-support/` content relevance (`Part B-2`). |
| **8** | **`MX` / `SPF` / `DKIM` / `DMARC` Email DNS Preservation** | **`OWNER STATEMENT — PROTECTED`** | Preserve all **Namecheap Private Email** (`contact@wpcarepoint.co.uk`) DNS records intact across any nameserver or Hostinger cut-over (read-only audit required before changing `A`/`CNAME` records). |
| **9** | **Explicit Production Deployment Approval** | **`NOT AUTHORISED`** | Strategic YES (`#60`) is planning approval only. Enabling `on: push` automatic deploy and executing first live cut-over remain strictly prohibited until Gates `1–8` + Legal blockers (`Part D8`) + `/site-map/` implementation receive explicit owner Stage 3 sign-off. |

---

## Part D8: Updated Legal, Privacy & Contact Evidence Checklist (`VER-01`, `VER-04`–`VER-06`)

| Gate | Topic | Owner-Provided Statement / Code Fact | Documentary / Legal Verification Status | Publication Impact |
|---|---|---|---|---|
| **`VER-04`** | Business Identity & Data Controller | Structure: **Sole Trader**; Legal Name: **`WPCarePoint UK`** (`Owner Statement`); **`contact@wpcarepoint.co.uk`** & **`RH1 4HW`** (`/contact/` only); **Data Controller / Processor role: `UNRESOLVED`**. | **`UNRESOLVED LEGAL BLOCKER`** *(Operational control/security does not establish UK GDPR legal controller/processor role)* | Blocks `/privacy-policy/`, `/cookie-policy/`, `/terms-and-conditions/`. |
| **`VER-05`** | Business Reg, Companies House & VAT | Business registration & Companies House: **`"on process"`** *(Companies House # normally applies to Ltd/LLP, not Sole Trader)*; VAT registration: **`"on process"`**. | **`PENDING DOCUMENTARY VERIFICATION`** | Blocks `/terms-and-conditions/` statutory disclosures & any future `£` pricing (`VER-07`/`VER-08`). |
| **`VER-06`** | ICO, Retention, Google Fonts, Logs & Processors | ICO: **`"unsure"`**; Retention: **`"during ongoing work"`** (**no exact duration set**); Analytics: **`0` scripts today (`EVIDENCE VERIFIED`)**, planned later; Google Fonts external request (`fonts.googleapis.com` / `fonts.gstatic.com` — **`EVIDENCE VERIFIED`**); Email host: **`Namecheap Private Email`** (`Owner Statement`); Hosting logs: Namecheap/Hostinger unverified. | **`BLOCKED`** *(Missing exact retention schedule, ICO status, provider server-log policy, Data Controller identity, & qualified legal review)* | **Do NOT write or publish final legal policies on assumptions.** `/privacy-policy/`, `/cookie-policy/`, `/terms-and-conditions/` remain unpublished (`NOT AUTHORISED`). |
| **`VER-01` / `VER-17`** | Email-Only Enquiry Channel | **`contact@wpcarepoint.co.uk`** receives & replies on **Namecheap Private Email** (`Owner Statement`); `0` web forms (`#54`). | **`OWNER STATEMENT CONFIRMED`** *(DNS read-only check still needed before cut-over)* | Ready for R1 Email-only UI; form backend remains Out of Scope (`#54`). |

---

## Part D9: Staging Preference Risk Acceptance & Legacy Redirect Hold

- **Staging Risk Acceptance (`C-21`):** Owner preference *not to delay live launch for a staging environment* is formally logged as an **explicit owner risk acceptance**, NOT proof that direct production deploys are low-risk. Because of this, strict automated pre-deploy `lint` + `build` + `verify:build` + `test:local-qa` gates, non-destructive rollback, and prior backup verification (`Part D7`) are mandatory before `on: push` auto-deploy can ever be switched on.
- **Legacy Redirect Hold (`#56`):** Approved targets for `/wordpress-maintenance-support/`, `/wordpress-design-development/`, `/woocommerce-development/`, conditional `/wordpress-security-emergency-support/` *(pending content-relevance verification)*, `/leadership/` (`410` if no verified equivalent), exact verified spam `410`, unknown `404`, and `/site-map/` HTML page remain unexecuted until Hostinger/Cloudflare compatibility and Stage 3 approval clear.

---

## Part F: Stage 3 Launch Readiness Summary (`WPCP-P2.11-V01`)

- **Overall Stage 3 Launch Readiness Status:** **`NOT READY`**

| Category | Current Readiness Details |
|---|---|
| **Verified Locally (`EVIDENCE VERIFIED`)** | `15` core Release 1 routes + preserved noindex `dist/404.html` (zero canonical/`hreflang`/`og:url`) + `15`-route `sitemap.xml` parity + clean `public/llms*.txt` + `1.3M` `.webp` images + **`0` analytics / `0` `<form>` / `0` `document.cookie` or `localStorage` keys** + external Google Fonts request identified + `/.github/workflows/deploy.yml` verified manual-only (`workflow_dispatch`, `lint` + `verify:build` active) + `npm run lint` / `npm run build` / `npm run test:local-qa` (`105` checks) verified. |
| **Owner Decisions Reconciled (`WPCP-P2.11-V01` `#55–#60`)** | Future hosting target updated to **Hostinger hPanel** (next month; current Namecheap cPanel); legacy WP `301`/`410` directions & planned `/site-map/` HTML page recorded; Release 1 `15` routes + Wave 2 Blog/Portfolio locked; `"Enquire for Pricing"` & no unverified claims/Fiverr without evidence locked; **GitHub automatic deployment strategy** approved as **YES (implementation-gated)**. |
| **Hard Blockers Keeping Stage 3 `NOT READY`** | **1. Legal (`VER-04`–`VER-06`):** Data Controller legal role unresolved, exact retention periods unset, ICO status unsure, business reg/VAT `"on process"`, provider server-log policy unverified, qualified legal review missing.<br>**2. Hosting & Auto-Deploy (`VER-18`):** Hostinger plan unpurchased/capabilities unverified, `deploy.yml` targets `github-pages` (not Hostinger), rollback untested, `/wrangler.jsonc`/`.htaccess`/`vercel.json`/`CNAME` unaligned.<br>**3. DNS & Redirect Validation:** Namecheap NS vs Cloudflare SSL/proxy unverified, read-only `MX`/`SPF`/`DKIM`/`DMARC` snapshot needed, `/wordpress-security-emergency-support/` relevance check pending, `/site-map/` HTML page unbuilt. |
| **Explicitly Prohibited Today (`NOT AUTHORISED`)** | Production deployment, enabling `push`-to-production in `deploy.yml`, Hostinger purchase/migration, DNS/Cloudflare changes, live `301`/`410` redirects, publishing `/privacy-policy/`, `/cookie-policy/`, or `/terms-and-conditions/`, activating contact forms/analytics, or creating/storing production secrets. |


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
