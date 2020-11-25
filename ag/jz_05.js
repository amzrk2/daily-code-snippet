/**
 * 用两个栈来实现一个队列，完成队列的 push 和 pop 操作
 * 队列中的元素为 int 类型
 */

class Stack {
  constructor() {
    this._stack = [];
  }
  push(...args) {
    this._stack.push(...args);
  }
  pop() {
    return this._stack.pop();
  }
  get length() {
    return this._stack.length;
  }
}
const stackIn = new Stack();
const stackOut = new Stack();

/**
 * simulate query push in
 * @param {Number} node
 */
function push(node) {
  stackIn.push(node);
}

/**
 * simulate query shift out
 */
function pop() {
  if (stackOut.length <= 0) {
    while (stackIn.length > 0) {
      stackOut.push(stackIn.pop());
    }
  }
  return stackOut.pop();
}

push(1);
push(2);
console.log(pop());
console.log(pop());
push(4);
console.log(pop());
push(5);
console.log(pop());
console.log(pop());
