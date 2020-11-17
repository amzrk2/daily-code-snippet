const obj = {
  a: 1,
  b: function () {
    alert(this.a);
  },
};
const fun = obj.b;
fun(); // undefined
