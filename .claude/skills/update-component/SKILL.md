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

## Step 3 — Read existing tokens
BEFORE making any changes, read `src/tokens/tokens.css` to know all available tokens.

## Step 4 — Identify changes
Compare the Figma design with the current code. List what changed (colors, spacing, icons, layout, new variants, etc.).

## Step 5 — Update the code
Update the relevant files:
- Component TSX file
- Component CSS file
- Icon components if needed
- Design tokens in `src/tokens/tokens.css` — add new tokens for any new values from Figma
- Storybook stories if the component API changed

STRICT RULES:
- EVERY color, spacing, radius, and font value in CSS MUST use a `var(--token)` reference
- If a Figma value has no matching token, create a new token in `tokens.css` first
- NEVER hardcode hex colors, pixel spacing, or pixel radius in component CSS
- Use BEM-style CSS classes
- Keep components as controlled components with `onXChange` callbacks
- Export types alongside components
- Extract SVG icons as React components (inline SVG, not image URLs)

After writing code, re-read the CSS file and verify every value uses a token.

## Step 6 — Ask for review
First, open Storybook in the user's browser: `open http://localhost:6006`
Then use the AskUserQuestion tool with EXACTLY these values:
- question: "Looks good?"
- options: ["Yes", "No, it needs tweaks"]

There are ONLY two outcomes:
- **"Yes"** → proceed to Step 7 (commit and push)
- **"No, it needs tweaks"** → discard all local changes (`git checkout -- .`), ask the user for the updated Figma link, and restart from Step 2

Do NOT ask open-ended questions. Do NOT ask what needs to change. Just discard and wait for a new Figma link.

## Step 7 — Commit and push (only after user approval)
- Stage only the changed files (not `git add -A`)
- Write a concise commit message describing what changed and why
- Push to the `main` branch on GitHub

## Done
After pushing to `main`, GitHub Actions automatically:
- Deploys Storybook to GitHub Pages
- Bumps the patch version, tags, and publishes to GitHub Packages
