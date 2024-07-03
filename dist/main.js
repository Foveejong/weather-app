/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: white;
}

::selection {
    background-color: plum;
}

:root {
    --standard-margin: 1rem;
}

dialog {
    background-color: black;
    border-radius: 20px;
    position: absolute;
    top: 40%;
    margin-left: auto; 
    margin-right: auto; 
}

.dialog-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 35px;
}

.error {
    font-size: 1.5rem;
}

::backdrop {
    background-color: black;
}

body {
    margin: 4rem 10rem;
    background-color: black;
}

.svg {
    height: 4rem;
    width: 4rem;
}

.asset {
    filter: invert(100%);
}

.title {
    font-size: 3rem;
}

.subheader {
    font-size: 1.5rem;
}

.top-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}

.form-container {
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    gap: 1rem;
}

.searchbar-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

button[type="button"]{
    text-align: center;
    width: 50px;
}

input, button {
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 10px;
    outline: none;
}

input {
    border: none;
    color: black;
}

button {
    background-color: rgb(93, 93, 93);
    border: 1px white solid;
    cursor: pointer;
}

.page-container {
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    min-height: 50vh;
    gap: 2rem;
}

.sidebar {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 2rem;
    min-width: 250px;
}

.sidebar .subheader {
    padding: 0 0 1rem 0;
}

.day-desc-container:nth-child(2) {
    white-space: normal;
}

.today-info-container {
    display: flex;
    flex-direction: column;
}

.today-info-container > * {
    flex: 1;
}

.forecast-days-container {
    display: flex;
    flex-direction: column;
}

.days-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
}

.days-container > * {
    flex: 1;
}

.day-container {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.day-desc-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.content-container {
    flex: 3;
    display: grid;
    grid-template-rows: 1fr;
}

.forecast {
    font-size: 2.5rem;
}

.full-forecast-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.info-container {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    gap: 1rem;
}

.each-info-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 1rem;
    border: 1px solid white;
    border-radius: 10px;
    padding: 1rem;
}

.img-text-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

img.min-temp {
    filter: invert(55%) sepia(100%) hue-rotate(150deg) saturate(3);
}

img.max-temp {
    filter: invert(55%) sepia(100%) hue-rotate(340deg) saturate(3);
}

img.avg-temp {
    filter: invert(60%) sepia(100%) hue-rotate(300deg) saturate(5);
}

img.humidity {
    filter: invert(30%) sepia(100%) hue-rotate(150deg) saturate(10);
}

img.chance-of-rain {
    filter: invert(30%) sepia(100%) hue-rotate(150deg) saturate(10);
}

.info {
    min-width: 150px;
    flex: 1;
}

.description-container{
    display: flex;
    align-items: flex-end;
}

.hourly-forecast-container {
    padding: 1rem 1rem 1rem 0;
    display: grid;
    gap: 1rem;
    grid-auto-flow: column;
    grid-auto-columns: clamp(125px, 20%, 200px);
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scroll-padding: 1rem;
}

.hourly-forecast-container > * {
    scroll-snap-align: start;
    min-width: 100px;
}

.hour {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 175px;
    border: 1px solid white;
    border-radius: 15px;
    > * {
        border: none;
    }
}

.hour > p {
    flex: 1;
    display: flex;
    align-items: center;
}

.hour > img {
    height: 5rem;
    width: 5rem;
    flex: 2;
}

`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    color: white;\n}\n\n::selection {\n    background-color: plum;\n}\n\n:root {\n    --standard-margin: 1rem;\n}\n\ndialog {\n    background-color: black;\n    border-radius: 20px;\n    position: absolute;\n    top: 40%;\n    margin-left: auto; \n    margin-right: auto; \n}\n\n.dialog-container {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 35px;\n}\n\n.error {\n    font-size: 1.5rem;\n}\n\n::backdrop {\n    background-color: black;\n}\n\nbody {\n    margin: 4rem 10rem;\n    background-color: black;\n}\n\n.svg {\n    height: 4rem;\n    width: 4rem;\n}\n\n.asset {\n    filter: invert(100%);\n}\n\n.title {\n    font-size: 3rem;\n}\n\n.subheader {\n    font-size: 1.5rem;\n}\n\n.top-container {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n    gap: 1rem;\n}\n\n.form-container {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: start;\n    gap: 1rem;\n}\n\n.searchbar-container {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 0.5rem;\n}\n\nbutton[type=\"button\"]{\n    text-align: center;\n    width: 50px;\n}\n\ninput, button {\n    font-size: 1.2rem;\n    padding: 10px;\n    border-radius: 10px;\n    outline: none;\n}\n\ninput {\n    border: none;\n    color: black;\n}\n\nbutton {\n    background-color: rgb(93, 93, 93);\n    border: 1px white solid;\n    cursor: pointer;\n}\n\n.page-container {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: start;\n    min-height: 50vh;\n    gap: 2rem;\n}\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    gap: 2rem;\n    min-width: 250px;\n}\n\n.sidebar .subheader {\n    padding: 0 0 1rem 0;\n}\n\n.day-desc-container:nth-child(2) {\n    white-space: normal;\n}\n\n.today-info-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.today-info-container > * {\n    flex: 1;\n}\n\n.forecast-days-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.days-container {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    \n}\n\n.days-container > * {\n    flex: 1;\n}\n\n.day-container {\n    display: flex;\n    gap: 2rem;\n    align-items: center;\n}\n\n.day-desc-container {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n}\n\n.content-container {\n    flex: 3;\n    display: grid;\n    grid-template-rows: 1fr;\n}\n\n.forecast {\n    font-size: 2.5rem;\n}\n\n.full-forecast-container {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.info-container {\n    display: flex;\n    flex-wrap: wrap;\n    flex: 1;\n    gap: 1rem;\n}\n\n.each-info-container {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    gap: 1rem;\n    border: 1px solid white;\n    border-radius: 10px;\n    padding: 1rem;\n}\n\n.img-text-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nimg.min-temp {\n    filter: invert(55%) sepia(100%) hue-rotate(150deg) saturate(3);\n}\n\nimg.max-temp {\n    filter: invert(55%) sepia(100%) hue-rotate(340deg) saturate(3);\n}\n\nimg.avg-temp {\n    filter: invert(60%) sepia(100%) hue-rotate(300deg) saturate(5);\n}\n\nimg.humidity {\n    filter: invert(30%) sepia(100%) hue-rotate(150deg) saturate(10);\n}\n\nimg.chance-of-rain {\n    filter: invert(30%) sepia(100%) hue-rotate(150deg) saturate(10);\n}\n\n.info {\n    min-width: 150px;\n    flex: 1;\n}\n\n.description-container{\n    display: flex;\n    align-items: flex-end;\n}\n\n.hourly-forecast-container {\n    padding: 1rem 1rem 1rem 0;\n    display: grid;\n    gap: 1rem;\n    grid-auto-flow: column;\n    grid-auto-columns: clamp(125px, 20%, 200px);\n    overflow-x: scroll;\n    scroll-snap-type: x mandatory;\n    scroll-padding: 1rem;\n}\n\n.hourly-forecast-container > * {\n    scroll-snap-align: start;\n    min-width: 100px;\n}\n\n.hour {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    min-height: 175px;\n    border: 1px solid white;\n    border-radius: 15px;\n    > * {\n        border: none;\n    }\n}\n\n.hour > p {\n    flex: 1;\n    display: flex;\n    align-items: center;\n}\n\n.hour > img {\n    height: 5rem;\n    width: 5rem;\n    flex: 2;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


// fetch(
//     'https://api.weatherapi.com/v1/current.json?key=91e2728ed3854429add53229242906&q=singapore'
// )
//     .then((response) => {
//         return response.json();
//     })
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

class Country {
  constructor(name, country, time) {
    this.name = name;
    this.country = country;
    this.time = time;
  }
  editCountryDom() {
    const countryTitle = document.querySelector('.subheader.country');
    const timeTitle = document.querySelector('.subheader.time');
    countryTitle.textContent = `${this.name}, ${this.country}`;
    timeTitle.textContent = `${this.time}`;
  }
}
class Hour {
  constructor(time, img, info) {
    this.time = time;
    this.img = img;
    this.info = info;
  }
  createHourDom(measurement) {
    const div = document.createElement('div');
    const hourTime = document.createElement('p');
    const content = document.createElement('p');
    const image = document.createElement('img');
    div.classList.add('hour');
    image.src = `https:` + this.img;
    hourTime.textContent = this.time;
    content.textContent = this.info + `\u00B0C`;
    if (measurement === 'weatherDataCelsius') {
      content.textContent = this.info + `\u00B0C`;
    } else {
      content.textContent = this.info + `\u00B0F`;
    }
    div.appendChild(hourTime);
    div.appendChild(image);
    div.appendChild(content);
    return div;
  }
}
class Day {
  constructor(max, min, avg, humidity, rain, description, icon) {
    this.max = max;
    this.min = min;
    this.avg = avg;
    this.humidity = humidity;
    this.rain = rain;
    this.description = description;
    this.icon = icon;
  }
  create3DaysForecastDom(measurement) {
    const div = document.createElement('div');
    const image = document.createElement('img');
    const descriptionContainer = document.createElement('div');
    const avgtemp = document.createElement('p');
    const text = document.createElement('p');
    const chance = document.createElement('p');
    image.src = `https:` + this.icon;
    text.textContent = this.description;
    chance.textContent = this.rain + '%';
    if (measurement === 'weatherDataCelsius') {
      avgtemp.textContent = this.avg + `\u00B0C`;
    } else {
      avgtemp.textContent = this.avg + `\u00B0F`;
    }
    div.classList.add('day-container');
    image.classList.add('svg');
    descriptionContainer.classList.add('day-desc-container');
    descriptionContainer.appendChild(avgtemp);
    descriptionContainer.appendChild(text);
    descriptionContainer.appendChild(chance);
    div.appendChild(image);
    div.appendChild(descriptionContainer);
    return div;
  }
}
function updateForecast(max, min, avg, humidity, chance, description, measurement) {
  let maxDom = document.querySelector('#max-temp');
  let minDom = document.querySelector('#min-temp');
  let avgDom = document.querySelector('#avg-temp');
  if (measurement === 'weatherDataCelsius') {
    maxDom.textContent = max + `\u00B0C`;
    minDom.textContent = min + `\u00B0C`;
    avgDom.textContent = avg + `\u00B0C`;
  } else {
    maxDom.textContent = max + `\u00B0F`;
    minDom.textContent = min + `\u00B0F`;
    avgDom.textContent = avg + `\u00B0F`;
  }
  document.querySelector('#humidity').textContent = humidity + '%';
  document.querySelector('#chance-of-rain').textContent = chance + '%';
  document.querySelector('.description-container > p').textContent = "Today's Description: " + description;
}
function resetDom() {
  const hourly = document.querySelector('.hourly-forecast-container');
  const daysContainer = document.querySelector('.days-container');
  const countryTitle = document.querySelector('.subheader.country');
  const timeTitle = document.querySelector('.subheader.time');
  const minDom = document.querySelector('#min-temp');
  const maxDom = document.querySelector('#max-temp');
  const avgDom = document.querySelector('#avg-temp');
  const humidityDom = document.querySelector('#humidity');
  const chanceDom = document.querySelector('#chance-of-rain');
  hourly.textContent = '';
  daysContainer.textContent = '';
  countryTitle.textContent = '';
  timeTitle.textContent = '';
  minDom.textContent = '';
  maxDom.textContent = '';
  avgDom.textContent = '';
  humidityDom.textContent = '';
  chanceDom.textContent = '';
}
function handleError(err) {
  const errorDiv = document.querySelector('.error');
  document.querySelector('dialog').showModal();
  const bandage = String.fromCodePoint(0x1f915);
  const angry = String.fromCodePoint(0x1f621);
  if (err.code === 1003) {
    errorDiv.textContent = `Please enter something!! ${bandage}`;
  } else if (err.code === 1006) {
    errorDiv.textContent = `Please enter a valid country!! ${angry}`;
  }
}
function domController() {
  const form = document.querySelector('form');
  const hourly = document.querySelector('.hourly-forecast-container');
  const daysContainer = document.querySelector('.days-container');
  const closeBtn = document.querySelector('#close');
  const measurementBtn = document.querySelector('.measurement');
  let measurement = measurementBtn.getAttribute('data');
  measurementBtn.addEventListener('click', () => {
    measurement = measurement === 'weatherDataCelsius' ? 'weatherDataFahrenheit' : 'weatherDataCelsius';
    measurementBtn.textContent = measurement === 'weatherDataCelsius' ? '\u00B0C' : '\u00B0F';
  });
  closeBtn.addEventListener('click', () => {
    document.querySelector('dialog').close();
  });
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const data = await getWeatherData(document.querySelector('input').value);
    resetDom();
    data.today.forEach(hour => {
      const currentHour = new Hour(hour[measurement].time, hour[measurement].icon, hour[measurement].temp);
      hourly.appendChild(currentHour.createHourDom(measurement));
    });
    data.days.forEach(day => {
      const currentDay = new Day(day[measurement].max, day[measurement].min, day[measurement].avg, day[measurement].humidity, day[measurement].rain, day[measurement].description, day[measurement].icon);
      daysContainer.appendChild(currentDay.create3DaysForecastDom(measurement));
    });
    const currentDay = data.days[0];
    updateForecast(currentDay[measurement].max, currentDay[measurement].min, currentDay[measurement].avg, currentDay[measurement].humidity, currentDay[measurement].rain, currentDay[measurement].description, measurement);
    const userCountry = new Country(data.country.name, data.country.country, data.country.time);
    userCountry.editCountryDom();
  });
}
const getWeatherData = async function () {
  let input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Singapore';
  try {
    // data for all 3 days
    const data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=91e2728ed3854429add53229242906&q=${input}&days=3`, {
      mode: 'cors'
    });
    const response = await data.json();

    // error handler
    if (response.error) handleError(response.error);
    const forecastdata = response.forecast.forecastday;

    // get country data
    const countrydata = response.location;
    const country = createCountryObj(countrydata.name, countrydata.country, countrydata.localtime);

    // today's data
    const today = [];
    const todaydata = forecastdata[0].hour;
    todaydata.forEach(hourdata => {
      const hour = {};
      hour.weatherDataCelsius = createHourObj(hourdata.time.split(' ')[1], hourdata.temp_c, hourdata.condition.icon);
      hour.weatherDataFahrenheit = createHourObj(hourdata.time.split(' ')[1], hourdata.temp_f, hourdata.condition.icon);
      today.push(hour);
    });

    // forecast data
    const days = [];
    forecastdata.forEach(daydata => {
      const day = {};
      day.weatherDataCelsius = createWeatherObj(daydata.day.maxtemp_c, daydata.day.mintemp_c, daydata.day.avgtemp_c, daydata.day.avghumidity, daydata.day.daily_chance_of_rain, daydata.day.condition.text, daydata.day.condition.icon);
      day.weatherDataFahrenheit = createWeatherObj(daydata.day.maxtemp_f, daydata.day.mintemp_f, daydata.day.avgtemp_f, daydata.day.avghumidity, daydata.day.daily_chance_of_rain, daydata.day.condition.text, daydata.day.condition.icon);
      days.push(day);
    });
    return {
      country,
      today,
      days
    };
  } catch (error) {
    console.log(error);
  }
};
const createCountryObj = (name, country, time) => {
  return {
    name,
    country,
    time
  };
};
const createWeatherObj = (max, min, avg, humidity, rain, description, icon) => {
  return {
    max,
    min,
    avg,
    humidity,
    rain,
    description,
    icon
  };
};
const createHourObj = (time, temp, icon) => {
  return {
    time,
    temp,
    icon
  };
};
domController();
getWeatherData();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0s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LElBQUk7SUFDSm9FLElBQUk7SUFDSnhDO0VBQ0osQ0FBQztBQUNMLENBQUM7QUFFRHdCLGFBQWEsQ0FBQyxDQUFDO0FBQ2ZVLGNBQWMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuOjpzZWxlY3Rpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHBsdW07XG59XG5cbjpyb290IHtcbiAgICAtLXN0YW5kYXJkLW1hcmdpbjogMXJlbTtcbn1cblxuZGlhbG9nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bzsgXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyBcbn1cblxuLmRpYWxvZy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG4gICAgcGFkZGluZzogMzVweDtcbn1cblxuLmVycm9yIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuOjpiYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjogNHJlbSAxMHJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLnN2ZyB7XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIHdpZHRoOiA0cmVtO1xufVxuXG4uYXNzZXQge1xuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xufVxuXG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLnN1YmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi50b3AtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIGdhcDogMXJlbTtcbn1cblxuLnNlYXJjaGJhci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMC41cmVtO1xufVxuXG5idXR0b25bdHlwZT1cImJ1dHRvblwiXXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwcHg7XG59XG5cbmlucHV0LCBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG5pbnB1dCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTMsIDkzLCA5Myk7XG4gICAgYm9yZGVyOiAxcHggd2hpdGUgc29saWQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucGFnZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBtaW4taGVpZ2h0OiA1MHZoO1xuICAgIGdhcDogMnJlbTtcbn1cblxuLnNpZGViYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4OiAxO1xuICAgIGdhcDogMnJlbTtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xufVxuXG4uc2lkZWJhciAuc3ViaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAwIDAgMXJlbSAwO1xufVxuXG4uZGF5LWRlc2MtY29udGFpbmVyOm50aC1jaGlsZCgyKSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLnRvZGF5LWluZm8tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50b2RheS1pbmZvLWNvbnRhaW5lciA+ICoge1xuICAgIGZsZXg6IDE7XG59XG5cbi5mb3JlY2FzdC1kYXlzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZGF5cy1jb250YWluZXIge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbiAgICBcbn1cblxuLmRheXMtY29udGFpbmVyID4gKiB7XG4gICAgZmxleDogMTtcbn1cblxuLmRheS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAycmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kYXktZGVzYy1jb250YWluZXIge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMnB4O1xufVxuXG4uY29udGVudC1jb250YWluZXIge1xuICAgIGZsZXg6IDM7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbn1cblxuLmZvcmVjYXN0IHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuLmZ1bGwtZm9yZWNhc3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4uaW5mby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXg6IDE7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4uZWFjaC1pbmZvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXg6IDE7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxuLmltZy10ZXh0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW1nLm1pbi10ZW1wIHtcbiAgICBmaWx0ZXI6IGludmVydCg1NSUpIHNlcGlhKDEwMCUpIGh1ZS1yb3RhdGUoMTUwZGVnKSBzYXR1cmF0ZSgzKTtcbn1cblxuaW1nLm1heC10ZW1wIHtcbiAgICBmaWx0ZXI6IGludmVydCg1NSUpIHNlcGlhKDEwMCUpIGh1ZS1yb3RhdGUoMzQwZGVnKSBzYXR1cmF0ZSgzKTtcbn1cblxuaW1nLmF2Zy10ZW1wIHtcbiAgICBmaWx0ZXI6IGludmVydCg2MCUpIHNlcGlhKDEwMCUpIGh1ZS1yb3RhdGUoMzAwZGVnKSBzYXR1cmF0ZSg1KTtcbn1cblxuaW1nLmh1bWlkaXR5IHtcbiAgICBmaWx0ZXI6IGludmVydCgzMCUpIHNlcGlhKDEwMCUpIGh1ZS1yb3RhdGUoMTUwZGVnKSBzYXR1cmF0ZSgxMCk7XG59XG5cbmltZy5jaGFuY2Utb2YtcmFpbiB7XG4gICAgZmlsdGVyOiBpbnZlcnQoMzAlKSBzZXBpYSgxMDAlKSBodWUtcm90YXRlKDE1MGRlZykgc2F0dXJhdGUoMTApO1xufVxuXG4uaW5mbyB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBmbGV4OiAxO1xufVxuXG4uZGVzY3JpcHRpb24tY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4uaG91cmx5LWZvcmVjYXN0LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMXJlbSAxcmVtIDFyZW0gMDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMXJlbTtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgIGdyaWQtYXV0by1jb2x1bW5zOiBjbGFtcCgxMjVweCwgMjAlLCAyMDBweCk7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xuICAgIHNjcm9sbC1wYWRkaW5nOiAxcmVtO1xufVxuXG4uaG91cmx5LWZvcmVjYXN0LWNvbnRhaW5lciA+ICoge1xuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xufVxuXG4uaG91ciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogMTc1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICA+ICoge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxufVxuXG4uaG91ciA+IHAge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaG91ciA+IGltZyB7XG4gICAgaGVpZ2h0OiA1cmVtO1xuICAgIHdpZHRoOiA1cmVtO1xuICAgIGZsZXg6IDI7XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtJQUN0Qiw2RUFBNkU7SUFDN0UsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1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QUF1QjtJQUN2QixtQkFBbUI7SUFDbkI7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsT0FBTztBQUNYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbjo6c2VsZWN0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGx1bTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLXN0YW5kYXJkLW1hcmdpbjogMXJlbTtcXG59XFxuXFxuZGlhbG9nIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyBcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyBcXG59XFxuXFxuLmRpYWxvZy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBhZGRpbmc6IDM1cHg7XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG46OmJhY2tkcm9wIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDRyZW0gMTByZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc3ZnIHtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICB3aWR0aDogNHJlbTtcXG59XFxuXFxuLmFzc2V0IHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLnN1YmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udG9wLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5zZWFyY2hiYXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuYnV0dG9uW3R5cGU9XFxcImJ1dHRvblxcXCJde1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG5pbnB1dCwgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MywgOTMsIDkzKTtcXG4gICAgYm9yZGVyOiAxcHggd2hpdGUgc29saWQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBhZ2UtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAxO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxufVxcblxcbi5zaWRlYmFyIC5zdWJoZWFkZXIge1xcbiAgICBwYWRkaW5nOiAwIDAgMXJlbSAwO1xcbn1cXG5cXG4uZGF5LWRlc2MtY29udGFpbmVyOm50aC1jaGlsZCgyKSB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxufVxcblxcbi50b2RheS1pbmZvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RheS1pbmZvLWNvbnRhaW5lciA+ICoge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGF5cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZGF5cy1jb250YWluZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIFxcbn1cXG5cXG4uZGF5cy1jb250YWluZXIgPiAqIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmRheS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kYXktZGVzYy1jb250YWluZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJweDtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgZmxleDogMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4uZnVsbC1mb3JlY2FzdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5pbmZvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZmxleDogMTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZWFjaC1pbmZvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDE7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5pbWctdGV4dC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmltZy5taW4tdGVtcCB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDU1JSkgc2VwaWEoMTAwJSkgaHVlLXJvdGF0ZSgxNTBkZWcpIHNhdHVyYXRlKDMpO1xcbn1cXG5cXG5pbWcubWF4LXRlbXAge1xcbiAgICBmaWx0ZXI6IGludmVydCg1NSUpIHNlcGlhKDEwMCUpIGh1ZS1yb3RhdGUoMzQwZGVnKSBzYXR1cmF0ZSgzKTtcXG59XFxuXFxuaW1nLmF2Zy10ZW1wIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoNjAlKSBzZXBpYSgxMDAlKSBodWUtcm90YXRlKDMwMGRlZykgc2F0dXJhdGUoNSk7XFxufVxcblxcbmltZy5odW1pZGl0eSB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDMwJSkgc2VwaWEoMTAwJSkgaHVlLXJvdGF0ZSgxNTBkZWcpIHNhdHVyYXRlKDEwKTtcXG59XFxuXFxuaW1nLmNoYW5jZS1vZi1yYWluIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMzAlKSBzZXBpYSgxMDAlKSBodWUtcm90YXRlKDE1MGRlZykgc2F0dXJhdGUoMTApO1xcbn1cXG5cXG4uaW5mbyB7XFxuICAgIG1pbi13aWR0aDogMTUwcHg7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLmhvdXJseS1mb3JlY2FzdC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtYXV0by1jb2x1bW5zOiBjbGFtcCgxMjVweCwgMjAlLCAyMDBweCk7XFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gICAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XFxuICAgIHNjcm9sbC1wYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uaG91cmx5LWZvcmVjYXN0LWNvbnRhaW5lciA+ICoge1xcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XFxuICAgIG1pbi13aWR0aDogMTAwcHg7XFxufVxcblxcbi5ob3VyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDE3NXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgPiAqIHtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG4uaG91ciA+IHAge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaG91ciA+IGltZyB7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgd2lkdGg6IDVyZW07XFxuICAgIGZsZXg6IDI7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbi8vIGZldGNoKFxuLy8gICAgICdodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTkxZTI3MjhlZDM4NTQ0MjlhZGQ1MzIyOTI0MjkwNiZxPXNpbmdhcG9yZSdcbi8vIClcbi8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbi8vICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbi8vICAgICB9KVxuLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4vLyAgICAgfSlcbi8vICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbi8vICAgICB9KTtcblxuY2xhc3MgQ291bnRyeSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgY291bnRyeSwgdGltZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNvdW50cnkgPSBjb3VudHJ5O1xuICAgICAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgIH1cblxuICAgIGVkaXRDb3VudHJ5RG9tKCkge1xuICAgICAgICBjb25zdCBjb3VudHJ5VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ViaGVhZGVyLmNvdW50cnknKTtcbiAgICAgICAgY29uc3QgdGltZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1YmhlYWRlci50aW1lJyk7XG4gICAgICAgIGNvdW50cnlUaXRsZS50ZXh0Q29udGVudCA9IGAke3RoaXMubmFtZX0sICR7dGhpcy5jb3VudHJ5fWA7XG4gICAgICAgIHRpbWVUaXRsZS50ZXh0Q29udGVudCA9IGAke3RoaXMudGltZX1gO1xuICAgIH1cbn1cblxuY2xhc3MgSG91ciB7XG4gICAgY29uc3RydWN0b3IodGltZSwgaW1nLCBpbmZvKSB7XG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgICAgIHRoaXMuaW1nID0gaW1nO1xuICAgICAgICB0aGlzLmluZm8gPSBpbmZvO1xuICAgIH1cblxuICAgIGNyZWF0ZUhvdXJEb20obWVhc3VyZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGhvdXJUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdob3VyJyk7XG4gICAgICAgIGltYWdlLnNyYyA9IGBodHRwczpgICsgdGhpcy5pbWc7XG4gICAgICAgIGhvdXJUaW1lLnRleHRDb250ZW50ID0gdGhpcy50aW1lO1xuICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gdGhpcy5pbmZvICsgYFxcdTAwQjBDYDtcblxuICAgICAgICBpZiAobWVhc3VyZW1lbnQgPT09ICd3ZWF0aGVyRGF0YUNlbHNpdXMnKSB7XG4gICAgICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gdGhpcy5pbmZvICsgYFxcdTAwQjBDYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSB0aGlzLmluZm8gKyBgXFx1MDBCMEZgO1xuICAgICAgICB9XG5cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGhvdXJUaW1lKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfVxufVxuXG5jbGFzcyBEYXkge1xuICAgIGNvbnN0cnVjdG9yKG1heCwgbWluLCBhdmcsIGh1bWlkaXR5LCByYWluLCBkZXNjcmlwdGlvbiwgaWNvbikge1xuICAgICAgICB0aGlzLm1heCA9IG1heDtcbiAgICAgICAgdGhpcy5taW4gPSBtaW47XG4gICAgICAgIHRoaXMuYXZnID0gYXZnO1xuICAgICAgICB0aGlzLmh1bWlkaXR5ID0gaHVtaWRpdHk7XG4gICAgICAgIHRoaXMucmFpbiA9IHJhaW47XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5pY29uID0gaWNvbjtcbiAgICB9XG5cbiAgICBjcmVhdGUzRGF5c0ZvcmVjYXN0RG9tKG1lYXN1cmVtZW50KSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBhdmd0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBjaGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgaW1hZ2Uuc3JjID0gYGh0dHBzOmAgKyB0aGlzLmljb247XG4gICAgICAgIHRleHQudGV4dENvbnRlbnQgPSB0aGlzLmRlc2NyaXB0aW9uO1xuICAgICAgICBjaGFuY2UudGV4dENvbnRlbnQgPSB0aGlzLnJhaW4gKyAnJSc7XG5cbiAgICAgICAgaWYgKG1lYXN1cmVtZW50ID09PSAnd2VhdGhlckRhdGFDZWxzaXVzJykge1xuICAgICAgICAgICAgYXZndGVtcC50ZXh0Q29udGVudCA9IHRoaXMuYXZnICsgYFxcdTAwQjBDYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF2Z3RlbXAudGV4dENvbnRlbnQgPSB0aGlzLmF2ZyArIGBcXHUwMEIwRmA7XG4gICAgICAgIH1cblxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZGF5LWNvbnRhaW5lcicpO1xuICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdzdmcnKTtcbiAgICAgICAgZGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGF5LWRlc2MtY29udGFpbmVyJyk7XG5cbiAgICAgICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoYXZndGVtcCk7XG4gICAgICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGFuY2UpO1xuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkNvbnRhaW5lcik7XG5cbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUZvcmVjYXN0KFxuICAgIG1heCxcbiAgICBtaW4sXG4gICAgYXZnLFxuICAgIGh1bWlkaXR5LFxuICAgIGNoYW5jZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBtZWFzdXJlbWVudFxuKSB7XG4gICAgbGV0IG1heERvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXgtdGVtcCcpO1xuICAgIGxldCBtaW5Eb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWluLXRlbXAnKTtcbiAgICBsZXQgYXZnRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2F2Zy10ZW1wJyk7XG4gICAgaWYgKG1lYXN1cmVtZW50ID09PSAnd2VhdGhlckRhdGFDZWxzaXVzJykge1xuICAgICAgICBtYXhEb20udGV4dENvbnRlbnQgPSBtYXggKyBgXFx1MDBCMENgO1xuICAgICAgICBtaW5Eb20udGV4dENvbnRlbnQgPSBtaW4gKyBgXFx1MDBCMENgO1xuICAgICAgICBhdmdEb20udGV4dENvbnRlbnQgPSBhdmcgKyBgXFx1MDBCMENgO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1heERvbS50ZXh0Q29udGVudCA9IG1heCArIGBcXHUwMEIwRmA7XG4gICAgICAgIG1pbkRvbS50ZXh0Q29udGVudCA9IG1pbiArIGBcXHUwMEIwRmA7XG4gICAgICAgIGF2Z0RvbS50ZXh0Q29udGVudCA9IGF2ZyArIGBcXHUwMEIwRmA7XG4gICAgfVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1pZGl0eScpLnRleHRDb250ZW50ID0gaHVtaWRpdHkgKyAnJSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYW5jZS1vZi1yYWluJykudGV4dENvbnRlbnQgPSBjaGFuY2UgKyAnJSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uLWNvbnRhaW5lciA+IHAnKS50ZXh0Q29udGVudCA9XG4gICAgICAgIFwiVG9kYXkncyBEZXNjcmlwdGlvbjogXCIgKyBkZXNjcmlwdGlvbjtcbn1cblxuZnVuY3Rpb24gcmVzZXREb20oKSB7XG4gICAgY29uc3QgaG91cmx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXJseS1mb3JlY2FzdC1jb250YWluZXInKTtcbiAgICBjb25zdCBkYXlzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheXMtY29udGFpbmVyJyk7XG4gICAgY29uc3QgY291bnRyeVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1YmhlYWRlci5jb3VudHJ5Jyk7XG4gICAgY29uc3QgdGltZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1YmhlYWRlci50aW1lJyk7XG4gICAgY29uc3QgbWluRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21pbi10ZW1wJyk7XG4gICAgY29uc3QgbWF4RG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21heC10ZW1wJyk7XG4gICAgY29uc3QgYXZnRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2F2Zy10ZW1wJyk7XG4gICAgY29uc3QgaHVtaWRpdHlEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtaWRpdHknKTtcbiAgICBjb25zdCBjaGFuY2VEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhbmNlLW9mLXJhaW4nKTtcblxuICAgIGhvdXJseS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGRheXNDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb3VudHJ5VGl0bGUudGV4dENvbnRlbnQgPSAnJztcbiAgICB0aW1lVGl0bGUudGV4dENvbnRlbnQgPSAnJztcbiAgICBtaW5Eb20udGV4dENvbnRlbnQgPSAnJztcbiAgICBtYXhEb20udGV4dENvbnRlbnQgPSAnJztcbiAgICBhdmdEb20udGV4dENvbnRlbnQgPSAnJztcbiAgICBodW1pZGl0eURvbS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGNoYW5jZURvbS50ZXh0Q29udGVudCA9ICcnO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVFcnJvcihlcnIpIHtcbiAgICBjb25zdCBlcnJvckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZycpLnNob3dNb2RhbCgpO1xuICAgIGNvbnN0IGJhbmRhZ2UgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCgweDFmOTE1KTtcbiAgICBjb25zdCBhbmdyeSA9IFN0cmluZy5mcm9tQ29kZVBvaW50KDB4MWY2MjEpO1xuICAgIGlmIChlcnIuY29kZSA9PT0gMTAwMykge1xuICAgICAgICBlcnJvckRpdi50ZXh0Q29udGVudCA9IGBQbGVhc2UgZW50ZXIgc29tZXRoaW5nISEgJHtiYW5kYWdlfWA7XG4gICAgfSBlbHNlIGlmIChlcnIuY29kZSA9PT0gMTAwNikge1xuICAgICAgICBlcnJvckRpdi50ZXh0Q29udGVudCA9IGBQbGVhc2UgZW50ZXIgYSB2YWxpZCBjb3VudHJ5ISEgJHthbmdyeX1gO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZG9tQ29udHJvbGxlcigpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgIGNvbnN0IGhvdXJseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VybHktZm9yZWNhc3QtY29udGFpbmVyJyk7XG4gICAgY29uc3QgZGF5c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXlzLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlJyk7XG4gICAgY29uc3QgbWVhc3VyZW1lbnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVhc3VyZW1lbnQnKTtcbiAgICBsZXQgbWVhc3VyZW1lbnQgPSBtZWFzdXJlbWVudEJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEnKTtcblxuICAgIG1lYXN1cmVtZW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBtZWFzdXJlbWVudCA9XG4gICAgICAgICAgICBtZWFzdXJlbWVudCA9PT0gJ3dlYXRoZXJEYXRhQ2Vsc2l1cydcbiAgICAgICAgICAgICAgICA/ICd3ZWF0aGVyRGF0YUZhaHJlbmhlaXQnXG4gICAgICAgICAgICAgICAgOiAnd2VhdGhlckRhdGFDZWxzaXVzJztcblxuICAgICAgICBtZWFzdXJlbWVudEJ0bi50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICBtZWFzdXJlbWVudCA9PT0gJ3dlYXRoZXJEYXRhQ2Vsc2l1cycgPyAnXFx1MDBCMEMnIDogJ1xcdTAwQjBGJztcbiAgICB9KTtcblxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cnKS5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWVcbiAgICAgICAgKTtcbiAgICAgICAgcmVzZXREb20oKTtcbiAgICAgICAgZGF0YS50b2RheS5mb3JFYWNoKChob3VyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SG91ciA9IG5ldyBIb3VyKFxuICAgICAgICAgICAgICAgIGhvdXJbbWVhc3VyZW1lbnRdLnRpbWUsXG4gICAgICAgICAgICAgICAgaG91clttZWFzdXJlbWVudF0uaWNvbixcbiAgICAgICAgICAgICAgICBob3VyW21lYXN1cmVtZW50XS50ZW1wXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaG91cmx5LmFwcGVuZENoaWxkKGN1cnJlbnRIb3VyLmNyZWF0ZUhvdXJEb20obWVhc3VyZW1lbnQpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGF0YS5kYXlzLmZvckVhY2goKGRheSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudERheSA9IG5ldyBEYXkoXG4gICAgICAgICAgICAgICAgZGF5W21lYXN1cmVtZW50XS5tYXgsXG4gICAgICAgICAgICAgICAgZGF5W21lYXN1cmVtZW50XS5taW4sXG4gICAgICAgICAgICAgICAgZGF5W21lYXN1cmVtZW50XS5hdmcsXG4gICAgICAgICAgICAgICAgZGF5W21lYXN1cmVtZW50XS5odW1pZGl0eSxcbiAgICAgICAgICAgICAgICBkYXlbbWVhc3VyZW1lbnRdLnJhaW4sXG4gICAgICAgICAgICAgICAgZGF5W21lYXN1cmVtZW50XS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBkYXlbbWVhc3VyZW1lbnRdLmljb25cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBkYXlzQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgIGN1cnJlbnREYXkuY3JlYXRlM0RheXNGb3JlY2FzdERvbShtZWFzdXJlbWVudClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXkgPSBkYXRhLmRheXNbMF07XG4gICAgICAgIHVwZGF0ZUZvcmVjYXN0KFxuICAgICAgICAgICAgY3VycmVudERheVttZWFzdXJlbWVudF0ubWF4LFxuICAgICAgICAgICAgY3VycmVudERheVttZWFzdXJlbWVudF0ubWluLFxuICAgICAgICAgICAgY3VycmVudERheVttZWFzdXJlbWVudF0uYXZnLFxuICAgICAgICAgICAgY3VycmVudERheVttZWFzdXJlbWVudF0uaHVtaWRpdHksXG4gICAgICAgICAgICBjdXJyZW50RGF5W21lYXN1cmVtZW50XS5yYWluLFxuICAgICAgICAgICAgY3VycmVudERheVttZWFzdXJlbWVudF0uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBtZWFzdXJlbWVudFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHVzZXJDb3VudHJ5ID0gbmV3IENvdW50cnkoXG4gICAgICAgICAgICBkYXRhLmNvdW50cnkubmFtZSxcbiAgICAgICAgICAgIGRhdGEuY291bnRyeS5jb3VudHJ5LFxuICAgICAgICAgICAgZGF0YS5jb3VudHJ5LnRpbWVcbiAgICAgICAgKTtcbiAgICAgICAgdXNlckNvdW50cnkuZWRpdENvdW50cnlEb20oKTtcbiAgICB9KTtcbn1cblxuY29uc3QgZ2V0V2VhdGhlckRhdGEgPSBhc3luYyAoaW5wdXQgPSAnU2luZ2Fwb3JlJykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGRhdGEgZm9yIGFsbCAzIGRheXNcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTkxZTI3MjhlZDM4NTQ0MjlhZGQ1MzIyOTI0MjkwNiZxPSR7aW5wdXR9JmRheXM9M2AsXG4gICAgICAgICAgICB7IG1vZGU6ICdjb3JzJyB9XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGF0YS5qc29uKCk7XG5cbiAgICAgICAgLy8gZXJyb3IgaGFuZGxlclxuICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIGhhbmRsZUVycm9yKHJlc3BvbnNlLmVycm9yKTtcblxuICAgICAgICBjb25zdCBmb3JlY2FzdGRhdGEgPSByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheTtcblxuICAgICAgICAvLyBnZXQgY291bnRyeSBkYXRhXG4gICAgICAgIGNvbnN0IGNvdW50cnlkYXRhID0gcmVzcG9uc2UubG9jYXRpb247XG4gICAgICAgIGNvbnN0IGNvdW50cnkgPSBjcmVhdGVDb3VudHJ5T2JqKFxuICAgICAgICAgICAgY291bnRyeWRhdGEubmFtZSxcbiAgICAgICAgICAgIGNvdW50cnlkYXRhLmNvdW50cnksXG4gICAgICAgICAgICBjb3VudHJ5ZGF0YS5sb2NhbHRpbWVcbiAgICAgICAgKTtcblxuICAgICAgICAvLyB0b2RheSdzIGRhdGFcbiAgICAgICAgY29uc3QgdG9kYXkgPSBbXTtcbiAgICAgICAgY29uc3QgdG9kYXlkYXRhID0gZm9yZWNhc3RkYXRhWzBdLmhvdXI7XG4gICAgICAgIHRvZGF5ZGF0YS5mb3JFYWNoKChob3VyZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaG91ciA9IHt9O1xuICAgICAgICAgICAgaG91ci53ZWF0aGVyRGF0YUNlbHNpdXMgPSBjcmVhdGVIb3VyT2JqKFxuICAgICAgICAgICAgICAgIGhvdXJkYXRhLnRpbWUuc3BsaXQoJyAnKVsxXSxcbiAgICAgICAgICAgICAgICBob3VyZGF0YS50ZW1wX2MsXG4gICAgICAgICAgICAgICAgaG91cmRhdGEuY29uZGl0aW9uLmljb25cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBob3VyLndlYXRoZXJEYXRhRmFocmVuaGVpdCA9IGNyZWF0ZUhvdXJPYmooXG4gICAgICAgICAgICAgICAgaG91cmRhdGEudGltZS5zcGxpdCgnICcpWzFdLFxuICAgICAgICAgICAgICAgIGhvdXJkYXRhLnRlbXBfZixcbiAgICAgICAgICAgICAgICBob3VyZGF0YS5jb25kaXRpb24uaWNvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRvZGF5LnB1c2goaG91cik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGZvcmVjYXN0IGRhdGFcbiAgICAgICAgY29uc3QgZGF5cyA9IFtdO1xuICAgICAgICBmb3JlY2FzdGRhdGEuZm9yRWFjaCgoZGF5ZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF5ID0ge307XG4gICAgICAgICAgICBkYXkud2VhdGhlckRhdGFDZWxzaXVzID0gY3JlYXRlV2VhdGhlck9iaihcbiAgICAgICAgICAgICAgICBkYXlkYXRhLmRheS5tYXh0ZW1wX2MsXG4gICAgICAgICAgICAgICAgZGF5ZGF0YS5kYXkubWludGVtcF9jLFxuICAgICAgICAgICAgICAgIGRheWRhdGEuZGF5LmF2Z3RlbXBfYyxcbiAgICAgICAgICAgICAgICBkYXlkYXRhLmRheS5hdmdodW1pZGl0eSxcbiAgICAgICAgICAgICAgICBkYXlkYXRhLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbixcbiAgICAgICAgICAgICAgICBkYXlkYXRhLmRheS5jb25kaXRpb24udGV4dCxcbiAgICAgICAgICAgICAgICBkYXlkYXRhLmRheS5jb25kaXRpb24uaWNvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGRheS53ZWF0aGVyRGF0YUZhaHJlbmhlaXQgPSBjcmVhdGVXZWF0aGVyT2JqKFxuICAgICAgICAgICAgICAgIGRheWRhdGEuZGF5Lm1heHRlbXBfZixcbiAgICAgICAgICAgICAgICBkYXlkYXRhLmRheS5taW50ZW1wX2YsXG4gICAgICAgICAgICAgICAgZGF5ZGF0YS5kYXkuYXZndGVtcF9mLFxuICAgICAgICAgICAgICAgIGRheWRhdGEuZGF5LmF2Z2h1bWlkaXR5LFxuICAgICAgICAgICAgICAgIGRheWRhdGEuZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluLFxuICAgICAgICAgICAgICAgIGRheWRhdGEuZGF5LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICAgICAgICAgIGRheWRhdGEuZGF5LmNvbmRpdGlvbi5pY29uXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZGF5cy5wdXNoKGRheSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY291bnRyeSxcbiAgICAgICAgICAgIHRvZGF5LFxuICAgICAgICAgICAgZGF5cyxcbiAgICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxufTtcblxuY29uc3QgY3JlYXRlQ291bnRyeU9iaiA9IChuYW1lLCBjb3VudHJ5LCB0aW1lKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgY291bnRyeSxcbiAgICAgICAgdGltZSxcbiAgICB9O1xufTtcblxuY29uc3QgY3JlYXRlV2VhdGhlck9iaiA9IChtYXgsIG1pbiwgYXZnLCBodW1pZGl0eSwgcmFpbiwgZGVzY3JpcHRpb24sIGljb24pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBtYXgsXG4gICAgICAgIG1pbixcbiAgICAgICAgYXZnLFxuICAgICAgICBodW1pZGl0eSxcbiAgICAgICAgcmFpbixcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGljb24sXG4gICAgfTtcbn07XG5cbmNvbnN0IGNyZWF0ZUhvdXJPYmogPSAodGltZSwgdGVtcCwgaWNvbikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpbWUsXG4gICAgICAgIHRlbXAsXG4gICAgICAgIGljb24sXG4gICAgfTtcbn07XG5cbmRvbUNvbnRyb2xsZXIoKTtcbmdldFdlYXRoZXJEYXRhKCk7XG4iXSwibmFtZXMiOlsiQ291bnRyeSIsImNvbnN0cnVjdG9yIiwibmFtZSIsImNvdW50cnkiLCJ0aW1lIiwiZWRpdENvdW50cnlEb20iLCJjb3VudHJ5VGl0bGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aW1lVGl0bGUiLCJ0ZXh0Q29udGVudCIsIkhvdXIiLCJpbWciLCJpbmZvIiwiY3JlYXRlSG91ckRvbSIsIm1lYXN1cmVtZW50IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImhvdXJUaW1lIiwiY29udGVudCIsImltYWdlIiwiY2xhc3NMaXN0IiwiYWRkIiwic3JjIiwiYXBwZW5kQ2hpbGQiLCJEYXkiLCJtYXgiLCJtaW4iLCJhdmciLCJodW1pZGl0eSIsInJhaW4iLCJkZXNjcmlwdGlvbiIsImljb24iLCJjcmVhdGUzRGF5c0ZvcmVjYXN0RG9tIiwiZGVzY3JpcHRpb25Db250YWluZXIiLCJhdmd0ZW1wIiwidGV4dCIsImNoYW5jZSIsInVwZGF0ZUZvcmVjYXN0IiwibWF4RG9tIiwibWluRG9tIiwiYXZnRG9tIiwicmVzZXREb20iLCJob3VybHkiLCJkYXlzQ29udGFpbmVyIiwiaHVtaWRpdHlEb20iLCJjaGFuY2VEb20iLCJoYW5kbGVFcnJvciIsImVyciIsImVycm9yRGl2Iiwic2hvd01vZGFsIiwiYmFuZGFnZSIsIlN0cmluZyIsImZyb21Db2RlUG9pbnQiLCJhbmdyeSIsImNvZGUiLCJkb21Db250cm9sbGVyIiwiZm9ybSIsImNsb3NlQnRuIiwibWVhc3VyZW1lbnRCdG4iLCJnZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xvc2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiZ2V0V2VhdGhlckRhdGEiLCJ2YWx1ZSIsInRvZGF5IiwiZm9yRWFjaCIsImhvdXIiLCJjdXJyZW50SG91ciIsInRlbXAiLCJkYXlzIiwiZGF5IiwiY3VycmVudERheSIsInVzZXJDb3VudHJ5IiwiaW5wdXQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJmZXRjaCIsIm1vZGUiLCJyZXNwb25zZSIsImpzb24iLCJlcnJvciIsImZvcmVjYXN0ZGF0YSIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJjb3VudHJ5ZGF0YSIsImxvY2F0aW9uIiwiY3JlYXRlQ291bnRyeU9iaiIsImxvY2FsdGltZSIsInRvZGF5ZGF0YSIsImhvdXJkYXRhIiwid2VhdGhlckRhdGFDZWxzaXVzIiwiY3JlYXRlSG91ck9iaiIsInNwbGl0IiwidGVtcF9jIiwiY29uZGl0aW9uIiwid2VhdGhlckRhdGFGYWhyZW5oZWl0IiwidGVtcF9mIiwicHVzaCIsImRheWRhdGEiLCJjcmVhdGVXZWF0aGVyT2JqIiwibWF4dGVtcF9jIiwibWludGVtcF9jIiwiYXZndGVtcF9jIiwiYXZnaHVtaWRpdHkiLCJkYWlseV9jaGFuY2Vfb2ZfcmFpbiIsIm1heHRlbXBfZiIsIm1pbnRlbXBfZiIsImF2Z3RlbXBfZiIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9