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

First, include the main visibility.js JavaScript file in your HTML document:

```
<script src="visibility.js"></script>
```

Next just create a new plugin instance, passing the relevant callbacks you want to use:

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
* `destroy` - remove visibilitychange event listener and unregister callbacks


Supported web browsers
---------------------------------------

See [http://caniuse.com/#feat=pagevisibility](http://caniuse.com/#feat=pagevisibility)
	
MIT License
---------------------------------------

Copyright (c) 2013 Alex Gibson

http://alxgbsn.co.uk/

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction except as noted below, including without limitation the rights to use, copy, modify, merge, publish, distribute, and/or sublicense, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE