const tree = {
  val: 8,
  left: {
    val: 6,
    left: { val: 5, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
  right: {
    val: 10,
    left: { val: 9, left: null, right: null },
    right: { val: 11, left: null, right: null },
  },
};

/**
 * 层次遍历，附加逆序
 * @param {Array} res
 */
function bfsRev(node, ret) {
  let depth = 0; // 层数
  const queue = []; // 任务序列
  queue.push(node);

  while (queue.length > 0) {
    let length = queue.length; // 本层的结点个数
    const res = []; // 本层的结果
    const l2r = depth % 2 === 0; // 本层是否从左到右

    while (length-- > 0) {
      const node = l2r ? queue.shift() : queue.pop();
      res.push(node.val);
      // 子树加入任务序列 (注意加入任务队列时顺序仍未标准层次遍历的从左到右顺序)
      if (l2r) {
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
      } else {
        node.right && queue.unshift(node.right);
        node.left && queue.unshift(node.left);
      }
    }

    // 层数增加
    ret.push(res);
    depth++;
  }
}

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot) {
  const ret = [];
  if (!pRoot) {
    return ret;
  }
  bfsRev(pRoot, ret);
  return ret;
}

console.log(Print(tree));
