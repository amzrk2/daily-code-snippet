/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

/**
 *  输入一棵二叉树，判断该二叉树是否是平衡二叉树。
 * 在这里，我们只需要考虑其平衡性，不需要考虑其是不是排序二叉树
 * 它是一棵空树或它的左右两个子树的高度差的绝对值不超过1，并且左右两个子树都是一棵平衡二叉树。
 */

/* 自顶向下求解以每个结点为根的子树高度 */

function IsBalanced_Solution(pRoot) {
  // 各结点树高度的 map
  const map = new WeakMap();
  // 计算每个结点为根的子树高度
  checkDepth(pRoot, map);
  // 遍历每个结点判断
  return checkBalance(pRoot, map);
}

/**
 * 计算以 root 为根的子树高度并进行缓存
 * @param {WeakMap} map
 */
function checkDepth(root, map) {
  if (!root) {
    return 0;
  }
  if (map.has(root)) {
    return map.get(root);
  }
  const lDepth = checkDepth(root.left, map);
  const rDepth = checkDepth(root.right, map);
  const depth = Math.max(lDepth, rDepth) + 1;
  map.set(root, depth);
  return depth;
}

/**
 * @param {WeakMap} map
 */
function checkBalance(root, map) {
  if (!root) {
    return true;
  }
  return (
    Math.abs(checkDepth(root.left, map) - checkDepth(root.right, map)) <= 1 &&
    checkBalance(root.left, map) &&
    checkBalance(root.right, map)
  );
}
