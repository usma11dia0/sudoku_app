/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/handlers/handleKeyDown.js
function handleKeyDown(event){
    let cell =event.target
    let newValue = event.key;
  
    // エンターキーが押された場合、現在の値を確定
    if (newValue === 'Enter') {
      event.preventDefault();
      cell.blur(); // セルからフォーカスを外す
      return;
    }
  
    // Backspace/Deleteの処理
    if (newValue === 'Backspace' || newValue === 'Delete') {
      event.preventDefault();
      cell.textContent = '';
      return;
    }
  }
;// CONCATENATED MODULE: ./src/js/handlers/handleInput.js
function handleInput(event){
    let cell = event.target;
    let oldValue = cell.getAttribute("data-old-value");
    let newValue = cell.textContent;
  
    // 数字かどうかを判定
    function isNumber(key) {
      return key >= '0' && key <= '9';
    }
  
    // 値が1文字の数字であることを確認
     function isValidInput(value) {
      return value.length === 1 && isNumber(value);
    }
  
    // 半角数字以外または数字1つ以上が入力された場合、古い値に戻す
    if (!isValidInput(newValue)) {
      cell.textContent = oldValue;
    } else {
      cell.setAttribute('data-old-value', newValue);
    }
  }

;// CONCATENATED MODULE: ./src/js/utils/highlightCross.js
// マウスオーバー時に行と列をハイライト
function highlightCross(row, col, isHighlighted, target){
    for (let i = 0; i < 9; i++){
      for(let j = 0; j < 9; j++){
        if (i == row || j == col){
          const cell = document.getElementById(`sudoku-${target}-cell-${i}-${j}`);
          if (isHighlighted){
            cell.classList.add("highlighted");
          } else {
            cell.classList.remove("highlighted");
          }
        }
      }
    }   
  }
;// CONCATENATED MODULE: ./src/js/utils/csvToArray.js
function csvToArray(csvData) {
    const rows = csvData.split('\n');
    const arrayData = [];
  
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i].split(',');
        for (let j = 0; j < row.length; j++) {
            row[j] = row[j].trim();
        }
        arrayData.push(row);
    }
    return arrayData;
  }
  
;// CONCATENATED MODULE: ./src/js/utils/inputCsvFile.js


function inputCsvFile(file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const csvData = event.target.result;
      const arrayData = csvToArray(csvData);
      for (let i = 0; i < 9; i++){
        for (let j = 0; j < 9; j++){
          const cell = document.getElementById(`sudoku-input-cell-${i}-${j}`);
          cell.setAttribute("data-old-value",arrayData[i][j]);
          cell.textContent = arrayData[i][j];
        }
      }
    }
    reader.readAsText(file);
  }
;// CONCATENATED MODULE: ./src/js/index.js







// 画面読み込み時に各盤面にイベントリスナーを付与
document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 9; i++){
    for (let j = 0; j < 9; j++){
      const inputCell = document.getElementById(`sudoku-input-cell-${i}-${j}`);
      // 入力盤面
      inputCell.addEventListener("mouseover", () => highlightCross(i, j, true, "input"));
      inputCell.addEventListener("mouseout", () => highlightCross(i, j, false, "input"));
      inputCell.setAttribute("data-old-value",'');
      inputCell.addEventListener("input", handleInput);
      inputCell.addEventListener("keydown", handleKeyDown);
      // 出力盤面
      const outputCell = document.getElementById(`sudoku-output-cell-${i}-${j}`);
      outputCell.addEventListener("mouseover", () => highlightCross(i, j, true, "output"));
      outputCell.addEventListener("mouseout", () => highlightCross(i, j, false, "output"));
    }
  }
})

// 画面読み込み時に各サンプル問題ボタンにイベントリスナーを付与
document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll('.problem-button')

  buttons.forEach(function (button) {
    button.addEventListener('click', async function() {
      // ボタンのdata-button-number属性を取得
      const buttonNumber = await this.dataset.buttonNumber;
      
      // サンプル問題盤面の値を取得
      try {
        const response = await fetch(`http://localhost:8000/api/problem/${buttonNumber}`)
        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }
        const problemData = await response.json();
        
        // サンプル問題盤面を入力
        // 文字列を数値の2次元配列に変換
        let formattedProblemData = [];
        for (let i = 0; i < 9; i++){
          let row = [];
          for (let j = 0; j < 9; j++){
            // 文字を数値に変換し、行の配列に追加
            let number = parseInt(problemData[i * 9 + j])
            // 0の場合は空文字に変換
            number = number === 0 ? '' : number;
            row.push(number);
          }
          // 行を2次元配列に追加
          formattedProblemData.push(row);
        }

        // 盤面に入力
        if (formattedProblemData) {
          for (let i = 0; i < 9; i++){
            for (let j = 0; j < 9; j++){
              const cell = document.getElementById(`sudoku-input-cell-${i}-${j}`);
              cell.textContent = formattedProblemData[i][j];
            }
          }
        } else {
          alert("問題が見つかりませんでした");
        }
      } catch (error) {
        console.log(`Error fetching data: ${error}`);
      }
    })
  })
})

// 入力ボタン (csvファイルを読み込んで盤面に表示)
document.getElementById("input-button").addEventListener("click", async() => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.csv';
  input.addEventListener('change',  (event) => {
    let file = event.target.files[0];
    if (!file) {
      alert('csvファイルを選択してください');
      return;
    }
    inputCsvFile(file);
  });
  input.click();
})

// 出力ボタン (入力盤面の値を送信して解答を取得)
document.getElementById("output-button").addEventListener("click", async() => {
  // 入力盤面の値を取得
  const inputValues = [];
  for (let i = 0; i < 9; i++){
    const row = [];
    for (let j = 0; j < 9; j++){
      const inputCell = document.getElementById(`sudoku-input-cell-${i}-${j}`);
      const cellValue = inputCell.textContent;
      // 空文字の場合に0を代入
      row.push(cellValue === "" ? 0 : parseInt(cellValue, 10));
    }
    inputValues.push(row);
  }
  
  // 入力盤面の値を送信
  const response = await fetch("http://localhost:8000/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputValues), // JavaScriptオブジェクトをJSON形式の文字列へ変換(シリアライズ化)
  });

  // 解答を取得
  const answer = await response.json();

  // 解答を盤面に表示
  if (answer) {
    for (let i = 0; i < 9; i++){
      for (let j = 0; j < 9; j++){
        const cell = document.getElementById(`sudoku-output-cell-${i}-${j}`);
        cell.textContent = answer[i][j];
      }
    }
  } else {
    alert("解答が見つかりませんでした");
  }
})

// 消去ボタン(入力盤面)
document.getElementById("delete-input-button").addEventListener("click", async() =>{ 
  for (let i = 0; i < 9; i++){
    for (let j = 0; j < 9; j++){
      const inputCell = document.getElementById(`sudoku-input-cell-${i}-${j}`);
      inputCell.textContent = '';
      inputCell.setAttribute("data-old-value",'');
    }
  }
})

// 消去ボタン(出力盤面)
document.getElementById("delete-output-button").addEventListener("click", async() =>{
  for (let i = 0; i < 9; i++){
    for (let j = 0; j < 9; j++){
      const outputCell = document.getElementById(`sudoku-output-cell-${i}-${j}`);
      outputCell.textContent = '';
    }
  }
})
/******/ })()
;