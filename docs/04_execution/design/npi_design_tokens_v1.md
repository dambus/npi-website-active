# NPI Website — Design Tokens v1

Purpose of this document:
Define the core visual token system for the NPI website before broader visual refinement begins.

This document is intended to guide:
- Codex implementation
- Tailwind utility usage
- component consistency
- spacing and typography discipline
- future refinement of public pages

This is not a branding document.
This is a practical implementation system.

---

## 1. Design principles

The NPI interface should feel:

- modern
- engineering-oriented
- calm
- premium but restrained
- structured
- highly readable
- internationally presentable

The UI should avoid feeling:

- generic startup
- busy
- soft and overly rounded
- decorative for its own sake
- card-heavy without hierarchy
- washed out or low-contrast

Core visual direction:
- strong contrast
- large whitespace
- dark/light section rhythm
- sharp but not harsh geometry
- selective green accents
- subtle layering and transparency
- minimal but refined motion

---

## 2. Color token system

## 2.1 Brand role
Use green as an accent and identity carrier, not as a dominant flood color.
Dark neutrals and soft light surfaces should carry most layouts.

## 2.2 Core palette

### Base neutrals
- `--color-bg`: `#F3F5F4`
- `--color-surface`: `#FFFFFF`
- `--color-surface-muted`: `#E9EEEC`
- `--color-surface-alt`: `#DDE6E3`

### Dark foundation
- `--color-ink`: `#0B1414`
- `--color-ink-soft`: `#152122`
- `--color-ink-muted`: `#243336`

### Brand greens
- `--color-brand`: `#1E8F79`
- `--color-brand-hover`: `#177564`
- `--color-brand-soft`: `#B7D8D0`
- `--color-brand-glow`: `rgba(30, 143, 121, 0.18)`

### Support text
- `--color-text`: `#102021`
- `--color-text-muted`: `#55696C`
- `--color-text-soft`: `#7B8B8D`
- `--color-text-on-dark`: `#F3F7F6`
- `--color-text-on-dark-muted`: `#B5C4C2`

### Borders and lines
- `--color-border`: `#D5DEDB`
- `--color-border-strong`: `#B8C8C4`
- `--color-border-dark`: `rgba(255,255,255,0.12)`

### States
- `--color-success`: `#1E8F79`
- `--color-warning`: `#C28A22`
- `--color-danger`: `#B54848`
- `--color-info`: `#2D6A8A`

## 2.3 Color usage rules

### Page backgrounds
Use:
- `bg` for page canvas
- `surface` for cards and header
- `surface-muted` / `surface-alt` for light section variation
- `ink` / `ink-soft` for dark hero and dark split sections

### Accent usage
Use brand green for:
- active nav state
- CTA buttons
- badges/section labels
- icons
- selected highlights
- subtle glow effects

Do not:
- flood large areas with saturated green
- use green for large body text blocks
- over-accent every component

### Contrast rule
All text/background pairings must pass practical readability:
- dark text on light surfaces
- light text only on truly dark surfaces
- placeholder text must remain readable
- muted text must still be legible

---

## 3. Typography tokens

## 3.1 Font family
Primary font:
- `Mona Sans`

Fallback stack:
- `ui-sans-serif, system-ui, sans-serif`

## 3.2 Typography character
Typography should feel:
- crisp
- contemporary
- slightly technical
- clean and deliberate

Avoid:
- overly tight dense blocks
- too many font weights in one section
- decorative font experiments

## 3.3 Font weights
Recommended:
- `400` regular
- `500` medium
- `600` semibold
- `700` bold (selectively)

Prefer:
- `600` for section headings and card titles
- `500` for navigation and buttons
- `400` for body text

## 3.4 Type scale

### Display / Hero
- `--text-display-xl`: `clamp(3.5rem, 7vw, 6.5rem)`
- `--text-display-lg`: `clamp(3rem, 5vw, 5rem)`

### Section headings
- `--text-h1`: `clamp(2.5rem, 4.5vw, 4.25rem)`
- `--text-h2`: `clamp(2rem, 3vw, 3.2rem)`
- `--text-h3`: `clamp(1.5rem, 2vw, 2rem)`

### Body
- `--text-body-lg`: `1.25rem`
- `--text-body`: `1rem`
- `--text-body-sm`: `0.9375rem`

### Small UI / labels
- `--text-label`: `0.78rem`
- `--text-caption`: `0.75rem`

## 3.5 Line heights
- display/headings: `0.95–1.05`
- section headings: `1.05–1.15`
- body: `1.55–1.75`
- labels/nav/buttons: `1.2`

## 3.6 Letter spacing
Use very subtle spacing for:
- nav
- section labels
- small uppercase badges

Recommended:
- labels: `0.08em`
- nav uppercase elements if any: `0.04em`

Do not overuse tracking in long text.

---

## 4. Spacing tokens

## 4.1 Core spacing scale
Recommended spacing scale:

- `--space-1`: `0.25rem`
- `--space-2`: `0.5rem`
- `--space-3`: `0.75rem`
- `--space-4`: `1rem`
- `--space-5`: `1.25rem`
- `--space-6`: `1.5rem`
- `--space-8`: `2rem`
- `--space-10`: `2.5rem`
- `--space-12`: `3rem`
- `--space-16`: `4rem`
- `--space-20`: `5rem`
- `--space-24`: `6rem`
- `--space-28`: `7rem`
- `--space-32`: `8rem`

## 4.2 Section spacing
Desktop section rhythm should be generous.

Recommended:
- large sections: `padding-block: 6rem–8rem`
- hero: `padding-top: 8rem+`, `padding-bottom: 6rem+`
- inner card padding: `1.75rem–2.5rem`

Tablet:
- slightly reduced but still open

Mobile:
- avoid crushing sections; preserve breathing room

## 4.3 Layout gaps
Recommended defaults:
- card grid gap: `1.5rem–2rem`
- section internal gap: `2rem–3rem`
- hero content gap: `1.5rem–2rem`

Rule:
When in doubt, add more space before adding more visual decoration.

---

## 5. Radius tokens

The UI should reduce excessive roundness.

Recommended radii:
- `--radius-sm`: `0.5rem`
- `--radius-md`: `0.875rem`
- `--radius-lg`: `1.25rem`
- `--radius-xl`: `1.75rem`
- `--radius-pill`: `999px`

Usage:
- cards: `md` or `lg`
- large feature panels: `lg`
- header shell: `lg`
- buttons: `pill` only when intentional
- inputs: `md`
- avoid rounding every component to the maximum

Rule:
NPI should feel more architectural than soft-startup.

---

## 6. Shadow tokens

Use shadows sparingly.
They should support depth, not decoration.

Recommended:
- `--shadow-sm`: `0 4px 16px rgba(11, 20, 20, 0.06)`
- `--shadow-md`: `0 10px 30px rgba(11, 20, 20, 0.08)`
- `--shadow-lg`: `0 18px 50px rgba(11, 20, 20, 0.10)`

Use for:
- sticky header on scroll
- elevated cards on hover
- key hero/image panels

Avoid:
- heavy drop shadows everywhere
- muddy shadows on dark backgrounds

---

## 7. Border and stroke tokens

Use borders as subtle structure.

Recommended:
- light surfaces: `1px solid var(--color-border)`
- dark surfaces: `1px solid var(--color-border-dark)`

For labels/badges:
- use dotted/dashed or subtle outlined treatment selectively
- avoid overusing outline decoration in every section

---

## 8. Layout tokens

## 8.1 Container widths
Recommended:
- `--container`: `min(1200px, calc(100vw - 2rem))`
- `--container-wide`: `min(1320px, calc(100vw - 2rem))`
- `--container-narrow`: `min(960px, calc(100vw - 2rem))`

## 8.2 Grid logic
Homepage should use:
- spacious 2-column split sections
- 3-column stat/reference sections when possible
- 2x2 / 3+2 service grids as appropriate
- avoid tiny cards lined up in overly dense rows

## 8.3 Section backgrounds
Rotate between:
- light neutral
- slightly tinted light neutral
- deep dark hero/process/CTA sections

This rhythm is essential to the homepage feel.

---

## 9. Component-level token guidance

## 9.1 Header
- light surface
- semibold nav text
- active link in brand green
- subtle shadow only when sticky state changes
- generous horizontal padding
- rounded shell allowed, but restrained

## 9.2 Buttons
Primary:
- brand green background
- light text
- medium weight
- pill or softly rounded shape
- strong contrast

Secondary:
- transparent or surface-muted background
- dark text
- subtle border

Hover:
- slight translate or opacity/depth shift
- no aggressive scale

## 9.3 Section labels
Style:
- uppercase
- compact
- outline/dashed or subtle badge styling
- brand-accent text
- small icon optional

These should be consistent across the homepage.

## 9.4 Service cards
- larger than standard cards
- plenty of inner padding
- strong icon area
- clear title
- one short sentence
- light background
- subtle hover state

## 9.5 Stat cards
- light surface
- strong large number
- small factual label
- no excess decoration

## 9.6 Reference cards
- strong image-first layout
- editorial spacing
- reduced metadata density
- cleaner type hierarchy
- not cramped

## 9.7 Contact CTA block
- dark background or strong contrast background
- strong heading
- short copy
- one clear CTA

## 9.8 Footer
- light muted background
- column structure
- low-noise bottom bar
- clear but not loud hierarchy

---

## 10. Motion tokens

Motion should be subtle and premium.

Recommended durations:
- `--motion-fast`: `160ms`
- `--motion-base`: `240ms`
- `--motion-slow`: `420ms`

Recommended easing:
- `cubic-bezier(0.22, 1, 0.36, 1)`

Use for:
- header hide/show
- button hover
- card hover
- section fade-up
- count-up triggers
- logo strip reveal
- subtle image parallax

Avoid:
- bouncy motion
- long theatrical transitions
- multiple competing motion effects

---

## 11. Tailwind mapping guidance

These tokens should be implemented either as:
- CSS variables in `:root`
- utilities in `index.css`
- optional Tailwind theme extension if desired

Recommended implementation approach:
1. Define CSS variables in `src/index.css`
2. Add semantic utility classes where useful
3. Use Tailwind arbitrary values only when necessary
4. Prefer semantic naming over random one-off classes

Examples of semantic classes that may help:
- `.section-shell`
- `.section-shell-dark`
- `.section-label`
- `.surface-card`
- `.surface-panel`
- `.text-muted`
- `.container-wide`
- `.content-narrow`

---

## 12. Accessibility and readability rules

This is mandatory.

### Text contrast
- never use low-contrast gray on pale backgrounds
- placeholders must remain readable
- muted text must still be legible
- buttons must always have clear contrast

### Interactive states
- hover must not be the only visual state
- focus states must be visible
- active/current nav state must be obvious

### Motion accessibility
- keep motion subtle
- consider reduced motion support later if needed

---

## 13. Practical rules for Codex

Codex should use this document to avoid these mistakes:
- too many rounded corners
- too many box layers
- inconsistent spacing
- random font sizes
- washed-out contrast
- overdecorated cards
- green used everywhere
- generic template styling
- crowded sections

If a design choice feels too soft, too busy, or too generic:
- simplify it
- add space
- reduce decoration
- strengthen hierarchy

---

## 14. Recommended starter token summary

If implementation needs a minimal fast-start set, begin with:

### Colors
- background: `#F3F5F4`
- surface: `#FFFFFF`
- dark: `#0B1414`
- brand: `#1E8F79`
- text: `#102021`
- text-muted: `#55696C`
- border: `#D5DEDB`

### Radius
- cards: `0.875rem`
- panels: `1.25rem`
- buttons: pill only where needed

### Shadows
- default: subtle only
- hover: one level stronger

### Spacing
- section padding: `6rem–8rem`
- card padding: `2rem`
- grid gaps: `1.5rem–2rem`

### Typography
- Mona Sans
- strong display scale
- minimal weight variety
- short paragraphs only

---

## 15. Final principle

These tokens are not decoration.

They are the system that should make the NPI homepage feel:
- coherent
- intentional
- readable
- premium
- specific to NPI

A better token system should reduce visual noise and increase trust.
