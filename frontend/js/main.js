document.getElementById("output-button").addEventListener("click", async() =>{
  const response = await fetch("http://localhost:8000");
  const answer = await response.json();
  console.log(answer)
  // 解答を盤面に表示
  for (let i = 0; i < 9; i++){
    for (let j = 0; j < 9; j++){
      document.getElementById(`sudoku-output-cell-${i}-${j}`).innerHTML = answer[i][j];
    }
  }
})
