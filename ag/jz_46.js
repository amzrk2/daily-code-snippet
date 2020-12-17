/**
 * 给定一个由[0...n-1]构成的数组，
 * 第一次从0开始数m个数，然后删除，
 * 以后每次都从删除的数下一个位置开始数m个数，然后删除，直到剩余一个数字，找出那个数字。
 *
 * 链表模拟
 */

const { List, ListNode } = require('./constructor/List');

function LastRemaining_Solution(n, m) {
  if (n <= 0) {
    return -1;
  }

  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }
  const list = new List(arr);

  let index = 0;
  let p = list.head;
  while (index < m) {
    if (list.length === 1) {
      return p.val;
    }
    if (index + 1 === m) {
      // 删除此结点
      let q = p;
      p = p.next || list.head;
      list.head === q && (list.head = p); // 重写头结点
      delete q;
      // 重置计数器
      index = 0;
      continue;
    }
    p = p.next || list.head;
    index++;
  }

  return -1;
}
