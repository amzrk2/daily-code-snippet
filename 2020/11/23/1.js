const arr = [-1, 1, 3, 4, 6, 10];

arr.sort((a, b) => Math.abs(a - 3) - Math.abs(b - 3));

/**
 * 按照与 3 之间的绝对距离从小到大排序
 *
 * output
 * [3, 4, 1, 6, -1, 10]
 */
