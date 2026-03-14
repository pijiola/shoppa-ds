# ShoppaAI Design System

`@pijiola/shoppa-ds` — the shared component library for ShoppaAI apps.

## Quick start

### 1. Configure the registry

Add a `.npmrc` file to your project root:

```
@pijiola:registry=https://npm.pkg.github.com
```

### 2. Install

```bash
npm install @pijiola/shoppa-ds
```

### 3. Import components

```tsx
import { BottomBar } from "@pijiola/shoppa-ds";
import "@pijiola/shoppa-ds/tokens";

function App() {
  const [tab, setTab] = useState<"Shoppa" | "My list" | "Profile">("Shoppa");
  return <BottomBar active={tab} onTabChange={setTab} />;
}
```

### 4. Import design tokens (optional)

If you only need the tokens (colors, spacing, radius) without the components:

```css
@import "@pijiola/shoppa-ds/tokens";
```

Then use them in your CSS:

```css
.my-element {
  padding: var(--space-16);
  color: var(--color-brand-orange);
  border-radius: var(--radius-md);
}
```

## Available components

| Component | Description |
|-----------|-------------|
| `BottomBar` | Bottom navigation with 3 tabs: ShoppaAI, My Lists, Profile |

## Design tokens

| Category | Pattern | Example |
|----------|---------|---------|
| Spacing | `--space-{4\|8\|12\|16\|24\|32\|40\|48}` | `var(--space-16)` |
| Radius | `--radius-{sm\|md\|lg\|xl}` | `var(--radius-md)` |
| Colors | `--color-{category}-{name}` | `var(--color-brand-orange)` |
| Typography | `--text-{size}-{property}` | `var(--text-4xl-font-size)` |

## Live Storybook

Browse all components and their variants: **https://pijiola.github.io/shoppa-ds/**

## Want to change a component?

1. Clone this repo and create a branch
2. Make your changes
3. Open a PR to `main` — a preview Storybook will be built for review
4. Once approved and merged, the package is automatically versioned and published

## How it works

- **Figma** is the source of truth for design
- **This repo** contains the React components, built from Figma designs
- **GitHub Actions** handle everything on push to `main`:
  - Storybook deploys to GitHub Pages
  - Package version is bumped and published to GitHub Packages
- **Dev teams** install the package and get updates via `npm update`
