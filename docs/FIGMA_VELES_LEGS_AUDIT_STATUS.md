# VELES LEGS — Figma Audit Status

Date: 2026-08-31
Status: `PARTIALLY VERIFIED — REPOSITORY-SIDE`

## What was reviewed

The Figma/code work was re-evaluated against the governing repository `my-first-project`, including:

- `AGENTS.md`
- `PROJECT.md`
- `ARCHITECTURE.md`
- `STYLE_GUIDE.md`
- `CONTRIBUTING.md`
- `SITE_MAP.md`
- `TASKS.md`
- `STABILITY_AUDIT.md`

The working implementation source was cross-checked in `insales-test-copy`, branch `v2.3-page-standardization-final2`, with the current Figma workspace on `Figma-VELES-LEGS`.

## Corrections made to the earlier Figma approach

1. Figma is now treated as a visual contract, not a parallel implementation architecture.
2. Reuse is mandatory: the map prioritizes shared components over page-specific duplicates.
3. Platform widgets remain platform contracts; Figma does not replace their runtime behavior.
4. Protected calculator and cart business logic are explicit constraints, not redesign targets.
5. Existing local/global CSS overlap is recorded as a future consolidation target, not permission for mass refactoring.
6. Token conflicts (`#5E8C31` vs `#76BC21`; Montserrat/Playfair vs PT Root UI/Roboto) are recorded as decisions to resolve, not facts to silently overwrite.
7. Runtime DOM/Computed Style remains a separate verification stage because source inspection alone cannot prove browser behavior.

## Key conclusion

The strongest next move is **not** immediate global CSS cleanup.

The strongest next move is to establish a canonical Figma Foundations layer and then define one reusable Product Card from the actual InSales widget markup. This gives the project a visual contract before touching multiple page templates.

## Protection

No production template was replaced in this reconciliation. `main` remains outside scope. `V2.1_HOME_APPEND.liquid` and calculator logic remain protected.

## Verification limits

Repository-side text/configuration evidence is directly verified through GitHub. A local byte-for-byte clone, binary archive internals, live DOM/Computed Style and full browser/device validation remain `NOT VERIFIED` or `PARTIALLY VERIFIED` where applicable.
