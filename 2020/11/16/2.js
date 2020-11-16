const A = { n: 4399 };
const B = function () {
  this.n = 9999;
};
const C = function () {
  const n = 8888; // just a simple var
};
B.prototype = A;
C.prototype = A;

const b = new B();
const c = new C();
A.n++;

console.log(b.n); // 9999
console.log(c.n); // 4400

/**
 * b.n => b has its own n = 9999
 * c.n => c doesn't has is own n => a.n => 4399++ = 4400
 */
