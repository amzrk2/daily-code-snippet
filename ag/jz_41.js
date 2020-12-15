/**
 * 输出所有和为S的连续正数序列。序列内按照从小至大的顺序，序列间按照开始数字从小到大的顺序
 *
 * 滑动窗口
 *
 * 用窗口的左边界i和右边界j来唯一表示一个窗口，
 * 窗口始终从左往右移动，这也表明左边界i和右边界j始终会往后移动，而不会往左移动。
 *
 * 左闭右开区间
 * 扩大窗口，j++
 * 缩小窗口，i++
 *
 * 1 初始化，i=1,j=1, 表示窗口大小为0
 * 2 如果窗口中值的和小于目标值sum， 表示需要扩大窗口，j += 1
 * 3 否则，如果窗口值和大于目标值sum，表示需要缩小窗口，i += 1
 * 4 否则，等于目标值，存结果，缩小窗口，继续进行步骤2,3,4
 *
 * 窗口左边界走到sum的一半即可终止，因为题目要求至少包含2个数
 */

function FindContinuousSequence(sum) {
  let i = 1,
    j = 1;
  const results = [];
  while (i <= sum >> 1) {
    const res = addAll(i, j);
    if (res < sum) {
      j++;
      continue;
    } else if (res > sum) {
      i++;
      continue;
    } else {
      const arr = [];
      for (let k = i; k < j; k++) {
        arr.push(k);
      }
      results.push(arr);
      i++;
      continue;
    }
  }
  return results;
}

/**
 * add start to end, end not included
 * @param {Number} start
 * @param {Number} end
 */
function addAll(start, end) {
  let res = 0;
  for (let i = start; i < end; i++) {
    res += i;
  }
  return res;
}

FindContinuousSequence(9);
