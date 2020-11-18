var a, b;
(function () {
  alert(a);
  alert(b);
  var a = (b = 3); // var a=b=3;
  alert(a);
  alert(b);
})();
alert(a);
alert(b);

/**
 * output
 *
 * undefined
 * undefined
 * 3
 * 3
 * undefined
 * 3
 */
