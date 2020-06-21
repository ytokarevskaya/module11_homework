function firstFunc(firstNum) {
  return function (secondNum) {
    return firstNum + secondNum;
  };
}

const result = firstFunc(1);
console.log(result(2));