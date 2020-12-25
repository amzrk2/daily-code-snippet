/**
 * 请实现一个函数用来找出字符流中第一个只出现一次的字符。'
 * 例如，当从字符流中只读出前两个字符"go"时，第一个只出现一次的字符是"g"。
 * 当从该字符流中读出前六个字符“google"时，第一个只出现一次的字符是"l"。
 */

// 出现次数 hashmap
let map = {};
// 不重复的字符队列，注意在字符流变化的同时，原本不重复的字符可能会变成重复的，
// 即取出队列头时需要再次进行判断
let queue = [];

//Init module if you need
function Init() {
  if (Object.keys(map).length > 0 || queue.length > 0) {
    map = {};
    queue = [];
  }
}

//Insert one char from stringstream
function Insert(ch) {
  if (!map[ch]) {
    // 若新字符还未出现过，则初始化 map 和队列
    map[ch] = 1;
    queue.push(ch);
  } else {
    // 否则次数增加一次
    map[ch]++;
  }
}

//return the first appearence once char in current stringstream
function FirstAppearingOnce() {
  while (queue.length) {
    const char = queue[0];
    // 附加判断，变成重复则出列
    if (map[char] && map[char] > 1) {
      queue.shift();
      continue;
    }
    return char;
  }
  return '#';
}

Insert('g');
console.log(FirstAppearingOnce());
Insert('o');
console.log(FirstAppearingOnce());
Insert('o');
console.log(FirstAppearingOnce());
Insert('g');
console.log(FirstAppearingOnce());
Insert('l');
console.log(FirstAppearingOnce());
Insert('e');
console.log(FirstAppearingOnce());
