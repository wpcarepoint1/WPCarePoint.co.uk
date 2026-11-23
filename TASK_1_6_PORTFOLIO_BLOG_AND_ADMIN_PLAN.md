# Task 1.6 — Portfolio & Blog Recovery Plan and Stage 2 WPCarePoint Admin Dashboard Specification

**Date:** 2026-11-23  
**Brand & Direction:** **WPCarePoint** — *Web Development, eCommerce & AI Solutions Agency* (*"Building, improving and supporting digital businesses."*, Decisions `#33`, `#38`)  
**Task 1.6 Status:** `IN PROGRESS` *(Recovery & Admin Dashboard requirements documented; remaining legal/technical blockers pending)*  
**Stage 2 Status:** **`NOT STARTED — BLOCKED`** *(Documentation & planning only — zero application code or database implementation started)*

---

## Part A: Portfolio & Blog Library Recovery Plan

The owner confirmed on `2026-11-23` that WPCarePoint's previous website contained a substantial **Portfolio** and **Blog library** that were lost when the legacy site became unavailable. Both sections represent a **recovery and rebuilding requirement**, not permanent deletion.

### 1. Portfolio Recovery Workflow (`/wordpress-projects-portfolio` & Case Entries)
1. **Asset & Record Collection:**
   - Gather any surviving project names, domains/sectors, scope summaries, client approvals/anonymisation permissions, and screenshots/images from:
     - Owner local archives, backups, invoices, emails, or client handover records.
     - Legacy Wayback Machine snapshots (`https://web.archive.org/` captures of `wpcarepoint.co.uk` portfolio/project URLs and archived assets).
2. **Quality & Verification Review Before Publishing:**
   - Strip all template placeholder case studies (`Atelier Lumière UK`, `The Cavendish Clinic`) and synthetic metrics (`900+`, `4.9/5`, `98/100`) per Decision `#6`.
   - Confirm each recovered project has accurate technical stack attribution, UK/sector context, non-fabricated outcomes, and optimised WebP/AVIF screenshots (`VER-19`).
3. **Handling Unrecoverable Projects (Strict Anti-Fabrication Rule):**
   - Maintain a separate **`Unrecoverable Portfolio Records`** log for any past projects whose screenshots, URLs, or factual scope cannot be verified.
   - **Never** invent replacement client names, fabricated testimonials, or synthetic screenshots. If verified portfolio assets are not yet compiled by initial Stage 2 launch, keep `/wordpress-projects-portfolio` unpublished/`noindex` until recovered entries are reviewed and approved, then publish via the Stage 2 Admin Dashboard.

### 2. Blog Library Recovery Workflow (`86` Pre-Hack Archive + Historical URLs)
1. **Scope & Baseline Evidence:**
   - **Wayback CDX (`766` paths):** Contains **`86`** pre-hack WordPress blog posts (`622` post-hack URLs from July–Aug 2026 are excluded from content recovery).
   - **`305` `Indexed Pages` (`2026-11-16`):** **`17`** pre-hack WordPress posts still appear in Google's index.
   - **Reconstructed `56`-row Performance CSV:** **`28`** historical `/blog/*` rows (`213` reconstructed impressions), including **`12`** in both `305` Indexed & `766` Wayback and **`16`** in `766` Wayback only (`VER-15` original `Pages.csv` is `DEFERRED BY OWNER` — revisit only if materially necessary).
2. **Extraction & Separation:**
   - Retrieve archived pre-hack HTML/text from Wayback Machine captures (prioritising high-impression and UK commercial-intent posts such as `#4`, `#5`, `#6`, `#8`, `#11`, `#15`, `#16`, `#33`, `#41`, `#42`).
   - Strictly quarantine **post-hack injected/casino spam** (`258` casino + `19` injected slugs in `305` Indexed; `#20`, `#31`, `#36`, `#45`) so spam never enters the recovered editorial database.
3. **Editorial & Technical Review Before Republishing:**
   - Audit every recovered post for technical accuracy (WordPress/WooCommerce/Hybrid agency standards), `en-GB` spelling, broken external links/images, and thin/outdated snippet quality (e.g., `#7` trivial snippet or `#29` `/blog/buy-expired-domain-name/` off-topic post).
   - Resolve malformed/duplicate slug pairs (`#5 /blog/free-wordpress-themes/` vs `#13 /blog/https-wpcarepoint-co-uk-blog-free-wordpress-themes-to-build/`, and `#9` vs `#12`).
4. **URL & SEO Equity Preservation:**
   - Where technically and legally appropriate, republish reviewed valuable articles at their **original clean `/blog/<slug>/` URL** (or clean canonical hub if restructured) so existing indexation (`17` indexed posts) and historical relevance are preserved without redirect chains.
   - Map retired/overlapping legacy posts individually via single-hop `301` only to a genuinely relevant article/service page (never bulk-redirect to `/`), and assign `HTTP 410 Gone` to confirmed spam/off-topic/permanently retired URLs.
5. **Unrecoverable Content Register:**
   - Log any pre-hack posts whose archived text/media cannot be retrieved from Wayback or owner backups separately in an **`Unrecoverable Blog URLs`** list — do not auto-generate filler articles to spoof old URLs.

---

## Part A-Plus: Initial No-CMS Content Operations (`Decision #52` — MVP Launch Mode)

Per **Owner-Confirmed `Decision #52` (`2026-11-23` — `/TASK_1_6_NO_CMS_INITIAL_MVP_ARCHITECTURE.md`)**, the initial `WPCarePoint.co.uk` launch operates **without any CMS or Custom Admin Dashboard**:
- **Pages & Services:** Managed via typed structured TypeScript/JSON content + reusable Next.js UI components (`22`-page Option B baseline preserved).
- **Blog Management (`MDX` in Git):** Managed via Markdown/`MDX` files in Git supporting all `12` required metadata/editorial fields (`title` & `slug`, `seoTitle` & `metaDescription`, `author`, `publishedDate`, `updatedDate`, `featuredImage`, `categories` & `tags`, `content`, `internalLinks`, `relatedArticles`, `schemaRecommendations`, and `draft` vs `published` status). Regular publishing uses a human-approved **GitHub PR -> Staging Preview -> Owner Approval -> Merge & Deploy** workflow (`VER-16` recovery posts follow the exact same review gate before publishing).
- **Portfolio Management:** Managed via structured project records + reusable Next.js components, keeping `/wordpress-projects-portfolio` `noindex` until genuine recovered assets (`VER-13`) are verified.

---

## Part B: Dedicated WPCarePoint Admin Dashboard (**Future Platform Releases** — `26` Modules Preserved)

*(Alignment Note — **`Decision #52`**: Per the owner's confirmed No-CMS direction, the dedicated **`26`-module WPCarePoint Admin Dashboard** below is **excluded from Initial Website Launch (`Release 1`)** and cleanly preserved for **Future Platform Releases (`Releases 2–4`)** alongside the AI Platform, CRM, BI, and Remote MCP roadmap.)*

*(Extension Note `2026-11-23` — Decision `#41`: The initial `8` WordPress-like CMS modules documented below under Decision `#38` are preserved inside the owner's **`22`-module** agency platform direction and extended to **`26` planned modules** in `/TASK_1_6_ANALYTICS_MCP_BI_ARCHITECTURE.md`, adding `23. AI Agent Connections & Permissions`, `24. Privacy & Consent Centre`, `25. Knowledge Base & Business Data Hub`, and `26. Workflow Automation Studio`.)*

### 1. UX & Interface Direction
- **Familiar WordPress-Like Administration Interface:** Left-hand dark/clean collapsible navigation rail, **searchable menu**, customisable overview widgets, global date-range/country/device filters, saved analytics views, exportable reports, role-based dashboards, clean list tables with bulk/status filters (`Published`, `Draft`, `Unpublished / noindex`, `Archived`), and mobile-friendly responsive controls — tailored for non-technical owner usability.
- **Stage 2 Governance Constraint:** Documented here and in `/TASK_1_6_ANALYTICS_MCP_BI_ARCHITECTURE.md` as a **Stage 2 architecture & functionality requirement**. **Zero** application code, UI routes, auth logic, tracking tags, MCP endpoints, or database tables are implemented in Stage 1.

### 2. Required Core CMS Modules (`8` Original Core Modules Integrated into the `26`-Module Platform)

*(Modules `#1–#8` below form the core CMS/Settings foundation retained within the `22`-module baseline (`#1–#22`) + `4` new AI/Privacy/Knowledge/Automation modules (`#23–#26`) specified in `/TASK_1_6_ANALYTICS_MCP_BI_ARCHITECTURE.md`.)*

| # | Original Core Module | Expanded Platform Mapping | Functional Requirements (Stage 2 Spec) |
|---:|---|---|---|
| 1 | **Dashboard Overview & Activity** | Module `#1` | Customisable widgets (traffic, enquiries, SEO health, recovery queues), counts of published vs draft/`noindex` Pages, Portfolio, Blog, Media, email delivery logs, and recent editor activity log. |
| 2 | **Portfolio & Project Management** | Module `#4` | Full CRUD for recovered and new client projects: client/sector display name, project summary, verified deliverables, service category tags (`5` Primary Service Categories), live/archived URL metadata, screenshot gallery, `Published` vs `Draft`/`noindex` visibility toggle, and unrecoverable-record archive flag. |
| 3 | **Blog & Article Management** | Module `#3` | WordPress-like article editor + **Regular Content Growth Workflow (`Decision #51` / `WPCP-P1.6-V05`)**: editorial calendar, topic clusters, `86` pre-hack Wayback recovery queue, editable canonical slug, category/tag taxonomy, real author/timestamps, **`7`-stage approval workflow (`Draft -> AI Review -> Editorial Review -> Owner Approval -> Scheduled -> Published -> Performance Review`)**, approved-only `Europe/London` scheduling, content refresh & social/newsletter repurposing drafts (all human-reviewed; zero quota-spam or auto-publishing). |
| 4 | **Website Page & Service Content Management** | Module `#2` | Structured management of core pages (`/`, `/services`, `/about`, `/contact`, Legal pages) and service pages across the **5 Primary Service Categories** (`22`-page Option B baseline), including care-plan cards (`"Enquire for Pricing"` / Quick Fix banner), FAQs (automatically synced `1:1` with `FAQPage` JSON-LD), and Legal page publish/`noindex` gates. |
| 5 | **SEO Metadata & Canonical URL Management** | Modules `#6–#7` | Per-route SEO metabox (`<title>`, `<meta name="description">`, self-referencing canonical URL, `index/follow` vs `noindex` directive, `en-GB` Schema.org JSON-LD controls, on-page SEO & GEO/AIO readiness checks paired with `Content Intelligence Agent`, internal link suggestions, dynamic `sitemap.xml` exclusion rules, and redirect/`410` rule registry synced with Edge configuration). |
| 6 | **Media Library** | Module `#5` | Central upload & asset browser supporting responsive **WebP/AVIF** conversion, intrinsic `width`/`height` tracking, required accessible `alt` text, folder/category filtering (Portfolio screenshots, Blog imagery, UI/Diagram visuals), and audit warning against unverified placeholder assets (`VER-19`). |
| 7 | **Admin & Content-Editor User Roles** | Module `#14` | Authenticated, server-enforced RBAC (`Super Admin`, `Agency Manager`, `Content Editor`, `Analyst / Read-Only`) protected by secure authentication and session controls in Stage 2. |
| 8 | **Website Settings & Reusable Content** | Module `#15` | Centralised global settings store: official contact email (`contact@wpcarepoint.co.uk` once delivery-verified), address display toggle (`RH1 4HW`), future channel flags (Phone/WhatsApp/Call Centre kept `OFF` at initial launch), header/4-group footer link controls, CTA labels, and global GDPR/Privacy notice snippets (governed via Module `#24`). |

### 3. Stage 2 Architectural Prerequisites for the Admin Dashboard
Before Stage 2 builds this dashboard:
- Determine persistent storage & authentication architecture (e.g. Cloudflare D1 / R2 + authenticated Admin backend or approved database/auth stack) without risking static production exposure.
- Ensure public `GET` routes only serve `Published` + indexable content and never leak `Draft` / `Unpublished Legal` / `Unrecoverable` records into `sitemap.xml` or public API payloads.
- Ensure `/admin` (or chosen admin path) is strictly `noindex`, excluded from `robots.txt`/`sitemap.xml`, and protected by server-side session authentication and RBAC.
- Keep production analytics tracking, session replay, and external AI/MCP endpoints **disabled** until Module `#24` (`Privacy & Consent Centre`) and deferred legal/email compliance gates are explicitly cleared by the owner.

---

## Part C: Development Priority (`P0–P7`), Release Mapping & Governance Alignment

### ৭. আমার প্রস্তাবিত Development Priority

Full sequencing, MVP boundary, 11-layer technical architecture evaluation, operational/security controls, and SEO migration gates are detailed in `/TASK_1_6_DEVELOPMENT_ROADMAP_AND_ARCHITECTURE.md`:

- **P0 (Technical Foundation):** Stack approval *(awaiting owner sign-off)*, hosting, DB, Auth/RBAC, WAF/security, backups/DR, dev/staging/prod, CI/CD, monitoring.
- **P1 (Public Website):** `22`-page Option B sitemap, CWV, `en-GB` SEO/Schema, accessibility, contact pathway, URL migration **only after** approved migration matrix.
- **P2 (`Future Platform Releases 2+` — Admin Dashboard & CMS; Replaced by No-CMS MDX/Structured Content in Initial MVP `Decision #52`):** WordPress-style UI covering `Dashboard Overview`, `Pages/Services`, `Blog/Articles` (`86`-post recovery queue), `Portfolio/Projects` (`VER-13` recovery), `Media Library`, `SEO Metadata`, `Redirect/410 Register`, `Website Settings`, `Users/RBAC`, and `Activity Logs`.
- **P3 (Business Management System — Phased):** Essential `Enquiries & Leads` pathway via Edge Worker at initial launch *(gated on `VER-17`/Privacy, no PostgreSQL required)*; Admin Inbox `#8`, `CRM`, `Proposals`, `Projects/Milestones`, `Invoices`, `Support Tickets/Care Plans` in Future Release 2; `Client Portal`, `Reviews` (`VER-12`), and `Booking` *(requiring Decision `#15` review)* deferred to Release 3+.
- **P4 (Analytics & Intelligence — Privacy-Gated):** GA4 & GSC + PostHog — **strictly disabled (`OFF`)** until privacy, consent (`Module #24`), and legal gates (`VER-04`–`VER-06`) are approved.
- **P5 (AI Integration & MCP — Future Releases):** Remote MCP Server + `15` read-only tools (`Release 2`), Knowledge Base `#25` & Internal AI Assistant (`Release 3`), HITL write approval (`Release 4`).
- **P6 (Workflow Automation & Advanced BI — Future Releases):** AI BI reports (`Release 3`) + Workflow Automation Studio `#26` & HITL automation (`Release 4`).
- **P7 (Continuous Improvement):** Ongoing CWV, security, accessibility, SEO/GEO/AIO, UX, and CRO.
- **Regular Blog Publishing & Human Approval Governance (`WPCP-P1.6-V05` `#51` + `Decision #52`):** Initial launch supports regular publishing via **GitHub PR + MDX (`12` frontmatter fields, `draft`/`published`, mandatory human review)**; Future Platform Releases preserve all `26` Admin Dashboard modules without adding a `27`th module and embed A–H AI-assisted content intelligence inside **`#3` + `#6` + `Content Intelligence Agent`**.
- **Lifecycle Rule:** **`Planned ≠ Designed ≠ Implemented ≠ Tested ≠ Production-Enabled`** — zero Stage 2 implementation has begun.
