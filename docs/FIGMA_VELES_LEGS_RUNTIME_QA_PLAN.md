# VELES LEGS — Runtime QA Plan for Figma-to-Code

Status: PREPARATION

## Purpose

This document defines the evidence needed before a Figma component can be marked runtime-verified.

## Control surfaces

For every shared component:

1. Figma reference state.
2. Liquid source/template.
3. Global CSS source.
4. Local CSS source.
5. Global JS source.
6. Local JS source.
7. InSales widget/data dependency.
8. Browser DOM.
9. Computed Style.
10. Desktop and mobile screenshots.

## Priority components

### P0
- Shell / Header
- Shell / Footer
- Product Card
- Product Gallery
- Product Buy Area
- Calculator protected shell
- Cart Item
- Order Summary

### P1
- Breadcrumb
- Filter
- Sort/Select
- Pagination
- Quantity Control
- Search results
- Favorites
- Compare

### P2
- Blog Article Card
- Article body
- Content page blocks
- Checkout/account visual shell

## Required viewport checks

320, 375, 390, 414, 480, 768, 1024, 1280, 1440, 1920.

## Evidence statuses

- VERIFIED — direct source/runtime evidence exists.
- PARTIALLY VERIFIED — source is known but runtime or one dependency is not verified.
- NOT VERIFIED — evidence is insufficient.

## Special protections

- Do not alter the calculator formulas, IDs, handlers or business logic.
- Do not alter cart VAT/invoice logic during visual work.
- Do not change `main`.
- Do not change `V2.1_HOME_APPEND.liquid` for standardization.

## Acceptance rule

A Figma component becomes the canonical implementation reference only after visual and behavioral comparison against the live/test InSales runtime, not from source code alone.
