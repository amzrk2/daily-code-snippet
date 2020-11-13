const F = function () {};
Object.prototype.a = function () {};
Function.prototype.b = function () {};
const f = new F();

console.log(F.a); // function a
console.log(F.b); // function b
console.log(f.a); // function a
console.log(f.b); // undefined
