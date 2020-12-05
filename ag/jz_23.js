/**
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
 * 如果是则返回true,否则返回false。
 * 假设输入的数组的任意两个数字都互不相同。
 *
 * 后序遍历最后一个元素是根节点
 * 左子树都小于根节点，且左子树一定排在右子树之前，从头开始找出所有小于根节点的元素
 * 剩下的元素就是右子树
 * 递归检查
 */

/**
 * @param {Array} sequence
 */
function VerifySquenceOfBST(sequence) {
  if (!Array.isArray(sequence) || !sequence.length) {
    return false;
  }
  return preVerifySquenceOfBST(sequence);
}

/**
 * @param {Array} sequence
 */
function preVerifySquenceOfBST(sequence) {
  const length = sequence.length;
  // 若当前子树不多于一个结点 (递归出口)
  if (length <= 1) {
    return true;
  }
  // 得到当前子树的根元素
  const root = sequence[length - 1];
  // 统计左子树元素个数
  let leftCount = 0;
  for (let i = 0; i < length - 1; i++) {
    if (sequence[i] < root) {
      leftCount++;
    } else {
      break;
    }
  }
  // 检查剩下的右子树元素是否都大于当前根元素
  for (let i = leftCount; i < length - 1; i++) {
    if (sequence[i] < root) {
      return false;
    }
  }
  // 当前子解构符合后序遍历结果的要求
  // 检查左右子树是否符合要求
  return (
    preVerifySquenceOfBST(sequence.slice(0, leftCount)) &&
    preVerifySquenceOfBST(sequence.slice(leftCount, length - 1))
  );
}

VerifySquenceOfBST([4, 8, 6, 12, 16, 14, 10]);
