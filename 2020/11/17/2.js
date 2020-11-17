var foo = function (x, y) {
  return x - y;
};
function foo(x, y) {
  return x + y;
}
var num = foo(1, 2);

console.log(num);

/**
 * output
 * -1
 *
 * execute query:
 */

/* actual code query

// function declaration hoisting
function foo(x, y) {//foo#2
   return x + y;
}

// variable hoisting
var foo;
var num;

// function expression NOT hoisted
foo = function (x, y) {
  return x - y;
};

num = foo(1, 2); // x - y
 */
