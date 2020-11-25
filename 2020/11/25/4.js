function test() {
  let n = 4399;

  function add() {
    n++;
    console.log(n);
  }

  return {
    n,
    add,
  };
}

const res1 = test();
const res2 = test();

res1.add(); // res1.add() 闭包中的 n 自增，输出 4400
res1.add(); // res1.add() 闭包中的 n 自增，输出 4401
console.log(res1.n); // 这个 n 并不是 res1.add() 闭包中的 n，只是对象中的普通 n，输出为初值 4399
res2.add(); // res2.add() 闭包中的 n 自增，输出 4400
