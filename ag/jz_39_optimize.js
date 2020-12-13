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

/* 
自底向上
方法一是先求出以每个结点为根的树的高度，然后再判断，其实可以直接再求高度的同时，直接判断即可。
利用后序遍历：左子树、右子树、根节点,可以先递归到叶子节点，然后在回溯的过程中来判断是否满足条件。
 */

/**
 * 计算以 root 为根的子树高度并进行缓存，一旦出现任意不符合要求的情况即返回 -1
 * @param {WeakMap} map
 */
function checkDepth(root, map) {
  if (!root) {
    return 0;
  }
  const lDepth = checkDepth(root.left);
  if (lDepth === -1) {
    return -1;
  }
  const rDepth = checkDepth(root.right);
  if (rDepth === -1) {
    return -1;
  }
  if (Math.abs(lDepth - rDepth) > 1) {
    return -1;
  }
  return Math.max(lDepth, rDepth) + 1;
}

function IsBalanced_Solution(pRoot) {
  return checkDepth(pRoot) !== -1;
}
