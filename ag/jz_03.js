/**
 * 输入一个链表，按链表从尾到头的顺序返回一个 ArrayList
 * input
 * {67,0,24,58}
 * output
 * [58,24,0,67]
 */

const { List } = require('./constructor/List');

const list = new List([67, 0, 24, 58]);
console.log(list);

let arr = [];

/**
 * @param {ListNode} node
 */
function addCurrentNode(node) {
  if (!node) {
    return;
  }
  arr.unshift(node.val);
  return addCurrentNode(node.next);
}

function printListFromTailToHead(head) {
  if (arr.length > 0) {
    arr = [];
  }
  addCurrentNode(head);
  return arr;
}

console.log(printListFromTailToHead(list.head));
