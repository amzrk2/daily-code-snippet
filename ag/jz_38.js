/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

const { BinaryTree, BinaryTreeNode } = require('./constructor/BinaryTree');
/**
 *        8
 *    9       #
 * 2    5
 */
const tree = new BinaryTree([8, 9, 2, 5], [2, 9, 5, 8]);

function TreeDepth(pRoot) {
  if (!pRoot) {
    return 0;
  }
  const query = [];
  query.push(pRoot);
  let length = query.length;
  let sum = 0;
  while (length) {
    while (length--) {
      const node = query.shift();
      node.left && query.push(node.left);
      node.right && query.push(node.right);
    }
    length = query.length;
    sum++;
  }
  return sum;
}

TreeDepth(tree.root);
