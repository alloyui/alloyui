define(['exports', 'metal/src/core', 'metal/metal/src/dom/dom', './Alert.soy.js', 'metal-anim/src/Anim', 'metal/metal/src/events/EventHandler', 'metal/metal/src/dom/events'], function (exports, _core, _dom, _AlertSoy, _Anim, _EventHandler) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _core2 = _interopRequireDefault(_core);

	var _dom2 = _interopRequireDefault(_dom);

	var _AlertSoy2 = _interopRequireDefault(_AlertSoy);

	var _Anim2 = _interopRequireDefault(_Anim);

	var _EventHandler2 = _interopRequireDefault(_EventHandler);

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

	var Alert = function (_AlertBase) {
		_inherits(Alert, _AlertBase);

		function Alert(opt_config) {
			_classCallCheck(this, Alert);

			var _this = _possibleConstructorReturn(this, _AlertBase.call(this, opt_config));

			_this.eventHandler_ = new _EventHandler2.default();
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

		Alert.prototype.close = function close() {
			_dom2.default.once(this.element, 'animationend', this.dispose.bind(this));
			_dom2.default.once(this.element, 'transitionend', this.dispose.bind(this));
			this.eventHandler_.removeAllListeners();
			this.syncVisible(false);
		};

		Alert.prototype.handleDocClick_ = function handleDocClick_(event) {
			if (!this.element.contains(event.target)) {
				this.hide();
			}
		};

		Alert.prototype.hide = function hide() {
			this.visible = false;
		};

		Alert.prototype.toggle = function toggle() {
			this.visible = !this.visible;
		};

		Alert.prototype.syncDismissible = function syncDismissible(dismissible) {
			if (dismissible) {
				this.eventHandler_.add(_dom2.default.on(document, 'click', this.handleDocClick_.bind(this)));
			} else {
				this.eventHandler_.removeAllListeners();
			}

			_dom2.default[dismissible ? 'addClasses' : 'removeClasses'](this.element, 'alert-dismissible');
		};

		Alert.prototype.syncVisible = function syncVisible(visible) {
			_dom2.default.removeClasses(this.element, this.animClasses[visible ? 'hide' : 'show']);
			_dom2.default.addClasses(this.element, this.animClasses[visible ? 'show' : 'hide']);
			// Some browsers do not fire transitionend events when running in background
			// tab, see https://bugzilla.mozilla.org/show_bug.cgi?id=683696.
			_Anim2.default.emulateEnd(this.element);

			if (visible && _core2.default.isNumber(this.hideDelay)) {
				this.syncHideDelay(this.hideDelay);
			}
		};

		Alert.prototype.syncHideDelay = function syncHideDelay(hideDelay) {
			if (_core2.default.isNumber(hideDelay) && this.visible) {
				clearTimeout(this.delay_);
				this.delay_ = setTimeout(this.hide.bind(this), hideDelay);
			}
		};

		return Alert;
	}(_AlertSoy2.default);

	Alert.prototype.registerMetalComponent && Alert.prototype.registerMetalComponent(Alert, 'Alert')


	/**
  * Default alert elementClasses.
  * @default alert
  * @type {string}
  * @static
  */
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
			validator: _core2.default.isObject,
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
			validator: _core2.default.isBoolean,
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

	exports.default = Alert;
});
//# sourceMappingURL=Alert.js.map