class BinaryTreeNode {
  /**
   * @constructor
   * @param {number} val
   * @param {TreeNode} leftChild
   * @param {TreeNode} rightChild
   */
  constructor(val, leftChild, rightChild) {
    this.val = val;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}

class BinaryTree {
  /**
   * @constructor
   * @param {array} preArr pre order arr
   * @param {array} vinArr mid order arr
   */
  constructor(preArr, vinArr) {
    this.root = new BinaryTreeNode(preArr[0], null, null);
    const rootIndex = vinArr.indexOf(preArr[0]);
    console.log(vinArr.splice(0, rootIndex - 1), vinArr.splice(1));
    // this.buildTree(vinArr.splice(0, rootIndex - 1), vinArr.splice(1));
  }

  buildTree(leftArr, rightArr) {}
}

module.exports = {
  BinaryTree,
  BinaryTreeNode,
};
