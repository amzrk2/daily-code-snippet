/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。
 * 求该青蛙跳上一个n级的台阶总共有多少种跳法。
 * （先后次序不同算不同的结果）
 *
 * input
 * 3
 * output
 * 4
 *
 * 假设跳到 n 级台阶有 f(n) 种方法。根据题目，青蛙在跳上 n 级时有 n-1 种方法：
 * - 从 n-1 级跳 1 级上来
 * - 从 n-2 级跳 2 级上来
 * - ...
 * - 从 n-(n-1) 级跳 n-1 级上来
 * 即 f(n) = f(n-1) + f(n-2) + ... + f(1)
 *
 * 又 f(n-1) = f(n-2) + f(n-3) + ... + f(1)
 * 所以 f(n) = f(n-1) + f(n-1) = 2 * f(n-1)
 *
 * 所以：
 * - f(n) = 2 * f(n-1)
 * - f(n-1) = 2 * f(n-2)
 * 即 f(n) = 2 * 2 * f(n-2)
 *
 * 类推至 f(n) = 2 * 2 * ... * 2 * f(1)
 * 所以 f(n) = 2 * 2 * ... * 2 * f(1) = 2^(n-1)
 */
function jumpFloorII(number) {
  return 2 ** (number - 1); // Math.pow(2, number - 1)
}
