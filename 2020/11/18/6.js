let a = decodeURIComponent('%');
// Uncaught URIError: malformed URI sequence

var a;
a();
function a() {
  console.log(a);
}
/**
 * function a() {
 *   console.log(a);
 * }
 * var a;
 * a(); // function a()
 *
 * a = 1;
 * a(); // Error: a is not a function
 */
