/**
 * 输入一个复杂链表
 * 每个节点中有节点值，以及两个指针
 * 一个指向下一个节点，另一个特殊指针random指向一个随机节点
 * 请对此链表进行深拷贝，并返回拷贝后的头结点
 * 输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空
 *
 * 用一个哈希表表示映射关系：键是原节点，值是复制的节点。
 * 第一次遍历，复制每个节点和 next 指针，并且保存“原节点-复制节点”的映射关系
 * 第二次遍历，通过哈希表获得节点对应的复制节点，更新 random 指针
 */

class RandomListNode {
  constructor(x) {
    this.label = x;
    this.next = null;
    this.random = null;
  }
}

const a = new RandomListNode('a');
const b = new RandomListNode('b');
const c = new RandomListNode('c');
a.next = b;
b.next = c;
c.next = null;
a.random = c;
b.random = null;
c.random = a;

/**
 * @param {RandomListNode} pHead
 */
function Clone(pHead) {
  // 无结点
  if (!pHead) {
    return null;
  }
  // 单结点
  if (!pHead.next) {
    const newHead = new RandomListNode(pHead.label);
    if (pHead.random === pHead) {
      newHead.random = newHead;
    }
    return newHead;
  }
  // 定义查找表
  const map = new Map();
  // 记录头结点复制
  const newHead = new RandomListNode(pHead.label);
  map.set(pHead, newHead);
  // 第一次遍历 next 结点
  let node = pHead;
  let newNode = newHead;
  while (node.next) {
    // 复制结点
    newNode.next = new RandomListNode(node.next.label);
    // 继续
    node = node.next;
    newNode = newNode.next;
    // 添加查找表
    map.set(node, newNode);
  }
  // 第二次遍历本身
  node = pHead;
  newNode = newHead;
  while (newNode) {
    // 通过查找表寻找原链表中对应的 random 结点关系
    newNode.random = map.get(node.random);
    // 继续
    node = node.next;
    newNode = newNode.next;
  }
  return newHead;
}

console.log(Clone(a));
