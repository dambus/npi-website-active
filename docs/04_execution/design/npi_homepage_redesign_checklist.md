# NPI Website — Homepage Redesign Checklist (Codex Execution Guide)

Purpose:
This document is an **actionable implementation checklist for Codex** to redesign the public homepage using the approved visual direction (Bexon-inspired) and NPI-specific content strategy.

This is NOT a conceptual document.
This is a **step-by-step execution plan**.

---

## 0. GLOBAL RULES (READ FIRST)

Codex MUST follow these rules:

- Do NOT generate generic agency-style content
- Do NOT add extra sections outside this checklist
- Do NOT modify CMS logic or data structure
- Do NOT break existing Supabase integrations
- Focus ONLY on public UI (Home page)
- Preserve routing and page structure
- Use existing components where possible, refactor where needed

Design direction:
- clean
- minimal
- structured
- engineering-oriented
- high whitespace
- controlled contrast

---

## 1. LAYOUT STRUCTURE (MANDATORY ORDER)

Homepage MUST follow this section order:

1. Header (sticky nav)
2. Hero
3. About / Intro
4. Services
5. Process / How we work
6. Numbers / Stats
7. Featured References
8. Clients / Partners
9. Contact CTA
10. Footer

Do NOT change order unless explicitly instructed.

---

## 2. HEADER / NAVIGATION

### Tasks:
- Implement sticky header
- Add scroll behavior:
  - visible at top
  - hides on scroll down (after ~100–150px)
  - reappears on scroll up
- Add smooth transition (no jump)

### Style:
- light background (#fff or near-white)
- subtle shadow on scroll
- clean typography
- no heavy CTA button

### Layout:
- left: logo
- right: navigation

### Nav items:
- Home
- About
- Services
- References
- Contact

---

## 3. HERO SECTION

### Tasks:
- Replace current hero with full redesign

### Layout:
- full width
- large vertical spacing
- centered or left-aligned content block

### Content structure:
- small label (uppercase, low contrast)
- large headline (2–3 lines max)
- short paragraph (1–2 sentences)
- primary CTA button

### Style:
- dark background (near-black / deep gray)
- subtle green accent glow
- strong typography contrast
- no clutter

### Optional:
- subtle background gradient
- very light parallax (if easy)

---

## 4. ABOUT / INTRO SECTION

### Tasks:
- Create compact intro block below hero

### Layout:
- centered text block
- optional logo strip below

### Content:
- section label
- strong heading
- short paragraph (max 3–4 lines)

### Style:
- light background
- high whitespace
- clean typography

---

## 5. SERVICES SECTION

### Tasks:
- Replace existing services with structured grid

### Layout:
- 4 or 5 cards
- grid (2x2 or 3+2 layout depending on screen)
- large spacing between cards

### Card structure:
- icon (top)
- title
- one short description

### Style:
- light or neutral background
- subtle hover effect
- avoid heavy borders
- minimal shadows

### Important:
- keep descriptions short (1 sentence)
- do NOT add paragraphs

---

## 6. PROCESS / HOW WE WORK

### Tasks:
- Create split section

### Layout:
- two columns:
  - left: text (dark background)
  - right: image/visual

### Content:
- section label
- heading
- paragraph
- optional bullet list (max 4 items)

### Style:
- strong contrast between left/right
- large spacing
- no clutter

---

## 7. NUMBERS / STATS SECTION

### Tasks:
- Create stat blocks with count-up animation

### Layout:
- 3 or 4 columns
- centered content

### Each stat:
- large number
- short label

### Animation:
- count-up on scroll into view

### Style:
- light background
- strong typography
- minimal design

---

## 8. FEATURED REFERENCES

### Tasks:
- Redesign reference cards

### Layout:
- 3 cards max
- grid layout
- equal height cards

### Card content:
- image
- title
- short metadata (location/client/year)
- short descriptor

### Interaction:
- hover elevation or subtle transform

### CTA:
- button below section: “View all references”

### Important:
- DO NOT overload cards with data

---

## 9. CLIENTS / PARTNERS

### Tasks:
- Add logo strip

### Layout:
- horizontal scroll or auto slider

### Style:
- grayscale logos
- low visual dominance
- subtle hover color reveal (optional)

---

## 10. CONTACT CTA

### Tasks:
- Create compact CTA section

### Layout:
- centered content block

### Content:
- heading
- short paragraph
- CTA button

### Style:
- slightly different background (light gray or subtle tone)
- clear button

### DO NOT:
- add full contact form here (keep it simple)

---

## 11. FOOTER

### Tasks:
- Clean structured footer

### Layout:
- 3–4 columns

### Content:
- short company description
- navigation links
- services links (optional)
- contact info

### Bottom bar:
- copyright
- minimal styling

---

## 12. ANIMATIONS

### Implement:
- fade-up on scroll
- slight stagger for cards
- hover transitions (scale/translate small)
- count-up for stats
- nav hide/show

### DO NOT:
- overuse animation
- add long delays
- add flashy motion

---

## 13. RESPONSIVE

### Ensure:
- clean mobile stacking
- proper spacing on tablet
- readable typography on all sizes
- no overflow issues

---

## 14. FINAL CHECKLIST

Before completion, verify:

- no contrast issues (text readable everywhere)
- no light text on light background
- spacing is consistent
- typography hierarchy is clear
- no section feels crowded
- homepage loads cleanly
- no broken links
- CMS data still works

---

## 15. OUT OF SCOPE (DO NOT TOUCH)

- Admin / CMS UI
- Supabase schema
- Auth logic
- Routing structure
- Other pages (About, Services, etc.)

---

## FINAL NOTE

The goal is NOT to recreate the template.

The goal is:
- improve structure
- improve clarity
- improve visual hierarchy
- align with NPI identity

If something looks “generic template-like”, simplify it.

If something looks “overdesigned”, reduce it.

Clarity > decoration.
