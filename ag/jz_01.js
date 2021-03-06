/**
 * 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 *
 * input
 * 7,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]
 * output
 * true
 *
 * 条件遍历
 */

/**
 * 是否在当前数组查找
 * @param {number} target
 * @param {array} array
 */
function shouldFind(target, array) {
  if (array[0] > target || array[array.length - 1] < target) {
    return false;
  }
  return true;
}

/**
 * 查找
 * @param {number} target
 * @param {array} array
 */
function Find(target, array) {
  let status = false;
  array.forEach((arr) => {
    if (shouldFind(target, arr)) {
      if (arr.includes(target)) {
        status = true;
      }
    }
  });
  return status;
}
