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
    this.root = this.buildTree(preArr, vinArr);
  }

  /**
   * @param {array} preArr pre order arr
   * @param {array} vinArr mid order arr
   */
  buildTree(preArr, vinArr) {
    if (preArr.length <= 0 || vinArr.length <= 0) {
      return null;
    }
    // get current root
    const rootVal = preArr[0];
    // get root index
    const rootIndex = vinArr.indexOf(rootVal);
    // build tree with left child's pre and mid order arr
    const leftChild = this.buildTree(preArr.slice(1, rootIndex + 1), vinArr.slice(0, rootIndex));
    // build tree with right child's pre and mid order arr
    const rightChild = this.buildTree(preArr.slice(rootIndex + 1), vinArr.slice(rootIndex + 1));
    // build node
    const node = new BinaryTreeNode(rootVal, leftChild, rightChild);
    return node;
  }
}

module.exports = {
  BinaryTree,
  BinaryTreeNode,
};
