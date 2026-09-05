# InSales: Core.css

Официальный источник: `https://www.insales.ru/collection/corecss`

## Ключевые моменты

На страницах InSales подключается Core.css. Он использует CSS variables и grids. Каждый widget находится внутри автоматически создаваемой обёртки `.layout`, настройки которой передаются CSS-переменными в `style`.

Примеры платформенных состояний: фон, wide background/content, edge, hide-mobile/hide-desktop, отступы и другие параметры.

## Следствие для VELES LEGS

Нельзя проектировать Figma-компонент только по статическому снимку DOM. Некоторые размеры, цвета и состояния приходят через CSS variables из настроек темы/widget.

Правильная цепочка:

`Figma token` → `VELES theme token` → `InSales/Core variable` → `runtime DOM`.

Глобальный `theme.scss` должен добавлять только нужную проектную оболочку и не маскировать механизм Core.css без причины.
