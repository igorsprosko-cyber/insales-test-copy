# VELES LEGS — Figma Work Archive

## Project

Repository: `igorsprosko-cyber/insales-test-copy`

Current implementation base: `v2.3-page-standardization-final2`
Figma workstream branch: `Figma-VELES-LEGS` (historical/workstream context only; not current code authority)

## Worklog

(Existing historical entries preserved unchanged.)

### 2026-09-08 — PATCH #2 SPECIFICATION + REPOSITORY STRESS AUDIT

**Status:** documentation/planning only. No production/runtime code changed.

## A. PATCH #2 — RESPONSIVE IMAGE DELIVERY

**State: LOCKED / NOT AUTHORIZED.** Patch #2 must remain locked until Patch #1 has passed its diff and runtime evidence gates and the result has been recorded.

**Purpose:** investigate whether homepage images are delivered at a materially larger resolution/byte size than their rendered size, without mixing this question with Patch #1's loading-priority experiment.

**Target causal node:** responsive image selection (`srcset` / `sizes`) and, only if supported by actual InSales asset capabilities, equivalent responsive delivery.

**Likely target surface:** homepage image tags in `index.liquid`, including `vl-v2-hero-card-photo` and `vl-v2-category-photo` resources. Exact syntax is NOT pre-approved until the platform's supported image-resizing/file URL mechanism and the actual asset dimensions are verified.

**Patch #2 is NOT allowed to:**
- change image files or recompress assets;
- change image URLs by guesswork;
- invent width/height values;
- add preload;
- change `loading`/`fetchpriority` decisions from Patch #1;
- modify CSS, JS, fonts, analytics or widgets;
- touch calculator, VAT/NDS, business logic or Metal Routing;
- modify more than the explicitly locked image-delivery surface.

**Prerequisites before unlocking:**
1. Patch #1 result recorded as KEEP or REVERT.
2. Actual intrinsic dimensions of the target assets established.
3. Actual rendered dimensions at relevant viewport classes established.
4. InSales-supported responsive image URL/filter behavior verified from the project's official reference/runtime evidence.
5. Exact `srcset` candidate widths and `sizes` logic derived from evidence, not invented.

**Success evidence:** network requests demonstrate that appropriate image candidates are selected for the viewport without broken images, visual degradation, increased CLS, or loss of LCP performance. A smaller HTML string or PageSpeed score alone is insufficient.

## B. FULL REPOSITORY / DEPENDENCY STRESS AUDIT — READ-ONLY

**Scope audited:** all repositories currently accessible to the project account, all visible branches, repository trees, current working branch structure, architecture documents, source/documentation relationships, and known binary/archive boundaries.

### Repository inventory

1. `igorsprosko-cyber/insales-test-copy` — primary/current implementation repository.
2. `igorsprosko-cyber/my-first-project` — original architecture/rules/reference repository.
3. `igorsprosko-cyber/foto-redaktor` — separate support/tool repository; no repository-search evidence of a VELES dependency.

### Branch inventory

`insales-test-copy` currently exposes: `main`, `v2.3-page-standardization-final2`, `Figma-VELES-LEGS`, `codex-ready`.

`my-first-project` exposes `main` only.

`foto-redaktor` exposes `main` only.

### Confirmed branch separation

`v2.3-page-standardization-final2` is the only current implementation/code source. `Figma-VELES-LEGS` is divergent and contains the Figma/documentation workstream; it is not a current code source. The comparison confirms the Figma branch is diverged from `final2` rather than being a synchronized current implementation branch. Therefore agents must not merge or copy code from it merely because documentation exists there.

### Important documentation inconsistency discovered

`ZERO-POINT.md` had recorded an older documentation HEAD value. It has now been reconciled: the actual current branch HEAD is authoritative, while the recorded code baseline remains separate. This was documentation-only and did not change production/runtime code.

The top of `FIGMA_VELES_LEGS_WORKLOG.md` now explicitly labels `Figma-VELES-LEGS` as historical/workstream context. The current implementation authority is `v2.3-page-standardization-final2`.

### Another real consistency issue

`docs/FIGMA_VELES_LEGS_INDEX.md` previously contained a slightly different implementation order. It has now been reconciled to the ZERO-POINT controlled sequence so that performance work has one canonical navigation order.

### Original architecture repository findings

`my-first-project:main` remains useful as the historical architecture/rules source. Its `AGENTS.md` explicitly defines the AI as an executor, prohibits autonomous architecture/refactor changes, requires specified-file-only changes and requires showing a diff. Its `ARCHITECTURE.md`, `PROJECT.md`, `STYLE_GUIDE.md`, `SITE_MAP.md`, `TASKS.md` and `STABILITY_AUDIT.md` establish the original modularity, style, page map and safety principles.

However, `TASKS.md` and `SITE_MAP.md` contain historical V2.3 branch references such as `v2.3-page-standardization` and therefore must not be treated as the current implementation location. They remain historical/source-of-rules material. Current implementation authority is `v2.3-page-standardization-final2`.

`STYLE_GUIDE.md` defines Montserrat/Playfair and a black/white/gray visual basis. Current implementation documentation already records platform/default font and accent conflicts as unresolved/exceptional cases. Therefore the old style guide must not be used to overwrite current code without reconciliation.

### foto-redaktor findings

`foto-redaktor:main` contains three tracked objects visible through the repository tree: `App.tsx`, a bundled `foto-redaktor` HTML/source artifact, and `workspace (1).tar`.

The repository-search audit found no `veles` references. It is therefore classified as a separate support/tool repository, not part of the InSales runtime dependency chain.

A concrete internal inconsistency exists in the standalone tool artifact: it advertises a local/no-network mode but the source contains a Google Fonts stylesheet request and dynamically loads `heic2any` from jsDelivr for HEIC conversion. This is relevant only to `foto-redaktor`; it is not a VELES LEGS site dependency.

The `workspace (1).tar` archive is binary and its internal contents cannot be byte-inspected through the available GitHub text API. It must therefore remain **NOT VERIFIED internally** rather than being assumed clean.

### Primary implementation repository — inventory result

The recursive tree for `v2.3-page-standardization-final2` was inspected. It contains the current production-adjacent Liquid/config/code files, the forensic report, ZERO-POINT, history, stress analysis, Figma contracts and InSales reference layer. The repository tree confirms the current forensic report exists as the tracked file `Forensic Performance-разбор сайта VELES LEGS`.

The current code surface includes the protected `V2.1_HOME_APPEND.liquid`, homepage `index.liquid`, layouts, page templates, `theme.js`, `theme.scss`, `styles.liquid`, configuration JSON files and the protected commerce/cart surfaces.

### Critical architecture checks

- `V2.1_HOME_APPEND.liquid` remains protected by project rules.
- Calculator/business logic remains protected.
- Metal Routing remains protected.
- VAT/NDS/pricing/quantity business logic remains protected.
- `theme.js` is already `defer` according to the current source audit.
- `common.v2.27.9.js` is generated through `widgets_assets css_js_lists`; it must not be treated as a manually inserted script without tracing its generated dependency.
- Homepage hero and category image source locations are concretely identified in `index.liquid`.
- Current homepage image sources are `.webp`; historical forensic measurements mentioning old `.jpg` names must not be transplanted into the current waterfall model without fresh runtime evidence.

### Forensic evidence discipline

The historical forensic conclusions remain useful as evidence from their original runs, but current source inspection cannot establish transferred bytes, exact waterfall overlap, or current LCP causality. Therefore current runtime claims remain `NOT VERIFIED` until a new comparable trace exists.

### Stress-audit conclusion

**Repository integrity:** no evidence found that `Figma-VELES-LEGS` or the original `my-first-project` should replace `v2.3-page-standardization-final2` as the current code source.

**Architecture risk:** the main remaining risk is documentation-navigation ambiguity, not an identified production-code corruption. The most important stale references are branch/HEAD metadata and the differing canonical implementation-order descriptions.

**Binary verification limitation:** binary/archive internals cannot be fully verified through the available text API. This limitation is explicitly recorded instead of treating those files as inspected.

**Code modification status:** ZERO production/runtime code changes made during this audit.

### C. Required reconciliation before Patch #1 unlock

1. ✓ Reconciled ZERO-POINT branch HEAD metadata with the actual current branch HEAD; code baseline remains separately identified.
2. ✓ Marked the Figma worklog branch header as historical/workstream context, not current code authority.
3. ✓ Reconciled `docs/FIGMA_VELES_LEGS_INDEX.md` implementation order with ZERO-POINT's controlled sequence.
4. Next: run CODEX PRE-IMPLEMENTATION AUDIT.
5. Only after audit review and a fresh runtime baseline may Patch #1 be unlocked.

**Current gate:** PATCH #1 LOCKED pending pre-implementation audit. PATCH #2 LOCKED pending successful Patch #1 verification.

**Next stage:** CODEX PRE-IMPLEMENTATION AUDIT. No production/runtime code changes before that gate.

### 2026-09-08 — DOCUMENTATION NAVIGATION RECONCILIATION

**Status:** completed; documentation only. Production/runtime code was not changed.

**Confirmed changes:** ZERO-POINT HEAD metadata, Figma worklog branch labeling, and Figma index implementation order were reconciled to `v2.3-page-standardization-final2` as the only current implementation source.

**Explicit limitations preserved:** `workspace (1).tar` remains NOT VERIFIED internally; historical forensic `.jpg` measurements are not transferred to current `.webp` assets without fresh runtime evidence; `codex-ready` is not a current baseline; `Figma-VELES-LEGS` is not a code source and is not synchronized back to `final2`.

**Current gate:** PATCH #1 LOCKED; PATCH #2 LOCKED; production/runtime code unchanged.
