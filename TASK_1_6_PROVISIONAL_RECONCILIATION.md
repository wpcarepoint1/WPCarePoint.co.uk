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
| 3 | `/wordpress-security-emergency-support/` | 75 | Unavailable | No | Yes (`2026-02-15`) | High-Imp core URL missing from `305` Indexed | **Preserve** (Live indexation check + Manual Review) |
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
