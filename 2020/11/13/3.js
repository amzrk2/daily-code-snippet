function myFunc1() {
  console.log(a);
  var a = 1;
}
myFunc1(); // `undefined`: `a` exists, but has no value

function myFunc2() {
  console.log(a);
  let a = 1;
}
myFunc2(); // ReferenceError: Cannot access 'a' before initialization
