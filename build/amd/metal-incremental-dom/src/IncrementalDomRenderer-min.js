define(["exports","metal/src/metal","metal-dom/src/all/dom","metal-component/src/all/component","./IncrementalDomAop","./children/IncrementalDomChildren","./cleanup/IncrementalDomUnusedComponents","./utils/IncrementalDomUtils","./incremental-dom"],function(e,t,n,o,r,i,a,d){"use strict";function c(e){return e&&e.__esModule?e:{"default":e}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var l=c(n),u=c(r),_=c(i),f=c(a),m=c(d),g=function(e){function n(t){p(this,n);var o=h(this,e.call(this,t));return t.context={},o.setConfig_(t,t.getInitialConfig()),o.changes_={},t.on("attached",o.handleAttached_.bind(o)),o.component_.constructor.SYNC_UPDATES_MERGED||t.on("stateKeyChanged",o.handleStateKeyChanged_.bind(o)),o.handleInterceptedAttributesCall_=o.handleInterceptedAttributesCall_.bind(o),o.handleInterceptedOpenCall_=o.handleInterceptedOpenCall_.bind(o),o.handleChildrenCaptured_=o.handleChildrenCaptured_.bind(o),o.handleChildRender_=o.handleChildRender_.bind(o),o.renderInsidePatchDontSkip_=o.renderInsidePatchDontSkip_.bind(o),o}return s(n,e),n.prototype.attachDecoratedListeners_=function(e,t){if(!this.component_.wasRendered)for(var n=(t[2]||[]).concat(t.slice(3)),o=0;o<n.length;o+=2){var r=this.getEventFromListenerAttr_(n[o]);r&&!e[r+"__handle__"]&&this.attachEvent_(e,n[o],r,n[o+1])}},n.prototype.attachEvent_=function(e,n,o,r){var i=o+"__handle__";e[i]&&(e[i].removeListener(),e[i]=null),e[n]=r,r?(t.core.isString(r)&&("d"===n[0]&&e.setAttribute(n,r),r=this.component_.getListenerFn(r)),e[i]=l["default"].delegate(document,o,e,r)):e.removeAttribute(n)},n.prototype.buildChildren_=function(e){return 0===e.length?y:e},n.prototype.buildRef=function(e){var n=t.core.isString(e)?o.ComponentRegistry.getConstructor(e):e,r=this.currentPrefix_+t.core.getUid(n,!0),i=this.generatedRefCount_[r]||0;return this.generatedRefCount_[r]=i+1,r+"sub"+i},n.getComponentBeingRendered=function(){return C[C.length-1]},n.prototype.getSubComponent_=function(e,n){var r=e;t.core.isString(r)&&(r=o.ComponentRegistry.getConstructor(e));var i=this.component_.components[n.ref];return i&&i.constructor!==r&&(i=null),i||(i=new r(n,(!1)),this.component_.addSubComponent(n.ref,i)),i.wasRendered&&(this.setConfig_(i,n),i.getRenderer().startSkipUpdates(),i.setState(n),i.getRenderer().stopSkipUpdates()),i},n.prototype.guaranteeParent_=function(){var e=this.component_.element;if(!e||!e.parentNode){var t=document.createElement("div");return e&&l["default"].append(t,e),t}},n.finishedRenderingComponent=function(){C.pop(),0===C.length&&f["default"].disposeUnused()},n.prototype.handleAttached_=function(e){this.attachData_=e},n.prototype.handleInterceptedAttributesCall_=function(e,n,o,r){var i=this.getEventFromListenerAttr_(o);return i?void this.attachEvent_(n,o,i,r):("checked"===o&&(r=t.core.isDefAndNotNull(r)&&r!==!1),"value"===o&&n.value!==r&&(n[o]=r),void(t.core.isBoolean(r)?(n[o]=r,r?n.setAttribute(o,""):n.removeAttribute(o)):e(n,o,r)))},n.prototype.handleChildrenCaptured_=function(e){var t=this.componentToRender_,n=t.config,o=t.tag;n.children=this.buildChildren_(e.config.children),this.componentToRender_=null,this.currentPrefix_=this.prevPrefix_,this.prevPrefix_=null,this.renderFromTag_(o,n)},n.prototype.handleChildRender_=function(e){if(e.tag&&m["default"].isComponentTag(e.tag))return e.config.children=this.buildChildren_(e.config.children),this.renderFromTag_(e.tag,e.config),!0},n.prototype.handleComponentRendererStateKeyChanged_=function(t){this.handleStateKeyChanged_(t),e.prototype.handleComponentRendererStateKeyChanged_.call(this,t)},n.prototype.handleInterceptedOpenCall_=function(e,t){return m["default"].isComponentTag(t)?this.handleSubComponentCall_.apply(this,arguments):this.handleRegularCall_.apply(this,arguments)},n.prototype.handleRegularCall_=function(e){for(var t=n.getComponentBeingRendered(),o=t.getRenderer(),r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];!o.rootElementReached_&&t.config.key&&(i[1]=t.config.key);var d=e.apply(null,i);return this.attachDecoratedListeners_(d,i),this.updateElementIfNotReached_(d),d},n.prototype.handleStateKeyChanged_=function(e){this.changes_[e.key]=e},n.prototype.handleSubComponentCall_=function(e){for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];var i=m["default"].buildConfigFromCall(o);i.ref=t.core.isDefAndNotNull(i.ref)?i.ref:this.buildRef(o[0]),this.componentToRender_={config:i,tag:o[0]},this.prevPrefix_=this.currentPrefix_,this.currentPrefix_=i.ref,this.generatedRefCount_[this.currentPrefix_]=0,_["default"].capture(this,this.handleChildrenCaptured_)},n.prototype.intercept_=function(){u["default"].startInterception({attributes:this.handleInterceptedAttributesCall_,elementOpen:this.handleInterceptedOpenCall_})},n.isIncDomNode=function(e){return!!e[_["default"].CHILD_OWNER]},n.prototype.getEventFromListenerAttr_=function(e){var t=n.LISTENER_REGEX.exec(e),o=t?t[1]?t[1]:t[2]:null;return o?o.toLowerCase():null},n.prototype.getParent=function(){return this.parent_},n.prototype.getOwner=function(){return this.owner_},n.render=function(e,t,r){if(!o.Component.isComponentCtor(e)){var i=e,a=function(e){function t(){return p(this,t),h(this,e.apply(this,arguments))}return s(t,e),t.prototype.created=function(){n.getComponentBeingRendered()&&this.getRenderer().updateContext_(this)},t.prototype.render=function(){i(this.config)},t}(o.Component);a.RENDERER=n,e=a}return o.Component.render(e,t,r)},n.prototype.render=function(){this.patch()},n.renderChild=function(e){e[_["default"].CHILD_OWNER].renderChild(e)},n.prototype.renderChild=function(e){this.intercept_(),_["default"].render(e,this.handleChildRender_),u["default"].stopInterception()},n.prototype.renderFromTag_=function(e,n){if(t.core.isString(e)||e.prototype.getRenderer){var o=this.renderSubComponent_(e,n);return this.updateElementIfNotReached_(o.element),o.element}return e(n)},n.prototype.renderIncDom=function(){this.component_.render?this.component_.render():IncrementalDOM.elementVoid("div")},n.prototype.renderInsidePatch=function(){return this.component_.wasRendered&&!this.shouldUpdate(this.changes_)&&IncrementalDOM.currentPointer()===this.component_.element?void(this.component_.element&&IncrementalDOM.skipNode()):void this.renderInsidePatchDontSkip_()},n.prototype.renderInsidePatchDontSkip_=function(){n.startedRenderingComponent(this.component_),this.changes_={},this.rootElementReached_=!1,f["default"].schedule(this.childComponents_||[]),this.childComponents_=[],this.generatedRefCount_={},this.listenersToAttach_=[],this.currentPrefix_="",this.intercept_(),this.renderIncDom(),u["default"].stopInterception(),this.rootElementReached_?this.component_.addElementClasses():this.component_.element=null,this.emit("rendered",!this.isRendered_),n.finishedRenderingComponent()},n.prototype.renderSubComponent_=function(e,t){var o=this.getSubComponent_(e,t);this.updateContext_(o);var r=o.getRenderer();if(r instanceof n){var i=n.getComponentBeingRendered();i.getRenderer().childComponents_.push(o),r.parent_=i,r.owner_=this.component_,r.renderInsidePatch()}return o.wasRendered||o.renderAsSubComponent(),o},n.prototype.setConfig_=function(e,n){var o=e.config;e.config=n,t.core.isFunction(e.configChanged)&&e.configChanged(n,o||{}),e.emit("configChanged",{prevVal:o,newVal:n})},n.prototype.shouldUpdate=function(e){return!this.component_.shouldUpdate||this.component_.shouldUpdate(e)},n.startedRenderingComponent=function(e){C.push(e)},n.prototype.patch=function(){if(!this.component_.element&&this.parent_)return void this.parent_.getRenderer().patch();var e=this.guaranteeParent_();if(e)IncrementalDOM.patch(e,this.renderInsidePatchDontSkip_),l["default"].exitDocument(this.component_.element),this.component_.element&&this.component_.inDocument&&this.component_.renderElement_(this.attachData_.parent,this.attachData_.sibling);else{var t=this.component_.element;IncrementalDOM.patchOuter(t,this.renderInsidePatchDontSkip_),this.component_.element||l["default"].exitDocument(t)}},n.prototype.update=function(){this.hasChangedBesidesElement_(this.changes_)&&this.shouldUpdate(this.changes_)&&this.patch()},n.prototype.updateElementIfNotReached_=function(e){var t=n.getComponentBeingRendered(),o=t.getRenderer();o.rootElementReached_||(o.rootElementReached_=!0,t.element!==e&&(t.element=e))},n.prototype.updateContext_=function(e){var o=e.context,r=n.getComponentBeingRendered(),i=r.getChildContext?r.getChildContext():{};t.object.mixin(o,r.context,i),e.context=o},n}(o.ComponentRenderer),C=[],y=[];g.LISTENER_REGEX=/^(?:on([A-Z]\w+))|(?:data-on(\w+))$/,e["default"]=g});