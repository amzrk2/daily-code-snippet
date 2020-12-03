const { BinaryTree, BinaryTreeNode } = require('./constructor/BinaryTree');
/**
 *           8
 *       8       #
 *    9    #
 *  2   #
 * 5 #
 */
const tree1 = new BinaryTree([8, 8, 9, 2, 5], [5, 2, 9, 8, 8]);
/**
 *        8
 *    9       #
 * 2    #
 */
const tree2 = new BinaryTree([8, 9, 2], [2, 9, 8]);

/**
 * 输入两棵二叉树 A、B，判断 B 是不是 A 的子结构；
 * 约定空树不是任意一个树的子结构
 * @param {BinaryTreeNode} pRoot1
 * @param {BinaryTreeNode} pRoot2
 */
function HasSubtree(pRoot1, pRoot2) {
  if (!pRoot1 || !pRoot2) {
    // 约定空树不是任意一个树的子结构
    return false;
  }
  // 比较当前两子树是否为`相同根节点子结构`
  if (dfsCompare(pRoot1, pRoot2)) {
    return true;
  }
  // 比较树 A 的左右子树对于树 B 是否为`相同根节点子结构`
  return (
    HasSubtree(pRoot1.leftChild, pRoot2) ||
    HasSubtree(pRoot1.rightChild, pRoot2)
  );
}

/**
 * 深度优先检查 root2 和 root1 是否为`相同根节点子结构`
 * @param {BinaryTreeNode} root1
 * @param {BinaryTreeNode} root2
 * @returns {Boolean}
 */
function dfsCompare(root1, root2) {
  if (!root2) {
    // 若树 2 遍历完成仍未跳出，则是`相同根节点子结构`
    return true;
  }
  if (!root1) {
    // 若树 2 未遍历完成但树 1 先遍历完成，则不是`相同根节点子结构`
    return false;
  }
  if (root1.val !== root2.val) {
    // 若根节点不同，则不是`相同根节点子结构`
    return false;
  }
  // 递归比较左右子树是否为`相同根节点子结构`
  return (
    dfsCompare(root1.leftChild, root2.leftChild) &&
    dfsCompare(root1.rightChild, root2.rightChild)
  );
}

console.log(HasSubtree(tree1.root, tree2.root));
