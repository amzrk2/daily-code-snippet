/**
 * 请实现一个函数，用来判断一棵二叉树是不是对称的。
 * 注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。
 *
 * 根据上图可知：若满足对称二叉树，必须满足：
 * 1. L->val == R->val
 * 2. L->left->val == R->right->val
 * 3. L->right->val == R->left->val
 * 因此可以自顶向下，递归求解即可。
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function isSymmetrical(pRoot) {
  return _isSym(pRoot, pRoot);
}

/**
 * 子树验证
 */
function _isSym(lRoot, rRoot) {
  if (!lRoot && !rRoot) {
    return true;
  }
  if (!lRoot || !rRoot) {
    return false;
  }
  return (
    lRoot.val === rRoot.val &&
    _isSym(lRoot.left, rRoot.right) &&
    _isSym(lRoot.right, rRoot.left)
  );
}
