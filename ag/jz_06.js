/**
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转
 * 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素
 * 给出的所有元素都大于 0，若数组大小为 0，请返回 0
 *
 * 输入：
 * [3, 4, 5, 1, 2]
 *
 * 输出：
 * 1
 *
 * 思路：
 * 二分法，排除收缩范围
 * start 到 mid 递增则排除 start 到 mid-1
 * mid 到 end 递增则排除 mid+1 到 end
 * 最后收缩至只有两个元素则 end 为最小元素的下标
 */

/**
 * @param {Array<Number>} rotateArray
 */
function minNumberInRotateArray(rotateArray) {
  if (rotateArray.length === 0) {
    return 0;
  }

  /**
   * @param {Number} start
   * @param {Number} end
   */
  function findElementIndex(start, end) {
    const mid = start + Math.floor((end - start) / 2);
    // 检查 start 到 end，中点为 mid
    console.log(`检查 ${start} 到 ${end}，中点为 ${mid}`);
    if (rotateArray[start] < rotateArray[mid]) {
      // start 到 mid 递增，排除 start 到 mid-1
      console.log(`${start} 到 ${mid} 递增，排除 ${start} 到 ${mid - 1}`);
      return findElementIndex(mid, end);
    } else if (rotateArray[mid] < rotateArray[end]) {
      // mid 到 end 递增，排除 mid+1 到 end
      console.log(`${mid} 到 ${end} 递增，排除 ${mid + 1} 到 ${end}`);
      return findElementIndex(start, mid);
    } else {
      return end;
    }
  }

  const smallerIndex = findElementIndex(0, rotateArray.length - 1);
  return rotateArray[smallerIndex];
}

console.log(minNumberInRotateArray([3, 4, 5, 6, 6, 6, 7, 1, 1, 1, 2]));
