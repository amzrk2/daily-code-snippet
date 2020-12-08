/**
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * 例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
 * 由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。
 * 如果不存在则输出0。
 *
 * 设定一个栈，每次进入一个数
 * 若两数不同，则删除二者
 * 若两数相同，则再进入一个数
 * 若某数存在超过半数，则最后必定会剩下在场地内
 * 若没有超过半数的数则算法不正确，需要判断
 */

/**
 *
 * @param {Array} numbers
 */
function MoreThanHalfNum_Solution(numbers) {
  if (!numbers.length) {
    return 0;
  }

  let stack = [numbers[0]]; // 栈内数字

  for (let i = 0; i < numbers.length; i++) {
    if (stack.length === 0 || numbers[i] === stack[0]) {
      // 若栈为空或栈内数字与进入数字相同
      stack.unshift(numbers[i]);
    } else {
      // 栈内数字与进入数字不同，删除二者
      stack.shift();
    }
  }

  // 若有留下的数
  if (stack[0]) {
    // 超过半数检测
    let count = 0;
    numbers.forEach((val) => {
      val === stack[0] && count++;
    });
    return count * 2 > numbers.length ? stack[0] : 0;
  }
  return 0;
}
