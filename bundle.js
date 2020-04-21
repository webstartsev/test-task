/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/filter/filter.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/filter/filter.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".filter {\n  margin-bottom: 1rem;\n  padding: 0 1rem;\n  display: inline-block;\n}\n\n.filter__input {\n  display: none;\n}\n\n.filter__label {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.filter__label:before {\n  content: '';\n  width: 1rem;\n  height: 1rem;\n  border-radius: 100%;\n  border: 1px solid #a9a9a9;\n  display: inline-block;\n  margin-right: 0.5rem;\n}\n\n.filter__input:checked + .filter__label:before {\n  background: red;\n  border: 1px solid #d90101;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/loader/loader.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/loader/loader.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".loader {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.loader div {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 64px;\n  height: 64px;\n  margin: 8px;\n  border: 8px solid #3498db;\n  border-radius: 50%;\n  animation: loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #3498db transparent transparent transparent;\n}\n\n.loader div:nth-child(1) {\n  animation-delay: -0.45s;\n}\n\n.loader div:nth-child(2) {\n  animation-delay: -0.3s;\n}\n\n.loader div:nth-child(3) {\n  animation-delay: -0.15s;\n}\n\n@keyframes loader {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/table/table.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/table/table.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".table-users {\n  min-width: 800px;\n}\n\n.table-users__head {\n  display: flex;\n  padding: 0.5rem 1rem;\n  background: #2980b9;\n  color: #fff;\n}\n\n.table-users__head .table-users__td {\n  font-size: 2rem;\n}\n\n.table-users__td {\n  min-width: 250px;\n}\n\n.table-users__td_type_id {\n  min-width: 50px;\n}\n\n.table-users__td_type_balance {\n  min-width: 110px;\n}\n\n.table-users__td_type_active {\n  min-width: 50px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/user/user.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/user/user.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./down-arrow.svg */ "./src/components/user/down-arrow.svg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".user {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 1rem;\n}\n\n.wrap {\n  border-top: 1px solid #ddd;\n}\n\n.user_parent {\n  position: relative;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\n.user_parent:hover {\n  background: #ecf0f1;\n}\n\n.user_parent:after {\n  content: '';\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  width: 1rem;\n  height: 1rem;\n  transition: transform 0.2s ease;\n}\n\n.user_parent_open:after {\n  transform: rotate(180deg);\n}\n\n.user__children {\n  display: none;\n  padding-left: 1rem;\n  box-sizing: border-box;\n  position: relative;\n}\n\n.user__children:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  width: 1rem;\n  bottom: 0;\n  background: #ddd;\n  height: 100%;\n}\n\n.user_parent .user {\n  margin-bottom: 0;\n}\n\n.user__children.user__children_open {\n  display: block;\n}\n\n.user__param {\n  min-width: 250px;\n}\n\n.user__param_type_id {\n  min-width: 50px;\n}\n\n.user__param_type_balance {\n  min-width: 110px;\n}\n\n.user__param_type_active {\n  min-width: 50px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".header__logo {\n  text-align: center;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Api; });
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/user */ "./src/model/user.js");
/* harmony import */ var _mock_users_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock/users.json */ "./src/mock/users.json");
var _mock_users_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../mock/users.json */ "./src/mock/users.json", 1);



class Api {
  getUsers() {
    return new Promise((resolve, reject) => {
      // Эмуляция загрузки данных
      setTimeout(() => {
        resolve(_model_user__WEBPACK_IMPORTED_MODULE_0__["default"].parseUsers(_mock_users_json__WEBPACK_IMPORTED_MODULE_1__));
      }, 500);
    });
  }
}


/***/ }),

/***/ "./src/components/abstract-component.js":
/*!**********************************************!*\
  !*** ./src/components/abstract-component.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractComponent; });
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");


class AbstractComponent {
  constructor() {
    if (new.target === AbstractComponent) {
      throw new Error(`Нельзя создавать экземляр AbstractComponent`);
    }

    this._element = null;
  }

  getTemplate() {
    throw new Error(`Абстрактный метод не реализован: getTemplate`);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_render__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/components/filter/filter.css":
/*!******************************************!*\
  !*** ./src/components/filter/filter.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./filter.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/filter/filter.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/filter/filter.js":
/*!*****************************************!*\
  !*** ./src/components/filter/filter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilterComponent; });
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-component */ "./src/components/abstract-component.js");
/* harmony import */ var _filter_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.css */ "./src/components/filter/filter.css");
/* harmony import */ var _filter_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_filter_css__WEBPACK_IMPORTED_MODULE_1__);



const createFilterTemplate = () => {
  return (
    `<form class="filter">
        <input type="checkbox" name="filter" class="filter__input" id="filter">
        <label for="filter" class="filter__label">Только активные</label>
     </form>`
  );
};

class FilterComponent extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createFilterTemplate();
  }

  onChangeHandler(handler) {
    this.getElement().querySelector('#filter').addEventListener('click', handler);
  }
}


/***/ }),

/***/ "./src/components/loader/loader.css":
/*!******************************************!*\
  !*** ./src/components/loader/loader.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./loader.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/loader/loader.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/loader/loader.js":
/*!*****************************************!*\
  !*** ./src/components/loader/loader.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoaderComponent; });
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-component */ "./src/components/abstract-component.js");
/* harmony import */ var _loader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.css */ "./src/components/loader/loader.css");
/* harmony import */ var _loader_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loader_css__WEBPACK_IMPORTED_MODULE_1__);



const createLoaderTemplate = () => {
  return (
    `<div class="loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>`
  );
};

class LoaderComponent extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createLoaderTemplate();
  }
}


/***/ }),

/***/ "./src/components/table/table.css":
/*!****************************************!*\
  !*** ./src/components/table/table.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./table.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/table/table.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/table/table.js":
/*!***************************************!*\
  !*** ./src/components/table/table.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TableComponent; });
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-component */ "./src/components/abstract-component.js");
/* harmony import */ var _table_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.css */ "./src/components/table/table.css");
/* harmony import */ var _table_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_table_css__WEBPACK_IMPORTED_MODULE_1__);



const createTableTemplate = () => {
  return (
    `<section class="table-users">
        <div class="table-users__head">
          <span class="table-users__td table-users__td_type_id">ID</span>
          <span class="table-users__td table-users__td_type_balance">Balance</span>
          <span class="table-users__td">Name</span>
          <span class="table-users__td">Email</span>
          <span class="table-users__td table-users__td_type_active">isActive</span>
        </div>
        <div class="table-users__body">

        </div>
     </section>`
  );
};

class TableComponent extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createTableTemplate();
  }
}


/***/ }),

/***/ "./src/components/user/down-arrow.svg":
/*!********************************************!*\
  !*** ./src/components/user/down-arrow.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6770dbd74dd84129c43c2a664c54c9c7.svg");

/***/ }),

/***/ "./src/components/user/user.css":
/*!**************************************!*\
  !*** ./src/components/user/user.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./user.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/user/user.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/user/user.js":
/*!*************************************!*\
  !*** ./src/components/user/user.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserComponent; });
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-component */ "./src/components/abstract-component.js");
/* harmony import */ var _user_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.css */ "./src/components/user/user.css");
/* harmony import */ var _user_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_user_css__WEBPACK_IMPORTED_MODULE_1__);



const createUserTemplate = ({id, balance, name, email, isActive, children}) => {
    const classes = ['user'];
    if (children && children.length) {
      classes.push('user_parent');
    }

    return (
      `<div class="wrap">
      <div class="${classes.join(' ')}" data-id="${id}">
        <span class="user__param user__param_type_id">${id}</span>
        <span class="user__param user__param_type_balance">${balance}</span>
        <span class="user__param">${name}</span>
        <span class="user__param">${email}</span>
        <span class="user__param user__param_type_active">${isActive}</span>
      </div>
      ${children && children.length ?
        `<div class="user__children" data-parent="${id}">
           ${children.map(child => createUserTemplate(child)).join('')}
        </div>` : ``}
    </div>`
    );
  }
;

class UserComponent extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(user) {
    super();

    this._user = user;
  }

  getTemplate() {
    return createUserTemplate(this._user);
  }

  setClickParentHandler() {
    const usersParent = this.getElement().querySelectorAll('.user_parent');

    usersParent.forEach(user => {
      user.addEventListener('click', () => {
        const parentId = user.dataset.id;
        const children = this.getElement().querySelector(
          `[data-parent="${parentId}"]`
        );

        user.classList.toggle('user_parent_open');
        children.classList.toggle('user__children_open');
      });
    });
  }
}


/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: FilterType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterType", function() { return FilterType; });
const FilterType = {
  ALL: 'all',
  IS_ACTIVE: 'isActive'
};


/***/ }),

/***/ "./src/controller/filter.js":
/*!**********************************!*\
  !*** ./src/controller/filter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilterController; });
/* harmony import */ var _components_filter_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/filter/filter */ "./src/components/filter/filter.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const */ "./src/const.js");




class FilterController {
  constructor(container, userModel) {
    this._container = container;
    this._userModel = userModel;
    this._filterComponent = null;
  }

  render() {
    this._filterComponent = new _components_filter_filter__WEBPACK_IMPORTED_MODULE_0__["default"]();

    this._filterComponent.onChangeHandler((evt) => {
      let filter = _const__WEBPACK_IMPORTED_MODULE_2__["FilterType"].ALL;
      if (evt.target.checked) {
        filter = _const__WEBPACK_IMPORTED_MODULE_2__["FilterType"].IS_ACTIVE;
      }

      this._userModel.setFilter(filter);
    });
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_1__["render"])(this._container, this._filterComponent, _utils_render__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].AFTERBEGIN);
  }

}


/***/ }),

/***/ "./src/controller/page.js":
/*!********************************!*\
  !*** ./src/controller/page.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageController; });
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
/* harmony import */ var _components_loader_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/loader/loader */ "./src/components/loader/loader.js");
/* harmony import */ var _components_table_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/table/table */ "./src/components/table/table.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./src/controller/user.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter */ "./src/controller/filter.js");






class PageController {
  constructor(container, usersModel) {
    this._container = container;
    this._usersModel = usersModel;
    this._users = [];
    this._usersListContainer = null;
    this._userControllers = [];

    this._loaderComponent = new _components_loader_loader__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this._tableComponent = new _components_table_table__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this._filterController = new _filter__WEBPACK_IMPORTED_MODULE_4__["default"](this._container, this._usersModel);

    this._onFilterChange = this._onFilterChange.bind(this);
    this.render = this.render.bind(this);

    this._usersModel.setFilterChangeHandler(this._onFilterChange);
    this._usersModel.setDataChangeHandler(this.render);
  }

  render(isLoadingData = false) {
    this._users = this._usersModel.prepearUsers(this._usersModel.getUsers());
    if (isLoadingData) {
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_0__["render"])(this._container, this._loaderComponent);
      return;
    } else {
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_0__["remove"])(this._loaderComponent);
    }

    this._filterController.render();
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_0__["render"])(this._container, this._tableComponent);

    this._usersListContainer = this._tableComponent.getElement().querySelector('.table-users__body');
    this._renderUsers(this._usersListContainer, this._users);
  }

  _onFilterChange() {
    this._updateUsers();
  }

  _updateUsers() {
    const users = this._usersModel.prepearUsers(this._usersModel.getUsers());
    this._removeUsers();
    this._renderUsers(this._usersListContainer, users);
  }

  _removeUsers() {
    this._userControllers.forEach(userController => userController.destroy());
    this._userControllers = [];
  }

  _renderUsers(container, users) {
    const newUsers = users.map(user => {
      const userController = new _user__WEBPACK_IMPORTED_MODULE_3__["default"](container);
      userController.render(user);

      return userController;
    });

    this._userControllers = [...newUsers];
  }
}


/***/ }),

/***/ "./src/controller/user.js":
/*!********************************!*\
  !*** ./src/controller/user.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserController; });
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
/* harmony import */ var _components_user_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/user/user */ "./src/components/user/user.js");



class UserController {
  constructor(container) {
    this._container = container;

    this._userComponent = null;
  }

  render(user) {
    this._userComponent = new _components_user_user__WEBPACK_IMPORTED_MODULE_1__["default"](user);
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_0__["render"])(this._container, this._userComponent);

    this._userComponent.setClickParentHandler();
  }

  destroy() {
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_0__["remove"])(this._userComponent);
  }
}


/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller/page */ "./src/controller/page.js");
/* harmony import */ var _model_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/users */ "./src/model/users.js");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/index */ "./src/api/index.js");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_3__);





const api = new _api_index__WEBPACK_IMPORTED_MODULE_2__["default"]();

const mainElement = document.querySelector(`.main`);

const usersModel = new _model_users__WEBPACK_IMPORTED_MODULE_1__["default"]();

const pageController = new _controller_page__WEBPACK_IMPORTED_MODULE_0__["default"](mainElement, usersModel);
pageController.render(true);

api.getUsers()
  .then(users => {
    usersModel.setUsers(users);
  });


/***/ }),

/***/ "./src/mock/users.json":
/*!*****************************!*\
  !*** ./src/mock/users.json ***!
  \*****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"parentId\":0,\"isActive\":true,\"balance\":\"$3,655.34\",\"name\":\"Yolanda Chavez\",\"email\":\"yolandachavez@isoplex.com\"},{\"id\":2,\"parentId\":0,\"isActive\":true,\"balance\":\"$1,247.87\",\"name\":\"Navarro Levy\",\"email\":\"navarrolevy@isoplex.com\"},{\"id\":3,\"parentId\":2,\"isActive\":true,\"balance\":\"$2,559.85\",\"name\":\"Wooten Hartman\",\"email\":\"wootenhartman@isoplex.com\"},{\"id\":4,\"parentId\":3,\"isActive\":false,\"balance\":\"$3,474.20\",\"name\":\"Mack Hess\",\"email\":\"mackhess@isoplex.com\"},{\"id\":5,\"parentId\":0,\"isActive\":false,\"balance\":\"$2,231.49\",\"name\":\"Jocelyn Burch\",\"email\":\"jocelynburch@isoplex.com\"},{\"id\":6,\"parentId\":5,\"isActive\":false,\"balance\":\"$3,955.44\",\"name\":\"Prince Daniel\",\"email\":\"princedaniel@isoplex.com\"},{\"id\":7,\"parentId\":5,\"isActive\":false,\"balance\":\"$1,994.83\",\"name\":\"Newton Medina\",\"email\":\"newtonmedina@isoplex.com\"},{\"id\":8,\"parentId\":0,\"isActive\":true,\"balance\":\"$1,311.17\",\"name\":\"Arnold Steele\",\"email\":\"arnoldsteele@isoplex.com\"},{\"id\":9,\"parentId\":0,\"isActive\":false,\"balance\":\"$2,313.46\",\"name\":\"Kitty Glover\",\"email\":\"kittyglover@isoplex.com\"},{\"id\":10,\"parentId\":9,\"isActive\":false,\"balance\":\"$3,314.14\",\"name\":\"Pruitt Spencer\",\"email\":\"pruittspencer@isoplex.com\"},{\"id\":11,\"parentId\":0,\"isActive\":false,\"balance\":\"$1,778.44\",\"name\":\"Stefanie Quinn\",\"email\":\"stefaniequinn@isoplex.com\"},{\"id\":12,\"parentId\":0,\"isActive\":true,\"balance\":\"$1,141.37\",\"name\":\"Fox Mcpherson\",\"email\":\"foxmcpherson@isoplex.com\"},{\"id\":13,\"parentId\":0,\"isActive\":false,\"balance\":\"$2,662.03\",\"name\":\"Rodriquez Young\",\"email\":\"rodriquezyoung@isoplex.com\"},{\"id\":14,\"parentId\":0,\"isActive\":false,\"balance\":\"$2,573.84\",\"name\":\"Love Byers\",\"email\":\"lovebyers@isoplex.com\"},{\"id\":15,\"parentId\":14,\"isActive\":false,\"balance\":\"$1,254.07\",\"name\":\"Banks Short\",\"email\":\"banksshort@isoplex.com\"},{\"id\":16,\"parentId\":14,\"isActive\":true,\"balance\":\"$3,820.34\",\"name\":\"Guthrie Brown\",\"email\":\"guthriebrown@isoplex.com\"},{\"id\":17,\"parentId\":16,\"isActive\":true,\"balance\":\"$2,884.74\",\"name\":\"Kirsten Mcmahon\",\"email\":\"kirstenmcmahon@isoplex.com\"},{\"id\":18,\"parentId\":1,\"isActive\":false,\"balance\":\"$1,694.76\",\"name\":\"Mcbride Sykes\",\"email\":\"mcbridesykes@isoplex.com\"},{\"id\":19,\"parentId\":1,\"isActive\":true,\"balance\":\"$3,644.56\",\"name\":\"Juanita Camacho\",\"email\":\"juanitacamacho@isoplex.com\"},{\"id\":20,\"parentId\":17,\"isActive\":false,\"balance\":\"$1,179.25\",\"name\":\"Carlene Little\",\"email\":\"carlenelittle@isoplex.com\"},{\"id\":21,\"parentId\":0,\"isActive\":true,\"balance\":\"$3,506.90\",\"name\":\"Caitlin Bernard\",\"email\":\"caitlinbernard@isoplex.com\"},{\"id\":22,\"parentId\":21,\"isActive\":false,\"balance\":\"$2,924.31\",\"name\":\"Vargas Lowe\",\"email\":\"vargaslowe@isoplex.com\"},{\"id\":23,\"parentId\":22,\"isActive\":false,\"balance\":\"$1,211.95\",\"name\":\"Mae Santiago\",\"email\":\"maesantiago@isoplex.com\"},{\"id\":24,\"parentId\":22,\"isActive\":true,\"balance\":\"$2,959.37\",\"name\":\"Gallagher Burnett\",\"email\":\"gallagherburnett@isoplex.com\"},{\"id\":25,\"parentId\":0,\"isActive\":false,\"balance\":\"$1,880.20\",\"name\":\"Reyna Mayo\",\"email\":\"reynamayo@isoplex.com\"},{\"id\":26,\"parentId\":0,\"isActive\":false,\"balance\":\"$1,639.69\",\"name\":\"Hardy Townsend\",\"email\":\"hardytownsend@isoplex.com\"},{\"id\":27,\"parentId\":0,\"isActive\":false,\"balance\":\"$3,211.26\",\"name\":\"Cohen Best\",\"email\":\"cohenbest@isoplex.com\"},{\"id\":28,\"parentId\":27,\"isActive\":true,\"balance\":\"$2,270.94\",\"name\":\"Sherrie Berger\",\"email\":\"sherrieberger@isoplex.com\"},{\"id\":29,\"parentId\":27,\"isActive\":false,\"balance\":\"$2,049.45\",\"name\":\"Gentry Robbins\",\"email\":\"gentryrobbins@isoplex.com\"},{\"id\":30,\"parentId\":0,\"isActive\":true,\"balance\":\"$1,177.86\",\"name\":\"Etta Sampson\",\"email\":\"ettasampson@isoplex.com\"}]");

/***/ }),

/***/ "./src/model/user.js":
/*!***************************!*\
  !*** ./src/model/user.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
class User {
  constructor(data) {
    this.id = data.id;
    this.parentId = data.parentId;
    this.isActive = data.isActive;
    this.balance = data.balance;
    this.name = data.name;
    this.email = data.email;
  }

  static parseUser(data) {
    return new User(data);
  }

  static parseUsers(data) {
    return data.map(User.parseUser);
  }
}


/***/ }),

/***/ "./src/model/users.js":
/*!****************************!*\
  !*** ./src/model/users.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UsersModel; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _utils_filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/filters */ "./src/utils/filters.js");
/* harmony import */ var _mock_users_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock/users.json */ "./src/mock/users.json");
var _mock_users_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../mock/users.json */ "./src/mock/users.json", 1);




class UsersModel {
  constructor() {
    this._users = _mock_users_json__WEBPACK_IMPORTED_MODULE_2__;
    this._activeFilterType = _const__WEBPACK_IMPORTED_MODULE_0__["FilterType"].ALL;

    this._filterChangeHandlers = [];
    this._dataChangeHandler = [];
  }

  getAllUsers() {
    return this._users;
  }

  getUsers() {
    return Object(_utils_filters__WEBPACK_IMPORTED_MODULE_1__["getUsersByFilters"])(this._users, this._activeFilterType);
  }

  setFilter(filterType) {
    this._activeFilterType = filterType;
    this._callHandlers(this._filterChangeHandlers);
  }

  setUsers(users) {
    this._users = Array.from(users);
    this._callHandlers(this._dataChangeHandler);
  }

  setFilterChangeHandler(handler) {
    this._filterChangeHandlers.push(handler);
  }

  setDataChangeHandler(handler) {
    this._dataChangeHandler.push(handler);
  }

  prepearUsers(users) {
    const copyUsers = [...users];
    const references = {};

    copyUsers.forEach(function (user) {
      references[user.id] = user;
      user.children = [];
    });

    for (let i = 0; i < copyUsers.length; i++) {
      const user = copyUsers[i];
      if (user.parentId !== 0 && references.hasOwnProperty(user.parentId)) {
        references[user.parentId].children.push(copyUsers.splice(i, 1)[0]);
        i--;
      }
    }

    return copyUsers;
  }

  _callHandlers(handlers) {
    handlers.forEach(handler => handler());
  }
}


/***/ }),

/***/ "./src/utils/filters.js":
/*!******************************!*\
  !*** ./src/utils/filters.js ***!
  \******************************/
/*! exports provided: getUsersByFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersByFilters", function() { return getUsersByFilters; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/const.js");


const getUsersByFilters = (users, filterType) => {
  switch (filterType) {
    case _const__WEBPACK_IMPORTED_MODULE_0__["FilterType"].IS_ACTIVE:
      return users.filter(user => user.isActive);
    default:
      return users;
  }
};


/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/*! exports provided: RenderPosition, createElement, render, remove, replace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const render = (container, component, place = RenderPosition.BEFOREEND) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(component.getElement());
      break;
    case RenderPosition.BEFOREEND:
      container.append(component.getElement());
      break;
  }
};

const remove = (component) => {
  component.getElement().remove();
  component.removeElement();
};

const replace = (newComponent, oldComponent) => {
  const parentElement = oldComponent.getElement().parentElement;
  const newElement = newComponent.getElement();
  const oldElement = oldComponent.getElement();

  if (parentElement.contains(oldElement)) {
    const {scrollTop, scrollLeft} = oldElement;

    newElement.style.animationDuration = `0s`;
    parentElement.replaceChild(newElement, oldElement);

    newElement.scrollTop = scrollTop;
    newElement.scrollLeft = scrollLeft;
  }
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map