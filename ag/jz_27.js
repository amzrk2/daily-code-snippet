/**
 * 输入一个字符串,长度不超过9(可能有字符重复),字符只包括大小写字母。
 * 按字典序打印出该字符串中字符的所有排列。
 * 例如输入字符串abc,则按字典序打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
 */

/**
 *
 * @param {String} str
 */
function Permutation(str) {
  if (!str.length) {
    return [];
  }
  let results = [];
  prePerm(str.split(''), 0, results);
  return results.sort();
}

/**
 * @param {String[]} letters 原始字符串的所有字母
 * @param {Number} index 当前递归层数，即结果字符串的第 index 个字母
 * @param {String[]} results 所有结果
 */
function prePerm(letters, index, results) {
  if (index >= letters.length) {
    // 每位字母都已遍历完成，记录当前结果
    results.push(letters.join(''));
    return;
  }
  // map 用于记录当前递归层内是否有重复字母
  const map = {};
  // 遍历原始字符串的所有字母决定当前递归层选择的字母
  for (let i = index; i < letters.length; i++) {
    if (map[letters[i]]) {
      // 若为重复字母，则剪枝
      continue;
    }
    // 记录字母至当前递归层内
    map[letters[i]] = true;
    // 把字母放到当前递归层选择的字母位置上
    swap(letters, index, i);
    // 递归遍历剩下的字母
    prePerm(letters, index + 1, results);
    // 查找完成后需要还原，保证外层遍历剩下的选法正常计算
    swap(letters, index, i);
  }
}

function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

Permutation('ab');
