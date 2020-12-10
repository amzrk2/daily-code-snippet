/**
 * 输入一个整型数组，数组里有正数也有负数。
 * 数组中的一个或连续多个整数组成一个子数组。
 * 求所有子数组的和的最大值。要求时间复杂度为 O(n)。
 *
 * 输入的数组为{1,-2,3,10,—4,7,2,-5}，和最大的子数组为{3,10,-4,7,2}，因此输出为该子数组的和 18。
 *
 * 定义状态数组 dp[i] 的含义：以 i 结尾的连续子数组的最大和
 * 初始情况：dp[0] = array[0]
 * 若 dp[i] = max(array[i], array[i]+dp[i-1])
 * 即比较仅 array[i] 这一项的数组和 i-1结尾加上这一项 两者的大小
 */

function FindGreatestSumOfSubArray(array) {
  const dp = [];
  dp.push(array[0]);
  let res = dp[0];

  for (let i = 1; i < array.length; i++) {
    dp.push(Math.max(array[i], array[i] + dp[i - 1]));
    if (dp[i] > res) {
      res = dp[i];
    }
  }
  return res;
}
