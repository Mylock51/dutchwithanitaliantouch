---
name: Dutch with an Italian Touch — Brand
version: 2.1
source: src/brand.json + public/palette-v2.html + memory/project_dwait_palette_v21.md
stitchProjectId: "14465505206007839723"
designSystemAssetId: "10638204837197453920"
---

# Dutch with an Italian Touch — Design System

## Essence

Coaching 1:1 per donne madri che rientrano al lavoro (32–45, high-achieving). Il linguaggio visivo è **editoriale, minimale, femminile senza ornamento** — più rivista di lifestyle premium che agenzia wellness. Bone + burgundy + brown, niente terracotta, niente gradients, niente soft-startup. Tipografia serif light in display + sans neutra in body. Whitespace generoso, griglia asimmetrica, un solo accento caldo che porta il calore.

## Palette (v2.1 — locked)

### Surface (bone family)
- **Bone** `#F5EFE8` — primary background, warm off-white
- **Bone light** `#FAF6EF` — elevated surfaces, cards
- **Bone deep** `#EAE1D3` — alt section divider
- **Sand** `#E8DECB` — secondary surface
- **Linen** `#EFE6D5` — tertiary surface

### Ink (text)
- **Ink** `#1F1A17` — primary text, dominant typography
- **Ink soft** `#7A6F62` — secondary text, meta
- **Ink faint** `#B9AD93` — disabled, hairlines

### Accent (single warm anchor)
- **Burgundy** `#6E1F2A` — primary CTA, accent, editorial highlight
- **Burgundy deep** `#4A141D` — hover, pressed
- **Burgundy soft** `#7A3840` — secondary accent

### Warm neutral (quieter accent)
- **Brown** `#8B6F54` — supporting accent, frames, secondary buttons
- **Brown soft** `#B8A088` — chips, tags
- **Brown deep** `#5C4836` — grounding, footer text

### Status
- success `#5C4836` · warn `#8B6F54` · danger `#6E1F2A` · info `#7A6F62`

### Rules
- **NO terracotta, NO orange, NO pink.** The palette is bone + burgundy + brown — nothing else.
- **NO gradients.** Flat fills only. An accent line or block, never a fade.
- **NO pure black / pure white.** Always ink or bone.
- **Single accent per screen.** Burgundy carries CTA energy; brown is quiet support.

## Typography

### Families
- **Display / headings** — `Fraunces` (serif, optical-size aware, modern transitional)
- **Body / UI** — `Inter` (sans, neutral, clear)
- **Meta / eyebrow** — `JetBrains Mono` (tracking wide, uppercase, 10-11px)

### Scale
| Role | Family | Weight | Size | Line | Tracking |
|---|---|---|---|---|---|
| display | Fraunces | 250 | 96 | 100 | -0.04em |
| h1 | Fraunces | 300 | 56 | 60 | -0.03em |
| h2 | Fraunces | 300 | 40 | 48 | — |
| h3 | Fraunces | 400 | 22 | 28 | — |
| lede | Inter | 400 | 17 | 28 | — |
| body | Inter | 400 | 14 | 24 | — |
| meta | JetBrains Mono | 500 | 10 | — | 0.22em upper |

### Weight rules
- Display/h1/h2 stay **light (250–300)** — the size provides presence, not weight.
- Body is always 400. Bold only to highlight a single keyword inline.
- **No italic except Fraunces italic** for the monogram / editorial pull-quote.

## Spacing & layout

- **Base unit 4px.** Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- **Container widths** — content 720, prose 640, wide 1200, full-bleed grid up to 1440.
- **Gutter** 24 (mobile), 32 (tablet), 48 (desktop).
- **Sections** breathe — vertical padding 96–128 on desktop, never less than 64 on mobile.
- **Grid** — 12 columns desktop, asymmetric splits preferred (7/5, 8/4) over balanced 6/6.

## Radius & elevation

- **Radius** — xs 2, sm 4, md 8 (default for cards / buttons), lg 12, xl 16, 2xl 24 (rare, large media).
- **Elevation** — two levels only.
  - `flat` — no shadow, hairline border `#B9AD93` at 20% opacity.
  - `raised` — single soft shadow `0 1px 2px rgba(31,26,23,0.06), 0 8px 24px rgba(31,26,23,0.04)`.
  - Never stack shadows. Never use colored shadows.

## Motion

- Durations — fast 150ms, normal 240ms, slow 420ms.
- Easing — default `cubic-bezier(0.2, 0.8, 0.2, 1)` (calm ease-out).
- Scroll reveal — opacity + 12px rise only. No scale, no rotate, no blur.
- Stagger — 60–90ms between siblings in a group. Three cards max before flattening to one reveal.
- **Never:** parallax, marquee, confetti, hover-bounce, cursor effects.

## Tone & voice

**Adjectives:** warm, precise, honest, un-hustled, feminine, editorial.

**Do**
- Speak to the reader directly (you / tu).
- Use concrete specifics (“60 min”, “Google Meet”, “IT · EN · NL”) over abstractions.
- Leave silence. One line of whitespace can replace three lines of copy.

**Avoid**
- Exclamation marks (except social/Instagram).
- Startup superlatives — "revolutionary", "unlock", "supercharge", "game-changer".
- Wellness cliché — "your best self", "journey", "empower", "thrive".
- Emoji in product copy.

## Component conventions

### Buttons
- **Primary** — bone-light bg on burgundy fill `#6E1F2A`, 14px Inter 500, radius 8, padding 14/28. Hover: burgundy-deep.
- **Secondary** — bone bg, ink border 1px at 20% opacity, ink text. Hover: sand fill.
- **Text link** — ink text, burgundy underline on hover, 1px offset.
- Only **one primary per viewport section.** Never two CTAs of equal weight.

### Cards
- Default flat — bone-light fill, hairline border, radius 8, padding 24/32.
- Editorial card may break — no border, only a burgundy top-rule 2px, for emphasis sections.

### Forms
- 44px min height, radius 6, bone-light fill, ink-faint border. Focus: burgundy 1.5px border, no shadow.
- Labels above input, 11px mono uppercase in ink-soft.

### Signature motifs
- **Editorial eyebrow** — mono `01 · Section name` above every section title.
- **Monogram `d·i`** — Fraunces italic 300, as brand mark. Never replaced with icon logo.
- **Asymmetric splits** — when pairing image + text, prefer 7/5 or 8/4 over 6/6.
- **Hairline dividers** — 1px ink-faint, 20% opacity, full-bleed section separators.

## Anti-patterns (do not generate)

- Rounded "soft" cards with thick shadow stacks.
- Gradient hero backgrounds.
- Terracotta / peach / coral anywhere.
- Icons in flat circular badges (wellness cliché).
- Stock photos of women drinking coffee.
- Floating testimonial avatars with star ratings.
- "Get started free" style CTAs.
