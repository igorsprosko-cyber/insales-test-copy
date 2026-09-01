# VELES LEGS — 00 Foundations Specification

Status: DRAFT / CODE-DERIVED
Source of truth for design decisions: `my-first-project` rules + verified current theme code. This document does not authorize production code changes.

## 1. Principles

- Industrial minimalism.
- Black/white first; gray for secondary information.
- Green only for success/interactive accent according to the approved token decision.
- Montserrat for body/UI and Playfair Display for large editorial headings, per `STYLE_GUIDE.md`.
- 4px spacing base.
- 1px/2px black borders for system components where specified.
- Minimal animation; motion must support interaction and performance.
- Figma defines visual behavior; InSales owns data and platform behavior.

## 2. Color tokens — current evidence

| Semantic token | Current evidence | Decision state |
|---|---|---|
| Background | `#FFFFFF` | baseline |
| Surface | `#FFFFFF` | baseline |
| Text primary | `#000000` / `#151515` / `#333333` appear in different layers | consolidate before code |
| Text secondary | `#555555` / `#666666` / `#777777` | consolidate before code |
| Border | `#000000` and lighter borders | semantic variants needed |
| Accent | `#5E8C31` in project design layer | candidate canonical |
| InSales setting accent | `#76BC21` | unresolved platform/config value |
| Error | `#F8D7DA` in theme settings | keep as semantic error token |
| Success | `#D4EDDA` in theme settings | keep as semantic success token |

No accent value is to be changed in production until the conflict between `#5E8C31` and `#76BC21` is deliberately resolved.

## 3. Typography

Canonical project style: Montserrat + Playfair Display.

Reference sizes from `STYLE_GUIDE.md`: H1 36px, H2 28px, H3 20px, body 16px, small 14px, service 13px, captions 12px.

Runtime evidence also shows local product/calculator use of Roboto and InSales settings containing PT Root UI. These are exceptions/conflicts to be mapped, not silently deleted.

## 4. Spacing

Base grid: 4px.

Approved project values: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128.

## 5. Radius

Approved style-guide values: 0, 6, 8, 12, 16, 24, 30, 50%.

Current source additionally contains local values such as 3px, 10px, 14px. These must be treated as implementation evidence until component consolidation is approved.

## 6. Containers and responsive reference

Design reference widths: 320, 375, 390, 414, 480, 768, 1024, 1280, 1440, 1920.

Current code has 1240px as a frequent content max-width, with some page-specific values. Figma must model semantic container variants rather than force one value globally before runtime validation.

## 7. Buttons

Canonical semantic variants to model:
- Primary
- Secondary / Outline
- Link / Text
- Icon action

States:
- Default
- Hover
- Pressed
- Disabled
- Focus-visible

The visual component may be standardized, but platform purchase/cart behavior must remain owned by InSales.

## 8. Form controls

Model shared states for:
- Text input
- Select
- Textarea
- Checkbox
- Radio
- Validation/error
- Focus-visible

The calculator's existing DOM, IDs, formulas and business logic are protected and must not be replaced with a new Figma-driven form implementation.

## 9. Images

Define image tokens by semantic purpose, not one global crop:
- Product commerce image
- Editorial/hero image
- Production/workshop image
- Technical/drawing image
- Veles Light dark-scene image

Each component gets a documented fit/ratio. Existing `contain` vs `cover` behavior remains component-specific until visual QA proves a standard.

## 10. Completion criteria

`00 Foundations` is complete only when:
- semantic tokens have explicit values or explicit unresolved status;
- typography is resolved with documented exceptions;
- container/breakpoint behavior is documented;
- Button/Input states exist;
- component-level image rules are defined;
- decisions are reflected in the work archive;
- no production code was changed merely to prepare the Figma system.
