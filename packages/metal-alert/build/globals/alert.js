(function() {
this.steel = this.steel || {};
this.steelNamed = this.steelNamed || {};
var babelHelpers = {};

babelHelpers.typeof = function (obj) {
  return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

babelHelpers.classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

babelHelpers.inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

babelHelpers.possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

babelHelpers;
'use strict'

/**
 * A collection of core utility functions.
 * @const
 */
;
(function () {
	var core = (function () {
		function core() {
			babelHelpers.classCallCheck(this, core);
		}

		/**
   * When defining a class Foo with an abstract method bar(), you can do:
   * Foo.prototype.bar = core.abstractMethod
   *
   * Now if a subclass of Foo fails to override bar(), an error will be thrown
   * when bar() is invoked.
   *
   * @type {!Function}
   * @throws {Error} when invoked to indicate the method should be overridden.
   */

		core.abstractMethod = function abstractMethod() {
			throw Error('Unimplemented abstract method');
		};

		/**
   * Loops constructor super classes collecting its properties values. If
   * property is not available on the super class `undefined` will be
   * collected as value for the class hierarchy position.
   * @param {!function()} constructor Class constructor.
   * @param {string} propertyName Property name to be collected.
   * @return {Array.<*>} Array of collected values.
   * TODO(*): Rethink superclass loop.
   */

		core.collectSuperClassesProperty = function collectSuperClassesProperty(constructor, propertyName) {
			var propertyValues = [constructor[propertyName]];
			while (constructor.__proto__ && !constructor.__proto__.isPrototypeOf(Function)) {
				constructor = constructor.__proto__;
				propertyValues.push(constructor[propertyName]);
			}
			return propertyValues;
		};

		/**
   * Gets the name of the given function. If the current browser doesn't
   * support the `name` property, this will calculate it from the function's
   * content string.
   * @param {!function()} fn
   * @return {string}
   */

		core.getFunctionName = function getFunctionName(fn) {
			if (!fn.name) {
				var str = fn.toString();
				fn.name = str.substring(9, str.indexOf('('));
			}
			return fn.name;
		};

		/**
   * Gets an unique id. If `opt_object` argument is passed, the object is
   * mutated with an unique id. Consecutive calls with the same object
   * reference won't mutate the object again, instead the current object uid
   * returns. See {@link core.UID_PROPERTY}.
   * @type {opt_object} Optional object to be mutated with the uid. If not
   *     specified this method only returns the uid.
   * @throws {Error} when invoked to indicate the method should be overridden.
   */

		core.getUid = function getUid(opt_object) {
			if (opt_object) {
				return opt_object[core.UID_PROPERTY] || (opt_object[core.UID_PROPERTY] = core.uniqueIdCounter_++);
			}
			return core.uniqueIdCounter_++;
		};

		/**
   * The identity function. Returns its first argument.
   * @param {*=} opt_returnValue The single value that will be returned.
   * @return {?} The first argument.
   */

		core.identityFunction = function identityFunction(opt_returnValue) {
			return opt_returnValue;
		};

		/**
   * Returns true if the specified value is a boolean.
   * @param {?} val Variable to test.
   * @return {boolean} Whether variable is boolean.
   */

		core.isBoolean = function isBoolean(val) {
			return typeof val === 'boolean';
		};

		/**
   * Returns true if the specified value is not undefined.
   * @param {?} val Variable to test.
   * @return {boolean} Whether variable is defined.
   */

		core.isDef = function isDef(val) {
			return val !== undefined;
		};

		/**
   * Returns true if value is not undefined or null.
   * @param {*} val
   * @return {Boolean}
   */

		core.isDefAndNotNull = function isDefAndNotNull(val) {
			return core.isDef(val) && !core.isNull(val);
		};

		/**
   * Returns true if value is a document.
   * @param {*} val
   * @return {Boolean}
   */

		core.isDocument = function isDocument(val) {
			return val && (typeof val === 'undefined' ? 'undefined' : babelHelpers.typeof(val)) === 'object' && val.nodeType === 9;
		};

		/**
   * Returns true if value is a dom element.
   * @param {*} val
   * @return {Boolean}
   */

		core.isElement = function isElement(val) {
			return val && (typeof val === 'undefined' ? 'undefined' : babelHelpers.typeof(val)) === 'object' && val.nodeType === 1;
		};

		/**
   * Returns true if the specified value is a function.
   * @param {?} val Variable to test.
   * @return {boolean} Whether variable is a function.
   */

		core.isFunction = function isFunction(val) {
			return typeof val === 'function';
		};

		/**
   * Returns true if value is null.
   * @param {*} val
   * @return {Boolean}
   */

		core.isNull = function isNull(val) {
			return val === null;
		};

		/**
   * Returns true if the specified value is a number.
   * @param {?} val Variable to test.
   * @return {boolean} Whether variable is a number.
   */

		core.isNumber = function isNumber(val) {
			return typeof val === 'number';
		};

		/**
   * Returns true if value is a window.
   * @param {*} val
   * @return {Boolean}
   */

		core.isWindow = function isWindow(val) {
			return val !== null && val === val.window;
		};

		/**
   * Returns true if the specified value is an object. This includes arrays
   * and functions.
   * @param {?} val Variable to test.
   * @return {boolean} Whether variable is an object.
   */

		core.isObject = function isObject(val) {
			var type = typeof val === 'undefined' ? 'undefined' : babelHelpers.typeof(val);
			return type === 'object' && val !== null || type === 'function';
		};

		/**
   * Returns true if value is a string.
   * @param {*} val
   * @return {Boolean}
   */

		core.isString = function isString(val) {
			return typeof val === 'string';
		};

		/**
   * Merges the values of a static property a class with the values of that
   * property for all its super classes, and stores it as a new static
   * property of that class. If the static property already existed, it won't
   * be recalculated.
   * @param {!function()} constructor Class constructor.
   * @param {string} propertyName Property name to be collected.
   * @param {function(*, *):*=} opt_mergeFn Function that receives an array filled
   *   with the values of the property for the current class and all its super classes.
   *   Should return the merged value to be stored on the current class.
   * @return {boolean} Returns true if merge happens, false otherwise.
   */

		core.mergeSuperClassesProperty = function mergeSuperClassesProperty(constructor, propertyName, opt_mergeFn) {
			var mergedName = propertyName + '_MERGED';
			if (constructor.hasOwnProperty(mergedName)) {
				return false;
			}

			var merged = core.collectSuperClassesProperty(constructor, propertyName);
			if (opt_mergeFn) {
				merged = opt_mergeFn(merged);
			}
			constructor[mergedName] = merged;
			return true;
		};

		/**
   * Null function used for default values of callbacks, etc.
   * @return {void} Nothing.
   */

		core.nullFunction = function nullFunction() {};

		return core;
	})();

	/**
  * Unique id property prefix.
  * @type {String}
  * @protected
  */

	core.UID_PROPERTY = 'core_' + (Math.random() * 1e9 >>> 0);

	/**
  * Counter for unique id.
  * @type {Number}
  * @private
  */
	core.uniqueIdCounter_ = 1;

	this.steel.core = core;
}).call(this);
'use strict';

(function () {
	var core = this.steel.core;

	var object = (function () {
		function object() {
			babelHelpers.classCallCheck(this, object);
		}

		/**
   * Copies all the members of a source object to a target object.
   * @param {Object} target Target object.
   * @param {...Object} var_args The objects from which values will be copied.
   * @return {Object} Returns the target object reference.
   */

		object.mixin = function mixin(target) {
			var key, source;
			for (var i = 1; i < arguments.length; i++) {
				source = arguments[i];
				for (key in source) {
					target[key] = source[key];
				}
			}
			return target;
		};

		/**
   * Returns an object based on its fully qualified external name.
   * @param {string} name The fully qualified name.
   * @param {object=} opt_obj The object within which to look; default is
   *     <code>window</code>.
   * @return {?} The value (object or primitive) or, if not found, null.
   */

		object.getObjectByName = function getObjectByName(name, opt_obj) {
			var parts = name.split('.');
			var cur = opt_obj || window;
			var part;
			while (part = parts.shift()) {
				if (core.isDefAndNotNull(cur[part])) {
					cur = cur[part];
				} else {
					return null;
				}
			}
			return cur;
		};

		/**
   * Returns a new object with the same keys as the given one, but with
   * their values set to the return values of the specified function.
   * @param {!Object} obj
   * @param {!function(string, *)} fn
   * @return {!Object}
   */

		object.map = function map(obj, fn) {
			var mappedObj = {};
			var keys = Object.keys(obj);
			for (var i = 0; i < keys.length; i++) {
				mappedObj[keys[i]] = fn(keys[i], obj[keys[i]]);
			}
			return mappedObj;
		};

		return object;
	})();

	this.steel.object = object;
}).call(this);
'use strict'

/**
 * Disposable utility. When inherited provides the `dispose` function to its
 * subclass, which is responsible for disposing of any object references
 * when an instance won't be used anymore. Subclasses should override
 * `disposeInternal` to implement any specific disposing logic.
 * @constructor
 */
;
(function () {
	var Disposable = (function () {
		function Disposable() {
			babelHelpers.classCallCheck(this, Disposable);

			/**
    * Flag indicating if this instance has already been disposed.
    * @type {boolean}
    * @protected
    */
			this.disposed_ = false;
		}

		/**
   * Disposes of this instance's object references. Calls `disposeInternal`.
   */

		Disposable.prototype.dispose = function dispose() {
			if (!this.disposed_) {
				this.disposeInternal();
				this.disposed_ = true;
			}
		};

		/**
   * Subclasses should override this method to implement any specific
   * disposing logic (like clearing references and calling `dispose` on other
   * disposables).
   */

		Disposable.prototype.disposeInternal = function disposeInternal() {};

		/**
   * Checks if this instance has already been disposed.
   * @return {boolean}
   */

		Disposable.prototype.isDisposed = function isDisposed() {
			return this.disposed_;
		};

		return Disposable;
	})();

	this.steel.Disposable = Disposable;
}).call(this);
'use strict';

(function () {
	var Disposable = this.steel.Disposable;

	/**
  * EventHandle utility. Holds information about an event subscription, and
  * allows removing them easily.
  * EventHandle is a Disposable, but it's important to note that the
  * EventEmitter that created it is not the one responsible for disposing it.
  * That responsibility is for the code that holds a reference to it.
  * @param {!EventEmitter} emitter Emitter the event was subscribed to.
  * @param {string} event The name of the event that was subscribed to.
  * @param {!Function} listener The listener subscribed to the event.
  * @constructor
  * @extends {Disposable}
  */

	var EventHandle = (function (_Disposable) {
		babelHelpers.inherits(EventHandle, _Disposable);

		function EventHandle(emitter, event, listener) {
			babelHelpers.classCallCheck(this, EventHandle);

			/**
    * The EventEmitter instance that the event was subscribed to.
    * @type {EventEmitter}
    * @protected
    */

			var _this = babelHelpers.possibleConstructorReturn(this, _Disposable.call(this));

			_this.emitter_ = emitter;

			/**
    * The name of the event that was subscribed to.
    * @type {string}
    * @protected
    */
			_this.event_ = event;

			/**
    * The listener subscribed to the event.
    * @type {Function}
    * @protected
    */
			_this.listener_ = listener;
			return _this;
		}

		/**
   * Disposes of this instance's object references.
   * @override
   */

		EventHandle.prototype.disposeInternal = function disposeInternal() {
			this.removeListener();
			this.emitter_ = null;
			this.listener_ = null;
		};

		/**
   * Removes the listener subscription from the emitter.
   */

		EventHandle.prototype.removeListener = function removeListener() {
			if (!this.emitter_.isDisposed()) {
				this.emitter_.removeListener(this.event_, this.listener_);
			}
		};

		return EventHandle;
	})(Disposable);

	EventHandle.prototype.registerMetalComponent && EventHandle.prototype.registerMetalComponent(EventHandle, 'EventHandle')
	this.steel.EventHandle = EventHandle;
}).call(this);
'use strict';

(function () {
	var EventHandle = this.steel.EventHandle;

	/**
  * This is a special EventHandle, that is responsible for dom events, instead
  * of EventEmitter events.
  * @extends {EventHandle}
  */

	var DomEventHandle = (function (_EventHandle) {
		babelHelpers.inherits(DomEventHandle, _EventHandle);

		/**
   * The constructor for `DomEventHandle`.
   * @param {!EventEmitter} emitter Emitter the event was subscribed to.
   * @param {string} event The name of the event that was subscribed to.
   * @param {!Function} listener The listener subscribed to the event.
   * @param {boolean} opt_capture Flag indicating if listener should be triggered
   *   during capture phase, instead of during the bubbling phase. Defaults to false.
   * @constructor
   */

		function DomEventHandle(emitter, event, listener, opt_capture) {
			babelHelpers.classCallCheck(this, DomEventHandle);

			var _this = babelHelpers.possibleConstructorReturn(this, _EventHandle.call(this, emitter, event, listener));

			_this.capture_ = opt_capture;
			return _this;
		}

		/**
   * @inheritDoc
   */

		DomEventHandle.prototype.removeListener = function removeListener() {
			this.emitter_.removeEventListener(this.event_, this.listener_, this.capture_);
		};

		return DomEventHandle;
	})(EventHandle);

	DomEventHandle.prototype.registerMetalComponent && DomEventHandle.prototype.registerMetalComponent(DomEventHandle, 'DomEventHandle')
	this.steel.DomEventHandle = DomEventHandle;
}).call(this);
'use strict';

(function () {
	var core = this.steel.core;
	var object = this.steel.object;
	var DomEventHandle = this.steel.DomEventHandle;

	var dom = (function () {
		function dom() {
			babelHelpers.classCallCheck(this, dom);
		}

		/**
   * Adds the requested CSS classes to an element.
   * @param {!Element} element The element to add CSS classes to.
   * @param {string} classes CSS classes to add.
   */

		dom.addClasses = function addClasses(element, classes) {
			if (!core.isObject(element) || !core.isString(classes)) {
				return;
			}

			if ('classList' in element) {
				dom.addClassesWithNative_(element, classes);
			} else {
				dom.addClassesWithoutNative_(element, classes);
			}
		};

		/**
   * Adds the requested CSS classes to an element using classList.
   * @param {!Element} element The element to add CSS classes to.
   * @param {string} classes CSS classes to add.
   * @protected
   */

		dom.addClassesWithNative_ = function addClassesWithNative_(element, classes) {
			classes.split(' ').forEach(function (className) {
				element.classList.add(className);
			});
		};

		/**
   * Adds the requested CSS classes to an element without using classList.
   * @param {!Element} element The element to add CSS classes to.
   * @param {string} classes CSS classes to add.
   * @protected
   */

		dom.addClassesWithoutNative_ = function addClassesWithoutNative_(element, classes) {
			var elementClassName = ' ' + element.className + ' ';
			var classesToAppend = '';

			classes = classes.split(' ');

			for (var i = 0; i < classes.length; i++) {
				var className = classes[i];

				if (elementClassName.indexOf(' ' + className + ' ') === -1) {
					classesToAppend += ' ' + className;
				}
			}

			if (classesToAppend) {
				element.className = element.className + classesToAppend;
			}
		};

		/**
   * Appends a child node with text or other nodes to a parent node. If
   * child is a HTML string it will be automatically converted to a document
   * fragment before appending it to the parent.
   * @param {!Element} parent The node to append nodes to.
   * @param {!(Element|NodeList|string)} child The thing to append to the parent.
   * @return {!Element} The appended child.
   */

		dom.append = function append(parent, child) {
			if (core.isString(child)) {
				child = dom.buildFragment(child);
			}
			if (child instanceof NodeList) {
				var childArr = Array.prototype.slice.call(child);
				for (var i = 0; i < childArr.length; i++) {
					parent.appendChild(childArr[i]);
				}
			} else {
				parent.appendChild(child);
			}
			return child;
		};

		/**
   * Helper for converting a HTML string into a document fragment.
   * @param {string} htmlString The HTML string to convert.
   * @return {!Element} The resulting document fragment.
   */

		dom.buildFragment = function buildFragment(htmlString) {
			var tempDiv = document.createElement('div');
			tempDiv.innerHTML = '<br>' + htmlString;
			tempDiv.removeChild(tempDiv.firstChild);

			var fragment = document.createDocumentFragment();
			while (tempDiv.firstChild) {
				fragment.appendChild(tempDiv.firstChild);
			}
			return fragment;
		};

		/**
   * Checks if the first element contains the second one.
   * @param {!Element} element1
   * @param {!Element} element2
   * @return {boolean}
   */

		dom.contains = function contains(element1, element2) {
			if (core.isDocument(element1)) {
				// document.contains is not defined on IE9, so call it on documentElement instead.
				return element1.documentElement.contains(element2);
			} else {
				return element1.contains(element2);
			}
		};

		/**
   * Listens to the specified event on the given DOM element, but only calls the
   * callback with the event when it triggered by elements that match the given
   * selector.
   * @param {!Element} element The container DOM element to listen to the event on.
   * @param {string} eventName The name of the event to listen to.
   * @param {string} selector The selector that matches the child elements that
   *   the event should be triggered for.
   * @param {!function(!Object)} callback Function to be called when the event is
   *   triggered. It will receive the normalized event object.
   * @return {!DomEventHandle} Can be used to remove the listener.
   */

		dom.delegate = function delegate(element, eventName, selector, callback) {
			var customConfig = dom.customEvents[eventName];
			if (customConfig && customConfig.delegate) {
				eventName = customConfig.originalEvent;
				callback = customConfig.handler.bind(customConfig, callback);
			}
			return dom.on(element, eventName, dom.handleDelegateEvent_.bind(null, selector, callback));
		};

		/**
   * Inserts node in document as last element.
   * @param {Element} node Element to remove children from.
   */

		dom.enterDocument = function enterDocument(node) {
			dom.append(document.body, node);
		};

		/**
   * Removes node from document.
   * @param {Element} node Element to remove children from.
   */

		dom.exitDocument = function exitDocument(node) {
			if (node.parentNode) {
				node.parentNode.removeChild(node);
			}
		};

		/**
   * This is called when an event is triggered by a delegate listener (see
   * `dom.delegate` for more details).
   * @param {string} selector The selector or element that matches the child
   *   elements that the event should be triggered for.
   * @param {!function(!Object)} callback Function to be called when the event
   *   is triggered. It will receive the normalized event object.
   * @param {!Event} event The event payload.
   * @return {boolean} False if at least one of the triggered callbacks returns
   *   false, or true otherwise.
   */

		dom.handleDelegateEvent_ = function handleDelegateEvent_(selector, callback, event) {
			dom.normalizeDelegateEvent_(event);

			var currentElement = event.target;
			var returnValue = true;

			while (currentElement && !event.stopped) {
				if (core.isString(selector) && dom.match(currentElement, selector)) {
					event.delegateTarget = currentElement;
					returnValue &= callback(event);
				}
				if (currentElement === event.currentTarget) {
					break;
				}
				currentElement = currentElement.parentNode;
			}
			event.delegateTarget = null;

			return returnValue;
		};

		/**
   * Checks if the given element has the requested css class.
   * @param {!Element} element
   * @param {string} className
   * @return {boolean}
   */

		dom.hasClass = function hasClass(element, className) {
			if ('classList' in element) {
				return dom.hasClassWithNative_(element, className);
			} else {
				return dom.hasClassWithoutNative_(element, className);
			}
		};

		/**
   * Checks if the given element has the requested css class using classList.
   * @param {!Element} element
   * @param {string} className
   * @return {boolean}
   * @protected
   */

		dom.hasClassWithNative_ = function hasClassWithNative_(element, className) {
			return element.classList.contains(className);
		};

		/**
   * Checks if the given element has the requested css class without using classList.
   * @param {!Element} element
   * @param {string} className
   * @return {boolean}
   * @protected
   */

		dom.hasClassWithoutNative_ = function hasClassWithoutNative_(element, className) {
			return (' ' + element.className + ' ').indexOf(' ' + className + ' ') >= 0;
		};

		/**
   * Checks if the given element is empty or not.
   * @param {!Element} element
   * @return {boolean}
   */

		dom.isEmpty = function isEmpty(element) {
			return element.childNodes.length === 0;
		};

		/**
   * Check if an element matches a given selector.
   * @param {Element} element
   * @param {string} selector
   * @return {boolean}
   */

		dom.match = function match(element, selector) {
			if (!element || element.nodeType !== 1) {
				return false;
			}

			var p = Element.prototype;
			var m = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector;
			if (m) {
				return m.call(element, selector);
			}

			return dom.matchFallback_(element, selector);
		};

		/**
   * Check if an element matches a given selector, using an internal implementation
   * instead of calling existing javascript functions.
   * @param {Element} element
   * @param {string} selector
   * @return {boolean}
   * @protected
   */

		dom.matchFallback_ = function matchFallback_(element, selector) {
			var nodes = document.querySelectorAll(selector, element.parentNode);
			for (var i = 0; i < nodes.length; ++i) {
				if (nodes[i] === element) {
					return true;
				}
			}
			return false;
		};

		/**
   * Normalizes the event payload for delegate listeners.
   * @param {!Event} event
   */

		dom.normalizeDelegateEvent_ = function normalizeDelegateEvent_(event) {
			event.stopPropagation = dom.stopPropagation_;
			event.stopImmediatePropagation = dom.stopImmediatePropagation_;
		};

		/**
   * Listens to the specified event on the given DOM element. This function normalizes
   * DOM event payloads and functions so they'll work the same way on all supported
   * browsers.
   * @param {!Element|string} element The DOM element to listen to the event on, or
   *   a selector that should be delegated on the entire document.
   * @param {string} eventName The name of the event to listen to.
   * @param {!function(!Object)} callback Function to be called when the event is
   *   triggered. It will receive the normalized event object.
   * @param {boolean} opt_capture Flag indicating if listener should be triggered
   *   during capture phase, instead of during the bubbling phase. Defaults to false.
   * @return {!DomEventHandle} Can be used to remove the listener.
   */

		dom.on = function on(element, eventName, callback, opt_capture) {
			if (core.isString(element)) {
				return dom.delegate(document, eventName, element, callback);
			}
			var customConfig = dom.customEvents[eventName];
			if (customConfig && customConfig.event) {
				eventName = customConfig.originalEvent;
				callback = customConfig.handler.bind(customConfig, callback);
			}
			element.addEventListener(eventName, callback, opt_capture);
			return new DomEventHandle(element, eventName, callback, opt_capture);
		};

		/**
   * Listens to the specified event on the given DOM element once. This
   * function normalizes DOM event payloads and functions so they'll work the
   * same way on all supported browsers.
   * @param {!Element} element The DOM element to listen to the event on.
   * @param {string} eventName The name of the event to listen to.
   * @param {!function(!Object)} callback Function to be called when the event
   *   is triggered. It will receive the normalized event object.
   * @return {!DomEventHandle} Can be used to remove the listener.
   */

		dom.once = function once(element, eventName, callback) {
			var domEventHandle = this.on(element, eventName, function () {
				domEventHandle.removeListener();
				return callback.apply(this, arguments);
			});
			return domEventHandle;
		};

		/**
   * Registers a custom event.
   * @param {string} eventName The name of the custom event.
   * @param {!Object} customConfig An object with information about how the event
   *   should be handled.
   */

		dom.registerCustomEvent = function registerCustomEvent(eventName, customConfig) {
			dom.customEvents[eventName] = customConfig;
		};

		/**
   * Removes all the child nodes on a DOM node.
   * @param {Element} node Element to remove children from.
   */

		dom.removeChildren = function removeChildren(node) {
			var child;
			while (child = node.firstChild) {
				node.removeChild(child);
			}
		};

		/**
   * Removes the requested CSS classes from an element.
   * @param {!Element} element The element to remove CSS classes from.
   * @param {string} classes CSS classes to remove.
   */

		dom.removeClasses = function removeClasses(element, classes) {
			if (!core.isObject(element) || !core.isString(classes)) {
				return;
			}

			if ('classList' in element) {
				dom.removeClassesWithNative_(element, classes);
			} else {
				dom.removeClassesWithoutNative_(element, classes);
			}
		};

		/**
   * Removes the requested CSS classes from an element using classList.
   * @param {!Element} element The element to remove CSS classes from.
   * @param {string} classes CSS classes to remove.
   * @protected
   */

		dom.removeClassesWithNative_ = function removeClassesWithNative_(element, classes) {
			classes.split(' ').forEach(function (className) {
				element.classList.remove(className);
			});
		};

		/**
   * Removes the requested CSS classes from an element without using classList.
   * @param {!Element} element The element to remove CSS classes from.
   * @param {string} classes CSS classes to remove.
   * @protected
   */

		dom.removeClassesWithoutNative_ = function removeClassesWithoutNative_(element, classes) {
			var elementClassName = ' ' + element.className + ' ';

			classes = classes.split(' ');

			for (var i = 0; i < classes.length; i++) {
				elementClassName = elementClassName.replace(' ' + classes[i] + ' ', ' ');
			}

			element.className = elementClassName.trim();
		};

		/**
   * Replaces the first element with the second.
   * @param {Element} element1
   * @param {Element} element2
   */

		dom.replace = function replace(element1, element2) {
			if (element1 && element2 && element1 !== element2 && element1.parentNode) {
				element1.parentNode.insertBefore(element2, element1);
				element1.parentNode.removeChild(element1);
			}
		};

		/**
   * The function that replaces `stopImmediatePropagation_` for events.
   * @protected
   */

		dom.stopImmediatePropagation_ = function stopImmediatePropagation_() {
			this.stopped = true;
			Event.prototype.stopImmediatePropagation.call(this);
		};

		/**
   * The function that replaces `stopPropagation` for events.
   * @protected
   */

		dom.stopPropagation_ = function stopPropagation_() {
			this.stopped = true;
			Event.prototype.stopPropagation.call(this);
		};

		/**
   * Checks if the given element supports the given event type.
   * @param {!Element|string} element The DOM element or element tag name to check.
   * @param {string} eventName The name of the event to check.
   * @return {boolean}
   */

		dom.supportsEvent = function supportsEvent(element, eventName) {
			if (dom.customEvents[eventName]) {
				return true;
			}

			if (core.isString(element)) {
				if (!elementsByTag[element]) {
					elementsByTag[element] = document.createElement(element);
				}
				element = elementsByTag[element];
			}
			return 'on' + eventName in element;
		};

		/**
   * Converts the given argument to a DOM element. Strings are assumed to
   * be selectors, and so a matched element will be returned. If the arg
   * is already a DOM element it will be the return value.
   * @param {string|Element|Document} selectorOrElement
   * @return {Element} The converted element, or null if none was found.
   */

		dom.toElement = function toElement(selectorOrElement) {
			if (core.isElement(selectorOrElement) || core.isDocument(selectorOrElement)) {
				return selectorOrElement;
			} else if (core.isString(selectorOrElement)) {
				if (selectorOrElement[0] === '#' && selectorOrElement.indexOf(' ') === -1) {
					return document.getElementById(selectorOrElement.substr(1));
				} else {
					return document.querySelector(selectorOrElement);
				}
			} else {
				return null;
			}
		};

		/**
   * Adds or removes one or more classes from an element. If any of the classes
   * is present, it will be removed from the element, or added otherwise.
   * @param {!Element} element The element which classes will be toggled.
   * @param {string} classes The classes which have to added or removed from the element.
   */

		dom.toggleClasses = function toggleClasses(element, classes) {
			if (!core.isObject(element) || !core.isString(classes)) {
				return;
			}

			if ('classList' in element) {
				dom.toggleClassesWithNative_(element, classes);
			} else {
				dom.toggleClassesWithoutNative_(element, classes);
			}
		};

		/**
   * Adds or removes one or more classes from an element using classList.
   * If any of the classes is present, it will be removed from the element,
   * or added otherwise.
   * @param {!Element} element The element which classes will be toggled.
   * @param {string} classes The classes which have to added or removed from the element.
   */

		dom.toggleClassesWithNative_ = function toggleClassesWithNative_(element, classes) {
			classes.split(' ').forEach(function (className) {
				element.classList.toggle(className);
			});
		};

		/**
   * Adds or removes one or more classes from an element without using classList.
   * If any of the classes is present, it will be removed from the element,
   * or added otherwise.
   * @param {!Element} element The element which classes will be toggled.
   * @param {string} classes The classes which have to added or removed from the element.
   */

		dom.toggleClassesWithoutNative_ = function toggleClassesWithoutNative_(element, classes) {
			var elementClassName = ' ' + element.className + ' ';

			classes = classes.split(' ');

			for (var i = 0; i < classes.length; i++) {
				var className = ' ' + classes[i] + ' ';
				var classIndex = elementClassName.indexOf(className);

				if (classIndex === -1) {
					elementClassName = elementClassName + classes[i] + ' ';
				} else {
					elementClassName = elementClassName.substring(0, classIndex) + ' ' + elementClassName.substring(classIndex + className.length);
				}
			}

			element.className = elementClassName.trim();
		};

		/**
   * Triggers the specified event on the given element.
   * NOTE: This should mostly be used for testing, not on real code.
   * @param {!Element} element The node that should trigger the event.
   * @param {string} eventName The name of the event to be triggred.
   * @param {Object=} opt_eventObj An object with data that should be on the
   *   triggered event's payload.
   */

		dom.triggerEvent = function triggerEvent(element, eventName, opt_eventObj) {
			var eventObj = document.createEvent('HTMLEvents');
			eventObj.initEvent(eventName, true, true);
			object.mixin(eventObj, opt_eventObj);
			element.dispatchEvent(eventObj);
		};

		return dom;
	})();

	var elementsByTag = {};
	dom.customEvents = {};

	this.steel.dom = dom;
}).call(this);
'use strict';

(function () {
	var core = this.steel.core;

	var array = (function () {
		function array() {
			babelHelpers.classCallCheck(this, array);
		}

		/**
   * Checks if the given arrays have the same content.
   * @param {!Array<*>} arr1
   * @param {!Array<*>} arr2
   * @return {boolean}
   */

		array.equal = function equal(arr1, arr2) {
			for (var i = 0; i < arr1.length; i++) {
				if (arr1[i] !== arr2[i]) {
					return false;
				}
			}
			return arr1.length === arr2.length;
		};

		/**
   * Returns the first value in the given array that isn't undefined.
   * @param {!Array} arr
   * @return {*}
   */

		array.firstDefinedValue = function firstDefinedValue(arr) {
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] !== undefined) {
					return arr[i];
				}
			}
		};

		/**
   * Transforms the input nested array to become flat.
   * @param {Array.<*|Array.<*>>} arr Nested array to flatten.
   * @param {Array.<*>} opt_output Optional output array.
   * @return {Array.<*>} Flat array.
   */

		array.flatten = function flatten(arr, opt_output) {
			var output = opt_output || [];
			for (var i = 0; i < arr.length; i++) {
				if (Array.isArray(arr[i])) {
					array.flatten(arr[i], output);
				} else {
					output.push(arr[i]);
				}
			}
			return output;
		};

		/**
   * Removes the first occurrence of a particular value from an array.
   * @param {Array.<T>} arr Array from which to remove value.
   * @param {T} obj Object to remove.
   * @return {boolean} True if an element was removed.
   * @template T
   */

		array.remove = function remove(arr, obj) {
			var i = arr.indexOf(obj);
			var rv;
			if (rv = i >= 0) {
				array.removeAt(arr, i);
			}
			return rv;
		};

		/**
   * Removes from an array the element at index i
   * @param {Array} arr Array or array like object from which to remove value.
   * @param {number} i The index to remove.
   * @return {boolean} True if an element was removed.
   */

		array.removeAt = function removeAt(arr, i) {
			return Array.prototype.splice.call(arr, i, 1).length === 1;
		};

		/**
   * Slices the given array, just like Array.prototype.slice, but this
   * is faster and working on all array-like objects (like arguments).
   * @param {!Object} arr Array-like object to slice.
   * @param {number} start The index that should start the slice.
   * @param {number=} opt_end The index where the slice should end, not
   *   included in the final array. If not given, all elements after the
   *   start index will be included.
   * @return {!Array}
   */

		array.slice = function slice(arr, start, opt_end) {
			var sliced = [];
			var end = core.isDef(opt_end) ? opt_end : arr.length;
			for (var i = start; i < end; i++) {
				sliced.push(arr[i]);
			}
			return sliced;
		};

		return array;
	})();

	this.steel.array = array;
}).call(this);
'use strict';

(function () {
	var string = (function () {
		function string() {
			babelHelpers.classCallCheck(this, string);
		}

		/**
   * Removes the breaking spaces from the left and right of the string and
   * collapses the sequences of breaking spaces in the middle into single spaces.
   * The original and the result strings render the same way in HTML.
   * @param {string} str A string in which to collapse spaces.
   * @return {string} Copy of the string with normalized breaking spaces.
   */

		string.collapseBreakingSpaces = function collapseBreakingSpaces(str) {
			return str.replace(/[\t\r\n ]+/g, ' ').replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, '');
		};

		/**
   * Calculates the hashcode for a string. The hashcode value is computed by
   * the sum algorithm: s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]. A nice
   * property of using 31 prime is that the multiplication can be replaced by
   * a shift and a subtraction for better performance: 31*i == (i<<5)-i.
   * Modern VMs do this sort of optimization automatically.
   * @param {String} val Target string.
   * @return {Number} Returns the string hashcode.
   */

		string.hashCode = function hashCode(val) {
			var hash = 0;
			for (var i = 0, len = val.length; i < len; i++) {
				hash = 31 * hash + val.charCodeAt(i);
				hash %= 0x100000000;
			}
			return hash;
		};

		/**
   * Replaces interval into the string with specified value, e.g.
   * `replaceInterval("abcde", 1, 4, "")` returns "ae".
   * @param {string} str The input string.
   * @param {Number} start Start interval position to be replaced.
   * @param {Number} end End interval position to be replaced.
   * @param {string} value The value that replaces the specified interval.
   * @return {string}
   */

		string.replaceInterval = function replaceInterval(str, start, end, value) {
			return str.substring(0, start) + value + str.substring(end);
		};

		return string;
	})();

	this.steel.string = string;
}).call(this);
'use strict';

(function () {
	var dom = this.steel.dom;
	var string = this.steel.string;

	/**
  * Class with static methods responsible for doing browser feature checks.
  */

	var features = (function () {
		function features() {
			babelHelpers.classCallCheck(this, features);
		}

		/**
   * Some browsers still supports prefixed animation events. This method can
   * be used to retrieve the current browser event name for both, animation
   * and transition.
   * @return {object}
   */

		features.checkAnimationEventName = function checkAnimationEventName() {
			if (features.animationEventName_ === undefined) {
				features.animationEventName_ = {
					animation: features.checkAnimationEventName_('animation'),
					transition: features.checkAnimationEventName_('transition')
				};
			}
			return features.animationEventName_;
		};

		/**
   * @protected
   * @param {string} type Type to test: animation, transition.
   * @return {string} Browser event name.
   */

		features.checkAnimationEventName_ = function checkAnimationEventName_(type) {
			var prefixes = ['Webkit', 'MS', 'O', ''];
			var typeTitleCase = string.replaceInterval(type, 0, 1, type.substring(0, 1).toUpperCase());
			var suffixes = [typeTitleCase + 'End', typeTitleCase + 'End', typeTitleCase + 'End', type + 'end'];
			for (var i = 0; i < prefixes.length; i++) {
				if (features.animationElement_.style[prefixes[i] + typeTitleCase] !== undefined) {
					return prefixes[i].toLowerCase() + suffixes[i];
				}
			}
			return type + 'end';
		};

		/**
   * Some browsers (like IE9) change the order of element attributes, when html
   * is rendered. This method can be used to check if this behavior happens on
   * the current browser.
   * @return {boolean}
   */

		features.checkAttrOrderChange = function checkAttrOrderChange() {
			if (features.attrOrderChange_ === undefined) {
				var originalContent = '<div data-component="" data-ref=""></div>';
				var element = document.createElement('div');
				dom.append(element, originalContent);
				features.attrOrderChange_ = originalContent !== element.innerHTML;
			}
			return features.attrOrderChange_;
		};

		return features;
	})();

	features.animationElement_ = document.createElement('div');
	features.animationEventName_ = undefined;
	features.attrOrderChange_ = undefined;

	this.steel.features = features;
}).call(this);
'use strict';

(function () {
	var dom = this.steel.dom;

	/**
  * Utility functions for running javascript code in the global scope.
  */

	var globalEval = (function () {
		function globalEval() {
			babelHelpers.classCallCheck(this, globalEval);
		}

		/**
   * Evaluates the given string in the global scope.
   * @param {string} text
   */

		globalEval.run = function run(text) {
			var script = document.createElement('script');
			script.text = text;
			document.head.appendChild(script).parentNode.removeChild(script);
		};

		/**
   * Evaluates the given javascript file in the global scope.
   * @param {string} src The file's path.
   */

		globalEval.runFile = function runFile(src) {
			var script = document.createElement('script');
			script.src = src;
			dom.on(script, 'load', function () {
				script.parentNode.removeChild(script);
			});
			dom.on(script, 'error', function () {
				script.parentNode.removeChild(script);
			});
			document.head.appendChild(script);
		};

		/**
   * Evaluates the code referenced by the given script element.
   * @param {!Element} script
   */

		globalEval.runScript = function runScript(script) {
			if (script.parentNode) {
				script.parentNode.removeChild(script);
			}
			if (script.src) {
				globalEval.runFile(script.src);
			} else {
				globalEval.run(script.text);
			}
		};

		return globalEval;
	})();

	this.steel.globalEval = globalEval;
}).call(this);
'use strict';

(function () {
	var core = this.steel.core;
	var string = this.steel.string;

	var html = (function () {
		function html() {
			babelHelpers.classCallCheck(this, html);
		}

		/**
   * Minifies given HTML source by removing extra white spaces, comments and
   * other unneeded characters without breaking the content structure. As a
   * result HTML become smaller in size.
   * - Contents within <code>, <pre>, <script>, <style>, <textarea> and
   *   conditional comments tags are preserved.
   * - Comments are removed.
   * - Conditional comments are preserved.
   * - Breaking spaces are collapsed into a single space.
   * - Unneeded spaces inside tags (around = and before />) are removed.
   * - Spaces between tags are removed, even from inline-block elements.
   * - Spaces surrounding tags are removed.
   * - DOCTYPE declaration is simplified to <!DOCTYPE html>.
   * - Does not remove default attributes from <script>, <style>, <link>,
   *   <form>, <input>.
   * - Does not remove values from boolean tag attributes.
   * - Does not remove "javascript:" from in-line event handlers.
   * - Does not remove http:// and https:// protocols.
   * @param {string} htmlString Input HTML to be compressed.
   * @return {string} Compressed version of the HTML.
   */

		html.compress = function compress(htmlString) {
			var preserved = {};
			htmlString = html.preserveBlocks_(htmlString, preserved);
			htmlString = html.simplifyDoctype_(htmlString);
			htmlString = html.removeComments_(htmlString);
			htmlString = html.removeIntertagSpaces_(htmlString);
			htmlString = html.collapseBreakingSpaces_(htmlString);
			htmlString = html.removeSpacesInsideTags_(htmlString);
			htmlString = html.removeSurroundingSpaces_(htmlString);
			htmlString = html.returnBlocks_(htmlString, preserved);
			return htmlString.trim();
		};

		/**
   * Collapses breaking spaces into a single space.
   * @param {string} htmlString
   * @return {string}
   * @protected
   */

		html.collapseBreakingSpaces_ = function collapseBreakingSpaces_(htmlString) {
			return string.collapseBreakingSpaces(htmlString);
		};

		/**
   * Searches for first occurrence of the specified open tag string pattern
   * and from that point finds next ">" position, identified as possible tag
   * end position.
   * @param {string} htmlString
   * @param {string} openTag Open tag string pattern without open tag ending
   *     character, e.g. "<textarea" or "<code".
   * @return {string}
   * @protected
   */

		html.lookupPossibleTagBoundary_ = function lookupPossibleTagBoundary_(htmlString, openTag) {
			var tagPos = htmlString.indexOf(openTag);
			if (tagPos > -1) {
				tagPos += htmlString.substring(tagPos).indexOf('>') + 1;
			}
			return tagPos;
		};

		/**
   * Preserves contents inside any <code>, <pre>, <script>, <style>,
   * <textarea> and conditional comment tags. When preserved, original content
   * are replaced with an unique generated block id and stored into
   * `preserved` map.
   * @param {string} htmlString
   * @param {Object} preserved Object to preserve the content indexed by an
   *     unique generated block id.
   * @return {html} The preserved HTML.
   * @protected
   */

		html.preserveBlocks_ = function preserveBlocks_(htmlString, preserved) {
			htmlString = html.preserveOuterHtml_(htmlString, '<!--[if', '<![endif]-->', preserved);
			htmlString = html.preserveInnerHtml_(htmlString, '<code', '</code', preserved);
			htmlString = html.preserveInnerHtml_(htmlString, '<pre', '</pre', preserved);
			htmlString = html.preserveInnerHtml_(htmlString, '<script', '</script', preserved);
			htmlString = html.preserveInnerHtml_(htmlString, '<style', '</style', preserved);
			htmlString = html.preserveInnerHtml_(htmlString, '<textarea', '</textarea', preserved);
			return htmlString;
		};

		/**
   * Preserves inner contents inside the specified tag. When preserved,
   * original content are replaced with an unique generated block id and
   * stored into `preserved` map.
   * @param {string} htmlString
   * @param {string} openTag Open tag string pattern without open tag ending
   *     character, e.g. "<textarea" or "<code".
   * @param {string} closeTag Close tag string pattern without close tag
   *     ending character, e.g. "</textarea" or "</code".
   * @param {Object} preserved Object to preserve the content indexed by an
   *     unique generated block id.
   * @return {html} The preserved HTML.
   * @protected
   */

		html.preserveInnerHtml_ = function preserveInnerHtml_(htmlString, openTag, closeTag, preserved) {
			var tagPosEnd = html.lookupPossibleTagBoundary_(htmlString, openTag);
			while (tagPosEnd > -1) {
				var tagEndPos = htmlString.indexOf(closeTag);
				htmlString = html.preserveInterval_(htmlString, tagPosEnd, tagEndPos, preserved);
				htmlString = htmlString.replace(openTag, '%%%~1~%%%');
				htmlString = htmlString.replace(closeTag, '%%%~2~%%%');
				tagPosEnd = html.lookupPossibleTagBoundary_(htmlString, openTag);
			}
			htmlString = htmlString.replace(/%%%~1~%%%/g, openTag);
			htmlString = htmlString.replace(/%%%~2~%%%/g, closeTag);
			return htmlString;
		};

		/**
   * Preserves interval of the specified HTML into the preserved map replacing
   * original contents with an unique generated id.
   * @param {string} htmlString
   * @param {Number} start Start interval position to be replaced.
   * @param {Number} end End interval position to be replaced.
   * @param {Object} preserved Object to preserve the content indexed by an
   *     unique generated block id.
   * @return {string} The HTML with replaced interval.
   * @protected
   */

		html.preserveInterval_ = function preserveInterval_(htmlString, start, end, preserved) {
			var blockId = '%%%~BLOCK~' + core.getUid() + '~%%%';
			preserved[blockId] = htmlString.substring(start, end);
			return string.replaceInterval(htmlString, start, end, blockId);
		};

		/**
   * Preserves outer contents inside the specified tag. When preserved,
   * original content are replaced with an unique generated block id and
   * stored into `preserved` map.
   * @param {string} htmlString
   * @param {string} openTag Open tag string pattern without open tag ending
   *     character, e.g. "<textarea" or "<code".
   * @param {string} closeTag Close tag string pattern without close tag
   *     ending character, e.g. "</textarea" or "</code".
   * @param {Object} preserved Object to preserve the content indexed by an
   *     unique generated block id.
   * @return {html} The preserved HTML.
   * @protected
   */

		html.preserveOuterHtml_ = function preserveOuterHtml_(htmlString, openTag, closeTag, preserved) {
			var tagPos = htmlString.indexOf(openTag);
			while (tagPos > -1) {
				var tagEndPos = htmlString.indexOf(closeTag) + closeTag.length;
				htmlString = html.preserveInterval_(htmlString, tagPos, tagEndPos, preserved);
				tagPos = htmlString.indexOf(openTag);
			}
			return htmlString;
		};

		/**
   * Removes all comments of the HTML. Including conditional comments and
   * "<![CDATA[" blocks.
   * @param {string} htmlString
   * @return {string} The HTML without comments.
   * @protected
   */

		html.removeComments_ = function removeComments_(htmlString) {
			var preserved = {};
			htmlString = html.preserveOuterHtml_(htmlString, '<![CDATA[', ']]>', preserved);
			htmlString = html.preserveOuterHtml_(htmlString, '<!--', '-->', preserved);
			htmlString = html.replacePreservedBlocks_(htmlString, preserved, '');
			return htmlString;
		};

		/**
   * Removes spaces between tags, even from inline-block elements.
   * @param {string} htmlString
   * @return {string} The HTML without spaces between tags.
   * @protected
   */

		html.removeIntertagSpaces_ = function removeIntertagSpaces_(htmlString) {
			htmlString = htmlString.replace(html.Patterns.INTERTAG_CUSTOM_CUSTOM, '~%%%%%%~');
			htmlString = htmlString.replace(html.Patterns.INTERTAG_CUSTOM_TAG, '~%%%<');
			htmlString = htmlString.replace(html.Patterns.INTERTAG_TAG, '><');
			htmlString = htmlString.replace(html.Patterns.INTERTAG_TAG_CUSTOM, '>%%%~');
			return htmlString;
		};

		/**
   * Removes spaces inside tags.
   * @param {string} htmlString
   * @return {string} The HTML without spaces inside tags.
   * @protected
   */

		html.removeSpacesInsideTags_ = function removeSpacesInsideTags_(htmlString) {
			htmlString = htmlString.replace(html.Patterns.TAG_END_SPACES, '$1$2');
			htmlString = htmlString.replace(html.Patterns.TAG_QUOTE_SPACES, '=$1$2$3');
			return htmlString;
		};

		/**
   * Removes spaces surrounding tags.
   * @param {string} htmlString
   * @return {string} The HTML without spaces surrounding tags.
   * @protected
   */

		html.removeSurroundingSpaces_ = function removeSurroundingSpaces_(htmlString) {
			return htmlString.replace(html.Patterns.SURROUNDING_SPACES, '$1');
		};

		/**
   * Restores preserved map keys inside the HTML. Note that the passed HTML
   * should contain the unique generated block ids to be replaced.
   * @param {string} htmlString
   * @param {Object} preserved Object to preserve the content indexed by an
   *     unique generated block id.
   * @param {string} replaceValue The value to replace any block id inside the
   * HTML.
   * @return {string}
   * @protected
   */

		html.replacePreservedBlocks_ = function replacePreservedBlocks_(htmlString, preserved, replaceValue) {
			for (var blockId in preserved) {
				htmlString = htmlString.replace(blockId, replaceValue);
			}
			return htmlString;
		};

		/**
   * Simplifies DOCTYPE declaration to <!DOCTYPE html>.
   * @param {string} htmlString
   * @return {string}
   * @protected
   */

		html.simplifyDoctype_ = function simplifyDoctype_(htmlString) {
			var preserved = {};
			htmlString = html.preserveOuterHtml_(htmlString, '<!DOCTYPE', '>', preserved);
			htmlString = html.replacePreservedBlocks_(htmlString, preserved, '<!DOCTYPE html>');
			return htmlString;
		};

		/**
   * Restores preserved map original contents inside the HTML. Note that the
   * passed HTML should contain the unique generated block ids to be restored.
   * @param {string} htmlString
   * @param {Object} preserved Object to preserve the content indexed by an
   *     unique generated block id.
   * @return {string}
   * @protected
   */

		html.returnBlocks_ = function returnBlocks_(htmlString, preserved) {
			for (var blockId in preserved) {
				htmlString = htmlString.replace(blockId, preserved[blockId]);
			}
			return htmlString;
		};

		return html;
	})();

	/**
  * HTML regex patterns.
  * @enum {RegExp}
  * @protected
  */

	html.Patterns = {
		/**
   * @type {RegExp}
   */
		INTERTAG_CUSTOM_CUSTOM: /~%%%\s+%%%~/g,

		/**
   * @type {RegExp}
   */
		INTERTAG_TAG_CUSTOM: />\s+%%%~/g,

		/**
   * @type {RegExp}
   */
		INTERTAG_CUSTOM_TAG: /~%%%\s+</g,

		/**
   * @type {RegExp}
   */
		INTERTAG_TAG: />\s+</g,

		/**
   * @type {RegExp}
   */
		SURROUNDING_SPACES: /\s*(<[^>]+>)\s*/g,

		/**
   * @type {RegExp}
   */
		TAG_END_SPACES: /(<(?:[^>]+?))(?:\s+?)(\/?>)/g,

		/**
   * @type {RegExp}
   */
		TAG_QUOTE_SPACES: /\s*=\s*(["']?)\s*(.*?)\s*(\1)/g
	};

	this.steel.html = html;
}).call(this);
'use strict';

(function () {
	var core = this.steel.core;
	var array = this.steel.array;
	var Disposable = this.steel.Disposable;
	var EventHandle = this.steel.EventHandle;

	/**
  * EventEmitter utility.
  * @constructor
  * @extends {Disposable}
  */

	var EventEmitter = (function (_Disposable) {
		babelHelpers.inherits(EventEmitter, _Disposable);

		function EventEmitter() {
			babelHelpers.classCallCheck(this, EventEmitter);

			/**
    * Holds event listeners scoped by event type.
    * @type {!Object<string, !Array<!function()>>}
    * @protected
    */

			var _this = babelHelpers.possibleConstructorReturn(this, _Disposable.call(this));

			_this.events_ = [];

			/**
    * The maximum number of listeners allowed for each event type. If the number
    * becomes higher than the max, a warning will be issued.
    * @type {number}
    * @protected
    */
			_this.maxListeners_ = 10;

			/**
    * Configuration option which determines if an event facade should be sent
    * as a param of listeners when emitting events. If set to true, the facade
    * will be passed as the first argument of the listener.
    * @type {boolean}
    * @protected
    */
			_this.shouldUseFacade_ = false;
			return _this;
		}

		/**
   * Adds a listener to the end of the listeners array for the specified events.
   * @param {!(Array|string)} events
   * @param {!Function} listener
   * @param {boolean} opt_default Flag indicating if this listener is a default
   *   action for this event. Default actions are run last, and only if no previous
   *   listener call `preventDefault()` on the received event facade.
   * @return {!EventHandle} Can be used to remove the listener.
   */

		EventEmitter.prototype.addListener = function addListener(events, listener, opt_default) {
			this.validateListener_(listener);

			events = this.normalizeEvents_(events);
			for (var i = 0; i < events.length; i++) {
				this.addSingleListener_(events[i], listener, opt_default);
			}

			return new EventHandle(this, events, listener);
		};

		/**
   * Adds a listener to the end of the listeners array for a single event.
   * @param {string} event
   * @param {!Function} listener
   * @param {boolean} opt_default Flag indicating if this listener is a default
   *   action for this event. Default actions are run last, and only if no previous
   *   listener call `preventDefault()` on the received event facade.
   * @return {!EventHandle} Can be used to remove the listener.
   * @param {Function=} opt_origin The original function that was added as a
   *   listener, if there is any.
   * @protected
   */

		EventEmitter.prototype.addSingleListener_ = function addSingleListener_(event, listener, opt_default, opt_origin) {
			this.emit('newListener', event, listener);

			if (!this.events_[event]) {
				this.events_[event] = [];
			}
			this.events_[event].push({
				default: opt_default,
				fn: listener,
				origin: opt_origin
			});

			var listeners = this.events_[event];
			if (listeners.length > this.maxListeners_ && !listeners.warned) {
				console.warn('Possible EventEmitter memory leak detected. %d listeners added ' + 'for event %s. Use emitter.setMaxListeners() to increase limit.', listeners.length, event);
				listeners.warned = true;
			}
		};

		/**
   * Disposes of this instance's object references.
   * @override
   */

		EventEmitter.prototype.disposeInternal = function disposeInternal() {
			this.events_ = [];
		};

		/**
   * Execute each of the listeners in order with the supplied arguments.
   * @param {string} event
   * @param {*} opt_args [arg1], [arg2], [...]
   * @return {boolean} Returns true if event had listeners, false otherwise.
   */

		EventEmitter.prototype.emit = function emit(event) {
			var args = array.slice(arguments, 1);
			var listeners = (this.events_[event] || []).concat();

			var facade;
			if (this.getShouldUseFacade()) {
				facade = {
					preventDefault: function preventDefault() {
						facade.preventedDefault = true;
					},
					target: this,
					type: event
				};
				args.push(facade);
			}

			var defaultListeners = [];
			for (var i = 0; i < listeners.length; i++) {
				if (listeners[i].default) {
					defaultListeners.push(listeners[i]);
				} else {
					listeners[i].fn.apply(this, args);
				}
			}
			if (!facade || !facade.preventedDefault) {
				for (var j = 0; j < defaultListeners.length; j++) {
					defaultListeners[j].fn.apply(this, args);
				}
			}

			if (event !== '*') {
				this.emit.apply(this, ['*', event].concat(args));
			}

			return listeners.length > 0;
		};

		/**
   * Gets the configuration option which determines if an event facade should
   * be sent as a param of listeners when emitting events. If set to true, the
   * facade will be passed as the first argument of the listener.
   * @return {boolean}
   */

		EventEmitter.prototype.getShouldUseFacade = function getShouldUseFacade() {
			return this.shouldUseFacade_;
		};

		/**
   * Returns an array of listeners for the specified event.
   * @param {string} event
   * @return {Array} Array of listeners.
   */

		EventEmitter.prototype.listeners = function listeners(event) {
			return (this.events_[event] || []).map(function (listener) {
				return listener.fn;
			});
		};

		/**
   * Adds a listener that will be invoked a fixed number of times for the
   * events. After each event is triggered the specified amount of times, the
   * listener is removed for it.
   * @param {!(Array|string)} events
   * @param {number} amount The amount of times this event should be listened
   * to.
   * @param {!Function} listener
   * @return {!EventHandle} Can be used to remove the listener.
   */

		EventEmitter.prototype.many = function many(events, amount, listener) {
			events = this.normalizeEvents_(events);
			for (var i = 0; i < events.length; i++) {
				this.many_(events[i], amount, listener);
			}

			return new EventHandle(this, events, listener);
		};

		/**
   * Adds a listener that will be invoked a fixed number of times for a single
   * event. After the event is triggered the specified amount of times, the
   * listener is removed.
   * @param {string} event
   * @param {number} amount The amount of times this event should be listened
   * to.
   * @param {!Function} listener
   * @protected
   */

		EventEmitter.prototype.many_ = function many_(event, amount, listener) {
			var self = this;

			if (amount <= 0) {
				return;
			}

			function handlerInternal() {
				if (--amount === 0) {
					self.removeListener(event, handlerInternal);
				}
				listener.apply(self, arguments);
			}

			self.addSingleListener_(event, handlerInternal, false, listener);
		};

		/**
   * Checks if a listener object matches the given listener function. To match,
   * it needs to either point to that listener or have it as its origin.
   * @param {!Object} listenerObj
   * @param {!Function} listener
   * @return {boolean}
   * @protected
   */

		EventEmitter.prototype.matchesListener_ = function matchesListener_(listenerObj, listener) {
			return listenerObj.fn === listener || listenerObj.origin && listenerObj.origin === listener;
		};

		/**
   * Converts the parameter to an array if only one event is given.
   * @param  {!(Array|string)} events
   * @return {!Array}
   * @protected
   */

		EventEmitter.prototype.normalizeEvents_ = function normalizeEvents_(events) {
			return core.isString(events) ? [events] : events;
		};

		/**
   * Removes a listener for the specified events.
   * Caution: changes array indices in the listener array behind the listener.
   * @param {!(Array|string)} events
   * @param {!Function} listener
   * @return {!Object} Returns emitter, so calls can be chained.
   */

		EventEmitter.prototype.off = function off(events, listener) {
			this.validateListener_(listener);

			events = this.normalizeEvents_(events);
			for (var i = 0; i < events.length; i++) {
				var listenerObjs = this.events_[events[i]] || [];
				this.removeMatchingListenerObjs_(listenerObjs, listener);
			}

			return this;
		};

		/**
   * Adds a listener to the end of the listeners array for the specified events.
   * @param {!(Array|string)} events
   * @param {!Function} listener
   * @return {!EventHandle} Can be used to remove the listener.
   */

		EventEmitter.prototype.on = function on() {
			return this.addListener.apply(this, arguments);
		};

		/**
   * Adds a one time listener for the events. This listener is invoked only the
   * next time each event is fired, after which it is removed.
   * @param {!(Array|string)} events
   * @param {!Function} listener
   * @return {!EventHandle} Can be used to remove the listener.
   */

		EventEmitter.prototype.once = function once(events, listener) {
			return this.many(events, 1, listener);
		};

		/**
   * Removes all listeners, or those of the specified events. It's not a good
   * idea to remove listeners that were added elsewhere in the code,
   * especially when it's on an emitter that you didn't create.
   * @param {(Array|string)=} opt_events
   * @return {!Object} Returns emitter, so calls can be chained.
   */

		EventEmitter.prototype.removeAllListeners = function removeAllListeners(opt_events) {
			if (opt_events) {
				var events = this.normalizeEvents_(opt_events);
				for (var i = 0; i < events.length; i++) {
					this.events_[events[i]] = null;
				}
			} else {
				this.events_ = {};
			}
			return this;
		};

		/**
   * Removes all listener objects from the given array that match the given
   * listener function.
   * @param {!Array.<Object>} listenerObjs
   * @param {!Function} listener
   * @protected
   */

		EventEmitter.prototype.removeMatchingListenerObjs_ = function removeMatchingListenerObjs_(listenerObjs, listener) {
			for (var i = listenerObjs.length - 1; i >= 0; i--) {
				if (this.matchesListener_(listenerObjs[i], listener)) {
					listenerObjs.splice(i, 1);
				}
			}
		};

		/**
   * Removes a listener for the specified events.
   * Caution: changes array indices in the listener array behind the listener.
   * @param {!(Array|string)} events
   * @param {!Function} listener
   * @return {!Object} Returns emitter, so calls can be chained.
   */

		EventEmitter.prototype.removeListener = function removeListener() {
			return this.off.apply(this, arguments);
		};

		/**
   * By default EventEmitters will print a warning if more than 10 listeners
   * are added for a particular event. This is a useful default which helps
   * finding memory leaks. Obviously not all Emitters should be limited to 10.
   * This function allows that to be increased. Set to zero for unlimited.
   * @param {number} max The maximum number of listeners.
   * @return {!Object} Returns emitter, so calls can be chained.
   */

		EventEmitter.prototype.setMaxListeners = function setMaxListeners(max) {
			this.maxListeners_ = max;
			return this;
		};

		/**
   * Sets the configuration option which determines if an event facade should
   * be sent as a param of listeners when emitting events. If set to true, the
   * facade will be passed as the first argument of the listener.
   * @param {boolean} shouldUseFacade
   * @return {!Object} Returns emitter, so calls can be chained.
   */

		EventEmitter.prototype.setShouldUseFacade = function setShouldUseFacade(shouldUseFacade) {
			this.shouldUseFacade_ = shouldUseFacade;
			return this;
		};

		/**
   * Checks if the given listener is valid, throwing an exception when it's not.
   * @param  {*} listener
   * @protected
   */

		EventEmitter.prototype.validateListener_ = function validateListener_(listener) {
			if (!core.isFunction(listener)) {
				throw new TypeError('Listener must be a function');
			}
		};

		return EventEmitter;
	})(Disposable);

	EventEmitter.prototype.registerMetalComponent && EventEmitter.prototype.registerMetalComponent(EventEmitter, 'EventEmitter')
	this.steel.EventEmitter = EventEmitter;
}).call(this);
/*!
 * Polyfill from Google's Closure Library.
 * Copyright 2013 The Closure Library Authors. All Rights Reserved.
 */

'use strict';

(function () {
	var core = this.steel.core;

	var async = {};

	/**
  * Throw an item without interrupting the current execution context.  For
  * example, if processing a group of items in a loop, sometimes it is useful
  * to report an error while still allowing the rest of the batch to be
  * processed.
  * @param {*} exception
  */
	async.throwException = function (exception) {
		// Each throw needs to be in its own context.
		async.nextTick(function () {
			throw exception;
		});
	};

	/**
  * Fires the provided callback just before the current callstack unwinds, or as
  * soon as possible after the current JS execution context.
  * @param {function(this:THIS)} callback
  * @param {THIS=} opt_context Object to use as the "this value" when calling
  *     the provided function.
  * @template THIS
  */
	async.run = function (callback, opt_context) {
		if (!async.run.workQueueScheduled_) {
			// Nothing is currently scheduled, schedule it now.
			async.nextTick(async.run.processWorkQueue);
			async.run.workQueueScheduled_ = true;
		}

		async.run.workQueue_.push(new async.run.WorkItem_(callback, opt_context));
	};

	/** @private {boolean} */
	async.run.workQueueScheduled_ = false;

	/** @private {!Array.<!async.run.WorkItem_>} */
	async.run.workQueue_ = [];

	/**
  * Run any pending async.run work items. This function is not intended
  * for general use, but for use by entry point handlers to run items ahead of
  * async.nextTick.
  */
	async.run.processWorkQueue = function () {
		// NOTE: additional work queue items may be pushed while processing.
		while (async.run.workQueue_.length) {
			// Don't let the work queue grow indefinitely.
			var workItems = async.run.workQueue_;
			async.run.workQueue_ = [];
			for (var i = 0; i < workItems.length; i++) {
				var workItem = workItems[i];
				try {
					workItem.fn.call(workItem.scope);
				} catch (e) {
					async.throwException(e);
				}
			}
		}

		// There are no more work items, reset the work queue.
		async.run.workQueueScheduled_ = false;
	};

	/**
  * @constructor
  * @final
  * @struct
  * @private
  *
  * @param {function()} fn
  * @param {Object|null|undefined} scope
  */
	async.run.WorkItem_ = function (fn, scope) {
		/** @const */
		this.fn = fn;
		/** @const */
		this.scope = scope;
	};

	/**
  * Fires the provided callbacks as soon as possible after the current JS
  * execution context. setTimeout(…, 0) always takes at least 5ms for legacy
  * reasons.
  * @param {function(this:SCOPE)} callback Callback function to fire as soon as
  *     possible.
  * @param {SCOPE=} opt_context Object in whose scope to call the listener.
  * @template SCOPE
  */
	async.nextTick = function (callback, opt_context) {
		var cb = callback;
		if (opt_context) {
			cb = callback.bind(opt_context);
		}
		cb = async.nextTick.wrapCallback_(cb);
		// Introduced and currently only supported by IE10.
		if (core.isFunction(window.setImmediate)) {
			window.setImmediate(cb);
			return;
		}
		// Look for and cache the custom fallback version of setImmediate.
		if (!async.nextTick.setImmediate_) {
			async.nextTick.setImmediate_ = async.nextTick.getSetImmediateEmulator_();
		}
		async.nextTick.setImmediate_(cb);
	};

	/**
  * Cache for the setImmediate implementation.
  * @type {function(function())}
  * @private
  */
	async.nextTick.setImmediate_ = null;

	/**
  * Determines the best possible implementation to run a function as soon as
  * the JS event loop is idle.
  * @return {function(function())} The "setImmediate" implementation.
  * @private
  */
	async.nextTick.getSetImmediateEmulator_ = function () {
		// Create a private message channel and use it to postMessage empty messages
		// to ourselves.
		var Channel = window.MessageChannel;
		// If MessageChannel is not available and we are in a browser, implement
		// an iframe based polyfill in browsers that have postMessage and
		// document.addEventListener. The latter excludes IE8 because it has a
		// synchronous postMessage implementation.
		if (typeof Channel === 'undefined' && typeof window !== 'undefined' && window.postMessage && window.addEventListener) {
			/** @constructor */
			Channel = function () {
				// Make an empty, invisible iframe.
				var iframe = document.createElement('iframe');
				iframe.style.display = 'none';
				iframe.src = '';
				document.documentElement.appendChild(iframe);
				var win = iframe.contentWindow;
				var doc = win.document;
				doc.open();
				doc.write('');
				doc.close();
				var message = 'callImmediate' + Math.random();
				var origin = win.location.protocol + '//' + win.location.host;
				var onmessage = (function (e) {
					// Validate origin and message to make sure that this message was
					// intended for us.
					if (e.origin !== origin && e.data !== message) {
						return;
					}
					this.port1.onmessage();
				}).bind(this);
				win.addEventListener('message', onmessage, false);
				this.port1 = {};
				this.port2 = {
					postMessage: function postMessage() {
						win.postMessage(message, origin);
					}
				};
			};
		}
		if (typeof Channel !== 'undefined') {
			var channel = new Channel();
			// Use a fifo linked list to call callbacks in the right order.
			var head = {};
			var tail = head;
			channel.port1.onmessage = function () {
				head = head.next;
				var cb = head.cb;
				head.cb = null;
				cb();
			};
			return function (cb) {
				tail.next = {
					cb: cb
				};
				tail = tail.next;
				channel.port2.postMessage(0);
			};
		}
		// Implementation for IE6-8: Script elements fire an asynchronous
		// onreadystatechange event when inserted into the DOM.
		if (typeof document !== 'undefined' && 'onreadystatechange' in document.createElement('script')) {
			return function (cb) {
				var script = document.createElement('script');
				script.onreadystatechange = function () {
					// Clean up and call the callback.
					script.onreadystatechange = null;
					script.parentNode.removeChild(script);
					script = null;
					cb();
					cb = null;
				};
				document.documentElement.appendChild(script);
			};
		}
		// Fall back to setTimeout with 0. In browsers this creates a delay of 5ms
		// or more.
		return function (cb) {
			setTimeout(cb, 0);
		};
	};

	/**
  * Helper function that is overrided to protect callbacks with entry point
  * monitor if the application monitors entry points.
  * @param {function()} callback Callback function to fire as soon as possible.
  * @return {function()} The wrapped callback.
  * @private
  */
	async.nextTick.wrapCallback_ = function (opt_returnValue) {
		return opt_returnValue;
	};

	this.steel.async = async;
}).call(this);
'use strict';

(function () {
	var array = this.steel.array;
	var core = this.steel.core;
	var object = this.steel.object;
	var EventEmitter = this.steel.EventEmitter;
	var async = this.steel.async;

	/**
  * Attribute adds support for having object properties that can be watched for
  * changes, as well as configured with validators, setters and other options.
  * See the `addAttr` method for a complete list of available attribute
  * configuration options.
  * @constructor
  * @extends {EventEmitter}
  */

	var Attribute = (function (_EventEmitter) {
		babelHelpers.inherits(Attribute, _EventEmitter);

		function Attribute(opt_config) {
			babelHelpers.classCallCheck(this, Attribute);

			/**
    * Object with information about the batch event that is currently
    * scheduled, or null if none is.
    * @type {Object}
    * @protected
    */

			var _this = babelHelpers.possibleConstructorReturn(this, _EventEmitter.call(this));

			_this.scheduledBatchData_ = null;

			/**
    * Object that contains information about all this instance's attributes.
    * @type {!Object<string, !Object>}
    * @protected
    */
			_this.attrsInfo_ = {};

			_this.setShouldUseFacade(true);
			_this.mergeInvalidAttrs_();
			_this.addAttrsFromStaticHint_(opt_config);
			return _this;
		}

		/**
   * Adds the given attribute.
   * @param {string} name The name of the new attribute.
   * @param {Object.<string, *>=} config The configuration object for the new attribute.
   *   This object can have the following keys:
   *   setter - Function for normalizing new attribute values. It receives the new value
   *   that was set, and returns the value that should be stored.
   *   validator - Function that validates new attribute values. When it returns false,
   *   the new value is ignored.
   *   value - The default value for this attribute. Note that setting this to an object
   *   will cause all attribute instances to use the same reference to the object. To
   *   have each attribute instance use a different reference, use the `valueFn` option
   *   instead.
   *   valueFn - A function that returns the default value for this attribute.
   *   writeOnce - Ignores writes to the attribute after it's been first written to. That is,
   *   allows writes only when setting the attribute for the first time.
   * @param {*} initialValue The initial value of the new attribute. This value has higher
   *   precedence than the default value specified in this attribute's configuration.
   */

		Attribute.prototype.addAttr = function addAttr(name, config, initialValue) {
			this.buildAttrInfo_(name, config, initialValue);
			Object.defineProperty(this, name, this.buildAttrPropertyDef_(name));
		};

		/**
   * Adds the given attributes.
   * @param {!Object.<string, !Object>} configs An object that maps the names of all the
   *   attributes to be added to their configuration objects.
   * @param {!Object.<string, *>} initialValues An object that maps the names of
   *   attributes to their initial values. These values have higher precedence than the
   *   default values specified in the attribute configurations.
   * @param {boolean|Object=} opt_defineContext If value is false
   *     `Object.defineProperties` will not be called. If value is a valid
   *     context it will be used as definition context, otherwise `this`
   *     will be the context.
   */

		Attribute.prototype.addAttrs = function addAttrs(configs, initialValues, opt_defineContext) {
			initialValues = initialValues || {};
			var names = Object.keys(configs);

			var props = {};
			for (var i = 0; i < names.length; i++) {
				var name = names[i];
				this.buildAttrInfo_(name, configs[name], initialValues[name]);
				props[name] = this.buildAttrPropertyDef_(name);
			}

			if (opt_defineContext !== false) {
				Object.defineProperties(opt_defineContext || this, props);
			}
		};

		/**
   * Adds attributes from super classes static hint `MyClass.ATTRS = {};`.
   * @param {!Object.<string, !Object>} configs An object that maps the names
   *     of all the attributes to be added to their configuration objects.
   * @protected
   */

		Attribute.prototype.addAttrsFromStaticHint_ = function addAttrsFromStaticHint_(config) {
			var ctor = this.constructor;
			var defineContext = false;
			if (Attribute.mergeAttrsStatic(ctor)) {
				defineContext = ctor.prototype;
			}
			this.addAttrs(ctor.ATTRS_MERGED, config, defineContext);
		};

		/**
   * Checks that the given name is a valid attribute name. If it's not, an error
   * will be thrown.
   * @param {string} name The name to be validated.
   * @throws {Error}
   */

		Attribute.prototype.assertValidAttrName_ = function assertValidAttrName_(name) {
			if (this.constructor.INVALID_ATTRS_MERGED[name]) {
				throw new Error('It\'s not allowed to create an attribute with the name "' + name + '".');
			}
		};

		/**
   * Builds the info object for the requested attribute.
   * @param {string} name The name of the attribute.
   * @param {Object} config The config object of the attribute.
   * @param {*} initialValue The initial value of the attribute.
   * @protected
   */

		Attribute.prototype.buildAttrInfo_ = function buildAttrInfo_(name, config, initialValue) {
			this.assertValidAttrName_(name);

			this.attrsInfo_[name] = {
				config: config || {},
				initialValue: initialValue,
				state: Attribute.States.UNINITIALIZED
			};
		};

		/**
   * Builds the property definition object for the requested attribute.
   * @param {string} name The name of the attribute.
   * @return {!Object}
   * @protected
   */

		Attribute.prototype.buildAttrPropertyDef_ = function buildAttrPropertyDef_(name) {
			return {
				configurable: true,
				enumerable: true,
				get: function get() {
					return this.getAttrValue_(name);
				},
				set: function set(val) {
					this.setAttrValue_(name, val);
				}
			};
		};

		/**
   * Calls the requested function, running the appropriate code for when it's
   * passed as an actual function object or just the function's name.
   * @param {!Function|string} fn Function, or name of the function to run.
   * @param {!Array} An optional array of parameters to be passed to the
   *   function that will be called.
   * @return {*} The return value of the called function.
   * @protected
   */

		Attribute.prototype.callFunction_ = function callFunction_(fn, args) {
			if (core.isString(fn)) {
				return this[fn].apply(this, args);
			} else if (core.isFunction(fn)) {
				return fn.apply(this, args);
			}
		};

		/**
   * Calls the attribute's setter, if there is one.
   * @param {string} name The name of the attribute.
   * @param {*} value The value to be set.
   * @return {*} The final value to be set.
   */

		Attribute.prototype.callSetter_ = function callSetter_(name, value) {
			var info = this.attrsInfo_[name];
			var config = info.config;
			if (config.setter) {
				value = this.callFunction_(config.setter, [value]);
			}
			return value;
		};

		/**
   * Calls the attribute's validator, if there is one.
   * @param {string} name The name of the attribute.
   * @param {*} value The value to be validated.
   * @return {boolean} Flag indicating if value is valid or not.
   */

		Attribute.prototype.callValidator_ = function callValidator_(name, value) {
			var info = this.attrsInfo_[name];
			var config = info.config;
			if (config.validator) {
				return this.callFunction_(config.validator, [value]);
			}
			return true;
		};

		/**
   * Checks if the it's allowed to write on the requested attribute.
   * @param {string} name The name of the attribute.
   * @return {boolean}
   */

		Attribute.prototype.canSetAttribute = function canSetAttribute(name) {
			var info = this.attrsInfo_[name];
			return !info.config.writeOnce || !info.written;
		};

		/**
   * @inheritDoc
   */

		Attribute.prototype.disposeInternal = function disposeInternal() {
			_EventEmitter.prototype.disposeInternal.call(this);
			this.attrsInfo_ = null;
			this.scheduledBatchData_ = null;
		};

		/**
   * Emits the attribute change batch event.
   * @protected
   */

		Attribute.prototype.emitBatchEvent_ = function emitBatchEvent_() {
			if (!this.isDisposed()) {
				var data = this.scheduledBatchData_;
				this.scheduledBatchData_ = null;
				this.emit('attrsChanged', data);
			}
		};

		/**
   * Returns the value of the requested attribute.
   * Note: this can and should be accomplished by accessing the attribute as a regular property.
   * This should only be used in cases where a function is actually needed.
   * @param {string} name
   * @return {*}
   */

		Attribute.prototype.get = function get(name) {
			return this[name];
		};

		/**
   * Gets the config object for the requested attribute.
   * @param {string} name The attribute's name.
   * @return {Object}
   * @protected
   */

		Attribute.prototype.getAttrConfig = function getAttrConfig(name) {
			return (this.attrsInfo_[name] || {}).config;
		};

		/**
   * Returns an object that maps attribute names to their values.
   * @param {Array<string>=} opt_names A list of names of the attributes that should be
   *   returned. If none is given, all attributes will be returned.
   * @return {Object.<string, *>}
   */

		Attribute.prototype.getAttrs = function getAttrs(opt_names) {
			var attrsMap = {};
			var names = opt_names || this.getAttrNames();

			for (var i = 0; i < names.length; i++) {
				attrsMap[names[i]] = this[names[i]];
			}

			return attrsMap;
		};

		/**
   * Returns an array with all attribute names.
   * @return {Array.<string>}
   */

		Attribute.prototype.getAttrNames = function getAttrNames() {
			return Object.keys(this.attrsInfo_);
		};

		/**
   * Gets the value of the specified attribute. This is passed as that attribute's
   * getter to the `Object.defineProperty` call inside the `addAttr` method.
   * @param {string} name The name of the attribute.
   * @return {*}
   * @protected
   */

		Attribute.prototype.getAttrValue_ = function getAttrValue_(name) {
			this.initAttr_(name);

			return this.attrsInfo_[name].value;
		};

		/**
   * Informs of changes to an attributes value through an event. Won't trigger
   * the event if the value hasn't changed or if it's being initialized.
   * @param {string} name The name of the attribute.
   * @param {*} prevVal The previous value of the attribute.
   * @protected
   */

		Attribute.prototype.informChange_ = function informChange_(name, prevVal) {
			if (this.shouldInformChange_(name, prevVal)) {
				var data = {
					attrName: name,
					newVal: this[name],
					prevVal: prevVal
				};
				this.emit(name + 'Changed', data);
				this.scheduleBatchEvent_(data);
			}
		};

		/**
   * Initializes the specified attribute, giving it a first value.
   * @param {string} name The name of the attribute.
   * @protected
   */

		Attribute.prototype.initAttr_ = function initAttr_(name) {
			var info = this.attrsInfo_[name];
			if (info.state !== Attribute.States.UNINITIALIZED) {
				return;
			}

			info.state = Attribute.States.INITIALIZING;
			this.setInitialValue_(name);
			if (!info.written) {
				info.state = Attribute.States.INITIALIZING_DEFAULT;
				this.setDefaultValue_(name);
			}
			info.state = Attribute.States.INITIALIZED;
		};

		/**
   * Merges an array of values for the ATTRS property into a single object.
   * @param {!Array} values The values to be merged.
   * @return {!Object} The merged value.
   * @static
   * @protected
   */

		Attribute.mergeAttrs_ = function mergeAttrs_(values) {
			return object.mixin.apply(null, [{}].concat(values.reverse()));
		};

		/**
   * Merges the ATTRS static variable for the given constructor function.
   * @param  {!Function} ctor Constructor function.
   * @return {boolean} Returns true if merge happens, false otherwise.
   * @static
   */

		Attribute.mergeAttrsStatic = function mergeAttrsStatic(ctor) {
			return core.mergeSuperClassesProperty(ctor, 'ATTRS', Attribute.mergeAttrs_);
		};

		/**
   * Merges the values of the `INVALID_ATTRS` static for the whole hierarchy of
   * the current instance.
   * @protected
   */

		Attribute.prototype.mergeInvalidAttrs_ = function mergeInvalidAttrs_() {
			core.mergeSuperClassesProperty(this.constructor, 'INVALID_ATTRS', function (values) {
				return array.flatten(values).reduce(function (merged, val) {
					if (val) {
						merged[val] = true;
					}
					return merged;
				}, {});
			});
		};

		/**
   * Removes the requested attribute.
   * @param {string} name The name of the attribute.
   */

		Attribute.prototype.removeAttr = function removeAttr(name) {
			this.attrsInfo_[name] = null;
			delete this[name];
		};

		/**
   * Schedules an attribute change batch event to be emitted asynchronously.
   * @param {!Object} attrChangeData Information about an attribute's update.
   * @protected
   */

		Attribute.prototype.scheduleBatchEvent_ = function scheduleBatchEvent_(attrChangeData) {
			if (!this.scheduledBatchData_) {
				async.nextTick(this.emitBatchEvent_, this);
				this.scheduledBatchData_ = {
					changes: {}
				};
			}

			var name = attrChangeData.attrName;
			var changes = this.scheduledBatchData_.changes;
			if (changes[name]) {
				changes[name].newVal = attrChangeData.newVal;
			} else {
				changes[name] = attrChangeData;
			}
		};

		/**
   * Sets the value of the requested attribute.
   * Note: this can and should be accomplished by setting the attribute as a regular property.
   * This should only be used in cases where a function is actually needed.
   * @param {string} name
   * @param {*} value
   * @return {*}
   */

		Attribute.prototype.set = function set(name, value) {
			this[name] = value;
		};

		/**
   * Sets the value of all the specified attributes.
   * @param {!Object.<string,*>} values A map of attribute names to the values they
   *   should be set to.
   */

		Attribute.prototype.setAttrs = function setAttrs(values) {
			var names = Object.keys(values);

			for (var i = 0; i < names.length; i++) {
				this[names[i]] = values[names[i]];
			}
		};

		/**
   * Sets the value of the specified attribute. This is passed as that attribute's
   * setter to the `Object.defineProperty` call inside the `addAttr` method.
   * @param {string} name The name of the attribute.
   * @param {*} value The new value of the attribute.
   * @protected
   */

		Attribute.prototype.setAttrValue_ = function setAttrValue_(name, value) {
			if (!this.canSetAttribute(name) || !this.validateAttrValue_(name, value)) {
				return;
			}

			var info = this.attrsInfo_[name];
			if (info.initialValue === undefined && info.state === Attribute.States.UNINITIALIZED) {
				info.state = Attribute.States.INITIALIZED;
			}

			var prevVal = this[name];
			info.value = this.callSetter_(name, value);
			info.written = true;
			this.informChange_(name, prevVal);
		};

		/**
   * Sets the default value of the requested attribute.
   * @param {string} name The name of the attribute.
   * @return {*}
   */

		Attribute.prototype.setDefaultValue_ = function setDefaultValue_(name) {
			var config = this.attrsInfo_[name].config;

			if (config.value !== undefined) {
				this[name] = config.value;
			} else {
				this[name] = this.callFunction_(config.valueFn);
			}
		};

		/**
   * Sets the initial value of the requested attribute.
   * @param {string} name The name of the attribute.
   * @return {*}
   */

		Attribute.prototype.setInitialValue_ = function setInitialValue_(name) {
			var info = this.attrsInfo_[name];
			if (info.initialValue !== undefined) {
				this[name] = info.initialValue;
				info.initialValue = undefined;
			}
		};

		/**
   * Checks if we should inform about an attributes update. Updates are ignored
   * during attribute initialization. Otherwise, updates to primitive values
   * are only informed when the new value is different from the previous
   * one. Updates to objects (which includes functions and arrays) are always
   * informed outside initialization though, since we can't be sure if all of
   * the internal data has stayed the same.
   * @param {string} name The name of the attribute.
   * @param {*} prevVal The previous value of the attribute.
   * @return {boolean}
   */

		Attribute.prototype.shouldInformChange_ = function shouldInformChange_(name, prevVal) {
			var info = this.attrsInfo_[name];
			return info.state === Attribute.States.INITIALIZED && (core.isObject(prevVal) || prevVal !== this[name]);
		};

		/**
   * Validates the attribute's value, which includes calling the validator defined
   * in the attribute's configuration object, if there is one.
   * @param {string} name The name of the attribute.
   * @param {*} value The value to be validated.
   * @return {boolean} Flag indicating if value is valid or not.
   */

		Attribute.prototype.validateAttrValue_ = function validateAttrValue_(name, value) {
			var info = this.attrsInfo_[name];

			return info.state === Attribute.States.INITIALIZING_DEFAULT || this.callValidator_(name, value);
		};

		return Attribute;
	})(EventEmitter);

	/**
  * A list with attribute names that will automatically be rejected as invalid.
  * Subclasses can define their own invalid attributes by setting this static
  * on their constructors, which will be merged together and handled automatically.
  * @type {!Array<string>}
  */

	Attribute.prototype.registerMetalComponent && Attribute.prototype.registerMetalComponent(Attribute, 'Attribute')
	Attribute.INVALID_ATTRS = ['attrs'];

	/**
  * Constants that represent the states that an attribute can be in.
  * @type {!Object}
  */
	Attribute.States = {
		UNINITIALIZED: 0,
		INITIALIZING: 1,
		INITIALIZING_DEFAULT: 2,
		INITIALIZED: 3
	};

	this.steel.Attribute = Attribute;
}).call(this);
'use strict';

(function () {
	var core = this.steel.core;

	/**
  * The component registry is used to register components, so they can
  * be accessible by name.
  * @type {Object}
  */

	var ComponentRegistry = (function () {
		function ComponentRegistry() {
			babelHelpers.classCallCheck(this, ComponentRegistry);
		}

		/**
   * Gets the constructor function for the given component name, or
   * undefined if it hasn't been registered yet.
   * @param {string} name The component's name.
   * @return {?function}
   * @static
   */

		ComponentRegistry.getConstructor = function getConstructor(name) {
			var constructorFn = ComponentRegistry.components_[name];
			if (!constructorFn) {
				console.error('There\'s no constructor registered for the component ' + 'named ' + name + '. Components need to be registered via ' + 'ComponentRegistry.register.');
			}
			return constructorFn;
		};

		/**
   * Registers a component, so it can be found by its name.
   * @param {!Function} constructorFn The component's constructor function.
   * @param {string=} opt_name Name of the registered component. If none is given
   *   the name defined by the NAME static variable will be used instead. If that
   *   isn't set as well, the name of the constructor function will be used.
   * @static
   */

		ComponentRegistry.register = function register(constructorFn, opt_name) {
			var name = opt_name;
			if (!name) {
				if (constructorFn.hasOwnProperty('NAME')) {
					name = constructorFn.NAME;
				} else {
					name = core.getFunctionName(constructorFn);
				}
			}
			constructorFn.NAME = name;
			ComponentRegistry.components_[name] = constructorFn;
		};

		return ComponentRegistry;
	})();

	/**
  * Holds all registered components, indexed by their names.
  * @type {!Object<string, function()>}
  * @protected
  * @static
  */

	ComponentRegistry.components_ = {};

	this.steel.ComponentRegistry = ComponentRegistry;
}).call(this);
'use strict';

(function () {
	var ComponentRegistry = this.steel.ComponentRegistry;
	var Disposable = this.steel.Disposable;

	var ComponentCollector = (function (_Disposable) {
		babelHelpers.inherits(ComponentCollector, _Disposable);

		function ComponentCollector() {
			babelHelpers.classCallCheck(this, ComponentCollector);
			return babelHelpers.possibleConstructorReturn(this, _Disposable.apply(this, arguments));
		}

		/**
   * Adds a component to this collector.
   * @param {!Component} component
   */

		ComponentCollector.prototype.addComponent = function addComponent(component) {
			ComponentCollector.components[component.id] = component;
		};

		/**
   * Creates the appropriate component from the given config data if it doesn't
   * exist yet.
   * @param {string} componentName The name of the component to be created.
   * @param {string} id The id of the component to be created.
   * @param {Object=} opt_data
   * @return {!Component} The component instance.
   */

		ComponentCollector.prototype.createComponent = function createComponent(componentName, id, opt_data) {
			var component = ComponentCollector.components[id];
			if (!component) {
				var ConstructorFn = ComponentRegistry.getConstructor(componentName);
				var data = opt_data || {};
				data.id = id;
				data.element = '#' + id;
				component = new ConstructorFn(data);
			}
			return component;
		};

		/**
   * Removes the given component from this collector.
   * @param {!Component} component
   */

		ComponentCollector.prototype.removeComponent = function removeComponent(component) {
			delete ComponentCollector.components[component.id];
		};

		/**
   * Updates an existing component instance with new attributes.
   * @param {string} id The id of the component to be created or updated.
   * @param {Object=} opt_data
   * @return {Component} The extracted component instance.
   */

		ComponentCollector.prototype.updateComponent = function updateComponent(id, opt_data) {
			var component = ComponentCollector.components[id];
			if (component && opt_data) {
				component.setAttrs(opt_data);
			}
			return component;
		};

		return ComponentCollector;
	})(Disposable);

	/**
  * Holds all collected components, indexed by their id.
  * @type {!Object<string, !Component>}
  */

	ComponentCollector.prototype.registerMetalComponent && ComponentCollector.prototype.registerMetalComponent(ComponentCollector, 'ComponentCollector')
	ComponentCollector.components = {};

	this.steel.ComponentCollector = ComponentCollector;
}).call(this);
'use strict'

/**
 * Base class that component renderers should extend from. It defines the
 * required methods all renderers should have.
 */
;
(function () {
	var ComponentRenderer = (function () {
		function ComponentRenderer() {
			babelHelpers.classCallCheck(this, ComponentRenderer);
		}

		/**
   * Returns the content, as a string, that should be rendered for
   * the given component's surface.
   * @param {!Object} surface The surface configuration.
   * @param {!Component} component The component instance.
   * @param {string=} opt_skipContents True if only the element's tag needs to be rendered.
   * @return {string} The content to be rendered, as a string. Nested surfaces can be
   *   represented by placeholders in the format specified by Component.SURFACE_REGEX.
   *   Also, if the string content's main wrapper has the surface's id, then it
   *   will be used to render the main surface tag.
   */

		ComponentRenderer.getSurfaceContent = function getSurfaceContent() {};

		return ComponentRenderer;
	})();

	this.steel.ComponentRenderer = ComponentRenderer;
}).call(this);
'use strict';

(function () {
	var core = this.steel.core;
	var dom = this.steel.dom;
	var Disposable = this.steel.Disposable;

	/**
  * EventEmitterProxy utility. It's responsible for linking two EventEmitter
  * instances together, emitting events from the first emitter through the
  * second one. That means that listening to a supported event on the target
  * emitter will mean listening to it on the origin emitter as well.
  * @param {EventEmitter | Element} originEmitter Events originated on this emitter
  *   will be fired for the target emitter's listeners as well. Can be either a real
  *   EventEmitter instance or a DOM element.
  * @param {EventEmitter} targetEmitter Event listeners attached to this emitter
  *   will also be triggered when the event is fired by the origin emitter.
  * @param {Object} opt_blacklist Optional blacklist of events that should not be
  *   proxied.
  * @constructor
  * @extends {Disposable}
  */

	var EventEmitterProxy = (function (_Disposable) {
		babelHelpers.inherits(EventEmitterProxy, _Disposable);

		function EventEmitterProxy(originEmitter, targetEmitter, opt_blacklist, opt_whitelist) {
			babelHelpers.classCallCheck(this, EventEmitterProxy);

			/**
    * Map of events that should not be proxied.
    * @type {Object}
    * @protected
    */

			var _this = babelHelpers.possibleConstructorReturn(this, _Disposable.call(this));

			_this.blacklist_ = opt_blacklist || {};

			/**
    * The origin emitter. This emitter's events will be proxied through the
    * target emitter.
    * @type {EventEmitter}
    * @protected
    */
			_this.originEmitter_ = originEmitter;

			/**
    * Holds a map of events from the origin emitter that are already being proxied.
    * @type {Object}
    * @protected
    */
			_this.proxiedEvents_ = {};

			/**
    * The target emitter. This emitter will emit all events that come from
    * the origin emitter.
    * @type {EventEmitter}
    * @protected
    */
			_this.targetEmitter_ = targetEmitter;

			/**
    * Map of events that should be proxied. If whitelist is set blacklist is ignored.
    * @type {Object}
    * @protected
    */
			_this.whitelist_ = opt_whitelist;

			_this.startProxy_();
			return _this;
		}

		/**
   * @inheritDoc
   */

		EventEmitterProxy.prototype.disposeInternal = function disposeInternal() {
			var removeFnName = this.originEmitter_.removeEventListener ? 'removeEventListener' : 'removeListener';
			for (var event in this.proxiedEvents_) {
				this.originEmitter_[removeFnName](event, this.proxiedEvents_[event]);
			}

			this.proxiedEvents_ = null;
			this.originEmitter_ = null;
			this.targetEmitter_ = null;
		};

		/**
   * Proxies the given event from the origin to the target emitter.
   * @param {string} event
   */

		EventEmitterProxy.prototype.proxyEvent_ = function proxyEvent_(event) {
			if (!this.shouldProxyEvent_(event)) {
				return;
			}

			var self = this;
			this.proxiedEvents_[event] = function () {
				var args = [event].concat(Array.prototype.slice.call(arguments, 0));
				self.targetEmitter_.emit.apply(self.targetEmitter_, args);
			};

			if (core.isElement(this.originEmitter_) || core.isDocument(this.originEmitter_)) {
				dom.on(this.originEmitter_, event, this.proxiedEvents_[event]);
			} else {
				this.originEmitter_.on(event, this.proxiedEvents_[event]);
			}
		};

		/**
   * Checks if the given event should be proxied.
   * @param {string} event
   * @return {boolean}
   * @protected
   */

		EventEmitterProxy.prototype.shouldProxyEvent_ = function shouldProxyEvent_(event) {
			if (this.whitelist_ && !this.whitelist_[event]) {
				return false;
			}
			if (this.blacklist_[event]) {
				return false;
			}
			return !this.proxiedEvents_[event] && (!(this.originEmitter_.removeEventListener || this.originEmitter_.addEventListener) || dom.supportsEvent(this.originEmitter_, event));
		};

		/**
   * Starts proxying all events from the origin to the target emitter.
   * @protected
   */

		EventEmitterProxy.prototype.startProxy_ = function startProxy_() {
			this.targetEmitter_.on('newListener', this.proxyEvent_.bind(this));
		};

		return EventEmitterProxy;
	})(Disposable);

	EventEmitterProxy.prototype.registerMetalComponent && EventEmitterProxy.prototype.registerMetalComponent(EventEmitterProxy, 'EventEmitterProxy')
	this.steel.EventEmitterProxy = EventEmitterProxy;
}).call(this);
'use strict';

(function () {
	var Disposable = this.steel.Disposable;

	/**
  * EventHandler utility. It's useful for easily removing a group of
  * listeners from different EventEmitter instances.
  * @constructor
  * @extends {Disposable}
  */

	var EventHandler = (function (_Disposable) {
		babelHelpers.inherits(EventHandler, _Disposable);

		function EventHandler() {
			babelHelpers.classCallCheck(this, EventHandler);

			/**
    * An array that holds the added event handles, so the listeners can be
    * removed later.
    * @type {Array.<EventHandle>}
    * @protected
    */

			var _this = babelHelpers.possibleConstructorReturn(this, _Disposable.call(this));

			_this.eventHandles_ = [];
			return _this;
		}

		/**
   * Adds event handles to be removed later through the `removeAllListeners`
   * method.
   * @param {...(!EventHandle)} var_args
   */

		EventHandler.prototype.add = function add() {
			for (var i = 0; i < arguments.length; i++) {
				this.eventHandles_.push(arguments[i]);
			}
		};

		/**
   * Disposes of this instance's object references.
   * @override
   */

		EventHandler.prototype.disposeInternal = function disposeInternal() {
			this.eventHandles_ = null;
		};

		/**
   * Removes all listeners that have been added through the `add` method.
   */

		EventHandler.prototype.removeAllListeners = function removeAllListeners() {
			for (var i = 0; i < this.eventHandles_.length; i++) {
				this.eventHandles_[i].removeListener();
			}

			this.eventHandles_ = [];
		};

		return EventHandler;
	})(Disposable);

	EventHandler.prototype.registerMetalComponent && EventHandler.prototype.registerMetalComponent(EventHandler, 'EventHandler')
	this.steel.EventHandler = EventHandler;
}).call(this);
'use strict';

(function () {
	var core = this.steel.core;
	var ComponentCollector = this.steel.ComponentCollector;
	var Disposable = this.steel.Disposable;
	var EventHandler = this.steel.EventHandler;

	/**
  * Collects inline events from a passed element, detaching previously
  * attached events that are not being used anymore.
  * @param {Component} component
  * @constructor
  * @extends {Disposable}
  */

	var EventsCollector = (function (_Disposable) {
		babelHelpers.inherits(EventsCollector, _Disposable);

		function EventsCollector(component) {
			babelHelpers.classCallCheck(this, EventsCollector);

			var _this = babelHelpers.possibleConstructorReturn(this, _Disposable.call(this));

			if (!component) {
				throw new Error('The component instance is mandatory');
			}

			/**
    * Holds the component intance.
    * @type {!Component}
    * @protected
    */
			_this.component_ = component;

			/**
    * Holds the attached delegate event handles, indexed by the css selector.
    * @type {!Object<string, EventHandler>}
    * @protected
    */
			_this.eventHandles_ = {};

			/**
    * Holds flags indicating which selectors a group has listeners for.
    * @type {!Object<string, !Object<string, boolean>>}
    * @protected
    */
			_this.groupHasListener_ = {};
			return _this;
		}

		/**
   * Attaches the listener described by the given params, unless it has already
   * been attached.
   * @param {string} eventType
   * @param {string} fnNamesString
   * @param {boolean} permanent
   * @protected
   */

		EventsCollector.prototype.attachListener_ = function attachListener_(eventType, fnNamesString, groupName) {
			var selector = '[data-on' + eventType + '="' + fnNamesString + '"]';

			this.groupHasListener_[groupName][selector] = true;

			if (!this.eventHandles_[selector]) {
				this.eventHandles_[selector] = new EventHandler();
				var fnNames = fnNamesString.split(',');
				for (var i = 0; i < fnNames.length; i++) {
					var fn = this.getListenerFn(fnNames[i]);
					if (fn) {
						this.eventHandles_[selector].add(this.component_.delegate(eventType, selector, this.onEvent_.bind(this, fn)));
					}
				}
			}
		};

		/**
   * Attaches all listeners declared as attributes on the given element and
   * its children.
   * @param {string} content
   * @param {boolean} groupName
   */

		EventsCollector.prototype.attachListeners = function attachListeners(content, groupName) {
			this.groupHasListener_[groupName] = {};
			this.attachListenersFromHtml_(content, groupName);
		};

		/**
   * Attaches listeners found in the given html content.
   * @param {string} content
   * @param {boolean} groupName
   * @protected
   */

		EventsCollector.prototype.attachListenersFromHtml_ = function attachListenersFromHtml_(content, groupName) {
			if (content.indexOf('data-on') === -1) {
				return;
			}
			var regex = /data-on([a-z]+)=['"]([^'"]+)['"]/g;
			var match = regex.exec(content);
			while (match) {
				this.attachListener_(match[1], match[2], groupName);
				match = regex.exec(content);
			}
		};

		/**
   * Removes all previously attached event listeners to the component.
   */

		EventsCollector.prototype.detachAllListeners = function detachAllListeners() {
			for (var selector in this.eventHandles_) {
				if (this.eventHandles_[selector]) {
					this.eventHandles_[selector].removeAllListeners();
				}
			}
			this.eventHandles_ = {};
			this.listenerCounts_ = {};
		};

		/**
   * Detaches all existing listeners that are not being used anymore.
   * @protected
   */

		EventsCollector.prototype.detachUnusedListeners = function detachUnusedListeners() {
			for (var selector in this.eventHandles_) {
				if (this.eventHandles_[selector]) {
					var unused = true;
					for (var groupName in this.groupHasListener_) {
						if (this.groupHasListener_[groupName][selector]) {
							unused = false;
							break;
						}
					}
					if (unused) {
						this.eventHandles_[selector].removeAllListeners();
						this.eventHandles_[selector] = null;
					}
				}
			}
		};

		/**
   * @inheritDoc
   */

		EventsCollector.prototype.disposeInternal = function disposeInternal() {
			this.detachAllListeners();
			this.component_ = null;
		};

		/**
   * Gets the listener function from its name. If the name is prefixed with a
   * component id, the function will be called on that specified component. Otherwise
   * it will be called on this event collector's component instead.
   * @param {string} fnName
   * @return {function()}
   */

		EventsCollector.prototype.getListenerFn = function getListenerFn(fnName) {
			var fnComponent;
			var split = fnName.split(':');
			if (split.length === 2) {
				fnName = split[1];
				fnComponent = ComponentCollector.components[split[0]];
				if (!fnComponent) {
					console.error('No component with the id "' + split[0] + '" has been collected' + 'yet. Make sure that you specify an id for an existing component when ' + 'adding inline listeners.');
				}
			}
			fnComponent = fnComponent || this.component_;
			if (core.isFunction(fnComponent[fnName])) {
				return fnComponent[fnName].bind(fnComponent);
			} else {
				console.error('No function named "' + fnName + '" was found in the component with id "' + fnComponent.id + '". Make sure that you specify valid function names when adding ' + 'inline listeners.');
			}
		};

		/**
   * Checks if this EventsCollector instance has already attached listeners for the given
   * group before.
   * @param  {string} group
   * @return {boolean}
   */

		EventsCollector.prototype.hasAttachedForGroup = function hasAttachedForGroup(group) {
			return !!this.groupHasListener_.hasOwnProperty(group);
		};

		/**
   * Fires when an event that was registered by this collector is triggered. Makes
   * sure that the event was meant for this component and calls the appropriate
   * listener function for it.
   * @param {!function(!Object)} fn
   * @param {!Object} event
   * @return {*} The return value of the call to the listener function, or undefined
   *   if no function was called.
   * @protected
   */

		EventsCollector.prototype.onEvent_ = function onEvent_(fn, event) {
			// This check prevents parent components from handling their child inline listeners.
			var eventComp = event.handledByComponent;
			if (!eventComp || eventComp === this.component_ || event.delegateTarget.contains(eventComp.element)) {
				event.handledByComponent = this.component_;
				return fn(event);
			}
		};

		return EventsCollector;
	})(Disposable);

	EventsCollector.prototype.registerMetalComponent && EventsCollector.prototype.registerMetalComponent(EventsCollector, 'EventsCollector')
	this.steel.EventsCollector = EventsCollector;
}).call(this);
'use strict';

(function () {
	var object = this.steel.object;
	var Disposable = this.steel.Disposable;

	/**
  * Stores surface data to be used later by Components.
  */

	var SurfaceCollector = (function (_Disposable) {
		babelHelpers.inherits(SurfaceCollector, _Disposable);

		function SurfaceCollector() {
			babelHelpers.classCallCheck(this, SurfaceCollector);

			/**
    * Holds all registered surfaces, mapped by their element ids.
    * @type {!Array<!Object>}
    * @protected
    */

			var _this = babelHelpers.possibleConstructorReturn(this, _Disposable.call(this));

			_this.surfaces_ = {};
			return _this;
		}

		/**
   * Adds a surface to this collector.
   * @param {string} surfaceElementId
   * @param {Object=} opt_data Surface data to be stored.
   */

		SurfaceCollector.prototype.addSurface = function addSurface(surfaceElementId, opt_data) {
			if (this.surfaces_[surfaceElementId]) {
				this.updateSurface(surfaceElementId, opt_data);
			} else {
				this.surfaces_[surfaceElementId] = opt_data || {};
				this.surfaces_[surfaceElementId].surfaceElementId = surfaceElementId;
			}
		};

		/**
   * @inheritDoc
   */

		SurfaceCollector.prototype.disposeInternal = function disposeInternal() {
			this.surfaces_ = null;
		};

		/**
   * Gets the data for the given surface id.
   * @param {string} surfaceElementId
   * @return {!Object}
   */

		SurfaceCollector.prototype.getSurface = function getSurface(surfaceElementId) {
			return this.surfaces_[surfaceElementId] ? this.surfaces_[surfaceElementId] : null;
		};

		/**
   * Removes all surfaces from this collector.
   */

		SurfaceCollector.prototype.removeAllSurfaces = function removeAllSurfaces() {
			this.surfaces_ = [];
		};

		/**
   * Removes the surface with the given surface id.
   * @param {string} surfaceElementId
   */

		SurfaceCollector.prototype.removeSurface = function removeSurface(surfaceElementId) {
			this.surfaces_[surfaceElementId] = null;
		};

		/**
   * Updates a surface from this collector.
   * @param {string} surfaceElementId
   * @param {Object=} opt_data Surface data to update the existing data.
   */

		SurfaceCollector.prototype.updateSurface = function updateSurface(surfaceElementId, opt_data) {
			object.mixin(this.surfaces_[surfaceElementId], opt_data);
		};

		return SurfaceCollector;
	})(Disposable);

	SurfaceCollector.prototype.registerMetalComponent && SurfaceCollector.prototype.registerMetalComponent(SurfaceCollector, 'SurfaceCollector')
	this.steel.SurfaceCollector = SurfaceCollector;
}).call(this);
'use strict';

(function () {
	var array = this.steel.array;
	var core = this.steel.core;
	var dom = this.steel.dom;
	var features = this.steel.features;
	var globalEval = this.steel.globalEval;
	var html = this.steel.html;
	var object = this.steel.object;
	var string = this.steel.string;
	var Attribute = this.steel.Attribute;
	var ComponentCollector = this.steel.ComponentCollector;
	var ComponentRegistry = this.steel.ComponentRegistry;
	var ComponentRenderer = this.steel.ComponentRenderer;
	var EventEmitterProxy = this.steel.EventEmitterProxy;
	var EventHandler = this.steel.EventHandler;
	var EventsCollector = this.steel.EventsCollector;
	var SurfaceCollector = this.steel.SurfaceCollector;

	/**
  * Component collects common behaviors to be followed by UI components, such
  * as Lifecycle, bounding box element creation, CSS classes management,
  * events encapsulation and surfaces support. Surfaces are an area of the
  * component that can have information rendered into it. A component
  * manages multiple surfaces. Surfaces are only rendered when its content is
  * modified, representing render performance gains. For each surface, render
  * attributes could be associated, when the render context of a surface gets
  * modified the component Lifecycle re-paints the modified surface
  * automatically. Each component has a `ComponentRenderer`, which is in charge
  * of rendering the surfaces. The renderer to be used is specified by the
  * RENDERER static variable. An example of renderer is the SoyRenderer, which
  * works with soy templates.
  *
  * Example:
  *
  * <code>
  * class CustomComponent extends Component {
  *   constructor(config) {
  *     super(config);
  *   }
  *
  *   attached() {
  *   }
  *
  *   detached() {
  *   }
  * }
  *
  * CustomComponent.RENDERER = MyRenderer;
  *
  * CustomComponent.ATTRS = {
  *   title: { value: 'Title' },
  *   fontSize: { value: '10px' }
  * };
  *
  * CustomComponent.SURFACES = {
  *   header: { renderAttrs: ['title', 'fontSize'] },
  *   bottom: { renderAttrs: ['fontSize'] }
  * };
  * </code>
  *
  * @param {!Object} opt_config An object with the initial values for this component's
  *   attributes.
  * @constructor
  * @extends {Attribute}
  */

	var Component = (function (_Attribute) {
		babelHelpers.inherits(Component, _Attribute);

		function Component(opt_config) {
			babelHelpers.classCallCheck(this, Component);

			/**
    * Holds data about all surfaces that were collected through the
    * `replaceSurfacePlaceholders_` method.
    * @type {!Array}
    * @protected
    */

			var _this = babelHelpers.possibleConstructorReturn(this, _Attribute.call(this, opt_config));

			_this.collectedSurfaces_ = [];

			/**
    * Gets all nested components.
    * @type {!Array<!Component>}
    */
			_this.components = {};

			/**
    * Whether the element is being decorated.
    * @type {boolean}
    * @protected
    */
			_this.decorating_ = false;

			/**
    * Holds events that were listened through the `delegate` Component function.
    * @type {EventHandler}
    * @protected
    */
			_this.delegateEventHandler_ = null;

			/**
    * Instance of `EventEmitterProxy` which proxies events from the component's
    * element to the component itself.
    * @type {EventEmitterProxy}
    * @protected
    */
			_this.elementEventProxy_ = null;

			/**
    * The `EventHandler` instance for events attached from the `events` attribute.
    * @type {!EventHandler}
    * @protected
    */
			_this.eventsAttrHandler_ = new EventHandler();

			/**
    * Collects inline events from html contents.
    * @type {!EventsCollector}
    * @protected
    */
			_this.eventsCollector_ = new EventsCollector(_this);

			/**
    * Holds the number of generated ids for each surface's contents.
    * @type {!Object}
    * @protected
    */
			_this.generatedIdCount_ = {};

			/**
    * Whether the element is in document.
    * @type {boolean}
    */
			_this.inDocument = false;

			/**
    * The initial config option passed to this constructor.
    * @type {!Object}
    * @protected
    */
			_this.initialConfig_ = opt_config || {};

			/**
    * The element ids of all surfaces that were removed on a repaint.
    * @type {!Array<string>}
    * @protected
    */
			_this.removedSurfaces_ = [];

			/**
    * The ids of the surfaces registered by this component.
    * @type {!Object<string, boolean>}
    * @protected
    */
			_this.surfaceIds_ = {};

			/**
    * Whether the element was rendered.
    * @type {boolean}
    */
			_this.wasRendered = false;

			/**
    * The component's element will be appended to the element this variable is
    * set to, unless the user specifies another parent when calling `render` or
    * `attach`.
    * @type {!Element}
    */
			_this.DEFAULT_ELEMENT_PARENT = document.body;

			core.mergeSuperClassesProperty(_this.constructor, 'ELEMENT_CLASSES', _this.mergeElementClasses_);
			core.mergeSuperClassesProperty(_this.constructor, 'ELEMENT_TAG_NAME', array.firstDefinedValue);
			core.mergeSuperClassesProperty(_this.constructor, 'RENDERER', array.firstDefinedValue);
			core.mergeSuperClassesProperty(_this.constructor, 'SURFACE_TAG_NAME', array.firstDefinedValue);
			_this.addSurfacesFromStaticHint_();

			_this.delegateEventHandler_ = new EventHandler();

			_this.created_();
			return _this;
		}

		/**
   * Adds the listeners specified in the given object.
   * @param {Object} events
   * @protected
   */

		Component.prototype.addListenersFromObj_ = function addListenersFromObj_(events) {
			var eventNames = Object.keys(events || {});
			for (var i = 0; i < eventNames.length; i++) {
				var info = this.extractListenerInfo_(events[eventNames[i]]);
				if (info.fn) {
					var handler;
					if (info.selector) {
						handler = this.delegate(eventNames[i], info.selector, info.fn);
					} else {
						handler = this.on(eventNames[i], info.fn);
					}
					this.eventsAttrHandler_.add(handler);
				}
			}
		};

		/**
   * Adds a simple attribute with the given name, if it doesn't exist yet.
   * @param {string} attrName
   * @param {Object=} opt_initialValue Optional initial value for the new attr.
   * @protected
   */

		Component.prototype.addMissingAttr_ = function addMissingAttr_(attrName, initialValue) {
			if (!this.getAttrConfig(attrName)) {
				this.addAttr(attrName, {}, initialValue);
			}
		};

		/**
   * Overrides `addSingleListener_` from `EventEmitter`, so we can create
   * the `EventEmitterProxy` instance only when it's needed for the first
   * time.
   * @param {string} event
   * @param {!Function} listener
   * @param {Function=} opt_origin The original function that was added as a
   *   listener, if there is any.
   * @protected
   * @override
   */

		Component.prototype.addSingleListener_ = function addSingleListener_(event, listener, opt_origin) {
			if (!this.elementEventProxy_ && dom.supportsEvent(this.constructor.ELEMENT_TAG_NAME_MERGED, event)) {
				this.elementEventProxy_ = new EventEmitterProxy(this.element, this);
			}
			_Attribute.prototype.addSingleListener_.call(this, event, listener, opt_origin);
		};

		/**
   * Adds the surface for this component's main element, if it doesn't exist yet.
   * @protected
   */

		Component.prototype.addElementSurface_ = function addElementSurface_() {
			if (!this.surfaceIds_[this.id]) {
				this.addSurface(this.id, {
					componentName: this.getName()
				});
			}
		};

		/**
   * Registers a surface to the component. Surface elements are not
   * automatically appended to the component element.
   * @param {string} surfaceId The surface id to be registered.
   * @param {Object=} opt_surfaceConfig Optional surface configuration.
   * @chainable
   */

		Component.prototype.addSurface = function addSurface(surfaceId, opt_surfaceConfig) {
			var config = opt_surfaceConfig || {};
			var surfaceElementId = this.getSurfaceElementId(surfaceId, config);
			if (this.surfaceIds_[surfaceElementId]) {
				Component.surfacesCollector.updateSurface(surfaceElementId, config);
			} else {
				this.surfaceIds_[surfaceElementId] = true;
				config.cacheState = config.cacheState || Component.Cache.NOT_INITIALIZED;
				Component.surfacesCollector.addSurface(surfaceElementId, config);
				if (config.componentName && surfaceId !== this.id) {
					this.createSubComponent_(config.componentName, surfaceElementId);
				}
			}
			this.cacheSurfaceRenderAttrs_(surfaceElementId, config.renderAttrs);

			return this;
		};

		/**
   * Registers surfaces to the component. Surface elements are not
   * automatically appended to the component element.
   * @param {!Object.<string, Object=>} configs An object that maps the names
   *     of all the surfaces to be added to their configuration objects.
   * @chainable
   */

		Component.prototype.addSurfaces = function addSurfaces(configs) {
			for (var surfaceId in configs) {
				this.addSurface(surfaceId, configs[surfaceId]);
			}
			return this;
		};

		/**
   * Adds surfaces from super classes static hint.
   * @protected
   */

		Component.prototype.addSurfacesFromStaticHint_ = function addSurfacesFromStaticHint_() {
			core.mergeSuperClassesProperty(this.constructor, 'SURFACES', this.mergeObjects_);
			this.surfacesRenderAttrs_ = {};

			var configs = this.constructor.SURFACES_MERGED;
			for (var surfaceId in configs) {
				this.addSurface(surfaceId, object.mixin({}, configs[surfaceId]));
			}
		};

		/**
   * Adds the given surface element ids to the list of removed surfaces,
   * removing their parent reference as well.
   * @param {!Array<string>} surfaceElementIds
   * @protected
   */

		Component.prototype.addToRemovedSurfaces_ = function addToRemovedSurfaces_(surfaceElementIds) {
			for (var i = 0; i < surfaceElementIds.length; i++) {
				var surface = this.getSurface(surfaceElementIds[i]);
				this.removedSurfaces_.push(surface);
				surface.parent = null;
			}
		};

		/**
   * Invokes the attached Lifecycle. When attached, the component element is
   * appended to the DOM and any other action to be performed must be
   * implemented in this method, such as, binding DOM events. A component can
   * be re-attached multiple times.
   * @param {(string|Element)=} opt_parentElement Optional parent element
   *     to render the component.
   * @param {(string|Element)=} opt_siblingElement Optional sibling element
   *     to render the component before it. Relevant when the component needs
   *     to be rendered before an existing element in the DOM, e.g.
   *     `component.render(null, existingElement)`.
   * @protected
   * @chainable
   */

		Component.prototype.attach = function attach(opt_parentElement, opt_siblingElement) {
			if (!this.inDocument) {
				this.renderElement_(opt_parentElement, opt_siblingElement);
				this.inDocument = true;
				if (!this.wasRendered) {
					this.updatePlaceholderSurfaces_();
				}
				this.attached();
			}
			return this;
		};

		/**
   * Lifecycle. When attached, the component element is appended to the DOM
   * and any other action to be performed must be implemented in this method,
   * such as, binding DOM events. A component can be re-attached multiple
   * times, therefore the undo behavior for any action performed in this phase
   * must be implemented on the detach phase.
   */

		Component.prototype.attached = function attached() {};

		/**
   * Builds a fragment element with the given content, so it can be rendered.
   * Any script tags inside the content will be moved to the header, so they can
   * be reevaluated when this content is rendered.
   * @param {string} content
   * @return {!Element}
   */

		Component.prototype.buildFragment_ = function buildFragment_(content) {
			var frag = dom.buildFragment(content);
			if (content.indexOf('<script') === -1) {
				return frag;
			}
			var scripts = frag.querySelectorAll('script');
			for (var i = 0; i < scripts.length; i++) {
				var script = scripts.item(i);
				if (!script.type || script.type === 'text/javascript') {
					globalEval.runScript(script);
				}
			}
			return frag;
		};

		/**
   * Builds a surface placeholder, attaching it to the given data.
   * @param {string} surfaceElementId
   * @param {Object=} opt_data
   * @return {string}
   */

		Component.prototype.buildPlaceholder = function buildPlaceholder(surfaceElementId, opt_data) {
			if (surfaceElementId && opt_data) {
				opt_data.surfaceElementId = surfaceElementId;
				this.addSurface(surfaceElementId, opt_data);
			}
			return '%%%%~s' + (surfaceElementId ? '-' + surfaceElementId : '') + '~%%%%';
		};

		/**
   * Caches the given content for the surface with the requested id.
   * @param {string} surfaceElementId
   * @param {string} content
   */

		Component.prototype.cacheSurfaceContent = function cacheSurfaceContent(surfaceElementId, content) {
			var cacheState = this.computeSurfaceCacheState_(content);
			var surface = this.getSurfaceFromElementId(surfaceElementId);
			surface.cacheState = cacheState;
		};

		/**
   * Caches surface render attributes into a O(k) flat map representation.
   * Relevant for performance to calculate the surfaces group that were
   * modified by attributes mutation.
   * @param {string} surfaceElementId The surface id to be cached into the flat map.
   * @param {Array} renderAttrs The surface's render attrs.
   * @protected
   */

		Component.prototype.cacheSurfaceRenderAttrs_ = function cacheSurfaceRenderAttrs_(surfaceElementId, renderAttrs) {
			var attrs = renderAttrs || [];
			for (var i = 0; i < attrs.length; i++) {
				if (!this.surfacesRenderAttrs_[attrs[i]]) {
					this.surfacesRenderAttrs_[attrs[i]] = {};
					this.addMissingAttr_(attrs[i], this.initialConfig_[attrs[i]]);
				}
				this.surfacesRenderAttrs_[attrs[i]][surfaceElementId] = true;
			}
		};

		/**
   * Checks if the given content has an element tag with the given id.
   * @param {string} content
   * @param {string} id
   * @return {boolean}
   * @protected
   */

		Component.prototype.checkHasElementTag_ = function checkHasElementTag_(content, id) {
			return content.indexOf(' id="' + id + '"') !== -1;
		};

		/**
   * Clears the cache of the specified surface.
   * @param {string} surfaceIds
   */

		Component.prototype.clearSurfaceCache = function clearSurfaceCache(surfaceId) {
			this.getSurface(surfaceId).cacheState = Component.Cache.NOT_INITIALIZED;
		};

		/**
   * Compares cache states.
   * @param {number} currentCacheState
   * @param {number} previousCacheState
   * @return {boolean} True if there's a cache hit, or false for cache miss.
   */

		Component.prototype.compareCacheStates_ = function compareCacheStates_(currentCacheState, previousCacheState) {
			return currentCacheState !== Component.Cache.NOT_INITIALIZED && currentCacheState === previousCacheState;
		};

		/**
   * Computes the cache state for the surface content. If value is string, the
   * cache state is represented by its hashcode.
   * @param {?string} value The value to calculate the cache state.
   * @return {Object} The computed cache state.
   * @protected
   */

		Component.prototype.computeSurfaceCacheState_ = function computeSurfaceCacheState_(value) {
			value = value || '';
			if (features.checkAttrOrderChange()) {
				value = this.convertHtmlToBrowserFormat_(value);
			}
			return string.hashCode(value);
		};

		/**
   * Converts the given html string to the format the current browser uses
   * when html is rendered. This is done by rendering the html in a temporary
   * element, and returning its resulting rendered html.
   * @param {string} htmlString The html to be converted.
   * @return {string}
   * @protected
   */

		Component.prototype.convertHtmlToBrowserFormat_ = function convertHtmlToBrowserFormat_(htmlString) {
			var element = document.createElement('div');
			dom.append(element, htmlString);
			return element.innerHTML;
		};

		/**
   * Creates a surface that was found via a string placeholder.
   * @param {string} parentSurfaceElementId The id of the surface element that contains
   *   the surface to be created, or undefined if there is none.
   * @param {string=} opt_surfaceElementId
   * @return {!Object} The created surface.
   * @protected
   */

		Component.prototype.createPlaceholderSurface_ = function createPlaceholderSurface_(parentSurfaceElementId, opt_surfaceElementId) {
			var surfaceElementId = opt_surfaceElementId;
			if (!core.isDefAndNotNull(surfaceElementId)) {
				surfaceElementId = this.generateSurfaceElementId(parentSurfaceElementId);
			}
			var surface = this.getSurfaceFromElementId(surfaceElementId);
			if (!surface) {
				surface = {
					surfaceElementId: surfaceElementId
				};
				this.addSurface(surfaceElementId, surface);
			}
			return surface;
		};

		/**
   * Creates a sub component.
   * @param {string} componentName
   * @param {string} componentId
   * @return {!Component}
   * @protected
   */

		Component.prototype.createSubComponent_ = function createSubComponent_(componentName, componentId) {
			this.components[componentId] = Component.componentsCollector.createComponent(componentName, componentId, this.getSurfaceFromElementId(componentId).componentData);
			return this.components[componentId];
		};

		/**
   * Creates the surface element with its id namespaced to the component id.
   * @param {string} surfaceElementId The id of the element for the surface to be
   *   created.
   * @return {Element} The surface element.
   * @protected
   */

		Component.prototype.createSurfaceElement_ = function createSurfaceElement_(surfaceElementId) {
			var el = document.createElement(this.constructor.SURFACE_TAG_NAME_MERGED);
			el.id = surfaceElementId;
			return el;
		};

		/**
   * Decorates this component as a subcomponent, meaning that no rendering is
   * needed since it was already rendered by the parent component. Handles the
   * same logics that `renderAsSubComponent`, but also makes sure that the
   * surfaces content is updated if the html is incorrect for the given data.
   * @param {string=} opt_content The content that was already rendered for this
   *   component.
   */

		Component.prototype.decorateAsSubComponent = function decorateAsSubComponent(opt_content) {
			this.decorating_ = true;
			this.renderAsSubComponent(opt_content);
			this.decorating_ = false;
		};

		/**
   * Listens to a delegate event on the component's element.
   * @param {string} eventName The name of the event to listen to.
   * @param {string} selector The selector that matches the child elements that
   *   the event should be triggered for.
   * @param {!function(!Object)} callback Function to be called when the event is
   *   triggered. It will receive the normalized event object.
   * @return {!DomEventHandle} Can be used to remove the listener.
   */

		Component.prototype.delegate = function delegate(eventName, selector, callback) {
			var handle = dom.delegate(this.element, eventName, selector, callback);
			this.delegateEventHandler_.add(handle);
			return handle;
		};

		/**
   * Invokes the detached Lifecycle. When detached, the component element is
   * removed from the DOM and any other action to be performed must be
   * implemented in this method, such as, unbinding DOM events. A component
   * can be detached multiple times.
   * @chainable
   */

		Component.prototype.detach = function detach() {
			if (this.inDocument) {
				if (this.element.parentNode) {
					this.element.parentNode.removeChild(this.element);
				}
				this.inDocument = false;
				this.detached();
			}
			this.eventsCollector_.detachAllListeners();
			return this;
		};

		/**
   * Lifecycle. When detached, the component element is removed from the DOM
   * and any other action to be performed must be implemented in this method,
   * such as, unbinding DOM events. A component can be detached multiple
   * times, therefore the undo behavior for any action performed in this phase
   * must be implemented on the attach phase.
   */

		Component.prototype.detached = function detached() {};

		/**
   * Internal implementation for the creation phase of the component.
   * @protected
   */

		Component.prototype.created_ = function created_() {
			this.on('eventsChanged', this.onEventsChanged_);
			this.addListenersFromObj_(this.events);

			this.on('attrsChanged', this.handleAttributesChanges_);
			Component.componentsCollector.addComponent(this);

			this.on('renderSurface', this.defaultRenderSurfaceFn_, true);
		};

		/**
   * Lifecycle. Creates the component using existing DOM elements. Often the
   * component can be created using existing elements in the DOM to leverage
   * progressive enhancement. Any extra operation necessary to prepare the
   * component DOM must be implemented in this phase. Decorate phase replaces
   * render phase.
   *
   * Decoration Lifecycle:
   *   decorate - Decorate is manually called.
   *   retrieve existing html - The cache for all surfaces is filled with any
   *     existing html from the document.
   *   render surfaces - Surfaces that cause a cache miss are rendered, including
   *     the main content (`getElementContent`).
   *   attribute synchronization - All synchronization methods are called.
   *   attach - Attach Lifecycle is called.
   * @chainable
   */

		Component.prototype.decorate = function decorate() {
			this.decorating_ = true;
			this.render();
			this.decorating_ = false;
			return this;
		};

		/**
   * The default implementation for the `renderSurface` event. Renders
   * content into a surface. If the specified content is the same of the
   * current surface content, nothing happens. If the surface cache state
   * is not initialized or the content is not eligible for cache or content
   * is different, the surfaces re-renders.
   * @param {!Object} data
   * @protected
   */

		Component.prototype.defaultRenderSurfaceFn_ = function defaultRenderSurfaceFn_(data) {
			var surfaceElementId = data.surfaceElementId;
			var surface = this.getSurfaceFromElementId(surfaceElementId);
			if (surface.componentName && surfaceElementId !== this.id) {
				this.renderComponentSurface_(surfaceElementId, data.content);
				return;
			}

			var content = data.content || this.getSurfaceContent_(surfaceElementId);
			var cacheContent = data.cacheContent || content;
			var cacheHit = surface.static;
			if (!surface.static) {
				var previousCacheState = surface.cacheState;
				this.cacheSurfaceContent(surfaceElementId, cacheContent);
				cacheHit = this.compareCacheStates_(surface.cacheState, previousCacheState);
			}

			if (cacheHit) {
				this.renderPlaceholderSurfaceContents_(cacheContent, surfaceElementId);
			} else {
				this.eventsCollector_.attachListeners(cacheContent, surfaceElementId);
				this.replaceSurfaceContent_(surfaceElementId, surface, content);
			}
		};

		/**
   * Calls `dispose` on all subcomponents.
   * @param {!Array<string>} ids
   * @protected
   */

		Component.prototype.disposeSubComponents_ = function disposeSubComponents_(ids) {
			for (var i = 0; i < ids.length; i++) {
				var component = this.components[ids[i]];
				if (!component.isDisposed()) {
					Component.componentsCollector.removeComponent(component);
					component.dispose();
					delete this.components[ids[i]];
				}
			}
		};

		/**
   * @inheritDoc
   */

		Component.prototype.disposeInternal = function disposeInternal() {
			var _this2 = this;

			this.detach();

			if (this.elementEventProxy_) {
				this.elementEventProxy_.dispose();
				this.elementEventProxy_ = null;
			}

			this.delegateEventHandler_.removeAllListeners();
			this.delegateEventHandler_ = null;

			this.disposeSubComponents_(Object.keys(this.components));
			this.components = null;
			this.generatedIdCount_ = null;
			this.surfacesRenderAttrs_ = null;

			this.eventsCollector_.dispose();
			this.eventsCollector_ = null;

			Object.keys(this.surfaceIds_).forEach(function (surfaceId) {
				return _this2.removeSurface(surfaceId);
			});
			this.surfaceIds_ = null;

			_Attribute.prototype.disposeInternal.call(this);
		};

		/**
   * Emits the `renderSurface` event, which will cause the specified surface to be
   * rendered, unless it's prevented.
   * @param {string} surfaceElementId
   * @param {string=} opt_content
   * @param {string=} opt_cacheContent
   * @param {Array<string>=} opt_renderAttrs The render attributes that caused the
   *   surface to be rerendered, or nothing if that wasn't the cause of the update.
   * @protected
   */

		Component.prototype.emitRenderSurfaceEvent_ = function emitRenderSurfaceEvent_(surfaceElementId, opt_content, opt_cacheContent, opt_renderAttrs) {
			this.emit('renderSurface', {
				cacheContent: opt_cacheContent,
				content: opt_content,
				renderAttrs: opt_renderAttrs || [],
				surfaceElementId: surfaceElementId,
				surfaceId: this.getSurfaceId(this.getSurfaceFromElementId(surfaceElementId))
			});
		};

		/**
   * Extracts listener info from the given value.
   * @param {function()|string|{selector:string,fn:function()|string}} value
   * @return {!{selector:string,fn:function()}}
   * @protected
   */

		Component.prototype.extractListenerInfo_ = function extractListenerInfo_(value) {
			var info = {
				fn: value
			};
			if (core.isObject(value) && !core.isFunction(value)) {
				info.selector = value.selector;
				info.fn = value.fn;
			}
			if (core.isString(info.fn)) {
				info.fn = this.eventsCollector_.getListenerFn(info.fn);
			}
			return info;
		};

		/**
   * Fires attributes synchronization changes for attributes.
   * @protected
   */

		Component.prototype.syncAttrs_ = function syncAttrs_() {
			var attrNames = this.getAttrNames();
			for (var i = 0; i < attrNames.length; i++) {
				this.fireAttrChange_(attrNames[i]);
			}
		};

		/**
   * Fires attributes synchronization changes for attributes.
   * @param {Object.<string, Object>} changes Object containing the attribute
   *     name as key and an object with newVal and prevVal as value.
   * @protected
   */

		Component.prototype.syncAttrsFromChanges_ = function syncAttrsFromChanges_(changes) {
			for (var attr in changes) {
				this.fireAttrChange_(attr, changes[attr]);
			}
		};

		/**
   * Finds the element that matches the given id on this component. This searches
   * on the document first, for performance. If the element is not found, it's
   * searched in the component's element directly.
   * @param {string} id
   * @return {Element}
   * @protected
   */

		Component.prototype.findElementById_ = function findElementById_(id) {
			return document.getElementById(id) || this.element && this.element.querySelector('#' + id);
		};

		/**
   * Finds the element with the given id in the given content, if there is one.
   * @param {string} id
   * @param {!Element|string} content
   * @return {Element}
   * @protected
   */

		Component.prototype.findElementInContent_ = function findElementInContent_(id, content) {
			content = core.isString(content) ? dom.buildFragment(content) : content;
			var firstChild = content.childNodes[0];
			if (firstChild && firstChild.id === id) {
				return firstChild;
			}
		};

		/**
   * Fires attribute synchronization change for the attribute.
   * @param {Object.<string, Object>} change Object containing newVal and
   *     prevVal keys.
   * @protected
   */

		Component.prototype.fireAttrChange_ = function fireAttrChange_(attr, opt_change) {
			var fn = this['sync' + attr.charAt(0).toUpperCase() + attr.slice(1)];
			if (core.isFunction(fn)) {
				if (!opt_change) {
					opt_change = {
						newVal: this[attr],
						prevVal: undefined
					};
				}
				fn.call(this, opt_change.newVal, opt_change.prevVal);
			}
		};

		/**
   * Generates an id for a surface that was found inside the contents of the main
   * element or of a parent surface.
   * @param {string} parentSurfaceElementId The id of the parent surface, or undefined
   *   if there is none.
   * @return {string} The generated id.
   */

		Component.prototype.generateSurfaceElementId = function generateSurfaceElementId(parentSurfaceElementId) {
			this.generatedIdCount_[parentSurfaceElementId] = (this.generatedIdCount_[parentSurfaceElementId] || 0) + 1;
			return parentSurfaceElementId + '-s' + this.generatedIdCount_[parentSurfaceElementId];
		};

		/**
   * Gets the html that should be used to build this component's main element with
   * some content.
   * @param {string} content
   * @return {string}
   */

		Component.prototype.getComponentHtml = function getComponentHtml(content) {
			return this.wrapContentIfNecessary(content, this.id, this.constructor.ELEMENT_TAG_NAME_MERGED);
		};

		/**
   * Returns a map of all subcomponents with ids that have the specified prefix.
   * @param {string} prefix
   * @return {!Object<string, !Component>}
   */

		Component.prototype.getComponentsWithPrefix = function getComponentsWithPrefix(prefix) {
			var _this3 = this;

			var ids = Object.keys(this.components).filter(function (id) {
				return id.indexOf(prefix) === 0;
			});
			var map = {};
			ids.forEach(function (id) {
				return map[id] = _this3.components[id];
			});
			return map;
		};

		/**
   * Gets the name of this component. If the `NAME` static variable is set, this will
   * be the component's name. Otherwise, it will be formed from the constructor's
   * function name.
   * @return {string}
   */

		Component.prototype.getName = function getName() {
			return this.constructor.NAME || core.getFunctionName(this.constructor);
		};

		/**
   * Calls `getElementContent` and creating its surface if it hasn't been created yet.
   * @param {string=} opt_skipContents True if only the element's tag needs to be rendered.
   * @return {Object|string} The content to be rendered. If the content is a
   *   string, surfaces can be represented by placeholders in the format specified
   *   by Component.SURFACE_REGEX. Also, if the string content's main wrapper has
   *   the component's id, then it will be used to render the main element tag.
   * @protected
   */

		Component.prototype.getElementContent_ = function getElementContent_(opt_skipContents) {
			this.addElementSurface_();
			return this.getRenderer().getSurfaceContent(this.getSurface(this.id), this, opt_skipContents);
		};

		/**
   * Calls `getElementContent` and replaces all placeholders in the returned content.
   * This is called when rendering sub components, so it also attaches listeners to
   * the original content.
   * @return {string} The content with all placeholders already replaced.
   */

		Component.prototype.getElementExtendedContent = function getElementExtendedContent() {
			var content = this.getElementContent_() || '';
			this.eventsCollector_.attachListeners(content, this.id);
			this.cacheSurfaceContent(this.id, content);
			return this.replaceSurfacePlaceholders_(content, this.id, this.getSurface(this.id));
		};

		/**
   * Gets surfaces that got modified by the specified attributes changes.
   * @param {Object.<string, Object>} changes Object containing the attribute
   *     name as key and an object with newVal and prevVal as value.
   * @return {Object.<string, boolean>} Object containing modified surface ids
   *     as key and true as value.
   */

		Component.prototype.getModifiedSurfacesFromChanges_ = function getModifiedSurfacesFromChanges_(changes) {
			var surfaces = {};
			for (var attr in changes) {
				var surfaceNames = Object.keys(this.surfacesRenderAttrs_[attr] || {});
				for (var i = 0; i < surfaceNames.length; i++) {
					if (!surfaces[surfaceNames[i]]) {
						surfaces[surfaceNames[i]] = [];
					}
					surfaces[surfaceNames[i]].push(attr);
				}
			}
			return surfaces;
		};

		/**
   * Same as `getSurfaceHtml_`, but only called for non component surfaces.
   * @param {string} surfaceElementId
   * @param {string} content
   * @return {string}
   */

		Component.prototype.getNonComponentSurfaceHtml = function getNonComponentSurfaceHtml(surfaceElementId, content) {
			return this.wrapContentIfNecessary(content, surfaceElementId, this.constructor.SURFACE_TAG_NAME_MERGED);
		};

		/**
   * Gets the `ComponentRenderer` object for this component.
   * @return {!ComponentRenderer}
   */

		Component.prototype.getRenderer = function getRenderer() {
			return this.constructor.RENDERER_MERGED;
		};

		/**
   * Gets surface configuration object. If surface is not registered returns
   * null.
   * @param {string} surfaceId The surface id or its element id.
   * @return {Object} The surface configuration object.
   */

		Component.prototype.getSurface = function getSurface(surfaceId) {
			var surface = this.getSurfaceFromElementId(this.getSurfaceElementId(surfaceId));
			return surface ? surface : this.getSurfaceFromElementId(surfaceId);
		};

		/**
   * Gets the content for the requested surface. Calls `getSurfaceContent` for non
   * component surfaces, handling component surfaces automatically.
   * @param {string} surfaceElementId The surface element id.
   * @return {string} The content to be rendered.
   * @protected
   */

		Component.prototype.getSurfaceContent_ = function getSurfaceContent_(surfaceElementId) {
			var surface = this.getSurfaceFromElementId(surfaceElementId);
			if (surface.componentName && surfaceElementId !== this.id) {
				var component = ComponentCollector.components[surfaceElementId];
				if (component.wasRendered) {
					return '';
				} else {
					return component.getElementExtendedContent();
				}
			} else {
				return this.getRenderer().getSurfaceContent(surface, this) || '';
			}
		};

		/**
   * Queries from the document or creates an element for the surface. Surface
   * elements have its surface id namespaced to the component id, e.g. for a
   * component with id `gallery` and a surface with id `pictures` the surface
   * element will be represented by the id `gallery-pictures`. Surface
   * elements must also be appended to the component element.
   * @param {string} surfaceId The surface id.
   * @param {Object=} opt_surface The surface's config. If not given, it will
   *   be fetched.
   * @return {Element} The surface element or null if surface not registered.
   */

		Component.prototype.getSurfaceElement = function getSurfaceElement(surfaceId, opt_surface) {
			var surface = opt_surface || this.getSurface(surfaceId);
			if (!surface) {
				return null;
			}
			if (!surface.element) {
				if (surface.componentName) {
					var component = ComponentCollector.components[surfaceId];
					if (component) {
						surface.element = component.element;
					}
				} else {
					var surfaceElementId = this.getSurfaceElementId(surfaceId, surface);
					surface.element = this.findElementById_(surfaceElementId) || this.createSurfaceElement_(surfaceElementId);
				}
			}
			return surface.element;
		};

		/**
   * Adds the component id as the prefix of the given surface id if necessary.
   * @param {string} surfaceId
   * @param {Object=} opt_surface The surface data.
   * @return {string}
   */

		Component.prototype.getSurfaceElementId = function getSurfaceElementId(surfaceId, opt_surface) {
			var surface = opt_surface || {};
			if (surface.surfaceElementId) {
				return surface.surfaceElementId;
			} else if (surface.componentName || this.hasComponentPrefix_(surfaceId)) {
				return surfaceId;
			} else {
				return this.prefixSurfaceId(surfaceId);
			}
		};

		/**
   * Gets surface configuration object. This is similar to `getSurface`, but
   * receives the surface's element id, while `getSurface` can also receive
   * a local surface id.
   * @param {string} surfaceElementId The surface's element id
   * @return {Object} The surface configuration object.
   */

		Component.prototype.getSurfaceFromElementId = function getSurfaceFromElementId(surfaceElementId) {
			return Component.surfacesCollector.getSurface(surfaceElementId);
		};

		/**
   * Gets the html that should be used to build a surface's main element with its
   * content.
   * @param {!Object} surface
   * @param {string} content
   * @return {string}
   * @protected
   */

		Component.prototype.getSurfaceHtml_ = function getSurfaceHtml_(surface, content) {
			var surfaceElementId = surface.surfaceElementId;
			if (surface.componentName) {
				return ComponentCollector.components[surfaceElementId].getComponentHtml(content);
			} else {
				return this.getNonComponentSurfaceHtml(surfaceElementId, content);
			}
		};

		/**
   * Gets the surface id for the given surface.
   * @param {!Object} surface
   * @return {string}
   */

		Component.prototype.getSurfaceId = function getSurfaceId(surface) {
			if (surface.componentName || !this.hasComponentPrefix_(surface.surfaceElementId)) {
				return surface.surfaceElementId;
			} else {
				return surface.surfaceElementId.substr(this.id.length + 1);
			}
		};

		/**
   * A map of surface ids to the respective surface object.
   * @return {!Object}
   */

		Component.prototype.getSurfaces = function getSurfaces() {
			var surfaces = {};
			Object.keys(this.surfaceIds_).forEach((function (surfaceElementId) {
				var surface = this.getSurfaceFromElementId(surfaceElementId);
				surfaces[this.getSurfaceId(surface)] = surface;
			}).bind(this));
			return surfaces;
		};

		/**
   * Handles attributes batch changes. Responsible for surface mutations and
   * attributes synchronization.
   * @param {Event} event
   * @protected
   */

		Component.prototype.handleAttributesChanges_ = function handleAttributesChanges_(event) {
			if (this.inDocument) {
				this.renderSurfacesContent_(this.getModifiedSurfacesFromChanges_(event.changes));
			}
			this.syncAttrsFromChanges_(event.changes);
			this.emit('attrsSynced', event);
		};

		/**
   * Checks if the given surface id has this component's prefix.
   * @param {string} surfaceId
   * @return {boolean}
   * @protected
   */

		Component.prototype.hasComponentPrefix_ = function hasComponentPrefix_(surfaceId) {
			return surfaceId.substr(0, this.id.length) === this.id && (surfaceId.length === this.id.length || surfaceId[this.id.length] === '-');
		};

		/**
   * Fired when the `events` attribute value is changed.
   * @param {!Object} event
   * @protected
   */

		Component.prototype.onEventsChanged_ = function onEventsChanged_(event) {
			this.eventsAttrHandler_.removeAllListeners();
			this.addListenersFromObj_(event.newVal);
		};

		/**
   * Makes an unique id for the component.
   * @return {string} Unique id.
   * @protected
   */

		Component.prototype.makeId_ = function makeId_() {
			return 'metal_c_' + core.getUid(this);
		};

		/**
   * Merges an array of values for the ELEMENT_CLASSES property into a single object.
   * @param {!Array.<string>} values The values to be merged.
   * @return {!string} The merged value.
   * @protected
   */

		Component.prototype.mergeElementClasses_ = function mergeElementClasses_(values) {
			var marked = {};
			return values.filter(function (val) {
				if (!val || marked[val]) {
					return false;
				} else {
					marked[val] = true;
					return true;
				}
			}).join(' ');
		};

		/**
   * Merges an array of objects into a single object. Used by the SURFACES static
   * variable.
   * @param {!Array} values The values to be merged.
   * @return {!Object} The merged value.
   * @protected
   */

		Component.prototype.mergeObjects_ = function mergeObjects_(values) {
			return object.mixin.apply(null, [{}].concat(values.reverse()));
		};

		/**
   * Prefixes the given surface id with this component's id.
   * @param {string} surfaceId
   * @return {string}
   */

		Component.prototype.prefixSurfaceId = function prefixSurfaceId(surfaceId) {
			return this.id + '-' + surfaceId;
		};

		/**
   * Registers a Metal.js component. This is just a helper function to allow
   * subclasses to easily register themselves without having to import anything else.
   * @param {!Function} constructorFn The component's constructor function.
   * @param {string=} opt_name The component's name.
   */

		Component.prototype.registerMetalComponent = function registerMetalComponent(constructorFn, opt_name) {
			ComponentRegistry.register(constructorFn, opt_name);
		};

		/**
   * Unregisters a surface and removes its element from the DOM.
   * @param {string} surfaceId The surface id.
   * @chainable
   */

		Component.prototype.removeSurface = function removeSurface(surfaceId) {
			var el = this.getSurfaceElement(surfaceId);
			if (el && el.parentNode) {
				el.parentNode.removeChild(el);
			}
			var surfaceElementId = this.getSurfaceElementId(surfaceId, this.getSurface(surfaceId));
			Component.surfacesCollector.removeSurface(surfaceElementId);
			this.surfaceIds_[surfaceElementId] = false;
			return this;
		};

		/**
   * Removes all surfaces that were removed during the repaint of their parents,
   * and weren't added back again. Component surfaces will be disposed.
   * @protected
   */

		Component.prototype.removeUnusedSurfaces_ = function removeUnusedSurfaces_() {
			var compIds = [];
			for (var i = 0; i < this.removedSurfaces_.length; i++) {
				var surface = this.removedSurfaces_[i];
				if (!surface.parent) {
					this.removeSurface(surface.surfaceElementId);
					if (surface.componentName) {
						compIds.push(surface.surfaceElementId);
					}
				}
			}
			this.disposeSubComponents_(compIds);
		};

		/**
   * Lifecycle. Renders the component into the DOM. Render phase replaces
   * decorate phase, without progressive enhancement support.
   *
   * Render Lifecycle:
   *   render - Decorate is manually called.
   *   render surfaces - All surfaces content are rendered.
   *   attribute synchronization - All synchronization methods are called.
   *   attach - Attach Lifecycle is called.
   *
   * @param {(string|Element)=} opt_parentElement Optional parent element
   *     to render the component.
   * @param {(string|Element)=} opt_siblingElement Optional sibling element
   *     to render the component before it. Relevant when the component needs
   *     to be rendered before an existing element in the DOM, e.g.
   *     `component.render(null, existingElement)`.
   * @chainable
   */

		Component.prototype.render = function render(opt_parentElement, opt_siblingElement) {
			if (this.wasRendered) {
				throw new Error(Component.Error.ALREADY_RENDERED);
			}

			this.addElementSurface_();
			this.renderContent_();
			this.syncAttrs_();
			this.emit('render');
			this.attach(opt_parentElement, opt_siblingElement);
			this.wasRendered = true;
			return this;
		};

		/**
   * Renders this component as a subcomponent, meaning that no actual rendering is
   * needed since it was already rendered by the parent component. This just handles
   * other logics from the rendering lifecycle, like attaching event listeners.
   * @param {string=} opt_content The content that has already been rendered for this
   *   component
   */

		Component.prototype.renderAsSubComponent = function renderAsSubComponent(opt_content) {
			this.addElementSurface_();
			if (opt_content && dom.isEmpty(this.element)) {
				// If we have the rendered content for this component, but it hasn't
				// been rendered in its element yet, we render it manually here. That
				// can happen if the subcomponent's element is set before the parent
				// element renders its content, making originally rendered content be
				// set on the wrong place.
				this.replaceElementContent_(opt_content);
			}
			this.syncAttrs_();
			this.attach();
			this.wasRendered = true;
		};

		/**
   * Renders a surface that holds a component.
   * @param {string} surfaceElementId
   * @param {string=} opt_content The content to be rendered.
   * @protected
   */

		Component.prototype.renderComponentSurface_ = function renderComponentSurface_(surfaceElementId, opt_content) {
			var component = ComponentCollector.components[surfaceElementId];
			if (component.wasRendered) {
				var surface = this.getSurfaceFromElementId(surfaceElementId);
				Component.componentsCollector.updateComponent(surfaceElementId, surface.componentData);
			} else if (this.decorating_) {
				component.decorateAsSubComponent(opt_content);
			} else {
				component.renderAsSubComponent(opt_content);
			}
		};

		/**
   * Renders this component's whole content. When decorating this will avoid
   * replacing the existing content if it's already correct.
   * @protected
   */

		Component.prototype.renderContent_ = function renderContent_() {
			var id = this.id;
			if (this.decorating_) {
				var extendedContent = this.getElementExtendedContent();
				var extendedCacheState = this.computeSurfaceCacheState_(extendedContent);
				var htmlCacheState = this.computeSurfaceCacheState_(html.compress(this.element.outerHTML));
				if (!this.compareCacheStates_(htmlCacheState, extendedCacheState)) {
					this.replaceElementContent_(extendedContent);
				}
			} else {
				this.emitRenderSurfaceEvent_(id);
			}
		};

		/**
   * Renders the component element into the DOM.
   * @param {(string|Element)=} opt_parentElement Optional parent element
   *     to render the component.
   * @param {(string|Element)=} opt_siblingElement Optional sibling element
   *     to render the component before it. Relevant when the component needs
   *     to be rendered before an existing element in the DOM, e.g.
   *     `component.render(null, existingElement)`.
   * @protected
   */

		Component.prototype.renderElement_ = function renderElement_(opt_parentElement, opt_siblingElement) {
			var element = this.element;
			element.id = this.id;
			if (opt_siblingElement || !element.parentNode) {
				var parent = dom.toElement(opt_parentElement) || this.DEFAULT_ELEMENT_PARENT;
				parent.insertBefore(element, dom.toElement(opt_siblingElement));
			}
		};

		/**
   * Renders the contents of all the surface placeholders found in the given content.
   * @param {string} content
   * @param {string} surfaceElementId The id of surface element the content is from.
   * @protected
   */

		Component.prototype.renderPlaceholderSurfaceContents_ = function renderPlaceholderSurfaceContents_(content, surfaceElementId) {
			var instance = this;
			content.replace(Component.SURFACE_REGEX, function (match, id) {
				var surface = instance.createPlaceholderSurface_(surfaceElementId, id);
				instance.emitRenderSurfaceEvent_(surface.surfaceElementId);
				return match;
			});
		};

		/**
   * Renders all surfaces contents ignoring the cache.
   * @param {Object.<string, Array=>} surfaces Object map where the key is
   *     the surface id and value the optional attributes list that caused
   *     the rerender.
   * @protected
   */

		Component.prototype.renderSurfacesContent_ = function renderSurfacesContent_(surfaces) {
			this.generatedIdCount_ = {};
			this.removedSurfaces_ = [];

			var surfaceElementIds = Object.keys(surfaces);
			var idIndex = surfaceElementIds.indexOf(this.id);
			if (idIndex !== -1) {
				// Always render the main content surface first, for performance reasons.
				surfaceElementIds.splice(idIndex, 1);
				surfaceElementIds = [this.id].concat(surfaceElementIds);
			}

			for (var i = 0; i < surfaceElementIds.length; i++) {
				if (!this.getSurfaceFromElementId(surfaceElementIds[i]).handled) {
					this.emitRenderSurfaceEvent_(surfaceElementIds[i], null, null, surfaces[surfaceElementIds[i]]);
				}
			}
			this.updatePlaceholderSurfaces_();
			this.eventsCollector_.detachUnusedListeners();
			this.removeUnusedSurfaces_();
		};

		/**
   * Replaces the content of this component's element with the given one.
   * @param {string} content The content to be rendered.
   * @protected
   */

		Component.prototype.replaceElementContent_ = function replaceElementContent_(content) {
			var element = this.element;
			var newContent = this.buildFragment_(content);
			var newElement = this.findElementInContent_(this.id, newContent);
			if (newElement) {
				this.updateElementAttributes_(element, newElement);
				newContent = newElement.childNodes;
			}
			dom.removeChildren(element);
			dom.append(element, newContent);
		};

		/**
   * Replaces the content of a surface with a new one.
   * @param {string} surfaceElementId The surface id.
   * @param {!Object} surface The surface object.
   * @param {string} content The content to be rendered.
   * @protected
   */

		Component.prototype.replaceSurfaceContent_ = function replaceSurfaceContent_(surfaceElementId, surface, content) {
			content = this.replaceSurfacePlaceholders_(content, surfaceElementId, surface);
			if (surfaceElementId === this.id) {
				this.replaceElementContent_(content);
				return;
			}

			var el = this.getSurfaceElement(surfaceElementId);
			var frag = this.buildFragment_(content);
			var element = this.findElementInContent_(surfaceElementId, frag);
			if (element) {
				surface.element = element;
				dom.replace(el, surface.element);
			} else {
				dom.removeChildren(el);
				dom.append(el, frag);
			}
		};

		/**
   * Replaces the given content's surface placeholders with their real contents.
   * @param {string} content
   * @param {string} surfaceElementId The id of the surface element that contains
   *   the given content, or undefined if the content is from the main element.
   * @param {!Object} surface The surface object.
   * @return {string} The final string with replaced placeholders.
   * @protected
   */

		Component.prototype.replaceSurfacePlaceholders_ = function replaceSurfacePlaceholders_(content, surfaceElementId, surface) {
			if (!surface.componentName || surfaceElementId === this.id) {
				this.addToRemovedSurfaces_(surface.children || []);
				surface.children = [];
			}

			var instance = this;
			return content.replace(Component.SURFACE_REGEX, function (match, id) {
				// Surfaces should already have been created before being rendered so they can be
				// accessed from their getSurfaceContent calls.
				var placeholderSurface = instance.createPlaceholderSurface_(surfaceElementId, id);
				id = placeholderSurface.surfaceElementId;
				placeholderSurface.handled = true;
				placeholderSurface.parent = surfaceElementId;
				surface.children.push(id);

				var surfaceContent = instance.getSurfaceContent_(id);
				var surfaceHtml = instance.getSurfaceHtml_(placeholderSurface, surfaceContent);
				var expandedHtml = instance.replaceSurfacePlaceholders_(surfaceHtml, id, placeholderSurface);
				instance.collectedSurfaces_.push({
					cacheContent: surfaceContent,
					content: expandedHtml,
					surface: placeholderSurface
				});

				return expandedHtml;
			});
		};

		/**
   * Setter logic for element attribute.
   * @param {string|Element} val
   * @return {Element}
   * @protected
   */

		Component.prototype.setterElementFn_ = function setterElementFn_(val) {
			var element = dom.toElement(val);
			if (!element) {
				element = this.valueElementFn_();
			}
			return element;
		};

		/**
   * Attribute synchronization logic for the `elementClasses` attribute.
   * @param {string} newVal
   * @param {string} prevVal
   */

		Component.prototype.syncElementClasses = function syncElementClasses(newVal, prevVal) {
			var classesToAdd = this.constructor.ELEMENT_CLASSES_MERGED;
			if (newVal) {
				classesToAdd = classesToAdd + ' ' + newVal;
			}
			if (prevVal) {
				dom.removeClasses(this.element, prevVal);
			}
			dom.addClasses(this.element, classesToAdd);
		};

		/**
   * Attribute synchronization logic for `visible` attribute.
   * Updates the element's display value according to its visibility.
   * @param {boolean} newVal
   */

		Component.prototype.syncVisible = function syncVisible(newVal) {
			this.element.style.display = newVal ? '' : 'none';
		};

		/**
   * Sets the attributes from the second element to the first element.
   * @param {!Element} element
   * @param {!Element} newElement
   * @protected
   */

		Component.prototype.updateElementAttributes_ = function updateElementAttributes_(element, newElement) {
			var attrs = newElement.attributes;
			for (var i = 0; i < attrs.length; i++) {
				// The "id" and "class" html attributes are already synced via the "id"
				// and "elementClasses" component attributes, respectively.
				if (attrs[i].name !== 'id' && attrs[i].name !== 'class') {
					element.setAttribute(attrs[i].name, attrs[i].value);
				}
			}

			if (element.tagName !== newElement.tagName) {
				console.error('The component named "' + this.getName() + '" tried to change the component ' + 'element\'s tag name, which is not allowed. Make sure to always return the same tag ' + 'name for the component element on the renderer\'s getSurfaceContent. This may also ' + 'have been caused by passing an element to this component with a different tag name ' + 'from the one it uses.');
			}
		};

		/**
   * Updates a surface after it has been rendered through placeholders.
   * @param {!{content: string, cacheContent: string, surfaceElementId: string}} collectedData
   *   Data about the collected surface. Should have the surface's id, content and the
   *   content that should be cached for it.
   * @protected
   */

		Component.prototype.updatePlaceholderSurface_ = function updatePlaceholderSurface_(collectedData) {
			var surface = collectedData.surface;
			var surfaceElementId = surface.surfaceElementId;
			if (surface.componentName) {
				// Elements of component surfaces are unchangeable, so we need to replace the
				// rendered element with the component's.
				dom.replace(this.findElementById_(surfaceElementId), this.getSurfaceElement(surfaceElementId, surface));

				// Component surfaces need to be handled in case some internal details have changed.
				this.emitRenderSurfaceEvent_(surfaceElementId, collectedData.content, collectedData.cacheContent);
			} else {
				// This surface's element has either changed or never been created yet. Let's just
				// reset it to null, so it can be fetched from the dom again when necessary. Also,
				// since there's no need to do cache checks or rerender, let's just attach its
				// listeners and cache its content manually.
				surface.element = null;
				this.cacheSurfaceContent(surfaceElementId, collectedData.cacheContent);
				this.eventsCollector_.attachListeners(collectedData.cacheContent, surfaceElementId);
			}
		};

		/**
   * Updates all collected surfaces.
   * @protected
   */

		Component.prototype.updatePlaceholderSurfaces_ = function updatePlaceholderSurfaces_() {
			for (var i = this.collectedSurfaces_.length - 1; i >= 0; i--) {
				this.updatePlaceholderSurface_(this.collectedSurfaces_[i]);
				this.collectedSurfaces_[i].surface.handled = false;
			}
			this.collectedSurfaces_ = [];
		};

		/**
   * Validator logic for element attribute.
   * @param {string|Element} val
   * @return {boolean} True if val is a valid element.
   * @protected
   */

		Component.prototype.validatorElementFn_ = function validatorElementFn_(val) {
			return core.isElement(val) || core.isString(val);
		};

		/**
   * Validator logic for elementClasses attribute.
   * @param {string} val
   * @return {boolean} True if val is a valid element classes.
   * @protected
   */

		Component.prototype.validatorElementClassesFn_ = function validatorElementClassesFn_(val) {
			return core.isString(val);
		};

		/**
   * Validator logic for the `events` attribute.
   * @param {Object} val
   * @return {boolean}
   * @protected
   */

		Component.prototype.validatorEventsFn_ = function validatorEventsFn_(val) {
			return !core.isDefAndNotNull(val) || core.isObject(val);
		};

		/**
   * Validator logic for the `id` attribute.
   * @param {string} val
   * @return {boolean} True if val is a valid id.
   * @protected
   */

		Component.prototype.validatorIdFn_ = function validatorIdFn_(val) {
			return core.isString(val);
		};

		/**
   * Provides the default value for element attribute.
   * @return {!Element} The element.
   * @protected
   */

		Component.prototype.valueElementFn_ = function valueElementFn_() {
			if (!this.id) {
				// This may happen because the default value of "id" depends on "element",
				// and the default value of "element" depends on "id".
				this.id = this.makeId_();
			}
			var element = this.findElementInContent_(this.id, this.getElementContent_(true) || '');
			if (!element) {
				element = this.findElementInContent_(this.id, this.getComponentHtml(''));
			}
			dom.removeChildren(element);
			dom.exitDocument(element);
			return element;
		};

		/**
   * Provides the default value for id attribute.
   * @return {string} The id.
   * @protected
   */

		Component.prototype.valueIdFn_ = function valueIdFn_() {
			var element = this.element;
			return element && element.id ? element.id : this.makeId_();
		};

		/**
   * Wraps the content with the given tag, unless the content already has an element with the
   * correct id.
   * @param {string} content
   * @param {string} id
   * @param {string} tag
   * @return {string}
   * @protected
   */

		Component.prototype.wrapContentIfNecessary = function wrapContentIfNecessary(content, id, tag) {
			if (!this.checkHasElementTag_(content, id)) {
				content = '<' + tag + ' id="' + id + '">' + content + '</' + tag + '>';
			}
			return content;
		};

		return Component;
	})(Attribute);

	/**
  * Helper responsible for extracting components from strings and config data.
  * @type {!ComponentCollector}
  * @protected
  * @static
  */

	Component.prototype.registerMetalComponent && Component.prototype.registerMetalComponent(Component, 'Component')
	Component.componentsCollector = new ComponentCollector();

	/**
  * Helper responsible for temporarily holding surface data.
  * @type {!SurfaceCollector}
  * @protected
  * @static
  */
	Component.surfacesCollector = new SurfaceCollector();

	/**
  * Component attributes definition.
  * @type {Object}
  * @static
  */
	Component.ATTRS = {
		/**
   * Component element bounding box.
   * @type {Element}
   * @writeOnce
   */
		element: {
			setter: 'setterElementFn_',
			validator: 'validatorElementFn_',
			valueFn: 'valueElementFn_',
			writeOnce: true
		},

		/**
   * CSS classes to be applied to the element.
   * @type {Array.<string>}
   */
		elementClasses: {
			validator: 'validatorElementClassesFn_'
		},

		/**
   * Listeners that should be attached to this component. Should be provided as an object,
   * where the keys are event names and the values are the listener functions (or function
   * names).
   * @type {Object<string, (function()|string|{selector: string, fn: function()|string})>}
   */
		events: {
			validator: 'validatorEventsFn_',
			value: null
		},

		/**
   * Component element id. If not specified will be generated.
   * @type {string}
   * @writeOnce
   */
		id: {
			validator: 'validatorIdFn_',
			valueFn: 'valueIdFn_',
			writeOnce: true
		},

		/**
   * Indicates if the component is visible or not.
   * @type {boolean}
   */
		visible: {
			validator: core.isBoolean,
			value: true
		}
	};

	/**
  * CSS classes to be applied to the element.
  * @type {string}
  * @protected
  * @static
  */
	Component.ELEMENT_CLASSES = 'component';

	/**
  * Element tag name is a string that specifies the type of element to be
  * created. The nodeName of the created element is initialized with the
  * value of tag name.
  * @type {string}
  * @default div
  * @protected
  * @static
  */
	Component.ELEMENT_TAG_NAME = 'div';

	/**
  * The `ComponentRenderer` that should be used. Components need to set this
  * to a subclass of `ComponentRenderer` that has the rendering logic, like
  * `SoyRenderer`.
  * @type {!ComponentRenderer}
  * @static
  */
	Component.RENDERER = ComponentRenderer;

	/**
  * The regex used to search for surface placeholders.
  * @type {RegExp}
  * @static
  */
	Component.SURFACE_REGEX = /\%\%\%\%~s(?:-([^~:]+))?~\%\%\%\%/g;

	/**
  * Surface tag name is a string that specifies the type of element to be
  * created for the surfaces. The nodeName of the created element is
  * initialized with the value of tag name.
  * @type {string}
  * @default div
  * @protected
  * @static
  */
	Component.SURFACE_TAG_NAME = 'div';

	/**
  * Cache states for the component.
  * @enum {string}
  */
	Component.Cache = {
		/**
   * Cache not initialized.
   */
		NOT_INITIALIZED: -2
	};

	/**
  * Errors thrown by the component.
  * @enum {string}
  */
	Component.Error = {
		/**
   * Error when the component is already rendered and another render attempt
   * is made.
   */
		ALREADY_RENDERED: 'Component already rendered'
	};

	/**
  * A list with attribute names that will automatically be rejected as invalid.
  * @type {!Array<string>}
  */
	Component.INVALID_ATTRS = ['components', 'elementContent'];

	this.steel.Component = Component;
}).call(this);
'use strict';

(function () {
	var templates = {};

	/**
  * Stores soy templates from components that use `SoyRenderer`. Soy files
  * compiled with gulp-metal automatically add their templates here when
  * imported.
  */

	var SoyTemplates = (function () {
		function SoyTemplates() {
			babelHelpers.classCallCheck(this, SoyTemplates);
		}

		/**
   * Gets the requested templates.
   * @param {string=} opt_componentName The name of the component to get
   *   templates from. If not given, all templates will be returned.
   * @param {string=} opt_templateName The name of the template. If not given
   *   all templates for the specified component will be returned.
   * @return {!Object|function()} Either an object with multiple templates or
   *   a single template function.
   */

		SoyTemplates.get = function get(opt_componentName, opt_templateName) {
			if (!opt_componentName) {
				return templates;
			} else if (!opt_templateName) {
				return templates[opt_componentName] || {};
			} else {
				return SoyTemplates.get(opt_componentName)[opt_templateName];
			}
		};

		/**
   * Sets the templates for the component with the specified name.
   * @param {string} componentName
   * @param {!Object<string, !function()>} componentTemplates
   */

		SoyTemplates.set = function set(componentName, componentTemplates) {
			templates[componentName] = componentTemplates;
		};

		return SoyTemplates;
	})();

	this.steel.SoyTemplates = SoyTemplates;
}).call(this);
'use strict';

(function () {
	var SoyTemplates = this.steel.SoyTemplates;

	var SoyAop = {
		/**
   * The function that should be called instead of a template call. If null, the original function
   * will be called instead.
   * @type {function()}
   * @protected
   */
		interceptFn_: null,

		/**
   * Gets the original function of the given template function. If no original exists,
   * returns the given function itself.
   * @param {!function()} fn
   * @return {!function()}
   */
		getOriginalFn: function getOriginalFn(fn) {
			return fn.originalFn ? fn.originalFn : fn;
		},

		/**
   * Handles a template call, calling the current interception function if one is set, or otherwise
   * just calling the original function instead.
   * @param {string} compName The name of the component this template function belongs to.
   * @param {string} templateName The name of the template this call was made for.
   * @param {!function()} originalFn The original template function that was intercepted.
   * @param {Object} opt_data Template data object.
   * @param {*} opt_ignored
   * @param {Object} opt_ijData Template injected data object.
   * @return {*} The return value of the function that is called to handle this interception.
   */
		handleTemplateCall_: function handleTemplateCall_(compName, templateName, originalFn, opt_data, opt_ignored, opt_ijData) {
			if (SoyAop.interceptFn_) {
				return SoyAop.interceptFn_.call(null, compName, templateName, originalFn, opt_data, opt_ignored, opt_ijData);
			} else {
				return originalFn.call(null, opt_data, opt_ignored, opt_ijData);
			}
		},

		/**
   * Registers the templates for the requested component so they can be intercepted.
   * @param {string} compName
   */
		registerTemplates: function registerTemplates(compName) {
			var compTemplates = SoyTemplates.get(compName);
			Object.keys(compTemplates).forEach(function (templateName) {
				var originalFn = compTemplates[templateName];
				if (!originalFn.originalFn) {
					compTemplates[templateName] = SoyAop.handleTemplateCall_.bind(null, compName, templateName, originalFn);
					compTemplates[templateName].originalFn = originalFn;
				}
			});
		},

		/**
   * Starts intercepting all template calls, replacing them with a call
   * to the given function instead.
   * @param {!function()} fn
   */
		startInterception: function startInterception(fn) {
			SoyAop.interceptFn_ = fn;
		},

		/**
   * Stops intercepting template calls.
   */
		stopInterception: function stopInterception() {
			SoyAop.interceptFn_ = null;
		}
	};

	this.steel.SoyAop = SoyAop;
}).call(this);
'use strict';

(function () {
	var core = this.steel.core;
	var dom = this.steel.dom;
	var object = this.steel.object;
	var Component = this.steel.Component;
	var ComponentRegistry = this.steel.ComponentRegistry;
	var ComponentRenderer = this.steel.ComponentRenderer;
	var SoyAop = this.steel.SoyAop;
	var SoyTemplates = this.steel.SoyTemplates;

	// The injected data that will be passed to soy templates.

	var ijData = {};

	/**
  * A `ComponentRenderer` that enables components to be rendered via soy templates. It
  * automatically creates surfaces named after each template and uses template params
  * as render attributes. That means that when an attribute value changes, the templates
  * that have a parameter with the same name will be automatically rendered again.
  * @extends {ComponentRenderer}
  */

	var SoyRenderer = (function (_ComponentRenderer) {
		babelHelpers.inherits(SoyRenderer, _ComponentRenderer);

		function SoyRenderer() {
			babelHelpers.classCallCheck(this, SoyRenderer);
			return babelHelpers.possibleConstructorReturn(this, _ComponentRenderer.apply(this, arguments));
		}

		/**
   * Adds surfaces from the soy templates.
   * @param {!Component} component
   * @protected
   */

		SoyRenderer.addSurfacesFromTemplates_ = function addSurfacesFromTemplates_(component) {
			var name = component.getName();
			var templates = SoyTemplates.get(name);
			var templateNames = Object.keys(templates);
			for (var i = 0; i < templateNames.length; i++) {
				var templateName = templateNames[i];
				var templateFn = SoyAop.getOriginalFn(templates[templateName]);
				if (SoyRenderer.isSurfaceTemplate_(templateName, templateFn)) {
					var surfaceId = templateName === 'content' ? component.id : templateName;
					component.addSurface(surfaceId, {
						renderAttrs: templateFn.params,
						templateComponentName: name,
						templateName: templateName
					});
				}
			}
		};

		/**
   * Builds the config data for a component from the data that was passed to its
   * soy template function.
   * @param {string} id The id of the component.
   * @param {!Object} templateData
   * @return {!Object} The component's config data.
   * @protected
   */

		SoyRenderer.buildComponentConfigData_ = function buildComponentConfigData_(id, templateData) {
			var config = {
				id: id
			};
			for (var key in templateData) {
				config[key] = templateData[key];
			}
			return config;
		};

		/**
   * Builds the data object that should be passed to a template from the given component.
   * @param {!Component} component
   * @return {!Object}
   * @protected
   */

		SoyRenderer.buildTemplateData_ = function buildTemplateData_(component) {
			var names = component.getAttrNames().filter(function (name) {
				// Get all attribute values except for "element", since it helps performance and this
				// attribute shouldn't be referenced inside a soy template anyway.
				return name !== 'element';
			});
			var surface = component.getSurface(component.id);
			var data = surface && surface.componentData ? surface.componentData : {};
			var attrs = object.map(component.getAttrs(names), function (key, value) {
				if (component.getAttrConfig(key).isHtml && core.isString(value)) {
					return SoyRenderer.sanitizeHtml(value);
				} else {
					return value;
				}
			});
			return object.mixin(data, attrs);
		};

		/**
   * Creates and instantiates a component that has the given soy template function as its
   * main content template. All keys present in the config object, if one is given, will be
   * attributes of this component, and the object itself will be passed to the constructor.
   * @param {!function()} templateFn
   * @param {(Element|string)=} opt_element The element that should be decorated. If none is given,
   *   one will be created and appended to the document body.
   * @param {Object=} opt_data Data to be passed to the soy template when it's called.
   * @return {!Component}
   */

		SoyRenderer.createComponentFromTemplate = function createComponentFromTemplate(templateFn, opt_element, opt_data) {
			var element = opt_element ? dom.toElement(opt_element) : null;
			var data = object.mixin({
				id: element ? element.id : null
			}, opt_data, {
				element: element
			});

			var name = 'TemplateComponent' + core.getUid();

			var TemplateComponent = (function (_Component) {
				babelHelpers.inherits(TemplateComponent, _Component);

				function TemplateComponent() {
					babelHelpers.classCallCheck(this, TemplateComponent);
					return babelHelpers.possibleConstructorReturn(this, _Component.apply(this, arguments));
				}

				return TemplateComponent;
			})(Component);

			TemplateComponent.prototype.registerMetalComponent && TemplateComponent.prototype.registerMetalComponent(TemplateComponent, 'TemplateComponent')

			TemplateComponent.RENDERER = SoyRenderer;
			ComponentRegistry.register(TemplateComponent, name);
			SoyTemplates.set(name, {
				content: function content(opt_attrs, opt_ignored, opt_ijData) {
					return SoyAop.getOriginalFn(templateFn)(data, opt_ignored, opt_ijData);
				}
			});
			SoyAop.registerTemplates(name);
			return new TemplateComponent(data);
		};

		/**
   * Decorates html rendered by the given soy template function, instantiating any referenced
   * components in it.
   * @param {!function()} templateFn
   * @param {(Element|string)=} opt_element The element that should be decorated. If none is given,
   *   one will be created and appended to the document body.
   * @param {Object=} opt_data Data to be passed to the soy template when it's called.
   * @return {!Component} The component that was created for this action. Contains
   *   references to components that were rendered by the given template function.
   * @static
   */

		SoyRenderer.decorateFromTemplate = function decorateFromTemplate(templateFn, opt_element, opt_data) {
			return SoyRenderer.createComponentFromTemplate(templateFn, opt_element, opt_data).decorate();
		};

		/**
   * Generates the id for a surface that was found by a soy template call.
   * @param {!Component} component
   * @param {string} parentSurfaceId The id of the parent surface, or undefined
   *   if there is none.
   * @param {!Object} data The placeholder data registered for this surface.
   * @return {string} The generated id.
   * @override
   */

		SoyRenderer.generateSurfaceElementId = function generateSurfaceElementId(component, parentSurfaceId, data) {
			if (data.templateName && parentSurfaceId === component.id && !SoyRenderer.firstSurfaceFound_[data.templateName]) {
				SoyRenderer.firstSurfaceFound_[data.templateName] = true;
				return component.prefixSurfaceId(data.templateName);
			} else {
				return component.generateSurfaceElementId(parentSurfaceId);
			}
		};

		/**
   * Renders the appropriate soy template for the specified surface.
   * @param {!Object} surface The surface configuration.
   * @param {!Component} component The component instance.
   * @param {string=} opt_skipContents True if only the element's tag needs to be rendered.
   * @return {string}
   * @override
   */

		SoyRenderer.getSurfaceContent = function getSurfaceContent(surface, component, opt_skipContents) {
			if (surface.surfaceElementId === component.id) {
				if (!surface.renderAttrs) {
					this.addSurfacesFromTemplates_(component);
				}
				SoyRenderer.firstSurfaceFound_ = {};
			}

			SoyRenderer.surfaceBeingRendered_ = surface.surfaceElementId;
			SoyRenderer.skipInnerCalls_ = SoyRenderer.skipInnerCalls_ || opt_skipContents;

			var data = surface.templateData;
			surface.templateData = null;
			var content = SoyRenderer.renderTemplateByName_(component, surface.templateComponentName, surface.templateName, data);

			SoyRenderer.surfaceBeingRendered_ = null;
			SoyRenderer.skipInnerCalls_ = false;
			return content;
		};

		/**
   * Handles a call to the SoyRenderer component template.
   * @param {!Component} component The component that the call was made for.
   * @param {string} componentName The component's name.
   * @param {Object} data The data the template was called with.
   * @return {string} A placeholder to be rendered instead of the content the template
   *   function would have returned.
   * @protected
   */

		SoyRenderer.handleComponentCall_ = function handleComponentCall_(component, componentName, data) {
			var surfaceData = {
				componentName: componentName
			};
			var id = (data || {}).id;
			if (!id) {
				id = SoyRenderer.generateSurfaceElementId(component, SoyRenderer.surfaceBeingRendered_, surfaceData);
			}
			surfaceData.componentData = SoyRenderer.buildComponentConfigData_(id, data);
			return component.buildPlaceholder(id, surfaceData);
		};

		/**
   * Handles a call to a soy template.
   * @param {!Component} component The component that the call was made for.
   * @param {string} templateComponentName The name of the component that this template was belongs to.
   * @param {string} templateName The name of this template.
   * @param {!function()} originalFn The original template function that was intercepted.
   * @param {!Object} data The data the template was called with.
   * @param {*} opt_ignored
   * @param {Object} opt_ijData Template injected data object.
   * @return {string}
   * @protected
   */

		SoyRenderer.handleInterceptedCall_ = function handleInterceptedCall_(component, templateComponentName, templateName, originalFn, data, opt_ignored, opt_ijData) {
			if (SoyRenderer.skipInnerCalls_) {
				return '';
			} else if (templateName === 'content') {
				return this.handleComponentCall_.call(this, component, templateComponentName, data);
			} else {
				return this.handleSurfaceCall_.call(this, component, templateComponentName, templateName, originalFn, data, opt_ignored, opt_ijData);
			}
		};

		/**
   * Handles a call to the SoyRenderer surface template.
   * @param {!Component} component
   * @param {string} templateComponentName The name of the component that this template was belongs to.
   * @param {string} templateName The name of this template.
   * @param {!function()} originalFn The original template function that was intercepted.
   * @param {!Object} data The data the template was called with.
   * @param {*} opt_ignored
   * @param {Object} opt_ijData Template injected data object.
   * @return {string} A placeholder to be rendered instead of the content the template
   *   function would have returned.
   * @protected
   */

		SoyRenderer.handleSurfaceCall_ = function handleSurfaceCall_(component, templateComponentName, templateName, originalFn, data, opt_ignored, opt_ijData) {
			var surfaceData = {
				static: originalFn.static,
				templateComponentName: templateComponentName,
				templateData: data,
				templateName: templateName
			};
			var surfaceElementId;
			if (core.isDefAndNotNull(data.surfaceElementId)) {
				surfaceElementId = data.surfaceElementId;
			} else if (core.isDefAndNotNull(data.surfaceId)) {
				surfaceElementId = component.getSurfaceElementId(data.surfaceId.toString());
			} else {
				if (originalFn.private) {
					return originalFn.call(null, data, opt_ignored, opt_ijData);
				}
				surfaceElementId = SoyRenderer.generateSurfaceElementId(component, SoyRenderer.surfaceBeingRendered_, surfaceData);
			}
			return component.buildPlaceholder(surfaceElementId, surfaceData);
		};

		/**
   * Checks if a template is a surface template.
   * @param {string} templateName
   * @param {!function()} templateFn
   * @return {boolean}
   * @protected
   */

		SoyRenderer.isSurfaceTemplate_ = function isSurfaceTemplate_(templateName, templateFn) {
			return templateName.substr(0, 13) !== '__deltemplate' && !templateFn.private;
		};

		/**
   * Renders the given soy template function, instantiating any referenced components in it.
   * @param {!function()} templateFn
   * @param {(Element|string)=} opt_element The element that should be decorated. If none is given,
   *   one will be created and appended to the document body.
   * @param {Object=} opt_data Data to be passed to the soy template when it's called.
   * @return {!Component} The component that was created for this action. Contains
   *   references to components that were rendered by the given template function.
   * @static
   */

		SoyRenderer.renderFromTemplate = function renderFromTemplate(templateFn, opt_element, opt_data) {
			return SoyRenderer.createComponentFromTemplate(templateFn, opt_element, opt_data).render();
		};

		/**
   * Renders the specified template.
   * @param {!Component} component
   * @param {!function()} templateFn
   * @param {Object=} opt_data
   * @return {string} The template's result content.
   * @protected
   */

		SoyRenderer.renderTemplate_ = function renderTemplate_(component, templateFn, opt_data) {
			SoyAop.startInterception(SoyRenderer.handleInterceptedCall_.bind(SoyRenderer, component));
			templateFn = SoyAop.getOriginalFn(templateFn);
			var content = templateFn(opt_data || SoyRenderer.buildTemplateData_(component), null, ijData).content;
			SoyAop.stopInterception();
			return content;
		};

		/**
   * Renders the template with the specified name.
   * @param {!Component} component
   * @param {string} templateComponentName
   * @param {string} templateName
   * @param {Object=} opt_data
   * @return {string} The template's result content.
   * @protected
   */

		SoyRenderer.renderTemplateByName_ = function renderTemplateByName_(component, templateComponentName, templateName, opt_data) {
			var elementTemplate = SoyTemplates.get(templateComponentName, templateName);
			if (core.isFunction(elementTemplate)) {
				return SoyRenderer.renderTemplate_(component, elementTemplate, opt_data);
			}
		};

		/**
   * Sanitizes the given html string, so it can skip escaping when passed to a
   * soy template.
   * @param {string} html
   * @return {soydata.SanitizedHtml}
   */

		SoyRenderer.sanitizeHtml = function sanitizeHtml(html) {
			return soydata.VERY_UNSAFE.ordainSanitizedHtml(html);
		};

		/**
   * Sets the injected data object that should be passed to templates.
   * @param {Object} data
   */

		SoyRenderer.setInjectedData = function setInjectedData(data) {
			ijData = data || {};
		};

		return SoyRenderer;
	})(ComponentRenderer);

	SoyRenderer.prototype.registerMetalComponent && SoyRenderer.prototype.registerMetalComponent(SoyRenderer, 'SoyRenderer')

	var originalSanitizedHtmlFromFn = soydata.SanitizedHtml.from;
	soydata.SanitizedHtml.from = function (value) {
		if (value && value.contentKind === 'HTML') {
			value = SoyRenderer.sanitizeHtml(value.content);
		}
		return originalSanitizedHtmlFromFn(value);
	};

	this.steel.SoyRenderer = SoyRenderer;
}).call(this);
'use strict';

(function () {
  /* jshint ignore:start */
  var Component = this.steel.Component;
  var SoyAop = this.steel.SoyAop;
  var SoyRenderer = this.steel.SoyRenderer;
  var SoyTemplates = this.steel.SoyTemplates;

  var Templates = SoyTemplates.get();
  // This file was automatically generated from Alert.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Templates.Alert.
   */

  if (typeof Templates.Alert == 'undefined') {
    Templates.Alert = {};
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Alert.content = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="alert alert-dismissible component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '" role="alert">' + Templates.Alert.dismiss(opt_data, null, opt_ijData) + Templates.Alert.body(opt_data, null, opt_ijData) + '</div>');
  };
  if (goog.DEBUG) {
    Templates.Alert.content.soyTemplateName = 'Templates.Alert.content';
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Alert.body = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-body">' + (opt_data.body ? soy.$$escapeHtml(opt_data.body) : '') + '</div>');
  };
  if (goog.DEBUG) {
    Templates.Alert.body.soyTemplateName = 'Templates.Alert.body';
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Alert.dismiss = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-dismiss">' + (opt_data.dismissible ? '<button type="button" class="close" aria-label="Close" data-onclick="toggle"><span aria-hidden="true">×</span></button>' : '') + '</div>');
  };
  if (goog.DEBUG) {
    Templates.Alert.dismiss.soyTemplateName = 'Templates.Alert.dismiss';
  }

  Templates.Alert.content.params = ["id"];
  Templates.Alert.body.params = ["body", "id"];
  Templates.Alert.dismiss.params = ["dismissible", "id"];

  var Alert = (function (_Component) {
    babelHelpers.inherits(Alert, _Component);

    function Alert() {
      babelHelpers.classCallCheck(this, Alert);
      return babelHelpers.possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    return Alert;
  })(Component);

  Alert.prototype.registerMetalComponent && Alert.prototype.registerMetalComponent(Alert, 'Alert')

  Alert.RENDERER = SoyRenderer;
  SoyAop.registerTemplates('Alert');
  this.steel.Alert = Alert;
  /* jshint ignore:end */
}).call(this);
'use strict';

(function () {
	var dom = this.steel.dom;
	var features = this.steel.features;

	var mouseEventMap = {
		mouseenter: 'mouseover',
		mouseleave: 'mouseout',
		pointerenter: 'pointerover',
		pointerleave: 'pointerout'
	};
	Object.keys(mouseEventMap).forEach(function (eventName) {
		dom.registerCustomEvent(eventName, {
			delegate: true,
			handler: function handler(callback, event) {
				var related = event.relatedTarget;
				var target = event.delegateTarget;
				if (!related || related !== target && !target.contains(related)) {
					event.customType = eventName;
					return callback(event);
				}
			},
			originalEvent: mouseEventMap[eventName]
		});
	});

	var animationEventMap = {
		animation: 'animationend',
		transition: 'transitionend'
	};
	Object.keys(animationEventMap).forEach(function (eventType) {
		var eventName = animationEventMap[eventType];
		dom.registerCustomEvent(eventName, {
			event: true,
			delegate: true,
			handler: function handler(callback, event) {
				event.customType = eventName;
				return callback(event);
			},
			originalEvent: features.checkAnimationEventName()[eventType]
		});
	});
}).call(this);
'use strict';

(function () {
	var core = this.steel.core;
	var dom = this.steel.dom;
	var features = this.steel.features;

	var Anim = (function () {
		function Anim() {
			babelHelpers.classCallCheck(this, Anim);
		}

		/**
   * Emulates animation or transition end event, the end event with longer
   * duration will be used by the emulation. If they have the same value,
   * transitionend will be emulated.
   * @param {!Element} element
   * @param {number=} opt_durationMs
   * @return {!Object} Object containing `abort` function.
   */

		Anim.emulateEnd = function emulateEnd(element, opt_durationMs) {
			if (this.getComputedDurationMs(element, 'animation') > this.getComputedDurationMs(element, 'transition')) {
				return this.emulateEnd_(element, 'animation', opt_durationMs);
			} else {
				return this.emulateEnd_(element, 'transition', opt_durationMs);
			}
		};

		/**
   * Emulates animation end event. If `opt_durationMs` not specified the value
   * will read from computed style for animation-duration.
   * @param {!Element} element
   * @param {number=} opt_durationMs
   * @return {!Object} Object containing `abort` function.
   */

		Anim.emulateAnimationEnd = function emulateAnimationEnd(element, opt_durationMs) {
			return this.emulateEnd_(element, 'animation', opt_durationMs);
		};

		/**
   * Emulates transition end event. If `opt_durationMs` not specified the
   * value will read from computed style for transition-duration.
   * @param {!Element} element
   * @param {number=} opt_durationMs
   * @return {!Object} Object containing `abort` function.
   */

		Anim.emulateTransitionEnd = function emulateTransitionEnd(element, opt_durationMs) {
			this.emulateEnd_(element, 'transition', opt_durationMs);
		};

		/**
   * Emulates transition or animation end.
   * @param {!Element} element
   * @param {string} type
   * @param {number=} opt_durationMs
   * @return {!Object} Object containing `abort` function.
   * @protected
   */

		Anim.emulateEnd_ = function emulateEnd_(element, type, opt_durationMs) {
			var duration = opt_durationMs;
			if (!core.isDef(opt_durationMs)) {
				duration = this.getComputedDurationMs(element, type);
			}

			var delayed = setTimeout(function () {
				dom.triggerEvent(element, features.checkAnimationEventName()[type]);
			}, duration);

			var abort = function abort() {
				clearTimeout(delayed);
				hoistedEvtHandler.removeListener();
			};
			var hoistedEvtHandler = dom.once(element, type + 'end', abort);

			return {
				abort: abort
			};
		};

		/**
   * Gets computed style duration for duration.
   * @param {!Element} element
   * @param {string} type
   * @return {number} The computed duration in milliseconds.
   */

		Anim.getComputedDurationMs = function getComputedDurationMs(element, type) {
			return (parseFloat(window.getComputedStyle(element, null).getPropertyValue(type + '-duration')) || 0) * 1000;
		};

		return Anim;
	})();

	this.steel.Anim = Anim;
}).call(this);
'use strict';

(function () {
	var core = this.steel.core;
	var dom = this.steel.dom;
	var AlertBase = this.steel.Alert;
	var Anim = this.steel.Anim;
	var EventHandler = this.steel.EventHandler;

	/**
  * Alert component.
  */

	var Alert = (function (_AlertBase) {
		babelHelpers.inherits(Alert, _AlertBase);

		function Alert(opt_config) {
			babelHelpers.classCallCheck(this, Alert);

			var _this = babelHelpers.possibleConstructorReturn(this, _AlertBase.call(this, opt_config));

			_this.eventHandler_ = new EventHandler();
			return _this;
		}

		/**
   * @inheritDoc
   */

		Alert.prototype.detached = function detached() {
			_AlertBase.prototype.detached.call(this);
			this.eventHandler_.removeAllListeners();
			clearTimeout(this.delay_);
		};

		/**
   * Closes the alert, disposing it once the animation ends.
   */

		Alert.prototype.close = function close() {
			dom.once(this.element, 'animationend', this.dispose.bind(this));
			dom.once(this.element, 'transitionend', this.dispose.bind(this));
			this.eventHandler_.removeAllListeners();
			this.syncVisible(false);
		};

		/**
   * Handles document click in order to close the alert.
   * @param {!Event} event
   * @protected
   */

		Alert.prototype.handleDocClick_ = function handleDocClick_(event) {
			if (!this.element.contains(event.target)) {
				this.hide();
			}
		};

		/**
   * Hide the alert.
   */

		Alert.prototype.hide = function hide() {
			this.visible = false;
		};

		/**
   * Toggles the visibility of the alert.
   */

		Alert.prototype.toggle = function toggle() {
			this.visible = !this.visible;
		};

		/**
   * Synchronization logic for `dismissible` attribute.
   * @param {boolean} dismissible
   */

		Alert.prototype.syncDismissible = function syncDismissible(dismissible) {
			if (dismissible) {
				this.eventHandler_.add(dom.on(document, 'click', this.handleDocClick_.bind(this)));
			} else {
				this.eventHandler_.removeAllListeners();
			}

			dom[dismissible ? 'addClasses' : 'removeClasses'](this.element, 'alert-dismissible');
		};

		/**
   * Synchronization logic for `visible` attribute.
   * @param {boolean} visible
   */

		Alert.prototype.syncVisible = function syncVisible(visible) {
			dom.removeClasses(this.element, this.animClasses[visible ? 'hide' : 'show']);
			dom.addClasses(this.element, this.animClasses[visible ? 'show' : 'hide']);
			// Some browsers do not fire transitionend events when running in background
			// tab, see https://bugzilla.mozilla.org/show_bug.cgi?id=683696.
			Anim.emulateEnd(this.element);

			if (visible && core.isNumber(this.hideDelay)) {
				this.syncHideDelay(this.hideDelay);
			}
		};

		/**
   * Synchronization logic for `hideDelay` attribute.
   * @param {?number} hideDelay
   */

		Alert.prototype.syncHideDelay = function syncHideDelay(hideDelay) {
			if (core.isNumber(hideDelay) && this.visible) {
				clearTimeout(this.delay_);
				this.delay_ = setTimeout(this.hide.bind(this), hideDelay);
			}
		};

		return Alert;
	})(AlertBase);

	/**
  * Default alert elementClasses.
  * @default alert
  * @type {string}
  * @static
  */

	Alert.prototype.registerMetalComponent && Alert.prototype.registerMetalComponent(Alert, 'Alert')
	Alert.ELEMENT_CLASSES = 'alert';

	/**
  * Alert attributes definition.
  * @type {!Object}
  * @static
  */
	Alert.ATTRS = {
		/**
   * The CSS classes that should be added to the alert when being shown/hidden.
   * @type {!Object}
   */
		animClasses: {
			validator: core.isObject,
			value: {
				show: 'fade in',
				hide: 'fade'
			}
		},

		/**
   * The body content of the alert.
   * @type {string}
   */
		body: {
			value: ''
		},

		/**
   * Flag indicating if the alert should be dismissable (closeable).
   * @type {boolean}
   * @default true
   */
		dismissible: {
			validator: core.isBoolean,
			value: true
		},

		/**
   * The CSS classes that should be added to the alert.
   * @type {string}
   * @default 'alert-success'
   */
		elementClasses: {
			value: 'alert-success'
		},

		/**
   * Delay hiding the alert (ms).
   * @type {?number}
   */
		hideDelay: {},

		/**
   * Flag indicating if the alert is visible or not.
   * @type {boolean}
   * @default false
   */
		visible: {
			value: false
		}
	};

	this.steel.Alert = Alert;
}).call(this);
}).call(this);
//# sourceMappingURL=alert.js.map
