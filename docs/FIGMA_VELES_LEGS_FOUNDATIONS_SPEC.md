# VELES LEGS — 00 Foundations Specification

Status: DRAFT / CODE-DERIVED

Purpose: canonical preparation for the Figma `00 Foundations` page and later code reconciliation. This document does not authorize production code changes.

## 0. Authority order

1. `my-first-project/AGENTS.md` — change-control authority.
2. `my-first-project/STYLE_GUIDE.md` — visual-system authority.
3. `my-first-project/ARCHITECTURE.md` / `PROJECT.md` — architecture and quality goals.
4. Current verified InSales theme source.
5. Official InSales documentation for platform behavior.
6. Figma — visual contract once decisions are approved.

## 1. Principles

- Industrial minimalism.
- Black/white first; gray for secondary information.
- Green only for approved interactive/success semantics.
- Montserrat for body/UI and Playfair Display for large editorial headings, per project style guide.
- 4px spacing base.
- 1px/2px borders where the component contract requires them.
- Minimal animation; motion must support interaction and performance.
- Figma defines visual behavior; InSales owns platform runtime and shop data.

## 2. Color tokens — current evidence

| Semantic token | Current evidence | Decision state |
|---|---|---|
| Background | `#FFFFFF` | baseline |
| Surface | `#FFFFFF` | baseline |
| Text primary | `#000000`, `#151515`, `#333333` appear in different layers | consolidate deliberately |
| Text secondary | `#555555`, `#666666`, `#777777` | consolidate deliberately |
| Border | `#000000` plus lighter neutral borders | semantic variants needed |
| Accent | `#5E8C31` in project design layer | candidate canonical |
| InSales setting accent | `#76BC21` | unresolved platform/config value |
| Error | `#F8D7DA` in theme settings | semantic error baseline |
| Success | `#D4EDDA` in theme settings | semantic success baseline |

No production accent value is to be changed until the `#5E8C31` / `#76BC21` conflict is explicitly resolved.

## 3. Typography

Canonical project rule: Montserrat + Playfair Display.

Style-guide reference sizes:
- H1: 36px
- H2: 28px
- H3: 20px
- Body: 16px
- Small: 14px
- Service: 13px
- Caption: 12px

Runtime evidence also includes local Roboto usage and InSales settings containing PT Root UI. These are exceptions/conflicts to document, not silently delete.

## 4. Spacing

Base grid: 4px.

Approved project values: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128.

## 5. Radius

Approved style-guide values: 0, 6, 8, 12, 16, 24, 30, 50%.

Current source contains additional local values. Those remain implementation evidence until a component-specific consolidation decision is approved.

## 6. Containers and responsive reference

Control widths: 320, 375, 390, 414, 480, 768, 1024, 1280, 1440, 1920.

Current code frequently uses a 1240px content max-width, while some page-specific contexts differ. Figma should therefore model semantic container variants rather than force one width across all pages before runtime verification.

## 7. Buttons

Semantic variants:
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

Platform cart/purchase behavior remains InSales-owned.

## 8. Form controls

Shared states:
- Text input
- Select
- Textarea
- Checkbox
- Radio
- Validation/error
- Focus-visible

The calculator is a protected implementation surface. Its DOM, IDs, formulas, handlers and business logic are not replaced by Figma redesign.

## 9. Images

Semantic image roles:
- Product commerce image
- Editorial/hero image
- Production/workshop image
- Technical/drawing image
- Veles Light dark-scene image

Fit/crop is defined per component. Existing `contain` vs `cover` behavior remains evidence until runtime visual QA establishes the canonical rule.

## 10. Figma page content to create

`00 Foundations` should contain these sections in order:

1. Project principles / authority note
2. Color tokens
3. Typography styles
4. Spacing scale
5. Radius scale
6. Container/grid/breakpoint reference
7. Border rules
8. Buttons and states
9. Form controls and states
10. Image roles and fit rules
11. Token conflicts / unresolved decisions
12. Implementation handoff notes

## 11. Completion criteria

Foundations becomes `APPROVED` only when:
- all semantic tokens have explicit values or explicit unresolved status;
- typography is resolved with documented exceptions;
- container and breakpoint behavior is documented;
- button/form states exist;
- image rules are defined by component role;
- the work archive records the decision;
- no production code was changed merely to construct the Figma system;
- Figma metadata can be read back to confirm the expected structure.


## 12. Performance Foundations — mandatory

The Foundations layer must carry performance metadata into component definitions.

### Loading semantics

Every visual component containing an external resource must be classifiable as:
- **Critical:** required for the first meaningful viewport/LCP.
- **Deferred:** useful after first paint/interaction.
- **Lazy:** below-the-fold or otherwise non-critical.
- **Third-party:** analytics/marketing/platform dependency requiring separate scheduling review.

### Image rules

Define image role, dimensions, aspect ratio and loading priority per component. Do not apply one global `cover`, `contain`, eager/lazy or high-priority rule to every image.

### Typography rules

Fonts must have an explicit loading/fallback strategy. Avoid repeated font imports and do not make custom font delivery a hidden blocker for first content.

### Performance tokens are not visual tokens

Network priority, loading mode, execution timing and third-party scheduling are implementation metadata, not color/spacing tokens. They belong in the component handoff contract and must be verified in runtime.

### Gate

No Foundation token or component is considered fully approved if its visual definition is complete but its performance-sensitive resource behavior is unknown.
