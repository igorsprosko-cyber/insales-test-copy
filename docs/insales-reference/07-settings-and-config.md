# InSales: настройки и конфигурация темы

Официальные источники:
- `https://www.insales.ru/collection/shablony/product/settingsjson`
- `https://www.insales.ru/collection/shablony/product/setupjson-2`
- `https://www.insales.ru/collection/shablony/product/messagesjson`
- `https://www.insales.ru/collection/vidzhety/product/settings_formjson`
- `https://www.insales.ru/collection/vidzhety/product/settings_datajson-2`

## settings.json

Определяет настройки темы, доступные в редакторе: текст, rich-text, число, checkbox, select, range slider, button group, файл, цвет, шрифты и другие поля.

## settings_data.json

Хранит текущие/дефолтные значения настроек. В проекте именно здесь обнаружено расхождение платформенных значений с нашим CSS Design System: PT Root UI и `#76BC21` против проектных Montserrat/Playfair и `#5E8C31`.

## setup.json

Инициализирует структуру темы: widget-lists, blocks, settings и связанные объекты при установке/работе темы.

## messages.json

Отвечает за тексты/переводы. Учитываются уровни глобальных, theme и widget messages с приоритетами платформы.

## Для VELES LEGS

Эти файлы являются частью платформенного контракта. Изменять их нельзя только потому, что Figma показывает другой цвет или шрифт. Сначала определить, является ли настройка источником поведения в runtime, затем выполнять отдельную согласованную задачу.
