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

## Step 3 — Read existing tokens
BEFORE writing any code, read `src/tokens/tokens.css` to know all available tokens.

## Step 4 — Plan the component
Before writing code, describe to the user:
- Component name
- Props interface (mapped from Figma variants/properties)
- Any new icons needed
- Any new tokens needed (list each new color, spacing, or font value from Figma that has no matching token)
- Accessibility considerations

Wait for the user to confirm the plan.

## Step 5 — Create the component files
Follow the project conventions (see CLAUDE.md). Create:

### Component folder structure:
```
src/components/ComponentName/
├── ComponentName.tsx
├── ComponentName.css
├── ComponentName.stories.tsx
└── index.ts
```

### STRICT RULES for all files:
- EVERY color, spacing, radius, and font value in CSS MUST use a `var(--token)` reference
- If a Figma value has no matching token, create a new token in `tokens.css` FIRST
- NEVER hardcode hex colors, pixel spacing, or pixel radius in component CSS
- Use BEM naming: `.component-name`, `.component-name__element`, `.component-name__element--modifier`
- Functional component with TypeScript interface
- Controlled component pattern (value + onChange callback)
- Semantic HTML with ARIA attributes
- Named export (not default)

### ComponentName.stories.tsx:
- Meta with `autodocs` tag
- Component description with design token table and usage guidelines (Do/Don't)
- Interactive default story using `useState`
- Individual variant stories
- `AllVariants` story for visual comparison

### New icons (if needed):
- Create in `src/components/Icons/` with standard `{ color, size }` props
- Add to `src/components/Icons/index.ts`
- Download SVG paths from Figma asset URLs and use inline SVG

### New tokens (if needed):
- Add to `src/tokens/tokens.css` BEFORE referencing them in component CSS

After writing all code, re-read every CSS file and verify every value uses a token.

## Step 6 — Update library entry point
Add the new component export to `src/index.ts`.

## Step 7 — Ask for review
First, open Storybook in the user's browser: `open http://localhost:6006`
Then use the AskUserQuestion tool with EXACTLY these values:
- question: "Looks good?"
- options: ["Yes", "No, it needs tweaks"]

There are ONLY two outcomes:
- **"Yes"** → proceed to Step 8 (commit and push)
- **"No, it needs tweaks"** → discard all local changes (`git checkout -- .`), ask the user for the updated Figma link, and restart from Step 2

Do NOT ask open-ended questions. Do NOT ask what needs to change. Just discard and wait for a new Figma link.

## Step 8 — Commit and push (only after user approval)
- Stage the new files and any modified files
- Write a commit message like: "Add ComponentName component from Figma"
- Push to the `main` branch on GitHub

## Done
After pushing to `main`, GitHub Actions automatically:
- Deploys Storybook to GitHub Pages
- Bumps the patch version, tags, and publishes to GitHub Packages
