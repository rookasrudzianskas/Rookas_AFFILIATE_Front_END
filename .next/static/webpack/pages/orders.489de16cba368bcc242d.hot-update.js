/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/orders",{

/***/ "./src/components/Order.js":
/*!*********************************!*\
  !*** ./src/components/Order.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../slices/basketSlice */ \"./src/slices/basketSlice.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-currency-formatter */ \"./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/rookasrudzianskas/Documents/React/AMAZON @2/AMAZON @3/AMAZON copy 2 2/src/components/Order.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Order = function Order(_ref) {\n  _s();\n\n  var id = _ref.id,\n      title = _ref.title,\n      price = _ref.price,\n      description = _ref.description,\n      category = _ref.category,\n      image = _ref.image,\n      rating = _ref.rating,\n      hasPrime = _ref.hasPrime;\n  var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_slices_basketSlice__WEBPACK_IMPORTED_MODULE_3__.selectItems);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"relative border rounded-md\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: \"font-bold text-xs\",\n          children: \"ORDER PLACED\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: \"22 May 2021\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: \"text-xs font-bold\",\n          children: \"TOTAL\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: \"$1323.34 - Next-Day Delivery 6.99\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Order, \"tY2Gvv5VcC5OmHFNMSHq17tjIN8=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector];\n});\n\n_c = Order;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Order);\n\nvar _c;\n\n$RefreshReg$(_c, \"Order\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvT3JkZXIuanM/MTBkNCJdLCJuYW1lcyI6WyJPcmRlciIsImlkIiwidGl0bGUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpbWFnZSIsInJhdGluZyIsImhhc1ByaW1lIiwiaXRlbXMiLCJ1c2VTZWxlY3RvciIsInNlbGVjdEl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQTBFO0FBQUE7O0FBQUEsTUFBdkVDLEVBQXVFLFFBQXZFQSxFQUF1RTtBQUFBLE1BQW5FQyxLQUFtRSxRQUFuRUEsS0FBbUU7QUFBQSxNQUE1REMsS0FBNEQsUUFBNURBLEtBQTREO0FBQUEsTUFBckRDLFdBQXFELFFBQXJEQSxXQUFxRDtBQUFBLE1BQXhDQyxRQUF3QyxRQUF4Q0EsUUFBd0M7QUFBQSxNQUE5QkMsS0FBOEIsUUFBOUJBLEtBQThCO0FBQUEsTUFBdkJDLE1BQXVCLFFBQXZCQSxNQUF1QjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUVwRixNQUFNQyxLQUFLLEdBQUdDLHdEQUFXLENBQUNDLDREQUFELENBQXpCO0FBR0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsNEJBQWY7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxvRUFBZjtBQUFBLDhCQUNJO0FBQUEsZ0NBQ0k7QUFBRyxtQkFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFNSTtBQUFBLGdDQUNJO0FBQUcsbUJBQVMsRUFBQyxtQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWdCSCxDQXJCRDs7R0FBTVgsSztVQUVZVSxvRDs7O0tBRlpWLEs7QUF1Qk4sK0RBQWVBLEtBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9PcmRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7c2VsZWN0SXRlbXN9IGZyb20gXCIuLi9zbGljZXMvYmFza2V0U2xpY2VcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IEN1cnJlbmN5IGZyb20gXCJyZWFjdC1jdXJyZW5jeS1mb3JtYXR0ZXJcIjtcblxuY29uc3QgT3JkZXIgPSAoeyBpZCwgdGl0bGUsIHByaWNlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnksIGltYWdlLCByYXRpbmcsIGhhc1ByaW1lIH0pID0+IHtcblxuICAgIGNvbnN0IGl0ZW1zID0gdXNlU2VsZWN0b3Ioc2VsZWN0SXRlbXMpO1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJvcmRlciByb3VuZGVkLW1kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMTAgcC01IGJnLWdyYXktMTAwIHRleHQtc20gdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhzXCI+T1JERVIgUExBQ0VEPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD4yMiBNYXkgMjAyMTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkXCI+VE9UQUw8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPHA+JDEzMjMuMzQgLSBOZXh0LURheSBEZWxpdmVyeSA2Ljk5PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPcmRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Order.js\n");

/***/ })

});