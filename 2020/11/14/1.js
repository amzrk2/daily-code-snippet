console.log(1);
let a = setTimeout(() => {
  console.log(2);
}, 0);
console.log(3);
Promise.resolve(4).then((b) => {
  console.log(b);
  clearTimeout(a);
});
console.log(5);

/**
 * output
 *
 * 1
 * 3
 * 5
 * 4
 *
 * 同步代码 => 同步代码 => 同步代码 => 微任务 micro task => 宏任务 macro task (这里已经在微任务中被清除)
 *
 */
