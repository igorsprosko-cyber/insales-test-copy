# FIRST CONTROLLED PATCH #2 — RESPONSIVE IMAGE DELIVERY

**Status:** LOCKED — not authorized for implementation.

**Unlock only after:** Patch #1 passes diff/runtime/visual/functional gates and its KEEP/REVISE/REVERT decision is recorded.

## Objective
Test responsive image candidate selection independently from Patch #1's loading-priority experiment.

## Scope
Candidate surface: homepage image tags in `index.liquid`, beginning with `vl-v2-hero-card-photo` and `vl-v2-category-photo`.

## Preconditions
1. Verify actual intrinsic dimensions of target assets.
2. Verify actual rendered dimensions on relevant desktop/mobile viewports.
3. Verify InSales-supported responsive image/file URL behavior for these exact assets.
4. Derive real `srcset` candidates and `sizes`; never invent URLs or dimensions.

## Allowed change
Only evidence-backed `srcset` / `sizes` (or a demonstrably equivalent InSales responsive-delivery mechanism) on explicitly approved image elements.

## Forbidden
No recompression, new assets, preload, changes to Patch #1 priority/loading policy, CSS, JS, fonts, analytics, widgets, calculator, VAT/NDS, business logic, Metal Routing or unrelated templates.

## Verification
Compare identical viewport/network conditions before and after. Record selected URL, intrinsic/rendered dimensions, transferred bytes, FCP, LCP/LCP element, CLS, request timing, visual quality and 404/broken-image status.

## Decision
KEEP / REVISE / REVERT only from evidence. PageSpeed score alone is insufficient.
