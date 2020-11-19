console.log([] ? true : false);
/**
 * true ? true : false
 *
 * true
 */

console.log([] == false ? true : false);
/**
 * 0 == 0 ? true : false
 *
 * true
 */

console.log({} == false ? true : false);
/**
 * NaN == 0 ? true : false
 *
 * false
 */

console.log('Value is ' + (val != '0') ? 'define' : 'undefine');
/**
 * ('Value is ' + (val != '0')) ? 'define' : 'undefine'
 * => 双目 + 优先级高于三目运算
 * => true ?  'define' : 'undefine'
 *
 * define
 *
 */
