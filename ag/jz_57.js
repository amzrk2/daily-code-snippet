/**
 * 给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。
 * 注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。
 *
 * 法1：
 * 找到根结点 => 中序遍历 => 找下一个结点
 *
 * 法2：
 * 分类
 *          6
 *       2     7
 *    1    5
 *       3
 *        4
 *
 * 1 => 2：当前结点为父结点的左孩子 => 下一个是父结点
 * 2 => 3, 3 => 6, 4 => 7：当前结点有右孩子 => 下一个是右孩子结点的最左孩子，若右孩子结点没有左孩子则为它自己
 * 4 => 5, 5 => 6：当前结点为父结点的右孩子 => 下一个是父结点 (上溯左子树)
 * 7：最尾结点
 */

/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/

function GetNext(pNode) {
  if (!pNode) {
    return null;
  }

  // 当前结点有右孩子 => 下一个是右孩子结点的最左孩子，若右孩子结点没有左孩子则为它自己
  if (pNode.right) {
    pNode = pNode.right;
    while (pNode.left) {
      pNode = pNode.left;
    }
    return pNode;
  }

  // 当前结点没有右孩子
  // 当前结点为父结点的左孩子 => 下一个是父结点
  // 当前结点为父结点的右孩子 => 下一个是父结点
  while (pNode.next) {
    let node = pNode.next;
    if (node.left === pNode) {
      return node;
    }
    pNode = pNode.next;
  }

  // 最尾结点
  return null;
}
