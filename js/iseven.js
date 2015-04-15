/*
Exercise: Recursion

Define a recursive function `isEven` corresponding to the Behavior below.
The function should accept a number parameter and return a Boolean.

Behavior:
- Zero is even.
- One is odd.
- For any other number N, it's evenness is the same as N - 2.

Reference (in case you're stuck):
http://eloquentjavascript.net/03_functions.html#p_iDq2OgBOGw
*/

function isEven(value) {
	// Your code here.
  if (value < 0) {
    value *= (-1);
  }
    
  if (value === 0) {
    return true;
  } else if (value === 1) {
    return false;
  }
  
  return isEven(value - 2);
}  
  
/*
 * Expected results
 */
(function () {
	console.log(isEven(50));
	// → true
	console.log(isEven(75));
	// → false
	console.log(isEven(-1));
	// → false
  console.log(isEven(0));
	// → true
  console.log(isEven(1));
	// → false
}());