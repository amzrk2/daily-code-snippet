/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序。
 * 使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分。
 * 并保证奇数和奇数，偶数和偶数之间的相对位置不变。
 *
 * 解法
 * 一次遍历，找出偶数插入数组后面
 */

function reOrderArray(array) {
  let length = array.length;
  let i = 0;
  while (length-- > 0) {
    if (array[i] % 2 === 0) {
      array.push(array[i]);
      array.splice(i, 1);
    } else {
      i++;
    }
  }
  return array;
}

console.log(reOrderArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
