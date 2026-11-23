# Task 1.6 — No-CMS Next.js Initial Website MVP Architecture, Hosting Compatibility & Launch Readiness Plan (`Decision #52`)

**Submitted Prompt Header:** `WPCP-P1.6-V06` *(Registered sequentially in `/PROMPT_REGISTER.md` as **`WPCP-P1.6-V07`** to prevent Prompt ID reuse per `Decision #48`)*  
**Last Updated:** `2026-11-23`  
**Project:** `WPCarePoint.co.uk` Rebuild & Reopening  
**Stage & Task:** Stage 1: Discovery & Planning — Task 1.6: Website Architecture & SEO Foundation (`IN PROGRESS`)  
**Execution Mode:** `Planning & Documentation Only` *(Owner-confirmed direction for initial launch; ZERO implementation approval)*  
**Stage 2 & Stage 3 Status:** **`NOT STARTED — BLOCKED`**

---

## 1. Governance Classification & Supersession Notice

| Classification | What Falls Under This Category |
|---|---|
| **`OWNER-CONFIRMED DIRECTION`** | **`Decision #52` (`2026-11-23`)**: Build initial `WPCarePoint.co.uk` public website **without any CMS** (`Next.js`, `React`, `TypeScript`, `Tailwind CSS`, reusable UI components, `MDX`/structured content files, `Next.js Metadata API`, `GitHub` version control, `Cloudflare` CDN/security, compatible hosting). Plus preserved Decisions `#1–#51` (`22`-page Option B, `VER-20 13/13`, `RH1 4HW`, Email-only, `/wordpress-speed-optimisation/`, `#49–#51`). |
| **`TECHNICAL RECOMMENDATION`** | GitHub PR + preview workflow for MDX blog & structured portfolio publishing; static-first **Approach B** (`Next.js` static export + Cloudflare Pages/Worker) OR lightweight **Approach C** (`Node.js` hosting/VPS) contingent on the `12`-point cPanel compatibility check. |
| **`PROPOSED ARCHITECTURE`** | Exact Next.js App Router file/MDX/component structure, `/sitemap.xml` dynamic build generator, Cloudflare Edge `301`/`410`/`404` Worker routing, and modular boundary separating initial MVP from future `Releases 2–4`. |
| **`DEFERRED CAPABILITIES`** | **Initial Launch Exclusions:** Payload CMS, WordPress CMS, Directus, any CMS, Custom Admin Dashboard (`26`-module baseline preserved for future releases), PostgreSQL (unless a documented initial requirement proves necessary), AI Agent execution platform, Customer-Facing SaaS (`#49`), Remote MCP (`#23`). **Previously Deferred:** Legal/GDPR/Retention (`VER-04`–`VER-06`, `#24`), Email delivery (`VER-17`), URL Migration Matrix lock, Original GSC `Pages.csv` (`VER-15`). |
| **`OUTSTANDING APPROVALS & DEPENDENCIES`** | `VER-18` (GitHub repo + Cloudflare/Registrar access), **12-point cPanel Hosting Compatibility Check + Hosting Approach selection (`A`/`B`/`C`)**, `VER-13`/`VER-16` Portfolio & `86` Pre-Hack Blog recovery materials, optional `VER-07`–`VER-12`/`VER-14`, and formal Stage 2 authorisation. |

**Conflict & Supersession Transparency (`Decision #48`):** Earlier unapproved proposals in `V03`/`V06` recommending `Payload CMS v3 (MIT)` + `PostgreSQL` + `10` Core CMS Admin Dashboard modules in **Release 1 MVP** (`OD-01`, `OD-02`) are cleanly **superseded for the Initial Website Launch** by Owner-Confirmed **`Decision #52`**. The `26`-module Admin Dashboard, AI Agency Platform, Dual SaaS (`#49`), Human Approval (`#50`), and `A–H` Blog Intelligence (`#51`) remain **preserved verbatim as Future Platform Releases** (`Post-MVP` / `Releases 2+`).

---

## 2. Owner-Confirmed Technology Direction (`Decision #52`)

### A. Initial Website Stack (Owner-Confirmed Direction)
- **Framework & UI:** `Next.js` (App Router) + `React` + `TypeScript` + `Tailwind CSS` + Reusable custom UI components.
- **Content Storage:** `MDX` (or Markdown) files for blog/guides + structured TypeScript/JSON modules for pages, services, care plans, FAQs, and recovered portfolio entries inside Git.
- **Metadata & SEO:** Native **`Next.js Metadata API`** (`canonical`, `<html lang="en-GB">`, `hreflang`, OpenGraph, Twitter, structured `@graph` JSON-LD, build-time dynamic `sitemap.xml`).
- **Source Control & Edge Security:** `GitHub` version control + `Cloudflare` CDN, WAF, DNS, and security services + verified compatible production hosting.

### B. Explicitly Excluded From Initial Launch
1. `Payload CMS`
2. `WordPress CMS`
3. `Directus`
4. Any other CMS
5. `Custom Admin Dashboard` *(all `26` modules deferred to Future Platform Releases)*
6. `PostgreSQL` *(unless a documented initial launch requirement makes a database strictly necessary — note: `/contact` form submission via Cloudflare Worker + Resend/Postmark + Turnstile does **NOT** require PostgreSQL at initial launch)*
7. `AI Agent execution platform` (`12` logical agents deferred)
8. `Customer-facing SaaS` (`Decision #49` — Post-MVP)
9. `MCP` services (`#23` — Future Release)

---

## 3. Initial Content Management Strategy (No-CMS Operations)

### A. Website Pages (`22`-Page Option B Baseline Preserved)
- Use typed structured content modules (e.g. `src/content/pages/*`, `src/content/services/*`) paired with reusable Next.js components (`ServiceHero`, `CarePlansSection`, `QuickFixBanner`, `FaqSection` with `1:1` visible-to-`FAQPage` Schema parity, `ContactSection` gated on `VER-17`/`VER-04`–`VER-06`).
- Enforce `22`-page Option B sitemap (`18` launch-active while `/privacy-policy`, `/cookie-policy`, `/terms-and-conditions` and `/wordpress-projects-portfolio` hold `noindex` and stay excluded from `sitemap.xml` until verified).

### B. Blog Management (`MDX` / Markdown Repository Workflow)
Every `/blog/*` article lives as a versioned `.mdx` (or `.md`) file inside `src/content/blog/<slug>.mdx` with Zod/TypeScript build-time frontmatter validation supporting all **`12` required fields**:
1. **`title` & `slug`** (`slug` validated for uniqueness & canonical `/blog/<slug>/` cleanliness)
2. **`seoTitle` & `metaDescription`**
3. **`author`** (`name`, `role`, `profileRef` — strictly non-fabricated per `Decision #6` / `VER-14`)
4. **`publishedDate`** (`ISO 8601`, `Europe/London`)
5. **`updatedDate`** (`ISO 8601`)
6. **`featuredImage`** (`src`, `alt`, `width`, `height` — WebP/AVIF compliant per `Decision #17`/`#30`)
7. **`categories` & `tags`** (mapped cleanly to WPCarePoint `5` Service Categories & approved taxonomy — never generating unreviewed tag bloat)
8. **`content`** (`MDX` body with safe semantic headings `H2`/`H3`, UK English `en-GB` spelling, and reusable editorial callout components)
9. **`internalLinks`** (explicit structured links to canonical `/services/*`, `/wordpress-*`, or related posts)
10. **`relatedArticles`** (curated array of verified `slug` references)
11. **`schemaRecommendations`** (`Article`/`BlogPosting`, `BreadcrumbList`, optional verified `FAQPage` items)
12. **`status`** (`"draft"` \| `"published"` — **`"draft"` files MUST be excluded at build time from routes, `sitemap.xml`, listings, and RSS**)

### C. Regular Blog Publishing Workflow (`No-CMS GitHub Editorial Pipeline`)
Preserves **Regular Blog Publishing** (`Decision #51`) without a CMS or database:
1. **Create / Recover Draft (`VER-16` + New `en-GB` Articles):** Author or team creates/recovers an `.mdx` file on a dedicated Git branch (`content/blog-<slug>`) with `status: "draft"`.
2. **Pull Request & Automated Checks:** Open GitHub PR -> CI runs frontmatter Zod validation, link check, spelling/asset check, and deploys an isolated **Staging/Preview URL**.
3. **Human Editorial & Owner Review (`Mandatory Gate`):** Owner reviews live preview (`content`, SEO metadata, `1:1` schema, images, factual accuracy). **Zero autonomous AI publishing.**
4. **Approve, Flip Status & Publish:** Upon explicit human approval, `status` is set to `"published"`, PR merges to `main`, and CI deploys updated static/Next.js build + updated `sitemap.xml` automatically.
5. **Future Bridge:** Because every post is clean structured MDX + typed frontmatter, importing all Git MDX articles into future `Module #3` + `#6` + `Content Intelligence Agent` later requires zero content rewriting.

### D. Portfolio Management (Structured Data + `VER-13` Recovery)
- Store verified projects in structured TypeScript/MDX project files (`src/content/portfolio/*`) rendered via reusable portfolio card/detail components.
- Preserve **Portfolio Recovery Plan (`VER-13`)**: collect historical assets/screenshots cleanly, hold `/wordpress-projects-portfolio` `noindex` if verified assets are incomplete at initial launch, record unrecoverable items in a separate log, and **never** invent replacement clients, fake logos, or synthetic metrics (`Decision #6`).

---

## 4. Initial Website MVP Architecture (`Lightweight Public Launch`)

Keeping the initial launch strictly focused on the **`13` minimum public website requirements** with **zero unnecessary backend/DB infrastructure**:

| # | MVP Component | Initial No-CMS Implementation Approach | Preserved Governance / Gate |
|---:|---|---|---|
| 1 | **Responsive Public Website** | Next.js App Router + Tailwind CSS (`#ffffff`, `#f7f9fa`, `#003b4f`, `#00749c`, `#00b2d4`, light-first, zero `cy` toggle). | Decisions `#3`, `#11`, `#12` |
| 2 | **Approved Website Pages** | Core pages (`/`, `/services`, `/about`, `/contact`) + gated Legal (`/privacy-policy`, `/cookie-policy`, `/terms-and-conditions`). | Decision `#24`, `#34`, `#39` |
| 3 | **Service Pages** | `5` Primary WordPress/WooCommerce routes (incl. `/wordpress-speed-optimisation/`) + `9` Supporting Hybrid `/services/*` routes (Option B). | Decisions `#33–#35`, `#40` |
| 4 | **Blog & Article Pages** | MDX collection (`/blog/*`) supporting `VER-16` recovered pre-hack posts + ongoing GitHub-PR regular publishing (`status: draft\|published`). | Decisions `#25`, `#51`, `#52` |
| 5 | **Portfolio Pages** | Structured `/wordpress-projects-portfolio` data + components (`noindex`/hidden until `VER-13` authentic projects verified). | Decisions `#6`, `#14`, `#38` |
| 6 | **SEO Metadata** | `Next.js Metadata API` emitting unique `<title>`, `<meta name="description">`, self-referencing `canonical`, `<html lang="en-GB">`, and `hreflang`. | Decision `#26` |
| 7 | **Internal Linking** | 5-category `Services` dropdown, concise 4-group footer, breadcrumb links, and contextual MDX `internalLinks`/`relatedArticles`. | Decision `#15` |
| 8 | **Structured Data & Schema** | Deterministic JSON-LD builder (`Organization`/`ProfessionalService`, `Service`, `BreadcrumbList`, `1:1` `FAQPage`, `BlogPosting` — zero fabricated claims). | Decision `#6`, `#19` |
| 9 | **Image Optimisation** | Replace `VER-19`-rejected AI images; serve WebP/AVIF, explicit `width`/`height`, `sizes`/`srcset`, eager `fetchPriority="high"` hero, lazy below-fold. | Decisions `#17`, `#20`, `#30` |
| 10 | **Accessibility** | Semantic HTML landmarks, single `<h1>`, keyboard navigation, focus states, `aria-live` form validation targeting `WCAG 2.2 AA`. | Decision `#14` |
| 11 | **Performance & Core Web Vitals** | Static/pre-rendered HTML + minimal client JS (`0` fake `useServiceViews` state, zero unused `@google/genai`), targeting `LCP <= 2.5s`, `INP <= 200ms`, `CLS <= 0.1`. | Tech Risk `#5` remediation |
| 12 | **Contact Info & Workflow** | `contact@wpcarepoint.co.uk`, approved `RH1 4HW`, **Email-only** (no phone/WhatsApp/call centre). Interactive form stays **disabled** until `VER-17` (Worker + Resend/Postmark + Turnstile) & `VER-04`–`VER-06` verify. | Decisions `#18`, `#21–#23`, `#37`, `#39` |
| 13 | **Privacy-Gated Analytics** | **ZERO tracking active by default.** Scripts (`GA4`/`GSC`) and consent controls stay `OFF` until UK GDPR / Privacy Policy (`VER-04`–`VER-06`) & consent mechanism are approved. | Decision `#44` (`DEFERRED BY OWNER`) |

*(Note: URL migration `301`/`410`/`404` Edge rules remain gated behind the approved URL Migration Matrix before Stage 3 production cut-over.)*

---

## 5. Hosting Compatibility Assessment (`cPanel Shared Hosting` Unknown Specs)

Current hosting is known **only as cPanel Shared Hosting** (provider name, OS, CloudLinux/RAM/Node specs are unknown). **Never assume it supports Next.js Node.js runtimes.**

### A. Mandatory `12`-Point Hosting Compatibility Checklist (To Verify Before Choosing Host)

| # | Verification Item | Why It Matters for Next.js Rebuild | Status |
|---:|---|---|---|
| 1 | **Supported Node.js Version** | Modern Next.js (`15+`) requires **Node.js `>= 20.9` / `22 LTS`**. Old cPanel EasyApache stacks often cap at Node `16` or `18`. | `UNVERIFIED` |
| 2 | **Next.js Production Deployment Support** | Whether server can serve `next start` (`SSR`) OR `output: 'export'` static files (`out/`) cleanly without `.htaccess` SPA breakage. | `UNVERIFIED` |
| 3 | **cPanel Node.js Application Manager / Phusion Passenger** | Required to map port/domain cleanly to a Node process on cPanel; Passenger frequently suffers cold-start timeouts & path quirks. | `UNVERIFIED` |
| 4 | **SSH & Terminal Access** | Required to diagnose builds, check Node/npm versions, or inspect logs (many budget shared plans disable SSH). | `UNVERIFIED` |
| 5 | **Persistent Application Processes** | Shared hosts often kill long-running Node processes (`SIGKILL` via CloudLinux LVE idle/proc limits). | `UNVERIFIED` |
| 6 | **Build & Deployment Permissions** | Running `npm ci && npm run build` locally on shared hosting frequently exceeds shared host file-descriptor or process limits. | `UNVERIFIED` |
| 7 | **Memory (`RAM`) & `CPU` Limits** | `next build` + Tailwind/MDX typically spikes to `1.5–2+ GB` RAM; `512 MB–1 GB` CloudLinux LVE limits cause `ENOMEM` build crashes. | `UNVERIFIED` |
| 8 | **Static Export (`out/`) & `410`/`301` Support** | Can cPanel Apache `.htaccess` + Cloudflare Edge serve clean `out/` HTML files AND true `HTTP 410 Gone` + `404`? | `UNVERIFIED` |
| 9 | **Domain & Subdomain Configuration** | Clean apex (`wpcarepoint.co.uk`) + `www` canonical handling and future Staging subdomain (`staging.wpcarepoint.co.uk`) routing. | `UNVERIFIED` |
| 10 | **SSL Support** | Full (Strict) TLS certificate between Cloudflare Edge and origin host (AutoSSL / Let's Encrypt / Cloudflare Origin CA). | `UNVERIFIED` |
| 11 | **Git Deployment Support** | cPanel Git Version Control vs GitHub Actions `SFTP`/`rsync`/Cloudflare deploy automation. | `UNVERIFIED` |
| 12 | **Backup & Restoration** | Automated daily snapshot / JetBackup availability and verified file restore workflow before any cut-over. | `UNVERIFIED` |

### B. Evaluation of Three Hosting Approaches (`A` vs `B` vs `C`)

| Criterion | **Approach A: Existing cPanel Shared Hosting** *(If Compatible)* | **Approach B: Static Next.js Export (`output: 'export'`) + Cloudflare Pages (+ Worker)** | **Approach C: Dedicated Node.js Hosting / Managed UK-EU VPS** |
|---|---|---|---|
| **Best Fit When** | Only if cPanel proves Node `20+` + sufficient RAM **OR** serves purely static `out/` built in GitHub Actions, behind Cloudflare. | **Best fit when all launch pages (`22` pages + MDX blog + portfolio) pre-render to static HTML**, and `/api/contact` + `410`/`301` run on Cloudflare Workers/Pages Functions. | Best fit if server-side Next.js runtime (`SSR`, `ISR`, dynamic headers/API routes on origin, runtime `next/image`) is explicitly needed later. |
| **Technical Trade-Offs** | **Node SSR on cPanel is fragile:** Passenger restarts, CloudLinux LVE memory kills (`ENOMEM`), and shared-server noisy neighbours are common. *(Serving static `out/` on cPanel works better, but still keeps a shared-hosting SPOF.)* | **Zero Node origin server to maintain or crash:** Near-instant global TTFB via Cloudflare CDN, built-in preview URLs per GitHub PR (ideal for regular MDX blog human review!), true `HTTP 410`/`301`/`404` via Edge Worker, and zero server patching. **Constraint:** Next.js runtime SSR features (e.g., runtime `cookies()` / dynamic server rendering / default runtime `next/image` without loader) cannot run inside static export; solved via build-time WebP/AVIF assets + Cloudflare Worker for `/api/contact`. | Full Next.js App Router runtime (`next start`), zero static-export constraints, predictable RAM/CPU (`2–4 GB+`), and easy future PostgreSQL/container scaling. **Trade-off:** Higher monthly hosting cost and server/OS/PM2/Docker maintenance compared to static+edge. |
| **Future Platform Upgrade Path** | Weakest bridge to `Releases 2–4` (PostgreSQL, MCP, AI agents). | Smoothly keeps marketing site static/edge on Cloudflare while `Releases 2–4` API/Admin/MCP run cleanly on a separate backend service (`api.` / `app.`). | Seamless same-infrastructure path to expand into Node containers + PostgreSQL later. |

### C. Simplest Reliable Hosting Recommendation *(Technical Recommendation Only — Zero Purchase/DNS Action)*
1. **Primary Recommendation — Approach B (`Static Next.js Export on Cloudflare Pages + Cloudflare Worker/Pages Function`):**
   - Assuming all initial MVP features fit static generation (which `22` service/legal pages + `MDX` blog + structured portfolio do cleanly) and `/api/contact` (once `VER-17`/Legal clear) plus Edge `301`/`410`/`404` run on a **Cloudflare Worker/Pages Function**, **Approach B** is the **simplest, fastest, lowest-cost, and most reliable** option. It directly satisfies **Decision `#8`**, gives automatic GitHub PR previews for human blog approval, eliminates cPanel LVE/Passenger crashes, and solves `wrangler.jsonc`'s SPA soft-404 hazard cleanly.
2. **Fallback Recommendation — Approach C (`Managed Node.js Hosting / Lightweight UK-EU Container`) or Static-on-cPanel-only:**
   - Choose **Approach C** only if runtime Next.js SSR features or dynamic on-origin `next/image` optimisation are strictly required, OR use **cPanel (`Approach A`)** *only* as a static `out/` origin built via GitHub Actions if owner prefers keeping current cPanel temporarily and cPanel passes SSL/Cloudflare checks (never run heavy Node SSR on unverified cPanel).
- **Hard Lock:** **Do NOT purchase hosting, change DNS, or migrate the domain during Stage 1.**

---

## 6. Future Platform Separation (`Decisions #49–#51` & `26`-Module Baseline Preserved)

The initial No-CMS website keeps a **clean modular separation** so long-term ambitions remain completely compatible without adding MVP bloat:

| Phase | Scope & Capabilities | Separation Boundary |
|---|---|---|
| **Initial Launch (`MVP` — `Decision #52`)** | `Next.js + React + TypeScript + Tailwind + MDX + Structured Data + Metadata API + GitHub + Cloudflare` (`No CMS`, `No DB`, `No Admin UI`, `No SaaS`, `No MCP`, `No AI Execution`). | Pure public website + static/edge delivery + gated `/api/contact` Worker (`VER-17`/Legal gated). |
| **Future Internal Agency Platform (`Releases 2–4` — Preserved)** | **`26`-Module Custom Admin Dashboard**, PostgreSQL/CRM/Proposals/Projects/Tickets/Invoices (`#9–#13`), Analytics/PostHog/AI BI (`#16–#21`), Remote MCP (`#23`), Privacy Centre (`#24`), Knowledge Base (`#25`), Workflow Studio (`#26`), **`12` Logical AI Agents**, `A–H` Regular AI-Assisted Blog Intelligence inside `#3`+`#6` (`#51`), Human Approval Tiers `1–5` & `9`-item checklist (`#50`). | Introduced later as modular backend/admin packages (`apps/admin`, `apps/api`, `apps/mcp`, `packages/*`) without rewriting public frontend components or MDX blog content. |
| **Future Commercial SaaS & `2026–2030` R&D (`Decision #49` — Post-MVP)** | Customer-Facing SaaS Portal, `10`-step SSRF-hardened Website Audit Platform, strict `tenant_id` multi-tenant DB/KMS/RAG isolation, multi-region `.com`/`.us`/`.eu`, & exploratory device/robotics readiness. | Separate commercial phase unlocked only after internal platform & legal/compliance gates mature. |
