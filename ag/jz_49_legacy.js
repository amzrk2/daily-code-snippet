/**
 * @param {String} str
 */
function StrToInt(str) {
  const string = str.trim();
  const length = string.length;
  if (!length) {
    return 0;
  }

  let sign = 1;
  if (string.startsWith('-')) {
    sign = -1;
  }
  let res = 0;

  for (
    let i = string.startsWith('-') || string.startsWith('+') ? 1 : 0;
    i < length;
    i++
  ) {
    const charCode = string.codePointAt(i);
    if (charCode < 48 || charCode > 57) {
      return 0;
    }
    res = res * 10 + (charCode - 48);
  }
  return res * sign;
}

console.log(StrToInt('-1234'));
