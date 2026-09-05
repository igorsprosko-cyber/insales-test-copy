# VELES LEGS — Audit Status V2

## Repository scope

Requested repositories:
- `igorsprosko-cyber/my-first-project`
- `igorsprosko-cyber/insales-test-copy`
- `igorsprosko-cyber/foto-redaktor`

The audit is repository-side and source-first. Major text/configuration files were read through GitHub and cross-referenced. A local clone could not be established from this execution environment because external DNS/network resolution for `github.com` was unavailable.

## Architecture conclusion

`my-first-project` supplies project governance, architecture and style rules.

`insales-test-copy` supplies the actual InSales theme implementation.

`foto-redaktor` is a separate asset-production application and is not part of the website runtime.

## Canonical Figma mapping

See `docs/FIGMA_VELES_LEGS_CODE_MAP.md` for the implementation matrix covering:

`Figma Component → Liquid → CSS → JS → InSales Widget/Data → Status → Preserve/Redesign`.

## Verified source relationships

- `layouts.layout.liquid` is the shared runtime shell.
- `theme.scss` is the primary global visual layer.
- `styles.liquid` is the global style delivery loader.
- `theme.js` is shared runtime behavior/navigation/cart-counter behavior.
- `head.liquid` is the centralized SEO/metadata layer.
- `index.liquid` is the design-rich homepage and contains protected calculator logic.
- `collection.liquid` drives collection/catalog layout and system product widgets.
- `product.liquid` drives the product page and uses product/variant/characteristic data.
- `cart.liquid` contains custom VAT/invoice presentation logic around InSales cart data.
- `search.liquid`, `favorite.liquid`, `compare.liquid`, `blog.liquid`, `article.liquid`, `page.liquid` are separate template wrappers over runtime content/widgets.
- `layouts.checkout2.liquid` and `layouts.client_account.liquid` are platform-constrained layouts.

## Major conflicts to resolve in Figma before broad refactoring

1. Global CSS token accent `#5E8C31` vs InSales setting `#76BC21`.
2. Global Montserrat/Playfair intent vs platform/settings PT Root UI and local Roboto imports.
3. Global component rules vs page-local `<style>` blocks.
4. Shared InSales product widgets vs different page wrapper styles.

## Protected

- `main`.
- `V2.1_HOME_APPEND.liquid` as reference.
- Calculator DOM, IDs, formulas, pricing/VAT/business logic.
- Platform widget behavior.

## Verification limits

`VERIFIED`: repository metadata, branch existence, directly read text/config files, and the Figma↔code relationships documented from those files.

`PARTIALLY VERIFIED`: complete platform widget internals, browser/runtime DOM, computed styles, full `setup.json` inventory where retrieval was truncated.

`NOT VERIFIED`: byte-level content of binary ZIP/image files and a complete local clone of every repository file.
