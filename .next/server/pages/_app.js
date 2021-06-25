/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": function() { return /* binding */ auth; },\n/* harmony export */   \"provider\": function() { return /* binding */ provider; }\n/* harmony export */ });\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);\n // For Firebase JS SDK v7.20.0 and later, measurementId is optional\n\nconst firebaseConfig = {\n  apiKey: \"AIzaSyAzxAD9D8nctU7AM8B0Cf4dLJ3Hxz53e7g\",\n  authDomain: \"rookas-sales-app.firebaseapp.com\",\n  projectId: \"rookas-sales-app\",\n  storageBucket: \"rookas-sales-app.appspot.com\",\n  messagingSenderId: \"907530779444\",\n  appId: \"1:907530779444:web:738c0bc51e040e56ca0361\",\n  measurementId: \"G-LX6BTKXEJV\"\n};\nconst app = !(firebase__WEBPACK_IMPORTED_MODULE_0___default().apps.length) ? firebase__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig) : firebase__WEBPACK_IMPORTED_MODULE_0___default().app();\nconst db = app.firestore();\nconst auth = app.auth();\nconst provider = new (firebase__WEBPACK_IMPORTED_MODULE_0___default().auth.GoogleAuthProvider)();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (db);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9maXJlYmFzZS5qcz8yYWRjIl0sIm5hbWVzIjpbImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCIsImZpcmViYXNlIiwiZGIiLCJmaXJlc3RvcmUiLCJhdXRoIiwicHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Q0FFQTs7QUFDQSxNQUFNQSxjQUFjLEdBQUc7QUFDbkJDLFFBQU0sRUFBRSx5Q0FEVztBQUVuQkMsWUFBVSxFQUFFLGtDQUZPO0FBR25CQyxXQUFTLEVBQUUsa0JBSFE7QUFJbkJDLGVBQWEsRUFBRSw4QkFKSTtBQUtuQkMsbUJBQWlCLEVBQUUsY0FMQTtBQU1uQkMsT0FBSyxFQUFFLDJDQU5ZO0FBT25CQyxlQUFhLEVBQUU7QUFQSSxDQUF2QjtBQVVBLE1BQU1DLEdBQUcsR0FBRyxDQUFDQyw2REFBRCxHQUF3QkEsNkRBQUEsQ0FBdUJULGNBQXZCLENBQXhCLEdBQWlFUyxtREFBQSxFQUE3RTtBQUVBLE1BQU1DLEVBQUUsR0FBR0YsR0FBRyxDQUFDRyxTQUFKLEVBQVg7QUFDQSxNQUFNQyxJQUFJLEdBQUdKLEdBQUcsQ0FBQ0ksSUFBSixFQUFiO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLElBQUlKLHlFQUFKLEVBQWpCO0FBRUE7QUFDQSwrREFBZUMsRUFBZiIsImZpbGUiOiIuL2ZpcmViYXNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xuXG4vLyBGb3IgRmlyZWJhc2UgSlMgU0RLIHY3LjIwLjAgYW5kIGxhdGVyLCBtZWFzdXJlbWVudElkIGlzIG9wdGlvbmFsXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5QXp4QUQ5RDhuY3RVN0FNOEIwQ2Y0ZExKM0h4ejUzZTdnXCIsXG4gICAgYXV0aERvbWFpbjogXCJyb29rYXMtc2FsZXMtYXBwLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJyb29rYXMtc2FsZXMtYXBwXCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJyb29rYXMtc2FsZXMtYXBwLmFwcHNwb3QuY29tXCIsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiOTA3NTMwNzc5NDQ0XCIsXG4gICAgYXBwSWQ6IFwiMTo5MDc1MzA3Nzk0NDQ6d2ViOjczOGMwYmM1MWUwNDBlNTZjYTAzNjFcIixcbiAgICBtZWFzdXJlbWVudElkOiBcIkctTFg2QlRLWEVKVlwiXG59O1xuXG5jb25zdCBhcHAgPSAhZmlyZWJhc2UuYXBwcy5sZW5ndGggPyBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKSA6IGZpcmViYXNlLmFwcCgpO1xuXG5jb25zdCBkYiA9IGFwcC5maXJlc3RvcmUoKTtcbmNvbnN0IGF1dGggPSBhcHAuYXV0aCgpO1xuY29uc3QgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcblxuZXhwb3J0IHthdXRoLCBwcm92aWRlcn07XG5leHBvcnQgZGVmYXVsdCBkYjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./src/app/store.js":
/*!**************************!*\
  !*** ./src/app/store.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": function() { return /* binding */ store; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slices/basketSlice */ \"./src/slices/basketSlice.js\");\n\n // THE GLOBAL STORE SETUP\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n  reducer: {\n    basket: _slices_basketSlice__WEBPACK_IMPORTED_MODULE_1__.default\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9zcmMvYXBwL3N0b3JlLmpzP2IxODUiXSwibmFtZXMiOlsic3RvcmUiLCJjb25maWd1cmVTdG9yZSIsInJlZHVjZXIiLCJiYXNrZXQiLCJiYXNrZXRSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Q0FHQTs7QUFDTyxNQUFNQSxLQUFLLEdBQUdDLGdFQUFjLENBQUM7QUFDbENDLFNBQU8sRUFBRTtBQUNQQyxVQUFNLEVBQUVDLHdEQUFhQTtBQURkO0FBRHlCLENBQUQsQ0FBNUIiLCJmaWxlIjoiLi9zcmMvYXBwL3N0b3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IGJhc2tldFJlZHVjZXIgZnJvbSBcIi4uL3NsaWNlcy9iYXNrZXRTbGljZVwiO1xuXG4vLyBUSEUgR0xPQkFMIFNUT1JFIFNFVFVQXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gIHJlZHVjZXI6IHtcbiAgICBiYXNrZXQ6IGJhc2tldFJlZHVjZXJcbiAgfSxcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/store.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/store */ \"./src/app/store.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../firebase */ \"./firebase.js\");\n\nvar _jsxFileName = \"/Users/rookasrudzianskas/Documents/React/AMAZON @2/AMAZON @3/AMAZON copy 2 2/src/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_5__.auth);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n    store: _app_store__WEBPACK_IMPORTED_MODULE_2__.store,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9zcmMvcGFnZXMvX2FwcC5qcz8yMjU0Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlciIsInVzZUF1dGhTdGF0ZSIsImF1dGgiLCJzdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFELEtBQThCO0FBQ3hDLFFBQU0sQ0FBQ0MsSUFBRCxJQUFTQyx1RUFBWSxDQUFDQywyQ0FBRCxDQUEzQjtBQUVBLHNCQUNBLDhEQUFDLGlEQUFEO0FBQVUsU0FBSyxFQUFFQyw2Q0FBakI7QUFBQSwyQkFDRSw4REFBQyxTQUFELG9CQUFlSixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREE7QUFLSCxDQVJEOztBQVVBLCtEQUFlRixLQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi9hcHAvc3RvcmUnXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7dXNlQXV0aFN0YXRlfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiO1xuaW1wb3J0IHthdXRofSBmcm9tIFwiLi4vLi4vZmlyZWJhc2VcIjtcblxuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgICBjb25zdCBbdXNlcl0gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XG5cbiAgICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/slices/basketSlice.js":
/*!***********************************!*\
  !*** ./src/slices/basketSlice.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"basketSlice\": function() { return /* binding */ basketSlice; },\n/* harmony export */   \"addToBasket\": function() { return /* binding */ addToBasket; },\n/* harmony export */   \"removeFromBasket\": function() { return /* binding */ removeFromBasket; },\n/* harmony export */   \"selectItems\": function() { return /* binding */ selectItems; },\n/* harmony export */   \"selectTotal\": function() { return /* binding */ selectTotal; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n  items: []\n};\nconst basketSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: \"basket\",\n  // initial state\n  initialState,\n  // defining actions in here\n  reducers: {\n    addToBasket: (state, action) => {\n      // here we are adding the products to the state, updating the state\n      // keep whatever is in here, and the data which is new in it\n      state.items = [...state.items, action.payload];\n      console.log(action.payload);\n    },\n    removeFromBasket: (state, action) => {\n      const index = state.items.findIndex(basketItem => basketItem.price === action.payload.price);\n      let newBasket = [...state.items];\n\n      if (index >= 0) {\n        newBasket.splice(index, 1);\n      } else {\n        console.warn(`Can not find the product ${action.payload.id} which is not in the basket`);\n      }\n\n      state.items = newBasket;\n    }\n  }\n});\nconst {\n  addToBasket,\n  removeFromBasket\n} = basketSlice.actions; // Selectors - This is how we pull information from the Global store slice\n\nconst selectItems = state => state.basket.items; // export const selectTotal = (state) => state.basket.items.reduce((total,item) => total + item.price,0);\n// we want to get total, we get the total and item, total starts at 0 and item is running per each item, we take total every time, and add the item price to it,\n// and return the total of the basket\n\nconst selectTotal = state => state.basket.items.reduce((total, item) => total + item.price, 0);\n/* harmony default export */ __webpack_exports__[\"default\"] = (basketSlice.reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9zcmMvc2xpY2VzL2Jhc2tldFNsaWNlLmpzPzQ1YzkiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXRlbXMiLCJiYXNrZXRTbGljZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiYWRkVG9CYXNrZXQiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlRnJvbUJhc2tldCIsImluZGV4IiwiZmluZEluZGV4IiwiYmFza2V0SXRlbSIsInByaWNlIiwibmV3QmFza2V0Iiwic3BsaWNlIiwid2FybiIsImlkIiwiYWN0aW9ucyIsInNlbGVjdEl0ZW1zIiwiYmFza2V0Iiwic2VsZWN0VG90YWwiLCJyZWR1Y2UiLCJ0b3RhbCIsIml0ZW0iLCJyZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQSxZQUFZLEdBQUc7QUFDakJDLE9BQUssRUFBRTtBQURVLENBQXJCO0FBSU8sTUFBTUMsV0FBVyxHQUFHQyw2REFBVyxDQUFDO0FBQ25DQyxNQUFJLEVBQUUsUUFENkI7QUFFbkM7QUFDQUosY0FIbUM7QUFJbkM7QUFDQUssVUFBUSxFQUFFO0FBQ05DLGVBQVcsRUFBRSxDQUFDQyxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDNUI7QUFDQTtBQUNBRCxXQUFLLENBQUNOLEtBQU4sR0FBYyxDQUFDLEdBQUdNLEtBQUssQ0FBQ04sS0FBVixFQUFpQk8sTUFBTSxDQUFDQyxPQUF4QixDQUFkO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFNLENBQUNDLE9BQW5CO0FBQ0gsS0FOSztBQU9ORyxvQkFBZ0IsRUFBRSxDQUFDTCxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDakMsWUFBTUssS0FBSyxHQUFHTixLQUFLLENBQUNOLEtBQU4sQ0FBWWEsU0FBWixDQUNUQyxVQUFELElBQWdCQSxVQUFVLENBQUNDLEtBQVgsS0FBcUJSLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlTyxLQUQxQyxDQUFkO0FBSUEsVUFBSUMsU0FBUyxHQUFHLENBQUMsR0FBR1YsS0FBSyxDQUFDTixLQUFWLENBQWhCOztBQUVBLFVBQUdZLEtBQUssSUFBSSxDQUFaLEVBQWM7QUFDVkksaUJBQVMsQ0FBQ0MsTUFBVixDQUFpQkwsS0FBakIsRUFBdUIsQ0FBdkI7QUFDSCxPQUZELE1BRUs7QUFDREgsZUFBTyxDQUFDUyxJQUFSLENBQWMsNEJBQTJCWCxNQUFNLENBQUNDLE9BQVAsQ0FBZVcsRUFBRyw2QkFBM0Q7QUFFSDs7QUFHRGIsV0FBSyxDQUFDTixLQUFOLEdBQWNnQixTQUFkO0FBQ0g7QUF2Qks7QUFMeUIsQ0FBRCxDQUEvQjtBQWlDQSxNQUFNO0FBQUVYLGFBQUY7QUFBZU07QUFBZixJQUFvQ1YsV0FBVyxDQUFDbUIsT0FBdEQsQyxDQUVQOztBQUNPLE1BQU1DLFdBQVcsR0FBSWYsS0FBRCxJQUFXQSxLQUFLLENBQUNnQixNQUFOLENBQWF0QixLQUE1QyxDLENBQ1A7QUFDQTtBQUNBOztBQUNPLE1BQU11QixXQUFXLEdBQUlqQixLQUFELElBQVdBLEtBQUssQ0FBQ2dCLE1BQU4sQ0FBYXRCLEtBQWIsQ0FBbUJ3QixNQUFuQixDQUEwQixDQUFDQyxLQUFELEVBQVFDLElBQVIsS0FBaUJELEtBQUssR0FBR0MsSUFBSSxDQUFDWCxLQUF4RCxFQUErRCxDQUEvRCxDQUEvQjtBQUVQLCtEQUFlZCxXQUFXLENBQUMwQixPQUEzQiIsImZpbGUiOiIuL3NyYy9zbGljZXMvYmFza2V0U2xpY2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBpdGVtczogW10sXG59O1xuXG5leHBvcnQgY29uc3QgYmFza2V0U2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogXCJiYXNrZXRcIixcbiAgICAvLyBpbml0aWFsIHN0YXRlXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIC8vIGRlZmluaW5nIGFjdGlvbnMgaW4gaGVyZVxuICAgIHJlZHVjZXJzOiB7XG4gICAgICAgIGFkZFRvQmFza2V0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgLy8gaGVyZSB3ZSBhcmUgYWRkaW5nIHRoZSBwcm9kdWN0cyB0byB0aGUgc3RhdGUsIHVwZGF0aW5nIHRoZSBzdGF0ZVxuICAgICAgICAgICAgLy8ga2VlcCB3aGF0ZXZlciBpcyBpbiBoZXJlLCBhbmQgdGhlIGRhdGEgd2hpY2ggaXMgbmV3IGluIGl0XG4gICAgICAgICAgICBzdGF0ZS5pdGVtcyA9IFsuLi5zdGF0ZS5pdGVtcywgYWN0aW9uLnBheWxvYWRdO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQpXG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUZyb21CYXNrZXQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHN0YXRlLml0ZW1zLmZpbmRJbmRleChcbiAgICAgICAgICAgICAgICAoYmFza2V0SXRlbSkgPT4gYmFza2V0SXRlbS5wcmljZSA9PT0gYWN0aW9uLnBheWxvYWQucHJpY2VcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGxldCBuZXdCYXNrZXQgPSBbLi4uc3RhdGUuaXRlbXNdO1xuXG4gICAgICAgICAgICBpZihpbmRleCA+PSAwKXtcbiAgICAgICAgICAgICAgICBuZXdCYXNrZXQuc3BsaWNlKGluZGV4LDEpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBDYW4gbm90IGZpbmQgdGhlIHByb2R1Y3QgJHthY3Rpb24ucGF5bG9hZC5pZH0gd2hpY2ggaXMgbm90IGluIHRoZSBiYXNrZXRgKTtcblxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIHN0YXRlLml0ZW1zID0gbmV3QmFza2V0O1xuICAgICAgICB9LFxuICAgIH0sXG59KTtcblxuXG5leHBvcnQgY29uc3QgeyBhZGRUb0Jhc2tldCwgcmVtb3ZlRnJvbUJhc2tldCB9ID0gYmFza2V0U2xpY2UuYWN0aW9ucztcblxuLy8gU2VsZWN0b3JzIC0gVGhpcyBpcyBob3cgd2UgcHVsbCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBHbG9iYWwgc3RvcmUgc2xpY2VcbmV4cG9ydCBjb25zdCBzZWxlY3RJdGVtcyA9IChzdGF0ZSkgPT4gc3RhdGUuYmFza2V0Lml0ZW1zO1xuLy8gZXhwb3J0IGNvbnN0IHNlbGVjdFRvdGFsID0gKHN0YXRlKSA9PiBzdGF0ZS5iYXNrZXQuaXRlbXMucmVkdWNlKCh0b3RhbCxpdGVtKSA9PiB0b3RhbCArIGl0ZW0ucHJpY2UsMCk7XG4vLyB3ZSB3YW50IHRvIGdldCB0b3RhbCwgd2UgZ2V0IHRoZSB0b3RhbCBhbmQgaXRlbSwgdG90YWwgc3RhcnRzIGF0IDAgYW5kIGl0ZW0gaXMgcnVubmluZyBwZXIgZWFjaCBpdGVtLCB3ZSB0YWtlIHRvdGFsIGV2ZXJ5IHRpbWUsIGFuZCBhZGQgdGhlIGl0ZW0gcHJpY2UgdG8gaXQsXG4vLyBhbmQgcmV0dXJuIHRoZSB0b3RhbCBvZiB0aGUgYmFza2V0XG5leHBvcnQgY29uc3Qgc2VsZWN0VG90YWwgPSAoc3RhdGUpID0+IHN0YXRlLmJhc2tldC5pdGVtcy5yZWR1Y2UoKHRvdGFsLCBpdGVtKSA9PiB0b3RhbCArIGl0ZW0ucHJpY2UsIDApO1xuXG5leHBvcnQgZGVmYXVsdCBiYXNrZXRTbGljZS5yZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/slices/basketSlice.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (function() {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase");;

/***/ }),

/***/ "react-firebase-hooks/auth":
/*!********************************************!*\
  !*** external "react-firebase-hooks/auth" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-firebase-hooks/auth");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();