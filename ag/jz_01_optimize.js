/**
 * 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 *
 * input
 * 7,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]
 * output
 * true
 */

/**
 * 检查元素
 * @param {number} target
 * @param {array} array
 */
function checkElement(target, array, row, col, length) {
  const el = array[row][col];
  console.log(`Checking (${row}, ${col}) = ${el}`);
  if (!el) {
    return false;
  }
  // if find
  if (el === target) {
    return true;
  }
  // if smaller than target
  if (el < target) {
    // check first element next line
    if (!array[row + 1] || array[row + 1][0] > target) {
      return false;
    } else {
      return checkElement(target, array, row + 1, length - 1, length);
    }
  }
  // if above target
  if (el > target) {
    return checkElement(target, array, row, col - 1, length);
  }
  return false;
}

/**
 * 查找
 * @param {number} target
 * @param {array} array
 */
function Find(target, array) {
  let row = 0;
  let length = array[0].length;
  return checkElement(target, array, row, length - 1, length);
}

console.log(
  Find(7, [
    [1, 2, 8, 9],
    [2, 4, 9, 12],
    [4, 7, 10, 13],
    [6, 8, 11, 15],
  ])
);
console.log(
  Find(7, [
    [8, 9, 18, 19],
    [12, 14, 19, 22],
  ])
);
console.log(
  Find(7, [
    [1, 2, 3],
    [3, 4, 6],
  ])
);
