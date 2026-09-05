# VELES LEGS — Figma / Design Architecture

## Purpose

This branch is a dedicated workspace for building the VELES LEGS visual architecture and design-system layer around the existing InSales implementation.

Base branch: `v2.3-page-standardization-final2`
Working branch: `Figma-VELES-LEGS`

## Core principle

Figma defines **how VELES LEGS should look and behave visually**.
GitHub/Liquid/CSS defines **how that design is implemented**.
InSales provides **real product/content data and runtime behavior**.

The workflow is:

`Figma → approved design → GitHub implementation → InSales → visual QA → refinement`

## Figma architecture

### 00 — Foundations
- Color system
- Typography
- Spacing scale
- Grid/container rules
- Breakpoints
- Border/radius rules
- Image ratios
- Icon rules

### 01 — Components
- Header
- Navigation
- Footer
- Buttons
- Product Card
- Collection Card
- Product Gallery
- Product Information
- Specifications
- Filters
- CTA blocks
- Badges
- Forms

### 02 — Pages
- Home
- Catalog
- Collection
- Product
- About
- Contacts
- Blog/Articles
- Compare
- Cart

### 03 — Mobile
Responsive variants and mobile-specific composition rules for all approved components/pages.

### 99 — Archive
Deprecated concepts, superseded layouts and historical design decisions. Do not delete without documenting the reason.

## Implementation mapping

| Figma object | Implementation responsibility |
|---|---|
| Design tokens | Global CSS/theme variables |
| Component | Liquid snippet/component + CSS |
| Page template | Liquid page/template |
| Product content | InSales product data |
| Responsive variant | CSS/media queries + Liquid only when structure must change |
| Interaction/state | CSS/JS |

## Rules

1. Do not redesign directly in production code without first defining the intended visual behavior.
2. Do not duplicate a component when an existing shared component can be extended safely.
3. Product data must remain in InSales; Figma is not the product database.
4. Desktop and mobile behavior must be defined together.
5. Existing working functionality must be preserved unless the task explicitly changes it.
6. `main` must not be modified as part of this design work without explicit approval.
7. Changes should be implemented on dedicated branches and reviewed before merge.
8. The approved Home page becomes the first visual reference for the wider system.

## Recommended implementation order

1. Audit current implementation.
2. Establish Foundations.
3. Standardize Header/Footer.
4. Standardize Buttons and typography.
5. Build Product Card.
6. Build Home as the visual reference page.
7. Build Catalog/Collection from shared components.
8. Build Product page template.
9. Add remaining pages.
10. Run desktop/mobile visual QA.

## Definition of done

A component/page is considered complete when:

- its Figma structure is approved;
- its responsive behavior is defined;
- its implementation uses the shared system where applicable;
- real InSales data works correctly;
- desktop and mobile rendering have been checked;
- no unrelated existing functionality has been changed;
- the change is documented in the branch history.


## Performance architecture — mandatory design-to-code constraint

The Figma system is governed not only by visual consistency but also by the completed forensic performance findings for VELES LEGS. The canonical forensic document is **`Forensic Performance-разбор сайта VELES LEGS`** (latest consolidated version maintained in the project history). It is a required reference before any performance-sensitive implementation.

### Loading law

The implementation must prioritize what the visitor needs to see first and keep non-critical work off the critical rendering path:

1. HTML / document response
2. Critical CSS required for the first viewport
3. LCP/FCP content and its required resources
4. Minimum interaction required for the first viewport
5. Remaining first-party JS
6. Analytics / third-party integrations
7. Below-the-fold images, widgets and secondary resources
8. Background/non-critical work

This is a **loading architecture rule**, not a blanket instruction to add `defer`, `async`, `lazy` or compression mechanically. Every resource must be classified by actual runtime dependency before its loading mode is changed.

### Proven forensic constraints

- In the investigated trace, LCP was the textual H1, not an image.
- FCP and LCP occurred at approximately the same time in that trace.
- `common.v2.27.9.js` was parser-blocking and its dominant delay was Content Download, not 40-second JS execution.
- Heavy images materially competed for the constrained network in controlled experiments and remain an independent optimization target.
- `tag.js`/GTM are not to be declared the sole cause of the anomalous LCP without causal evidence.
- Image optimization, third-party scheduling, parser-blocking resources, fonts and critical CSS must be analyzed together as one loading system.
- PageSpeed Insights findings are regression inputs, not isolated one-off fixes.
- After every performance-sensitive change, run a controlled runtime trace/network check plus PageSpeed measurement under comparable conditions.

### Figma handoff performance metadata

Any component that contains or triggers a resource must document, where applicable:

- critical / non-critical status;
- LCP relevance;
- expected discovery order;
- image dimensions/aspect ratio;
- eager/lazy policy;
- priority policy;
- font dependency;
- JS dependency;
- third-party dependency;
- mobile/desktop differences;
- acceptable fallback state.

Figma does not implement these behaviors. It records the intended contract so the implementation can be mapped and verified without guessing.

### Protected rule

Do not change production loading architecture while the causal dependency of the affected resource is unknown. Do not trade runtime correctness for a synthetic Lighthouse gain. Calculator business logic, Metal Routing and other protected InSales behavior remain outside performance refactoring unless explicitly authorized and separately verified.
