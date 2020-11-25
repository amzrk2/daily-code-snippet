const f = new Function();
// new Function() returns an empty plain object {}

f.__proto__ === Function.prototype; // true
f.prototype === Function.prototype; // false

f.__proto__.__proto__ === Object.prototype; // true
f.prototype.prototype === Object.prototype; // false

// 原型链的最顶端，一个普通对象
Object.prototype;
Object.prototype.__proto__ === null; // 原型链最最顶端为 null
Object.prototype.prototype === undefined; // 普通对象没有 prototype 属性

// a 对象由 B 函数构造，则
a.__proto__ === B.prototype;
