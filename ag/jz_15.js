/**
 * 输入一个链表，反转链表后，输出新链表的表头。
 *
 * 双指针一边循环
 */
const { List, ListNode } = require('./constructor/List');
const list = new List([1, 2, 3, 4, 5]);

/**
 *
 * @param {ListNode} pHead
 */
function ReverseList(pHead) {
  if (!pHead) {
    return null;
  }
  if (!pHead.next) {
    return pHead;
  }
  let ptr0 = null;
  let ptr1 = pHead;
  let ptr2 = pHead.next;

  ptr1.next = ptr0;
  while (ptr2) {
    ptr0 = ptr1;
    ptr1 = ptr2;
    ptr2 = ptr2.next;
    ptr1.next = ptr0;
  }

  return ptr1;
}

console.log(ReverseList(list.head));
