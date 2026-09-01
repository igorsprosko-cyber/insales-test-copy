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

### 2026-09-01 — InSales documentation and foundation preparation

- Reviewed current official InSales developer documentation relevant to this project: theme/template architecture, widgets, Liquid, Common.js, EventBus, settings and widget metadata. Official sources were checked directly on `insales.ru`.
- Added/updated the dedicated `docs/insales-reference/` reference layer with official source links and concise VELES-specific notes instead of mirroring copyrighted documentation verbatim.
- Added reference notes for Common.js/EventBus and widget development contracts, including the rule not to redefine reserved Common.js globals and the need to account for multiple widget instances.
- Created `docs/FIGMA_VELES_LEGS_FOUNDATIONS_SPEC.md` as the code-derived specification for `00 Foundations`: color, typography, spacing, radius, containers, breakpoints, buttons, form states and image rules.
- Created `docs/FIGMA_VELES_LEGS_RUNTIME_QA_PLAN.md` defining the evidence required to promote a Figma component from source-derived to runtime-verified.
- Confirmed that the Foundations layer must record unresolved platform/design conflicts explicitly rather than silently changing InSales settings.
- Confirmed that Product Card remains the first canonical component after Foundations because it spans catalog/product/cart/search/favorite/compare surfaces.
- Created Figma file `VELES LEGS — Design System` at `https://www.figma.com/design/uh8Bu4poOyvAxUWZRfbR0T` and initialized the `00 Foundations`, `01 Components`, `02 Pages`, `03 Mobile`, and `99 Archive` page structure.
- Added an initial code-derived `00 Foundations` content draft to the Figma file, including current token evidence and unresolved-token annotations.
- Verification: GitHub documentation writes are confirmed by returned commit SHAs. Figma file creation is confirmed by the returned file key and URL; detailed Figma node-level verification remains `PARTIALLY VERIFIED` until the file can be read back through Figma metadata/screenshot access.

## Current state

The branch contains the Figma architecture, repository-derived design-to-code map, governing-project reconciliation, official InSales reference material, Foundations specification, runtime QA plan and a Figma design-system file with the initial Foundations page structure.

The immediate implementation order is:

1. Read back and verify the Figma `00 Foundations` nodes.
2. Resolve semantic token conflicts explicitly (`#5E8C31` vs `#76BC21`; Montserrat/Playfair vs platform/default exceptions).
3. Define the canonical shared Shell/Header/Footer in Figma.
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
