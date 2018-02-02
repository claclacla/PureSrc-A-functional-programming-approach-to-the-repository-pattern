/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*************************!*\
  !*** ./src/delivery.js ***!
  \*************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = delivery;\nasync function delivery(deliveryMethod, address, options, dataType) {\n  let data = await deliveryMethod(address, options, dataType);\n\n  return data;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9kZWxpdmVyeS5qcz81YzU5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGRlbGl2ZXJ5KGRlbGl2ZXJ5TWV0aG9kLCBhZGRyZXNzLCBvcHRpb25zLCBkYXRhVHlwZSkge1xuICBsZXQgZGF0YSA9IGF3YWl0IGRlbGl2ZXJ5TWV0aG9kKGFkZHJlc3MsIG9wdGlvbnMsIGRhdGFUeXBlKTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kZWxpdmVyeS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*******************************!*\
  !*** ./src/lib/Json/index.js ***!
  \*******************************/
/*! exports provided: jsonToString, stringToJson */
/*! exports used: jsonToString, stringToJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = jsonToString;\n/* harmony export (immutable) */ __webpack_exports__[\"b\"] = stringToJson;\nfunction jsonToString(jsonData) {\n  return JSON.stringify(jsonData);\n}\n\nfunction stringToJson(stringData) {\n  let jsonData = null;\n\n  try {\n    jsonData = JSON.parse(stringData); \n  } catch (error) {\n    throw new SyntaxError(\"The supplied string is not a valid json data\");\n  }\n\n  return jsonData;\n} //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9saWIvSnNvbi9pbmRleC5qcz8xNjIwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBqc29uVG9TdHJpbmcoanNvbkRhdGEpIHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGpzb25EYXRhKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ1RvSnNvbihzdHJpbmdEYXRhKSB7XG4gIGxldCBqc29uRGF0YSA9IG51bGw7XG5cbiAgdHJ5IHtcbiAgICBqc29uRGF0YSA9IEpTT04ucGFyc2Uoc3RyaW5nRGF0YSk7IFxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihcIlRoZSBzdXBwbGllZCBzdHJpbmcgaXMgbm90IGEgdmFsaWQganNvbiBkYXRhXCIpO1xuICB9XG5cbiAgcmV0dXJuIGpzb25EYXRhO1xufSBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9saWIvSnNvbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************************!*\
  !*** ./test/e2e/fetchRepository/index.js ***!
  \*******************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_createPureSrc__ = __webpack_require__(/*! ../../../src/createPureSrc */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_deliveryMethods_fetch_fetchDeliveryMethod__ = __webpack_require__(/*! ../../../src/deliveryMethods/fetch/fetchDeliveryMethod */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_deliveryMethods_fetch_headers_jsonHeaders__ = __webpack_require__(/*! ../../../src/deliveryMethods/fetch/headers/jsonHeaders */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_deliveryMethods_fetch_options_fetchDeliveryGetOptions__ = __webpack_require__(/*! ../../../src/deliveryMethods/fetch/options/fetchDeliveryGetOptions */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_deliveryMethods_fetch_options_fetchDeliveryPostOptions__ = __webpack_require__(/*! ../../../src/deliveryMethods/fetch/options/fetchDeliveryPostOptions */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_deliveryMethods_fetch_options_fetchDeliveryPutOptions__ = __webpack_require__(/*! ../../../src/deliveryMethods/fetch/options/fetchDeliveryPutOptions */ 8);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_deliveryMethods_fetch_options_fetchDeliveryDeleteOptions__ = __webpack_require__(/*! ../../../src/deliveryMethods/fetch/options/fetchDeliveryDeleteOptions */ 9);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_repositories_rest_restGetRequest__ = __webpack_require__(/*! ../../../src/repositories/rest/restGetRequest */ 10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_repositories_rest_restGetByUidRequest__ = __webpack_require__(/*! ../../../src/repositories/rest/restGetByUidRequest */ 11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_repositories_rest_restInsertRequest__ = __webpack_require__(/*! ../../../src/repositories/rest/restInsertRequest */ 12);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_repositories_rest_restUpdateRequest__ = __webpack_require__(/*! ../../../src/repositories/rest/restUpdateRequest */ 13);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_repositories_rest_restDeleteRequest__ = __webpack_require__(/*! ../../../src/repositories/rest/restDeleteRequest */ 14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dtos_Source__ = __webpack_require__(/*! ./dtos/Source */ 15);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_lib_Json__ = __webpack_require__(/*! ../../../src/lib/Json */ 1);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst API_ADDRESS = \"http://localhost:3000\";\n\n// Create the repository\n\nlet productRepository = Object(__WEBPACK_IMPORTED_MODULE_0__src_createPureSrc__[\"a\" /* default */])(`${API_ADDRESS}/sources`, __WEBPACK_IMPORTED_MODULE_1__src_deliveryMethods_fetch_fetchDeliveryMethod__[\"b\" /* default */], __WEBPACK_IMPORTED_MODULE_1__src_deliveryMethods_fetch_fetchDeliveryMethod__[\"a\" /* DATA_TYPE_JSON */]);\n\n// Create the repository methods\n\nlet productGetRequest = productRepository(__WEBPACK_IMPORTED_MODULE_7__src_repositories_rest_restGetRequest__[\"a\" /* default */], Object(__WEBPACK_IMPORTED_MODULE_3__src_deliveryMethods_fetch_options_fetchDeliveryGetOptions__[\"a\" /* default */])());\nlet productGetByUidRequest = productRepository(__WEBPACK_IMPORTED_MODULE_8__src_repositories_rest_restGetByUidRequest__[\"a\" /* default */], Object(__WEBPACK_IMPORTED_MODULE_3__src_deliveryMethods_fetch_options_fetchDeliveryGetOptions__[\"a\" /* default */])());\nlet productInsertRequest = productRepository(__WEBPACK_IMPORTED_MODULE_9__src_repositories_rest_restInsertRequest__[\"a\" /* default */], Object(__WEBPACK_IMPORTED_MODULE_4__src_deliveryMethods_fetch_options_fetchDeliveryPostOptions__[\"a\" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__src_deliveryMethods_fetch_headers_jsonHeaders__[\"a\" /* default */])()));\nlet productUpdateRequest = productRepository(__WEBPACK_IMPORTED_MODULE_10__src_repositories_rest_restUpdateRequest__[\"a\" /* default */], Object(__WEBPACK_IMPORTED_MODULE_5__src_deliveryMethods_fetch_options_fetchDeliveryPutOptions__[\"a\" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__src_deliveryMethods_fetch_headers_jsonHeaders__[\"a\" /* default */])()));\nlet productDeleteRequest = productRepository(__WEBPACK_IMPORTED_MODULE_11__src_repositories_rest_restDeleteRequest__[\"a\" /* default */], Object(__WEBPACK_IMPORTED_MODULE_6__src_deliveryMethods_fetch_options_fetchDeliveryDeleteOptions__[\"a\" /* default */])());\n\n(async () => {\n\n  // Insert a new Source\n\n  let source = new __WEBPACK_IMPORTED_MODULE_12__dtos_Source__[\"a\" /* default */](\"PureSource\");\n\n  try {\n    await productInsertRequest(Object(__WEBPACK_IMPORTED_MODULE_13__src_lib_Json__[\"a\" /* jsonToString */])(source));\n  } catch (error) {\n    console.log(\"Product insert error\");\n    return;\n  }\n\n  // Retrieve all the sources\n\n  let sources = null;\n\n  try {\n    sources = await productGetRequest('');\n  } catch (error) {\n    console.log(\"Products retrieve error\");\n    return;\n  }\n\n  // Retrieve a source by uid\n\n  source = sources.data[0];\n\n  try {\n    await productGetByUidRequest(source.uid);\n  } catch (error) {\n    console.log(\"Product retrieve error\");\n    return;\n  }\n\n  // Update a source by uid\n\n  source.name = \"LiquidSource\";\n\n  try {\n    await productUpdateRequest(source.uid, Object(__WEBPACK_IMPORTED_MODULE_13__src_lib_Json__[\"a\" /* jsonToString */])(source));\n  } catch (error) {\n    console.log(\"Product update error\");\n    return;\n  }\n\n  // Delete a source by uid\n\n  try {\n    await productDeleteRequest(source.uid);\n  } catch (error) {\n    console.log(\"Product delete error\");\n    return;\n  }\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy90ZXN0L2UyZS9mZXRjaFJlcG9zaXRvcnkvaW5kZXguanM/MzdlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlUHVyZVNyYyBmcm9tICcuLi8uLi8uLi9zcmMvY3JlYXRlUHVyZVNyYydcblxuaW1wb3J0IGZldGNoRGVsaXZlcnlNZXRob2QsIHsgREFUQV9UWVBFX0pTT04gfSBmcm9tICcuLi8uLi8uLi9zcmMvZGVsaXZlcnlNZXRob2RzL2ZldGNoL2ZldGNoRGVsaXZlcnlNZXRob2QnXG5cbmltcG9ydCBqc29uSGVhZGVycyBmcm9tICcuLi8uLi8uLi9zcmMvZGVsaXZlcnlNZXRob2RzL2ZldGNoL2hlYWRlcnMvanNvbkhlYWRlcnMnXG5pbXBvcnQgZmV0Y2hEZWxpdmVyeUdldE9wdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3JjL2RlbGl2ZXJ5TWV0aG9kcy9mZXRjaC9vcHRpb25zL2ZldGNoRGVsaXZlcnlHZXRPcHRpb25zJ1xuaW1wb3J0IGZldGNoRGVsaXZlcnlQb3N0T3B0aW9ucyBmcm9tICcuLi8uLi8uLi9zcmMvZGVsaXZlcnlNZXRob2RzL2ZldGNoL29wdGlvbnMvZmV0Y2hEZWxpdmVyeVBvc3RPcHRpb25zJ1xuaW1wb3J0IGZldGNoRGVsaXZlcnlQdXRPcHRpb25zIGZyb20gJy4uLy4uLy4uL3NyYy9kZWxpdmVyeU1ldGhvZHMvZmV0Y2gvb3B0aW9ucy9mZXRjaERlbGl2ZXJ5UHV0T3B0aW9ucydcbmltcG9ydCBmZXRjaERlbGl2ZXJ5RGVsZXRlT3B0aW9ucyBmcm9tICcuLi8uLi8uLi9zcmMvZGVsaXZlcnlNZXRob2RzL2ZldGNoL29wdGlvbnMvZmV0Y2hEZWxpdmVyeURlbGV0ZU9wdGlvbnMnXG5cbmltcG9ydCByZXN0R2V0UmVxdWVzdCBmcm9tICcuLi8uLi8uLi9zcmMvcmVwb3NpdG9yaWVzL3Jlc3QvcmVzdEdldFJlcXVlc3QnXG5pbXBvcnQgcmVzdEdldEJ5VWlkUmVxdWVzdCBmcm9tICcuLi8uLi8uLi9zcmMvcmVwb3NpdG9yaWVzL3Jlc3QvcmVzdEdldEJ5VWlkUmVxdWVzdCdcbmltcG9ydCByZXN0SW5zZXJ0UmVxdWVzdCBmcm9tICcuLi8uLi8uLi9zcmMvcmVwb3NpdG9yaWVzL3Jlc3QvcmVzdEluc2VydFJlcXVlc3QnXG5pbXBvcnQgcmVzdFVwZGF0ZVJlcXVlc3QgZnJvbSAnLi4vLi4vLi4vc3JjL3JlcG9zaXRvcmllcy9yZXN0L3Jlc3RVcGRhdGVSZXF1ZXN0J1xuaW1wb3J0IHJlc3REZWxldGVSZXF1ZXN0IGZyb20gJy4uLy4uLy4uL3NyYy9yZXBvc2l0b3JpZXMvcmVzdC9yZXN0RGVsZXRlUmVxdWVzdCdcblxuaW1wb3J0IFNvdXJjZSBmcm9tICcuL2R0b3MvU291cmNlJ1xuaW1wb3J0IHsganNvblRvU3RyaW5nIH0gZnJvbSAnLi4vLi4vLi4vc3JjL2xpYi9Kc29uJ1xuXG5jb25zdCBBUElfQUREUkVTUyA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XG5cbi8vIENyZWF0ZSB0aGUgcmVwb3NpdG9yeVxuXG5sZXQgcHJvZHVjdFJlcG9zaXRvcnkgPSBjcmVhdGVQdXJlU3JjKGAke0FQSV9BRERSRVNTfS9zb3VyY2VzYCwgZmV0Y2hEZWxpdmVyeU1ldGhvZCwgREFUQV9UWVBFX0pTT04pO1xuXG4vLyBDcmVhdGUgdGhlIHJlcG9zaXRvcnkgbWV0aG9kc1xuXG5sZXQgcHJvZHVjdEdldFJlcXVlc3QgPSBwcm9kdWN0UmVwb3NpdG9yeShyZXN0R2V0UmVxdWVzdCwgZmV0Y2hEZWxpdmVyeUdldE9wdGlvbnMoKSk7XG5sZXQgcHJvZHVjdEdldEJ5VWlkUmVxdWVzdCA9IHByb2R1Y3RSZXBvc2l0b3J5KHJlc3RHZXRCeVVpZFJlcXVlc3QsIGZldGNoRGVsaXZlcnlHZXRPcHRpb25zKCkpO1xubGV0IHByb2R1Y3RJbnNlcnRSZXF1ZXN0ID0gcHJvZHVjdFJlcG9zaXRvcnkocmVzdEluc2VydFJlcXVlc3QsIGZldGNoRGVsaXZlcnlQb3N0T3B0aW9ucyhqc29uSGVhZGVycygpKSk7XG5sZXQgcHJvZHVjdFVwZGF0ZVJlcXVlc3QgPSBwcm9kdWN0UmVwb3NpdG9yeShyZXN0VXBkYXRlUmVxdWVzdCwgZmV0Y2hEZWxpdmVyeVB1dE9wdGlvbnMoanNvbkhlYWRlcnMoKSkpO1xubGV0IHByb2R1Y3REZWxldGVSZXF1ZXN0ID0gcHJvZHVjdFJlcG9zaXRvcnkocmVzdERlbGV0ZVJlcXVlc3QsIGZldGNoRGVsaXZlcnlEZWxldGVPcHRpb25zKCkpO1xuXG4oYXN5bmMgKCkgPT4ge1xuXG4gIC8vIEluc2VydCBhIG5ldyBTb3VyY2VcblxuICBsZXQgc291cmNlID0gbmV3IFNvdXJjZShcIlB1cmVTb3VyY2VcIik7XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBwcm9kdWN0SW5zZXJ0UmVxdWVzdChqc29uVG9TdHJpbmcoc291cmNlKSk7ICBcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcIlByb2R1Y3QgaW5zZXJ0IGVycm9yXCIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFJldHJpZXZlIGFsbCB0aGUgc291cmNlc1xuXG4gIGxldCBzb3VyY2VzID0gbnVsbDtcbiAgXG4gIHRyeSB7XG4gICAgc291cmNlcyA9IGF3YWl0IHByb2R1Y3RHZXRSZXF1ZXN0KCcnKTsgICAgXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICBjb25zb2xlLmxvZyhcIlByb2R1Y3RzIHJldHJpZXZlIGVycm9yXCIpOyBcbiAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFJldHJpZXZlIGEgc291cmNlIGJ5IHVpZFxuXG4gIHNvdXJjZSA9IHNvdXJjZXMuZGF0YVswXTtcblxuICB0cnkge1xuICAgIGF3YWl0IHByb2R1Y3RHZXRCeVVpZFJlcXVlc3Qoc291cmNlLnVpZCk7ICAgIFxuICB9IGNhdGNoIChlcnJvcikge1xuICAgY29uc29sZS5sb2coXCJQcm9kdWN0IHJldHJpZXZlIGVycm9yXCIpOyBcbiAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFVwZGF0ZSBhIHNvdXJjZSBieSB1aWRcblxuICBzb3VyY2UubmFtZSA9IFwiTGlxdWlkU291cmNlXCI7XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBwcm9kdWN0VXBkYXRlUmVxdWVzdChzb3VyY2UudWlkLCBqc29uVG9TdHJpbmcoc291cmNlKSk7IFxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiUHJvZHVjdCB1cGRhdGUgZXJyb3JcIik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVsZXRlIGEgc291cmNlIGJ5IHVpZFxuXG4gIHRyeSB7XG4gICAgYXdhaXQgcHJvZHVjdERlbGV0ZVJlcXVlc3Qoc291cmNlLnVpZCk7IFxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiUHJvZHVjdCBkZWxldGUgZXJyb3JcIik7XG4gICAgcmV0dXJuO1xuICB9XG59KSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0ZXN0L2UyZS9mZXRjaFJlcG9zaXRvcnkvaW5kZXguanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/createPureSrc.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = createPureSrc;\nfunction createPureSrc(address, deliveryMethod, dataType) {\n  return function (deliveryRequest, options) {\n    return async function (...requestParameters) {\n      let data = await deliveryRequest(\n        deliveryMethod,\n        address,\n        options,\n        dataType,\n        ...requestParameters\n      );\n\n      return data;\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jcmVhdGVQdXJlU3JjLmpzPzA5NDgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHVyZVNyYyhhZGRyZXNzLCBkZWxpdmVyeU1ldGhvZCwgZGF0YVR5cGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkZWxpdmVyeVJlcXVlc3QsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKC4uLnJlcXVlc3RQYXJhbWV0ZXJzKSB7XG4gICAgICBsZXQgZGF0YSA9IGF3YWl0IGRlbGl2ZXJ5UmVxdWVzdChcbiAgICAgICAgZGVsaXZlcnlNZXRob2QsXG4gICAgICAgIGFkZHJlc3MsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICAgIGRhdGFUeXBlLFxuICAgICAgICAuLi5yZXF1ZXN0UGFyYW1ldGVyc1xuICAgICAgKTtcblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jcmVhdGVQdXJlU3JjLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!**********************************************************!*\
  !*** ./src/deliveryMethods/fetch/fetchDeliveryMethod.js ***!
  \**********************************************************/
/*! exports provided: DATA_TYPE_JSON, default */
/*! exports used: DATA_TYPE_JSON, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"b\"] = fetchDeliveryMethod;\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_Json___ = __webpack_require__(/*! ../../lib/Json/ */ 1);\n\n\nconst DATA_TYPE_JSON = \"JSON\";\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = DATA_TYPE_JSON;\n\n\nasync function fetchDeliveryMethod(address, options, dataType) {\n  let data = null;\n\n  let response = await fetch(address, options);\n\n  switch (dataType) {\n    case DATA_TYPE_JSON:\n      let responseText = await response.text();\n      \n      if(responseText) {\n        try {\n          data = Object(__WEBPACK_IMPORTED_MODULE_0__lib_Json___[\"b\" /* stringToJson */])(responseText); \n        } catch (error) {\n          throw new Error(\"Error parsing response data\");\n        }\n      }\n      else {\n        data = responseText;\n      }\n\n      break;\n  }\n\n  return data;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9kZWxpdmVyeU1ldGhvZHMvZmV0Y2gvZmV0Y2hEZWxpdmVyeU1ldGhvZC5qcz9kZjZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmluZ1RvSnNvbiB9IGZyb20gJy4uLy4uL2xpYi9Kc29uLydcblxuZXhwb3J0IGNvbnN0IERBVEFfVFlQRV9KU09OID0gXCJKU09OXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZldGNoRGVsaXZlcnlNZXRob2QoYWRkcmVzcywgb3B0aW9ucywgZGF0YVR5cGUpIHtcbiAgbGV0IGRhdGEgPSBudWxsO1xuXG4gIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFkZHJlc3MsIG9wdGlvbnMpO1xuXG4gIHN3aXRjaCAoZGF0YVR5cGUpIHtcbiAgICBjYXNlIERBVEFfVFlQRV9KU09OOlxuICAgICAgbGV0IHJlc3BvbnNlVGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgIFxuICAgICAgaWYocmVzcG9uc2VUZXh0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZGF0YSA9IHN0cmluZ1RvSnNvbihyZXNwb25zZVRleHQpOyBcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvciBwYXJzaW5nIHJlc3BvbnNlIGRhdGFcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBkYXRhID0gcmVzcG9uc2VUZXh0O1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2RlbGl2ZXJ5TWV0aG9kcy9mZXRjaC9mZXRjaERlbGl2ZXJ5TWV0aG9kLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!**********************************************************!*\
  !*** ./src/deliveryMethods/fetch/headers/jsonHeaders.js ***!
  \**********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = jsonHeaders;\nfunction jsonHeaders() {\n  return new Headers({\n    'Content-Type': 'application/json'\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9kZWxpdmVyeU1ldGhvZHMvZmV0Y2gvaGVhZGVycy9qc29uSGVhZGVycy5qcz84N2Q0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGpzb25IZWFkZXJzKCkge1xuICByZXR1cm4gbmV3IEhlYWRlcnMoe1xuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZGVsaXZlcnlNZXRob2RzL2ZldGNoL2hlYWRlcnMvanNvbkhlYWRlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!**********************************************************************!*\
  !*** ./src/deliveryMethods/fetch/options/fetchDeliveryGetOptions.js ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = fetchDeliveryGetOptions;\nfunction fetchDeliveryGetOptions(headers) {\n  return {\n    method: \"GET\",\n    headers\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9kZWxpdmVyeU1ldGhvZHMvZmV0Y2gvb3B0aW9ucy9mZXRjaERlbGl2ZXJ5R2V0T3B0aW9ucy5qcz80YmMwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZldGNoRGVsaXZlcnlHZXRPcHRpb25zKGhlYWRlcnMpIHtcbiAgcmV0dXJuIHtcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgaGVhZGVyc1xuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZGVsaXZlcnlNZXRob2RzL2ZldGNoL29wdGlvbnMvZmV0Y2hEZWxpdmVyeUdldE9wdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!***********************************************************************!*\
  !*** ./src/deliveryMethods/fetch/options/fetchDeliveryPostOptions.js ***!
  \***********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = fetchDeliveryPostOptions;\nfunction fetchDeliveryPostOptions(headers) {\n  return {\n    method: \"POST\",\n    headers\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9kZWxpdmVyeU1ldGhvZHMvZmV0Y2gvb3B0aW9ucy9mZXRjaERlbGl2ZXJ5UG9zdE9wdGlvbnMuanM/OGY2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmZXRjaERlbGl2ZXJ5UG9zdE9wdGlvbnMoaGVhZGVycykge1xuICByZXR1cm4ge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyc1xuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZGVsaXZlcnlNZXRob2RzL2ZldGNoL29wdGlvbnMvZmV0Y2hEZWxpdmVyeVBvc3RPcHRpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!**********************************************************************!*\
  !*** ./src/deliveryMethods/fetch/options/fetchDeliveryPutOptions.js ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = fetchDeliveryPutOptions;\nfunction fetchDeliveryPutOptions(headers) {\n  return {\n    method: \"PUT\",\n    headers\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9kZWxpdmVyeU1ldGhvZHMvZmV0Y2gvb3B0aW9ucy9mZXRjaERlbGl2ZXJ5UHV0T3B0aW9ucy5qcz84YWM3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZldGNoRGVsaXZlcnlQdXRPcHRpb25zKGhlYWRlcnMpIHtcbiAgcmV0dXJuIHtcbiAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgaGVhZGVyc1xuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZGVsaXZlcnlNZXRob2RzL2ZldGNoL29wdGlvbnMvZmV0Y2hEZWxpdmVyeVB1dE9wdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*************************************************************************!*\
  !*** ./src/deliveryMethods/fetch/options/fetchDeliveryDeleteOptions.js ***!
  \*************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = fetchDeliveryDeleteOptions;\nfunction fetchDeliveryDeleteOptions(headers) {\n  return {\n    method: \"DELETE\",\n    headers\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9kZWxpdmVyeU1ldGhvZHMvZmV0Y2gvb3B0aW9ucy9mZXRjaERlbGl2ZXJ5RGVsZXRlT3B0aW9ucy5qcz8yMDVlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZldGNoRGVsaXZlcnlEZWxldGVPcHRpb25zKGhlYWRlcnMpIHtcbiAgcmV0dXJuIHtcbiAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgaGVhZGVyc1xuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZGVsaXZlcnlNZXRob2RzL2ZldGNoL29wdGlvbnMvZmV0Y2hEZWxpdmVyeURlbGV0ZU9wdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!*************************************************!*\
  !*** ./src/repositories/rest/restGetRequest.js ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = restGetRequest;\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__delivery__ = __webpack_require__(/*! ../../delivery */ 0);\n\n\nasync function restGetRequest(deliveryMethod, address, options, dataType, query) {\n  if (query) {\n    address += \"?\" + query;\n  }\n\n  let data = await Object(__WEBPACK_IMPORTED_MODULE_0__delivery__[\"a\" /* default */])(deliveryMethod, address, options, dataType);\n\n  return data;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVwb3NpdG9yaWVzL3Jlc3QvcmVzdEdldFJlcXVlc3QuanM/Yzc0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGVsaXZlcnkgZnJvbSAnLi4vLi4vZGVsaXZlcnknO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiByZXN0R2V0UmVxdWVzdChkZWxpdmVyeU1ldGhvZCwgYWRkcmVzcywgb3B0aW9ucywgZGF0YVR5cGUsIHF1ZXJ5KSB7XG4gIGlmIChxdWVyeSkge1xuICAgIGFkZHJlc3MgKz0gXCI/XCIgKyBxdWVyeTtcbiAgfVxuXG4gIGxldCBkYXRhID0gYXdhaXQgZGVsaXZlcnkoZGVsaXZlcnlNZXRob2QsIGFkZHJlc3MsIG9wdGlvbnMsIGRhdGFUeXBlKTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yZXBvc2l0b3JpZXMvcmVzdC9yZXN0R2V0UmVxdWVzdC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!******************************************************!*\
  !*** ./src/repositories/rest/restGetByUidRequest.js ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = restGetByUidRequest;\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__delivery__ = __webpack_require__(/*! ../../delivery */ 0);\n\n\nasync function restGetByUidRequest(deliveryMethod, address, options, dataType, uid) {\n  if (uid) {\n    address += \"/\" + uid;\n  }\n\n  let data = await Object(__WEBPACK_IMPORTED_MODULE_0__delivery__[\"a\" /* default */])(deliveryMethod, address, options, dataType);\n\n  return data;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVwb3NpdG9yaWVzL3Jlc3QvcmVzdEdldEJ5VWlkUmVxdWVzdC5qcz8wZjgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkZWxpdmVyeSBmcm9tICcuLi8uLi9kZWxpdmVyeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHJlc3RHZXRCeVVpZFJlcXVlc3QoZGVsaXZlcnlNZXRob2QsIGFkZHJlc3MsIG9wdGlvbnMsIGRhdGFUeXBlLCB1aWQpIHtcbiAgaWYgKHVpZCkge1xuICAgIGFkZHJlc3MgKz0gXCIvXCIgKyB1aWQ7XG4gIH1cblxuICBsZXQgZGF0YSA9IGF3YWl0IGRlbGl2ZXJ5KGRlbGl2ZXJ5TWV0aG9kLCBhZGRyZXNzLCBvcHRpb25zLCBkYXRhVHlwZSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVwb3NpdG9yaWVzL3Jlc3QvcmVzdEdldEJ5VWlkUmVxdWVzdC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!****************************************************!*\
  !*** ./src/repositories/rest/restInsertRequest.js ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = restInsertRequest;\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__delivery__ = __webpack_require__(/*! ../../delivery */ 0);\n\n\nasync function restInsertRequest(deliveryMethod, address, options, dataType, body) {\n  options.body = body;\n\n  let data = await Object(__WEBPACK_IMPORTED_MODULE_0__delivery__[\"a\" /* default */])(deliveryMethod, address, options, dataType);\n\n  return data;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVwb3NpdG9yaWVzL3Jlc3QvcmVzdEluc2VydFJlcXVlc3QuanM/MjIyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGVsaXZlcnkgZnJvbSAnLi4vLi4vZGVsaXZlcnknO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiByZXN0SW5zZXJ0UmVxdWVzdChkZWxpdmVyeU1ldGhvZCwgYWRkcmVzcywgb3B0aW9ucywgZGF0YVR5cGUsIGJvZHkpIHtcbiAgb3B0aW9ucy5ib2R5ID0gYm9keTtcblxuICBsZXQgZGF0YSA9IGF3YWl0IGRlbGl2ZXJ5KGRlbGl2ZXJ5TWV0aG9kLCBhZGRyZXNzLCBvcHRpb25zLCBkYXRhVHlwZSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVwb3NpdG9yaWVzL3Jlc3QvcmVzdEluc2VydFJlcXVlc3QuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!****************************************************!*\
  !*** ./src/repositories/rest/restUpdateRequest.js ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = restUpdateRequest;\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__delivery__ = __webpack_require__(/*! ../../delivery */ 0);\n\n\nasync function restUpdateRequest(deliveryMethod, address, options, dataType, uid, body) {\n  if (uid) {\n    address += \"/\" + uid;\n  }\n\n  options.body = body;\n\n  let data = await Object(__WEBPACK_IMPORTED_MODULE_0__delivery__[\"a\" /* default */])(deliveryMethod, address, options, dataType);\n\n  return data;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVwb3NpdG9yaWVzL3Jlc3QvcmVzdFVwZGF0ZVJlcXVlc3QuanM/ZDA1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGVsaXZlcnkgZnJvbSAnLi4vLi4vZGVsaXZlcnknO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiByZXN0VXBkYXRlUmVxdWVzdChkZWxpdmVyeU1ldGhvZCwgYWRkcmVzcywgb3B0aW9ucywgZGF0YVR5cGUsIHVpZCwgYm9keSkge1xuICBpZiAodWlkKSB7XG4gICAgYWRkcmVzcyArPSBcIi9cIiArIHVpZDtcbiAgfVxuXG4gIG9wdGlvbnMuYm9keSA9IGJvZHk7XG5cbiAgbGV0IGRhdGEgPSBhd2FpdCBkZWxpdmVyeShkZWxpdmVyeU1ldGhvZCwgYWRkcmVzcywgb3B0aW9ucywgZGF0YVR5cGUpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3JlcG9zaXRvcmllcy9yZXN0L3Jlc3RVcGRhdGVSZXF1ZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!****************************************************!*\
  !*** ./src/repositories/rest/restDeleteRequest.js ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = restUpdateRequest;\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__delivery__ = __webpack_require__(/*! ../../delivery */ 0);\n\n\nasync function restUpdateRequest(deliveryMethod, address, options, dataType, uid) {\n  if (uid) {\n    address += \"/\" + uid;\n  }\n\n  let data = await Object(__WEBPACK_IMPORTED_MODULE_0__delivery__[\"a\" /* default */])(deliveryMethod, address, options, dataType);\n\n  return data;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVwb3NpdG9yaWVzL3Jlc3QvcmVzdERlbGV0ZVJlcXVlc3QuanM/M2ZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGVsaXZlcnkgZnJvbSAnLi4vLi4vZGVsaXZlcnknO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiByZXN0VXBkYXRlUmVxdWVzdChkZWxpdmVyeU1ldGhvZCwgYWRkcmVzcywgb3B0aW9ucywgZGF0YVR5cGUsIHVpZCkge1xuICBpZiAodWlkKSB7XG4gICAgYWRkcmVzcyArPSBcIi9cIiArIHVpZDtcbiAgfVxuXG4gIGxldCBkYXRhID0gYXdhaXQgZGVsaXZlcnkoZGVsaXZlcnlNZXRob2QsIGFkZHJlc3MsIG9wdGlvbnMsIGRhdGFUeXBlKTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yZXBvc2l0b3JpZXMvcmVzdC9yZXN0RGVsZXRlUmVxdWVzdC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!*************************************************!*\
  !*** ./test/e2e/fetchRepository/dtos/Source.js ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("class Source {\n  constructor(name) {\n    if (name === undefined) {\n      throw new Error(\"The name parameter is required\");\n    }\n\n    this.name = name;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Source);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdGVzdC9lMmUvZmV0Y2hSZXBvc2l0b3J5L2R0b3MvU291cmNlLmpzPzFiZGYiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU291cmNlIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBuYW1lIHBhcmFtZXRlciBpcyByZXF1aXJlZFwiKTtcbiAgICB9XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNvdXJjZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdGVzdC9lMmUvZmV0Y2hSZXBvc2l0b3J5L2R0b3MvU291cmNlLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n");

/***/ })
/******/ ]);