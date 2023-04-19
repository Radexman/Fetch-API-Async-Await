// ============= 05 Fetch API Error Handling ============== //

// fetch('http://httpstat.us/200')
// 	.then((res) => {
// 		return res;
// 	})
// 	.then(() => console.log('Success'));

// Test wirh response.ok
// fetch('http://httpstat.us/404')
// 	.then((res) => {
// 		if (!res.ok) {
// 			throw new Error('Request Failed');
// 		}
// 		return res;
// 	})
// 	.then(() => console.log('Success'))
// 	.catch((error) => console.log(error));

// Catch runs on a network error
// fetch('http://hello123.net')
// 	.then((res) => {
// 		return res;
// 	})
// 	.then(() => console.log('Success'))
// 	.catch((error) => console.log(error));

fetch('http://httpstat.us/200')
	.then((res) => {
		if (res.status === 404) {
			throw new Error('Not Found');
		} else if (res.status === 500) {
			throw new Error('Server Error');
		} else if (res.status !== 200) {
			throw new Error('Request Failed');
		}
		return res;
	})
	.then(() => console.log('Success'))
	.catch((error) => console.log(error));
