# ShoppaAI Design System — Rules for Claude

## Project Overview

This is the **ShoppaAI Design System** (`@shopfully/shoppa-ds`), a React component library with Storybook documentation, published via GitHub and Chromatic.

- **Framework:** React 19 + TypeScript (strict mode)
- **Styling:** Plain CSS with BEM naming + CSS custom properties (no Tailwind, no CSS-in-JS)
- **Build:** Vite 8 (library mode) + tsc for type generation
- **Docs:** Storybook 10 with autodocs
- **Testing:** Vitest + Playwright + Chromatic visual regression
- **Font:** Outfit (Google Fonts, loaded in `.storybook/preview-head.html`)

## Design Tokens

All tokens live in `src/tokens/tokens.css` as CSS custom properties on `:root`.

**Always use tokens — never hardcode values.** Map Figma variables to existing tokens:

| Category | Pattern | Example |
|---|---|---|
| Spacing | `--space-{4\|8\|12\|16\|24\|32\|40\|48}` | `padding: var(--space-16)` |
| Radius | `--radius-{sm\|md\|lg\|xl}` | `border-radius: var(--radius-md)` |
| Colors | `--color-{category}-{name}` | `color: var(--color-brand-orange)` |
| Typography | `--text-{size}-{property}` | `font-size: var(--text-4xl-font-size)` |

Key colors:
- Active/selected: `--color-brand-orange` (#f08e19)
- Inactive: `--color-text-inactive` (#b0b0b0)
- Background: `--color-background-surface` (#ffffff)
- Primary text: `--color-text-primary` (#282832)

## Component Architecture

### File structure (one folder per component):
```
src/components/ComponentName/
├── ComponentName.tsx           # Implementation
├── ComponentName.css           # Styles (BEM)
├── ComponentName.stories.tsx   # Storybook stories
└── index.ts                    # Named exports
```

### Component patterns:
- **Functional components** with TypeScript interfaces
- **Controlled components** — state managed by parent via `value`/`onChange`-style props
- **Named exports** (not default exports)
- **Export types** alongside components (`export type { Props }`)
- **Semantic HTML** with ARIA attributes (`role`, `aria-selected`, `aria-label`)

### CSS patterns:
- **BEM naming:** `.block`, `.block__element`, `.block__element--modifier`
- **One CSS file per component**, imported in the TSX
- **Use token variables**, not hardcoded values
- **Flexbox** for layout, `gap` for spacing
- **Transitions** for interactive states (e.g., `transition: color 0.2s`)
- **`color: inherit`** on child elements to cascade from parent

## Icon System

Icons are React components in `src/components/Icons/` with a consistent interface:

```tsx
interface IconProps {
  color?: string;  // default: "currentColor"
  size?: number;   // default: 24
}
```

- Use inline SVG (no img tags, no icon fonts)
- Pass `color` prop using CSS custom properties for theming
- All icons exported from `src/components/Icons/index.ts`

## Storybook Stories

- Use `autodocs` tag for automatic documentation
- Include a `description` in meta with: design token table, usage guidelines (Do/Don't)
- Interactive stories use `useState` in a `render` function
- Include an `AllVariants` story for visual comparison
- Layout: `"fullscreen"` for full-width components

## Library Entry Point

`src/index.ts` exports all public components and types. Update it when adding new components.

## Figma Integration

Components are designed from Figma using the MCP server. When reading a Figma design:
1. Use `get_design_context` to fetch the component
2. Map Figma properties to React props
3. Map Figma variables to CSS custom properties in `tokens.css`
4. Extract SVG icons as React components (inline SVG, not image URLs)
5. Never use Tailwind classes from Figma output — convert to BEM CSS with tokens

## Publishing

- **GitHub:** `git push` to `main` at https://github.com/pijiola/shoppa-ds
- **Storybook:** Auto-deploys to GitHub Pages on push → https://pijiola.github.io/shoppa-ds/
- **Build:** `npm run build` (Vite bundle + TypeScript declarations)

## Figma Files

- **Main app:** fileKey `JIaoui5Vfnmu9y525Cyhiw` (Shoppa--Prod-)
- **Components:** fileKey `StTbumABHsZmMRMekfSWKP` (component library)
