/**
 * 输入n个整数，找出其中最小的K个数。
 * 例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4。
 *
 *
 * 输入
 * [4,5,1,6,2,7,3,8],4
 * 复制
 * [1,2,3,4]
 */

/**
 * @param {Array} input
 * @param {Number} k
 */
function GetLeastNumbers_Solution(input, k) {
  const arr = [...input];
  if (!arr.length || k === 0) {
    return [];
  }
  arr.sort((a, b) => a - b);
  if (k >= arr.length) {
    return arr;
  }
  return arr.slice(0, k);
}

GetLeastNumbers_Solution([4, 5, 1, 6, 2, 7, 3, 8], 10);
