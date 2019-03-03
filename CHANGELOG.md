# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## Unreleased
- …

## [0.4.0] - 2019-03-03
### Fixed
- Folder structure. Components were not actually in `components` folder.

### Changed
- Dependency updates.
- Depend on ember-native-class-polyfill to bring compatibility with Ember >= v3.4.

## [0.3.1] - 2019-02-10
### Fixed
- Allow to manually set `style` attribute when `width`/`height` are not defined. Previously `style` was continuously cleared.
