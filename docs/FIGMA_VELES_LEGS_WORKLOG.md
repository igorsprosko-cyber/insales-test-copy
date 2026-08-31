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

## Current state

The branch now contains the initial architecture plus a factual source-to-design mapping. No production template has been replaced as part of the Figma audit.

The immediate implementation order is:

1. Resolve Foundations/token conflicts in the Figma layer.
2. Define the canonical shared Shell/Header/Footer.
3. Define the canonical Product Card from the actual InSales widget structure.
4. Define Product Page and Catalog/Collection page compositions.
5. Define Home as the visual reference while protecting calculator internals.
6. Standardize Cart without touching its VAT/invoice business logic.
7. Propagate the system to Search/Favorite/Compare/Blog/Article/Content pages.
8. Verify desktop/mobile runtime against the approved Figma states.

## Verification policy

This work follows the project requirement: do not claim `VERIFIED` without direct evidence. The current environment could not perform a local `git clone` because external DNS/network resolution was unavailable. Therefore binary archive internals and a byte-for-byte checkout of every repository file remain outside the verified scope; GitHub-exposed source/config/documentation is the factual basis of the current map.

## Change policy

This branch is the workspace for the Figma-driven VELES LEGS standardization effort. Keep unrelated fixes out of this branch. Preserve the existing baseline and make each visual/architectural change traceable through commits.

## History maintenance rule

`FIGMA_VELES_LEGS_WORKLOG.md` is a living archive. Every substantive action by ChatGPT/other agents in this branch must be recorded as a new dated entry. At minimum record: task, factual findings, files created/changed, commit SHA(s), verification status, and any deferred/out-of-scope items. Keep history append-only and traceable.
