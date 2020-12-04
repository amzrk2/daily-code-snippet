/**
 * 定义栈的数据结构
 * 请在该类型中实现一个能够得到栈中所含最小元素的min函数
 * 时间复杂度应为 O(1)
 */

const stack = [];
const minStack = []; // 栈顶最小的辅助栈

function push(node) {
  stack.push(node);
  if (minStack.length === 0 || node <= minStack[minStack.length - 1]) {
    minStack.push(node);
  }
}
function pop() {
  if (stack.length > 0) {
    const node = stack.pop();
    if (node === minStack[minStack.length - 1]) {
      minStack.pop();
    }
    return node;
  }
}
function top() {
  return stack[stack.length - 1];
}
function min() {
  return minStack[minStack.length - 1];
}
