// function rangeFunc(a, b) {
//   return setInterval(function (a, b) {
//     for (i = a; i < b + 1; i++) {
//       console.log(i);
//     }
//   }, 1000, a, b);
// }

// Функция некорректно решает поставленную задачу. Например, при вызове rangeFunc(1, 3) в консоль должны быть выведены только 3 числа: 1 2 3, каждое число через секунду после предыдущего. Сейчас функция выводит их постоянно, т.к. интервал не останавливается. Верный вариант решения:

function rangeFunc(begin, end) {
  let current = begin;

  let timerId = setInterval(function() {
    console.log(current);
    if (current == end) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

rangeFunc(5, 15);
