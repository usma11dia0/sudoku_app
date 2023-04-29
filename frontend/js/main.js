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

// 
function handleInput(event){
  let cell = event.target;
  let oldValue = cell.getAttribute("data-old-value");
  let newValue = cell.textContent;

  // 数字かどうかを判定
  function isNumber(key) {
    return key >= '0' && key <= '9';
  }

  // 半角数字以外が入力された場合、古い値に戻す
  if (!newValue.split('').every(isNumber)) {
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

  // Backspaceの処理
  if (newValue === 'Backspace') {
    event.preventDefault();
    cell.textContent = '';
    return;
  }
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

// 入力盤面
document.getElementById("input-button").addEventListener("click", async() =>{
  // const response = await fetch("http://localhost:8000");
  // const answer = await response.json();
  // console.log(answer)
  // 解答を盤面に表示
  for (let i = 0; i < numRows; i++){
    for (let j = 0; j < numCols; j++){
      const cell = document.getElementById(`sudoku-input-cell-${i}-${j}`);
      // cell.innerHTML = answer[i][j];
    }
  }
})

// 出力盤面
document.getElementById("output-button").addEventListener("click", async() =>{
  const response = await fetch("http://localhost:8000");
  const answer = await response.json();
  console.log(answer)
  // 解答を盤面に表示
  for (let i = 0; i < numRows; i++){
    for (let j = 0; j < numCols; j++){
      const cell = document.getElementById(`sudoku-output-cell-${i}-${j}`);
      cell.innerHTML = answer[i][j];
    }
  }
})

