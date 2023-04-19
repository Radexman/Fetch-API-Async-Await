// =================== 07 Try...Catch ===================== //

try {
	console.log(x);
} catch (error) {
	console.log('Error: ' + error);
}

function double(number) {
	if (isNaN(number)) {
		throw new Error(number + ' is not a number');
	}
	return number * 2;
}

try {
	double('a');
} catch (error) {
	console.log(error);
}
