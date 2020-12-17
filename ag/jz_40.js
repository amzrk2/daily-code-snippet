/**
 * @param {Array<Number>} array
 */
function FindNumsAppearOnce(array) {
  const map = {};
  array.forEach((val) => {
    if (map[val]) {
      map[val]++;
    } else {
      map[val] = 1;
    }
  });
  const res = [];
  for (let key of Object.keys(map)) {
    if (map[key] === 1) {
      res.push(Number(key));
    }
  }
  return res;
}

FindNumsAppearOnce([1, 1, 2, 2, 3, 3, 4]);
