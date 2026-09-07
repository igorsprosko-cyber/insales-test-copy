# VELES LEGS — Figma Documentation Index

## КАНОНИЧЕСКАЯ ТОЧКА ПРОЕКТА

**Текущий код:** `insales-test-copy:v2.3-page-standardization-final2`  
**Production:** `main` — не изменять без прямого разрешения.  
**Единый журнал:** `ИСТОРИЯ_РАБОТ.md`.  
**Forensic evidence:** `Forensic Performance-разбор сайта VELES LEGS`.  
**Комплексный аудит:** `СТРЕС АНАЛИЗ.md`.

Перед любой новой работой сначала читать:
1. `ИСТОРИЯ_РАБОТ.md` — особенно разделы **17, 20, 30, 33 и актуальную конечную точку**;
2. `Forensic Performance-разбор сайта VELES LEGS`;
3. `СТРЕС АНАЛИЗ.md`;
4. соответствующий документ из `docs/`;
5. только затем исходный код затрагиваемого участка.

## Источники

`my-first-project:main` остаётся архитектурным и нормативным источником проекта: `PROJECT.md`, `ARCHITECTURE.md`, `STYLE_GUIDE.md`, `SITE_MAP.md`, `TASKS.md`, `CONTRIBUTING.md`, исходный `AGENTS.md` и исторический static audit.

`insales-test-copy:v2.3-page-standardization-final2` — единственный источник текущей реализации темы.

`codex-ready` — подготовительная ветка для Codex, созданная от актуального baseline без изменения runtime-кода.

## Baselines

- `docs/FIGMA_VELES_LEGS_ARCHITECTURE.md` — Figma/design-system architecture, loading law и handoff rules.
- `docs/FIGMA_VELES_LEGS_CODE_MAP.md` — factual mapping Figma → Liquid/CSS/JS/InSales.
- `docs/FIGMA_VELES_LEGS_AUDIT_STATUS_V2.md` — consolidated repository/performance audit status and verification limits.
- `docs/FIGMA_VELES_LEGS_FOUNDATIONS_SPEC.md` — Foundations contract.
- `docs/FIGMA_VELES_LEGS_RUNTIME_QA_PLAN.md` — runtime + forensic verification gate.
- `docs/FIGMA_VELES_LEGS_WORKLOG.md` — Figma workstream archive.
- `docs/insales-reference/` — official InSales reference notes and project-specific contracts.

## Source hierarchy

```text
my-first-project:main
  ↓ architecture / project rules / style / long-lived governance

insales-test-copy:v2.3-page-standardization-final2
  ↓ ONLY CURRENT CODE / CURRENT IMPLEMENTATION

codex-ready
  ↓ preparation branch for Codex; no runtime changes by default

ИСТОРИЯ_РАБОТ.md
  ↓ project history / decisions / evidence

Forensic Performance-разбор сайта VELES LEGS
  ↓ performance evidence

СТРЕС АНАЛИЗ.md
  ↓ comprehensive audit

docs/
  ↓ design-system / Figma / InSales / QA contracts

Figma
  ↓ visual contract once explicitly approved

InSales
  ↓ runtime data + platform widgets
```

**Архивные ветки `v2.3-page-standardization`, `Figma-VELES-LEGS`, `VELES-LEGS-new-baseline` не являются источником текущего кода.**

## Синхронизация с forensic/PageSpeed

Документация `docs/` считается синхронизированной с текущей доказательной базой в пределах подтверждённых данных:

- LCP/FCP anomaly и raw-trace findings;
- parser-blocking `common.v2.27.9.js`;
- network/content-download distinction;
- heavy-image A/B evidence;
- third-party/unused-JS findings;
- fonts/CSS/critical-path findings;
- `settings_loaded` render-gate как source-level finding, causal impact — не доказан;
- обязательный forensic correlation gate;
- запрет механического `defer/async/lazy`;
- обязательный comparable before/after testing.

Численные PageSpeed baseline и полная forensic chronology хранятся в `ИСТОРИЯ_РАБОТ.md` и в forensic-файле; `docs/` не заменяет журнал.

## Canonical implementation order

```text
0. Baseline + safety gate
1. Critical Path inventory
2. Image delivery / LCP discovery
3. Parser-blocking / common.js dependency
4. Critical CSS / settings_loaded gate
5. First-party interaction JS
6. Analytics / third-party scheduling
7. Fonts
8. Main-thread / layout / DOM
9. SEO / A11Y / security / content consistency
10. Visual + functional regression
11. Final PageSpeed / Network / Performance verification
```

Каждый пункт выполняется только после доказательства предыдущего причинного узла и с минимальным diff.

## Definition of done

Для каждого изменения должны существовать:

- evidence;
- baseline;
- конкретный файл и участок;
- минимальный diff;
- ожидаемый эффект;
- PageSpeed before/after;
- Network/Performance evidence;
- runtime/visual QA;
- SEO/A11Y/Agentic regression check;
- Git diff;
- commit SHA;
- запись в `ИСТОРИЯ_РАБОТ.md`.

Защищённые calculator/Metal Routing/business logic и `V2.1_HOME_APPEND.liquid` не изменяются без отдельного разрешения.
