/**
 * 给定一个数组A[0,1,...,n-1],
 * 请构建一个数组B[0,1,...,n-1],
 * 其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。
 * 不能使用除法。
 * （注意：规定B[0] = A[1] * A[2] * ... * A[n-1]，B[n-1] = A[0] * A[1] * ... * A[n-2];）
 * 对于A长度为1的情况，B无意义，故而无法构建，因此该情况不会存在。
 *
 * B[0]   = 1    * A[1] * A[2] * ... * A[n-1]
 * B[1]   = A[0] * 1    * A[2] * ... * A[n-1]  (left[1] = A[0])
 * B[2]   = A[0] * A[1] * 1    * ... * A[n-1]  (left[2] = A[0] * A[1])
 * ...
 * B[n-1] = A[0] * A[1] * A[2] * ... * 1
 *
 * left[i]  = left[i-1]  * A[i-1]
 * right[i] = right[i+1] * A[i+1]
 * @param {Array} array
 */

function multiply(array) {
  const length = array.length;
  if (!length || length <= 1) {
    return [];
  }
  const res = new Array(length);
  // 计算 left[i]，并放入 B[i]
  res[0] = 1;
  for (let i = 1; i < length; i++) {
    res[i] = res[i - 1] * array[i - 1];
  }
  // 计算 right[i]，与 left[i] 相乘并放回 B[i]
  let right = 1; // right[i+1]
  for (let i = length - 2; i >= 0; i--) {
    right *= array[i + 1]; // right[i] = right[i+1] * A[i+1]
    res[i] *= right; // B[i] = left[i] * right[i]
  }
  return res;
}
