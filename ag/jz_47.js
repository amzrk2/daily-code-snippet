/**
 * 求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
 * @param {Number} n
 */

// 原递归方法
function Sum_Solution(n) {
  if (n === 1) {
    return n;
  }
  return n + Sum_Solution(n - 1);
}

// 修改以规避 if
function Sum_Solution(n) {
  n > 1 && (n += Sum_Solution(n - 1));
  return n;
}
