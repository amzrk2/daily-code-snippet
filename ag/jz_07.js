/**
 * fibonacci
 * @param {Number} n
 */
function Fibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  return Fibonacci(n - 2) + Fibonacci(n - 1);
}

console.log(Fibonacci(4));
