# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- `npm install` - Install dependencies
- `npm run dev` - Compile and hot-reload for development
- `npm run build` - Compile and minify for production
- `npm run preview` - Preview production build locally

## Code Style Guidelines
- **Vue Components**: Use Composition API with `<script setup>` syntax
- **Naming**: Components use PascalCase (TheWelcome.vue), other files use camelCase
- **Imports**: Order - Vue core, external libraries, internal modules, assets
- **CSS**: Use scoped styles in Vue components, leverage CSS variables from base.css
- **Props**: Define with type validation and required status
- **Layout**: Follow template -> script -> style order in Vue files
- **Aliases**: Use `@/` for src directory imports where appropriate
- **PrimeVue**: Use auto-imported components via unplugin-vue-components
- **Formatting**: Follow VSCode + Volar convention; maintain spacing and indentation

## Project Setup
This project uses Vue 3, Vite, and PrimeVue with the Aura theme. Component registration is handled automatically via unplugin-vue-components.

## Additional Context
- **dev_notes/**: Always reference and incorporate information from the dev_notes folder when answering questions or implementing features
- **PrimeVue Theming**: Follow the custom variants approach outlined in dev_notes for extending PrimeVue components with custom variants