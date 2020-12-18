const duplication = [0];

/**
 * @param {Array<Number>} numbers
 * @param {Array} duplication
 */
function duplicate(numbers, duplication) {
  if (!numbers.length) {
    return false;
  }
  const map = new Array(numbers.length).fill(0);
  numbers.forEach((val) => {
    map[val]++;
  });
  for (let i = 0; i < numbers.length; i++) {
    if (map[numbers[i]] > 1) {
      duplication[0] = numbers[i];
      return true;
    }
  }
  return false;
}

console.log(duplicate([6, 3, 2, 0, 2, 5, 0], duplication), duplication[0]);
