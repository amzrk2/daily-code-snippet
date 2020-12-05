/**
 * 输入一颗二叉树的根节点和一个整数，按字典序打印出二叉树中结点值的和为输入整数的所有路径。
 * 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
 */

function FindPath(root, expectNumber) {
  if (!root) {
    return [];
  }
  const validPaths = [];
  preFindPath(root, expectNumber, validPaths, []);
  // 按照路径长度由大到小排列
  validPaths.sort((a, b) => b.length - a.length);
  return validPaths;
}

/**
 * @param {*} node
 * @param {*} expectNumber
 * @param {Array<Number>} currentPath
 * @param {Array<Array>} validPaths
 */
function preFindPath(node, expectNumber, currentPath, validPaths) {
  if (!node) {
    return;
  }
  // 添加当前结点至路径
  let newPath = [...currentPath, node.val];
  // 检查当前结点是否为叶子结点 (路径末尾必须为叶子结点)
  if (!node.left && !node.right) {
    // 并且当前路径符合和的要求
    if (node.val === expectNumber) {
      validPaths.push(newPath);
      return;
    }
  }
  // 若还没有遍历到叶子结点 (路径末尾)
  preFindPath(node.left, expectNumber - node.val, newPath, validPaths);
  preFindPath(node.right, expectNumber - node.val, newPath, validPaths);
}
