# VELES LEGS — Figma ↔ Code Technical Map

Status: `PARTIALLY VERIFIED — REPOSITORY-SIDE ARCHITECTURE MAP`
Date: 2026-08-31

This is the working technical map between the planned Figma system and the real VELES LEGS InSales implementation. It is governed by `my-first-project/AGENTS.md`, `PROJECT.md`, `ARCHITECTURE.md`, `STYLE_GUIDE.md`, `CONTRIBUTING.md`, `SITE_MAP.md`, `TASKS.md` and the current branch history.

## 1. Authority and scope

- Architecture/rules source: `igorsprosko-cyber/my-first-project`.
- Site/code source: `igorsprosko-cyber/insales-test-copy`.
- Working design branch: `Figma-VELES-LEGS`.
- Base implementation requested for audit: `v2.3-page-standardization-final2`.
- `main` must not be changed without explicit approval.
- `V2.1_HOME_APPEND.liquid` is a protected reference and is not to be redesigned for standardization.
- Calculator DOM, IDs, handlers, formulas and business logic are protected.
- `foto-redaktor` is a separate photo-production support project, not a runtime dependency of the site.

This map does not authorize refactoring or code changes by itself. It identifies existing responsibilities and the intended Figma representation.

## 2. Governing conclusion

The project rules require a simple modular architecture: each component should have one responsibility, repeated CSS/JS/HTML should be shared rather than duplicated, and visual changes should not become excuses for unrelated code changes.

Therefore Figma should be an **approved visual contract**, not a second implementation system. It defines tokens, component anatomy, variants, responsive behavior and page composition. Liquid/CSS/JS and InSales remain responsible for implementation, runtime behavior and data.

## 3. Actual runtime layers

```text
InSales runtime
  ├─ theme settings/configuration
  ├─ global layout
  │   ├─ head / SEO
  │   ├─ header widgets
  │   ├─ page content
  │   ├─ contextual sidebar widgets
  │   ├─ footer widgets + custom footer markup
  │   └─ fixed / bottom / outside widgets
  ├─ page templates
  ├─ global CSS (`theme.scss` → `theme.css`)
  ├─ template-local CSS/JS
  ├─ shared `theme.js`
  └─ platform-managed InSales widgets
```

Figma therefore has to model three categories separately:

1. shared shell/components;
2. page compositions;
3. states and constraints belonging to platform widgets.

## 4. Foundations — factual mapping

| Figma Foundation | Current implementation | Source | Status | Decision |
|---|---|---|---|---|
| Color system | global CSS variables + local values + InSales settings | `theme.scss`, `index.liquid`, `settings_data.json` | VERIFIED | Create semantic Figma tokens; resolve conflicts deliberately |
| Body font | global Montserrat; local Roboto exceptions | `theme.scss`, `index.liquid`, `product.liquid` | VERIFIED | Montserrat is the project style-guide default; document Roboto as an existing exception, do not silently remove |
| Heading font | Playfair Display | `theme.scss`, page-local CSS | VERIFIED | Named Figma heading styles |
| Type sizes | global H1/H2/H3 36/28/20, body 16, etc. | `theme.scss`, `STYLE_GUIDE.md` | VERIFIED | Mirror as semantic Figma text styles |
| Spacing | 4px base scale | `theme.scss`, `STYLE_GUIDE.md` | VERIFIED | Figma spacing variables should use 4px scale |
| Radius | 6/8/12/16 etc.; local 14/30 also exist | `theme.scss`, templates | VERIFIED | Semantic component tokens; do not preserve arbitrary local values as system tokens |
| Container | mostly 1240px; some local 1200/1000 | `theme.scss`, templates | VERIFIED | Figma needs container variants, not one forced width |
| Borders | 1px/2px black primary | `theme.scss`, `STYLE_GUIDE.md` | VERIFIED | Border tokens |
| Animation | mostly .2/.3/.4s ease | `theme.scss`, templates | VERIFIED | Restrained motion only |
| Breakpoints | 768px common; homepage has additional rules | templates/CSS | PARTIALLY VERIFIED | Figma must cover required widths from style guide: 320–1920px |
| Accent | `#5E8C31` in custom CSS vs `#76BC21` in theme settings | `theme.scss`, `settings_data.json` | VERIFIED | Explicit token conflict; no silent replacement |

## 5. Shared Shell

### Figma Component: `Shell / Page Frame`

**Liquid:** `layouts.layout.liquid`

**Responsibilities:** global HTML shell, head include, header widgets, page content, sidebar selection, footer widgets, fixed/bottom/outside widgets, widget assets, `styles` include and `theme.js`.

**CSS:** `theme.scss` global shell/header/footer rules plus platform CSS.

**JS:** `theme.js` can affect links and InSales cart counters across the document but does not render the shell itself.

**InSales:** header/footer/sidebar/bottom/outside widget lists.

**Status:** `VERIFIED STATIC ARCHITECTURE`

**Preserve:** page shell and widget contracts.

**Figma:** one shared shell with desktop/mobile variants; never duplicate header/footer per page.

### Figma Component: `Shell / Header`

**Liquid:** platform `widget_lists.header-list` rendered in `layouts.layout.liquid`.

**CSS selectors observed:** `.header__content`, `.header__collections-link`, `.header__control-btn`, `.header__show-menu-btn`, `.header__search-field`, `.header__collections-head`, `.side-panel`.

**JS:** no header renderer; document-wide link normalization can affect header links.

**Status:** `PLATFORM COMPONENT / VERIFIED STATIC`

**Preserve:** platform widget structure.

**Figma states:** Desktop default, Desktop interaction states, Mobile default, Mobile menu open, search/account/favorites/cart controls.

### Figma Component: `Shell / Footer`

**Liquid:** footer widget list plus custom blocks in `layouts.layout.liquid`.

**CSS:** `theme.scss` footer rules.

**JS:** footer catalog URL normalization in `theme.js`.

**InSales:** footer widgets + hard-coded supplemental content.

**Status:** `MIXED PLATFORM + CUSTOM / VERIFIED STATIC`

**Preserve:** functional links/widget list; review legacy commercial content separately.

## 6. Product system — highest-priority reusable layer

### Figma Component: `Product Card`

**Liquid:** primarily InSales product listing/system widget markup consumed by `collection.liquid`, `search.liquid`, `favorite.liquid`, `compare.liquid`, cart recommendations and other widget surfaces.

**CSS:** `theme.scss` `.product-preview*`, `.product-card*`, `.add-cart-counter*` plus page-specific overrides in templates.

**JS:** `theme.js` explicitly targets `.add-cart-counter` and related controls because the same InSales widget is rendered on multiple page types.

**InSales data:** product/variant title, images, price, availability, cart/favorite/compare state.

**Status:** `VERIFIED AS SHARED PLATFORM COMPONENT`

**Preserve:** real widget data contract and cart behavior.

**Redesign:** visual anatomy should be defined once in Figma and then propagated to collection/search/favorite/recommendation surfaces.

### Figma Component: `Product Card / Media`

**Code:** `.product-preview` media area and system widget image markup.

**Decision:** component-level image ratio/fit must be explicit. Do not create generic image rules that conflict with product/gallery behavior.

### Figma Component: `Product Card / Price`

**Code:** `.product-preview__price`, `.product-preview__price-cur`, `.product-preview__price-old`.

**Decision:** one shared price hierarchy; page templates may add context but must not create different basic price languages.

### Figma Component: `Product Card / Actions`

**Code:** `.product-preview__controls*`, `.add-cart-counter*`.

**JS:** `theme.js`.

**Decision:** preserve InSales interaction; skin visually through scoped rules.

## 7. Home — `index.liquid`

Figma page: `02 Pages / Home / Desktop` + `03 Mobile / Home`.

The homepage is the visual storytelling layer but is constrained by protected calculator internals and by the protected V2.1 reference.

| Figma Component | Liquid | CSS | JS | Data/Widget | Status | Action |
|---|---|---|---|---|---|---|
| Hero | `.vl-v2-hero*` | local homepage CSS | visual only | hard-coded copy + approved image asset | VERIFIED STATIC | Redesign visual composition in Figma; preserve semantic intent |
| Trust strip | `.vl-v2-trust*` | local CSS | none | hard-coded | VERIFIED STATIC | Convert concept into reusable stats/trust component |
| Category teaser | `.vl-v2-category*` | local CSS | none | hard-coded links/content | VERIFIED STATIC | Reuse for collection/category entry points |
| Calculator shell | `.vl-v2-calculator-intro` + wrappers | local homepage CSS | protected calculator JS | hard-coded intro + live form | VERIFIED | Figma skin around exact functional DOM |
| Calculator controls | `.vl-selector*`, `.vl-select-group*` | local CSS | protected functions/handlers | calculation state | PROTECTED | Do not change DOM, IDs, formulas or business logic |
| Calculator result | `.vl-calc-result*` | local CSS | calculator JS | calculated values | PROTECTED | Visual hierarchy only |
| Custom production | `.vl-v2-section--custom` and related blocks | local CSS | none/limited visual | approved copy + assets | VERIFIED STATIC | Reusable `Custom Production` pattern |
| B2B proof | `.vl-v2-section--b2b` | local CSS | none | approved factual claims | VERIFIED STATIC | Reusable proof/capability pattern |
| Why Veles | `.vl-v2-section--why` | local CSS | none | approved copy | VERIFIED STATIC | Reusable proof section |
| Final CTA | homepage CTA section | local CSS/global button system | none | hard-coded | VERIFIED STATIC | Use shared CTA component |

### Home technical conflicts

- Local homepage `--vl-*` variables overlap the global `theme.scss` token layer.
- Homepage imports Roboto in addition to Montserrat/Playfair.
- Generic/global button rules coexist with local `.vl-v2-btn` rules.
- These are architecture/design-system issues to resolve deliberately; no blind cleanup is authorized.

## 8. Product page — `product.liquid`

Figma page: `02 Pages / Product / Desktop` + `03 Mobile / Product`.

| Figma Component | Liquid/CSS | JS | InSales Data/Widget | Status | Action |
|---|---|---|---|---|---|
| Product frame | `.vl-product-wrapper` | none | product | VERIFIED STATIC | Standardize container |
| Product title | `.product-title` | none | `product.title` | VERIFIED | Shared H1 |
| Product gallery | compatibility selectors around InSales product media | image-load enhancement | `product.images` + widget | PARTIALLY VERIFIED | Define Figma gallery states; retain defensive selectors until runtime markup is stable |
| Price block | `.product__price`, `.product-price`, `.price` | none | variant/product prices | VERIFIED | Shared price component |
| Purchase area | `.product__cart`, `.product__buy`, `.add-cart`, `.btn-buy` etc. | platform behavior | variant/cart state | VERIFIED STATIC | Visual skin only |
| Specifications | `.vl-auto-description` / characteristic markup | none | `product.characteristics` | VERIFIED | Shared Specifications component |
| Schema | inline Product JSON-LD | none | product/variants | VERIFIED STATIC | Technical layer outside Figma visual system |

**Constraint:** product template contains defensive compatibility selectors for InSales-generated markup. Preserve until actual runtime DOM proves they can be simplified.

## 9. Catalog / Collection — `collection.liquid`

Figma pages: `02 Pages / Catalog`, `02 Pages / Collection` and mobile variants.

| Figma Component | Liquid/CSS | JS | InSales | Status | Action |
|---|---|---|---|---|---|
| Collection frame | `.vl-collection` | none | collection | VERIFIED | Map to Page Frame |
| Breadcrumb | `.breadcrumb*` | none | breadcrumb widget/data | VERIFIED | Shared Breadcrumb |
| Sorting | `.collection-sort`, `.collection-order*` | platform | collection products | VERIFIED | Shared Sort/Select |
| Product Card | `.product-preview*` | `theme.js` | product widget | VERIFIED | Highest-priority reuse |
| Product actions | `.product-preview__controls*`, `.add-cart-counter*` | `theme.js` | cart widget | VERIFIED | Shared action component |
| Filter | `.filter*` | platform | filter widget | PARTIALLY VERIFIED | Figma visual component; platform behavior stays external |
| Pagination | `.pagination*` | platform | pagination widget | VERIFIED STATIC | Shared pagination |

**Architecture finding:** collection styles exist both globally and locally. The correct future direction is one visual contract, but the first step is Figma standardization and DOM verification, not mass selector deletion.

## 10. Cart — `cart.liquid`

Figma page: `02 Pages / Cart`.

| Figma Component | Code | JS | Data | Status | Action |
|---|---|---|---|---|---|
| Cart frame | `.vl-cart` | local JS | cart | VERIFIED | Shared Page Frame variant |
| Cart item | `.cart-item`, `.item` | platform | cart line | VERIFIED | Reusable Cart Item |
| Item media | `.item-image` | none | item image | VERIFIED | Shared media token |
| Item title | `.item-title` | none | product title | VERIFIED | Shared text |
| Item price/total | `.item-price`, `.item-total` | VAT rendering | cart totals | VERIFIED | Visual only; preserve formulas |
| Quantity control | `.item-counter`, `.counter-*` | platform widget | quantity | VERIFIED | Shared Quantity Control |
| Remove/favorite | `.item-delete`, `.favorites_btn`, `.js-item-delete` | platform/system | cart/favorites | VERIFIED | Shared action state |
| Order summary | `.cart__area-controls-sticky`, `.cart-total` etc. | VAT/invoice JS | cart total | VERIFIED | Shared Order Summary |
| Checkout CTA | checkout selectors | platform | checkout route | VERIFIED | Shared Primary Button |
| Recommendations | `.special-products`, `.product-preview` | platform | product catalog | VERIFIED | Product Card reuse |

**Hard constraint:** VAT/invoice JavaScript in `cart.liquid` is business logic and is outside visual redesign authority.

## 11. Search — `search.liquid`

Figma: `02 Pages / Search`.

Liquid: `.vl-search-page`, `.vl-search-title`, `.vl-search-content`; `search.results`; `widget_lists.search-list.widgets`.

CSS: page-local wrapper rules + global product/filter/pagination rules.

JS: common `theme.js` behaviors.

Status: `VERIFIED STATIC`.

Decision: treat Search as a listing state that reuses Product Card, Filter and Pagination.

## 12. Favorites — `favorite.liquid`

Figma: `02 Pages / Favorites`.

Liquid: `.vl-favorite-page`, `.vl-favorite-content`; `widget_lists.favorite-list.widgets`.

Status: `VERIFIED STATIC`.

Decision: do not create a separate design language. Reuse listing components and shared Empty State.

## 13. Compare — `compare.liquid`

Figma: `02 Pages / Compare`.

Liquid/CSS: `.vl-compare-page`, `.vl-compare-wrapper`, `.vl-compare-table`, `.vl-compare-empty`.

InSales: `widget_lists.compare-list.widgets`.

Status: `VERIFIED STATIC`.

Decision: shared Comparison component. Preserve horizontal overflow on mobile until an approved redesign replaces it.

## 14. Blog — `blog.liquid`

Figma: `02 Pages / Blog`.

Liquid/data: `articles`, `blog_size`, pagination; `.vl-blog-page`, `.vl-blog-grid`, `.vl-blog-article`.

Status: `VERIFIED STATIC`.

Decision: create reusable `Article Card`, `Blog Grid`, `Pagination` components. Do not duplicate Product Card patterns into blog cards.

## 15. Article — `article.liquid`

Figma: `02 Pages / Article`.

Liquid/data: `article`, image, author/date, related articles, article products widget.

CSS: `.vl-article-page`, `.vl-article-cover`, `.vl-related-grid`, `.vl-related-card`.

JS: none central to article layout.

InSales: `widget_lists.article-list.widgets` for article content widgets/products/comments.

Status: `VERIFIED STATIC`.

Decision: shared Article Header, Article Body, Related Articles, Product Recommendation components.

## 16. Generic Content Page — `page.liquid`

Figma: `02 Pages / Content Page`.

CSS: `.vl-page-wrapper`, `.vl-page-title`, `.vl-page-content`.

Data: `page.title`, `page.content`.

Status: `VERIFIED STATIC`.

Decision: one shared content-page template with semantic typography, tables, images and links. Technical pages should reuse the same system.

## 17. Checkout / Client Account

`layouts.checkout2.liquid` and `layouts.client_account.liquid` use the same broad shell pattern: header/footer widgets, contextual content, fixed/bottom/outside widgets, widget assets, `styles`, `theme.js`.

Figma representation: `Shell / Checkout Frame` and `Shell / Account Frame` built from shared shell tokens, not duplicate full site layouts.

Status: `VERIFIED STATIC SHELL`.

Runtime behavior remains platform-managed and requires browser verification before any redesign.

## 18. SEO / Technical layers

### Figma representation: none as a visual replacement

**Liquid:** `head.liquid`, product JSON-LD, layout BreadcrumbList/OpenGraph.

**Data:** page/product/article/collection context.

**Status:** `VERIFIED STATIC` for source presence.

**Decision:** maintain as technical modules. Figma may document where technical requirements affect visible UI (title hierarchy, breadcrumbs), but must not duplicate implementation.

## 19. InSales configuration / widget map

`settings.json`, `settings_data.json` and `setup.json` are configuration sources. The repository uses system widgets extensively. `setup.json`/widget configuration is the authoritative repository-side source for widget inventory.

Important: system widget internals are platform-managed and are not stored as ordinary project source files. Their internal DOM must be verified at runtime before making selector assumptions.

Examples confirmed in current configuration/source:

- article widget + article products + comments;
- blog widget + pagination;
- bottom navigation widget;
- collection/product listing widgets;
- search/favorite/compare widgets;
- cart widgets;
- header/footer/sidebar widget lists.

Status: `PARTIALLY VERIFIED` where internal platform implementation is not exposed.

## 20. Critical conflicts discovered

### A. Token conflict
`theme.scss`: `#5E8C31`; `settings_data.json`: `#76BC21`.

### B. Typography conflict
Project style guide requires Montserrat + Playfair Display. Actual platform settings contain PT Root UI; homepage/product code also use Roboto in places.

### C. CSS ownership conflict
Several page templates contain local CSS while `theme.scss` contains related global selectors.

### D. Homepage token duplication
`index.liquid` defines local `--vl-*` values overlapping global design tokens.

### E. Button duplication
Global `.btn/.button` rules coexist with `.vl-v2-btn` and page-local button overrides.

### F. JS ownership is mixed by design/history
`theme.js` handles cross-page normalization while business logic remains inline in templates, notably homepage calculator and cart VAT/invoice behavior.

## 21. What belongs in Figma vs what does not

### Figma SHOULD contain

- semantic color/type/spacing/radius tokens;
- shared Shell/Header/Footer;
- Product Card and its variants;
- Breadcrumb, Button, Price, Quantity, Filter, Pagination;
- Product Gallery, Product Info, Specifications;
- page compositions;
- desktop/mobile states;
- visual interaction states.

### Figma MUST NOT replace

- InSales product data;
- calculator formulas and business logic;
- cart VAT/invoice calculations;
- platform widget internals;
- SEO/JSON-LD implementation;
- routing/link logic.

## 22. Implementation order after this audit

1. **Foundations** — reconcile semantic tokens against actual code without changing runtime yet.
2. **Shell** — define canonical Header/Footer/Page Frame in Figma.
3. **Product Card** — highest-leverage shared component because it appears across listing/recommendation surfaces.
4. **Catalog + Product** — use the same card/typography/price contracts.
5. **Home** — make the visual reference while isolating the calculator as a protected component.
6. **Cart** — standardize visual composition only; preserve VAT/invoice logic.
7. **Search/Favorites/Compare** — turn them into listing states.
8. **Blog/Article/Content** — reuse typography, page frame and related cards.
9. **Checkout/Account** — shared shell only; runtime verification before changes.
10. **Desktop/mobile visual QA** — required across 320, 375, 390, 414, 480, 768, 1024, 1280, 1440 and 1920px targets.

## 23. Definition of done for a Figma-driven change

- design intent exists in Figma;
- affected reusable component is identified;
- exact Liquid/CSS/JS ownership is recorded;
- InSales data/widget dependency is recorded;
- protected logic is identified before coding;
- desktop/mobile states are defined;
- implementation is scoped to the task;
- source is re-read after change;
- actual diff is reviewed;
- verification status is recorded in the work archive.

## 24. Verification limits

`VERIFIED`: repository-side files and configuration exposed through GitHub and directly read during the audit.

`PARTIALLY VERIFIED`: platform-managed widget internals, live browser DOM/Computed Style, and binary archive contents.

`NOT VERIFIED`: any claim requiring a fresh local clone or live runtime execution that the current environment cannot perform.
