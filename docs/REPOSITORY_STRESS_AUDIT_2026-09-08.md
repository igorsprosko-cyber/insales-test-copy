# VELES LEGS — REPOSITORY / DEPENDENCY STRESS AUDIT

**Date:** 2026-09-08
**Mode:** read-only; no production/runtime code changes.

## 1. Repository inventory

Accessible project repositories:
- `igorsprosko-cyber/insales-test-copy` — primary implementation repository.
- `igorsprosko-cyber/my-first-project` — original architecture/rules/reference repository.
- `igorsprosko-cyber/foto-redaktor` — separate support/tool repository.

## 2. Branch inventory

`insales-test-copy`: `main`, `v2.3-page-standardization-final2`, `Figma-VELES-LEGS`, `codex-ready`.
`my-first-project`: `main`.
`foto-redaktor`: `main`.

## 3. Authority result

`v2.3-page-standardization-final2` is the only current implementation source. `Figma-VELES-LEGS` is archival/design/test context. `my-first-project` is the original architecture/rules source, not a current-code mirror. `foto-redaktor` has no repository-search evidence of dependency on VELES LEGS.

## 4. Confirmed hazards

- `ZERO-POINT.md` contains older documentation-HEAD metadata; it must distinguish historical code baseline from current documentation HEAD.
- `FIGMA_VELES_LEGS_WORKLOG.md` has a historical Figma-branch header that can be mistaken for current code authority.
- `docs/FIGMA_VELES_LEGS_INDEX.md` contains an implementation-order wording that must remain subordinate to the newer controlled sequence until reconciled.
- `my-first-project/TASKS.md` and `SITE_MAP.md` contain historical `v2.3-page-standardization` references; they are not current branch authority.
- `codex-ready` is not the current implementation branch and must not be used as an implementation baseline without synchronization.

## 5. Current code safety

Protected areas remain: `V2.1_HOME_APPEND.liquid`, calculator logic/DOM/IDs, Metal Routing, VAT/NDS/pricing/quantity business logic. Patch #1 and Patch #2 do not authorize changes to these areas.

Current homepage image source is in `index.liquid`; current source uses `.webp`. Historical forensic `.jpg` transfer sizes must not be reused as current measurements without fresh runtime evidence.

## 6. Accent-color audit

Current `final2/settings_data.json` uses `#5E8C31` for the button and accent text values. The previous `#76BC21` conflict is historical and must not be treated as an unresolved current final2 conflict without new evidence.

## 7. foto-redaktor boundary

The support tool contains external Google Fonts and dynamically loads `heic2any` from jsDelivr in its standalone artifact despite describing itself as local/no-network. This is a support-tool observation only and is not a VELES runtime dependency. Its tracked `workspace (1).tar` is binary and cannot be internally inspected by the available text API; status: NOT VERIFIED internally.

## 8. Runtime limitation

Repository inspection cannot establish current browser waterfall, HTTP status, rendered DOM, generated widget output, transferred bytes or current LCP causality. Those require runtime evidence.

## 9. Decision

Repository structure and authority are sufficiently understood, but documentation-navigation inconsistencies must be reconciled before the first code change. Patch #1 remains LOCKED. Patch #2 remains LOCKED until Patch #1 is accepted and Patch #2 prerequisites are verified.

**Immediate next gate:** CODEX PRE-IMPLEMENTATION AUDIT, read-only, against the reconciled `v2.3-page-standardization-final2` state.
