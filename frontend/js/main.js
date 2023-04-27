document.getElementById("sudoku-button").addEventListener("click", async() =>{
  const response = await fetch("http://localhost:8000");
  // const answer = await response.json();
  const answer = await response.text();
  // document.getElementById("test").value = answer;
  document.getElementById("test").innerText = answer;
  // // 解答を盤面に表示
  // for (let i = 0; i < 9; i++){
  //   for (let j = 0; j < 9; j++){
  //     document.getElementById(`sudoku-cell-${i}-${j}`).value = answer[i][j];
  //   }
  // }
})
