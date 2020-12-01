/**
 * 输出二进制数中 1 的个数
 *
 * 让数字 1 不断左移与原数相与
 */

function NumberOf1(n) {
  let sum = 0;
  let flag = 1;
  let count = 32;
  while (--count >= 0) {
    flag & n && sum++;
    flag = flag << 1;
  }
  return sum;
}
