# Changelog

All notable changes to this project will be documented in this file.

Format: [Keep a Changelog](https://keepachangelog.com/) | Versioning: [Semantic Versioning](https://semver.org/)

---

## [0.4.0] - 2025-12-17

### Added
- **Dark mode support:** Theme switching functionality with light/dark modes
- **Theme system:**
  - ThemeProvider with context-based state management
  - Theme persistence using localStorage
  - Automatic system preference detection (prefers-color-scheme)
  - CSS variables for theme customization
- **shadcn/ui integration:**
  - Button component from shadcn/ui
  - shadcn/ui configuration (components.json)
  - Tailwind CSS custom properties for theme colors
- **ThemeSwitcher feature:**
  - Interactive theme toggle button in MainLayout
  - Dynamic Sun/Moon icons from lucide-react
  - Accessibility labels and proper ARIA attributes
- **Dependencies:**
  - @radix-ui/react-slot for component composition
  - class-variance-authority for variant styling
  - clsx and tailwind-merge for className utilities
  - lucide-react for icon components
  - tw-animate-css for animations

### Changed
- Rename `config/consts.ts` to `config/constants.ts` for consistency
- Move `src/lib/utils.ts` and `src/components/ui/button.tsx` to shared layer
- Add `@` path alias in webpack and TypeScript configs for cleaner imports
- Wrap App component with ThemeProvider

---

## [0.3.0] - 2025-12-15

### Added
- **Routing system:** React Router DOM v7.10.1 with client-side navigation
- **Code splitting:** Lazy-loaded pages with React.lazy and Suspense
- **Feature-Sliced Design (FSD) architecture:**
  - `app/` layer: App component, providers (router), layouts (MainLayout)
  - `pages/` layer: MainPage, AboutPage, NotFoundPage with async loading
  - `shared/` layer: LoadingFallback UI component
- **Absolute imports:** TypeScript paths aliases for FSD layers (app/*, pages/*, widgets/*, features/*, entities/*, shared/*)
- **Webpack configuration:**
  - Named chunks with `[name].[contenthash].js` for better debugging
  - Chunk naming via webpackChunkName comments
  - Absolute module resolution with preferAbsolute
- **Components:**
  - MainLayout with navigation between pages
  - NotFound page for 404 errors
  - LoadingFallback component for Suspense boundaries
- **Dev server:** historyApiFallback support for SPA routing

### Changed
- Migrate from monolithic app structure to Feature-Sliced Design
- Split App component into modular structure with providers and layouts
- Update webpack output config with named chunks
- Configure module resolution to support FSD absolute imports

### Removed
- Old monolithic `src/app.tsx` (replaced with `src/app/App.tsx`)

---

## [0.2.0] - 2025-12-14

### Added
- Webpack build system with TypeScript support
- Modular config structure: `buildLoaders`, `buildPlugins`, `buildResolvers`, `buildWebpackConfig`, `buildDevServer`
- TypeScript configuration (`tsconfig.json`)
- Webpack dev server with hot reload
- Source maps for development mode
- Environment-based configuration (mode, port)
- Content hash for cache busting: `bundle.[contenthash].js`
- NPM scripts: `start`, `build:dev`, `build:prod`, `watch`
- React and ReactDOM dependencies
- Base React application with App component
- Tailwind CSS integration with PostCSS pipeline
- PostCSS configuration in TypeScript
- CSS extraction for production builds using MiniCssExtractPlugin
- HTML template with basic structure

### Changed
- Migrate PostCSS config from JavaScript to TypeScript

### Removed
- Unused Tailwind config file

---

## [0.1.0] - 2025-12-14

### Added
- Initial project setup
- Package.json and repository configuration

---

## Guide

**Categories:** `Added` | `Changed` | `Deprecated` | `Removed` | `Fixed` | `Security`

**Versioning:** MAJOR.MINOR.PATCH
- **MAJOR** - Breaking changes
- **MINOR** - New features (backwards-compatible)
- **PATCH** - Bug fixes (backwards-compatible)

**Style:**
- Use imperative mood ("Add feature" not "Added feature")
- Be specific and concise
- Link issues/PRs when relevant: `(#123)` or `(fixes #456)`
- Date format: YYYY-MM-DD
