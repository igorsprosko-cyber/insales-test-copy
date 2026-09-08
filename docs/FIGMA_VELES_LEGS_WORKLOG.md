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

### 2026-09-05 — Forensic performance architecture reconciliation (completed)

- Reconciled the Figma architecture with the completed VELES LEGS forensic performance investigation.
- Added a mandatory loading-law section to `FIGMA_VELES_LEGS_ARCHITECTURE.md`: HTML → critical CSS → LCP/FCP content → minimum first-viewport interaction → remaining first-party JS → analytics/third-party → deferred/lazy resources → background work.
- Explicitly recorded the forensic distinction between parser-blocking/network Content Download and JavaScript execution.
- Added the confirmed finding that heavy images create material network contention while not being the LCP element in the investigated trace.
- Added the rule that `tag.js`/GTM cannot be treated as the sole cause without causal evidence.
- Added performance metadata requirements to Figma component handoff: criticality, LCP relevance, discovery order, image dimensions, loading/priority policy, fonts, JS, third parties and responsive differences.
- Extended Foundations with performance semantics and extended Runtime QA with a forensic correlation gate.
- No production Liquid/CSS/JS, business logic, calculator, Metal Routing, or protected reference files were changed.
- Documentation-only change on branch `Figma-VELES-LEGS`.

Verification status: **VERIFIED — repository documentation reconciliation.**
Runtime status: **NOT RE-RUN — this task intentionally changed no runtime code.**
Deferred: perform the actual runtime/performance gate only after code changes begin, with before/after comparable traces and PageSpeed measurements.

### 2026-09-05 — Final documentation synchronization / implementation zero-point

- Re-read the current forensic 9.0 document, `ИСТОРИЯ_РАБОТ.md`, PageSpeed baselines and all principal `docs/FIGMA_VELES_LEGS_*.md` contracts in `v2.3-page-standardization-final2`.
- Corrected the documentation index so `Figma-VELES-LEGS` is explicitly historical/design-workspace context and `v2.3-page-standardization-final2` is the only current code source.
- Synchronized the Figma documentation layer with the forensic rules: critical-path loading law, image/network evidence, parser-blocking/common.js distinction, third-party scheduling rule, fonts/CSS gate, `settings_loaded` render-gate, and comparable before/after verification.
- Added a canonical implementation sequence beginning with a baseline/safety gate and ending with final PageSpeed/Network/Performance and regression verification.
- Recorded that the detailed PageSpeed numbers remain authoritative in `ИСТОРИЯ_РАБОТ.md` and the forensic document; `docs/` provides the reusable contracts and does not create a competing history.
- No production Liquid/CSS/JS/business logic was changed.

**Verification:** VERIFIED — repository documentation synchronization.
**Runtime:** NOT CHANGED.
**Next state:** implementation zero-point is ready; first code change must be minimal, reversible and evidence-backed.

### 2026-09-07 — Post-ZERO-POINT plan correction and explicit quality backlog

- Reviewed the exact current text of `ИСТОРИЯ_РАБОТ.md` §34.4–34.7 and distinguished historical plan text from later interpretation/additions.
- Confirmed the historical plan already required Git diff cleanliness/accuracy at Stage 0 and warned against synthetic Lighthouse-only gains at Stage 4; these meanings are now preserved explicitly in the Runtime QA contract.
- Clarified Stage 5: moving third-party resources away from the critical path does not mean mechanically loading everything at the very end; measurement correctness and actual dependencies remain mandatory.
- Added `runtime 404 / canonical / robots` and `commercial-data consistency` as explicit Stage 7 quality backlog items because they are confirmed audit findings, while clearly labeling them as deliberate additions rather than pretending they were present in historical §34.4.
- Updated `docs/FIGMA_VELES_LEGS_RUNTIME_QA_PLAN.md` with the corrected canonical clarification and evidence discipline.
- No production Liquid/CSS/JS, calculator, Metal Routing, `main`, or `v2.3-page-standardization-final2` code behavior was changed by the plan correction itself.

**Verification:** VERIFIED — documentation change committed to `v2.3-page-standardization-final2`.
**Runtime:** NOT CHANGED.
**Deferred:** execute the implementation queue only from the existing ZERO-POINT and perform the full regression gate after each causal change.


### 2026-09-08 — FIRST CONTROLLED IMPLEMENTATION: pre-patch image dependency trace (read-only)

**Status:** PREPARATION ONLY. No code changed.

**Checked:** `index.liquid`, `styles.liquid`, `head.liquid`, `layouts.layout.liquid`, `theme.scss`, `theme.js`, plus performance architecture/runtime QA rules.

**Established source chain:** homepage visual resources are emitted directly by `index.liquid` via InSales `file_url`. The hero image is `opora-a178-chrome.webp` at the first-viewport hero card (`index.liquid`, around lines 1609–1612). Six category images are emitted immediately in the following catalog section (`foto_derevo.webp`, `foto_metal.webp`, `foto_furnitura.webp`, `foto_nazakaz.webp`, `A263.webp`, `aksia.webp`). A further blueprint/product image is emitted later in the page. CSS only defines presentation/object-fit; it does not initiate the image requests.

**Current loading attributes:** the homepage image tags inspected do not declare `loading`, `fetchpriority`, `srcset`, or `sizes`. Therefore browser priority is currently implicit. This is a concrete implementation candidate, not yet a confirmed causal fix.

**Existing loading architecture:** `styles.liquid` includes `system_v4_fonts` and loads `theme.css` with an `onload` handler that adds `settings_loaded`; `layouts.layout.liquid` already loads `theme.js` with `defer`. The performance QA plan explicitly requires measuring `theme.css`, `settings_loaded`, LCP discovery, and image delivery before/after changes.

**Critical distinction:** the forensic report referenced historical network names `stol-vintage.jpg` and `opora-a178-chrome.jpg`; the current `final2` source contains `opora-a178-chrome.webp` and other `.webp` assets. This means the old measured filenames/weights must NOT be copied into the current causal model without a fresh runtime/network measurement. The repository proves the current source URLs, but not their transferred byte sizes or exact waterfall overlap.

**First controlled patch candidate:** only the homepage image-loading attributes, beginning with classification of the hero image versus below-fold category images. No image files, calculator logic, Metal Routing, shared JS, analytics, CSS architecture, or business logic are to be modified in this gate.

**Pre-patch conclusion:** the exact source location for the first image-delivery intervention is now identified. The safe next action is to define the minimal attribute-only patch and its rollback/verification criteria. Do not apply the patch until the baseline state and expected behavior are explicitly recorded.

**Next stage:** FIRST CONTROLLED PATCH SPEC — define the exact `index.liquid` lines/attributes to change, then apply only that bounded patch and run the mandatory performance + visual + functional gates.


### 2026-09-08 — FIRST CONTROLLED PATCH SPEC #1 — homepage image loading attributes

**Status:** SPECIFICATION ONLY. No runtime code changed.

**Scope:** one file only — `index.liquid`. One causal node only — browser loading/priority of homepage images. No image assets, CSS, JS, analytics, calculator, Metal Routing, VAT/NDS or shared templates are included.

**Patch A — first-viewport hero image:**
- Target: `vl-v2-hero-card-photo`, source `opora-a178-chrome.webp`.
- Add explicit `loading="eager"`.
- Add explicit `fetchpriority="high"`.
- Do not alter `src`, `alt`, class, markup structure or CSS.
- Rationale: this image belongs to the first-viewport hero card and must not be accidentally treated as a deferred image. The priority declaration is an implementation hypothesis to be validated by the before/after waterfall and LCP discovery timing; it is not claimed as a proven performance fix.

**Patch B — below-fold category images:**
- Targets: the six `vl-v2-category-photo` images immediately following the hero/trust content: `foto_derevo.webp`, `foto_metal.webp`, `foto_furnitura.webp`, `foto_nazakaz.webp`, `A263.webp`, `aksia.webp`.
- Add `loading="lazy"` to each.
- Do not add `fetchpriority="low"` in this first patch; browser lazy-loading already changes discovery behavior and we want one bounded intervention rather than stacking multiple priority mechanisms.
- Do not alter URLs, alt text, classes, surrounding markup or CSS.

**Intentionally NOT included in Patch #1:** `srcset`, `sizes`, explicit width/height, image recompression/conversion, preload, CSS background images, fonts, `theme.js`, `common.js`, GTM, tag.js, or any other template.

**Why dimensions are deferred:** repository inspection establishes the image URLs but does not establish reliable intrinsic dimensions for these assets. Do not invent dimensions. A later responsive-image gate may add them after asset/runtime evidence is available.

**Baseline requirement before applying:** preserve the current clean baseline and record the exact pre-change commit SHA. The patch must be applied as a single isolated commit containing only the specified `index.liquid` attribute changes.

**Verification gate after Patch #1:**
1. Confirm only the intended `index.liquid` lines changed in Git diff.
2. Confirm calculator, Metal Routing, VAT/NDS and protected markup are byte/behaviorally untouched by the patch.
3. Run comparable desktop/mobile visual checks for hero and category sections.
4. Run comparable performance measurement and inspect Network waterfall for hero/category image discovery and transfer timing.
5. Record FCP, LCP, LCP element, image request start/end, and whether the hero request is discovered before/after the relevant render milestones.
6. Check for new 404s, broken images, layout shift or visual regression.
7. Keep or revert based on measured evidence; do not proceed to another causal node until the result is recorded.

**Success criterion:** the patch is considered successful only if it improves or clearly stabilizes the intended loading behavior without functional/visual regression. A PageSpeed score increase alone is insufficient; the waterfall/LCP evidence is required.

**Rollback:** revert the single Patch #1 commit if the evidence shows regression, no meaningful causal improvement, or an unintended priority/resource side effect.

**Handoff to Codex:** this specification is suitable as the bounded first implementation task. Codex must modify only `index.liquid`, must not redesign or refactor surrounding markup, and must stop after producing the isolated diff for verification.


### 2026-09-08 — CONTROLLED IMPLEMENTATION SEQUENCE v2 — pre-implementation gate inserted before Patch #1

**Status:** PROCESS CORRECTION. No production code changed.

The previously defined sequence is corrected: **FIRST CONTROLLED PATCH #1 must NOT be applied immediately.** A mandatory independent pre-implementation audit must occur first.

**Authoritative sequence from ZERO-POINT onward:**

1. **ZERO-POINT LOCK** — confirm the actual working repository/branch, current HEAD, protected areas, architecture authorities, forensic conclusions, documentation hierarchy, and clean baseline. No code changes.
2. **CODEX PRE-IMPLEMENTATION AUDIT** — Codex receives a read-only audit task. It checks the preparation itself against the actual current branch: documentation ↔ code, source paths, file names, dependencies, protected areas, forensic assumptions, Critical Path model, and the proposed Patch #1. Codex must report only concrete discrepancies, risks, stale references, missing dependencies, or contradictions. No code or documentation writes.
3. **AUDIT REVIEW / RECONCILIATION** — ChatGPT verifies each Codex finding against the repository and existing evidence. Do not accept an agent claim automatically. Correct only confirmed inconsistencies in the plan/specification/history; do not alter production code during this gate.
4. **PATCH #1 FINAL LOCK** — after reconciliation, freeze the exact first controlled patch specification. Record final target file, exact target elements/attributes, exclusions, baseline SHA, success criteria and rollback criteria.
5. **FIRST CONTROLLED IMPLEMENTATION #1** — Codex may modify only the locked scope in `index.liquid`. No refactoring, optimization of unrelated resources, or changes to protected logic. Codex stops after producing the isolated diff.
6. **DIFF GATE** — inspect the diff before accepting the commit. If scope is violated, stop and revert/reject; do not continue.
7. **COMMIT + RUNTIME VERIFICATION** — only after the diff gate, commit the isolated change and run comparable visual/functional/performance verification. Record FCP, LCP, LCP element, image request timing/waterfall and regressions where available.
8. **EVIDENCE DECISION** — KEEP / REVERT / REVISE based on evidence. A PageSpeed score increase alone is insufficient. The causal loading behavior must be evaluated.
9. **WORKLOG UPDATE** — record the actual change, commit SHA, measurements, findings and decision. Only then unlock the next causal node.
10. **NEXT NODE** — proceed to Patch #2 (responsive image delivery: `srcset/sizes`) only if Patch #1 has passed its evidence gate and the new audit does not reveal a prerequisite.

**Non-negotiable rule:** one causal node → one bounded patch → diff gate → verification → documented decision → next node. Never combine independent performance changes in one experiment.

**Codex role:** executor/auditor, not autonomous architect. It may identify discrepancies and propose findings, but it must not silently reinterpret ZERO-POINT, rewrite the architecture, expand scope, or make unrelated improvements.

**Current immediate next action:** CODEX PRE-IMPLEMENTATION AUDIT. Patch #1 is prepared but remains LOCKED until the audit is reviewed and reconciled.


### 2026-09-08 — PATCH #2 SPECIFICATION — RESPONSIVE IMAGE DELIVERY (LOCKED)

Status: SPECIFICATION ONLY. LOCKED. Patch #2 must not be implemented until Patch #1 has passed its evidence gate and the resulting decision is recorded as KEEP/REVISE. No production code changed by this specification.

Purpose: reduce unnecessary image transfer and improve resource selection across viewport sizes without combining this work with image priority, CSS, JS or third-party changes.

Preconditions before implementation:
1. Patch #1 must be verified first.
2. Inventory actual image source URLs and any InSales widget-generated sources.
3. Establish intrinsic dimensions and available responsive variants from real evidence. Do not invent widths or URLs.
4. Verify whether the current InSales asset/file_url mechanism supports reliable responsive variants for these exact assets. If not proven, stop as NOT VERIFIED.
5. Determine actual rendered widths for desktop and mobile before choosing sizes values.

Potential scope: one homepage image-delivery surface in index.liquid, only for image elements for which responsive source selection is demonstrably supported. Hero and six category images remain separate candidates; do not assume one contract fits all.

Allowed change, only if evidence supports it: add correct srcset and matching sizes using real available variants. Preserve the existing source as fallback where required. Do not alter business data, CSS layout, image art direction or unrelated resources.

Explicitly excluded: image recompression, new image assets, CSS, preload, fetchpriority changes, loading-policy changes, JS, fonts, third-party scripts, calculator, Metal Routing, VAT/NDS, product/business logic and other templates.

Success evidence: browser selects an appropriately sized resource for the actual viewport; transferred bytes decrease or resource efficiency improves without visual degradation; no layout shift, broken image, 404 or crop regression; waterfall confirms intended source selection.

Verification: same controlled viewport/network conditions before and after. Record selected image URL, intrinsic/rendered dimensions, transferred bytes, FCP, LCP/LCP element, CLS, request timing and visual result. PageSpeed score alone is insufficient.

Rollback: revert the isolated Patch #2 change if source selection is unreliable, bytes do not improve meaningfully, visual quality/cropping changes, or any regression appears.

Unlock condition: only after Patch #1 evidence is accepted and all Patch #2 preconditions are verified. Until then Patch #2 is documentation-only and LOCKED.

### 2026-09-08 — GENERAL REPOSITORY / DEPENDENCY STRESS AUDIT — PASS 1

Mode: read-only audit. No production code changed.

Repositories audited at inventory/dependency level: insales-test-copy branches main, v2.3-page-standardization-final2, Figma-VELES-LEGS, codex-ready; my-first-project main.

Current inventory: final2 = 55 tree entries, HEAD 94521dd9f39d8483ff8a4d662f9a03486b3fcb36; Figma-VELES-LEGS = 57, HEAD 63857a2bc54c815a63d47f438245a75df5ac977f; codex-ready = 56, HEAD 3f63b11c449d16934c4f3b8ba3cf2d934be5a673; main = 32, HEAD f74950a8f37cef2f17525bfba4cae1ed86c5a5f3; my-first-project/main = 45, HEAD c001cd27a579ed71d20d1627f2f3a49a7f1cc739.

Cross-repository result: the repositories are not identical copies. my-first-project is structurally an architectural/start/reference repository with AGENTS.md, PROJECT.md, ARCHITECTURE.md, STYLE_GUIDE.md, SITE_MAP.md, TASKS.md, validation script and InSales theme under templates, snippets, media and config. Its theme files are generally different from current final2 blobs. It must remain an architectural/reference source, not a current-code mirror.

Confirmed stale-reference findings:
1. ZERO-POINT.md calls 9655b25c0e03bf1cf721835351b78735d2284c9f the current baseline, while actual current branch HEAD is later. 9655b25 is the prior documentation baseline; wording should distinguish last verified code baseline from current documentation HEAD before implementation.
2. FIGMA architecture/code-map/worklog headers retain the historical statement that Figma-VELES-LEGS is the working branch. In current final2 these documents are reference/history material, not current branch authority.
3. The forensic file contains a historical reference to v2.3-page-standardization as a reference branch, while current policy says final2 is the only current code source. This must be marked historical or corrected before being used operationally.
4. my-first-project/main contains historical V2.3 references in TASKS.md and SITE_MAP.md, including v2.3-page-standardization. This is compatible with its architectural-origin role, but it must not be used as current branch authority.

Critical process finding: there is a real sequencing conflict. ZERO-POINT section 5/8 describes the first causal experiment as theme.css → settings_loaded → render gate, while the current Worklog sequence has Patch #1 as homepage image loading. This must be reconciled before Codex is allowed to change code. No production code was changed to resolve it.

Branch comparison finding: current final2 is materially different from main and the archived Figma branch. final2 no longer contains the old theme ZIP present in main/Figma, consistent with prior cleanup. Figma remains non-authoritative and must not be merged or copied back into current code merely to synchronize it.

Protected architecture check: current documentation consistently identifies calculator logic, Metal Routing, VAT/NDS and related business behavior as protected. Patch #1 and Patch #2 do not include those areas.

Runtime limitation: GitHub source inspection cannot prove current browser waterfall, HTTP status, runtime widget output or PageSpeed behavior. Those remain runtime gates.

Audit status: NOT READY FOR CODE CHANGE YET. The repository is substantially prepared, but stale baseline wording and, more importantly, the ZERO-POINT versus Worklog first-causal-node conflict must be reconciled before the Codex pre-implementation audit can authorize Patch #1.

Required reconciliation: distinguish last verified code baseline from documentation HEAD; explicitly choose the first causal node using strongest evidence; update controlled sequence/specification accordingly; then issue the Codex read-only pre-implementation audit.

Next step after reconciliation: bounded CODEX PRE-IMPLEMENTATION AUDIT. Patch #1 and Patch #2 remain LOCKED.


### 2026-09-08 — STRESS AUDIT RECONCILIATION

The documented process conflict identified in PASS 1 is resolved at the documentation level: the first controlled causal node is IMAGE DELIVERY because the existing image-removal experiment is the strongest direct A/B evidence. The settings_loaded render gate remains a separate forensic candidate and is not combined with Patch #1. The common.v2.27.9.js dependency remains a later node requiring fresh runtime initiator/waterfall evidence.

ZERO-POINT was corrected to distinguish the last verified code baseline from later documentation-only HEADs. No production/runtime code was changed.

Patch #1 remains LOCKED pending the Codex pre-implementation audit. Patch #2 remains LOCKED pending successful Patch #1 evidence and its own preconditions.

### Stress-audit continuation requirement

The repository stress audit is not considered an excuse to claim that every binary byte or live runtime behavior has been verified. GitHub tree/source inspection verifies repository structure and text/config source; binary archive internals and live browser/runtime behavior remain separate evidence domains. Future audit entries must preserve this distinction.


### 2026-09-08 — STRESS AUDIT PASS 2 — source/config reconciliation

Additional current-source checks completed for the full current implementation surface and InSales reference set.

**Important correction found:** the previously documented accent-color conflict is stale in the current final2 source. Current `settings_data.json` uses `#5E8C31` for button/accent values, and relevant `setup.json` values also use `#5E8C31`. `theme.scss` uses `#5E8C31`. The old `#76BC21` conflict remains only as historical documentation context. Foundations/Audit Status were corrected so this is no longer treated as an unresolved current conflict.

**Current source checks confirmed:**
- `index.liquid` contains the protected calculator logic and current homepage image source surface.
- `head.liquid` contains the source-level settings_loaded render gate.
- `styles.liquid` attaches settings_loaded on theme.css onload.
- layouts call InSales `widgets_assets`; generated common.js must therefore be traced through runtime initiator/dependency evidence rather than edited directly.
- `theme.js` is a separate shared runtime file and is not the same as generated common.js.
- product.liquid contains a post-DOMContentLoaded image priority adjustment; this is distinct from the homepage image path and must not be confused with Patch #1.
- current `final2` source contains no accidental references to the archived Figma branch in executable Liquid/JS/SCSS.
- the 14-file InSales reference set contains no stale branch references in the checked source text.

**Two-repository role confirmed:** `my-first-project/main` is a source of long-lived architecture/rules/style and an older InSales implementation snapshot. Its `TASKS.md` and `SITE_MAP.md` still mention historical `v2.3-page-standardization`; this is not a current-code defect because that repository is explicitly non-authoritative for current implementation. It must remain clearly labeled as historical/governing context.

**Codex-ready branch finding:** `codex-ready` is not the current working branch. It diverges from current final2 and contains an older documentation baseline plus an operating contract. It is useful as a preparation artifact, but it must be regenerated/synchronized from the reconciled current final2 baseline before being used for implementation. Do not implement from its stale baseline.

**Figma branch finding:** `Figma-VELES-LEGS` is divergent and stale for code. Its value is historical Figma/design/reference documentation and Qwen experiment history. Do not merge its code back into final2. Its documentation has already been transferred/consolidated where needed.

**Current audit decision:** documentation/process inconsistencies discovered so far have been corrected or explicitly classified. Production/runtime code remains unchanged. Patch #1 and Patch #2 remain LOCKED.

**Remaining evidence gate:** live browser/runtime evidence is still required for waterfall, initiators, rendered DOM, HTTP status and actual performance. Repository inspection cannot substitute for those measurements.

**Next required action:** CODEX PRE-IMPLEMENTATION AUDIT against the reconciled current final2 state; no code implementation until its findings are reviewed.
