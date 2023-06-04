import { csvToArray } from './csvToArray.js';

export function inputCsvFile(file) {
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