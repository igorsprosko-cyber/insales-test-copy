# ZERO-POINT — ТОМ II
## VELES LEGS / новая ступень проекта

**Статус:** рабочий документ текущей ступени проекта  
**Текущая кодовая ветка:** `v2.3-page-standardization-final2`  
**Текущий baseline commit:** `26f1d6b92bf86a2d02769142aac94e304f674ede`  
**Подготовительная ветка для Codex:** `codex-ready`  
**Production:** `main` — не изменять без прямого разрешения  
**Дата синхронизации:** 07.09.2026

---

# 1. НАЗНАЧЕНИЕ ТОМ II

`ZERO-POINT.md` — второй том рабочей книги VELES LEGS.

`ИСТОРИЯ_РАБОТ.md` — Том I: полная хронология, решения и evidence.  
`ZERO-POINT.md` — Том II: текущая точка управления, правила дальнейшей работы и verified/NOT VERIFIED состояние.

При начале новой задачи оба тома читаются совместно.

---

# 2. ИСТОЧНИКИ И ИЕРАРХИЯ

Главный архитектурный старт проекта находится в отдельном репозитории `igorsprosko-cyber/my-first-project`.

Его роль сохраняется:
- `AGENTS.md` — исходные contributor constraints;
- `PROJECT.md` — цели, философия и долгосрочные принципы;
- `ARCHITECTURE.md` — архитектурные принципы;
- `STYLE_GUIDE.md` — визуальные правила;
- `SITE_MAP.md` — фактическая карта InSales-шаблонов и runtime-слоёв;
- `TASKS.md` — исторический план этапов;
- `CONTRIBUTING.md` — правила изменения исходного репозитория;
- `scripts/static_audit.py` и `.github/workflows/main-validation.yml` — исторически созданный автоматический аудит.

Эти материалы **не считаются текущим кодом сайта** и не копируются механически в рабочую тему. Они используются как governing architecture/rules и как источник исходных решений. Текущая реализация всегда читается из `insales-test-copy`.

Текущая иерархия:

`my-first-project:main` → архитектура / правила / стиль  
`insales-test-copy:v2.3-page-standardization-final2` → актуальный код  
`ИСТОРИЯ_РАБОТ.md` → история и доказательства  
`Forensic Performance-разбор сайта VELES LEGS` → performance evidence  
`СТРЕС АНАЛИЗ.md` → комплексный аудит  
`docs/` → технические контракты и карты

---

# 3. НЕПРИКОСНОВЕННЫЕ ГРАНИЦЫ

- `main` не изменять без прямого отдельного разрешения.
- `v2.3-page-standardization-final2` — текущая рабочая кодовая база.
- `codex-ready` — подготовительная ветка; её задача не менять runtime до отдельного задания.
- `v2.3-page-standardization` — reference/governing implementation point, не текущий код.
- `Figma-VELES-LEGS` — архивная/экспериментальная ветка Qwen, не источник текущего production-кода.
- Калькуляторная бизнес-логика защищена: `calcWood`, `handleWood*`, `openManagerForm`, `fillComment`, `wood-*`, `panel-wood`, `panel-metal`, цены, НДС, скидки, вес, объём, quantity/business logic.
- Metal Routing не менять без отдельного задания.
- Не менять `V2.1_HOME_APPEND.liquid` ради стандартизации.
- Не делать массовый refactor без отдельного разрешения.
- Не заменять CSS/Liquid-решения JS injection.
- Не удалять сторонние сервисы без dependency check.

---

# 4. ПОДТВЕРЖДЁННАЯ PERFORMANCE-БАЗА

Forensic v9.0 зафиксировал:
- две тяжёлые картинки существенно увеличивали network payload;
- в аномальном mobile trace LCP был текстовым H1;
- `common.v2.27.9.js` был parser-blocking и имел большой Content Download delay;
- `theme.js` уже defer;
- `settings_loaded` render gate подтверждён на уровне исходников, причинное влияние runtime не доказано;
- после image A/B mobile Performance 39→64, LCP 27,5→9,6 с, TBT 940→140 мс;
- desktop Performance 65→87, LCP 5,1→2,0 с, TBT 190→70 мс;
- оставшийся mobile payload около 2249 KiB, unused-JS potential около 656 KiB.

Эти данные — evidence для дальнейшей проверки, а не разрешение на слепое изменение кода.

---

# 5. ПРОТОКОЛ РАБОТЫ

Для каждой производительной или архитектурной правки:

**baseline → гипотеза → одна сфокусированная правка → test → diff → regression QA → запись результата**.

Не считать гипотезу доказательством. Не подтверждённое runtime-изменение = `NOT VERIFIED`.

Порядок анализа:

0. Git / safety gate  
1. Critical Path  
2. Image delivery / LCP  
3. Parser-blocking / `common.v2.27.9.js` dependency  
4. Critical CSS / `settings_loaded`  
5. First-party JS  
6. Third-party scheduling  
7. Fonts  
8. Main thread / DOM / layout  
9. SEO / A11Y / security / commercial consistency  
10. Visual + functional regression  
11. Final comparable PageSpeed / Network / Performance evidence

Не применять механическое `defer` / `async` / `lazy`.

---

# 6. ПЕРЕД ПЕРВЫМ CODEX-ЗАПУСКОМ

Codex должен начать с:

1. `AGENTS.md`
2. `ZERO-POINT.md`
3. `ИСТОРИЯ_РАБОТ.md`
4. `Forensic Performance-разбор сайта VELES LEGS`
5. `СТРЕС АНАЛИЗ.md`
6. `docs/FIGMA_VELES_LEGS_INDEX.md`
7. нужных документов из `docs/`

После этого — фактический Git inventory и dependency map.

Первый большой запуск Codex не должен сразу менять код. Он должен выдать inventory:
- obsolete/orphan candidates;
- duplicate CSS/JS/Liquid;
- dependency chains;
- performance candidates;
- regression risks;
- рекомендуемый порядок безопасных изменений.

---

# 7. DEFINITION OF DONE

Изменение принимается только при наличии:

- baseline;
- evidence;
- конкретного diff;
- runtime/visual QA;
- calculator/Metal Routing regression check;
- SEO/A11Y/structured-data impact check по необходимости;
- comparable performance evidence;
- commit SHA;
- записи в `ИСТОРИЯ_РАБОТ.md`.

---

# 8. ТЕКУЩЕЕ СОСТОЯНИЕ ДОКУМЕНТАЦИИ

После очистки репозитория удалены подтверждённо устаревшие документы/архив:
- три старых Figma audit/map files;
- старый `IMPLEMENTATION_REPORT.md`;
- старый ZIP `myshop-czi161_theme_2026-08-12.zip`.

Текущий индекс Figma очищен от ссылки на удалённый audit-файл.

`docs/FIGMA_VELES_LEGS_AUDIT_STATUS_V2.md` остаётся консолидированным audit status.

Неудалёнными намеренно остаются `велкес лого .jpg` и `лого26.jpg`: их orphan-статус ещё не доказан.

---

# 9. ПРАВИЛО ДВУХ РЕПОЗИТОРИЕВ

`my-first-project` **не устарел как архитектурный источник**. Его исходный `AGENTS.md` при этом является более строгим режимом «не менять ничего самостоятельно» и не должен затмевать текущий рабочий контракт `insales-test-copy/AGENTS.md`, который специально подготовлен для автономного исследования и контролируемой реализации.

Если документы двух репозиториев расходятся:

- архитектура/стиль/долгосрочные принципы → `my-first-project`;
- текущая реализация/фактический DOM/актуальные зависимости → `insales-test-copy`;
- текущие запреты и safety gate → `insales-test-copy/AGENTS.md` + `ZERO-POINT.md`;
- исторический контекст → `ИСТОРИЯ_РАБОТ.md`.

---

# 10. ПЕРЕКРЁСТНАЯ ССЫЛКА

Полная история: `ИСТОРИЯ_РАБОТ.md`  
Текущая точка: `ZERO-POINT.md`  
Codex operating contract: `AGENTS.md`  
Figma/code map: `docs/FIGMA_VELES_LEGS_CODE_MAP.md`  
Runtime QA contract: `docs/FIGMA_VELES_LEGS_RUNTIME_QA_PLAN.md`
