/**
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * 例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
 * 由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。
 * 如果不存在则输出0。
 *
 * 若两数不同，则直接删除二者
 * 若某数存在超过半数，则最后必定会剩下在数组内
 * 若没有超过半数的数则算法不正确，需要判断
 */

/**
 *
 * @param {Array} numbers
 */
function MoreThanHalfNum_Solution(numbers) {
  const map = new Map();
  const length = numbers.length;
  for (let i = 0; i < length; i++) {
    let count = map.get(numbers[i]) || 0;
    if (++count * 2 > length) {
      return numbers[i];
    }
    map.set(numbers[i], count);
  }
  return 0;
}
