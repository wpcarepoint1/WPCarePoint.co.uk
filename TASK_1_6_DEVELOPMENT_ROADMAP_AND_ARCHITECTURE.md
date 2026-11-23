# Task 1.6 — Development Priority (`P0–P7`), Release Roadmap, MVP Strategy & Technical Architecture Evaluation

**Last Updated:** 2026-11-23  
**Project:** `https://wpcarepoint.co.uk/` Rebuild & Controlled Reopening (**WPCarePoint** — *Web Development, eCommerce & AI Solutions Agency*)  
**Scope:** Stage 2–3 Development Planning, Architecture Evaluation, Operational Security, Migration Gates & Governance Framework  
**Task 1.6 Status:** **`IN PROGRESS`**  
**Stage 2 Status:** **`NOT STARTED — BLOCKED`** *(Planning & documentation ONLY — zero code, database, tracking scripts, MCP endpoints, DNS, or live website changes have been made.)*

---

## Governance & Strict Non-Execution Lock

- Preserves Confirmed Owner Decisions **`#1–#51`** verbatim and incorporates **Owner-Confirmed `Decision #52`** (`2026-11-23` — `/TASK_1_6_NO_CMS_INITIAL_MVP_ARCHITECTURE.md`): **Initial website launch uses a No-CMS `Next.js + React + TypeScript + Tailwind CSS + MDX/structured content + Metadata API + GitHub + Cloudflare` stack**, explicitly excluding any CMS (`Payload`, `WordPress`, `Directus`), Custom Admin Dashboard, PostgreSQL (unless strictly needed), AI execution, SaaS, and MCP from Initial Website MVP (`Release 1`).
- Keeps **Legal & compliance implementation (`VER-04`–`VER-06`)**, **Email delivery infrastructure (`VER-17`)**, **URL migration execution**, and **Original GSC `Pages.csv` (`VER-15`)** as **`DEFERRED BY OWNER`**; keeps **`Not Indexed Pages` = `SKIPPED BY OWNER`** and **`Links` = `No Data`**.
- Preserves `/gsc_performance_pages_reconstructed_56.csv` (`56` rows), **`305` `Indexed Pages`**, and **`766` Wayback** baselines unchanged.
- Earlier `Payload CMS v3 (MIT)` / `PostgreSQL` / `10`-module CMS proposals for Release 1 are **superseded for initial launch by `Decision #52`**, while all Future Platform (`Releases 2–4`) infrastructure proposals remain **awaiting explicit owner approval** when those later stages are scoped.
- Maintains strict lifecycle separation: **`Planned ≠ Designed ≠ Implemented ≠ Tested ≠ Production-Enabled`**, keeping Custom Admin (`26` modules), `Customer-Facing SaaS`, `12` AI Agents, MCP, and AI Blog Automation strictly **`PLANNED ONLY`** for Future Platform Releases.

---

### ৭. আমার প্রস্তাবিত Development Priority

*(Section 7 Alignment — Cross-referenced in `/TASK_1_6_ANALYTICS_MCP_BI_ARCHITECTURE.md` and `/TASK_1_6_PORTFOLIO_BLOG_AND_ADMIN_PLAN.md`)*

#### **P0: Technical Foundation** *(Must precede all application, database & tracking work)*
- Final technology stack and architecture approval *(Owner Sign-Off Required — Section 4)*
- Hosting and infrastructure planning *(Cloudflare edge/CDN + portable compute)*
- Database architecture *(Schema design, migrations, PII/Analytics isolation)*
- Authentication and role-based access control (`RBAC`, `MFA`, session security)
- Security architecture (`WAF`, TLS, `CSP`, input/output encoding, secrets management)
- Backup and disaster recovery strategy *(automated snapshots + tested restoration drills)*
- Development, staging and production environments *(isolated configs & datasets)*
- CI/CD and deployment strategy *(PR checks, automated tests, controlled approval gate)*
- Monitoring and error logging *(uptime alerts, structured error telemetry, health checks)*

#### **P1: Public Website Development**
- Approved **`22`-page** Option B sitemap (`/TASK_1_6_FINAL_SITEMAP_ARCHITECTURE.md`)
- Responsive and mobile-first design (`#ffffff` / `#003b4f` / `#00749c` / `#00b2d4`, light-first)
- Website performance and Core Web Vitals (`WebP`/`AVIF`, `fetchPriority="high"` hero, explicit dimensions)
- Technical SEO foundation (`<html lang="en-GB">`, dynamic `sitemap.xml`, self-referencing `canonical` & `hreflang`, zero `cy` toggle)
- Schema markup and structured data (`@graph`, `Service`, `BreadcrumbList`, `1:1` `FAQPage`)
- Internal linking and navigation (`Services` 5-category dropdown, concise 4-group footer)
- Contact and enquiry pathways (`contact@wpcarepoint.co.uk`, `RH1 4HW` approved for `/contact`, Email-only channel; form enabled **only** after `VER-17` & `VER-04`–`VER-06`)
- Accessibility and usability (`WCAG 2.2 AA` engineering target)
- URL migration implementation **only after** the approved migration matrix (`Decision #40` `/wordpress-seo-speed-optimization/` -> `/wordpress-speed-optimisation/`, retired GEO URL disposition, spam `HTTP 410` Edge allowlist)

#### **P2: Core Admin Dashboard and CMS** *(WordPress-style non-technical UX)*
- `Module #1`: Dashboard Overview
- `Module #2`: Page and Service Management
- `Module #3`: Blog and Article Management *(incl. `86` pre-hack Wayback recovery queue)*
- `Module #4`: Portfolio and Project Management *(`VER-13` recovery & publish gate)*
- `Module #5`: Media Library
- `Module #6`: SEO Metadata Management
- `Module #7`: Redirect and `410` Management
- `Module #15`: Website Settings
- `Module #14`: User and Role Management
- `Module #22`: Activity Logs *(+ System Health)*

#### **P3: Business Management System** *(Phased: operationally essential in early release; advanced items deferred)*
- **Operational Core (Early Release Priority):**
  - `Module #8`: Enquiries and Leads Inbox *(MVP Launch-Critical)*
  - `Module #9`: CRM and Client Management *(Release 2)*
  - `Module #10`: Proposals and Quotations *(Release 2)*
  - `Module #11`: Project and Milestone Management *(Release 2)*
  - `Module #12`: Support Tickets and Care Plans *(Release 2)*
  - `Module #13`: Invoices and Commercial Records *(Release 2 — AI write prohibited)*
- **Advanced / Deferred P3 Extensions (Release 3+ & Requires Policy Review):**
  - **Client Portal** *(Release 3+ — authenticated client view)*
  - **Appointment and Consultation Booking** *(Release 3+ — Note: **Decision `#15` explicitly rejected Calendly/Cal.com for the initial launch form**; introducing booking requires explicit owner policy revision)*
  - **Reviews and Reputation Management** *(Release 3+ — **Decision `#6` / `VER-12` strict rule**: publish verified real reviews only; never invent ratings)*

#### **P4: Analytics and Intelligence** *(Strictly Privacy-Gated — `OFF` until Legal & Consent Ready)*
- GA4 Integration *(Release 1 — gated OFF until `Module #24` + Legal clear)*
- Google Search Console Integration *(Release 1 — separated from internal search)*
- `Module #16`: Centralised Analytics Dashboard *(Release 1)*
- `Module #17`: Real-Time Visitor Summary & Traffic Acquisition *(Release 1 Basic / Release 2 Full + AI Referrals)*
- `Module #19`: Landing and Exit Pages + Conversion Funnels *(Release 1 Landing/Exit / Release 2 PostHog Funnels)*
- Country and Device Reports *(Approx geo only — zero browser GPS by default)*
- `Module #18` & `#21`: Search Query Intelligence *(GSC vs Internal Site Search separated)*
- Conversion and Enquiry Tracking *(Deduped `event_id` server-verified)*
- Daily, Weekly and Monthly Reports *(Release 1 Manual/Exportable -> Release 3 AI-assisted)*
- **Hard Privacy Lock:** All production tracking, cookies, and session replay **MUST remain disabled** until privacy, consent, and legal controls (`Module #24`, `VER-04`–`VER-06`) are approved and implemented.

#### **P5: AI Integration and Agent Connectivity**
- Internal WPCarePoint AI Assistant *(Release 3)*
- `Module #25`: Knowledge Base and Business Data Hub *(`12` approved domains — Release 3)*
- Remote MCP Server *(HTTPS, OAuth 2.1 / scoped credentials — Release 2)*
- Claude, Claude Code, ChatGPT & compatible AI Agent connectivity *(Release 2–3)*
- `Module #23`: Scoped permissions, RBAC & tool allowlists *(Release 2)*
- Read-only data access initially *(`15` non-PII read-only tools — Release 2)*
- Human approval (`HITL`) for permitted write actions *(Release 4 only)*

#### **P6: Workflow Automation and Advanced Business Intelligence**
- `Module #26`: Workflow Automation Studio *(`9` evaluated workflows — Release 4)*
- `Module #20`: AI-powered business reports, SEO & conversion insights *(Release 3)*
- Automated reporting & anomaly detection *(Release 3–4)*
- Enquiry and lead workflow automation *(Release 4)*
- Human-in-the-loop (`HITL`) approval system *(Release 4)*

#### **P7: Continuous Improvement**
- Ongoing Core Web Vitals & performance optimisation
- Periodic security & dependency audits
- Accessibility (`WCAG 2.2 AA`) refinements
- Ongoing Technical SEO & AI Search Optimisation (`GEO`/`AIO`) tuning
- UX improvements & Conversion Rate Optimisation (`CRO`)
- Evidence-based feature iteration grounded in verified business analytics

---

## 2. Release-Based Development Roadmap (`Releases 1–4` Mapping All `26` Modules)

*(Preceded by **Phase 0 (`P0`) Technical Foundation**, which has no public modules but must pass infrastructure, DB, Auth, CI/CD, and Backup acceptance checks before Release 1 code merges to staging/production.)*

| Release | Included Modules (`#1–#26`) & Features | Business Purpose | Dependencies | Required Integrations | Security & Privacy Requirements | Acceptance & Testing Requirements | Gate Before Next Release |
|---|---|---|---|---|---|---|---|
| **Phase 0 (`P0`)** | *Lightweight Initial Infra (`GitHub` + `Cloudflare` + Verified Hosting + Staging/Prod Preview — No DB/CMS required at R1 per `Decision #52`)* | Establish secure, non-soft-404 foundation aligned with `12`-point hosting compatibility check. | Hosting approach choice (`A`/`B`/`C`) + `VER-18` (GitHub/DNS access). | GitHub CI/CD, Cloudflare Edge/WAF, verified production host. | Protected `main` branch, WAF, CSP, secrets vault (no DB/PII store unless separately approved). | Staging preview parity verified; true `301`/`410`/`404` edge routing tested. | Owner approval of P0 hosting baseline + Staging health verified. |
| **Release 1 (Initial No-CMS MVP Public Website — `Decision #52`)** | **Public Site (`P1`)** via **No-CMS Next.js + React + TypeScript + Tailwind + MDX Blog + Structured Portfolio/Pages + Next.js Metadata API** (`No CMS`, `No Admin Dashboard`, `No PostgreSQL`, `No MCP/AI/SaaS`) + Edge `/api/contact` Worker *(disabled until `VER-17`/Legal clear)* + Privacy-gated GA4/GSC placeholder (`OFF`) | Launch clean `22`-page UK agency site (`18` active until Legal/Portfolio ready), fix live SEO/Contact bugs, recover/publish MDX blog via GitHub PRs, & protect crawl/index equity. | Phase 0 complete; `VER-04`–`VER-06` & `VER-17` (to activate `/contact` form & tracking); Approved Migration Matrix (`VER-13`/`VER-16` asset recovery). | Cloudflare Turnstile, Resend (+ Postmark fallback) on Edge Worker *(gated)*; GA4/GSC *(locked `OFF` until `#24`/Legal clear)*. | `/contact` form disabled until `VER-17` + Privacy clear; GA4/cookies blocked until legal/consent approval; GitHub human-approved PR gate for MDX publishing; single-hop `301`/`410` Edge allowlist. | All 14 SEO/Migration Quality Gates pass; Playwright E2E for `/contact` & `410`/`301`/`404` status codes; CWV (`LCP < 2.5s`, `CLS < 0.1`); CSP & MDX draft-exclusion verified. | Owner production sign-off; live GSC indexation & error-log stability verified for 14 days; zero lead-loss incidents. |
| **Release 2 (Future Internal Agency Ops, Admin Core `#1–#15, #22`, PostHog & Read-Only MCP)** | **Admin Core (`#1–#8, #14–#15, #22`)** + **Agency Ops (`#9 CRM, #10 Proposals, #11 Projects, #12 Support Tickets/Care, #13 Invoices`)** + **Privacy & Analytics (`#24, #16–#19, #21`)** + **AI Gateway (`#23 AI Agent Connections` + `15` Read-Only Remote MCP Tools)** | Introduce the dedicated Custom Admin Dashboard, PostgreSQL ops/CRM backend, PostHog funnels, and read-only MCP connectivity after the public website is live. | Release 1 stable in production; explicit Future Platform database/CMS architecture & Privacy Gate (`#24`) approval. | Managed PostgreSQL, Object Storage, PostHog (EU/self-hosted), OAuth 2.1 / MCP SDK (`@modelcontextprotocol/sdk`). | **PostHog Session Replay remains `OFF`**; MCP enforces OAuth/scoped revocable tokens, tool allowlists, RBAC, rate limits, immutable audit logs, zero PII/DB-secret exposure. | API contract tests for all 15 MCP read-only tools; MCP penetration/auth bypass tests; PostHog event deduplication audit vs GA4/server counts. | Audit log inspection clean; CRM/Billing separation verified; 15 MCP tools verified non-PII in staging with Claude/ChatGPT test clients. |
| **Release 3 (Knowledge Base, AI Business Intelligence, `7`-Stage Blog Intelligence & P3 Extensions)** | **AI BI (`#20 AI Analytics & BI`)** + **Knowledge Hub (`#25 Knowledge Base & Business Data Hub`)** + **Content Intelligence Agent (`#3`+`#6`)** + *(Evaluated)* Client Portal, Verified Reviews (`VER-12`), & Booking *(if Decision `#15` revised)* | Give owner natural-language BI Q&A, Daily/Weekly/Monthly AI digests, `7`-stage AI-assisted editorial intelligence, and ground all AI outputs in a `12`-domain KB. | Release 2 Admin/DB, analytics data history & CRM attribution flowing cleanly; approved initial KB content compiled. | LLM Provider API (via server-side adapter — replaceable/vendor-neutral), Vector/Full-Text Index (`pgvector`/`tsvector`). | Strict KB `Approved`-only retrieval; mandatory citation of source, period & limitations in every BI output; Client Portal row-level tenant isolation. | Evaluation tests verifying zero fabricated metrics/facts on unverified topics; RBAC isolation tests for Client Portal; BI accuracy cross-check vs raw GA4/GSC queries. | Owner review of 4 weeks of AI digest accuracy; explicit owner policy decision on booking/portal/visitor AI widget. |
| **Release 4 (Workflow Automation Studio, HITL Write Tools & Continuous BI)** | **Automation (`#26 Workflow Automation Studio`)** + **Controlled AI Write Tools (`#23` HITL Queue: drafts, tasks, proposals, reports, CRM diffs)** + Advanced Anomaly/Predictive BI + `P7` Continuous Optimisation | Automate internal agency workflows, approval-locked scheduled blog publishing, and AI-assisted drafting safely behind mandatory HITL checkpoints. | Release 3 Knowledge Base & BI active; sufficient clean historical data volume before any predictive modelling. | Transactional Job Queue / Workflow Runner, Webhook/Email triggers (Resend). | **Hard Prohibition:** No autonomous live publishing, record deletion, invoice mutation, or DNS/prod changes; mandatory HITL approval table + cryptographic audit log. | Chaos/retry & dead-letter queue tests; HITL bypass negative tests; statistical backtesting before enabling any predictive trend widget. | Ongoing `P7` quarterly security, SEO, accessibility & CRO governance reviews. |

---

## 3. Minimum Viable Product (MVP) Strategy (`Decision #52` Updated)

**MVP Objective:** Launch the rebuilt `WPCarePoint.co.uk` reliably **without any CMS, Admin Dashboard, or PostgreSQL database** using **Next.js + React + TypeScript + Tailwind CSS + MDX/structured content files + Next.js Metadata API + GitHub + Cloudflare**, fixing live SEO/Contact defects cleanly while keeping all future `26`-module platform capabilities decoupled for `Releases 2–4`.

### Classification Matrix
| Tier | Features & Modules | Rationale |
|---|---|---|
| **A. Initial Launch MVP (`Release 1` — No-CMS Direction `Decision #52`)** | - **`P0` Lightweight Foundation:** Hosting compatibility (`12`-point check), GitHub `main`/PR preview workflow, Cloudflare CDN/WAF, isolated staging/prod.<br>- **`P1` Public Website:** `22`-page Option B architecture (`18` active while Legal/Portfolio hold `noindex` until verified), Edge `301`/`410`/`404` Allowlist *(post-Migration Matrix approval)*, `Next.js Metadata API`, `en-GB` SEO/Schema/`sitemap.xml`, responsive UI, `WCAG 2.2 AA`, CWV.<br>- **No-CMS Content & Recovery:** MDX `/blog/*` (`12` required frontmatter fields + `draft\|published` gate + `VER-16` `86`-post recovery via GitHub PRs) & structured Portfolio data (`VER-13` gated).<br>- **Edge Enquiry Intake:** Approved `/contact` details (`contact@wpcarepoint.co.uk`, `RH1 4HW`, Email-only); form **disabled** until `VER-17` (Worker + Resend/Postmark + Turnstile) & `VER-04`–`VER-06` Privacy clear *(zero PostgreSQL required)*.<br>- **Privacy-Gated Analytics:** Zero production tracking active by default until Legal/Privacy (`#24`) approvals pass. | Eliminates CMS/DB setup overhead, removes `ContactSection.tsx` lead-loss bug, fixes `wrangler.jsonc` SPA soft-404 hazard, supports Git-reviewed regular blog publishing, and accelerates safe Stage 2 launch. |
| **B. Future Platform Phase 1 (`Release 2` — Internal Agency Ops & Custom Admin)** | - **`26`-Module Custom Admin Dashboard Foundation (`#1–#15, #22`)** + PostgreSQL backend<br>- Full CRM, Proposals, Projects, Care Tickets, Invoices (`#9–#13`)<br>- Privacy Centre (`#24`) + GA4/GSC/PostHog Funnels (`#16–#19, #21`)<br>- Read-Only Remote MCP Server (`#23`, `15` tools) | Preserves the full `26`-module agency vision cleanly as a post-MVP expansion once the public site is live and generating real traffic/leads. |
| **C. Future Platform Phase 2 & Commercial SaaS (`Releases 3–4+`)** | - Knowledge Base (`#25`), AI Analytics & BI Assistant (`#20`), `12` Logical AI Agents, `7`-stage AI-assisted Blog Intelligence (`#3`+`#6`)<br>- Workflow Automation Studio (`#26`) & HITL AI Write Tools<br>- Client Portal, Verified Reviews (`VER-12`), Consultation Booking *(requires Decision `#15` review)*<br>- Customer-Facing SaaS (`#49`), `10`-step URL Audit Portal, Multi-Region `.com`/`.us`/`.eu` | Prevents MVP bloat and keeps AI, SaaS, and multi-tenant isolation cleanly separated until internal operations and data maturity exist. |

---

## 4. Technical Architecture Evaluation (`11` Domains × `9` Criteria)

*Evaluation Criteria applied across every layer: **(1) Security, (2) Scalability, (3) Performance, (4) Maintainability, (5) Development Cost, (6) Long-Term Ownership, (7) Integration Capabilities, (8) Vendor Lock-In, (9) Future AI Compatibility**.*

| Layer | Candidate Options Compared | Evaluation Highlights (Across `9` Criteria) | **Recommended Option** *(Pending Owner Approval)* & Rationale |
|---|---|---|---|
| **1. Frontend Framework** | **A.** Next.js (App Router, TypeScript)<br>**B.** Astro + React Islands<br>**C.** React SPA (Vite) + Cloudflare Workers SSR *(current repo base)* | **A:** Top SEO/SSR/ISR, single TypeScript stack, huge talent pool; mild Vercel convention risk (mitigated via Docker/`OpenNext`).<br>**B:** Highest static speed, zero client JS by default; weaker interactive 26-module Admin SPA UX.<br>**C:** Preserves current Vite UI code, but requires manual SSR/hydration wiring to avoid SEO/soft-404 bugs. | **Recommend: Next.js (App Router + TypeScript, self-hosted/portable SSR) — or Dual Build (Astro/SSR Public + React Admin)**.<br>*Why:* Best balance of `en-GB` SSR SEO, `Core Web Vitals`, interactive `26`-module WordPress-like Admin UI, maintainability, and zero proprietary deployment dependency when run via Docker or `OpenNext`. |
| **2. Backend Framework** | **A.** Dedicated TypeScript API (**Hono** or **Fastify**)<br>**B.** Next.js Route Handlers only<br>**C.** Python FastAPI | **A:** Clean domain separation, OpenAPI typed, runs identically on Node containers or Cloudflare Workers, zero lock-in.<br>**B:** Faster MVP wiring, tighter coupling between public web & admin/MCP APIs.<br>**C:** Strong AI ecosystem, adds second language maintenance cost. | **Recommend: Modular TypeScript Backend (`Hono` / `Fastify` with Zod + OpenAPI)**.<br>*Why:* Single language across frontend/backend/MCP, clean security isolation between public site and Admin/MCP/Analytics Layer, and low dev cost. |
| **3. Database** | **A.** Managed **PostgreSQL** (`Neon`/`Cloud SQL`/`RDS` + Drizzle ORM)<br>**B.** **Cloudflare D1** (SQLite)<br>**C.** MySQL / Document NoSQL | **A:** Full ACID transactions, complex CRM/Analytics/Audit joins, built-in full-text (`tsvector`) + vector (`pgvector` for KB `#25`), zero lock-in.<br>**B:** Cheap edge reads, but SQLite write-locking, analytics aggregation limits, and Cloudflare lock-in.<br>**C:** NoSQL weakens relational CRM/finance integrity. | **Recommend: Standard PostgreSQL (UK/EU region) + Drizzle ORM**.<br>*Why:* Handles all `26` modules (CMS, CRM, RBAC, Audit logs, Job queues, Knowledge Base `#25` embeddings) cleanly with standard SQL portability. |
| **4. CMS & Content Architecture** | **Initial Launch (`OWNER-CONFIRMED Decision #52`):** **No CMS** (`Next.js` + `MDX` + structured TS/JSON in GitHub).<br>**Future Platform (`Releases 2+`, Awaiting Later Approval):** **A.** Custom Next.js CMS & Admin vs **B.** Payload CMS `v3` (`MIT`) vs **C.** Directus (`BSL 1.1`) | Initial website avoids CMS/DB overhead & CVE maintenance entirely (`Decision #52`). For future `Releases 2+`, `BSL 1.1` Directus conflicts with commercial SaaS (`#49`), leaving Custom Next.js vs Payload v3 (`MIT`) as future backend options when the `26`-module Admin Platform is built. | **Initial Launch: No-CMS `MDX` + Structured TS/JSON (`OWNER-CONFIRMED #52`)**.<br>**Future Platform (`Releases 2+`):** Custom Next.js Admin vs Payload v3 (`MIT`) evaluated only when Stage 2+ backend phase begins. |
| **5. Authentication & Permissions** | **A.** Self-hosted TypeScript Auth (**Better Auth** / Lucia pattern + DB sessions + TOTP MFA + RBAC)<br>**B.** Managed (`Clerk` / `Auth0`)<br>**C.** Firebase Auth | **A:** Full data ownership in PostgreSQL, zero per-MAU pricing, supports custom RBAC + OAuth 2.1 MCP token binding.<br>**B/C:** Quick UI, higher long-term cost/lock-in and harder custom MCP/admin session coupling. | **Recommend: Self-Hosted TypeScript Session Auth + MFA + Server-Side RBAC in PostgreSQL**.<br>*Why:* Highest security transparency, zero recurring per-user lock-in, native fit for both Admin and Client Portal. |
| **6. API Architecture** | **A.** Versioned REST (`/api/v1/*`, OpenAPI + Zod)<br>**B.** `tRPC`<br>**C.** GraphQL | **A:** Universal for Admin UI, webhooks, external partners, and MCP gateway wrapping.<br>**B:** Great TypeScript DX, tied to TypeScript callers.<br>**C:** Over-engineering & cache/auth complexity. | **Recommend: Versioned OpenAPI REST (`/api/v1/*`) + Zod Validation**.<br>*Why:* Clean integration across Admin, Automation Studio, and future external services with zero lock-in. |
| **7. Remote MCP Hosting** | **A.** Isolated TypeScript MCP Gateway (`@modelcontextprotocol/sdk` over Streamable HTTPS + OAuth 2.1) behind Cloudflare WAF<br>**B.** Embedded inside main public Next.js app<br>**C.** Third-party hosted MCP SaaS | **A:** Isolates rate limits, WAF rules, OAuth 2.1, audit logs, and token revocation from the public website.<br>**B:** Shares blast radius with public marketing traffic.<br>**C:** Exposes internal architecture to third-party proxy lock-in. | **Recommend: Isolated TypeScript MCP Server Tier (`mcp.wpcarepoint.co.uk` or WAF-isolated `/mcp`)**.<br>*Why:* Best security boundary, native MCP spec compliance, vendor-neutral across Claude/ChatGPT/future agents. |
| **8. File & Media Storage** | **A.** **Cloudflare R2** (S3-compatible) + Edge WebP/AVIF<br>**B.** AWS S3 + CloudFront<br>**C.** Cloudinary | **A:** S3-API compatible (zero lock-in), zero egress fees, fast global CDN.<br>**B:** Industrial standard, higher egress cost.<br>**C:** Easy transforms, expensive bandwidth lock-in. | **Recommend: Cloudflare R2 (S3-Compatible Object Storage)**.<br>*Why:* Standard S3 protocol allows instant migration anywhere while keeping UK media delivery fast and low-cost. |
| **9. Analytics Infrastructure** | **A.** Server-side **WPCarePoint Integration Layer** (GA4 + GSC + PostHog + First-Party Aggregates)<br>**B.** Raw client-side tags only<br>**C.** Custom warehouse (`ClickHouse`/`BigQuery`) from Day 1 | **A:** No single-vendor dependency, deduped metrics, privacy-gated via `#24`, serves both Dashboard and MCP.<br>**B:** Unreliable, blocked by ad-blockers, unusable for AI BI.<br>**C:** Overkill/expensive for current traffic scale. | **Recommend: Server-Side WPCarePoint Analytics Integration Layer (`GA4 + GSC + PostHog`)**.<br>*Why:* Balances low Stage 2 cost with full future portability (can add `Plausible`/`Matomo`/`BigQuery` adapters later). |
| **10. Automation Engine** | **A.** PostgreSQL-backed Transactional Queue + Open-Source Runner (`BullMQ`/`Trigger.dev` self-hostable)<br>**B.** Managed SaaS (`Zapier`/`Make`)<br>**C.** Self-hosted `n8n` | **A:** Type-safe, integrates natively with RBAC, HITL approval tables & audit logs, zero per-task SaaS inflation.<br>**B:** Fast prototypes, high SaaS cost & data-privacy sprawl.<br>**C:** Good secondary connector for external SaaS later, weaker bespoke HITL CMS integration. | **Recommend: DB-Backed Queue / TypeScript Workflow Engine** *(with optional `n8n` adapter in Release 4 only for external SaaS connectors)*.<br>*Why:* Keeps PII, retries, HITL approvals, and audit trails inside WPCarePoint's controlled security perimeter. |
| **11. Hosting & Deployment** | **A.** Cloudflare Edge (DNS/WAF/R2/`301`/`410` Routing) + Containerised Node/TypeScript (`Cloud Run`/`Fly.io`/UK-EU PaaS)<br>**B.** Full Cloudflare Workers (`OpenNext`)<br>**C.** Vercel Pro | **A:** Standard Docker containers = **near-zero lock-in**, handles full SSR + background workers + MCP + PostgreSQL pooling cleanly, while Cloudflare Edge handles true `410`/`301` routing.<br>**B:** Great edge speed, requires Workers runtime compatibility discipline.<br>**C:** Excellent Next.js DX, expensive seat/bandwidth scaling and lock-in. | **Recommend: Cloudflare Edge (WAF/CDN/Rules) + Containerised TypeScript Services (UK/EU Region)** *(or `OpenNext` on Cloudflare if purely serverless preferred)*.<br>*Why:* Maximum portability, UK/EU data residency control, true `HTTP 410` Edge routing, and predictable scaling cost. |

---

## 5. Essential Operational & Security Requirements

Before any production Stage 2 launch, the platform architecture MUST enforce all `13` operational controls:
1. **Isolated Environments:** Strict `Development` (local/ephemeral), `Staging` (mirrors prod WAF/DB migrations, gated behind Basic Auth/`noindex`), and `Production` environments with separate API keys, databases, and email sandboxes.
2. **Automated Backups & Tested Restoration:** Daily automated encrypted PostgreSQL snapshots (`WAL PITR`) + R2 cross-region versioned object mirror + encrypted config backups (`/TASK_1_6_ARCHITECTURE_AND_READINESS_REVIEW.md` Section 3), with quarterly DR drills and **proposed initial targets awaiting owner approval** (`Core DB: RPO <= 15m / RTO <= 2h`; `Media: RPO <= 1h / RTO <= 1h`; `BI/MCP: RPO <= 1h / RTO <= 4h`).
3. **Database Migration & Rollback Strategy:** Forward/backward versioned SQL migrations (`Drizzle Kit`) reviewed in PRs, executed automatically in CI before traffic cut-over, with pre-migration snapshot hooks and documented rollback runbooks.
4. **API Versioning:** All Admin, CRM, Analytics, and external endpoints namespace cleanly under `/api/v1/*` with deprecation headers and schema compatibility checks.
5. **Rate Limiting & Abuse Protection:** Cloudflare WAF + per-IP/per-token rate limiting on `/api/v1/contact` (paired with Turnstile + non-KV atomic idempotency), `/admin` auth endpoints (brute-force lockout), and `/mcp` endpoints.
6. **Secure Authentication & Session Management:** `HTTP-only`, `Secure`, `SameSite=Lax/Strict` encrypted sessions, Argon2id password hashing, mandatory **MFA (TOTP)** for `Admin` roles, idle/absolute timeouts, and immediate session revocation.
7. **Role-Based Permissions (`RBAC`):** Server-side enforcement on every route & MCP tool (`Super Admin`, `Agency Manager`, `Content Editor`, `Analyst / Read-Only`, plus future `Client Portal` tenant-scoped role) — UI hiding alone is never treated as security.
8. **Immutable Audit Logs:** Append-only log (`Module #22`) recording logins, failed auth, role changes, content publishes, legal/privacy gate toggles, redirect edits, MCP tool calls, and HITL approvals.
9. **Error & Uptime Monitoring:** Real-time error tracking (redacted PII), synthetic uptime probes on `/`, `/contact`, `/api/v1/health`, and email-delivery webhook failure alerts.
10. **Dependency & Vulnerability Management:** Automated `npm audit` / lockfile scanning (`Dependabot`/`Renovate`), removal of unused dependencies (e.g. legacy `@google/genai`), and regular security patching before release promotion.
11. **Automated Testing (`12`-Layer QA Framework):** Unit, Integration, Playwright E2E, OWASP API Security, Auth/RBAC, `WCAG 2.2 AA` Accessibility, Cross-Browser, Mobile, Core Web Vitals/Load, SEO & Migration (`301`/`410`/`404`), Backup Restoration, and MCP Permission/Security testing (`/TASK_1_6_ARCHITECTURE_AND_READINESS_REVIEW.md` Section 5).
12. **Deployment Approval & Rollback:** Protected `main` branch (`VER-18`), mandatory Staging verification + explicit owner/admin sign-off before Production deploy, with instant previous-container/Worker rollback capability.
13. **Data Export & Portability (`9` Asset Classes):** Full open-format export (`JSON`/`Markdown`/`CSV`/`SQL`/S3 API) across Website, Blog, Portfolio, Media, CRM/Business, Analytics, Knowledge Base, Automation Configs, and AI Agent Permission logs (`/TASK_1_6_ARCHITECTURE_AND_READINESS_REVIEW.md` Section 6).

---

## 6. SEO & Website Migration Quality Gates (Mandatory Before Launch)

**Hard Rule:** Do **NOT** execute redirects or remove legacy URLs before the migration matrix is explicitly approved by the owner. Every gate below must pass in **Staging** prior to Stage 3 production cut-over:
1. **Approved URL Migration Matrix:** Signed-off row-by-row disposition (`200`, single-hop `301`, `410 Gone`, `404`) covering `305` `Indexed Pages`, `766` Wayback paths, `56`-row reconstructed dataset (`VER-15` revisited only if materially necessary), `/wordpress-seo-speed-optimization/` -> `/wordpress-speed-optimisation/` (`Decision #40`), and `/services/generative-engine-optimisation` (`Decision #34`).
2. **Indexed URL Preservation Review:** Verify all high-value historical pages (`/`, `/wordpress-maintenance-support`, `/wordpress-security-emergency-support`, `/wordpress-design-development`, recovered `/blog/*`) remain preserved with clean `HTTP 200`.
3. **`301` Redirect Validation:** Automated test confirming **single-hop** (`1` redirect max, zero chains/loops) across `http -> https`, `www -> apex`, trailing-slash policy, and legacy core/speed redirects.
4. **`404` & `410` Validation:** Automated Playwright/HTTP check verifying **true `HTTP 410 Gone`** for confirmed casino spam (including the `9` root-level spam slugs in `305` Indexed) and true `HTTP 404` for unknown routes — eliminating the legacy `wrangler.jsonc` `HTTP 200` SPA soft-404 bug.
5. **Canonical URL Checks:** Every indexable `200` route emits an exact self-referencing `<link rel="canonical">`, matching `<html lang="en-GB">` and `hreflang`.
6. **XML Sitemap Validation:** Dynamically generated `/sitemap.xml` includes **only** `Published`, `HTTP 200`, indexable canonicals (zero unpublished Legal pages, zero unrecovered Portfolio URLs, zero `/admin`, zero `301`/`410` URLs).
7. **`robots.txt` Review:** Confirms `/admin` and `/api/` are disallowed, live routes are crawlable, and `Sitemap:` points cleanly to canonical `https://wpcarepoint.co.uk/sitemap.xml`.
8. **Schema Validation:** Rich Results / Schema validator passes on `@graph`, `Organization`/`ProfessionalService`, `Service`, `BreadcrumbList`, and `1:1` visible-parity `FAQPage` (zero fabricated `foundingDate`, `aggregateRating`, phone, or unapproved price nodes).
9. **Internal Link Checks:** Automated broken-link crawler reports `0` broken `404`/`5xx` internal links and `0` redirects in navigation/footer/body links.
10. **Metadata & Heading Checks:** Every public page has a unique `<title>`, meta description, single `<h1>`, logical `h2`/`h3` hierarchy, and British English (`en-GB`) spelling.
11. **Mobile Responsiveness:** Verified at `375px`, `768px`, `1280px`, `1440px` viewports with zero horizontal overflow or unreadable overlays.
12. **Core Web Vitals Testing:** Lighthouse / Web Vitals checks pass target thresholds (`LCP <= 2.5s`, `INP <= 200ms`, `CLS <= 0.1`) with responsive `WebP`/`AVIF` imagery.
13. **Google Search Console Verification:** Property ownership verified, post-launch sitemap submitted, and targeted `URL Inspection` run on key service pages (`/`, `/wordpress-maintenance-support`, `/wordpress-security-emergency-support`, `/wordpress-speed-optimisation/`, `/services/ai-search-optimisation/`).
14. **Analytics Validation (Post-Privacy Approval Only):** Verify consent banner blocks scripts by default and only fires deduped GA4/PostHog events after valid consent (`Module #24`).

---

## 7. Development Governance & Acceptance Criteria

### Strict Lifecycle Separation Rule
Every feature and module MUST track five independent states that are **never** conflated:
> **`Planned` ≠ `Designed` ≠ `Implemented` ≠ `Tested` ≠ `Production-Enabled`**  
> A feature MUST NEVER be reported as completed merely because it is documented or visually designed.

### Mandatory Task Record Schema (Stage 2 Backlog Standard)
Every future Stage 2–3 development ticket MUST contain these `10` fields before work begins:
1. **`Task ID`** (e.g., `WPC-P0-001`, `WPC-R1-014`)
2. **`Priority`** (`P0`–`P7`)
3. **`Scope & Requirements`** (exact functional + non-functional spec & module `#`)
4. **`Dependencies`** (upstream tasks & `VER-*` owner gates)
5. **`Planned Status`** (`Proposed` / `Owner-Approved` / `Deferred`)
6. **`Implementation Status`** (`Not Started` / `In Progress` / `Code Complete in Staging`)
7. **`Testing Status`** (`Not Tested` / `Unit+Integration Passed` / `E2E+QA Passed`)
8. **`Production Status`** (`Disabled` / `Feature-Flagged OFF` / `Production-Enabled`)
9. **`Acceptance Criteria`** (measurable, testable pass/fail checklist)
10. **`Owner Approval`** (`Required / Verified By / Date`)

---

## 8. Future Technology & Scalability Strategy

To prevent costly rewrites as WPCarePoint grows across Releases 1–4 and beyond:
1. **Model- & Agent-Agnostic AI Layer:** Expose business data via standard **MCP (`@modelcontextprotocol/sdk`)** + internal **LLM Provider Adapter Interface** (`Anthropic` / `OpenAI` / `Google` / local models) so neither Claude, ChatGPT, nor any single LLM vendor locks in WPCarePoint's Knowledge Base or BI Assistant.
2. **Provider-Agnostic Analytics Adapter:** Wrap GA4, GSC, and PostHog behind normalised TypeScript interfaces so privacy-first analytics (e.g., `Plausible`, `Umami`, or self-hosted `PostHog`/`ClickHouse`) can be swapped in without rebuilding Admin UI charts.
3. **Standard Open Infrastructure Primitives:** Build strictly on standard **PostgreSQL** (`SQL`), **S3-compatible Object Storage** (`R2`), **OpenAPI REST**, and **Docker containers** so infrastructure can migrate between cloud providers without codebase rewrites.
4. **Multi-Agent Permission Isolation:** Design `Module #23` around fine-grained **Capability Scopes** (`analytics:read`, `kb:read`, `content:draft`, `crm:propose`) rather than coarse admin keys, enabling future specialised logical agents (`12` logical capabilities in `/TASK_1_6_FUTURE_AI_AGENCY_PLATFORM_STRATEGY.md`) with strict least-privilege walls and `5`-tier Human Approval (`Decision #50`).
5. **Multi-Service, Multi-Region & Dual-SaaS Extensibility:** Keep URL routing, taxonomy, and service-category schemas data-driven (`Category -> Service -> Capabilities`) and `i18n`-capable — keeping **UK (`en-GB`)** cleanly enforced today while preparing **strict multi-tenant isolation** (`Decision #49` — keeping `Customer-Facing SaaS` strictly separated from Initial Website MVP `Release 1` and planning robotics/physical-device integrations solely as non-MVP `2026–2030` R&D readiness).

---

## 9. Alignment with `WPCP-P1.6-V05` (`#49–#51`) & `Decision #52` (No-CMS Initial Launch)

- **No-CMS Lean Initial MVP (`Decision #52` — `/TASK_1_6_NO_CMS_INITIAL_MVP_ARCHITECTURE.md`):** Initial website MVP (`Release 1`) launches strictly with **Next.js + React + TypeScript + Tailwind CSS + reusable UI components + MDX blog + structured portfolio/pages + Next.js Metadata API + GitHub + Cloudflare CDN/security** (`No CMS`, `No Custom Admin Dashboard`, `No PostgreSQL`, `No AI Execution`, `No SaaS`, `No MCP`).
- **Clean Future Platform Separation (`Decisions #49–#51` + `26`-Module Baseline Intact):** The `26`-module Custom Admin Dashboard (`#1–#26`), CRM/Ops (`#9–#13`), Analytics/BI (`#16–#21`), Remote MCP (`#23`), Knowledge Base (`#25`), Workflow Studio (`#26`), `12` Logical AI Agents, Human Approval Tiers `1–5` + `9`-item checklist (`#50`), Regular AI-Assisted Blog Intelligence inside `#3`+`#6` (`#51`), and Customer-Facing SaaS (`#49`) remain **100% preserved** for modular **Future Platform Releases**, without adding unnecessary infrastructure into the initial website launch.
