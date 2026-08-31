# VELES LEGS — Figma ↔ Code Technical Map

> Status: `IN PROGRESS — STATIC SOURCE AUDIT`
>
> This document maps the real repository implementation to the planned Figma design-system structure. It is intentionally based on source files and configuration that are readable through GitHub. Platform-managed InSales system widgets whose internal implementation is not stored in this repository are mapped as `PLATFORM / NOT VERIFIED` rather than guessed.

## 1. Scope and sources

- Repository: `igorsprosko-cyber/insales-test-copy`
- Source branch: `v2.3-page-standardization-final2`
- Working branch: `Figma-VELES-LEGS`
- Architecture/rules source: `igorsprosko-cyber/my-first-project`
- `foto-redaktor` is a separate tool repository and is not part of the VELES LEGS runtime architecture; it is relevant only as an asset-production support tool.

### Readable source files inspected

`index.liquid`, `V2.1_HOME_APPEND.liquid`, `V2.3_DESIGN_PLAN.md`, `layouts.layout.liquid`, `layouts.checkout2.liquid`, `layouts.client_account.liquid`, `head.liquid`, `styles.liquid`, `theme.scss`, `theme.js`, `product.liquid`, `collection.liquid`, `cart.liquid`, `favorite.liquid`, `compare.liquid`, `search.liquid`, `blog.liquid`, `article.liquid`, `page.liquid`, `settings.json`, `settings_data.json`, `setup.json` (structure partially inspectable through repository tree/config output), `IMPLEMENTATION_REPORT.md`, `ИСТОРИЯ_РАБОТ.md`.

Binary assets/ZIP exports are not used as evidence for internal code structure because the current GitHub connector does not expose binary contents for this audit.

---

## 2. Architecture map — actual runtime

```text
InSales runtime
   │
   ├── settings/settings_data
   │       └── theme configuration, widget configuration, limits
   │
   ├── layouts.layout.liquid
   │       ├── head
   │       ├── header widget list
   │       ├── content_for_layout
   │       ├── contextual sidebar widget list
   │       ├── footer widget list
   │       ├── bottom/outside widget lists
   │       └── widgets_assets + styles + theme.js
   │
   └── page template
           ├── index.liquid
           ├── collection.liquid
           ├── product.liquid
           ├── cart.liquid
           ├── search.liquid
           ├── favorite.liquid
           ├── compare.liquid
           ├── blog.liquid
           ├── article.liquid
           └── page.liquid

Global styling:
   theme.scss → theme.css → styles.liquid loader

Page-specific styling/logic:
   template-local <style>/<script> blocks

Runtime behavior:
   theme.js + InSales system widgets
```

The global layout explicitly renders header/footer/sidebar widget lists and loads page/system assets before `theme.js`. This means Figma must model both the shared shell and page-specific composition, not only isolated pages.

---

## 3. Figma foundations ↔ actual code

| Figma Foundation | Real implementation | Current source | Status | Decision |
|---|---|---|---|---|
| Color tokens | CSS custom properties plus direct values | `theme.scss`, `index.liquid` | PARTIALLY VERIFIED | Consolidate tokens in Figma first; do not blindly change existing settings |
| Body typography | `--vl-font-body: "Montserrat"` plus page-local Roboto in homepage/product/calculator | `theme.scss`, `index.liquid`, `product.liquid` | PARTIALLY VERIFIED | Figma should document Montserrat as system default and identify Roboto exceptions explicitly |
| Heading typography | `--vl-font-heading: "Playfair Display"` | `theme.scss` | VERIFIED | Make this a named Figma text style |
| Spacing | 4px token scale | `theme.scss` | VERIFIED | Use as Figma spacing base |
| Container | mostly `1240px`, some pages `1200px`, article `1000px` | `theme.scss`, page templates | VERIFIED | Figma needs page/container variants rather than one universal width |
| Radius | 6/8/12/16px global; page-local 14px and 30px controls exist | `theme.scss`, `index.liquid`, templates | VERIFIED | Resolve into semantic component tokens |
| Buttons | generic `.button/.btn` plus `.vl-v2-btn` plus page-local overrides | `theme.scss`, `index.liquid`, templates | VERIFIED | Create Button component with semantic variants; map legacy selectors separately |
| Grid/breakpoints | mostly 768px page breakpoint; homepage has additional responsive rules | `theme.scss`, `index.liquid` | PARTIALLY VERIFIED | Define Figma desktop/tablet/mobile frames from actual CSS, then normalize intentionally |
| Image behavior | `contain`/`cover` differs by component | page-local CSS | VERIFIED | Component-specific image ratios/fits required |
| Accent | CSS uses `#5E8C31` while `settings_data.json` uses `#76BC21` | `theme.scss`, `settings_data.json` | VERIFIED | Flag as token conflict; do not resolve silently |

---

## 4. Shared shell — Figma ↔ code

### Header

**Figma component:** `Shell / Header`

**Implementation:** system widget(s) rendered by `layouts.layout.liquid` via `widget_lists.header-list`, with visual overrides in `theme.scss`.

**CSS selectors identified:** `.header__content`, `.header__collections-link`, `.header__control-btn`, `.header__show-menu-btn`, `.header__collections-head`, `.header__search-field`, `.side-panel`.

**JS:** `theme.js` does not own header rendering; it performs document-wide navigation normalization and therefore can indirectly affect header links.

**InSales data:** header is platform widget driven.

**Status:** `SHARED / PLATFORM WIDGET / VERIFIED STATIC SHELL`

**Preserve:** widget-driven structure and navigation behavior.

**Figma work:** model desktop/mobile header states, search, collections/navigation, account/favorites/cart controls, and mobile side panel as variants.

### Footer

**Figma component:** `Shell / Footer`

**Implementation:** system footer widget list in `layouts.layout.liquid`, plus hard-coded supplemental blocks in the same layout: blog link, exhibition card, AI links.

**CSS/JS:** `theme.scss` styles base footer links; `theme.js` normalizes footer catalog links.

**Status:** `SHARED / MIXED PLATFORM + CUSTOM / VERIFIED`

**Important:** footer is not a pure system-widget surface because `layouts.layout.liquid` contains custom HTML blocks.

**Figma work:** footer base + custom VELES blocks as explicit components.

### Global layout

**Figma component:** `Shell / Page Frame`

**Implementation:** `layouts.layout.liquid`

**Behavior:** template-aware sidebar selection; header/main/footer; fixed/bottom/outside widgets; asset lists.

**Status:** `ARCHITECTURAL / VERIFIED STATIC`

**Preserve:** this file is the primary structural contract for all public templates.

---

## 5. Homepage — `index.liquid`

The homepage is the most design-rich file and contains the protected calculator logic. The project history explicitly treats the calculator DOM, IDs, handlers and business logic as protected.

### Figma page
`02 Pages / Home / Desktop` + `03 Mobile / Home`

### Actual sections identified

| Figma component/page block | Real implementation | JS | Data/widget | Status | Action |
|---|---|---|---|---|---|
| Home Hero | `.vl-v2-hero` and related classes in `index.liquid` | none required for current visual behavior | hard-coded copy + real image slot | VERIFIED | Preserve content intent; redesign visually through Figma |
| Trust strip | `.vl-v2-trust*` | none | hard-coded | VERIFIED | Convert to reusable `Trust / Stat Strip` component |
| Categories | `.vl-v2-category*` | none | hard-coded links/content | VERIFIED | Convert to reusable category/collection teaser component |
| Calculator intro | `.vl-v2-calculator-intro` | protected calculator JS below | hard-coded copy | VERIFIED | Visual shell can change; calculator internals protected |
| Calculator controls | `.vl-selector`, `.vl-column`, `.vl-select-group`, tabs/panels | protected inline handlers/functions and form DOM | calculator state + business logic | VERIFIED | `DO NOT ALTER` functional layer; create Figma visual skin around exact DOM |
| Calculator result | `.vl-calc-result`, `.vl-calc-row` | calculator JS | calculated data | VERIFIED | Figma can define hierarchy, not formulas |
| Custom production | `.vl-v2-section--custom` and associated blocks in homepage | none/limited visual | hard-coded/copy + image | VERIFIED STATIC | Make a reusable `Custom Production` pattern |
| B2B | `.vl-v2-section--b2b` | none | hard-coded | VERIFIED STATIC | Make reusable proof/capability section |
| Why Veles | `.vl-v2-section--why` | none | hard-coded | VERIFIED STATIC | Make proof section component |
| Final CTA | homepage section | none | hard-coded | VERIFIED STATIC | Standardize against shared CTA component |

### Homepage-specific design issues found in source

1. Homepage has its own local font import (`Roboto`, `Montserrat`, `Playfair Display`) despite global design tokens. `Roboto` is a deliberate/useful exception for calculator/system content but is not aligned with the project's stated two-font style guide.
2. Homepage uses several local variables (`--vl-*`) duplicating or partially overlapping global `theme.scss` variables.
3. Button tokens/classes exist both globally and locally.
4. Homepage is the strongest candidate to become the visual reference page, but the protected calculator means it must be treated as a constrained component rather than freely redesigned.

---

## 6. Product page — `product.liquid`

### Figma page
`02 Pages / Product / Desktop` + `03 Mobile / Product`

### Real structure

```text
Product title
   ↓
InSales product widget list
   ↓
Product media / price / cart / system controls
   ↓
Generated characteristics/description block
   ↓
Back link
```

### Mapping

| Figma component | Code | JS | InSales data | Status | Action |
|---|---|---|---|---|---|
| Product Page Frame | `.vl-product-wrapper` | none for structure | product | VERIFIED | Standardize container |
| Product Title | `.product-title` | none | `product.title` | VERIFIED | Use Typography/H1 token |
| Product Gallery/Media | selectors targeting InSales product image/gallery classes | small DOM enhancement for eager image | `product.images` via widget | PARTIALLY VERIFIED | Define Figma gallery states; keep widget data contract |
| Price | `.product__price`, `.product-price`, `.price` | none | product/variant price | VERIFIED | Standardize price hierarchy |
| Buy area | `.product__cart`, `.product__buy`, `.add-cart`, `.btn-buy`, quick checkout selectors | InSales widget behavior; no product purchase logic in custom JS | variant/cart state | VERIFIED | Skin system buttons without changing behavior |
| Characteristics | `.vl-auto-description` | none | `product.characteristics` | VERIFIED | Convert into `Specifications` component |
| JSON-LD | inline Product schema | none | product/variants | VERIFIED | Not represented as visual component; document as technical layer |

### Significant design-system observation

`product.liquid` uses a broad compatibility selector list for multiple possible InSales image/gallery class names. This is defensive integration code and should be preserved until the runtime markup is known to be stable.

---

## 7. Collection/catalog — `collection.liquid`

### Figma page
`02 Pages / Catalog` + `02 Pages / Collection` + mobile variants.

### Mapping

| Figma component | Code | JS | InSales widget/data | Status | Action |
|---|---|---|---|---|---|
| Collection frame | `.vl-collection` | none | collection | VERIFIED | Replace with shared Page Frame token |
| Breadcrumb | `.breadcrumb-wrapper`, `.breadcrumb`, `.breadcrumb-item` | none | InSales breadcrumb | VERIFIED | Shared Breadcrumb component |
| Sorting | `.collection-sort`, `.collection-order.is-sort .form-control` | InSales sorting | collection products | VERIFIED | Shared Select/Sort component |
| Product Card | `.product-preview` and sub-elements | `theme.js` affects add-cart-counter widget | system catalog widget | VERIFIED | Highest-priority reusable component |
| Product price | `.product-preview__price*` | none | product/variant | VERIFIED | Shared Price atom |
| Product actions | `.product-preview__controls*`, `.add-cart-counter*` | `theme.js` | InSales cart widget | VERIFIED | Preserve widget behavior; standardize visual shell |
| Filter | `.filter__content`, `.filter__head`, `.filter-option*` | platform behavior | InSales filter widget | PARTIALLY VERIFIED | Shared Filter component, platform internals remain external |
| Pagination | `.pagination*` | platform | InSales pagination | VERIFIED | Shared Pagination |

### Key finding

There are page-local rules in `collection.liquid` while `theme.scss` also contains collection/product-preview rules. This is a real overlap that should be represented in the Figma/code map and gradually reduced after visual standardization.

---

## 8. Cart — `cart.liquid`

### Figma page
`02 Pages / Cart`

### Mapping

| Figma component | Code | JS | Data | Status | Action |
|---|---|---|---|---|---|
| Cart frame | `.vl-cart` | custom JS | cart | VERIFIED | Standardize frame |
| Cart item | `.cart-item` / `.item` | system/cart behavior | cart items | VERIFIED | Reusable `Cart Item` component |
| Media | `.item-image` | none | item image | VERIFIED | Shared media token |
| Title | `.item-title` | none | item/product title | VERIFIED | Shared text |
| Price | `.item-price`, `.item-total` | custom VAT calculations | cart line totals | VERIFIED | Visual design only; preserve formulas |
| Quantity | `.item-counter`, `.counter-*` | InSales widget | cart quantity | VERIFIED | Shared Quantity Control |
| Remove/favorite | `.item-delete`, `.favorites_btn`, `.js-item-delete` | platform/system | cart/favorites | VERIFIED | Shared icon/action states |
| Cart summary | `.cart__area-controls-sticky`, `.cart-total`, `.cart-summary` | custom VAT/invoice rendering | cart totals | VERIFIED | Shared `Order Summary` |
| Checkout CTA | checkout selectors | platform | checkout route | VERIFIED | Shared Primary CTA |
| Recommended products | `.special-products`, `.product-preview` | InSales | product catalog | VERIFIED | Shared Product Card |

### Important constraint

The cart has substantial custom JavaScript for VAT breakdown and invoice rendering based on live InSales DOM classes. Figma changes must not be used as justification to rewrite that logic.

---

## 9. Search — `search.liquid`

**Figma page:** `02 Pages / Search`

**Code:** `.vl-search-page`, `.vl-search-title`, `.vl-search-content`

**Data/widget:** `widget_lists.search-list.widgets`, `search.results`

**JS:** no page-specific search logic in `search.liquid`; `theme.js` applies document-wide link/cart-counter normalization.

**Status:** `VERIFIED STATIC`

**Design action:** build a generic listing-result shell reusing Catalog/Product Card/Filter/Pagination components.

---

## 10. Favorite — `favorite.liquid`

**Figma page:** `02 Pages / Favorites`

**Code:** `.vl-favorite-page`, `.vl-favorite-title`, `.vl-favorite-content`

**Data/widget:** `widget_lists.favorite-list.widgets`

**Status:** `VERIFIED STATIC`

**Design action:** treat as a listing state, not a separate visual language. Reuse Product Card and empty-state components.

---

## 11. Compare — `compare.liquid`

**Figma page:** `02 Pages / Compare`

**Code:** `.vl-compare-page`, `.vl-compare-wrapper`, `.vl-compare-table`, `.vl-compare-empty`

**Data/widget:** `widget_lists.compare-list.widgets`

**Status:** `VERIFIED STATIC`

**Design action:** create responsive comparison component; preserve horizontal-scroll behavior on mobile unless a deliberate redesign is approved.

---

## 12. Blog — `blog.liquid`

**Figma page:** `02 Pages / Blog`

**Code:** `.vl-blog-page`, `.vl-blog-grid`, `.vl-blog-article`, `.vl-blog-pagination`

**Data:** `articles`, `blog_size`, `paginate`

**Status:** `VERIFIED STATIC`

**Design action:** create `Article Card`, `Blog Grid`, `Pagination` components. The current implementation is a custom wrapper around content rather than a pure shared system widget.

---

## 13. Article — `article.liquid`

**Figma page:** `02 Pages / Article`

**Code:** `.vl-article-page`, title/meta/cover/products/related blocks

**Data:** `article`, `blogs.blog.articles`

**Widget:** `widget_lists.article-list.widgets` for article-linked products/comments

**Status:** `VERIFIED STATIC`

**Design action:** create `Article Header`, `Article Cover`, `Related Articles`, `Article Products`, `Comments` component states.

---

## 14. Generic content page — `page.liquid`

**Figma page:** `02 Pages / Content Template`

**Code:** `.vl-page-wrapper`, `.vl-page-title`, `.vl-page-content`

**Data:** `page.title`, `page.content`

**Status:** `VERIFIED STATIC`

**Design action:** treat as content template; define rich-text typography and media tokens in Figma rather than separate page-by-page styling.

---

## 15. Checkout/account layouts

### `layouts.checkout2.liquid`

**Role:** InSales checkout wrapper.

**Shared shell:** header/footer widgets, `head`, bottom/outside widgets.

**Platform:** checkout-specific `checkout2.core` stylesheet and yield regions.

**Figma:** only a checkout/account shell reference is needed; visual behavior is constrained by platform.

**Status:** `PLATFORM-CONSTRAINED / STATIC VERIFIED`

### `layouts.client_account.liquid`

**Role:** client account wrapper.

**Figma:** account shell + account menu/content states.

**Status:** `PLATFORM-CONSTRAINED / STATIC VERIFIED`

---

## 16. Technical/non-visual layers

### `head.liquid`

SEO, robots, canonical, title/description, Organization/Product/Article metadata.

**Figma relevance:** none visually; retain as technical contract.

### `theme.js`

Current responsibilities:
- normalize footer catalog links;
- normalize internal `_blank` targets on standardization pages;
- normalize known internal link mapping;
- remove cart-counter background overlay;
- observe dynamically inserted widgets.

**Figma relevance:** maps to behavior/state requirements, not visual tokens.

### `styles.liquid`

Three-line loader for system fonts + `theme.css`.

**Figma relevance:** indirect; it is the delivery mechanism for the global style layer.

### `theme.scss`

Primary global visual implementation layer.

**Figma relevance:** highest-priority source for current design tokens and shared components.

---

## 17. Real component inventory for Figma

### Tier A — must become canonical shared components

1. `Shell / Header`
2. `Shell / Footer`
3. `Layout / Container`
4. `Typography / Display`
5. `Typography / H1-H3`
6. `Typography / Body`
7. `Button / Primary`
8. `Button / Secondary`
9. `Button / Text`
10. `Form / Input`
11. `Form / Select`
12. `Form / Textarea`
13. `Navigation / Breadcrumb`
14. `Product / Card`
15. `Product / Price`
16. `Product / Media`
17. `Product / Actions`
18. `Catalog / Filter`
19. `Catalog / Sort`
20. `Navigation / Pagination`
21. `Cart / Item`
22. `Cart / Quantity`
23. `Cart / Summary`
24. `Content / Article Card`
25. `Content / Related Articles`
26. `Content / Rich Text`
27. `Content / CTA`
28. `Trust / Proof Strip`
29. `Manufacturing / Custom Production`
30. `Calculator / Visual Shell`

### Tier B — page-specific compositions

- Home Hero
- Home Category Story
- VELES LIGHT section
- Home B2B proof
- Home Why Veles section
- Product technical section
- Cart invoice/VAT presentation
- Compare table layout
- Article cover + related layout

---

## 18. Figma ↔ repository file matrix

| Figma layer | Main source file(s) | Secondary source(s) | Priority |
|---|---|---|---|
| Foundations | `theme.scss`, `settings_data.json` | `index.liquid`, `product.liquid`, `collection.liquid` | P0 |
| Shell | `layouts.layout.liquid` | `theme.scss`, `theme.js` | P0 |
| Header | `layouts.layout.liquid` | `theme.scss` | P0 |
| Footer | `layouts.layout.liquid` | `theme.scss`, `theme.js` | P0 |
| Product Card | `collection.liquid` | `theme.scss`, `theme.js`, widgets | P0 |
| Product Page | `product.liquid` | `theme.scss`, system widgets | P0 |
| Home | `index.liquid` | `theme.scss`, `V2.3_DESIGN_PLAN.md` | P1 |
| Catalog | `collection.liquid` | `theme.scss` | P1 |
| Cart | `cart.liquid` | `theme.scss`, `theme.js` | P1 |
| Search | `search.liquid` | `theme.scss`, widgets | P2 |
| Favorites | `favorite.liquid` | widgets | P2 |
| Compare | `compare.liquid` | widgets | P2 |
| Blog | `blog.liquid` | widgets, `theme.scss` | P2 |
| Article | `article.liquid` | widgets, `theme.scss` | P2 |
| Generic page | `page.liquid` | `theme.scss` | P2 |
| Checkout | `layouts.checkout2.liquid` | InSales platform CSS | P3 |
| Account | `layouts.client_account.liquid` | InSales platform CSS | P3 |
| SEO/metadata | `head.liquid` | `layouts.layout.liquid` | TECH |
| Runtime navigation/cart fixes | `theme.js` | `theme.scss` | TECH |
| Settings model | `settings.json`, `settings_data.json`, `setup.json` | widgets | TECH |

---

## 19. What must be preserved

### Absolute protection

The homepage calculator functional layer is protected by project rules. Do not change its DOM IDs, protected handlers/functions, pricing/VAT/business logic, or metal-routing behavior during visual work.

### Protected visual reference

`V2.1_HOME_APPEND.liquid` remains a protected reference and must not be modified merely to achieve standardization elsewhere.

### Global architecture

Do not move or rewrite `layouts.layout.liquid` casually. It is the actual shared runtime frame.

### Platform widgets

Do not replace InSales system widget behavior with fake/static markup without an explicit architectural decision.

---

## 20. Highest-value standardization opportunities

### P0 — establish visual source of truth

- Resolve `#5E8C31` vs `#76BC21` as a documented token conflict.
- Document Montserrat/Playfair as global system and Roboto as a current exception where actually used.
- Create semantic container widths.
- Create button/input/radius/spacing tokens.

### P0 — Product Card

The same product-preview pattern appears across collection/cart/search/favorites/compare and is a core reusable business component.

### P0 — Shell

Header/footer are global and currently partly platform-driven. Figma should define states without pretending the widget markup is fully ours.

### P1 — Product Page

It is the most important conversion page and contains a mixture of system widget markup and custom technical description.

### P1 — Home

Use the existing V2 structure and design plan as the narrative baseline; create a visual reference without touching the protected calculator internals.

### P1 — Cart

Standardize visual hierarchy while preserving custom VAT/invoice behavior.

### P2 — secondary pages

Search/favorite/compare/blog/article/page can then inherit the shared system.

---

## 21. Verification status

- `VERIFIED`: file existence and readable source mapping for the inspected text files.
- `PARTIALLY VERIFIED`: exact runtime DOM of platform-managed widgets, browser behavior, computed styles, and system snippets not stored in this repository.
- `NOT VERIFIED`: internal source of InSales-managed system widgets and binary ZIP contents.

This document must be updated whenever a Figma component is approved or a corresponding implementation file/selector changes.
