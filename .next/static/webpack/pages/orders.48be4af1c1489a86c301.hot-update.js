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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_rookasrudzianskas_Documents_React_AMAZON_2_AMAZON_3_AMAZON_copy_2_2_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase */ \"./firebase.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stripe/stripe-js */ \"./node_modules/@stripe/stripe-js/dist/stripe.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/process/browser.js\");\n\n\n\nvar _jsxFileName = \"/Users/rookasrudzianskas/Documents/React/AMAZON @2/AMAZON @3/AMAZON copy 2 2/src/pages/orders.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar stripePromise = (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_6__.loadStripe)(process.env.STRIPE_SECRET_KEY);\n\nvar Orders = function Orders(_ref) {\n  _s();\n\n  var orders = _ref.orders;\n\n  var _useAuthState = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth),\n      _useAuthState2 = (0,_Users_rookasrudzianskas_Documents_React_AMAZON_2_AMAZON_3_AMAZON_copy_2_2_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useAuthState, 1),\n      user = _useAuthState2[0];\n\n  var userDisplayName = \"\".concat(user !== null && user !== void 0 && user.displayName ? user === null || user === void 0 ? void 0 : user.displayName : \"Your\");\n  var stripeOrders = _firebase__WEBPACK_IMPORTED_MODULE_4__.default.collection('users').doc(user.email).collection('orders').orderBy('timestamp', 'desc').get();\n  console.log(stripeOrders);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: \"max-w-screen-lg mx-auto p-10\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"text-3xl border-b mb-2 pb-1 border-yellow-400\",\n        children: [\"\".concat(userDisplayName, \" \", \" \", \" Orders \\uD83D\\uDC47 \"), \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }, _this), user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: \"x Orders\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 21\n      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: \"Please sign in to see your orders\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 21\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-5 spacy-y-4\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Orders, \"hP/7NvzUIXfxIpRVjMlmHSnysKo=\", false, function () {\n  return [react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState];\n});\n\n_c = Orders;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Orders); // import React from 'react';\n// import Header from \"../components/Header\";\n// import db, {auth} from \"../../firebase\";\n// import {useAuthState} from \"react-firebase-hooks/auth\";\n// import firebase from \"firebase\";\n// import moment from \"moment/moment\";\n// import {loadStripe} from \"@stripe/stripe-js\";\n// // const stripePromise = loadStripe(process.env.STRIPE_SECRET_KEY);\n//\n// const Orders = async () => {\n//\n//     const [user] = useAuthState(auth);\n//     // const userDisplayName = `${user?.displayName ? user?.displayName : \"Your\"}`;\n//     // const stripeOrders = await db.collection('users').doc(user.email).collection('orders').orderBy('timestamp', 'desc').get();\n//\n//     // console.log(stripeOrders);\n//\n//     return (\n//         <div>\n//             <Header/>\n//             {/*<main className=\"max-w-screen-lg mx-auto p-10\">*/}\n//             {/*    <h1 className=\"text-3xl border-b mb-2 pb-1 border-yellow-400\">{`${userDisplayName} ${\" \"} Orders 👇 `} </h1>*/}\n//             {/*    {user ? (*/}\n//             {/*        <h2>x Orders</h2>*/}\n//             {/*    ) : (*/}\n//             {/*        <h2>Please sign in to see your orders</h2>*/}\n//             {/*    )}*/}\n//\n//             {/*    <div className=\"mt-5 spacy-y-4\">*/}\n//\n//             {/*    </div>*/}\n//             {/*</main>*/}\n//         </div>\n//     );\n// };\n//\n// export default Orders;\n//\n// // basically node js\n// // export async function getServerSideProps(context) {\n//\n//\n//\n//\n//     //     const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);\n//     //\n//     // // Get the user logged in credentials in here\n//     // const session = auth.user;\n//     // console.log(\"This is\", session);\n//     // if(!session) {\n//     //     return {\n//     //         props: {}\n//     //     };\n//     // }\n//     // //will get all the ordrrs for the user\n//     // // firebase db\n//     // const stripeOrders = await db.collection('users').doc(await session.user.email).collection('orders').orderBy('timestamp', 'desc').get();\n//     //\n//     // // stripe orders in here\n//     // const orders = await Promise.all(\n//     //     stripeOrders.docs.map(async (order) => ({\n//     //         id: order.id,\n//     //         amount: order.data().amount,\n//     //         amountShipping: order.data().amount_shipping,\n//     //         images: order.data().images,\n//     //         timestamp: moment(order.data().timestamp.toDate()).unix(),\n//     //         items: (\n//     //             // gets all the items in here\n//     //             // returs all the information, and the is mapped to the data and is in hte items\n//     //             await stripe.checkout.sessions.listLineItems(order.id, {\n//     //                 limit: 100\n//     //             })\n//     //         ).data,\n//     //     }))\n//     // );\n//\n//     // let user = auth.onAuthStateChanged(async user => alert(user);\n//     //\n//     // return {\n//     //     props: {\n//     //         // orders,\n//     //     }\n//     // }\n// // }\n\nvar _c;\n\n$RefreshReg$(_c, \"Orders\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL29yZGVycy5qcz9hZmZkIl0sIm5hbWVzIjpbInN0cmlwZVByb21pc2UiLCJsb2FkU3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9TRUNSRVRfS0VZIiwiT3JkZXJzIiwib3JkZXJzIiwidXNlQXV0aFN0YXRlIiwiYXV0aCIsInVzZXIiLCJ1c2VyRGlzcGxheU5hbWUiLCJkaXNwbGF5TmFtZSIsInN0cmlwZU9yZGVycyIsImRiIiwiZG9jIiwiZW1haWwiLCJjb2xsZWN0aW9uIiwib3JkZXJCeSIsImdldCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsYUFBYSxHQUFHQyw2REFBVSxDQUFDQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsaUJBQWIsQ0FBaEM7O0FBRUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBYztBQUFBOztBQUFBLE1BQVpDLE1BQVksUUFBWkEsTUFBWTs7QUFBQSxzQkFFVkMsdUVBQVksQ0FBQ0MsMkNBQUQsQ0FGRjtBQUFBO0FBQUEsTUFFbEJDLElBRmtCOztBQUd6QixNQUFNQyxlQUFlLGFBQU1ELElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosSUFBQUEsSUFBSSxDQUFFRSxXQUFOLEdBQW9CRixJQUFwQixhQUFvQkEsSUFBcEIsdUJBQW9CQSxJQUFJLENBQUVFLFdBQTFCLEdBQXdDLE1BQTlDLENBQXJCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHQyx5REFBQSxDQUFjLE9BQWQsRUFBdUJDLEdBQXZCLENBQTJCTCxJQUFJLENBQUNNLEtBQWhDLEVBQXVDQyxVQUF2QyxDQUFrRCxRQUFsRCxFQUE0REMsT0FBNUQsQ0FBb0UsV0FBcEUsRUFBaUYsTUFBakYsRUFBeUZDLEdBQXpGLEVBQXJCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUixZQUFaO0FBRUEsc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFNLGVBQVMsRUFBQyw4QkFBaEI7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMsK0NBQWQ7QUFBQSw2QkFBa0VGLGVBQWxFLE9BQXFGLEdBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBRUtELElBQUksZ0JBQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQyxnQkFHRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxSLGVBUUk7QUFBSyxpQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBaUJILENBeEJEOztHQUFNSixNO1VBRWFFLG1FOzs7S0FGYkYsTTtBQTBCTiwrREFBZUEsTUFBZixFLENBMENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9wYWdlcy9vcmRlcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBkYiwge2F1dGh9IGZyb20gXCIuLi8uLi9maXJlYmFzZVwiO1xuaW1wb3J0IHt1c2VBdXRoU3RhdGV9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCI7XG5pbXBvcnQge2xvYWRTdHJpcGV9IGZyb20gXCJAc3RyaXBlL3N0cmlwZS1qc1wiO1xuY29uc3Qgc3RyaXBlUHJvbWlzZSA9IGxvYWRTdHJpcGUocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVkpO1xuXG5jb25zdCBPcmRlcnMgPSAoe29yZGVyc30pID0+IHtcblxuICAgIGNvbnN0IFt1c2VyXSA9IHVzZUF1dGhTdGF0ZShhdXRoKTtcbiAgICBjb25zdCB1c2VyRGlzcGxheU5hbWUgPSBgJHt1c2VyPy5kaXNwbGF5TmFtZSA/IHVzZXI/LmRpc3BsYXlOYW1lIDogXCJZb3VyXCJ9YDtcbiAgICBjb25zdCBzdHJpcGVPcmRlcnMgPSBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh1c2VyLmVtYWlsKS5jb2xsZWN0aW9uKCdvcmRlcnMnKS5vcmRlckJ5KCd0aW1lc3RhbXAnLCAnZGVzYycpLmdldCgpO1xuICAgIGNvbnNvbGUubG9nKHN0cmlwZU9yZGVycyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWRlci8+XG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4tbGcgbXgtYXV0byBwLTEwXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGJvcmRlci1iIG1iLTIgcGItMSBib3JkZXIteWVsbG93LTQwMFwiPntgJHt1c2VyRGlzcGxheU5hbWV9ICR7XCIgXCJ9IE9yZGVycyDwn5GHIGB9IDwvaDE+XG4gICAgICAgICAgICAgICAge3VzZXIgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxoMj54IE9yZGVyczwvaDI+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGgyPlBsZWFzZSBzaWduIGluIHRvIHNlZSB5b3VyIG9yZGVyczwvaDI+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSBzcGFjeS15LTRcIj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT3JkZXJzO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuLy8gaW1wb3J0IGRiLCB7YXV0aH0gZnJvbSBcIi4uLy4uL2ZpcmViYXNlXCI7XG4vLyBpbXBvcnQge3VzZUF1dGhTdGF0ZX0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIjtcbi8vIGltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcbi8vIGltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudC9tb21lbnRcIjtcbi8vIGltcG9ydCB7bG9hZFN0cmlwZX0gZnJvbSBcIkBzdHJpcGUvc3RyaXBlLWpzXCI7XG4vLyAvLyBjb25zdCBzdHJpcGVQcm9taXNlID0gbG9hZFN0cmlwZShwcm9jZXNzLmVudi5TVFJJUEVfU0VDUkVUX0tFWSk7XG4vL1xuLy8gY29uc3QgT3JkZXJzID0gYXN5bmMgKCkgPT4ge1xuLy9cbi8vICAgICBjb25zdCBbdXNlcl0gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XG4vLyAgICAgLy8gY29uc3QgdXNlckRpc3BsYXlOYW1lID0gYCR7dXNlcj8uZGlzcGxheU5hbWUgPyB1c2VyPy5kaXNwbGF5TmFtZSA6IFwiWW91clwifWA7XG4vLyAgICAgLy8gY29uc3Qgc3RyaXBlT3JkZXJzID0gYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModXNlci5lbWFpbCkuY29sbGVjdGlvbignb3JkZXJzJykub3JkZXJCeSgndGltZXN0YW1wJywgJ2Rlc2MnKS5nZXQoKTtcbi8vXG4vLyAgICAgLy8gY29uc29sZS5sb2coc3RyaXBlT3JkZXJzKTtcbi8vXG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPGRpdj5cbi8vICAgICAgICAgICAgIDxIZWFkZXIvPlxuLy8gICAgICAgICAgICAgey8qPG1haW4gY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLWxnIG14LWF1dG8gcC0xMFwiPiovfVxuLy8gICAgICAgICAgICAgey8qICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBib3JkZXItYiBtYi0yIHBiLTEgYm9yZGVyLXllbGxvdy00MDBcIj57YCR7dXNlckRpc3BsYXlOYW1lfSAke1wiIFwifSBPcmRlcnMg8J+RhyBgfSA8L2gxPiovfVxuLy8gICAgICAgICAgICAgey8qICAgIHt1c2VyID8gKCovfVxuLy8gICAgICAgICAgICAgey8qICAgICAgICA8aDI+eCBPcmRlcnM8L2gyPiovfVxuLy8gICAgICAgICAgICAgey8qICAgICkgOiAoKi99XG4vLyAgICAgICAgICAgICB7LyogICAgICAgIDxoMj5QbGVhc2Ugc2lnbiBpbiB0byBzZWUgeW91ciBvcmRlcnM8L2gyPiovfVxuLy8gICAgICAgICAgICAgey8qICAgICl9Ki99XG4vL1xuLy8gICAgICAgICAgICAgey8qICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSBzcGFjeS15LTRcIj4qL31cbi8vXG4vLyAgICAgICAgICAgICB7LyogICAgPC9kaXY+Ki99XG4vLyAgICAgICAgICAgICB7Lyo8L21haW4+Ki99XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICk7XG4vLyB9O1xuLy9cbi8vIGV4cG9ydCBkZWZhdWx0IE9yZGVycztcbi8vXG4vLyAvLyBiYXNpY2FsbHkgbm9kZSBqc1xuLy8gLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4vL1xuLy9cbi8vXG4vL1xuLy8gICAgIC8vICAgICBjb25zdCBzdHJpcGUgPSByZXF1aXJlKCdzdHJpcGUnKShwcm9jZXNzLmVudi5TVFJJUEVfU0VDUkVUX0tFWSk7XG4vLyAgICAgLy9cbi8vICAgICAvLyAvLyBHZXQgdGhlIHVzZXIgbG9nZ2VkIGluIGNyZWRlbnRpYWxzIGluIGhlcmVcbi8vICAgICAvLyBjb25zdCBzZXNzaW9uID0gYXV0aC51c2VyO1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKFwiVGhpcyBpc1wiLCBzZXNzaW9uKTtcbi8vICAgICAvLyBpZighc2Vzc2lvbikge1xuLy8gICAgIC8vICAgICByZXR1cm4ge1xuLy8gICAgIC8vICAgICAgICAgcHJvcHM6IHt9XG4vLyAgICAgLy8gICAgIH07XG4vLyAgICAgLy8gfVxuLy8gICAgIC8vIC8vd2lsbCBnZXQgYWxsIHRoZSBvcmRycnMgZm9yIHRoZSB1c2VyXG4vLyAgICAgLy8gLy8gZmlyZWJhc2UgZGJcbi8vICAgICAvLyBjb25zdCBzdHJpcGVPcmRlcnMgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyhhd2FpdCBzZXNzaW9uLnVzZXIuZW1haWwpLmNvbGxlY3Rpb24oJ29yZGVycycpLm9yZGVyQnkoJ3RpbWVzdGFtcCcsICdkZXNjJykuZ2V0KCk7XG4vLyAgICAgLy9cbi8vICAgICAvLyAvLyBzdHJpcGUgb3JkZXJzIGluIGhlcmVcbi8vICAgICAvLyBjb25zdCBvcmRlcnMgPSBhd2FpdCBQcm9taXNlLmFsbChcbi8vICAgICAvLyAgICAgc3RyaXBlT3JkZXJzLmRvY3MubWFwKGFzeW5jIChvcmRlcikgPT4gKHtcbi8vICAgICAvLyAgICAgICAgIGlkOiBvcmRlci5pZCxcbi8vICAgICAvLyAgICAgICAgIGFtb3VudDogb3JkZXIuZGF0YSgpLmFtb3VudCxcbi8vICAgICAvLyAgICAgICAgIGFtb3VudFNoaXBwaW5nOiBvcmRlci5kYXRhKCkuYW1vdW50X3NoaXBwaW5nLFxuLy8gICAgIC8vICAgICAgICAgaW1hZ2VzOiBvcmRlci5kYXRhKCkuaW1hZ2VzLFxuLy8gICAgIC8vICAgICAgICAgdGltZXN0YW1wOiBtb21lbnQob3JkZXIuZGF0YSgpLnRpbWVzdGFtcC50b0RhdGUoKSkudW5peCgpLFxuLy8gICAgIC8vICAgICAgICAgaXRlbXM6IChcbi8vICAgICAvLyAgICAgICAgICAgICAvLyBnZXRzIGFsbCB0aGUgaXRlbXMgaW4gaGVyZVxuLy8gICAgIC8vICAgICAgICAgICAgIC8vIHJldHVycyBhbGwgdGhlIGluZm9ybWF0aW9uLCBhbmQgdGhlIGlzIG1hcHBlZCB0byB0aGUgZGF0YSBhbmQgaXMgaW4gaHRlIGl0ZW1zXG4vLyAgICAgLy8gICAgICAgICAgICAgYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmxpc3RMaW5lSXRlbXMob3JkZXIuaWQsIHtcbi8vICAgICAvLyAgICAgICAgICAgICAgICAgbGltaXQ6IDEwMFxuLy8gICAgIC8vICAgICAgICAgICAgIH0pXG4vLyAgICAgLy8gICAgICAgICApLmRhdGEsXG4vLyAgICAgLy8gICAgIH0pKVxuLy8gICAgIC8vICk7XG4vL1xuLy8gICAgIC8vIGxldCB1c2VyID0gYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoYXN5bmMgdXNlciA9PiBhbGVydCh1c2VyKTtcbi8vICAgICAvL1xuLy8gICAgIC8vIHJldHVybiB7XG4vLyAgICAgLy8gICAgIHByb3BzOiB7XG4vLyAgICAgLy8gICAgICAgICAvLyBvcmRlcnMsXG4vLyAgICAgLy8gICAgIH1cbi8vICAgICAvLyB9XG4vLyAvLyB9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/orders.js\n");

/***/ }),

/***/ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@stripe/stripe-js/dist/stripe.esm.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadStripe\": function() { return /* binding */ loadStripe; }\n/* harmony export */ });\nvar V3_URL = 'https://js.stripe.com/v3';\nvar V3_URL_REGEX = /^https:\\/\\/js\\.stripe\\.com\\/v3\\/?(\\?.*)?$/;\nvar EXISTING_SCRIPT_MESSAGE = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used';\nvar findScript = function findScript() {\n  var scripts = document.querySelectorAll(\"script[src^=\\\"\".concat(V3_URL, \"\\\"]\"));\n\n  for (var i = 0; i < scripts.length; i++) {\n    var script = scripts[i];\n\n    if (!V3_URL_REGEX.test(script.src)) {\n      continue;\n    }\n\n    return script;\n  }\n\n  return null;\n};\n\nvar injectScript = function injectScript(params) {\n  var queryString = params && !params.advancedFraudSignals ? '?advancedFraudSignals=false' : '';\n  var script = document.createElement('script');\n  script.src = \"\".concat(V3_URL).concat(queryString);\n  var headOrBody = document.head || document.body;\n\n  if (!headOrBody) {\n    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');\n  }\n\n  headOrBody.appendChild(script);\n  return script;\n};\n\nvar registerWrapper = function registerWrapper(stripe, startTime) {\n  if (!stripe || !stripe._registerWrapper) {\n    return;\n  }\n\n  stripe._registerWrapper({\n    name: 'stripe-js',\n    version: \"1.15.0\",\n    startTime: startTime\n  });\n};\n\nvar stripePromise = null;\nvar loadScript = function loadScript(params) {\n  // Ensure that we only attempt to load Stripe.js at most once\n  if (stripePromise !== null) {\n    return stripePromise;\n  }\n\n  stripePromise = new Promise(function (resolve, reject) {\n    if (typeof window === 'undefined') {\n      // Resolve to null when imported server side. This makes the module\n      // safe to import in an isomorphic code base.\n      resolve(null);\n      return;\n    }\n\n    if (window.Stripe && params) {\n      console.warn(EXISTING_SCRIPT_MESSAGE);\n    }\n\n    if (window.Stripe) {\n      resolve(window.Stripe);\n      return;\n    }\n\n    try {\n      var script = findScript();\n\n      if (script && params) {\n        console.warn(EXISTING_SCRIPT_MESSAGE);\n      } else if (!script) {\n        script = injectScript(params);\n      }\n\n      script.addEventListener('load', function () {\n        if (window.Stripe) {\n          resolve(window.Stripe);\n        } else {\n          reject(new Error('Stripe.js not available'));\n        }\n      });\n      script.addEventListener('error', function () {\n        reject(new Error('Failed to load Stripe.js'));\n      });\n    } catch (error) {\n      reject(error);\n      return;\n    }\n  });\n  return stripePromise;\n};\nvar initStripe = function initStripe(maybeStripe, args, startTime) {\n  if (maybeStripe === null) {\n    return null;\n  }\n\n  var stripe = maybeStripe.apply(undefined, args);\n  registerWrapper(stripe, startTime);\n  return stripe;\n};\n\n// own script injection.\n\nvar stripePromise$1 = Promise.resolve().then(function () {\n  return loadScript(null);\n});\nvar loadCalled = false;\nstripePromise$1[\"catch\"](function (err) {\n  if (!loadCalled) {\n    console.warn(err);\n  }\n});\nvar loadStripe = function loadStripe() {\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  loadCalled = true;\n  var startTime = Date.now();\n  return stripePromise$1.then(function (maybeStripe) {\n    return initStripe(maybeStripe, args, startTime);\n  });\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3RyaXBlLWpzL2Rpc3Qvc3RyaXBlLmVzbS5qcz9iZjhhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0EsdUlBQXVJO0FBQ3ZJO0FBQ0E7O0FBRUEsaUJBQWlCLG9CQUFvQjtBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EscUVBQXFFLGFBQWE7QUFDbEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFc0IiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zdHJpcGUtanMvZGlzdC9zdHJpcGUuZXNtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFYzX1VSTCA9ICdodHRwczovL2pzLnN0cmlwZS5jb20vdjMnO1xudmFyIFYzX1VSTF9SRUdFWCA9IC9eaHR0cHM6XFwvXFwvanNcXC5zdHJpcGVcXC5jb21cXC92M1xcLz8oXFw/LiopPyQvO1xudmFyIEVYSVNUSU5HX1NDUklQVF9NRVNTQUdFID0gJ2xvYWRTdHJpcGUuc2V0TG9hZFBhcmFtZXRlcnMgd2FzIGNhbGxlZCBidXQgYW4gZXhpc3RpbmcgU3RyaXBlLmpzIHNjcmlwdCBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgZG9jdW1lbnQ7IGV4aXN0aW5nIHNjcmlwdCBwYXJhbWV0ZXJzIHdpbGwgYmUgdXNlZCc7XG52YXIgZmluZFNjcmlwdCA9IGZ1bmN0aW9uIGZpbmRTY3JpcHQoKSB7XG4gIHZhciBzY3JpcHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNjcmlwdFtzcmNePVxcXCJcIi5jb25jYXQoVjNfVVJMLCBcIlxcXCJdXCIpKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc2NyaXB0ID0gc2NyaXB0c1tpXTtcblxuICAgIGlmICghVjNfVVJMX1JFR0VYLnRlc3Qoc2NyaXB0LnNyYykpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzY3JpcHQ7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbnZhciBpbmplY3RTY3JpcHQgPSBmdW5jdGlvbiBpbmplY3RTY3JpcHQocGFyYW1zKSB7XG4gIHZhciBxdWVyeVN0cmluZyA9IHBhcmFtcyAmJiAhcGFyYW1zLmFkdmFuY2VkRnJhdWRTaWduYWxzID8gJz9hZHZhbmNlZEZyYXVkU2lnbmFscz1mYWxzZScgOiAnJztcbiAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICBzY3JpcHQuc3JjID0gXCJcIi5jb25jYXQoVjNfVVJMKS5jb25jYXQocXVlcnlTdHJpbmcpO1xuICB2YXIgaGVhZE9yQm9keSA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuYm9keTtcblxuICBpZiAoIWhlYWRPckJvZHkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGRvY3VtZW50LmJvZHkgbm90IHRvIGJlIG51bGwuIFN0cmlwZS5qcyByZXF1aXJlcyBhIDxib2R5PiBlbGVtZW50LicpO1xuICB9XG5cbiAgaGVhZE9yQm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICByZXR1cm4gc2NyaXB0O1xufTtcblxudmFyIHJlZ2lzdGVyV3JhcHBlciA9IGZ1bmN0aW9uIHJlZ2lzdGVyV3JhcHBlcihzdHJpcGUsIHN0YXJ0VGltZSkge1xuICBpZiAoIXN0cmlwZSB8fCAhc3RyaXBlLl9yZWdpc3RlcldyYXBwZXIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzdHJpcGUuX3JlZ2lzdGVyV3JhcHBlcih7XG4gICAgbmFtZTogJ3N0cmlwZS1qcycsXG4gICAgdmVyc2lvbjogXCIxLjE1LjBcIixcbiAgICBzdGFydFRpbWU6IHN0YXJ0VGltZVxuICB9KTtcbn07XG5cbnZhciBzdHJpcGVQcm9taXNlID0gbnVsbDtcbnZhciBsb2FkU2NyaXB0ID0gZnVuY3Rpb24gbG9hZFNjcmlwdChwYXJhbXMpIHtcbiAgLy8gRW5zdXJlIHRoYXQgd2Ugb25seSBhdHRlbXB0IHRvIGxvYWQgU3RyaXBlLmpzIGF0IG1vc3Qgb25jZVxuICBpZiAoc3RyaXBlUHJvbWlzZSAhPT0gbnVsbCkge1xuICAgIHJldHVybiBzdHJpcGVQcm9taXNlO1xuICB9XG5cbiAgc3RyaXBlUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFJlc29sdmUgdG8gbnVsbCB3aGVuIGltcG9ydGVkIHNlcnZlciBzaWRlLiBUaGlzIG1ha2VzIHRoZSBtb2R1bGVcbiAgICAgIC8vIHNhZmUgdG8gaW1wb3J0IGluIGFuIGlzb21vcnBoaWMgY29kZSBiYXNlLlxuICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAod2luZG93LlN0cmlwZSAmJiBwYXJhbXMpIHtcbiAgICAgIGNvbnNvbGUud2FybihFWElTVElOR19TQ1JJUFRfTUVTU0FHRSk7XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5TdHJpcGUpIHtcbiAgICAgIHJlc29sdmUod2luZG93LlN0cmlwZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHZhciBzY3JpcHQgPSBmaW5kU2NyaXB0KCk7XG5cbiAgICAgIGlmIChzY3JpcHQgJiYgcGFyYW1zKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihFWElTVElOR19TQ1JJUFRfTUVTU0FHRSk7XG4gICAgICB9IGVsc2UgaWYgKCFzY3JpcHQpIHtcbiAgICAgICAgc2NyaXB0ID0gaW5qZWN0U2NyaXB0KHBhcmFtcyk7XG4gICAgICB9XG5cbiAgICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAod2luZG93LlN0cmlwZSkge1xuICAgICAgICAgIHJlc29sdmUod2luZG93LlN0cmlwZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignU3RyaXBlLmpzIG5vdCBhdmFpbGFibGUnKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBTdHJpcGUuanMnKSk7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc3RyaXBlUHJvbWlzZTtcbn07XG52YXIgaW5pdFN0cmlwZSA9IGZ1bmN0aW9uIGluaXRTdHJpcGUobWF5YmVTdHJpcGUsIGFyZ3MsIHN0YXJ0VGltZSkge1xuICBpZiAobWF5YmVTdHJpcGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBzdHJpcGUgPSBtYXliZVN0cmlwZS5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICByZWdpc3RlcldyYXBwZXIoc3RyaXBlLCBzdGFydFRpbWUpO1xuICByZXR1cm4gc3RyaXBlO1xufTtcblxuLy8gb3duIHNjcmlwdCBpbmplY3Rpb24uXG5cbnZhciBzdHJpcGVQcm9taXNlJDEgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGxvYWRTY3JpcHQobnVsbCk7XG59KTtcbnZhciBsb2FkQ2FsbGVkID0gZmFsc2U7XG5zdHJpcGVQcm9taXNlJDFbXCJjYXRjaFwiXShmdW5jdGlvbiAoZXJyKSB7XG4gIGlmICghbG9hZENhbGxlZCkge1xuICAgIGNvbnNvbGUud2FybihlcnIpO1xuICB9XG59KTtcbnZhciBsb2FkU3RyaXBlID0gZnVuY3Rpb24gbG9hZFN0cmlwZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGxvYWRDYWxsZWQgPSB0cnVlO1xuICB2YXIgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgcmV0dXJuIHN0cmlwZVByb21pc2UkMS50aGVuKGZ1bmN0aW9uIChtYXliZVN0cmlwZSkge1xuICAgIHJldHVybiBpbml0U3RyaXBlKG1heWJlU3RyaXBlLCBhcmdzLCBzdGFydFRpbWUpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGxvYWRTdHJpcGUgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@stripe/stripe-js/dist/stripe.esm.js\n");

/***/ })

});