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

// 盤面に行列ハイライトを付与
for (let i = 0; i < numRows; i++){
  for (let j = 0; j < numCols; j++){
    const inputCell = document.getElementById(`sudoku-input-cell-${i}-${j}`);
    inputCell.addEventListener("mouseover", () => highlightCross(i, j, true, "input"));
    inputCell.addEventListener("mouseout", () => highlightCross(i, j, false, "input"));
    const outputCell = document.getElementById(`sudoku-output-cell-${i}-${j}`);
    outputCell.addEventListener("mouseover", () => highlightCross(i, j, true, "output"));
    outputCell.addEventListener("mouseout", () => highlightCross(i, j, false, "output"));
  }
}

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

