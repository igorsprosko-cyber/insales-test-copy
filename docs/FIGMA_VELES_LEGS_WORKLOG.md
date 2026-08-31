# VELES LEGS — Figma Work Archive

## Project

Repository: `igorsprosko-cyber/insales-test-copy`

Base: `v2.3-page-standardization-final2`
Working branch: `Figma-VELES-LEGS`

## Worklog

### 2026-08-31 — Initial architecture

- Created dedicated branch `Figma-VELES-LEGS` from `v2.3-page-standardization-final2`.
- Established the role of Figma as the visual/design-system layer for VELES LEGS.
- Defined the separation between design, implementation and runtime data.
- Added the planned Figma page/component architecture.
- Defined the implementation mapping between Figma objects and Liquid/CSS/InSales.
- Defined responsive-design and visual-QA rules.
- Defined the recommended implementation sequence.

### 2026-08-31 — Factual repository-to-Figma audit

- Audited the actual VELES LEGS implementation files exposed by GitHub in `insales-test-copy`.
- Cross-checked project governance/context from `my-first-project`.
- Confirmed `foto-redaktor` is a separate support project, not part of the InSales runtime chain.
- Created `docs/FIGMA_VELES_LEGS_CODE_MAP.md` with concrete mappings:
  `Figma Component → Liquid → CSS → JS → InSales Widget/Data → Status → Preserve/Redesign`.
- Created `docs/FIGMA_VELES_LEGS_AUDIT_STATUS.md` to record audit scope and verification limits honestly.
- Identified real system conflicts requiring deliberate design-token resolution: `#5E8C31` vs `#76BC21`, Montserrat/Playfair vs PT Root UI/Roboto, local page styles vs global `theme.scss` rules.
- Confirmed protected areas: `main`, `V2.1_HOME_APPEND.liquid`, calculator DOM/business logic, and platform widget behavior.

### 2026-08-31 — History-reading and continuity rule

- Re-read `ИСТОРИЯ_РАБОТ.md` from the current working branch before further project work.
- Treated `ИСТОРИЯ_РАБОТ.md` as the project history/context source and `FIGMA_VELES_LEGS_WORKLOG.md` as this branch's own work archive.
- Going forward, every substantive task performed in `Figma-VELES-LEGS` must append a dated entry to the work archive, including scope, files affected, commit SHA when a write occurs, verification status, and important decisions/findings.
- Do not replace or rewrite historical entries merely to summarize them; append new dated entries so the sequence remains traceable.
- When an operation cannot be verified, record `PARTIALLY VERIFIED`, `NOT VERIFIED`, `WRITE NOT AVAILABLE`, `READ FAILED`, or `RUNTIME NOT AVAILABLE` as appropriate instead of claiming completion.

### 2026-08-31 — Reconciliation against governing project files

- Re-read and compared the Figma/code work against `my-first-project/AGENTS.md`, `PROJECT.md`, `ARCHITECTURE.md`, `STYLE_GUIDE.md`, `CONTRIBUTING.md`, `SITE_MAP.md`, `TASKS.md`, and `STABILITY_AUDIT.md`.
- Corrected the Figma approach: Figma is a visual contract and design-system representation, not a parallel implementation architecture and not a replacement for InSales widgets/data or business logic.
- Strengthened the reuse rule: Product Card, Button, Price, Breadcrumb, Filter, Pagination, Quantity Control, Specifications, Page Frame and Shell are mapped as shared components before page-specific variants.
- Explicitly documented that local/global CSS overlap is a consolidation target, not permission for mass refactoring.
- Explicitly preserved the protected calculator and cart VAT/invoice logic.
- Rewrote `docs/FIGMA_VELES_LEGS_CODE_MAP.md` into a complete working map covering foundations, shell, Home, Product, Collection/Catalog, Cart, Search, Favorites, Compare, Blog, Article, Content, Checkout/Account, SEO and InSales configuration.
- Updated `docs/FIGMA_VELES_LEGS_AUDIT_STATUS.md` with the reconciliation and the corrected next-step decision.
- Commits created by this reconciliation: `3db8e660fc30af2404c27a1c41f9a13cff3200af` (code map) and `3176f07da07dd383711951f0eee9d7aa5a2b209a` (audit status).
- Verification: `VERIFIED` for the repository-side documentation writes returned by GitHub; runtime/browser behavior remains outside this step.

### 2026-08-31 — InSales documentation reference

- Reviewed the current official InSales documentation catalog and developer-facing sections relevant to VELES LEGS: theme architecture, layouts, widgets, Liquid, Core.css, Common.js/EventBus, API/data model, settings/configuration and runtime/SEO.
- Added `docs/insales-reference/` as a dedicated project reference folder.
- Added concise project-specific reference notes and an official-source catalog rather than mirroring the full copyrighted documentation verbatim.
- Added: `README.md`, `01-template-architecture.md`, `02-widgets.md`, `03-liquid.md`, `04-core-css.md`, `05-javascript.md`, `06-api-and-data.md`, `07-settings-and-config.md`, `08-seo-and-runtime.md`, `09-veles-application.md`, `SOURCES.md`.
- Confirmed from official InSales documentation that themes combine templates, layouts, widgets, Liquid, Core.css/CSS variables, JavaScript/Common.js and configuration; this directly informs the Figma-to-code map.
- Confirmed that Core.css and widget settings can affect runtime presentation through CSS variables, so Figma tokens must be reconciled with the platform layer rather than replacing it blindly.
- Confirmed Common.js/EventBus and widget DOM behavior as relevant runtime contracts for the future Product Card bridge.
- Commits for the reference folder were created sequentially by GitHub: `cd568734e78c41eede2bcc8843d22d8e9267e79e`, `d93016dc37fe950935d2c50c38799f7219350c19`, `90b37378773d571bb497f69fdd3cc8643086df14`, `cebdf10311e2e55a4561ad913b457bc70c3bd73e`, `9af38723f09772218386dd361aef44ec078c6464`, `35d0b1ae2a08eb1d5eed34aa04b88f0f342b6d78`, `f0f229f1d82ee316167a062faca1e68f2df5a643`, `7bd502c553a4dcbc577b0b834997fd8a24a09f3f`, `2438eed6c2dc9dfbdd41f6f1f7ecbf337d2fc8fa`, `d294e680305b3a56c217d5320c6bdfb2ee4c0547`, `7cc72fe3d64b5521bd5ac61d48bac513b25d2b14`.
- Verification: `VERIFIED` for the GitHub file creation operations returned successfully. Official documentation content remains externally hosted and should be rechecked before platform-sensitive changes.

## Current state

The branch contains the Figma architecture, repository-derived design-to-code map, governing-project reconciliation and a dedicated InSales development reference.

The next implementation order is:

1. Build `00 Foundations` in Figma from the verified VELES tokens and the InSales/Core constraints.
2. Resolve semantic token conflicts explicitly (`#5E8C31` vs `#76BC21`; Montserrat/Playfair vs platform/default exceptions) without changing theme settings prematurely.
3. Define the canonical shared Shell/Header/Footer.
4. Define the canonical Product Card from the actual InSales widget contract.
5. Define Product Page and Catalog/Collection compositions.
6. Define Home as the visual reference while protecting calculator internals.
7. Standardize Cart visually without touching VAT/invoice business logic.
8. Convert Search/Favorite/Compare into listing states using shared components.
9. Standardize Blog/Article/Content pages.
10. Verify desktop/mobile runtime against approved Figma states.

## Verification policy

This work follows the project requirement: do not claim `VERIFIED` without direct evidence. The current environment could not perform a local `git clone` because external DNS/network resolution was unavailable. Therefore binary archive internals and a byte-for-byte checkout of every repository file remain outside the verified scope; GitHub-exposed source/config/documentation and the official InSales documentation pages are the factual basis of the current map/reference.

## Change policy

This branch is the workspace for the Figma-driven VELES LEGS standardization effort. Keep unrelated fixes out of this branch. Preserve the existing baseline and make each visual/architectural change traceable through commits.

## History maintenance rule

`FIGMA_VELES_LEGS_WORKLOG.md` is a living archive. Every substantive action by ChatGPT/other agents in this branch must be recorded as a new dated entry. At minimum record: task, factual findings, files created/changed, commit SHA(s), verification status, and any deferred/out-of-scope items. Keep history append-only and traceable.
