/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var image = document.createElement("img");
image.src = "http://lorempixel.com/400/400";

document.body.appendChild(image);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var sumCommon = function sumCommon(a, b) {
  return a + b;
}; //return a + b
module.exports = sumCommon; // common js(node) export syntax

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sumES2015 = function sumES2015(a, b) {
  return a + b;
}; //return a + b
exports.default = sumES2015; // es2015 export syntax

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _sumES = __webpack_require__(2);

var _sumES2 = _interopRequireDefault(_sumES);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// index.js is the 'Entry Point' js file, or the central file that calls other js files to utilize their logic, and which has NO export modules

//module import/export types

//Common JS = Node.js
// 'require' || 'module.exports'

//ES2015 = modern javascript
// 'import' || 'export'


var sumCommon = __webpack_require__(1); // common js (node) import statement. note the relative path
//import the entire code block found in image_viewr.js

var totalCommon = sumCommon(10, 5);
var totalES2015 = (0, _sumES2.default)(10, 5);
console.log('common syntax import sum function: ' + totalCommon);
console.log('es2015 syntax import sum function: ' + totalES2015);

/***/ }
/******/ ]);