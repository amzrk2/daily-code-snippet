/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

/**
 * 非递归实现：二叉搜索树的第k个结点 中序遍历
 * @param {*} pRoot
 * @param {*} k
 */
function KthNode(pRoot, k) {
  if (!pRoot || k <= 0) {
    return null;
  }
  const stack = [];
  let node = pRoot;
  while (stack.length > 0 || node) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      if (--k === 0) {
        return node;
      }
      node = node.right;
    }
  }
  return null;
}
