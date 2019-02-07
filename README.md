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

```hbs
<ReSizable @width="200" @height="100">
  Your Content
</ReSizable>
```

or

```hbs
<ReSizable
  @width="200"
  @height="100"
  @minWidth="150"
  @minHeight="50"
  @maxWidth="800"
  @maxHeight="600"
  lockAspectRatio=true
  grid=(array 2 2)
  directions=(array "top" "right" "bottom" "left")
>
  Your Content
</ReSizable>
```

…


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
