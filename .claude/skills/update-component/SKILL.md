---
name: update-component
description: Update a React component from Figma, review in Storybook, commit and push (auto-deploys to GitHub Pages)
disable-model-invocation: true
argument-hint: <figma-url>
---

# Update Component from Figma

You are updating a design system component based on a Figma design. Follow these steps:

## Step 1 — Ensure Storybook is running
Check if Storybook is already running on port 6006 (`lsof -i :6006`).
If not, start it in the background: `npm run storybook &`
Wait a few seconds for it to be ready.

## Step 2 — Read the Figma design
Use `mcp__figma__get_design_context` to fetch the design from the Figma URL provided in `$ARGUMENTS`.
Extract the fileKey and nodeId from the URL.

## Step 3 — Identify changes
Compare the Figma design with the current code. List what changed (colors, spacing, icons, layout, new variants, etc.).

## Step 4 — Update the code
Update the relevant files:
- Component TSX file
- Component CSS file
- Icon components if needed
- Design tokens in `src/tokens/tokens.css` if needed
- Storybook stories if the component API changed

Follow existing project conventions (see CLAUDE.md):
- Use CSS custom properties from `src/tokens/tokens.css` (not hardcoded values)
- Use BEM-style CSS classes
- Keep components as controlled components with `onXChange` callbacks
- Export types alongside components
- Extract SVG icons as React components (inline SVG, not image URLs)

## Step 5 — Ask for review
Tell the user to check Storybook at http://localhost:6006 (it hot-reloads automatically).
Wait for the user's approval before proceeding. If changes are needed, iterate.

## Step 6 — Commit and push (only after user approval)
- Stage only the changed files (not `git add -A`)
- Write a concise commit message describing what changed and why
- Push to the `main` branch on GitHub

## Done
The push to `main` automatically triggers a GitHub Pages deployment.
The public Storybook will be updated at: https://pijiola.github.io/shoppa-ds/
