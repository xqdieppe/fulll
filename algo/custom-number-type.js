const increment = (number) => {
	number.reverse();
	number[0] += 1;
	for (var i = 0; i < number.length; i++) {
		if (number[i] > 9) {
			number[i] = 0;
			if (i == number.length - 1) {
				number.push(1)
			} else { number[i + 1] += 1; }
		}
	}
	return (number.reverse())
}

console.log(increment([1,2,3]))
console.log(increment([9,9]))
