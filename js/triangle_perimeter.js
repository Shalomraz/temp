/*
Exercise: Triangle Perimeter

1. Define `Shape` constructor function.
Objects created with `Shape` should have a `type` property with the value of a given `type` or default to `shape`.
And a `getType()` method, where `getType` returns the type.
2. Define a `Triangle` constructor function whose prototype is `Shape`. Objects created with `Triangle` should have three own properties: `a`, `b`, `c`, with the values given to the function, representing the sides of a triangle.
3. Add a new `getPerimeter()` method to the `Triangle` prototype which will return the perimeter of the triangle.

*/

//-----------------------------------
// Your code here
//-----------------------------------
function Shape(type) {
  this.type = type || 'shape';
}

function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
}

// Setup prototype inheritance
Triangle.prototype = new Shape('triangle');
// Redefine the constructor
Triangle.prototype.constructor = Triangle;

Triangle.prototype.getType = function() {
  return this.type;
};

Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
};

//-----------------------------------
// Your code should pass these tests
//-----------------------------------
var t = new Triangle(1, 2, 3);
console.log(t.constructor);
// Triangle()
console.log(Object.getPrototypeOf(t));
// Shape()
console.log(t.getPerimeter());
// 6
console.log(t.getType());
// "triangle"

for (var prop in t) {
  if (t.hasOwnProperty(prop)) {
  	console.log(prop + ': ' + t[prop]);
  }
}

//-----------------------------------
// Extra
//-----------------------------------
// Loop over `t` showing only own properties and methods (none of the prototype's).
