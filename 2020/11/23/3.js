// modern
let msg = 'hello';
for (let i = 0; i < 10; i++) {
  let msg = 'hello' + i * 2 + i;
}
console.log(msg); // hello

// old
var msg = 'hello';
for (var i = 0; i < 10; i++) {
  var msg = 'hello' + i * 2 + i;
}
console.log(msg); // hello 189

// old2
var msg = 'hello';
for (var i = 0; i < 10; i++) {
  (function () {
    var msg = 'hello' + i * 2 + i;
  })();
}
console.log(msg); // hello
