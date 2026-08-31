# InSales: архитектура темы

Официальные источники: `https://www.insales.ru/collection/shablony` и `https://www.insales.ru/collection/doc-basics`

## Ключевые правила

Тема 4-го поколения разделена на `media`, `config`, `snippets`, `templates`. `templates` содержит основные типы страниц и layouts; `snippets` — переиспользуемые фрагменты; `config` — настройки/инициализацию темы; `media` — CSS/JS/assets.

`layouts` задают общую часть страницы: header, footer, sidebar и вывод нужных widget-lists. В InSales также существуют специальные checkout/client-account layouts.

## Для VELES LEGS

Фактический runtime-каркас:

`layouts.layout.liquid` → `head` → header widgets → page template → sidebar/widgets → footer/widgets → fixed/outside widgets → styles → theme.js.

Это означает, что в Figma должен существовать отдельный `Shell / Page Frame`, а Header/Footer/Sidebar должны быть компонентами системы, а не копиями внутри страниц.

## Важное ограничение

Нельзя переносить визуальный дизайн в новый Liquid-файл, пока не проверено, не существует ли уже подходящий layout/snippet/widget. Сначала переиспользование, затем расширение существующего решения.
