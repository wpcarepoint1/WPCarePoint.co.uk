# Task 1.6 — Future AI-Powered Digital Agency Platform, Dual Business Model, Human Approval Governance & Regular Blog Publishing Strategy (`WPCP-P1.6-V05`)

**Prompt ID:** `WPCP-P1.6-V05` (`V05`)  
**Last Updated:** 2026-11-23  
**Project:** `WPCarePoint.co.uk` Rebuild & Reopening  
**Stage & Task:** Stage 1: Discovery & Planning — Task 1.6: Website Architecture & SEO Foundation (`IN PROGRESS`)  
**Execution Mode:** `Planning & Documentation Only`  
**Stage 2 & Stage 3 Status:** **`NOT STARTED — BLOCKED`** *(All new AI platform, SaaS, blog automation, analytics, MCP, and workflow capabilities remain **`PLANNED ONLY`** — zero implementation authorised.)*

---

## 1. Governance Classification Legend (Mandatory Separation)

To prevent accidental confusion between owner-confirmed direction and unapproved proposals:

| Classification Label | Meaning in This Document |
|---|---|
| **`OWNER-CONFIRMED DECISION`** | Explicitly confirmed by owner in Decisions `#1–#51` (strategic direction or binding policy). Does NOT authorise Stage 2 implementation unless stated. |
| **`EXISTING APPROVED DECISION`** | Prior Decisions `#1–#48` preserved untouched (`22`-page Option B, `VER-20`, `RH1 4HW` on `/contact`, Email-only, `26`-module Admin plan, `/PROMPT_REGISTER.md`, etc.). |
| **`PROPOSED ARCHITECTURE`** | Technical designs (`Next.js`, `Payload CMS v3`, `PostgreSQL/Drizzle`, `Hono/Fastify`, `Cloudflare Edge/R2`, `RPO`/`RTO`, Multi-Region Federation, Tenant Isolation) **awaiting explicit owner approval**. |
| **`AI RECOMMENDATION`** | Advisory technical or workflow suggestions (e.g. SSRF proxy design, content cadence, agent grouping). |
| **`DEFERRED BY OWNER`** | Legal & Retention (`VER-04`–`VER-06`, `#24`), Email (`VER-17`), URL Migration Matrix lock, Original GSC `Pages.csv` (`VER-15`). |
| **`OUTSTANDING DEPENDENCY`** | `VER-18` (GitHub/Cloudflare/Registrar), `VER-13`/`VER-16` (Portfolio & `86` Pre-Hack Blog Recovery), `VER-07`–`VER-12`/`VER-14`, `Not Indexed = SKIPPED`, `Links = No Data`. |
| **`FUTURE CAPABILITY`** | Capabilities belonging strictly to `Release 2–4`, `Future SaaS`, or `2026–2030 R&D` (explicitly excluded from Initial Website MVP). |

---

## 2. Owner-Confirmed Business Model (`Decision #49` — `OWNER-CONFIRMED`)

### Dual Business Model: Internal Agency Platform + Customer-Facing SaaS
WPCarePoint will architect a **shared modular AI-powered digital agency platform** serving two distinct commercial applications without assuming the SaaS product launches with the initial website MVP:

1. **Application A — Internal Agency Platform (`Stage 2 Releases 1–4`):**
   - Used internally by WPCarePoint's team to manage website audits, SEO/GEO/AIO, blog & portfolio content, web development/rebuilds, maintenance/security, marketing, CRM, projects, support tickets, and client workflows.
2. **Application B — Customer-Facing SaaS (`Future Commercial SaaS Releases` — Post-MVP):**
   - Commercial multi-tenant product allowing external customers to access selected AI-powered website intelligence, SEO/visibility audits, digital growth insights, and controlled website management capabilities.

### Strict Multi-Tenant Isolation Requirements (`PROPOSED ARCHITECTURE` — Awaiting Approval)
Even when sharing core UI/engine modules (`packages/*`), customer SaaS workloads MUST maintain **strict tenant isolation** across every layer:
- **Customer Data & Credentials:** Per-tenant encrypted credential vaults (KMS/envelope encryption); zero shared website tokens; OAuth scopes isolated per site/organisation.
- **Files & Reports:** Tenant-prefixed/isolated object storage policies (`R2`/S3 IAM boundaries) with signed short-lived access URLs; never expose public bucket listings.
- **AI Conversations, Memory & Knowledge Bases:** Strict `tenant_id` partitioning across conversation history, vector indices/RAG filters, and Knowledge Base namespaces so Customer A's audit context or business facts can **never** leak into Customer B's or WPCarePoint's internal prompts.
- **Analytics, Billing, Permissions & Audit Records:** Row-level tenant access enforcement (`RBAC` + tenant ownership checks), segregated billing/subscription records, and per-tenant immutable audit logs.
- **MVP Boundary Rule:** **Customer-facing SaaS is explicitly EXCLUDED from the Initial Website MVP (`Release 1`)** so `wpcarepoint.co.uk` can rebuild, recover SEO, and launch reliably first.

---

## 3. Owner-Confirmed Website Modification Policy (`Decision #50` — `OWNER-CONFIRMED`)

### Human Approval Before Important Changes
Specialised AI agents may **independently** perform non-destructive analytical and preparatory work:
- Audit websites (public checks & authorised read-only diagnostics)
- Analyse technical, performance, accessibility, and SEO/GEO/AIO issues
- Research opportunities and generate evidence-based recommendations
- Draft website content, prepare design concepts, and prepare code patches/PRs for review
- Create analytical reports and marketing plans

However, **important website or platform changes MUST NEVER occur automatically solely because an AI agent recommends them.** Production publishing, code merges/deployments, redirects, deletions, database schema/data mutations, migrations, and security/DNS/auth changes require **explicit human approval**.

### Mandatory `5`-Tier Website Permission Workflow
Every internal or customer-connected site operation MUST enforce these five progressive trust tiers:

| Tier | Mode | Permitted Actions | Prohibited Actions | Required Verification |
|---:|---|---|---|---|
| **1** | **Public Website Audit** | Passive HTTP/HTML/header/CWV/meta/public-sitemap inspection of submitted URL (rate-limited & SSRF-hardened). | No auth, no admin probing, no crawling disallowed private paths, no site modification. | URL syntax + public IP/SSRF allowlist check. |
| **2** | **Verified Website Audit** | Expanded non-destructive audit across verified customer sitemaps/GSC/GA4 exports once domain ownership is proven. | Still **zero write actions** or live file/DB changes on target site. | DNS `TXT` record, `.well-known` file token, or verified OAuth ownership proof. |
| **3** | **Read-Only Connected Website** | Authenticated read-only API/MCP inspection (CMS drafts/structure, plugins/dependencies, server config headers, analytics). | Zero writes, zero live edits, zero plugin toggles, zero deletions. | Explicit customer authorisation + scoped read-only OAuth/API credentials. |
| **4** | **Authorised Staging Modifications** | AI/team prepares drafted content, design/code diffs, or proposed migrations strictly in an isolated **Staging / Sandbox** environment. | Zero direct production execution; cannot auto-promote Staging -> Production. | Explicit Staging authorisation + isolated staging credentials/backups. |
| **5** | **Human-Approved Production Changes** | Controlled execution of approved production publish, code deploy, `301`/`410` rule, DB migration, or security patch. | Autonomous AI execution without signed human approval record. | Mandatory **9-Item Pre-Production Approval Package** signed by named human approver. |

### Mandatory `9`-Item Pre-Production Change Approval Package
Before any important production change moves from Tier `4` -> Tier `5`, the platform MUST present:
1. **Proposed change summary** (exact scope & rationale)
2. **Supporting evidence** (audit findings, GSC/analytics data, test metrics)
3. **Affected pages, files, or database records** (exact URL/file/table diff list)
4. **Preview or side-by-side comparison** (visual diff / code diff / content diff where applicable)
5. **Risk assessment** (SEO, uptime, security, privacy, and customer impact)
6. **Backup status** (verified fresh pre-change snapshot ID/timestamp)
7. **Automated & manual test results** (QA, SEO gates, CWV, negative RBAC checks)
8. **Rollback plan** (verified single-step revert procedure)
9. **Named approval and execution history** (immutable record of who requested, reviewed, approved, and executed with timestamps)

---

## 4. `WPCarePoint AI-Powered Digital Agency Platform` (`Decision #51` Part A)

### A. `12` Logical AI Agent Capabilities (`AI Orchestration Design` — Not `12` Separate Infrastructures)
The `12` specialised agent roles below are designed as **logical capabilities, scoped prompt/tool profiles, and permission boundaries** orchestrated cleanly over the shared platform (`#20`, `#23`, `#25`, `#26`) rather than bloated into 12 independent servers:

| # | Logical Agent Capability | Core Responsibilities & Tool Scope | Target Platform Stage |
|---:|---|---|---|
| 1 | **Website Audit Agent** | Crawls public URLs (SSRF-safe), checks CWV, HTTP status (`200`/`301`/`404`/`410`), headings, security headers, broken links. | `Internal (R2–R3)` -> `SaaS` |
| 2 | **SEO, GEO & AIO Agent** | Analyses GSC queries, technical SEO, canonicals, `FAQPage`/Entity Schema, `/llms.txt`, AI Overviews & LLM search visibility. | `Internal (R2–R3)` -> `SaaS` |
| 3 | **Website Design & Rebuild Agent** | Evaluates UX friction, mobile breakpoints, accessibility (`WCAG 2.2 AA`), and drafts layout/component concepts for human review. | `Internal (R3–R4)` -> `SaaS` |
| 4 | **Digital Marketing Agent** | Analyses acquisition channels, UTM attribution, landing conversion gaps, and drafts social/newsletter campaign ideas (for review). | `Internal (R3)` -> `SaaS` |
| 5 | **Content Intelligence Agent** | Powers editorial calendars, topic clusters, content gaps, AI-assisted blog drafting (`#3` + `#6`), and content refresh/repurposing recommendations. | `Internal (R2–R3)` -> `SaaS` |
| 6 | **Development & Bug Fix Agent** | Diagnoses repo/CMS/plugin errors, prepares staging PR patches and regression test suites (never auto-deploys to prod). | `Internal (R3–R4)` |
| 7 | **Business Growth Agent** | Synthesises service demand, country growth, CTA/funnel CRO opportunities (`#20` BI), and commercial growth briefs. | `Internal (R3)` -> `SaaS` |
| 8 | **Customer Support Agent** | Grounds draft support replies and Care Plan triage strictly in approved Knowledge Base (`#25`) + Ticket history (`#12`) for human sign-off. | `Internal (R3–R4)` -> `SaaS` |
| 9 | **Automation Agent** | Configures and monitors idempotent rule workflows inside `Workflow Automation Studio (#26)` with HITL approval gates. | `Internal (R4)` |
| 10 | **AI Orchestrator** | Routes multi-step tasks across specialist agent profiles, enforces tenant boundaries, tool allowlists (`#23`), token budgets, and KB grounding (`#25`). | `Internal (R3)` -> `SaaS` |
| 11 | **Security Review Agent** | Audits headers, CSP, dependency CVEs, RBAC policies, exposed secrets, and SSRF/auth anomalies before release approvals. | `Internal (R3–R4)` |
| 12 | **Quality Assurance Agent** | Evaluates Playwright/Vitest test outputs, `14` SEO migration gates, Schema parity, and staging pre-flight readiness reports. | `Internal (R3–R4)` |

### B. Secure Website URL Submission Workflow (`10`-Step Customer Journey)
1. **Customer submits a website URL** (via controlled intake / future SaaS portal).
2. **Platform executes a safe public-facing audit** (`Tier 1` — zero assumptions of write permission).
3. **AI generates an evidence-based audit report** (citing observed HTML/HTTP/CWV facts vs advisory recommendations).
4. **Customer receives actionable recommendations & growth opportunities**.
5. **Website ownership verification** (`Tier 2` — DNS `TXT` / `.well-known` token / verified OAuth property) MUST pass before any authenticated check.
6. **Customer explicitly authorises a read-only connection** (`Tier 3` — scoped, revocable read-only tokens).
7. **Staging preparation** (`Tier 4` — changes drafted/tested in isolated staging only when separately authorised).
8. **9-Item Pre-Production Review presented** (preview, test results, verified backup status, rollback plan).
9. **Explicit human approval recorded** (`Tier 5` — named approver & audit log).
10. **Approved changes executed & logged** (immutable audit history).

**Mandatory URL Audit Security Hardening (`SSRF` & Untrusted Content Controls):**
- Strict scheme allowlist (`https://` and `http://` only; block `file://`, `ftp://`, `gopher://`, `data://`).
- **DNS Rebinding & Private-Network Defence:** Resolve DNS at an isolated egress audit proxy, resolve to final IP **before** socket connect, re-validate at socket dial time, and block all RFC1918 (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`), loopback (`127.0.0.0/8`, `::1`), link-local/cloud metadata (`169.254.0.0/16`, `fe80::/10`), and multicast/reserved ranges.
- **Redirect & Download Guards:** Cap redirect hops (max `3–5`), re-run SSRF/IP validation on every `30x` `Location` target, enforce strict response size (`max MB`) & timeout caps, validate `Content-Type` (`text/html`/`application/xml`/`text/plain` only — reject binary payloads).
- **Credential & Prompt-Injection Hygiene:** Execute outbound crawls from an isolated zero-credential egress worker (no DB/API secrets in memory); treat all fetched HTML/meta/text as **untrusted data** sanitised against indirect prompt injection before entering LLM context.

---

## 5. Regular Blog Publishing & Content Growth Strategy (`Decision #51` Part B)

**Architectural Placement Instruction Followed:** All capabilities `A–H` below integrate cleanly into existing **`Module #3 (Blog & Article Management)`**, **`Module #6 (SEO Metadata & Canonical Management)`**, and the **`Content Intelligence Agent`**. **No 27th Admin Dashboard module is added**, preserving the approved `26`-module structure.

### Full `A–H` Content Publishing & Intelligence Workflow
- **A. Content Planning (`Module #3` Editorial Calendar Tab):** Weekly/monthly editorial calendars, recurring publishing cadences (quality-driven, never quota-forced), pillar & topic-cluster mapping across WPCarePoint's `5` Service Categories, content gap analysis (`86` pre-hack recovered posts + new opportunities), seasonal UK business themes, and real customer enquiry/search-intent questions.
- **B. Research & Optimisation (`Module #6` + `Content Intelligence Agent`):** Keyword & search-intent mapping (`en-GB`), competitor content gap review, GSC query impression/CTR opportunity analysis *(respecting `VER-15` deferred status until Stage 2 live GSC flows)*, GEO/AIO answer-readiness checks, verified external source citation tracking, and internal hub-and-spoke link suggestions (linking posts to `/wordpress-design-development`, `/woocommerce-development`, `/wordpress-speed-optimisation/`, `/services/ai-search-optimisation/`, etc.).
- **C. AI-Assisted Blog Creation (`8` Core Topic Pillars):** Draft assistance focused strictly on originality, practical UK engineering depth, accuracy, and genuine search intent across:
  1. WordPress development
  2. WooCommerce and eCommerce
  3. Website design and redesign
  4. Website speed and performance
  5. WordPress maintenance and security
  6. AI solutions and business automation
  7. SEO, GEO and AIO
  8. Digital business growth
- **D. On-Page SEO & AI Search Readiness (`Module #6` Inline Metabox):** Recommends natural SEO `<title>` & `<meta description>`, clean `H1`–`H3` hierarchy, semantic keyword usage, intent match, verified FAQs (`1:1` `FAQPage` Schema parity), `Article`/`BlogPosting` + `BreadcrumbList` Schema, contextual internal links, real author & `published`/`updated` timestamps, WebP/AVIF image optimisation + descriptive `alt` text, and verifiable source references.
- **E. Mandatory `7`-Stage Editorial Workflow (`Module #3` State Machine):**
  > **`Draft` → `AI Review` → `Editorial Review` → `Owner Approval` → `Scheduled` → `Published` → `Performance Review`**
  - *Hard Gate:* AI may research, draft, review, and suggest publish slots, **but NO blog post may move to `Scheduled` or `Published` without explicit human (`Editorial Review` + `Owner Approval`) sign-off.**
- **F. Scheduled Publishing:** Timezone-aware (`Europe/London`) job scheduler inside `Module #3` / `#26` triggering automatic `sitemap.xml` update — strictly locked so unapproved `Draft`/`AI Review` posts **cannot** be queued or published.
- **G. Content Performance (`Module #16`, `#18`, `#19` — Verified vs Estimate Rule):** Tracks GSC impressions, organic clicks, CTR, average position, organic landing traffic, engagement time, enquiry conversions *(only once `#24` privacy/consent & `VER-17` clear)*, and MoM trends — visually separating **verified analytics** from **AI forecasts/recommendations**.
- **H. Content Refresh & Repurposing:** Quarterly stale-article & CTR-decay audit flagging articles for update, consolidation, or `301`/canonical tidy-up; repurposing engine generating review-required drafts for **LinkedIn**, **Facebook**, **social snippets**, **newsletters**, and **educational guides** *(never auto-posted externally without human approval)*.

### Blog Publishing Governance Rules
1. Zero autonomous publishing without human approval.
2. Zero thin/repetitive quota-padding AI posts (`quality > frequency`).
3. Zero fabricated research, client results, statistics, or author credentials (`Decision #6` / `VER-14` enforced).
4. Complete revision history & editorial approval audit trail (`Module #3` + `#22`).
5. Copyright & external source attribution checks.
6. Integrates alongside `VER-16` (`86` pre-hack Wayback post recovery) so recovered posts follow the same editorial audit before republishing.

---

## 6. Architecture & Roadmap Impact Assessment (`13` Platform Areas + Placement Matrix)

### A. Impact Across All `13` Platform Areas
1. **`26`-Module Admin Dashboard:** Retains exact **`26`-module** count (`#1–#26`). Regular blog workflows live in `#3` & `#6`; `12` agents execute through `#20`, `#23`, `#25`, `#26`. *(SaaS tenant billing/admin sits cleanly in a future SaaS control plane, not bloating Release 1–2.)*
2. **CMS & Blog Management (`#3`):** Gains editorial calendar, `7`-stage state machine, approval-locked scheduler, and repurposing drawer (while MVP Release 1 stays lean on core CRUD + `VER-16` recovery).
3. **SEO, GEO & AIO (`#6`):** Integrates pre-publish AIO/GEO entity & FAQ checks directly with `/services/ai-search-optimisation/` and blog clusters without altering the `22`-page Option B sitemap.
4. **AI Agent Architecture & Orchestration (`12` Logical Roles):** Requires structured Agent Profiles, Tool Registry, Context/Token Guardrails, and Audit Logging — orchestrated as **logical modules inside the backend**, avoiding microservices sprawl.
5. **Customer-Facing SaaS Architecture:** Introduces multi-tenant `org_id`/`workspace_id` isolation requirements across DB, object storage, RAG, billing, and MCP tokens in **Future SaaS Releases** — keeping Initial Website MVP single-tenant (`wpcarepoint.co.uk`).
6. **Tenant Isolation & Permissions:** Reinforces `PostgreSQL` row/tenant isolation + KMS-backed credential separation as a proposed architectural requirement when SaaS begins.
7. **Knowledge Base & RAG (`#25`):** Expands from internal agency facts into **strictly tenant-namespaced knowledge partitions** (`internal_wpcarepoint` vs isolated `saas_tenant_<id>`).
8. **Analytics & BI (`#16–#21`):** Adds Blog & Repurposed-Content funnel attribution with strict verified-vs-estimate tagging (all tracking gated `OFF` until `#24` & `VER-04`–`VER-06` clear).
9. **MCP & External AI (`#23`):** Distinguishes WPCarePoint internal admin MCP tools (`R2`) from future customer-scoped read-only audit/SaaS MCP connections (`Tier 3`).
10. **Workflow Automation Studio (`#26`):** Adds scheduled approved-blog publishing, content refresh reminders, and 5-tier human-approval triggers (`R3–R4`).
11. **Website Security & Approval Workflows:** Adds **SSRF / DNS-rebinding / untrusted-HTML isolation** for the URL submission audit worker + **9-item pre-prod human-approval gate**.
12. **Hosting, Database & Infrastructure:** Validates the proposed vendor-neutral stack (`PostgreSQL`, `S3/R2`, isolated `TypeScript` worker/MCP tier) as able to scale cleanly from internal agency -> multi-tenant SaaS, **while keeping final stack selection unapproved until owner sign-off**.
13. **Future `2026–2030` Platform Readiness (incl. Robotics / Physical-Device Note):** Keeping APIs OpenAPI/MCP-standard and event-driven allows future multimodal/device/robotics webhook or hardware-telemetry integrations in long-term R&D **only**, with zero MVP impact.

### B. Capability Placement Matrix (`Initial No-CMS MVP` vs `Future Internal Agency Platform` vs `Future SaaS` vs `2026–2030 R&D`)
| Lifecycle Bucket | Scope & Included Capabilities | Approval / Stage Lock |
|---|---|---|
| **1. Initial Website MVP (`Release 1` — `Decision #52`)** | **No-CMS `Next.js + React + TypeScript + Tailwind CSS + MDX + Structured Pages/Portfolio + Metadata API + GitHub + Cloudflare`**: `22`-page `en-GB` Option B site (`18` live while Legal/Portfolio hold `noindex`), GitHub PR regular MDX blog publishing (`12` fields + `VER-16` recovery), structured Portfolio (`VER-13` gated), Edge `/api/contact` Worker *(disabled until `VER-17`/Legal clear)*, and privacy-gated analytics placeholder (`OFF`). **Excludes CMS, Admin Dashboard, PostgreSQL, SaaS, URL audit portal, AI agents & MCP.** | **NOT STARTED (`Stage 2 BLOCKED`)** — lightweight public launch only (`Decision #52`). |
| **2. Future Internal Agency Platform (`Releases 2–4`)** | **`26`-Module Custom Admin Dashboard (`#1–#26`)** + PostgreSQL backend; CRM/Proposals/Projects/Tickets/Invoices (`#9–#13`); PostHog funnels; Remote MCP (`15` read tools, `#23`); Knowledge Base (`#25`); AI BI (`#20`); `7`-stage Regular Blog Publishing + Content Intelligence Agent + `Draft/Review/Schedule/Repurpose` (`#3`+`#6`); Internal `12` Logical Agents (Tier `1–5` approval workflow); Workflow Studio (`#26`) + HITL write approvals. | **`PLANNED ONLY`** — future internal platform releases after MVP launch. |
| **3. Future Customer-Facing SaaS Releases (`Post-MVP`)** | External customer onboarding; `10`-step SSRF-hardened URL Submission & Public Audit flow; `Tier 2` ownership verification; `Tier 3` customer read-only site connections; isolated tenant DB/KB/RAG/Analytics/Billing/Audit workspace; customer-facing SaaS portal & SaaS MCP connectors. | **`FUTURE CAPABILITY`** — separate commercial phase after internal platform proven. |
| **4. Long-Term R&D (`2026–2030`)** | Multi-region `.com`/`.us`/`.eu` SaaS federation; multi-agent autonomous staging QA loops (still human-approved for prod); predictive revenue intelligence; exploratory physical-device / robotics telemetry adapters. | **`LONG-TERM R&D ONLY`** — zero MVP impact. |

---

## 7. Conflict Check & Preserved Governance Baselines

1. **No Conflicts Overwritten Silently:**
   - **Directus (`BSL 1.1`) vs Dual SaaS (`Decision #49`):** Earlier (`WPCP-P1.6-V03`), we noted Directus carries `BSL 1.1` commercial multi-tenant licensing risk. `Decision #49` (Customer-Facing SaaS) **reinforces** why a `BSL 1.1` core CMS should be avoided if commercial SaaS is planned — strengthening the `Payload CMS v3 (MIT)` + `PostgreSQL` proposal *(still awaiting owner approval)*.
   - **Blog Scope Expansion (`VER-16` vs `Decision #51`):** `Decision #25`/`#38` focused on recovering `86` pre-hack posts; `Decision #51` adds ongoing editorial publishing (`Module #3 + #6`) **without** removing `VER-16` recovery audits or anti-fabrication rules.
   - **Booking/Marketing Automation vs `Decision #15` & `#18`:** Any social/newsletter repurposing (`#51-H`) or future booking (`P3`) still respects `Decision #18` (no mandatory marketing opt-in) and `Decision #15` (no unapproved Calendly on initial `/contact`).
2. **Explicitly Unapproved / Deferred Items Preserved Verbatim:**
   - Legal & Retention (`VER-04`–`VER-06`), Email Delivery (`VER-17`), URL Migration Matrix, and Original GSC `Pages.csv` (`VER-15`) remain **`DEFERRED BY OWNER`**.
   - `Not Indexed Pages = SKIPPED BY OWNER`; `Links = No Data`; `56`-row CSV, `305` `Indexed Pages`, `766` Wayback baseline untouched.
   - `VER-18` (GitHub/Cloudflare), `VER-13`/`VER-16` (Recovery files), and `VER-07`–`VER-12`/`VER-14` remain **`PENDING`**.
   - **Technology Stack NOT Pre-Approved:** Custom Next.js, Payload CMS v3, PostgreSQL, Drizzle, Hono/Fastify, Cloudflare infrastructure, `RPO`/`RTO` targets, Analytics activation, and MCP deployment all remain **`PROPOSED ARCHITECTURE — AWAITING OWNER APPROVAL`**.
