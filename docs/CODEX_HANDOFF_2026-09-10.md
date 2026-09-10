# VELES LEGS — CODEX HANDOFF / 10.09.2026

## 0. PURPOSE

This file is the operational handoff for the next high-complexity implementation/research session with Codex.

Codex must treat the repository documents as the source of truth and must not restart the project from zero. The goal is to continue from the already completed forensic stage and perform one controlled performance experiment around `common.v2.27.9.js`, with full source, dependency, diff, runtime and regression discipline.

Do not repeat Patch #1 installation/testing. Do not reopen already-settled historical questions unless new evidence directly contradicts them.

---

# 1. REPOSITORY / BRANCH RULES

Repository: `igorsprosko-cyber/insales-test-copy`

Canonical working branch: `v2.3-page-standardization-final2`

Production branch: `main` — NEVER modify without explicit user authorization.

Code baseline: `26f1d6b92bf86a2d02769142aac94e304f674ede`.

Commits after that baseline on the canonical branch are documentation-only unless a later document explicitly identifies a runtime-code change.

`codex-ready` is a temporary test sandbox used by the user for manual InSales file upload. It is NOT the implementation source, architecture source, rules source, or baseline source. Do not sync it back automatically.

Protected:
- calculator business logic: `calcWood`, `handleWood*`, `openManagerForm`, `fillComment`, `wood-*`, `panel-wood`, `panel-metal`, prices, VAT/NDS, discounts, weight, volume, quantity/business logic;
- Metal Routing;
- accepted compare behavior;
- no mass refactor;
- no JS injection replacing CSS/Liquid;
- no unrelated template changes.

Every performance change follows:
**baseline → one small change → retest → diff → runtime/visual QA → record result.**

---

# 2. AUTHORITATIVE PROJECT DOCUMENTS — READ FIRST

1. `ZERO-POINT.md` — current working book, constraints, protocol, protected boundaries.
2. `ИСТОРИЯ_РАБОТ.md` — historical archive and evidence; do not create separate history files.
3. `docs/PATCH_1_RESULT_AND_NEXT_STAGE.md` — Patch #1 is already tested and closed; next stage is `common.v2.27.9.js` source verification and controlled experiment.
4. `docs/FIRST_CONTROLLED_PATCH_2_SPEC.md` — responsive image delivery experiment; LOCKED and must NOT be combined with the current `common.js` experiment.
5. Any current project/design/architecture documents referenced by ZERO-POINT or history when a code decision depends on them.

If documents disagree, do not silently choose. Determine which document is current from its status/date and record the reconciliation.

---

# 3. PATCH #1 — CLOSED STATE

Patch #1 added only:

```liquid
<link rel="preload" href="{{ 'theme.css' | asset_url }}" as="style">
```

to `layouts.layout.liquid` in `<head>`.

The user already installed the complete file from `codex-ready` into the InSales test site and performed the real Production/Preview tests.

Confirmed:
- `theme.css`: one request in Production;
- no duplicate theme.css request caused by preload;
- Production 10.09.2026: Performance 65, FCP 3.2s, LCP 6.2s, TBT 280ms, CLS 0.014, Speed Index 3.7s;
- LCP element is H1;
- Preview is dirty because `shop_admin_bundle` exists there but not in Production.

Decision state: result recorded; do NOT repeat the same test or installation.

Patch #1 did NOT prove an independent LCP gain from preload. Do not claim that it did.

---

# 4. CURRENT PERFORMANCE EVIDENCE

Fresh PSI Mobile Production vs Preview, 10.09.2026:

Production:
- Performance 65
- FCP 3.2s
- LCP 6.2s
- TBT 280ms
- CLS 0.014
- Speed Index 3.7s
- LCP element: H1
- TTFB 20ms
- LCP element render delay 680ms
- long tasks 10
- unused JS 658 KiB
- image optimization opportunity 492 KiB

Preview:
- Performance 50
- FCP 5.8s
- LCP 10.4s
- TBT 390ms
- CLS 0.011
- Speed Index 6.3s
- LCP element: H1
- TTFB 20ms
- render delay 1.72s
- long tasks 10
- unused JS 838 KiB
- image optimization opportunity 492 KiB

Preview contains `shop_admin_bundle-48a9737....js` ~405.2 KiB / ~5250ms and therefore cannot be used as a clean Patch #1 A/B against Production.

Production DevTools 10.09.2026:
- `theme.css`: 1 request, waiting ~2.79s, download ~1.79s, total ~4.58s;
- `common.v2.27.9.js`: waiting ~2.44s, download ~22.19s, total ~24.63s;
- the current Production waterfall has Yandex/GTM/Metrica and other concurrent resources.

Historical trace evidence remains valid as historical evidence only:
- `common.v2.27.9.js` was parser-blocking;
- request began around 2.947s;
- response ended around 43.725s;
- approximately 40.78s delay, ~38.4s content download;
- parser resumed after the script;
- LCP/FCP was H1;
- removing two heavy images produced a major improvement in the controlled experiment;
- blocking all scripts/CSS did not reduce LCP below ~26s under the historical CPU/network setup.

Historical JPG measurements must NOT be reused as current WEBP measurements.

---

# 5. PROVEN VS HYPOTHESIS

PROVEN / source-level:
- `head.liquid` contains a `body:not(.settings_loaded)` render gate.
- `styles.liquid` adds `settings_loaded` through `theme.css` onload.
- `theme.js` already uses `defer`.
- `common.v2.27.9.js` is generated/served through `{% widgets_assets css_js_lists %}` rather than existing as a normal source file in the repo.
- current/historical evidence shows parser-blocking behavior of `common.js`.
- current Production shows a long `common.js` transfer.
- Patch #1 results above.
- heavy-image removal improved the historical baseline substantially.

STRONG HYPOTHESIS, NOT PROVEN:
- network competition from images/third-party resources is a major contributor to slow `common.js` transfer;
- changing `common.js` to a safe non-blocking mode will improve FCP/LCP;
- exact individual responsibility of Yandex/GTM/Metrica for the delay;
- `settings_loaded` render gate is the primary runtime cause of the current LCP.

NOT PROVEN / do not assert:
- `front_api/cart.json` as a current real Network blocker of LCP; it appeared in Lighthouse dependency data but was absent from real Network in the relevant Production/Preview checks;
- MutationObserver as root cause;
- gzip as the main solution;
- Preview SEO 69 being caused specifically by `noindex`, canonical, robots, or another single mechanism unless HTML/audit evidence is inspected.

---

# 6. THE TASK FOR CODEX

## Objective

Perform a complete source-level and dependency-level investigation of `common.v2.27.9.js`, determine the safest supported way to change its loading behavior, and, if and only if the evidence supports a safe implementation, implement ONE minimal controlled patch on `v2.3-page-standardization-final2`.

The intended experiment is:

**parser-blocking generated `common.v2.27.9.js` → safe non-blocking/deferred loading**

But this is NOT a command to blindly add `defer`. Codex must first establish how `{% widgets_assets css_js_lists %}` generates the script and what InSales permits.

## Required investigation

A. Inspect the exact current code around:
- `{% widgets_assets css_js_lists %}`;
- `layouts.layout.liquid`;
- `styles` integration;
- all relevant script includes in layout/head/body;
- any repository documentation describing InSales widget asset generation;
- any references to `common.v2.27.9.js`, `common.v2.*`, `widgets_assets`, SmartCaptcha, vendors, shield, favorites, cart, or related initialization.

B. Build a dependency map:
- who creates/injects `common.v2.27.9.js`;
- what loads before it;
- what executes after it;
- whether it expects parser-time execution or DOM order;
- whether any inline code depends synchronously on globals/functions from it;
- whether SmartCaptcha/vendors/shield/favorites depend on its immediate execution;
- whether calculator code or Metal Routing could be indirectly affected.

C. Determine the actual supported modification point.

Do NOT:
- edit generated `common.v2.27.9.js` as if it were a source asset;
- delete it;
- blindly add `defer` to generated markup without confirming the generated output can receive it;
- move all scripts;
- defer all scripts;
- disable analytics/captcha/services to make the score better;
- change `settings_loaded` in the same patch;
- combine with responsive images;
- change CSS/fonts/images in the same patch.

D. If no safe source-level way to change the loading mode can be proven, STOP implementation and document the blocker. A well-proven NOT VERIFIED/NOT SAFE result is preferable to an unsafe patch.

E. If a safe mechanism is proven, implement only ONE minimal patch.

---

# 7. DIFF GATE BEFORE RUNTIME

Before any user-facing runtime test, Codex must inspect the exact diff from the current canonical code baseline/current HEAD.

The diff must show only the intended minimal change.

Explicitly verify that these remain untouched:
- `index.liquid` calculator/business logic;
- Metal Routing;
- VAT/NDS/prices/discounts/weight/volume/quantity;
- unrelated CSS;
- image markup;
- analytics code unless the single proven loading change necessarily touches its integration;
- unrelated templates.

Do not merge into `main`.

---

# 8. RUNTIME TEST PROTOCOL

The user will provide the real InSales runtime results when a manual upload/test is required.

Use comparable Production conditions. Do not compare dirty Preview against clean Production as if they were equivalent.

Record at minimum:
- FCP;
- LCP;
- LCP element;
- TBT;
- CLS;
- Speed Index;
- DCL/load as secondary indicators;
- `common.v2.27.9.js` request start, waiting, download, total;
- initiator and dependency chain;
- `theme.css` request count;
- console/network errors;
- visual first render / FOUC;
- interactive functionality.

Prefer at least 3 comparable PSI Mobile runs if the environment permits, plus one clean DevTools Network/Performance before/after trace under the same conditions.

Do not use PageSpeed score alone as the decision criterion.

---

# 9. REGRESSION GATE

After the performance test, verify:
- calculator still works;
- calculator prices/VAT/discounts/weight/volume/quantity unchanged;
- wood panels and related interactions unchanged;
- Metal Routing unchanged;
- accepted compare behavior unchanged;
- no new JS errors;
- no missing content / visual flash;
- no broken widgets/captcha/favorites/cart behavior that the page depends on.

---

# 10. DECISION

KEEP only if the patch provides a reproducible positive performance signal and passes functional/visual/diff gates.

REVISE if there is a credible positive signal but a fixable side effect or unstable result.

REVERT if performance worsens, functionality/visual behavior regresses, or the proposed causal effect is not supported by comparable evidence.

Do not claim a root cause merely because a metric changed once.

---

# 11. PATCH #2 — LOCKED

`docs/FIRST_CONTROLLED_PATCH_2_SPEC.md` is a separate responsive-image experiment.

It remains LOCKED until the `common.js` controlled experiment is completed and a KEEP/REVISE/REVERT decision is recorded.

Never combine Patch #2 with the current `common.js` patch.

---

# 12. DOCUMENTATION DUTY

When the controlled experiment is completed, record:
1. exact hypothesis;
2. source evidence;
3. exact files changed;
4. exact diff summary;
5. runtime results before/after;
6. regression results;
7. KEEP/REVISE/REVERT decision;
8. next authorized stage.

Update the canonical working documents rather than creating another parallel history.

`ИСТОРИЯ_РАБОТ.md` remains the historical archive.
`ZERO-POINT.md` remains the current working book.
This handoff is the operational instruction for Codex and should be referenced, not duplicated into new competing plans.

---

# 13. FINAL COMMAND TO CODEX

Do not restart the project.

Read the current repository state and the authoritative documents first.

Then perform the deepest possible source/dependency investigation of the generated `common.v2.27.9.js` path. Resolve whether a safe, minimal, InSales-compatible non-blocking loading experiment is actually possible. If yes, implement exactly one controlled patch and prepare the diff and verification protocol. If not, do not invent a workaround: document the precise blocker and the smallest evidence needed to proceed.

Never trade functional correctness for a synthetic Lighthouse gain.
