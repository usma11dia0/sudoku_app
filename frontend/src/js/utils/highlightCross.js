// マウスオーバー時に行と列をハイライト
export function highlightCross(row, col, isHighlighted, target){
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