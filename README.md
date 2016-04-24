# dont-scroll-the-body

A minimalist JavaScript library that prevents scroll in the HTML parent element (including the `<body>`) when reaching the scroll end of a child element.


## See it in action

* http://jsfiddle.net/ibcaliax/bwmzfmq7/9/


## Installation

```bash
$ npm install dontscrollthebody
```

or:

```bash
$ bower install dontscrollthebody
```


## Usage

In Node/browserify/CommonJS environments:

```js
var dontscrollthebody = require('dontscrollthebody');
```

The library installed via Bower is a ["browserified"](http://browserify.org) bundle so it exports `window.dontscrollthebody` or the corresponding AMD mechanism.


### API


#### `dontscrollthebody(elem)`

Prevents the DOM `wheel` event to be propagated to parent elements when reaching the end of the given `elem`.

* `elem` must be an HTML node.

```js
var myContainer = body.querySelector('.myContainer');

dontscrollthebody(myContainer);
```


#### `dontscrollthebody.remove(elem)`

Removes the previously added `wheel` listener.

* `elem` must be an HTML node.

```js
dontscrollthebody.remove(myContainer);
```



## Author

Iñaki Baz Castillo ([@ibc](https://github.com/ibc/) at Github)


## License

MIT
