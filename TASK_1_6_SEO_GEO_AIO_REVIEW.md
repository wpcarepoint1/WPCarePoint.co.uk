# Task 1.6 — SEO, GEO and AIO Service Architecture Review

**Audit Date:** 2026-11-23  
**Reviewed URLs:**
- `/services/search-engine-optimisation`
- `/services/generative-engine-optimisation`
- `/services/ai-search-optimisation`

**Brand Context:** **WPCarePoint** — Hybrid Digital Agency (*Web Development, eCommerce & AI Solutions Agency*; *"Building, improving and supporting digital businesses."*), Category 5: **SEO & AI Search Optimisation**.  
**Governance:** Preserves Owner Decisions `#1–#33`, keeps `VER-15` `BLOCKED` (`Pages.csv` missing), keeps `Not Indexed Pages = SKIPPED BY OWNER`, keeps `Links = No Data`, locks **zero** final `301`/`410` decisions, leaves all application code/live website untouched, and keeps **`Stage 2 = NOT STARTED — BLOCKED`**.

---

## 1. Current State Evidence in Codebase, GSC & `VER-20`

1. **Workspace Copy Overlap (`src/data/servicePagesData.ts`, lines `467–732`):**
   - All three pages sit under `02. SEO, GEO & AI Search Visibility` and cross-link each other.
   - `generative-engine-optimisation` (`From £750 / mo`) and `ai-search-optimisation` (`From £750`) pitch nearly identical UK B2B outcomes ("get cited in ChatGPT, Gemini, Google AI Overviews, Perplexity & Claude") and repeat deliverables (`Schema.org / Entity JSON-LD`, `answer-first HTML`, `/llms.txt`, `robots.txt`, `canonical pages`, `prompt testing`).
   - Traditional `search-engine-optimisation` (`From £650 / mo`) also claims `Schema.org JSON-LD`, `XML sitemaps`, `Core Web Vitals`, and `Commercial Intent Page Mapping` — overlapping technical foundations claimed again in GEO and AIO.
2. **GSC Demand & Historical Evidence:**
   - **Wayback `766`-path baseline:** **0** historical URLs for `/services/search-engine-optimisation`, `/services/generative-engine-optimisation`, or `/services/ai-search-optimisation`. Only `/wordpress-seo-speed-optimization/` (plus `/blog/category/wordpress-seo/`) existed pre-hack.
   - **Confirmed `305` `Indexed Pages` (`2026-11-16`):** **0** of the three `/services/*` visibility pages appear in the `305` Indexed list (even though `public/sitemap.xml` listed all three on `2026-11-21`, while live `hreflang="en-gb"` pointed `/services/*` back to `/`).
   - **Reconstructed `56`-row CSV (`VER-15` `BLOCKED`):** **0** impressions recorded for any of the three `/services/*` SEO/GEO/AIO pages (`2` reconstructed impressions on legacy `/wordpress-seo-speed-optimization/`). Original `Pages.csv` and `Queries.csv` remain missing (`VER-15` `BLOCKED`), and `Links = No Data`.
3. **`VER-20` Capability Reality (`/TASK_1_6_VER_20_CAPABILITY_REPORT.md`):**
   - **Technical SEO (`#11`):** `OWNER CONFIRMATION REQUIRED` (plausible historical/audit foundation, repo bugs require fixing).
   - **GEO (`#12`) & AIO (`#13`):** Both **`NOT VERIFIED`** (`0` verified client engagements or citation results; only self-hosted `public/llms.txt` template containing unverified claims). Separate commercial terminology alone does not justify launching two unverified £750 pages.

---

## 2. Side-by-Side Comparison: Option A vs Option B

| Evaluation Criterion | Option A: Three Separate Pages (`/search-engine-optimisation`, `/generative-engine-optimisation`, `/ai-search-optimisation`) | Option B: Two Pages (`/search-engine-optimisation` + Consolidated AI Search / GEO Page) |
|---|---|---|
| **Search Intent Differences** | Forces an artificial split between *"entity/AI Overviews optimisation (GEO)"* and *"ChatGPT/Gemini/Claude crawler optimisation (AIO)"*. UK buyers rarely separate these into two distinct purchasing decisions. | Clean two-intent split: **(1)** Google UK Technical, Content & WordPress SEO vs **(2)** AI Search & Generative Visibility (AI Overviews, ChatGPT, Gemini, Claude). |
| **Keyword Overlap** | **High risk.** `GEO` vs `AIO` vs `AI Search Optimisation` vs `AI Overviews SEO` compete for the same semantic cluster on a recovering domain with `Links = No Data`. | **Low / Controlled.** Traditional SEO targets WordPress/Technical/On-page SEO terms; the consolidated page captures all AI Search, GEO & LLM citation terms without internal self-competition. |
| **Actual Service Deliverables** | Splits closely coupled engineering tasks (`JSON-LD Schema` + `SSR/HTML semantics` on GEO vs `/llms.txt` + `robots.txt` on AIO) into two thin offerings. | **Cohesive technical deliverable:** Technical/Content SEO in Service 1; full AI Discoverability stack (Entity Schema + Answer Architecture + `/llms.txt` + AI crawler `robots.txt` governance) in Service 2. |
| **Customer Expectations** | Confuses UK SME buyers ("Why are there two separate £750 AI search packages alongside SEO?"). | Immediately clear to SME & B2B buyers: core SEO for Google search rankings, plus a unified AI Search & GEO layer for answer engines. |
| **Internal Linking Opportunities** | Circular horizontal links among 3 visibility pages dilute authority and push users back and forth without a clear commercial next step. | Stronger hub-and-spoke flow: `SEO` ↔ `AI Search & GEO` ↔ `WordPress Speed / Design` ↔ `Technical Content / Guides` ↔ `/contact`. |
| **Content Duplication Risks** | **High.** Already visible in `servicePagesData.ts` lines `556–732` (repeated Schema, semantic HTML, dedicated canonical URL, and citation claims). | **Low.** Distinct scopes: crawlability/rankings/migrations/CWV (`SEO`) vs machine-readability/entities/AI crawler access (`AI Search & GEO`). |
| **Existing GSC Demand Evidence** | `0` indexed entries and `0` reconstructed impressions for both `GEO` and `AIO`; unverified demand (`VER-15 BLOCKED`). Cannot justify splitting thin demand across 2 pages. | Concentrates any emerging UK `AI Search` + `GEO` demand onto a single stronger canonical URL rather than splitting zero-link equity (`Links = No Data`). |
| **`VER-20` Delivery Capability** | Exposes **two** unverified standalone offerings (`NOT VERIFIED`) at launch, increasing compliance/anti-fabrication risk. | Reduces unverified surface area; allows conservative, honest framing of technical discoverability (Schema + `/llms.txt` + bot rules) — or clean Phase 2 hold — pending `VER-20` owner proof. |
| **Long-Term Scalability** | Bloats the `23`-page sitemap early before demand or case studies exist. | Starts lean (`22` planned pages / `1` unified Category 5 AI page), and can cleanly spin out a dedicated sub-page later only if real GSC demand and `VER-20` client proof warrant it. |

---

## 3. Recommended Architecture (With Evidence)

**Recommendation: Adopt `Option B` (Two Service Pages under Category 5: SEO & AI Search Optimisation)** — subject to owner approval to amend Decision `#2` (reducing the `10` `/services/*` supporting pages to `9` active Category/Supporting slugs, moving the planned sitemap from `23` to `22` pages) and completing `VER-20` capability verification:

1. **Page 1 (Independent Core Pillar): `/services/search-engine-optimisation`**
   - **Role:** Technical SEO, On-Page & Content Optimisation, WordPress SEO, Crawl/Index Hygiene, Core Web Vitals SEO Alignment, and Migration SEO Protection.
   - **Evidence Backing:** Directly aligns with WPCarePoint's WordPress core history, historical `/wordpress-seo-speed-optimization/` (`2` Imp), and Task 1.6 GSC/migration expertise (`OWNER CONFIRMATION REQUIRED` under `VER-20`).
2. **Page 2 (Consolidated GEO + AIO Pillar): `/services/ai-search-optimisation`** *(recommended canonical over `/generative-engine-optimisation` because "AI Search Optimisation" uses clearer UK commercial terminology while naturally encompassing GEO)*
   - **Role:** Unified **AI Search & Generative Engine Optimisation (GEO & AIO)** — Entity Schema.org graphs, answer-first structured content, pre-rendered semantic HTML, `/llms.txt` specification, and AI crawler governance (`robots.txt` for `OAI-SearchBot`, `ClaudeBot`, `Google-Extended`, `PerplexityBot`).
   - **Strict `VER-20` Honesty Rule:** Do **NOT** publish unverified citation claims, fabricated client case studies, or ChatGPT/Gemini/Claude recommendation guarantees. If owner confirms only basic on-site Schema/`/llms.txt` technical implementation (no proven client AI-citation retainers yet), either launch Page 2 with strictly technical, factual deliverables (no pricing/guarantees) **or** keep it unpublished (`noindex`) until `VER-20` delivery capability is confirmed.

---

## 4. Proposed Page Titles, Search Intent & Keyword Mapping (Option B)

### Page 1: `/services/search-engine-optimisation`
- **Proposed Title (`<title>` / H1):** `Technical SEO, Content & WordPress SEO Services (UK) | WPCarePoint`
- **Primary Search Intent:** Commercial investigation / Service hire (`en-GB`) — UK businesses looking to fix technical indexing issues, recover organic visibility, optimise WordPress SEO structure, and grow search rankings.
- **Primary Keywords:** `technical SEO agency UK`, `WordPress SEO services UK`, `technical SEO audit UK`
- **Secondary Keywords:** `on-page SEO optimisation`, `website migration SEO`, `Core Web Vitals SEO`, `XML sitemap and canonical SEO`, `WordPress content optimisation`

### Page 2 (Consolidated): `/services/ai-search-optimisation`
- **Proposed Title (`<title>` / H1):** `AI Search & Generative Engine Optimisation (GEO & AIO) | WPCarePoint`
- **Primary Search Intent:** Emerging commercial & technical implementation (`en-GB`) — UK businesses wanting structured entity architecture, `/llms.txt`, and AI crawler governance so Google AI Overviews, ChatGPT, Gemini, and Claude interpret their brand accurately.
- **Primary Keywords:** `AI search optimisation agency UK`, `generative engine optimisation UK`, `GEO and AIO services`
- **Secondary Keywords:** `Google AI Overviews optimisation`, `llms.txt implementation UK`, `Schema.org entity optimisation`, `ChatGPT Gemini Claude search visibility`, `AI crawler governance robots.txt`

*(Contrast: Under Option A, those secondary keywords split awkwardly across two weak pages; Option B captures the entire modern AI discovery cluster cleanly on one authoritative page.)*

---

## 5. Internal Linking Recommendations (Category 5 Integration)

- **From Homepage (`/`) & `/services` Hub:** Link Category 5 (**SEO & AI Search Optimisation**) prominently to `/services/search-engine-optimisation` and (when active) `/services/ai-search-optimisation`.
- **Bidirectional Sibling Links (2-Page Model):**
  - `/services/search-engine-optimisation` → contextual link to `/services/ai-search-optimisation` (*"Preparing your technical foundation for AI answer engines? See our GEO & AI Search readiness architecture"*) + `/wordpress-speed-optimisation` (*CWV engineering*) + `/wordpress-maintenance-support` (*ongoing crawl/uptime health*).
  - `/services/ai-search-optimisation` → prerequisite link back to `/services/search-engine-optimisation` (*"Technical SEO & clean crawl architecture are the prerequisite for reliable AI citations"*) + `/services/website-development` (*pre-rendered semantic HTML*).
- **WordPress Service Cross-Links:** `/wordpress-design-development` and `/woocommerce-development` link to `/services/search-engine-optimisation` for post-launch technical SEO & Product Schema alignment — preventing creation of a separate duplicate `/wordpress-seo` page.
- **Editorial Hub (`/guides/` — if pre-hack posts recovered later):** Recovered SEO guides (e.g., `/blog/niche-authority-building-on-wordpress-uk/`, `5` Imp in reconstructed Performance) link directly into `/services/search-engine-optimisation`.

---

## 6. URL Preservation & Migration Considerations (Non-Final — Hold Until Owner Approval & `VER-15`)

- **Do NOT lock any final `301` or `410` rule yet** (`VER-15` `Pages.csv` is still `BLOCKED`). Preserve all final decisions until original GSC evidence & owner approval are complete:
  1. **`/services/search-engine-optimisation`:** Preserve unchanged (`200` canonical) under both Option A and Option B.
  2. **`/services/ai-search-optimisation` & `/services/generative-engine-optimisation`:**
     - Currently listed in `public/sitemap.xml` (`2026-11-21`), though **neither** appeared in `305` `Indexed Pages` (`2026-11-16`) or `766` Wayback (`0` historical equity).
     - Under **Option B**, keep `/services/ai-search-optimisation` as the canonical URL and evaluate a single-hop `301` from `/services/generative-engine-optimisation` -> `/services/ai-search-optimisation` (or `404`/`410` if GSC URL Inspection confirms `/services/generative-engine-optimisation` was never indexed or externally linked — `Links = No Data`).
  3. **`/wordpress-seo-speed-optimization/` (`2` Imp in reconstructed Performance; in `766` Wayback):**
     - Historical combined SEO + Speed page. **Provisional candidates (pending `Pages.csv` & `Queries.csv`):** route to `/wordpress-speed-optimisation` (if speed-query heavy) OR `/services/search-engine-optimisation` (if SEO-query heavy). Do **not** lock until `VER-15` is unblocked.

---

## 7. Questions Requiring Owner Approval

1. **Architecture Choice (`Option A` vs `Option B`):** Do you approve consolidating `GEO` and `AIO` under **Option B (Two Service Pages)** — amending Decision `#2` to merge `/services/generative-engine-optimisation` into `/services/ai-search-optimisation` — or do you require keeping all three separate under **Option A**?
2. **Preferred Canonical Slug for Option B:** If Option B is approved, do you confirm **`/services/ai-search-optimisation`** as the canonical URL (with `/services/generative-engine-optimisation` planned for single-hop `301` redirection if previously crawled/indexed), or would you prefer `/services/generative-engine-optimisation` as canonical?
3. **`VER-20` Launch Framing for Consolidated GEO/AIO:** Since GEO and AIO are currently **`NOT VERIFIED`** in `VER-20` (`0` client deliverables), should the consolidated AI Search page:
   - *(a)* Launch in Stage 2 strictly scoped around factual technical implementation (Entity Schema, semantic HTML, `/llms.txt`, `robots.txt` crawler rules — zero citation guarantees or unverified metrics), **OR**
   - *(b)* Remain unpublished (`noindex` / future expansion) until real client GEO/AIO case outcomes exist?
4. **Legacy `/wordpress-seo-speed-optimization/` Target:** Once `Pages.csv` / `Queries.csv` (`VER-15`) is verified, confirm whether historical `/wordpress-seo-speed-optimization/` should target `/wordpress-speed-optimisation` or `/services/search-engine-optimisation`.
