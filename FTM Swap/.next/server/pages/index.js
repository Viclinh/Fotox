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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/connectors/metaMask */ \"wagmi/connectors/metaMask\");\n/* harmony import */ var wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/connectors/coinbaseWallet */ \"wagmi/connectors/coinbaseWallet\");\n/* harmony import */ var wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/connectors/walletConnect */ \"wagmi/connectors/walletConnect\");\n/* harmony import */ var wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nfunction SignIn() {\n    const { connectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useConnect)();\n    const { disconnectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useDisconnect)();\n    const { isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useAccount)();\n    const { signMessageAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useSignMessage)();\n    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleAuth = async (wal)=>{\n        if (isConnected) {\n            await disconnectAsync();\n        }\n        console.log(\"Connect To Site Via Wallet\");\n        const userData = {\n            network: \"evm\"\n        };\n        if (wal === \"meta\") {\n            const { account , chain  } = await connectAsync({\n                connector: new wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_4__.MetaMaskConnector({})\n            });\n            userData.address = account;\n            userData.chain = chain.id;\n        }\n        if (wal === \"coin\") {\n            const { account: account1 , chain: chain1  } = await connectAsync({\n                connector: new wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5__.CoinbaseWalletConnector({})\n            });\n            userData.address = account1;\n            userData.chain = chain1.id;\n        }\n        if (wal === \"wal\") {\n            const { account: account2 , chain: chain2  } = await connectAsync({\n                connector: new wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6__.WalletConnectConnector({\n                    options: {\n                        qrcode: true\n                    }\n                })\n            });\n            userData.address = account2;\n            userData.chain = chain2.id;\n        }\n        console.log(\"Sending Connected Account and Chain ID to Moralis Auth API\");\n        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_7___default().post(\"/api/auth/request-message\", userData, {\n            headers: {\n                \"content-type\": \"application/json\"\n            }\n        });\n        console.log(\"Received Signature Request From Moralis Auth API\");\n        const message = data.message;\n        const signature = await signMessageAsync({\n            message\n        });\n        console.log(\"Succesful Sign In, Redirecting to User Page\");\n        const { url  } = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"credentials\", {\n            message,\n            signature,\n            redirect: false,\n            callbackUrl: \"/user\"\n        });\n        push(url);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Swapping FTM to USDC\"\n            }, void 0, false, {\n                fileName: \"/Users/hong/Documents/FTM Swap/pages/index.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleAuth(\"meta\"),\n                children: \"Authenticate via Metamask\"\n            }, void 0, false, {\n                fileName: \"/Users/hong/Documents/FTM Swap/pages/index.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/hong/Documents/FTM Swap/pages/index.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleAuth(\"coin\"),\n                children: \"Authenticate via Coinbase\"\n            }, void 0, false, {\n                fileName: \"/Users/hong/Documents/FTM Swap/pages/index.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/hong/Documents/FTM Swap/pages/index.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleAuth(\"wal\"),\n                children: \"Authenticate via Wallet Connect\"\n            }, void 0, false, {\n                fileName: \"/Users/hong/Documents/FTM Swap/pages/index.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hong/Documents/FTM Swap/pages/index.js\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignIn);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TztZQUNQQyxTQUFTO1lBQ1RFLFFBQVEsRUFBRSxLQUFLO1lBQ2ZDLFdBQVcsRUFBRSxPQUFPO1NBQ3JCLENBQUM7UUFFRnJCLElBQUksQ0FBQ21CLEdBQUcsQ0FBQyxDQUFDO0tBQ1g7SUFFRCxxQkFDRSw4REFBQ0csS0FBRzs7MEJBQ0YsOERBQUNDLElBQUU7MEJBQUMsc0JBQW9COzs7OztvQkFBSzswQkFDN0IsOERBQUNDLFFBQU07Z0JBQUNDLE9BQU8sRUFBRSxJQUFNeEIsVUFBVSxDQUFDLE1BQU0sQ0FBQzswQkFBRSwyQkFFM0M7Ozs7O29CQUFTOzBCQUNULDhEQUFDeUIsSUFBRTs7OztvQkFBRzswQkFDTiw4REFBQ0YsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFLElBQU14QixVQUFVLENBQUMsTUFBTSxDQUFDOzBCQUFFLDJCQUUzQzs7Ozs7b0JBQVM7MEJBQ1QsOERBQUN5QixJQUFFOzs7O29CQUFFOzBCQUNMLDhEQUFDRixRQUFNO2dCQUFDQyxPQUFPLEVBQUUsSUFBTXhCLFVBQVUsQ0FBQyxLQUFLLENBQUM7MEJBQUUsaUNBRTFDOzs7OztvQkFBUzs7Ozs7O1lBQ0wsQ0FDTjtDQUNIO0FBRUQsaUVBQWVOLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYjNhdXRoLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaWduSW4gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VBY2NvdW50LCB1c2VDb25uZWN0LCB1c2VTaWduTWVzc2FnZSwgdXNlRGlzY29ubmVjdCB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBNZXRhTWFza0Nvbm5lY3RvciB9IGZyb20gXCJ3YWdtaS9jb25uZWN0b3JzL21ldGFNYXNrXCI7XG5pbXBvcnQgeyBDb2luYmFzZVdhbGxldENvbm5lY3RvciB9IGZyb20gXCJ3YWdtaS9jb25uZWN0b3JzL2NvaW5iYXNlV2FsbGV0XCI7XG5pbXBvcnQgeyBXYWxsZXRDb25uZWN0Q29ubmVjdG9yIH0gZnJvbSBcIndhZ21pL2Nvbm5lY3RvcnMvd2FsbGV0Q29ubmVjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5mdW5jdGlvbiBTaWduSW4oKSB7XG4gIGNvbnN0IHsgY29ubmVjdEFzeW5jIH0gPSB1c2VDb25uZWN0KCk7XG4gIGNvbnN0IHsgZGlzY29ubmVjdEFzeW5jIH0gPSB1c2VEaXNjb25uZWN0KCk7XG4gIGNvbnN0IHsgaXNDb25uZWN0ZWQgfSA9IHVzZUFjY291bnQoKTtcbiAgY29uc3QgeyBzaWduTWVzc2FnZUFzeW5jIH0gPSB1c2VTaWduTWVzc2FnZSgpO1xuICBjb25zdCB7IHB1c2ggfSA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZUF1dGggPSBhc3luYyAod2FsKSA9PiB7XG4gICAgaWYgKGlzQ29ubmVjdGVkKSB7XG4gICAgICBhd2FpdCBkaXNjb25uZWN0QXN5bmMoKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3QgVG8gU2l0ZSBWaWEgV2FsbGV0XCIpO1xuXG4gICAgY29uc3QgdXNlckRhdGEgPSB7IG5ldHdvcms6IFwiZXZtXCIgfTtcblxuICAgIGlmICh3YWwgPT09IFwibWV0YVwiKSB7XG4gICAgICBjb25zdCB7IGFjY291bnQsIGNoYWluIH0gPSBhd2FpdCBjb25uZWN0QXN5bmMoe1xuICAgICAgICBjb25uZWN0b3I6IG5ldyBNZXRhTWFza0Nvbm5lY3Rvcih7fSksXG4gICAgICB9KTtcbiAgICAgIHVzZXJEYXRhLmFkZHJlc3MgPSBhY2NvdW50O1xuICAgICAgdXNlckRhdGEuY2hhaW4gPSBjaGFpbi5pZDtcbiAgICB9XG5cbiAgICBpZiAod2FsID09PSBcImNvaW5cIikge1xuICAgICAgY29uc3QgeyBhY2NvdW50LCBjaGFpbiB9ID0gYXdhaXQgY29ubmVjdEFzeW5jKHtcbiAgICAgICAgY29ubmVjdG9yOiBuZXcgQ29pbmJhc2VXYWxsZXRDb25uZWN0b3Ioe30pLFxuICAgICAgfSk7XG4gICAgICB1c2VyRGF0YS5hZGRyZXNzID0gYWNjb3VudDtcbiAgICAgIHVzZXJEYXRhLmNoYWluID0gY2hhaW4uaWQ7XG4gICAgfVxuXG4gICAgaWYgKHdhbCA9PT0gXCJ3YWxcIikge1xuICAgICAgY29uc3QgeyBhY2NvdW50LCBjaGFpbiB9ID0gYXdhaXQgY29ubmVjdEFzeW5jKHtcbiAgICAgICAgY29ubmVjdG9yOiBuZXcgV2FsbGV0Q29ubmVjdENvbm5lY3Rvcih7IG9wdGlvbnM6IHsgcXJjb2RlOiB0cnVlIH0gfSksXG4gICAgICB9KTtcbiAgICAgIHVzZXJEYXRhLmFkZHJlc3MgPSBhY2NvdW50O1xuICAgICAgdXNlckRhdGEuY2hhaW4gPSBjaGFpbi5pZDtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcIlNlbmRpbmcgQ29ubmVjdGVkIEFjY291bnQgYW5kIENoYWluIElEIHRvIE1vcmFsaXMgQXV0aCBBUElcIik7XG5cbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL2F1dGgvcmVxdWVzdC1tZXNzYWdlXCIsIHVzZXJEYXRhLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgU2lnbmF0dXJlIFJlcXVlc3QgRnJvbSBNb3JhbGlzIEF1dGggQVBJXCIpO1xuXG4gICAgY29uc3QgbWVzc2FnZSA9IGRhdGEubWVzc2FnZTtcblxuICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IHNpZ25NZXNzYWdlQXN5bmMoeyBtZXNzYWdlIH0pO1xuXG4gICAgY29uc29sZS5sb2coXCJTdWNjZXNmdWwgU2lnbiBJbiwgUmVkaXJlY3RpbmcgdG8gVXNlciBQYWdlXCIpO1xuXG4gICAgY29uc3QgeyB1cmwgfSA9IGF3YWl0IHNpZ25JbihcImNyZWRlbnRpYWxzXCIsIHtcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBzaWduYXR1cmUsXG4gICAgICByZWRpcmVjdDogZmFsc2UsXG4gICAgICBjYWxsYmFja1VybDogXCIvdXNlclwiLFxuICAgIH0pO1xuXG4gICAgcHVzaCh1cmwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMz5Td2FwcGluZyBGVE0gdG8gVVNEQzwvaDM+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUF1dGgoXCJtZXRhXCIpfT5cbiAgICAgICAgQXV0aGVudGljYXRlIHZpYSBNZXRhbWFza1xuICAgICAgPC9idXR0b24+XG4gICAgICA8YnIgLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQXV0aChcImNvaW5cIil9PlxuICAgICAgICBBdXRoZW50aWNhdGUgdmlhIENvaW5iYXNlXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxici8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUF1dGgoXCJ3YWxcIil9PlxuICAgICAgICBBdXRoZW50aWNhdGUgdmlhIFdhbGxldCBDb25uZWN0XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnbkluO1xuIl0sIm5hbWVzIjpbInNpZ25JbiIsInVzZUFjY291bnQiLCJ1c2VDb25uZWN0IiwidXNlU2lnbk1lc3NhZ2UiLCJ1c2VEaXNjb25uZWN0IiwidXNlUm91dGVyIiwiTWV0YU1hc2tDb25uZWN0b3IiLCJDb2luYmFzZVdhbGxldENvbm5lY3RvciIsIldhbGxldENvbm5lY3RDb25uZWN0b3IiLCJheGlvcyIsIlNpZ25JbiIsImNvbm5lY3RBc3luYyIsImRpc2Nvbm5lY3RBc3luYyIsImlzQ29ubmVjdGVkIiwic2lnbk1lc3NhZ2VBc3luYyIsInB1c2giLCJoYW5kbGVBdXRoIiwid2FsIiwiY29uc29sZSIsImxvZyIsInVzZXJEYXRhIiwibmV0d29yayIsImFjY291bnQiLCJjaGFpbiIsImNvbm5lY3RvciIsImFkZHJlc3MiLCJpZCIsIm9wdGlvbnMiLCJxcmNvZGUiLCJkYXRhIiwicG9zdCIsImhlYWRlcnMiLCJtZXNzYWdlIiwic2lnbmF0dXJlIiwidXJsIiwicmVkaXJlY3QiLCJjYWxsYmFja1VybCIsImRpdiIsImgzIiwiYnV0dG9uIiwib25DbGljayIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/connectors/coinbaseWallet":
/*!**************************************************!*\
  !*** external "wagmi/connectors/coinbaseWallet" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("wagmi/connectors/coinbaseWallet");

/***/ }),

/***/ "wagmi/connectors/metaMask":
/*!********************************************!*\
  !*** external "wagmi/connectors/metaMask" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("wagmi/connectors/metaMask");

/***/ }),

/***/ "wagmi/connectors/walletConnect":
/*!*************************************************!*\
  !*** external "wagmi/connectors/walletConnect" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("wagmi/connectors/walletConnect");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();