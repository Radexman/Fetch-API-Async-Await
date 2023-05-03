// ============= 05 Fetch API Error Handling ============== //

// fetch('http://httpstat.us/200')
// 	.then((res) => {
// 		return res;
// 	})
// 	.then(() => console.log('sucess'));

// fetch('http://httpstat.us/404')
// 	.then((res) => {
// 		console.log(res.ok);
// 		return res;
// 	})
// 	.then(() => console.log('sucess'))
// 	.catch((error) => {
// 		console.log(error);
// 	});

// Catch runs on a network error
// fetch('http://hello123.net')
// 	.then((res) => {
// 		console.log(res.status);
// 		return res;
// 	})
// 	.then(() => console.log('sucess'))
// 	.catch((error) => {
// 		console.log(error);
// 	});
