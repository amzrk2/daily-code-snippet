function A(x) {
  this.x = x;
}
A.prototype.x = 1;
const a = new A(2);

console.log(a.x); // 2

function B(x) {
  this.x = x;
}
B.prototype = new A(); // A actually has x, but is undefined
var b = new B(3);
delete b.x;

console.log(b.x); // undefined
