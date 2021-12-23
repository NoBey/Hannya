/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./electron/bridge.ts":
/*!****************************!*\
  !*** ./electron/bridge.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n\nvar api = {\n  /**\n   * Here you can expose functions to the renderer process\n   * so they can interact with the main (electron) side\n   * without security problems.\n   *\n   * The function below can accessed using `window.Main.sendMessage`\n   */\n  sendMessage: function sendMessage(message) {\n    electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send('message', message);\n  },\n\n  /**\n   * Provide an easier way to listen to events\n   */\n  on: function on(channel, callback) {\n    electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.on(channel, function (_, data) {\n      return callback(data);\n    });\n  }\n};\nelectron__WEBPACK_IMPORTED_MODULE_0__.contextBridge.exposeInMainWorld('Main', api);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lbGVjdHJvbi9icmlkZ2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxJQUFNRSxHQUFHLEdBQUc7QUFDakI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFRUMsRUFBQUEsV0FBVyxFQUFFLHFCQUFDQyxPQUFELEVBQXFCO0FBQ2hDSCxJQUFBQSxzREFBQSxDQUFpQixTQUFqQixFQUE0QkcsT0FBNUI7QUFDRCxHQVhnQjs7QUFhakI7QUFDRjtBQUNBO0FBQ0VFLEVBQUFBLEVBQUUsRUFBRSxZQUFDQyxPQUFELEVBQWtCQyxRQUFsQixFQUF5QztBQUMzQ1AsSUFBQUEsb0RBQUEsQ0FBZU0sT0FBZixFQUF3QixVQUFDRSxDQUFELEVBQUlDLElBQUo7QUFBQSxhQUFhRixRQUFRLENBQUNFLElBQUQsQ0FBckI7QUFBQSxLQUF4QjtBQUNEO0FBbEJnQixDQUFaO0FBcUJQVixxRUFBQSxDQUFnQyxNQUFoQyxFQUF3Q0UsR0FBeEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYW5ueWEvLi9lbGVjdHJvbi9icmlkZ2UudHM/ZTJkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb250ZXh0QnJpZGdlLCBpcGNSZW5kZXJlciB9IGZyb20gJ2VsZWN0cm9uJ1xuXG5leHBvcnQgY29uc3QgYXBpID0ge1xuICAvKipcbiAgICogSGVyZSB5b3UgY2FuIGV4cG9zZSBmdW5jdGlvbnMgdG8gdGhlIHJlbmRlcmVyIHByb2Nlc3NcbiAgICogc28gdGhleSBjYW4gaW50ZXJhY3Qgd2l0aCB0aGUgbWFpbiAoZWxlY3Ryb24pIHNpZGVcbiAgICogd2l0aG91dCBzZWN1cml0eSBwcm9ibGVtcy5cbiAgICpcbiAgICogVGhlIGZ1bmN0aW9uIGJlbG93IGNhbiBhY2Nlc3NlZCB1c2luZyBgd2luZG93Lk1haW4uc2VuZE1lc3NhZ2VgXG4gICAqL1xuXG4gIHNlbmRNZXNzYWdlOiAobWVzc2FnZTogc3RyaW5nKSA9PiB7XG4gICAgaXBjUmVuZGVyZXIuc2VuZCgnbWVzc2FnZScsIG1lc3NhZ2UpXG4gIH0sXG5cbiAgLyoqXG4gICAqIFByb3ZpZGUgYW4gZWFzaWVyIHdheSB0byBsaXN0ZW4gdG8gZXZlbnRzXG4gICAqL1xuICBvbjogKGNoYW5uZWw6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKSA9PiB7XG4gICAgaXBjUmVuZGVyZXIub24oY2hhbm5lbCwgKF8sIGRhdGEpID0+IGNhbGxiYWNrKGRhdGEpKVxuICB9XG59XG5cbmNvbnRleHRCcmlkZ2UuZXhwb3NlSW5NYWluV29ybGQoJ01haW4nLCBhcGkpXG4iXSwibmFtZXMiOlsiY29udGV4dEJyaWRnZSIsImlwY1JlbmRlcmVyIiwiYXBpIiwic2VuZE1lc3NhZ2UiLCJtZXNzYWdlIiwic2VuZCIsIm9uIiwiY2hhbm5lbCIsImNhbGxiYWNrIiwiXyIsImRhdGEiLCJleHBvc2VJbk1haW5Xb3JsZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./electron/bridge.ts\n");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./electron/bridge.ts");
/******/ 	
/******/ })()
;