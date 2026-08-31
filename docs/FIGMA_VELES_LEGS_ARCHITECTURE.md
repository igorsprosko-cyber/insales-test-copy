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
