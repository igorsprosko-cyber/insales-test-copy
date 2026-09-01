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
- Created `docs/FIGMA_VELES_LEGS_CODE_MAP.md` with concrete mappings.
- Created `docs/FIGMA_VELES_LEGS_AUDIT_STATUS.md` to record audit scope and verification limits honestly.
- Identified real system conflicts: `#5E8C31` vs `#76BC21`, Montserrat/Playfair vs PT Root UI/Roboto, local page styles vs global `theme.scss` rules.
- Confirmed protected areas: `main`, `V2.1_HOME_APPEND.liquid`, calculator DOM/business logic, and platform widget behavior.

### 2026-08-31 — History-reading and continuity rule

- Re-read `ИСТОРИЯ_РАБОТ.md` from the current working branch before further project work.
- Treated `ИСТОРИЯ_РАБОТ.md` as project context and `FIGMA_VELES_LEGS_WORKLOG.md` as the branch's own work archive.
- Established append-only history maintenance for every substantive task in `Figma-VELES-LEGS`.
- Required task scope, files, commit SHA, verification status and deferred items to be recorded.

### 2026-08-31 — Reconciliation against governing project files

- Re-read `my-first-project/AGENTS.md`, `PROJECT.md`, `ARCHITECTURE.md`, `STYLE_GUIDE.md`, `CONTRIBUTING.md`, `SITE_MAP.md`, `TASKS.md`, and `STABILITY_AUDIT.md`.
- Corrected the Figma approach: Figma is a visual contract/design-system representation, not a parallel implementation architecture and not a replacement for InSales widgets/data or business logic.
- Strengthened shared-component-first mapping for Product Card, Button, Price, Breadcrumb, Filter, Pagination, Quantity Control, Specifications, Page Frame and Shell.
- Explicitly preserved calculator and cart VAT/invoice logic.
- Rewrote the Figma/code map into a working source-derived map and updated audit status.
- Verification: `VERIFIED` for repository-side documentation writes; runtime/browser behavior remains outside this step.

### 2026-09-01 — InSales documentation and foundation preparation

- Reviewed official InSales documentation relevant to theme architecture, layouts, widgets, Liquid, Common.js/EventBus, settings/configuration and runtime behavior.
- Added the dedicated `docs/insales-reference/` reference layer with official source links and concise project-specific notes rather than mirroring copyrighted documentation verbatim.
- Added Common.js/EventBus and widget development contracts for future Product Card work.
- Created `docs/FIGMA_VELES_LEGS_FOUNDATIONS_SPEC.md` with code-derived Foundations requirements.
- Created `docs/FIGMA_VELES_LEGS_RUNTIME_QA_PLAN.md` defining runtime evidence requirements.
- Created Figma file `VELES LEGS — Design System` at `https://www.figma.com/design/uh8Bu4poOyvAxUWZRfbR0T`.
- Attempted initialization of Figma `00 Foundations`; Figma file creation succeeded, but read-back showed only `Page 1`, so the requested Foundations structure cannot currently be marked verified. Status: `PARTIALLY VERIFIED`.
- Refined the Foundations spec so its authority order explicitly follows `AGENTS.md` → `STYLE_GUIDE.md` → project architecture → current code → official InSales documentation → Figma visual contract.
- Commits associated with this stage include `8ada130866230a7d67ea427e419675fac92c3cd3`, `cbc7727e969b9a3238e921432f0464ee9c2e4274`, `f4932232644331e3ac1fe7d983bd9948a3b12bcf`, `45dd0f591978be80ad908bc6a2ffb255e80140cb`, `57058fb16d4def219ff28ee8299ff0c4aad9cabf`, `3712d96ae4b3271928d27dabfca74c5d20f7c3ca`.
- Verification: GitHub documentation writes are confirmed by returned commit SHAs. Figma creation is confirmed by its file key/URL; node-level structure remains `PARTIALLY VERIFIED`.

### 2026-09-01 — Autonomous continuation

- Continued the project autonomously as requested; no production site template was changed.
- Added/maintained the code-derived Foundations specification and runtime QA preparation so Figma work can continue without losing architectural context.
- Official InSales reference was incorporated into the working model: themes combine templates/layouts/widgets/Liquid/CSS/JS/configuration, while Common.js/EventBus and widget contracts must be treated as runtime dependencies.
- Decision: do not force unresolved platform tokens into code while Figma is being prepared; document conflicts first and resolve them deliberately.

## Current state

The branch contains the Figma architecture, repository-derived design-to-code map, governing-project reconciliation, official InSales reference material, Foundations specification, runtime QA plan and a Figma design-system file.

The next implementation order is:

1. Re-attempt/read back Figma `00 Foundations` when write/read access allows it.
2. Resolve semantic token conflicts explicitly (`#5E8C31` vs `#76BC21`; Montserrat/Playfair vs platform/default exceptions).
3. Define canonical Shell/Header/Footer.
4. Define canonical Product Card from actual InSales widget contract.
5. Define Product Page and Catalog/Collection compositions.
6. Define Home as visual reference while protecting calculator internals.
7. Standardize Cart visually without touching VAT/invoice business logic.
8. Convert Search/Favorite/Compare into listing states.
9. Standardize Blog/Article/Content pages.
10. Verify desktop/mobile runtime against approved Figma states.

## Verification policy

Do not claim `VERIFIED` without direct evidence. The execution environment could not perform a local `git clone` because external DNS/network resolution was unavailable. Binary archive internals and a byte-for-byte checkout of every repository file therefore remain outside the verified scope. GitHub-exposed source/config/documentation and official InSales documentation are the factual basis of the current map/reference.

## Change policy

This branch is the workspace for the Figma-driven VELES LEGS standardization effort. Keep unrelated fixes out of this branch. Preserve the existing baseline and make each visual/architectural change traceable through commits.

## History maintenance rule

`FIGMA_VELES_LEGS_WORKLOG.md` is a living archive. Every substantive action by ChatGPT/other agents in this branch must be recorded as a new dated entry. At minimum record: task, factual findings, files created/changed, commit SHA(s), verification status, and any deferred/out-of-scope items. Keep history append-only and traceable.
