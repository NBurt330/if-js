export function sum(a) {
  return function (b) {
    return a + b;
  };
}

export function changeDateFormat(date) {
  return date.split('-').reverse().join('.');
}
