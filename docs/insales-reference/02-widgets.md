# InSales: Widgets

Официальный источник: `https://www.insales.ru/collection/vidzhety`

## Модель

Шаблоны 4-го поколения состоят из настраиваемых widgets. Widget обычно имеет `snippet.liquid`, `snippet.scss`, `snippet.js`, а также файлы настроек/переводов в зависимости от назначения.

Widget-листы доступны через `widget_lists`. Вывод выполняется циклом `{% for widgetDrop in widget_lists.<handle>.widgets %}` и `{% widget widgetDrop %}`.

Стили/скрипты widget-листов подключаются через `widgets_assets`.

## Следствие для VELES LEGS

Системный widget нельзя считать обычным HTML-компонентом только по имени CSS-класса. Для надёжной работы нужно знать:

1. какой widget-list его рендерит;
2. настройки widget;
3. фактический DOM;
4. какие стили пришли из Core/widget CSS;
5. какие JS-события поддерживает платформа.

Поэтому Product Card, cart counter, filters, pagination и product controls в Figma должны иметь пометку `Platform-backed`, если их runtime отдан InSales.

## Официальные поддокументы

- `snippet.liquid`
- `snippet.scss`
- `snippet.js`
- `settings_form.json`
- `settings_data.json`
- `setup.json`
- `messages.json`
- `info.json`
- `preview.jpg`

