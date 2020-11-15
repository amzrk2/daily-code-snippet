const arr = [1, 2, 3, 4];

Math.max(...arr);
Math.max.call(Math, ...arr);
Math.max.apply(Math, arr);
