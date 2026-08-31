# InSales: JavaScript / Common.js

Официальный источник: `https://www.insales.ru/collection/doc-js`

## Основные модули

Официальная библиотека `common-js@v2` покрывает товар, корзину, AJAX-товары, живой поиск, сравнение, избранное, EventBus, API магазина, AJAX-фильтры, формы и UI-вспомогательные методы.

Обращения к API Common.js выполняются после `DOMContentLoaded`.

EventBus — Pub/Sub-механизм для обмена событиями между базовым функционалом и пользовательскими скриптами без жёсткой привязки к DOM.

## Для VELES LEGS

`theme.js` и inline `<script>` в Liquid нельзя рассматривать как один слой. Перед переносом логики нужно установить источник: platform Common.js, theme.js или локальный скрипт конкретной страницы.

Особенно защищённые зоны проекта:

- calculator functions/DOM;
- cart VAT/invoice logic;
- InSales purchase/cart behavior.

Visual-only изменения не должны ломать событийную модель.

Полезные официальные страницы:

- товар: `https://www.insales.ru/collection/doc-js/product/tovar`
- корзина: `https://www.insales.ru/collection/doc-js/product/korzina`
- сравнение: `https://www.insales.ru/collection/doc-js/product/sravnenie`
- избранное: `https://www.insales.ru/collection/doc-js/product/izbrannoe`
- EventBus: `https://www.insales.ru/collection/doc-js/product/eventbus`
- API-модуль: `https://www.insales.ru/collection/doc-js/product/modul-dlya-raboty-s-api-magazina`
