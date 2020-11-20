/**
 * replace space to `%20`
 * @param {string} str
 */
function replaceSpace(str) {
  return str.replace(/ /g, '%20');
}

console.log(replaceSpace('We are happy!'));
