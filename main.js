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
    /* border: black 1px solid; */
}

:root {
    --standard-margin: 1rem;
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

button[type="button"], input {
    width: 200px;
}

input, button {
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
}

input {
    border: none;
    color: black;
}

button {
    background-color: rgb(93, 93, 93);
    border: 1px white solid;
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
    stroke-width: 10;
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

`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;IACtB,6EAA6E;IAC7E,YAAY;IACZ,6BAA6B;AACjC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,mBAAmB;IACnB,8BAA8B;IAC9B,SAAS;AACb;;AAEA;IACI,aAAa;IACb,eAAe;IACf,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,eAAe;IACf,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,iCAAiC;IACjC,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,OAAO;IACP,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;;AAGA;IACI,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,SAAS;;AAEb;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,OAAO;IACP,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,eAAe;IACf,OAAO;IACP,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,OAAO;IACP,SAAS;IACT,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,8DAA8D;AAClE;;AAEA;IACI,8DAA8D;AAClE;;AAEA;IACI,8DAA8D;AAClE;;AAEA;IACI,+DAA+D;AACnE;;AAEA;IACI,gBAAgB;IAChB,+DAA+D;AACnE;;AAEA;IACI,gBAAgB;IAChB,OAAO;AACX;;AAEA;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,SAAS;IACT,sBAAsB;IACtB,2CAA2C;IAC3C,kBAAkB;IAClB,6BAA6B;IAC7B,oBAAoB;AACxB;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,uBAAuB;IACvB,mBAAmB;IACnB;QACI,YAAY;IAChB;AACJ;;AAEA;IACI,OAAO;IACP,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,OAAO;AACX","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    color: white;\n    /* border: black 1px solid; */\n}\n\n:root {\n    --standard-margin: 1rem;\n}\n\nbody {\n    margin: 4rem 10rem;\n    background-color: black;\n}\n\n.svg {\n    height: 4rem;\n    width: 4rem;\n}\n\n.asset {\n    filter: invert(100%);\n}\n\n.title {\n    font-size: 3rem;\n}\n\n.subheader {\n    font-size: 1.5rem;\n}\n\n.top-container {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n    gap: 1rem;\n}\n\n.form-container {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: start;\n    gap: 1rem;\n}\n\n.searchbar-container {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 0.5rem;\n}\n\nbutton[type=\"button\"], input {\n    width: 200px;\n}\n\ninput, button {\n    font-size: 1.2rem;\n    padding: 10px;\n    border-radius: 10px;\n    outline: none;\n    cursor: pointer;\n}\n\ninput {\n    border: none;\n    color: black;\n}\n\nbutton {\n    background-color: rgb(93, 93, 93);\n    border: 1px white solid;\n}\n\n.page-container {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: start;\n    min-height: 50vh;\n    gap: 2rem;\n}\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    gap: 2rem;\n    min-width: 250px;\n}\n\n.sidebar .subheader {\n    padding: 0 0 1rem 0;\n}\n\n.day-desc-container:nth-child(2) {\n    white-space: normal;\n}\n\n.today-info-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.today-info-container > * {\n    flex: 1;\n}\n\n.forecast-days-container {\n    display: flex;\n    flex-direction: column;\n}\n\n\n.days-container {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    \n}\n\n.days-container > * {\n    flex: 1;\n}\n\n.day-container {\n    display: flex;\n    gap: 2rem;\n    align-items: center;\n}\n\n.day-desc-container {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n}\n\n.content-container {\n    flex: 3;\n    display: grid;\n    grid-template-rows: 1fr;\n}\n\n.forecast {\n    font-size: 2.5rem;\n}\n\n.full-forecast-container {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.info-container {\n    display: flex;\n    flex-wrap: wrap;\n    flex: 1;\n    gap: 1rem;\n}\n\n.each-info-container {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    gap: 1rem;\n    border: 1px solid white;\n    border-radius: 10px;\n    padding: 1rem;\n}\n\n.img-text-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nimg.min-temp {\n    filter: invert(55%) sepia(100%) hue-rotate(150deg) saturate(3);\n}\n\nimg.max-temp {\n    filter: invert(55%) sepia(100%) hue-rotate(340deg) saturate(3);\n}\n\nimg.avg-temp {\n    filter: invert(60%) sepia(100%) hue-rotate(300deg) saturate(5);\n}\n\nimg.humidity {\n    filter: invert(30%) sepia(100%) hue-rotate(150deg) saturate(10);\n}\n\nimg.chance-of-rain {\n    stroke-width: 10;\n    filter: invert(30%) sepia(100%) hue-rotate(150deg) saturate(10);\n}\n\n.info {\n    min-width: 150px;\n    flex: 1;\n}\n\n.description-container{\n    display: flex;\n    align-items: flex-end;\n}\n\n.hourly-forecast-container {\n    padding: 1rem 1rem 1rem 0;\n    display: grid;\n    gap: 1rem;\n    grid-auto-flow: column;\n    grid-auto-columns: clamp(125px, 20%, 200px);\n    overflow-x: scroll;\n    scroll-snap-type: x mandatory;\n    scroll-padding: 1rem;\n}\n\n.hourly-forecast-container > * {\n    scroll-snap-align: start;\n    min-width: 100px;\n}\n\n.hour {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    min-height: 175px;\n    border: 1px solid white;\n    border-radius: 15px;\n    > * {\n        border: none;\n    }\n}\n\n.hour > p {\n    flex: 1;\n    display: flex;\n    align-items: center;\n}\n\n.hour > img {\n    height: 5rem;\n    width: 5rem;\n    flex: 2;\n}\n\n"],"sourceRoot":""}]);
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

/***/ }),

/***/ "./assets/humidity-svgrepo-com.svg":
/*!*****************************************!*\
  !*** ./assets/humidity-svgrepo-com.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2e53a36a1156d4bfd58f.svg";

/***/ }),

/***/ "./assets/rain-svgrepo-com.svg":
/*!*************************************!*\
  !*** ./assets/rain-svgrepo-com.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0bd5fa03ba8d0574a282.svg";

/***/ }),

/***/ "./assets/temperature-low-svgrepo-com.svg":
/*!************************************************!*\
  !*** ./assets/temperature-low-svgrepo-com.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8039ff1e2c4b9932bbd7.svg";

/***/ }),

/***/ "./assets/temperature-snow-svgrepo-com.svg":
/*!*************************************************!*\
  !*** ./assets/temperature-snow-svgrepo-com.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76802e1b07fd461c2ff5.svg";

/***/ }),

/***/ "./assets/temperature-sun-svgrepo-com.svg":
/*!************************************************!*\
  !*** ./assets/temperature-sun-svgrepo-com.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c9c3d27baaf3003c3ffe.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _assets_temperature_snow_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/temperature-snow-svgrepo-com.svg */ "./assets/temperature-snow-svgrepo-com.svg");
/* harmony import */ var _assets_temperature_sun_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/temperature-sun-svgrepo-com.svg */ "./assets/temperature-sun-svgrepo-com.svg");
/* harmony import */ var _assets_temperature_low_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/temperature-low-svgrepo-com.svg */ "./assets/temperature-low-svgrepo-com.svg");
/* harmony import */ var _assets_humidity_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/humidity-svgrepo-com.svg */ "./assets/humidity-svgrepo-com.svg");
/* harmony import */ var _assets_rain_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/rain-svgrepo-com.svg */ "./assets/rain-svgrepo-com.svg");







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
  createHourDom() {
    const div = document.createElement('div');
    const hourTime = document.createElement('p');
    const content = document.createElement('p');
    const image = document.createElement('img');
    div.classList.add('hour');
    image.src = `https:` + this.img;
    hourTime.textContent = this.time;
    content.textContent = this.info + `\u00B0C`;
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
  create3DaysForecastDom() {
    const div = document.createElement('div');
    const image = document.createElement('img');
    const descriptionContainer = document.createElement('div');
    const avgtemp = document.createElement('p');
    const text = document.createElement('p');
    const chance = document.createElement('p');
    image.src = `https:` + this.icon;
    avgtemp.textContent = this.avg + `\u00B0C`;
    text.textContent = this.description;
    chance.textContent = this.rain + '%';
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
function resetDom() {
  const form = document.querySelector('form');
  const hourly = document.querySelector('.hourly-forecast-container');
  const daysContainer = document.querySelector('.days-container');
  const countryTitle = document.querySelector('.subheader.country');
  const timeTitle = document.querySelector('.subheader.time');
  form.reset();
  hourly.textContent = '';
  daysContainer.textContent = '';
  countryTitle.textContent = '';
  timeTitle.textContent = '';
}
function domController() {
  // let measurement = 'F';
  const form = document.querySelector('form');
  const hourly = document.querySelector('.hourly-forecast-container');
  const daysContainer = document.querySelector('.days-container');
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const data = await getWeatherData(document.querySelector('input').value);
    resetDom();
    data.today.forEach(hour => {
      const currentHour = new Hour(hour.weatherDataCelsius.time, hour.weatherDataCelsius.icon, hour.weatherDataCelsius.temp);
      hourly.appendChild(currentHour.createHourDom());
    });
    data.days.forEach(day => {
      const currentDay = new Day(day.weatherDataCelsius.max, day.weatherDataCelsius.min, day.weatherDataCelsius.avg, day.weatherDataCelsius.humidity, day.weatherDataCelsius.rain, day.weatherDataCelsius.description, day.weatherDataCelsius.icon);
      daysContainer.appendChild(currentDay.create3DaysForecastDom());
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPLGlGQUFpRixVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxL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QUM7TUFDRHVCLElBQUksQ0FBQzJCLElBQUksQ0FBQzFCLEdBQUcsQ0FBQztJQUNsQixDQUFDLENBQUM7SUFDRixPQUFPO01BQ0huRCxPQUFPO01BQ1A0QyxLQUFLO01BQ0xNO0lBQ0osQ0FBQztFQUNMLENBQUMsQ0FBQyxPQUFPc0MsS0FBSyxFQUFFO0lBQ1pDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7RUFDdEI7QUFDSixDQUFDO0FBRUQsTUFBTXJCLGdCQUFnQixHQUFHQSxDQUFDcEUsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLElBQUksS0FBSztFQUM5QyxPQUFPO0lBQ0hGLElBQUk7SUFDSkMsT0FBTztJQUNQQztFQUNKLENBQUM7QUFDTCxDQUFDO0FBRUQsTUFBTThFLGdCQUFnQixHQUFHQSxDQUFDekQsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTdCLFFBQVEsRUFBRThCLElBQUksRUFBRUMsV0FBVyxFQUFFQyxJQUFJLEtBQUs7RUFDM0UsT0FBTztJQUNITCxHQUFHO0lBQ0hDLEdBQUc7SUFDSEMsR0FBRztJQUNIN0IsUUFBUTtJQUNSOEIsSUFBSTtJQUNKQyxXQUFXO0lBQ1hDO0VBQ0osQ0FBQztBQUNMLENBQUM7QUFFRCxNQUFNNEMsYUFBYSxHQUFHQSxDQUFDdEUsSUFBSSxFQUFFZ0QsSUFBSSxFQUFFdEIsSUFBSSxLQUFLO0VBQ3hDLE9BQU87SUFDSDFCLElBQUk7SUFDSmdELElBQUk7SUFDSnRCO0VBQ0osQ0FBQztBQUNMLENBQUM7QUFFRFUsYUFBYSxDQUFDLENBQUM7QUFDZkssY0FBYyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLyogYm9yZGVyOiBibGFjayAxcHggc29saWQ7ICovXG59XG5cbjpyb290IHtcbiAgICAtLXN0YW5kYXJkLW1hcmdpbjogMXJlbTtcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiA0cmVtIDEwcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uc3ZnIHtcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgd2lkdGg6IDRyZW07XG59XG5cbi5hc3NldCB7XG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4uc3ViaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnRvcC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmZvcm0tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4uc2VhcmNoYmFyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAwLjVyZW07XG59XG5cbmJ1dHRvblt0eXBlPVwiYnV0dG9uXCJdLCBpbnB1dCB7XG4gICAgd2lkdGg6IDIwMHB4O1xufVxuXG5pbnB1dCwgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlucHV0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MywgOTMsIDkzKTtcbiAgICBib3JkZXI6IDFweCB3aGl0ZSBzb2xpZDtcbn1cblxuLnBhZ2UtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgbWluLWhlaWdodDogNTB2aDtcbiAgICBnYXA6IDJyZW07XG59XG5cbi5zaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleDogMTtcbiAgICBnYXA6IDJyZW07XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbn1cblxuLnNpZGViYXIgLnN1YmhlYWRlciB7XG4gICAgcGFkZGluZzogMCAwIDFyZW0gMDtcbn1cblxuLmRheS1kZXNjLWNvbnRhaW5lcjpudGgtY2hpbGQoMikge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi50b2RheS1pbmZvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udG9kYXktaW5mby1jb250YWluZXIgPiAqIHtcbiAgICBmbGV4OiAxO1xufVxuXG4uZm9yZWNhc3QtZGF5cy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuXG4uZGF5cy1jb250YWluZXIge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbiAgICBcbn1cblxuLmRheXMtY29udGFpbmVyID4gKiB7XG4gICAgZmxleDogMTtcbn1cblxuLmRheS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAycmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kYXktZGVzYy1jb250YWluZXIge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMnB4O1xufVxuXG4uY29udGVudC1jb250YWluZXIge1xuICAgIGZsZXg6IDM7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbn1cblxuLmZvcmVjYXN0IHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuLmZ1bGwtZm9yZWNhc3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4uaW5mby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXg6IDE7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4uZWFjaC1pbmZvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXg6IDE7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxuLmltZy10ZXh0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW1nLm1pbi10ZW1wIHtcbiAgICBmaWx0ZXI6IGludmVydCg1NSUpIHNlcGlhKDEwMCUpIGh1ZS1yb3RhdGUoMTUwZGVnKSBzYXR1cmF0ZSgzKTtcbn1cblxuaW1nLm1heC10ZW1wIHtcbiAgICBmaWx0ZXI6IGludmVydCg1NSUpIHNlcGlhKDEwMCUpIGh1ZS1yb3RhdGUoMzQwZGVnKSBzYXR1cmF0ZSgzKTtcbn1cblxuaW1nLmF2Zy10ZW1wIHtcbiAgICBmaWx0ZXI6IGludmVydCg2MCUpIHNlcGlhKDEwMCUpIGh1ZS1yb3RhdGUoMzAwZGVnKSBzYXR1cmF0ZSg1KTtcbn1cblxuaW1nLmh1bWlkaXR5IHtcbiAgICBmaWx0ZXI6IGludmVydCgzMCUpIHNlcGlhKDEwMCUpIGh1ZS1yb3RhdGUoMTUwZGVnKSBzYXR1cmF0ZSgxMCk7XG59XG5cbmltZy5jaGFuY2Utb2YtcmFpbiB7XG4gICAgc3Ryb2tlLXdpZHRoOiAxMDtcbiAgICBmaWx0ZXI6IGludmVydCgzMCUpIHNlcGlhKDEwMCUpIGh1ZS1yb3RhdGUoMTUwZGVnKSBzYXR1cmF0ZSgxMCk7XG59XG5cbi5pbmZvIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIGZsZXg6IDE7XG59XG5cbi5kZXNjcmlwdGlvbi1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5ob3VybHktZm9yZWNhc3QtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSAwO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IGNsYW1wKDEyNXB4LCAyMCUsIDIwMHB4KTtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XG4gICAgc2Nyb2xsLXBhZGRpbmc6IDFyZW07XG59XG5cbi5ob3VybHktZm9yZWNhc3QtY29udGFpbmVyID4gKiB7XG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG59XG5cbi5ob3VyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiAxNzVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgID4gKiB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG59XG5cbi5ob3VyID4gcCB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ob3VyID4gaW1nIHtcbiAgICBoZWlnaHQ6IDVyZW07XG4gICAgd2lkdGg6IDVyZW07XG4gICAgZmxleDogMjtcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLDZFQUE2RTtJQUM3RSxZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsT0FBTztJQUNQLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7O0FBR0E7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTOztBQUViOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixPQUFPO0lBQ1AsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixPQUFPO0lBQ1AsU0FBUztJQUNULHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksOERBQThEO0FBQ2xFOztBQUVBO0lBQ0ksOERBQThEO0FBQ2xFOztBQUVBO0lBQ0ksOERBQThEO0FBQ2xFOztBQUVBO0lBQ0ksK0RBQStEO0FBQ25FOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLCtEQUErRDtBQUNuRTs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLDJDQUEyQztJQUMzQyxrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkI7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsT0FBTztBQUNYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIC8qIGJvcmRlcjogYmxhY2sgMXB4IHNvbGlkOyAqL1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tc3RhbmRhcmQtbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiA0cmVtIDEwcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnN2ZyB7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgd2lkdGg6IDRyZW07XFxufVxcblxcbi5hc3NldCB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5zdWJoZWFkZXIge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRvcC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uc2VhcmNoYmFyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbmJ1dHRvblt0eXBlPVxcXCJidXR0b25cXFwiXSwgaW5wdXQge1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbmlucHV0LCBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTMsIDkzLCA5Myk7XFxuICAgIGJvcmRlcjogMXB4IHdoaXRlIHNvbGlkO1xcbn1cXG5cXG4ucGFnZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgbWluLWhlaWdodDogNTB2aDtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDE7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgbWluLXdpZHRoOiAyNTBweDtcXG59XFxuXFxuLnNpZGViYXIgLnN1YmhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDAgMCAxcmVtIDA7XFxufVxcblxcbi5kYXktZGVzYy1jb250YWluZXI6bnRoLWNoaWxkKDIpIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG59XFxuXFxuLnRvZGF5LWluZm8tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZGF5LWluZm8tY29udGFpbmVyID4gKiB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5mb3JlY2FzdC1kYXlzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcblxcbi5kYXlzLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgXFxufVxcblxcbi5kYXlzLWNvbnRhaW5lciA+ICoge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4uZGF5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRheS1kZXNjLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4uY29udGVudC1jb250YWluZXIge1xcbiAgICBmbGV4OiAzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi5mdWxsLWZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmluZm8tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBmbGV4OiAxO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5lYWNoLWluZm8tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMTtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmltZy10ZXh0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW1nLm1pbi10ZW1wIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoNTUlKSBzZXBpYSgxMDAlKSBodWUtcm90YXRlKDE1MGRlZykgc2F0dXJhdGUoMyk7XFxufVxcblxcbmltZy5tYXgtdGVtcCB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDU1JSkgc2VwaWEoMTAwJSkgaHVlLXJvdGF0ZSgzNDBkZWcpIHNhdHVyYXRlKDMpO1xcbn1cXG5cXG5pbWcuYXZnLXRlbXAge1xcbiAgICBmaWx0ZXI6IGludmVydCg2MCUpIHNlcGlhKDEwMCUpIGh1ZS1yb3RhdGUoMzAwZGVnKSBzYXR1cmF0ZSg1KTtcXG59XFxuXFxuaW1nLmh1bWlkaXR5IHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMzAlKSBzZXBpYSgxMDAlKSBodWUtcm90YXRlKDE1MGRlZykgc2F0dXJhdGUoMTApO1xcbn1cXG5cXG5pbWcuY2hhbmNlLW9mLXJhaW4ge1xcbiAgICBzdHJva2Utd2lkdGg6IDEwO1xcbiAgICBmaWx0ZXI6IGludmVydCgzMCUpIHNlcGlhKDEwMCUpIGh1ZS1yb3RhdGUoMTUwZGVnKSBzYXR1cmF0ZSgxMCk7XFxufVxcblxcbi5pbmZvIHtcXG4gICAgbWluLXdpZHRoOiAxNTBweDtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4uaG91cmx5LWZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDA7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IGNsYW1wKDEyNXB4LCAyMCUsIDIwMHB4KTtcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcXG4gICAgc2Nyb2xsLXBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5ob3VybHktZm9yZWNhc3QtY29udGFpbmVyID4gKiB7XFxuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG59XFxuXFxuLmhvdXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogMTc1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICA+ICoge1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICB9XFxufVxcblxcbi5ob3VyID4gcCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob3VyID4gaW1nIHtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgICB3aWR0aDogNXJlbTtcXG4gICAgZmxleDogMjtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgbWF4dGVtcCBmcm9tICcuLi9hc3NldHMvdGVtcGVyYXR1cmUtc25vdy1zdmdyZXBvLWNvbS5zdmcnO1xuaW1wb3J0IG1pbnRlbXAgZnJvbSAnLi4vYXNzZXRzL3RlbXBlcmF0dXJlLXN1bi1zdmdyZXBvLWNvbS5zdmcnO1xuaW1wb3J0IGF2Z3RlbXAgZnJvbSAnLi4vYXNzZXRzL3RlbXBlcmF0dXJlLWxvdy1zdmdyZXBvLWNvbS5zdmcnO1xuaW1wb3J0IGh1bWlkaXR5IGZyb20gJy4uL2Fzc2V0cy9odW1pZGl0eS1zdmdyZXBvLWNvbS5zdmcnO1xuaW1wb3J0IGNoYW5jZW9mcmFpbiBmcm9tICcuLi9hc3NldHMvcmFpbi1zdmdyZXBvLWNvbS5zdmcnO1xuXG4vLyBmZXRjaChcbi8vICAgICAnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT05MWUyNzI4ZWQzODU0NDI5YWRkNTMyMjkyNDI5MDYmcT1zaW5nYXBvcmUnXG4vLyApXG4vLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4vLyAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4vLyAgICAgfSlcbi8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbi8vICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuLy8gICAgIH0pXG4vLyAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4vLyAgICAgfSk7XG5cbmNsYXNzIENvdW50cnkge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGNvdW50cnksIHRpbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jb3VudHJ5ID0gY291bnRyeTtcbiAgICAgICAgdGhpcy50aW1lID0gdGltZTtcbiAgICB9XG5cbiAgICBlZGl0Q291bnRyeURvbSgpIHtcbiAgICAgICAgY29uc3QgY291bnRyeVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1YmhlYWRlci5jb3VudHJ5Jyk7XG4gICAgICAgIGNvbnN0IHRpbWVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJoZWFkZXIudGltZScpO1xuICAgICAgICBjb3VudHJ5VGl0bGUudGV4dENvbnRlbnQgPSBgJHt0aGlzLm5hbWV9LCAke3RoaXMuY291bnRyeX1gO1xuICAgICAgICB0aW1lVGl0bGUudGV4dENvbnRlbnQgPSBgJHt0aGlzLnRpbWV9YDtcbiAgICB9XG59XG5cbmNsYXNzIEhvdXIge1xuICAgIGNvbnN0cnVjdG9yKHRpbWUsIGltZywgaW5mbykge1xuICAgICAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgICAgICB0aGlzLmltZyA9IGltZztcbiAgICAgICAgdGhpcy5pbmZvID0gaW5mbztcbiAgICB9XG5cbiAgICBjcmVhdGVIb3VyRG9tKCkge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaG91clRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2hvdXInKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gYGh0dHBzOmAgKyB0aGlzLmltZztcbiAgICAgICAgaG91clRpbWUudGV4dENvbnRlbnQgPSB0aGlzLnRpbWU7XG4gICAgICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSB0aGlzLmluZm8gKyBgXFx1MDBCMENgO1xuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChob3VyVGltZSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cbn1cblxuY2xhc3MgRGF5IHtcbiAgICBjb25zdHJ1Y3RvcihtYXgsIG1pbiwgYXZnLCBodW1pZGl0eSwgcmFpbiwgZGVzY3JpcHRpb24sIGljb24pIHtcbiAgICAgICAgdGhpcy5tYXggPSBtYXg7XG4gICAgICAgIHRoaXMubWluID0gbWluO1xuICAgICAgICB0aGlzLmF2ZyA9IGF2ZztcbiAgICAgICAgdGhpcy5odW1pZGl0eSA9IGh1bWlkaXR5O1xuICAgICAgICB0aGlzLnJhaW4gPSByYWluO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuaWNvbiA9IGljb247XG4gICAgfVxuXG4gICAgY3JlYXRlM0RheXNGb3JlY2FzdERvbSgpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGF2Z3RlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGNoYW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICBpbWFnZS5zcmMgPSBgaHR0cHM6YCArIHRoaXMuaWNvbjtcbiAgICAgICAgYXZndGVtcC50ZXh0Q29udGVudCA9IHRoaXMuYXZnICsgYFxcdTAwQjBDYDtcbiAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IHRoaXMuZGVzY3JpcHRpb247XG4gICAgICAgIGNoYW5jZS50ZXh0Q29udGVudCA9IHRoaXMucmFpbiArICclJztcblxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZGF5LWNvbnRhaW5lcicpO1xuICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdzdmcnKTtcbiAgICAgICAgZGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGF5LWRlc2MtY29udGFpbmVyJyk7XG5cbiAgICAgICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoYXZndGVtcCk7XG4gICAgICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGFuY2UpO1xuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkNvbnRhaW5lcik7XG5cbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0RG9tKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgY29uc3QgaG91cmx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXJseS1mb3JlY2FzdC1jb250YWluZXInKTtcbiAgICBjb25zdCBkYXlzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheXMtY29udGFpbmVyJyk7XG4gICAgY29uc3QgY291bnRyeVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1YmhlYWRlci5jb3VudHJ5Jyk7XG4gICAgY29uc3QgdGltZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1YmhlYWRlci50aW1lJyk7XG5cbiAgICBmb3JtLnJlc2V0KCk7XG4gICAgaG91cmx5LnRleHRDb250ZW50ID0gJyc7XG4gICAgZGF5c0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgIGNvdW50cnlUaXRsZS50ZXh0Q29udGVudCA9ICcnO1xuICAgIHRpbWVUaXRsZS50ZXh0Q29udGVudCA9ICcnO1xufVxuXG5mdW5jdGlvbiBkb21Db250cm9sbGVyKCkge1xuICAgIC8vIGxldCBtZWFzdXJlbWVudCA9ICdGJztcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgIGNvbnN0IGhvdXJseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VybHktZm9yZWNhc3QtY29udGFpbmVyJyk7XG4gICAgY29uc3QgZGF5c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXlzLWNvbnRhaW5lcicpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEoXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlXG4gICAgICAgICk7XG5cbiAgICAgICAgcmVzZXREb20oKTtcblxuICAgICAgICBkYXRhLnRvZGF5LmZvckVhY2goKGhvdXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRIb3VyID0gbmV3IEhvdXIoXG4gICAgICAgICAgICAgICAgaG91ci53ZWF0aGVyRGF0YUNlbHNpdXMudGltZSxcbiAgICAgICAgICAgICAgICBob3VyLndlYXRoZXJEYXRhQ2Vsc2l1cy5pY29uLFxuICAgICAgICAgICAgICAgIGhvdXIud2VhdGhlckRhdGFDZWxzaXVzLnRlbXBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBob3VybHkuYXBwZW5kQ2hpbGQoY3VycmVudEhvdXIuY3JlYXRlSG91ckRvbSgpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGF0YS5kYXlzLmZvckVhY2goKGRheSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudERheSA9IG5ldyBEYXkoXG4gICAgICAgICAgICAgICAgZGF5LndlYXRoZXJEYXRhQ2Vsc2l1cy5tYXgsXG4gICAgICAgICAgICAgICAgZGF5LndlYXRoZXJEYXRhQ2Vsc2l1cy5taW4sXG4gICAgICAgICAgICAgICAgZGF5LndlYXRoZXJEYXRhQ2Vsc2l1cy5hdmcsXG4gICAgICAgICAgICAgICAgZGF5LndlYXRoZXJEYXRhQ2Vsc2l1cy5odW1pZGl0eSxcbiAgICAgICAgICAgICAgICBkYXkud2VhdGhlckRhdGFDZWxzaXVzLnJhaW4sXG4gICAgICAgICAgICAgICAgZGF5LndlYXRoZXJEYXRhQ2Vsc2l1cy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBkYXkud2VhdGhlckRhdGFDZWxzaXVzLmljb25cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBkYXlzQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnREYXkuY3JlYXRlM0RheXNGb3JlY2FzdERvbSgpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdXNlckNvdW50cnkgPSBuZXcgQ291bnRyeShcbiAgICAgICAgICAgIGRhdGEuY291bnRyeS5uYW1lLFxuICAgICAgICAgICAgZGF0YS5jb3VudHJ5LmNvdW50cnksXG4gICAgICAgICAgICBkYXRhLmNvdW50cnkudGltZVxuICAgICAgICApO1xuICAgICAgICB1c2VyQ291bnRyeS5lZGl0Q291bnRyeURvbSgpO1xuICAgIH0pO1xufVxuXG5jb25zdCBnZXRXZWF0aGVyRGF0YSA9IGFzeW5jIChpbnB1dCA9ICdTaW5nYXBvcmUnKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gZGF0YSBmb3IgYWxsIDMgZGF5c1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9OTFlMjcyOGVkMzg1NDQyOWFkZDUzMjI5MjQyOTA2JnE9JHtpbnB1dH0mZGF5cz0zYCxcbiAgICAgICAgICAgIHsgbW9kZTogJ2NvcnMnIH1cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgICAgICAgY29uc3QgZm9yZWNhc3RkYXRhID0gcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXk7XG5cbiAgICAgICAgLy8gZ2V0IGNvdW50cnkgZGF0YVxuICAgICAgICBjb25zdCBjb3VudHJ5ZGF0YSA9IHJlc3BvbnNlLmxvY2F0aW9uO1xuICAgICAgICBjb25zdCBjb3VudHJ5ID0gY3JlYXRlQ291bnRyeU9iaihcbiAgICAgICAgICAgIGNvdW50cnlkYXRhLm5hbWUsXG4gICAgICAgICAgICBjb3VudHJ5ZGF0YS5jb3VudHJ5LFxuICAgICAgICAgICAgY291bnRyeWRhdGEubG9jYWx0aW1lXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gdG9kYXkncyBkYXRhXG4gICAgICAgIGNvbnN0IHRvZGF5ID0gW107XG4gICAgICAgIGNvbnN0IHRvZGF5ZGF0YSA9IGZvcmVjYXN0ZGF0YVswXS5ob3VyO1xuICAgICAgICB0b2RheWRhdGEuZm9yRWFjaCgoaG91cmRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhvdXIgPSB7fTtcbiAgICAgICAgICAgIGhvdXIud2VhdGhlckRhdGFDZWxzaXVzID0gY3JlYXRlSG91ck9iaihcbiAgICAgICAgICAgICAgICBob3VyZGF0YS50aW1lLnNwbGl0KCcgJylbMV0sXG4gICAgICAgICAgICAgICAgaG91cmRhdGEudGVtcF9jLFxuICAgICAgICAgICAgICAgIGhvdXJkYXRhLmNvbmRpdGlvbi5pY29uXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaG91ci53ZWF0aGVyRGF0YUZhaHJlbmhlaXQgPSBjcmVhdGVIb3VyT2JqKFxuICAgICAgICAgICAgICAgIGhvdXJkYXRhLnRpbWUuc3BsaXQoJyAnKVsxXSxcbiAgICAgICAgICAgICAgICBob3VyZGF0YS50ZW1wX2YsXG4gICAgICAgICAgICAgICAgaG91cmRhdGEuY29uZGl0aW9uLmljb25cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0b2RheS5wdXNoKGhvdXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBmb3JlY2FzdCBkYXRhXG4gICAgICAgIGNvbnN0IGRheXMgPSBbXTtcbiAgICAgICAgZm9yZWNhc3RkYXRhLmZvckVhY2goKGRheWRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRheSA9IHt9O1xuICAgICAgICAgICAgZGF5LndlYXRoZXJEYXRhQ2Vsc2l1cyA9IGNyZWF0ZVdlYXRoZXJPYmooXG4gICAgICAgICAgICAgICAgZGF5ZGF0YS5kYXkubWF4dGVtcF9jLFxuICAgICAgICAgICAgICAgIGRheWRhdGEuZGF5Lm1pbnRlbXBfYyxcbiAgICAgICAgICAgICAgICBkYXlkYXRhLmRheS5hdmd0ZW1wX2MsXG4gICAgICAgICAgICAgICAgZGF5ZGF0YS5kYXkuYXZnaHVtaWRpdHksXG4gICAgICAgICAgICAgICAgZGF5ZGF0YS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW4sXG4gICAgICAgICAgICAgICAgZGF5ZGF0YS5kYXkuY29uZGl0aW9uLnRleHQsXG4gICAgICAgICAgICAgICAgZGF5ZGF0YS5kYXkuY29uZGl0aW9uLmljb25cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBkYXkud2VhdGhlckRhdGFGYWhyZW5oZWl0ID0gY3JlYXRlV2VhdGhlck9iaihcbiAgICAgICAgICAgICAgICBkYXlkYXRhLmRheS5tYXh0ZW1wX2YsXG4gICAgICAgICAgICAgICAgZGF5ZGF0YS5kYXkubWludGVtcF9mLFxuICAgICAgICAgICAgICAgIGRheWRhdGEuZGF5LmF2Z3RlbXBfZixcbiAgICAgICAgICAgICAgICBkYXlkYXRhLmRheS5hdmdodW1pZGl0eSxcbiAgICAgICAgICAgICAgICBkYXlkYXRhLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbixcbiAgICAgICAgICAgICAgICBkYXlkYXRhLmRheS5jb25kaXRpb24udGV4dCxcbiAgICAgICAgICAgICAgICBkYXlkYXRhLmRheS5jb25kaXRpb24uaWNvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGRheXMucHVzaChkYXkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvdW50cnksXG4gICAgICAgICAgICB0b2RheSxcbiAgICAgICAgICAgIGRheXMsXG4gICAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbn07XG5cbmNvbnN0IGNyZWF0ZUNvdW50cnlPYmogPSAobmFtZSwgY291bnRyeSwgdGltZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGNvdW50cnksXG4gICAgICAgIHRpbWUsXG4gICAgfTtcbn07XG5cbmNvbnN0IGNyZWF0ZVdlYXRoZXJPYmogPSAobWF4LCBtaW4sIGF2ZywgaHVtaWRpdHksIHJhaW4sIGRlc2NyaXB0aW9uLCBpY29uKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWF4LFxuICAgICAgICBtaW4sXG4gICAgICAgIGF2ZyxcbiAgICAgICAgaHVtaWRpdHksXG4gICAgICAgIHJhaW4sXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBpY29uLFxuICAgIH07XG59O1xuXG5jb25zdCBjcmVhdGVIb3VyT2JqID0gKHRpbWUsIHRlbXAsIGljb24pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aW1lLFxuICAgICAgICB0ZW1wLFxuICAgICAgICBpY29uLFxuICAgIH07XG59O1xuXG5kb21Db250cm9sbGVyKCk7XG5nZXRXZWF0aGVyRGF0YSgpO1xuIl0sIm5hbWVzIjpbIm1heHRlbXAiLCJtaW50ZW1wIiwiYXZndGVtcCIsImh1bWlkaXR5IiwiY2hhbmNlb2ZyYWluIiwiQ291bnRyeSIsImNvbnN0cnVjdG9yIiwibmFtZSIsImNvdW50cnkiLCJ0aW1lIiwiZWRpdENvdW50cnlEb20iLCJjb3VudHJ5VGl0bGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aW1lVGl0bGUiLCJ0ZXh0Q29udGVudCIsIkhvdXIiLCJpbWciLCJpbmZvIiwiY3JlYXRlSG91ckRvbSIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJob3VyVGltZSIsImNvbnRlbnQiLCJpbWFnZSIsImNsYXNzTGlzdCIsImFkZCIsInNyYyIsImFwcGVuZENoaWxkIiwiRGF5IiwibWF4IiwibWluIiwiYXZnIiwicmFpbiIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNyZWF0ZTNEYXlzRm9yZWNhc3REb20iLCJkZXNjcmlwdGlvbkNvbnRhaW5lciIsInRleHQiLCJjaGFuY2UiLCJyZXNldERvbSIsImZvcm0iLCJob3VybHkiLCJkYXlzQ29udGFpbmVyIiwicmVzZXQiLCJkb21Db250cm9sbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJnZXRXZWF0aGVyRGF0YSIsInZhbHVlIiwidG9kYXkiLCJmb3JFYWNoIiwiaG91ciIsImN1cnJlbnRIb3VyIiwid2VhdGhlckRhdGFDZWxzaXVzIiwidGVtcCIsImRheXMiLCJkYXkiLCJjdXJyZW50RGF5IiwidXNlckNvdW50cnkiLCJpbnB1dCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImZldGNoIiwibW9kZSIsInJlc3BvbnNlIiwianNvbiIsImZvcmVjYXN0ZGF0YSIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJjb3VudHJ5ZGF0YSIsImxvY2F0aW9uIiwiY3JlYXRlQ291bnRyeU9iaiIsImxvY2FsdGltZSIsInRvZGF5ZGF0YSIsImhvdXJkYXRhIiwiY3JlYXRlSG91ck9iaiIsInNwbGl0IiwidGVtcF9jIiwiY29uZGl0aW9uIiwid2VhdGhlckRhdGFGYWhyZW5oZWl0IiwidGVtcF9mIiwicHVzaCIsImRheWRhdGEiLCJjcmVhdGVXZWF0aGVyT2JqIiwibWF4dGVtcF9jIiwibWludGVtcF9jIiwiYXZndGVtcF9jIiwiYXZnaHVtaWRpdHkiLCJkYWlseV9jaGFuY2Vfb2ZfcmFpbiIsIm1heHRlbXBfZiIsIm1pbnRlbXBfZiIsImF2Z3RlbXBfZiIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=