/*
 * Copyright (c) 2013 Alex Gibson
 * Released under MIT license
 * http://alxgbsn.co.uk
 */

/*global clearInterval: false, clearTimeout: false, document: false, event: false, frames: false, history: false, Image: false, location: false, name: false, navigator: false, Option: false, parent: false, screen: false, setInterval: false, setTimeout: false, window: false, XMLHttpRequest: false, console: false */

(function (window, document) {

	'use strict';

	function Visibility(options) {

		var visProp, evtName, i;

		this.options = {
			onVisible: null,
			onHidden: null
		};

		//User defined options
		if (typeof options === 'object') {

			for (i in options) {
				if (options.hasOwnProperty(i)) {
					this.options[i] = options[i];
				}
			}

			//callback when page is hidden
			if (typeof this.options.onHidden === 'function') {
				this.onHiddenCallback = this.options.onHidden;
			}

			//callback when page is visible
			if (typeof this.options.onVisible === 'function') {
				this.onVisibleCallback = this.options.onVisible;
			}
		}

		visProp = this.getHiddenProp();

		if (visProp) {
			evtName = visProp.replace(/[H|h]idden/, '') + 'visibilitychange';
			document.addEventListener(evtName, this.bindContext(this, this.visibilityChange), false);
		}


	}

	Visibility.prototype.getHiddenProp = function () {
		var prefixes = ['webkit', 'moz', 'ms', 'o'],
			doc = document,
			i;

		// if 'hidden' is natively supported just return it
		if ('hidden' in doc) { return 'hidden'; }

		// otherwise loop over all the known prefixes until we find one
		for (i = 0; i < prefixes.length; i += 1) {
			if ((prefixes[i] + 'Hidden') in doc) {
				return prefixes[i] + 'Hidden';
			}
		}

		// otherwise it's not supported
		return null;
	};

	Visibility.prototype.isHidden = function () {
		var prop = this.getHiddenProp();
		if (!prop) { return false; }

		return document[prop];
	};

	Visibility.prototype.bindContext = function (context, handler) {
		return function () {
			return handler.call(context);
		};
	};

	Visibility.prototype.visibilityChange = function () {

		var hidden = this.isHidden();

		if (hidden && this.onHiddenCallback) {
			this.onHiddenCallback();
		} else if (!hidden && this.onVisibleCallback) {
			this.onVisibleCallback();
		}
	};

	//public
	window.Visibility = Visibility;

}(window, document));