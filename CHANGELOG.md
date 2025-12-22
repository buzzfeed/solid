# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.0] - 2025-12-19

### Changed - BREAKING
- **Migrated from node-sass to dart-sass** - Modern Sass compiler
- **Converted to Sass module system** - All `@import` statements replaced with `@use`/`@forward`
- **Replaced Grunt with npm scripts** - Simpler, faster build system
- **Modern Sass functions** - Using `sass:color`, `sass:map`, `sass:math` modules
- Files now use `@use` instead of globals - may affect custom builds

### Added
- Modern package exports configuration
- `.editorconfig` for consistent formatting
- `.nvmrc` for Node version management
- Comprehensive keywords for better discoverability

### Fixed
- All Sass deprecation warnings eliminated
- 42 security vulnerabilities fixed (98% fewer dependencies)
- Compatibility with Node.js 22+

### Removed
- Grunt and all Grunt plugins
- `npm-shrinkwrap.json` (using package-lock.json instead)
- Legacy node-sass dependencies

## [2.11.2] and earlier
See [release-notes/](./release-notes/) for historical releases.
