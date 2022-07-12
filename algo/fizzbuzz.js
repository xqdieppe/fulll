const fizzbuzz = (n) => {
	if (!(n % 3) & !(n % 5)) console.log('FizzBuzz');
	else if (!(n % 3)) console.log('Fizz');
	else if (!(n % 5)) console.log('Buzz');
	else console.log(n)
}
