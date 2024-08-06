/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar validators_1 = __webpack_require__(/*! ./validators */ \"./src/validators.ts\");\nvar login_model_1 = __webpack_require__(/*! ./models/login.model */ \"./src/models/login.model.ts\");\nvar login = new login_model_1.LoginModel('', '');\nconsole.log(validators_1.registeredValidators);\nfunction handleLogin() {\n    var usernameInput = document.getElementById('usernameInput');\n    var passwordInput = document.getElementById('passwordInput');\n    var username = usernameInput.value;\n    var password = passwordInput.value;\n    console.log('Login started with username:', username, 'and password:', password);\n}\n\n\n//# sourceURL=webpack://learning_typescript/./src/app.ts?");

/***/ }),

/***/ "./src/models/login.model.ts":
/*!***********************************!*\
  !*** ./src/models/login.model.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.LoginModel = void 0;\nvar validators_1 = __webpack_require__(/*! ../validators */ \"./src/validators.ts\");\nvar LoginModel = /** @class */ (function () {\n    function LoginModel(username, password) {\n        this.username = username;\n        this.password = password;\n        (0, validators_1.registerRequired)(this, 'username');\n        (0, validators_1.registerRequired)(this, 'password');\n    }\n    return LoginModel;\n}());\nexports.LoginModel = LoginModel;\n\n\n//# sourceURL=webpack://learning_typescript/./src/models/login.model.ts?");

/***/ }),

/***/ "./src/validators.ts":
/*!***************************!*\
  !*** ./src/validators.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.registerPositiveNumber = exports.registerRequired = exports.registeredValidators = void 0;\nexports.registeredValidators = {};\nfunction registerRequired(target, propName) {\n    if (!exports.registeredValidators[target.constructor.name]) {\n        exports.registeredValidators[target.constructor.name] = {};\n    }\n    exports.registeredValidators[target.constructor.name][propName] = ['required'];\n}\nexports.registerRequired = registerRequired;\nfunction registerPositiveNumber(target, propName) {\n    if (!exports.registeredValidators[target.constructor.name]) {\n        exports.registeredValidators[target.constructor.name] = {};\n    }\n    exports.registeredValidators[target.constructor.name][propName] = ['positive'];\n}\nexports.registerPositiveNumber = registerPositiveNumber;\n\n\n//# sourceURL=webpack://learning_typescript/./src/validators.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;