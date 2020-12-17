/**
 * 写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、/四则运算符号。
 *
 * 异或：无进位补码相加
 * 相与+左移：求进位
 * 二者相加即得到结果
 */

function Add(num1, num2) {
  while (num2 !== 0) {
    let sum = num1 ^ num2;
    let c = (num1 & num2) << 1;
    num1 = sum;
    num2 = c;
  }
  return num1;
}
