document.getElementById("sudoku-button").addEventListener("click", async() =>{
  const response = await fetch("http://localhost:8000");
  const answer = await response.json();
  // 解答を盤面に表示
  for (let i = 0; i < 9; i++){
    for (let j = 0; j < 9; j++){
      document.getElementById(`cell-${i}-${j}`).value = answer[i][j];
    }
  }
})
