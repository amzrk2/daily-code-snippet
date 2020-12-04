/**
 * @param {Array} pushV
 * @param {Array} popV
 */
function IsPopOrder(pushV, popV) {
  const stack = [];
  let i = 0;
  let j = 0;
  // 遍历入栈队列
  while (i < pushV.length) {
    if (pushV[i] !== popV[j]) {
      stack.push(pushV[i]);
      i++;
    } else {
      // 该元素刚入栈即出栈
      i++;
      j++;
      while (stack.length > 0 && stack[stack.length - 1] === popV[j]) {
        stack.pop();
        j++;
      }
    }
  }
  // 若入栈队列为空，临时栈依旧有元素，则失败
  return !(stack.length > 0);
}

console.log(IsPopOrder([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
