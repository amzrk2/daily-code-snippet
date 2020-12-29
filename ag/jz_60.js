function bfs(node, ret) {
  const queue = []; // 任务序列
  queue.push(node);

  while (queue.length > 0) {
    let length = queue.length; // 本层的结点个数
    const res = []; // 本层的结果
    while (length-- > 0) {
      const node = queue.shift();
      res.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    ret.push(res);
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
  bfs(pRoot, ret);
  return ret;
}
