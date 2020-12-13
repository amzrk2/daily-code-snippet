/**
 * 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。
 * 输入一个数组,求出这个数组中的逆序对的总数P。
 * 并将P对1000000007取模的结果输出。 即输出P%1000000007
 *
 * 归并排序的改进，把数据分成前后两个数组(递归分到每个数组仅有一个数据项)，
 * 合并数组，合并时，出现前面的数组值array[i]大于后面数组值array[j]时；则前面
 * 数组array[i]~array[mid]都是大于array[j]的，count += mid+1 - i
 */

const KMOD = 1000000007;
let COUNT = 0; // 逆序对统计

/**
 * @param {Array} data
 */
function InversePairs(data) {
  COUNT && (COUNT = 0); // 清空上次结果
  if (!data.length) {
    return 0;
  }
  // 排序过程使用的数组
  const workArr = new Array(data.length);
  _inversePairs(data, workArr, 0, data.length - 1);
  return COUNT;
}

/**
 * @param {Array} arr
 * @param {Array} workArr
 * @param {Number} l
 * @param {Number} r
 */
function _inversePairs(arr, workArr, l, r) {
  if (l >= r) {
    return;
  }
  const m = l + ((r - l) >> 1);
  _inversePairs(arr, workArr, l, m);
  _inversePairs(arr, workArr, m + 1, r);
  _mergeTwoSortedArr(arr, workArr, l, m, r);
}

/**
 * @param {Array} arr
 * @param {Array} workArr
 * @param {Number} l
 * @param {Number} m
 * @param {Number} r
 */
function _mergeTwoSortedArr(arr, workArr, l, m, r) {
  let i = l,
    j = m + 1; // 从左右两子数组的第一个元素开始
  let k = 0; // 工作数组下标从 l 开始到 r 结束

  // 左右子数组都未遍历完
  while (i <= m && j <= r) {
    if (arr[i] > arr[j]) {
      // 放入元素
      workArr[k++] = arr[j++];
      // 由子数组有序可得 arr[i]~arr[m] 都大于 arr[j]
      COUNT += m - i + 1;
      if (COUNT >= KMOD) {
        COUNT %= KMOD;
      }
    } else {
      workArr[k++] = arr[i++];
    }
  }

  // 有一个已经遍历完成，添加另一个
  while (i <= m) {
    workArr[k++] = arr[i++];
  }
  while (j <= r) {
    workArr[k++] = arr[j++];
  }

  for (k = 0, i = l; i <= r; ++i, ++k) {
    arr[i] = workArr[k];
  }
}

InversePairs([1, 2, 7, 0]);
