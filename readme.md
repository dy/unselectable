# unselectable [![unstable](https://img.shields.io/badge/stability-unstable-green.svg)](http://github.com/badges/stability-badges)

Make sure element is unselectable.

[![npm install unselectable](https://nodei.co/npm/unselectable.png?mini=true)](https://npmjs.org/package/unselectable/)

```js
let unselectable = require('unselectable')

//make element unselectable
let selectable = unselectable(el)

//reset element selectable behaviour
selectable(el)
```

It affects any known method to disable selection on an element: `user-select: none`, `user-drag: none`, `touch-callout: none`, `unselectable="on"` attribute, prevent `selectstart` event.

## Credits

© 2017 Dima Yv. MIT License
