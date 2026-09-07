# VELES LEGS — Codex Operating Contract

## 0. Start here

Before touching code, read in this order:

1. `AGENTS.md`
2. `ZERO-POINT.md`
3. `ИСТОРИЯ_РАБОТ.md` — use it as project history and evidence archive; do not create another history file.
4. `Forensic Performance-разбор сайта VELES LEGS`
5. `СТРЕСС АНАЛИЗ.md`
6. `docs/FIGMA_VELES_LEGS_INDEX.md`
7. The specific `docs/` contract relevant to the task.

Then inspect the actual code and current Git state. Never rely on an old commit mentioned in documentation when Git shows a newer HEAD.

## 1. Repository and branch safety

- Current preparation branch: `codex-ready`.
- It is forked from the current working baseline commit `26f1d6b92bf86a2d02769142aac94e304f674ede`.
- Production `main` is protected. Never change it unless the owner explicitly authorizes it in the current task.
- `v2.3-page-standardization-final2` is the pre-Codex working branch. Do not rewrite or force-move it as part of preparation.
- `v2.3-page-standardization` is the reference/governing implementation point; do not treat it as the current code branch.
- `Figma-VELES-LEGS` is an experimental/archive branch for Qwen testing, not a source of current production code.
- Never force-push or force-move protected branches.

## 2. Protected functional areas

Do not modify these unless the task explicitly and separately authorizes it:

- calculator business logic: `calcWood`, `handleWood*`, `openManagerForm`, `fillComment`;
- calculator/business identifiers and flows: `wood-*`, `panel-wood`, `panel-metal`;
- prices, VAT, discounts, weight, volume, quantity and related business calculations;
- Metal Routing;
- the established compare behavior;
- `V2.1_HOME_APPEND.liquid` as the protected reference implementation.

Do not achieve a CSS/Liquid goal by injecting large amounts of JavaScript.

## 3. Change policy

Use the smallest change that addresses a demonstrated problem.

For performance work:

`baseline → hypothesis → one focused change → test → diff → regression QA → record result`

Do not make synthetic Lighthouse gains that trade away real UX, functionality, SEO or accessibility.
Do not mechanically add `defer`, `async`, `lazy` or resource priorities without evidence.
Do not remove third-party services just because they exist; first establish dependency and data/functionality impact.
Do not alter generated `common.v2.27.9.js` directly without first tracing its source and dependencies. The current theme receives it through `{% widgets_assets css_js_lists %}`.

## 4. Current performance evidence to keep in mind

The forensic baseline established that:

- two heavy images materially inflated payload and performance cost;
- an anomalous mobile trace showed textual H1 as LCP;
- parser-blocking `common.v2.27.9.js` is a critical-path suspect because of its late response/completion in that trace;
- `theme.js` is already deferred;
- `head.liquid` + `styles.liquid` contain a `settings_loaded` render gate at source level, but its causal runtime impact is not yet proven;
- remaining mobile payload after the image A/B was about 2249 KiB and unused-JS potential about 656 KiB.

These are evidence to investigate, not permission to change code blindly. A statement not reproduced by fresh runtime evidence is `NOT VERIFIED`.

## 5. Required investigation style

Start with repository inventory and dependency tracing. Prefer:

- exact references and call sites;
- source/initiator/dependency chains;
- before/after measurements under comparable conditions;
- focused diffs;
- explicit regression checks.

When a file is obsolete, prove that it is orphaned before deleting it. Preserve authoritative history and reference documents unless a newer document clearly supersedes them.

## 6. Verification gate

Before considering a change complete, verify as applicable:

- Git diff and changed-file scope;
- Liquid/CSS/JS syntax or available project checks;
- runtime behavior;
- visual behavior;
- calculator regression;
- Metal Routing regression;
- SEO/A11Y/structured-data effects;
- performance before/after under comparable conditions;
- no protected branch or protected file was changed unexpectedly.

Report unknown runtime results as `NOT VERIFIED`; do not infer success from source inspection alone.

## 7. History discipline

`ИСТОРИЯ_РАБОТ.md` remains the single project history file.
Do not create parallel history files, reports or progress logs unless the owner explicitly requests a separate deliverable.
`ZERO-POINT.md` is the intentionally approved Tom II working book.

## 8. Preparation branch objective

This branch exists to provide Codex with a clean, explicit operating contract and a current starting point. Preparation changes must not alter site behavior. Any future implementation work belongs in a task branch created from an explicitly approved baseline.
