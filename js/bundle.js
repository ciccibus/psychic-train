(function () {
  'use strict';

  function render(component) {
    return function (oldState, newState) {
      document.body.innerHTML = component(newState);
    };
  }

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var dist = createCommonjsModule(function (module, exports) {
  function logger(e,t){console.group("Logger"),console.log("State:",JSON.stringify(e,null,2)),console.log("New State",JSON.stringify(t,null,2)),console.groupEnd();}function applyListeners(e,t,n){e.forEach(function(e){if("function"!=typeof e)throw new Error("Listener must be a function!");e(t,n);});}Object.defineProperty(exports,"__esModule",{value:!0});var store=function(){for(var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length,o=new Array(1<t?t-1:0),n=1;n<t;n++)o[n-1]=arguments[n];var r=new Proxy({},{set:function(e,t,n){var r=Object.assign({},e);return Reflect.set(e,t,n),applyListeners(o,r,e),!0}}),s=function(t){return Object.keys(t).forEach(function(e){Reflect.set(r,e,t[e]);}),Object.assign({},r,t)};return s(e),{getStore:function(){return Object.assign({},r)},setStore:s,find:function(e){return Reflect.get(r,e)}}};exports.logger=logger,exports.createStore=store;

  });

  unwrapExports(dist);
  var dist_1 = dist.logger;
  var dist_2 = dist.createStore;

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var taggedTemplateLiteral = _taggedTemplateLiteral;

  function _templateObject() {
    var data = taggedTemplateLiteral(["\n  <nav class=\"c-nav-bar c-nav-bar--bottom u-container--wide\">\n    <ul class=\"u-clean-list u-flex\">\n      <li class=\"c-nav-bar__item c-button ", " c-button--1-3\">\n        <a href=\"/career\"><i class=\"fab fa-black-tie fa-2x\"></i> <span class=\"u-visually-hidden\">Carrer</span></a>\n      </li>\n      <li class=\"c-nav-bar__item c-button ", " c-button--1-3\">\n        <a href=\"/new-year\"><i class=\"fas fa-user-clock fa-2x\"></i> <span class=\"u-visually-hidden\">News year</span></a>\n      </li>\n      <li class=\"c-nav-bar__item c-button ", " c-button--1-3\">\n        <a href=\"/profile\"><i class=\"fas fa-user-alt fa-2x\"></i> <span class=\"u-visually-hidden\">Profile</span></a>\n      </li>\n    </ul>\n  </nav>\n"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  var html = String.raw;

  var Nav = function Nav(props) {
    return html(_templateObject(), props.activeSection === "career" ? "c-nav-bar__item-priority" : "", props.activeSection === "new-year" ? "c-nav-bar__item-priority" : "", props.activeSection === "profile" ? "c-nav-bar__item-priority" : "");
  };

  var INITIAL_STATE = {
    activeSection: "new-year"
  };
  var state = dist_2(INITIAL_STATE, dist_1, render(Nav));
  setTimeout(function () {
    state.setStore({
      activeSection: "profile"
    });
  }, 3000);

}());
//# sourceMappingURL=bundle.js.map
