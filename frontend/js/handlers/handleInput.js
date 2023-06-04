export function handleInput(event){
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
