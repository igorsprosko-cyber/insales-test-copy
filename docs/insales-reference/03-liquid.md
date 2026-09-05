# InSales: Liquid

Официальные источники:
- `https://www.insales.ru/collection/doc-liquid`
- `https://www.insales.ru/collection/doc-liquid/product/objects`
- `https://www.insales.ru/collection/doc-liquid/product/filtry` 

## Для VELES LEGS важно

Liquid отвечает за серверную разметку и вывод динамических данных. Основные сущности проекта: `product`, `collection`, `cart`, `articles/blogs`, `account`, `template` и другие глобальные объекты.

`template` следует проверять безопасно по частичному совпадению для типа страницы, поскольку дополнительные шаблоны могут иметь имя вида `product.special`.

Фильтры используются для строк, чисел, массивов, ссылок и изображений. Любую нестандартную конструкцию нужно сверять с официальным справочником, а не переносить синтаксис Shopify/Liquid без проверки.

## Проектное правило

Figma никогда не определяет Liquid-синтаксис. Figma задаёт визуальную структуру, а Liquid должен получать реальные значения из InSales.

Пример архитектуры Product Card:

`Figma Product Card` → `Liquid product data` → `InSales widget/runtime` → `CSS skin`.
