/**
 * LL今天心情特别好,因为他去买了一副扑克牌,发现里面居然有2个大王,2个小王(一副牌原本是54张^_^)...他随机从中抽出了5张牌,想测测自己的手气,看看能不能抽到顺子,如果抽到的话,他决定去买体育彩票,嘿嘿！！“红心A,黑桃3,小王,大王,方片5”,“Oh My God!”不是顺子.....LL不高兴了,他想了想,决定大\小 王可以看成任何数字,并且A看作1,J为11,Q为12,K为13。上面的5张牌就可以变成“1,2,3,4,5”(大小王分别看作2和4),“So Lucky!”。LL决定去买体育彩票啦。 现在,要求你使用这幅牌模拟上面的过程,然后告诉我们LL的运气如何， 如果牌能组成顺子就输出true，否则就输出false。为了方便起见,你可以认为大小王是0。
 *
 * 题目抽象：给定一个长度为5（排除空），包含0-13的数组，判断公差是否为1.
 *
 * 1 如果数组中不包含0，因为需要是顺子，所以首先不能有重复值， 如果没有重复值，那么形如[1 2 3 4 5]，会发现最大值与最小值的差值应该小于5.
 * 2 如果数组中包含0，由于 0 可以代表任何数字，因此除去 0 后要求与 1 相同
 * 初始化一个set，最大值max_ = 0, 最小值min_ = 14
 * 遍历数组， 对于大于0的整数，没有在set中出现，则加入到set中，同时更新max_, min_
 * 如果出现在了set中，直接返回false
 * 数组遍历完，最后再判断一下最大值与最小值的差值是否小于5
 */

function IsContinuous(numbers) {
  if (!numbers.length) {
    return false;
  }

  // const set = new Set();
  const set = new Array(14);
  let max, min;

  for (let i = 0; i < numbers.length; i++) {
    const val = numbers[i];
    if (val <= 0) {
      continue;
    }
    if (set[val]) {
      return false;
    }
    set[val] = true;
    (!max || max < val) && (max = val);
    (!min || min > val) && (min = val);
  }

  return max - min < 5;
}

IsContinuous([0, 3, 2, 6, 4]);
