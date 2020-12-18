/**
 * 在一个长度为n的数组里的所有数字都在0到n-1的范围内。
 * 数组中某些数字是重复的，但不知道有几个数字是重复的。
 * 也不知道每个数字重复几次。请找出数组中第一个重复的数字。
 * 例如，如果输入长度为7的数组{2,3,1,0,2,5,3}，那么对应的输出是第一个重复的数字2。
 * @param {Array<Number>} numbers
 * @param {Array} duplication
 *
 * 返回描述：
 * 如果数组中有重复的数字，函数返回true，否则返回false。
 * 如果数组中有重复的数字，把重复的数字放到参数duplication[0]中。
 *
 * 1 hashmap
 * 2 in-place （任意一个，而不是第一个）
 * 数据的范围是0-n-1
 * 设置一个指针i指向开头0
 * 对于arr[i]进行判断，如果arr[i] == i，说明下标为i的数据正确的放在了该位置上，i++
 * 如果arr[i] != i, 说明没有正确放在位置上，那么我们就把arr[i]放在正确的位置上，
 * 也就是交换arr[i] 和arr[arr[i]]。交换之后，如果arr[i] ！= i, 继续交换。
 * 如果交换的过程中，arr[i] == arr[arr[i]]，说明遇到了重复值，返回即可。
 */

function duplicate(numbers, duplication) {
  if (!numbers.length) {
    return false;
  }

  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] === i) {
      i++;
      continue;
    }

    if (!swap(numbers, numbers[i], i)) {
      duplication[0] = numbers[i];
      return true;
    }
  }
  return false;
}

function swap(arr, a, b) {
  if (arr[a] !== arr[b]) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
    return true;
  } else {
    return false;
  }
}

duplicate([6, 3, 2, 0, 2, 5, 0]);
