/**
 * 在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，
 * 重复的结点不保留，返回链表头指针。
 * 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

function deleteDuplication(pHead) {
  if (!pHead) {
    return null;
  }

  // 虚拟头结点
  let vHead = {
    val: NaN,
    next: pHead,
  };
  let wk = vHead.next; // 工作指针
  let sv = vHead; // 保存最后一个不重复的结点

  while (wk?.next) {
    // wk 和 wk+1 相同，即从 wk 开始遇到重复结点
    if (wk.val === wk.next.val) {
      // 后移 wk 直到找到下一个数字
      let tmp = wk.val;
      while (wk?.val === tmp) {
        wk = wk.next;
      }
      // 移除所有重复结点
      sv.next = wk;
    }
    // wk 和 sv 各后移一位
    else {
      wk = wk.next;
      sv = sv.next;
    }
  }
  return vHead.next;
}
