import { handleKeyDown } from './handlers/handleKeyDown.js';
import { handleInput } from './handlers/handleInput.js';
import { highlightCross } from './utils/highlightCross.js';
import { inputCsvFile } from './utils/inputCsvFile.js';

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
  const response = await fetch("http://localhost:8000", {
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