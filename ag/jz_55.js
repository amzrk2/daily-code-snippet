/**
 * 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。
 *
 * 法1 hashmap (set)
 * 法2 双指针
 *
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead) {
  if (!pHead || !pHead.next) {
    return null;
  }
  let fast = pHead;
  let slow = pHead;

  // 链表没有尽头
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      let help = pHead;
      while (help !== slow) {
        slow = slow.next;
        help = help.next;
      }
      return help;
    }
  }
  return null;
}
