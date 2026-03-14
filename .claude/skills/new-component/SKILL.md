---
name: new-component
description: Create a new React component from a Figma design, with Storybook docs
disable-model-invocation: true
argument-hint: <figma-url>
---

# Create New Component from Figma

You are creating a new design system component from a Figma design. Follow these steps:

## Step 1 — Ensure Storybook is running
Check if Storybook is already running on port 6006 (`lsof -i :6006`).
If not, start it in the background: `npm run storybook &`
Wait a few seconds for it to be ready.

## Step 2 — Read the Figma design
Use `mcp__figma__get_design_context` to fetch the design from the Figma URL provided in `$ARGUMENTS`.
Extract the fileKey and nodeId from the URL.
If the node is a component set with variants, analyze all variants.

## Step 3 — Plan the component
Before writing code, describe to the user:
- Component name
- Props interface (mapped from Figma variants/properties)
- Any new icons needed
- Any new tokens needed
- Accessibility considerations

Wait for the user to confirm the plan.

## Step 4 — Create the component files
Follow the project conventions (see CLAUDE.md). Create:

### Component folder structure:
```
src/components/ComponentName/
├── ComponentName.tsx
├── ComponentName.css
├── ComponentName.stories.tsx
└── index.ts
```

### ComponentName.tsx:
- Functional component with TypeScript interface
- Controlled component pattern (value + onChange callback)
- Semantic HTML with ARIA attributes
- Named export (not default)

### ComponentName.css:
- BEM naming: `.component-name`, `.component-name__element`, `.component-name__element--modifier`
- Use CSS custom properties from tokens.css
- Flexbox for layout, `gap` for spacing
- Transitions for interactive states

### ComponentName.stories.tsx:
- Meta with `autodocs` tag
- Component description with design token table and usage guidelines (Do/Don't)
- Interactive default story using `useState`
- Individual variant stories
- `AllVariants` story for visual comparison

### index.ts:
- Export the component and its types

### New icons (if needed):
- Create in `src/components/Icons/` with standard `{ color, size }` props
- Add to `src/components/Icons/index.ts`
- Download SVG paths from Figma asset URLs and use inline SVG

### New tokens (if needed):
- Add to `src/tokens/tokens.css`
- Update CLAUDE.md if significant new token categories are added

## Step 5 — Update library entry point
Add the new component export to `src/index.ts`.

## Step 6 — Ask for review
Tell the user to check Storybook at http://localhost:6006.
Wait for the user's approval before proceeding. If changes are needed, iterate.

## Step 7 — Commit and push (only after user approval)
- Stage the new files and any modified files
- Write a commit message like: "Add ComponentName component from Figma"
- Push to the `main` branch on GitHub

## Done
The push to `main` automatically triggers a GitHub Pages deployment.
The public Storybook will be updated at: https://pijiola.github.io/shoppa-ds/
