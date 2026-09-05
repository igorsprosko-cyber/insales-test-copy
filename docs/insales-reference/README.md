# InSales — справочник проекта VELES LEGS

Дата: 2026-08-31
Источник: официальная документация InSales

## Назначение

Папка содержит не зеркальную копию сайта InSales, а проектный справочник: официальные ссылки + краткие технические конспекты, необходимые для разработки и проверки темы VELES LEGS.

Полный текст официальной документации остаётся на сайте InSales; при спорных вопросах первичным источником считается актуальная страница документации.

## Разделы

1. `01-template-architecture.md` — структура темы, layouts, templates, config, snippets.
2. `02-widgets.md` — InSales Widgets и widget_lists.
3. `03-liquid.md` — Liquid, объекты, операторы, фильтры.
4. `04-core-css.md` — Core.css, layout-обёртки и CSS variables.
5. `05-javascript.md` — common-js@v2, EventBus, товар, корзина, поиск, compare/favorites.
6. `06-api-and-data.md` — API, данные магазина и объектная модель.
7. `07-settings-and-config.md` — settings.json, settings_data.json, setup.json, messages.json.
8. `08-seo-and-runtime.md` — SEO, sitemap и runtime-диагностика.
9. `09-veles-application.md` — как применять документацию InSales непосредственно к VELES LEGS.
10. `SOURCES.md` — каталог официальных источников.

## Главное для VELES LEGS

Тема InSales состоит не только из Liquid. Для корректной реализации интерфейса нужно одновременно учитывать:

- Liquid-шаблоны;
- layouts;
- snippets;
- системные widgets;
- Core.css и CSS variables;
- common-js@v2 / EventBus;
- конфигурацию settings/setup;
- фактический DOM системных виджетов.

Именно поэтому Figma-карта VELES LEGS должна описывать визуальный контракт, но не заменять платформенный runtime.
