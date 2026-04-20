# Design System Strategy: Editorial Excellence in Real Estate

## 1. Overview & Creative North Star
**The Creative North Star: "The Architectural Monograph"**

This design system moves away from the "generic real estate portal" and toward a high-end editorial experience. Instead of a standard grid-locked website, the interface is treated like a premium physical monograph—a curated architectural book where white space is as important as the content itself. 

The system breaks the "template" look through **Intentional Asymmetry**. Large-scale typography is juxtaposed with generous margins, and high-quality architectural photography overlaps with subtle UI containers to create a sense of physical depth. By utilizing the vibrant orange (`primary: #a73400`) as a surgical accent against a sophisticated charcoal and off-white palette, we establish a visual language that feels authoritative, bespoke, and deeply trustworthy.

---

## 2. Colors: Tonal Depth & Soul
Our color application is governed by a philosophy of "Atmospheric Layering," moving beyond flat hex codes to create a living environment.

*   **The "No-Line" Rule:** To maintain the editorial feel, the use of 1px solid borders for sectioning is strictly prohibited. Use background shifts from the `surface` scale to define boundaries. A `surface-container-low` section sitting on a `surface` background provides all the separation needed without the visual "noise" of a line.
*   **Surface Hierarchy & Nesting:** Treat the UI as stacked sheets of fine paper. Use `surface-container-lowest` (#ffffff) for primary content cards placed atop `surface-container` (#e6eff8) backgrounds to create a soft, natural lift.
*   **The "Glass & Gradient" Rule:** For floating navigation or hero overlays, use Glassmorphism. Apply `surface-container-lowest` at 80% opacity with a `20px` backdrop-blur. 
*   **Signature Textures:** Main CTAs should not be flat. Use a subtle linear gradient from `primary` (#a73400) to `primary_container` (#d04403) at a 135-degree angle. This adds a "weighted" feel to buttons, suggesting quality and permanence.

---

## 3. Typography: The Editorial Voice
The typography is the backbone of the brand's sophistication, utilizing a high-contrast scale between `plusJakartaSans` (Display/Headlines) and `inter` (Body/UI).

*   **Display & Headline (Plus Jakarta Sans):** These levels represent the "Architectural" voice. `display-lg` (3.5rem) should be used with tight letter-spacing (-0.02em) to feel impactful and modern.
*   **Title & Body (Inter):** These levels represent the "Human" voice. `body-lg` (1rem) provides high legibility for property descriptions.
*   **The Label Scale:** Use `label-md` in all-caps with increased letter-spacing (0.1em) for category headers or small metadata to evoke the feel of technical architectural drawings.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "digital" for this system. We convey depth through light and material properties.

*   **The Layering Principle:** Depth is achieved by stacking. A `surface-container-lowest` card placed on a `surface-container-low` section creates a natural hierarchy.
*   **Ambient Shadows:** If a floating element is required (e.g., a "Book a Visit" modal), use an extra-diffused shadow: `0 20px 40px rgba(20, 29, 35, 0.06)`. The tint is derived from `on_surface` to mimic natural light.
*   **The "Ghost Border" Fallback:** For accessibility in forms, use the `outline_variant` token at **20% opacity**. This provides a hint of structure without the harshness of a standard border.
*   **Motion & Depth:** Elements should enter the viewport with subtle vertical offsets (using the `10` spacing scale) to reinforce the concept of stacked physical layers.

---

## 5. Components: Refined Utility

### Buttons
*   **Primary:** High-pill shape (`rounded-full`). Gradient of `primary` to `primary_container`. White text. No shadow.
*   **Secondary:** Ghost-style. No background. `outline-variant` at 20% opacity. Text in `primary`.
*   **Interaction:** On hover, a primary button should increase in saturation; a secondary button should fill with a subtle `primary_fixed` (#ffdbcf) tint.

### Cards & Property Teasers
*   **Strict Rule:** No dividers. Separate content using the `spacing-6` (2rem) or `spacing-8` (2.75rem) tokens. 
*   **Imagery:** Images must have a `rounded-md` (0.375rem) corner to feel soft yet architectural. 

### Input Fields
*   **Style:** Minimalist. Only a bottom-stroke using `outline_variant` (20% opacity). When focused, the stroke transitions to `primary` (#a73400) and expands to 2px.
*   **Error State:** Use `error` (#ba1a1a) for text and a `surface_container_lowest` background with an `error_container` tint for the field.

### Specialized Component: The "Architectural Legend"
*   For property specs (bedrooms, square footage), use custom icons in `primary` accompanied by `label-md` typography. These should be arranged in a spacious, non-bordered grid to mimic an architect's floor plan legend.

---

## 6. Do's and Don'ts

### Do
*   **DO** use asymmetric layouts where images are slightly offset from the text blocks.
*   **DO** use the `spacing-20` and `spacing-24` tokens for section margins to allow the design to "breathe."
*   **DO** use `surface-bright` for the main background to keep the "Housing Project" feeling fresh and optimistic.

### Don't
*   **DON'T** use 100% black (#000000). Use `on_background` (#141d23) for a more sophisticated, charcoal-ink feel.
*   **DON'T** use standard 1px borders to separate content. It breaks the monograph aesthetic.
*   **DON'T** crowd the UI. If a section feels "busy," increase the vertical spacing by two increments on the scale.
*   **DON'T** use high-contrast drop shadows. They look "cheap" in a high-end real estate context.