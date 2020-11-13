function Foo() {
  let i = 0;
  return function () {
    console.log(i++);
  };
}

const f1 = Foo();
const f2 = Foo();

f1(); // `i` in `f1`: 0 => 1
f1(); // `i` in `f1`: 1 => 2
f2(); // `i` in `f2`: 0 => 1

/**
 * output
 *
 * 0
 * 1
 * 0
 */
