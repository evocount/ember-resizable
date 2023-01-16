# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## Unreleased
- …

## [3.0.1] - 2023-01-16
### Changed
- Add `@ember/string` as a dependency to fix Ember 4.10+ deprecation warnings

## [3.0.0] - 2022-12-02
### Changed
- Raised minimum Ember version (BREAKING)
- Raised minimum Node version (BREAKING)
- Allow configuring whether the `mousedown` and `touchstart` events are `passive`

## [2.0.1] - 2021-10-11
### Fixed
- Right-to-left handling

## [2.0.0] - 2021-08-24
### Fixed
- Prevent adding listeners if resize is already active
- Multiple deprecation warnings

### Changed
- `Dart Sass 1.33.0+` is required to work with the SCSS (BREAKING)
- Raised minimum Ember version (BREAKING)
- Made the `mousemove` and `touchmove` event handlers passive
- Removed using a style-attribute as that requires `unsafe-inline` in the CSP
- Dependency updates

## [1.0.1] - 2020-09-12
### Changed
- Dependency updates

## [1.0.0] - 2020-03-11
### Changed
- Dependency updates
- Raised minimum Ember and Node versions

## [0.4.6] - 2019-12-03
### Fixed
- polyfills moved to dependencies

### Changed
- Dependency updates.

## [0.4.5] - 2019-10-01
### Fixed
- ember-lifeline moved to dependencies

### Changed
- Dependency updates.

## [0.4.4] - 2019-07-19
### Changed
- Dependency updates.

## [0.4.3] - 2019-06-16
### Changed
- Dependency updates.

## [0.4.2] - 2019-05-09
### Fixed
- Fix initiating resize with right mouse button causes component to become stuck in resize mode (#72).

### Changed
- Dependency updates.

## [0.4.1] - 2019-04-13
### Changed
- Dependency updates.

## [0.4.0] - 2019-03-03
### Fixed
- Folder structure. Components were not actually in `components` folder.

### Changed
- Dependency updates.
- Depend on ember-native-class-polyfill to bring compatibility with Ember >= v3.4.

## [0.3.1] - 2019-02-10
### Fixed
- Allow to manually set `style` attribute when `width`/`height` are not defined. Previously `style` was continuously cleared.
