let k = 0;
for (let i = 0, j = 0; i < 10, j < 6; i++, j++) {
  k += i + j;
}
console.log(k); // 30

// same as
let k = 0;
let i = 0;
for (let j = 0; j < 6; j++) {
  k += i + j;
  i++;
}
console.log(k); // 30
