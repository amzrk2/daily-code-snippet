/**
 * 输入一个链表，输出该链表中倒数第 k 个结点。
 *
 * 快慢指针：
 * 快指针先往前走 k 步，此时慢指针从头部开始
 * 当快指针为空时，慢指针即倒数第 k 个结点
 */
const { List, ListNode } = require('./constructor/List');
const list = new List([1, 2, 3, 4, 5]);
console.log(list);

/**
 *
 * @param {ListNode} head
 * @param {Number} k
 */
function FindKthToTail(head, k) {
  let ptr1 = head;
  // prt1 移动至第 k+1 个结点（移动 k 次）
  for (let i = 0; i < k; i++) {
    if (ptr1 == null) {
      return null;
    }
    ptr1 = ptr1.next;
  }
  // 两指针同步，当 prt1 为 null（length+1），ptr2 即倒数第 k 个结点
  let ptr2 = head;
  while (ptr1) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }
  return ptr2;
}

console.log(FindKthToTail(list.head, 6));
