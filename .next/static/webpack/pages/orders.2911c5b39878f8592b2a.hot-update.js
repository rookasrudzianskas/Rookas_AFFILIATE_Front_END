/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/orders",{

/***/ "./src/pages/orders.js":
/*!*****************************!*\
  !*** ./src/pages/orders.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_rookasrudzianskas_Documents_React_AMAZON_2_AMAZON_3_AMAZON_copy_2_2_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase */ \"./firebase.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stripe/stripe-js */ \"./node_modules/@stripe/stripe-js/dist/stripe.esm.js\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! stripe */ \"./node_modules/stripe/lib/stripe.js\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/process/browser.js\");\n\n\n\nvar _jsxFileName = \"/Users/rookasrudzianskas/Documents/React/AMAZON @2/AMAZON @3/AMAZON copy 2 2/src/pages/orders.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar stripePromise = (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_6__.loadStripe)(process.env.STRIPE_SECRET_KEY);\n\nvar Orders = function Orders() {\n  _s();\n\n  var _useAuthState = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth),\n      _useAuthState2 = (0,_Users_rookasrudzianskas_Documents_React_AMAZON_2_AMAZON_3_AMAZON_copy_2_2_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useAuthState, 1),\n      user = _useAuthState2[0];\n\n  var userDisplayName = \"\".concat(user !== null && user !== void 0 && user.displayName ? user === null || user === void 0 ? void 0 : user.displayName : \"Your\"); // const stripeOrders = db.collection('users').doc(user.email).collection('orders').orderBy('timestamp', 'desc').get();\n  // const orders = stripeOrders.docs.map(async (order) => ({\n  //         id: order.id,\n  //         amount: order.data().amount,\n  //         amountShipping: order.data().amount_shipping,\n  //         images: order.data().images,\n  //         timestamp: moment(order.data().timestamp.toDate()).unix(),\n  //         items: (\n  //             // gets all the items in here\n  //             // returs all the information, and the is mapped to the data and is in hte items\n  //             await stripe.checkout.sessions.listLineItems(order.id, {\n  //                 limit: 100\n  //             })\n  //         ).data,\n  //     })\n  // );\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: \"max-w-screen-lg mx-auto p-10\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"text-3xl border-b mb-2 pb-1 border-yellow-400\",\n        children: [\"\".concat(userDisplayName, \" \", \" \", \" Orders \\uD83D\\uDC47 \"), \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, _this), user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: \"x Orders\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 21\n      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: \"Please sign in to see your orders\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 21\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-5 spacy-y-4\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Orders, \"hP/7NvzUIXfxIpRVjMlmHSnysKo=\", false, function () {\n  return [react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState];\n});\n\n_c = Orders;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Orders); // DOES NOT WORK SERVER SIDE RENDERING BECAUSE THE AUTHENTICATION MUST BE GLOBAL PER NEXT JS. NOW\n// IT IS JUST DUMMY DATA IN HERE\n// possible fixes in here?!\n// basically node js\n// import React from 'react';\n// import Header from \"../components/Header\";\n// import db, {auth} from \"../../firebase\";\n// import {useAuthState} from \"react-firebase-hooks/auth\";\n// import firebase from \"firebase\";\n// import moment from \"moment/moment\";\n// import {loadStripe} from \"@stripe/stripe-js\";\n// // const stripePromise = loadStripe(process.env.STRIPE_SECRET_KEY);\n//\n// const Orders = async () => {\n//\n//     const [user] = useAuthState(auth);\n//     // const userDisplayName = `${user?.displayName ? user?.displayName : \"Your\"}`;\n//     // const stripeOrders = await db.collection('users').doc(user.email).collection('orders').orderBy('timestamp', 'desc').get();\n//\n//     // console.log(stripeOrders);\n//\n//     return (\n//         <div>\n//             <Header/>\n//             {/*<main className=\"max-w-screen-lg mx-auto p-10\">*/}\n//             {/*    <h1 className=\"text-3xl border-b mb-2 pb-1 border-yellow-400\">{`${userDisplayName} ${\" \"} Orders 👇 `} </h1>*/}\n//             {/*    {user ? (*/}\n//             {/*        <h2>x Orders</h2>*/}\n//             {/*    ) : (*/}\n//             {/*        <h2>Please sign in to see your orders</h2>*/}\n//             {/*    )}*/}\n//\n//             {/*    <div className=\"mt-5 spacy-y-4\">*/}\n//\n//             {/*    </div>*/}\n//             {/*</main>*/}\n//         </div>\n//     );\n// };\n//\n// export default Orders;\n//\n// // basically node js\n// // export async function getServerSideProps(context) {\n//\n//\n//\n//\n//     //     const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);\n//     //\n//     // // Get the user logged in credentials in here\n//     // const session = auth.user;\n//     // console.log(\"This is\", session);\n//     // if(!session) {\n//     //     return {\n//     //         props: {}\n//     //     };\n//     // }\n//     // //will get all the ordrrs for the user\n//     // // firebase db\n//     // const stripeOrders = await db.collection('users').doc(await session.user.email).collection('orders').orderBy('timestamp', 'desc').get();\n//     //\n//     // // stripe orders in here\n//     // const orders = await Promise.all(\n//     //     stripeOrders.docs.map(async (order) => ({\n//     //         id: order.id,\n//     //         amount: order.data().amount,\n//     //         amountShipping: order.data().amount_shipping,\n//     //         images: order.data().images,\n//     //         timestamp: moment(order.data().timestamp.toDate()).unix(),\n//     //         items: (\n//     //             // gets all the items in here\n//     //             // returs all the information, and the is mapped to the data and is in hte items\n//     //             await stripe.checkout.sessions.listLineItems(order.id, {\n//     //                 limit: 100\n//     //             })\n//     //         ).data,\n//     //     }))\n//     // );\n//\n//     // let user = auth.onAuthStateChanged(async user => alert(user);\n//     //\n//     // return {\n//     //     props: {\n//     //         // orders,\n//     //     }\n//     // }\n// // }\n\nvar _c;\n\n$RefreshReg$(_c, \"Orders\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL29yZGVycy5qcz9hZmZkIl0sIm5hbWVzIjpbInN0cmlwZVByb21pc2UiLCJsb2FkU3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9TRUNSRVRfS0VZIiwiT3JkZXJzIiwidXNlQXV0aFN0YXRlIiwiYXV0aCIsInVzZXIiLCJ1c2VyRGlzcGxheU5hbWUiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsSUFBTUEsYUFBYSxHQUFHQyw2REFBVSxDQUFDQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsaUJBQWIsQ0FBaEM7O0FBRUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLHNCQUVGQyx1RUFBWSxDQUFDQywyQ0FBRCxDQUZWO0FBQUE7QUFBQSxNQUVWQyxJQUZVOztBQUdqQixNQUFNQyxlQUFlLGFBQU1ELElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosSUFBQUEsSUFBSSxDQUFFRSxXQUFOLEdBQW9CRixJQUFwQixhQUFvQkEsSUFBcEIsdUJBQW9CQSxJQUFJLENBQUVFLFdBQTFCLEdBQXdDLE1BQTlDLENBQXJCLENBSGlCLENBTWpCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBTSxlQUFTLEVBQUMsOEJBQWhCO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFDLCtDQUFkO0FBQUEsNkJBQWtFRCxlQUFsRSxPQUFxRixHQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQUVLRCxJQUFJLGdCQUNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREMsZ0JBR0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMUixlQVFJO0FBQUssaUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWlCSCxDQTFDRDs7R0FBTUgsTTtVQUVhQyxtRTs7O0tBRmJELE07O0FBNENOLCtEQUFlQSxNQUFmLEUsQ0FHQTtBQUNBO0FBQ0E7QUFFQTtBQW9GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvcGFnZXMvb3JkZXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgZGIsIHthdXRofSBmcm9tIFwiLi4vLi4vZmlyZWJhc2VcIjtcbmltcG9ydCB7dXNlQXV0aFN0YXRlfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiO1xuaW1wb3J0IHtsb2FkU3RyaXBlfSBmcm9tIFwiQHN0cmlwZS9zdHJpcGUtanNcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0ICogYXMgc3RyaXBlIGZyb20gXCJzdHJpcGVcIjtcbmNvbnN0IHN0cmlwZVByb21pc2UgPSBsb2FkU3RyaXBlKHByb2Nlc3MuZW52LlNUUklQRV9TRUNSRVRfS0VZKTtcblxuY29uc3QgT3JkZXJzID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW3VzZXJdID0gdXNlQXV0aFN0YXRlKGF1dGgpO1xuICAgIGNvbnN0IHVzZXJEaXNwbGF5TmFtZSA9IGAke3VzZXI/LmRpc3BsYXlOYW1lID8gdXNlcj8uZGlzcGxheU5hbWUgOiBcIllvdXJcIn1gO1xuXG5cbiAgICAvLyBjb25zdCBzdHJpcGVPcmRlcnMgPSBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh1c2VyLmVtYWlsKS5jb2xsZWN0aW9uKCdvcmRlcnMnKS5vcmRlckJ5KCd0aW1lc3RhbXAnLCAnZGVzYycpLmdldCgpO1xuXG4gICAgLy8gY29uc3Qgb3JkZXJzID0gc3RyaXBlT3JkZXJzLmRvY3MubWFwKGFzeW5jIChvcmRlcikgPT4gKHtcbiAgICAvLyAgICAgICAgIGlkOiBvcmRlci5pZCxcbiAgICAvLyAgICAgICAgIGFtb3VudDogb3JkZXIuZGF0YSgpLmFtb3VudCxcbiAgICAvLyAgICAgICAgIGFtb3VudFNoaXBwaW5nOiBvcmRlci5kYXRhKCkuYW1vdW50X3NoaXBwaW5nLFxuICAgIC8vICAgICAgICAgaW1hZ2VzOiBvcmRlci5kYXRhKCkuaW1hZ2VzLFxuICAgIC8vICAgICAgICAgdGltZXN0YW1wOiBtb21lbnQob3JkZXIuZGF0YSgpLnRpbWVzdGFtcC50b0RhdGUoKSkudW5peCgpLFxuICAgIC8vICAgICAgICAgaXRlbXM6IChcbiAgICAvLyAgICAgICAgICAgICAvLyBnZXRzIGFsbCB0aGUgaXRlbXMgaW4gaGVyZVxuICAgIC8vICAgICAgICAgICAgIC8vIHJldHVycyBhbGwgdGhlIGluZm9ybWF0aW9uLCBhbmQgdGhlIGlzIG1hcHBlZCB0byB0aGUgZGF0YSBhbmQgaXMgaW4gaHRlIGl0ZW1zXG4gICAgLy8gICAgICAgICAgICAgYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmxpc3RMaW5lSXRlbXMob3JkZXIuaWQsIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgbGltaXQ6IDEwMFxuICAgIC8vICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICApLmRhdGEsXG4gICAgLy8gICAgIH0pXG4gICAgLy8gKTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkZXIvPlxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLWxnIG14LWF1dG8gcC0xMFwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBib3JkZXItYiBtYi0yIHBiLTEgYm9yZGVyLXllbGxvdy00MDBcIj57YCR7dXNlckRpc3BsYXlOYW1lfSAke1wiIFwifSBPcmRlcnMg8J+RhyBgfSA8L2gxPlxuICAgICAgICAgICAgICAgIHt1c2VyID8gKFxuICAgICAgICAgICAgICAgICAgICA8aDI+eCBPcmRlcnM8L2gyPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxoMj5QbGVhc2Ugc2lnbiBpbiB0byBzZWUgeW91ciBvcmRlcnM8L2gyPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgc3BhY3kteS00XCI+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVycztcblxuXG4vLyBET0VTIE5PVCBXT1JLIFNFUlZFUiBTSURFIFJFTkRFUklORyBCRUNBVVNFIFRIRSBBVVRIRU5USUNBVElPTiBNVVNUIEJFIEdMT0JBTCBQRVIgTkVYVCBKUy4gTk9XXG4vLyBJVCBJUyBKVVNUIERVTU1ZIERBVEEgSU4gSEVSRVxuLy8gcG9zc2libGUgZml4ZXMgaW4gaGVyZT8hXG5cbi8vIGJhc2ljYWxseSBub2RlIGpzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcblxuXG5cblxuICAgICAgICBjb25zdCBzdHJpcGUgPSByZXF1aXJlKCdzdHJpcGUnKShwcm9jZXNzLmVudi5TVFJJUEVfU0VDUkVUX0tFWSk7XG5cbiAgICAvLyBHZXQgdGhlIHVzZXIgbG9nZ2VkIGluIGNyZWRlbnRpYWxzIGluIGhlcmVcbiAgICBjb25zdCBzZXNzaW9uID0gYXV0aC51c2VyO1xuICAgIGNvbnNvbGUubG9nKFwiVGhpcyBpc1wiLCBzZXNzaW9uKTtcbiAgICBpZighc2Vzc2lvbikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvcHM6IHt9XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vd2lsbCBnZXQgYWxsIHRoZSBvcmRycnMgZm9yIHRoZSB1c2VyXG4gICAgLy8gZmlyZWJhc2UgZGJcbiAgICBjb25zdCBzdHJpcGVPcmRlcnMgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyhhd2FpdCBzZXNzaW9uLnVzZXIuZW1haWwpLmNvbGxlY3Rpb24oJ29yZGVycycpLm9yZGVyQnkoJ3RpbWVzdGFtcCcsICdkZXNjJykuZ2V0KCk7XG5cbiAgICAvLyBzdHJpcGUgb3JkZXJzIGluIGhlcmVcbiAgICBjb25zdCBvcmRlcnMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgc3RyaXBlT3JkZXJzLmRvY3MubWFwKGFzeW5jIChvcmRlcikgPT4gKHtcbiAgICAgICAgICAgIGlkOiBvcmRlci5pZCxcbiAgICAgICAgICAgIGFtb3VudDogb3JkZXIuZGF0YSgpLmFtb3VudCxcbiAgICAgICAgICAgIGFtb3VudFNoaXBwaW5nOiBvcmRlci5kYXRhKCkuYW1vdW50X3NoaXBwaW5nLFxuICAgICAgICAgICAgaW1hZ2VzOiBvcmRlci5kYXRhKCkuaW1hZ2VzLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBtb21lbnQob3JkZXIuZGF0YSgpLnRpbWVzdGFtcC50b0RhdGUoKSkudW5peCgpLFxuICAgICAgICAgICAgaXRlbXM6IChcbiAgICAgICAgICAgICAgICAvLyBnZXRzIGFsbCB0aGUgaXRlbXMgaW4gaGVyZVxuICAgICAgICAgICAgICAgIC8vIHJldHVycyBhbGwgdGhlIGluZm9ybWF0aW9uLCBhbmQgdGhlIGlzIG1hcHBlZCB0byB0aGUgZGF0YSBhbmQgaXMgaW4gaHRlIGl0ZW1zXG4gICAgICAgICAgICAgICAgYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmxpc3RMaW5lSXRlbXMob3JkZXIuaWQsIHtcbiAgICAgICAgICAgICAgICAgICAgbGltaXQ6IDEwMFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLmRhdGEsXG4gICAgICAgIH0pKVxuICAgICk7XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBvcmRlcnMsXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbi8vIGltcG9ydCBkYiwge2F1dGh9IGZyb20gXCIuLi8uLi9maXJlYmFzZVwiO1xuLy8gaW1wb3J0IHt1c2VBdXRoU3RhdGV9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCI7XG4vLyBpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XG4vLyBpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnQvbW9tZW50XCI7XG4vLyBpbXBvcnQge2xvYWRTdHJpcGV9IGZyb20gXCJAc3RyaXBlL3N0cmlwZS1qc1wiO1xuLy8gLy8gY29uc3Qgc3RyaXBlUHJvbWlzZSA9IGxvYWRTdHJpcGUocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVkpO1xuLy9cbi8vIGNvbnN0IE9yZGVycyA9IGFzeW5jICgpID0+IHtcbi8vXG4vLyAgICAgY29uc3QgW3VzZXJdID0gdXNlQXV0aFN0YXRlKGF1dGgpO1xuLy8gICAgIC8vIGNvbnN0IHVzZXJEaXNwbGF5TmFtZSA9IGAke3VzZXI/LmRpc3BsYXlOYW1lID8gdXNlcj8uZGlzcGxheU5hbWUgOiBcIllvdXJcIn1gO1xuLy8gICAgIC8vIGNvbnN0IHN0cmlwZU9yZGVycyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHVzZXIuZW1haWwpLmNvbGxlY3Rpb24oJ29yZGVycycpLm9yZGVyQnkoJ3RpbWVzdGFtcCcsICdkZXNjJykuZ2V0KCk7XG4vL1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKHN0cmlwZU9yZGVycyk7XG4vL1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxkaXY+XG4vLyAgICAgICAgICAgICA8SGVhZGVyLz5cbi8vICAgICAgICAgICAgIHsvKjxtYWluIGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbi1sZyBteC1hdXRvIHAtMTBcIj4qL31cbi8vICAgICAgICAgICAgIHsvKiAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgYm9yZGVyLWIgbWItMiBwYi0xIGJvcmRlci15ZWxsb3ctNDAwXCI+e2Ake3VzZXJEaXNwbGF5TmFtZX0gJHtcIiBcIn0gT3JkZXJzIPCfkYcgYH0gPC9oMT4qL31cbi8vICAgICAgICAgICAgIHsvKiAgICB7dXNlciA/ICgqL31cbi8vICAgICAgICAgICAgIHsvKiAgICAgICAgPGgyPnggT3JkZXJzPC9oMj4qL31cbi8vICAgICAgICAgICAgIHsvKiAgICApIDogKCovfVxuLy8gICAgICAgICAgICAgey8qICAgICAgICA8aDI+UGxlYXNlIHNpZ24gaW4gdG8gc2VlIHlvdXIgb3JkZXJzPC9oMj4qL31cbi8vICAgICAgICAgICAgIHsvKiAgICApfSovfVxuLy9cbi8vICAgICAgICAgICAgIHsvKiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgc3BhY3kteS00XCI+Ki99XG4vL1xuLy8gICAgICAgICAgICAgey8qICAgIDwvZGl2PiovfVxuLy8gICAgICAgICAgICAgey8qPC9tYWluPiovfVxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICApO1xuLy8gfTtcbi8vXG4vLyBleHBvcnQgZGVmYXVsdCBPcmRlcnM7XG4vL1xuLy8gLy8gYmFzaWNhbGx5IG5vZGUganNcbi8vIC8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuLy9cbi8vXG4vL1xuLy9cbi8vICAgICAvLyAgICAgY29uc3Qgc3RyaXBlID0gcmVxdWlyZSgnc3RyaXBlJykocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVkpO1xuLy8gICAgIC8vXG4vLyAgICAgLy8gLy8gR2V0IHRoZSB1c2VyIGxvZ2dlZCBpbiBjcmVkZW50aWFscyBpbiBoZXJlXG4vLyAgICAgLy8gY29uc3Qgc2Vzc2lvbiA9IGF1dGgudXNlcjtcbi8vICAgICAvLyBjb25zb2xlLmxvZyhcIlRoaXMgaXNcIiwgc2Vzc2lvbik7XG4vLyAgICAgLy8gaWYoIXNlc3Npb24pIHtcbi8vICAgICAvLyAgICAgcmV0dXJuIHtcbi8vICAgICAvLyAgICAgICAgIHByb3BzOiB7fVxuLy8gICAgIC8vICAgICB9O1xuLy8gICAgIC8vIH1cbi8vICAgICAvLyAvL3dpbGwgZ2V0IGFsbCB0aGUgb3JkcnJzIGZvciB0aGUgdXNlclxuLy8gICAgIC8vIC8vIGZpcmViYXNlIGRiXG4vLyAgICAgLy8gY29uc3Qgc3RyaXBlT3JkZXJzID0gYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcnMnKS5kb2MoYXdhaXQgc2Vzc2lvbi51c2VyLmVtYWlsKS5jb2xsZWN0aW9uKCdvcmRlcnMnKS5vcmRlckJ5KCd0aW1lc3RhbXAnLCAnZGVzYycpLmdldCgpO1xuLy8gICAgIC8vXG4vLyAgICAgLy8gLy8gc3RyaXBlIG9yZGVycyBpbiBoZXJlXG4vLyAgICAgLy8gY29uc3Qgb3JkZXJzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4vLyAgICAgLy8gICAgIHN0cmlwZU9yZGVycy5kb2NzLm1hcChhc3luYyAob3JkZXIpID0+ICh7XG4vLyAgICAgLy8gICAgICAgICBpZDogb3JkZXIuaWQsXG4vLyAgICAgLy8gICAgICAgICBhbW91bnQ6IG9yZGVyLmRhdGEoKS5hbW91bnQsXG4vLyAgICAgLy8gICAgICAgICBhbW91bnRTaGlwcGluZzogb3JkZXIuZGF0YSgpLmFtb3VudF9zaGlwcGluZyxcbi8vICAgICAvLyAgICAgICAgIGltYWdlczogb3JkZXIuZGF0YSgpLmltYWdlcyxcbi8vICAgICAvLyAgICAgICAgIHRpbWVzdGFtcDogbW9tZW50KG9yZGVyLmRhdGEoKS50aW1lc3RhbXAudG9EYXRlKCkpLnVuaXgoKSxcbi8vICAgICAvLyAgICAgICAgIGl0ZW1zOiAoXG4vLyAgICAgLy8gICAgICAgICAgICAgLy8gZ2V0cyBhbGwgdGhlIGl0ZW1zIGluIGhlcmVcbi8vICAgICAvLyAgICAgICAgICAgICAvLyByZXR1cnMgYWxsIHRoZSBpbmZvcm1hdGlvbiwgYW5kIHRoZSBpcyBtYXBwZWQgdG8gdGhlIGRhdGEgYW5kIGlzIGluIGh0ZSBpdGVtc1xuLy8gICAgIC8vICAgICAgICAgICAgIGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5saXN0TGluZUl0ZW1zKG9yZGVyLmlkLCB7XG4vLyAgICAgLy8gICAgICAgICAgICAgICAgIGxpbWl0OiAxMDBcbi8vICAgICAvLyAgICAgICAgICAgICB9KVxuLy8gICAgIC8vICAgICAgICAgKS5kYXRhLFxuLy8gICAgIC8vICAgICB9KSlcbi8vICAgICAvLyApO1xuLy9cbi8vICAgICAvLyBsZXQgdXNlciA9IGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKGFzeW5jIHVzZXIgPT4gYWxlcnQodXNlcik7XG4vLyAgICAgLy9cbi8vICAgICAvLyByZXR1cm4ge1xuLy8gICAgIC8vICAgICBwcm9wczoge1xuLy8gICAgIC8vICAgICAgICAgLy8gb3JkZXJzLFxuLy8gICAgIC8vICAgICB9XG4vLyAgICAgLy8gfVxuLy8gLy8gfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/orders.js\n");

/***/ })

});