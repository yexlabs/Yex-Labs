"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/launching",{

/***/ "./contracts/addresses.js":
/*!********************************!*\
  !*** ./contracts/addresses.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FTO_FACADE_ADDRESS: function() { return /* binding */ FTO_FACADE_ADDRESS; },\n/* harmony export */   FTO_FACTORY_ADDRESS: function() { return /* binding */ FTO_FACTORY_ADDRESS; },\n/* harmony export */   ILO_ADDRESS: function() { return /* binding */ ILO_ADDRESS; },\n/* harmony export */   MUMBAI_ILO_TOKENA_ADDRESS: function() { return /* binding */ MUMBAI_ILO_TOKENA_ADDRESS; },\n/* harmony export */   MUMBAI_ILO_TOKENB_ADDRESS: function() { return /* binding */ MUMBAI_ILO_TOKENB_ADDRESS; },\n/* harmony export */   Mumbai_tokenA_address: function() { return /* binding */ Mumbai_tokenA_address; },\n/* harmony export */   Mumbai_tokenB_address: function() { return /* binding */ Mumbai_tokenB_address; },\n/* harmony export */   Mumbai_yexExample_address: function() { return /* binding */ Mumbai_yexExample_address; },\n/* harmony export */   Mumbai_yexExample_pool2_address: function() { return /* binding */ Mumbai_yexExample_pool2_address; },\n/* harmony export */   USDT_FAUCET_ADDRESS: function() { return /* binding */ USDT_FAUCET_ADDRESS; },\n/* harmony export */   buysell_address: function() { return /* binding */ buysell_address; },\n/* harmony export */   panel_adress: function() { return /* binding */ panel_adress; },\n/* harmony export */   pools_address: function() { return /* binding */ pools_address; },\n/* harmony export */   purchase_address: function() { return /* binding */ purchase_address; },\n/* harmony export */   tokenA_address: function() { return /* binding */ tokenA_address; },\n/* harmony export */   tokenB_address: function() { return /* binding */ tokenB_address; },\n/* harmony export */   tokenD_address: function() { return /* binding */ tokenD_address; },\n/* harmony export */   tokenF_address: function() { return /* binding */ tokenF_address; },\n/* harmony export */   vault_address: function() { return /* binding */ vault_address; }\n/* harmony export */ });\nconst tokenA_address = \"0xA2C09f7e519E014596a9AC99898dadc647Aecd22\";\nconst tokenB_address = \"0xC550Ab2A8ac17dE70b62BFCE9DF5a719FFe55bf8\";\nconst tokenD_address = \"0xC550Ab2A8ac17dE70b62BFCE9DF5a719FFe55bf8\" // do not have D now\n;\nconst tokenF_address = \"0x49C1dB0aEEA8a472F8BF123a770323765A4Fa619\";\nconst buysell_address = \"0xd11fF339a9C407Bb690Bd3dBA4e38157EfE9ac90\";\nconst vault_address = \"0xe7C6a9D88f68b96a9697129Ed3E5BD8F7274fAD8\";\nconst pools_address = \"0x191Da4faDc59BfAc88406e2b4CE9B87890D93FB4\";\nconst panel_adress = \"0xe95A7847fe13BB6b69cc299Ad057A4D6C28aEC46\";\nconst purchase_address = \"0xb16d3Eaa4dD2eC8684569bB0aC601E713dD7787E\";\n// Batch Swap demo\nconst Mumbai_yexExample_address = \"0x9a9F998257858ec809921116925B4ceCf884665e\";\nconst Mumbai_yexExample_pool2_address = \"0xFE01bd2965Ba1f75f43C95004D20cF4627245F88\";\nconst Mumbai_tokenA_address = \"0xFB6BaA810EF82c25CD36c6A33D3D230d86809a58\";\nconst Mumbai_tokenB_address = \"0x6354bDE6ac074520B95B95c9a36FE0cCF0F1d6fC\";\n// ILO demo\nconst ILO_ADDRESS = \"0xa5885ef4c6F8E14e9d97d7243C3481718E63Fd9E\";\nconst MUMBAI_ILO_TOKENA_ADDRESS = \"0xA5333596adf9075e0f639a64e7366243E8838808\";\nconst MUMBAI_ILO_TOKENB_ADDRESS = \"0x08142440ACBA29e82E24f80ef6267df6CA59e631\";\nconst USDT_FAUCET_ADDRESS = \"0xe33ECF950b53DCC429E6127ed1A6A5085e1918Fe\";\n// FTO demo\nconst FTO_FACTORY_ADDRESS = \"0x5AD84056574066c774C5e58BC4a0652b6c171253\";\nconst FTO_FACADE_ADDRESS = \"0xe67a15AeBD845C779BF6672442567b1C66de34C2\";\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250cmFjdHMvYWRkcmVzc2VzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxpQkFBaUIsNkNBQTRDO0FBQ25FLE1BQU1DLGlCQUFpQiw2Q0FBNEM7QUFDbkUsTUFBTUMsaUJBQWlCLDZDQUE2QyxvQkFBb0I7Q0FBckI7QUFDbkUsTUFBTUMsaUJBQWlCLDZDQUE0QztBQUNuRSxNQUFNQyxrQkFBa0IsNkNBQTRDO0FBQ3BFLE1BQU1DLGdCQUFnQiw2Q0FBNEM7QUFDbEUsTUFBTUMsZ0JBQWdCLDZDQUE0QztBQUNsRSxNQUFNQyxlQUFlLDZDQUE0QztBQUNqRSxNQUFNQyxtQkFBbUIsNkNBQTRDO0FBRTVFLGtCQUFrQjtBQUNYLE1BQU1DLDRCQUNYLDZDQUE0QztBQUN2QyxNQUFNQyxrQ0FDWCw2Q0FBNEM7QUFDdkMsTUFBTUMsd0JBQ1gsNkNBQTRDO0FBQ3ZDLE1BQU1DLHdCQUNYLDZDQUE0QztBQUU5QyxXQUFXO0FBQ0osTUFBTUMsY0FBYyw2Q0FBNEM7QUFDaEUsTUFBTUMsNEJBQ1gsNkNBQTRDO0FBQ3ZDLE1BQU1DLDRCQUNYLDZDQUE0QztBQUN2QyxNQUFNQyxzQkFBc0IsNkNBQTRDO0FBRS9FLFdBQVc7QUFDSixNQUFNQyxzQkFBc0IsNkNBQTRDO0FBQ3hFLE1BQU1DLHFCQUFxQiw2Q0FBNEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udHJhY3RzL2FkZHJlc3Nlcy5qcz9lNzJjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB0b2tlbkFfYWRkcmVzcyA9IFwiMHhBMkMwOWY3ZTUxOUUwMTQ1OTZhOUFDOTk4OThkYWRjNjQ3QWVjZDIyXCJcbmV4cG9ydCBjb25zdCB0b2tlbkJfYWRkcmVzcyA9IFwiMHhDNTUwQWIyQThhYzE3ZEU3MGI2MkJGQ0U5REY1YTcxOUZGZTU1YmY4XCJcbmV4cG9ydCBjb25zdCB0b2tlbkRfYWRkcmVzcyA9IFwiMHhDNTUwQWIyQThhYzE3ZEU3MGI2MkJGQ0U5REY1YTcxOUZGZTU1YmY4XCIgLy8gZG8gbm90IGhhdmUgRCBub3dcbmV4cG9ydCBjb25zdCB0b2tlbkZfYWRkcmVzcyA9IFwiMHg0OUMxZEIwYUVFQThhNDcyRjhCRjEyM2E3NzAzMjM3NjVBNEZhNjE5XCJcbmV4cG9ydCBjb25zdCBidXlzZWxsX2FkZHJlc3MgPSBcIjB4ZDExZkYzMzlhOUM0MDdCYjY5MEJkM2RCQTRlMzgxNTdFZkU5YWM5MFwiXG5leHBvcnQgY29uc3QgdmF1bHRfYWRkcmVzcyA9IFwiMHhlN0M2YTlEODhmNjhiOTZhOTY5NzEyOUVkM0U1QkQ4RjcyNzRmQUQ4XCJcbmV4cG9ydCBjb25zdCBwb29sc19hZGRyZXNzID0gXCIweDE5MURhNGZhRGM1OUJmQWM4ODQwNmUyYjRDRTlCODc4OTBEOTNGQjRcIlxuZXhwb3J0IGNvbnN0IHBhbmVsX2FkcmVzcyA9IFwiMHhlOTVBNzg0N2ZlMTNCQjZiNjljYzI5OUFkMDU3QTRENkMyOGFFQzQ2XCJcbmV4cG9ydCBjb25zdCBwdXJjaGFzZV9hZGRyZXNzID0gXCIweGIxNmQzRWFhNGREMmVDODY4NDU2OWJCMGFDNjAxRTcxM2RENzc4N0VcIlxuXG4vLyBCYXRjaCBTd2FwIGRlbW9cbmV4cG9ydCBjb25zdCBNdW1iYWlfeWV4RXhhbXBsZV9hZGRyZXNzID1cbiAgXCIweDlhOUY5OTgyNTc4NThlYzgwOTkyMTExNjkyNUI0Y2VDZjg4NDY2NWVcIlxuZXhwb3J0IGNvbnN0IE11bWJhaV95ZXhFeGFtcGxlX3Bvb2wyX2FkZHJlc3MgPVxuICBcIjB4RkUwMWJkMjk2NUJhMWY3NWY0M0M5NTAwNEQyMGNGNDYyNzI0NUY4OFwiXG5leHBvcnQgY29uc3QgTXVtYmFpX3Rva2VuQV9hZGRyZXNzID1cbiAgXCIweEZCNkJhQTgxMEVGODJjMjVDRDM2YzZBMzNEM0QyMzBkODY4MDlhNThcIlxuZXhwb3J0IGNvbnN0IE11bWJhaV90b2tlbkJfYWRkcmVzcyA9XG4gIFwiMHg2MzU0YkRFNmFjMDc0NTIwQjk1Qjk1YzlhMzZGRTBjQ0YwRjFkNmZDXCJcblxuLy8gSUxPIGRlbW9cbmV4cG9ydCBjb25zdCBJTE9fQUREUkVTUyA9IFwiMHhhNTg4NWVmNGM2RjhFMTRlOWQ5N2Q3MjQzQzM0ODE3MThFNjNGZDlFXCJcbmV4cG9ydCBjb25zdCBNVU1CQUlfSUxPX1RPS0VOQV9BRERSRVNTID1cbiAgXCIweEE1MzMzNTk2YWRmOTA3NWUwZjYzOWE2NGU3MzY2MjQzRTg4Mzg4MDhcIlxuZXhwb3J0IGNvbnN0IE1VTUJBSV9JTE9fVE9LRU5CX0FERFJFU1MgPVxuICBcIjB4MDgxNDI0NDBBQ0JBMjllODJFMjRmODBlZjYyNjdkZjZDQTU5ZTYzMVwiXG5leHBvcnQgY29uc3QgVVNEVF9GQVVDRVRfQUREUkVTUyA9IFwiMHhlMzNFQ0Y5NTBiNTNEQ0M0MjlFNjEyN2VkMUE2QTUwODVlMTkxOEZlXCJcblxuLy8gRlRPIGRlbW9cbmV4cG9ydCBjb25zdCBGVE9fRkFDVE9SWV9BRERSRVNTID0gXCIweDVBRDg0MDU2NTc0MDY2Yzc3NEM1ZTU4QkM0YTA2NTJiNmMxNzEyNTNcIlxuZXhwb3J0IGNvbnN0IEZUT19GQUNBREVfQUREUkVTUyA9IFwiMHhlNjdhMTVBZUJEODQ1Qzc3OUJGNjY3MjQ0MjU2N2IxQzY2ZGUzNEMyXCJcbiJdLCJuYW1lcyI6WyJ0b2tlbkFfYWRkcmVzcyIsInRva2VuQl9hZGRyZXNzIiwidG9rZW5EX2FkZHJlc3MiLCJ0b2tlbkZfYWRkcmVzcyIsImJ1eXNlbGxfYWRkcmVzcyIsInZhdWx0X2FkZHJlc3MiLCJwb29sc19hZGRyZXNzIiwicGFuZWxfYWRyZXNzIiwicHVyY2hhc2VfYWRkcmVzcyIsIk11bWJhaV95ZXhFeGFtcGxlX2FkZHJlc3MiLCJNdW1iYWlfeWV4RXhhbXBsZV9wb29sMl9hZGRyZXNzIiwiTXVtYmFpX3Rva2VuQV9hZGRyZXNzIiwiTXVtYmFpX3Rva2VuQl9hZGRyZXNzIiwiSUxPX0FERFJFU1MiLCJNVU1CQUlfSUxPX1RPS0VOQV9BRERSRVNTIiwiTVVNQkFJX0lMT19UT0tFTkJfQUREUkVTUyIsIlVTRFRfRkFVQ0VUX0FERFJFU1MiLCJGVE9fRkFDVE9SWV9BRERSRVNTIiwiRlRPX0ZBQ0FERV9BRERSRVNTIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contracts/addresses.js\n"));

/***/ })

});