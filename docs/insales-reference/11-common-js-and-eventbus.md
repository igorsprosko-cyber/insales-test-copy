# InSales — Common.js and EventBus notes for VELES LEGS

## Canonical external rules

InSales Common.js provides shared shop functionality for AJAX products, product, cart, search, compare, favorites, filters, forms and UI helpers. The official documentation states that Common.js reserves global names including `Cart`, `Shop`, `Products`, `Compare`, `FavoritesProducts`, `Site`, `AjaxSearch`, `ajaxAPI`, `Template` and `EventBus`; project code must not redefine these globals. APIs should be used after `DOMContentLoaded` / document ready. Source: https://www.insales.ru/collection/doc-js

EventBus is the platform publish/subscribe mechanism intended to let base functionality interact with custom scripts without coupling directly to markup. Source: https://www.insales.ru/collection/doc-js/product/eventbus

## VELES implementation consequences

1. Figma may describe visual states, but must not invent a parallel event architecture.
2. A component that depends on InSales widget state must identify the corresponding platform event/DOM contract before implementation.
3. Existing `theme.js` and template-local scripts must be checked for reserved globals before adding JS.
4. New interactions should prefer existing platform mechanisms when they already cover the behavior.
5. Visual redesign must not change calculator/business logic.

## Status

Documentation source: VERIFIED via official InSales documentation.
Runtime behavior in VELES LEGS: requires live-browser verification before claiming platform-level behavior as VERIFIED.
