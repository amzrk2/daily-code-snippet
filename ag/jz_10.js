/**
 * 我们可以用 2*1 的小矩形横着或者竖着去覆盖更大的矩形。
 * 请问用 n 个 2*1 的小矩形无重叠地覆盖一个 2*n 的大矩形，总共有多少种方法？
 * 比如 n=3 时，2*3 的矩形块有 3 种覆盖方法。
 *
 * n=1 - 只有 1 种
 * n=2 - 2 种
 * n=3 - 3 种
 * n=4 - 在 n=3 的 3 种情况下右侧继续加一个竖着的小矩形，共 3 种
 *     - 在 n=2 的 2 种情况下右侧继续加两个横着的小矩形，共 2 种
 *
 * 得到 f(n) = f(n-1) + f(n-2)
 */

function rectCover(number) {
  if (number === 0) {
    return 0;
  }
  return fib(number + 1);
}

// 0 1 1 2 3 5
function fib(n) {
  let a = 0;
  let b = 1;
  while (n > 0) {
    b = a + b;
    a = b - a;
    n--;
  }
  return a;
}
