/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + ({"0":"npm_size"}[chunkId]||chunkId) + ".bundle.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var exec = function exec(bs) {
  bs.socket.on('connection', function () {
    bs.socket.emit('get-error-react');
  });

  bs.socket.on('react-error', function (msgs) {
    // console.log('hi', msg)
    var els = [msgs].map(function (msg) {
      var el = document.createElement('div');
      el.innerHTML = msg;
      return el;
    });

    var overLay = document.createElement('div');
    overLay.style.position = 'fixed';
    overLay.style.boxSizing = 'border-box';
    overLay.style.left = '0px';
    overLay.style.top = '0px';
    overLay.style.right = '0px';
    overLay.style.bottom = '0px';
    overLay.style.width = '100vw';
    overLay.style.height = '100vh';
    overLay.style.backgroundColor = 'black';
    overLay.style.color = 'rgb(232, 232, 232)';
    overLay.style.fontFamily = 'Menlo, Consolas, monospace';
    overLay.style.fontSize = 'large';
    overLay.style.padding = '2rem';
    overLay.style.lineHeight = '1.2';
    overLay.style.whiteSpace = 'pre-wrap';
    overLay.style.overflow = 'auto';

    els.forEach(function (el) {
      overLay.appendChild(el);
    });

    if (document.body) {
      document.body.appendChild(overLay);
    }
  });
};

var poll = function poll() {
  if (window.___browserSync___ === undefined) {
    window.requestAnimationFrame(poll);
  } else {
    exec(window.___browserSync___);
  }
};

window.requestAnimationFrame(poll);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _scroll = __webpack_require__(3);

var _scroll2 = _interopRequireDefault(_scroll);

__webpack_require__(5);

__webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pulseArrow = document.querySelector('.fa-angle-double-down');

_scroll2.default.init();

if (pulseArrow) {
  setInterval(function () {
    pulseArrow.classList.toggle('flash');
  }, 3000);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * smooth-scroll v11.1.0: Animate scrolling to anchor links
 * (c) 2017 Chris Ferdinandi
 * GPL-3.0 License
 * http://github.com/cferdinandi/smooth-scroll
 */

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory(root)),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
    module.exports = factory(root);
  } else {
    root.smoothScroll = factory(root);
  }
})(typeof global !== 'undefined' ? global : undefined.window || undefined.global, function (root) {
  'use strict';

  //
  // Variables
  //

  var smoothScroll = {}; // Object for public APIs
  var supports = 'querySelector' in document && 'addEventListener' in root; // Feature test
  var settings, anchor, toggle, fixedHeader, headerHeight, eventTimeout, animationInterval;

  // Default settings
  var defaults = {
    // Selectors
    selector: '[data-scroll]',
    ignore: '[data-scroll-ignore]',
    selectorHeader: null,

    // Speed & Easing
    speed: 500,
    offset: 0,
    easing: 'easeInOutCubic',
    easingPatterns: {},

    // Callback API
    before: function before() {},
    after: function after() {}

    //
    // Methods
    //

    /**
     * Merge two or more objects. Returns a new object.
     * @private
     * @param {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
     * @param {Object}   objects  The objects to merge together
     * @returns {Object}          Merged values of defaults and options
     */
  };var extend = function extend() {
    // Variables
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments.length;

    // Check if a deep merge
    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
      deep = arguments[0];
      i++;
    }

    // Merge the object into the extended object
    var merge = function merge(obj) {
      for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          // If deep merge and property is an object, merge properties
          if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
            extended[prop] = extend(true, extended[prop], obj[prop]);
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    };

    // Loop through each object and conduct a merge
    for (; i < length; i++) {
      var obj = arguments[i];
      merge(obj);
    }

    return extended;
  };

  /**
   * Get the height of an element.
   * @private
   * @param  {Node} elem The element to get the height of
   * @return {Number}    The element's height in pixels
   */
  var getHeight = function getHeight(elem) {
    return Math.max(elem.scrollHeight, elem.offsetHeight, elem.clientHeight);
  };

  /**
   * Get the closest matching element up the DOM tree.
   * @private
   * @param  {Element} elem     Starting element
   * @param  {String}  selector Selector to match against
   * @return {Boolean|Element}  Returns null if not match found
   */
  var getClosest = function getClosest(elem, selector) {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) {}
        return i > -1;
      };
    }

    // Get closest match
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }

    return null;
  };

  /**
   * Escape special characters for use with querySelector
   * @private
   * @param {String} id The anchor ID to escape
   * @author Mathias Bynens
   * @link https://github.com/mathiasbynens/CSS.escape
   */
  var escapeCharacters = function escapeCharacters(id) {
    // Remove leading hash
    if (id.charAt(0) === '#') {
      id = id.substr(1);
    }

    var string = String(id);
    var length = string.length;
    var index = -1;
    var codeUnit;
    var result = '';
    var firstCodeUnit = string.charCodeAt(0);
    while (++index < length) {
      codeUnit = string.charCodeAt(index);
      // Note: thereâ€™s no need to special-case astral symbols, surrogate
      // pairs, or lone surrogates.

      // If the character is NULL (U+0000), then throw an
      // `InvalidCharacterError` exception and terminate these steps.
      if (codeUnit === 0x0000) {
        throw new InvalidCharacterError('Invalid character: the input contains U+0000.');
      }

      if (
      // If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
      // U+007F, [â€¦]
      codeUnit >= 0x0001 && codeUnit <= 0x001F || codeUnit == 0x007F ||
      // If the character is the first character and is in the range [0-9]
      // (U+0030 to U+0039), [â€¦]
      index === 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
      // If the character is the second character and is in the range [0-9]
      // (U+0030 to U+0039) and the first character is a `-` (U+002D), [â€¦]
      index === 1 && codeUnit >= 0x0030 && codeUnit <= 0x0039 && firstCodeUnit === 0x002D) {
        // http://dev.w3.org/csswg/cssom/#escape-a-character-as-code-point
        result += '\\' + codeUnit.toString(16) + ' ';
        continue;
      }

      // If the character is not handled by one of the above rules and is
      // greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
      // is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
      // U+005A), or [a-z] (U+0061 to U+007A), [â€¦]
      if (codeUnit >= 0x0080 || codeUnit === 0x002D || codeUnit === 0x005F || codeUnit >= 0x0030 && codeUnit <= 0x0039 || codeUnit >= 0x0041 && codeUnit <= 0x005A || codeUnit >= 0x0061 && codeUnit <= 0x007A) {
        // the character itself
        result += string.charAt(index);
        continue;
      }

      // Otherwise, the escaped character.
      // http://dev.w3.org/csswg/cssom/#escape-a-character
      result += '\\' + string.charAt(index);
    }

    return '#' + result;
  };

  /**
   * Calculate the easing pattern
   * @private
   * @link https://gist.github.com/gre/1650294
   * @param {String} type Easing pattern
   * @param {Number} time Time animation should take to complete
   * @returns {Number}
   */
  var easingPattern = function easingPattern(settings, time) {
    var pattern;

    // Default Easing Patterns
    if (settings.easing === 'easeInQuad') pattern = time * time; // accelerating from zero velocity
    if (settings.easing === 'easeOutQuad') pattern = time * (2 - time); // decelerating to zero velocity
    if (settings.easing === 'easeInOutQuad') pattern = time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time; // acceleration until halfway, then deceleration
    if (settings.easing === 'easeInCubic') pattern = time * time * time; // accelerating from zero velocity
    if (settings.easing === 'easeOutCubic') pattern = --time * time * time + 1; // decelerating to zero velocity
    if (settings.easing === 'easeInOutCubic') pattern = time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1; // acceleration until halfway, then deceleration
    if (settings.easing === 'easeInQuart') pattern = time * time * time * time; // accelerating from zero velocity
    if (settings.easing === 'easeOutQuart') pattern = 1 - --time * time * time * time; // decelerating to zero velocity
    if (settings.easing === 'easeInOutQuart') pattern = time < 0.5 ? 8 * time * time * time * time : 1 - 8 * --time * time * time * time; // acceleration until halfway, then deceleration
    if (settings.easing === 'easeInQuint') pattern = time * time * time * time * time; // accelerating from zero velocity
    if (settings.easing === 'easeOutQuint') pattern = 1 + --time * time * time * time * time; // decelerating to zero velocity
    if (settings.easing === 'easeInOutQuint') pattern = time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * --time * time * time * time * time; // acceleration until halfway, then deceleration

    // Custom Easing Patterns
    if (settings.easingPatterns[settings.easing]) {
      pattern = settings.easingPatterns[settings.easing](time);
    }

    return pattern || time; // no easing, no acceleration
  };

  /**
   * Calculate how far to scroll
   * @private
   * @param {Element} anchor The anchor element to scroll to
   * @param {Number} headerHeight Height of a fixed header, if any
   * @param {Number} offset Number of pixels by which to offset scroll
   * @returns {Number}
   */
  var getEndLocation = function getEndLocation(anchor, headerHeight, offset) {
    var location = 0;
    if (anchor.offsetParent) {
      do {
        location += anchor.offsetTop;
        anchor = anchor.offsetParent;
      } while (anchor);
    }
    location = Math.max(location - headerHeight - offset, 0);
    return Math.min(location, getDocumentHeight() - getViewportHeight());
  };

  /**
   * Determine the viewport's height
   * @private
   * @returns {Number}
   */
  var getViewportHeight = function getViewportHeight() {
    return Math.max(document.documentElement.clientHeight, root.innerHeight || 0);
  };

  /**
   * Determine the document's height
   * @private
   * @returns {Number}
   */
  var getDocumentHeight = function getDocumentHeight() {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
  };

  /**
   * Convert data-options attribute into an object of key/value pairs
   * @private
   * @param {String} options Link-specific options as a data attribute string
   * @returns {Object}
   */
  var getDataOptions = function getDataOptions(options) {
    return !options || !((typeof JSON === 'undefined' ? 'undefined' : _typeof(JSON)) === 'object' && typeof JSON.parse === 'function') ? {} : JSON.parse(options);
  };

  /**
   * Get the height of the fixed header
   * @private
   * @param  {Node}   header The header
   * @return {Number}        The height of the header
   */
  var getHeaderHeight = function getHeaderHeight(header) {
    return !header ? 0 : getHeight(header) + header.offsetTop;
  };

  /**
   * Bring the anchored element into focus
   * @private
   */
  var adjustFocus = function adjustFocus(anchor, endLocation, isNum) {
    // Don't run if scrolling to a number on the page
    if (isNum) return;

    // Otherwise, bring anchor element into focus
    anchor.focus();
    if (document.activeElement.id !== anchor.id) {
      anchor.setAttribute('tabindex', '-1');
      anchor.focus();
      anchor.style.outline = 'none';
    }
    root.scrollTo(0, endLocation);
  };

  /**
   * Start/stop the scrolling animation
   * @public
   * @param {Node|Number} anchor  The element or position to scroll to
   * @param {Element}     toggle  The element that toggled the scroll event
   * @param {Object}      options
   */
  smoothScroll.animateScroll = function (anchor, toggle, options) {
    // Options and overrides
    var overrides = getDataOptions(toggle ? toggle.getAttribute('data-options') : null);
    var animateSettings = extend(settings || defaults, options || {}, overrides); // Merge user options with defaults

    // Selectors and variables
    var isNum = Object.prototype.toString.call(anchor) === '[object Number]';
    var anchorElem = isNum || !anchor.tagName ? null : anchor;
    if (!isNum && !anchorElem) return;
    var startLocation = root.pageYOffset; // Current location on the page
    if (animateSettings.selectorHeader && !fixedHeader) {
      // Get the fixed header if not already set
      fixedHeader = document.querySelector(animateSettings.selectorHeader);
    }
    if (!headerHeight) {
      // Get the height of a fixed header if one exists and not already set
      headerHeight = getHeaderHeight(fixedHeader);
    }
    var endLocation = isNum ? anchor : getEndLocation(anchorElem, headerHeight, parseInt(typeof animateSettings.offset === 'function' ? animateSettings.offset() : animateSettings.offset, 10)); // Location to scroll to
    var distance = endLocation - startLocation; // distance to travel
    var documentHeight = getDocumentHeight();
    var timeLapsed = 0;
    var percentage, position;

    /**
     * Stop the scroll animation when it reaches its target (or the bottom/top of page)
     * @private
     * @param {Number} position Current position on the page
     * @param {Number} endLocation Scroll to location
     * @param {Number} animationInterval How much to scroll on this loop
     */
    var stopAnimateScroll = function stopAnimateScroll(position, endLocation, animationInterval) {
      var currentLocation = root.pageYOffset;
      if (position == endLocation || currentLocation == endLocation || root.innerHeight + currentLocation >= documentHeight) {
        // Clear the animation timer
        clearInterval(animationInterval);

        // Bring the anchored element into focus
        adjustFocus(anchor, endLocation, isNum);

        // Run callback after animation complete
        animateSettings.after(anchor, toggle);
      }
    };

    /**
     * Loop scrolling animation
     * @private
     */
    var loopAnimateScroll = function loopAnimateScroll() {
      timeLapsed += 16;
      percentage = timeLapsed / parseInt(animateSettings.speed, 10);
      percentage = percentage > 1 ? 1 : percentage;
      position = startLocation + distance * easingPattern(animateSettings, percentage);
      root.scrollTo(0, Math.floor(position));
      stopAnimateScroll(position, endLocation, animationInterval);
    };

    /**
     * Set interval timer
     * @private
     */
    var startAnimateScroll = function startAnimateScroll() {
      clearInterval(animationInterval);
      animationInterval = setInterval(loopAnimateScroll, 16);
    };

    /**
     * Reset position to fix weird iOS bug
     * @link https://github.com/cferdinandi/smooth-scroll/issues/45
     */
    if (root.pageYOffset === 0) {
      root.scrollTo(0, 0);
    }

    // Run callback before animation starts
    animateSettings.before(anchor, toggle);

    // Start scrolling animation
    startAnimateScroll();
  };

  /**
   * Handle has change event
   * @private
   */
  var hashChangeHandler = function hashChangeHandler(event) {
    // Get hash from URL
    var hash;
    try {
      hash = escapeCharacters(decodeURIComponent(root.location.hash));
    } catch (e) {
      hash = escapeCharacters(root.location.hash);
    }

    // Only run if there's an anchor element to scroll to
    if (!anchor) return;

    // Reset the anchor element's ID
    anchor.id = anchor.getAttribute('data-scroll-id');

    // Scroll to the anchored content
    smoothScroll.animateScroll(anchor, toggle);

    // Reset anchor and toggle
    anchor = null;
    toggle = null;
  };

  /**
   * If smooth scroll element clicked, animate scroll
   * @private
   */
  var clickHandler = function clickHandler(event) {
    // Don't run if right-click or command/control + click
    if (event.button !== 0 || event.metaKey || event.ctrlKey) return;

    // Check if a smooth scroll link was clicked
    toggle = getClosest(event.target, settings.selector);
    if (!toggle || toggle.tagName.toLowerCase() !== 'a' || getClosest(event.target, settings.ignore)) return;

    // Only run if link is an anchor and points to the current page
    if (toggle.hostname !== root.location.hostname || toggle.pathname !== root.location.pathname || !/#/.test(toggle.href)) return;

    // Get the sanitized hash
    var hash;
    try {
      hash = escapeCharacters(decodeURIComponent(toggle.hash));
    } catch (e) {
      hash = escapeCharacters(toggle.hash);
    }

    // If the hash is empty, scroll to the top of the page
    if (hash === '#') {
      // Prevent default link behavior
      event.preventDefault();

      // Set the anchored element
      anchor = document.body;

      // Save or create the ID as a data attribute and remove it (prevents scroll jump)
      var id = anchor.id ? anchor.id : 'smooth-scroll-top';
      anchor.setAttribute('data-scroll-id', id);
      anchor.id = '';

      // If no hash change event will happen, fire manually
      // Otherwise, update the hash
      if (root.location.hash.substring(1) === id) {
        hashChangeHandler();
      } else {
        root.location.hash = id;
      }

      return;
    }

    // Get the anchored element
    anchor = document.querySelector(hash);

    // If anchored element exists, save the ID as a data attribute and remove it (prevents scroll jump)
    if (!anchor) return;
    anchor.setAttribute('data-scroll-id', anchor.id);
    anchor.id = '';

    // If no hash change event will happen, fire manually
    if (toggle.hash === root.location.hash) {
      event.preventDefault();
      hashChangeHandler();
    }
  };

  /**
   * On window scroll and resize, only run events at a rate of 15fps for better performance
   * @private
   * @param  {Function} eventTimeout Timeout function
   * @param  {Object} settings
   */
  var resizeThrottler = function resizeThrottler(event) {
    if (!eventTimeout) {
      eventTimeout = setTimeout(function () {
        eventTimeout = null; // Reset timeout
        headerHeight = getHeaderHeight(fixedHeader); // Get the height of a fixed header if one exists
      }, 66);
    }
  };

  /**
   * Destroy the current initialization.
   * @public
   */
  smoothScroll.destroy = function () {
    // If plugin isn't already initialized, stop
    if (!settings) return;

    // Remove event listeners
    document.removeEventListener('click', clickHandler, false);
    root.removeEventListener('resize', resizeThrottler, false);

    // Reset varaibles
    settings = null;
    anchor = null;
    toggle = null;
    fixedHeader = null;
    headerHeight = null;
    eventTimeout = null;
    animationInterval = null;
  };

  /**
   * Initialize Smooth Scroll
   * @public
   * @param {Object} options User settings
   */
  smoothScroll.init = function (options) {
    // feature test
    if (!supports) return;

    // Destroy any existing initializations
    smoothScroll.destroy();

    // Selectors and variables
    settings = extend(defaults, options || {}); // Merge user options with defaults
    fixedHeader = settings.selectorHeader ? document.querySelector(settings.selectorHeader) : null; // Get the fixed header
    headerHeight = getHeaderHeight(fixedHeader);

    // When a toggle is clicked, run the click handler
    document.addEventListener('click', clickHandler, false);

    // Listen for hash changes
    root.addEventListener('hashchange', hashChangeHandler, false);

    // If window is resized and there's a fixed header, recalculate its size
    if (fixedHeader) {
      root.addEventListener('resize', resizeThrottler, false);
    }
  };

  //
  // Public APIs
  //

  return smoothScroll;
}); /*!
    * smooth-scroll v11.1.0: Animate scrolling to anchor links
    * (c) 2017 Chris Ferdinandi
    * GPL-3.0 License
    * http://github.com/cferdinandi/smooth-scroll
    */

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory(root)),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
    module.exports = factory(root);
  } else {
    root.smoothScroll = factory(root);
  }
})(typeof global !== 'undefined' ? global : undefined.window || undefined.global, function (root) {
  'use strict';

  //
  // Variables
  //

  var smoothScroll = {}; // Object for public APIs
  var supports = 'querySelector' in document && 'addEventListener' in root; // Feature test
  var settings, anchor, toggle, fixedHeader, headerHeight, eventTimeout, animationInterval;

  // Default settings
  var defaults = {
    // Selectors
    selector: '[data-scroll]',
    ignore: '[data-scroll-ignore]',
    selectorHeader: null,

    // Speed & Easing
    speed: 500,
    offset: 0,
    easing: 'easeInOutCubic',
    easingPatterns: {},

    // Callback API
    before: function before() {},
    after: function after() {}

    //
    // Methods
    //

    /**
     * Merge two or more objects. Returns a new object.
     * @private
     * @param {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
     * @param {Object}   objects  The objects to merge together
     * @returns {Object}          Merged values of defaults and options
     */
  };var extend = function extend() {
    // Variables
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments.length;

    // Check if a deep merge
    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
      deep = arguments[0];
      i++;
    }

    // Merge the object into the extended object
    var merge = function merge(obj) {
      for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          // If deep merge and property is an object, merge properties
          if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
            extended[prop] = extend(true, extended[prop], obj[prop]);
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    };

    // Loop through each object and conduct a merge
    for (; i < length; i++) {
      var obj = arguments[i];
      merge(obj);
    }

    return extended;
  };

  /**
   * Get the height of an element.
   * @private
   * @param  {Node} elem The element to get the height of
   * @return {Number}    The element's height in pixels
   */
  var getHeight = function getHeight(elem) {
    return Math.max(elem.scrollHeight, elem.offsetHeight, elem.clientHeight);
  };

  /**
   * Get the closest matching element up the DOM tree.
   * @private
   * @param  {Element} elem     Starting element
   * @param  {String}  selector Selector to match against
   * @return {Boolean|Element}  Returns null if not match found
   */
  var getClosest = function getClosest(elem, selector) {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) {}
        return i > -1;
      };
    }

    // Get closest match
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }

    return null;
  };

  /**
   * Escape special characters for use with querySelector
   * @private
   * @param {String} id The anchor ID to escape
   * @author Mathias Bynens
   * @link https://github.com/mathiasbynens/CSS.escape
   */
  var escapeCharacters = function escapeCharacters(id) {
    // Remove leading hash
    if (id.charAt(0) === '#') {
      id = id.substr(1);
    }

    var string = String(id);
    var length = string.length;
    var index = -1;
    var codeUnit;
    var result = '';
    var firstCodeUnit = string.charCodeAt(0);
    while (++index < length) {
      codeUnit = string.charCodeAt(index);
      // Note: thereâ€™s no need to special-case astral symbols, surrogate
      // pairs, or lone surrogates.

      // If the character is NULL (U+0000), then throw an
      // `InvalidCharacterError` exception and terminate these steps.
      if (codeUnit === 0x0000) {
        throw new InvalidCharacterError('Invalid character: the input contains U+0000.');
      }

      if (
      // If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
      // U+007F, [â€¦]
      codeUnit >= 0x0001 && codeUnit <= 0x001F || codeUnit == 0x007F ||
      // If the character is the first character and is in the range [0-9]
      // (U+0030 to U+0039), [â€¦]
      index === 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
      // If the character is the second character and is in the range [0-9]
      // (U+0030 to U+0039) and the first character is a `-` (U+002D), [â€¦]
      index === 1 && codeUnit >= 0x0030 && codeUnit <= 0x0039 && firstCodeUnit === 0x002D) {
        // http://dev.w3.org/csswg/cssom/#escape-a-character-as-code-point
        result += '\\' + codeUnit.toString(16) + ' ';
        continue;
      }

      // If the character is not handled by one of the above rules and is
      // greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
      // is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
      // U+005A), or [a-z] (U+0061 to U+007A), [â€¦]
      if (codeUnit >= 0x0080 || codeUnit === 0x002D || codeUnit === 0x005F || codeUnit >= 0x0030 && codeUnit <= 0x0039 || codeUnit >= 0x0041 && codeUnit <= 0x005A || codeUnit >= 0x0061 && codeUnit <= 0x007A) {
        // the character itself
        result += string.charAt(index);
        continue;
      }

      // Otherwise, the escaped character.
      // http://dev.w3.org/csswg/cssom/#escape-a-character
      result += '\\' + string.charAt(index);
    }

    return '#' + result;
  };

  /**
   * Calculate the easing pattern
   * @private
   * @link https://gist.github.com/gre/1650294
   * @param {String} type Easing pattern
   * @param {Number} time Time animation should take to complete
   * @returns {Number}
   */
  var easingPattern = function easingPattern(settings, time) {
    var pattern;

    // Default Easing Patterns
    if (settings.easing === 'easeInQuad') pattern = time * time; // accelerating from zero velocity
    if (settings.easing === 'easeOutQuad') pattern = time * (2 - time); // decelerating to zero velocity
    if (settings.easing === 'easeInOutQuad') pattern = time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time; // acceleration until halfway, then deceleration
    if (settings.easing === 'easeInCubic') pattern = time * time * time; // accelerating from zero velocity
    if (settings.easing === 'easeOutCubic') pattern = --time * time * time + 1; // decelerating to zero velocity
    if (settings.easing === 'easeInOutCubic') pattern = time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1; // acceleration until halfway, then deceleration
    if (settings.easing === 'easeInQuart') pattern = time * time * time * time; // accelerating from zero velocity
    if (settings.easing === 'easeOutQuart') pattern = 1 - --time * time * time * time; // decelerating to zero velocity
    if (settings.easing === 'easeInOutQuart') pattern = time < 0.5 ? 8 * time * time * time * time : 1 - 8 * --time * time * time * time; // acceleration until halfway, then deceleration
    if (settings.easing === 'easeInQuint') pattern = time * time * time * time * time; // accelerating from zero velocity
    if (settings.easing === 'easeOutQuint') pattern = 1 + --time * time * time * time * time; // decelerating to zero velocity
    if (settings.easing === 'easeInOutQuint') pattern = time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * --time * time * time * time * time; // acceleration until halfway, then deceleration

    // Custom Easing Patterns
    if (settings.easingPatterns[settings.easing]) {
      pattern = settings.easingPatterns[settings.easing](time);
    }

    return pattern || time; // no easing, no acceleration
  };

  /**
   * Calculate how far to scroll
   * @private
   * @param {Element} anchor The anchor element to scroll to
   * @param {Number} headerHeight Height of a fixed header, if any
   * @param {Number} offset Number of pixels by which to offset scroll
   * @returns {Number}
   */
  var getEndLocation = function getEndLocation(anchor, headerHeight, offset) {
    var location = 0;
    if (anchor.offsetParent) {
      do {
        location += anchor.offsetTop;
        anchor = anchor.offsetParent;
      } while (anchor);
    }
    location = Math.max(location - headerHeight - offset, 0);
    return Math.min(location, getDocumentHeight() - getViewportHeight());
  };

  /**
   * Determine the viewport's height
   * @private
   * @returns {Number}
   */
  var getViewportHeight = function getViewportHeight() {
    return Math.max(document.documentElement.clientHeight, root.innerHeight || 0);
  };

  /**
   * Determine the document's height
   * @private
   * @returns {Number}
   */
  var getDocumentHeight = function getDocumentHeight() {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
  };

  /**
   * Convert data-options attribute into an object of key/value pairs
   * @private
   * @param {String} options Link-specific options as a data attribute string
   * @returns {Object}
   */
  var getDataOptions = function getDataOptions(options) {
    return !options || !((typeof JSON === 'undefined' ? 'undefined' : _typeof(JSON)) === 'object' && typeof JSON.parse === 'function') ? {} : JSON.parse(options);
  };

  /**
   * Get the height of the fixed header
   * @private
   * @param  {Node}   header The header
   * @return {Number}        The height of the header
   */
  var getHeaderHeight = function getHeaderHeight(header) {
    return !header ? 0 : getHeight(header) + header.offsetTop;
  };

  /**
   * Bring the anchored element into focus
   * @private
   */
  var adjustFocus = function adjustFocus(anchor, endLocation, isNum) {
    // Don't run if scrolling to a number on the page
    if (isNum) return;

    // Otherwise, bring anchor element into focus
    anchor.focus();
    if (document.activeElement.id !== anchor.id) {
      anchor.setAttribute('tabindex', '-1');
      anchor.focus();
      anchor.style.outline = 'none';
    }
    root.scrollTo(0, endLocation);
  };

  /**
   * Start/stop the scrolling animation
   * @public
   * @param {Node|Number} anchor  The element or position to scroll to
   * @param {Element}     toggle  The element that toggled the scroll event
   * @param {Object}      options
   */
  smoothScroll.animateScroll = function (anchor, toggle, options) {
    // Options and overrides
    var overrides = getDataOptions(toggle ? toggle.getAttribute('data-options') : null);
    var animateSettings = extend(settings || defaults, options || {}, overrides); // Merge user options with defaults

    // Selectors and variables
    var isNum = Object.prototype.toString.call(anchor) === '[object Number]';
    var anchorElem = isNum || !anchor.tagName ? null : anchor;
    if (!isNum && !anchorElem) return;
    var startLocation = root.pageYOffset; // Current location on the page
    if (animateSettings.selectorHeader && !fixedHeader) {
      // Get the fixed header if not already set
      fixedHeader = document.querySelector(animateSettings.selectorHeader);
    }
    if (!headerHeight) {
      // Get the height of a fixed header if one exists and not already set
      headerHeight = getHeaderHeight(fixedHeader);
    }
    var endLocation = isNum ? anchor : getEndLocation(anchorElem, headerHeight, parseInt(typeof animateSettings.offset === 'function' ? animateSettings.offset() : animateSettings.offset, 10)); // Location to scroll to
    var distance = endLocation - startLocation; // distance to travel
    var documentHeight = getDocumentHeight();
    var timeLapsed = 0;
    var percentage, position;

    /**
     * Stop the scroll animation when it reaches its target (or the bottom/top of page)
     * @private
     * @param {Number} position Current position on the page
     * @param {Number} endLocation Scroll to location
     * @param {Number} animationInterval How much to scroll on this loop
     */
    var stopAnimateScroll = function stopAnimateScroll(position, endLocation, animationInterval) {
      var currentLocation = root.pageYOffset;
      if (position == endLocation || currentLocation == endLocation || root.innerHeight + currentLocation >= documentHeight) {
        // Clear the animation timer
        clearInterval(animationInterval);

        // Bring the anchored element into focus
        adjustFocus(anchor, endLocation, isNum);

        // Run callback after animation complete
        animateSettings.after(anchor, toggle);
      }
    };

    /**
     * Loop scrolling animation
     * @private
     */
    var loopAnimateScroll = function loopAnimateScroll() {
      timeLapsed += 16;
      percentage = timeLapsed / parseInt(animateSettings.speed, 10);
      percentage = percentage > 1 ? 1 : percentage;
      position = startLocation + distance * easingPattern(animateSettings, percentage);
      root.scrollTo(0, Math.floor(position));
      stopAnimateScroll(position, endLocation, animationInterval);
    };

    /**
     * Set interval timer
     * @private
     */
    var startAnimateScroll = function startAnimateScroll() {
      clearInterval(animationInterval);
      animationInterval = setInterval(loopAnimateScroll, 16);
    };

    /**
     * Reset position to fix weird iOS bug
     * @link https://github.com/cferdinandi/smooth-scroll/issues/45
     */
    if (root.pageYOffset === 0) {
      root.scrollTo(0, 0);
    }

    // Run callback before animation starts
    animateSettings.before(anchor, toggle);

    // Start scrolling animation
    startAnimateScroll();
  };

  /**
   * Handle has change event
   * @private
   */
  var hashChangeHandler = function hashChangeHandler(event) {
    // Get hash from URL
    var hash;
    try {
      hash = escapeCharacters(decodeURIComponent(root.location.hash));
    } catch (e) {
      hash = escapeCharacters(root.location.hash);
    }

    // Only run if there's an anchor element to scroll to
    if (!anchor) return;

    // Reset the anchor element's ID
    anchor.id = anchor.getAttribute('data-scroll-id');

    // Scroll to the anchored content
    smoothScroll.animateScroll(anchor, toggle);

    // Reset anchor and toggle
    anchor = null;
    toggle = null;
  };

  /**
   * If smooth scroll element clicked, animate scroll
   * @private
   */
  var clickHandler = function clickHandler(event) {
    // Don't run if right-click or command/control + click
    if (event.button !== 0 || event.metaKey || event.ctrlKey) return;

    // Check if a smooth scroll link was clicked
    toggle = getClosest(event.target, settings.selector);
    if (!toggle || toggle.tagName.toLowerCase() !== 'a' || getClosest(event.target, settings.ignore)) return;

    // Only run if link is an anchor and points to the current page
    if (toggle.hostname !== root.location.hostname || toggle.pathname !== root.location.pathname || !/#/.test(toggle.href)) return;

    // Get the sanitized hash
    var hash;
    try {
      hash = escapeCharacters(decodeURIComponent(toggle.hash));
    } catch (e) {
      hash = escapeCharacters(toggle.hash);
    }

    // If the hash is empty, scroll to the top of the page
    if (hash === '#') {
      // Prevent default link behavior
      event.preventDefault();

      // Set the anchored element
      anchor = document.body;

      // Save or create the ID as a data attribute and remove it (prevents scroll jump)
      var id = anchor.id ? anchor.id : 'smooth-scroll-top';
      anchor.setAttribute('data-scroll-id', id);
      anchor.id = '';

      // If no hash change event will happen, fire manually
      // Otherwise, update the hash
      if (root.location.hash.substring(1) === id) {
        hashChangeHandler();
      } else {
        root.location.hash = id;
      }

      return;
    }

    // Get the anchored element
    anchor = document.querySelector(hash);

    // If anchored element exists, save the ID as a data attribute and remove it (prevents scroll jump)
    if (!anchor) return;
    anchor.setAttribute('data-scroll-id', anchor.id);
    anchor.id = '';

    // If no hash change event will happen, fire manually
    if (toggle.hash === root.location.hash) {
      event.preventDefault();
      hashChangeHandler();
    }
  };

  /**
   * On window scroll and resize, only run events at a rate of 15fps for better performance
   * @private
   * @param  {Function} eventTimeout Timeout function
   * @param  {Object} settings
   */
  var resizeThrottler = function resizeThrottler(event) {
    if (!eventTimeout) {
      eventTimeout = setTimeout(function () {
        eventTimeout = null; // Reset timeout
        headerHeight = getHeaderHeight(fixedHeader); // Get the height of a fixed header if one exists
      }, 66);
    }
  };

  /**
   * Destroy the current initialization.
   * @public
   */
  smoothScroll.destroy = function () {
    // If plugin isn't already initialized, stop
    if (!settings) return;

    // Remove event listeners
    document.removeEventListener('click', clickHandler, false);
    root.removeEventListener('resize', resizeThrottler, false);

    // Reset varaibles
    settings = null;
    anchor = null;
    toggle = null;
    fixedHeader = null;
    headerHeight = null;
    eventTimeout = null;
    animationInterval = null;
  };

  /**
   * Initialize Smooth Scroll
   * @public
   * @param {Object} options User settings
   */
  smoothScroll.init = function (options) {
    // feature test
    if (!supports) return;

    // Destroy any existing initializations
    smoothScroll.destroy();

    // Selectors and variables
    settings = extend(defaults, options || {}); // Merge user options with defaults
    fixedHeader = settings.selectorHeader ? document.querySelector(settings.selectorHeader) : null; // Get the fixed header
    headerHeight = getHeaderHeight(fixedHeader);

    // When a toggle is clicked, run the click handler
    document.addEventListener('click', clickHandler, false);

    // Listen for hash changes
    root.addEventListener('hashchange', hashChangeHandler, false);

    // If window is resized and there's a fixed header, recalculate its size
    if (fixedHeader) {
      root.addEventListener('resize', resizeThrottler, false);
    }
  };

  //
  // Public APIs
  //

  return smoothScroll;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _locales = __webpack_require__(6);

var _locales2 = _interopRequireDefault(_locales);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toggle = document.querySelector('.Overlay-lang');
/* global Event HTMLDivElement */


if (toggle) {
  toggle.addEventListener('click', function (e) {
    var target = e.target;
    if (target instanceof HTMLDivElement) {
      console.log();
      if (target.innerHTML === 'EN') {
        target.innerHTML = 'ES';
        chageLocale('ES');
      } else if (target.innerHTML === 'ES') {
        target.innerHTML = 'EN';
        chageLocale('EN');
      }
    }
  });
}

function chageLocale(locale) {
  var collection = _locales2.default[locale];

  Object.keys(collection).forEach(function (key) {
    var element = document.querySelector(key);

    if (element) {
      element.innerHTML = collection[key];
    }
  });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ES = {
  '.i18n-programer': 'Programador',
  '.i18n-aboutme': 'Sobre mi',
  '.i18n-projects': 'Proyectos',
  '.i18n-intro1': 'Soy desarrollador de software. He trabajado para varias start-ups del area metropolitana, colaborando\n  con gente talentosa a materializar nuestras ideas mediante aplicaciones web, siempre usando tecnolog\xEDa de punta.',
  '.i18n-intro2': ' Me gusta participar en eventos de desarrollo e innovaci\xF3n, sobre todo para conocer gente nueva de la que pueda aprender.',
  '.i18n-intro3': ' Mi lenguaje favorito es JavaScript pero, a lo largo de trayectoria profesional he programado en muchos lenguajes como C, C++, Java, scala y otros.'
};

var EN = {
  '.i18n-programer': 'Programmer',
  '.i18n-aboutme': 'About Me',
  '.i18n-projects': 'Projects',
  '.i18n-intro1': 'I am a software developer. I\'ve worked\n  for various startups in Mexico city, collaborating with talented people bringing to market our\n  ideas through web applications, always using the bleeding edge of technology.',
  '.i18n-intro2': 'I like to participate on events focused on development and innovation, most of all to meet new\n  people from which I can learn new things.',
  '.i18n-intro3': 'My favorite language is JavaScript but, throughout my career I\'ve used various languages such as C, C++, Java, scala among others.'
};

exports.default = { EN: EN, ES: ES };

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _suicide = __webpack_require__(8);

var _suicide2 = _interopRequireDefault(_suicide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var npmButton = document.querySelector('#npm-size');


var changeToSize = function changeToSize() {
  window.history.pushState('npm-size', 'NPM size', 'npm-size');
  (0, _suicide2.default)();
};

if (npmButton) {
  npmButton.addEventListener('click', changeToSize);
}

console.log(window.location.pathname);

switch (window.location.pathname) {
  case '/':
    break;
  case '/npm-size':
    changeToSize();
    break;
  default:
    var loading = document.createElement('section');
    loading.classList.add('Loading');
    loading.classList.add('Loading--fadein');

    var img = document.createElement('img');
    img.setAttribute('src', 'Double Ring.svg');
    img.onerror = 'this.onerror=null; this.src=\'image.png\'';
    var h1 = document.createElement('h1');
    h1.innerHTML = '404';
    loading.appendChild(img);
    loading.appendChild(h1);
    document.body.appendChild(loading);
    break;
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var sections = document.querySelectorAll('section');

  var loading = document.createElement('section');
  loading.classList.add('Loading');
  loading.classList.add('Loading--fadein');

  var img = document.createElement('img');
  img.setAttribute('src', 'Double Ring.svg');
  img.onerror = function () {
    this.onerror = null;
    this.src = 'image.png';
  };

  loading.appendChild(img);
  document.body.appendChild(loading);

  var animEnd = function animEnd() {
    if (sections) {
      sections.forEach(function (section) {
        section.remove();
      });
      var app = document.createElement('div');
      app.id = 'app';
      document.body.appendChild(app);
    }
    __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 9)).then(function (module) {
      module.default(function () {
        loading.classList.add('Loading--fadeout');
        loading.addEventListener('animationend', function () {
          loading.remove();
        });
      });
    });
    loading.removeEventListener('animationend', animEnd);
  };

  loading.addEventListener('animationend', animEnd);
};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map