function simpleNum(num) {
  if (num > 1000) {
    return "Данные не верны";
  } else {
    let result;
    if (num === 0 || num === 1) {
      result = `Число ${num} не является простым`;
    } else if (num === 2) {
      result = `Число ${num} простое`;
    } else {
      for (let i = 2; i < num; i++) {
        if (num === i + 1) {
          result = `Число ${num} простое`;
        } else if (num % i === 0) {
          result = `Число ${num} не является простым`;
          break;
        }
      }
    }
    return result;
  }
}