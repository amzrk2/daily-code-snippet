/**
 * fibonacci
 * @param {Number} n
 */
function Fibonacci(n) {
  let a = 0;
  let b = 1;
  while (n > 0) {
    // go right 1 time
    b = a + b; // a+b    => b
    a = b - a; // b(old) => a
    n--;
  }
  return a;
}

console.log(Fibonacci(0));
