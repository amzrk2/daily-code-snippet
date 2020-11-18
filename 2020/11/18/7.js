!0; // true

![]; // false
[] == 0; // true

'foo' ==
  new (function () {
    return new String('foo');
  })();
// true

'foo' ==
  new (function () {
    return String('foo');
  })();
// false

/*
使用 new 运算符调用函数时，会返回一个对象
然而就像 Class 的 constructor 一样，return 语句返回一个对象时，该对象将被作为 new 操作符的结果返回
*/
