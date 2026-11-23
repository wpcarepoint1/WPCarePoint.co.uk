# Task 1.6 / Stage 2 Architecture — Advanced Analytics, External AI Agent Connectivity (MCP) & Business Intelligence

**Last Updated:** 2026-11-23  
**Brand & Positioning:** **WPCarePoint** (`https://wpcarepoint.co.uk/`) — *Web Development, eCommerce & AI Solutions Agency* (*"Building, improving and supporting digital businesses."*, Decision `#33`)  
**Scope:** Planning Specification for AI-Connected, Data-Driven Hybrid Digital Agency Platform (Decisions `#41–#47`)  
**Task 1.6 Status:** **`IN PROGRESS`**  
**Stage 2 Status:** **`NOT STARTED — BLOCKED`** *(Planning specification ONLY — zero code, database schemas, tracking scripts, MCP endpoints, DNS changes, or live production features are authorised or implemented yet.)*

---

## Governance & Strict Non-Execution Guardrails

- Preserves Confirmed Owner Decisions **`#1–#48`** and incorporates **`WPCP-P1.6-V05`** Decisions **`#49–#51`** (`/TASK_1_6_FUTURE_AI_AGENCY_PLATFORM_STRATEGY.md`).
- Maintains the **`26` proposed Admin Dashboard modules** (`#1–#22` retained + **`#23–#26`** added) **without adding a 27th module**; integrates Regular Blog Publishing & Content Intelligence cleanly into **`#3`**, **`#6`**, and the **`Content Intelligence Agent`**.
- Keeps **Legal & compliance implementation**, **Email delivery infrastructure (`VER-17`)**, **URL migration execution**, and **Original GSC `Pages.csv` (`VER-15`)** as **`DEFERRED BY OWNER`**; keeps **`Not Indexed Pages` = `SKIPPED BY OWNER`** and **`Links` = `No Data`**.
- Preserves `/gsc_performance_pages_reconstructed_56.csv` (`56` rows), **`305` `Indexed Pages`**, and **`766` Wayback** baselines unchanged.
- **Production Tracking & AI Activation Lock:** Do **NOT** enable GA4, PostHog, session replay, MCP endpoints, AI agents, or SaaS features in production until privacy/consent controls (`Module #24`), security reviews, and explicit owner Stage 2 authorisation are completed.

---

## 1. Expanded `26`-Module WPCarePoint Admin Dashboard Plan & UX Design

### A. Relationship Between Prior `8`-Module Spec, `22`-Module Direction & `26`-Module Expansion
In Decision `#38` (`/TASK_1_6_PORTFOLIO_BLOG_AND_ADMIN_PLAN.md`), the initial Stage 2 core specification documented `8` WordPress-inspired CMS/Admin modules. The owner's expanded platform direction preserves those core modules within a full **`22`-module** agency administration baseline (`#1–#22`) and adds **`4` new modules (`#23–#26`)** for a **`26`-module** target architecture:

| # | Module Name | Group | Status | Core Stage 2 / Release Planning Scope |
|---:|---|---|---|---|
| 1 | **Dashboard Overview & Activity** | Core Admin | Retained (`22`-Module Base / Orig `#1`) | Customisable widgets (Traffic, Enquiries, SEO health, Content queue, Audit summary), recent editor activity log. |
| 2 | **Page & Service Content Management** | Core CMS | Retained (`22`-Module Base / Orig `#4`) | Structured editing for `/` + `22`-page Option B sitemap across `5` Primary Service Categories, Care Plan cards (`"Enquire for Pricing"`), `1:1` FAQs, Legal gates. |
| 3 | **Blog & Article Management** | Core CMS | Retained (`22`-Module Base / Orig `#3`) | WordPress-like post editor, category/tag taxonomy, pre-hack Wayback recovery queue (`86` posts), slug preservation, review statuses, dynamic `sitemap.xml` flags. |
| 4 | **Portfolio & Project Management** | Core CMS | Retained (`22`-Module Base / Orig `#2`) | Full CRUD for recovered/new projects, verified deliverables, WebP/AVIF galleries, unrecoverable-project log, publish/`noindex` controls. |
| 5 | **Media Library** | Core CMS | Retained (`22`-Module Base / Orig `#6`) | WebP/AVIF pipeline, intrinsic `width`/`height`, required `alt` text, folder tags, `VER-19` unverified stock warning guard. |
| 6 | **SEO Metadata & Canonical Management** | SEO & Search | Retained (`22`-Module Base / Orig `#5`) | Per-route `<title>`, description, self-referencing `canonical`, `en-GB` `hreflang`, `index`/`noindex`, JSON-LD Schema controls, dynamic `sitemap.xml` builder. |
| 7 | **URL Redirects & `410` Register** | SEO & Migration | Retained (`22`-Module Base) | Single-hop `301` mapping registry, Edge allowlist rules, confirmed spam/retired `HTTP 410` registry, conflict/chain detector (synced with Cloudflare Worker). |
| 8 | **Enquiries & Leads Inbox** | CRM & Intake | Retained (`22`-Module Base) | Dual-intent `/contact` submissions (`Project` vs `Maintenance` + `4`-option `Issue Type`), reference IDs, Resend/Postmark delivery webhook status, isolated from anonymous analytics PII. |
| 9 | **Client CRM & Organisations** | Agency Operations | Retained (`22`-Module Base) | Client accounts, primary contacts, service history, linked sites, lead source / UTM attribution, human-verified status tags. |
| 10 | **Proposals & Service Scoping** | Agency Operations | Retained (`22`-Module Base) | Structured scoping briefs, `OWNER-CONFIRMED` capability tagging (`13` capabilities), draft proposal tracking, approval status. |
| 11 | **Projects & Milestone Tracker** | Agency Operations | Retained (`22`-Module Base) | Active build/migration milestones (`Design`, `Build`, `QA`, `Cut-Over`), internal checklists, deadline reminders. |
| 12 | **Support Tickets & Care Plans** | Care & Support | Retained (`22`-Module Base) | Maintenance requests, Quick Fix triage, Care Plan tier tracking (internal reference only until `VER-07`–`VER-09` approved), audit notes. |
| 13 | **Invoices & Commercial Records** | Finance Admin | Retained (`22`-Module Base) | Invoice metadata/status tracking, VAT indicator (`VER-08` pending), payment status logs — strictly **off-limits** to unapproved AI writes. |
| 14 | **Users & Role-Based Access Control (RBAC)** | Governance | Retained (`22`-Module Base / Orig `#7`) | Server-enforced roles (`Super Admin`, `Agency Manager`, `Content Editor`, `Analyst / Read-Only`), MFA/session controls, strict `/admin` `noindex`. |
| 15 | **Website Settings & Reusable Content** | Core Admin | Retained (`22`-Module Base / Orig `#8`) | Global contact (`contact@wpcarepoint.co.uk`, `RH1 4HW`), future channel switches (Phone/WhatsApp kept `OFF`), 4-group footer, CTA strings. |
| 16 | **Centralised Analytics Overview** | Analytics Centre | Retained (`22`-Module Base) | Unified executive KPIs from WPCarePoint Analytics Integration Layer (`Visitors`, `Sessions`, `Page Views`, `Conversions`, WoW/MoM trends, saved views, CSV/PDF export). |
| 17 | **Real-Time & Acquisition Intelligence** | Analytics Centre | Retained (`22`-Module Base) | Active visitors/pages, channel breakdown (`Organic`, `Direct`, `Referral`, `Social`, `Paid`, `Email`, identifiable `AI Search / AI Referral`), UTM campaign attribution, Geo (`Country`/`Region`/approx `City`) & Device splits. |
| 18 | **Google Search Console Intelligence** | Analytics Centre | Retained (`22`-Module Base) | GSC query/page impressions, clicks, CTR, average position, country/device splits, strictly separated from internal site search with reporting-completeness disclaimers. |
| 19 | **Content & Conversion Funnel Analytics** | Analytics Centre | Retained (`22`-Module Base) | Service page popularity, Blog & Portfolio engagement, Entry/Exit pages, CTA click tracking, `/contact` funnel drop-offs, PostHog journey/funnel insights. |
| 20 | **AI Analytics & Business Intelligence** | AI BI | Retained (`22`-Module Base) | Natural-language Q&A assistant, Daily/Weekly/Monthly AI digests, anomaly alerts, SEO/content/CRO recommendations with mandatory data-source & limitation citations. |
| 21 | **Internal Search & UX Behaviour Insights** | Analytics Centre | Retained (`22`-Module Base) | On-site search terms, zero-result queries, search-result click behaviour, feature usage, strictly privacy-gated optional session replay (`OFF` by default). |
| 22 | **System Audit Logs & Health Monitoring** | Security & Ops | Retained (`22`-Module Base) | Admin logins, content revisions, email delivery status, analytics sync job health, MCP call logs, error/rate-limit alerts. |
| **23** | **AI Agent Connections & Permissions** | **NEW Expansion** | **Added (`26`-Module Spec)** | Manage external/internal AI clients (Claude, Claude Code, ChatGPT, MCP apps), OAuth/token lifecycle, credential rotation, instant revocation, per-agent tool allowlists, RBAC scopes, rate limits, audit log viewer, and HITL write approval queue. |
| **24** | **Privacy & Consent Centre** | **NEW Expansion** | **Added (`26`-Module Spec)** | Consent banner/state config, script/provider gating (`GA4`, `PostHog`, `Session Replay` locked `OFF` until legal/consent verified), retention rules (`[PENDING OWNER/LEGAL APPROVAL]`), data deletion request queue, visitor disclosure registry, PII separation rules. |
| **25** | **Knowledge Base & Business Data Hub** | **NEW Expansion** | **Added (`26`-Module Spec)** | Central verified truth source (`12` knowledge categories), editorial/approval workflow, version history & rollback, API/MCP exposure tags (`Public-Safe` vs `Internal-Only`), preventing AI hallucination of agency facts. |
| **26** | **Workflow Automation Studio** | **NEW Expansion** | **Added (`26`-Module Spec)** | Visual/rule-based trigger-action builder (`9` agency workflows), human-in-the-loop (HITL) approval gates, retry/backoff policies, failure dead-letter handling, execution audit trail. |

### B. Dashboard UX & Non-Technical Owner Design (Section 9)
- **WordPress-Inspired Familiarity:** Dark/slate collapsible left sidebar grouped into clear sections (*Overview, Content & SEO, Clients & Projects, Analytics Centre, AI & Intelligence, Governance & Settings*) with instant **searchable menu (`Ctrl+K` / quick jump)** so a non-technical owner can find any of the `26` modules in two clicks.
- **Executive Usability:** Drag/toggle customisable overview widgets, sticky global filters (**Date Range**, **Country**, **Device**, **Channel**), **Saved Analytics Views**, one-click **Exportable Reports (CSV/JSON/PDF)**, **Role-Based Dashboards** (Owner vs Editor vs Analyst), and responsive **mobile-friendly administration** layout.

---

## 2. Recommended Analytics Architecture & Technology Stack

### A. Multi-Provider Strategy & WPCarePoint Analytics Integration Layer
WPCarePoint will **not** rely on a single analytics vendor or trust raw browser requests for executive reporting. All telemetry flows through a **server-side WPCarePoint Analytics Integration Layer** (hosted on WPCarePoint's backend/Worker tier):

```
[Public Website (wpcarepoint.co.uk)]
   │  (Consent-Gated by Module #24 Privacy & Consent Centre — DISABLED until Legal/Consent Ready)
   ├──> First-Party Collector / Tag Router ──> Deduped Event IDs (event_id / idempotency)
   │                                            ├──> GA4 (Acquisition, Sessions, Conversions, Realtime)
   │                                            └──> PostHog (Funnels, Paths, Feature/CTA UX; Replay OFF by default)
   │
[Google Search Console API] ───────────────────────┐
[GA4 Data API + Realtime API] ─────────────────────┼──> [WPCarePoint Analytics Integration Layer (Server-Side)]
[PostHog Query API] ───────────────────────────────┤     - Provider-agnostic normalised metric schema
[First-Party Internal Search / Enquiry Aggregates]─┘     - Timezone standardisation (Europe/London display, UTC storage)
                                                         - Deduplication & caching (avoid double-counting)
                                                         - Metric definitions & delay/sampling metadata
                                                                │
                                      ┌─────────────────────────┴─────────────────────────┐
                                      ▼                                                   ▼
                     [Admin Dashboard Modules #16–#21]                   [Remote MCP Server / AI BI (#20, #23)]
```

### B. Provider Roles & Trade-Offs
| Provider | Primary Responsibility | Why Selected / Role | Strict Boundaries & Limitations |
|---|---|---|---|
| **Google Analytics 4 (GA4)** | Traffic acquisition, sessions, landing/exit pages, CTA/enquiry conversion events, realtime active users, country/region/approx city, device splits, AI referral tracking (e.g., `chatgpt.com`, `claude.ai`, `perplexity.ai` referrer rules). | Industry-standard acquisition & attribution baseline; native realtime + GA4 Data API. | Subject to GA4 thresholding/sampling on small or segmented slices; requires Consent Mode & IP anonymisation/no raw IP storage. |
| **Google Search Console (GSC)** | Google organic search queries, impressions, clicks, CTR, average position, page performance, country & device search comparisons. | Only authoritative first-party source for Google organic query impressions & position. | **24–72h reporting lag**; omits anonymised/low-volume queries (`"Queries not shown"` privacy threshold); **MUST** stay strictly separated from internal on-site search logs. |
| **PostHog** | Product/content engagement, multi-step conversion funnels (`/services` -> `/contact` -> `submitted`), navigation paths, entry/exit journeys, CTA clicks, internal search interaction correlation, optional session replay. | Open/flexible behavioural & funnel engine where GA4 pathing is rigid. | **Session replay & individual user-level behavioural tracking MUST remain `DISABLED` (`OFF`)** until Privacy & Consent Centre (`#24`) explicit opt-in & legal review are completed. |
| **First-Party Edge / App Telemetry** | Aggregate on-site search query counts (zero PII), server-confirmed enquiry conversion counts (`HTTP 201` Resend/Postmark accepted events, **strictly separated** from enquiry contact details). | Guarantees conversion counts match real backend acceptances without ad-blocker distortion. | Aggregate counts only; never log raw query strings containing email/phone patterns or raw visitor IPs. |

### C. Metric Governance & Anti-Duplication Rules
The Analytics Integration Layer MUST expose an interactive **Metric Definitions & Limitations Drawer** inside Modules `#16–#21` documenting:
1. **Visitors vs Sessions vs Page Views:**
   - *Unique Visitors:* Estimated deduplicated browsers/users within the selected window (affected by cookie consent opt-out rates).
   - *Sessions:* Bounded visit periods (standard 30-min inactivity window; split at midnight in `Europe/London` where applicable).
   - *Page Views:* Total route renders (`SPA` history changes deduplicated against initial HTML load so client navigation never double-fires `page_view`).
2. **Duplicate Event Prevention:** Every conversion (`enquiry_submitted`, `cta_click`, `care_plan_select`) carries a deterministic `event_id` so GA4, PostHog, and server-side conversion summaries never inflate totals.
3. **Timezone & Latency:** Store timestamps in `UTC`; aggregate and present UK agency reporting in **`Europe/London` (GMT/BST)** with explicit lag badges (e.g., *GA4 Realtime ~1–5 min; GA4 Standard 4–24h; GSC 48–72h*).

---

## 3. Advanced Website Visitor Analytics Capabilities (Modules `#16–#21`)

All capabilities below are planned behind Module `#24` privacy gates:
1. **Real-Time Analytics:** Active visitors & concurrent sessions, current active pages, active sessions by country & approximate city, live traffic sources, device categories, real-time conversion events.
2. **Visitor & Session Analytics:** Total visitors, unique visitors, total sessions, page views, new vs returning visitors, average session duration & active engagement time, entry pages, exit pages, visitor journeys & top navigation paths.
3. **Time-Based Analytics:** Daily/weekly/monthly/yearly time series, most active days of week, peak hours, **24×7 hourly traffic heatmap**, Week-over-Week (`WoW`) and Month-over-Month (`MoM`) comparisons.
4. **Geographic Analytics:** Country-level, region-level, and approximate city-level traffic (IP-derived at edge/provider level **without storing raw IPs** and **never using browser Geolocation/GPS**), country-wise page/service interest, country-wise enquiry conversion rates.
5. **Content & Service Analytics:** Most viewed pages, top services across all `5` Categories, blog performance (post-recovery), portfolio engagement (post-recovery), entry & exit page bounce/conversion performance, CTA click heat/counts, service enquiry conversion rates, **on-site internal search queries** & search-result click interactions, content engagement trends.
6. **Traffic Acquisition:** Organic Search, Direct, Referral, Social, Paid Campaigns, Email Campaigns, **AI Search & AI Referral traffic** (grouped via curated referrer pattern list such as ChatGPT/OpenAI, Claude/Anthropic, Perplexity, Copilot, Gemini where browser `Referer` headers are passed — with explicit note that dark/no-referrer AI visits appear as `Direct`), and full **UTM campaign (`source/medium/campaign/content/term`)** attribution.
7. **Search Intelligence (GSC):** Queries, impressions, clicks, CTR, average position, page performance, country & device comparisons — visually isolated in Module `#18` with clear disclaimers that Google withholds anonymised long-tail queries.

---

## 4. External AI Agent Connectivity & Remote MCP Server Architecture (Module `#23`)

### A. Protocol Evaluation: Remote MCP vs Secure REST APIs
| Integration Pattern | Best Use Case | Security & Governance Fit | Planned Architecture Decision |
|---|---|---|---|
| **Remote Model Context Protocol (MCP)** *(Primary AI Agent Standard)* | Connecting **Claude Desktop / Claude Web / Claude Code**, **ChatGPT (MCP-compatible connectors)**, future MCP assistants, and internal WPCarePoint AI copilots using discoverable typed tools & resources. | Native tool schemas, explicit read-only annotations, per-tool allowlists, user/OAuth session binding, structured audit logging. | **PRIMARY** connectivity layer hosted at dedicated remote endpoint (e.g., `https://mcp.wpcarepoint.co.uk/mcp` or gated `/api/mcp` behind Cloudflare Access/WAF). |
| **Scoped Secure REST APIs** *(Internal / Automation / Webhook Tier)* | Admin Dashboard frontend (`Modules #1–#26`), scheduled cron digests (`Workflow Studio`), webhooks, and non-MCP integrations. | Standard HTTPS JSON REST with RBAC session cookies / signed service-to-service JWTs and OpenAPI validation. | **COMPLEMENTARY** internal backend consumed by the Admin UI and by the Remote MCP Server itself (neither calls the database directly from the public web). |

### B. Remote MCP Security Architecture
```
[Claude / Claude Code] ─┐
[ChatGPT / MCP Agents]  ├─ HTTPS (TLS 1.3, Streamable HTTP / SSE) ─> [Cloudflare Edge WAF + Rate Limiter]
[Internal AI Assistant] ┘                                                      │
                                                                               ▼
                                                              [Remote MCP Gateway (Auth + Policy Engine)]
                                                               - OAuth 2.1 (PKCE) / Scoped Revocable Tokens
                                                               - RBAC + Client Allowlist + Tool Allowlist
                                                               - Read-Only Default + PII Redaction Filter
                                                               - Immutable Audit Logger + Rate Limits
                                                                               │
                                                                   (Internal Service Layer)
                                                                 ┌─────────────┴─────────────┐
                                                                 ▼                           ▼
                                                  [Analytics Integration Layer]   [Knowledge Base Hub (#25)]
                                                  (GA4 / GSC / PostHog / Agg)     (Approved Agency Facts Only)
```

Mandatory MCP security controls (Module `#23`):
1. **Transport & Edge Protection:** HTTPS only (`TLS 1.2/1.3`), strict Origin/Host checks, Cloudflare WAF, IP/client rate limiting & burst quotas.
2. **Authentication & Authorisation:** OAuth 2.1 (Authorization Code + PKCE for interactive users like Claude/ChatGPT connectors; short-lived scoped tokens with explicit expiry for headless/CLI tools like Claude Code). Zero shared global static keys.
3. **Tool Allowlists & RBAC:** Every connected AI client profile is bound to an RBAC role and an explicit **tool allowlist** (e.g., an external analyst agent may only call aggregate analytics tools, never enquiry summary or draft-write tools).
4. **Read-Only Default:** All initial MCP tools are strictly `readOnlyHint: true` and return **aggregated, redacted, non-PII JSON** with explicit `source`, `period`, `timezone`, and `limitations` metadata.
5. **Credential Rotation & Instant Revocation:** One-click connection suspension/revocation, token rotation with grace/immediate kill switch, and automatic expiry in Module `#23`.
6. **Immutable Audit Logging:** Every MCP invocation records `timestamp`, `connection_id`, `user_id`, `tool_name`, `sanitised_args`, `row_count`, `latency_ms`, and `status` (`ALLOW`/`DENY`/`RATE_LIMITED`).
7. **Zero Secret / Raw PII Exposure Rule:** Database credentials, GA4/PostHog/Resend API secrets, raw visitor IPs, and private client enquiry emails/phone numbers/messages are **NEVER** accessible to MCP tools or transmitted to any external LLM provider.
8. **Human Approval (HITL) Gate for Future Write Tools:** Write capabilities (evaluated only in **Release 4**) require explicit `write_enabled` scope + staging into a **Pending Human Approval Queue** inside the Admin Dashboard before committing. AI agents are **strictly prohibited** from publishing live content, deleting records, modifying invoices/financial records, or changing production DNS/settings.

### C. Initial Read-Only AI Agent Tools (`15` Tools — Release 2)
*(Note: The prompt's tool list truncated mid-token at `get_realtime_`; completed cleanly as `get_realtime_visitor_summary` matching Section 3's Real-time Analytics capability, followed by all `14` remaining explicitly listed tools.)*

| # | MCP Tool Name | Data Source(s) | Output & Privacy Boundary |
|---:|---|---|---|
| 1 | `get_website_analytics` | GA4 + PostHog (via Layer) | Aggregate KPIs (`visitors`, `unique_visitors`, `sessions`, `page_views`, `engagement_time`, `conversions`) for date range + `WoW`/`MoM` deltas. Zero PII. |
| 2 | `get_realtime_visitor_summary` | GA4 Realtime API | Active visitors/sessions (~last 30m), top active URLs, active countries/approx cities, device split, live conversion counts. |
| 3 | `get_top_pages` | GA4 + PostHog | Top URLs ranked by views/sessions/engagement time, filtered by page group (`Service`, `Blog`, `Core`). |
| 4 | `get_landing_page_report` | GA4 + PostHog | Entry sessions, bounce/engagement rate, conversion rate per landing URL. |
| 5 | `get_exit_page_report` | GA4 + PostHog | Exit counts, exit rate, preceding page context per URL. |
| 6 | `get_traffic_by_country` | GA4 | Country, region, and approx city aggregates + country-wise enquiry conversions (no GPS/raw IP). |
| 7 | `get_traffic_by_device` | GA4 | Desktop, mobile, tablet, OS/browser family aggregate shares & conversion comparison. |
| 8 | `get_peak_traffic_times` | GA4 | Day-of-week & `24×7` hourly heatmap matrices in `Europe/London`. |
| 9 | `get_top_search_queries` | GSC (External) + On-Site Search *(Strictly Separated)* | Returns two distinct arrays (`google_search_console_queries` vs `internal_site_searches`) with GSC completeness caveat. |
| 10 | `get_service_interest_report` | GA4 + PostHog + Knowledge Base tags | Page views, CTA clicks, and enquiry conversion intent grouped across the `5` Primary Service Categories & `13` `OWNER-CONFIRMED` capabilities. |
| 11 | `get_conversion_summary` | First-Party Aggregates + GA4 + PostHog | Total enquiry counts split by `Project` vs `Maintenance` (`4` Issue Types), channel/UTM attribution, conversion rate — **zero client names/emails**. |
| 12 | `get_seo_performance` | GSC API | Site/page impressions, clicks, CTR, avg position, country/device splits + `24–72h` lag caveat. |
| 13 | `get_content_performance` | GA4 + PostHog + CMS metadata | Blog article & portfolio page engagement trends (activated once recovered posts/projects are published). |
| 14 | `get_business_growth_report` | Layer Composite (`GA4 + GSC + Conversions`) | Multi-period growth comparison (`MoM` / `QoQ`), channel mix (incl. AI Search referrals), top-performing countries & services. |
| 15 | `get_pending_enquiry_summary` | Enquiries Metadata *(Redacted)* | **Aggregate operational summary only:** count of open/pending enquiries by age bucket, `Project` vs `Maintenance` intent, `Issue Type`, and country — **never** exposes personal names, emails, URLs, or private message text. |

### D. Future Controlled Write Tools (`Release 4` Evaluation Only — HITL Required)
- `draft_blog_or_page_content` (creates `Draft` only — cannot publish live)
- `create_internal_task` (adds internal backlog item for human review)
- `draft_service_proposal` (populates Knowledge-Base-grounded proposal draft — requires human verification of pricing/VAT/SLA)
- `prepare_bi_report` (generates saved executive report artifact)
- `propose_crm_record_update` (stages CRM field diff for human approval)
- **Explicit Prohibition:** No autonomous publishing, deletion, invoice/financial mutation, legal-page modification, or production infrastructure/DNS changes.

---

## 5. Visitor Data Privacy & Privacy & Consent Centre Specification (`Module #24`)

Because **Legal & compliance implementation remains `DEFERRED BY OWNER`**, this specification defines the mandatory architecture while keeping **all production tracking disabled**:

1. **Pre-Activation Hard Blockers:** Production GA4 tags, PostHog scripts, cookie storage, session replay, and external MCP connections **MUST remain `OFF`** until UK GDPR / PECR disclosures (`/privacy-policy`, `/cookie-policy`), Data Controller identity (`VER-04`), ICO/retention policy (`VER-06`), and consent UI are legally reviewed and owner-approved.
2. **Core Privacy Principles Enforced by Module `#24`:**
   - **Data Minimisation & Purpose Limitation:** Collect only metrics necessary for defined analytics & service improvement goals; separate statistical web analytics completely from `/contact` enquiry records (`Modules #8–#9`).
   - **Consent Controls:** Granular opt-in/opt-out state (`Essential Only` vs `Analytics` vs `Behavioural UX`), defaulting to **non-tracking / consent-denied** for non-essential analytics cookies/scripts until valid consent is recorded.
   - **Session Replay & Individual Tracking Lock:** PostHog session replay and person-level behavioural profiling MUST stay **hard-disabled (`OFF`)** in Releases 1–2 and only become configurable in Module `#24` after explicit legal/consent verification (with automatic input/PII masking).
   - **No Raw IP / No GPS / No Unauthorised Profiling:** Never invoke browser `navigator.geolocation` GPS APIs; discard/mask raw IP addresses at ingestion; never build cross-site or unauthorised individual behavioural profiles.
   - **Configurable Retention & Deletion:** Module `#24` provides per-category retention timers and data-deletion workflow triggers (audit-logged erasure). **Specific retention durations (e.g., months/days) are `[PENDING OWNER & LEGAL REVIEW — DO NOT INVENT]`** and no legal compliance certification is claimed.
   - **Visitor-Facing Disclosures:** Dynamic inventory synced with `/cookie-policy` and `/privacy-policy` listing exact active providers, purposes, and opt-out controls.

---

## 6. AI Analytics Assistant & Business Intelligence (`Module #20`)

### A. Supported Executive Q&A Scope
The AI Analytics Assistant (using only MCP read-only tools + Knowledge Base `#25` context) will answer natural-language owner questions including:
- *How many visitors came to the website today?* (`get_realtime_visitor_summary` + `get_website_analytics`)
- *Which pages received the most visits this week?* (`get_top_pages`)
- *Which service is attracting the most interest?* (`get_service_interest_report`)
- *Which country generates the most enquiries?* (`get_traffic_by_country` + `get_conversion_summary`)
- *What are the busiest visitor hours?* (`get_peak_traffic_times`)
- *Which landing pages have poor enquiry conversion?* (`get_landing_page_report`)
- *Which traffic sources produce qualified leads?* (`get_conversion_summary` + attribution)
- *Which blog articles attract organic traffic?* (`get_content_performance` + `get_seo_performance`)
- *What changed compared with last month?* (`get_business_growth_report`)
- *What should WPCarePoint improve next?* (Synthesised CRO/SEO priority brief strictly grounded in observed gaps)

### B. Automated Intelligence Outputs & Evidence Guardrails
- **Cadences & Alerts:** Daily AI executive summary, Weekly performance brief, Monthly business review, Traffic/conversion anomaly alerts (e.g., sudden drop on `/wordpress-maintenance-support`), Content & SEO opportunity suggestions (GSC high-impression / low-CTR opportunities), Conversion bottleneck recommendations, Country-wise growth insights.
- **Mandatory Grounding Contract:** Every AI BI response MUST include:
  1. **Source Datasets Used** (e.g., *GA4 + GSC + First-Party Enquiry Aggregates*)
  2. **Exact Reporting Period & Timezone** (e.g., *16–22 Nov 2026, `Europe/London`*)
  3. **Known Data Limitations** (e.g., *GSC 48–72h lag, unconsented visitor gap, non-referrer AI visits counted as Direct*)
  4. **Zero Fabrication / Causality Rule:** Never invent numbers or assert causal proof (*"X caused Y"*) where data only shows correlation or insufficient sample size.

---

## 7. Knowledge Base & Business Data Hub (`Module #25`)

Central, versioned single source of truth grounding both the **Website** and **AI Assistants**:
- **12 Approved Knowledge Domains:**
  1. Verified company information (`WPCarePoint`, `RH1 4HW`, `contact@wpcarepoint.co.uk`, verified `VER-04`/`VER-05`/`VER-11` once supplied)
  2. Approved service descriptions (`22`-page Option B architecture across `5` Primary Service Categories)
  3. Service capabilities (`13` `OWNER-CONFIRMED` capabilities + delivery governance qualifiers)
  4. Approved pricing rules (`"Enquire for Pricing"` currently; historical baselines hidden until `VER-07`/`VER-08`/`VER-10` approved)
  5. FAQs (`1:1` synced with `FAQPage` Schema)
  6. Contact information & channel policy (**Email only** now — zero active phone/WhatsApp/call centre)
  7. Policies (Privacy, Cookie, Terms, Retention — unpublished until `VER-04`–`VER-06` verified)
  8. Verified portfolio projects (`VER-13` recovered/verified entries only)
  9. Approved client testimonials (`VER-12` verified only)
  10. Technical documentation (architecture, MCP specs, runbooks)
  11. Content guidelines (`en-GB` British spelling, anti-fabrication rules)
  12. Brand guidelines (`Web Development, eCommerce & AI Solutions Agency`, `#003b4f`/`#00749c`/`#00b2d4`/`#ffffff` light-first surface system)
- **Governance Workflow:** `Draft` -> `Pending Owner Review` -> `Approved (Active)` -> `Archived`, with full **version history/diff**, rollback, and strict rule that AI assistants quote **only `Approved` KB records** and state `"Not verified / pending"` for missing facts.

---

## 8. Workflow Automation Studio (`Module #26`)

Evaluated event-driven automations (Stage 2 Release 4 implementation):
1. **New enquiry notifications** (Resend/Postmark internal alert + Turnstile-gated visitor receipt)
2. **Lead follow-up reminders** (overdue pending enquiries flagged to agency owner)
3. **Consultation booking notifications** (only if/when approved booking workflow is added later)
4. **Project milestone reminders** (upcoming/overdue Stage delivery checks)
5. **Invoice status notifications** (internal finance reminders — human-approved only)
6. **Support ticket assignment** (routing `Maintenance` / `Quick Fix` / `Emergency` issue types)
7. **Weekly analytics reports** (scheduled Module `#20` digest delivered internally)
8. **Content review reminders** (blog/portfolio recovery items awaiting audit)
9. **Approved content publishing workflows** (automated scheduling/sitemap ping **only after explicit human approval**)

- **Reliability & Safety Controls:** Idempotent execution keys, exponential retry with max-attempt cap, dead-letter error queue, full **activity & execution logs**, and **mandatory human approval gates** on any external client communication, content publish, or CRM/financial state change.

---

## 9. Phased Implementation Roadmap (`Releases 1–4`) & Feature Lifecycle Matrix

### A. Phased Roadmap *(Full 26-Module Release Mapping & MVP Split: `/TASK_1_6_DEVELOPMENT_ROADMAP_AND_ARCHITECTURE.md`)*
- **Phase 0 (`P0`) — Technical Foundation:** Architecture approval (stack pending owner sign-off), Hosting/DB, Auth/MFA/RBAC, Security/WAF, Backups/DR, Staging/Prod CI/CD, Monitoring.
- **Release 1 (MVP Public Site, Core CMS, Intake & Gated Analytics Foundation — `15` Modules):** Public `22`-page site (`P1`), Core CMS (`#1–#7, #14–#15, #22`), Enquiries Inbox (`#8` — gated until `VER-17` & Privacy clear), Privacy & Consent Centre scaffold (`#24`), and **GA4 + Google Search Console** basic analytics (`#16, #17 Basic, #18` — real-time, traffic sources, landing pages, page views, enquiry conversion counts; **strictly `OFF` in production until privacy/consent & legal controls are approved and implemented**).
- **Release 2 (Business Operations, PostHog Behaviour & Read-Only MCP — `+9` Modules -> `24/26`):** Agency Operations (`#9 CRM, #10 Proposals, #11 Projects, #12 Support Tickets/Care, #13 Invoices`), **PostHog integration** (`#17 Full, #19 Funnels/Journeys, #21 Internal Search` — session replay still `OFF` unless explicitly consented), **AI Agent Connections (`#23`)**, and **Remote MCP Server** exposing the **`15` read-only tools** to Claude/Claude Code/ChatGPT.
- **Release 3 (Knowledge Base, AI Business Intelligence & P3 Extensions — `+2` Core Modules -> `26/26`):** **Knowledge Base & Business Data Hub (`#25`)**, **AI Analytics Assistant (`#20`)** with daily/weekly/monthly digests & anomaly/SEO/CRO insights, Claude & ChatGPT BI integration, Knowledge-Base-grounded Visitor AI Assistant *(conditional)*, and evaluated P3 extensions (Client Portal, Verified Reviews `VER-12`, Consultation Booking only if Decision `#15` is revised).
- **Release 4 (Automation Studio, Controlled HITL Write Actions & `P7` Continuous Improvement):** **Workflow Automation Studio (`#26`)**, HITL-gated **controlled AI write tools** (drafts/tasks/proposals/reports/CRM diffs), advanced anomaly detection, additional AI connectors, and predictive/trend analysis **only where historical data quality statistically supports it**.

### B. Clear Lifecycle Distinction Matrix (Current Project State as of `2026-11-23`)
*(Strict Governance Rule: **`Planned ≠ Designed ≠ Implemented ≠ Tested ≠ Production-Enabled`**.)*

| Feature Area | Planned | Designed | Implemented | Tested | Production-Enabled | Current Status / Gate |
|---|:---:|:---:|:---:|:---:|:---:|---|
| Legacy Static Prototype (`src/*`, `server.ts`) | N/A | Legacy | Partial *(Legacy)* | Partial | Legacy Live Site | Contains critical bugs (`ContactSection.tsx` FormSubmit, `wrangler.jsonc` SPA soft-404, unverified claims) — untouched during Stage 1. |
| `22`-Page Option B Sitemap & Recovery Plan | **YES** | Architecture Only | **NO** | **NO** | **NO** | **`PLANNED ONLY`** — Task 1.6 `IN PROGRESS`; Stage 2 `NOT STARTED — BLOCKED`. |
| `P0–P7` Roadmap, MVP & Stack Evaluation | **YES** | Architecture Only | **NO** | **NO** | **NO** | **`PLANNED ONLY`** — Stack recommendation pending owner approval. |
| `26`-Module Admin Dashboard (`#1–#26`) | **YES** | Architecture Only | **NO** | **NO** | **NO** | **`PLANNED ONLY`** — Stage 2 functional specification. |
| GA4, GSC & PostHog Analytics Layer (Release 1–2) | **YES** | Architecture Only | **NO** | **NO** | **NO** | **`PLANNED ONLY`** — Locked `OFF` until Stage 2 + Privacy/Consent (`#24`) & Legal gates clear. |
| Privacy & Consent Centre (`#24`) & Retention Policy | **YES** | Architecture Only | **NO** | **NO** | **NO** | **`PLANNED ONLY`** — Legal/compliance implementation **`DEFERRED BY OWNER`**. |
| Remote MCP Server & `15` Read-Only Tools (`#23`) | **YES** | Architecture Only | **NO** | **NO** | **NO** | **`PLANNED ONLY`** — Release 2 target; zero active AI connections. |
| AI BI Assistant (`#20`) & Knowledge Base (`#25`) | **YES** | Architecture Only | **NO** | **NO** | **NO** | **`PLANNED ONLY`** — Release 3 target. |
| Workflow Automation Studio (`#26`) & HITL Write Tools | **YES** | Architecture Only | **NO** | **NO** | **NO** | **`PLANNED ONLY`** — Release 4 target. |

---

## 10. Development Priority Alignment (`P0–P7`)

### ৭. আমার প্রস্তাবিত Development Priority

Full implementation breakdown, MVP boundary, 11-domain technical architecture evaluation, 13 operational/security controls, and 14 SEO/migration quality gates are documented in `/TASK_1_6_DEVELOPMENT_ROADMAP_AND_ARCHITECTURE.md`:

- **P0: Technical Foundation** — Final technology stack & architecture approval, hosting/infrastructure, DB architecture, Auth/RBAC, security, backups/DR, dev/staging/prod environments, CI/CD, monitoring & error logging.
- **P1: Public Website Development** — Approved `22`-page sitemap, mobile-first responsive UI, performance & Core Web Vitals, technical SEO, Schema markup, internal linking, contact pathways, accessibility, and URL migration **only after** approved migration matrix.
- **P2: Core Admin Dashboard and CMS** — WordPress-style non-technical UI (`Dashboard Overview`, `Page/Service`, `Blog/Article`, `Portfolio/Project`, `Media Library`, `SEO Metadata`, `Redirect/410`, `Website Settings`, `User/Role`, `Activity Logs`).
- **P3: Business Management System** — Operationally necessary first (`Enquiries & Leads`, followed in Release 2 by `CRM`, `Proposals`, `Projects/Milestones`, `Invoices`, `Support Tickets/Care Plans`), deferring advanced extensions (`Client Portal`, `Booking` subject to Decision `#15`, verified `Reviews` subject to `VER-12`).
- **P4: Analytics and Intelligence** — GA4, GSC, Centralised Dashboard, Real-time, Acquisition, Landing/Exit Pages, Country/Device, separated Search Query Intelligence, Conversion Tracking, and Daily/Weekly/Monthly reports (**all tracking strictly `OFF` until privacy, consent & legal controls are approved and implemented**).
- **P5: AI Integration and Agent Connectivity** — Internal AI Assistant, Knowledge Base (`#25`), Remote MCP Server, Claude/ChatGPT connectivity, scoped allowlists, read-only default (`15` tools), human approval (`HITL`) for permitted write actions.
- **P6: Workflow Automation and Advanced Business Intelligence** — Workflow Automation Studio (`#26`), AI business reports, SEO/conversion insights, automated reporting, anomaly detection, enquiry automation, and HITL approval system.
- **P7: Continuous Improvement** — Ongoing performance, security reviews, accessibility, SEO/GEO/AIO, UX, CRO, and evidence-based feature iteration.

---

## 11. Extended Platform Alignment (`WPCP-P1.6-V05` — Decisions `#49–#51`)

*(Full Specification: `/TASK_1_6_FUTURE_AI_AGENCY_PLATFORM_STRATEGY.md` — **`PLANNED ONLY`**)*

1. **Tenant-Isolated Dual Architecture (`Decision #49`):** Future **Customer-Facing SaaS** workloads (`Release 4+ / Future SaaS`) require strict `tenant_id` separation across MCP tokens (`#23`), Knowledge Base / RAG indices (`#25`), Analytics Integration Layer queries (`#16–#21`), credentials, files, billing, and audit logs (`#22`) so WPCarePoint's internal agency workspace and external customer workspaces remain strictly isolated.
2. **`12` Logical AI Agents & `5`-Tier Human Approval (`Decisions #50–#51`):** All `12` logical agent capabilities (`Website Audit`, `SEO/GEO/AIO`, `Design/Rebuild`, `Digital Marketing`, `Content Intelligence`, `Dev/Bug Fix`, `Business Growth`, `Customer Support`, `Automation`, `AI Orchestrator`, `Security Review`, `QA Agent`) operate as scoped profiles over `#20`, `#23`, `#25`, `#26`—not `12` separate services—enforcing `Public Audit -> Verified Audit -> Read-Only Connected -> Authorised Staging -> Human-Approved Production` (`9`-item pre-prod approval package) and SSRF/DNS-rebinding isolation for submitted customer URLs.
3. **Blog Content Performance & Intelligence (`#3` + `#6` + `#18`/`#19`):** Integrates regular editorial planning (`Draft -> AI Review -> Editorial Review -> Owner Approval -> Scheduled -> Published -> Performance Review`), verified search impressions/clicks/CTR/position/landing conversion tracking (distinguishing verified analytics from AI estimates), and quarterly content refresh/repurposing workflows without creating a `27`th module.
