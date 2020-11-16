/**
 * detect an array
 */
const arr = [];
if (!Array.isArray) {
  Array.isArray = (arg) => Object.prototype.toString.call(arg) === '[object Array]';
}
Array.isArray(arr);
