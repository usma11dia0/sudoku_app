const numRows = 9;
const numCols = 9;

// マウスオーバー時に行と列をハイライト
function highlightCross(row, col, isHighlighted, target){
  for (let i = 0; i < numRows; i++){
    for(let j = 0; j < numCols; j++){
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

function inputCsvFile(file) {
  const reader = new FileReader();
  reader.onload = function (event) {
    const csvData = event.target.result;
    const arrayData = csvToArray(csvData);
    for (let i = 0; i < numRows; i++){
      for (let j = 0; j < numCols; j++){
        const cell = document.getElementById(`sudoku-input-cell-${i}-${j}`);
        cell.setAttribute("data-old-value",arrayData[i][j]);
        cell.textContent = arrayData[i][j];
      }
    }
  }
  reader.readAsText(file);
}


// 画面読み込み時に各盤面にイベントリスナーを付与
document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < numRows; i++){
    for (let j = 0; j < numCols; j++){
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

// 入力盤面 (csvファイルを読み込んで盤面に表示)
document.getElementById("input-button").addEventListener("click", async() =>{
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.csv';
  input.addEventListener('change',  (event) => {
    file = event.target.files[0];
    if (!file) {
      alert('csvファイルを選択してください');
      return;
    }
    inputCsvFile(file);
  });
  input.click();
})

// 出力盤面
document.getElementById("output-button").addEventListener("click", async() =>{
  const response = await fetch("http://localhost:8000");
  const answer = await response.json();
  // 解答を盤面に表示
  for (let i = 0; i < numRows; i++){
    for (let j = 0; j < numCols; j++){
      const cell = document.getElementById(`sudoku-output-cell-${i}-${j}`);
      cell.textContent = answer[i][j];
    }
  }
})

// 消去ボタン(入力盤面)
document.getElementById("delete-input-button").addEventListener("click", async() =>{ 
  for (let i = 0; i < numRows; i++){
    for (let j = 0; j < numCols; j++){
      const inputCell = document.getElementById(`sudoku-input-cell-${i}-${j}`);
      inputCell.textContent = '';
      inputCell.setAttribute("data-old-value",'');
    }
  }
})

// 消去ボタン(出力盤面)
document.getElementById("delete-output-button").addEventListener("click", async() =>{
  for (let i = 0; i < numRows; i++){
    for (let j = 0; j < numCols; j++){
      const outputCell = document.getElementById(`sudoku-output-cell-${i}-${j}`);
      outputCell.textContent = '';
    }
  }
})