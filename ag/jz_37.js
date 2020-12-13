/**
 * 统计一个数字在升序数组中出现的次数。
 * @param {Array} data
 * @param {Number} k
 */
function GetNumberOfK(data, k) {
  let l = 0,
    r = data.length;
  while (l < r) {
    let mid = l + ((r - l) >> 1);
    if (data[mid] < k) {
      l = mid + 1;
    } else if (data[mid] > k) {
      r = mid;
    } else {
      return _getTimes(data, mid, k);
    }
  }
  return 0;
}

function _getTimes(arr, mid, k) {
  let count = 1;
  let l = mid - 1,
    r = mid + 1;
  while (arr[l--] === k) {
    count++;
  }
  while (arr[r++] === k) {
    count++;
  }
  return count;
}
