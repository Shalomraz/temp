function countBs(userString) {
	var counter = 0;
	for (var i = 0; i < userString.length; i++) {
		if (userString[i] === "B") {
			counter++;
		}
	}

	return counter;
}

console.log(countBs("aBfsdfdsBBdsB"));

