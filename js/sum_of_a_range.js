/*function range(first, last) {
	var array = [];

	for (var i = first; i <= last; i++) {
		array[i].push;
	}

	return array;
}*/

function sum(array) {
	var sumOfValues = 0;

	for(var i = 0; i < array.length; i++) {
		sumOfValues += array[i];
	}

	return sumOfValues;
}

function range(first, last, step) {
  var array = [];

  if (isNaN(step)) {
  	step = 1;
  }
  
  if (last >= first) {
	 for(var i = first; i <= last; i += step) {
	   array.push(i);
	 }
  } else {
     for (var i = first; i >= last; i += step) {
       array.push(i);
     }
  }

  return array;
}


console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
