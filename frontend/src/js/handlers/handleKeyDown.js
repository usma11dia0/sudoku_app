export function handleKeyDown(event){
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