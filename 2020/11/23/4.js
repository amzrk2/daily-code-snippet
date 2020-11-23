let x = 10;

let foo = () => {
  console.log(x); // Uncaught ReferenceError: can't access lexical declaration 'x' before initialization
  let x = 20;
  x++;
};

foo();

/**
 * 无变量提升，但有暂时性死区问题
 * console.log(x); 即位于对于 foo 函数中的暂时性死区中
 */
