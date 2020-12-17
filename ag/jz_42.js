/**
 * 因为数组是有序的，所以可以用双指针，指向数组的首尾，具体步骤如下：
 * 1.初始化：指针i指向数组首， 指针j指向数组尾部
 * 2. 如果arr[i] + arr[j] == sum , 说明是可能解
 * 3. 否则如果arr[i] + arr[j] > sum, 说明和太大，所以--j
 * 4. 否则如果arr[i] + arr[j] < sum, 说明和太小，所以++i
 */

/**
 *
 * @param {Array} array
 * @param {Number} sum
 */
function FindNumbersWithSum(array, sum) {
  if (!array.length) {
    return [];
  }
  let i = 0;
  let j = array.length - 1;
  let res = {};
  while (i < j) {
    const s = array[i] + array[j];
    if (s === sum) {
      const x = array[i] * array[j];
      if (!res.x || x < res.x) {
        [res.i, res.j] = [array[i], array[j]];
        res.x = res.i * res.j;
      }
      i++, j--;
    } else if (s > sum) {
      j--;
    } else {
      i++;
    }
  }
  if (!res.x) {
    return [];
  }
  return [res.i, res.j];
}
