class ListNode {
  /**
   * @constructor
   * @param {number} val
   * @param {ListNode} next
   */
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class List {
  /**
   * @constructor
   * @param {array} arr
   */
  constructor(arr) {
    this.head = new ListNode(arr[0], null);
    const length = arr.length;
    let pointer = this.head;
    for (let i = 1; i < length; i++) {
      pointer.next = new ListNode(arr[i]);
      pointer = pointer.next;
    }
  }
}

module.exports = {
  List,
  ListNode,
};
