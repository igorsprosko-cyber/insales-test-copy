# VELES LEGS — Full Repository Audit Status

Date: 2026-08-31

## Important scope note

A full remote `git clone` from the execution environment was attempted but the environment could not resolve `github.com`. Therefore this audit uses direct GitHub connector reads of repository metadata, branch/tree objects, source files, project documentation, and configuration exposed through GitHub.

This is sufficient for a factual repository-side architecture map, but it is **not equivalent to a local checkout of every byte of every repository**.

## Repositories reviewed

### `igorsprosko-cyber/my-first-project`
Role: project rules, architecture, style, contribution process, task/audit documentation.

Relevant verified areas include the project documentation and CI/static-audit history. The repository's own process requires source-first verification and identifies `PROJECT.md`, `STYLE_GUIDE.md`, `ARCHITECTURE.md`, `AGENTS.md`, `TASKS.md`, `SITE_MAP.md`, `CONTRIBUTING.md`, `STABILITY_AUDIT.md`, `REVIEW_SCOPE.md`, and `PR5_AUDIT_NOTES.md` as governing documentation.

### `igorsprosko-cyber/insales-test-copy`
Role: actual InSales theme/source and current working site code.

Audited branch: `v2.3-page-standardization-final2` as requested. The dedicated working branch is `Figma-VELES-LEGS`.

Verified source/config areas include the layout, page templates, global styling, JavaScript, SEO/head, settings, setup/widget configuration, documentation history, and current Figma branch artifacts.

### `igorsprosko-cyber/foto-redaktor`
Role: separate React/TypeScript photo editor support project.

It is not part of the VELES LEGS runtime/theme architecture. No evidence was found that its source should be mapped into the site's Figma component-to-Liquid implementation chain. It remains an asset-production support repository.

## Current Figma mapping conclusion

The actual website architecture resolves into these layers:

1. **Global runtime shell** — `layouts.layout.liquid` + platform header/footer/sidebar widgets.
2. **Global visual system** — `theme.scss` delivered through `styles.liquid`.
3. **Page templates** — `index.liquid`, `collection.liquid`, `product.liquid`, `cart.liquid`, `search.liquid`, `favorite.liquid`, `compare.liquid`, `blog.liquid`, `article.liquid`, `page.liquid`.
4. **Runtime behavior** — `theme.js` plus platform widget behavior and template-local protected calculator logic.
5. **Content/configuration** — `settings.json`, `settings_data.json`, `setup.json`, and InSales product/collection/article runtime data.
6. **Technical metadata** — `head.liquid` and JSON-LD/SEO logic.

## Figma source-of-truth strategy

Figma should model:

- Foundations/tokens;
- shared shell;
- reusable components;
- page compositions;
- responsive states;
- interaction states where they affect visual behavior.

Figma should **not** model as a replacement for:

- InSales product data;
- calculator formulas/business logic;
- platform widget internals;
- SEO/JSON-LD implementation;
- cart VAT/invoice calculations.

## Critical conflicts to resolve during design-system definition

- `theme.scss` defines VELES design tokens using Montserrat/Playfair and `#5E8C31`, while `settings_data.json` still contains PT Root UI and `#76BC21` platform settings.
- Multiple page templates carry local `<style>` blocks which overlap global selectors in `theme.scss`.
- `index.liquid` defines a second local `--vl-*` token layer overlapping global tokens.
- Product/catalog/cart/search/favorite/compare share platform product widgets but currently have different wrapper-level visual rules.
- `theme.js` contains behavior fixes that are not purely visual; they must remain outside Figma-only changes.

## Protection rules confirmed

- `main` is not part of this implementation branch and must not be changed without explicit approval.
- `V2.1_HOME_APPEND.liquid` is a protected visual/functional reference.
- Calculator DOM/IDs/functions/business logic are protected.
- Platform widget behavior must not be replaced by static design-only markup.

## Audit result

`PARTIALLY VERIFIED` for the phrase “all bytes of every file in all repositories”, because the current environment could not establish a local clone and binary contents are not available through the connector.

`VERIFIED` for the repository metadata, requested branch structure, major source/config/document files read through GitHub, and the resulting Figma↔code architecture map.
