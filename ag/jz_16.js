/**
 * 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
 */

const { List, ListNode } = require('./constructor/List');
const list1 = new List([1, 2, 3, 4, 5]);
const list2 = new List([3, 4, 5, 6, 8]);

/**
 * @param {ListNode} pHead1
 * @param {ListNode} pHead2
 */
function Merge(pHead1, pHead2) {
  // p q 双指针
  let p = pHead1;
  let q = pHead2;
  // 虚拟 head，用于记录头位置
  let vHead = new ListNode(-1, null);
  // 工作指针
  let cur = vHead;
  while (p && q) {
    if (p.val <= q.val) {
      cur.next = new ListNode(p.val, null);
      p = p.next;
    } else {
      cur.next = new ListNode(q.val, null);
      q = q.next;
    }
    cur = cur.next;
  }
  // 接上未完成部分
  if (p) {
    cur.next = p;
  } else if (q) {
    cur.next = q;
  }
  return vHead.next;
}

console.log(Merge(list1.head, list2.head));
