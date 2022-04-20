const factorial = require('@rhuynh/github-pkg-test').factorial;
let nums = process.argv.slice(2);
console.log(nums);
if (!nums.length) nums = [1];

nums.forEach(n => {
	n = parseInt(n || 1);

	try {
		console.log(`factorial of ${n}: `, factorial(n));
	} catch {
		console.log(`cannot determine factorial of ${n}`)
	}
})