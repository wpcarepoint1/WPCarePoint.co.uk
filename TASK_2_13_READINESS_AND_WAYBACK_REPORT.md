# Task 2.13: Wayback Security Snapshot Verification & Legal/Hosting Gate Closure Package (`WPCP-P2.13-V01`)

**Prompt ID:** `WPCP-P2.13-V01` (`Version: V01`)  
**Date:** `2026-11-28`  
**Stage & Task:** Stage 2: Design & Development — Task 2.13 (`Wayback Security Snapshot Verification & Legal/Hosting Gate Closure Plan`)  
**Execution Mode:** **Planning & Documentation Only** *(Read-only repository, Wayback archive, and public DNS inspection; zero application code, SEO assets, deployment workflow, hosting configuration, DNS, or production redirect edits executed).*  
**Overall Stage 3 Verdict:** **`NOT READY`**

---

## 1. Verified Project Baseline & Discrepancy Report

### A. Confirmed True Baseline Facts
1. **Verified Local Public Routes (`16`):** Inspected `vite.config.ts`, `src/App.tsx`, `server.ts`, `public/sitemap.xml`, and `scripts/verify-build-artifacts.mjs`. The local Release 1 build strictly comprises **`16` canonical trailing-slash public routes**, including `/site-map/`:
   - `/`, `/services/`, `/about/`, `/contact/`, `/site-map/`, `/wordpress-speed-optimisation/`, `/services/website-development/`, `/services/ecommerce-development/`, `/services/ai-business-automation/`, `/services/website-care-support/`, `/services/ai-search-optimisation/`, `/services/search-engine-optimisation/`, `/services/custom-web-solutions-integrations/`, `/services/ai-powered-website-development/`, `/services/branding-brand-identity/`, `/services/digital-marketing-online-growth/`.
2. **Stage 3 Readiness:** Remains **`NOT READY`**. Zero legal pages (`/privacy-policy/`, `/cookie-policy/`, `/terms-and-conditions/`) are published, Hostinger hPanel is unpurchased/unverified (`VER-18`), and mandatory legal/GDPR gates (`VER-04`–`VER-06`) remain blocked.
3. **Prior `WPCP-P2.12-V01` Recommendation:** `/TASK_1_6_READINESS_REVIEW.md` (`Part D10`) and **Decision `#61`** recommended Option A (single-hop `301` `/wordpress-security-emergency-support/` -> `/services/website-care-support/`) over `410`, strictly conditional on inspecting the `2026-02-15` Wayback snapshot.
4. **Zero Production `301`/`410` Redirects Applied:** Neither local host configs (`wrangler.jsonc`, `public/.htaccess`, `vercel.json`) nor live GitHub Pages (`https://wpcarepoint.co.uk/wordpress-security-emergency-support/` -> `HTTP/2 404`) execute any `301` or `410` rules for `/wordpress-security-emergency-support/`.

### B. Factual Discrepancies Identified (Baseline Prompt / Older Docs vs Actual Repository & Live Evidence)

> *Historical Preservation Rule: Decisions `#56`, `#60`, `#61`, and `#62` are preserved verbatim without silent modification. Discrepancies below are surfaced explicitly for owner governance clarity.*

| # | Supposed Baseline / Historical Statement | Actual Verified Repository / Live Evidence (`2026-11-28`) | Source & Conflict Explanation |
|---|---|---|---|
| **D1** | Prompt baseline assumes *"The current deployment workflow remains manual `workflow_dispatch` only"* (`Decision #60`, `P2.11`/`P2.12`). | **`/.github/workflows/deploy.yml` (`lines 5–9`, `38–39`) currently enables `on: push: branches: [main]` + `workflow_dispatch:` + `enablement: true`**, and `/scripts/verify-build-artifacts.mjs` (`lines 186–195`) enforces `npm run lint` + `npm run verify:build` + `404.html` preservation rather than blocking `push:`. | Modified **prior to `WPCP-P2.13-V01`** under explicit owner override **`Decision #62`** (`2026-11-27`). `WPCP-P2.13-V01` made zero edits to `deploy.yml` or `verify-build-artifacts.mjs`. Conflicts with Decision `#60`'s manual-only lock until future Hostinger cutover rules reconcile it. |
| **D2** | Older `P2.11`/`P2.12` readiness docs treat GitHub Pages deployment as unconfirmed / unpushed and live origin as legacy WordPress on Namecheap (`C-9`). | **Live `https://wpcarepoint.co.uk/` currently serves the compiled `16`-route Vite build from GitHub Pages** (`HTTP/2 200`, `server: GitHub.com`, `last-modified: Fri, 27 Nov 2026 19:40:41 GMT`; `/wordpress-security-emergency-support/` returns `HTTP/2 404`), and root `/CNAME` (`wpcarepoint.co.uk`) exists alongside `/public/CNAME`. | Resulting from prior GitHub push (`pushed_at: 2026-11-27T19:38:24Z`) and manual GitHub Pages re-enablement (`has_pages: true`). |
| **D3** | Owner statement `C-17` (`Decision #59`, `2026-11-27`) reported active DNS/nameservers were at **Namecheap**, and `C-18` reported Cloudflare SSL/TLS active. | Live DNS via Cloudflare DoH (`2026-11-28`) returns authoritative `NS`: **`ns1.dns-parking.com.`** and **`ns2.dns-parking.com.`** (**Hostinger DNS**, SOA serial `2026112601`), with `A` records pointing directly to **GitHub Pages** (`185.199.108.153`, `109.153`, `110.153`, `111.153`) and no `AAAA` or Cloudflare orange-cloud proxy active on apex. | Contradicts `C-17` & `C-18`: DNS authority is currently Hostinger (`dns-parking.com`), not Namecheap and not Cloudflare proxied. |
| **D4** | Owner statement `C-19` / `VER-17` reported `MX`/`SPF`/`DKIM`/`DMARC` configured for `contact@wpcarepoint.co.uk` on Namecheap Private Email (`Decision #59`). | **CRITICAL LIVE DNS FINDING (`2026-11-28`):** Live DoH queries for **`MX`** and **`TXT`** on `wpcarepoint.co.uk` against `ns1/ns2.dns-parking.com` returned **zero `Answer` records** (`Authority` SOA only). | **Urgent Risk:** When nameservers moved to `ns1/ns2.dns-parking.com`, Namecheap Private Email `MX`/`SPF`/`DMARC` records appear absent from the active Hostinger DNS zone — inbound email to `contact@wpcarepoint.co.uk` may fail unless restored on the active DNS zone. *(Read-only observation only; zero DNS edits performed.)* |

---

## 2. Historical Wayback Snapshot Verification Record (`/wordpress-security-emergency-support/`)

### A. Capture Metadata & Completeness Verification

| Verification Field | Verified Finding |
|---|---|
| **1. Target Legacy URL** | `https://wpcarepoint.co.uk/wordpress-security-emergency-support/` |
| **2. Lookup Pattern Queried** | `https://web.archive.org/web/20260215000000/https://wpcarepoint.co.uk/wordpress-security-emergency-support/` -> Redirected (`302`) to nearest capture |
| **3. Capture on `2026-02-15` Exists?** | **Yes** (and timemap shows `2` total captures: `20260215043121` and `20260615013231`). |
| **4. Exact Archived Snapshot URL** | `https://web.archive.org/web/20260215043121/https://wpcarepoint.co.uk/wordpress-security-emergency-support/` *(Raw original HTML inspected via `id_` variant: `.../20260215043121id_/https://wpcarepoint.co.uk/wordpress-security-emergency-support/`)* |
| **5. Exact Capture Timestamp** | **`20260215043121`** (`memento-datetime: Sun, 15 Feb 2026 04:31:21 GMT`, WARC source `CC-MAIN-2026-08-...-00470.warc.gz`) |
| **6. Loads Successfully & Response Status** | **Yes — `HTTP/2 200`** (Archive response `200`; original crawl status `"200"` in Wayback timemap; original `x-archive-orig-content-length: 507356` bytes UTF-8 HTML, served originally from `x-archive-orig-platform: hostinger`, `x-archive-orig-panel: hpanel`, `PHP/8.3.17`). |
| **7. HTML Title Tag** | `Outstanding 24/7 WordPress Support Services in the UK` |
| **8. Meta Description & Canonical / Robots** | `description`: `Get reliable WordPress Support Services to resolve any website crisis quickly. Expert help is just a click away!`<br>`canonical`: `https://wpcarepoint.co.uk/wordpress-security-emergency-support/`<br>`robots`: `follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large`<br>`og:title` / `twitter:title`: `24/7 WordPress Support Services in the UK \| WP Care Point` |
| **9. Main H1 & Primary Headings** | **`<h1>`:** `Reliable UK Emergency WordPress Support Services for Quick Fixes`<br>**`<h2>`:** `WordPress Site Broken? Get Fast UK Emergency Support`; `How Our UK WordPress Premium Support Service Works`; `WordPress Pro Services for You by WPCarePoint!`<br>**`<h3>`:** `Quick UK Emergency WordPress Support Services Support When Your Site Fails`; `Skip the Stress - Get One-Time WordPress Rescue in the UK`; `Professional WordPress Web Design in the UK for Better Results`; `The Most Cost-Effective WordPress Emergency Support in the UK`; `7+ Years of WordPress Expertise for UK Websites`; `Reliable UK Customer Support`<br>**`<h4>`:** `UK WordPress Emergency Support Catalog`; `Why Choose WPCarePoint Services in the UK?` |
| **10. Snapshot Completeness** | **HTML DOM 100% complete (`507,356` bytes)** including header/main/footer text, Elementor containers, `data-src` lazy-load image URLs, 34 CTA/nav links, `Organization` + `FAQPage` JSON-LD schemas. |
| **11. Missing / Unarchived Assets** | Probed archived sub-resources in Wayback `20260215043121im_` / `cs_`: referenced LiteSpeed CSS (`/wp-content/litespeed/css/`) and sampled `wp-content/uploads/` images (logo `.png`, `WPCarePoint-Service-WordPress-Emergency-Support.jpg`, `WordPress-Rescue-1024x614.jpg`, `intro-featured-in-1.png`) returned **`HTTP 404`** in the Wayback Machine (not captured alongside the Common Crawl HTML WARC). Inline `<img>` tags in original HTML also carried LiteSpeed SVG `data:image/svg+xml` lazy-load placeholders pointing to `data-src`. |
| **12. Evidence Provenance Separation** | **Strict separation verified below.** |

### B. Provenance Separation (Original Archived Content vs Wayback Wrapper vs Unverified)

| Classification | Exact Elements Observed |
|---|---|
| **1. Original Archived HTML Content (`20260215043121id_`)** | Original WordPress/Elementor HTML DOM (`507,356` bytes), original `x-archive-orig-*` HTTP headers (`platform: hostinger`, `panel: hpanel`), `<title>`, `<meta description>`, `<canonical>`, `<h1>–<h4>` copy, 3-step onboarding text, 28-card `UK WordPress Emergency Support Catalog` (Troubleshooting, Design, Reporting, Optimization, Maintenance), 7-question `FAQPage` JSON-LD & visible FAQ text, CTAs (`Schedule a Call Now!` -> `/book-an-consultation/` & `#Schedule`), sister-site links (`.com`/`.us`/`.eu`), unverified claims (`24/7`, `7+ Years`, `over one hundred thousand users`, `"full refund"` guarantee, `Founded in 2019` footer blurb), and footer links (`WordPress Care Point`, `Trading address: Robert Denholm House, Bletchingley Road, Nutfield RH1 4HW, United Kingdom`). |
| **2. Wayback-Generated Elements (`20260215043121` wrapper only)** | Wayback top toolbar/banner injection (`__wm.init`), URL-rewriting client script (`wombat.js`), archive `content-security-policy`, `memento-datetime`, `x-archive-src`, and `server: nginx` headers on the non-`id_` wrapper response. Ignored during content analysis. |
| **3. Unverified / Missing Elements** | Live CSS visual rendering, archived JPG/PNG media thumbnails (returned `404` in Wayback), `#Schedule` modal/embedded booking widget functionality (`JS`/endpoint unexecuted), original GSC `Clicks`/`CTR`/`Position` & `Links` metrics (`VER-15` deferred), and truth verification of historical claims (`7+ Years`, `100,000+ users`, `"within hours"`, `24/7`, `"full refund"`, `2019`) which remain **prohibited/unverified under Decisions `#6`, `#15`, `#37`, `#58`**. |

---

## 3. Historical Content Summary & Direct Comparison vs `/services/website-care-support/`

### A. Verified Summary of Legacy `/wordpress-security-emergency-support/` Body Content
The archived page (`20260215043121`) presented **emergency & one-time WordPress support / rescue** for UK websites rather than purely an enterprise SOC/security-monitoring product:
1. **Primary Value Proposition:** *"fast repairs for hacked sites, plugin issues, and broken pages"*, *"urgent site repairs to malware cleanup"*, *"No long-term contracts, just budget-friendly one-time fixes"*, *"One-Time WordPress Rescue in the UK"* (theme/plugin errors, `404` & redirect loops, broken images, database connection errors, hacked sites).
2. **3-Step Process:** `Step 1: Choose a Support Service` -> `Step 2: Chat With Us & Onboard` -> `Step 3: Get Back to Business`.
3. **Interactive Catalog (`UK WordPress Emergency Support Catalog`):** Filtered across `All Categories`, `Troubleshooting`, `Design`, `Reporting`, `Optimization`, and `Maintenance` — covering theme/plugin troubleshooting, contact form repair, database connection recovery, image loading fixes, `404`/redirect fixes, custom design/landing pages/WooCommerce add-ons, Google indexing check, performance report, DB/image speed optimisation, comment spam cleanup, safe theme/plugin updates, and **`Improve WordPress Security for UK Websites`**.
4. **FAQs (`7` Questions):** Multi-timezone emergency support & malware cleanup; speed optimisation expectations; full refund guarantee *(unverified claim)*; speed timeline (`few days to a few weeks`); hosting upgrade advice; speed/security/image/caching inclusions; emergency resolution speed (*"Most issues are fixed within hours... We fix hacked websites, broken themes, plugin conflicts, redirects, database errors, and more"*).
5. **Banned Legacy Claims Present on Historical Page:** `24/7` availability, `"fixed within hours"`, `7+ Years`, `"over one hundred thousand users"`, `"full refund"` guarantee, `Founded in 2019`, `Schedule a Call Now!` -> `/book-an-consultation/` (phone/call scheduling), and `#` dead legal links in footer (`Term of use`, `Privacy Policy`, `Cookie Policy`).

### B. Direct Comparison vs Local `/services/website-care-support/` (`/src/data/dedicatedServicePagesData.ts`, lines `1635–2049`)

| Historical Element (`2026-02-15` Snapshot) | Coverage on `/services/website-care-support/` (`lines 1635–2049`) | Parity Assessment |
|---|---|---|
| **Hacked site repair & malware cleanup** | `Capability 02: Website Security & Hardening` (`lines 1720–1730`: `wp-admin` controls, role audits, XML-RPC review, *malware, injected spam file & integrity scanning*, Cloudflare SSL) + **`FAQ #5` (`wc-faq-5`, `lines 1995–1999`)**: forensic snapshot preservation, audit of injected files/spam URLs, cleanup, hardening & Google indexing recovery. | **Fully Covered (Strong Parity)** |
| **Emergency & site-down technical triage** (DB connection, fatal PHP errors, broken plugins/themes, white-screen) | `Capability 04` (`lines 1744–1754`: uptime checks, white-screen/layout/form debugging, *priority incident & WordPress emergency support*) + **`Pillar 02` (`#care-emergency`, `lines 1839–1854`)**: realistic triage via `contact@wpcarepoint.co.uk`, snapshot preservation, error-log/plugin/DNS/host root-cause isolation, post-incident hardening. | **Fully Covered (Honest Scope)** |
| **One-time fixes / No long-term contract** (`"One-Time WordPress Rescue"`, `"No long-term contracts"`) | `#one-off-fixes` Quick Fix section (`lines 1808–1814`: critical plugin conflict, broken layout, SSL error, database connection error, post-migration fault) + **`Pillar 04` (`#care-quickfix`, `lines 1872–1886`: *"No captive contracts—commission standalone repairs or step away cleanly"*)** + **`FAQ #3` (`wc-faq-3`, `lines 1983–1987`)**. | **Fully Covered** |
| **Routine WordPress maintenance, updates & backups** | `Capability 01` (staging-first core/theme/plugin updates), `Capability 03` (encrypted off-site backups & tested restores), `Essential`/`Advanced`/`Elite Care` (`Enquire for Pricing`, `lines 1758–1807`). | **Fully Covered** |
| **Catalog speed/design offshoots** | `relatedSection` (`lines 2008–2039`) links cleanly to **`/wordpress-speed-optimisation/`** and **`/services/website-development/`**. | **Clean Cross-Linking** |
| **Legacy unverified / banned claims** (`24/7`, `"within hours"`, `Schedule a Call`, `7+ Years`, `100,000+ users`, `"full refund"`, `2019`) | Intentionally **excluded** and explicitly clarified in `asidePoints` (`lines 1684–1686`), `Pillar 02` (`lines 1844–1853`), `Why Choose 01` (`lines 1935–1938`), and **`FAQ #2` (`wc-faq-2`, `lines 1977–1981`)**: honest email-only communication at `contact@wpcarepoint.co.uk` without fabricated `24/7` or `<30 min` SLA claims. | **Intentional Governance Compliance (`#6`, `#15`, `#37`, `#58`) — NOT a defect** |
| **Above-the-fold visibility for redirected emergency visitors** | Hero (`lines 1644–1662`) leads with proactive maintenance & mentions *"direct email technical troubleshooting—alongside one-off WordPress fixes"*; `jumpLinks` (`lines 1663–1670`) list `Why Care Matters`, `Care Scope`, `Plan Tiers & Quick Fix`, `Technical Safeguards`, `FAQ`, `Enquire` (no dedicated `#care-emergency` anchor link in top jump bar yet). | **Minor Optional UX Improvement** *(non-blocking)* |

---

## 4. Legacy Security URL Recommendation (`WPCP-P2.13-V01`)

### Selected Status: **`A. 301 APPROVED FOR FUTURE IMPLEMENTATION`**
*(Target: Single-hop HTTP `301` `/wordpress-security-emergency-support/` -> `/services/website-care-support/`)*

- **Why Outcome A (`301 APPROVED FOR FUTURE IMPLEMENTATION`) applies now (instead of `B`, `C`, or `D`):**
  1. **Condition Met:** Decision `#56` approved `/wordpress-security-emergency-support/` -> `301` `/services/website-care-support/` *conditional on confirming content relevance*, and Decision `#61` (`Part D10`) gated final approval solely on inspecting the `2026-02-15` Wayback HTML snapshot. That snapshot (`20260215043121`) has now been retrieved and verified in full (`507,356` bytes).
  2. **Content Parity Proven:** The historical page's genuine UK user intent — **hacked-site/malware cleanup, plugin/theme/database/error emergency triage, and no-contract one-time WordPress Quick Fixes** — aligns directly with `/services/website-care-support/` (`Capabilities 01–04`, `#one-off-fixes`, `#care-emergency`, `#care-quickfix`, `wc-faq-3`, `wc-faq-5`). All omitted historical elements (`24/7`, `"within hours"`, `Schedule a Call`, `7+ Years`, `100k+ users`, `"full refund"`) are banned under Decisions `#6`, `#15`, `#37`, and `#58` and must never be restored.
  3. **Why NOT `D. 410 RECOMMENDED`:** Returning `410 Gone` on a high-impression (`75` reconstructed CSV impressions) core UK service URL when an authentic, detailed canonical destination already solves those exact user problems destroys legitimate topical and link equity unnecessarily.
- **Strict Non-Execution & Governance Rules:**
  - **Zero `301`/`410` redirects have been implemented** in code, `.htaccess`, Cloudflare, GitHub Pages, or DNS during `WPCP-P2.13-V01`.
  - **Stage 3 Implementation Gate:** Live single-hop `301` deployment remains **prohibited** until Hostinger hPanel / Cloudflare proxy redirect mechanisms (`VER-18`) and Stage 3 production cut-over receive owner approval.
  - **Recommended Non-Blocking Stage 2 Polish (Optional):** In the next Stage 2 build milestone (`WPCP-P2.14-V01`), add `"Emergency & Malware Triage"` (`#care-emergency`) to `/services/website-care-support/`'s `jumpLinks` and tighten hero/meta wording slightly to surface hacked-site & error recovery alongside proactive care so `301`-redirected visitors see immediate above-the-fold confirmation. *(Note: Decision `#56` and Decision `#61` remain preserved untouched; this finding simply clears `#61`'s inspection condition.)*

---

## 5. Legal & GDPR Advisor Evidence Checklist (`VER-04` to `VER-06`)

*Mandatory Boundary: Do NOT publish placeholder `/privacy-policy/`, `/cookie-policy/`, or `/terms-and-conditions/` pages, and do NOT invent registration numbers, controller capacities, or retention timeframes. All legal conclusions require qualified UK legal/privacy advisor confirmation + documentary evidence.*

### Section A: Business Identity & Legal Structure (`VER-04` / `VER-05`)
- **Verified code/UI facts:** Contact page (`/contact/`) displays brand `WPCarePoint`, `contact@wpcarepoint.co.uk` (`#37`/`#54`), and `Robert Denholm House, Bletchingley Road, Nutfield RH1 4HW, United Kingdom` (`#39`).
- **Owner statements (`Decision #59` — unverified):** Stated legal structure = `Sole Trader`; stated legal name = `WPCarePoint UK`; business registration & Companies House described as `"on process"`; VAT registration described as `"on process"`.
- **Required from Owner + Legal Advisor:**
  1. Confirm exact legal trading identity under the Companies Act 2006 / Business Names rules (e.g., `[Individual Full Legal Name] trading as WPCarePoint UK` if Sole Trader, OR exact incorporated name if forming a Private Limited Company — clarifying that Companies House numbers do **not** normally apply to Sole Traders).
  2. Supply official documentary proof once completed: HMRC Sole Trader registration / UTR confirmation letter *(redacted)* **or** Companies House Certificate of Incorporation + company number + registered office if incorporated, plus HMRC VAT Registration Certificate (`GB` VAT number) or written confirmation that turnover sits below threshold / application status (`VER-05`).
  3. Confirm exact statutory trading details required in site footer & `/terms-and-conditions/` and approve keeping `"Enquire for Pricing"` until VAT rules (`VER-08`) are documented.

### Section B: Data Controller & Privacy Responsibility (`VER-04`)
- **Owner statement (`Decision #59`):** UK GDPR Data Controller / Processor legal role is **`UNRESOLVED`**.
- **Required from Legal Advisor:**
  1. Written determination naming the exact **UK GDPR Data Controller** (and UK Data Protection contact channel/address) for: (a) WPCarePoint marketing website visitors, (b) B2B enquiry correspondence (`contact@wpcarepoint.co.uk`), and (c) client WordPress/hosting/care-plan operations (distinguishing Controller vs Processor roles for client sites under UK GDPR Art. 28).
  2. Confirm whether any UK/EEA representative, DPO designation (normally not mandatory for small agency), or Data Processing Addendum (`DPA`) template is needed before launching commercial terms.

### Section C: ICO & Data Protection Compliance (`VER-06`)
- **Owner statement (`Decision #59`):** ICO registration status = **`"unsure"`**.
- **Required from Owner + Legal Advisor:**
  1. Complete the official **ICO Registration Self-Assessment** (or check existing ICO public register) covering direct B2B email enquiries, client account correspondence, invoicing, and site maintenance administration.
  2. Supply documentary proof: either active **ICO Registration Certificate / Reference Number (`ZA`/`ZB`/`C...`)** + renewal date, **or** saved written ICO exemption self-assessment outcome confirmed by the advisor.

### Section D: Data Processing & Exact Retention Periods (`VER-06`)
- **Code fact (`EVIDENCE VERIFIED`):** Local Release 1 site contains **`0` `<form>` elements**, **`0` database/CRM intake**, **`0` analytics scripts**, and **`0` `document.cookie`/`localStorage`/`sessionStorage` tracking keys**. Enquiries occur purely via `mailto:` / direct email to `contact@wpcarepoint.co.uk`.
- **Owner statement (`Decision #59`):** Client names, emails, and messages kept *"during ongoing work"* — **no exact numerical retention period established**.
- **Required from Owner + Legal Advisor:**
  1. Written UK GDPR **Record of Processing / Lawful Basis** schedule covering direct enquiries (`Contract` pre-contract steps / `Legitimate Interests`), active client contracts & UK tax records (`Legal Obligation` / contract limitation), and server/CDN access & security logs.
  2. **Explicit numerical retention periods & deletion/review triggers** approved by the legal advisor (e.g., exact months/years for non-converted email enquiries, closed client correspondence, invoice/tax records, and provider log retention — zero invented defaults).

### Section E: External Services, Analytics, Hosting Logs & Policies (`VER-06`)
- **Code fact (`EVIDENCE VERIFIED`):**
  1. **`index.html` loads Google Fonts externally** (`https://fonts.googleapis.com/...` and `https://fonts.gstatic.com/...`), transferring visitor IP address and HTTP User-Agent headers to Google LLC.
  2. Live DNS/hosting currently involves **GitHub Pages** (`185.199.108–111.153`) + **Hostinger DNS** (`ns1/ns2.dns-parking.com`), while **Namecheap Private Email** (`C-11`) is stated for `contact@wpcarepoint.co.uk` and **Hostinger hPanel** (`C-10`) is the planned host next month. Analytics/marketing tools remain **OFF** (`#44`, `#54`).
- **Required from Owner + Legal Advisor + Provider Docs:**
  1. Either **(a)** document Google Fonts external transfer & international transfer mechanism (`UK-US Data Bridge` / SCCs / Google privacy documentation) accurately in `/privacy-policy/`, **or (b)** self-host WOFF2 fonts locally in Stage 2 (`WPCP-P2.14-V01`) to eliminate external font requests completely before Stage 3.
  2. Obtain official privacy/sub-processor & HTTP server/CDN access-log retention documentation for **every active provider** (Namecheap Private Email, Hostinger hPanel & DNS, GitHub Pages while active, and Cloudflare if enabled).
  3. Complete formal legal review and written sign-off on drafted UK-compliant `/privacy-policy/`, `/cookie-policy/` (confirming PECR compliance & whether zero non-essential cookies remain `100%` accurate at launch), and B2B `/terms-and-conditions/`.

### Legal Evidence Register (`VER-04`, `VER-05`, `VER-06` Strictly Separated)

| Verification ID | Required fact | Advisor confirmation | Documentary evidence | Evidence date | Verification status | Remaining action | Related VER ID |
|---|---|---|---|---|---|---|---|
| **`VER-04-A`** | Exact legal entity name & legal structure (`Sole Trader` vs `Ltd`/`LLP`) & statutory disclosure format (`WPCarePoint UK` stated) | Required (UK corporate / commercial advisor) | Sole trader HMRC registration / UTR letter *(redacted)* OR Companies House incorporation cert | Pending | **`BLOCKED`** (`Owner statement only`) | Owner + advisor confirm exact legal name format for footer & legal pages | **`VER-04`** |
| **`VER-04-B`** | Named UK GDPR Data Controller (and Controller vs Processor role split for client site support) | Required (UK GDPR / privacy advisor) | Signed advisor Data Controller & Art. 28 role determination note | Pending | **`BLOCKED`** (`Unresolved`) | Advisor defines legal Data Controller identity & client-support Processor role | **`VER-04`** |
| **`VER-05-A`** | Companies House number & registered office *(clarifying N/A if remaining Sole Trader vs required if incorporating)* | Required (Legal/accountant check) | Companies House public register link/extract OR written confirmation entity is non-incorporated Sole Trader | Pending (`"on process"`) | **`BLOCKED`** (`Unverified`) | Supply completed registration proof or remove any incorporation ambiguity | **`VER-05`** |
| **`VER-05-B`** | UK VAT registration status & `GB` VAT number (or threshold non-VAT confirmation) | Required (Accountant / tax advisor check) | HMRC VAT registration certificate OR written confirmation below threshold / `"on process"` status | Pending (`"on process"`) | **`BLOCKED`** (`Unverified`) | Supply VAT certificate when issued; retain `"Enquire for Pricing"` until resolved | **`VER-05`**, `VER-07`, `VER-08` |
| **`VER-06-A`** | ICO Data Protection Fee registration number or formal exemption basis | Required (UK privacy advisor) | ICO Registration Certificate (`ZA`/`ZB`...) OR saved ICO fee self-assessment exemption outcome | Pending (`"unsure"`) | **`BLOCKED`** (`Unverified`) | Complete ICO self-assessment & record official reference or exemption proof | **`VER-06`** |
| **`VER-06-B`** | Explicit numerical data retention schedule (enquiries, active/closed client files, tax records) & deletion procedure | Required (UK GDPR Art. 13 legal review) | Owner-approved & advisor-reviewed Data Retention Schedule document | Pending (`"during ongoing work"` only) | **`BLOCKED`** (`Incomplete`) | Define exact retention periods & deletion rules per category | **`VER-06`** |
| **`VER-06-C`** | Sub-processors, hosting/CDN access logs & external Google Fonts disclosure (plus optional self-hosting decision) | Required (Privacy review of vendor DPAs/logs) | Official Hostinger, Namecheap Private Email, GitHub/Cloudflare & Google Fonts log/DPA policies | Pending (Fonts code-verified; host logs unverified) | **`BLOCKED`** (`Partially verified in code only`) | Collect vendor log-retention specs; decide Google Fonts self-hosting vs disclosure | **`VER-06`**, `VER-18` |
| **`VER-06-D`** | Final approved UK `/privacy-policy/`, `/cookie-policy/` (PECR), and `/terms-and-conditions/` copy & consent governance | Required (Qualified legal sign-off) | Legal advisor written approval of final `.co.uk` legal page drafts | Pending (Zero legal pages published) | **`BLOCKED`** (`Not drafted/approved`) | Draft after `VER-04`–`06` facts close; obtain legal sign-off before Stage 2 build | **`VER-06`**, `VER-04`, `VER-05` |

---

## 6. Hostinger hPanel Technical Verification Checklist (`VER-18`)

*Security & Anti-Assumption Boundary: **NEVER** share, request, or store passwords, API tokens, SSH private keys, or panel credentials in repo files, logs, or chat. Never assume Hostinger plan support for SSH, Git, Node, `.htaccess` directives, or automatic deployment until the exact purchased plan is verified.*

### Section A: Purchased Plan & Hosting Capabilities
- Exact Hostinger plan tier selected/purchased (`Web Hosting`, `Cloud Hosting`, `Business`, `VPS`, etc.) and UK/EU datacentre region.
- Confirmation of document root (`public_html`), custom Apache/`LiteSpeed` `.htaccess` support (specifically `ErrorDocument 404`, `RewriteRule` `301` & **`410` `[R=410,L]`** support), SSL/TLS certificate handling, automated provider backup frequency/restorability, and official HTTP access/error log retention duration (feeds `VER-06`).
- Verification of supported deployment interfaces on the exact plan: SSH/rsync availability, Git integration (`hPanel Git`), FTPS, or Hostinger API/CLI — without assuming any exist ahead of purchase.

### Section B: Build & Deployment Method
- Confirm how the static Vite output (`dist/<route>/index.html`, `dist/404.html`, `dist/sitemap.xml`, `dist/assets/*`, `1.3M` `.webp` media) maps onto Hostinger `public_html` with clean trailing-slash URL resolution (`/services/` -> `HTTP 200`, unknown paths -> `HTTP 404` `dist/404.html` without Soft-`404` catch-all).
- Reconcile `/.github/workflows/deploy.yml` (currently targeting **`github-pages` via `on: push: main` per `#62`**) with final Hostinger deployment architecture, ensuring failed `npm run lint`, `npm run build`, or `npm run verify:build` steps **abort** deployment before touching production, zero secrets appear in code (GitHub Actions Encrypted Secrets only), and an **atomic rollback procedure** (previous release folder/snapshot restore) is tested prior to switching production origin.
- Plan clean retirement/alignment of conflicting host files (`/wrangler.jsonc`, `/public/.htaccess`, `/vercel.json`, `/CNAME`, `/public/CNAME`).

### Section C: Domain, DNS, Cloudflare & Email Preservation *(Urgent Active Zone Discrepancy!)*
- Reconcile active live nameservers (**`ns1.dns-parking.com` / `ns2.dns-parking.com`** observed `2026-11-28`) against owner statement `C-17` (Namecheap DNS) and `C-18` (Cloudflare SSL/TLS).
- **URGENT EMAIL DNS AUDIT (`VER-17` + `VER-18`):** Live DNS lookups for `MX` and `TXT` (`SPF`/`DMARC`) on `ns1/ns2.dns-parking.com` currently return **no records**. Before any hosting cutover, inspect the Namecheap domain DNS & Hostinger DNS Zone Editor read-only to confirm where `contact@wpcarepoint.co.uk` email currently routes, ensure valid Namecheap Private Email **`MX`, `SPF`, `DKIM`, and `DMARC`** records exist on the authoritative Hostinger DNS zone (or intentionally restore authoritative NS), and verify live mail send/receive again without modifying working mail configs blindly.
- Verify Cloudflare zone plan (if Cloudflare proxy + `Full (Strict)` SSL + Worker/Rules will sit in front of Hostinger, OR if Hostinger CDN / `.htaccess` handles edge responses directly).

### Section D: Redirects, 404, 410 & Staging Risk Acceptance Controls
- Confirm single-hop `http -> https` + `www -> apex` + legacy URL **`301`** rules (no redirect chains!) for:
  - `/wordpress-maintenance-support/` -> `/services/website-care-support/`
  - `/wordpress-security-emergency-support/` -> `/services/website-care-support/` *(Outcome A approved for future implementation)*
  - `/wordpress-design-development/` -> `/services/website-development/`
  - `/woocommerce-development/` -> `/services/ecommerce-development/`
- Confirm **`HTTP 410 Gone`** handling for `/leadership/` (if confirmed no equivalent) and the **exact verified spam URL list** (`258`+ confirmed casino/spam paths), while guaranteeing **zero blanket redirects to `/`** and real **`HTTP 404` + `noindex, nofollow`** on all other unknown paths.
- Because the owner accepted not waiting for a separate staging server (`C-21` risk acceptance), mandate pre-cutover verification of backups (`C-20`), automated CI checks, atomic rollback, and read-only HTTP status verification (`curl -sI`) across all `16` routes + sample `301`/`410`/`404` URLs immediately after cutover.

### Hostinger Evidence Register (`VER-18` Remains `OPEN / BLOCKED`)

| Verification ID | Technical requirement | Owner-provided evidence | Hostinger documentation or account evidence | Verification method | Status | Risk/limitation | Related VER ID |
|---|---|---|---|---|---|---|---|
| **`VER-18-A`** | Purchased Hostinger hPanel plan specs, web server (`LiteSpeed`/`Apache`), `.htaccess` `301`/`410`/`ErrorDocument 404` & backup/log retention | Statement `C-10`: planned purchase next month | Hostinger hPanel plan invoice/spec summary + official `.htaccess` / backup / log docs | Inspect purchased hPanel Plan Details & official Hostinger KB (no secret storage) | **`OPEN / UNPURCHASED`** | Cannot assume SSH, Git, Node, or `410` directive behaviour before purchase | **`VER-18`**, `VER-06` |
| **`VER-18-B`** | Deployment transport (SSH/rsync vs FTPS vs hPanel Git) & atomic rollback workflow for `dist/` + CI gates | `Decision #60` (auto-deploy strategy YES); `Decision #62` (GitHub Pages push active today); `C-20`/`C-21` backup & staging risk acceptance | Hostinger hPanel Files/Git/SSH capability screen *(non-secret feature check)* | Confirm transport supported on purchased plan; test dry-run upload & rollback restore | **`OPEN / BLOCKED`** | Current `deploy.yml` targets `github-pages`, not Hostinger; bad deploy could break prod without rollback test | **`VER-18`** |
| **`VER-18-C`** | Authoritative DNS (`ns1/ns2.dns-parking.com` vs Namecheap `C-17`), Cloudflare proxy/SSL (`C-18`), and **`MX`/`SPF`/`DKIM`/`DMARC` integrity (`C-19`)** | `C-17` (Namecheap NS stated), `C-18` (Cloudflare SSL stated), `C-19` (mail DNS configured), `C-12` (`contact@` working) | Hostinger DNS Zone export + Namecheap Private Email DNS spec + Cloudflare DNS/SSL overview *(if used)* | Read-only DoH / `dig` verification (`2026-11-28` showed **empty live `MX` & `TXT` on `dns-parking.com`!**) | **`URGENT OPEN DISCREPANCY`** | Active `dns-parking.com` zone lacks `MX`/`TXT` answers today — high risk of dropped enquiries to `contact@wpcarepoint.co.uk` | **`VER-18`**, **`VER-17`** |
| **`VER-18-D`** | Single-hop `301` redirects, verified spam `410`, real `404` (`dist/404.html`), and retirement of conflicting adapters (`wrangler.jsonc`, `public/.htaccess`, `vercel.json`, `CNAME`) | `Decision #56` & `#57`; `P2.13` Outcome A (`301` approved for future implementation) | Hostinger LiteSpeed/Apache `410`/`301`/`404` test result OR Cloudflare Redirect/Worker rules | HTTP header check (`curl -sI`) across all `16` routes + `301`/`410`/`404` test cases | **`OPEN / NOT CONFIGURED`** | Current `/public/.htaccess` still rewrites 404s to `/index.html` (Soft-`404` hazard if deployed raw) | **`VER-18`** |

---

## 7. Stage 3 Gate Closure Matrix

| Gate | Required Evidence | Current Status | Owner/Advisor Action | Closure Criteria |
|---|---|---|---|---|
| **Legacy Security URL (`/wordpress-security-emergency-support/`)** | Verified `2026-02-15` Wayback HTML (`20260215043121`) + topic comparison vs `/services/website-care-support/` + Hostinger/Cloudflare single-hop `301` config verification | **Content Relevance Cleared (`Technical verification`: Outcome A `301 APPROVED FOR FUTURE IMPLEMENTATION`)**; Live Rule = **`Pending action` (Stage 3 gated)** | **Owner:** Confirm optional hero/jump-link UX tweak in `P2.14` (`Pending action`).<br>**Technical:** Implement single-hop `301` on verified Stage 3 Hostinger/Cloudflare stack only after `VER-18` clears. | Hostinger/Cloudflare single-hop `301 -> https://wpcarepoint.co.uk/services/website-care-support/` tested (`HTTP 301`, `0` chains) during authorised Stage 3 cutover. |
| **`VER-04` (Legal Entity & Data Controller)** | Exact legal trading name & Sole Trader vs `Ltd`/`LLP` proof (`Official documentary evidence`) + named UK GDPR Data Controller/Processor capacity (`Advisor confirmation`) | `WPCarePoint UK` / `Sole Trader` = **`Owner statement`**; Legal role = **`UNRESOLVED`** (`Blocked`) | **Owner:** Supply trading/registration confirmation.<br>**Advisor:** Issue signed UK GDPR Data Controller & client-support Processor role determination. | **`Advisor confirmation`** + **`Official documentary evidence`** logged, enabling verified footer & `/privacy-policy/` controller block. |
| **`VER-05` (Companies House & UK VAT)** | Completed business registration / Companies House check & VAT registration status/`GB` number (`Official documentary evidence`) + VAT billing rule (`Advisor confirmation`) | `"on process"` = **`Owner statement`** (`Unverified`) | **Owner + Accountant/Advisor:** Supply official registration/VAT outcome documents (or confirm Sole Trader non-VAT status). | **`Official documentary evidence`** confirming reg & VAT status recorded (`VER-05` & `VER-08` closed); `/terms-and-conditions/` billing clauses unblocked. |
| **`VER-06` (ICO, Retention, Google Fonts, Logs & Policies)** | ICO registration/exemption (`Official documentary evidence`), exact retention schedule (`Owner` + `Advisor confirmation`), Google Fonts & vendor server-log specs (`Technical verification` + `Official documentary evidence`), & legal approval of 3 legal pages (`Advisor confirmation`) | Zero tracking/forms/cookies in code = **`Technical verification`**; Google Fonts external call = **`Technical verification`**; ICO `"unsure"` & `"during ongoing work"` = **`Owner statement`** (`Incomplete / Blocked`) | **Owner:** Run ICO self-assessment, define retention schedule, decide font self-hosting vs disclosure, supply Hostinger/Namecheap log docs.<br>**Advisor:** Review & sign off final `/privacy-policy/`, `/cookie-policy/`, `/terms-and-conditions/`. | Written **`Advisor confirmation`** approving final UK-compliant legal drafts + verified retention & vendor log disclosures built into Stage 2 legal pages. |
| **`VER-18` (Hostinger hPanel, Auto-Deploy, DNS/Mail & Edge Cutover)** | Purchased Hostinger plan specs (`Official documentary evidence`), working CI->Hostinger deploy & atomic rollback test (`Technical verification`), reconciled NS + **`MX`/`SPF`/`DKIM`/`DMARC`** fix on active DNS zone (`Technical verification`), & aligned `301`/`410`/`404` host rules (`Pending action`) | Plan = **`Unpurchased` (`Owner statement`)**; `deploy.yml` = **GitHub Pages `push` active (`#62` discrepancy)**; Active NS = **`ns1/ns2.dns-parking.com` with empty `MX`/`TXT` (`Technical verification`)** | **Owner:** Purchase Hostinger plan next month, verify `contact@wpcarepoint.co.uk` DNS **`MX`/`TXT`** on `dns-parking.com` urgently (`VER-17`), and provide non-secret plan capabilities & Cloudflare zone choice.<br>**Technical:** Re-target `deploy.yml`, fix `.htaccess`/adapters, test rollback & `200`/`301`/`410`/`404`. | Purchased plan verified, **`MX`/`SPF`/`DKIM`/`DMARC` verified intact**, Hostinger/Cloudflare `301`/`410`/`404` tested, atomic rollback verified, and explicit owner Stage 3 launch sign-off signed. |

---

## 8. Dependency-Aware Stage 2 Implementation Milestone Plan & Paste-Ready Prompt (`WPCP-P2.14-V01`)

### A. Step-by-Step Dependency Sequence (Before Stage 3 Launch)
1. **Immediate Urgent Operational Check (Owner — Pre-Build):** Inspect active Hostinger DNS (`ns1/ns2.dns-parking.com`) vs Namecheap Private Email DNS immediately to verify why live `MX` & `TXT` queries return empty answers and ensure `contact@wpcarepoint.co.uk` receives mail reliably (`VER-17` / `VER-18`). *(Zero code change.)*
2. **Evidence Collection Gate (Owner + Legal/Tax Advisors):** Close `VER-04`, `VER-05`, and `VER-06` checklists above (entity name, Data Controller role, VAT/reg status, ICO ref/exemption, exact retention schedule, Google Fonts preference: self-host vs disclose, vendor log policies, and legal sign-off on drafted copy).
3. **Hosting Purchase & Capability Audit (Owner — Next Month):** Purchase chosen Hostinger hPanel plan and capture exact non-secret hosting capabilities (`VER-18-A`/`B`/`C`) plus exact Cloudflare proxy/zone plan.
4. **Execute Next Stage 2 Build Milestone (`WPCP-P2.14-V01` — Local Code Only, Strict Evidence Gating):**
   - Implement verified `/privacy-policy/`, `/cookie-policy/`, and `/terms-and-conditions/` **only** for gates where documentary + advisor evidence has been supplied (otherwise omit/keep unpublished).
   - Apply optional Google Fonts self-hosting (if approved to simplify PECR/UK GDPR) and optional above-the-fold `#care-emergency` jump-link / malware-recovery polish on `/services/website-care-support/`.
   - Align `deploy.yml` / `.htaccess` / `wrangler.jsonc` / `vercel.json` / `CNAME` **only** for verified Hostinger + Cloudflare capabilities (never guessing).
   - Re-verify `npm run lint`, `npm run build` (`vite build && verify:build`), and `npm run test:local-qa`.
5. **Final Stage 3 Readiness & Cutover Gate (Future Milestone after `P2.14`):** Run dry-run atomic rollback test, final link/header QA, and formal Stage 3 launch sign-off to activate single-hop `301`s (`incl. /wordpress-security-emergency-support/ -> /services/website-care-support/`), verified `410` spam rules, live Hostinger cutover, and post-launch `curl -sI` verification.

---

### B. Separate, Complete, Paste-Ready Next Stage 2 Build Milestone Prompt (`WPCP-P2.14-V01`)

> *Copy everything inside the code block below when you are ready to run the next Stage 2 build milestone (after collecting the required `VER-04`–`VER-06` and/or `VER-18` evidence).*

```text
Prompt ID: WPCP-P2.14-V01
Project: WPCarePoint.co.uk Rebuild
Stage: Stage 2, Design & Development
Task: Task 2.14 — Conditional Legal Pages, Care Support UX Polish, Font Privacy Hardening & Hostinger Build Alignment
Prompt Version: V01
Title: Build Approved Legal Pages, Harden Font Privacy, Polish Care Support Emergency UX & Align Hosting Artifacts
Purpose: Implementation Task (Conditional on Verified Owner & Advisor Evidence)
Execution Mode: Development Work (Local Repository & Verification Only — NO Stage 3 Production Cutover)
Approval Status: Stage Authorised for Local Development Only (Production Deploy, Live DNS & Live Redirects Remain NOT AUTHORISED)
Dependencies: WPCP-P2.13-V01, Decisions #1–#63, Verified Documentary Inputs for VER-04/VER-05/VER-06 (as supplied), Verified Hostinger hPanel Plan Specs for VER-18 (as supplied)

## Objective & Strict Evidence-Gating Rules

Implement only the Stage 2 local build updates that are backed by explicit verified evidence supplied in this prompt or already locked in `/PROJECT_STATUS.md` (`Decisions #1–#63`) and `/TASK_2_13_READINESS_AND_WAYBACK_REPORT.md`.

### Owner-Supplied Evidence Attached to This Run (Fill Before Pasting)
- VER-04 Legal Entity & UK GDPR Data Controller confirmation: [PASTE VERIFIED DETAILS OR "NOT YET SUPPLIED"]
- VER-05 Registration / Companies House / VAT status: [PASTE VERIFIED DETAILS OR "NOT YET SUPPLIED"]
- VER-06 ICO ref/exemption, Retention Schedule, Vendor Log Policies & Advisor-Approved Legal Copy: [PASTE VERIFIED DETAILS OR "NOT YET SUPPLIED"]
- Google Fonts Decision: [SELF-HOST WOFF2 LOCALLY / RETAIN CDN & DISCLOSE IN PRIVACY POLICY]
- VER-17 / VER-18 DNS MX/TXT Verification Outcome (`contact@wpcarepoint.co.uk`): [PASTE READ-ONLY CONFIRMATION OR "PENDING"]
- VER-18 Purchased Hostinger hPanel Plan Specs (Deployment Method, `.htaccess` 301/410/404 Support, Backup/Rollback): [PASTE NON-SECRET PLAN SPECS OR "NOT YET PURCHASED"]

### Mandatory Implementation Instructions (1–12)

1. **Baseline & Governance Inspection First:** Read `/PROJECT_STATUS.md`, `/PROMPT_REGISTER.md`, and `/TASK_2_13_READINESS_AND_WAYBACK_REPORT.md`. Preserve Decisions `#1–#63` verbatim; never invent facts or overwrite historical decisions silently.
2. **Conditional Legal Pages Build (`VER-04`–`VER-06` Gated):**
   - If AND ONLY IF complete verified `VER-04`–`VER-06` legal entity, Data Controller, retention, ICO/VAT, and advisor-reviewed legal copy are supplied above, build `/privacy-policy/`, `/cookie-policy/`, and `/terms-and-conditions/` in clean `en-GB` matching WPCarePoint design tokens, wire prerendered `dist/<route>/index.html`, canonical URLs, footer links, `/site-map/`, `sitemap.xml`, `llms*.txt`, and `verify:build`.
   - If any required legal gate remains `NOT YET SUPPLIED`, DO NOT publish placeholder/assumed legal routes (keep `16` routes intact and record exact remaining legal blockers).
3. **Local Webfont Privacy Hardening (If Self-Hosting Selected):** If self-hosting is selected (or authorised to eliminate third-party IP transfers), replace external `fonts.googleapis.com` / `fonts.gstatic.com` requests in `/index.html` and CSS with local bundled WOFF2 font files cleanly without breaking typography or LCP.
4. **Optional Care Support Emergency UX Polish (`/services/website-care-support/`):** Add `"Emergency & Malware Triage"` (`#care-emergency`) to `jumpLinks` in `/src/data/dedicatedServicePagesData.ts` (`WEBSITE_CARE_SUPPORT_PAGE_DATA`) and ensure above-the-fold hero/meta text clearly signals hacked-site, malware cleanup, and urgent error triage alongside proactive maintenance — strictly obeying Decision `#58` (zero `24/7`, zero `<30 min` SLA, zero unverified pricing/guarantees).
5. **Conditional Hosting & Workflow Alignment (`VER-18` Gated):**
   - Inspect `/.github/workflows/deploy.yml`, `/wrangler.jsonc`, `/public/.htaccess`, `/vercel.json`, `/CNAME`, and `/public/CNAME`.
   - Update hosting config / `.htaccess` (single-hop rules, `ErrorDocument 404 /404.html`, future `301`/`410` template only if verified safe) and deployment workflow ONLY for confirmed, non-secret Hostinger hPanel plan capabilities supplied above. If Hostinger is marked `NOT YET PURCHASED`, leave live `deploy.yml` / host configs structurally documented and record exact Hostinger capability gaps without guessing FTP/SSH/Git.
   - NEVER request, accept, or store passwords, API tokens, or private keys in repository files.
6. **Zero Unauthorised Redirects or Analytics:** Do NOT publish `301`/`410` redirects to live production (`Outcome A` for `/wordpress-security-emergency-support/` -> `/services/website-care-support/` remains preparation/template-only until Stage 3 sign-off). Keep analytics, cookies, and `<form>` backends strictly OFF (`#44`, `#54`).
7. **Zero Unverified Claims (`Decision #58`):** Keep `"Enquire for Pricing"`, `contact@wpcarepoint.co.uk` email-only contact, and Nutfield `RH1 4HW` (`/contact/`), with zero phone/WhatsApp claims, zero `2019` founding year, zero fake reviews/counts, and Wave 2 Blog/Portfolio excluded from Release 1 index.
8. **Code Quality & Build Integrity Verification:** Run `npm run lint`, `npm run build` (`vite build && npm run verify:build`), and `npm run test:local-qa` (16 routes or updated 19 routes if legal pages built, across all QA viewports + true HTTP `404` checks). Fix every lint, canonical, JSON-LD, or overflow error cleanly.
9. **Governance Documentation Sync:** Update `/PROJECT_STATUS.md`, `/PROMPT_REGISTER.md` (registering `WPCP-P2.14-V01` in Parts B & C), and `/TASK_1_6_READINESS_REVIEW.md` with exact evidence statuses and Stage 3 readiness verdict.
10. **Strict Non-Authorisation Exclusions:** Production DNS edits, Cloudflare zone changes, live Hostinger migration/cutover, activating tracking/forms, and deploying unverified legal pages remain strictly NOT AUTHORISED.
11. **Mandatory 8-Point Response Format:** Follow `/PROMPT_REGISTER.md` Part A Section 5 (`1. Prompt ID & version`, `2. Documents/files created or updated`, `3. Summary of changes`, `4. Decisions affected`, `5. Dependencies`, `6. Remaining questions`, `7. Governance status`, `8. Confirmation of code vs production changes`).
12. **Stage 3 Readiness Verdict:** Conclude explicitly whether Stage 3 is `READY` (all legal, DNS/MX, Hostinger capability, rollback, and redirect gates verified) or remains `NOT READY` with exact remaining blockers.
```

---

## 9. Step 8 Verification Confirmation (`WPCP-P2.13-V01`)

1. **Zero edits made to application source code (`src/`), routes, `vite.config.ts`, `server.ts`, `index.html`, or SEO assets (`public/sitemap.xml`, `public/llms*.txt`):** **Confirmed.**
2. **Zero `301` or `410` redirects implemented anywhere:** **Confirmed** (`https://wpcarepoint.co.uk/wordpress-security-emergency-support/` still returns `404`; local `server.ts` & host files untouched).
3. **Zero legal pages published:** **Confirmed** (`/privacy-policy/`, `/cookie-policy/`, `/terms-and-conditions/` do not exist in `src/`, `vite.config.ts`, or `dist/`).
4. **Zero edits made by `WPCP-P2.13-V01` to `/.github/workflows/deploy.yml`, `/wrangler.jsonc`, `/public/.htaccess`, `/vercel.json`, `/CNAME`, or `/public/CNAME`:** **Confirmed** *(with Discrepancy D1 explicitly disclosed: `deploy.yml` already had `on: push: branches: [main]` + `enablement: true` applied prior to `WPCP-P2.13-V01` under owner directive `Decision #62`)*.
5. **Wayback snapshot evidence accurate, non-fabricated, and provenance-separated:** **Confirmed** (`20260215043121` / `2026-02-15T04:31:21Z`, `507,356` bytes original HTML parsed completely; `Original Archived Content`, `Wayback Wrapper`, and `Unverified/Missing 404 Assets` cleanly separated).
6. **`VER-04`, `VER-05`, `VER-06`, and `VER-18` kept strictly blocked/open until real documentary/account proof exists:** **Confirmed.**
7. **All `16` verified local public routes (incl. `/site-map/`) remain intact:** **Confirmed** (`scripts/verify-build-artifacts.mjs` & `vite.config.ts` untouched).
8. **Stage 3 status remains `NOT READY`:** **Confirmed.**
