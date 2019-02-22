# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## Unreleased
### Fixed
- Folder structured. Components were not actually in `components` folder.

### Changed
- Dependency updates.
- Depend on ember-angle-bracket-invocation-polyfill to bring support for ember < 3.4 (but > 3.2, because we need the let helper).

## [0.3.1] - 2019-02-10
### Fixed
- Allow to manually set `style` attribute when `width`/`height` are not defined. Previously `style` was continuously cleared.
