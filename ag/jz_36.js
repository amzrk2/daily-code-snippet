/**
 * 寻找两个链表的第一个公共结点
 * 双指针法，两个链表总长一定相同
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2) {
  let p1 = pHead1,
    p2 = pHead2;
  if (p1 === null || p2 === null) {
    return null;
  }
  while (p1 !== p2) {
    p1 = p1 ? p1.next : pHead2;
    p2 = p2 ? p2.next : pHead1;
    if (count++ > 100000000) {
      return null;
    }
  }
  return p1 || p2;
}
