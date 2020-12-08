/**
 * 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。
 * 要求不能创建任何新的结点，只能调整树中结点指针的指向。
 *
 * 二叉搜索树：左 < 当前结点 < 右，中序遍历为有序
 * 定义尾节点为已经转换好的部分中最后一个结点，也就是当前结点的 left 需要指向的结点
 */

const { BinaryTree, BinaryTreeNode } = require('./constructor/BinaryTree');

function Convert(pRootOfTree) {
  if (!pRootOfTree) {
    return null;
  }
  const nodeArr = [];
  preConvert(pRootOfTree, nodeArr);
  for (let i = 0; i < nodeArr.length; i++) {
    nodeArr[i].right = nodeArr[i + 1] || null;
    nodeArr[i].left = nodeArr[i - 1] || null;
  }
  return nodeArr[0];
}

function preConvert(node, nodeArr) {
  node.left && preConvert(node.left, nodeArr);
  nodeArr.push(node);
  node.right && preConvert(node.right, nodeArr);
}
