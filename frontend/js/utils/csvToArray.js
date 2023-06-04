export function csvToArray(csvData) {
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
  