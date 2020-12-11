/**
 * 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置,
 * 如果没有则返回 -1（需要区分大小写）.（从0开始计数）
 *
 * 法1 map
 * 法2 尝试
 */

/**
 * @param {String} str
 */
function FirstNotRepeatingChar(str) {
  const set = new Set();
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    // save that this char is checked
    if (set.has(char)) {
      continue;
    }
    set.add(char);
    // find another same char index
    let asc = str.slice(0, i).indexOf(char);
    asc === -1 && (asc = str.slice(i + 1, str.length).indexOf(char));
    if (asc === -1) {
      return i;
    }
  }
  return -1;
}

FirstNotRepeatingChar('google');
