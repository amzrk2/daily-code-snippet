let i =
  1 +
  {
    valueOf() {
      return 9;
    },
  };
console.log(i); // 10

let i = 1 + {};
console.log(i); // '1[object Object]'

let i = 0;
new Array(10).forEach(() => {
  i++;
}); // do not work on empty element
console.log(i); // 0
