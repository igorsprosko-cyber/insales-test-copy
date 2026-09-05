# VELES LEGS — Figma Documentation Index

## Baselines

- `docs/FIGMA_VELES_LEGS_ARCHITECTURE.md` — overall Figma/design-system architecture and workflow.
- `docs/FIGMA_VELES_LEGS_CODE_MAP.md` — factual component/page mapping to Liquid, CSS, JS and InSales data/widgets.
- `docs/FIGMA_VELES_LEGS_AUDIT_STATUS.md` — repository audit scope, evidence level and limits.
- `docs/FIGMA_VELES_LEGS_WORKLOG.md` — chronological archive of the Figma workstream.

## Source hierarchy

```text
my-first-project
  ↓ project rules / architecture / style / contribution constraints

insales-test-copy:v2.3-page-standardization-final2
  ↓ actual InSales theme implementation

Figma-VELES-LEGS
  ↓ design-system + implementation map + controlled changes

Figma
  ↓ approved visual source of truth

InSales
  ↓ runtime data + platform widgets
```

## Canonical next work

Start with Foundations → Shell → Product Card → Product Page/Catalog → Home → Cart → secondary templates.

Do not change protected calculator/business logic or `V2.1_HOME_APPEND.liquid` during visual standardization.
