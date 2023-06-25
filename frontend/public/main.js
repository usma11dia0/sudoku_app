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

/***/ "./src/css/css-reset.css":
/*!*******************************!*\
  !*** ./src/css/css-reset.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://frontend/./src/css/css-reset.css?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://frontend/./src/css/style.css?");

/***/ }),

/***/ "./src/js/handlers/handleInput.js":
/*!****************************************!*\
  !*** ./src/js/handlers/handleInput.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleInput: () => (/* binding */ handleInput)\n/* harmony export */ });\nfunction handleInput(event){\n    let cell = event.target;\n    let oldValue = cell.getAttribute(\"data-old-value\");\n    let newValue = cell.textContent;\n  \n    // 数字かどうかを判定\n    function isNumber(key) {\n      return key >= '0' && key <= '9';\n    }\n  \n    // 値が1文字の数字であることを確認\n     function isValidInput(value) {\n      return value.length === 1 && isNumber(value);\n    }\n  \n    // 半角数字以外または数字1つ以上が入力された場合、古い値に戻す\n    if (!isValidInput(newValue)) {\n      cell.textContent = oldValue;\n    } else {\n      cell.setAttribute('data-old-value', newValue);\n    }\n  }\n\n\n//# sourceURL=webpack://frontend/./src/js/handlers/handleInput.js?");

/***/ }),

/***/ "./src/js/handlers/handleKeyDown.js":
/*!******************************************!*\
  !*** ./src/js/handlers/handleKeyDown.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleKeyDown: () => (/* binding */ handleKeyDown)\n/* harmony export */ });\nfunction handleKeyDown(event){\n    let cell =event.target\n    let newValue = event.key;\n  \n    // エンターキーが押された場合、現在の値を確定\n    if (newValue === 'Enter') {\n      event.preventDefault();\n      cell.blur(); // セルからフォーカスを外す\n      return;\n    }\n  \n    // Backspace/Deleteの処理\n    if (newValue === 'Backspace' || newValue === 'Delete') {\n      event.preventDefault();\n      cell.textContent = '';\n      return;\n    }\n  }\n\n//# sourceURL=webpack://frontend/./src/js/handlers/handleKeyDown.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _handlers_handleKeyDown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/handleKeyDown.js */ \"./src/js/handlers/handleKeyDown.js\");\n/* harmony import */ var _handlers_handleInput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/handleInput.js */ \"./src/js/handlers/handleInput.js\");\n/* harmony import */ var _utils_highlightCross_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/highlightCross.js */ \"./src/js/utils/highlightCross.js\");\n/* harmony import */ var _utils_inputCsvFile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/inputCsvFile.js */ \"./src/js/utils/inputCsvFile.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_css_reset_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/css-reset.css */ \"./src/css/css-reset.css\");\n\n\n\n\n\n\n\n// 画面読み込み時に各盤面にイベントリスナーを付与\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  for (let i = 0; i < 9; i++){\n    for (let j = 0; j < 9; j++){\n      const inputCell = document.getElementById(`sudoku-input-cell-${i}-${j}`);\n      // 入力盤面\n      inputCell.addEventListener(\"mouseover\", () => (0,_utils_highlightCross_js__WEBPACK_IMPORTED_MODULE_2__.highlightCross)(i, j, true, \"input\"));\n      inputCell.addEventListener(\"mouseout\", () => (0,_utils_highlightCross_js__WEBPACK_IMPORTED_MODULE_2__.highlightCross)(i, j, false, \"input\"));\n      inputCell.setAttribute(\"data-old-value\",'');\n      inputCell.addEventListener(\"input\", _handlers_handleInput_js__WEBPACK_IMPORTED_MODULE_1__.handleInput);\n      inputCell.addEventListener(\"keydown\", _handlers_handleKeyDown_js__WEBPACK_IMPORTED_MODULE_0__.handleKeyDown);\n      // 出力盤面\n      const outputCell = document.getElementById(`sudoku-output-cell-${i}-${j}`);\n      outputCell.addEventListener(\"mouseover\", () => (0,_utils_highlightCross_js__WEBPACK_IMPORTED_MODULE_2__.highlightCross)(i, j, true, \"output\"));\n      outputCell.addEventListener(\"mouseout\", () => (0,_utils_highlightCross_js__WEBPACK_IMPORTED_MODULE_2__.highlightCross)(i, j, false, \"output\"));\n    }\n  }\n})\n\n// 画面読み込み時に各サンプル問題ボタンにイベントリスナーを付与\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n  const buttons = document.querySelectorAll('.problem-button')\n\n  buttons.forEach(function (button) {\n    button.addEventListener('click', async function() {\n      // ボタンのdata-button-number属性を取得\n      const buttonNumber = await this.dataset.buttonNumber;\n      \n      // サンプル問題盤面の値を取得\n      try {\n        const response = await fetch(`http://localhost:8000/api/problem/${buttonNumber}`)\n        if (!response.ok) {\n          throw new Error(`HTTP error status: ${response.status}`);\n        }\n        const problemData = await response.json();\n        \n        // サンプル問題盤面を入力\n        // 文字列を数値の2次元配列に変換\n        let formattedProblemData = [];\n        for (let i = 0; i < 9; i++){\n          let row = [];\n          for (let j = 0; j < 9; j++){\n            // 文字を数値に変換し、行の配列に追加\n            let number = parseInt(problemData[i * 9 + j])\n            // 0の場合は空文字に変換\n            number = number === 0 ? '' : number;\n            row.push(number);\n          }\n          // 行を2次元配列に追加\n          formattedProblemData.push(row);\n        }\n\n        // 盤面に入力\n        if (formattedProblemData) {\n          for (let i = 0; i < 9; i++){\n            for (let j = 0; j < 9; j++){\n              const cell = document.getElementById(`sudoku-input-cell-${i}-${j}`);\n              cell.textContent = formattedProblemData[i][j];\n            }\n          }\n        } else {\n          alert(\"問題が見つかりませんでした\");\n        }\n      } catch (error) {\n        console.log(`Error fetching data: ${error}`);\n      }\n    })\n  })\n})\n\n// 入力ボタン (csvファイルを読み込んで盤面に表示)\ndocument.getElementById(\"input-button\").addEventListener(\"click\", async() => {\n  const input = document.createElement('input');\n  input.type = 'file';\n  input.accept = '.csv';\n  input.addEventListener('change',  (event) => {\n    let file = event.target.files[0];\n    if (!file) {\n      alert('csvファイルを選択してください');\n      return;\n    }\n    (0,_utils_inputCsvFile_js__WEBPACK_IMPORTED_MODULE_3__.inputCsvFile)(file);\n  });\n  input.click();\n})\n\n// 出力ボタン (入力盤面の値を送信して解答を取得)\ndocument.getElementById(\"output-button\").addEventListener(\"click\", async() => {\n  // 入力盤面の値を取得\n  const inputValues = [];\n  for (let i = 0; i < 9; i++){\n    const row = [];\n    for (let j = 0; j < 9; j++){\n      const inputCell = document.getElementById(`sudoku-input-cell-${i}-${j}`);\n      const cellValue = inputCell.textContent;\n      // 空文字の場合に0を代入\n      row.push(cellValue === \"\" ? 0 : parseInt(cellValue, 10));\n    }\n    inputValues.push(row);\n  }\n  \n  // 入力盤面の値を送信\n  const response = await fetch(\"http://localhost:8000/api\", {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\",\n    },\n    body: JSON.stringify(inputValues), // JavaScriptオブジェクトをJSON形式の文字列へ変換(シリアライズ化)\n  });\n\n  // 解答を取得\n  const answer = await response.json();\n\n  // 解答を盤面に表示\n  if (answer) {\n    for (let i = 0; i < 9; i++){\n      for (let j = 0; j < 9; j++){\n        const cell = document.getElementById(`sudoku-output-cell-${i}-${j}`);\n        cell.textContent = answer[i][j];\n      }\n    }\n  } else {\n    alert(\"解答が見つかりませんでした\");\n  }\n})\n\n// 消去ボタン(入力盤面)\ndocument.getElementById(\"delete-input-button\").addEventListener(\"click\", async() =>{ \n  for (let i = 0; i < 9; i++){\n    for (let j = 0; j < 9; j++){\n      const inputCell = document.getElementById(`sudoku-input-cell-${i}-${j}`);\n      inputCell.textContent = '';\n      inputCell.setAttribute(\"data-old-value\",'');\n    }\n  }\n})\n\n// 消去ボタン(出力盤面)\ndocument.getElementById(\"delete-output-button\").addEventListener(\"click\", async() =>{\n  for (let i = 0; i < 9; i++){\n    for (let j = 0; j < 9; j++){\n      const outputCell = document.getElementById(`sudoku-output-cell-${i}-${j}`);\n      outputCell.textContent = '';\n    }\n  }\n})\n\n//# sourceURL=webpack://frontend/./src/js/index.js?");

/***/ }),

/***/ "./src/js/utils/csvToArray.js":
/*!************************************!*\
  !*** ./src/js/utils/csvToArray.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   csvToArray: () => (/* binding */ csvToArray)\n/* harmony export */ });\nfunction csvToArray(csvData) {\n    const rows = csvData.split('\\n');\n    const arrayData = [];\n  \n    for (let i = 0; i < rows.length; i++) {\n        const row = rows[i].split(',');\n        for (let j = 0; j < row.length; j++) {\n            row[j] = row[j].trim();\n        }\n        arrayData.push(row);\n    }\n    return arrayData;\n  }\n  \n\n//# sourceURL=webpack://frontend/./src/js/utils/csvToArray.js?");

/***/ }),

/***/ "./src/js/utils/highlightCross.js":
/*!****************************************!*\
  !*** ./src/js/utils/highlightCross.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   highlightCross: () => (/* binding */ highlightCross)\n/* harmony export */ });\n// マウスオーバー時に行と列をハイライト\nfunction highlightCross(row, col, isHighlighted, target){\n    for (let i = 0; i < 9; i++){\n      for(let j = 0; j < 9; j++){\n        if (i == row || j == col){\n          const cell = document.getElementById(`sudoku-${target}-cell-${i}-${j}`);\n          if (isHighlighted){\n            cell.classList.add(\"highlighted\");\n          } else {\n            cell.classList.remove(\"highlighted\");\n          }\n        }\n      }\n    }   \n  }\n\n//# sourceURL=webpack://frontend/./src/js/utils/highlightCross.js?");

/***/ }),

/***/ "./src/js/utils/inputCsvFile.js":
/*!**************************************!*\
  !*** ./src/js/utils/inputCsvFile.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   inputCsvFile: () => (/* binding */ inputCsvFile)\n/* harmony export */ });\n/* harmony import */ var _csvToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./csvToArray.js */ \"./src/js/utils/csvToArray.js\");\n\n\nfunction inputCsvFile(file) {\n    const reader = new FileReader();\n    reader.onload = function (event) {\n      const csvData = event.target.result;\n      const arrayData = (0,_csvToArray_js__WEBPACK_IMPORTED_MODULE_0__.csvToArray)(csvData);\n      for (let i = 0; i < 9; i++){\n        for (let j = 0; j < 9; j++){\n          const cell = document.getElementById(`sudoku-input-cell-${i}-${j}`);\n          cell.setAttribute(\"data-old-value\",arrayData[i][j]);\n          cell.textContent = arrayData[i][j];\n        }\n      }\n    }\n    reader.readAsText(file);\n  }\n\n//# sourceURL=webpack://frontend/./src/js/utils/inputCsvFile.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;