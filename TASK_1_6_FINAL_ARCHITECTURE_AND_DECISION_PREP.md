# Task 1.6 — Final Architecture Evaluation, MVP Scope Validation & Owner Decision Preparation (`WPCP-P1.6-V06`)

**Prompt ID:** `WPCP-P1.6-V06` (`Version: V06`)  
**Last Updated:** `2026-11-23`  
**Project:** `WPCarePoint.co.uk` Rebuild & Controlled Reopening  
**Stage & Task:** Stage 1: Discovery & Planning — Task 1.6: Website Architecture & SEO Foundation (`IN PROGRESS`)  
**Purpose:** Final Architecture Evaluation, MVP Scope Validation & Owner Decision Preparation  
**Execution Mode:** `Planning & Documentation Only`  
**Approval Status:** `Not Approved for Development` (`Stage 2 & Stage 3 = NOT STARTED — BLOCKED`)  
**Dependencies:** `/PROMPT_REGISTER.md`, `/PROJECT_STATUS.md`, `/OWNER_DECISION_PACK.md`, Decisions `#1–#51`, `/TASK_1_6_ARCHITECTURE_AND_READINESS_REVIEW.md`, `/TASK_1_6_DEVELOPMENT_ROADMAP_AND_ARCHITECTURE.md`, `/TASK_1_6_FUTURE_AI_AGENCY_PLATFORM_STRATEGY.md`, `VER-01`–`VER-20`

---

## Governance & Non-Modification Lock

- **Preserves Decisions `#1–#51` Verbatim & Aligns with Subsequent `Decision #52`:** Earlier `OD-01` (`Payload CMS v3 MIT`) and `OD-02` initial-launch CMS/PostgreSQL proposals in this document are **superseded for Initial Website Launch** by Owner-Confirmed **`Decision #52`** (`/TASK_1_6_NO_CMS_INITIAL_MVP_ARCHITECTURE.md`: **No-CMS Next.js + MDX** initial launch). Multi-Region, SaaS Tenant Isolation, Backup/DR, `26`-module Admin, and Future Platform evaluations below remain **preserved for Future Platform Releases (`Releases 2–4+`)**.
- **Zero Pre-Approval:** All architecture, technology stack, `RPO`/`RTO`, multi-region/tenant DB, and future platform proposals below remain **`PROPOSED — AWAITING EXPLICIT OWNER APPROVAL`**.
- **Preserved Deferrals & Baselines:** `VER-04`–`VER-06` & `#24` (Legal/GDPR/Consent), `VER-17` (Email/DNS), URL Migration Matrix Lock, and `VER-15` (Original GSC `Pages.csv`) remain **`DEFERRED BY OWNER`**; `Not Indexed Pages` remains **`SKIPPED BY OWNER`**; `Links` remains **`No Data`**; `/gsc_performance_pages_reconstructed_56.csv` (`56` rows), `305` `Indexed Pages`, and `766` Wayback baseline remain untouched.
- **Lifecycle Discipline:** **`Planned ≠ Designed ≠ Implemented ≠ Tested ≠ Production-Enabled`**. Zero code, DB, tracking, MCP, DNS, or live website changes have occurred.

---

## 1. CMS ও Technology Stack তুলনামূলক মূল্যায়ন (CMS & Stack Evaluation)

**Core Engineering Rule:** *Custom-built CMS ≠ automatically more secure.* হাতে-কলমে authentication, session rotation, rich-text XSS sanitisation, upload validation, revision locking, এবং RBAC তৈরি করলে CVE ও রক্ষণাবেক্ষণের ঝুঁকি বাড়ে। অপরদিকে `Decision #49` (Future Customer-Facing SaaS) অনুমোদিত হওয়ায় license-cliff (`BSL 1.1`) এড়ানো এখন আরও গুরুত্বপূর্ণ।

### A. CMS Core Comparison (`3` Candidates)

| Evaluation Dimension | Option A: **Custom Next.js CMS** *(100% Bespoke)* | Option B: **Payload CMS `v3` (`MIT`)** *(Recommended Core + Custom Modules)* | Option C: **Directus** *(Node/Vue Data Platform)* |
|---|---|---|---|
| **License & SaaS Fit (`Decision #49`)** | `100%` WPCarePoint owned code; zero license limits. | **`MIT License`** — commercial multi-tenant SaaS বা internal agency উভয় ক্ষেত্রেই zero license fee / zero BSL risk. | **`BSL 1.1` Caution** — internal agency ব্যবহারে ফ্রি হলেও commercial SaaS / multi-tenant পণ্যে লাইসেন্সিং সীমাবদ্ধতা ও কমার্শিয়াল কনভার্সন ঝুঁকি রয়েছে। |
| **Security & Maintenance** | সর্বোচ্চ নিরাপত্তা দায়ভার (custom auth, upload, rich-text CVE সম্পূর্ণ নিজ দায়িত্বে)। | **সর্বোত্তম ভারসাম্য:** Battle-tested auth, Argon2/cookie sessions, CSRF, access control & upload guards; `#16–#26` custom modules নিজস্ব নিয়ন্ত্রণে। | শক্তিশালী upstream auth/RBAC, কিন্তু আলাদা Vue/Node runtime মেইনটেইন করতে হয়। |
| **WordPress-Like Editing & UX** | সম্পূর্ণ কাস্টম তৈরি করতে `2x–3x` সময় লাগবে। | **খুব শক্তিশালী:** Sidebar collections, Lexical blocks, live preview, slug lock, `Draft/Scheduled/Published`, revisions & autosave built-in। | টেবিল/Airtable-ধাঁচের ডেটা স্টুডিও; WordPress-সদৃশ editorial flow-তে কিছুটা কম নমনীয়। |
| **SEO, Media & Portability** | শূন্য থেকে বানাতে হবে। | Native `@payloadcms/plugin-seo`, `R2`/S3 upload adapters, focal point, responsive sizes, এবং standard **PostgreSQL + Drizzle** tables। | ভালো DAM/S3 support; Next.js frontend-এর সাথে HTTP hop ও Vue custom extension লাগে। |
| **API & Remote MCP (`#23`) Fit** | সম্পূর্ণ নমনীয়, তবে সব endpoint হাতে লিখতে হবে। | **Native TypeScript Local API** + REST/GraphQL — Next.js ও `Hono`/`Fastify` MCP server সরাসরি একই TypeScript/PostgreSQL ecosystem-এ কাজ করে। | REST/GraphQL আছে, তবে React/Next.js + Vue dual-stack complexity বাড়ে। |
| **Stage 2 Release 1 Cost & Speed** | **উচ্চ সময় ও খরচ** (CMS boilerplate-এ মাসখানেক ব্যয়)। | **সর্বনিম্ন MVP সময় ও ঝুঁকি** (৬০–৭০% boilerplate কমে, টিম `#1`–`#26` ব্যবসায়িক মূল্যে ফোকাস করতে পারে)। | দ্রুত CRUD, কিন্তু `#20/#23–#26` React Admin-এর সাথে UX একীভূত করা ব্যয়বহুল। |

### B. Full Recommended Technology Stack *(Proposed — Requires Owner Approval)*

| Architecture Layer | Recommended Technology (`PROPOSED`) | Why Chosen (Portability, Cost & Security) | Explicitly Rejected / Avoided Risk |
|---|---|---|---|
| **Frontend & CMS Core** | **Next.js (App Router, TypeScript, Tailwind CSS) + Payload CMS `v3` (`MIT`)** | `en-GB` SSR/ISR SEO, zero-soft-404 routing support, WordPress-like editorial CMS, এবং custom React Admin panels (`#16–#26`) এক কোডবেসে। | `Directus` (`BSL 1.1` SaaS conflict + Vue split); `100% bespoke CMS` (উচ্চ auth/CVE cost); SPA-only fallback (soft-404 ঝুঁকি)। |
| **Backend API & MCP Tier** | **Modular TypeScript (`Hono` / `Fastify` + Zod + OpenAPI `/api/v1/*`) + Isolated `@modelcontextprotocol/sdk` Server** | Public marketing traffic থেকে Admin/CRM/BI/MCP আলাদা করে, OAuth 2.1, rate-limiting ও SSRF audit worker-কে নিরাপদ সীমানায় রাখে। | `tRPC`-only coupling; embedded unisolated MCP routes inside public marketing server। |
| **Database & Vector Index** | **Managed PostgreSQL (`UK/EU` region) + `Drizzle ORM` + `pgvector`/`tsvector`** | Full ACID (CRM/Invoices), JSONB, audit logs, Row-Level Security (`RLS`) এবং Knowledge Base (`#25`) RAG—কোনো vendor lock-in ছাড়াই। | `Cloudflare D1` SQLite (write-locking ও analytics/SaaS scale সীমাবদ্ধতা); `NoSQL` (CRM/billing integrity দুর্বলতা)। |
| **Authentication & RBAC** | **Self-Hosted TypeScript Sessions + `Argon2id` + TOTP MFA + Server-Side RBAC** | শূন্য per-MAU SaaS fee (`Clerk`/`Auth0` বিল বিস্ফোরণ নেই), সম্পূর্ণ DB নিয়ন্ত্রণ ও OAuth 2.1 MCP token binding। | Managed per-MAU auth lock-in; client-only UI role hiding। |
| **Edge, Media & Compute** | **Cloudflare Edge (DNS, WAF, CDN, Edge Worker for single-hop `301`/`410`/`404`) + Cloudflare R2 (`S3` API) + Containerised Node (`Docker` / UK-EU PaaS or `OpenNext`)** | `wrangler.jsonc`-এর `"single-page-application"` soft-404 সম্পূর্ণ সমাধান করে true `HTTP 410 Gone` দেয়; zero R2 egress fee; যেকোনো cloud-এ portable। | Cloudflare `_redirects`-এর ওপর নির্ভরতা (`410` সাপোর্ট করে না); Vercel-proprietary lock-in। |

---

## 2. Multi-Region ও Tenant Isolation Architecture

`WPCarePoint`-কে দুটি ভিন্ন isolation মাত্রা একসাথে সমাধান করতে হবে যাতে আঞ্চলিক আইন (`UK/EU/US`) এবং ভবিষ্যৎ SaaS গ্রাহক ডেটা (`Decision #49`) কখনোই মিশে না যায়:

### Axis A — Multi-Region Geographic Federation (`.co.uk`, `.com`, `.us`, `.eu`)
- **Rejected — Single Shared Global DB:** UK/EU GDPR ও US প্রাইভেসি এক ডাটাবেসে রাখলে `WHERE region_id` ভুলের কারণে cross-border PII leak এবং একটি schema migration-এ সব ৪টি সাইট ডাউন হওয়ার ঝুঁকি থাকে।
- **Recommended — Phased Regional Federation:**
  - **Stage 2 Launch (`Release 1–4`):** শুধুমাত্র **`wpcarepoint.co.uk`** (`en-GB`, `GBP`, `UK/EU` PostgreSQL + R2) ডিপ্লয় হবে। কোনো অপ্রয়োজনীয় multi-region DB বিল এখন যুক্ত হবে না।
  - **Future `.com` / `.us` / `.eu` Launch:** একই Monorepo (`packages/ui`, `packages/seo`, `packages/cms-core`) ব্যবহার করে প্রতিটি অঞ্চলের জন্য **সম্পূর্ণ আলাদা encrypted PostgreSQL + R2 + Edge + GA4/GSC property** চালু হবে; HQ ড্যাশবোর্ডে শুধুমাত্র **non-PII aggregate metrics** যুক্ত হবে (Federated Read-Only BI Aggregator)।

### Axis B — Multi-Tenant SaaS Isolation (`Decision #49` — Post-MVP Only)
- **MVP Boundary:** Release 1 MVP **সম্পূর্ণ single-tenant** (`wpcarepoint.co.uk` only)। কোনো customer SaaS tenant টেবিল বা onboarding MVP-তে থাকবে না।
- **Future Customer-Facing SaaS (`Post-MVP`):**
  1. **Logical & Row-Level Separation:** Internal Agency Schema (`internal_wpcarepoint`) এবং SaaS Tenant Workspaces কঠোর `tenant_id` **PostgreSQL Row-Level Security (`RLS`)** দ্বারা পৃথক থাকবে (বড় এন্টারপ্রাইজ টেন্যান্টের জন্য schema/DB-per-tenant অপশনসহ)।
  2. **Per-Tenant Credential Vault:** প্রতি কাস্টমার ওয়েবসাইটের OAuth/API টোকেন **per-tenant KMS/envelope encryption** দিয়ে সংরক্ষিত থাকবে—কখনোই কোনো shared token বা cross-tenant read সম্ভব হবে না।
  3. **Storage, RAG & Knowledge Base Isolation (`#25`):** `R2` অবজেক্ট `tenants/<tenant_id>/...` prefix ও signed URL-এ সীমাবদ্ধ; AI conversation memory ও vector index-এ বাধ্যতামূলক `tenant_id` pre-filter থাকবে যাতে Customer A-এর তথ্য Customer B বা WPCarePoint internal prompt-এ কখনো লিক না হয়।
  4. **Zero-Credential SSRF Audit Proxy:** Customer-submitted URL অডিটের জন্য (`Decision #51`) আলাদা zero-credential egress worker থাকবে যা DNS rebinding ও RFC1918/Loopback (`127.0.0.0/8`, `169.254.0.0/16`) ব্লক করবে এবং fetched HTML-কে **untrusted data** হিসেবে স্যানিটাইজ করবে।

---

## 3. Backup ও Disaster Recovery মূল্যায়ন

*(সতর্কতা: নিচের `RPO`, `RTO` এবং retention সময়কাল **প্রস্তাবিত টেকনিক্যাল টার্গেট (`PROPOSED`)**—মালিকের অনুমোদন ও `VER-06` (GDPR) এবং `VER-09` (SLA) যাচাইয়ের আগে এগুলো কোনো live SLA প্রতিশ্রুতি নয়।)*

| Tier / Asset Class | Recommended Mechanism | Proposed Targets (`Awaiting Approval`) | GDPR / `VER-06` & Verification Guardrail |
|---|---|---|---|
| **Tier 1A: Core PostgreSQL (`WAL PITR`)** | Continuous WAL archiving + encrypted daily `pg_dump` cross-region copy (`UK <-> EU`) + AES-256 / TLS 1.3 + write-only isolated backup credentials। | **`RPO <= 15 minutes` \| `RTO <= 2 hours`** *(বিকল্প সাশ্রয়ী MVP অপশন: কেবল daily `pg_dump` -> `RPO <= 24h`, তবে `PITR` সুপারিশকৃত)* | Enquiry/CRM PII retention অবশ্যই `VER-06`-এর UK GDPR নীতি অনুযায়ী নির্ধারিত হবে; সাপ্তাহিক ephemeral restore + ত্রৈমাসিক human DR drill বাধ্যতামূলক। |
| **Tier 1B: Media (`Cloudflare R2`)** | R2 Object Versioning + daily encrypted incremental mirror (`rclone` / secondary S3 cold bucket) + `7–30d` immutable Object Lock। | **`RPO <= 1 hour` \| `RTO <= 1 hour`** *(Proposed `90d` deleted-object versions)* | সাপ্তাহিক manifest parity ও checksum verification। |
| **Tier 2: IaC, Edge Rules & Secrets** | Git-backed IaC + encrypted daily export of Cloudflare DNS/`301`/`410` JSON + non-secret CMS config + break-glass secrets vault। | **`RPO <= 1 hour` \| `RTO <= 1 hour`** *(BI/MCP Analytics Cache: `RPO <= 1h / RTO <= 4h` — public site-এর ওপর প্রভাবহীন)* | কোনো plaintext secret Git-এ থাকবে না; ত্রৈমাসিক Staging clean rebuild টেস্ট। |

---

## 4. MVP Release 1 Scope চূড়ান্ত করার প্রস্তাব (Validated Boundary)

`WPCP-P1.6-V05`-এর **Dual Business Model (`#49`)**, **Human Approval (`#50`)**, এবং **Blog Strategy (`#51`)** যুক্ত হওয়ার পর **MVP Release 1**-এ যাতে কোনো scope creep না ঘটে, সেজন্য নিচের সুনির্দিষ্ট সীমানা প্রস্তাব করা হলো:

| Scope Bucket | Exactly Included | Explicitly Excluded (Held for Later Releases) | Why This Boundary Protects Launch |
|---|---|---|---|
| **1. MVP Release 1 (`Initial Launch`)** | - **`P0` Technical Foundation** (Approved stack, PostgreSQL, RBAC+MFA, CI/CD, Backups, Staging/Prod)<br>- **`P1` Public Website (`22`-page `en-GB` Option B)** (`18` active pages while `3` Legal & `1` Portfolio hold `noindex` until verified)<br>- **Cloudflare Edge `301`/`410`/`404` Allowlist** *(fixes live `wrangler.jsonc` soft-404; executes ONLY post-Migration Matrix approval)*<br>- **`P2` Core WP-Like Admin (`10` modules):** `#1 Overview`, `#2 Pages/Services`, `#3 Blog (Manual + VER-16 recovery queue)`, `#4 Portfolio (VER-13 recovery + publish gate)`, `#5 Media`, `#6 SEO`, `#7 Redirects/410`, `#14 Users/RBAC`, `#15 Settings`, `#22 Audit Logs`<br>- **`P3` Minimal:** `#8 Enquiries Inbox` *(public `/contact` form stays **DISABLED** until `VER-17` + `VER-04`–`VER-06` clear)*<br>- **`P4` Privacy-Gated Foundation:** `#24 Consent Gate Scaffold` + `#16, #17 Basic, #18` (`GA4`/`GSC` **locked `OFF`** until `#24` & Legal clear) | - `#9–#13` (CRM, Proposals, Projects, Care Tickets, Invoices)<br>- PostHog behaviour/funnels (`#17 Full, #19, #21`) & Session Replay (`OFF`)<br>- Remote MCP Server (`#23`), `12` Logical AI Agents, AI BI (`#20`), Knowledge Base (`#25`), Automation Studio (`#26`)<br>- `7`-stage AI Blog scheduling/repurposing automation<br>- Client Portal, Reviews (`VER-12`), Booking (`Decision #15`)<br>- **Customer-Facing SaaS (`#49`)**, `10`-step URL Audit Portal, `.com`/`.us`/`.eu`, `2026–2030` robotics R&D | দ্রুত ও নিরাপদভাবে `ContactSection.tsx` lead-loss বাগ, `hreflang`/`cy` SEO ত্রুটি, ও `HTTP 200` spam soft-404 ঠিক করে `wpcarepoint.co.uk` পুনরুদ্ধার ও রিলঞ্চ নিশ্চিত করে। |
| **2. Releases 2–4 (`Internal Agency Platform`)** | **R2:** `#9–#13` Ops, PostHog funnels (`#17 Full/#19/#21`), `#23` + `15` Read-Only MCP Tools (`Claude`/`ChatGPT`)<br>**R3:** `#25` Knowledge Base, `#20` AI BI Assistant, Full `7`-Stage Blog (`#3`+`#6`+`Content Intelligence Agent`), Client Portal/Reviews/Booking *(if policy approved)*<br>**R4:** `#26` Automation Studio, Tier `4–5` HITL Write Tools, Scheduled Blog + Repurposing Drafts (`9`-item pre-prod package) | Customer-Facing SaaS Portal, commercial SaaS billing, external customer URL submissions | বাস্তব প্রথম-পক্ষের ট্রাফিক ও অভ্যন্তরীণ অপারেশনস ডেটা জমার পরেই BI, MCP এবং AI এজেন্ট চালু হয়—ফলে hallucination শূন্য থাকে। |
| **3. Future SaaS (`Post-MVP`) & `2026–2030` R&D** | Multi-tenant SaaS Onboarding, `10`-step SSRF-hardened URL Submission Portal, Tier `2` DNS/OAuth verification, Tier `3` Customer Read-Only Site Connectors, Isolated SaaS DB/KB/Billing; *(2026–2030 R&D: Regional `.com`/`.us`/`.eu` Federation, Robotics/Device Telemetry)* | N/A (Separate Post-MVP Commercial Track) | Internal agency প্ল্যাটফর্ম স্থিতিশীল হওয়ার আগে multi-tenant SaaS ও R&D জটিলতা MVP বিলম্বিত করে না। |

---

## 5. Blog Publishing Release Strategy (Recovery First -> Full `A–H` Intelligence)

বিদ্যমান **`Module #3` + `Module #6` + `Content Intelligence Agent`** কাঠামোর মধ্যেই *(কোনো `27`তম মডিউল ছাড়া)* ব্লগ প্রকাশনা ৩টি নিরাপদ ধাপে চালু হবে:

1. **Phase A — `Release 1 (MVP)`: Recovery & Clean Manual Editorial (`VER-16`)**
   - `86`টি pre-hack Wayback পোস্ট recovery queue থেকে যাচাইকৃত পোস্ট পুনরুদ্ধার (`#4`, `#5`, `#6`, `#8`, `#11`, `#15`, `#16`, `#33`, `#41`, `#42` অগ্রাধিকার), স্প্যাম (`258` casino / `19` injected) থেকে সম্পূর্ণ বিচ্ছিন্নতা, এবং পুনরুদ্ধার অযোগ্য URL আলাদা `Unrecoverable Blog URLs` লগে সংরক্ষণ।
   - সহজ **Manual Editorial Flow:** `Draft -> Editorial/Owner Review -> Published` (কোনো AI auto-drafting বা auto-scheduling নয়; কঠোর `en-GB`, `1:1` `FAQPage`/Schema parity, এবং zero fabricated author/stats)।
2. **Phase B — `Release 2–3`: Editorial Calendar, Content Intelligence & `7`-Stage Approval Gate**
   - **Editorial Calendar (`#3`)** ও `8`-topic cluster mapping চালু (WordPress, WooCommerce, Design/Redesign, Speed, Care/Security, AI/Automation, SEO/GEO/AIO, Business Growth)।
   - **`Content Intelligence Agent` + GEO/AIO Checks (`#6`)** যুক্ত হয়ে গবেষণা, keyword intent (`en-GB`), internal linking ও AI-assisted drafting দেবে—কিন্তু বাধ্যতামূলক **`7`-stage Workflow (`Draft -> AI Review -> Editorial Review -> Owner Approval -> Scheduled -> Published -> Performance Review`)** লক থাকবে।
   - `#16/#18/#19`-এ GSC ও GA4-ভিত্তিক **Verified Analytics vs AI Forecast** পৃথক রিপোর্টিং চালু হবে *(শুধুমাত্র `#24` Privacy/Consent সক্রিয় হওয়ার পর)*।
3. **Phase C — `Release 4`: Approval-Locked Scheduling & Human-Reviewed Repurposing**
   - `#26 Workflow Automation Studio`-এর মাধ্যমে **শুধুমাত্র `Owner Approval` প্রাপ্ত পোস্ট** `Europe/London` টাইমজোনে scheduled publish হয়ে ডায়নামিক `sitemap.xml` হালনাগাদ করবে।
   - ত্রৈমাসিক stale/CTR-decay refresh ফ্ল্যাগ এবং **LinkedIn, Facebook, social snippets ও newsletter draft** তৈরি হবে—তবে `Decision #18` (UK PECR/GDPR) অনুযায়ী কোনো পোস্ট বা ইমেইল **মানব-অনুমোদন ছাড়া স্বয়ংক্রিয়ভাবে প্রকাশিত/প্রেরিত হবে না**।

---

## 6. Remaining Owner Decisions-এর জন্য সুস্পষ্ট Recommendation (`OD-01` – `OD-08`)

মালিকের দ্রুত ও পরিষ্কার সিদ্ধান্তের জন্য প্রতিটি বকেয়া বিষয়ের সুপারিশ নিচে সংকলিত হলো (শুধু `Approve` / `Revise` / `Defer` উত্তর দিলেই চলবে):

| Decision ID | Topic / Question | Recommended Option (**AI Recommendation**) | Owner Response Needed |
|---|---|---|---|
| **`OD-01`** | **CMS & Core Tech Stack** | **Approve `Next.js + Payload CMS v3 (MIT) + PostgreSQL/Drizzle + Hono/Fastify OpenAPI + Cloudflare Edge/R2 + Isolated MCP Server`.** *(BSL 1.1 Directus ও `100%` custom CMS auth-CVE ঝুঁকি এড়ায়।)* | `[Approve Recommended Stack / Prefer Alternative]` |
| **`OD-02`** | **MVP Release 1 Boundary** | **Approve Lean MVP (`P0 + P1 + 10 P2 Core CMS + #8 Enquiries + #24 Privacy Gate + gated GA4/GSC`)**, keeping `#9–#13`, PostHog, MCP, AI Agents, Blog Automation & SaaS in `R2–R4` / `Post-MVP`. | `[Approve MVP Scope / Adjust Items]` |
| **`OD-03`** | **Blog Publishing Release Phasing** | **Approve 3-Phase Blog Rollout:** `R1` (`VER-16` Recovery + Manual Publish) -> `R2–R3` (`7`-Stage + `Content Intelligence Agent` inside `#3/#6`) -> `R4` (Approval-locked Schedule + Repurposing Drafts). | `[Approve 3-Phase Blog Rollout]` |
| **`OD-04`** | **Multi-Region & SaaS Tenant Isolation** | **Approve `Phased Regional Federation`** (Stage 2 launches `.co.uk` isolated DB; `.com`/`.us`/`.eu` later get isolated regional DBs) + **Strict `tenant_id` RLS + Per-Tenant KMS Vault** for Future SaaS (`Post-MVP`). | `[Approve Isolation Model]` |
| **`OD-05`** | **Backup & DR Targets (`RPO`/`RTO`)** | **Approve Proposed Targets:** Core PostgreSQL (`WAL PITR`: `RPO <= 15m / RTO <= 2h`), Media R2 (`<= 1h / <= 1h`), BI/MCP (`<= 1h / <= 4h`), subject to `VER-06` GDPR retention rules. *(Budget fallback if WAL PITR deferred: `<= 24h` daily dump).* | `[Approve WAL PITR Targets / Prefer Daily <= 24h]` |
| **`OD-06`** | **Future `P3` Extensions (`Booking`, `Portal`, `Reviews`)** | **Defer to `Release 3+`:** Keep Calendly/Cal.com **OFF** on initial `/contact` (`Decision #15` intact); review Consultation Booking, Client Portal, and `VER-12` Verified Reviews only before `Release 3`. | `[Confirm Deferral to Release 3+]` |
| **`OD-07`** | **Hard Deferred Launch Gates & Repo Access** | Keep `VER-04`–`VER-06` (Legal/GDPR), `VER-17` (Resend/Postmark DNS), & Migration Matrix **as tracked Stage 2 Launch Gates**; **supply `VER-18` (GitHub Repo URL & Cloudflare Access)** before any Stage 2 code work starts. | `[Confirm Gates + Provide VER-18 when ready for Stage 2]` |
| **`OD-08`** | **Optional Commercial Proof & Recovery (`VER-07`–`VER-14`, `VER-16`)** | Keep Care Plan cards on **`"Enquire for Pricing"`** (`VER-07`), hide Portfolio (`VER-13`) & unverified stats (`VER-11`/`VER-12`/`VER-14`) at initial launch until genuine recovered/verified assets are supplied; begin collecting `VER-13`/`VER-16` files asynchronously. | `[Confirm Conservative Launch Copy / Supply Verified Details]` |

---

## 7. Master Task 1.6 Completion Checklist (Final Stage 1 Gate -> Stage 2 Unlock)

| # | Task 1.6 Requirement / Gate | Current Status | Blocking / Non-Blocking | Action Required to Mark `[x]` |
|---:|---|---|---|---|
| 1 | Hybrid Digital Agency Brand, Positioning & `5` Categories (`Decision #33`) | **`[x] COMPLETED`** | Non-Blocking | Complete (`PROJECT_STATUS.md`). |
| 2 | Option B SEO/GEO/AIO & `22`-Page Sitemap (`Decision #34`) | **`[x] COMPLETED`** | Non-Blocking | Complete (`/services/ai-search-optimisation/`). |
| 3 | `VER-20` Delivery Capability Confirmation (`13/13`, `Decision #35`) | **`[x] COMPLETED`** | Non-Blocking | `OWNER-CONFIRMED` (keep unverified portfolio proof omitted). |
| 4 | Official Email (`contact@wpcarepoint.co.uk`), `RH1 4HW` Contact Publication & Email-Only Policy (`#37`, `#39`) | **`[x] COMPLETED`** | Non-Blocking | Approved for `/contact` (no phone/WhatsApp/call centre). |
| 5 | Speed URL Target (`/wordpress-speed-optimisation/`, `Decision #40`) | **`[x] COMPLETED`** | Non-Blocking | Single-hop `301` deferred until destination page & migration lock. |
| 6 | `26`-Module Admin Platform, `MCP`, `GA4/GSC/PostHog`, `P0–P7` & Prompt Register (`#41–#48`) | **`[x] COMPLETED`** | Non-Blocking | Documented across `V01–V04`. |
| 7 | Dual Business Model (`#49`), Human Approval (`#50`), `12` Logical AI Agents & Blog Strategy (`#51`) | **`[x] COMPLETED`** | Non-Blocking | Documented in `WPCP-P1.6-V05` (`PLANNED ONLY`). |
| 8 | Final Architecture, Stack (`Payload v3 MIT`), MVP, Multi-Region/Tenant & Backup Evaluation (`WPCP-P1.6-V06`) | **`[~] AWAITING OWNER SIGN-OFF`** | **Blocks Stage 2** | **Owner replies to `OD-01`–`OD-05` above.** |
| 9 | GitHub Repository (`main` branch) & Cloudflare/Registrar Access (`VER-18`) | **`[ ] PENDING`** | **Blocks Stage 2** | Owner confirms canonical Git repo & Cloudflare cut-over access. |
| 10 | Legal Entity, Companies House/VAT, ICO/GDPR Retention & `#24` Consent Policy (`VER-04`–`VER-06`) | **`[D] DEFERRED BY OWNER`** | **Blocks `/contact` Form, Legal Publish & Tracking** | Supply before enabling public `/contact` form, Legal pages, or GA4/PostHog (`site` may prep behind `#24 OFF` lock if Stage 2 approved). |
| 11 | Resend/Postmark Delivery & `SPF`/`DKIM`/`DMARC` DNS (`VER-17`) | **`[D] DEFERRED BY OWNER`** | **Blocks Live `/contact` Form** | Configure & test before enabling `/contact` form. |
| 12 | Final URL Migration Matrix Lock (`301`/`410`/Allowlist & `VER-15` revisit check) | **`[D] DEFERRED BY OWNER`** | **Blocks Production Cut-Over** | Review & approve exact `301`/`410` rules in Staging before Stage 3 launch (`Not Indexed = SKIPPED BY OWNER`; `Links = No Data`). |
| 13 | Portfolio & Blog Recovery Files (`VER-13`, `VER-16` — `86` Wayback posts) | **`[ ] PENDING RECOVERY`** | Conditional Launch Gate | Collect authentic assets, or launch with Portfolio `noindex` and clean Recovery Queue ready in `#3`/`#4`. |
| 14 | Optional Commercial Proof (`VER-07`–`VER-12`, `VER-14`, Branding/Marketing delivery mode) | **`[ ] PENDING / CONDITIONAL`** | Non-Blocking *(if omitted)* | Confirm omitting unverified prices/counts/founding year or supply verified proof. |
| 15 | **Formal Task 1.6 Closure & Stage 2 Authorisation Sign-Off** | **`[ ] NOT GRANTED`** | **Master Stage 2 Lock** | Owner explicitly approves `OD-01`–`OD-08`, closes Task 1.6, and authorises Stage 2 start (`P0`/`R1`). |
