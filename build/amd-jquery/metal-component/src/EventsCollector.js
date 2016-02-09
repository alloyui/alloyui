define(['exports', 'metal/src/metal', './ComponentCollector', 'metal-events/src/events'], function (exports, _metal, _ComponentCollector, _events) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _ComponentCollector2 = _interopRequireDefault(_ComponentCollector);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
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
	}

	var EventsCollector = function (_Disposable) {
		_inherits(EventsCollector, _Disposable);

		function EventsCollector(component) {
			_classCallCheck(this, EventsCollector);

			var _this = _possibleConstructorReturn(this, _Disposable.call(this));

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
				this.eventHandles_[selector] = new _events.EventHandler();
				var fnNames = fnNamesString.split(',');
				for (var i = 0; i < fnNames.length; i++) {
					var fn = this.getListenerFn(fnNames[i]);
					if (fn) {
						this.eventHandles_[selector].add(this.component_.delegate(eventType, selector, this.onEvent_.bind(this, fn)));
					}
				}
			}
		};

		EventsCollector.prototype.attachListeners = function attachListeners(content, groupName) {
			this.groupHasListener_[groupName] = {};
			this.attachListenersFromHtml_(content, groupName);
		};

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

		EventsCollector.prototype.detachAllListeners = function detachAllListeners() {
			for (var selector in this.eventHandles_) {
				if (this.eventHandles_[selector]) {
					this.eventHandles_[selector].removeAllListeners();
				}
			}
			this.eventHandles_ = {};
			this.listenerCounts_ = {};
		};

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

		EventsCollector.prototype.disposeInternal = function disposeInternal() {
			this.detachAllListeners();
			this.component_ = null;
		};

		EventsCollector.prototype.getListenerFn = function getListenerFn(fnName) {
			var fnComponent;
			var split = fnName.split(':');
			if (split.length === 2) {
				fnName = split[1];
				fnComponent = _ComponentCollector2.default.components[split[0]];
				if (!fnComponent) {
					console.error('No component with the id "' + split[0] + '" has been collected' + 'yet. Make sure that you specify an id for an existing component when ' + 'adding inline listeners.');
				}
			}
			fnComponent = fnComponent || this.component_;
			if (_metal.core.isFunction(fnComponent[fnName])) {
				return fnComponent[fnName].bind(fnComponent);
			} else {
				console.error('No function named "' + fnName + '" was found in the component with id "' + fnComponent.id + '". Make sure that you specify valid function names when adding ' + 'inline listeners.');
			}
		};

		EventsCollector.prototype.hasAttachedForGroup = function hasAttachedForGroup(group) {
			return !!this.groupHasListener_.hasOwnProperty(group);
		};

		EventsCollector.prototype.onEvent_ = function onEvent_(fn, event) {
			// This check prevents parent components from handling their child inline listeners.
			var eventComp = event.handledByComponent;
			if (!eventComp || eventComp === this.component_ || event.delegateTarget.contains(eventComp.element)) {
				event.handledByComponent = this.component_;
				return fn(event);
			}
		};

		return EventsCollector;
	}(_metal.Disposable);

	EventsCollector.prototype.registerMetalComponent && EventsCollector.prototype.registerMetalComponent(EventsCollector, 'EventsCollector')
	exports.default = EventsCollector;
});
//# sourceMappingURL=EventsCollector.js.map