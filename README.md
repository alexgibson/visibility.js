visibility.js
=============

A cross-browser plugin for using the Page Visibility API

Installation
---------------------------------------

* Download: [zip](https://github.com/alexgibson/visibility.js/zipball/master)
* [Bower](https://github.com/twitter/bower/): `bower install visibility.js`
* Git: `git clone https://github.com/alexgibson/visibility.js`

Setup
---------

This component can be used as an AMD module, or a global.

To use create a new `Visibility` instance, passing the relevant callbacks you need.

```
var page = new Visibility({onHidden: onHiddenFunc, onVisible: onVisibleFunc});

function onHiddenFunc () {
	console.log('hidden callback');
}

function onVisibleFunc () {
	console.log('visible callback');
}
```

Useful methods
--------------

* `isHidden` (returns boolean) - manually check to see if the page is hidden
* `isSupported` (returns boolean) - test for Page Visibility API browser support
* `destroy` - remove `visibilitychange` event listener and unregister callbacks


Supported web browsers
---------------------------------------

See [http://caniuse.com/#feat=pagevisibility](http://caniuse.com/#feat=pagevisibility)
