typeof 'hello'; // 'string'
typeof new String('hello'); // 'object'
typeof String('hello'); // 'string'

/**
 * plain string
 * string object
 * convert
 */

const x = new Boolean(false);
if (x) {
  console.log(1); // 1
}
const y = Boolean(false);
if (y) {
  console.log(2); // no output
}

/**
 * x is an object
 * object => true
 * only '0, -0, NaN, '', null, undefined' => false
 *
 * y is a plain boolean var
 */
