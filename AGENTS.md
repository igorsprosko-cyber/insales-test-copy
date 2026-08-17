# Veles Legs Agent Rules

## Scope
This repository is a test environment. Production `index.liquid` must not be modified by V2.3 work.

## Working rules
1. Work only on the dedicated V2.3 working branch.
2. The supplied 3549-line `V2.1_HOME_APPEND_CORRECTED_NO_FINAL_CTA.liquid` is the working baseline unless a newer explicitly approved file is supplied.
3. Before editing, inspect the entire file and identify the calculator boundaries.
4. The calculator is protected: do not rewrite, replace, simplify, rename or delete its DOM IDs, fields, validation or JavaScript unless the user explicitly requests a specific calculator fix.
5. Do not invent company facts, production numbers, capacities, certifications, prices, delivery promises or claims.
6. Real photographs are never fabricated or presented as real. Use clearly named image slots/placeholders until approved assets are available.
7. Do not create additional patch files unless explicitly requested. Prefer one coherent working homepage file.
8. Do not alter unrelated sections while implementing a requested change.
9. After every implementation pass run structural checks: duplicate IDs, balanced script/style tags, Liquid comments, calculator selectors, and unexpected file changes.
10. Always provide a concise engineering report and diff summary before merge.
11. Never push to `main` as part of an experimental change. Changes reach `main` only through an approved PR.

## V2.3 design direction
Industrial premium + human workshop. Airy layouts, large editorial typography, black/warm-white/natural-wood/metal palette, real photography, thin technical annotations, section numbers and restrained motion.

## Page narrative
01 Hero → 02 Task/material → 03 Catalog → 04 Veles Light → 05 Calculator → 06 Custom production → 07 B2B → 08 Proof of manufacturer.

## Visual principles
- Photography carries the emotional life of the page.
- Technical graphics explain material, dimensions, form and production.
- Motion is subtle and functional.
- Avoid generic e-commerce card grids when a stronger editorial composition is possible.
- Never sacrifice calculator functionality for visual styling.
