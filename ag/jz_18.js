/**
 * 操作给定的二叉树，将其变换为源二叉树的镜像。
 */

const { BinaryTree, BinaryTreeNode } = require('./constructor/BinaryTree');

const tree = new BinaryTree([1, 2, 3, 4, 5, 6, 7], [3, 2, 4, 1, 6, 5, 7]);

function Mirror(root) {
  if (!root) {
    return null;
  }
  dfsMirror(root);
  bfsMirror(root);
  return root;
}

/**
 * 深度优先遍历，后序交换
 * @param {BinaryTreeNode} node
 */
function dfsMirror(node) {
  if (!node) {
    return null;
  }
  const left = dfsMirror(node.leftChild);
  const right = dfsMirror(node.rightChild);
  // 进行交换
  node.leftChild = right;
  node.rightChild = left;
  return node;
}

/**
 * 层次遍历，队列交换
 * @param {BinaryTreeNode} node
 */
function bfsMirror(node) {
  // 任务序列
  const queue = [];
  queue.push(node);
  while (queue.length > 0) {
    // 本层的结点个数
    let length = queue.length;
    while (length-- > 0) {
      const node = queue.shift();
      // 子树加入任务序列
      node.leftChild && queue.push(node.leftChild);
      node.rightChild && queue.push(node.rightChild);
      // 交换子树
      const _temp = node.leftChild;
      node.leftChild = node.rightChild;
      node.rightChild = _temp;
    }
  }
  return node;
}

Mirror(tree.root);
