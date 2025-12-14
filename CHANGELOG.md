# Changelog

All notable changes to this project will be documented in this file.

Format: [Keep a Changelog](https://keepachangelog.com/) | Versioning: [Semantic Versioning](https://semver.org/)

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
