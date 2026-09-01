# InSales Widget Development Contract for VELES LEGS

## Official model

InSales themes consist of editable Liquid files, and widget packages can include `snippet.liquid`, `snippet.scss`, `snippet.js`, `settings_form.json`, `settings_data.json`, `setup.json`, `info.json` and other metadata. Official references:
- https://www.insales.ru/collection/shablony
- https://www.insales.ru/collection/vidzhety/product/infojson
- https://www.insales.ru/collection/vidzhety/product/snippetliquid
- https://www.insales.ru/collection/vidzhety/product/snippetjs

`snippet.liquid` supplies widget markup and can read widget settings. `snippet.js` owns widget JavaScript and exposes `$widget`; when multiple widget instances exist, the official guidance says to iterate the instances. Source: https://www.insales.ru/collection/vidzhety/product/snippetjs

## VELES rules derived from the official model

- Treat platform widgets as runtime-owned components.
- Do not replace platform widgets with static Figma markup when the widget supplies business behavior.
- Use Figma to specify the visual contract around the runtime component.
- Map visual selectors to the actual widget DOM only after runtime verification.
- Keep widget settings/data contracts separate from design tokens.
- Any migration of a widget into a custom component is a separate architectural task, not a visual tweak.

## Product Card implication

`Product Card` must first be designed as a visual specification around the existing InSales catalog/product widget structure. The implementation map must record:

Figma Product Card → existing Liquid/template surface → theme.scss/local CSS → theme.js/platform JS → product/variant data → runtime DOM.

No new product-card implementation should be created until existing repeats and widget ownership are verified.
