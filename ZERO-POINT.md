# ZERO-POINT — ТОМ II
## VELES LEGS / новая ступень проекта

**Статус:** рабочий документ следующей ступени проекта  
**Рабочая ветка:** `v2.3-page-standardization-final2`  
**`codex-ready`: НЕАКТИВНАЯ подготовительная ветка; не является implementation source и не является источником правил.**  
**Последний проверенный code baseline:** `26f1d6b92bf86a2d02769142aac94e304f674ede`  
**Текущий HEAD ветки:** определяется актуальным Git ref `v2.3-page-standardization-final2`; этот документ намеренно не фиксирует изменяющийся HEAD SHA, чтобы документационные коммиты не становились ложным code baseline.  
**Code baseline:** `26f1d6b92bf86a2d02769142aac94e304f674ede` — отдельная контрольная точка; последующие документационные коммиты не считаются изменением production/runtime code.  
**Binary/archive limitation:** файлы, недоступные для текстовой инспекции, остаются `NOT VERIFIED`.  
**Важно:** между code baseline и текущим HEAD зафиксированы только документационные изменения; production/runtime code не менялся.  
**Production:** `main` — не изменять без прямого разрешения  
**Дата открытия тома:** 07.09.2026

---

# 1. НАЗНАЧЕНИЕ ТОМ II

`ZERO-POINT.md` — второй том рабочей книги VELES LEGS.

Первый том — `ИСТОРИЯ_РАБОТ.md` — сохраняется как полная хронология выполненных работ, решений, доказательств и ошибок проекта.

Том II начинается с новой ступени: **ZERO-POINT**. Его задача — не переписывать прошлое, а превратить накопленную историю в управляемый протокол дальнейшей работы.

С этого момента при работе над текущей производительностью и связанными качественными задачами:

**`ИСТОРИЯ_РАБОТ.md` = архив и основание проекта.**  
**`ZERO-POINT.md` = текущая рабочая книга, план действий, доказательства, решения и результаты новой ступени.**

При начале новой задачи сначала читаются оба тома: история даёт контекст, ZERO-POINT даёт текущую точку управления.

---

# 2. РОЛИ

## Владелец проекта — пользователь

Пользователь определяет цель, принимает бизнес-решения, предоставляет фактические runtime-результаты, когда они недоступны непосредственно из GitHub, и принимает визуальный/коммерческий результат.

Пользователь не обязан самостоятельно определять технический способ исправления.

## Технический исполнитель — AI

AI отвечает за исследование кода и репозитория, причинно-следственный анализ, выбор минимального безопасного технического изменения, работу с GitHub, проверку diff, регрессионный анализ, соблюдение защищённых границ и ведение этой рабочей книги.

AI не должен выдавать гипотезу за доказанный факт. Если причинность не подтверждена — `NOT VERIFIED`.

---

# 3. НЕПРИКОСНОВЕННЫЕ ГРАНИЦЫ

- `main` не изменять без прямого отдельного разрешения.
- `v2.3-page-standardization-final2` — текущая рабочая кодовая ветка до создания нового baseline.
- `Figma-VELES-LEGS` — отдельная тестовая/архивная ветка; не использовать как источник текущего implementation-кода и не синхронизировать обратно с `v2.3-page-standardization-final2`.
- Калькуляторная бизнес-логика защищена: `calcWood`, `handleWood*`, `openManagerForm`, `fillComment`, `wood-*`, `panel-wood`, `panel-metal`, цены, НДС, скидки, вес, объём, quantity/business logic.
- Metal Routing не менять без отдельного задания.
- Не делать массовый refactor без отдельного разрешения.
- Не заменять CSS/Liquid-решения JS injection.
- Не удалять сторонние сервисы только по факту их существования: сначала dependency check.
- Любое performance-изменение: **baseline → одна малая правка → retest → diff → runtime/visual QA → запись результата**.
- Новые файлы истории вместо `ИСТОРИЯ_РАБОТ.md` не создавать. `ZERO-POINT.md` является отдельным томом по прямому решению владельца проекта.

---

# 4. ЧТО ПЕРЕШЛО ИЗ ТОМА I

К новой ступени переданы следующие подтверждённые факты:

### Производительность

В forensic-разборе версии 9.0 зафиксированы две разные проблемы, которые нельзя смешивать:

1. тяжёлые изображения существенно увеличивали network payload и ухудшали показатели;
2. в аномальном mobile trace LCP был текстовым H1, а наиболее подозрительным критическим узлом был parser-blocking `common.v2.27.9.js` с очень поздним окончанием передачи.

После удаления двух тяжёлых изображений был зафиксирован улучшенный baseline:

- Mobile Performance: **39 → 64**;
- Mobile LCP: **27,5 → 9,6 с**;
- Mobile TBT: **940 → 140 мс**;
- Desktop Performance: **65 → 87**;
- Desktop LCP: **5,1 → 2,0 с**;
- Desktop TBT: **190 → 70 мс**.

Оставшийся mobile payload — около **2249 KiB**, unused JS potential — около **656 KiB**.

### Render gate

В исходниках подтверждён реальный механизм:

`head.liquid` → `body:not(.settings_loaded) { content-visibility: hidden; }`  
`styles.liquid` → `settings_loaded` добавляется через `onload` для `theme.css`.

Это **source-level fact**, но его runtime-каузальность для FCP/LCP пока не подтверждена.

### JavaScript

`theme.js` уже использует `defer`.

`common.v2.27.9.js` приходит через `{% widgets_assets css_js_lists %}`, поэтому нельзя произвольно считать его прямым ручным `<script>` и нельзя менять generated asset без поиска его источника и зависимости.

### Third-party

Yandex Metrica, InSales, GTM, SmartCaptcha и другие внешние ресурсы учитывать по реальному critical path. Правило — убрать необязательное из критического пути только там, где это безопасно для функциональности и сбора данных; не применять механическое «defer всё».

### SEO / runtime / коммерческие данные

Runtime 404/canonical и коммерческие данные являются отдельными проверками новой ступени.

Нужно проверить фактическую совместимость:

- минимального заказа;
- доступности;
- ценовых диапазонов;
- B2B/B2C формулировок;
- Product / Offer / AggregateOffer;
- соответствия текста реальному поведению товара.

Эти проверки не должны изменять цены или бизнес-логику калькулятора.

---

# 5. ZERO-POINT — ТОЧКА СТАРТА

Перед первой новой кодовой правкой необходимо подтвердить:

### Git

- текущая ветка = `v2.3-page-standardization-final2`;
- HEAD = зафиксированный baseline или явно новый baseline;
- рабочее состояние и diff проверены;
- `main` и защищённые области не затронуты.

### Runtime baseline

До первого performance-кода нужен **свежий и однородный runtime baseline** для Mobile и Desktop.

Нельзя смешивать:

- разные PageSpeed runs;
- разные throttling conditions;
- разные версии страницы;
- лабораторные показатели без маркировки условий.

Нужно сохранить исходные evidence из Network/Performance, прежде чем менять код.

### Причинный узел №1 — IMAGE DELIVERY / LCP RESOURCE LOADING

Первым контролируемым узлом выбран image delivery, потому что именно здесь уже имеется прямое A/B-доказательство существенного влияния тяжёлых изображений на payload и PageSpeed/LCP baseline. Это не доказывает, что изображения являются единственной причиной оставшегося LCP.

Текущий locked Patch #1 проверяет только загрузочную политику конкретных homepage images. Он не меняет формат/размер самих assets и не смешивается с responsive delivery.

### Следующие кандидаты, пока НЕ разрешённые к изменению

1. **`theme.css` → `onload` → `settings_loaded` → render gate → FCP/LCP** — source-level факт, runtime-каузальность не доказана.
2. **`widgets_assets` → parser-blocking `common.v2.27.9.js`** — доказанный critical-path suspect из historical trace, но текущий initiator/waterfall должен быть проверен свежим runtime evidence.

Порядок основан на качестве уже имеющегося evidence. Ни один кандидат не считается доказанной первопричиной только по source inspection.

---

# 6. РАБОЧИЙ ПРОТОКОЛ TOM II

## Этап 0 — ZERO-POINT

1. Проверить branch / HEAD / diff.
2. Зафиксировать свежий Mobile + Desktop baseline.
3. Сохранить Network/Performance evidence.
4. Выбрать один причинный узел.
5. Определить безопасный rollback.

## Этап 1 — Critical Path

Проверить:

- HTML/document;
- critical CSS;
- `settings_loaded`;
- LCP discovery;
- parser-blocking;
- инициатор и зависимости `common.v2.27.9.js`;
- fonts;
- waterfall тяжёлых изображений;
- third-party overlap.

## Этап 2 — Image Delivery / LCP

Проверить responsive images, modern formats, размеры, reservation, discovery и priority. LCP-ресурс не переводить в lazy-load.

## Этап 3 — Parser / JS

Inventory JS → зависимости → defer/conditional loading только по доказательствам.

## Этап 4 — CSS / Fonts / Render Gates

Проверить render-blocking CSS, font strategy, `settings_loaded` и реальный visual/FOUC risk.

## Этап 5 — Third-party

Проверить критический путь аналитики и внешних сервисов без потери функциональности и корректности данных.

## Этап 6 — Main Thread / DOM

Только после network/critical-path анализа переходить к JS execution, DOM, style/layout и long tasks.

## Этап 7 — Quality / SEO / A11Y / Commercial

Проверить runtime 404/canonical, metadata, structured data, A11Y, содержательную и коммерческую согласованность.

## Этап 8 — Regression / Release Gate

Перед принятием:

**diff → runtime → visual → calculator/Metal Routing regression → PageSpeed comparison → история.**

---

# 7. КЛЮЧЕВОЕ ПРАВИЛО ПРОЕКТА

Не оптимизировать цифру ради цифры.

`avoid synthetic Lighthouse-only gains` означает: не создавать лабораторное улучшение ценой ухудшения реального пользовательского опыта, функциональности, доступности, SEO или бизнес-поведения.

Каждое изменение должно иметь:

**Причина → доказательство → минимальная правка → измеримый результат → отсутствие регрессии.**

---

# 8. ПЕРВЫЙ ЗАПИСЫВАЕМЫЙ ЭКСПЕРИМЕНТ

Пока свежий runtime baseline не получен, код не менять.

После получения baseline выполнить только разрешённый Patch #1 image-loading experiment. Render-gate `settings_loaded` остаётся отдельным последующим forensic node и не смешивается с Patch #1.

Сравнивать минимум:

- FCP;
- LCP и LCP element;
- TBT;
- CLS;
- Speed Index;
- визуальный результат;
- Network waterfall;
- наличие FOUC/неоформленного первого кадра.

Только после этого решать, является ли render gate первой реальной причинной точкой.

---

# 9. ФОРМАТ ЗАПИСИ НОВОЙ РАБОТЫ

Каждая новая операция в этом томе фиксируется как отдельная запись:

### [дата] — [операция]

**Цель:**  
**Baseline:**  
**Доказательство:**  
**Изменённые файлы:**  
**Что НЕ изменялось:**  
**Результат:**  
**Regression QA:**  
**Следующий шаг:**  

Если результат не подтверждён — писать `NOT VERIFIED`, а не делать вывод по предположению.

---

# 10. ПЕРЕКРЁСТНАЯ ССЫЛКА

Полная хронология, старые baseline, предыдущие решения и накопленные уроки находятся в:

**`ИСТОРИЯ_РАБОТ.md` — Том I.**

Текущая новая ступень и последующие эксперименты ведутся здесь:

**`ZERO-POINT.md` — Том II.**

При продолжении проекта оба тома читаются совместно.


## 2026-09-08 — FRESH PERFORMANCE BASELINE / INTERMEDIATE RESULT

**Status:** VERIFIED as a fresh PageSpeed Insights/Lighthouse measurement supplied for independent audit. This is an **intermediate runtime baseline**, not a final forensic conclusion and not authorization to modify production code.

### Desktop
- Performance: **88**
- FCP: **0.8 s**
- LCP: **1.8 s**
- TBT: **100 ms**
- CLS: **0**
- Speed Index: **1.7 s**
- LCP element: **H1 (text)**

### Mobile
- Performance: **66**
- FCP: **3.2 s**
- LCP: **8.7 s**
- TBT: **90 ms**
- CLS: **0**
- Speed Index: **4.6 s**
- LCP element: **H1 (text)**

### Fresh critical-path evidence — Mobile
Maximum reported critical-path delay: **1577 ms**.

Observed resources:
- `front_api/cart.json`: **1577 ms**
- `common.v2.27.9.js`: **1148 ms**
- `theme.css`: **1077 ms**
- `core-css.css`: **970 ms**
- `jquery-3.5.1.min.js`: **968 ms**
- `my-layout.js`: **963 ms**

### Fresh image evidence — Mobile
Lighthouse reports approximately **492 KiB** potential image savings. Current `opora-a178-chrome.webp` is reported at **67.7 KiB**, with estimated savings of **58.9 KiB**. Current LCP is H1, therefore the Hero image is **not established by this baseline as the LCP element or primary bottleneck**.

### Third-party / unused JavaScript evidence
Third-party resources are reported at more than **700 KiB** combined. Lighthouse reports approximately **658 KiB** unused JavaScript. These are recorded as observed audit findings, not yet as causal findings for the H1 LCP delay.

### Interim interpretation / evidence status
- **VERIFIED:** current LCP element is H1 on Desktop and Mobile.
- **VERIFIED:** Mobile LCP is 8.7 s; Desktop LCP is 1.8 s.
- **VERIFIED:** the listed JS/CSS/cart resources participate in the reported Mobile critical path.
- **VERIFIED:** current Hero asset is `.webp` and relatively small at 67.7 KiB in this audit.
- **NOT VERIFIED:** that Hero loading is the current primary cause of LCP delay.
- **NOT VERIFIED:** that adding `defer` to `common.v2.27.9.js` is safe or causally sufficient.
- **NOT VERIFIED:** that `front_api/cart.json` alone causes the full LCP delay.
- **NEXT FORENSIC TARGET:** causal chain around H1 visibility, `settings_loaded`, `front_api/cart.json`, `common.v2.27.9.js`, CSS dependencies and render-gate behavior.

### Gate
**PATCH #1: LOCKED.** No production/runtime code change is authorized by this entry. This baseline must be followed by read-only causal forensic analysis before any implementation change.

Historical forensic measurements for old `.jpg` assets are not transferred to current `.webp` assets as evidence. Binary/archive items that cannot be textually inspected remain **NOT VERIFIED**.


## 2026-09-08 — READ-ONLY FORENSIC AUDIT #1: H1 RENDER GATE

**Status:** READ-ONLY forensic pass completed. No production/runtime code changed. PATCH #1 remains LOCKED.

### VERIFIED from current `final2` source
1. `head.liquid` explicitly hides the document body while `body:not(.settings_loaded)` is true: `content-visibility: hidden` when supported, with `visibility: hidden` fallback.
2. `styles.liquid` adds the `settings_loaded` class only from the `onload` handler of the stylesheet link for `theme.css`: `document.body.classList.add('settings_loaded')`.
3. Therefore the current source contains a direct render gate coupling first visual body availability to successful `theme.css` load completion. This is a code-level VERIFIED dependency; it is not yet proof that this gate alone causes the full 8.7 s Mobile LCP.
4. `layouts.layout.liquid` emits `{% widgets_assets css_js_lists %}` before `{% include "styles" %}`. The asset lists include page/header/footer/sidebar/outside and template-specific lists. This is the current source-level path through which InSales-generated CSS/JS assets enter the document.
5. `theme.js` is explicitly loaded with `defer` in the current layout. Therefore a blanket recommendation to add `defer` to every script is not an accurate description of the current source state.
6. The current repository search does **not** expose source files named `common.v2.27.9.js` or a direct `front_api/cart.json` call. Their causal relationship to the render gate therefore cannot be proven from repository source alone; they are currently runtime/Lighthouse observations.

### NOT VERIFIED
- Whether `front_api/cart.json` directly delays the `theme.css` load or the `settings_loaded` event.
- Whether `common.v2.27.9.js` is parser-blocking in the exact current document and whether it can safely be deferred.
- Whether the `settings_loaded` gate is the dominant cause of the 8.7 s LCP, versus only one contributor.
- Whether removing/relaxing the gate is safe without visual regression or FOUC across the site.

### Important forensic conclusion
The strongest current source-level finding is **not** "Hero is slow" and **not** "common.js must receive defer". It is: **the site deliberately withholds body rendering until `theme.css` fires `onload` and adds `settings_loaded`.** The next audit must connect this verified source dependency to the fresh Mobile runtime waterfall before any implementation change.

### Required independent Codex audit
Codex should independently verify the runtime/source causal chain, read-only, starting from this entry and the fresh baseline entry above. It must inspect `head.liquid`, `styles.liquid`, `layouts.layout.liquid`, the current widget/asset configuration, and any discoverable source/dependency references for `common.v2.27.9.js` and `front_api/cart.json`. It must not modify code. The expected output is evidence, causal chain, uncertainty, and a minimal safe Patch #1 proposal—not an implementation.
