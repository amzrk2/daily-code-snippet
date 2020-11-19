var val = 12;
function fun1() {
  console.log(val);
  var val = 20;
  console.log(val);
}
fun1();

/**
 * output
 *
 * function fun1() {
 *   var val;
 *   console.log(val); // undefined
 *   val = 20;
 *   console.log(val); // 20
 * }
 *
 * var val;
 *
 * val = 12;
 *
 * fun1();
 *
 */
