const someArray = [
  1,
  "1",
  2,
  3,
  4,
  5,
  "abc",
  [1, "a"],
  true,
  null,
  0,
  undefined,
  NaN,
  Infinity,
];

function onlyNumbers(elem) {
  if (typeof elem === "number" && isFinite(elem)) {
    if (elem == 0) {
      console.log("It's a 0");
    } else if (elem % 2 == 0) {
      console.log("Element " + elem + " is EVEN");
    } else {
      console.log("Element " + elem + " is ODD");
    }
  }
}

someArray.forEach((elem) => {
  onlyNumbers(elem);
});

// Задание выполнено верно, однако в данном случае (т.к. мы точно знаем из задания, что будем работать именно с массивом) было бы лучше написать функцию, которая обрабатывает целый массив, а не каждый элемент. Таким образом она бы вызывалась только один раз, а сейчас функция вызывается на каждом элементе массива. Например можно было бы сделать так:

function printOnlyNumbers(arr) {
  arr.forEach(elem => {
    if (typeof elem === "number" && isFinite(elem)) {
      if (elem == 0) {
        console.log("It's a 0");
      } else if (elem % 2 == 0) {
        console.log("Element " + elem + " is EVEN");
      } else {
        console.log("Element " + elem + " is ODD");
      }
    }
  })
}

printOnlyNumbers(someArray);