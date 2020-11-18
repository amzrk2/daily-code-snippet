function foo() {
  console.log('first');
  setTimeout(() => {
    console.log('second');
  }, 5);
}

for (let i = 0; i < 10; i++) {
  foo();
}

/**
 * output
 *
 * first
 * ...
 * first
 * second
 * ...
 * second
 */
