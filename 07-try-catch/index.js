// =================== 07 Try...Catch ===================== //

// We usually want to us try/catch block while handling errors with fetch API

// let x = 'x';

// try {
// 	console.log(x);
// } catch (error) {
// 	console.log('Error: ' + error);
// }

function double(number) {
	if (isNaN(number)) {
		throw new Error(`${number} is not a number.`);
	}

	return number * 2;
}

try {
	const y = double('a');
	console.log(y);
} catch (error) {
	console.log(error);
}
