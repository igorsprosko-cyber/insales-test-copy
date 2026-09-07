# VELES LEGS — Runtime QA Plan for Figma-to-Code

Status: PREPARATION

## Purpose

This document defines the evidence needed before a Figma component can be marked runtime-verified.

## Control surfaces

For every shared component:

1. Figma reference state.
2. Liquid source/template.
3. Global CSS source.
4. Local CSS source.
5. Global JS source.
6. Local JS source.
7. InSales widget/data dependency.
8. Browser DOM.
9. Computed Style.
10. Desktop and mobile screenshots.

## Priority components

### P0
- Shell / Header
- Shell / Footer
- Product Card
- Product Gallery
- Product Buy Area
- Calculator protected shell
- Cart Item
- Order Summary

### P1
- Breadcrumb
- Filter
- Sort/Select
- Pagination
- Quantity Control
- Search results
- Favorites
- Compare

### P2
- Blog Article Card
- Article body
- Content page blocks
- Checkout/account visual shell

## Required viewport checks

320, 375, 390, 414, 480, 768, 1024, 1280, 1440, 1920.

## Evidence statuses

- VERIFIED — direct source/runtime evidence exists.
- PARTIALLY VERIFIED — source is known but runtime or one dependency is not verified.
- NOT VERIFIED — evidence is insufficient.

## Special protections

- Do not alter the calculator formulas, IDs, handlers or business logic.
- Do not alter cart VAT/invoice logic during visual work.
- Do not change `main`.
- Do not change `V2.1_HOME_APPEND.liquid` for standardization.

## Acceptance rule

A Figma component becomes the canonical implementation reference only after visual and behavioral comparison against the live/test InSales runtime, not from source code alone.

## 6. Performance verification gate

The runtime QA process must include performance evidence for every performance-sensitive shared component/page.

### Required correlation

For the same controlled run, correlate:
1. document/HTML timing;
2. critical CSS timing;
3. resource discovery;
4. LCP resource timing where applicable;
5. FCP;
6. LCP and concrete LCP element;
7. parser-blocking requests and initiators;
8. heavy-image waterfall;
9. font waterfall;
10. third-party requests;
11. main-thread activity during the causal interval.

### Acceptance rules

- Never infer causality from a single Lighthouse recommendation.
- Never equate Element Render Delay with continuous JavaScript execution.
- Never attribute the full delay to analytics merely because `tag.js` appears in Bottom-Up.
- Never add `defer`/`async`/lazy-loading mechanically without checking runtime dependencies.
- Performance changes require before/after measurements under comparable conditions.
- A visual pass is not sufficient if the change alters the critical loading path.

## 7. Post-ZERO-POINT implementation sequence — corrected canonical clarification

The historical implementation sequence in `ИСТОРИЯ_РАБОТ.md` §34.4–34.7 remains the source record for what was formally established there. This section makes the subsequent clarification explicit without rewriting historical entries.

### Stage 0 — ZERO-POINT / BASELINE

Before the first code change:

- verify HEAD and the working branch;
- verify Git diff cleanliness and accuracy, not only `git status`;
- capture fresh comparable mobile and desktop PageSpeed baselines;
- preserve original Network/Performance evidence when available;
- choose exactly one causal node;
- define a rollback point;
- record the evidence and baseline before editing.

### Stage 1 — CRITICAL PATH

- inventory HTML/document path;
- inspect critical CSS;
- measure the `settings_loaded` render-gate;
- verify LCP discovery and concrete LCP element;
- inventory parser-blocking resources;
- trace `common.v2.27.9.js` initiator/dependency path;
- inspect font loading;
- inspect heavy-image waterfall;
- inspect third-party overlap.

### Stage 2 — IMAGE DELIVERY / LCP

- responsive image dimensions;
- correct aspect-ratio reservation;
- modern format/compression where supported;
- correct discovery and priority;
- lazy loading only for genuinely non-critical images;
- never reintroduce original oversized image delivery after optimization.

### Stage 3 — PARSER / JS DEPENDENCIES

- classify first-party JavaScript as critical / interaction / deferred-background;
- inspect generated InSales widget assets before changing load mode;
- remove parser blocking only when dependency-safe;
- do not apply `defer`/`async` mechanically.

### Stage 4 — CSS / FONTS / RENDER GATES

- verify `theme.css` timing and `onload` behavior;
- verify `settings_loaded` timing;
- consolidate font loading only after dependency evidence;
- preserve visual fallback;
- avoid synthetic Lighthouse-only gains: a laboratory score must not improve by masking or delaying real page behavior.

### Stage 5 — THIRD-PARTY

- move analytics/GTM/Metrica/SmartCaptcha away from the critical path where technically safe;
- do not interpret this as “load everything at the very end”;
- preserve measurement correctness and real dependencies;
- verify Network and runtime behavior after each change.

### Stage 6 — MAIN THREAD / DOM

- measure MutationObserver cost;
- inspect forced layout / style recalculation;
- inspect H1→H2 runtime rewrite;
- inspect long tasks;
- perform targeted cleanup only after measurement.

### Stage 7 — QUALITY / SEO / A11Y / CONTENT

Maintain the established baselines:

- SEO 100;
- Accessibility 96;
- Agentic Browsing 3/3.

Then perform confirmed quality checks:

- duplicate IDs;
- contrast/accessibility defects;
- Schema.org inconsistencies;
- content inconsistencies;
- runtime 404 / canonical / robots behavior;
- commercial-data consistency across public collection/product/offer content;
- security hardening only after InSales compatibility verification.

The last two groups (`runtime 404 / canonical / robots` and `commercial-data consistency`) are explicit additions to the implementation backlog. They were confirmed findings from earlier audits, but were **not** originally written as bullets in historical §34.4; they are included here deliberately and transparently rather than being presented as historical text.

### Stage 8 — REGRESSION / RELEASE GATE

For every implementation block:

`Git diff → PageSpeed mobile → PageSpeed desktop → Network → Performance → visual QA → functional QA → SEO/A11Y/Agentic → history entry`.

If any protected behavior regresses, or a baseline regresses without a demonstrated intended trade-off: stop, compare, rollback if required, document, and do not continue while the regression is unexplained.

## 8. Evidence discipline for plan corrections

When a plan is amended after ZERO-POINT:

- distinguish historical text from newly approved additions;
- cite the factual source of every newly added backlog item;
- never retrofit a new proposal into an older section as though it had always been there;
- keep one canonical implementation sequence and one explicit change log;
- use VERIFIED / PARTIALLY VERIFIED / NOT VERIFIED consistently.
