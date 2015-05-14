/*
Solution for:
http://codepen.io/netcraft/pen/AdCrL?editors=001
*/

//-----------------------------------------
// Your code here
//-----------------------------------------
var triangle = (function () {
  
  // Private function
  function sum() {
    var total = 0,
        len = arguments.length,
        i;
    
    for (i = 0; i < len; i++) {
      total += arguments[i];
    }
    
    return total;
  }

  // Public properties and methods
  return {
    getSum: sum,
    getPerimeter: function () {
      var args = Array.prototype.slice.call(arguments, 0, 3);
      
      // Since we don't use 'this', we have to provide 'null' in
      // the apply method
      return sum.apply(null, args);

    }
  };
})();

//-----------------------------------------
// Your code should pass these tests
//-----------------------------------------
console.log(typeof window.sum);
// 'undefined'
console.log(typeof triangle.sum);
// 'undefined'
console.log(triangle.getSum(2, 4, 8, 16, 32));
// 62
console.log(triangle.getPerimeter(2, 4, 8, 16, 32));
// 14
console.log(triangle.getPerimeter(1, 2, 3));
// 6