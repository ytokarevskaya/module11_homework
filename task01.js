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