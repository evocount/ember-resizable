ember-resizable
==============================================================================

Resizable component for Ember.  ([Demo](https://evocount.github.io/ember-resizable/))

This is larged inspired by/based on [re-resizable](https://github.com/bokuweb/re-resizable).

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
<ReSizable @onResize={{action "onResize"}}>
  Your Content
</ReSizable>
```

`<ReSizable>` does not adjust its size by itself. You have to do this manually by binding to `onResize`.
Have a look at the code snippets in the demo for an example on how this can be done.

### Properties
| Property | default | Type | Notes |
| --- | --- | :---: | --- |
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
| `onResizeStop`   |  `direction`, `{ width: deltaX, height: deltaY }`, `element` | If you did not adjust the size of `<ReSizable>` by changing its dimension using for e.g. the values provided by `onResize` `deltaX` and `deltaY` will be `0` |
| `onResize`       | `direction`, `{ width: newWidth, height: newHeight }`, `{ width: deltaX, height: deltaY }`, `element`  |  . |


In addition it is possible to adjust the size of the resize handlers in your scss:
```scss
// 10px is the default size
$ember-resizable-resizer-size: 10px;
```

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
