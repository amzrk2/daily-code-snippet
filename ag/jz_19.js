/**
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字
 * 例如，如果输入如下 4x4 矩阵
 *  1  2  3  4
 *  5  6  7  8
 *  9 10 11 12
 * 13 14 15 16
 * 则依次打印出数字 1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10
 */

const mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function printMatrix(mat) {
  const m = mat.length;
  if (!m) {
    return [];
  }
  const n = mat[0].length;
  if (!n) {
    return [];
  }
  // 结果
  const out = [];
  // 起始点
  let i = 0;
  let j = 0;
  // 循环条件：仍有行列存在
  while (i <= m - i - 1 && j <= n - j - 1) {
    // 水平第一行
    for (let col = j; col < n - j; col++) {
      out.push(mat[i][col]);
    }
    // 右侧第一列，除第一行
    for (let row = i + 1; row < m - i; row++) {
      out.push(mat[row][n - j - 1]);
    }
    // 避免重复：下侧与左侧列是否输出
    if (i < m - i - 1 && j < n - j - 1) {
      // 下方第一列，除左右两侧第一个元素
      for (let col = n - j - 2; col > j; col--) {
        out.push(mat[m - i - 1][col]);
      }
      // 左侧第一列，除第一个元素
      for (let row = m - i - 1; row > i; row--) {
        out.push(mat[row][j]);
      }
    }
    i++;
    j++;
  }
  return out;
}

console.log(printMatrix(mat));
