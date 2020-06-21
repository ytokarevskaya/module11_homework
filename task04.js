function rangeFunc(a, b) {
  return setInterval(function (a, b) {
    for (i = a; i < b + 1; i++) {
      console.log(i);
    }
  }, 1000, a, b);
}