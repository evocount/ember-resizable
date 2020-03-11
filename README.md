[![Build Status](https://travis-ci.org/evocount/ember-resizable.svg?branch=master)](https://travis-ci.org/evocount/ember-resizable)
[![Ember Observer Score](https://emberobserver.com/badges/ember-resizable.svg)](https://emberobserver.com/addons/ember-resizable)
[![npm version](https://badge.fury.io/js/ember-resizable.svg)](https://badge.fury.io/js/ember-resizable)

ember-resizable
==============================================================================

Resizable component for Ember.  ([Demo](https://evocount.github.io/ember-resizable/))

This is larged inspired by/based on [re-resizable](https://github.com/bokuweb/re-resizable).

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-resizable
```

Usage
------------------------------------------------------------------------------

Include the following in your app.scss:

```scss
@import 'ember-resizable';
```

Basic usage:

```hbs
<ReSizable @width="300" @height="200">
  Your Content
</ReSizable>
```

This will make `<ReSizable>` adjust its size according to user input. If you want to manually control its size, bind to `onResize` while not setting `width` and `height`. Manually setting `width`, `height` between resizes is of course also possible.

### Properties
| Property | default | Type | Notes |
| --- | --- | :---: | --- |
| `width` | `null` | int or string  | Initial size. If provided the component will adjust its size according to user input. If omitted or `null` it will not change its size. This is a one way binding nevertheless. |
| `height` | `null` | int or string  | Initial size. If provided the component will adjust its size according to user input. If omitted or `null` it will not change its size. This is a one way binding nevertheless. |
| `minWidth` | `10` | int | Minimum width in pixels |
| `minHeight` | `10` | int | Minimum height in pixels |
| `maxWidth` |  | int | Maximum width in pixels |
| `maxHeight` |  | int | Maximum height in pixels |
| `grid` | `[1, 1]` | array: int | Used for snapping on x, y axis. If set to [200, 50] for example, width will snap to 0, 200, 400, 600, … while height will snap to 0, 50, 100, 150, … |
| `lockAspectRatio` | `false` | bool | Maintain aspect ratio that is found during beginning of resize |
| `directions` | `['top', 'right', 'bottom', 'left', 'topRight', 'bottomRight', 'bottomLeft', 'topLeft']` | array: string | On which sides/corners to enable resizing |


### Actions
| Name | Params | Note |
| --- | --- | --- |
| `onResizeStart`  | `direction`, `event`, `element` | `element` is the `<ReSizable>` DOM element |
| `onResizeStop`   |  `direction`, `{ width: deltaX, height: deltaY }`, `element` | If you did not adjust the size of `<ReSizable>` by changing its dimension and if you did not provide `width`/`height` using for e.g. the values provided by `onResize` `deltaX` and `deltaY` will be `0` |
| `onResize`       | `direction`, `{ width: newWidth, height: newHeight }`, `{ width: deltaX, height: deltaY }`, `element`  |  . |


In addition it is possible to adjust the size of the resize handlers in your scss:
```scss
// 10px is the default size
$ember-resizable-resizer-size: 10px;
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
