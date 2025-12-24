# Changelog

All notable changes to this project will be documented in this file.

Format: [Keep a Changelog](https://keepachangelog.com/) | Versioning: [Semantic Versioning](https://semver.org/)

---

## [Unreleased]

### Added

#### Internationalization (i18n)
- **Multi-language support:**
  - i18next integration with support for 6 languages (English, Russian, Spanish, French, German, Italian)
  - i18next-browser-languagedetector for automatic language detection
  - i18next-http-backend for loading translation files
  - TypeScript types for translation keys and i18n configuration
  - Translation namespaces support (common, 404)
  - React Suspense integration for async translation loading
  - Error handling with fallback for i18n initialization failures
  - Environment-aware debug mode (enabled only in development)
  - Automatic HTML lang attribute synchronization with current language
- **Language switcher component:**
  - LangSwitcher component integrated into Navbar
  - SVG flag icons from country-flag-icons library (replacing emoji flags)
  - High-quality 3x2 ratio flag components with proper sizing
  - Dropdown UI with button wrapper and proper spacing
  - Real-time language switching with i18next
  - Performance optimization with useCallback hook
  - Accessibility improvements with ARIA labels for screen readers
- **Development tools:**
  - i18next-parser for extracting translation keys
  - NPM scripts for managing translations (extract, validation)
  - TypeScript configuration for translation file parsing
  - Environment-aware default values (dev: TODO markers, prod: key fallback)

#### Project Documentation
- **Apache 2.0 License:**
  - LICENSE file with full Apache License 2.0 text
  - NOTICE file for copyright attribution
  - License badge in README.md
  - Updated package.json with license field and author information
  - Patent protection and enterprise-ready legal framework for future commercialization

#### Theme System
- **Dark mode support:** Theme switching functionality with light/dark modes
- **Cross-tab theme synchronization:** Theme changes now sync automatically across all open browser tabs
  - Storage event listener in ThemeProvider for real-time synchronization
  - Theme validation using exported isValidTheme utility function
  - Seamless user experience when switching themes in multiple tabs
- **ThemeProvider:**
  - Context-based state management
  - Theme persistence using localStorage
  - Automatic system preference detection (prefers-color-scheme)
  - CSS variables for theme customization

#### UI Components & Design System
- **shadcn/ui integration:**
  - Button component from shadcn/ui
  - shadcn/ui configuration (components.json)
  - Tailwind CSS custom properties for theme colors
- **ThemeSwitcher feature:**
  - Interactive theme toggle button in MainLayout
  - Dynamic Sun/Moon icons from lucide-react
  - Accessibility labels and proper ARIA attributes
- **Logo component:**
  - Reusable Logo component with custom SVG logo
  - Responsive design: icon always visible, text hidden on mobile (md:inline)
  - Hover effect with opacity transition
  - Integrated into Navbar with accessibility attributes
- **AppLoader component:**
  - Loading fallback component for React Suspense
  - Used for async i18n translation loading
  - Integrated into App root component
- **Favicon:**
  - SVG favicon with automatic dark mode support (adapts to system color scheme)
  - PNG fallbacks for browsers without SVG support (16x16, 32x32)
  - Proper meta tags in HTML template

#### Build Configuration
- **Image and font asset handling:**
  - Webpack asset/resource loader for images (png, jpg, jpeg, gif) and fonts (woff, woff2)
  - Automatic optimization with 10KB threshold for inline data URLs
  - Asset output directory configuration: `images/[name][hash][ext][query]`
  - TypeScript declarations for image imports (global.d.ts)
- **SVG asset handling:**
  - @svgr/webpack loader for importing SVG files as React components
  - TypeScript declarations for SVG imports (global.d.ts)
  - Webpack configuration for seamless SVG-to-component transformation
- **Locale files handling:**
  - CopyWebpackPlugin integration for copying locale files to build directory
  - DefinePlugin for NODE_ENV environment variable injection
  - Automated locale files deployment in production builds
- **Global variables:**
  - `__DEV__` global boolean variable for development mode detection
  - TypeScript declaration for `__DEV__` in global.d.ts
  - Webpack DefinePlugin configuration for `__DEV__` injection

#### Dependencies
- i18next for internationalization core functionality
- react-i18next for React integration
- i18next-browser-languagedetector for automatic language detection
- i18next-http-backend for loading translation files
- i18next-parser for extracting translation keys (dev dependency)
- copy-webpack-plugin for copying static assets (locale files) to build
- country-flag-icons for SVG country flag components
- @radix-ui/react-slot for component composition
- class-variance-authority for variant styling
- clsx and tailwind-merge for className utilities
- lucide-react for icon components
- tw-animate-css for animations

### Changed
- **i18n architecture refactor:**
  - Move i18n configuration from `app/i18n/` to `app/providers/i18n/` following FSD architecture
  - Replace `process.env.NODE_ENV` checks with `__DEV__` global variable
  - Update import paths across the application
- **i18n configuration restructure:** Reorganized i18n setup with improved TypeScript types and modular structure
- **Language switcher UI improvements:** Enhanced spacing and button wrapper for better visual appearance
- **Language switcher implementation:**
  - Use resolvedLanguage instead of language for more reliable active language detection
  - Proper Radix UI DropdownMenu API usage (onSelect instead of onClick, asChild prop)
- **i18n configuration optimization:** Removed unused partialBundledLanguages option
- Rename `config/consts.ts` to `config/constants.ts` for consistency
- Move `src/lib/utils.ts` and `src/components/ui/button.tsx` to shared layer
- Add `@` path alias in webpack and TypeScript configs for cleaner imports
- Wrap App component with ThemeProvider
- Export `isValidTheme` function from theme utils for cross-tab validation

### Fixed
- **Utils alias path:** Corrected utils path alias in components.json configuration

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
