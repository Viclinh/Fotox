"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/request-message";
exports.ids = ["pages/api/auth/request-message"];
exports.modules = {

/***/ "moralis":
/*!**************************!*\
  !*** external "moralis" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("moralis");

/***/ }),

/***/ "(api)/./pages/api/auth/request-message.js":
/*!*******************************************!*\
  !*** ./pages/api/auth/request-message.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moralis */ \"moralis\");\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n    domain: process.env.APP_DOMAIN,\n    statement: \"Web Login.\",\n    uri: process.env.NEXTAUTH_URL,\n    timeout: 60\n};\nasync function handler(req, res) {\n    const { address , chain , network  } = req.body;\n    await moralis__WEBPACK_IMPORTED_MODULE_0___default().start({\n        apiKey: process.env.MORALIS_API_KEY\n    });\n    try {\n        const message = await moralis__WEBPACK_IMPORTED_MODULE_0___default().Auth.requestMessage({\n            address,\n            chain,\n            network,\n            ...config\n        });\n        res.status(200).json(message);\n    } catch (error) {\n        res.status(400).json({\n            error\n        });\n        console.error(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9yZXF1ZXN0LW1lc3NhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThCO0FBRTlCLE1BQU1DLE1BQU0sR0FBRztJQUNYQyxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVO0lBQzlCQyxTQUFTLEVBQUUsWUFBWTtJQUN2QkMsR0FBRyxFQUFFSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksWUFBWTtJQUM3QkMsT0FBTyxFQUFFLEVBQUU7Q0FDZDtBQUVjLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsTUFBTSxFQUFFQyxPQUFPLEdBQUVDLEtBQUssR0FBRUMsT0FBTyxHQUFFLEdBQUdKLEdBQUcsQ0FBQ0ssSUFBSTtJQUU1QyxNQUFNaEIsb0RBQWEsQ0FBQztRQUFFa0IsTUFBTSxFQUFFZixPQUFPLENBQUNDLEdBQUcsQ0FBQ2UsZUFBZTtLQUFFLENBQUMsQ0FBQztJQUU3RCxJQUFJO1FBQ0EsTUFBTUMsT0FBTyxHQUFHLE1BQU1wQixrRUFBMkIsQ0FBQztZQUM5Q2EsT0FBTztZQUNQQyxLQUFLO1lBQ0xDLE9BQU87WUFDUCxHQUFHZCxNQUFNO1NBQ1osQ0FBQztRQUVGVyxHQUFHLENBQUNXLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDSixPQUFPLENBQUMsQ0FBQztLQUNqQyxDQUFDLE9BQU9LLEtBQUssRUFBRTtRQUNaYixHQUFHLENBQUNXLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEtBQUs7U0FBRSxDQUFDLENBQUM7UUFDaENDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDQSxLQUFLLENBQUMsQ0FBQztLQUN4QjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViM2F1dGgvLi9wYWdlcy9hcGkvYXV0aC9yZXF1ZXN0LW1lc3NhZ2UuanM/MmVlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9yYWxpcyBmcm9tICdtb3JhbGlzJztcblxuY29uc3QgY29uZmlnID0ge1xuICAgIGRvbWFpbjogcHJvY2Vzcy5lbnYuQVBQX0RPTUFJTixcbiAgICBzdGF0ZW1lbnQ6ICdXZWIgTG9naW4uJyxcbiAgICB1cmk6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1VSTCxcbiAgICB0aW1lb3V0OiA2MCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICBjb25zdCB7IGFkZHJlc3MsIGNoYWluLCBuZXR3b3JrIH0gPSByZXEuYm9keTtcblxuICAgIGF3YWl0IE1vcmFsaXMuc3RhcnQoeyBhcGlLZXk6IHByb2Nlc3MuZW52Lk1PUkFMSVNfQVBJX0tFWSB9KTtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCBNb3JhbGlzLkF1dGgucmVxdWVzdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIGNoYWluLFxuICAgICAgICAgICAgbmV0d29yayxcbiAgICAgICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24obWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvciB9KTtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJNb3JhbGlzIiwiY29uZmlnIiwiZG9tYWluIiwicHJvY2VzcyIsImVudiIsIkFQUF9ET01BSU4iLCJzdGF0ZW1lbnQiLCJ1cmkiLCJORVhUQVVUSF9VUkwiLCJ0aW1lb3V0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsImFkZHJlc3MiLCJjaGFpbiIsIm5ldHdvcmsiLCJib2R5Iiwic3RhcnQiLCJhcGlLZXkiLCJNT1JBTElTX0FQSV9LRVkiLCJtZXNzYWdlIiwiQXV0aCIsInJlcXVlc3RNZXNzYWdlIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/request-message.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/request-message.js"));
module.exports = __webpack_exports__;

})();