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

Have a look at the demo for a more advanced example.

…


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
