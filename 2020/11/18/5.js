var test = new Boolean();
document.write(test);
var test = new Boolean(0);
document.write(test);
var test = new Boolean(null);
document.write(test);
var test = new Boolean('');
document.write(test);
var test = new Boolean(NaN);
document.write(test);

/**
 * output
 *
 * all false
 */
