# InSales → VELES LEGS: прикладной справочник

## 1. Shell

InSales `layout` + widget-lists должны оставаться платформенным каркасом. Figma моделирует его состояния, а не заменяет его статической страницей.

## 2. Product Card

Это приоритетный мост для Figma:

`Figma Product Card` → `system catalog/product widget` → реальный DOM → `theme.scss`/page CSS → `theme.js` при интеракциях → InSales product/variant data.

Проверяем отдельно:

- фото и ratio/fit;
- название;
- цена;
- старая цена/скидка при наличии;
- SKU/служебные сведения;
- add-to-cart;
- quantity control;
- compare/favorite;
- hover;
- mobile state.

## 3. Product Page

Не переписываем widget-логику. В Figma сначала проектируем информационную и визуальную иерархию, затем сопоставляем её с `product.liquid` и существующими InSales selectors/data attributes.

## 4. Catalog / Collection

Переиспользуются Product Card, Breadcrumb, Sort/Select, Filter и Pagination. Настройки widget и CSS variables должны учитываться до создания новых page-local overrides.

## 5. Cart

Функциональная логика VAT/invoice остаётся отдельным runtime-слоем. Figma меняет только presentation states.

## 6. Calculator

Калькулятор homepage — protected implementation. Figma создаёт визуальную оболочку и состояния, но не меняет formulas, IDs, handlers или business logic.

## 7. Token policy

Сначала строится semantic token table:

`Figma token` → `VELES token` → `InSales/Core variable` → `runtime value`.

Конфликты (`#5E8C31`/`#76BC21`, Montserrat/Playfair/Roboto/PT Root UI) сначала фиксируются как решения Design System, а не устраняются случайными CSS-патчами.
