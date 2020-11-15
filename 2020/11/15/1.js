var b = 3;
(function () {
  b = 5;
  var b = 2;
})();
console.log(b); // 3

var foo = { n: 1 };
(function (foo) {
  console.log(foo.n);
  foo.n = 3;
  var foo = { n: 2 };
  console.log(foo.n);
})(foo);
console.log(foo.n);
/**
 * output
 *
 * 1 2 3
 */

const foo = { n: 1 };
(function (foo) {
  console.log(foo.n);
  foo.n = 3;
  const foo = { n: 2 }; // Error
  console.log(foo.n);
})(foo);
console.log(foo.n);
/**
 * Uncaught SyntaxError: redeclaration of formal parameter foo
 */
