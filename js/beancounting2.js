function countBs(userString, userChar) {
	var counter = 0;
	
	for (var i = 0; i < userString.length; i++) {
		if (userString[i] === userChar) {
			counter++;
		}
	}

	return counter;
}

console.log(countBs("aBfFs8dfdsBFF8BdsB", "8"));

